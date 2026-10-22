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

Start the call from the candidate's page, and Paladin does the rest. It rings
your phone, connects you to the candidate, shows the transcript and
suggested questions while you talk, then writes the summary onto the
candidate's record.

:::note[Before you start]
- The candidate needs a phone number on their record.
- Your phone needs to be set up in Paladin. See
  [Set up your account](../../get-started/set-up-your-account/).
:::

1. Open **Candidates** and select the candidate.
2. Select **Call Candidate**.
3. Under **What is this call about?**, choose the job you're calling about.
   Each job shows the candidate's fit score and where they are in the
   process. If the call isn't about one job, choose **General Call**.
4. Under **Call from**, check the phone next to **From**. That's the phone
   Paladin rings for you. To use a different one, select the arrow next to
   the button and pick it under **Switch calling number**.
5. Select **Launch Call Console**. The Call Console opens in a new tab.
6. Your phone rings. Answer it, and Paladin calls the candidate and connects
   you. The candidate sees your Paladin number.

:::caution
Calls are transcribed, and Paladin doesn't announce that on the call yet.
Tell the person you're calling.
:::

## What happens next

The status at the top of the **Intelligence** panel shows **Waiting for
audio** until the candidate picks up, then **Live** while Paladin listens.
See [Use the Call Console](../the-call-console/) for what each panel shows.

Hang up on your phone when you're done. Closing the Call Console tab doesn't
end the call; it only stops showing it. After the call, the summary is filed
on the candidate's record, under the job you chose. See
[After the call](../after-the-call/).

:::tip
Away from your computer? You can also call from the
[Paladin Dialer](../../dialer/place-a-call-from-your-phone/) app on your
phone. Those calls are transcribed too.
:::

## If something goes wrong

- **The dialog says "No phone number configured."** Select **Set Up Phone**
  and add your number, then try again.
- **You see "Candidate has no phone number on file."** Add a phone number to
  the candidate's record, then try again.
- **No new tab opens.** Your browser blocked it as a pop-up. Allow pop-ups
  for Paladin in your browser, then select **Launch Call Console** again.
- **Your phone never rings.** Check the number next to **From**. If it's
  wrong, pick another under **Switch calling number**, or fix it in your
  **Profile**. Then select **Launch Call Console** again.
- **You see "Failed to start call. Check your phone settings."** Open your
  **Profile** and check that your phone number is right, then try again.
- **The console stays on "Waiting for audio."** The candidate hasn't picked
  up yet, or you didn't answer when your phone rang. Hang up and launch the
  call again.

:::note
If your team recruits for its own company, Paladin says **Roles** instead
of jobs. The steps are the same.
:::

## Related

- [Use the Call Console](../the-call-console/)
- [After the call](../after-the-call/)
- [Set up your account](../../get-started/set-up-your-account/)
