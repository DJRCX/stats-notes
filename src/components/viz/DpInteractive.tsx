import { Quiz, StudyChecklist, type Question } from "./StudyInteractive"

const questions: Question[] = [
  {
    question: "Which two properties are commonly associated with Dynamic Programming?",
    options: ["Sorting and searching", "Overlapping subproblems and optimal substructure", "Greedy choice and recursion only", "Divide and conquer only"],
    answer: 1,
    explanation: "DP commonly relies on overlapping subproblems and optimal substructure.",
  },
  {
    question: "What is the main purpose of storing results in DP?",
    options: ["Increase recursion depth", "Avoid repeated calculations", "Make every algorithm O(1)", "Remove the need for base cases"],
    answer: 1,
    explanation: "Stored results are reused instead of recalculating the same subproblems.",
  },
  {
    question: "In 0/1 Knapsack, how many times can an item be selected?",
    options: ["Unlimited times", "Exactly twice", "At most once", "Only if its value is positive"],
    answer: 2,
    explanation: "Each item is either selected (1) or not selected (0).",
  },
  {
    question: "What does dp[i][j] represent in LCS?",
    options: ["The number of matching characters at exactly i and j", "The LCS length of two prefixes", "The longest substring", "The number of ways to rearrange strings"],
    answer: 1,
    explanation: "It stores the LCS length for prefixes of lengths i and j.",
  },
  {
    question: "What is the base case for minimum coin change?",
    options: ["dp[0] = 1", "dp[0] = infinity", "dp[0] = 0", "dp[1] = 0"],
    answer: 2,
    explanation: "Zero coins are needed to make amount zero.",
  },
  {
    question: "What is the base case for counting coin combinations?",
    options: ["dp[0] = 0", "dp[0] = 1", "dp[0] = -1", "dp[0] = infinity"],
    answer: 1,
    explanation: "There is one way to form zero: select no coins.",
  },
  {
    question: "Coins [1, 3, 4], amount 6. What is the minimum number of coins?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "3 + 3 makes 6 using two coins.",
  },
  {
    question: "In coin change combinations, why is the coin loop usually outside the amount loop?",
    options: ["To sort the coins", "To count combinations rather than different orderings", "To make the algorithm recursive", "To prevent using a coin more than once"],
    answer: 1,
    explanation: "Processing one denomination at a time avoids counting permutations separately.",
  },
]

const tasks = [
  "Understand what Dynamic Programming means",
  "Understand memoization and tabulation",
  "Understand overlapping subproblems",
  "Understand optimal substructure",
  "Compare Greedy and DP",
  "Understand why DP stores results",
  "Derive 0/1 Knapsack recurrence",
  "Manually construct a Knapsack DP table",
  "Derive LCS recurrence",
  "Manually construct an LCS DP table",
  "Derive minimum coin change recurrence",
  "Derive coin change counting recurrence",
  "Understand the difference between combinations and permutations",
  "Implement all three problems without looking at notes",
]

export function DpQuiz() {
  return <Quiz id="dp" title="DP Knowledge Check" questions={questions} />
}

export function DpStudyChecklist() {
  return <StudyChecklist storageKey="stats-notes-dp-checklist" title="Your DP study checklist" tasks={tasks} />
}
