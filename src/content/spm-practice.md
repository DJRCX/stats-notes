# Practice Questions & Quick Revision

Worked exam-style problems for Chapters 9 and 10, followed by a quiz and a study checklist.

## Worked problems

### Problem 1 — Communication channels

A project has a project manager, 3 developers, 2 testers and 1 client representative. How many communication channels are there? If 2 more developers join, how many channels are added?

**Solution.** $N = 1 + 3 + 2 + 1 = 7$.

$$
\frac{7 \times 6}{2} = 21 \text{ channels}
$$

With 2 more developers, $N = 9$:

$$
\frac{9 \times 8}{2} = 36 \text{ channels}, \qquad 36 - 21 = 15 \text{ channels added}
$$

### Problem 2 — Slack

A project must finish in 10 days. All tasks can start on day 0. Task P takes 10 days, task Q takes 4 days and task R takes 5 days. Find each task's slack and the critical path.

**Solution.**

| Task | Duration | Slack |
|---|---:|---:|
| P | 10 | $10-10=0$ |
| Q | 4 | $10-4=6$ |
| R | 5 | $10-5=5$ |

P has zero slack, so **P is on the critical path**. Q can be delayed up to 6 days and R up to 5 days without moving the deadline.

### Problem 3 — Resource leveling

Using the tasks from Problem 2, P needs 3 workers, Q needs 2 and R needs 2. At most 5 workers are available per day. Is the early-start schedule over-allocated? If so, level it.

**Solution.** If everything starts on day 0:

| Day | 1–4 | 5 | 6–10 |
|---|---:|---:|---:|
| P (3) | 3 | 3 | 3 |
| Q (2) | 2 | – | – |
| R (2) | 2 | 2 | – |
| **Total** | **7** | 5 | 3 |

Days 1–4 need 7 workers but only 5 are available, so the schedule is **over-allocated**.

P is critical and cannot move. Keep R on days 1–5 and delay Q by 5 days, to days 6–9. That is within Q's 6 days of slack, so it still finishes before the deadline.

| Day | 1–5 | 6–9 | 10 |
|---|---:|---:|---:|
| P (3) | 3 | 3 | 3 |
| Q (2) | – | 2 | – |
| R (2) | 2 | – | – |
| **Total** | **5** | **5** | 3 |

No day exceeds 5 workers and the project still finishes on day 10.

> **Lesson:** resource leveling only works when the available slack is large enough. If no arrangement fits within the slack, the project manager must add resources or extend the deadline.

### Problem 4 — Checking a RACI chart

| Task | PM | Developer | Tester | Client |
|---|---|---|---|---|
| Write code | A | R | C | I |
| Test release | A | C | R | A |
| Approve release | R | I | I | – |

Find the errors.

**Solution.**

- *Test release* has **two A's** (PM and client). Only one person can be Accountable.
- *Approve release* has **no A**. Someone (probably the client or the PM) must be Accountable for the final approval.
- *Write code* is valid: one A, at least one R.

### Problem 5 — Identify the theory

| Scenario | Answer |
|---|---|
| A tester only joined the project because the salary covers rent and food | Maslow — **physiological** need |
| The team lead praises a developer at the all-hands meeting | Maslow — **esteem** need |
| New team members are polite but unsure what to do in week 1 | Tuckman — **forming** |
| The team has finished the project and members move to other projects | Tuckman — **adjourning** |
| The PM uses authority to end a dispute because the server is down | Conflict mode — **forcing** |
| Two leads each give up part of their demands to reach an agreement | Conflict mode — **compromise** |
| The PM listens carefully to the client before proposing a solution | Covey — **seek first to understand** |
| The PM schedules risk planning now instead of fixing crises later | Covey — **be proactive / put first things first** |
| The PM emails the client the signed change request | **External, formal** communication |
| Two developers chat about a bug over coffee | **Internal, informal** communication |

## Knowledge check

<!-- viz:spm-quiz -->

## Study checklist

<!-- viz:spm-study-checklist -->
