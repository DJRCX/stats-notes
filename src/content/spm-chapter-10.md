# Chapter 10 — Project Communications Management

Communication types, channels, planning and effective media.

## Learning outcomes

After this chapter you should be able to:

1. **Identify communication types:** internal vs. external, formal vs. informal.
2. **Calculate channels:** use the communication-channel formula on a simple problem.
3. **Plan communication:** explain what a communication management plan contains and why it matters.
4. **Select suitable media:** choose the right communication method for a project situation.
5. **Apply it to IT projects:** use examples from a software development project.

## 10.1 Types of Communication

Communication is classified along two independent dimensions: *who* it is with (internal vs. external) and *how official* it is (formal vs. informal).

### Internal vs. external

| | Internal communication | External communication |
|---|---|---|
| Meaning | Among people working within the same project or organization | With people or organizations outside the project team or organization |
| Examples | Project manager ↔ developer; QA team ↔ backend team; department meeting | Project manager ↔ client; company ↔ software vendor; team ↔ government regulator |

**IT example:** developers discussing a bug is *internal*. The project manager sending a progress report to the client is *external*.

### Formal vs. informal

| | Formal communication | Informal communication |
|---|---|---|
| Meaning | Official, structured, follows organizational procedures | Casual, less structured |
| Examples | Project status report, official email, meeting minutes, signed approval | Quick team chat, friendly discussion, informal phone call |
| Why use it? | Creates records, accountability and an official decision trail | Enables quick updates, relationship-building and fast clarification |

Because the two dimensions are independent, any message falls into one of four boxes:

<!-- viz:spm-communication-types -->

> **Remember:** a communication can be both internal *and* formal, for example an official email to the project team.

## 10.2 Communication Channels

A **communication channel** is a possible path through which information can flow between two people. As the number of people grows, the number of possible channels grows much faster.

$$
\text{Number of channels} = \frac{N(N-1)}{2}
$$

where $N$ is the number of people involved in the communication.

**Why divide by 2?** Each of the $N$ people can talk to $N-1$ others, giving $N(N-1)$ pairs. But the channel between Ali and Bina is the same as the channel between Bina and Ali, so every channel has been counted twice.

**Example:** a project team has 5 people.

$$
\frac{5 \times (5-1)}{2} = \frac{5 \times 4}{2} = 10 \text{ channels}
$$

If the team grows to 6 people:

$$
\frac{6 \times 5}{2} = 15 \text{ channels}
$$

Adding just **one** person added **5** new channels: the new person can talk to each of the 5 existing members. In general, adding a person to a team of $N$ adds $N$ channels.

<!-- viz:spm-channels-calculator -->

| People ($N$) | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 20 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Channels | 1 | 3 | 6 | 10 | 15 | 28 | 45 | 190 |

> **Why it matters:** more channels means more chances for messages to be missed, repeated or misunderstood. This is why large projects need a clear communication plan, and why adding people to a late project can slow it down even more.

**Typical exam variant:** "A team grows from 4 to 7 people. How many *additional* channels are created?"

$$
\frac{7 \times 6}{2} - \frac{4 \times 3}{2} = 21 - 6 = 15 \text{ additional channels}
$$

## 10.3 Planning Communication Management

Planning communication means deciding **who needs what information, when, how, and from whom**.

| Question | What to decide | Example |
|---|---|---|
| **Who?** | Who needs the information? | Client, sponsor, developers, QA team |
| **What & when?** | What information is needed and how often? | Weekly progress, urgent bug alert |
| **How & who sends?** | Which method, and who is responsible for sending it? | The PM sends a weekly email report |

> **Definition:** communication management planning means delivering **the right information to the right person, at the right time, through the right channel.**

### What a communication management plan specifies

| Element | Question it answers |
|---|---|
| Stakeholder communication needs | What information does each person need? |
| Information to be communicated | What information will be communicated? |
| Format and level of detail | In what format, and how much detail? |
| Timing and frequency | When and how often will it be communicated? |
| Sender and receiver | Who sends the information, and who receives it? |
| Communication method / technology | Email, meeting, chat, dashboard, etc. |
| Escalation process | Who should be informed when a problem occurs? |
| Glossary / common terms | What do the key terms mean? |

A good plan reduces confusion, missed updates and unnecessary messages.

**Software project example:**

| Stakeholder | Information | Frequency | Method | Sender |
|---|---|---|---|---|
| Client | Progress against milestones | Weekly | Formal email report | Project manager |
| Sponsor | Budget and major risks | Monthly | Meeting + summary report | Project manager |
| Developers | Daily tasks and blockers | Daily | Stand-up meeting / team chat | Team lead |
| QA team | New builds ready for testing | Each build | Dashboard / issue tracker | Developers |
| Everyone on the team | Critical production bug | Immediately | Phone call + chat alert | Whoever finds it, escalated to PM |

### Planning steps

<!-- viz:spm-comm-plan-steps -->

1. **Identify stakeholders.** Who needs project information?
2. **Assess information needs.** What information do they need?
3. **Choose communication methods.** Meeting, email, report, call or chat?
4. **Set timing and responsibility.** When will it be sent, and by whom?
5. **Document and share the plan.** Make the plan available to the team.
6. **Review and update.** Change it when the project or stakeholder needs change.

> The plan is not "one size fits all": tailor it to the project and its stakeholders.

## 10.4 Using Effective Communication Media

Choose the medium that fits the message.

| Situation | Best medium | Why |
|---|---|---|
| Urgent or complex issue | Phone call or live meeting | Questions can be answered immediately |
| Official decision or approval | Formal email, documented report or approval system | Keeps a permanent record |
| Quick team update | Team chat or short stand-up meeting | Fast and lightweight |
| Detailed or reusable information | Written document, shared knowledge base or project dashboard | People can look it up later |

> **Main idea:** the best medium depends on **urgency, complexity, audience, need for feedback, and need for a permanent record**.

### Quick comparison of media

| Medium | Best for |
|---|---|
| Face-to-face / video meeting | Complex discussion, negotiation, immediate feedback |
| Phone / voice call | Urgent clarification or time-sensitive issues |
| Email / formal report | Official updates, approvals, traceable records |
| Team chat | Short, quick, day-to-day coordination |
| Dashboard / shared document | Progress tracking and information that many people need |

**Common mistakes:** sending bad news or a sensitive conflict by email instead of talking face to face; making an important decision in a chat with no written record; sending a 10-page report when the reader only needs a one-line status.

## Quick recap

| Topic | Key point |
|---|---|
| Communication types | Internal / external • formal / informal |
| Channel formula | $\dfrac{N(N-1)}{2}$ |
| Planning | Who needs what, when, how, and from whom? |
| Effective media | Match the medium to urgency, complexity, audience and record needs |

*Reference: Kathy Schwalbe, Information Technology Project Management, Chapter 10 (Project Communications Management).*
