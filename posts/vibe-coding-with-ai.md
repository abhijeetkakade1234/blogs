---
title: "The Chaos of Vibe Coding: Automation Without Guardrails"
date: "2026-02-16"
author: "Abhijeet Kakade"
description: "A story about letting AI handle deployment, 39 failed builds, and the importance of CI/CD."
---

![Vibe Coding Chaos](/3rdblog.png)

# The Experiment

So recently I was bored and felt like I should try proper **vibe coding**. Antigravity had just launched, so I thought with so many tokens available, why waste them?

I went through previous Web3 hackathon projects, found something creative, and immediately started structuring everything properly.
I created detailed `.md` files like `architecture.md`, `implementationorder.md`, `specs.md`, React best practices, Solana best practices, and a bunch of other structured notes.

Then I handed it to the AI agent and told it to keep track of everything and only do a Git push after creating a working functionality.

The UI turned out really cool.
Everything worked fine.
APIs worked.
Tested it—results were solid.

## The Deployment Disaster

Now came the fun part: **deployment**.
And I thought… *why not let the AI handle that too?*

Big mistake. Or maybe big lesson.

It tried **39 times**.
Out of those, only **5 builds were successful**.

It would push the code to GitHub → Cloudflare auto-build → build failed → logs generated → AI modified code → pushed again.
And the loop continued.

I even asked it how many attempts it had made.
At some point, I could clearly see it was struggling, yet it kept trying.
Yes, it’s just an algorithm. But I noticed something interesting.

- The way it optimized.
- The way it structured responses.
- The way it kept telling me to stay calm.

## The Realization

Eventually, even after a successful build, the API still returned 404.
That’s when I realized two things:

1.  **Automation without guardrails becomes chaos.**
2.  **CI/CD pipelines are not optional, even for small projects.**

I was exhausted. But I learned something valuable.

## Small Issue, Big Lesson

AI is powerful. But it still needs structure.
And sometimes, the real growth comes from watching the failure loop and improving the process.

Since then, I’ve started using proper CI/CD pipelines for even the smallest experiments.
