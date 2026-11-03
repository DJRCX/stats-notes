# Solved Questions — Summer 2025 Midterm

Daffodil International University · STA 101 Statistics I

Fully worked solutions from the midterm examination papers.

## Question 1 — Identify Data Type and Measurement Level [5 marks]

**Question:**

Identify the correct data type (quantitative or qualitative). Indicate whether quantitative data are continuous or discrete, along with their correct level of measurement.

i. Number of browser tabs open while working.

ii. Operating system used on a PC.

iii. Daily temperature (°C) in your city.

iv. Number of unread emails in your inbox.

v. Time (in minutes) required to commute to campus.

### Answer

| Variable | Data type | Discrete / Continuous | Measurement level |
| --- | --- | --- | --- |
| i. Number of browser tabs | Quantitative | Discrete | Ratio |
| ii. Operating system | Qualitative | Not applicable | Nominal |
| iii. Daily temperature in °C | Quantitative | Continuous | Interval |
| iv. Number of unread emails | Quantitative | Discrete | Ratio |
| v. Commuting time | Quantitative | Continuous | Ratio |

### Explanation

**i. Number of browser tabs**

This is quantitative discrete data because tabs are countable whole numbers.

It is ratio-level data because zero tabs represents the absence of open tabs.

**ii. Operating system**

This is qualitative nominal data because operating systems are categories without a meaningful order.

Examples: Windows, Linux and macOS.

**iii. Daily temperature in Celsius**

This is quantitative continuous interval data.

Temperature can contain decimal values, and zero degrees Celsius does not mean the complete absence of temperature.

**iv. Number of unread emails**

This is quantitative discrete ratio data because emails are countable and zero means no unread emails.

**v. Commuting time**

This is quantitative continuous ratio data because time can be measured in fractional units and has a meaningful zero.

## Question 2(a)(i) — Frequency Distribution with Cumulative Relative Frequencies [3 marks]

**Question:**

The following distribution represents the income (in Tk) of a mobile repairing shop on different days.

$$
\begin{aligned}
&35,54,20,47,26,72,38,41,\\
&24,32,69,78,61,34,29,45,56,\\
&67,75,43,37,59,52,63,50
\end{aligned}
$$

Derive a frequency distribution table with cumulative relative frequencies.

### Answer

**Step 1: Count the observations.**

$$
n=25
$$

Minimum:

$$
X_{\min}=20
$$

Maximum:

$$
X_{\max}=78
$$

Range:

$$
R=78-20=58
$$

We will choose class intervals of width 10.

### Step 2: Construct Frequency Distribution

Use these classes:

- 20–29

- 30–39

- 40–49

- 50–59

- 60–69

- 70–79

Count each observation.

### Step 3: Calculate Relative Frequency

Formula:

$$
RF=\frac{f}{N}
$$

### Step 4: Calculate Cumulative Relative Frequency

Cumulative relative frequency is the running total of relative frequencies.

### Final Table

| Income (Tk) | Frequency $f$ | Relative frequency | Cumulative relative frequency |
| --- | --- | --- | --- |
| 20–29 | 4 | 0.16 | 0.16 |
| 30–39 | 5 | 0.20 | 0.36 |
| 40–49 | 4 | 0.16 | 0.52 |
| 50–59 | 5 | 0.20 | 0.72 |
| 60–69 | 4 | 0.16 | 0.88 |
| 70–79 | 3 | 0.12 | 1.00 |
| **Total** | **25** | **1.00** | **1.00** |

### Sample Calculation

For class 20–29:

$$
RF=\frac{4}{25}
$$

$$
RF=0.16
$$

Cumulative relative frequency:

$$
CRF=0.16
$$

For the second class:

$$
CRF=0.16+0.20
$$

$$
CRF=0.36
$$

Continue until the last class, where the cumulative relative frequency must be 1.00.

## Question 2(a)(ii) — Draw an Appropriate Graph [2 marks]

**Question:**

Sketch an appropriate graph for the given data.

### Answer

A Histogram is appropriate because the data are quantitative income measurements grouped into continuous class intervals.

Use the frequencies from Question 2(a)(i).

Frequency histogram using 10-Tk class intervals. Bars should touch when drawn as a histogram.

**Interpretation:**

The highest frequency occurs in the 30–39 and 50–59 income intervals, with five observations in each.

The lowest frequency occurs in the 70–79 interval, with three observations.

## Question 2(a)(iii) — Calculate Mean, Median and Mode from the Frequency Distribution [5 marks]

**Question:**

Investigate the Mean, Median and Mode from the frequency distribution in part (i).

### Answer

We will use the grouped frequency table constructed earlier.

### A. Mean

Formula:

$$
\bar{x}=\frac{\sum fx}{N}
$$

Where $x$ is the class midpoint.

### Step 1: Calculate Class Midpoints

$$
x=\frac{L+U}{2}
$$

For the first class:

$$
x=\frac{20+29}{2}=24.5
$$

Calculate the remaining midpoints.

| Class | Frequency $f$ | Midpoint $x$ | $fx$ |
| --- | --- | --- | --- |
| 20–29 | 4 | 24.5 | 98 |
| 30–39 | 5 | 34.5 | 172.5 |
| 40–49 | 4 | 44.5 | 178 |
| 50–59 | 5 | 54.5 | 272.5 |
| 60–69 | 4 | 64.5 | 258 |
| 70–79 | 3 | 74.5 | 223.5 |
| **Total** | **25** |  | **1202.5** |

### Step 2: Apply the Formula

$$
\bar{x}=\frac{1202.5}{25}
$$

$$
\bar{x}=48.10\text{ Tk}
$$

### B. Median

Formula:

$$
Me=L+\left(\frac{\frac{N}{2}-F}{f_m}\right)i
$$

Where:

- $L$ = lower boundary of median class.

- $N$ = total frequency.

- $F$ = cumulative frequency before median class.

- $f_m$ = frequency of median class.

- $i$ = class width.

**Step 1: Calculate $N/2$.**

$$
\frac{25}{2}=12.5
$$

**Step 2: Identify the Median Class.**

Construct cumulative frequency:

| Class | Frequency | Cumulative Frequency |
| --- | --- | --- |
| 20–29 | 4 | 4 |
| 30–39 | 5 | 9 |
| 40–49 | 4 | 13 |
| 50–59 | 5 | 18 |
| 60–69 | 4 | 22 |
| 70–79 | 3 | 25 |

The 12.5th observation belongs to the 40–49 class.

Therefore:

$$
L=39.5
$$

$$
F=9
$$

$$
f_m=4
$$

$$
i=10
$$

**Step 3: Apply the Formula.**

$$
Me=39.5+\left(\frac{12.5-9}{4}\right)10
$$

$$
=39.5+\left(\frac{3.5}{4}\right)10
$$

$$
=39.5+8.75
$$

$$
Me=48.25\text{ Tk}
$$

### C. Mode

For grouped data:

$$
Mo=L+\left(\frac{\Delta_1}{\Delta_1+\Delta_2}\right)i
$$

Where:

- $\Delta_1=f_m-f_0$.

- $\Delta_2=f_m-f_2$.

Our frequency table has two modal classes:

- 30–39 with frequency 5.

- 50–59 with frequency 5.

Both are greater than their adjacent class frequencies.

**First modal class: 30–39**

$$
L=29.5
$$

$$
f_m=5,\quad f_0=4,\quad f_2=4
$$

$$
Mo_1=29.5+\frac{5-4}{(5-4)+(5-4)}\times10
$$

$$
Mo_1=29.5+\frac{1}{2}\times10
$$

$$
Mo_1=34.5
$$

**Second modal class: 50–59**

$$
L=49.5
$$

The preceding and succeeding frequencies are both 4.

$$
Mo_2=49.5+\frac{5-4}{(5-4)+(5-4)}\times10
$$

$$
Mo_2=49.5+5
$$

$$
Mo_2=54.5
$$

### Final Answer

| Measure | Grouped-data result |
| --- | --- |
| Mean | 48.10 Tk |
| Median | 48.25 Tk |
| Mode | 34.5 Tk and 54.5 Tk (two modal classes) |

**Important clarification:** The original ungrouped data have:

$$
Mean=48.28
$$

$$
Median=47
$$

There is no individual-value mode because all 25 raw observations are different.

The grouped-data estimates above are based on the chosen 10-unit intervals. Different class intervals can produce different grouped estimates. Since the question specifically says to calculate from the frequency distribution, the grouped calculations are the relevant answers.

## Question 2(b) — Find $Q_2$, $D_8$ and $P_{80}$ [3 marks]

**Question:**

Investigate $Q_2,D_8$ and $P_{80}$ for the given income data.

### Answer

Original data:

$$
\begin{aligned}
35,54,20,47,26,72,38,41,\\
24,32,69,78,61,34,29,45,56,\\
67,75,43,37,59,52,63,50
\end{aligned}
$$

### Step 1: Arrange in Ascending Order

$$
\begin{aligned}
20,24,26,29,32,34,35,37,38,41,\\
43,45,47,50,52,54,56,59,61,63,\\
67,69,72,75,78
\end{aligned}
$$

Total observations:

$$
N=25
$$

### A. Calculate $Q_2$

Formula:

$$
Position(Q_2)=\frac{2N}{4}
$$

$$
=\frac{2\times25}{4}
$$

$$
=12.5
$$

According to your lecturer's rule, take the next integer position.

Therefore, take the 13th observation.

$$
Q_2=47
$$

### B. Calculate $D_8$

Formula:

$$
Position(D_8)=\frac{8N}{10}
$$

$$
=\frac{8\times25}{10}
$$

$$
=20
$$

Since the position is an integer, average the 20th and 21st observations.

20th observation = 63.

21st observation = 67.

$$
D_8=\frac{63+67}{2}
$$

$$
D_8=65
$$

### C. Calculate $P_{80}$

Formula:

$$
Position(P_{80})=\frac{80N}{100}
$$

$$
=\frac{80\times25}{100}
$$

$$
=20
$$

Average the 20th and 21st observations.

$$
P_{80}=\frac{63+67}{2}
$$

$$
P_{80}=65
$$

### Final Answer

| Measure | Result |
| --- | --- |
| $Q_2$ | 47 |
| $D_8$ | 65 |
| $P_{80}$ | 65 |

**Important observation:**

$$
D_8=P_{80}
$$

This is because the eighth decile represents the 80th percentile.

$$
D_8=P_{80}
$$

## Question 3(a)(i) — Construct Box-and-Whisker Plots [2 marks]

**Question:**

A study looks at how students' sleep habits affect their test performance. The table shows average hours of sleep per night and their corresponding examination scores for eight students.

| Sleep Hours (X) | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exam Score (Y) | 45 | 50 | 52 | 58 | 65 | 70 | 75 | 78 |

Sketch a Box-and-Whisker Plot for X and Y.

### Answer

We need to calculate the five-number summary separately for both variables.

### A. Sleep Hours (X)

Data:

$$
3,4,5,6,7,8,9,10
$$

The data are already arranged in ascending order.

Number of observations:

$$
n=8
$$

**Minimum:**

$$
Min=3
$$

**First Quartile:**

$$
Position(Q_1)=\frac{8}{4}=2
$$

Since the position is an integer, average the second and third observations.

$$
Q_1=\frac{4+5}{2}
$$

$$
Q_1=4.5
$$

**Median:**

$$
Q_2=\frac{6+7}{2}
$$

$$
Q_2=6.5
$$

**Third Quartile:**

$$
Position(Q_3)=\frac{3\times8}{4}=6
$$

Average the sixth and seventh observations.

$$
Q_3=\frac{8+9}{2}
$$

$$
Q_3=8.5
$$

**Maximum:**

$$
Max=10
$$

Therefore, the five-number summary is:

$$
(3,\ 4.5,\ 6.5,\ 8.5,\ 10)
$$

### B. Examination Scores (Y)

Data:

$$
45,50,52,58,65,70,75,78
$$

Minimum:

$$
Min=45
$$

First quartile:

$$
Q_1=\frac{50+52}{2}
$$

$$
Q_1=51
$$

Median:

$$
Q_2=\frac{58+65}{2}
$$

$$
Q_2=61.5
$$

Third quartile:

$$
Q_3=\frac{70+75}{2}
$$

$$
Q_3=72.5
$$

Maximum:

$$
Max=78
$$

Five-number summary:

$$
(45,\ 51,\ 61.5,\ 72.5,\ 78)
$$

### Final Five-Number Summary

| Measure | Sleep Hours (X) | Exam Scores (Y) |
| --- | --- | --- |
| Minimum | 3 | 45 |
| $Q_1$ | 4.5 | 51 |
| Median | 6.5 | 61.5 |
| $Q_3$ | 8.5 | 72.5 |
| Maximum | 10 | 78 |

### Box-and-Whisker Plots

**Sleep Hours (X)**

**Examination Scores (Y)**

Both datasets have similar box-and-whisker structures, but they represent different units and scales.

## Question 3(a)(ii) — Investigate X and Y According to Variability [2 marks]

**Question:**

Investigate X and Y according to their variability.

### Answer

We can compare their relative variation using the Coefficient of Variation.

Formula:

$$
CV=\frac{SD}{Mean}\times 100
$$

Since these observations are treated as samples of students, we will use sample standard deviations.

### A. Sleep Hours (X)

Data:

$$
3,4,5,6,7,8,9,10
$$

Mean:

$$
\bar{x}=\frac{52}{8}
$$

$$
\bar{x}=6.5
$$

Sample standard deviation:

$$
s_X=\sqrt{6\approx2.449}
$$

Coefficient of Variation:

$$
CV_X=\frac{2.449}{6.5}\times 100
$$

$$
CV_X=37.68\%
$$

### B. Examination Scores (Y)

Data:

$$
45,50,52,58,65,70,75,78
$$

Mean:

$$
\bar{y}=\frac{493}{8}
$$

$$
\bar{y=61.625}
$$

Sample standard deviation:

$$
s_Y\approx12.223
$$

Coefficient of Variation:

$$
CV_Y=\frac{12.223}{61.625}\times 100
$$

$$
CV_Y=19.84\%
$$

### Comparison

| Measure | Sleep Hours | Examination Scores |
| --- | --- | --- |
| Mean | 6.5 | 61.625 |
| Sample SD | 2.449 | 12.223 |
| CV | 37.68% | 19.84% |

Since:

$$
37.68\%>19.84\%
$$

**Conclusion:**

Sleep hours have greater relative variability than examination scores.

Examination scores are more consistent relative to their mean.

This is a fairer comparison than comparing raw standard deviations because the two variables use different units and scales.

## Question 3(b) — Shape Characteristics of Examination Scores [3 marks]

**Question:**

Attain the shape characteristics of the distribution of Exam Score (Y).

Given:

$$
\mu_1=61.63
$$

$$
\mu_2=130.73
$$

$$
\mu_3=287.80
$$

$$
\mu_4=26437.67
$$

### Answer

We need to calculate:

- Skewness.

- Kurtosis.

### Step 1: Calculate the Coefficient of Skewness

Moment-based coefficient:

$$
\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}
$$

Substitute:

$$
\gamma_1=\frac{287.80}{(130.73)^{3/2}}
$$

$$
\gamma_1\approx0.193
$$

Alternatively, the coefficient used in your lecturer's supporting material is:

$$
\beta_1=\frac{\mu_3^2}{\mu_2^3}
$$

$$
\beta_1\approx0.0371
$$

The signed coefficient $\gamma_1$ is more helpful for interpreting the direction of skewness.

Since:

$$
\gamma_1>0
$$

The distribution is positively skewed.

Its positive skewness is relatively small.

### Step 2: Calculate Kurtosis

Formula:

$$
\beta_2=\frac{\mu_4}{\mu_2^2}
$$

Substitute:

$$
\beta_2=\frac{26437.67}{(130.73)^2}
$$

$$
\beta_2=\frac{26437.67}{17090.33}
$$

$$
\beta_2\approx1.547
$$

### Step 3: Interpret Kurtosis

We know:

- If $\beta_2>3$, Leptokurtic.

- If $\beta_2=3$, Mesokurtic.

- If $\beta_2<3$, Platykurtic.

Here:

$$
1.547<3
$$

Therefore, the distribution is Platykurtic.

### Final Answer

| Measure | Result | Interpretation |
| --- | --- | --- |
| Skewness | +0.193 | Slight positive skewness |
| Kurtosis | 1.547 | Platykurtic |

**Conclusion:** The distribution of examination scores is slightly positively skewed and platykurtic compared with the normal distribution.

## Question 4(a) — Calculate Skewness and Kurtosis of Examination Marks [3 marks]

**Question:**

The following data show the number of hours studied (X) and marks obtained (Y) by 10 students in a Statistics quiz.

| Hours Studied (X) | 2 | 4 | 3 | 5 | 4 | 6 | 5 | 7 | 3 | 6 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Marks (Y) | 50 | 55 | 52 | 60 | 58 | 62 | 61 | 65 | 54 | 63 |

Using the Marks Obtained data, calculate the Skewness and Kurtosis coefficients. Interpret the results.

Given:

$$
\mu_2=22.8
$$

$$
\mu_3=-25.2
$$

$$
\mu_4=910.8
$$

### Answer

We need to calculate the moment-based coefficient of skewness and the coefficient of kurtosis.

### Step 1: Calculate Skewness

Formula:

$$
\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}
$$

Given:

$$
\mu_2=22.8
$$

$$
\mu_3=-25.2
$$

Substitute:

$$
\gamma_1=\frac{-25.2}{(22.8)^{3/2}}
$$

First calculate:

$$
(22.8)^{3/2}=22.8\sqrt{22.8}
$$

$$
\approx108.87
$$

Therefore:

$$
\gamma_1=\frac{-25.2}{108.87}
$$

$$
\gamma_1\approx-0.2315
$$

Alternatively, using your lecturer's $\beta_1$ formula:

$$
\beta_1=\frac{\mu_3^2}{\mu_2^3}
$$

$$
=\frac{(-25.2)^2}{(22.8)^3}
$$

$$
\beta_1\approx0.05358
$$

Remember, $\beta_1$ does not show the direction of skewness because the third moment is squared.

### Interpretation of Skewness

Since:

$$
\gamma_1<0
$$

The distribution is negatively skewed.

The negative value is relatively small, indicating slight negative skewness.

### Step 2: Calculate Kurtosis

Formula:

$$
\beta_2=\frac{\mu_4}{\mu_2^2}
$$

Given:

$$
\mu_4=910.8
$$

$$
\mu_2=22.8
$$

Substitute:

$$
\beta_2=\frac{910.8}{(22.8)^2}
$$

$$
=\frac{910.8}{519.84}
$$

$$
\beta_2\approx1.7521
$$

### Step 3: Interpret Kurtosis

We know:

- $\beta_2>3$: Leptokurtic.

- $\beta_2=3$: Mesokurtic.

- $\beta_2<3$: Platykurtic.

Here:

$$
1.7521<3
$$

Therefore:

$$
\text{Platykurtic}
$$

### Final Answer

| Measure | Value | Interpretation |
| --- | --- | --- |
| Skewness ($\gamma_1$) | -0.2315 | Slight negative skewness |
| Kurtosis ($\beta_2$) | 1.7521 | Platykurtic |

**Conclusion:** The examination mark distribution is slightly negatively skewed and platykurtic.

## Question 4(b) — Scatter Diagram and Pearson's Correlation Coefficient [4 marks]

**Question:**

Draw a scatter diagram using the above data and calculate the Pearson's correlation coefficient between hours studied and marks obtained.

Interpret the strength and direction of the relationship in the context of academic performance.

### Answer

Given:

| Hours Studied (X) | Marks Obtained (Y) |
| --- | --- |
| 2 | 50 |
| 4 | 55 |
| 3 | 52 |
| 5 | 60 |
| 4 | 58 |
| 6 | 62 |
| 5 | 61 |
| 7 | 65 |
| 3 | 54 |
| 6 | 63 |

### Step 1: Construct the Scatter Diagram

X-axis = Hours Studied.

Y-axis = Marks Obtained.

Plot the following points:

$$
(2,50),(4,55),(3,52),(5,60),(4,58)
$$

$$
(6,62),(5,61),(7,65),(3,54),(6,63)
$$

Scatter diagram of 10 students. Each point represents one student's study hours and quiz mark.

**Observation:** As study hours increase, examination marks generally increase.

This suggests a positive relationship.

### Step 2: Calculate Means

Mean of X:

$$
\bar{x}=\frac{45}{10}
$$

$$
\bar{x}=4.5
$$

Mean of Y:

$$
\bar{y}=\frac{580}{10}
$$

$$
\bar{y=58}
$$

### Step 3: Prepare the Calculation Table

Use the computational formula:

$$
r=
\frac{n\sum xy-(\sum x)(\sum y)}
{\sqrt{[n\sum x^2-(\sum x)^2][n\sum y^2-(\sum y)^2]}}
$$

First calculate the required values.

| X | Y | $X^2$ | $Y^2$ | $XY$ |
| --- | --- | --- | --- | --- |
| 2 | 50 | 4 | 2500 | 100 |
| 4 | 55 | 16 | 3025 | 220 |
| 3 | 52 | 9 | 2704 | 156 |
| 5 | 60 | 25 | 3600 | 300 |
| 4 | 58 | 16 | 3364 | 232 |
| 6 | 62 | 36 | 3844 | 372 |
| 5 | 61 | 25 | 3721 | 305 |
| 7 | 65 | 49 | 4225 | 455 |
| 3 | 54 | 9 | 2916 | 162 |
| 6 | 63 | 36 | 3969 | 378 |
| **45** | **580** | **225** | **33868** | **2680** |

Therefore:

$$
\sum X=45
$$

$$
\sum Y=580
$$

$$
\sum X^2=225
$$

$$
\sum Y^2=33868
$$

$$
\sum XY=2680
$$

And:

$$
n=10
$$

### Step 4: Substitute into Pearson's Formula

$$
r=
\frac{10(2680)-(45)(580)}
{\sqrt{[10(225)-45^2][10(33868)-580^2]}}
$$

Calculate the numerator:

$$
=26800-26100
$$

$$
=700
$$

Calculate the first denominator part:

$$
10(225)-45^2
$$

$$
=2250-2025
$$

$$
=225
$$

Calculate the second denominator part:

$$
10(33868)-580^2
$$

$$
=338680-336400
$$

$$
=2280
$$

Therefore:

$$
r=\frac{700}{\sqrt{225\times2280}}
$$

$$
r=\frac{700}{\sqrt{513000}}
$$

$$
r=\frac{700}{716.24}
$$

$$
r\approx0.9773
$$

### Step 5: Interpret the Result

We obtained:

$$
r=0.9773
$$

This value is:

- Positive.

- Very close to +1.

- Indicative of a very strong positive linear correlation.

There is a very strong positive correlation between hours studied and examination marks.

This means that students who spend more hours studying tend to obtain higher marks in the Statistics quiz.

However, correlation alone does not prove that study hours are the only cause of higher examination marks.

# Part 3 — Fall 2025 Midterm
