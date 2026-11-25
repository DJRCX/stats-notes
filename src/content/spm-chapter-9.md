# Chapter 9 — Project Resource Management

Planning, assigning, leveling and leading project teams.

## 9.1 What is Project Resource Management?

Project Resource Management makes sure that **the right people and the right physical tools are available at the right time and place**. It deals with two kinds of resources:

| | Human resources | Physical resources |
|---|---|---|
| Meaning | All people involved in or affected by the project | Tangible items needed to execute project tasks |
| Examples | Sponsors, customers, project team members, support staff, suppliers | Computers, office space, specialized equipment, materials, software |
| Key focus | Leadership, motivation, role clarity, team development | Availability, inventory tracking, cost control |

For example, a university mobile app project needs developers, a UI/UX designer and a security officer (human resources), and also laptops, test phones, cloud servers and software licenses (physical resources). If either kind is missing at the wrong moment, the schedule slips.

## 9.2 The Six Resource Management Processes

<!-- viz:spm-resource-processes -->

| # | Process | What happens |
|---|---|---|
| 1 | **Planning Resource Management** | Decide *how* to estimate, acquire, manage and use human and physical resources |
| 2 | **Estimating Activity Resources** | Calculate the exact quantities and types of people, equipment and materials needed |
| 3 | **Acquiring Resources** | Obtain team members, facilities, equipment and supplies |
| 4 | **Developing the Project Team** | Build individual and group competencies to improve performance |
| 5 | **Managing the Project Team** | Track performance, give feedback, resolve conflicts |
| 6 | **Controlling Resources** | Make sure physical resources are available as planned; take corrective action |

> **Exam tip:** *Developing* the team is about building skills and teamwork (training, team-building). *Managing* the team is about day-to-day tracking, feedback and conflict resolution. *Controlling* resources is about **physical** resources.

## 9.3 Maslow's Hierarchy of Needs

Abraham Maslow (1943) argued that human behavior is motivated by a **sequence of needs**. Once a lower-level need is satisfied, it is no longer the main motivator, and the next level up takes priority.

<!-- viz:spm-maslow-pyramid -->

**Deficiency needs (levels 1–4).** Survival, safety, belonging and respect must be met before a person can focus on growth.

1. **Physiological.** Basic survival essentials: food, water, rest and a livable salary.
2. **Safety.** Physical safety, health coverage, and economic or job security.
3. **Social (love and belonging).** Acceptance, affection and belonging within a project team or workplace group.
4. **Esteem.** Recognition, prestige, status and respect from peers and managers. Example: *employee of the month*.

**Growth need (level 5, the highest level).**

5. **Self-actualization.** Reaching full personal potential through challenging projects, innovation and creativity.

### Applying Maslow in a project

| Level | What the project manager can do |
|---|---|
| Physiological | Pay a fair salary on time; avoid constant overtime so people can rest |
| Safety | Provide job security, health coverage and a safe workplace; avoid threatening people with layoffs |
| Social | Hold team events, include remote members, encourage a friendly team culture |
| Esteem | Publicly recognize good work, give titles and credit, award "employee of the month" |
| Self-actualization | Offer challenging tasks, room for innovation, chances to learn new technologies |

> **Key idea:** a developer who is worried about job security (level 2) will not be strongly motivated by an "innovation challenge" (level 5). Meet the lower needs first.

## 9.4 Project Organizational Structure

A project organizational structure sets **clear reporting lines and roles** for diverse IT teams across software, hardware and support departments. The example below is for a *University Management System*.

<!-- viz:spm-org-structure -->

- The **Project Manager** has overall control. The **Deputy Project Manager** assists them.
- Five functional groups report to the deputy: **Systems Engineering** (plan and design the system), **Independent Test Group** (test the system), **Project Technical Lead** (handle technical work), **Quality Assurance** (ensure quality) and **Configuration Management** (control changes).
- Each group has a **technical lead** and a **sub-manager**, who in turn manage specialized teams (e.g. frontend and backend development teams).
- All teams ultimately serve the **project stakeholders**: students, faculty, management and clients.

## 9.5 Covey's 7 Habits for Project Effectiveness

Stephen Covey's seven habits can make project managers and teams more effective:

| # | Habit | Meaning in a project |
|---|---|---|
| 1 | **Be Proactive** | Anticipate problems and plan ahead instead of only reacting to crises |
| 2 | **Begin with the End in Mind** | Focus on core values and set a clear project mission statement |
| 3 | **Put First Things First** | Prioritize important, non-urgent planning over constant firefighting |
| 4 | **Think Win/Win** | Seek mutually beneficial agreements in negotiations and conflict resolution |
| 5 | **Seek First to Understand, Then to Be Understood** | Practise **empathic listening** to understand stakeholder needs before speaking |
| 6 | **Synergize** | Value diverse team skills so the combined output exceeds individual efforts |
| 7 | **Sharpen the Saw** | Encourage rest, training and self-renewal to prevent burnout |

Example of habit 7: giving developers a recovery day after a major release keeps long-term productivity high.

> **Exam tip:** habit 5 (empathic listening) is the habit most often linked to project communication and understanding stakeholders.

## 9.6 Work Definition and Assignment Process

Before people can be assigned, the work itself must be clearly defined. This is the process in Figure 9-4 of the textbook:

<!-- viz:spm-work-assignment -->

1. **Finalizing requirements.** Use the contract or project charter to lock in the scope and technical baselines.
2. **Defining how the work will be done.** Decide on the technical approach, project phases, and whether to outsource work.
3. **Breaking down the work (WBS).** Create a Work Breakdown Structure to decompose deliverables into specific tasks.
4. **Assigning the work (OBS and RAM).** Map WBS tasks to organizational units using the Organizational Breakdown Structure (OBS) and a Responsibility Assignment Matrix (RAM).

## 9.7 Responsibility Assignment Matrix (RACI Chart)

A **Responsibility Assignment Matrix (RAM)** maps work (from the WBS) to people (from the OBS). The most common form is the **RACI chart**:

| Letter | Role | Meaning |
|---|---|---|
| **R** | Responsible | The person who actually *does* the task. Several people can share R |
| **A** | Accountable | The person who approves the work and has final authority. **Exactly one A per task** |
| **C** | Consulted | Subject-matter experts who give two-way advice before the task is completed |
| **I** | Informed | Stakeholders kept updated on progress and outcomes (one-way) |

**Scenario: launching a university mobile app.**

<!-- viz:spm-raci-matrix -->

How to read the chart:

- For *Design App Interface*, the UI/UX designer does the work (R), the project manager signs it off (A), the lead developer gives input (C) and the security officer is kept informed (I).
- For *Publish to App Store*, the project manager is both Accountable and Responsible (A/R), and the lead developer also helps (R).
- Every row has exactly one A. That rule is what makes the chart valid.

> **Common mistakes:** giving a task two A's, giving a task no R (nobody does the work), or confusing **C** (two-way, asked *before*) with **I** (one-way, told *after*).

## 9.8 Slack (Float) and the Critical Path

Schedule flexibility is what makes resource optimization possible.

- **Slack (float):** the maximum time a task can be delayed without delaying the project deadline.
- **Critical path:** the longest sequence of tasks; it determines the project duration. Tasks on the critical path have **0 days of slack**.

**Campus event scenario.** The deadline is the end of day 5. All three activities could start on day 0:

<!-- viz:spm-slack-gantt -->

$$
\text{Slack} = \text{Deadline} - \text{Duration} \quad(\text{for a task that can start at day 0})
$$

| Activity | Duration | Slack |
|---|---:|---:|
| A — Stage setup | 2 days | $5-2=3$ days |
| B — Audio-visual & sound | 5 days | $5-5=0$ (critical) |
| C — Banner printing | 3 days | $5-3=2$ days |

**Why it matters:** tasks with positive slack can be slid into quieter days to fix worker shortages. Tasks with zero slack cannot move without moving the deadline.

## 9.9 Resource Leveling

**Resource leveling** is a scheduling technique that delays non-critical tasks *within their slack* to resolve over-allocations and smooth resource usage.

**Scenario:** campus event setup, 5-day deadline, at most **6 staff per day**.

| Activity | Task name | Duration | Workers | Slack |
|---|---|---:|---:|---|
| A | Stage setup | 2 days | 2 | 3 days |
| B | Audio-visual (AV) & sound | 5 days | 4 | 0 (critical) |
| C | Banner printing | 3 days | 2 | 2 days |

### Step 1 — Schedule everything as early as possible

| Day | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|
| A (2 workers) | 2 | 2 | – | – | – |
| B (4 workers) | 4 | 4 | 4 | 4 | 4 |
| C (2 workers) | 2 | 2 | 2 | – | – |
| **Total** | **8** | **8** | 6 | 4 | 4 |

Days 1 and 2 need 8 workers, but only 6 are available, so the plan is **over-allocated**. Days 4 and 5 use only 4 workers, so staff sit idle.

### Step 2 — Delay a non-critical task within its slack

B is critical and cannot move. C has 2 days of slack, so start C **2 days later** (days 3–5). It still finishes by the deadline.

| Day | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|
| A (2 workers) | 2 | 2 | – | – | – |
| B (4 workers) | 4 | 4 | 4 | 4 | 4 |
| C (2 workers) | – | – | 2 | 2 | 2 |
| **Total** | **6** | **6** | **6** | **6** | **6** |

<!-- viz:spm-resource-leveling -->

Demand is now a steady 6 workers per day: no overload and no idle days, and the deadline is unchanged.

> **Benefits of resource leveling:** fewer overtime hours and less burnout, lower costs (no extra hiring or idle staff), steadier resource usage and less stress on the team. **Limit:** it only uses slack; if the over-allocation cannot be fixed within slack, the deadline must move or more resources must be added.

## 9.10 Developing the Project Team: Tuckman Model

Bruce Tuckman described five stages of team development, from kickoff to closure:

<!-- viz:spm-tuckman -->

| Stage | What it looks like |
|---|---|
| 1. **Forming** | Members are introduced; behavior is polite and guarded; very little project work is done |
| 2. **Storming** | Members clash over working styles, tools and leadership boundaries; interpersonal conflict is common |
| 3. **Norming** | The team sets shared ground rules, workflows and mutual trust; collaboration replaces friction |
| 4. **Performing** | Relationships are settled; the team works at peak efficiency and solves complex problems smoothly |
| 5. **Adjourning** | Deliverables are complete; the team disbands and members move to new assignments |

> **Scenario practice:** "Two developers keep arguing about whether to use React or Angular, and both want to lead." → **Storming**. "The team has agreed on code-review rules and a daily stand-up time." → **Norming**.

## 9.11 Conflict Handling Modes

Blake and Mouton described different strategies for resolving team disagreements. Confrontation is the most effective mode and withdrawal the least:

<!-- viz:spm-conflict-modes -->

| Mode | Description |
|---|---|
| **Confrontation / problem-solving** | Directly addresses disagreements to find a **win/win** solution. Most effective when both the task and the relationship matter |
| **Collaborating** | Incorporates multiple viewpoints and insights to build deep consensus and long-term commitment |
| **Compromise** | Give-and-take bargaining; each party gives up something to reach *partial* satisfaction |
| **Smoothing / accommodating** | Emphasizes areas of agreement and downplays differences to preserve harmony |
| **Forcing / directing** | A **win/lose** approach using formal authority to push one viewpoint. Best kept for emergencies |
| **Withdrawal / avoidance** | Retreating from an actual or potential disagreement. Least desirable unless the issue is trivial |

> **Exam tip:** *confrontation* sounds negative, but in project management it means facing the problem directly. It is the **most effective** mode. *Withdrawal* is the **least** effective.

## Key points to remember

- Resource management covers **people and physical resources**, through **six processes**.
- **Maslow:** physiological → safety → social → esteem → self-actualization; lower needs come first.
- **Covey's habits** 1–7; habit 5 is empathic listening.
- Work assignment: requirements → approach → **WBS** → **OBS + RAM**.
- **RACI:** many R's, exactly **one A** per task.
- **Slack** = how long a task can slip; critical path tasks have 0 slack.
- **Resource leveling** delays non-critical tasks within their slack to remove over-allocation.
- **Tuckman:** forming → storming → norming → performing → adjourning.
- **Conflict modes:** confrontation is most effective, withdrawal is least.
