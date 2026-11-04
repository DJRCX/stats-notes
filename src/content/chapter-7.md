# Chapter 7 — Correlation Analysis and Regression

This chapter is covered by two PowerPoint presentations and supplementary Word documents.

It contains several connected topics:

- Introduction to Correlation.

- Types of Correlation.

- Scatter Diagram.

- Karl Pearson's Correlation Coefficient.

- Properties of Correlation.

- Regression Analysis.

- Coefficient of Determination.

- Testing the Significance of Correlation.

## 7.1 What is Correlation?

Correlation is a statistical measure that determines whether two or more variables are related and measures the direction and strength of their relationship.

In simple words, correlation tells us whether changes in one variable are associated with changes in another variable.

Examples:

- Study hours and examination marks.

- Height and weight.

- Advertising expenditure and sales.

- Product price and demand.

- Temperature and electricity consumption.

For example:

If students who study more hours generally receive higher marks, study hours and examination marks may have a positive correlation.

## 7.2 Types of Correlation

Your lecturer explains correlation using several classifications.

### A. Simple Correlation

Simple correlation measures the relationship between two variables.

Example:

- Height and weight.

- Study hours and examination marks.

- Price and demand.

Only two variables are considered.

### B. Multiple Correlation

Multiple correlation examines the relationship among more than two variables.

Example:

- Price.

- Demand.

- Supply.

Another example:

- Student marks.

- Study hours.

- Attendance.

- Hours of sleep.

### C. Positive Correlation

Positive correlation occurs when two variables tend to move in the same direction.

When one variable increases, the other tends to increase.

When one variable decreases, the other tends to decrease.

Examples:

- Study hours and examination marks.

- Height and weight.

- Advertising and sales in suitable conditions.

### D. Negative Correlation

Negative correlation occurs when two variables tend to move in opposite directions.

When one variable increases, the other tends to decrease.

Examples:

- Product price and demand, assuming other relevant factors are unchanged.

- Speed and travel time for a fixed distance.

- Absenteeism and academic performance in some settings.

### E. Zero Correlation

Zero linear correlation indicates that there is no linear relationship between two variables.

This does not necessarily mean there is no relationship of any kind. A nonlinear relationship can exist even when Pearson's correlation is close to zero.

### F. Perfect Positive Correlation

When:

$$
r=+1
$$

There is a perfect positive linear relationship.

All observations lie exactly on an increasing straight line.

### G. Perfect Negative Correlation

When:

$$
r=-1
$$

There is a perfect negative linear relationship.

All observations lie exactly on a decreasing straight line.

### H. Linear Correlation

A linear correlation exists when the relationship between variables can be represented approximately by a straight line.

### I. Nonlinear Correlation

A nonlinear relationship exists when variables follow a curved or other non-straight-line pattern.

For example, the value of a vehicle and its age may follow a nonlinear relationship.

### Complete Comparison

| Correlation | Direction |
| --- | --- |
| Perfect Positive | Exactly same direction |
| Positive | Same general direction |
| Zero Linear | No linear relationship |
| Negative | Opposite general direction |
| Perfect Negative | Exactly opposite direction |

## 7.3 Scatter Diagram

A scatter diagram is a graphical method of representing the relationship between two quantitative variables.

Each observation is represented by a point on a graph.

One variable is plotted on the X-axis, while the other variable is plotted on the Y-axis.

### Types of Scatter Diagrams

<!-- viz:scatter-types -->

### Steps to Construct a Scatter Diagram

- Select two related quantitative variables.

- Assign one variable to the X-axis.

- Assign the other variable to the Y-axis.

- Plot each pair of observations.

- Observe the overall pattern.

- Interpret the direction and strength of the relationship.

### Example

Your lecturer provides an example involving age and glucose level.

| Subject | Age | Glucose Level |
| --- | --- | --- |
| 1 | 43 | 99 |
| 2 | 21 | 65 |
| 3 | 25 | 79 |
| 4 | 42 | 75 |
| 5 | 57 | 87 |

The plotted observations generally show that glucose levels tend to increase as age increases.

Therefore, the variables show a positive correlation in this sample.

### Advantages of Scatter Diagram

- Easy to construct.

- Easy to interpret visually.

- Shows positive or negative relationships.

- Helps identify outliers.

- Can reveal nonlinear patterns.

### Limitations

- Does not provide an exact numerical measurement of strength.

- Interpretation may be subjective.

- Does not prove causation.

## 7.4 Karl Pearson's Correlation Coefficient

Karl Pearson's Correlation Coefficient is a numerical method used to measure the strength and direction of a linear relationship between two quantitative variables.

It is commonly represented by:

$$
r
$$

Its value always lies between -1 and +1.

$$
-1\leq r\leq+1
$$

### Formula

Your lecturer provides this formula:

$$

r=
\frac{\sum(x_i-\bar{x})(y_i-\bar{y})}
{\sqrt{\sum(x_i-\bar{x})^2}
\sqrt{\sum(y_i-\bar{y})^2}}

$$

Where:

- $x_i$ = individual X observations.

- $y_i$ = individual Y observations.

- $\bar{x}$ = mean of X.

- $\bar{y}$ = mean of Y.

- $n$ = number of paired observations.

### What does the formula calculate?

The numerator measures how X and Y vary together.

The denominator standardizes the result using their individual variation.

This produces a unit-free value between -1 and +1.

### Alternative Computational Formula

You may also encounter the following working formula:

$$

r=
\frac{n\sum xy-(\sum x)(\sum y)}
{\sqrt{[n\sum x^2-(\sum x)^2][n\sum y^2-(\sum y)^2]}}

$$

Both formulas calculate the same Pearson correlation coefficient.

Use the version demonstrated in your lecturer's numerical examples.

## 7.5 Interpretation of Correlation Coefficient

The sign represents direction, while the magnitude represents strength.

| Value of $r$ | Interpretation |
| --- | --- |
| +1 | Perfect positive correlation |
| +0.8 | Strong positive correlation |
| +0.5 | Moderate positive correlation |
| +0.2 | Weak positive correlation |
| 0 | No linear correlation |
| -0.2 | Weak negative correlation |
| -0.5 | Moderate negative correlation |
| -0.8 | Strong negative correlation |
| -1 | Perfect negative correlation |

These are approximate descriptions; exact strength boundaries can differ between textbooks.

Your lecturer specifically classifies a coefficient of 0.511 as a moderate positive association.

## 7.6 Numerical Example: Number of Book Pages and Selling Price

This is one of the main examples in your Correlation Analysis Part 2 presentation.

A bookstore researcher selects four textbooks and investigates the relationship between the number of pages and selling price.

| Book | Pages (X) | Price (Y) |
| --- | --- | --- |
| Introduction to History | 500 | 84 |
| Basic Algebra | 700 | 75 |
| Business Management | 800 | 99 |
| Introduction to Sociology | 600 | 72 |

Calculate the correlation coefficient.

### Step 1: Calculate the mean of X.

$$
\bar{x}=\frac{500+700+800+600}{4}
$$

$$
\bar{x}=650
$$

### Step 2: Calculate the mean of Y.

$$
\bar{y}=\frac{84+75+99+72}{4}
$$

$$
\bar{y}=82.5
$$

### Step 3: Calculate deviations.

For each observation:

$$
a=x-\bar{x}
$$

$$
b=y-\bar{y}
$$

Then calculate:

- $ab$.

- $a^2$.

- $b^2$.

| X | Y | $a=X-650$ | $b=Y-82.5$ | $ab$ | $a^2$ | $b^2$ |
| --- | --- | --- | --- | --- | --- | --- |
| 500 | 84 | -150 | 1.5 | -225 | 22500 | 2.25 |
| 700 | 75 | 50 | -7.5 | -375 | 2500 | 56.25 |
| 800 | 99 | 150 | 16.5 | 2475 | 22500 | 272.25 |
| 600 | 72 | -50 | -10.5 | 525 | 2500 | 110.25 |
| **Total** |  | **0** | **0** | **2400** | **50000** | **441** |

### Step 4: Substitute into the formula.

$$
r=
\frac{\sum ab}{\sqrt{\sum a^2}\sqrt{\sum b^2}}
$$

Substitute:

$$
r=\frac{2400}{\sqrt{50000}\sqrt{441}}
$$

$$
r=\frac{2400}{\sqrt{50000\times441}}
$$

$$
r=\frac{2400}{4695.74}
$$

$$
r\approx0.511
$$

### Step 5: Interpret the result.

The result is positive.

Its magnitude is approximately 0.511.

Therefore:

**There is a moderate positive correlation between the number of pages in a textbook and its selling price.**

This means that textbooks with more pages tend to have higher selling prices in this sample, although the relationship is not perfect.

## 7.7 Properties of Correlation Coefficient

Your lecturer emphasizes the following properties.

**1. It lies between -1 and +1.**

$$
-1\leq r\leq+1
$$

A value outside this range indicates a calculation error.

**2. It has no unit.**

Correlation is dimensionless.

For example, the correlation between height in centimetres and weight in kilograms is the same as the correlation after changing height to metres and weight to grams, provided the unit changes are positive.

**3. It measures linear relationships.**

Pearson's coefficient is designed to measure linear association.

A nonlinear relationship can exist even when $r$ is close to zero.

**4. It is independent of change of origin and positive scale.**

Changing the units or adding a constant does not change the coefficient. Reversing the direction of one variable changes the sign.

**5. It is symmetric.**

$$
r_{xy}=r_{yx}
$$

The correlation between X and Y is the same as the correlation between Y and X.

## 7.8 Advantages and Disadvantages of Correlation

### Advantages

- Simple to understand.

- Measures both direction and strength.

- Useful for identifying relationships.

- Allows comparison of relationships between quantitative variables.

- Useful in further regression analysis.

### Disadvantages

- Pearson's coefficient measures linear association, not arbitrary nonlinear association.

- Sensitive to extreme observations.

- Does not establish cause and effect.

- A misleading relationship may occur due to other variables.

- Requires suitable paired quantitative observations.

### Important: Correlation Does Not Mean Causation

Suppose ice cream sales and the number of people swimming both increase during summer.

This does not mean buying ice cream causes people to swim.

A third variable, such as hot weather, may influence both.

This is why correlation must not automatically be interpreted as a cause-and-effect relationship.

## 7.9 Other Methods of Studying Correlation

Your Correlation Analysis Part 1 presentation lists several methods.

- Scatter Diagram Method.

- Karl Pearson's Correlation Coefficient.

- Spearman's Rank Correlation Coefficient.

- Method of Least Squares.

The first two receive the most detailed numerical treatment in the supplied slides.

### Spearman's Rank Correlation

Spearman's method measures the strength and direction of a monotonic relationship using ranks rather than original numerical values.

A commonly used formula when there are no tied ranks is:

$$
\rho_s=1-\frac{6\sum d^2}{n(n^2-1)}
$$

Where:

- $\rho_s$ = Spearman's rank correlation coefficient.

- $d$ = difference between the two ranks.

- $n$ = number of paired observations.

It is particularly useful when data are ordinal or when relationships are assessed by rank.

This method is mentioned in your lecture but not developed through a full calculation example.

# 7.10 Regression Analysis

Correlation measures the strength and direction of association.

Regression goes further by developing a mathematical equation that describes how one variable is related to another and can be used for prediction.

Your supporting Word document covers this topic.

### What is Regression Analysis?

Regression Analysis is a statistical method used to model the relationship between dependent and independent variables.

It helps us estimate or predict the value of one variable using another variable or several variables.

### Dependent Variable

The dependent variable is the variable we want to explain or predict.

It is commonly represented by:

$$
Y
$$

Example: Examination marks.

### Independent Variable

The independent variable is the variable used to explain or predict the dependent variable.

It is commonly represented by:

$$
X
$$

Example: Study hours.

### Simple Regression

Simple Regression involves:

- One dependent variable.

- One independent variable.

Example:

Predicting examination marks using study hours.

### Multiple Regression

Multiple Regression involves:

- One dependent variable.

- Two or more independent variables.

Example:

Predicting examination marks using:

- Study hours.

- Attendance.

- Previous academic results.

- Sleep duration.

### Comparison

| Simple Regression | Multiple Regression |
| --- | --- |
| One independent variable. | More than one independent variable. |
| One dependent variable. | Usually one dependent variable in a standard multiple-regression model. |
| Simpler model. | More complex model. |
| Example: Sales using advertising. | Sales using advertising, price and customer reach. |

## 7.11 Linear Regression Equation

The population linear regression model is:

$$
Y=\beta_0+\beta_1X+\varepsilon
$$

Where:

- $Y$ = dependent variable.

- $X$ = independent variable.

- $\beta_0$ = population intercept.

- $\beta_1$ = population slope.

- $\varepsilon$ = error term.

### Estimated Regression Equation

The estimated regression equation is:

$$
\hat{Y}=a+bX
$$

Where:

- $\hat{Y}$ = predicted value of Y.

- $a$ = estimated intercept.

- $b$ = estimated slope.

### Intercept

The intercept represents the estimated value of Y when X equals zero.

$$
a=\hat{Y}\text{ when }X=0
$$

### Slope

The slope represents the expected change in Y for every one-unit increase in X.

For example:

$$
\hat{Y}=30+5X
$$

Here:

- Intercept = 30.

- Slope = 5.

This means:

- When X = 0, predicted Y = 30.

- For every additional unit of X, predicted Y increases by 5.

### Calculation of Regression Coefficients

For simple linear regression:

$$
b=\frac{\sum(x-\bar{x})(y-\bar{y})}{\sum(x-\bar{x})^2}
$$

And:

$$
a=\bar{y}-b\bar{x}
$$

### Example

Suppose the estimated relationship between study hours and predicted examination marks is:

$$
\hat{Y}=35+6X
$$

A student studies for 5 hours.

Find the predicted examination marks.

Substitute:

$$
\hat{Y}=35+6(5)
$$

$$
\hat{Y}=35+30
$$

$$
\hat{Y}=65
$$

The predicted examination mark is 65.

This is an illustrative example of how a regression equation works.

## 7.12 Coefficient of Determination ($R^2$)

The Coefficient of Determination measures the proportion of the variation in the dependent variable that is explained by the regression model.

Your lecturer's supporting document explains that it is used to assess how well the regression model fits the data.

For simple linear regression with an intercept:

$$
R^2=r^2
$$

### Example

Suppose:

$$
r=0.962
$$

Then:

$$
R^2=(0.962)^2
$$

$$
R^2=0.9254
$$

Convert into percentage:

$$
R^2=0.9254\times100
$$

$$
R^2=92.54\%
$$

### Interpretation

Approximately 92.54% of the variation in the dependent variable is explained by the fitted linear regression model using the independent variable.

The remaining variation is not explained by that model.

**Important:** A higher $R^2$ indicates a closer fit to the observed data in this basic setting, but it does not automatically prove that the model is valid, unbiased or causal.

## 7.13 Difference Between Correlation and Regression

This is a direct theoretical topic from your Correlation and Regression document.

| Correlation | Regression |
| --- | --- |
| Measures degree and direction of association. | Models the relationship mathematically. |
| Usually focuses on association between two variables. | Can use one or multiple independent variables. |
| Produces a coefficient $r$. | Produces an estimated equation. |
| Correlation coefficient lies between -1 and +1. | Regression coefficients can take any real value. |
| Does not distinguish dependent and independent variables. | Distinguishes dependent and independent variables. |
| Symmetric: $r_{xy}=r_{yx}$. | Predicting Y from X differs from predicting X from Y. |
| Does not prove causation. | Prediction does not by itself prove causation. |

One detail in your lecturer's supporting document describes regression as indicating cause and effect. For mathematical interpretation, be careful: regression models relationships and predictions, but causal conclusions require additional research design or assumptions.

# 7.14 Testing the Significance of the Correlation Coefficient

This topic is covered by your document named:

`Testing the Significance of the Correlation Coefficient.docx`

It is important because calculating a correlation coefficient does not automatically mean that the relationship is statistically significant.

### Why Do We Test Significance?

Suppose we select 10 students and calculate:

$$
r=0.60
$$

Does this prove that a relationship exists in the entire population?

No.

The value could have occurred due to random sample variation.

We therefore perform a hypothesis test to determine whether the population correlation coefficient is significantly different from zero.

## 7.15 Population and Sample Correlation

Two important symbols are used.

### Population Correlation Coefficient

$$
\rho
$$

Rho represents the true correlation coefficient of the population.

It is usually unknown.

### Sample Correlation Coefficient

$$
r
$$

It represents the correlation coefficient calculated from sample observations.

We use $r$ to test whether the population correlation coefficient $\rho$ is significantly different from zero.

## 7.16 Hypotheses

The lecturer's document uses a two-tailed test.

### Null Hypothesis ($H_0$)

$$
H_0:\rho=0
$$

Interpretation:

There is no statistically significant linear relationship between the two variables in the population.

### Alternative Hypothesis ($H_1$)

$$
H_1:\rho\neq0
$$

Interpretation:

There is a statistically significant linear relationship between the two variables in the population.

Notice the symbol:

$$
\neq
$$

It means "not equal to."

Because the alternative hypothesis allows both positive and negative correlation, this is a two-tailed test.

## 7.17 Significance Level ($\alpha$)

The significance level is the threshold used to decide whether the result provides sufficient evidence against the null hypothesis.

Your lecturer uses:

$$
\alpha=0.05
$$

This represents a 5% significance level.

## 7.18 Test Statistic

To test the significance of Pearson's correlation coefficient, we calculate a t-statistic.

### Formula

$$

t=\frac{r}{\sqrt{\frac{1-r^2}{n-2}}}

$$

An equivalent formula is:

$$

t=r\sqrt{\frac{n-2}{1-r^2}}

$$

Where:

- $t$ = calculated test statistic.

- $r$ = sample correlation coefficient.

- $n$ = number of paired observations.

### Degrees of Freedom

$$
df=n-2
$$

This value is used to obtain the appropriate critical value from the t-distribution table.

## 7.19 Two Methods of Making a Decision

Your lecturer describes two equivalent decision methods.

### Method 1: P-value Method

The p-value measures how unusual the observed test statistic would be under the null hypothesis.

Decision rules:

**Case 1:**

$$
p\text{-value}<\alpha
$$

Decision:

Reject the null hypothesis.

Conclusion:

There is sufficient evidence of a statistically significant linear relationship.

**Case 2:**

$$
p\text{-value}\geq\alpha
$$

Decision:

Do not reject the null hypothesis.

Conclusion:

There is insufficient evidence of a statistically significant linear relationship.

### Method 2: Critical Value Method

The critical value is obtained from the t-distribution table using:

- Significance level.

- Degrees of freedom.

- One-tailed or two-tailed test.

For a two-tailed test:

$$
|t_{calculated}|>t_{critical}
$$

Decision: Reject the null hypothesis.

Otherwise:

$$
|t_{calculated}|\leq t_{critical}
$$

Decision: Do not reject the null hypothesis.

## 7.20 Complete Hypothesis Testing Example

Your lecturer provides a problem involving the relationship between newborn babies' weight and length.

There are 10 observations.

The calculated sample correlation coefficient is:

$$
r=0.47
$$

Test whether the correlation is significant at the 0.05 significance level.

### Step 1: State the hypotheses.

Null hypothesis:

$$
H_0:\rho=0
$$

Alternative hypothesis:

$$
H_1:\rho\neq0
$$

### Step 2: Identify the given values.

$$
r=0.47
$$

$$
n=10
$$

$$
\alpha=0.05
$$

### Step 3: Calculate degrees of freedom.

$$
df=n-2
$$

$$
df=10-2
$$

$$
df=8
$$

### Step 4: Calculate the t-statistic.

Formula:

$$
t=r\sqrt{\frac{n-2}{1-r^2}}
$$

Substitute:

$$
t=0.47\sqrt{\frac{10-2}{1-(0.47)^2}}
$$

Calculate:

$$
0.47^2=0.2209
$$

$$
t=0.47\sqrt{\frac{8}{1-0.2209}}
$$

$$
t=0.47\sqrt{\frac{8}{0.7791}}
$$

$$
t=0.47\sqrt{10.2682}
$$

$$
t=0.47\times3.2044
$$

$$
t\approx1.506
$$

### Step 5: Find the critical value.

This is a two-tailed test.

Given:

$$
\alpha=0.05
$$

$$
df=8
$$

From the standard t-distribution table:

$$
t_{critical}\approx\pm2.306
$$

**Visual decision rule**

<!-- viz:two-tailed-test -->

**Important correction to your lecturer's document:** It reports a critical value of 1.86 for this example. That value is the one-tailed 5% critical value for 8 degrees of freedom, not the two-tailed 5% value required by $H_1:\rho\neq0$. The correct two-tailed value is approximately 2.306.

### Step 6: Make a decision.

Compare:

$$
|1.506|<2.306
$$

Therefore:

$$
\text{Do not reject }H_0
$$

### Step 7: Write the conclusion.

There is insufficient statistical evidence at the 0.05 significance level to conclude that a significant linear relationship exists between newborn weight and length in the population.

This does not prove that the relationship is absolutely zero. It means the sample does not provide sufficient evidence to establish that it differs from zero.

The conclusion remains the same as your lecturer's example.

## 7.21 P-value Interpretation

Suppose the calculated p-value is:

$$
p=0.17
$$

Significance level:

$$
\alpha=0.05
$$

Compare:

$$
0.17>0.05
$$

Therefore, do not reject the null hypothesis.

There is insufficient evidence of a significant linear relationship.

### Decision Table

| Condition | Decision |
| --- | --- |
| $p<0.05$ | Reject $H_0$ |
| $p\geq0.05$ | Do not reject $H_0$ |
| $\|t\|>t_{critical}$ | Reject $H_0$ |
| $\|t\|\leq t_{critical}$ | Do not reject $H_0$ |

## 7.22 Steps to Solve Any Correlation Significance Problem

Memorize this order:

- Calculate or identify the correlation coefficient $r$.

- State $H_0:\rho=0$ and $H_1:\rho\neq0$.

- Identify the significance level $\alpha$.

- Calculate degrees of freedom: $df=n-2$.

- Calculate the t-statistic.

- Find the critical t-value or p-value.

- Compare the calculated value with the decision threshold.

- Reject or do not reject $H_0$.

- Write a conclusion in the context of the question.

## 7.23 Practice Questions — Chapter 7

**Theory:**

- Define Correlation and explain its importance.

- Explain Simple and Multiple Correlation.

- Differentiate between Positive and Negative Correlation.

- Explain Perfect Positive and Perfect Negative Correlation.

- Define Scatter Diagram and explain its types.

- Define Karl Pearson's Correlation Coefficient.

- Explain the properties of the correlation coefficient.

- Discuss the advantages and disadvantages of correlation.

- Differentiate between Correlation and Regression.

- Define Regression Analysis.

- Differentiate between Simple and Multiple Regression.

- Explain Dependent and Independent Variables.

- Define Coefficient of Determination.

- Define the Significance Test of Correlation.

- Explain Null and Alternative Hypotheses.

**Numerical:**

- Construct a scatter diagram and interpret it.

- Calculate Karl Pearson's Correlation Coefficient using the deviation formula.

- Calculate Pearson's coefficient using the working formula.

- Interpret the calculated coefficient.

- Calculate regression coefficients.

- Form an estimated regression equation.

- Predict a value using the regression equation.

- Calculate the Coefficient of Determination.

- Test the significance of the correlation coefficient using the t-test.

- Solve a complete hypothesis-testing problem using the critical value method or p-value method.
