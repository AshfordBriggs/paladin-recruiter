---
title: Limits
description: Per-key request limits, the server-wide limit, and how to handle a 429 from the Paladin API.
subtitle: How much you can ask for, and what to do with a 429.
sidebar:
  order: 4
  attrs:
    data-icon: gauge
verified: 2026-10-22
---

Your Paladin server also carries your team's live calls, so the API is
limited to keep those safe. There are three limits.

## Per key: 300 requests a minute

Each key can make 300 requests in each clock minute (UTC). Every response
tells you where you stand:

| Header | Meaning |
|---|---|
| `RateLimit-Limit` | Requests allowed this minute |
| `RateLimit-Remaining` | Requests left this minute |
| `RateLimit-Reset` | Seconds until the minute turns over |

Over the limit, you get a `429` with `Retry-After` set to the seconds left in
the minute. `/me` shows the key's limit under `limits.requests_per_minute`.

## Per server: 8 at once

Across every key, at most 8 API requests run at once and 16 more may wait
their turn. Beyond that, the server answers `429` with `Retry-After: 1`
straight away. That `429` doesn't count against your key and carries no
`RateLimit-*` headers.

Keep to one request in flight at a time. A sync that fans out many requests
in parallel will hit this limit first.

## Bad keys: 60 a minute per address

If more than 60 requests with a bad key come from one address in a minute,
that address gets `429` with `Retry-After: 60` for every key, valid ones too,
until the minute is up.

## Handle a 429

1. Wait for the number of seconds in `Retry-After`.
2. Retry the same request.
3. If you hit limits often, poll less. Use the [change feed](../change-feed/)
   instead of re-reading lists, and send `If-None-Match` with
   [ETags](../conventions/#caching).

:::note
`/me` also shows an `ai` block under `limits`. It's for future endpoints
that use AI. No endpoint uses it today.
:::
