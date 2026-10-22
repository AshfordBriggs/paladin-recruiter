---
title: Clients
description: List the client companies your jobs come from.
subtitle: The companies your jobs are for.
sidebar:
  order: 3
verified: 2026-10-22
---

Teams that recruit for their own company see **Divisions** in the app; the
API calls them clients either way.

## List clients

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/clients</code><span class="pd-scope">read</span></div>

Every client, sorted by name. Not paged.

```json
{
  "data": [
    {
      "id": "7e6d5c4b-3a2f-4e1d-9c8b-7a6f5e4d3c2b",
      "name": "Northwind Freight",
      "website_url": "https://northwind.example.com",
      "linkedin_url": null,
      "created_at": "2026-09-12T13:00:51.300Z",
      "updated_at": "2026-09-12T13:00:51.300Z"
    }
  ]
}
```

## Get a client

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/clients/{id}</code><span class="pd-scope">read</span></div>

One client, with the same fields. To list a client's jobs, use
[`/jobs?client_id=`](../jobs/#list-jobs).
