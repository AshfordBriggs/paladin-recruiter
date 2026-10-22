---
title: Jobs
description: List jobs, get one job with its AI job profile, and list the candidates on a job.
subtitle: Roles being recruited for.
sidebar:
  order: 2
verified: 2026-10-22
---

Jobs are server-wide: every key sees every job. Teams that recruit for their
own company call jobs **Roles** in the app; the API calls them jobs either
way.

## List jobs

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/jobs</code><span class="pd-scope">read</span></div>

| Parameter | Description |
|---|---|
| `client_id` | Only jobs for this client. |
| `status` | Exact match. Values in use: `active`, `paused`, `filled`, `closed`. |
| `updated_since` | Only jobs changed at or after this UTC time. |
| `limit`, `offset` | See [Paging](../../conventions/#paging). |

```json
{
  "data": [
    {
      "id": "0b7d5e3c-2a1f-4c6e-9d8b-7a6f5e4d3c2b",
      "title": "Senior Logistics Coordinator",
      "status": "active",
      "description": "Coordinate inbound and outbound freight for ...",
      "job_post_url": "https://careers.example.com/jobs/1234",
      "client": { "id": "7e6d5c4b-3a2f-4e1d-9c8b-7a6f5e4d3c2b", "name": "Northwind Freight" },
      "hiring_manager": {
        "id": null,
        "name": "Dana Whitfield",
        "email": "dana@northwind.example.com",
        "phone": null,
        "title": "Director of Operations"
      },
      "owner": { "id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a", "name": "Sam Carter" },
      "requirements": { "must_have": ["3+ years in freight coordination"], "nice_to_have": ["TMS experience"] },
      "candidate_count": 14,
      "created_at": "2026-09-30T15:12:44.031Z",
      "updated_at": "2026-10-21T19:40:02.517Z"
    }
  ],
  "total": 1, "limit": 100, "offset": 0, "has_more": false, "next_offset": null
}
```

| Field | Description |
|---|---|
| `status` | Set by the recruiter. Values in use: `active`, `paused`, `filled`, `closed`. |
| `client` | The client company, or `null` for an internal role. |
| `hiring_manager` | The hiring manager. `id` is `null` when only a name and contact details were typed on the job. |
| `owner` | The recruiter who owns the job, or `null` for older jobs. |
| `requirements` | Structured requirements when the recruiter recorded them, usually `must_have` and `nice_to_have`. Otherwise `null`. |
| `candidate_count` | Candidates on this job that the key can see, not counting archived ones. |

## Get a job

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/jobs/{id}</code><span class="pd-scope">read</span></div>

Every field above, plus `profile`: the job profile Paladin's AI extracted from
the description. Sends an [ETag](../../conventions/#caching).

```json
"profile": {
  "profile": { "company": { ... }, "job_analysis": { ... } },
  "confidence": 0.92,
  "model": "...",
  "updated_at": "2026-10-01T09:22:10.004Z"
}
```

`profile.profile` is generated and its shape can grow, so treat it as
free-form JSON. Today it has `company` and `job_analysis`: role summary,
responsibilities, must-have and nice-to-have requirements, and compensation
and location when the description gives them. `profile` is `null` until one
has been generated.

## List the candidates on a job

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/jobs/{id}/candidates</code><span class="pd-scope">read</span></div>

The candidates being considered for this job, as
[opportunities](../opportunities/): the rows for a hiring manager's dashboard.
`/api/v1/jobs/{id}/opportunities` returns the same thing.

| Parameter | Description |
|---|---|
| `status` | Exact match on the opportunity status, for example `submitted`. |
| `include_archived` | `true` to include archived candidates. |
| `limit`, `offset` | See [Paging](../../conventions/#paging). |

Notes on a job: see [Notes](../notes/).
