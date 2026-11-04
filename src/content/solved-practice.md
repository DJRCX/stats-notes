# Solved Questions — Midterm Practice (9 Questions)

Daffodil International University · STA 101 Statistics I

Fully worked solutions from the Midterm practice SWE.pdf paper.

I've gone through your uploaded Midterm practice SWE.pdf (all 9 questions), and I've also checked our previous Statistics conversations and study materials.

I'll follow the conventions from your earlier Statistics study guide and lecturer materials, particularly:

- Clear identification of population, sample, variable, parameter and statistic.

- Proper classification of measurement scales.

- Frequency distributions with appropriate class intervals.

- Step-by-step calculations rather than just final answers.

- Population and sample standard deviation distinctions.

- Coefficient of Variation (CV) for comparing variability.

- Proper tables and graphical representations.

I'll solve the questions in their original order. I'll also explain the reasoning behind each calculation so you can reproduce the solutions in your exam.

Important: Where a question does not provide enough information to identify a sampling method, I'll point that out rather than assume something that isn't stated.

## Question 1 – Identifying the Key Terms in a Statistical Study

**Question:**
We want to analyze the average amount of time per week final-year Software Engineering students spend using version control systems like Git.

We surveyed a random sample of 100 students. Three of them reported spending 3, 5, and 7 hours weekly.

Identify the meanings of the key terms in this study.

### Solution

We need to identify the following statistical terms.

1. Population

The population is the entire group of individuals we want to study.

Here:

All final-year Software Engineering students.

2. Sample

A sample is a smaller group selected from the population to collect information.

Here:

100 randomly selected final-year Software Engineering students.

3. Individual (Observational Unit)

An individual is a single member of the population being studied.

Here:

One final-year Software Engineering student.

4. Variable

A variable is a characteristic or property that is measured or observed.

Here:

The number of hours per week a student spends using version control systems such as Git.

5. Data

Data are the actual observations or measurements collected from the sample.

Here, three reported observations are:

- Student 1: 3 hours

- Student 2: 5 hours

- Student 3: 7 hours

6. Parameter

A parameter is a numerical value describing an entire population.

Here:

The true average weekly time spent using version control systems by all final-year Software Engineering students.

It is usually represented by population mean $\mu$.

7. Statistic

A statistic is a numerical value calculated from a sample.

For example, using the three reported observations:

$$
\bar{x}=\frac{3+5+7}{3}
$$

$$
\bar{x}=\frac{15}{3}=\boxed{5\text{ hours}}
$$

This is the mean of the three reported observations, not necessarily the mean of all 100 students.

### Final Answer

| Statistical term | Answer |
| --- | --- |
| Population | All final-year Software Engineering students |
| Sample | 100 randomly selected students |
| Individual | One final-year Software Engineering student |
| Variable | Weekly time spent using version control systems |
| Data | 3, 5 and 7 hours (among the reported observations) |
| Parameter | True population average weekly usage time |
| Statistic | Sample average; 5 hours for the three reported observations |

## Question 2 – Sampling Method, Measurement Level and Data Analysis

**Question:**
A nutritionist is studying how a new diet plan affects adults' daily water intake.

There are 80 adults following this diet plan. From this group, a sample of 6 adults is selected to monitor their daily water intake (in liters) for one week.

Three recorded observations on a specific day are:

$$
1.8,\quad 2.2,\quad 1.5
$$

Some participants occasionally forgot to log their water intake or estimated the amount they drank instead of measuring precisely.

### (a) Identify the sampling method. Is there any type of error in the sampling process?

Step 1: Identify the population

All 80 adults following the diet plan.

Step 2: Identify the sample

The 6 adults selected from the population.

Step 3: Identify the sampling method

The question does not explicitly state how the 6 adults were selected.

Therefore, the sampling method cannot be determined with certainty.

If the nutritionist selected the 6 adults randomly, the method would be:

Simple Random Sampling (SRS).

In simple random sampling, every individual in the population has an equal chance of being selected.

Step 4: Identify possible errors

There are two important issues.

1. Non-sampling error

Some participants forgot to record their water intake.

This creates missing data.

Additionally, some participants estimated their water intake instead of measuring it accurately.

This creates measurement error.

These are both examples of non-sampling errors.

2. Sampling error

Sampling error occurs when a sample does not perfectly represent the population simply because only a subset of the population was observed.

For example, the average water intake of the 6 selected adults may differ from the average water intake of all 80 adults.

This is a natural possibility when sampling.

Important distinction

| Error | Meaning | Present here? |
| --- | --- | --- |
| Sampling error | Difference between sample results and population results | Possible |
| Measurement error | Incorrectly measured or estimated water intake | Yes |
| Missing-data error | Some observations are not recorded | Yes |
| Selection bias | Certain individuals are more likely to be selected | Cannot determine from the question |

### (b) Identify the appropriate level of measurement. Suggest three possible analyses.

Step 1: Identify the data type

Daily water intake is measured in liters.

It is quantitative and continuous data because water intake can take decimal values.

Examples:

- 1.5 liters

- 1.8 liters

- 2.25 liters

Step 2: Identify the measurement level

The correct measurement level is Ratio Scale.

Reasons:

- There is a meaningful zero. Zero liters means no water intake.

- Differences between values are meaningful.

- Ratios are meaningful.

For example:

2 liters is twice as much water as 1 liter.

Step 3: Suggest three possible analyses

Using the three available observations:

$$
1.8,\quad 2.2,\quad 1.5
$$

Analysis 1: Mean (Average)

$$
\bar{x}=\frac{\sum x}{n}
$$

$$
=\frac{1.8+2.2+1.5}{3}
$$

$$
=\frac{5.5}{3}
$$

$$
\boxed{\bar{x}=1.83\text{ liters}}
$$

This tells us the average water intake of the three observed participants on that day.

Analysis 2: Median

First, arrange the data in ascending order:

$$
1.5,\quad 1.8,\quad 2.2
$$

Since there are three observations, the middle value is the median.

$$
\boxed{\text{Median}=1.8\text{ liters}}
$$

The median represents the middle observation.

Analysis 3: Range

Range measures the difference between the maximum and minimum values.

$$
Range=X_{\max}-X_{\min}
$$

$$
=2.2-1.5
$$

$$
\boxed{Range=0.7\text{ liters}}
$$

This indicates the spread of the three observed water-intake values.

### Final Answer

- Sampling method: Not specified; Simple Random Sampling if participants were randomly selected.

- Possible errors: Sampling error, measurement error and missing-data error.

- Data type: Quantitative continuous.

- Measurement level: Ratio scale.

- Three analyses: Mean = 1.83 liters, Median = 1.8 liters, Range = 0.7 liters.

## Question 3 – Sampling Method and Measurement Scale of Temperature

**Question:**
A meteorologist studies daily average temperatures in degrees Celsius over 100 consecutive days.

The meteorologist selects 5 days from the 100-day period.

Recorded temperatures:

$$
22,\quad25,\quad21,\quad23,\quad24
$$

### (a) Identify the sampling method. Is there any type of error?

Population:

All 100 days in the observation period, represented by their daily average temperatures.

Sample:

The 5 selected days.

Sampling method:

The question does not specify how the 5 days were selected.

Therefore, we cannot definitively identify the sampling method.

If the meteorologist randomly selects 5 days, it is Simple Random Sampling.

If the meteorologist selects every fixed interval after a random starting point, it is Systematic Sampling.

Possible errors:

- Sampling error: The 5 selected days may not represent the temperature pattern of all 100 days.

- Selection bias: If the meteorologist deliberately chooses particular days, the sample may be biased.

- Measurement error: Incorrect temperature measurements could affect the results.

The question does not establish that selection bias or measurement error actually occurred.

### (b) Identify the appropriate level of measurement and suggest three analyses.

Step 1: Identify the data type

Temperature in Celsius is quantitative continuous data.

Step 2: Identify the measurement level

The appropriate measurement scale is Interval Scale.

Why?

- Temperature differences are meaningful.

- The difference between 20°C and 25°C is the same as the difference between 25°C and 30°C.

- Zero Celsius does not mean the complete absence of temperature.

- Ratios are not meaningful in Celsius.

For example, 20°C is not twice as hot as 10°C.

Step 3: Perform three analyses

Given:

$$
22,\quad25,\quad21,\quad23,\quad24
$$

Analysis 1: Mean

$$
\bar{x}=\frac{22+25+21+23+24}{5}
$$

$$
=\frac{115}{5}
$$

$$
\boxed{\bar{x}=23^\circ C}
$$

Analysis 2: Median

Arrange the values:

$$
21,\quad22,\quad23,\quad24,\quad25
$$

The middle value is:

$$
\boxed{Median=23^\circ C}
$$

Analysis 3: Range

$$
Range=X_{\max}-X_{\min}
$$

$$
=25-21
$$

$$
\boxed{Range=4^\circ C}
$$

### Final Answer

| Item | Answer |
| --- | --- |
| Population | Temperatures recorded over all 100 days |
| Sample | 5 selected days |
| Sampling method | Not specified; SRS if randomly selected |
| Data type | Quantitative continuous |
| Measurement level | Interval scale |
| Mean | 23°C |
| Median | 23°C |
| Range | 4°C |

## Question 4 – Identifying Data Types

**Question:** Determine whether each variable is quantitative or qualitative. If quantitative, identify whether it is continuous or discrete.

### Understanding the concepts

There are two major types of data:

1. Qualitative Data (Categorical Data)

Describes characteristics, categories or qualities rather than numerical quantities.

Examples:

- Programming language.

- Operating system.

- Gender.

- Color.

2. Quantitative Data (Numerical Data)

Represents numerical measurements or counts.

Quantitative data can be divided into:

- Discrete: Countable values, usually whole numbers.

- Continuous: Measurable values that can include decimals.

### Solutions

| Item | Variable | Data type | Explanation |
| --- | --- | --- | --- |
| a | Number of mobile apps used regularly | Quantitative – Discrete | Apps are counted in whole numbers. |
| b | Favorite programming language | Qualitative | Programming languages represent categories. |
| c | Daily time spent on online coding platforms | Quantitative – Continuous | Time can be measured in fractions of minutes. |
| d | Operating system used on PC | Qualitative | Windows, Linux and macOS are categories. |
| e | Number of devices owned that can run coding | Quantitative – Discrete | Devices are counted in whole numbers. |
| f | Storage size of personal computer in GB | Quantitative – Continuous | Storage capacity can be expressed in decimal values. |

### Final Answer

- a. Quantitative – Discrete

- b. Qualitative

- c. Quantitative – Continuous

- d. Qualitative

- e. Quantitative – Discrete

- f. Quantitative – Continuous

Exam tip: Remember:

- If you COUNT something → usually Discrete.

- If you MEASURE something → usually Continuous.

- If you describe a CATEGORY → Qualitative.

## Question 5 – Frequency Distribution, Percentage, Mean and Histogram

**Question:**
The following data represent the number of minutes 30 Software Engineering students spent reading in a single day.

```
30, 35, 40, 49, 54, 57, 61, 43, 48, 37,
45, 51, 68, 70, 73, 75, 84, 88, 66, 53,
46, 60, 59, 38, 42, 65, 81, 50, 36, 47
```

### (i) Construct a frequency distribution table.

Step 1: Find the number of observations

$$
n=30
$$

Step 2: Find the minimum and maximum values

$$
X_{\min}=30
$$

$$
X_{\max}=88
$$

Step 3: Calculate the range

$$
R=X_{\max}-X_{\min}
$$

$$
=88-30
$$

$$
\boxed{R=58}
$$

Step 4: Determine the number of classes

Following the $2^k\geq n$ convention from your previous Statistics materials:

$$
2^k\geq30
$$

Try:

$$
2^4=16 \quad \text{(not sufficient)}
$$

$$
2^5=32 \quad \text{(sufficient)}
$$

Therefore:

$$
\boxed{k=5\text{ classes}}
$$

Step 5: Calculate class width

$$
h=\frac{R}{k}
$$

$$
=\frac{58}{5}=11.6
$$

We round upward:

$$
\boxed{h=12}
$$

Step 6: Construct the class intervals

Starting from 30, each class contains 12 possible integer values.

| Class | Class interval |
| --- | --- |
| 1 | 30–41 |
| 2 | 42–53 |
| 3 | 54–65 |
| 4 | 66–77 |
| 5 | 78–89 |

Step 7: Count the observations in each class

Let's count how many values fall within each interval.

- 30–41: 30, 35, 40, 37, 38, 36 = 6

- 42–53: 49, 43, 48, 45, 51, 53, 46, 42, 50, 47 = 10

- 54–65: 54, 57, 61, 60, 59, 65 = 6

- 66–77: 68, 70, 73, 75, 66 = 5

- 78–89: 84, 88, 81 = 3

Final frequency distribution table

| Class interval | Midpoint (x) | Frequency (f) | Cumulative frequency (cf) |
| --- | --- | --- | --- |
| 30–41 | 35.5 | 6 | 6 |
| 42–53 | 47.5 | 10 | 16 |
| 54–65 | 59.5 | 6 | 22 |
| 66–77 | 71.5 | 5 | 27 |
| 78–89 | 83.5 | 3 | 30 |
| Total |  | 30 |  |

Check:

$$
\sum f=6+10+6+5+3=30
$$

The total frequency matches the number of observations. Therefore, the table is correct.

### (ii) What percentage of students spent between 40 and 60 minutes reading?

Step 1: Identify the values

We need to count observations satisfying:

$$
40\leq x\leq60
$$

The values are:

$$
40,42,43,45,46,47,48,49,50,51,53,54,57,59,60
$$

Number of students:

$$
f=15
$$

Step 2: Apply the percentage formula

$$
Percentage=\frac{f}{n}\times100
$$

$$
=\frac{15}{30}\times100
$$

$$
\boxed{Percentage=50\%}
$$

Final answer: 50%

### (iii) Calculate the mean time spent from the frequency distribution table.

For grouped data, we use:

$$
\bar{x}=\frac{\sum fx}{\sum f}
$$

Where:

- $f$ = frequency

- $x$ = class midpoint

- $fx$ = frequency multiplied by midpoint

Step 1: Calculate the midpoints

Formula:

$$
x=\frac{\text{Lower limit}+\text{Upper limit}}{2}
$$

For the first class:

$$
x=\frac{30+41}{2}=35.5
$$

Repeat for the remaining classes.

Step 2: Calculate $fx$

| Class | f | Midpoint (x) | fx |
| --- | --- | --- | --- |
| 30–41 | 6 | 35.5 | 213 |
| 42–53 | 10 | 47.5 | 475 |
| 54–65 | 6 | 59.5 | 357 |
| 66–77 | 5 | 71.5 | 357.5 |
| 78–89 | 3 | 83.5 | 250.5 |
| Total | 30 |  | 1653 |

Step 3: Calculate the mean

$$
\bar{x}=\frac{\sum fx}{\sum f}
$$

$$
=\frac{1653}{30}
$$

$$
\boxed{\bar{x}=55.1\text{ minutes}}
$$

Final answer: 55.1 minutes

Note: This is an estimated grouped-data mean because we use class midpoints instead of the original observations. The actual ungrouped mean is approximately 55.03 minutes.

### (iv) Create a histogram.

A histogram is a graphical representation of a frequency distribution using adjacent rectangular bars.

- X-axis: Class intervals.

- Y-axis: Frequency.

- Bars: Adjacent, without gaps.

Reading Time Distribution

Frequency of students across reading-time intervals (minutes).

The chart displays the frequency distribution. In an exam, draw the bars touching each other to represent a true histogram.

## Question 6 – Frequency Distribution, Percentage, Mean and Histogram

**Question:**
The following data show the number of hours 30 first-year Software Engineering students spent on self-study in one week.

```
6, 8, 10, 7, 15, 12, 9, 13, 14, 8,
10, 11, 9, 12, 14, 7, 10, 16, 13, 11,
8, 12, 7, 13, 6, 9, 10, 15, 14, 11
```

### (i) Construct a frequency distribution table.

Unlike Question 5, this dataset contains a relatively small range of integer values.

Therefore, an ungrouped discrete frequency distribution is appropriate: list each possible value and count its frequency.

Step 1: Identify the minimum and maximum

$$
X_{\min}=6
$$

$$
X_{\max}=16
$$

Step 2: Count the frequency of each value

For example:

- 6 appears 2 times.

- 7 appears 3 times.

- 8 appears 3 times.

- 10 appears 4 times.

Continue until all values have been counted.

Final frequency distribution table

| Self-study hours (x) | Frequency (f) | Cumulative frequency (cf) | fx |
| --- | --- | --- | --- |
| 6 | 2 | 2 | 12 |
| 7 | 3 | 5 | 21 |
| 8 | 3 | 8 | 24 |
| 9 | 3 | 11 | 27 |
| 10 | 4 | 15 | 40 |
| 11 | 3 | 18 | 33 |
| 12 | 3 | 21 | 36 |
| 13 | 3 | 24 | 39 |
| 14 | 3 | 27 | 42 |
| 15 | 2 | 29 | 30 |
| 16 | 1 | 30 | 16 |
| Total | 30 |  | 320 |

Check:

$$
\sum f=30
$$

### (ii) What percentage of students spent between 8 and 10 hours (inclusive)?

The word inclusive means that both endpoints are included.

Therefore, we count:

- 8 hours: 3 students

- 9 hours: 3 students

- 10 hours: 4 students

Total:

$$
f=3+3+4=10
$$

Apply the percentage formula:

$$
Percentage=\frac{f}{n}\times100
$$

$$
=\frac{10}{30}\times100
$$

$$
\boxed{33.33\%}
$$

Final answer: 33.33%

### (iii) Calculate the mean number of self-study hours.

For a frequency distribution:

$$
\bar{x}=\frac{\sum fx}{\sum f}
$$

From our table:

$$
\sum fx=320
$$

$$
\sum f=30
$$

Therefore:

$$
\bar{x}=\frac{320}{30}
$$

$$
\boxed{\bar{x}=10.67\text{ hours}}
$$

Final answer: 10.67 hours

### (iv) Create a histogram.

The histogram displays the frequency of each self-study hour value.

Weekly Self-study Hours

Number of students for each recorded self-study duration.

Exam note: Because the variable is discrete, this frequency chart is a discrete histogram-style representation. If your lecturer specifically requires grouped classes, you can group the values into intervals instead. The ungrouped table above preserves the exact observed frequencies.

## Question 7 – Measures of Dispersion and Coefficient of Variation

**Question:**
A startup records the daily number of app downloads for two competing mobile apps over 14 days.

App A:

$$
40,42,45,50,50,52,55,58,60,62,65,65,68,70
$$

App B:

$$
14,17,20,25,28,32,35,40,45,52,58,65,72,85
$$

Calculate:

- Range

- Mean Deviation

- Standard Deviation

- Coefficient of Variation (CV)

Which app shows more variability?

### Understanding the formulas

Before calculating, understand the four formulas.

1. Range

$$
R=X_{\max}-X_{\min}
$$

2. Mean Deviation (about the mean)

$$
MD=\frac{\sum|x-\bar{x}|}{n}
$$

It measures the average absolute distance of observations from their mean.

3. Standard Deviation

Population standard deviation:

$$
\sigma=\sqrt{\frac{\sum(x-\mu)^2}{N}}
$$

Sample standard deviation:

$$
s=\sqrt{\frac{\sum(x-\bar{x})^2}{n-1}}
$$

4. Coefficient of Variation

$$
CV=\frac{SD}{Mean}\times100
$$

CV measures variability relative to the mean.

A higher CV means greater relative variability.

### App A – Detailed Calculation

Step 1: Calculate the mean

$$
\bar{x}=\frac{\sum x}{n}
$$

Sum of observations:

$$
\sum x=782
$$

Number of observations:

$$
n=14
$$

Therefore:

$$
\bar{x}=\frac{782}{14}
$$

$$
\boxed{\bar{x}=55.8571}
$$

Step 2: Calculate the range

Maximum:

$$
X_{\max}=70
$$

Minimum:

$$
X_{\min}=40
$$

$$
R=70-40
$$

$$
\boxed{R=30}
$$

Step 3: Calculate the Mean Deviation

Formula:

$$
MD=\frac{\sum|x-\bar{x}|}{n}
$$

We calculate the absolute deviations from the mean.

| x | ∣x− x ˉ ∣ |
| --- | --- |
| 40 | 15.857 |
| 42 | 13.857 |
| 45 | 10.857 |
| 50 | 5.857 |
| 50 | 5.857 |
| 52 | 3.857 |
| 55 | 0.857 |
| 58 | 2.143 |
| 60 | 4.143 |
| 62 | 6.143 |
| 65 | 9.143 |
| 65 | 9.143 |
| 68 | 12.143 |
| 70 | 14.143 |
| Total | 114 |

Therefore:

$$
MD=\frac{114}{14}
$$

$$
\boxed{MD=8.1429}
$$

Step 4: Calculate Standard Deviation

First, calculate the sum of squared deviations:

$$
\sum(x-\bar{x})^2=1219.7143
$$

Since we are given observations over the 14-day period, we can calculate the population standard deviation for that complete period:

$$
\sigma=\sqrt{\frac{1219.7143}{14}}
$$

$$
=\sqrt{87.1224}
$$

$$
\boxed{\sigma=9.3339}
$$

If these 14 days are treated as a sample of a larger period, use $n-1$:

$$
s=\sqrt{\frac{1219.7143}{13}}
$$

$$
\boxed{s=9.6863}
$$

Step 5: Calculate CV

Using population SD:

$$
CV=\frac{9.3339}{55.8571}\times100
$$

$$
\boxed{CV=16.71\%}
$$

### App B – Detailed Calculation

Step 1: Calculate the mean

$$
\sum x=588
$$

$$
n=14
$$

$$
\bar{x}=\frac{588}{14}
$$

$$
\boxed{\bar{x}=42}
$$

Step 2: Calculate the range

$$
R=X_{\max}-X_{\min}
$$

$$
=85-14
$$

$$
\boxed{R=71}
$$

Step 3: Calculate Mean Deviation

$$
MD=\frac{\sum|x-\bar{x}|}{n}
$$

Using the mean of 42:

| x | ∣x−42∣ |
| --- | --- |
| 14 | 28 |
| 17 | 25 |
| 20 | 22 |
| 25 | 17 |
| 28 | 14 |
| 32 | 10 |
| 35 | 7 |
| 40 | 2 |
| 45 | 3 |
| 52 | 10 |
| 58 | 16 |
| 65 | 23 |
| 72 | 30 |
| 85 | 43 |
| Total | 250 |

$$
MD=\frac{250}{14}
$$

$$
\boxed{MD=17.8571}
$$

Step 4: Calculate Standard Deviation

The sum of squared deviations is:

$$
\sum(x-\bar{x})^2=6174
$$

Population SD:

$$
\sigma=\sqrt{\frac{6174}{14}}
$$

$$
=\sqrt{441}
$$

$$
\boxed{\sigma=21}
$$

Sample SD, if the 14 days are treated as a sample:

$$
s=\sqrt{\frac{6174}{13}}
$$

$$
\boxed{s=21.7927}
$$

Step 5: Calculate CV

Using population SD:

$$
CV=\frac{21}{42}\times100
$$

$$
\boxed{CV=50\%}
$$

### Final Comparison

| Measure | App A | App B |
| --- | --- | --- |
| Mean | 55.86 | 42.00 |
| Range | 30 | 71 |
| Mean Deviation | 8.14 | 17.86 |
| Population SD | 9.33 | 21.00 |
| Sample SD | 9.69 | 21.79 |
| Population CV | 16.71% | 50.00% |

Conclusion: App B has more variability.

Explanation:

App B has:

- A larger range (71 compared to 30).

- A larger mean deviation (17.86 compared to 8.14).

- A larger standard deviation (21 compared to 9.33).

- A much larger coefficient of variation (50% compared to 16.71%).

Therefore, App B has considerably less consistent daily download behavior.

Important exam concept: When comparing relative variability between datasets with different means, CV is especially useful.

## Question 8 – Comparing Electricity Bills Using Measures of Dispersion

**Question:**
A real estate analyst compares monthly electricity bills (USD) for 9 households in two residential complexes.

Complex X:

$$
120,125,130,130,132,134,135,138,140
$$

Complex Y:

$$
90,95,100,140,150,160,175,180,200
$$

Calculate:

- Range

- Mean Deviation

- Standard Deviation

- CV

Which complex shows more variability?

### Complex X – Detailed Calculation

Step 1: Calculate the mean

$$
\bar{x}=\frac{\sum x}{n}
$$

$$
=\frac{1184}{9}
$$

$$
\boxed{\bar{x}=131.5556}
$$

Step 2: Calculate the range

$$
R=X_{\max}-X_{\min}
$$

$$
=140-120
$$

$$
\boxed{R=20}
$$

Step 3: Calculate Mean Deviation

$$
MD=\frac{\sum|x-\bar{x}|}{n}
$$

| x | ∣x−131.5556∣ |
| --- | --- |
| 120 | 11.5556 |
| 125 | 6.5556 |
| 130 | 1.5556 |
| 130 | 1.5556 |
| 132 | 0.4444 |
| 134 | 2.4444 |
| 135 | 3.4444 |
| 138 | 6.4444 |
| 140 | 8.4444 |
| Total | 42.4444 |

$$
MD=\frac{42.4444}{9}
$$

$$
\boxed{MD=4.7160}
$$

Step 4: Calculate Standard Deviation

The sum of squared deviations is:

$$
\sum(x-\bar{x})^2=312.2222
$$

Since the 9 households are described as a sample, we use the sample standard deviation.

$$
s=\sqrt{\frac{\sum(x-\bar{x})^2}{n-1}}
$$

$$
=\sqrt{\frac{312.2222}{8}}
$$

$$
=\sqrt{39.0278}
$$

$$
\boxed{s=6.2472}
$$

For reference, population SD would be:

$$
\sigma=\sqrt{\frac{312.2222}{9}}
$$

$$
\boxed{\sigma=5.8899}
$$

Step 5: Calculate CV

Using sample SD:

$$
CV=\frac{s}{\bar{x}}\times100
$$

$$
=\frac{6.2472}{131.5556}\times100
$$

$$
\boxed{CV=4.75\%}
$$

### Complex Y – Detailed Calculation

Step 1: Calculate the mean

$$
\bar{x}=\frac{\sum x}{n}
$$

$$
=\frac{1290}{9}
$$

$$
\boxed{\bar{x}=143.3333}
$$

Step 2: Calculate the range

$$
R=200-90
$$

$$
\boxed{R=110}
$$

Step 3: Calculate Mean Deviation

$$
MD=\frac{\sum|x-\bar{x}|}{n}
$$

| x | ∣x−143.3333∣ |
| --- | --- |
| 90 | 53.3333 |
| 95 | 48.3333 |
| 100 | 43.3333 |
| 140 | 3.3333 |
| 150 | 6.6667 |
| 160 | 16.6667 |
| 175 | 31.6667 |
| 180 | 36.6667 |
| 200 | 56.6667 |
| Total | 296.6667 |

$$
MD=\frac{296.6667}{9}
$$

$$
\boxed{MD=32.9630}
$$

Step 4: Calculate Standard Deviation

The sum of squared deviations is:

$$
\sum(x-\bar{x})^2=12950
$$

Using the sample standard deviation formula:

$$
s=\sqrt{\frac{12950}{9-1}}
$$

$$
=\sqrt{\frac{12950}{8}}
$$

$$
=\sqrt{1618.75}
$$

$$
\boxed{s=40.2337}
$$

Population SD for comparison:

$$
\sigma=\sqrt{\frac{12950}{9}}
$$

$$
\boxed{\sigma=37.9327}
$$

Step 5: Calculate CV

Using sample SD:

$$
CV=\frac{40.2337}{143.3333}\times100
$$

$$
\boxed{CV=28.07\%}
$$

### Final Comparison

| Measure | Complex X | Complex Y |
| --- | --- | --- |
| Mean | 131.56 | 143.33 |
| Range | 20 | 110 |
| Mean Deviation | 4.72 | 32.96 |
| Sample SD | 6.25 | 40.23 |
| Population SD | 5.89 | 37.93 |
| Sample CV | 4.75% | 28.07% |

Conclusion: Complex Y has more variability.

Explanation:

Complex Y has much greater variation in monthly electricity bills.

For example:

- Complex X has a range of only 20.

- Complex Y has a range of 110.

- Complex X has a CV of approximately 4.75%.

- Complex Y has a CV of approximately 28.07%.

Therefore, households in Complex X have considerably more consistent electricity bills, while households in Complex Y have less consistent bills.

## Question 9 – Frequency Distribution, Cumulative Frequency, Relative Frequency and Graphical Representation

**Question:**
A researcher surveyed 30 people about their favorite type of fruit.

The responses were:

```
Apple, Banana, Orange, Apple, Banana, Apple, Orange,
Apple, Banana, Banana, Orange, Apple, Banana, Apple,
Orange, Apple, Banana, Orange, Banana, Apple, Orange,
Banana, Apple, Banana, Orange, Apple, Banana, Orange,
Apple, Banana
```

Required:

a. Create a frequency distribution table with cumulative, relative and cumulative relative frequencies.

b. Construct an appropriate graphical representation.

c. Calculate the percentage of people whose favorite fruit is Orange.

### (a) Create the frequency distribution table

First, understand the four important terms.

1. Frequency (f)

The number of times a particular value or category appears.

2. Cumulative Frequency (cf)

The running total of frequencies.

$$
cf=\text{Previous cumulative frequency}+f
$$

3. Relative Frequency (rf)

The proportion of observations belonging to a category.

$$
rf=\frac{f}{n}
$$

4. Cumulative Relative Frequency (crf)

The running total of relative frequencies.

$$
crf=\frac{cf}{n}
$$

Step 1: Count the occurrences

After counting all 30 responses:

- Apple = 11

- Banana = 11

- Orange = 8

Check:

$$
11+11+8=30
$$

Step 2: Calculate cumulative frequency

| Fruit | Frequency (f) | Cumulative frequency (cf) |
| --- | --- | --- |
| Apple | 11 | 11 |
| Banana | 11 | 22 |
| Orange | 8 | 30 |
| Total | 30 |  |

Calculation:

- Apple: 11

- Banana: 11 + 11 = 22

- Orange: 22 + 8 = 30

Step 3: Calculate relative frequency

Formula:

$$
rf=\frac{f}{n}
$$

For Apple:

$$
rf=\frac{11}{30}=0.3667
$$

For Banana:

$$
rf=\frac{11}{30}=0.3667
$$

For Orange:

$$
rf=\frac{8}{30}=0.2667
$$

Step 4: Calculate cumulative relative frequency

Formula:

$$
crf=\frac{cf}{n}
$$

For Apple:

$$
crf=\frac{11}{30}=0.3667
$$

For Banana:

$$
crf=\frac{22}{30}=0.7333
$$

For Orange:

$$
crf=\frac{30}{30}=1.0000
$$

Complete frequency distribution table

| Fruit | f | cf | rf | crf |
| --- | --- | --- | --- | --- |
| Apple | 11 | 11 | 0.3667 | 0.3667 |
| Banana | 11 | 22 | 0.3667 | 0.7333 |
| Orange | 8 | 30 | 0.2667 | 1.0000 |
| Total | 30 | 30 | 1.0000 |  |

Verification:

The total relative frequency must equal 1.

$$
0.3667+0.3667+0.2667\approx1
$$

The cumulative relative frequency must end at 1.

Both conditions are satisfied.

### (b) Construct an appropriate graphical representation

The data represent categorical (qualitative) information.

The most appropriate graphical representations are:

- Bar Chart

- Pie Chart

Option 1: Bar Chart

- X-axis: Fruit categories.

- Y-axis: Number of people.

- Bar heights: Frequencies.

Favorite Fruit of 30 People

Number of people choosing each fruit.

Option 2: Pie Chart

A pie chart displays the proportion of each category as a part of the whole.

First, calculate the percentage of each fruit.

Apple:

$$
\frac{11}{30}\times100=36.67\%
$$

Banana:

$$
\frac{11}{30}\times100=36.67\%
$$

Orange:

$$
\frac{8}{30}\times100=26.67\%
$$

To calculate the central angle:

$$
Angle=\frac{f}{n}\times360^\circ
$$

| Fruit | Percentage | Central angle |
| --- | --- | --- |
| Apple | 36.67% | 132° |
| Banana | 36.67% | 132° |
| Orange | 26.67% | 96° |
| Total | 100% | 360° |

Favorite Fruit – Percentage Distribution

Proportion of respondents selecting each fruit.

AppleBananaOrange

Which graph should you use in the exam?

A bar chart is a straightforward and appropriate choice. A pie chart is also correct because the data represent categories and their proportions.

### (c) Calculate the percentage of people whose favorite fruit is Orange.

Given:

- Total respondents = 30

- Number of people choosing Orange = 8

Formula:

$$
Percentage=\frac{f}{n}\times100
$$

Substitute:

$$
=\frac{8}{30}\times100
$$

$$
=26.6667\%
$$

$$
\boxed{Percentage=26.67\%}
$$

Final answer: 26.67%

## Final Revision Sheet – All 9 Questions

Here are the important final answers to revise before your examination.

| Question | Topic | Important answer |
| --- | --- | --- |
| 1 | Statistical terminology | Population, sample, individual, variable, data, parameter, statistic |
| 2 | Sampling and measurement | Ratio scale; mean 1.83, median 1.8, range 0.7 |
| 3 | Sampling and measurement | Interval scale; mean 23°C, median 23°C, range 4°C |
| 4 | Data classification | Qualitative, quantitative, discrete, continuous |
| 5 | Frequency distribution | Mean 55.1 minutes; percentage 50% |
| 6 | Frequency distribution | Mean 10.67 hours; percentage 33.33% |
| 7 | Measures of dispersion | App B has more variability; CV 50% vs 16.71% |
| 8 | Measures of dispersion | Complex Y has more variability; CV 28.07% vs 4.75% |
| 9 | Categorical frequency distribution | Apple 11, Banana 11, Orange 8; Orange 26.67% |

## Important formulas to memorize

These formulas cover most of the calculation-based questions in this practice paper.

| Statistical measure | Formula |
| --- | --- |
| Range | X max ​ −X min ​ |
| Number of classes | 2 k ≥n |
| Class width | k Range ​ , rounded upward |
| Class midpoint | 2 Lower+Upper ​ |
| Mean (ungrouped) | n ∑x ​ |
| Mean (frequency distribution) | ∑f ∑fx ​ |
| Percentage | n f ​ ×100 |
| Relative frequency | n f ​ |
| Cumulative relative frequency | n cf ​ |
| Mean deviation | n ∑∣x− x ˉ ∣ ​ |
| Population variance | N ∑(x−μ) 2 ​ |
| Sample variance | n−1 ∑(x− x ˉ ) 2 ​ |
| Population SD | N ∑(x−μ) 2 ​ ​ |
| Sample SD | n−1 ∑(x− x ˉ ) 2 ​ ​ |
| Coefficient of Variation | Mean SD ​ ×100 |

## Important concepts that can easily be confused

| Concept | Remember |
| --- | --- |
| Discrete vs Continuous | Counting vs measuring |
| Interval vs Ratio | Interval has no meaningful absolute zero; ratio has a meaningful zero |
| Sampling vs Non-sampling error | Selection variation vs errors in collecting or recording data |
| Mean vs Median | Average vs middle observation |
| Frequency vs Cumulative Frequency | Individual count vs running total |
| Relative vs Cumulative Relative Frequency | Proportion vs running proportion |
| Standard Deviation vs Mean Deviation | Square-based spread vs average absolute spread |
| SD vs CV | Absolute variability vs relative variability |

Two calculation reminders:

- Use $N$ for population variance/SD and $n-1$ for sample variance/SD. If a question does not establish whether the observations are a population or sample, state your assumption.

- A lower CV indicates greater relative consistency; a higher CV indicates greater relative variability.

## My recommendation for your exam preparation

Based on the seven chapters we previously identified in your STA101 materials, this practice paper particularly emphasizes:

- Chapter 1: Introduction to Statistics.

- Chapter 2: Data Presentation and Frequency Distributions.

- Chapter 3: Measures of Central Tendency.

- Chapter 5: Measures of Dispersion.

The most calculation-intensive questions are 5, 6, 7 and 8. I would prioritize practicing these independently, especially frequency tables, mean deviation, standard deviation and CV.

One important distinction: this solution follows the uploaded practice paper and the conventions recovered from our earlier Statistics discussions. I haven't assumed that every topic in the seven-chapter syllabus is covered by this practice set.

You can use the following as a next step to check whether you can solve these problems independently:
