---
title: Errors
description: The Paladin API's error format and status codes.
subtitle: One error format, and what each status means.
sidebar:
  order: 5
  attrs:
    data-icon: alert
verified: 2026-10-22
---

Every error has the same body, with a message written to be read:

```json
{ "message": "limit must be between 1 and 500 (default 100)." }
```

| Status | Meaning |
|---|---|
| `304` | Not modified. Your `If-None-Match` ETag is current. |
| `400` | A parameter is missing, malformed, or out of range. The message names it. |
| `401` | No key, or a key that's wrong, expired or revoked. Also sends `WWW-Authenticate`. |
| `403` | The key doesn't have the scope this route needs. |
| `404` | No such route, no such record, or a record the key's recruiter can't see. Ids are UUIDs, so a malformed id is a `404` too. |
| `405` | A method other than `GET`. The API is read-only. |
| `429` | Over a limit. Wait `Retry-After` seconds. See [Limits](../limits/). |

A `404` for a record the key can't see is deliberate: the API doesn't say
whether a hidden record exists. See [Acts as](../authentication/#acts-as).
