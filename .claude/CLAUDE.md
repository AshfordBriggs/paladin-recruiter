# paladinrecruiter.com

Public marketing site plus the user docs (FEAT-131). GitHub Pages serves
`main` at `/` in legacy mode: **no build step runs on GitHub**, so whatever is
committed is what's live.

## The docs (`docs-src/` → `docs/`)

- Source: `docs-src/` (Astro Starlight). Rules for pages: `docs-src/TEMPLATE.md`
  and the FEAT-131 spec in paladin-docs (`features/feat-131-user-docs-site.md`).
- Built output: `docs/` plus `.nojekyll` at the repo root, both committed.
  Never edit `docs/` by hand.

**Every change that will reach `main` runs the publish step first**, whether
or not you touched docs-src (a branch can carry docs-src changes from
earlier commits):

```
cd docs-src
npm run check-published   # exit 1 = docs/ is stale
npm run publish           # leak check, build, copy dist/ to ../docs, stamp
```

Then commit `docs/` and `.nojekyll` in the same PR as the source change.
`publish` needs Node >= 22.23 (`PATH=/opt/homebrew/bin:$PATH` on John's Mac;
nvm's 20.x is too old) and the denylist in `~/paladin-docs` (the leak check
fails closed without it). Don't run `npm install` unless dependencies changed.

After a merge to main, check `/docs/`, `/dialer`, `/john-evans` and
`/commission.html` load on paladinrecruiter.com.

## When the product ships

Docs track **production**. After a prod release of paladin-recruiter-interface,
paladin-call-console or paladin-dialer, find the pages whose `features:` front
matter lists a shipped FEAT id (`grep -rl FEAT-NNN docs-src/src/content`),
re-verify them against `origin/main` of the code, bump `verified:`, then
publish as above.

## Git

Feature branches only (branch names carry the item id, e.g.
`feat-131-user-docs`). John merges PRs; open them with `gh pr create --web`.
Commit as j-east with a Claude co-author trailer.
