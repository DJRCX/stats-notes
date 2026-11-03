# Solved Questions — Fall 2025 Midterm

Daffodil International University · STA 101 Statistics I

Fully worked solutions from the midterm examination papers.

## Question 1(a) — Population, Sample, Parameter, Statistic, Variable and Data [3 marks]

**Question:**

Suppose that a new antibody drug is currently under study. It is given to patients once the symptoms have revealed themselves. Of interest is the average (mean) length of time in months patients live once they start the treatment.

A set of 40 patients were selected from the start of treatment until their deaths. Among them, three data (in months) are 34, 45 and 47.

Describe what the key terms refer to in the scenario:

- Population.

- Sample.

- Parameter.

- Statistic.

- Variable.

- Data.

### Answer

**1. Population**

The population consists of all patients who meet the study's eligibility criteria and receive the antibody drug.

**2. Sample**

The sample consists of the 40 selected patients participating in the study.

$$
n=40
$$

**3. Parameter**

The parameter is the true population mean survival time (in months) of all eligible patients receiving the treatment.

$$
\mu
$$

**4. Statistic**

The statistic is the sample mean survival time calculated from the 40 selected patients.

$$
\bar{x}
$$

**5. Variable**

The variable is the length of time patients live after starting the treatment, measured in months.

It is a quantitative continuous variable.

**6. Data**

The recorded observations are survival times.

The question provides three observations:

$$
34,\ 45,\ 47\text{ months}
$$

These are examples of the collected data, not necessarily all 40 observations.

### Final Summary

| Term | Answer |
| --- | --- |
| Population | All eligible patients receiving the antibody treatment |
| Sample | 40 selected patients |
| Parameter | Population mean survival time |
| Statistic | Sample mean survival time |
| Variable | Survival duration after treatment |
| Data | 34, 45, 47 months (three supplied observations) |

## Question 1(b) — Identify Data Types and Measurement Levels [2 marks]

**Question:**

Comment on the correct data type (qualitative or quantitative) and the correct level of measurement.

i. The time (in minutes) it takes you to commute to campus.

ii. The colours of the houses around the park.

### Answer

**i. Commuting Time**

- Data type: Quantitative.

- Variable type: Continuous.

- Measurement level: Ratio.

Explanation: Time can take decimal values and has a meaningful zero. Zero minutes represents no elapsed commuting time.

**ii. Colours of Houses**

- Data type: Qualitative.

- Measurement level: Nominal.

Explanation: Colours are categories without a meaningful natural order.

### Final Answer

| Variable | Data type | Variable type | Measurement level |
| --- | --- | --- | --- |
| Commuting time | Quantitative | Continuous | Ratio |
| House colours | Qualitative | Not applicable | Nominal |

## Question 2(a)(i) — Construct a Frequency Distribution with Cumulative Relative Frequencies [4 marks]

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

We will use the same observations as in the Summer 2025 paper's Question 2.

### Step 1: Find the Number of Observations

$$
N=25
$$

Minimum:

$$
20
$$

Maximum:

$$
78
$$

Range:

$$
R=78-20=58
$$

### Step 2: Choose the Class Intervals

Use a convenient class width of 10.

| Class | Frequency |
| --- | --- |
| 20–29 | 4 |
| 30–39 | 5 |
| 40–49 | 4 |
| 50–59 | 5 |
| 60–69 | 4 |
| 70–79 | 3 |
| **Total** | **25** |

### Step 3: Calculate Relative Frequency

Formula:

$$
RF=\frac{f}{N}
$$

For example, the first class:

$$
RF=\frac{4}{25}=0.16
$$

### Step 4: Calculate Cumulative Relative Frequency

Add each relative frequency to the previous cumulative total.

### Final Answer

| Class | Frequency | Relative Frequency | Cumulative Relative Frequency |
| --- | --- | --- | --- |
| 20–29 | 4 | 0.16 | 0.16 |
| 30–39 | 5 | 0.20 | 0.36 |
| 40–49 | 4 | 0.16 | 0.52 |
| 50–59 | 5 | 0.20 | 0.72 |
| 60–69 | 4 | 0.16 | 0.88 |
| 70–79 | 3 | 0.12 | 1.00 |
| **Total** | **25** | **1.00** | **1.00** |

**Verification:**

$$
\sum f=25
$$

$$
\sum RF=1
$$

The final cumulative relative frequency must be 1 or 100%.

## Question 2(a)(ii) — Sketch an Appropriate Graph [2 marks]

**Question:**

Sketch an appropriate graph for the given data.

### Answer

A histogram is appropriate because the variable represents numerical income values grouped into continuous class intervals.

Use the following frequency distribution:

| Class | Frequency |
| --- | --- |
| 20–29 | 4 |
| 30–39 | 5 |
| 40–49 | 4 |
| 50–59 | 5 |
| 60–69 | 4 |
| 70–79 | 3 |

Number of days falling into each income interval. Draw adjacent bars for the histogram.

**Interpretation:**

The highest frequencies are found in the 30–39 and 50–59 classes. Both have five observations.

The lowest frequency is found in the 70–79 class, with three observations.

## Question 2(a)(iii) — Mean, Median and Mode [4 marks]

**Question:**

Investigate the Mean, Median and Mode from the frequency distribution in part (i).

### Answer

This is the same grouped-data calculation used in Summer 2025.

### A. Mean

Formula:

$$
\bar{x}=\frac{\sum fx}{N}
$$

| Class | $f$ | Midpoint $x$ | $fx$ |
| --- | --- | --- | --- |
| 20–29 | 4 | 24.5 | 98 |
| 30–39 | 5 | 34.5 | 172.5 |
| 40–49 | 4 | 44.5 | 178 |
| 50–59 | 5 | 54.5 | 272.5 |
| 60–69 | 4 | 64.5 | 258 |
| 70–79 | 3 | 74.5 | 223.5 |
| **Total** | **25** |  | **1202.5** |

Substitute:

$$
\bar{x}=\frac{1202.5}{25}
$$

$$
Mean=48.10\text{ Tk}
$$

### B. Median

Formula:

$$
Me=L+\left(\frac{N/2-F}{f_m}\right)i
$$

First calculate:

$$
N/2=25/2=12.5
$$

The median class is 40–49 because its cumulative frequency is 13.

Therefore:

$$
L=39.5,\quad F=9,\quad f_m=4,\quad i=10
$$

Substitute:

$$
Me=39.5+\left(\frac{12.5-9}{4}\right)10
$$

$$
=39.5+8.75
$$

$$
Median=48.25\text{ Tk}
$$

### C. Mode

There are two modal classes:

- 30–39.

- 50–59.

Both have the highest frequency of 5.

Using the grouped mode formula:

$$
Mo=L+\frac{f_m-f_0}{2f_m-f_0-f_2}\times i
$$

For 30–39:

$$
Mo_1=29.5+\frac{5-4}{10-4-4}\times10
$$

$$
Mo_1=34.5
$$

For 50–59:

$$
Mo_2=49.5+\frac{5-4}{10-4-4}\times10
$$

$$
Mo_2=54.5
$$

### Final Answer

| Measure | Result |
| --- | --- |
| Mean | 48.10 Tk |
| Median | 48.25 Tk |
| Mode | 34.5 Tk and 54.5 Tk (two modal classes) |

As in the Summer 2025 paper, these are grouped estimates. The raw data have a mean of 48.28, median of 47 and no individual-value mode.

## Question 2(b) — Calculate $Q_2,D_8$ and $P_{80}$ [3 marks]

**Question:**

Investigate $Q_2,D_8$, and $P_{80}$ of the income data.

### Answer

Arrange the data in ascending order:

$$
\begin{aligned}
20,24,26,29,32,34,35,37,38,41,\\
43,45,47,50,52,54,56,59,61,63,\\
67,69,72,75,78
\end{aligned}
$$

$$
N=25
$$

### A. Second Quartile ($Q_2$)

$$
Position(Q_2)=\frac{2N}{4}
$$

$$
=\frac{2\times25}{4}=12.5
$$

Take the next integer position, the 13th observation.

$$
Q_2=47
$$

### B. Eighth Decile ($D_8$)

$$
Position(D_8)=\frac{8N}{10}
$$

$$
=\frac{8\times25}{10}=20
$$

Since the position is an integer, average the 20th and 21st observations.

$$
D_8=\frac{63+67}{2}
$$

$$
D_8=65
$$

### C. 80th Percentile ($P_{80}$)

$$
Position(P_{80})=\frac{80N}{100}
$$

$$
=\frac{80\times25}{100}=20
$$

Therefore:

$$
P_{80}=\frac{63+67}{2}
$$

$$
P_{80=65}
$$

### Final Answer

$$
Q_2=47,\quad D_8=65,\quad P_{80=65}
$$

## Question 3(a)(i) — Box-and-Whisker Plots for X and Y [2 marks]

**Question:**

A study investigates how students' sleep habits affect their test performance.

| Sleep Hours (X) | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exam Score (Y) | 45 | 50 | 52 | 58 | 65 | 70 | 75 | 78 |

Sketch a Box-and-Whisker Plot for X and Y.

### Answer

We must calculate the five-number summary for both datasets.

### A. Sleep Hours (X)

$$
3,4,5,6,7,8,9,10
$$

Minimum:

$$
Min=3
$$

First Quartile:

$$
Q_1=\frac{4+5}{2}=4.5
$$

Median:

$$
Q_2=\frac{6+7}{2}=6.5
$$

Third Quartile:

$$
Q_3=\frac{8+9}{2}=8.5
$$

Maximum:

$$
Max=10
$$

Therefore:

$$
(3,4.5,6.5,8.5,10)
$$

### B. Exam Scores (Y)

$$
45,50,52,58,65,70,75,78
$$

Minimum:

$$
Min=45
$$

First Quartile:

$$
Q_1=\frac{50+52}{2}=51
$$

Median:

$$
Q_2=\frac{58+65}{2}=61.5
$$

Third Quartile:

$$
Q_3=\frac{70+75}{2}=72.5
$$

Maximum:

$$
Max=78
$$

Therefore:

$$
(45,51,61.5,72.5,78)
$$

### Final Table

| Five-number summary | X | Y |
| --- | --- | --- |
| Minimum | 3 | 45 |
| $Q_1$ | 4.5 | 51 |
| Median | 6.5 | 61.5 |
| $Q_3$ | 8.5 | 72.5 |
| Maximum | 10 | 78 |

### Box Plots

**X — Sleep Hours**

**Y — Exam Scores**

## Question 3(a)(ii) — Investigate X and Y According to Variability [2 marks]

**Question:**

Investigate X and Y according to their variability.

### Answer

We use the Coefficient of Variation to compare relative variability.

$$
CV=\frac{SD}{Mean}\times100
$$

### A. Sleep Hours (X)

Mean:

$$
\bar{x}=\frac{52}{8}=6.5
$$

Sample standard deviation:

$$
s_X=\sqrt{6}
$$

$$
s_X=2.449
$$

Coefficient of Variation:

$$
CV_X=\frac{2.449}{6.5}\times100
$$

$$
CV_X=37.68\%
$$

### B. Exam Scores (Y)

Mean:

$$
\bar{y}=\frac{493}{8}=61.625
$$

Sample standard deviation:

$$
s_Y=12.223
$$

Coefficient of Variation:

$$
CV_Y=\frac{12.223}{61.625}\times100
$$

$$
CV_Y=19.84\%
$$

### Comparison

| Measure | X — Sleep Hours | Y — Exam Scores |
| --- | --- | --- |
| Mean | 6.5 | 61.625 |
| Sample SD | 2.449 | 12.223 |
| CV | 37.68% | 19.84% |

Since:

$$
37.68\%>19.84\%
$$

**Conclusion:** Sleep hours have greater relative variability than examination scores. Examination scores are more consistent relative to their mean.

## Question 3(b) — Shape Characteristics of Examination Score Distribution [3 marks]

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

We need to calculate skewness and kurtosis.

### Step 1: Calculate Skewness

Moment-based formula:

$$
\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}
$$

Substitute:

$$
\gamma_1=\frac{287.80}{(130.73)^{3/2}}
$$

$$
\gamma_1\approx0.1925
$$

Alternatively:

$$
\beta_1=\frac{\mu_3^2}{\mu_2^3}
$$

$$
\beta_1\approx0.0371
$$

Since $\gamma_1$ is positive, the distribution is positively skewed.

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
\beta_2\approx1.5469
$$

### Step 3: Interpret Kurtosis

Since:

$$
1.5469<3
$$

The distribution is Platykurtic.

### Final Answer

| Measure | Result | Interpretation |
| --- | --- | --- |
| Skewness | +0.1925 | Slight positive skewness |
| Kurtosis | 1.5469 | Platykurtic |

**Conclusion:** The examination score distribution is slightly positively skewed and platykurtic.

# Completing Part 2 — Summer 2025 Midterm

The remaining two questions from the Summer 2025 paper are below.

## Question 3(a) — Five-Number Summary and Box-and-Whisker Plot [4 marks]

**Question:**

The following data represent the number of books read by 15 students in a month:

$$
3,5,7,4,6,8,10,12,6,5,9,4,7,11,13
$$

Calculate the five-number summary of the dataset (Minimum, Q1, Median, Q3, Maximum). Draw a Box-and-Whisker Plot using the five-number summary.

### Answer

### Step 1: Arrange Data in Ascending Order

$$
3,4,4,5,5,6,6,7,8,9,10,11,12,13
$$

There is one missing observation in the displayed sequence above, so the complete sorted dataset is:

$$
3,4,4,5,5,6,6,7,7,8,9,10,11,12,13
$$

Total observations:

$$
n=15
$$

### Step 2: Find Minimum

$$
Minimum=3
$$

### Step 3: Find First Quartile ($Q_1$)

$$
Position(Q_1)=\frac{1\times15}{4}
$$

$$
=3.75
$$

Take the next integer position, which is the 4th observation.

$$
Q_1=5
$$

### Step 4: Find Median ($Q_2$)

$$
Position(Q_2)=\frac{2\times15}{4}
$$

$$
=7.5
$$

Take the next integer position, the 8th observation.

$$
Q_2=7
$$

### Step 5: Find Third Quartile ($Q_3$)

$$
Position(Q_3)=\frac{3\times15}{4}
$$

$$
=11.25
$$

Take the next integer position, the 12th observation.

$$
Q_3=10
$$

### Step 6: Find Maximum

$$
Maximum=13
$$

### Final Five-Number Summary

| Measure | Value |
| --- | --- |
| Minimum | 3 |
| First Quartile ($Q_1$) | 5 |
| Median ($Q_2$) | 7 |
| Third Quartile ($Q_3$) | 10 |
| Maximum | 13 |

### Step 7: Check for Outliers

Although not specifically required, checking for outliers helps determine the whisker endpoints.

First, calculate IQR:

$$
IQR=Q_3-Q_1
$$

$$
IQR=10-5=5
$$

Lower Inner Fence:

$$
LIF=5-1.5(5)
$$

$$
LIF=-2.5
$$

Upper Inner Fence:

$$
UIF=10+1.5(5)
$$

$$
UIF=17.5
$$

All observations lie between -2.5 and 17.5.

Therefore, there are no suspected outliers.

### Step 8: Draw the Box Plot

**Box-and-Whisker Plot — Books Read**

**Conclusion:** The middle 50% of students read between 5 and 10 books. No outliers are detected.

## Question 3(b) — Variance, Standard Deviation and Coefficient of Variation [4 marks]

**Question:**

Calculate the following measures of dispersion:

- Variance.

- Standard Deviation.

- Coefficient of Variation (CV).

Comment on the findings.

### Answer

Given data:

$$
3,5,7,4,6,8,10,12,6,5,9,4,7,11,13
$$

For the main solution, we will treat the 15 observations as the dataset being described and use the population formulas. I will also give the sample results for comparison.

### Step 1: Calculate the Mean

$$
\bar{x}=\frac{\sum x}{n}
$$

$$
\bar{x}=\frac{110}{15}
$$

$$
\bar{x=7.3333}
$$

### Step 2: Calculate Squared Deviations

For easier calculation, use:

$$
\sum(x-\bar{x})^2=\sum x^2-\frac{(\sum x)^2}{n}
$$

First calculate the sum of squares:

$$
\begin{aligned}
\sum x^2={}&3^2+5^2+7^2+4^2+6^2\\
&+8^2+10^2+12^2+6^2+5^2\\
&+9^2+4^2+7^2+11^2+13^2
\end{aligned}
$$

$$
\sum x^2=940
$$

Therefore:

$$
\sum(x-\bar{x})^2=940-\frac{110^2}{15}
$$

$$
=940-\frac{12100}{15}
$$

$$
\sum(x-\bar{x)^2=133.3333}
$$

### Step 3: Calculate Population Variance

Formula:

$$
\sigma^2=\frac{\sum(x-\mu)^2}{N}
$$

$$
\sigma^2=\frac{133.3333}{15}
$$

$$
\sigma^2=8.8889
$$

### Step 4: Calculate Population Standard Deviation

Formula:

$$
\sigma=\sqrt{\sigma^2}
$$

$$
\sigma=\sqrt{8.8889}
$$

$$
\sigma=2.9814
$$

### Step 5: Calculate Coefficient of Variation

Formula:

$$
CV=\frac{SD}{Mean}\times100
$$

$$
CV=\frac{2.9814}{7.3333}\times100
$$

$$
CV=40.66\%
$$

### Final Answer — Population Calculation

| Measure | Result |
| --- | --- |
| Mean | 7.3333 books |
| Variance | 8.8889 |
| Standard Deviation | 2.9814 books |
| Coefficient of Variation | 40.66% |

### Alternative: Sample Calculation

If the 15 students are treated as a sample from a larger population, use $n-1$.

$$
s^2=\frac{133.3333}{15-1}
$$

$$
s^2=9.5238
$$

$$
s=\sqrt{9.5238}
$$

$$
s=3.0861
$$

$$
CV=\frac{3.0861}{7.3333}\times100
$$

$$
CV=42.08\%
$$

### Comment on the Findings

The standard deviation is approximately 2.98 books when treating the data as a population.

The coefficient of variation is approximately 40.66%, indicating that the standard deviation is about 40.66% of the average number of books read.

There is noticeable variation in the number of books read by the students.

## Question 4(a) — Skewness and Kurtosis [3 marks]

**Question:**

Using the Marks Obtained data, calculate the Skewness and Kurtosis coefficients.

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

The examination scores are:

$$
50,55,52,60,58,62,61,65,54,63
$$

The supplied moments allow us to calculate the shape characteristics directly.

### Step 1: Calculate Skewness

Formula:

$$
\gamma_1=\frac{\mu_3}{\mu_2^{3/2}}
$$

Substitute:

$$
\gamma_1=\frac{-25.2}{(22.8)^{3/2}}
$$

$$
\gamma_1=-0.2315
$$

Since the value is negative, the distribution is negatively skewed.

Alternatively:

$$
\beta_1=\frac{\mu_3^2}{\mu_2^3}
$$

$$
\beta_1=0.05358
$$

### Step 2: Calculate Kurtosis

Formula:

$$
\beta_2=\frac{\mu_4}{\mu_2^2}
$$

$$
=\frac{910.8}{22.8^2}
$$

$$
=\frac{910.8}{519.84}
$$

$$
\beta_2=1.7521
$$

### Step 3: Interpret

Since:

$$
1.7521<3
$$

The distribution is Platykurtic.

### Final Answer

- Skewness = -0.2315 → Slight negative skewness.

- Kurtosis = 1.7521 → Platykurtic distribution.

The examination-score distribution is slightly negatively skewed and flatter than the normal reference distribution in terms of kurtosis.

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

### Step 1: Construct Scatter Diagram

The X-axis represents hours studied.

The Y-axis represents marks obtained.

Scatter diagram using the Summer 2025 midterm observations.

The points generally move upwards from left to right, showing a positive relationship.

### Step 2: Identify Required Values

From our earlier calculations:

$$
n=10
$$

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

### Step 3: Apply Pearson's Formula

$$
r=
\frac{n\sum XY-(\sum X)(\sum Y)}
{\sqrt{[n\sum X^2-(\sum X)^2][n\sum Y^2-(\sum Y)^2]}}
$$

Substitute:

$$
r=
\frac{10(2680)-(45)(580)}
{\sqrt{[10(225)-45^2][10(33868)-580^2]}}
$$

Numerator:

$$
26800-26100=700
$$

First denominator part:

$$
2250-2025=225
$$

Second denominator part:

$$
338680-336400=2280
$$

Therefore:

$$
r=\frac{700}{\sqrt{225\times2280}}
$$

$$
r=\frac{700}{716.24}
$$

$$
r=0.9773
$$

### Step 4: Interpret the Result

The value is positive and very close to +1.

Therefore, there is a very strong positive linear correlation between study hours and examination marks.

**Conclusion:** Students who spend more hours studying generally tend to obtain higher examination marks in this dataset.

---

# 4. Important observations across all three papers

After solving the papers, these are the recurring topics worth prioritizing.

| Topic | Fall 2024 | Summer 2025 | Fall 2025 |
| --- | --- | --- | --- |
| Population and Sample |  | — |  |
| Data Classification | — |  |  |
| Frequency Distribution |  |  |  |
| Mean, Median, Mode |  |  |  |
| Quartiles and Percentiles |  |  |  |
| Box Plot and Outliers |  |  |  |
| Variance and SD |  |  | — |
| Coefficient of Variation |  |  |  |
| Skewness and Kurtosis | — |  |  |
| Pearson Correlation | — |  | — |

## 5. My recommendations for your upcoming exam

Based on the three previous papers, I would prioritize these six areas:

- **Frequency Distribution:** Constructing tables, relative frequencies, cumulative frequencies and histograms.

- **Measures of Location:** Quartiles, deciles, percentiles and their position calculations.

- **Box Plots:** Five-number summaries, IQR, inner fences and detecting outliers.

- **Measures of Dispersion:** Variance, standard deviation and coefficient of variation.

- **Skewness and Kurtosis:** Calculating the coefficients and interpreting the distribution.

- **Correlation:** Scatter diagrams, Pearson's coefficient and interpretation.

Also prepare the conceptual questions about population, sample, parameters, statistics, variables and measurement levels. They appear repeatedly.

### A few corrections and calculation notes

There was a minor rounding error in the Samsung squared-deviation table in Fall 2024 Question 3(a). Its correct sum is 3893.33, giving the previously reported SD of 25.47 and CV of 24.57%. The comparison and conclusion remain unchanged.

Also, grouped mean, median and mode can differ slightly from calculations using the original raw observations. I've shown both where this matters.

**Solution coverage**

# 3

# 30

# 50

**My advice:** Practice the numerical questions from these three papers yourself at least once without looking at the solutions. They are particularly useful because the same concepts appear across different examination sessions, sometimes with different data and slightly different requirements.

If you want, I can:

- Continue with detailed solutions for later exams

- Explain calculation conventions used

- Provide practice exercises based on solved questions
