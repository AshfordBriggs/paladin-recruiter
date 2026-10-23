---
title: Read the fit analysis
description: Find a candidate's fit score for a job, see what's behind it, prepare for the call, and change the score if you disagree.
subtitle: The fit score, what's behind it, and your call prep.
sidebar:
  order: 4
  attrs:
    data-icon: sparkles
app_route: /opportunities/:id
features: [FEAT-073, FEAT-112, FEAT-118, FEAT-124]
verified: 2026-10-22
---

Each time you add a candidate to a job, Paladin writes a fit analysis: a fit
score, the candidate's strengths and gaps for that job, and a call script
with the questions to ask. It's all on the opportunity's page.

:::note[Before you start]
The candidate needs to be on the job. See
[Add a candidate to a job](../add-a-candidate-to-a-job/).
:::

1. Open the candidate and, under **Opportunities**, select the job. You can
   also get there from the job's **Opportunities** list, or from
   **Opportunities** in the menu.
2. Read **At a glance** first. It has the fit score, a one-line verdict, the
   **Top strengths** and **Top gaps**, and when you last called. If the job's
   notes list must-haves, **Job note requirements** marks each one **Met**,
   **Not met** or **Verify on call**.
3. For the reasoning, open **Fitment Analysis**:
   - **Strengths**: what the candidate brings, the evidence, and why it
     matters for this job.
   - **Gaps**: what's missing, marked **low**, **medium** or **high**, with
     how to address it.
   - **Red Flags**: anything that doesn't add up, each with a **Probe:**
     question to ask about it.
   - **Culture Fit**: notes on how they'd fit the team.
4. Before you call, read **Call Script**: an **Opening**, timed sections of
   questions, and a **Close** with **Selling points:** for the job. Then
   check **Quick Reference**: **Must Ask**, **Should Ask**,
   **If Time Permits**, and what to ask **If Concerned**.
5. To change the fit score, type a number from 0 to 100 in the **Fit Score**
   box, then press Enter or click outside the box. Paladin shows its own score next to yours, as
   **AI: …%**.
6. To run the analysis again, select **Re-Analyze**.

## What happens next

The score you type is kept. When the analysis runs again, Paladin updates its
own score but doesn't change yours. To hand the score back to Paladin, clear
the box and press Enter.

**Re-Analyze** takes a moment, and the page shows its progress while it
works. To stop it, select **Cancel analysis**; the previous analysis stays.

When something new lands after the analysis, such as a note or a document,
a banner says **New context since last analysis**, with a **Re-analyze**
button. The analysis doesn't re-run on its own.

When you [call the candidate](../../calls/call-a-candidate/) about this job,
the Call Console shows your brief for the call under **Script** and **Prep**.

A fit score of 75% or more shows in green, 50% to 74% in yellow, and below
50% in red.

## If something goes wrong

- **There's no analysis, just a message and a button.** The analysis
  couldn't run yet. The message says why; select the button next to it
  (**Add resume or LinkedIn**, **Research candidate** or **Research job**).
  See [Add a candidate to a job](../add-a-candidate-to-a-job/#if-something-goes-wrong).
- **"Fit score must be between 0 and 100".** Type a whole number from 0 to
  100.
- **"Couldn't cancel the analysis. Try again."** Select
  **Cancel analysis** again.
- **You can't type in the Fit Score box.** The candidate belongs to another
  recruiter. You can read the analysis, but only the owner or an admin can
  change the score or run the analysis again.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. Everything else is the same.
:::

## Related

- [Add a candidate to a job](../add-a-candidate-to-a-job/)
- [Call a candidate](../../calls/call-a-candidate/)
- [Glossary](../../reference/glossary/)
