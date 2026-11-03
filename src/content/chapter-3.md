# Chapter 3 — Measures of Central Tendency

## 3.1 What is Central Tendency?

A measure of central tendency is a statistical measure that identifies the central, middle or typical value of a dataset.

It describes the value around which most observations tend to cluster.

For example:

Suppose five students receive the following examination marks:

$$
60,\ 70,\ 75,\ 80,\ 90
$$

We may want to know what a typical student scored.

Measures of Central Tendency help us answer this question.

### Three main measures

- Mean.

- Median.

- Mode.

The Mean is further divided into four types in your lecturer's materials:

- Arithmetic Mean.

- Weighted Mean.

- Geometric Mean.

- Harmonic Mean.

## 3.2 Arithmetic Mean (AM)

Arithmetic Mean is the sum of all observations divided by the total number of observations.

It is commonly known as the average.

### Formula for Ungrouped Data

$$
\bar{x}=\frac{\sum x_i}{n}
$$

Where:

- $\bar{x}$ = arithmetic mean.

- $x_i$ = individual observations.

- $n$ = number of observations.

- $\sum x_i$ = sum of all observations.

### Example 1: Find Arithmetic Mean

The following are the marks of five students:

$$
60,\ 70,\ 75,\ 80,\ 90
$$

**Step 1: Find the sum.**

$$
\sum x_i=60+70+75+80+90
$$

$$
\sum x_i=375
$$

**Step 2: Find the number of observations.**

$$
n=5
$$

**Step 3: Apply the formula.**

$$
\bar{x}=\frac{375}{5}
$$

$$
\bar{x}=75
$$

Therefore, the average mark is 75.

### Formula for Grouped Data

For grouped data, we use the class midpoint and its corresponding frequency.

$$
\bar{x}=\frac{\sum fx}{\sum f}
$$

Where:

- $f$ = frequency.

- $x$ = class midpoint.

- $fx$ = frequency multiplied by midpoint.

**Example 2: Mean of Grouped Data**

Your lecturer's grouped-data presentation provides the following problem.

Calculate the mean number of orders received per day.

| Number of orders | Frequency |
| --- | --- |
| 10–12 | 4 |
| 13–15 | 12 |
| 16–18 | 20 |
| 19–21 | 14 |
| **Total** | **50** |

**Step 1: Calculate the midpoint.**

$$
x=\frac{L+U}{2}
$$

For the first class:

$$
x=\frac{10+12}{2}=11
$$

Repeat this for the remaining classes.

**Step 2: Calculate $fx$.**

| Class | $f$ | Midpoint $x$ | $fx$ |
| --- | --- | --- | --- |
| 10–12 | 4 | 11 | 44 |
| 13–15 | 12 | 14 | 168 |
| 16–18 | 20 | 17 | 340 |
| 19–21 | 14 | 20 | 280 |
| **Total** | **50** |  | **832** |

**Step 3: Apply the formula.**

$$
\bar{x}=\frac{\sum fx}{\sum f}
$$

$$
=\frac{832}{50}
$$

$$
\bar{x}=16.64
$$

The average number of daily orders is 16.64.

### Advantages of Arithmetic Mean

- Easy to calculate.

- Uses every observation.

- Useful for further mathematical calculations.

- Widely used in research and business.

### Limitations of Arithmetic Mean

- Highly affected by extreme values.

- Not suitable for nominal categorical data.

- May produce a value that does not actually occur in the dataset.

For example, the average number of children in a family might be 2.5, even though no family can have 2.5 children.

## 3.3 Weighted Mean (WM)

Weighted Mean is an average in which each observation is assigned a weight according to its importance or frequency.

Some observations contribute more to the average than others.

### Formula

$$
\bar{x}_w=\frac{\sum wx}{\sum w}
$$

Where:

- $w$ = weight.

- $x$ = observation.

- $wx$ = observation multiplied by its weight.

### Example: Drink Prices

Your lecturer gives an example of a person selling 50 drinks at different prices.

| Price ($) | Number Sold |
| --- | --- |
| 0.50 | 5 |
| 0.75 | 15 |
| 0.90 | 15 |
| 1.15 | 15 |
| **Total** | **50** |

Find the weighted average selling price.

**Step 1: Calculate price × quantity.**

| Price ($x$) | Weight ($w$) | $wx$ |
| --- | --- | --- |
| 0.50 | 5 | 2.50 |
| 0.75 | 15 | 11.25 |
| 0.90 | 15 | 13.50 |
| 1.15 | 15 | 17.25 |
| **Total** | **50** | **44.50** |

**Step 2: Apply the formula.**

$$
\bar{x}_w=\frac{44.50}{50}
$$

$$
\bar{x}_w=\$0.89
$$

The weighted average price is $0.89.

### Applications of Weighted Mean

- Calculating CGPA from courses having different credit hours.

- Calculating average prices when quantities sold differ.

- Calculating portfolio averages.

- Calculating weighted examination scores.

**Important example: CGPA**

Suppose a student has the following courses:

| Course | Credit | Grade Point |
| --- | --- | --- |
| Course A | 3 | 3.50 |
| Course B | 4 | 3.75 |
| Course C | 2 | 3.00 |

$$
CGPA=\frac{\sum(Credit\times Grade\ Point)}{\sum Credit}
$$

$$
=\frac{(3\times3.50)+(4\times3.75)+(2\times3.00)}{3+4+2}
$$

$$
=\frac{31.50}{9}
$$

$$
CGPA=3.50
$$

### Advantages

- Considers the importance of observations.

- More representative when observations have different weights.

- Useful in business and academic calculations.

### Limitations

- Weights must be appropriate.

- Incorrect weights can produce misleading results.

- Slightly more complicated than arithmetic mean.

## 3.4 Geometric Mean (GM)

Geometric Mean is the positive $n$-th root of the product of all observations.

It is mainly used when values are multiplied together or when calculating average growth rates.

Examples:

- Population growth.

- Investment returns.

- Percentage increases in sales.

- Compound interest.

- Financial growth rates.

### Formula for Ungrouped Data

$$
GM=\sqrt[n]{x_1x_2x_3\cdots x_n}
$$

An alternative using logarithms is:

$$
\log GM=\frac{\sum\log x}{n}
$$

### Formula for Grouped Data

$$
\log GM=\frac{\sum f\log x}{N}
$$

Then calculate the antilogarithm to obtain GM.

### Example: Population Growth

Suppose the population growth factors for four consecutive years are:

$$
1.24,\ 1.26,\ 1.29,\ 1.31
$$

Find the geometric mean growth factor.

**Step 1: Apply the formula.**

$$
GM=\sqrt[4]{1.24\times1.26\times1.29\times1.31}
$$

**Step 2: Multiply the values.**

$$
GM=\sqrt[4]{2.637?}
$$

**Step 3: Find the fourth root.**

The result is approximately:

$$
GM\approx1.274
$$

Therefore, the average annual growth factor is approximately 1.274.

If the numbers represent growth factors, the corresponding average growth rate is:

$$
(1.274-1)\times100
$$

$$
27.4\%
$$

### Example: Percentage Return

Your lecturer also provides an example of investment returns:

30%, 20%, -40% and 200%.

For investment returns, convert each percentage into a growth factor:

| Return | Growth factor |
| --- | --- |
| 30% | 1.30 |
| 20% | 1.20 |
| -40% | 0.60 |
| 200% | 3.00 |

Then:

$$
GM=\sqrt[4]{1.30\times1.20\times0.60\times3.00}
$$

$$
GM=\sqrt[4]{2.808}
$$

$$
GM\approx1.2945
$$

Convert back into a percentage:

$$
(1.2945-1)\times100
$$

$$
29.45\%
$$

This means the compound average annual return is approximately 29.45%.

### Advantages

- Useful for percentage growth and compound rates.

- Considers multiplicative changes.

- Less affected by unusually large positive values than arithmetic mean in many growth-rate situations.

### Limitations

- Requires positive values in its ordinary form.

- More complicated to calculate.

- Cannot be applied directly to arbitrary data containing zero or negative observations.

For percentage returns, use growth factors rather than multiplying the original signed percentage returns.

## 3.5 Harmonic Mean (HM)

Harmonic Mean is the reciprocal of the arithmetic mean of the reciprocals of the observations.

It is primarily used when finding averages of rates or ratios.

Examples:

- Average speed.

- Average production rate.

- Average price per unit in specific situations.

- Average work rate.

### Formula for Ungrouped Data

$$
HM=\frac{n}{\sum\frac{1}{x}}
$$

### Formula for Grouped Data

$$
HM=\frac{N}{\sum\frac{f}{x}}
$$

Where:

- $N$ = total frequency.

- $f$ = frequency.

- $x$ = observation or midpoint.

### Example: Average Speed

A car travels:

- 50 miles at 40 mph.

- 60 miles at 50 mph.

- 40 miles at 60 mph.

Find the average speed of the complete journey.

Since the distances are different, calculate total distance divided by total time.

**Step 1: Calculate the total distance.**

$$
D=50+60+40
$$

$$
D=150\text{ miles}
$$

**Step 2: Calculate the time for each section.**

$$
t_1=\frac{50}{40}=1.25
$$

$$
t_2=\frac{60}{50}=1.20
$$

$$
t_3=\frac{40}{60}=0.667
$$

**Step 3: Calculate total time.**

$$
T=1.25+1.20+0.667
$$

$$
T=3.117\text{ hours}
$$

**Step 4: Calculate average speed.**

$$
Average\ Speed=\frac{Total\ Distance}{Total\ Time}
$$

$$
=\frac{150}{3.117}
$$

$$
48.12\text{ mph (approximately)}
$$

This is a weighted harmonic mean of the speeds, with distances as weights.

**Important distinction:**

- Equal distances: ordinary harmonic mean of the speeds.

- Equal time intervals: arithmetic mean of the speeds.

- Unequal distances and times: use total distance divided by total time.

### Advantages

- Appropriate for averaging rates under suitable conditions.

- Uses all observations.

- Can be useful where arithmetic mean gives a misleading result.

### Limitations

- Cannot be calculated when any observation is zero.

- Requires careful interpretation of the data.

- More complicated than arithmetic mean.

## 3.6 Comparison of the Four Types of Mean

| Type | Formula | Main application |
| --- | --- | --- |
| Arithmetic Mean | $\frac{\sum x}{n}$ | Ordinary average |
| Weighted Mean | $\frac{\sum wx}{\sum w}$ | Different importance or weights |
| Geometric Mean | $\sqrt[n]{\prod x}$ | Growth rates and compound changes |
| Harmonic Mean | $\frac{n}{\sum(1/x)}$ | Rates and ratios |

### When should you use each mean?

| Situation | Appropriate Mean |
| --- | --- |
| Average examination marks | Arithmetic Mean |
| CGPA with different course credits | Weighted Mean |
| Average population growth | Geometric Mean |
| Compound investment return | Geometric Mean |
| Average speed over equal distances | Harmonic Mean |
| Average speed over equal times | Arithmetic Mean |

## 3.7 Median

Median is the middle value of a dataset after arranging all observations in ascending or descending order.

It divides the dataset into two equal parts:

- 50% of observations are at or below the median.

- 50% are at or above the median.

### Median for Ungrouped Data

There are two cases.

**Case 1: Odd Number of Observations**

Formula:

$$
Median=\left(\frac{n+1}{2}\right)^{th}\text{ observation}
$$

Example:

Find the median of:

$$
21,\ 25,\ 19,\ 20,\ 22
$$

**Step 1: Arrange in ascending order.**

$$
19,\ 20,\ 21,\ 22,\ 25
$$

**Step 2: Find the position.**

$$
Position=\frac{5+1}{2}=3
$$

**Step 3: Take the third observation.**

$$
Median=21
$$

**Case 2: Even Number of Observations**

Formula:

$$
Median=\frac{\left(\frac{n}{2}\right)^{th}+\left(\frac{n}{2}+1\right)^{th}}{2}
$$

Example:

Find the median of:

$$
76,\ 73,\ 80,\ 75
$$

**Step 1: Arrange in ascending order.**

$$
73,\ 75,\ 76,\ 80
$$

**Step 2: Find the two middle observations.**

There are four observations.

The two middle positions are:

$$
\frac{4}{2}=2
$$

and:

$$
2+1=3
$$

**Step 3: Calculate the average.**

$$
Median=\frac{75+76}{2}
$$

$$
Median=75.5
$$

### Median for Grouped Data

For grouped frequency distributions, the median is calculated using the following formula:

$$
Me=L+\left(\frac{\frac{N}{2}-F}{f_m}\right)i
$$

Where:

| Symbol | Meaning |
| --- | --- |
| $Me$ | Median |
| $L$ | Lower boundary of median class |
| $N$ | Total frequency |
| $F$ | Cumulative frequency before median class |
| $f_m$ | Frequency of median class |
| $i$ | Class width |

### Steps to Calculate Grouped Median

- Construct a cumulative frequency column.

- Calculate $N/2$.

- Find the median class containing the $N/2$-th observation.

- Find the lower boundary of that class.

- Identify the cumulative frequency before that class.

- Identify the frequency of the median class.

- Find class width.

- Substitute the values into the formula.

### Example: Workers' Monthly Working Hours

Your lecturer's grouped-data presentation gives this problem.

| Working hours | Number of workers |
| --- | --- |
| 30–55 | 3 |
| 55–80 | 4 |
| 80–105 | 6 |
| 105–130 | 9 |
| 130–155 | 12 |
| 155–180 | 11 |
| 180–205 | 5 |
| **Total** | **50** |

**Step 1: Calculate cumulative frequency.**

| Working hours | Frequency | Cumulative frequency |
| --- | --- | --- |
| 30–55 | 3 | 3 |
| 55–80 | 4 | 7 |
| 80–105 | 6 | 13 |
| 105–130 | 9 | 22 |
| 130–155 | 12 | 34 |
| 155–180 | 11 | 45 |
| 180–205 | 5 | 50 |

**Step 2: Calculate $N/2$.**

$$
N=50
$$

$$
\frac{N}{2}=\frac{50}{2}=25
$$

**Step 3: Identify the median class.**

The 25th observation lies in the 130–155 class because:

- Previous cumulative frequency = 22.

- Current cumulative frequency = 34.

Therefore, median class = 130–155.

**Step 4: Identify the required values.**

$$
L=130
$$

$$
F=22
$$

$$
f_m=12
$$

$$
i=25
$$

**Step 5: Apply the formula.**

$$
Me=L+\left(\frac{\frac{N}{2}-F}{f_m}\right)i
$$

$$
Me=130+\left(\frac{25-22}{12}\right)25
$$

$$
=130+\frac{3}{12}\times25
$$

$$
=130+6.25
$$

$$
Me=136.25
$$

Therefore, approximately 50% of the workers worked for 136.25 hours or less per month.

Your lecturer's slide reports 136.26; the direct calculation gives 136.25.

### Advantages of Median

- Not significantly affected by extreme observations.

- Useful for skewed distributions.

- Suitable for ordinal data.

- Easy to understand.

### Limitations of Median

- Does not use every value directly in its calculation.

- Not as convenient for further algebraic calculations as the mean.

- Requires arranging ungrouped observations.

## 3.8 Mode

Mode is the observation that occurs most frequently in a dataset.

In simpler words, it is the most commonly occurring value.

### Mode for Ungrouped Data

Example:

$$
81,\ 93,\ 84,\ 75,\ 68,\ 87,\ 81,\ 75,\ 81,\ 87
$$

Count the frequency of each value.

| Value | Frequency |
| --- | --- |
| 68 | 1 |
| 75 | 2 |
| 81 | 3 |
| 84 | 1 |
| 87 | 2 |
| 93 | 1 |

The number 81 appears three times.

$$
Mode=81
$$

### Types of Mode

| Type | Meaning |
| --- | --- |
| Unimodal | One mode |
| Bimodal | Two modes |
| Trimodal | Three modes |
| Multimodal | More than one mode |

Example:

$$
1,\ 2,\ 2,\ 3,\ 3,\ 5
$$

Both 2 and 3 occur twice.

Therefore:

$$
Modes=2,\ 3
$$

This is a bimodal dataset.

A dataset can also have no mode when no observation occurs more frequently than the others.

### Mode for Grouped Data

For grouped data, the mode is estimated using the modal class, which is the class with the highest frequency.

### Formula

$$
Mo=L+\left(\frac{\Delta_1}{\Delta_1+\Delta_2}\right)i
$$

Where:

- $L$ = lower boundary of modal class.

- $\Delta_1$ = modal-class frequency minus preceding-class frequency.

- $\Delta_2$ = modal-class frequency minus succeeding-class frequency.

- $i$ = class width.

### Example: Slope Angles

Your lecturer provides this frequency table:

| Slope Angle | Frequency |
| --- | --- |
| 0–4 | 6 |
| 5–9 | 12 |
| 10–14 | 7 |
| 15–19 | 5 |
| 20–24 | 0 |

**Step 1: Find modal class.**

The highest frequency is 12.

Therefore:

$$
Modal\ Class=5-9
$$

**Step 2: Identify the values.**

Using the class boundaries for continuous grouping:

$$
L=4.5
$$

$$
i=5
$$

$$
f_m=12
$$

Previous frequency:

$$
f_0=6
$$

Next frequency:

$$
f_2=7
$$

**Step 3: Calculate the differences.**

$$
\Delta_1=12-6=6
$$

$$
\Delta_2=12-7=5
$$

**Step 4: Apply the formula.**

$$
Mo=4.5+\left(\frac{6}{6+5}\right)5
$$

$$
=4.5+\frac{30}{11}
$$

$$
Mo\approx7.23
$$

Note: The lecturer's displayed result is 7.18, but the continuous class-boundary substitution above gives approximately 7.23. Some grouped-data conventions use a different lower class limit. Check the specific class-boundary convention used in your teacher's calculation.

### Advantages of Mode

- Easy to understand.

- Suitable for nominal data.

- Not heavily affected by extreme values.

- Shows the most common value.

### Limitations of Mode

- May not exist.

- May have multiple values.

- Does not use all observations.

- May be unstable when data change slightly.

## 3.9 Comparison of Mean, Median and Mode

| Mean | Median | Mode |
| --- | --- | --- |
| Average of all values. | Middle value. | Most frequent value. |
| Uses all observations. | Depends on ordered positions. | Depends on frequency. |
| Highly affected by extreme values. | Less affected by extreme values. | Usually less affected by extreme values. |
| Suitable for interval and ratio data. | Suitable for ordinal, interval and ratio data. | Suitable for nominal, ordinal and quantitative data. |
| Useful for mathematical calculations. | Useful for skewed data. | Useful for identifying popular categories. |

### Relationship in a Symmetrical Distribution

For a perfectly symmetrical unimodal distribution:

$$
Mean=Median=Mode
$$

In an approximately symmetrical distribution, the three measures are often close.

### In a Positively Skewed Distribution

$$
Mean>Median>Mode
$$

The long tail extends toward the right.

### In a Negatively Skewed Distribution

$$
Mean<Median<Mode
$$

The long tail extends toward the left.

## 3.10 Measures of Central Tendency at Different Measurement Levels

Your lecturer provides this important relationship:

| Measurement level | Appropriate measure |
| --- | --- |
| Nominal | Mode |
| Ordinal | Median and Mode |
| Interval | Mean, Median and Mode |
| Ratio | Mean, Median and Mode |

**Why?**

Nominal variables do not have an order, so the middle value cannot be identified.

Ordinal variables have an order, so the median can be determined, but numerical distances are not meaningful.

Interval and ratio variables have meaningful numerical values, allowing us to calculate averages.

## 3.11 Which Measure Is Best?

There is no single measure that is always the best.

The appropriate measure depends on the nature and distribution of the data.

**Use Mean when:**

- The data are numerical.

- The distribution is approximately symmetrical.

- There are no influential extreme observations.

**Use Median when:**

- The data contain outliers.

- The distribution is skewed.

- The data are ordinal.

**Use Mode when:**

- You need the most common value.

- The data are categorical.

- You need to identify the most popular category.

## 3.12 Practice Questions — Chapter 3

**Theory:**

- Define Central Tendency.

- Explain the different types of Mean.

- Differentiate Arithmetic Mean and Geometric Mean.

- Explain the advantages and limitations of Arithmetic Mean.

- When should we use Harmonic Mean?

- Differentiate Mean, Median and Mode.

- Explain the relationship among Mean, Median and Mode in symmetrical and skewed distributions.

- Which measure of central tendency is appropriate for nominal, ordinal, interval and ratio data?

**Numerical:**

- Calculate AM from ungrouped data.

- Calculate AM from grouped data.

- Calculate Weighted Mean.

- Calculate Geometric Mean.

- Calculate average percentage growth using GM.

- Calculate Harmonic Mean.

- Calculate Median for odd and even observations.

- Calculate Median for grouped data.

- Calculate Mode for ungrouped data.

- Calculate Mode for grouped data.

- Find Mean, Median and Mode for a given dataset.
