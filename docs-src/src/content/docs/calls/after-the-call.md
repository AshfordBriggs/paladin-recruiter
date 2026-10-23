---
title: After the call
description: Read the summary and transcript of a finished call, check its outcome, and file it under the right job.
subtitle: The summary, the transcript and the outcome, a minute or two after you hang up.
sidebar:
  order: 3
  attrs:
    data-icon: check-square
app_route: /calls/:id/summary
features: [FEAT-059, FEAT-067, FEAT-075]
verified: 2026-10-22
---

When you hang up, Paladin writes a summary of the call, usually within a
minute or two. You end up with the summary, key points, action items, the
full transcript and an outcome, all filed on the candidate's record.

1. Select **Calls** in the top bar, then select the call. Its summary page
   opens. You can also open it from the candidate's page: under **Call
   History**, select **View Summary**.
2. Read **Summary**, **Key Points** and **Action Items**. If the page says
   **Generating summary...**, wait a minute and reload the page.
3. To read the whole conversation, select **Transcript** at the bottom. It
   opens to show who said what.
4. Check the outcome next to the date. Paladin fills it in from what was
   said on the call.
5. To change the outcome or add notes, open the call in the Paladin Dialer
   on your phone: on the **Calls** tab, select the call. Under **Outcome**,
   choose one, add **Notes** if you like, then select **Save outcome**.
6. If a General Call turned out to be about a job, open that opportunity.
   Under **Sources**, choose the call from **Attach existing call**.

The outcomes are:

| Outcome | Means |
|---|---|
| **Scheduled next** | The next step is booked. |
| **Forwarded to client** | You're sending the candidate to the client. |
| **Callback requested** | Someone needs to call back. |
| **No answer** | The call didn't connect. Only you set this one; Paladin never guesses it. |
| **Rejected** | The candidate isn't moving forward. |

Paladin never replaces an outcome you saved.

## What happens next

The call also shows on the candidate's page under **Call History**, with the
job it was about, or **General**. A call about a job shows on that
opportunity's page too, with your outcome notes.

A call you attach to an opportunity appears under **Sources**, in **Linked
Paladin calls**, and Paladin reads it along with the other material there.

The summary page also has **Send working-style survey**, which builds a
short survey from the call and emails it to the candidate.

## If something goes wrong

- **"Generating summary..." doesn't go away.** The page doesn't update by
  itself. Reload it.
- **"Summary unavailable for this call."** Writing the summary failed.
  Paladin tries again on its own, so check back later.
- **There's no summary and the Calls list says "skipped."** The call was too
  short to summarize, for example a quick hang-up.
- **The call says "Unknown caller."** The number isn't on any candidate. In
  **Calls**, select the person icon on that row (**Create candidate from
  this caller**). Enter a **First name**, then select **Create candidate**.
  Paladin names the caller's record, and their calls stay on it.
- **Attach existing call isn't there.** It appears only when the candidate
  has a call that isn't already attached to this opportunity, and only if you
  can edit the opportunity.
- **You attached the call to the wrong job.** Under **Linked Paladin
  calls**, select the unlink icon on the call (**Detach from this
  opportunity**), then attach it to the right one.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## Related

- [Use the Call Console](../../calls/the-call-console/)
- [Find a past call](../../calls/find-a-past-call/)
- [Call a candidate](../../calls/call-a-candidate/)
