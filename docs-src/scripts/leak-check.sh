#!/usr/bin/env bash
# Fails (exit 1) if the docs source contains something confidential before it
# is published. Generic shapes are built in; names, hosts and vendors come
# from the paladin-docs denylist, which never lives in this public repo.
# Reads $LEAK_DENYLIST if set, else ~/paladin-docs/tools/high-level-docs-denylist.txt
# (John's checkout).
set -u
cd "$(dirname "$0")/.."
files=$(find src TEMPLATE.md astro.config.mjs -type f \( -name '*.md' -o -name '*.mdx' -o -name '*.astro' -o -name '*.mjs' -o -name '*.ts' -o -name '*.css' \))

status=0
report() { echo "LEAK ($1):"; echo "$2" | sed 's/^/  /'; status=1; }

hits=$(grep -nE '\b[0-9]{1,3}(\.[0-9]{1,3}){3}\b' $files | grep -vE '\b(127\.0\.0\.1|0\.0\.0\.0)\b')
[ -n "$hits" ] && report "IPv4 address" "$hits"

hits=$(grep -nE '(\+1[0-9]{10}|\(?[0-9]{3}\)?[-. ][0-9]{3}[-. ][0-9]{4})\b' $files)
[ -n "$hits" ] && report "phone number" "$hits"

hits=$(grep -nEi '(sk-ant-|sk-[A-Za-z0-9]{20,}|BEGIN [A-Z ]*PRIVATE KEY|Bearer [A-Za-z0-9._-]{20,})' $files)
[ -n "$hits" ] && report "credential shape" "$hits"

hits=$(grep -nEi '([a-z0-9-]+\.)+ashfordbriggs\.(com|org)|\.ts\.net\b' $files)
[ -n "$hits" ] && report "hostname" "$hits"

deny="${LEAK_DENYLIST:-$HOME/paladin-docs/tools/high-level-docs-denylist.txt}"
if [ -f "$deny" ]; then
  pattern=$(grep -vE '^\s*(#|$)' "$deny" | paste -sd'|' -)
  if [ -n "$pattern" ]; then
    hits=$(grep -nEi "$pattern" $files)
    [ -n "$hits" ] && report "denylisted term" "$hits"
  fi
else
  echo "leak-check: no denylist at $deny; set LEAK_DENYLIST. Failing closed." >&2
  status=1
fi

[ $status -eq 0 ] && echo "leak-check: clean"
exit $status
