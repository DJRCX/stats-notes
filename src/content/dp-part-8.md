# Part 8 — Final Revision Notes

Here is a compact revision sheet to review before an examination.

| Topic | Remember this |
|---|---|
| Dynamic Programming | Solve smaller problems and store their results |
| Memoization | Top-down, recursion + caching |
| Tabulation | Bottom-up, iterative DP table |
| Overlapping Subproblems | Same subproblems appear repeatedly |
| Optimal Substructure | Optimal larger solution uses optimal smaller solutions |
| Greedy | Makes locally optimal choices |
| 0/1 Knapsack | Include or exclude each item |
| LCS | Match characters or take the maximum of two alternatives |
| Minimum Coin Change | Minimize the number of coins |
| Coin Change Ways | Count unique combinations |

## How I recommend studying these topics

Don't try to memorize all the recurrence relations at once. Study them in this order:

<!-- viz:dp-study-checklist -->

**My biggest recommendation:** For every DP problem, practice manually filling the table on paper before writing code. If you understand what each cell represents and why its value is calculated from previous cells, the code becomes much easier.

The real skill in Dynamic Programming is not memorizing the algorithms. It is learning how to identify the state, discover the choices, and derive the recurrence relation yourself.
