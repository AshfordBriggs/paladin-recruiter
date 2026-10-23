---
title: Add a candidate
description: Add one candidate from a LinkedIn URL, a résumé, or your notes, and Paladin builds their profile for you.
subtitle: Give Paladin a LinkedIn, a résumé or notes, and it builds the profile.
sidebar:
  order: 1
  attrs:
    data-icon: user-plus
app_route: /candidates
features: [FEAT-070, FEAT-092, FEAT-112]
verified: 2026-10-22
---

Give Paladin a LinkedIn URL, a résumé, or your notes, and it creates the
candidate right away, then fills in their name, contact details and profile
from what you gave it. You don't have to type anything else.

1. Open **Candidates** and select **Add Candidate**.
2. Give Paladin at least one source. Any one is enough, and more is better:
   - **LinkedIn URL**: the full profile address, in the form linkedin.com/in/…
   - A résumé: drag it onto **Drag a resume here or click to browse**, or
     select the box to pick a file. PDF, DOCX, JPG or PNG, up to 10 MB each.
     You can add more than one file.
   - **Recruiter notes**: how you met, who referred them, why they're a fit.
3. Leave **Name**, **Email** and **Phone** empty unless you want to set them
   yourself. Paladin fills them in from your sources, and anything you type
   wins. If you have no source, type a **Name** (a first name is enough).
4. Optional: choose **How did this candidate come to you?**
5. Leave **Visible to all recruiters** on to share the candidate with your
   team. Turn it off to keep a private draft that only you can see.
6. Select **Build profile & save**. If you added only a name, the button
   says **Save**.

## What happens next

The candidate appears at the top of your **Candidates** list straight away,
with **(building)** after their name. Until Paladin finds the real name, it
shows a stand-in: a name from the LinkedIn address, the file name, or
"New candidate".

You can open the candidate while it builds. Their page shows
**Building profile…** and updates by itself when the build is done. When it
finishes, the real name, contact details and profile replace the stand-in,
and the candidate's status changes to **New**.

If you saved with a name only, there's nothing to build. The candidate is
saved as **New** and you can add a résumé later from their page.

Next, [add the candidate to a job](../add-a-candidate-to-a-job/) to get a
fit score and a call script.

## If something goes wrong

- **The save button is gray and says "Add a LinkedIn, a resume, or a
  name."** Paladin needs at least one of those. Add a source or type a name.
- **"… exceeds 10 MB limit."** The file is too big. Save a smaller copy,
  for example a PDF without large images, and add it again.
- **"… has unsupported type."** Use a PDF, a Word file (.docx), or a photo
  (JPG or PNG). Older Word files (.doc) don't work: save them as .docx or PDF
  first.
- **"Save failed: …"** Nothing was created. Select the button again. If it
  keeps failing, use the feedback link at the bottom of this page.
- **The candidate page says "Profile build failed".** Select **Retry**.
  Paladin already has your files and LinkedIn URL, so you don't need to add
  them again.
- **The progress shows "LinkedIn lookup failed".** Check the LinkedIn URL on
  the candidate's page. It must be the full profile address
  (linkedin.com/in/…), not a search result or a company page.
- **The build finished but the name is still the stand-in.** Paladin couldn't
  find a name in your sources, for example because the résumé is a photo or
  the LinkedIn profile is private. Select the name at the top of the
  candidate's page and type the right one.

## Related

- [Upload many résumés](../upload-many-resumes/)
- [Add a candidate to a job](../add-a-candidate-to-a-job/)
- [Call a candidate](../../calls/call-a-candidate/)
- [Glossary](../../reference/glossary/)
