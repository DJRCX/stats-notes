# Chapter 5 — Measures of Dispersion

## 5.1 What is Dispersion?

Dispersion is the measure of how far observations are spread out or scattered around a central value.

It helps us understand the variability of a dataset.

Consider two groups of students.

**Group A:**

$$
49,\ 50,\ 51,\ 50
$$

**Group B:**

$$
100,\ 100,\ 0,\ 0
$$

Both groups have the same arithmetic mean.

For Group A:

$$
\bar{x}=\frac{49+50+51+50}{4}=50
$$

For Group B:

$$
\bar{x}=\frac{100+100+0+0}{4}=50
$$

Although the means are equal, the distributions are very different.

Group A has observations close to the average, while Group B has observations spread far apart.

This is why measuring dispersion is important.

### Why Study Dispersion?

- To measure the spread of a dataset.

- To determine the reliability of an average.

- To compare different datasets.

- To measure consistency and uniformity.

- To understand variability in observations.

## 5.2 Types of Measures of Dispersion

There are two major categories.

### A. Absolute Measures

Absolute measures express dispersion in the same units as the original data, except variance, which is in squared units.

Your lecturer covers:

- Range.

- Mean Deviation.

- Variance.

- Standard Deviation.

- Quartile Deviation.

### B. Relative Measures

Relative measures express dispersion as a coefficient or percentage and help compare datasets.

Your lecturer covers:

- Coefficient of Range.

- Coefficient of Mean Deviation.

- Coefficient of Variation.

- Coefficient of Quartile Deviation.

## 5.3 Range

Range is the simplest measure of dispersion.

It is calculated by subtracting the smallest observation from the largest observation.

### Formula

$$
R=X_{\max}-X_{\min}
$$

Where:

- $X_{\max}$ = maximum value.

- $X_{\min}$ = minimum value.

### Example

Find the range of:

$$
10,\ 15,\ 20,\ 25,\ 30,\ 35
$$

Largest value:

$$
X_{\max}=35
$$

Smallest value:

$$
X_{\min}=10
$$

Therefore:

$$
R=35-10
$$

$$
R=25
$$

### Range for Grouped Data

For a continuous grouped frequency distribution:

$$
R=\text{Upper boundary of last class}-\text{Lower boundary of first class}
$$

Example:

Classes:

10–15, 15–20, 20–25, 25–30.

$$
R=30-10
$$

$$
R=20
$$

### Coefficient of Range

The coefficient of range is a relative measure of dispersion.

$$
C_R=\frac{X_{\max}-X_{\min}}{X_{\max}+X_{\min}}
$$

Example:

$$
X_{\max}=30,\quad X_{\min}=10
$$

$$
C_R=\frac{30-10}{30+10}
$$

$$
=\frac{20}{40}
$$

$$
C_R=0.5
$$

### Advantages

- Very easy to calculate.

- Requires only two observations.

- Useful for quick comparisons.

### Limitations

- Uses only the highest and lowest values.

- Highly affected by outliers.

- Does not describe how the remaining observations are distributed.

## 5.4 Mean Deviation (MD)

Mean Deviation is the arithmetic mean of the absolute deviations of observations from a central value.

In your lecturer's material, Mean Deviation is calculated around the arithmetic mean.

The word absolute means that negative and positive deviations are converted into non-negative values before adding.

### Formula for Ungrouped Data

$$
MD=\frac{\sum|x_i-\bar{x}|}{n}
$$

Where:

- $x_i$ = individual observation.

- $\bar{x}$ = arithmetic mean.

- $n$ = number of observations.

- $|x_i-\bar{x}|$ = absolute deviation.

### Formula for Grouped Data

$$
MD=\frac{\sum f|x_i-\bar{x}|}{N}
$$

Where:

- $f$ = frequency.

- $x_i$ = class midpoint.

- $N$ = total frequency.

### Example from Your Lecturer's Material

Find the Mean Deviation of:

$$
2,3,3,3.5,4,5,6.5,7,8,8
$$

**Step 1: Calculate the mean.**

$$
\bar{x}=\frac{2+3+3+3.5+4+5+6.5+7+8+8}{10}
$$

$$
\bar{x}=5
$$

**Step 2: Calculate deviations and absolute deviations.**

| $x_i$ | $x_i-\bar{x}$ | $\|x_i-\bar{x}\|$ |
| --- | --- | --- |
| 2 | -3 | 3 |
| 3 | -2 | 2 |
| 3 | -2 | 2 |
| 3.5 | -1.5 | 1.5 |
| 4 | -1 | 1 |
| 5 | 0 | 0 |
| 6.5 | 1.5 | 1.5 |
| 7 | 2 | 2 |
| 8 | 3 | 3 |
| 8 | 3 | 3 |
| **Total** |  | **19** |

**Step 3: Apply the formula.**

$$
MD=\frac{19}{10}
$$

$$
MD=1.9
$$

### Advantages

- Uses all observations.

- Less affected by extreme values than variance and standard deviation in some situations.

- Easy to understand conceptually.

### Limitations

- Absolute values complicate algebraic calculations.

- Less convenient for further mathematical analysis than standard deviation.

## 5.5 Variance

Variance is the average of the squared deviations of observations from their mean.

It measures how widely data values are spread around the average.

### Population Variance

When the observations represent the entire population, use:

$$
\sigma^2=\frac{\sum(x_i-\mu)^2}{N}
$$

Where:

- $\sigma^2$ = population variance.

- $x_i$ = observation.

- $\mu$ = population mean.

- $N$ = population size.

### Sample Variance

When the observations represent a sample, use:

$$
s^2=\frac{\sum(x_i-\bar{x})^2}{n-1}
$$

Where:

- $s^2$ = sample variance.

- $x_i$ = observation.

- $\bar{x}$ = sample mean.

- $n$ = sample size.

### Why do we use $n-1$ instead of $n$?

This is one of the important theoretical questions in your Dispersion Part 2 lecture.

When calculating sample variance, the sample mean is used instead of the unknown population mean.

Dividing by $n-1$, rather than $n$, corrects for the lost degree of freedom and gives an unbiased estimator of population variance under the usual sampling assumptions.

This is known as Bessel's correction.

### Population vs Sample Variance

| Population Variance | Sample Variance |
| --- | --- |
| Uses the entire population. | Uses sample observations. |
| Divides by $N$. | Divides by $n-1$. |
| Symbol: $\sigma^2$. | Symbol: $s^2$. |
| Measures actual population variance. | Estimates population variance. |

## 5.6 Standard Deviation (SD)

Standard Deviation is the positive square root of variance.

It measures the typical spread of observations around the mean.

### Population Standard Deviation

$$
\sigma=\sqrt{\frac{\sum(x_i-\mu)^2}{N}}
$$

### Sample Standard Deviation

$$
s=\sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}}
$$

### Grouped Population Standard Deviation

$$
\sigma=\sqrt{\frac{\sum f(x_i-\bar{x})^2}{N}}
$$

Where:

- $f$ = frequency.

- $x_i$ = class midpoint.

- $\bar{x}$ = mean.

- $N$ = total frequency.

For a grouped sample, use $n-1$ in the denominator.

### Step-by-Step Example

Calculate population variance and standard deviation for:

$$
1,\ 2,\ 2,\ 3,\ 4,\ 5
$$

**Step 1: Calculate the mean.**

$$
\mu=\frac{1+2+2+3+4+5}{6}
$$

$$
\mu=\frac{17}{6}=2.8333
$$

**Step 2: Calculate the deviations and squared deviations.**

| $x_i$ | $x_i-\mu$ | $(x_i-\mu)^2$ |
| --- | --- | --- |
| 1 | -1.8333 | 3.3611 |
| 2 | -0.8333 | 0.6944 |
| 2 | -0.8333 | 0.6944 |
| 3 | 0.1667 | 0.0278 |
| 4 | 1.1667 | 1.3611 |
| 5 | 2.1667 | 4.6944 |
|  |  | **10.8333** |

**Step 3: Calculate population variance.**

$$
\sigma^2=\frac{10.8333}{6}
$$

$$
\sigma^2\approx1.8056
$$

**Step 4: Calculate population standard deviation.**

$$
\sigma=\sqrt{1.8056}
$$

$$
\sigma\approx1.3437
$$

Therefore:

- Population variance = 1.8056.

- Population standard deviation = 1.3437.

**Important correction in your source material:** One extracted slide displays approximately 2.83 alongside this example. That is the mean, not the correct standard deviation. The calculations above are mathematically correct.

### Now Calculate Sample Variance and Standard Deviation

Use the same observations:

$$
1,\ 2,\ 2,\ 3,\ 4,\ 5
$$

We already know:

$$
\sum(x_i-\bar{x})^2=10.8333
$$

Sample size:

$$
n=6
$$

Sample variance:

$$
s^2=\frac{10.8333}{6-1}
$$

$$
s^2\approx2.1667
$$

Sample standard deviation:

$$
s=\sqrt{2.1667}
$$

$$
s\approx1.4720
$$

Notice the difference:

- Population SD = 1.3437.

- Sample SD = 1.4720.

This is because their denominators are different.

### Merits of Standard Deviation

- Uses all observations.

- Is mathematically useful.

- Can be used in further statistical calculations.

- Provides a widely used measure of variability.

- Helps compare data distributions when units and scales are comparable.

### Limitations

- More affected by extreme observations.

- More difficult to calculate manually than range.

- Squared deviations make the calculation relatively lengthy.

## 5.7 Quartile Deviation

Quartile Deviation measures the spread of the middle 50% of observations.

It is also called the Semi-Interquartile Range.

### Formula

$$
QD=\frac{Q_3-Q_1}{2}
$$

Where:

- $Q_1$ = first quartile.

- $Q_3$ = third quartile.

Example:

$$
Q_1=20,\quad Q_3=60
$$

$$
QD=\frac{60-20}{2}
$$

$$
QD=20
$$

### Coefficient of Quartile Deviation

$$
C_{QD}=\frac{Q_3-Q_1}{Q_3+Q_1}
$$

This is a relative measure.

Example:

$$
C_{QD}=\frac{60-20}{60+20}
$$

$$
C_{QD}=0.5
$$

### Advantages

- Less affected by extreme values.

- Useful for skewed distributions.

- Focuses on the middle half of the dataset.

### Limitations

- Ignores 50% of the observations outside the two quartiles.

- Not as useful for further algebraic analysis as standard deviation.

## 5.8 Coefficient of Mean Deviation

This is a relative measure used to compare the mean deviation of different datasets.

A commonly used form is:

$$
C_{MD}=\frac{MD}{\text{Central Value}}
$$

When mean deviation is calculated about the mean:

$$
C_{MD}=\frac{MD}{\bar{x}}
$$

Where:

- $MD$ = mean deviation.

- $\bar{x}$ = arithmetic mean.

Multiply by 100 to express the coefficient as a percentage.

## 5.9 Coefficient of Variation (CV)

This is one of the most important topics in your Dispersion Part 2 lecture.

Coefficient of Variation expresses the standard deviation as a percentage of the mean.

It is used to compare the relative variability of two or more datasets.

### Formula

$$
CV=\frac{s}{\bar{x}}\times100
$$

For population data, the corresponding form is:

$$
CV=\frac{\sigma}{\mu}\times100
$$

Where:

- $s$ = sample standard deviation.

- $\bar{x}$ = sample mean.

- $\sigma$ = population standard deviation.

- $\mu$ = population mean.

### Interpretation

# Low CV

**High consistency**

# High CV

**Low consistency**

### Example: Comparing Two Sections

Your lecturer provides this example:

| Section | Mean Marks | Standard Deviation |
| --- | --- | --- |
| A | 30 | 4 |
| B | 25 | 6 |

Determine which section is more consistent.

**Step 1: Calculate CV for Section A.**

$$
CV_A=\frac{4}{30}\times100
$$

$$
CV_A=13.33\%
$$

**Step 2: Calculate CV for Section B.**

$$
CV_B=\frac{6}{25}\times100
$$

$$
CV_B=24\%
$$

**Step 3: Compare the results.**

$$
13.33\%<24\%
$$

Therefore, Section A has a lower CV.

$$
\text{Section A is more consistent}
$$

Section B has greater relative variability.

### Why is CV useful?

Suppose two datasets have different units.

Example:

- Dataset A measures marks.

- Dataset B measures weight.

We cannot directly compare their standard deviations because their units differ.

However, CV is unit-free, making it useful for comparing relative variability.

### Limitations of CV

- Not appropriate when the mean is zero.

- Can become misleading when the mean is close to zero.

- Most meaningful for ratio-scale data where the mean is positive.

## 5.10 Summary of Measures of Dispersion

### Absolute Measures

| Measure | Formula |
| --- | --- |
| Range | $X_{\max}-X_{\min}$ |
| Mean Deviation | $\frac{\sum\|x-\bar{x}\|}{n}$ |
| Population Variance | $\frac{\sum(x-\mu)^2}{N}$ |
| Sample Variance | $\frac{\sum(x-\bar{x})^2}{n-1}$ |
| Population SD | $\sqrt{\frac{\sum(x-\mu)^2}{N}}$ |
| Sample SD | $\sqrt{\frac{\sum(x-\bar{x})^2}{n-1}}$ |
| Quartile Deviation | $\frac{Q_3-Q_1}{2}$ |

### Relative Measures

| Measure | Formula |
| --- | --- |
| Coefficient of Range | $\frac{H-L}{H+L}$ |
| Coefficient of MD | $\frac{MD}{\bar{x}}$ |
| Coefficient of Variation | $\frac{s}{\bar{x}}\times100$ |
| Coefficient of QD | $\frac{Q_3-Q_1}{Q_3+Q_1}$ |

## 5.11 Practice Questions — Chapter 5

**Theory:**

- Define Dispersion and explain its importance.

- Differentiate between Absolute and Relative Measures of Dispersion.

- Explain the advantages and limitations of Range.

- Define Mean Deviation.

- Explain Variance and Standard Deviation.

- Why do we use $n-1$ in sample variance?

- Differentiate between Population and Sample Standard Deviation.

- Explain Quartile Deviation.

- Define Coefficient of Variation and discuss its importance.

- Why is Standard Deviation generally preferred over Mean Deviation?

**Numerical:**

- Calculate Range and its coefficient.

- Calculate Mean Deviation for ungrouped data.

- Calculate Mean Deviation for grouped data.

- Find Population Variance and SD.

- Find Sample Variance and SD.

- Find Grouped Variance and SD.

- Calculate Quartile Deviation and its coefficient.

- Calculate Coefficient of Variation.

- Compare the variability of two datasets.

- Determine which group is more consistent.
