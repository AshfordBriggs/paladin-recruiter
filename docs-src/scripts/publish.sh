#!/usr/bin/env bash
# Builds the user docs (FEAT-131) into ../docs, which GitHub Pages serves from
# main at paladinrecruiter.com/docs. Pages runs in legacy mode with no build
# step, so the built output is committed. Run this, then commit docs/ with
# the docs-src/ change, before anything merges to main.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build            # prebuild runs the leak check; fails closed without the denylist
rm -rf ../docs
cp -R dist ../docs
touch ../.nojekyll       # without it Pages skips _astro/ and the site has no CSS or JS
./scripts/source-hash.sh > ../docs/.source-hash
echo "publish: docs/ rebuilt from docs-src ($(cat ../docs/.source-hash)). Commit docs/ and .nojekyll."
