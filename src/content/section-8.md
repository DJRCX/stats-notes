# 8. Complete Statistics Formula Sheet

This section brings together the most important formulas from all seven chapters. Use it as a revision reference after studying the detailed lessons. Each row includes a short plain-English note so you remember *when* and *why* the formula is used.

## Chapter 1 — Introduction

| Concept | Symbol / Formula | Brief explanation |
| --- | --- | --- |
| Population size | $N$ | Total number of individuals in the complete group you want to study. |
| Sample size | $n$ | Number of individuals actually selected from the population. |
| Population mean | $\mu$ | Average of every value in the population; usually unknown. |
| Sample mean | $\bar{x}$ | Average calculated from the sample; used to estimate $\mu$. |
| Population variance | $\sigma^2$ | Average squared distance of population values from $\mu$. |
| Sample variance | $s^2$ | Spread of sample values around $\bar{x}$; uses $n-1$ in many formulas. |

## Chapter 2 — Data Presentation

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Number of classes | $2^k\geq n$ | Rough guide for choosing how many class intervals to use. |
| Range | $X_{\max}-X_{\min}$ | Difference between the largest and smallest observations. |
| Class width | $i=\frac{Range}{k}$ | Size of each class interval after choosing $k$ classes. |
| Class midpoint | $x=\frac{L+U}{2}$ | Centre value of a class; used as $x$ in grouped calculations. |
| Relative frequency | $RF=\frac{f}{n}$ | Proportion of observations falling in a class. |
| Percentage frequency | $PF=\frac{f}{n}\times100$ | Same idea as relative frequency, expressed as a percent. |
| Total frequency | $N=\sum f$ | Sum of all class frequencies; must equal the sample size. |
| Pie chart angle | $\theta=\frac{f}{N}\times360^\circ$ | Sector angle that represents a category's share of the whole. |

## Chapter 3 — Central Tendency

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Arithmetic Mean | $\bar{x}=\frac{\sum x}{n}$ | Ordinary average; best for roughly symmetric numerical data. |
| Grouped Arithmetic Mean | $\bar{x}=\frac{\sum fx}{N}$ | Mean from a frequency table using midpoints $x$ and frequencies $f$. |
| Weighted Mean | $\frac{\sum wx}{\sum w}$ | Average that gives more influence to larger weights (e.g. credits). |
| Geometric Mean | $GM=\sqrt[n]{\prod x_i}$ | Average for growth rates / multiplicative changes. |
| Grouped Geometric Mean | $\log GM=\frac{\sum f\log x}{N}$ | Log form of GM for grouped positive data. |
| Harmonic Mean | $HM=\frac{n}{\sum(1/x)}$ | Average of rates when equal amounts are involved (e.g. speeds). |
| Grouped Harmonic Mean | $HM=\frac{N}{\sum(f/x)}$ | Harmonic mean for frequency distributions. |
| Median (odd) | $\frac{n+1}{2}$-th observation | Middle value after sorting; robust to outliers. |
| Median (even) | Average of the two middle observations | Used when $n$ is even. |
| Grouped Median | $L+\frac{N/2-F}{f_m}\times i$ | Interpolates the median inside the median class. |
| Grouped Mode | $L+\frac{\Delta_1}{\Delta_1+\Delta_2}\times i$ | Estimates the most frequent value inside the modal class. |

## Chapter 4 — Measures of Location

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Quartile position | $\frac{iN}{4}$ | Locates $Q_i$ that splits ordered data into four equal parts. |
| Decile position | $\frac{iN}{10}$ | Locates $D_i$ that splits ordered data into ten equal parts. |
| Percentile position | $\frac{iN}{100}$ | Locates $P_i$ (value below which $i\%$ of data lie). |
| IQR | $Q_3-Q_1$ | Spread of the middle 50% of observations. |
| Quartile Deviation | $\frac{Q_3-Q_1}{2}$ | Half the IQR; absolute measure of middle-half spread. |
| Grouped Quartile | $L+\frac{kN/4-CF}{f}\times i$ | Interpolates a quartile inside its class. |
| Grouped Decile | $L+\frac{kN/10-CF}{f}\times i$ | Interpolates a decile inside its class. |
| Grouped Percentile | $L+\frac{kN/100-CF}{f}\times i$ | Interpolates a percentile inside its class. |
| Lower Inner Fence | $Q_1-1.5(IQR)$ | Below this: suspected (mild) low outliers. |
| Upper Inner Fence | $Q_3+1.5(IQR)$ | Above this: suspected (mild) high outliers. |
| Lower Outer Fence | $Q_1-3(IQR)$ | Below this: extreme low outliers. |
| Upper Outer Fence | $Q_3+3(IQR)$ | Above this: extreme high outliers. |

The ungrouped quartile, decile and percentile positions above follow your main lecture's $N$-based method. Check the alternative $N+1$ convention when using the supplementary document.

## Chapter 5 — Dispersion

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Range | $X_{\max}-X_{\min}$ | Quick but crude measure of spread; sensitive to extremes. |
| Coefficient of Range | $\frac{H-L}{H+L}$ | Unit-free comparison of ranges between datasets. |
| Mean Deviation | $\frac{\sum\|x-\bar{x}\|}{n}$ | Average absolute distance from the mean. |
| Grouped Mean Deviation | $\frac{\sum f\|x-\bar{x}\|}{N}$ | Mean deviation for frequency distributions. |
| Population Variance | $\frac{\sum(x-\mu)^2}{N}$ | Average squared deviation from the population mean. |
| Sample Variance | $\frac{\sum(x-\bar{x})^2}{n-1}$ | Unbiased sample estimate of population variance. |
| Population SD | $\sqrt{\frac{\sum(x-\mu)^2}{N}}$ | Square root of population variance; same units as data. |
| Sample SD | $\sqrt{\frac{\sum(x-\bar{x})^2}{n-1}}$ | Most common measure of typical distance from the mean. |
| Quartile Deviation | $\frac{Q_3-Q_1}{2}$ | Spread based on quartiles; less affected by outliers. |
| Coefficient of QD | $\frac{Q_3-Q_1}{Q_3+Q_1}$ | Relative form of quartile deviation for comparisons. |
| Coefficient of MD | $\frac{MD}{\bar{x}}$ | Mean deviation relative to the mean. |
| Coefficient of Variation | $\frac{s}{\bar{x}}\times100$ | Percentage measure for comparing relative variability. |

## Chapter 6 — Skewness and Kurtosis

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Pearson's Skewness | $Sk_p=\frac{3(Mean-Median)}{s}$ | Quick skewness check using mean–median gap. Positive ⇒ right skew. |
| Second Central Moment | $\mu_2=\frac{\sum(x-\bar{x})^2}{n}$ | Same idea as variance (about the mean); used in shape formulas. |
| Third Central Moment | $\mu_3=\frac{\sum(x-\bar{x})^3}{n}$ | Captures asymmetry; sign indicates skew direction. |
| Fourth Central Moment | $\mu_4=\frac{\sum(x-\bar{x})^4}{n}$ | Captures tail heaviness for kurtosis. |
| Moment-based Skewness | $\beta_1=\frac{\mu_3^2}{\mu_2^3}$ | Standardized asymmetry measure from moments. |
| Kurtosis | $\beta_2=\frac{\mu_4}{\mu_2^2}$ | Tail/peak measure; compare with 3 for mesokurtic normal shape. |

## Chapter 7 — Correlation and Regression

| Concept | Formula | Brief explanation |
| --- | --- | --- |
| Pearson Correlation | $\frac{\sum(x-\bar{x})(y-\bar{y})}{\sqrt{\sum(x-\bar{x})^2\sum(y-\bar{y})^2}}$ | Strength and direction of a linear relationship between $x$ and $y$. |
| Correlation Range | $-1\leq r\leq+1$ | $+1$ perfect positive, $-1$ perfect negative, $0$ no linear link. |
| Regression Equation | $\hat{Y}=a+bX$ | Best-fit line for predicting $Y$ from $X$. |
| Regression Slope | $b=\frac{\sum(x-\bar{x})(y-\bar{y})}{\sum(x-\bar{x})^2}$ | Change in predicted $Y$ for a one-unit increase in $X$. |
| Regression Intercept | $a=\bar{y}-b\bar{x}$ | Predicted $Y$ when $X=0$ (may or may not be meaningful). |
| Coefficient of Determination | $R^2=r^2$ | Proportion of $Y$ variation explained by the linear model. |
| Test Statistic | $t=r\sqrt{\frac{n-2}{1-r^2}}$ | $t$-statistic for testing whether population correlation is zero. |
| Degrees of Freedom | $df=n-2$ | Degrees of freedom for the correlation significance $t$-test. |
