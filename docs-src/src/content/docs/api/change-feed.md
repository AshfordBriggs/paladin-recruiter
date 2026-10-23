---
title: Change feed
description: Keep your own copy of Paladin data current by polling the change feed instead of re-reading every list.
subtitle: Keep your copy current without re-reading everything.
sidebar:
  order: 6
  attrs:
    data-icon: refresh
verified: 2026-10-22
---

The change feed lists what was created or updated since your last poll,
oldest first. Read everything once, then poll the feed every 30 to 60
seconds and fetch only what changed.

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/changes</code><span class="pd-scope">read</span></div>

| Parameter | Description |
|---|---|
| `since` | UTC time to start from. Use it only on the first poll. |
| `cursor` | The `next_cursor` from your last poll. Use it on every poll after the first. |
| `limit` | 1 to 1000, default 200. |

## Keep in sync

1. Call [`/me`](../endpoints/me/) and keep `server.time`.
2. Read the lists you need, such as `/jobs` and `/opportunities`, page by page.
3. Poll `/changes?since=<server.time>`.
4. For each row, fetch the record it points to and update your copy. If that
   returns `404`, the key can't see the record; skip it.
5. Save `next_cursor`. If `has_more` is `true`, poll again straight away with
   `cursor=<next_cursor>`. Otherwise wait 30 to 60 seconds.

Start from the server's clock, not yours, so a difference between the two
clocks can't make you miss a change.

## Response

```json
{
  "data": [
    {
      "type": "opportunity",
      "id": "6c0e2f4a-1b3d-4e5f-8a7b-9c0d1e2f3a4b",
      "kind": "updated",
      "at": "2026-10-22T14:03:51.220Z",
      "job_id": "0b7d5e3c-2a1f-4c6e-9d8b-7a6f5e4d3c2b",
      "candidate_id": "9e8d7c6b-5a4f-4e3d-8c2b-1a0f9e8d7c6b",
      "opportunity_id": null
    }
  ],
  "next_cursor": "djF8NjM4OTYzOTk4MzEyMjAwMDAwfDM",
  "has_more": false
}
```

| Field | Description |
|---|---|
| `type` | `job`, `candidate`, `opportunity`, `call`, `report` or `note`. Fetch the record from the matching route, for example `/opportunities/{id}`. |
| `kind` | `created` or `updated`. |
| `at` | When it changed, UTC. |
| `job_id`, `candidate_id`, `opportunity_id` | The records this one belongs to, where they apply, so you can refresh the right view without fetching first. |
| `next_cursor` | Always present. Save it, even when `data` is empty. |
| `has_more` | `true` when there's more to read now. |

## Good to know

- **Calls** show up as `created` when they start and `updated` when they end.
  A summary finishing later doesn't add a row, so after a call ends, check
  [`/calls/{id}/summary`](../endpoints/calls/#get-a-call-summary) until its
  `status` is `complete`.
- **Reports** only ever appear as `created`. Reports don't change.
- A page can hold slightly more rows than `limit`, so that changes made at
  the same moment are never split across two pages.
- The cursor is opaque. Store it as is. A cursor this server didn't issue is a
  `400`; start again with `since`.
