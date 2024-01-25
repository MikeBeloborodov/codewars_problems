#!/bin/bash
BRANCH=$(git branch --show-current | tail -n -1)
git add .
git commit -m "$1"
git push origin "$BRANCH"
