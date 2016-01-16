#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

mkdir deploy
cd deploy

git init
git config user.name "cjies"
git config user.email "cijies@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/cjies/cjies-v2.git"
git fetch upstream
git reset upstream/gh-pages

cp ../public ./public
cp ../index.html ./index.html
cp ../static/deploy ./

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages