---
title: API overview
description: The Paladin API gives your own systems read access to your Paladin server's jobs, candidates, calls, transcripts, reports and metrics.
subtitle: Read your Paladin data from your own systems.
sidebar:
  label: Overview
verified: 2026-10-22
---

The Paladin API lets your own systems read what's on your Paladin server:
jobs, clients, candidates, opportunities, calls with their transcripts and
summaries, candidate reports, notes, and activity metrics. Use it to sync
Paladin into your own database, feed internal or client-facing dashboards, or
give an AI agent you run something to look things up in.

:::note[Read-only]
Version 1 of the API is read-only. Every endpoint is a `GET`.
:::

## Base URL

The API lives at the same address you sign in to Paladin at, under
`/api/v1`. In these docs, replace `yourcompany.example.com` with that address.

```
https://yourcompany.example.com/api/v1
```

## Make your first request

1. Ask a Paladin admin for an API key. Admins create them under
   **Profile** → **API keys**. See [Authentication](authentication/).
2. Call `/me` with the key. It shows the key, the recruiter it acts as, the
   server's clock, and your limits.

```bash
curl https://yourcompany.example.com/api/v1/me \
  -H "Authorization: Bearer $PALADIN_API_KEY"
```

## What you can read

| Resource | What it is | Scope |
|---|---|---|
| [Jobs](endpoints/jobs/) | Roles being recruited for, with their AI job profile | `read` |
| [Clients](endpoints/clients/) | The client companies jobs come from | `read` |
| [Candidates](endpoints/candidates/) | People, with their AI-extracted profile | `read` |
| [Opportunities](endpoints/opportunities/) | One candidate on one job, with fit score and analysis | `read` |
| [Calls](endpoints/calls/) | Calls through Paladin, with transcripts and summaries | `read` |
| [Reports](endpoints/reports/) | Candidate reports for hiring managers, as HTML or text | `read` |
| [Notes](endpoints/notes/) | Notes recruiters left on jobs, candidates and opportunities | `read` |
| [Metrics](endpoints/metrics/) | Recruiter and job activity numbers | `metrics` |
| [Changes](change-feed/) | What changed since your last poll | `read` |

## The OpenAPI document

The complete contract, with every field described, is at
`/api/v1/openapi.json`. It needs a key like every other route, so fetch it
with a tool rather than your browser's address bar:

```bash
curl https://yourcompany.example.com/api/v1/openapi.json \
  -H "Authorization: Bearer $PALADIN_API_KEY" \
  -o paladin-openapi.json
```

Give it to a client generator, or to your AI agent so it knows every route
and field.

## Call it from your server

Call the API from your own backend, not from a web page. Browsers block
pages on other sites from calling it, and a key in a web page is a key anyone
can copy.

## Not available yet

- **Writes.** The **Write** scope is reserved; no endpoint changes data yet.
- **MCP.** A Model Context Protocol endpoint for AI agents is planned. Until
  then, give your agent the OpenAPI document and a read-only key.
