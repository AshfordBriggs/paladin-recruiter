---
title: Call a candidate
description: Start a call from a candidate's page so Paladin can transcribe it, show suggestions live, and file the summary on the record.
subtitle: From the candidate's page to a transcribed, summarized call.
sidebar:
  order: 1
  attrs:
    data-icon: phone-out
app_route: /candidates/:id
features: [FEAT-101, FEAT-112]
verified: 2026-10-21
---

Start the call from the candidate's page, and Paladin does the rest. It
prepares a brief beforehand, transcribes the call and suggests questions
while you talk, then writes the summary onto the candidate's record.

:::note[Before you start]
- The candidate needs a phone number on their record.
- You need the [Paladin Dialer](/dialer) on your phone, and your
  [account set up](../../get-started/set-up-your-account/).
:::

1. Open **Candidates** and select the candidate.
2. Select **Call Candidate**.
3. Under **What is this call about?**, choose the job you're calling about.
   Each job shows the candidate's fit score and where they are in the
   process. If the call isn't about one job, choose **General Call**.
4. Under **Call from**, check the number on the right of **From**. That's
   the number the call comes from. To use a different one, select the arrow
   next to the button.
5. Select **Launch Call Console**. The Call Console opens in a new tab.
6. Place the call from the Paladin Dialer on your phone.

:::caution
Calls are transcribed, and Paladin doesn't announce that on the call yet.
Tell the person you're calling.
:::

## What happens next

The status at the top of the Call Console shows **Waiting for candidate**.
When the call connects, it changes to **Live** and the AI starts listening.

While you talk:
- **Transcript** shows the conversation as it happens.
- **Intelligence** fills with cards: suggested questions, gaps, and anything
  that doesn't add up. To have Paladin explain the last thing that was said,
  select **Explain that**.
- **Script** and **Prep** show the brief Paladin prepared before the call.

Hang up on your phone when you're done. Closing the Call Console tab doesn't
end the call; it only stops showing it. After the call, the summary is filed
on the candidate's record, under the job you chose.

## If something goes wrong

- **The dialog says "No phone number configured."** Select **Set Up Phone**
  and add your number, then try again.
- **No new tab opens.** Your browser blocked it as a pop-up. Allow pop-ups
  for Paladin in your browser, then select **Launch Call Console** again.
- **You see "Failed to start call. Check your phone settings."** Open your
  **Profile** and check that your phone number is right, then try again.
- **The console stays on "Waiting for candidate."** The call didn't go
  through Paladin, for example because it was started from your phone's own
  dialer or from Contacts. Hang up and call again from the Paladin Dialer.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## Related

- [Set up your account](../../get-started/set-up-your-account/)
- [Glossary](../../reference/glossary/)
