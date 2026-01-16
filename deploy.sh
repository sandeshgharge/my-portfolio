#!/bin/bash
set -e

npm run build

cd dist
git add .
git commit -m "Deploy $(date)"
git push origin main
