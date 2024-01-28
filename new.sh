#!/bin/bash
ts-node ./formNewKata.ts "$1"
BRANCH=$(ts-node ./getReadme.ts "$1" | tail -n -1)
git checkout -b "$BRANCH"
npm run count
