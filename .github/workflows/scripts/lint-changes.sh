#!/bin/bash

# Check if PR number is provided
if [ -z "$1" ]; then
  echo "PR number is required"
  exit 1
fi

# Get the added and modified files for the PR
CHANGED_FILES=$(gh pr diff $1 --name-only --diff-filter=AM | grep '\.js$\|\.jsx$\|\.ts$\|\.tsx$')

# If no changed files, exit successfully
if [ -z "$CHANGED_FILES" ]; then
  echo "No JavaScript/TypeScript files added or modified"
  exit 0
fi

# Run ESLint on changed files
echo "Linting changed files:"
echo "$CHANGED_FILES"
npx eslint $CHANGED_FILES
