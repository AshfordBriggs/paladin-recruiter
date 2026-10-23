---
title: Add a candidate to a job
description: Put a candidate on a job so Paladin scores their fit and writes a call script for that job.
subtitle: One candidate, one job, one fit score and call script.
sidebar:
  order: 3
  attrs:
    data-icon: link
app_route: /candidates/:id
features: [FEAT-102, FEAT-112]
verified: 2026-10-22
---

Add a candidate to a job and Paladin creates an opportunity: it compares the
candidate with the job, gives a fit score, and writes a call script and
questions for that job. You can start from the candidate or from the job.

:::note[Before you start]
You can add a candidate to a job if the candidate is yours, or if you're an
admin.
:::

1. Open **Candidates** and select the candidate.
2. Under **Opportunities**, select **Add Opportunity**.
3. Find the job under **Search jobs by title** and select it.
4. Leave **Generate fitment analysis and call script immediately** checked.
5. Select **Add & Analyze**.

On the **Candidates** list you can do the same from a candidate's row:
select the plus icon (**Add Job**).

### From the job's page

1. Open **Jobs** and select the job.
2. Under **Opportunities**, select **Add Candidate**. This adds someone who is
   already in Paladin; it doesn't create a new candidate.
3. Find the person under **Search candidates by name** and select them.
4. Leave **Auto-analyze after adding** checked, then select **Add**.

### Let Paladin suggest candidates

The job's page has a **Who to research** list that ranks candidates against
what the job asks for.

1. On the job's page, under **Who to research**, select **Find candidates**
   (or **Refresh** if it has run before).
   Paladin decides what a strong match looks like, shown as chips marked
   **must have**, **strong** or **nice to have**, and ranks candidates
   against them.
2. Check the candidates you want. Someone marked **misses a must-have** is
   missing at least one must-have.
3. Select **Add** (the button shows how many) to add them to the job. Each one
   is analyzed.

The percentage in this list only ranks candidates against the chips. The fit
score comes from the full analysis after you add them.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## What happens next

The job appears in the candidate's **Opportunities** list (and the candidate
in the job's) with a **Fit Score** and a **Status**:

- **analyzing**: Paladin is working on it. The fit score shows **--** until
  it's done.
- **ready**: the fit score and analysis are done. Select the row to
  [read the fit analysis](../read-the-fit-analysis/).
- **new**: you unchecked the analysis option, so nothing has run yet. Select
  the **Analyze** icon on the row, or open the opportunity and select
  **Analyze**.
- **error**: the analysis couldn't run. A line under the row says why, with a
  button that fixes it (see below).

## If something goes wrong

- **"… has no resume or LinkedIn."** Select **Add resume or LinkedIn** and
  add one on the candidate's page. The analysis runs by itself once their
  profile is built.
- **"… hasn't been researched yet."** about the candidate: select **Research
  candidate**. The analysis runs again by itself when that's done.
- **"The … job hasn't been researched yet."** Select **Research job**. The
  analysis runs when the job research finishes.
- **"… profile is still being built. The analysis will run when it
  finishes."** Nothing to do. Wait for the candidate's profile to finish.
- **"The analysis didn't finish. Press Analyze to try again."** Open the
  opportunity and select **Analyze**.
- **The dialog stays open after you select Add & Analyze.** The candidate is
  probably on that job already. Each candidate can be on each job once. Close
  the dialog and check the **Opportunities** list.
- **There's no Add Opportunity button.** The candidate belongs to another
  recruiter. Ask them or an admin to add the job.
- **Who to research says "… can't be matched yet".** Open the list to see the
  reason for each person. Often their profile hasn't been built yet.
- **Who to research says "… not read yet. Press Refresh."** Select
  **Refresh**.

## Related

- [Read the fit analysis](../read-the-fit-analysis/)
- [Add a candidate](../add-a-candidate/)
- [Call a candidate](../../calls/call-a-candidate/)
- [Glossary](../../reference/glossary/)
