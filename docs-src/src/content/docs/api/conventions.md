---
title: Conventions
description: JSON format, timestamps, ids, paging, sorting, filters and caching in the Paladin API.
subtitle: JSON, paging, filters and caching.
sidebar:
  order: 3
  attrs:
    data-icon: braces
verified: 2026-10-22
---

## JSON

- Keys are `snake_case`, and so are enumerated values, such as
  `candidate_screen`.
- Empty fields are `null`, never left out and never an empty string.
- Ids are UUIDs.
- Timestamps are UTC, ISO 8601, with milliseconds:
  `2026-10-17T18:28:03.412Z`. Send times in query parameters as UTC with a
  `Z`; a time without a zone is read in the server's own time zone.

## Paging

Lists take `limit` (1 to 500, default 100) and `offset` (default 0). A value
outside those ranges is a `400`, not quietly corrected.

```json
{
  "data": [ ... ],
  "total": 212,
  "limit": 100,
  "offset": 0,
  "has_more": true,
  "next_offset": 100
}
```

To read everything, keep requesting with `offset=next_offset` until
`has_more` is `false`. `next_offset` is `null` on the last page.

A few short lists, such as the notes on one record, aren't paged and return
only `{ "data": [ ... ] }`.

## Order

Lists are newest first, by `updated_at`. Calls are newest first by start
time. The [change feed](../change-feed/) is oldest first.

## Filters

- `status` filters match the exact string. An unknown status returns an
  empty page, not an error.
- `updated_since`, `since` and `until` take UTC times.
- Archived candidates are left out of lists unless you add
  `include_archived=true`.

## Caching

These routes send an `ETag`:

| Route | Cache-Control |
|---|---|
| `/jobs/{id}`, `/candidates/{id}`, `/opportunities/{id}` | `private, no-cache` |
| `/reports/{id}`, `/reports/{id}/html`, `/reports/{id}/text` | `private, max-age=86400` |
| `/openapi.json` | `private, max-age=300` |

Send the ETag back as `If-None-Match`. If nothing changed, you get a `304`
with no body, which is quicker for you and lighter on the server. Reports
never change once written.

Metrics are computed at most once a minute for the same range. See
[Metrics](../endpoints/metrics/).
