#!/bin/bash
git checkout -b "$1_$2"
cd "$1"
mkdir "$2"
cd "$2"
touch "$2".ts "$2".test.ts README.md
cd "../../"
ts-node ./getReadme.ts "$3" "$1/$2"
