---
title: Notes
description: Read the notes recruiters left on jobs, candidates and opportunities.
subtitle: What recruiters wrote down.
sidebar:
  order: 8
verified: 2026-10-22
---

## List notes on a record

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/jobs/{id}/notes</code><span class="pd-scope">read</span></div>
<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/candidates/{id}/notes</code><span class="pd-scope">read</span></div>
<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/opportunities/{id}/notes</code><span class="pd-scope">read</span></div>

Newest first. Not paged.

```json
{
  "data": [
    {
      "id": "8a9b0c1d-2e3f-4a5b-8c6d-7e8f9a0b1c2d",
      "entity_type": "opportunity",
      "entity_id": "6c0e2f4a-1b3d-4e5f-8a7b-9c0d1e2f3a4b",
      "author": { "id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a", "name": "Sam Carter" },
      "body": "Strong on carrier relationships. Wants to stay hybrid.",
      "created_at": "2026-10-21T18:01:09.311Z",
      "updated_at": "2026-10-21T18:01:09.311Z"
    }
  ]
}
```

| Field | Description |
|---|---|
| `entity_type` | `job`, `candidate` or `opportunity`. |
| `entity_id` | The record the note is on. |
| `author` | Who wrote it, or `null` if their account is gone. |
| `body` | Plain text. |

## Get a note

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/notes/{id}</code><span class="pd-scope">read</span></div>

One note, with the same fields.
