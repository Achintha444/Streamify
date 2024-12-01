#!/bin/bash

# Check if PR number is provided
if [ -z "$1" ]; then
  echo "PR number is required"
  exit 1
fi

# Fetch the base branch of the PR
BASE_BRANCH=$(gh pr view $1 --json baseRefName -q .baseRefName)

# Get added and modified files
CHANGED_FILES=$(git diff --diff-filter=AM --name-only origin/$BASE_BRANCH HEAD | grep '\.js$\|\.jsx$\|\.ts$\|\.tsx$')

# If no changed files, exit successfully
if [ -z "$CHANGED_FILES" ]; then
  echo "No JavaScript/TypeScript files added or modified"
  exit 0
fi

# Run ESLint on changed files
echo "Linting changed files:"
echo "$CHANGED_FILES"
npx eslint $CHANGED_FILES
