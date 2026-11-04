# Chapter 6 — Shape of the Distribution: Skewness and Kurtosis

## 6.1 Introduction to Shape of Distribution

A distribution describes how observations are spread across different values.

The shape of a distribution tells us:

- Whether data are symmetrical.

- Whether data are skewed.

- Whether the distribution has a sharp or flat peak.

- Whether one side of the distribution has a longer tail.

Your lecturer covers two main measures of shape:

- Skewness.

- Kurtosis.

## 6.2 Symmetrical Distribution

A symmetrical distribution is one in which the left and right sides of the distribution are approximately mirror images of one another.

In a perfectly symmetrical, unimodal distribution:

$$
Mean=Median=Mode
$$

<!-- viz:symmetrical-distribution -->

Characteristics:

- Both sides have approximately equal shape.

- Mean and median are equal.

- The distribution has no directional skewness.

- The skewness coefficient is zero.

## 6.3 Skewness

Skewness measures the degree and direction of asymmetry in a distribution.

A distribution is skewed when its two sides are not symmetrical.

There are two major types:

- Positive Skewness.

- Negative Skewness.

### A. Positively Skewed Distribution

A positively skewed distribution has a longer tail on the right-hand side.

It is also known as a right-skewed distribution.

**Characteristics:**

- Longer tail on the right.

- Most observations are concentrated on the left.

- The mean is generally greater than the median.

- The mean is pulled toward the longer right tail.

Relationship:

$$
Mean>Median>Mode
$$

<!-- viz:positive-skew -->

**Examples:**

- Income distributions, where a small number of people earn extremely high incomes.

- Waiting times, where most waits are short but a few are very long.

- House prices in areas with a small number of extremely expensive properties.

### B. Negatively Skewed Distribution

A negatively skewed distribution has a longer tail on the left-hand side.

It is also called a left-skewed distribution.

**Characteristics:**

- Longer tail on the left.

- Most observations are concentrated on the right.

- The median is generally greater than the mean.

- The mean is pulled toward the longer left tail.

Relationship:

$$
Mean<Median<Mode
$$

<!-- viz:negative-skew -->

**Example:**

Suppose most students receive high examination marks, but a few students receive extremely low marks.

The distribution may become negatively skewed.

### Comparison

| Positive Skewness | Negative Skewness |
| --- | --- |
| Tail extends to the right. | Tail extends to the left. |
| Mean is generally highest. | Mean is generally lowest. |
| Mean > Median > Mode. | Mean < Median < Mode. |
| Right-skewed. | Left-skewed. |

## 6.4 Coefficient of Skewness

Your lecturer uses Pearson's second coefficient of skewness.

It measures asymmetry using the mean, median and standard deviation.

### Formula

$$
Sk_p=\frac{3(Mean-Median)}{s}
$$

Where:

- $Sk_p$ = Pearson's coefficient of skewness.

- Mean = Arithmetic Mean.

- Median = Median.

- $s$ = Sample Standard Deviation.

### Interpretation

| Coefficient | Interpretation |
| --- | --- |
| $Sk_p=0$ | Symmetrical distribution |
| $0<Sk_p\leq1$ | Slight/moderate positive skew under the lecture's scale |
| $1<Sk_p\leq2$ | Moderately positively skewed |
| $2<Sk_p\leq3$ | Highly positively skewed |
| Negative values | Same interpretation, but negative direction |

The exact labels used for the magnitude of skewness are guidelines, not universal statistical boundaries.

### Step-by-Step Numerical Example

Your lecturer gives the following problem:

Calculate the coefficient of skewness for:

$$
15,\ 18,\ 2,\ 6,\ 4
$$

**Step 1: Calculate the mean.**

$$
Mean=\frac{15+18+2+6+4}{5}
$$

$$
Mean=\frac{45}{5}
$$

$$
Mean=9
$$

**Step 2: Calculate the median.**

First, arrange the data:

$$
2,\ 4,\ 6,\ 15,\ 18
$$

The middle observation is:

$$
Median=6
$$

**Step 3: Calculate standard deviation.**

For this example, your lecturer uses sample standard deviation.

$$
s=\sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}}
$$

Mean = 9.

| $x_i$ | $x_i-9$ | $(x_i-9)^2$ |
| --- | --- | --- |
| 15 | 6 | 36 |
| 18 | 9 | 81 |
| 2 | -7 | 49 |
| 6 | -3 | 9 |
| 4 | -5 | 25 |
| **Total** |  | **200** |

Substitute:

$$
s=\sqrt{\frac{200}{5-1}}
$$

$$
s=\sqrt{50}
$$

$$
s=7.071
$$

**Step 4: Apply the skewness formula.**

$$
Sk_p=\frac{3(Mean-Median)}{s}
$$

$$
Sk_p=\frac{3(9-6)}{7.071}
$$

$$
=\frac{9}{7.071}
$$

$$
Sk_p\approx1.27
$$

**Step 5: Interpret the result.**

- The coefficient is positive.

- Therefore, the distribution is positively skewed.

- Its magnitude is approximately 1.27.

According to the numerical ranges printed in your lecturer's slide, 1.27 falls into the moderately skewed category. The slide's example calls it highly skewed, which contradicts its own classification table. Use the correct numerical calculation and clarify the interpretation based on your teacher's preferred convention.

## 6.5 Moments of a Distribution

Moments are numerical measures used to describe different characteristics of a distribution.

They help us study:

- Central tendency.

- Dispersion.

- Skewness.

- Kurtosis.

Your lecturer introduces moments about the arithmetic mean.

### Formula for the $r$-th Central Moment

For ungrouped data:

$$
\mu_r=\frac{\sum(x_i-\bar{x})^r}{n}
$$

For grouped data:

$$
\mu_r=\frac{\sum f(x_i-\bar{x})^r}{N}
$$

Where:

- $\mu_r$ = $r$-th central moment.

- $x_i$ = observation or class midpoint.

- $\bar{x}$ = arithmetic mean.

- $f$ = frequency.

- $N$ = total frequency.

- $r$ = order of the moment.

### Types of Moments

| Moment | Meaning |
| --- | --- |
| First central moment ($\mu_1$) | Always zero |
| Second central moment ($\mu_2$) | Population variance |
| Third central moment ($\mu_3$) | Related to skewness |
| Fourth central moment ($\mu_4$) | Related to kurtosis |

The second moment measures variation around the mean, while higher moments help describe distribution shape.

### Moment-Based Skewness

Your supporting Dispersion document includes:

$$
\beta_1=\frac{\mu_3^2}{\mu_2^3}
$$

The moment-based coefficient of skewness is sometimes represented by:

$$
\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}
$$

Here, $\beta_1=\gamma_1^2$, so $\beta_1$ measures the squared magnitude and does not retain the direction of skewness.

Your main Skewness lecture emphasizes Pearson's formula, but you should recognize the moment-based formula because it appears in the supporting document.

## 6.6 Kurtosis

Kurtosis measures the degree of peakness or flatness of a distribution relative to a normal distribution.

In simpler terms, it describes how the distribution's shape around its center compares with a normal distribution.

There are three major types.

<!-- viz:kurtosis-types -->

### A. Leptokurtic Distribution

A leptokurtic distribution is more peaked than a normal distribution.

Characteristics:

- Sharper central peak.

- Higher kurtosis coefficient.

- Often associated with heavier tails in comparison with a normal distribution.

### B. Mesokurtic Distribution

A mesokurtic distribution has the same kurtosis coefficient as a normal distribution.

Characteristics:

- Normal reference shape.

- Neither more peaked nor flatter in terms of kurtosis.

- Kurtosis coefficient equals 3.

### C. Platykurtic Distribution

A platykurtic distribution is flatter than a normal distribution.

Characteristics:

- Flatter central peak.

- Lower kurtosis coefficient.

- Less concentrated around the central peak.

### Comparison

| Leptokurtic | Mesokurtic | Platykurtic |
| --- | --- | --- |
| More peaked | Normal reference | Flatter |
| $\beta_2>3$ | $\beta_2=3$ | $\beta_2<3$ |

## 6.7 Coefficient of Kurtosis

Your lecturer uses the following formula:

$$
\beta_2=\frac{\mu_4}{\mu_2^2}
$$

Where:

- $\beta_2$ = coefficient of kurtosis.

- $\mu_4$ = fourth central moment.

- $\mu_2$ = second central moment.

### Calculation of Moments

For each observation, you need:

- The mean.

- The deviation from mean.

- The squared deviation.

- The fourth power of deviation.

For grouped data, multiply the relevant powers by their frequencies.

### Step-by-Step Numerical Example

Your lecturer gives this exercise:

Calculate the coefficient of kurtosis for:

$$
3,\ 4,\ 2,\ 4,\ 6,\ 2,\ 5
$$

**Step 1: Calculate the mean.**

$$
\bar{x}=\frac{3+4+2+4+6+2+5}{7}
$$

$$
\bar{x}=3.7143
$$

**Step 2: Calculate the deviations.**

Create a table:

| $x_i$ | $d=x_i-\bar{x}$ | $d^2$ | $d^4$ |
| --- | --- | --- | --- |
| 3 | -0.7143 | 0.5102 | 0.2603 |
| 4 | 0.2857 | 0.0816 | 0.0067 |
| 2 | -1.7143 | 2.9388 | 8.6360 |
| 4 | 0.2857 | 0.0816 | 0.0067 |
| 6 | 2.2857 | 5.2245 | 27.2950 |
| 2 | -1.7143 | 2.9388 | 8.6360 |
| 5 | 1.2857 | 1.6531 | 2.7330 |

**Step 3: Calculate second central moment.**

$$
\mu_2=\frac{\sum d^2}{7}
$$

$$
\mu_2\approx\frac{13.4286}{7}
$$

$$
\mu_2\approx1.9184
$$

**Step 4: Calculate fourth central moment.**

$$
\mu_4=\frac{\sum d^4}{7}
$$

$$
\mu_4\approx6.7963
$$

**Step 5: Calculate kurtosis.**

$$
\beta_2=\frac{\mu_4}{\mu_2^2}
$$

$$
=\frac{6.7963}{(1.9184)^2}
$$

$$
\beta_2\approx1.847
$$

**Step 6: Interpret the result.**

Since:

$$
1.847<3
$$

The distribution is:

$$
\text{Platykurtic}
$$

This means its kurtosis is lower than that of a normal distribution.

**Important:** This example uses central moments divided by $n$, as in your lecturer's notes. Other software or textbooks may apply adjusted sample estimators and obtain a different numerical result.

## 6.8 Practice Questions — Chapter 6

**Theory:**

- Define Skewness.

- Explain symmetrical, positively skewed and negatively skewed distributions.

- Differentiate between positive and negative skewness.

- Define Pearson's coefficient of skewness.

- What are moments?

- Explain the first four central moments.

- Define Kurtosis.

- Explain Leptokurtic, Mesokurtic and Platykurtic distributions.

- Differentiate between Skewness and Kurtosis.

**Numerical:**

- Calculate Pearson's coefficient of skewness.

- Interpret a positive or negative skewness coefficient.

- Calculate the second, third and fourth central moments.

- Calculate the coefficient of kurtosis.

- Identify the distribution type using the value of $\beta_2$.
