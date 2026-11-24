# Part 6 — How to Identify and Solve a DP Problem

One of the biggest challenges in DSA is recognizing when a problem requires Dynamic Programming.

Here is a systematic approach.

## 9. The Five-Step DP Problem-Solving Method

1. **Identify the problem's state**

   Ask: What information do I need to describe a smaller subproblem?

   Examples:
   - Knapsack: Current item and capacity.
   - LCS: Two string positions.
   - Coin Change: Current amount.

2. **Identify the choices**

   Ask: What decisions can I make at each step?

   Examples:
   - Knapsack: Include or exclude an item.
   - LCS: Match characters or skip one.
   - Coin Change: Choose a coin.

3. **Define the recurrence relation**

   Express the current state using previously solved states.

4. **Define the base cases**

   Identify the smallest problems whose answers are already known.

5. **Determine the computation order**

   Decide whether to use memoization or tabulation and ensure dependencies are calculated first.

## 10. Common mistakes students make in Dynamic Programming

| Mistake | Correct understanding |
|---|---|
| Memorizing code without understanding states | Understand what every DP cell represents |
| Forgetting base cases | Always establish the simplest possible state |
| Confusing 0/1 and unbounded Knapsack | Check whether an item can be reused |
| Using `max()` everywhere | Choose the operation based on the objective |
| Confusing LCS and substring | Subsequence does not require continuity |
| Setting `dp[0] = 0` in every coin problem | Minimum coins uses 0; counting ways uses 1 |
| Using the wrong loop order in coin change | Distinguish combinations from permutations |
| Forgetting impossible cases | Use infinity or another suitable sentinel |
