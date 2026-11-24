# Part 4 — Coin Change Problem

> **DP Problem 03**

The Coin Change Problem is another classic Dynamic Programming problem.

It has two popular variations:

1. Minimum Number of Coins.
2. Number of Ways to Make an Amount.

Although they use the same input, their objectives and recurrence relations are different.

<!-- viz:dp-coin-change-overview -->

## 7. Coin Change — Minimum Number of Coins

### 7.1 Problem definition

You are given:

- A collection of coin denominations.
- A target amount.

Your task is to find the minimum number of coins required to make that amount.

Assume that each denomination can be used unlimited times.

### 7.2 Example

Available coins:

```text
Coins = [1, 3, 4]
```

Target amount:

```text
Amount = 6
```

Possible combinations:

| Combination | Number of coins |
|---|---:|
| 1 + 1 + 1 + 1 + 1 + 1 | 6 |
| 3 + 3 | 2 |
| 4 + 1 + 1 | 3 |
| 3 + 1 + 1 + 1 | 4 |

The minimum number of coins is:

$$
\boxed{2}
$$

Because:

$$
6=3+3
$$

### 7.3 Defining the DP state

Let:

$$
dp[a]
$$

Represent the minimum number of coins required to make amount $a$.

For example:

- `dp[0]` = Minimum coins required to make 0.
- `dp[1]` = Minimum coins required to make 1.
- `dp[6]` = Minimum coins required to make 6.

### 7.4 Base case

$$
dp[0]=0
$$

We need zero coins to make an amount of zero.

For all other amounts, initially assign infinity:

$$
dp[a]=\infty
$$

Why infinity?

Because initially we don't know whether an amount can be constructed.

### 7.5 Recurrence relation

For every amount $a$, try each available coin.

If the coin value is $c$, then:

$$
dp[a]=\min(dp[a],1+dp[a-c])
$$

But this transition is valid only if:

$$
a\geq c
$$

Why do we add 1?

Because we are selecting one coin of denomination $c$, then solving the remaining amount $a-c$.

**Complete recurrence:**

$$
dp[a]=
\min_{c\in Coins,\ c\leq a}
(1+dp[a-c])
$$

If no valid combination exists, the answer is infinity (which we report as impossible).

### 7.6 Understanding the DP table

Given:

```text
Coins = [1, 3, 4]
Amount = 6
```

We calculate the minimum number of coins for every amount.

| Amount | Minimum coins | One optimal combination |
|---:|---:|---|
| 0 | 0 | None |
| 1 | 1 | 1 |
| 2 | 2 | 1 + 1 |
| 3 | 1 | 3 |
| 4 | 1 | 4 |
| 5 | 2 | 4 + 1 |
| 6 | **2** | 3 + 3 |

The resulting DP array is:

```text
dp = [0, 1, 2, 1, 1, 2, 2]
```

Therefore:

$$
dp[6]=2
$$

### 7.7 Implementation (Python)

```python
def min_coins(coins, amount):

    INF = float('inf')

    dp = [INF] * (amount + 1)

    dp[0] = 0

    for a in range(1, amount + 1):

        for coin in coins:

            if a >= coin:

                dp[a] = min(
                    dp[a],
                    1 + dp[a - coin]
                )

    if dp[amount] == INF:
        return -1

    return dp[amount]


coins = [1, 3, 4]

print(min_coins(coins, 6))
```

Output:

```text
2
```

### 7.8 Complexity analysis

Let:

- $A$ = Target amount.
- $n$ = Number of coin denominations.

| Complexity | Value |
|---|---|
| Time | $O(nA)$ |
| Space | $O(A)$ |

---

## 8. Coin Change — Number of Ways

This variation is different from the minimum coin problem.

### 8.1 Problem definition

You are given a set of coin denominations and a target amount.

Your task is to calculate how many different combinations of coins can produce that amount.

Assume unlimited availability of each coin.

**Important:** We count combinations, not different orderings of the same combination.

### 8.2 Example

Available coins:

```text
Coins = [1, 2, 3]
```

Target amount:

```text
Amount = 4
```

Possible combinations:

| No. | Combination |
|---:|---|
| 1 | 1 + 1 + 1 + 1 |
| 2 | 1 + 1 + 2 |
| 3 | 2 + 2 |
| 4 | 1 + 3 |

Therefore:

$$
\boxed{4\text{ ways}}
$$

Notice that:

```text
1 + 1 + 2
2 + 1 + 1
1 + 2 + 1
```

are considered the same combination.

### 8.3 Defining the DP state

Let:

$$
dp[a]
$$

Represent the number of ways to make amount $a$ using the coin denominations processed so far.

### 8.4 Base case

$$
dp[0]=1
$$

Why 1?

Because there is exactly one way to make an amount of zero: select no coins.

This is a very important detail.

### 8.5 Recurrence relation

We process coins one by one.

For each coin $c$, we update all amounts that can be formed using that coin.

$$
dp[a]=dp[a]+dp[a-c]
$$

Where:

$$
a\geq c
$$

Why addition?

Because:

- `dp[a]` represents the ways that already exist without using the newly considered coin.
- `dp[a-c]` represents additional ways that can be formed by including the current coin.

We add both possibilities.

### 8.6 Understanding the DP table

Given:

```text
Coins = [1, 2, 3]
Amount = 4
```

Initial DP array:

```text
dp = [1, 0, 0, 0, 0]
```

Now process each coin.

**Step 1: Process coin = 1**

| Amount | Ways |
|---:|---:|
| 0 | 1 |
| 1 | 1 |
| 2 | 1 |
| 3 | 1 |
| 4 | 1 |

DP:

```text
[1, 1, 1, 1, 1]
```

**Step 2: Process coin = 2**

We update the array:

- Amount 2: `dp[2] += dp[0]`
- Amount 3: `dp[3] += dp[1]`
- Amount 4: `dp[4] += dp[2]`

DP becomes:

```text
[1, 1, 2, 2, 3]
```

**Step 3: Process coin = 3**

We update:

- Amount 3: `dp[3] += dp[0]`
- Amount 4: `dp[4] += dp[1]`

Final DP:

```text
[1, 1, 2, 3, 4]
```

> **Final answer: 4 ways**

### 8.7 Implementation (Python)

```python
def count_ways(coins, amount):

    dp = [0] * (amount + 1)

    dp[0] = 1

    for coin in coins:

        for a in range(coin, amount + 1):

            dp[a] += dp[a - coin]

    return dp[amount]


coins = [1, 2, 3]

print(count_ways(coins, 4))
```

Output:

```text
4
```

### 8.8 Why does the loop order matter?

This is a particularly important concept.

For counting combinations, we use:

```python
for coin in coins:
    for amount in range(coin, target + 1):
        dp[amount] += dp[amount - coin]
```

The outer loop processes coins first.

This prevents counting different arrangements of the same combination as separate answers.

If we reverse the loops:

```python
for amount in range(1, target + 1):
    for coin in coins:
        if amount >= coin:
            dp[amount] += dp[amount - coin]
```

We count ordered sequences instead of unique combinations.

For example, `1 + 3` and `3 + 1` would be counted separately.

### 8.9 Complexity analysis

Let:

- $n$ = Number of coin denominations.
- $A$ = Target amount.

| Complexity | Value |
|---|---|
| Time | $O(nA)$ |
| Space | $O(A)$ |
