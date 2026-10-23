---
title: Send a report to the hiring manager
description: Email a candidate report to the job's hiring manager from your own mail app, with the report attached as a Word file.
subtitle: From the hiring manager's page to a ready-to-send email.
sidebar:
  order: 2
  attrs:
    data-icon: send
app_route: /hiring-managers/:id
features: [FEAT-074]
verified: 2026-10-22
---

Paladin starts the email for you. It opens a draft in your own mail app,
addressed to the hiring manager, and downloads the report as a Word file
for you to attach. You send it yourself, so it comes from your address and
lands in your Sent folder.

:::note[Before you start]
- [Create the report](../create-a-candidate-report/) first.
- The job needs a hiring manager with an email address. See "If something
  goes wrong" below if it doesn't have one.
:::

1. Open **Hiring Managers** and select the hiring manager.
2. Select **Send report**. A list of reports on their jobs opens.
3. Select the report you want to send. Your mail app opens a draft, and the
   report downloads as a `.docx` file.
4. Attach the downloaded file to the draft.
5. Read the draft, change anything you like, and send it.

## What happens next

The hiring manager gets an ordinary email from you. The subject names the
candidate, the job and you. The body starts with "Hi" and their first name,
then a short summary taken from the report, then "Report attached." and
your name. The report itself is the Word file you attached.

The hiring manager doesn't need a Paladin account, and there is no link to
open. Paladin doesn't track whether they read it.

## If something goes wrong

- **Send report is greyed out.** There are two reasons:
  - The hiring manager has no email address. Under **Contact**, select
    **Add an email**, type the address and press Enter.
  - None of their jobs has a candidate report yet.
    [Create one](../create-a-candidate-report/) first.
- **The job has no hiring manager.** Open the job. Under **Hiring manager**
  it says "No hiring manager on this job." Select **Link / Create**, then
  pick the person or select **Create new hiring manager**.
- **The job shows a hiring manager with "Convert to record".** The name was
  typed on the job before hiring managers were records. Select **Convert to
  record**, then send from their page.
- **The report you want isn't in the list.** Open the report itself, select
  **Download DOCX**, and attach it to an email you write yourself.
- **The report downloads but no email opens.** Your computer may not have
  a default mail app set. Write the email yourself and attach the
  downloaded file.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## Related

- [Create a candidate report](../create-a-candidate-report/)
- [Glossary](../../reference/glossary/)
