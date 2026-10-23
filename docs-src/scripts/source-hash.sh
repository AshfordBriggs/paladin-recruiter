#!/usr/bin/env bash
# Prints one hash over everything the docs build reads. publish.sh stamps it
# into docs/.source-hash; check-published.sh compares.
set -euo pipefail
cd "$(dirname "$0")/.."
find src public astro.config.mjs package.json package-lock.json -type f | LC_ALL=C sort \
  | while read -r f; do printf '%s\n' "$f"; cat "$f"; done | shasum -a 256 | cut -c1-16
