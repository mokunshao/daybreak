#!/usr/bin/env sh
set -e
yarn docz:build
cd .docz/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:mokunshao/daybreak.git master:gh-pages
cd -