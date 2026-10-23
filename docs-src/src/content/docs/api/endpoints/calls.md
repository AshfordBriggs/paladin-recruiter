---
title: Calls
description: List calls made and received through Paladin, and get a call's transcript and AI summary.
subtitle: Calls, transcripts and summaries.
sidebar:
  order: 6
verified: 2026-10-22
---

Calls are server-wide: every recruiter's calls, except calls with a candidate
the key can't see. Calls with callers nobody has named yet are included, with
"Unknown Caller" and the number as the candidate's name.

## List calls

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/calls</code><span class="pd-scope">read</span></div>

Newest first, by start time.

| Parameter | Description |
|---|---|
| `job_id` | Only calls about this job. |
| `candidate_id` | Only calls with this candidate. |
| `opportunity_id` | Only calls about this opportunity. |
| `recruiter_id` | Only this recruiter's calls. |
| `since` | Only calls that started at or after this UTC time. |
| `until` | Only calls that started before this UTC time. Must be after `since`. |
| `limit`, `offset` | See [Paging](../../conventions/#paging). |

:::tip
Calls placed from a phone rather than from the candidate's page often have
no `job` or `opportunity_id`. To find every call with a candidate about a
job, filter by `candidate_id` and match the job yourself.
:::

```json
{
  "data": [
    {
      "id": "4b5c6d7e-8f9a-4b0c-9d1e-2f3a4b5c6d7e",
      "direction": "outbound",
      "origin": "dashboard",
      "call_type": "candidate_screen",
      "connected": true,
      "candidate": { "id": "9e8d7c6b-5a4f-4e3d-8c2b-1a0f9e8d7c6b", "name": "Jordan Lee" },
      "job": { "id": "0b7d5e3c-2a1f-4c6e-9d8b-7a6f5e4d3c2b", "name": "Senior Logistics Coordinator" },
      "recruiter": { "id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a", "name": "Sam Carter" },
      "opportunity_id": "6c0e2f4a-1b3d-4e5f-8a7b-9c0d1e2f3a4b",
      "started_at": "2026-10-21T17:30:12.000Z",
      "ended_at": "2026-10-21T17:52:40.000Z",
      "duration_seconds": 1348,
      "outcome": "forwarded_to_client",
      "outcome_notes": null,
      "summary_status": "complete",
      "summarized_at": "2026-10-21T17:53:31.208Z",
      "created_at": "2026-10-21T17:30:11.502Z"
    }
  ],
  "total": 1, "limit": 100, "offset": 0, "has_more": false, "next_offset": null
}
```

| Field | Description |
|---|---|
| `direction` | `outbound` or `inbound`. `null` on older calls. |
| `origin` | `dashboard` (started from Paladin), `disa` (placed from the Paladin Dialer), or `passive_inbound` / `passive_outbound` (a call to or from a Paladin number that wasn't started in Paladin). |
| `call_type` | `candidate_screen`, `hiring_manager_hsk` (hiring-manager intake), `candidate_debrief` or `recruiter`. |
| `connected` | `true` when someone answered and talked. See below. |
| `started_at` | When the call was placed. Not proof that anyone answered. |
| `duration_seconds` | Length as the phone system recorded it. |
| `outcome` | Set by the recruiter after the call: `scheduled_next`, `forwarded_to_client`, `rejected`, `callback_requested` or `no_answer`. Usually `null`. |
| `summary_status` | `pending`, `complete` or `failed`. `null` when the call has no transcript. |

**What `connected` means.** A call is connected when it has a start time, a
duration above zero, and an outcome other than `no_answer`. A start time
alone isn't enough, because the phone system sets it as soon as the call is
placed, before anyone picks up. Paladin's Insights page and the
[metrics](../metrics/) use the same rule.

## Get a call

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/calls/{id}</code><span class="pd-scope">read</span></div>

One call, with the same fields.

## Get a call summary

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/calls/{id}/summary</code><span class="pd-scope">read</span></div>

```json
{
  "call_id": "4b5c6d7e-8f9a-4b0c-9d1e-2f3a4b5c6d7e",
  "status": "complete",
  "summary": "## Background\nJordan has run inbound freight for ...",
  "key_points": ["Available in two weeks", "Wants a hybrid schedule"],
  "action_items": ["Send the job description", "Book an interview with Dana"],
  "summarized_at": "2026-10-21T17:53:31.208Z"
}
```

- `summary` is Markdown. Render it, or strip the formatting for plain text.
- While the summary is being written, `status` is `pending`, `summary` is
  `null` and the lists are empty. Check again in a minute.
- A call with no transcript answers `404`.

## Get a call transcript

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/calls/{id}/transcript</code><span class="pd-scope">read</span></div>

```json
{
  "call_id": "4b5c6d7e-8f9a-4b0c-9d1e-2f3a4b5c6d7e",
  "stage": "final",
  "turns": [
    { "speaker": "recruiter", "text": "Hi Jordan, thanks for making time.", "at": "2026-10-21T17:30:20.000Z" },
    { "speaker": "candidate", "text": "Happy to. I've been looking forward to it.", "at": "2026-10-21T17:30:24.000Z" }
  ],
  "created_at": "2026-10-21T17:30:20.511Z"
}
```

- `speaker` is `recruiter` or `candidate`, or `unknown` when Paladin couldn't
  tell.
- While the call is live, `stage` is `during_call` and more turns keep
  arriving. Check again until it's `final`.
- Keep the turns in the order given. Don't re-sort them by `at`.
- A call answers `404` here until its first turn is transcribed.
