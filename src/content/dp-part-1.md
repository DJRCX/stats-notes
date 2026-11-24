# Part 1 — Introduction to Dynamic Programming

## 1. What is Dynamic Programming?

### 1.1 Definition

**Dynamic Programming (DP)** is an algorithmic problem-solving technique in which a complicated problem is divided into smaller overlapping subproblems. Their solutions are stored and reused to avoid performing the same calculations repeatedly.

In simpler words:

> Dynamic Programming means solving a problem by breaking it into smaller problems, remembering their answers, and reusing those answers whenever needed.

The primary purpose of DP is to reduce unnecessary repeated computations and improve the efficiency of an algorithm.

### 1.2 Let's understand with an example

Consider the Fibonacci sequence.

The Fibonacci sequence is defined as:

$$
F(n)=F(n-1)+F(n-2)
$$

Where:

$$
F(0)=0,\quad F(1)=1
$$

The sequence looks like this:

| n | Fibonacci value |
|---:|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |
| 6 | 8 |
| 7 | 13 |

Suppose we want to calculate $F(5)$.

Using recursion:

$$
F(5)=F(4)+F(3)
$$

Expanding further:

$$
F(5)=[F(3)+F(2)]+[F(2)+F(1)]
$$

Notice something?

**We calculate $F(2)$ more than once, and $F(3)$ is also calculated multiple times.**

This is unnecessary work.

<!-- viz:dp-fib-recursion-tree -->

As the input grows, the number of repeated calculations increases significantly.

### 1.3 How does Dynamic Programming solve this?

Instead of calculating the same Fibonacci number repeatedly, we calculate it once and store its result.

For example:

| n | Stored result |
|---:|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 2 |
| 4 | 3 |
| 5 | 5 |

Whenever we need $F(3)$, we simply retrieve its previously calculated value.

We don't calculate it again.

This is the fundamental idea behind Dynamic Programming.

### 1.4 Two approaches to Dynamic Programming

There are two major approaches.

**A. Memoization (Top-Down Approach)**

- Starts with the original problem.
- Breaks it into smaller subproblems using recursion.
- Stores the results of solved subproblems.
- Checks whether a result already exists before calculating it again.

Example:

```python
dp = {}

def fib(n):
    if n <= 1:
        return n

    if n in dp:
        return dp[n]

    dp[n] = fib(n - 1) + fib(n - 2)

    return dp[n]
```

Here, the dictionary `dp` stores previously calculated Fibonacci numbers.

**B. Tabulation (Bottom-Up Approach)**

- Starts with the smallest subproblems.
- Solves them first.
- Stores their results in a table.
- Uses those results to solve increasingly larger problems.

Example:

```python
def fib(n):
    dp = [0] * (n + 1)

    dp[0] = 0

    if n >= 1:
        dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]
```

<!-- viz:dp-memo-vs-tabulation -->

| Memoization | Tabulation |
|---|---|
| Top-down | Bottom-up |
| Uses recursion | Usually uses loops |
| Calculates when needed | Calculates states in an order |
| Uses a cache | Uses a DP table |
| Can have recursion overhead | Avoids recursion overhead |

**Important:** Both approaches implement Dynamic Programming. The choice depends on the problem and implementation requirements.

---

## 2. Overlapping Subproblems and Optimal Substructure

These are two fundamental properties that help us identify whether a problem can be solved using Dynamic Programming.

Let's understand both separately.

### 2.1 Overlapping Subproblems

**Definition:**

A problem has overlapping subproblems when the same smaller problems are solved repeatedly while solving the original problem.

In simple words:

> If solving a problem requires calculating the same smaller problem multiple times, those smaller problems are overlapping subproblems.

Let's revisit Fibonacci.

$$
F(5)=F(4)+F(3)
$$

And:

$$
F(4)=F(3)+F(2)
$$

We can see that $F(3)$ is required in both calculations.

Therefore, $F(3)$ is an overlapping subproblem.

<!-- viz:dp-fib-repeated-subproblems -->

**Why does this matter?**

Without Dynamic Programming:

- The same subproblem gets calculated repeatedly.
- Processing time increases.
- Large inputs can become computationally expensive.

With Dynamic Programming:

- Calculate a subproblem once.
- Store its answer.
- Reuse it whenever required.

This eliminates redundant calculations.

### 2.2 Optimal Substructure

**Definition:**

A problem has optimal substructure when its optimal solution can be constructed using optimal solutions of its smaller subproblems.

In simpler words:

> If we can solve smaller parts optimally and combine those solutions to obtain the optimal solution to the original problem, the problem has optimal substructure.

Let's understand with an example.

Imagine you want to travel from City A to City C through City B.

<!-- viz:dp-shortest-path -->

Suppose:

- Shortest distance from A to B = 10 km.
- Shortest distance from B to C = 15 km.

Then:

$$
Shortest(A,C)=Shortest(A,B)+Shortest(B,C)
$$

$$
=10+15=25\text{ km}
$$

The optimal solution from A to C can be constructed using optimal solutions to smaller problems.

This demonstrates optimal substructure, assuming the route from A to C passes through B.

### 2.3 Difference between the two

| Overlapping Subproblems | Optimal Substructure |
|---|---|
| Focuses on repeated calculations | Focuses on how solutions are constructed |
| Same subproblems appear repeatedly | Optimal smaller solutions contribute to the optimal larger solution |
| DP stores and reuses results | DP combines smaller optimal results |
| Example: Fibonacci | Example: Shortest path, Knapsack |

**Remember this distinction:**

- Overlapping subproblems explain *why storing results is useful*.
- Optimal substructure explains *why solving smaller problems can help solve the bigger problem*.

Both properties commonly appear in Dynamic Programming problems.

---

## 3. Difference Between Greedy Algorithm and Dynamic Programming

Greedy and Dynamic Programming are two algorithmic approaches used to solve optimization problems.

Both can produce optimal solutions, but they work differently.

### 3.1 What is a Greedy Algorithm?

A Greedy Algorithm makes the best-looking decision at each individual step, hoping that these local decisions produce the globally optimal solution.

It does not generally reconsider previous decisions.

For example:

Imagine you have to make 30 taka using coins:

- 20 taka
- 10 taka
- 5 taka
- 2 taka
- 1 taka

A greedy approach selects the largest available coin first.

$$
30=20+10
$$

It chooses 20 first, then 10.

For this particular coin system, the result is optimal.

However, greedy does not always produce the optimal answer.

### 3.2 Example: Greedy vs DP

Consider a coin system:

- 1 taka
- 3 taka
- 4 taka

Target amount:

$$
Amount=6
$$

**Greedy approach:**

1. Choose the largest coin not exceeding 6 → 4.
2. Remaining amount = 2.
3. Choose 1.
4. Choose another 1.

Result:

$$
6=4+1+1
$$

Total coins = 3.

**Dynamic Programming approach:**

DP considers different possible combinations.

$$
6=3+3
$$

Total coins = 2.

> **DP finds the optimal solution**

<!-- viz:dp-greedy-vs-dp-coins -->

This example demonstrates why greedy is not always sufficient.

### 3.3 Comparison table

| Feature | Greedy | Dynamic Programming |
|---|---|---|
| Decision-making | Local best decision | Considers multiple possibilities |
| Previous decisions | Usually not reconsidered | Evaluates combinations of subproblems |
| Stores results | Usually no | Yes |
| Computation | Often faster and simpler | Often requires more memory |
| Optimal solution | Only when greedy-choice property holds | When the DP recurrence correctly captures the optimal substructure |
| Example | Activity selection | 0/1 Knapsack |

### 3.4 When should we use which?

Use Greedy when:
- A locally optimal decision can be proven to lead to a globally optimal solution.
- The problem has the greedy-choice property.
- A simpler, faster solution is possible.

Use Dynamic Programming when:
- The problem has overlapping subproblems.
- The problem has optimal substructure.
- Making one local decision might prevent a better overall solution.

**Exam tip:** Never assume that a greedy algorithm always gives an optimal solution just because it selects the largest, smallest, or best-looking option at each step.

---

## 4. Why Are Results Stored in DP?

This is one of the most important conceptual questions.

### 4.1 The problem without storing results

Consider:

$$
F(5)=F(4)+F(3)
$$

To calculate these values, recursion repeatedly solves smaller Fibonacci problems.

Some subproblems are calculated multiple times.

This creates redundant computation.

For large inputs, the recursive Fibonacci algorithm has exponential time complexity:

$$
O(2^n)
$$

### 4.2 The solution: Store the results

Dynamic Programming uses an array, matrix, or dictionary to store calculated results.

For example:

```python
dp = [0, 1, 1, 2, 3, 5]
```

Now, if we need $F(3)$, we can access:

```python
dp[3]
```

Instead of calculating it again.

### 4.3 Main reasons for storing results

1. **Avoid repeated calculations:** Each subproblem is solved only once in a properly designed DP implementation.
2. **Improve performance:** Reduces unnecessary computational work.
3. **Reuse previous solutions:** Larger problems can use already calculated smaller results.
4. **Make complex problems manageable:** A large problem becomes a collection of smaller, organized states.
5. **Support reconstruction:** In some DP problems, stored decisions or states can help reconstruct the actual optimal solution, not just its value.

### 4.4 Time complexity improvement

Consider Fibonacci:

| Approach | Time Complexity |
|---|---|
| Ordinary recursion | $O(2^n)$ upper bound |
| Memoization | $O(n)$ |
| Tabulation | $O(n)$ |

The storage space is generally $O(n)$ for the two DP approaches.

**The key takeaway:**

Dynamic Programming does not make calculations magically faster. It makes them efficient by avoiding calculations that have already been performed.
