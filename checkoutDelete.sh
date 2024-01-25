#!/bin/bash
BRANCH=$(git branch --show-current | tail -n -1)
git checkout main
git branch -D "$BRANCH"
git pull origin main
