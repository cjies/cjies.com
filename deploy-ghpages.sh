#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

# Clear and re-create the deploy directory
rm -rf deploy || exit 0;
mkdir deploy

# Run Build
npm run build
cp -r ./public ./deploy/public
cp ./static/deploy ./deploy
cp ./index.html ./deploy/index.html

# Git Init
cd deploy
git init
git config user.name "cjies"
git config user.email "cijies@gmail.com"

# Git Commit
git add .
git commit -m "rebuild pages at ${rev}"

# Git Push
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
