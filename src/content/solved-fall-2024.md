# Solved Questions — Fall 2024 Midterm

Daffodil International University · STA 101 Statistics I

Fully worked solutions from the midterm examination papers.

## Question 1(a) — Population, Sample, Parameter, Statistic, Variable and Sampling Technique [3 marks]

**Question:**

A researcher wants to study the number of hours students spend studying per week. The university has 15,000 students. The researcher selects a sample of 500 students using stratified random sampling based on their major (e.g., Science, Arts, Engineering).

Clarify population, sample, parameter, statistic, variable and sampling technique.

### Answer

**1. Population**

The entire group being studied.

$$
\text{Population}=15{,}000\text{ university students}
$$

**2. Sample**

The selected subset of the population.

$$
\text{Sample}=500\text{ selected students}
$$

**3. Parameter**

A parameter is a numerical characteristic of the entire population.

Here, it is the true average number of weekly study hours of all 15,000 students.

$$
\text{Parameter}=\mu
$$

**4. Statistic**

A statistic is a numerical characteristic calculated from a sample.

Here, it is the average weekly study hours calculated from the 500 selected students.

$$
\text{Statistic}=\bar{x}
$$

**5. Variable**

The variable is the number of hours students spend studying per week.

It is a quantitative continuous variable because time can be measured using fractional hours.

**6. Sampling Technique**

The researcher uses **Stratified Random Sampling**.

The population is divided into subgroups (strata) based on academic majors, such as Science, Arts and Engineering. Students are then randomly selected from each subgroup.

**Final answer at a glance**

| Term | Answer |
| --- | --- |
| Population | 15,000 students |
| Sample | 500 students |
| Parameter | Population mean weekly study hours ($\mu$) |
| Statistic | Sample mean weekly study hours ($\bar{x}$) |
| Variable | Weekly study hours |
| Sampling | Stratified Random Sampling |

## Question 1(b) — Appropriate Measures of Central Tendency [2 marks]

**Question:**

Compare the appropriate measures of central tendency for nominal, ordinal, interval and ratio data.

### Answer

There are three major measures of central tendency: Mean, Median and Mode.

The appropriate measure depends on the level of measurement.

| Measurement level | Appropriate measure | Explanation |
| --- | --- | --- |
| Nominal | Mode | Data represent categories without any order. |
| Ordinal | Median and Mode | Data can be ranked, but differences between ranks are not meaningful. |
| Interval | Mean, Median and Mode | Data have equal intervals but no absolute zero. |
| Ratio | Mean, Median and Mode | Data have equal intervals and an absolute zero. |

**Examples:**

- Nominal: Most popular operating system.

- Ordinal: Student performance ranking.

- Interval: Temperature in Celsius.

- Ratio: Student height or weight.

**Conclusion:** Mode is suitable for all four measurement levels. Median is suitable for ordinal, interval and ratio data. Mean is suitable for interval and ratio data.

## Question 2(a)(i) — Construct an Appropriate Graph [3 marks]

**Question:**

The following data represent the amount of time (in minutes per day) spent on social media by 15 students.

$$
\begin{aligned}
&250,320,280,310,400,290,\\
&300,330,180,290,480,285,\\
&275,260,295
\end{aligned}
$$

Construct an appropriate graph.

### Answer

Since the data represent quantitative time measurements, a histogram is appropriate.

First, arrange the observations in ascending order:

$$
\begin{aligned}
180,\ 250,\ 260,\ 275,\ 280,\\
285,\ 290,\ 290,\ 295,\ 300,\\
310,\ 320,\ 330,\ 400,\ 480
\end{aligned}
$$

Total observations:

$$
n=15
$$

Minimum:

$$
X_{\min}=180
$$

Maximum:

$$
X_{\max}=480
$$

Range:

$$
R=480-180=300
$$

We will use convenient class intervals of width 50 minutes.

### Frequency Distribution Table

| Social media time (minutes) | Frequency |
| --- | --- |
| 150–199 | 1 |
| 200–249 | 0 |
| 250–299 | 8 |
| 300–349 | 4 |
| 350–399 | 0 |
| 400–449 | 1 |
| 450–499 | 1 |
| **Total** | **15** |

### Histogram

<!-- viz:social-media-histogram -->

**Interpretation:**

Most students spend between 250 and 299 minutes per day on social media. Only one student is in the 450–499-minute interval.

The distribution also has some unusually high values, which we investigate in the next question.

## Question 2(a)(ii) — Detect Outliers [4 marks]

**Question:**

Decide whether there is any outlier in the above dataset. Also represent the data with a modified box plot.

### Answer

We use the Interquartile Range (IQR) method to identify outliers.

### Step 1: Arrange the data

$$
\begin{aligned}
180,\ 250,\ 260,\ 275,\ 280,\\
285,\ 290,\ 290,\ 295,\ 300,\\
310,\ 320,\ 330,\ 400,\ 480
\end{aligned}
$$

Number of observations:

$$
n=15
$$

### Step 2: Calculate First Quartile ($Q_1$)

Using your lecturer's quartile-position method:

$$
Position(Q_1)=\frac{1\times15}{4}=3.75
$$

Take the next integer position (4th observation).

$$
Q_1=275
$$

### Step 3: Calculate Median ($Q_2$)

$$
Position(Q_2)=\frac{2\times15}{4}=7.5
$$

Take the next integer position (8th observation).

$$
Q_2=290
$$

### Step 4: Calculate Third Quartile ($Q_3$)

$$
Position(Q_3)=\frac{3\times15}{4}=11.25
$$

Take the next integer position (12th observation).

$$
Q_3=320
$$

### Step 5: Calculate IQR

Formula:

$$
IQR=Q_3-Q_1
$$

$$
IQR=320-275
$$

$$
IQR=45
$$

### Step 6: Calculate Inner Fences

Lower Inner Fence:

$$
LIF=Q_1-1.5(IQR)
$$

$$
=275-1.5(45)
$$

$$
=275-67.5
$$

$$
LIF=207.5
$$

Upper Inner Fence:

$$
UIF=Q_3+1.5(IQR)
$$

$$
=320+1.5(45)
$$

$$
=320+67.5
$$

$$
UIF=387.5
$$

### Step 7: Identify Outliers

Any observation smaller than 207.5 or larger than 387.5 is a suspected outlier.

Our data:

$$
180,\ 400,\ 480
$$

All three values lie outside the inner fences.

Therefore:

$$
\text{Outliers}=180,\ 400,\ 480
$$

### Step 8: Construct the Modified Box Plot

A modified box plot uses the smallest and largest non-outlier values as the whisker endpoints.

Five-number information:

| Component | Value |
| --- | --- |
| Lower whisker | 250 |
| First quartile | 275 |
| Median | 290 |
| Third quartile | 320 |
| Upper whisker | 330 |
| Outliers | 180, 400, 480 |

**Modified Box Plot — Social Media Usage**

<!-- viz:modified-box-social-media -->

**Conclusion:** The dataset contains three suspected outliers: 180, 400 and 480 minutes. The remaining observations range from 250 to 330 minutes.

## Question 2(b) — Mean, Median and Mode [3 marks]

**Question:**

Consider the following data representing the weekly income (in dollars) of a group of employees:

$$
400,450,500,550,600,650,700,750,800,1200
$$

Calculate the mean, median and mode.

### Answer

Given data:

$$
400,450,500,550,600,650,700,750,800,1200
$$

Number of observations:

$$
n=10
$$

### Step 1: Calculate Mean

Formula:

$$
\bar{x}=\frac{\sum x}{n}
$$

Sum:

$$
\sum x=400+450+500+550+600
$$

$$
+650+700+750+800+1200
$$

$$
\sum x=6600
$$

Therefore:

$$
\bar{x}=\frac{6600}{10}
$$

$$
Mean=660
$$

### Step 2: Calculate Median

The data are already arranged in ascending order.

Since the number of observations is even:

$$
Median=\frac{\text{5th observation}+\text{6th observation}}{2}
$$

$$
=\frac{600+650}{2}
$$

$$
Median=625
$$

### Step 3: Calculate Mode

Mode is the value that occurs most frequently.

Every observation occurs exactly once.

Therefore:

$$
\text{There is no mode}
$$

### Final Answer

| Measure | Result |
| --- | --- |
| Mean | $660 |
| Median | $625 |
| Mode | No mode |

## Question 2(b)(i) — Effect of a New Employee [2 marks]

**Question:**

If a new employee with a weekly income of 5,000 dollars joins the group, investigate how this change will affect the mean, median and mode.

### Answer

The new dataset is:

$$
\begin{aligned}
400,450,500,550,600,650,\\
700,750,800,1200,5000
\end{aligned}
$$

New number of observations:

$$
n=11
$$

### Step 1: Calculate the New Mean

New total:

$$
6600+5000=11600
$$

$$
New\ Mean=\frac{11600}{11}
$$

$$
New\ Mean=1054.55
$$

Previous mean = 660.

New mean = 1054.55.

Therefore, the mean increases significantly.

### Step 2: Calculate the New Median

There are now 11 observations.

The median is the middle (6th) observation.

$$
\begin{aligned}
400,450,500,550,600,\\
650,700,750,800,1200,5000
\end{aligned}
$$

$$
New\ Median=650
$$

The median increases from 625 to 650.

### Step 3: Calculate the New Mode

All observations still occur only once.

$$
\text{No mode}
$$

### Comparison

| Measure | Before | After |
| --- | --- | --- |
| Mean | 660 | 1054.55 |
| Median | 625 | 650 |
| Mode | No mode | No mode |

**Conclusion:**

- Mean increases significantly because 5,000 is an extreme value.

- Median increases slightly.

- Mode remains unchanged because there is no repeated value.

## Question 2(b)(ii) — Recommended Measure of Central Tendency [1 mark]

**Question:**

Determine which measure of central tendency you would recommend using to describe the data after the new employee joins, and why.

### Answer

I would recommend using the **Median**.

The new employee's weekly income of $5,000 is an extreme value that significantly increases the arithmetic mean.

The median is less affected by extreme observations and therefore provides a more representative measure of the typical employee's weekly income.

$$
\text{Recommended measure = Median = }\$650
$$

## Question 3(a) — Comparing Relative Dispersion of Samsung and OnePlus [5 marks]

**Question:**

The weekly sales of two phone brands, Samsung and OnePlus, are recorded as follows:

| Brand | Sales |
| --- | --- |
| OnePlus | 59, 75, 95, 100, 56, 85 |
| Samsung | 80, 90, 150, 125, 82, 95 |

Compare which brand seems to be more consistent in respect to sales. Solve using a relative measure of dispersion.

### Answer

We will use the Coefficient of Variation (CV).

Formula:

$$
CV=\frac{SD}{Mean}\times 100
$$

A smaller CV indicates greater consistency.

### Step 1: Calculate OnePlus Mean

Data:

$$
59,75,95,100,56,85
$$

Sum:

$$
\sum x=470
$$

Number of observations:

$$
n=6
$$

Mean:

$$
\bar{x}=\frac{470}{6}
$$

$$
\bar{x}=78.33
$$

### Step 2: Calculate OnePlus Standard Deviation

We will use population standard deviation, treating the recorded six observations as the dataset being compared.

Formula:

$$
\sigma=\sqrt{\frac{\sum(x-\bar{x})^2}{n}}
$$

| $x$ | $x-\bar{x}$ | $(x-\bar{x})^2$ |
| --- | --- | --- |
| 59 | -19.33 | 373.78 |
| 75 | -3.33 | 11.11 |
| 95 | 16.67 | 277.78 |
| 100 | 21.67 | 469.44 |
| 56 | -22.33 | 498.78 |
| 85 | 6.67 | 44.44 |
| **Total** |  | **1675.33** |

$$
\sigma=\sqrt{\frac{1675.33}{6}}
$$

$$
\sigma=\sqrt{279.22}
$$

$$
\sigma=16.71
$$

### Step 3: Calculate OnePlus CV

$$
CV=\frac{16.71}{78.33}\times 100
$$

$$
CV=21.33\%
$$

### Step 4: Calculate Samsung Mean

Samsung data:

$$
80,90,150,125,82,95
$$

Sum:

$$
\sum x=622
$$

$$
\bar{x}=\frac{622}{6}
$$

$$
\bar{x}=103.67
$$

### Step 5: Calculate Samsung Standard Deviation

| $x$ | $x-\bar{x}$ | $(x-\bar{x})^2$ |
| --- | --- | --- |
| 80 | -23.67 | 560.03 |
| 90 | -13.67 | 186.78 |
| 150 | 46.33 | 2146.78 |
| 125 | 21.33 | 455.11 |
| 82 | -21.67 | 469.44 |
| 95 | -8.67 | 75.11 |
| **Total** |  | **3893.25** |

$$
\sigma=\sqrt{\frac{3893.33}{6}}
$$

$$
\sigma=\sqrt{648.89}
$$

$$
\sigma=25.47
$$

### Step 6: Calculate Samsung CV

$$
CV=\frac{25.47}{103.67}\times 100
$$

$$
CV=24.57\%
$$

### Step 7: Compare

| Brand | Mean | SD | CV |
| --- | --- | --- | --- |
| OnePlus | 78.33 | 16.71 | 21.33% |
| Samsung | 103.67 | 25.47 | 24.57% |

Since:

$$
21.33\%<24.57\%
$$

OnePlus has the smaller coefficient of variation.

**OnePlus is more consistent in weekly sales than Samsung**, because its coefficient of variation is lower.

Samsung has greater relative variation in its weekly sales.

Note: Using sample SD instead would produce CVs of approximately 23.37% and 26.92%, respectively. The conclusion remains the same.

## Question 3(b) — Finding the Top 20% of Coding Practice Time [2 marks]

**Question:**

In a survey of 10 Software Engineering students, their weekly coding practice times (in hours) were recorded as:

$$
3.0,\ 2.9,\ 3.7,\ 4.9,\ 3.1,\ 3.6,\ 4.3,\ 3.4,\ 2.2,\ 2.1
$$

Detect the 20% of students who spend the maximum time coding in a week.

### Answer

We need to find the 80th percentile ($P_{80}$).

Why?

If we want the top 20%, we need to identify the threshold above which the highest 20% of observations lie.

$$
100\%-20\%=80\%
$$

Therefore:

$$
P_{80}
$$

### Step 1: Arrange the Data

$$
2.1,\ 2.2,\ 2.9,\ 3.0,\ 3.1,\ 3.4,\ 3.6,\ 3.7,\ 4.3,\ 4.9
$$

Total observations:

$$
n=10
$$

### Step 2: Calculate Percentile Position

Formula from your lecturer's materials:

$$
Position(P_k)=\frac{kN}{100}
$$

$$
Position(P_{80})=\frac{80\times10}{100}
$$

$$
=8
$$

### Step 3: Find the Percentile Value

Since the position is an integer, use the average of the 8th and 9th observations according to the lecturer's position rule.

8th observation = 3.7.

9th observation = 4.3.

$$
P_{80}=\frac{3.7+4.3}{2}
$$

$$
P_{80}=4.0\text{ hours}
$$

### Conclusion

The 80th percentile is 4.0 hours.

Therefore, the students practicing approximately 4.0 hours or more are the ones spending the maximum amount of time, representing approximately the top 20% of the group.

The two highest observed values are 4.3 and 4.9 hours.

I read the printed data as shown above; some handwritten marks cross the numbers in the scanned paper.
