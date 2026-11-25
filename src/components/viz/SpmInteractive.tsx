import { Quiz, StudyChecklist, type Question } from "./StudyInteractive"

const questions: Question[] = [
  {
    question: "Which of these is a physical resource?",
    options: ["Project sponsor", "Office space", "QA tester", "Supplier's account manager"],
    answer: 1,
    explanation: "Physical resources are tangible items such as computers, office space, equipment and software.",
  },
  {
    question: "Which resource management process deals with tracking performance, giving feedback and resolving conflicts?",
    options: ["Developing the project team", "Acquiring resources", "Managing the project team", "Controlling resources"],
    answer: 2,
    explanation: "Managing the team is day-to-day tracking, feedback and conflict resolution. Controlling resources is about physical resources.",
  },
  {
    question: "Recognition such as \"employee of the month\" satisfies which Maslow need?",
    options: ["Safety", "Social", "Esteem", "Self-actualization"],
    answer: 2,
    explanation: "Esteem needs include recognition, status and respect from peers and managers.",
  },
  {
    question: "Which Covey habit is about empathic listening?",
    options: ["Be proactive", "Think win/win", "Seek first to understand, then to be understood", "Synergize"],
    answer: 2,
    explanation: "Habit 5 means listening to understand stakeholder needs before speaking.",
  },
  {
    question: "In a RACI chart, how many people can be Accountable for one task?",
    options: ["Exactly one", "At least two", "Any number", "None — A is optional"],
    answer: 0,
    explanation: "There is strictly one A per task; several people can share R.",
  },
  {
    question: "A task on the critical path has how much slack?",
    options: ["1 day", "0 days", "It depends on the number of workers", "Equal to its duration"],
    answer: 1,
    explanation: "The critical path is the longest sequence of tasks, so any delay moves the deadline.",
  },
  {
    question: "Resource leveling resolves over-allocation mainly by…",
    options: ["Hiring more staff", "Delaying critical tasks", "Delaying non-critical tasks within their slack", "Cutting scope"],
    answer: 2,
    explanation: "Leveling slides tasks that have slack into quieter periods without changing the deadline.",
  },
  {
    question: "Team members argue about tools and who should lead. Which Tuckman stage is this?",
    options: ["Forming", "Storming", "Norming", "Adjourning"],
    answer: 1,
    explanation: "Storming is marked by clashes over working styles, tools and leadership.",
  },
  {
    question: "Which conflict handling mode is generally the most effective?",
    options: ["Forcing", "Smoothing", "Withdrawal", "Confrontation / problem-solving"],
    answer: 3,
    explanation: "Confrontation faces the problem directly and aims for a win/win solution.",
  },
  {
    question: "A project manager sends a weekly status report to the client. This communication is…",
    options: ["Internal and formal", "Internal and informal", "External and formal", "External and informal"],
    answer: 2,
    explanation: "The client is outside the project team (external) and a status report is official (formal).",
  },
  {
    question: "How many communication channels does a team of 8 people have?",
    options: ["16", "28", "56", "64"],
    answer: 1,
    explanation: "8 × 7 ÷ 2 = 28.",
  },
  {
    question: "Which medium is best for an urgent, complex issue?",
    options: ["Team chat", "Formal report", "Phone call or live meeting", "Project dashboard"],
    answer: 2,
    explanation: "A call or live meeting lets questions be answered immediately.",
  },
]

const tasks = [
  "Explain human vs. physical resources with examples",
  "List the six resource management processes in order",
  "Draw Maslow's pyramid and give a project example for each level",
  "Describe the IT project organizational structure",
  "List Covey's 7 habits and explain empathic listening",
  "Explain the four steps of work definition and assignment",
  "Build and check a RACI chart (one A per task)",
  "Calculate slack and identify the critical path",
  "Level a resource histogram within slack",
  "Name and describe the five Tuckman stages",
  "Rank the conflict handling modes",
  "Classify messages as internal/external and formal/informal",
  "Calculate communication channels, including added channels",
  "List what a communication management plan specifies",
  "Choose the right medium for a given situation",
]

export function SpmQuiz() {
  return <Quiz id="spm" title="Software Project Management Knowledge Check" questions={questions} />
}

export function SpmStudyChecklist() {
  return <StudyChecklist storageKey="stats-notes-spm-checklist" title="Your SPM study checklist" tasks={tasks} />
}
