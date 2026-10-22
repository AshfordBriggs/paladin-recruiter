---
title: Opportunities
description: List opportunities (one candidate on one job), and get one with its fit score, fit analysis, questions and call script.
subtitle: One candidate on one job.
sidebar:
  order: 5
verified: 2026-10-22
---

An opportunity is one candidate being considered for one job. It carries the
fit score, the AI's analysis, and the latest report.

## List opportunities

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/opportunities</code><span class="pd-scope">read</span></div>

| Parameter | Description |
|---|---|
| `job_id` | Only opportunities on this job. |
| `candidate_id` | Only this candidate's opportunities. |
| `status` | Exact match. Values in use: `new`, `analyzing`, `ready`, `error`, `submitted`, `interviewing`, `placed`, `rejected`. |
| `updated_since` | Only opportunities changed at or after this UTC time. |
| `include_archived` | `true` to include archived candidates. |
| `limit`, `offset` | See [Paging](../../conventions/#paging). |

```json
{
  "data": [
    {
      "id": "6c0e2f4a-1b3d-4e5f-8a7b-9c0d1e2f3a4b",
      "candidate": {
        "id": "9e8d7c6b-5a4f-4e3d-8c2b-1a0f9e8d7c6b",
        "name": "Jordan Lee",
        "first_name": "Jordan",
        "last_name": "Lee",
        "email": "jordan.lee@example.com",
        "phone": "+15555550123",
        "linkedin_url": "https://www.linkedin.com/in/example",
        "status": "in_progress"
      },
      "job": { "id": "0b7d5e3c-2a1f-4c6e-9d8b-7a6f5e4d3c2b", "name": "Senior Logistics Coordinator" },
      "status": "submitted",
      "fit_score": 84,
      "ai_fit_score": 78,
      "analysis_status": "ready",
      "analysis_error": null,
      "latest_report_id": "2f3e4d5c-6b7a-4c8d-9e0f-1a2b3c4d5e6f",
      "last_call_at": "2026-10-21T17:30:12.000Z",
      "created_at": "2026-10-02T16:50:03.411Z",
      "updated_at": "2026-10-21T19:12:45.902Z"
    }
  ],
  "total": 1, "limit": 100, "offset": 0, "has_more": false, "next_offset": null
}
```

| Field | Description |
|---|---|
| `fit_score` | The score to show, 0 to 100: the recruiter's own score if they set one, otherwise the AI's. `null` if neither exists. |
| `ai_fit_score` | The AI's score alone. If it differs from `fit_score`, a recruiter overrode it. |
| `analysis_status` | `ready`, `running`, `error` or `none`. |
| `analysis_error` | Why the analysis failed, when `analysis_status` is `error`. |
| `latest_report_id` | The newest [report](../reports/), or `null`. |
| `last_call_at` | When the latest call linked to this opportunity started, or `null`. |

## Get an opportunity

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/opportunities/{id}</code><span class="pd-scope">read</span></div>

Every field above, plus `analysis` (`null` unless `analysis_status` is
`ready`). Sends an [ETag](../../conventions/#caching).

| Field | Description |
|---|---|
| `analysis.fit_score` | The AI's score. |
| `analysis.fitment` | `overall_fit_score`, `summary`, `strengths` (area, evidence, relevance), `gaps` (area, concern, mitigation, severity), `red_flags` (flag, detail, suggested_probe), `talking_points`, `culture_fit_notes`. |
| `analysis.questions` | `must_ask`, and `if_concerned`: questions with the `trigger` that should prompt each one. |
| `analysis.call_script` | The screening call plan: `total_duration_minutes`, `opening`, `sections` of questions, and `close`. |
| `analysis.model`, `analysis.generated_at` | Which model wrote it, and when. |

Reports for an opportunity: see [Reports](../reports/). Notes: see
[Notes](../notes/).
