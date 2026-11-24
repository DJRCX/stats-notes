# Part 2 — 0/1 Knapsack Problem

> **DP Problem 01**

<!-- viz:dp-knapsack-items -->

## 5. Understanding the 0/1 Knapsack Problem

### 5.1 What is Knapsack?

Imagine you have a backpack with a maximum weight capacity.

You are given several items. Each item has:

- A weight.
- A value or profit.

Your objective is to select items so that:

1. The total weight does not exceed the backpack capacity.
2. The total value is maximized.

This is known as the Knapsack Problem.

### 5.2 Why is it called 0/1 Knapsack?

The name 0/1 indicates that each item has only two possible choices:

- `0` → Do not take the item.
- `1` → Take the item.

You cannot take half an item.

You also cannot take the same item multiple times.

This is why it is called the 0/1 Knapsack Problem or Binary Knapsack Problem.

### 5.3 Example problem

Suppose you have the following items:

| Item | Weight | Value |
|---|---:|---:|
| A | 2 kg | 12 |
| B | 1 kg | 10 |
| C | 3 kg | 20 |
| D | 2 kg | 15 |

Maximum backpack capacity:

$$
W=5
$$

Our objective is to maximize the total value without exceeding 5 kg.

Let's examine some possible combinations.

| Selected items | Total weight | Total value |
|---|---:|---:|
| A + B | 3 | 22 |
| A + C | 5 | 32 |
| A + D | 4 | 27 |
| B + C | 4 | 30 |
| B + D | 3 | 25 |
| C + D | 5 | 35 |
| A + B + D | 5 | 37 |

> **Optimal answer: 37**

The best combination is:

$$
A+B+D
$$

Total weight:

$$
2+1+2=5
$$

Total value:

$$
12+10+15=37
$$

### 5.4 How do we solve it using DP?

First, we need to understand the state.

Define:

$$
dp[i][w]
$$

Where:

- $i$ = Number of items considered.
- $w$ = Current available capacity.
- $dp[i][w]$ = Maximum value achievable using the first $i$ items with capacity $w$.

This is the most important part of understanding Knapsack DP.

### 5.5 Base cases

There are two situations where the answer is always zero.

**Case 1: No items available**

$$
dp[0][w]=0
$$

If there are no items, we cannot obtain any value.

**Case 2: No capacity available**

$$
dp[i][0]=0
$$

If the backpack has zero capacity, we cannot carry anything.

### 5.6 Recurrence relation

For each item, we have two choices.

**Choice 1: Exclude the current item**

If we don't take the item:

$$
dp[i][w]=dp[i-1][w]
$$

We simply use the previous best result.

**Choice 2: Include the current item**

If the item's weight does not exceed the current capacity:

$$
dp[i][w]=value_i+dp[i-1][w-weight_i]
$$

Why $i-1$?

Because we cannot use the same item again. We must look at the previous row.

**Final recurrence:**

$$
dp[i][w]=
\begin{cases}
dp[i-1][w], & weight_i>w\\
\max(dp[i-1][w], value_i+dp[i-1][w-weight_i]), & weight_i\leq w
\end{cases}
$$

This formula is the heart of 0/1 Knapsack.

### 5.7 Understanding the DP table

Let's simplify the example.

Items:

| Item | Weight | Value |
|---|---:|---:|
| A | 2 | 12 |
| B | 1 | 10 |
| C | 3 | 20 |
| D | 2 | 15 |

Capacity = 5.

The DP table:

| Items considered | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| None | 0 | 0 | 0 | 0 | 0 | 0 |
| A | 0 | 0 | 12 | 12 | 12 | 12 |
| A, B | 0 | 10 | 12 | 22 | 22 | 22 |
| A, B, C | 0 | 10 | 12 | 22 | 30 | 32 |
| A, B, C, D | 0 | 10 | 15 | 25 | 30 | **37** |

The answer is found in the last cell:

$$
dp[4][5]=37
$$

### 5.8 Implementation (Python)

```python
def knapsack(weights, values, capacity):

    n = len(weights)

    dp = [[0] * (capacity + 1)
          for _ in range(n + 1)]

    for i in range(1, n + 1):

        for w in range(capacity + 1):

            if weights[i - 1] <= w:

                include = (
                    values[i - 1]
                    + dp[i - 1][w - weights[i - 1]]
                )

                exclude = dp[i - 1][w]

                dp[i][w] = max(include, exclude)

            else:

                dp[i][w] = dp[i - 1][w]

    return dp[n][capacity]


weights = [2, 1, 3, 2]
values = [12, 10, 20, 15]

print(knapsack(weights, values, 5))
```

Output:

```text
37
```

### 5.9 Complexity analysis

Let:

- $n$ = Number of items.
- $W$ = Maximum capacity.

| Complexity | Value |
|---|---|
| Time | $O(nW)$ |
| Space | $O(nW)$ |

This is called pseudo-polynomial time because complexity depends on the numerical capacity $W$, not just the number of input items.

### 5.10 Important exam concept: 0/1 vs Unbounded Knapsack

These two problems look similar, but their recurrence differs.

| 0/1 Knapsack | Unbounded Knapsack |
|---|---|
| Each item can be selected once | Items can be selected repeatedly |
| Uses previous row when including | Can reuse the current item |
| 0/1 decision | Unlimited selection |
| Often loops capacity backwards in optimized DP | Often loops capacity forwards |

For 0/1 Knapsack, the one-dimensional optimized implementation is:

```python
for i in range(n):
    for w in range(capacity, weights[i] - 1, -1):
        dp[w] = max(
            dp[w],
            values[i] + dp[w - weights[i]]
        )
```

Notice that capacity runs backwards. This prevents reusing the current item.
