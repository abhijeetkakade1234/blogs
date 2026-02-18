---
title: "It Works On My Machine 😅"
date: "2026-02-16"
author: "Abhijeet Kakade"
description: "A classic tale of local vs dev environment discrepancies."
---

# The "It Works On My Machine" Paradox

So recently I was working on a feature that worked really well on my local machine and passed everything.
Later, after a few days, we randomly thought of testing it in the dev environment… and it failed.

I got panicked because I had tested it many times locally. I had taken time to design the flow, build the architecture, and optimize the payload and now it failed in dev.

We immediately checked again on our local machines it worked.
I was like, “Huh? What the heck just happened? Am I daydreaming?” 😅

So I went back to the dev server and tested it again.
It failed 🥲

Checked the Git history did someone change anything? 🤔
Nope.

Then finally, I checked the database.
wasn’t updated the same way in the dev DB.

```sql
-- Local DB (Works)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(15) NULL  -- ✅ Nullable
);

-- Dev DB (Fails)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone_number VARCHAR(15) NOT NULL -- ❌ Strict!
);
```

Later, my senior (a Principal Engineer) gave us a tip:
> “If it works perfectly on your local environment but fails in another environment and the code is the same, high chances the culprit is the database or environment differences.”

Small issue. Big lesson.
