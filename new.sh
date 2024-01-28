#!/bin/bash
BRANCH=$(ts-node ./formNewKata.ts "$1" | tail -n -1)
git checkout -b "$BRANCH"
npm run count
