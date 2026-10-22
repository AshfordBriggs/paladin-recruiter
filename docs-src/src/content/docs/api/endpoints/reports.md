---
title: Reports
description: List the candidate reports on an opportunity, and get a report as HTML or plain text.
subtitle: Candidate reports for hiring managers.
sidebar:
  order: 7
verified: 2026-10-22
---

A report is the write-up of a candidate for a hiring manager. Reports never
change once written, so they cache well.

## List an opportunity's reports

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/opportunities/{id}/reports</code><span class="pd-scope">read</span></div>

Newest first, without the report bodies. Not paged.

## Get a report

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/reports/{id}</code><span class="pd-scope">read</span></div>

```json
{
  "id": "2f3e4d5c-6b7a-4c8d-9e0f-1a2b3c4d5e6f",
  "opportunity_id": "6c0e2f4a-1b3d-4e5f-8a7b-9c0d1e2f3a4b",
  "call_id": "4b5c6d7e-8f9a-4b0c-9d1e-2f3a4b5c6d7e",
  "name": "Jordan Lee: Senior Logistics Coordinator",
  "style": "executive",
  "assessment": "strong",
  "ai_assessment": "strong",
  "model": "...",
  "created_at": "2026-10-21T18:05:44.630Z",
  "html_url": "/api/v1/reports/2f3e4d5c-6b7a-4c8d-9e0f-1a2b3c4d5e6f/html",
  "text_url": "/api/v1/reports/2f3e4d5c-6b7a-4c8d-9e0f-1a2b3c4d5e6f/text"
}
```

| Field | Description |
|---|---|
| `call_id` | The call the report was built from, or `null` when it was built from the opportunity's material without a call. |
| `style` | `brief`, `executive` or `full`. |
| `assessment` | The recruiter's verdict: `strong`, `possible` or `gaps`. `null` if not set. |
| `ai_assessment` | The AI's verdict, with the same values. |
| `html_url`, `text_url` | Paths to the report body. Add them to your Paladin address. |

## Get a report as HTML

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/reports/{id}/html</code><span class="pd-scope">read</span></div>

A complete HTML document with its own styles, and no scripts or outside
resources. To show it on your own page, put it in a sandboxed iframe so its
styles don't mix with yours:

```html
<iframe sandbox srcdoc="...the HTML from this endpoint..."></iframe>
```

## Get a report as text

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/reports/{id}/text</code><span class="pd-scope">read</span></div>

The same report as plain text, one line per paragraph or list item. Use it
for search, or to give to an AI model.

All three report routes send an [ETag](../../conventions/#caching) and can be
cached for a day.
