---
title: Authentication
description: Create a Paladin API key, send it with each request, choose its scopes and the recruiter it acts as, and revoke it.
subtitle: Create a key, send it, and revoke it.
sidebar:
  order: 2
  attrs:
    data-icon: key
verified: 2026-10-22
---

Every request needs an API key. Keys are created by a Paladin admin and are
shown only once, when they're created.

## Create a key

You need to be a Paladin admin.

1. In Paladin, select the profile icon at the top right to open your
   **Profile**.
2. Under **API keys**, select **New key**.
3. Under **Name**, say where the key will be used, for example
   "Backend sync" or "Reporting dashboard".
4. Under **Scopes**, leave **Read** and **Metrics** checked unless the key
   needs less. **Write** can't be selected yet.
5. Under **Acts as**, choose **Me** or the recruiter whose candidates the key
   should see. See [Acts as](#acts-as).
6. Optionally, set an **Expiration** date. The key stops working at the end
   of that day.
7. Select **Create key**. Under **Copy your key now**, copy the key, then
   select **I've copied it**.

:::caution
This is the only time the key is shown. Paladin keeps only a hash of it, so
nobody can show it to you again. If you lose it, create a new key and revoke
the old one.
:::

## Send the key

Send the key in the `Authorization` header:

```bash
curl https://yourcompany.example.com/api/v1/me \
  -H "Authorization: Bearer pk_yourcompany_..."
```

If your tool can't set an `Authorization` header, `X-Api-Key: <key>` works
too. Keys only work on `/api/v1`; they don't sign you in to the Paladin app.

Keys look like `pk_yourcompany_` followed by 43 random characters. The
**API keys** list shows only the start of each key, so you can tell them
apart.

## Scopes

| Scope | Lets the key read |
|---|---|
| `read` | Jobs, clients, candidates, opportunities, calls, transcripts, summaries, reports, notes, and the change feed |
| `metrics` | The [metrics](endpoints/metrics/) endpoints |
| `write` | Nothing yet. Reserved for a later version. |

`/me` and `/openapi.json` work with any scope. A request outside the key's
scopes gets a `403`.

## Acts as

Each key acts as one recruiter, chosen when the key is created.

- **Candidates follow that recruiter.** The key sees the shared candidates
  plus that recruiter's private ones. Opportunities, reports and notes on a
  candidate the key can't see answer `404`, the same as a record that doesn't
  exist.
- **Everything else is server-wide.** Jobs, clients, calls and metrics are the
  same for every key.

## Revoke a key

On your **Profile**, under **API keys**, select **Revoke** on the key. It
stops working on its next request, and revoking can't be undone.

Each key in the list also shows when it was last used and how many requests
it made today and this week.

## If something goes wrong

- **`401` "API key required."** The request had no key. Check the header name
  and the `Bearer ` prefix.
- **`401` "Invalid, expired or revoked API key."** Check that you copied the
  whole key. If it expired or was revoked, create a new one.
- **`403` "This key does not have the '…' scope."** Create a key with that
  scope.
- **`429` "Too many failed key attempts from this address."** More than 60
  bad keys came from your address in a minute, so every key from that
  address is refused for a minute, valid ones too. Fix whatever is sending
  the bad key, then wait a minute.
