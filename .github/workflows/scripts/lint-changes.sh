#!/bin/bash

# Inputs
GITHUB_PR_NUMBER=$1

# Supported file extensions for ESLint
ESLINT_SUPPORTED_EXT=(js jsx ts tsx)

# Maximum number of files to lint in a batch
MAX_FILE_THRESHOLD_FOR_LINTER=30

# Check relevant packages are available
command -v npm >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'npm'.  Aborting as not found."; exit 1; }
command -v gh >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'gh' to call GitHub APIs.  Aborting as not found."; exit 1; }

# Get the repository root directory
REPO_ROOT=$(git rev-parse --show-toplevel)

# Get changed files from the PR
raw_changed_files=$(gh pr diff "$GITHUB_PR_NUMBER" --name-only)
changed_files=()
supported_files=()

# Convert the multiline string to an array
while read -r file; do
   changed_files+=("$file")
done <<< "$raw_changed_files"

# Filter files with supported extensions
for file in "${changed_files[@]}"; do
    for ext in "${ESLINT_SUPPORTED_EXT[@]}"; do
        if [[ $file == *.$ext ]]; then
            # Use absolute path
            supported_files+=("$REPO_ROOT/$file")
            break
        fi
    done
done

# Print changed files
echo -e "\n============ 💥 Here's what changed in PR#$GITHUB_PR_NUMBER 💥 ============\n"
for file in "${supported_files[@]}"; do
    echo -e "   - $file"
done
echo -e "\n 🔢 Total number of changed files: ${#supported_files[@]}"
echo -e "\n=============================================================\n"

# Exit if no supported files
if [[ ${#supported_files[@]} -eq 0 ]]; then
    echo "No supported files to lint"
    exit 0
fi

# Lint files
echo -e "\n 🥬 Starting analyzing the changed files with ESLint.. \n"

# Variable to track if any linting errors occur
lint_errors=false

# Lint files in batches
for ((i=0; i < ${#supported_files[@]}; i+=MAX_FILE_THRESHOLD_FOR_LINTER))
do
    chunk=( "${supported_files[@]:i:MAX_FILE_THRESHOLD_FOR_LINTER}" )
    
    # Prepare file list for linting
    if [[ ${#chunk[@]} -gt 0 ]]; then
        echo -e "\n 🔥 Linting batch $((i/MAX_FILE_THRESHOLD_FOR_LINTER + 1))... \n"
        
        # Run ESLint with absolute paths
        npx eslint "${chunk[@]}"
        
        # Capture the exit status of ESLint
        if [ $? -ne 0 ]; then
            lint_errors=true
        fi
    fi
done

# Exit with status based on linting results
if [ "$lint_errors" = true ]; then
    echo -e "\n❌ Linting failed. Please fix the errors above.\n"
    exit 1
else
    echo -e "\n✅ Linting passed. No errors found.\n"
    exit 0
fi
