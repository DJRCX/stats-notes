# Chapter 2 — Data Presentation

## 2.1 What is Data Presentation?

Data presentation is the process of organizing and displaying collected data in a clear and understandable format.

Its purpose is to make data easier to understand, compare and interpret.

For example, instead of presenting 100 examination marks in a long paragraph, we can arrange them into a frequency table or graph.

### Three Types of Data Presentation

**1. Tabular Presentation**

Data are arranged in rows and columns.

Example: Frequency distribution table.

**2. Graphical Presentation**

Data are represented using charts, graphs and diagrams.

Examples:

- Histogram.

- Bar Chart.

- Pie Chart.

- Frequency Polygon.

- Ogive.

**3. Textual Presentation**

Data are explained through written sentences or paragraphs.

Example:

"Out of 100 students, 75 passed the examination while 25 failed."

## 2.2 Frequency Distribution

A frequency distribution is the grouping of data into mutually exclusive categories or classes, showing the number of observations in each category.

In simpler words, it tells us how many times different values or ranges occur in a dataset.

### Important Terminology

**1. Class**

A group or category into which observations are placed.

Example: 10–15, 15–20, 20–25.

**2. Class Limits**

The lowest and highest values that can be included in a class.

Example: In a class of 10–14:

- Lower class limit = 10.

- Upper class limit = 14.

**3. Class Interval**

The range of values included in a class.

Example: 10–15.

**4. Class Width**

The difference between the upper and lower class boundaries.

$$
i=U-L
$$

Where:

- $i$ = class width.

- $U$ = upper class boundary.

- $L$ = lower class boundary.

Example:

$$
i=15-10=5
$$

**5. Class Frequency ($f$)**

The number of observations belonging to a particular class.

**6. Class Midpoint**

The central value of a class interval.

$$
x_i=\frac{L+U}{2}
$$

Example:

For the class 10–15:

$$
x_i=\frac{10+15}{2}=12.5
$$

**7. Tally Marks**

A method of counting observations by using groups of marks, usually grouped in fives.

**8. Total Frequency**

The sum of all class frequencies.

$$
N=\sum f
$$

## 2.3 Construction of Frequency Distribution

This is one of the important numerical topics in your Data Presentation materials.

Let's use the example provided in your lecturer's frequency distribution document.

A professor collects the number of hours studied by 30 students during one week.

The observations are:

15.0, 23.7, 19.7, 15.4, 18.3, 23.0, 14.2, 20.8, 13.5, 20.7, 17.4, 18.6, 12.9, 20.3, 13.7, 21.4, 18.3, 29.8, 17.1, 18.9, 10.3, 26.1, 15.7, 14.0, 17.8, 33.8, 23.2, 12.9, 27.1, 16.6.

We need to organize the data into a frequency distribution table.

### Step 1: Arrange the data in ascending order

Arrange the observations from smallest to largest.

10.3, 12.9, 12.9, 13.5, 13.7, 14.0, 14.2, 15.0, 15.4, 15.7, 16.6, 17.1, 17.4, 17.8, 18.3, 18.3, 18.6, 18.9, 19.7, 20.3, 20.7, 20.8, 21.4, 23.0, 23.2, 23.7, 26.1, 27.1, 29.8, 33.8.

Total observations:

$$
n=30
$$

### Step 2: Determine the number of classes

Your lecturer uses the following formula:

$$
2^k\geq n
$$

Where:

- $k$ = number of classes.

- $n$ = total number of observations.

We know:

$$
n=30
$$

Try different values of $k$:

$$
2^4=16
$$

This is smaller than 30.

$$
2^5=32
$$

This is greater than 30.

Therefore:

$$
k=5
$$

We need at least five classes.

### Step 3: Determine the class width

First, calculate the range:

$$
R=X_{\max}-X_{\min}
$$

$$
R=33.8-10.3=23.5
$$

Now calculate class width:

$$
i=\frac{R}{k}
$$

$$
i=\frac{23.5}{5}=4.7
$$

We round upward to a convenient whole number:

$$
i=5
$$

### Step 4: Construct the class intervals

Starting from 10, construct five classes with width 5.

- 10–15

- 15–20

- 20–25

- 25–30

- 30–35

These are exclusive or half-open intervals: a value equal to 15 belongs to the second class, not the first.

### Step 5: Count the observations

Count how many observations belong to each interval.

### Final Frequency Distribution Table

| Hours studied | Tally | Frequency |
| --- | --- | ---: |
| 10–15 | │││││ ││ | 7 |
| 15–20 | │││││ │││││ ││ | 12 |
| 20–25 | │││││ ││ | 7 |
| 25–30 | │││ | 3 |
| 30–35 | │ | 1 |
| **Total** |  | **30** |

Check:

$$
\sum f=7+12+7+3+1=30
$$

The total frequency must equal the number of observations.

## 2.4 Relative Frequency Distribution

Relative frequency shows the proportion of observations belonging to each class.

### Formula

$$
RF=\frac{f}{n}
$$

Where:

- $RF$ = relative frequency.

- $f$ = class frequency.

- $n$ = total number of observations.

Let's calculate the relative frequency of the first class:

$$
RF=\frac{7}{30}=0.2333
$$

Therefore, approximately 0.2333 of all observations belong to this class.

### Relative Frequency Table

| Hours | Frequency | Relative frequency |
| --- | --- | --- |
| 10–15 | 7 | 0.2333 |
| 15–20 | 12 | 0.4000 |
| 20–25 | 7 | 0.2333 |
| 25–30 | 3 | 0.1000 |
| 30–35 | 1 | 0.0333 |
| **Total** | **30** | **1.0000** |

Important:

$$
\sum RF=1
$$

## 2.5 Percentage Frequency Distribution

Percentage frequency expresses relative frequency as a percentage.

### Formula

$$
PF=RF\times100
$$

Or:

$$
PF=\frac{f}{n}\times100
$$

Example:

For the first class:

$$
PF=\frac{7}{30}\times100
$$

$$
PF=23.33\%
$$

### Complete Percentage Table

| Hours | Frequency | Percentage |
| --- | --- | --- |
| 10–15 | 7 | 23.33% |
| 15–20 | 12 | 40.00% |
| 20–25 | 7 | 23.33% |
| 25–30 | 3 | 10.00% |
| 30–35 | 1 | 3.33% |
| **Total** | **30** | **100%** |

Always remember:

$$
\sum PF=100\%
$$

## 2.6 Cumulative Frequency Distribution

Cumulative frequency is the running total of frequencies up to a particular class.

There are two types:

### A. Less Than Cumulative Frequency

In this method, frequencies are added from the first class to the last class.

Using our example:

| Hours | Frequency | Less than CF |
| --- | --- | --- |
| 10–15 | 7 | 7 |
| 15–20 | 12 | 19 |
| 20–25 | 7 | 26 |
| 25–30 | 3 | 29 |
| 30–35 | 1 | 30 |

Calculations:

$$
CF_1=7
$$

$$
CF_2=7+12=19
$$

$$
CF_3=19+7=26
$$

$$
CF_4=26+3=29
$$

$$
CF_5=29+1=30
$$

The less than cumulative frequency always increases or stays the same.

### B. More Than Cumulative Frequency

In this method, we count observations from the current class onward, or subtract previous class frequencies from the total.

| Hours | Frequency | More than CF |
| --- | --- | --- |
| 10–15 | 7 | 30 |
| 15–20 | 12 | 23 |
| 20–25 | 7 | 11 |
| 25–30 | 3 | 4 |
| 30–35 | 1 | 1 |

Calculations:

$$
CF_1=30
$$

$$
CF_2=30-7=23
$$

$$
CF_3=23-12=11
$$

$$
CF_4=11-7=4
$$

$$
CF_5=4-3=1
$$

The more than cumulative frequency decreases.

### Difference

| Less Than CF | More Than CF |
| --- | --- |
| Starts with first class frequency. | Starts with total frequency. |
| Adds frequencies progressively. | Subtracts previous class frequencies. |
| Continuously increases. | Continuously decreases. |
| Uses upper class boundaries for an ogive. | Uses lower class boundaries for an ogive. |

## 2.7 Graphical Presentation of Quantitative Data

Your lecturer covers three major graphical methods for quantitative frequency distributions.

- Histogram.

- Frequency Polygon.

- Ogive Curve.

### A. Histogram

A histogram is a graphical representation of a frequency distribution using adjacent rectangular bars.

It is primarily used for continuous quantitative data.

**Construction:**

- Draw the horizontal X-axis.

- Draw the vertical Y-axis.

- Place class intervals on the X-axis.

- Place frequencies on the Y-axis.

- Draw rectangular bars according to the class frequencies.

- Keep the bars adjacent to each other.

Example using our study-hour distribution:

<!-- viz:histogram-hours -->

**Important characteristics:**

- Bars touch each other.

- Class intervals appear along the X-axis.

- Frequencies appear along the Y-axis.

- Used mainly for quantitative continuous data.

- In a standard histogram, bar area represents frequency; with equal-width classes, height is proportional to frequency.

### B. Frequency Polygon

A frequency polygon is a graph formed by connecting points representing class midpoints and their respective frequencies.

**Construction:**

- Calculate class midpoints.

- Place midpoints on the X-axis.

- Place frequencies on the Y-axis.

- Plot points using midpoint and frequency pairs.

- Connect the points using straight lines.

- Optionally add zero-frequency points at both ends to close the polygon.

For our example:

| Class | Midpoint | Frequency |
| --- | --- | --- |
| 10–15 | 12.5 | 7 |
| 15–20 | 17.5 | 12 |
| 20–25 | 22.5 | 7 |
| 25–30 | 27.5 | 3 |
| 30–35 | 32.5 | 1 |

The plotted points are:

$$
(12.5,7), (17.5,12), (22.5,7), (27.5,3), (32.5,1)
$$

<!-- viz:frequency-polygon-hours -->

**Uses:**

- Showing the shape of a distribution.

- Comparing two or more frequency distributions.

- Understanding how frequencies change between classes.

### Histogram vs Frequency Polygon

| Histogram | Frequency Polygon |
| --- | --- |
| Uses rectangular bars. | Uses connected line segments. |
| Bars touch each other. | Points are connected by lines. |
| Uses class intervals. | Uses class midpoints. |
| Shows frequency through bar heights/areas. | Shows frequency through plotted points. |

### C. Ogive (Cumulative Frequency Curve)

An ogive is a graph representing cumulative frequency.

It helps determine the number or proportion of observations below or above a particular value.

There are two types.

**1. Less Than Ogive**

Construction:

- Calculate less than cumulative frequencies.

- Place upper class boundaries on the X-axis.

- Place cumulative frequencies on the Y-axis.

- Plot the points.

- Connect them using a smooth curve.

For our study-hour example, the plotted coordinates are:

$$
(10,0),(15,7),(20,19),(25,26),(30,29),(35,30)
$$

<!-- viz:less-than-ogive -->

**2. More Than Ogive**

Construction:

- Calculate more than cumulative frequencies.

- Place lower class boundaries on the X-axis.

- Place more than cumulative frequencies on the Y-axis.

- Plot the points.

- Connect the points using a smooth declining curve.

For example:

$$
(10,30),(15,23),(20,11),(25,4),(30,1),(35,0)
$$

<!-- viz:more-than-ogive -->

**Uses of Ogive:**

- Finding median graphically.

- Finding quartiles.

- Determining how many observations fall below a value.

- Determining how many observations fall above a value.

- Comparing cumulative distributions.

## 2.8 Graphical Presentation of Qualitative Data

For qualitative or categorical data, your lecturer focuses on:

- Bar Diagram.

- Pie Chart.

### A. Bar Diagram

A bar diagram is a graphical representation of categorical data using rectangular bars.

The length or height of each bar represents its frequency or percentage.

Example:

A shop records the shoe sizes sold during one week.

| Shoe Size | Number Sold |
| --- | --- |
| Small (S) | 12 |
| Medium (M) | 15 |
| Large (L) | 7 |
| **Total** | **34** |

<!-- viz:shoe-bar -->

**Steps to draw:**

- Place categories on the X-axis.

- Place frequencies on the Y-axis.

- Draw separate rectangular bars.

- Maintain equal widths.

- Leave spaces between bars in the conventional bar chart.

### B. Pie Chart

A pie chart is a circular diagram used to show how a total is divided into different categories.

Each category is represented by a sector of a circle.

**Formula for percentage:**

$$
Percentage=\frac{f}{N}\times100
$$

**Formula for central angle:**

$$
\theta=\frac{f}{N}\times360^\circ
$$

Where:

- $f$ = frequency of a category.

- $N$ = total frequency.

- $\theta$ = angle of the sector.

Using our shoe-size example:

| Size | Frequency | Percentage | Angle |
| --- | --- | --- | --- |
| Small | 12 | 35.29% | 127.06° |
| Medium | 15 | 44.12% | 158.82° |
| Large | 7 | 20.59% | 74.12° |
| **Total** | **34** | **100%** | **360°** |

Let's calculate the angle for Small:

$$
\theta=\frac{12}{34}\times360^\circ
$$

$$
\theta=127.06^\circ
$$

<!-- viz:shoe-pie -->

**Important:** The sum of all central angles must be 360°.

### Bar Diagram vs Pie Chart

| Bar Diagram | Pie Chart |
| --- | --- |
| Uses rectangular bars. | Uses a circular diagram. |
| Mainly compares category frequencies. | Shows each category's share of the whole. |
| Uses heights or lengths. | Uses sector angles. |
| Useful for comparing categories. | Useful for showing proportions. |

## 2.9 Time Series Data and Line Graph

### Time Series Data

Time series data are observations collected at successive points in time, usually at equal intervals.

Examples:

- Monthly sales.

- Annual population.

- Daily temperatures.

- Weekly website visitors.

- Yearly company revenue.

### Line Graph

A line graph is a graph used to show changes or trends in a variable over time.

**Construction:**

- Put time on the X-axis.

- Put measured values on the Y-axis.

- Plot each observation.

- Connect the points using lines.

- Observe the trend.

Example: Bangladesh's population in millions.

| Year | Population |
| --- | --- |
| 1988 | 103 |
| 1989 | 105 |
| 1990 | 107 |
| 1991 | 109 |
| 1992 | 111 |
| 1993 | 113 |

<!-- viz:population-trend -->

The graph shows an increasing trend in population.

## 2.10 Histogram vs Bar Diagram

This comparison is specifically included in your lecturer's Data Presentation Part 2.

| Histogram | Bar Diagram |
| --- | --- |
| Used for continuous quantitative data. | Usually used for qualitative or categorical data. |
| Bars are adjacent. | Bars are usually separated by spaces. |
| Represents frequencies through areas of rectangles. | Frequencies are represented by the heights or lengths of bars. |
| Two-dimensional representation. | Usually treated as a one-dimensional representation. |
| Class intervals are shown on the X-axis. | Categories are shown on the X-axis. |

## 2.11 Uses of Different Diagrams

| Diagram | Main purpose |
| --- | --- |
| Histogram | Displaying continuous frequency distributions. |
| Frequency Polygon | Showing distribution shape and comparing distributions. |
| Ogive | Finding cumulative frequencies and locating median or quartiles. |
| Bar Chart | Comparing categorical data. |
| Pie Chart | Showing proportions of a total. |
| Line Graph | Showing trends over time. |
| Scatter Diagram | Showing relationships between two quantitative variables. |
| Box Plot | Displaying spread, symmetry and outliers. |

## 2.12 Practice Questions — Chapter 2

**Theory questions:**

- Define Frequency Distribution and explain its characteristics.

- Explain class limits, class width, class midpoint and class frequency.

- Differentiate between relative and cumulative frequency.

- Explain Histogram, Frequency Polygon and Ogive.

- Differentiate between Histogram and Bar Diagram.

- Explain the construction of a Pie Chart.

- What is Time Series Data? Explain the use of a Line Graph.

- Explain the uses of different graphical presentations.

**Numerical questions:**

- Construct a frequency distribution from raw data.

- Calculate the number of classes using $2^k\geq n$.

- Calculate range and class width.

- Construct relative and percentage frequency tables.

- Calculate less than and more than cumulative frequencies.

- Draw a Histogram.

- Draw a Frequency Polygon.

- Draw both types of Ogive.

- Construct a Bar Chart and Pie Chart.

- Interpret a graph and answer questions using its data.

**Lecturer's additional exercise:** Your Data Presentation Part 1 slides provide a 20-shop walking-shoe sales problem. You should practice creating the frequency distribution and all three quantitative graphs from those 20 observations.
