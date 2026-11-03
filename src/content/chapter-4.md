# Chapter 4 — Measures of Location

## 4.1 What are Measures of Location?

Measures of Location are statistical values that identify the position of observations within an ordered dataset.

They help us understand where a particular observation stands compared with the rest of the dataset.

Your lecturer covers three major measures:

- Quartiles.

- Deciles.

- Percentiles.

These measures divide an ordered dataset into equal parts.

## 4.2 Quartiles

Quartiles divide an ordered dataset into four equal parts.

Three quartile values are required to divide the dataset into four sections.

### Types of Quartiles

**First Quartile ($Q_1$)**

The first quartile divides the lowest 25% of observations from the remaining 75%.

$$
Q_1=25^{th}\text{ percentile}
$$

**Second Quartile ($Q_2$)**

The second quartile divides the dataset into two equal parts.

$$
Q_2=50^{th}\text{ percentile}
$$

It is equal to the median.

**Third Quartile ($Q_3$)**

The third quartile represents the value below which approximately 75% of observations lie.

$$
Q_3=75^{th}\text{ percentile}
$$

### Visualization

### Quartile distribution

#### 25%

#### 25%

#### 25%

#### 25%

### Formula for Quartile Position

Your lecturer's main Measures of Location Part 1 slides use:

$$
Position(Q_i)=\frac{iN}{4}
$$

Where:

- $i$ = quartile number (1, 2 or 3).

- $N$ = number of observations.

### Steps to Calculate Quartiles

- Arrange observations in ascending order.

- Count the total number of observations.

- Calculate the quartile position.

- Determine the corresponding value.

The lecturer's slides use this rule:

- When the position is an integer, average the observations at that position and the next position.

- When the position is not an integer, take the next integer position.

### Example: Quartiles

Find the quartiles of:

$$
50,\ 64,\ 70,\ 78,\ 88,\ 94
$$

The data are already sorted.

$$
N=6
$$

**Calculate $Q_1$:**

$$
Position(Q_1)=\frac{1\times6}{4}=1.5
$$

Round up to position 2.

$$
Q_1=64
$$

**Calculate $Q_2$:**

$$
Position(Q_2)=\frac{2\times6}{4}=3
$$

Since the position is an integer, average the third and fourth observations.

$$
Q_2=\frac{70+78}{2}
$$

$$
Q_2=74
$$

**Calculate $Q_3$:**

$$
Position(Q_3)=\frac{3\times6}{4}=4.5
$$

Round up to position 5.

$$
Q_3=88
$$

Therefore:

$$
Q_1=64,\quad Q_2=74,\quad Q_3=88
$$

**Note about formula conventions:** One of your supporting documents uses the alternative position formula $i(N+1)/4$ and interpolation between neighbouring values. Both conventions exist, but your main Part 1 lecture uses $iN/4$. Follow the method demonstrated in the specific question or by your teacher.

## 4.3 Deciles

Deciles divide an ordered dataset into ten equal parts.

Nine decile values are required to divide a dataset into ten sections.

### Types of Deciles

| Decile | Meaning |
| --- | --- |
| $D_1$ | 10% of observations below or at this point |
| $D_2$ | 20% |
| $D_3$ | 30% |
| $D_4$ | 40% |
| $D_5$ | 50% |
| $D_6$ | 60% |
| $D_7$ | 70% |
| $D_8$ | 80% |
| $D_9$ | 90% |

### Formula for Decile Position

$$
Position(D_i)=\frac{iN}{10}
$$

Where:

- $i$ = decile number (1–9).

- $N$ = total observations.

### Example: Decile

Your lecturer provides the following data about the number of nuclear power plants in different countries:

$$
7,20,16,6,58,9,20,50,23,33,8,10,15,16,104
$$

Find the second decile ($D_2$).

**Step 1: Arrange in ascending order.**

$$
6,7,8,9,10,15,16,16,20,20,23,33,50,58,104
$$

**Step 2: Find the number of observations.**

$$
N=15
$$

**Step 3: Calculate the position.**

$$
Position(D_2)=\frac{2\times15}{10}
$$

$$
=3
$$

**Step 4: Since the position is an integer, average the third and fourth observations.**

$$
D_2=\frac{8+9}{2}
$$

$$
D_2=8.5
$$

Interpretation:

Approximately 20% of the countries have up to 8.5 nuclear power plants, while the remaining 80% are above that threshold. Since the observation represents a count, the value can be described approximately as 9.

## 4.4 Percentiles

Percentiles divide an ordered dataset into 100 equal parts.

There are 99 percentile values.

### Types

| Percentile | Meaning |
| --- | --- |
| $P_1$ | 1% |
| $P_{10}$ | 10% |
| $P_{25}$ | 25% |
| $P_{50}$ | 50% |
| $P_{75}$ | 75% |
| $P_{90}$ | 90% |
| $P_{99}$ | 99% |

### Formula for Percentile Position

$$
Position(P_i)=\frac{iN}{100}
$$

Where:

- $i$ = percentile number.

- $N$ = total number of observations.

### Example

Find the 70th percentile of the following data using your main lecture's position rule:

$$
10,\ 20,\ 30,\ 40,\ 50,\ 60,\ 70,\ 80,\ 90,\ 100
$$

**Step 1: The data are already ordered.**

$$
N=10
$$

**Step 2: Calculate position.**

$$
Position(P_{70})=\frac{70\times10}{100}
$$

$$
=7
$$

**Step 3: Since the position is an integer, average the seventh and eighth values.**

$$
P_{70}=\frac{70+80}{2}
$$

$$
P_{70}=75
$$

Interpretation:

Approximately 70% of observations lie at or below 75.

## 4.5 Grouped Quartiles, Deciles and Percentiles

When data are presented in a grouped frequency distribution, use a class-based interpolation formula.

### General Formula

$$
L+\left(\frac{Position-CF}{f}\right)i
$$

For quartile:

$$
Q_k=L+\left(\frac{\frac{kN}{4}-CF}{f}\right)i
$$

For decile:

$$
D_k=L+\left(\frac{\frac{kN}{10}-CF}{f}\right)i
$$

For percentile:

$$
P_k=L+\left(\frac{\frac{kN}{100}-CF}{f}\right)i
$$

Where:

- $L$ = lower boundary of the relevant class.

- $N$ = total frequency.

- $CF$ = cumulative frequency before the relevant class.

- $f$ = frequency of the relevant class.

- $i$ = class width.

- $k$ = quartile, decile or percentile number.

### Solving Method

- Create a cumulative frequency table.

- Find the required position.

- Locate the class containing that position.

- Identify the lower class boundary.

- Identify the cumulative frequency before that class.

- Identify the frequency and width.

- Apply the formula.

This method is based on interpolation within the selected class.

## 4.6 Box-and-Whisker Plot

A Box-and-Whisker Plot, also called a Box Plot, is a graphical representation of a dataset based on its five-number summary.

It helps us understand:

- Data distribution.

- Spread of observations.

- Median location.

- Symmetry or skewness.

- Outliers.

### Five-Number Summary

A box plot is constructed using five values.

- Minimum Value.

- First Quartile ($Q_1$).

- Median ($Q_2$).

- Third Quartile ($Q_3$).

- Maximum Value.

### Structure of a box plot

### Interquartile Range (IQR)

The Interquartile Range measures the spread of the middle 50% of observations.

$$
IQR=Q_3-Q_1
$$

Example:

$$
Q_1=20,\quad Q_3=60
$$

$$
IQR=60-20
$$

$$
IQR=40
$$

### Quartile Deviation

Quartile Deviation is half of the interquartile range.

$$
QD=\frac{Q_3-Q_1}{2}
$$

Example:

$$
QD=\frac{60-20}{2}
$$

$$
QD=20
$$

## 4.7 Detecting Outliers Using Fences

An outlier is an observation that is unusually far from the majority of the dataset.

Your lecturer explains two levels of fences.

### A. Inner Fences

Lower Inner Fence:

$$
Q_1-1.5(IQR)
$$

Upper Inner Fence:

$$
Q_3+1.5(IQR)
$$

Values outside these fences are suspected outliers.

### B. Outer Fences

Lower Outer Fence:

$$
Q_1-3(IQR)
$$

Upper Outer Fence:

$$
Q_3+3(IQR)
$$

Values outside the outer fences are considered extreme outliers.

**Important correction:** One of your lecture files prints the lower outer fence using $Q_3-3(IQR)$. This is a typographical mistake. The correct lower outer fence uses $Q_1$.

### Example: Detecting an Outlier

Suppose:

$$
Q_1=2865
$$

$$
Q_3=3035
$$

**Step 1: Calculate IQR.**

$$
IQR=3035-2865
$$

$$
IQR=170
$$

**Step 2: Calculate the lower inner fence.**

$$
LIF=2865-1.5(170)
$$

$$
=2865-255
$$

$$
LIF=2610
$$

**Step 3: Calculate upper inner fence.**

$$
UIF=3035+1.5(170)
$$

$$
=3035+255
$$

$$
UIF=3290
$$

Therefore, the inner fence range is:

$$
2610\text{ to }3290
$$

Any observation below 2610 or above 3290 is a suspected outlier.

Suppose a dataset contains 3425.

Since:

$$
3425>3290
$$

3425 is a suspected outlier.

### Important Distinction

| Value | Classification |
| --- | --- |
| Within inner fences | Not an outlier by this rule |
| Outside inner but within outer fences | Suspected or mild outlier |
| Outside outer fences | Extreme outlier |

### Advantages of Box Plots

- Easy to understand.

- Shows the spread of a dataset.

- Helps identify outliers.

- Allows comparison of multiple datasets.

- Provides information about symmetry and skewness.

## 4.8 Interpretation of Box Plots

**Symmetrical Distribution**

When the median is approximately centered in the box and both whiskers have similar lengths, the distribution is approximately symmetrical.

**Positively Skewed Distribution**

A longer right whisker indicates a possible positive skew.

**Negatively Skewed Distribution**

A longer left whisker indicates a possible negative skew.

Remember that whisker lengths and median position together help interpret the shape.

## 4.9 Practice Questions — Chapter 4

**Theory:**

- Define Measures of Location.

- Explain Quartiles, Deciles and Percentiles.

- Differentiate between Quartiles, Deciles and Percentiles.

- What is a Box-and-Whisker Plot?

- Explain the Five-Number Summary.

- Define IQR and Quartile Deviation.

- Explain Inner Fences and Outer Fences.

- Define suspected and extreme outliers.

- Explain the uses of Box Plots.

**Numerical:**

- Find $Q_1,Q_2,Q_3$ for ungrouped data.

- Calculate deciles.

- Calculate percentiles.

- Find grouped quartiles, deciles and percentiles.

- Calculate IQR and quartile deviation.

- Construct a Box Plot.

- Detect outliers using inner and outer fences.

- Interpret the shape of a Box Plot.
