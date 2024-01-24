#!/bin/bash
BRANCH=$(git branch --show-current | tail -n -1)
echo "$BRANCH"
git checkout main
git branch -D "$BRANCH"
