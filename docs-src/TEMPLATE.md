<!-- Copy this into src/content/docs/<section>/<task-name>.md. Rules: FEAT-131 spec, "Usability principles". -->
---
title: Do the task            # a task, in the words a user would type into search
description: One sentence; it is also the search-result snippet.
app_route: /candidates/:id     # the app screen this page helps with (in-app help links)
features: [FEAT-NNN]           # features it describes; re-check the page when they change
verified: YYYY-MM-DD           # last walked through against the live product
---

One or two sentences: what this does and what you end up with.

:::note[Before you start]
Only if there's a real prerequisite. Delete otherwise.
:::

1. One action per step. UI labels exactly as on screen, in **bold**.
2. At most about 7 steps. More means split the page, or file a product issue.

![The screen where people get stuck, cropped, demo data only](../../../assets/screens/name.png)

## What happens next

What they'll see, how long it takes, where the result goes.

## If something goes wrong

- **The symptom, in the words on screen.** The fix.

## Related

- [Another task](../../section/page/)
