---
title: "The Case of the Missing Production Images 👻"
date: "2026-03-19"
author: "Abhijeet Kakade"
description: "A small TypeScript import mistake that only broke in production and what it taught me."
---

# It Worked in Dev… Until It Didn’t 😅

It was around **8 days** after New Year.

We were back to work.

- Two milestones completed.
- Time for dev testing.
- Time to show the preview to the client.

Every day we followed the same loop:

**Push code → Deploy → Test → Fix → Repeat.**

The build was successful.
No error logs.
Website live.

Everything looked fine.

**Until it didn’t.**

---

## The Issue

One small UI section was **broken in production**.

- The image wasn’t visible.
- Only the `alt` text showed.
- Layout messed up.

In development? **It worked perfectly.**

Classic.

---

## My “Small” Mistake

I had written:

```tsx
// The "Works on My Machine" special:
src = "/assets/img/vanishing-burger.png";
```

In development, it loaded fine.

But in production, the **bundler handled assets differently**.

So the path wasn’t resolved correctly.

## The Senior Move

My senior simply:

1. **Opened DevTools (F12)**
2. **Inspected the image element**
3. **Looked at the resolved path**
4. **Immediately spotted the issue**

No overthinking.
No chaos.
Just **calm inspection**.

The correct way was:

```tsx
// Letting the bundler do its magic
import visibleBurgerUrl from "@images/vanishing-burger.png";

<img src={visibleBurgerUrl} alt="A burger that actually exists in prod" />;
```

Let the **bundler** handle the asset.

Simple. Very simple.

## What Panicked Me

I got anxious. If I were in his place, I might have:

- Tried multiple things
- Changed config
- Blamed build settings
- Dug into TypeScript types
- Gone deep into bundler docs

But the solution was basic: **Import it properly.**

That day we were in the office for **12+ hours** 🥲

All because of one small assumption.

## Lesson Learned

- **Dev and Prod are not the same environment.**
- Asset paths can behave differently after bundling.
- **Always inspect the actual rendered output in DevTools.**
- Don’t overcomplicate what could be simple.
- **Calm debugging beats anxious debugging.**

Sometimes growth isn’t about complex system design.

It’s about learning to stay **calm** when a PNG breaks your UI.
