---
title: Metrics
description: Recruiter and job activity numbers from the Paladin API, the same numbers as Paladin's Insights page.
subtitle: Activity numbers for recruiters and jobs.
sidebar:
  order: 9
verified: 2026-10-22
---

These need a key with the `metrics` scope. They're the same numbers as
Paladin's **Insights** page, computed the same way.

Both take a time range:

| Parameter | Description |
|---|---|
| `from` | Start, UTC, inclusive. Default: 30 days before `to`. |
| `to` | End, UTC, exclusive. Default: now. Must be after `from`. |

Results are computed at most once a minute for the same range. With the
default range, every request in the same minute gets the same answer, and
`to` in the response says when it was computed. Polling more than once a
minute doesn't get you fresher numbers.

## Recruiter metrics

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/metrics/recruiters</code><span class="pd-scope">metrics</span></div>

Every recruiter, sorted by name, with totals.

```json
{
  "from": "2026-09-22T14:05:00.000Z",
  "to": "2026-10-22T14:05:00.000Z",
  "totals": {
    "call_count": 412,
    "connected_count": 238,
    "talk_seconds": 301440,
    "summaries_completed": 225,
    "reports_generated": 61,
    "candidates_added": 97,
    "active_recruiters": 4
  },
  "recruiters": [
    {
      "recruiter_id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a",
      "name": "Sam Carter",
      "role": "recruiter",
      "call_count": 133,
      "connected_count": 81,
      "talk_seconds": 102300,
      "avg_call_seconds": 769,
      "outcomes": { "scheduled_next": 12, "forwarded_to_client": 9, "no_answer": 20 },
      "inbound_calls": 31,
      "outbound_calls": 102,
      "disa_calls": 40,
      "summaries_completed": 77,
      "reports_generated": 22,
      "candidates_added": 35,
      "last_activity_at": "2026-10-22T13:48:02.117Z"
    }
  ]
}
```

| Field | Description |
|---|---|
| `call_count` | Calls created in the range. |
| `connected_count` | Of those, calls where someone answered and talked. See [`connected`](../calls/#list-calls). |
| `talk_seconds` | Total call time over every call, connected or not. |
| `outcomes` | Calls by the outcome the recruiter recorded. |
| `disa_calls` | Calls placed from the Paladin Dialer. |
| `reports_generated` | Reports built from a call. |

## Job metrics

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/metrics/jobs</code><span class="pd-scope">metrics</span></div>

Every job, sorted by title. Also takes `status` to filter jobs, for example
`status=active`.

```json
{
  "from": "2026-09-22T14:05:00.000Z",
  "to": "2026-10-22T14:05:00.000Z",
  "jobs": [
    {
      "job_id": "0b7d5e3c-2a1f-4c6e-9d8b-7a6f5e4d3c2b",
      "title": "Senior Logistics Coordinator",
      "status": "active",
      "client": { "id": "7e6d5c4b-3a2f-4e1d-9c8b-7a6f5e4d3c2b", "name": "Northwind Freight" },
      "candidates": 14,
      "analyzed": 12,
      "status_counts": { "ready": 8, "scheduled": 3, "completed": 2 },
      "calls_in_range": 22,
      "reports_in_range": 6,
      "last_activity_at": "2026-10-21T19:40:02.517Z"
    }
  ]
}
```

| Field | Description |
|---|---|
| `candidates` | Candidates on the job now, whatever the range. Not counting archived ones. |
| `analyzed` | Of those, how many have an AI analysis. |
| `status_counts` | Candidates on the job by opportunity status. |
| `calls_in_range` | Calls about this job in the range. |
| `reports_in_range` | Every report in the range, including ones not built from a call, so it can be higher than the recruiter total. |
