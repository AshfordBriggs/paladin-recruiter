---
title: Upload many résumés
description: Upload a batch of résumés or a whole folder at once, and Paladin creates a candidate from each one.
subtitle: A folder of résumés in, a list of candidates out.
sidebar:
  order: 2
  attrs:
    data-icon: upload
app_route: /candidates/imports/:id
features: [FEAT-117]
verified: 2026-10-22
---

Upload a batch of résumés, or a whole folder, in one go. Paladin reads each
one and creates a candidate, or adds the résumé to a candidate you already
have with the same email or phone. You get an import page that shows what
happened to every file.

1. Open **Candidates** and select **Bulk upload**.
2. Drop résumés or a folder onto the box, or select **Choose files** or
   **Choose a folder**. PDF, Word (.docx), text or photos, up to 10 MB each.
3. Check the count that says how many files are ready. Files that aren't
   résumés, such as spreadsheets and system files, are skipped for you.
4. Select **Upload** (the button shows how many résumés). Keep the window
   open until the upload finishes.
5. When the upload is done, select **View import**.
6. Select **Needs attention** to see only the rows you need to look at.
   Select a row to open it and fix it (see below).

## What happens next

Paladin reads the résumés one by one. The upload window gives you an
estimate of how long it takes. You don't need to wait: the import page keeps
going while you're away and shows **Reading resumes: … done.** while it
works. When everything is read and nothing needs you, it says **Every resume
is in. Nothing needs your attention.**

Each row ends up with one of these statuses:

- **Imported**: a new candidate was created.
- **Added to existing**: the résumé has the same email or phone as a
  candidate you already have, so Paladin added it to that candidate's record
  instead of creating a duplicate.
- **Needs review**: Paladin couldn't find a name. Nothing is created until
  you add one.
- **Failed**: the file couldn't be read. The row says why and what to do.

Candidates created this way are visible to all recruiters. To get back to an
import later, open **Candidates**, select **Imports**, then the import.

## If something goes wrong

Open a row to see its full message and the actions for it.

- **"No name found in this file. Add the candidate's name to import them."**
  Enter the **First name** (and anything else you know), then select
  **Import candidate**. To see the résumé, select
  **Open the original file**.
- **"Only a first name was found." or "No email or phone found."** The
  candidate was created. Add what's missing and select **Save**, or select
  **Mark reviewed** if it's fine as it is.
- **"… is already a candidate, with different contact details. Check it
  isn't the same person."** Select **Open candidate** and compare it with the
  candidate you already had. If it's the same person, open the extra
  candidate's page and select **Archive**.
- **Paladin added the résumé to the wrong person ("Same email as …").** Open
  the row and select **Different person: create new**.
- **"Paladin couldn't read this file" or "couldn't make a profile from
  it".** Select **Read again**. If it still fails, add this candidate by hand
  with [Add a candidate](../add-a-candidate/).
- **"Older Word (.doc) files can't be read."** (or RTF, Pages, OpenDocument)
  Save the file as .docx or PDF, then select **Upload more** on the import
  page and add it.
- **"The file is … MB; the limit is 10 MB."** Save a smaller copy and add it
  with **Upload more**.
- **"… didn't reach the server (connection problem)."** Select
  **Upload more** on the import page and add those files again.
- **"Couldn't start the upload. Check your connection and try again."**
  Nothing was uploaded. Check your connection and select **Upload** again.
- **You want the failed rows gone.** Select **Remove failed** on the import
  page.

## Related

- [Add a candidate](../add-a-candidate/)
- [Add a candidate to a job](../add-a-candidate-to-a-job/)
