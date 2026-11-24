# Part 5 — Comparing the Three DP Problems

Now that we've studied the three major problems, let's compare how they use Dynamic Programming.

| Feature | 0/1 Knapsack | LCS | Coin Change |
|---|---|---|---|
| Main objective | Maximize value | Maximize common subsequence length | Minimize coins or count ways |
| DP state | Item and capacity | Two string indices | Target amount |
| DP structure | 2D | 2D | Usually 1D |
| Main operation | `max()` | `max()` | `min()` or `+` |
| Repeated selection | No | Not applicable | Yes |
| Time complexity | $O(nW)$ | $O(mn)$ | $O(nA)$ |

## The most important recurrence relations

These are worth memorizing after understanding their derivations.

**1. 0/1 Knapsack**

$$
dp[i][w]=\max(
dp[i-1][w],
v_i+dp[i-1][w-w_i]
)
$$


**2. Longest Common Subsequence**

$$
dp[i][j]=
\begin{cases}
1+dp[i-1][j-1] & X_i=Y_j\\
\max(dp[i-1][j],dp[i][j-1]) & X_i\neq Y_j
\end{cases}
$$


**3. Minimum Number of Coins**

$$
dp[a]=\min_c(1+dp[a-c])
$$


**4. Number of Ways**

$$
dp[a]=dp[a]+dp[a-c]
$$
