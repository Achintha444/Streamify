#!/bin/bash

# Check if PR number is provided
if [ -z "$1" ]; then
  echo "PR number is required"
  exit 1
fi

# Fetch the base branch of the PR
BASE_BRANCH=$(gh pr view $1 --json baseRefName -q .baseRefName)

# Get added and modified files
CHANGED_FILES=$(git diff --diff-filter=AM --name-only origin/$BASE_BRANCH HEAD | grep -E '\.(js|jsx|ts|tsx)$')

# Explicitly list the files if no files found
if [ -z "$CHANGED_FILES" ]; then
  echo "No files found. Debugging information:"
  echo "Base Branch: $BASE_BRANCH"
  echo "All changed files:"
  git diff --diff-filter=AM --name-only origin/$BASE_BRANCH HEAD
  
  # Try an alternative method
  ALTERNATIVE_FILES=$(git diff --name-only origin/$BASE_BRANCH HEAD)
  echo "Alternative file list:"
  echo "$ALTERNATIVE_FILES"
  
  exit 0
fi

# Run ESLint on changed files
echo "Linting changed files:"
echo "$CHANGED_FILES"
npx eslint $CHANGED_FILES
