---
title: Candidates
description: List candidates, get one candidate with their AI-extracted profile, and list the jobs a candidate is on.
subtitle: People, and what Paladin knows about them.
sidebar:
  order: 4
verified: 2026-10-22
---

Candidates follow the recruiter the key acts as: the shared candidates plus
that recruiter's private ones. See [Acts as](../../authentication/#acts-as).
Callers nobody has named yet ("Unknown Caller") never appear here.

## List candidates

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/candidates</code><span class="pd-scope">read</span></div>

| Parameter | Description |
|---|---|
| `status` | Exact match. Values in use: `new`, `ready_for_call`, `in_progress`, `completed`, `rejected`. |
| `updated_since` | Only candidates changed at or after this UTC time. |
| `include_archived` | `true` to include archived candidates. |
| `limit`, `offset` | See [Paging](../../conventions/#paging). |

```json
{
  "data": [
    {
      "id": "9e8d7c6b-5a4f-4e3d-8c2b-1a0f9e8d7c6b",
      "first_name": "Jordan",
      "last_name": "Lee",
      "email": "jordan.lee@example.com",
      "phone": "+15555550123",
      "linkedin_url": "https://www.linkedin.com/in/example",
      "status": "in_progress",
      "owner": { "id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a", "name": "Sam Carter" },
      "acquired_via": "sourced",
      "archived_at": null,
      "created_at": "2026-10-02T16:45:10.882Z",
      "updated_at": "2026-10-21T18:02:37.129Z"
    }
  ],
  "total": 1, "limit": 100, "offset": 0, "has_more": false, "next_offset": null
}
```

| Field | Description |
|---|---|
| `phone` | E.164 format, for example `+15555550123`. |
| `owner` | The recruiter who set the candidate up, or `null` (for example, an import). |
| `acquired_via` | How they came in. Values in use: `referral`, `inbound`, `sourced`, `import`. |
| `archived_at` | When the candidate was archived, or `null`. |

## Get a candidate

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/candidates/{id}</code><span class="pd-scope">read</span></div>

Every field above, plus `profile`: what Paladin extracted from the résumé and
other material. Sends an [ETag](../../conventions/#caching). Archived
candidates are still returned here.

```json
"profile": {
  "profile": {
    "personal": { ... },
    "work_experience": [ ... ],
    "education": [ ... ],
    "skills": { ... },
    "projects": [ ... ],
    "conflicts": [ ... ],
    "confidence_score": 0.88
  },
  "confidence": 0.88,
  "updated_at": "2026-10-02T16:47:31.540Z"
}
```

Treat `profile.profile` as free-form JSON; it's generated and can grow.

## List a candidate's opportunities

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/candidates/{id}/opportunities</code><span class="pd-scope">read</span></div>

Every job this candidate is being considered for, as
[opportunities](../opportunities/). Takes `status`, `limit` and `offset`.

Calls with a candidate: [`/calls?candidate_id=`](../calls/#list-calls).
Notes: see [Notes](../notes/).
