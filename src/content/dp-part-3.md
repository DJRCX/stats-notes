# Part 3 — Longest Common Subsequence (LCS)

> **DP Problem 02**

<!-- viz:dp-lcs-matching -->

## 6. Understanding Longest Common Subsequence

### 6.1 What is a Subsequence?

A subsequence is a sequence of characters that appears in the original sequence in the same relative order.

However, the characters do not need to be next to each other.

For example:

String:

```text
ABCDE
```

Valid subsequences include:

```text
ACE
BCD
ABD
ABCE
```

But:

```text
AEC
```

is not a valid subsequence because the relative order of A, E and C is different.

### 6.2 What is Common Subsequence?

A common subsequence is a subsequence that exists in two different strings.

Example:

```text
String 1: ABCDGH
String 2: AEDFHR
```

One common subsequence is:

```text
ADH
```

Another common subsequence is:

```text
AH
```

The longest common subsequence is:

```text
ADH
```

Therefore:

$$
LCS=3
$$

### 6.3 Why do we use Dynamic Programming?

Because the problem can be broken into smaller problems involving prefixes of the two strings.

Define:

$$
dp[i][j]
$$

Where:

- $i$ = Length of the prefix of the first string.
- $j$ = Length of the prefix of the second string.
- $dp[i][j]$ = Length of the longest common subsequence between those prefixes.

### 6.4 Base cases

If either string is empty, the longest common subsequence must be zero.

$$
dp[i][0]=0
$$

$$
dp[0][j]=0
$$

Because an empty string has no common characters with another string.

### 6.5 Recurrence relation

There are two possibilities.

**Case 1: Characters match**

If:

$$
X[i-1]=Y[j-1]
$$

We can include that character in our subsequence.

$$
dp[i][j]=1+dp[i-1][j-1]
$$

Why?

Because we matched one additional character, and we need the best result from the remaining prefixes.

**Case 2: Characters do not match**

If:

$$
X[i-1]\neq Y[j-1]
$$

We have two possibilities:

- Ignore the current character of the first string.
- Ignore the current character of the second string.

We choose the better result.

$$
dp[i][j]=\max(dp[i-1][j],dp[i][j-1])
$$

**Complete recurrence:**

$$
dp[i][j]=
\begin{cases}
0 & i=0\text{ or }j=0\\
1+dp[i-1][j-1] & X[i-1]=Y[j-1]\\
\max(dp[i-1][j],dp[i][j-1]) & \text{otherwise}
\end{cases}
$$

### 6.6 Solving an example using a DP table

Given:

```text
X = ABCDGH
Y = AEDFHR
```

We create a table with:

- Rows representing characters of X.
- Columns representing characters of Y.

*Each cell represents the LCS length of the corresponding prefixes.*

| | ∅ | A | E | D | F | H | R |
|---|---:|---:|---:|---:|---:|---:|---:|
| ∅ | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| A | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| B | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| C | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| D | 0 | 1 | 1 | 2 | 2 | 2 | 2 |
| G | 0 | 1 | 1 | 2 | 2 | 2 | 2 |
| H | 0 | 1 | 1 | 2 | 2 | 3 | 3 |

The final cell contains:

$$
dp[6][6]=3
$$

Therefore:

$$
\boxed{LCS=3}
$$

The actual subsequence is:

```text
ADH
```

### 6.7 Implementation (Python)

```python
def lcs(X, Y):

    m = len(X)
    n = len(Y)

    dp = [[0] * (n + 1)
          for _ in range(m + 1)]

    for i in range(1, m + 1):

        for j in range(1, n + 1):

            if X[i - 1] == Y[j - 1]:

                dp[i][j] = 1 + dp[i - 1][j - 1]

            else:

                dp[i][j] = max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                )

    return dp[m][n]


X = "ABCDGH"
Y = "AEDFHR"

print(lcs(X, Y))
```

Output:

```text
3
```

### 6.8 Complexity analysis

Let:

- $m$ = Length of the first string.
- $n$ = Length of the second string.

| Complexity | Value |
|---|---|
| Time | $O(mn)$ |
| Space | $O(mn)$ |

### 6.9 Important distinction: Substring vs Subsequence

This is a very common examination and interview question.

| Substring | Subsequence |
|---|---|
| Characters must be continuous | Characters need not be continuous |
| Order must be maintained | Order must be maintained |
| Example: ABC in ABCDE | Example: ACE in ABCDE |

For example, consider:

```text
ABCDE
ACE
```

`ACE` is a subsequence of `ABCDE`, but it is not a substring.

**Remember:** LCS means Longest Common Subsequence, not Longest Common Substring.
