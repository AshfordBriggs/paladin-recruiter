---
title: Me
description: Check your Paladin API key, the recruiter it acts as, the server's clock, and your limits.
subtitle: Check your key, and get the server's clock.
sidebar:
  order: 1
verified: 2026-10-22
---

Make this your first call. It confirms the key works, and `server.time` is
where your [change feed](../../change-feed/) should start.

<div class="pd-endpoint"><span class="pd-method">GET</span><code>/api/v1/me</code><span class="pd-scope">any</span></div>

```bash
curl https://yourcompany.example.com/api/v1/me \
  -H "Authorization: Bearer $PALADIN_API_KEY"
```

```json
{
  "key": {
    "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    "name": "Backend sync",
    "scopes": ["read", "metrics"],
    "expires_at": null
  },
  "acts_as": { "id": "5d4c3b2a-1f0e-4d9c-8b7a-6f5e4d3c2b1a", "name": "Sam Carter" },
  "server": { "slug": "yourcompany", "time": "2026-10-22T14:05:09.118Z" },
  "limits": {
    "requests_per_minute": 300,
    "ai": { "window_hours": 5, "units": 100, "used": 0, "remaining": 100, "resets_at": null }
  }
}
```

| Field | Description |
|---|---|
| `key` | The key's id, name, scopes, and expiry (`null` if it doesn't expire). |
| `acts_as` | The recruiter whose candidates the key sees. See [Acts as](../../authentication/#acts-as). |
| `server.time` | The server's clock, UTC. Use it as your first `since` for the change feed. |
| `limits.requests_per_minute` | This key's request limit. See [Limits](../../limits/). |
| `limits.ai` | For future endpoints that use AI. No endpoint uses it today. |
