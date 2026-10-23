#!/usr/bin/env bash
# Exit 1 if docs/ was not rebuilt after the last change to docs-src/.
# Run before pushing to or merging into main.
set -euo pipefail
cd "$(dirname "$0")/.."
want=$(./scripts/source-hash.sh)
have=$(cat ../docs/.source-hash 2>/dev/null || echo none)
if [ "$want" != "$have" ]; then
  echo "check-published: docs/ is stale (built from $have, source is $want). Run: npm run publish" >&2
  exit 1
fi
[ -f ../.nojekyll ] || { echo "check-published: .nojekyll missing at repo root. Run: npm run publish" >&2; exit 1; }
echo "check-published: docs/ matches docs-src ($want)"
