---
title: Move a candidate along
description: Change an opportunity's status as a candidate moves through the process for a job, or change the candidate's overall status.
subtitle: Update where a candidate stands for a job.
sidebar:
  order: 1
  attrs:
    data-icon: arrow-right-left
app_route: /opportunities/:id
features: [FEAT-073]
verified: 2026-10-22
---

Each opportunity (one candidate for one job) has a status. Change it on the
opportunity page so everyone can see where the candidate stands for that
job.

:::note[Before you start]
The candidate must be yours, or you must be an admin. Otherwise the status
shows but you can't change it.
:::

1. Open **Candidates** and select the candidate.
2. Under **Opportunities**, select the job. The opportunity page opens.
3. At the top, next to the candidate and job names, select the status.
4. Choose the new status: **new**, **ready**, **scheduled**, **in call**,
   **completed** or **rejected**.

The change saves straight away. You can also open the opportunity from
**Opportunities** in the menu.

## What happens next

The new status shows on the opportunity page, on the candidate's page and
in the **Opportunities** list.

Paladin also sets some statuses itself. For example, it shows
**analyzing** while it scores the candidate against the job, and **error**
if the analysis can't finish.

## The candidate's own status

A candidate also has one overall status, separate from their opportunities.
It sits at the top of the candidate's page, next to **Call Candidate**.
Select it to choose **New**, **Ready for Call**, **In Progress**,
**Completed** or **Rejected**. Use the **Status** filter on the
**Candidates** list to find candidates by it.

## If something goes wrong

- **The status is plain text, not a menu.** The candidate belongs to
  another recruiter. Ask them or an admin to change it.
- **You see "Failed to update this opportunity".** The change didn't save
  and the old status is back. Refresh the page and try again.
- **The Opportunities list filter has no option for rejected.** The filter
  doesn't offer every status. Choose **All** and look at the **Status**
  column.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## Related

- [Archive a candidate](../archive-a-candidate/)
- [Create a candidate report](../../reports/create-a-candidate-report/)
- [Glossary](../../reference/glossary/)
