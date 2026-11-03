# Chapter 1 — Introduction to Statistics

## 1.1 What is Statistics?

Statistics is the science of collecting, organizing, presenting, analyzing, summarizing and interpreting numerical data to make valid conclusions and better decisions.

In simpler words, **Statistics is a way of getting useful information from data.**

For example, suppose a university collects examination marks from 500 students. Statistics can help the university:

- Calculate the average marks.

- Identify the highest and lowest marks.

- Determine how many students passed.

- Compare the performance of different departments.

- Predict the possible performance of future students.

### Five major activities in Statistics

| Activity | Meaning | Example |
| --- | --- | --- |
| Collection | Gathering information | Collecting examination marks |
| Organization | Arranging collected data | Grouping marks into ranges |
| Presentation | Showing data in a readable format | Tables, charts and graphs |
| Analysis | Applying statistical methods | Calculating mean and standard deviation |
| Interpretation | Drawing conclusions | Determining whether performance is satisfactory |

These activities generally follow this process:

**Collection of Data**

**Organization of Data**

**Presentation of Data**

**Analysis of Data**

**Interpretation and Conclusion**

## 1.2 Types of Statistics

Statistics is divided into two main branches:

### A. Descriptive Statistics

Descriptive Statistics involves collecting, organizing, summarizing and presenting data in a meaningful way.

Its purpose is to describe the collected data without making generalizations beyond that data.

**Common techniques:**

- Tables.

- Charts and graphs.

- Mean, median and mode.

- Range and standard deviation.

- Percentages and frequency distributions.

**Example:**

A teacher calculates the average marks of 40 students in a class and identifies the top 10 students.

This is Descriptive Statistics because the teacher is only describing the observed class results.

Other examples:

- Finding the average CGPA of a group of students.

- Calculating the percentage of students who passed.

- Finding the most popular programming language among surveyed students.

### B. Inferential Statistics

Inferential Statistics involves using information from a sample to make conclusions, predictions or generalizations about a larger population.

Its purpose is to use limited data to understand something beyond the collected sample.

**Common techniques:**

- Hypothesis testing.

- Correlation analysis.

- Regression analysis.

- Estimation and prediction.

**Example:**

A researcher selects 200 students from a university and investigates whether students who study more hours tend to achieve higher examination marks.

The researcher uses the sample results to make conclusions about all students at the university.

This is Inferential Statistics.

Other examples:

- Predicting a company's future sales from historical data.

- Testing whether a new teaching method improves academic results.

- Determining whether two variables have a significant relationship.

### Descriptive vs Inferential Statistics

| Descriptive Statistics | Inferential Statistics |
| --- | --- |
| Describes collected data. | Draws conclusions about a population. |
| Summarizes existing observations. | Uses sample information for generalization. |
| Uses tables, charts and averages. | Uses estimation and hypothesis testing. |
| Does not necessarily involve prediction. | Often involves prediction or generalization. |
| Example: Average marks of 40 students. | Example: Predicting university-wide performance from a sample. |

**Remember for exams**

- Descriptive = Describe the data.

- Inferential = Infer or conclude something about a population.

## 1.3 Population and Sample

These are two of the most important foundational concepts in Statistics.

### Population

A population is the complete collection of all individuals, objects or measurements that a researcher is interested in studying.

It represents the entire group.

**Example:** All students of Daffodil International University.

### Sample

A sample is a representative subset of a population selected for investigation.

It represents only a part of the complete group.

**Example:** 200 randomly selected students from Daffodil International University.

### Census

A census is the process of collecting information from every member of a population.

**Example:** Collecting CGPA information from every student of a university.

### Comparison

| Population | Sample |
| --- | --- |
| Entire group of interest. | A part of the population. |
| Usually larger. | Usually smaller. |
| Studying everyone can be expensive. | Usually easier and cheaper to study. |
| Used to calculate parameters. | Used to calculate statistics. |

**Visual example:**

<!-- viz:population-sample -->

### Why do we use samples?

Studying an entire population can be:

- Expensive.

- Time-consuming.

- Difficult to manage.

- Sometimes impossible.

Therefore, researchers study a properly selected sample to understand the population.

## 1.4 Parameter and Statistic

### Parameter

A parameter is a numerical value that describes a characteristic of an entire population.

Examples:

- Population mean.

- Population variance.

- Population standard deviation.

- Population proportion.

Common symbols:

| Parameter | Symbol |
| --- | --- |
| Population mean | $\mu$ |
| Population variance | $\sigma^2$ |
| Population standard deviation | $\sigma$ |
| Population size | $N$ |
| Population correlation | $\rho$ |

### Statistic

A statistic is a numerical value calculated from a sample.

Examples:

- Sample mean.

- Sample variance.

- Sample standard deviation.

- Sample proportion.

- Sample correlation.

Common symbols:

| Statistic | Symbol |
| --- | --- |
| Sample mean | $\bar{x}$ |
| Sample variance | $s^2$ |
| Sample standard deviation | $s$ |
| Sample size | $n$ |
| Sample correlation | $r$ |

**Example:**

Suppose a university has 5,000 students.

A researcher selects 100 students and calculates their average CGPA as 3.45.

- Population = 5,000 students.

- Sample = 100 selected students.

- Sample mean = 3.45.

- 3.45 is a statistic because it is calculated from a sample.

### Parameter vs Statistic

| Parameter | Statistic |
| --- | --- |
| Describes a population. | Describes a sample. |
| Usually fixed but often unknown. | Calculated from observed sample data. |
| Uses symbols such as $\mu,\sigma$. | Uses symbols such as $\bar{x},s$. |

## 1.5 Sampling Techniques

Sampling is the process of selecting a subset of individuals from a population for research.

Your introductory lecture includes Sampling Techniques as a learning topic, although the uploaded slides do not provide a complete explanation of every method. The following are the essential concepts.

### A. Probability Sampling

Every population member has a known, non-zero probability of being selected.

**1. Simple Random Sampling**

Every member has an equal chance of selection.

Example: Randomly selecting 50 student IDs from a list of 1,000 students.

**2. Systematic Sampling**

Researchers select every $k$-th member after a starting point is chosen.

$$
k=\frac{N}{n}
$$

Example: From 1,000 students, selecting every 10th student gives a systematic sample of approximately 100 students.

**3. Stratified Sampling**

The population is divided into subgroups (strata), and samples are taken from each subgroup.

Example: Separating students by department and selecting students from every department.

**4. Cluster Sampling**

The population is divided into clusters, and selected clusters are investigated.

Example: Randomly selecting five university sections and surveying their students.

### B. Non-Probability Sampling

Selection is not based on known random probabilities.

**1. Convenience Sampling:** Selecting people who are easiest to reach.

**2. Judgmental Sampling:** Selecting participants based on the researcher's judgment.

**3. Quota Sampling:** Selecting participants until specified subgroup quotas are reached.

**4. Snowball Sampling:** Existing participants help researchers find additional participants.

## 1.6 Data and Types of Data

Data are facts, figures, observations or measurements collected for investigation.

For example:

- Student names.

- Examination marks.

- Age.

- CGPA.

- Number of programming assignments completed.

### Primary Data

Primary data are collected directly by the researcher for a specific purpose.

Methods include:

- Surveys.

- Interviews.

- Questionnaires.

- Direct observation.

- Experiments.

Example: Conducting a survey among 100 university students about their preferred programming languages.

### Secondary Data

Secondary data are previously collected or published data used by another researcher.

Sources include:

- Books.

- Newspapers.

- Research papers.

- Government reports.

- Online databases.

- Published statistics.

Example: Using an existing government report to analyze Bangladesh's population growth.

### Primary vs Secondary Data

| Primary Data | Secondary Data |
| --- | --- |
| Collected firsthand. | Already collected by someone else. |
| Specific to the research purpose. | May have been collected for another purpose. |
| Usually requires more time and money. | Usually quicker and cheaper to obtain. |
| Example: Your own survey. | Example: Published census report. |

## 1.7 Variables and Their Types

A variable is any characteristic or attribute that can vary in magnitude or quality between individuals or observations.

Examples:

- Height.

- Weight.

- Age.

- Gender.

- Number of siblings.

- Examination marks.

There are two primary categories.

### A. Qualitative Variable (Categorical Variable)

A qualitative variable represents qualities or categories rather than numerical measurements.

Examples:

- Eye colour.

- Blood group.

- Religion.

- Marital status.

- Home district.

- Programming language preference.

Although categories may be represented using numbers or codes, those codes do not automatically become quantitative measurements.

For example, assigning 1 to Male and 2 to Female does not make gender a numerical variable.

### B. Quantitative Variable

A quantitative variable represents numerical measurements or counts.

Examples:

- Age.

- Height.

- Weight.

- Salary.

- Number of students.

- Examination marks.

Quantitative variables are divided into two types.

**1. Discrete Variable**

A discrete variable assumes distinct, countable values.

Usually, there are gaps between possible values.

Examples:

- Number of students in a classroom.

- Number of computers in a laboratory.

- Number of children in a family.

- Number of cars passing a road per minute.

You cannot have 3.5 students in a classroom.

**2. Continuous Variable**

A continuous variable can take any value within a specified range, including decimal values.

Examples:

- Height.

- Weight.

- Temperature.

- Distance.

- Blood pressure.

- Time required to solve a problem.

A person can have a height of 170.5 cm.

### Comparison of Variables

| Qualitative | Quantitative |
| --- | --- |
| Describes categories or qualities. | Represents numerical quantities. |
| Generally non-numeric. | Numeric. |
| Example: Eye colour. | Example: Height. |
| May be nominal or ordinal. | May be discrete or continuous; can use ordinal, interval or ratio measurements depending on the variable. |

## 1.8 Levels of Measurement

There are four major levels of measurement:

- Nominal.

- Ordinal.

- Interval.

- Ratio.

Understanding these four levels is extremely important because they determine which statistical methods are appropriate.

### A. Nominal Level

Nominal data classify observations into categories without any particular order.

Examples:

- Gender categories.

- Blood groups.

- Eye colour.

- Religion.

- Home district.

- Phone numbers.

Even when numbers are used as labels, they do not represent quantities.

Example:

| Blood Group | Code |
| --- | --- |
| A | 1 |
| B | 2 |
| AB | 3 |
| O | 4 |

The number 4 does not mean blood group O is greater than blood group A.

**Key characteristics:**

- Categories only.

- No natural ranking.

- No meaningful numerical difference.

- Mode is appropriate as a measure of central tendency.

### B. Ordinal Level

Ordinal data can be arranged in a meaningful order or ranking, but the differences between ranks cannot be measured meaningfully.

Examples:

- Competition positions.

- Satisfaction ratings.

- Education grades.

- Performance rankings.

Example:

| Position | Rank |
| --- | --- |
| First | 1 |
| Second | 2 |
| Third | 3 |

We know first position is better than second position, but we cannot say the difference between first and second is equal to the difference between second and third.

**Key characteristics:**

- Categories with order.

- Ranking is meaningful.

- Differences between ranks are not necessarily equal.

- Median and mode are appropriate.

### C. Interval Level

Interval data have meaningful and equal differences between values, but they do not have a true or absolute zero.

Examples:

- Temperature in Celsius.

- Temperature in Fahrenheit.

- Calendar years.

Example:

The difference between 10°C and 20°C is 10 degrees.

The difference between 20°C and 30°C is also 10 degrees.

However, 0°C does not mean the complete absence of temperature.

Therefore, we cannot say 20°C represents twice as much temperature as 10°C.

**Key characteristics:**

- Equal intervals.

- Meaningful addition and subtraction.

- No absolute zero.

- Mean, median and mode can be calculated.

### D. Ratio Level

Ratio data have equal intervals and a natural or absolute zero.

Examples:

- Height.

- Weight.

- Age.

- Distance.

- Income.

- Time duration.

- Number of students.

Example:

A person weighing 80 kg weighs twice as much as a person weighing 40 kg.

This comparison is meaningful because zero kilograms represents the absence of the measured weight.

**Key characteristics:**

- Equal intervals.

- Absolute zero.

- Addition and subtraction are meaningful.

- Ratios are meaningful.

- Mean, median and mode are applicable.

### Complete Comparison

| Property | Nominal | Ordinal | Interval | Ratio |
| --- | --- | --- | --- | --- |
| Categories | Yes | Yes | Yes, in numeric form | Yes, in numeric form |
| Meaningful order | No | Yes | Yes | Yes |
| Equal intervals | No | No | Yes | Yes |
| Absolute zero | No | No | No | Yes |
| Example | Blood group | Rank | Celsius | Weight |

### Easy method to identify the level

Ask these three questions:

- Can the values be meaningfully ordered?No = Nominal.

- No = Nominal.

- Are the differences between values meaningful and equal?No = Ordinal.

- No = Ordinal.

- Is there a meaningful absolute zero?No = Interval.Yes = Ratio.

- No = Interval.

- Yes = Ratio.

## 1.9 Applications of Statistics in Software Engineering

Your lecturer specifically includes applications in Computer Science and Software Engineering.

Statistics is important in software development because it helps engineers analyze data, discover patterns and make predictions.

Examples:

**1. Machine Learning:** Machine learning algorithms use statistical concepts to learn patterns from datasets.

**2. Software Quality Assurance (SQA):** Statistical analysis helps identify defect trends, bug density, resolution rates and testing coverage.

**3. Data Science:** Statistics helps analyze large datasets and extract meaningful information.

**4. Artificial Intelligence:** Statistical techniques help AI systems make predictions and decisions.

**5. Simulation:** Engineers use statistical descriptions to model the behaviour of real-world systems.

**6. Recommendation Systems:** Platforms like YouTube and Netflix use user activity and statistical patterns to recommend content.

**7. Performance Analysis:** Statistics can help analyze algorithm execution time, system performance and resource usage.

## 1.10 Practice Questions — Chapter 1

Try answering these without looking at the explanations.

- Define Statistics and explain its main activities.

- Differentiate between Descriptive and Inferential Statistics with examples.

- Define Population, Sample, Census, Parameter and Statistic.

- Differentiate between Primary and Secondary Data.

- Explain Qualitative and Quantitative Variables.

- Differentiate between Discrete and Continuous Variables.

- Explain the four levels of measurement with examples.

- Discuss the applications of Statistics in Software Engineering.

- Explain different sampling techniques.

- Identify the type of Statistics used in different real-world situations.

**Classification practice:**

| Variable | Expected classification |
| --- | --- |
| Eye colour | Qualitative, nominal |
| Number of computers | Quantitative, discrete, ratio |
| Student ranking | Ordinal |
| Temperature in Celsius | Quantitative, continuous, interval |
| Weight | Quantitative, continuous, ratio |
| Telephone number | Qualitative identifier, nominal |
| Monthly income | Quantitative, continuous in concept, ratio |
| Number of passengers | Quantitative, discrete, ratio |
| Examination grade (letter) | Qualitative, ordinal |
| Age | Quantitative, continuous in concept, ratio |
