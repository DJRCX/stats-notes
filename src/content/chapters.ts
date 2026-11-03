// Auto-generated from content-raw.md
import overview from './overview.md?raw'
import chapter_1 from './chapter-1.md?raw'
import chapter_2 from './chapter-2.md?raw'
import chapter_3 from './chapter-3.md?raw'
import chapter_4 from './chapter-4.md?raw'
import chapter_5 from './chapter-5.md?raw'
import chapter_6 from './chapter-6.md?raw'
import chapter_7 from './chapter-7.md?raw'
import section_8 from './section-8.md?raw'
import section_9 from './section-9.md?raw'
import section_10 from './section-10.md?raw'
import solved_fall_2025 from './solved-fall-2025.md?raw'
import solved_summer_2025 from './solved-summer-2025.md?raw'
import solved_fall_2024 from './solved-fall-2024.md?raw'

export type ChapterSection = { id: string; title: string }
export type Chapter = {
  id: string
  slug: string
  title: string
  label: string
  sections: ChapterSection[]
  markdown: string
}

export const chapters: Chapter[] = [
  {
    id: 'overview',
    slug: "statistics-complete-exam-study-lessons",
    title: "Statistics \u2014 Complete Exam Study Lessons",
    label: "Overview",
    sections: [],
    markdown: overview,
  },
  {
    id: 'chapter-1',
    slug: "chapter-1-introduction-to-statistics",
    title: "Chapter 1 \u2014 Introduction to Statistics",
    label: "Chapter 1",
    sections: [{"id": "1-1-what-is-statistics", "title": "1.1 What is Statistics?"}, {"id": "1-2-types-of-statistics", "title": "1.2 Types of Statistics"}, {"id": "1-3-population-and-sample", "title": "1.3 Population and Sample"}, {"id": "1-4-parameter-and-statistic", "title": "1.4 Parameter and Statistic"}, {"id": "1-5-sampling-techniques", "title": "1.5 Sampling Techniques"}, {"id": "1-6-data-and-types-of-data", "title": "1.6 Data and Types of Data"}, {"id": "1-7-variables-and-their-types", "title": "1.7 Variables and Their Types"}, {"id": "1-8-levels-of-measurement", "title": "1.8 Levels of Measurement"}, {"id": "1-9-applications-of-statistics-in-software-engineering", "title": "1.9 Applications of Statistics in Software Engineering"}, {"id": "1-10-practice-questions-chapter-1", "title": "1.10 Practice Questions \u2014 Chapter 1"}],
    markdown: chapter_1,
  },
  {
    id: 'chapter-2',
    slug: "chapter-2-data-presentation",
    title: "Chapter 2 \u2014 Data Presentation",
    label: "Chapter 2",
    sections: [{"id": "2-1-what-is-data-presentation", "title": "2.1 What is Data Presentation?"}, {"id": "2-2-frequency-distribution", "title": "2.2 Frequency Distribution"}, {"id": "2-3-construction-of-frequency-distribution", "title": "2.3 Construction of Frequency Distribution"}, {"id": "2-4-relative-frequency-distribution", "title": "2.4 Relative Frequency Distribution"}, {"id": "2-5-percentage-frequency-distribution", "title": "2.5 Percentage Frequency Distribution"}, {"id": "2-6-cumulative-frequency-distribution", "title": "2.6 Cumulative Frequency Distribution"}, {"id": "2-7-graphical-presentation-of-quantitative-data", "title": "2.7 Graphical Presentation of Quantitative Data"}, {"id": "2-8-graphical-presentation-of-qualitative-data", "title": "2.8 Graphical Presentation of Qualitative Data"}, {"id": "2-9-time-series-data-and-line-graph", "title": "2.9 Time Series Data and Line Graph"}, {"id": "2-10-histogram-vs-bar-diagram", "title": "2.10 Histogram vs Bar Diagram"}, {"id": "2-11-uses-of-different-diagrams", "title": "2.11 Uses of Different Diagrams"}, {"id": "2-12-practice-questions-chapter-2", "title": "2.12 Practice Questions \u2014 Chapter 2"}],
    markdown: chapter_2,
  },
  {
    id: 'chapter-3',
    slug: "chapter-3-measures-of-central-tendency",
    title: "Chapter 3 \u2014 Measures of Central Tendency",
    label: "Chapter 3",
    sections: [{"id": "3-1-what-is-central-tendency", "title": "3.1 What is Central Tendency?"}, {"id": "3-2-arithmetic-mean-am", "title": "3.2 Arithmetic Mean (AM)"}, {"id": "3-3-weighted-mean-wm", "title": "3.3 Weighted Mean (WM)"}, {"id": "3-4-geometric-mean-gm", "title": "3.4 Geometric Mean (GM)"}, {"id": "3-5-harmonic-mean-hm", "title": "3.5 Harmonic Mean (HM)"}, {"id": "3-6-comparison-of-the-four-types-of-mean", "title": "3.6 Comparison of the Four Types of Mean"}, {"id": "3-7-median", "title": "3.7 Median"}, {"id": "3-8-mode", "title": "3.8 Mode"}, {"id": "3-9-comparison-of-mean-median-and-mode", "title": "3.9 Comparison of Mean, Median and Mode"}, {"id": "3-10-measures-of-central-tendency-at-different-measurement-levels", "title": "3.10 Measures of Central Tendency at Different Measurement Levels"}, {"id": "3-11-which-measure-is-best", "title": "3.11 Which Measure Is Best?"}, {"id": "3-12-practice-questions-chapter-3", "title": "3.12 Practice Questions \u2014 Chapter 3"}],
    markdown: chapter_3,
  },
  {
    id: 'chapter-4',
    slug: "chapter-4-measures-of-location",
    title: "Chapter 4 \u2014 Measures of Location",
    label: "Chapter 4",
    sections: [{"id": "4-1-what-are-measures-of-location", "title": "4.1 What are Measures of Location?"}, {"id": "4-2-quartiles", "title": "4.2 Quartiles"}, {"id": "4-3-deciles", "title": "4.3 Deciles"}, {"id": "4-4-percentiles", "title": "4.4 Percentiles"}, {"id": "4-5-grouped-quartiles-deciles-and-percentiles", "title": "4.5 Grouped Quartiles, Deciles and Percentiles"}, {"id": "4-6-box-and-whisker-plot", "title": "4.6 Box-and-Whisker Plot"}, {"id": "4-7-detecting-outliers-using-fences", "title": "4.7 Detecting Outliers Using Fences"}, {"id": "4-8-interpretation-of-box-plots", "title": "4.8 Interpretation of Box Plots"}, {"id": "4-9-practice-questions-chapter-4", "title": "4.9 Practice Questions \u2014 Chapter 4"}],
    markdown: chapter_4,
  },
  {
    id: 'chapter-5',
    slug: "chapter-5-measures-of-dispersion",
    title: "Chapter 5 \u2014 Measures of Dispersion",
    label: "Chapter 5",
    sections: [{"id": "5-1-what-is-dispersion", "title": "5.1 What is Dispersion?"}, {"id": "5-2-types-of-measures-of-dispersion", "title": "5.2 Types of Measures of Dispersion"}, {"id": "5-3-range", "title": "5.3 Range"}, {"id": "5-4-mean-deviation-md", "title": "5.4 Mean Deviation (MD)"}, {"id": "5-5-variance", "title": "5.5 Variance"}, {"id": "5-6-standard-deviation-sd", "title": "5.6 Standard Deviation (SD)"}, {"id": "5-7-quartile-deviation", "title": "5.7 Quartile Deviation"}, {"id": "5-8-coefficient-of-mean-deviation", "title": "5.8 Coefficient of Mean Deviation"}, {"id": "5-9-coefficient-of-variation-cv", "title": "5.9 Coefficient of Variation (CV)"}, {"id": "5-10-summary-of-measures-of-dispersion", "title": "5.10 Summary of Measures of Dispersion"}, {"id": "5-11-practice-questions-chapter-5", "title": "5.11 Practice Questions \u2014 Chapter 5"}],
    markdown: chapter_5,
  },
  {
    id: 'chapter-6',
    slug: "chapter-6-shape-of-the-distribution-skewness-and-kurtosis",
    title: "Chapter 6 \u2014 Shape of the Distribution: Skewness and Kurtosis",
    label: "Chapter 6",
    sections: [{"id": "6-1-introduction-to-shape-of-distribution", "title": "6.1 Introduction to Shape of Distribution"}, {"id": "6-2-symmetrical-distribution", "title": "6.2 Symmetrical Distribution"}, {"id": "6-3-skewness", "title": "6.3 Skewness"}, {"id": "6-4-coefficient-of-skewness", "title": "6.4 Coefficient of Skewness"}, {"id": "6-5-moments-of-a-distribution", "title": "6.5 Moments of a Distribution"}, {"id": "6-6-kurtosis", "title": "6.6 Kurtosis"}, {"id": "6-7-coefficient-of-kurtosis", "title": "6.7 Coefficient of Kurtosis"}, {"id": "6-8-practice-questions-chapter-6", "title": "6.8 Practice Questions \u2014 Chapter 6"}],
    markdown: chapter_6,
  },
  {
    id: 'chapter-7',
    slug: "chapter-7-correlation-analysis-and-regression",
    title: "Chapter 7 \u2014 Correlation Analysis and Regression",
    label: "Chapter 7",
    sections: [{"id": "7-1-what-is-correlation", "title": "7.1 What is Correlation?"}, {"id": "7-2-types-of-correlation", "title": "7.2 Types of Correlation"}, {"id": "7-3-scatter-diagram", "title": "7.3 Scatter Diagram"}, {"id": "7-4-karl-pearson-s-correlation-coefficient", "title": "7.4 Karl Pearson's Correlation Coefficient"}, {"id": "7-5-interpretation-of-correlation-coefficient", "title": "7.5 Interpretation of Correlation Coefficient"}, {"id": "7-6-numerical-example-number-of-book-pages-and-selling-price", "title": "7.6 Numerical Example: Number of Book Pages and Selling Price"}, {"id": "7-7-properties-of-correlation-coefficient", "title": "7.7 Properties of Correlation Coefficient"}, {"id": "7-8-advantages-and-disadvantages-of-correlation", "title": "7.8 Advantages and Disadvantages of Correlation"}, {"id": "7-9-other-methods-of-studying-correlation", "title": "7.9 Other Methods of Studying Correlation"}, {"id": "7-11-linear-regression-equation", "title": "7.11 Linear Regression Equation"}, {"id": "7-12-coefficient-of-determination-r-2", "title": "7.12 Coefficient of Determination ($R^2$)"}, {"id": "7-13-difference-between-correlation-and-regression", "title": "7.13 Difference Between Correlation and Regression"}, {"id": "7-15-population-and-sample-correlation", "title": "7.15 Population and Sample Correlation"}, {"id": "7-16-hypotheses", "title": "7.16 Hypotheses"}, {"id": "7-17-significance-level-alpha", "title": "7.17 Significance Level ($\\alpha$)"}, {"id": "7-18-test-statistic", "title": "7.18 Test Statistic"}, {"id": "7-19-two-methods-of-making-a-decision", "title": "7.19 Two Methods of Making a Decision"}, {"id": "7-20-complete-hypothesis-testing-example", "title": "7.20 Complete Hypothesis Testing Example"}, {"id": "7-21-p-value-interpretation", "title": "7.21 P-value Interpretation"}, {"id": "7-22-steps-to-solve-any-correlation-significance-problem", "title": "7.22 Steps to Solve Any Correlation Significance Problem"}, {"id": "7-23-practice-questions-chapter-7", "title": "7.23 Practice Questions \u2014 Chapter 7"}],
    markdown: chapter_7,
  },
  {
    id: 'section-8',
    slug: "8-complete-statistics-formula-sheet",
    title: "8. Complete Statistics Formula Sheet",
    label: "8. Complete Statistics Formula Sheet",
    sections: [{"id": "chapter-1-introduction", "title": "Chapter 1 \u2014 Introduction"}, {"id": "chapter-2-data-presentation", "title": "Chapter 2 \u2014 Data Presentation"}, {"id": "chapter-3-central-tendency", "title": "Chapter 3 \u2014 Central Tendency"}, {"id": "chapter-4-measures-of-location", "title": "Chapter 4 \u2014 Measures of Location"}, {"id": "chapter-5-dispersion", "title": "Chapter 5 \u2014 Dispersion"}, {"id": "chapter-6-skewness-and-kurtosis", "title": "Chapter 6 \u2014 Skewness and Kurtosis"}, {"id": "chapter-7-correlation-and-regression", "title": "Chapter 7 \u2014 Correlation and Regression"}],
    markdown: section_8,
  },
  {
    id: 'section-9',
    slug: "9-important-mistakes-to-avoid-in-the-examination",
    title: "9. Important mistakes to avoid in the examination",
    label: "9. Important mistakes to avoid in the examination",
    sections: [],
    markdown: section_9,
  },
  {
    id: 'section-10',
    slug: "10-how-to-organize-your-exam-preparation",
    title: "10. How to organize your exam preparation",
    label: "10. How to organize your exam preparation",
    sections: [{"id": "suggested-chapter-study-tracker", "title": "Suggested chapter study tracker"}, {"id": "11-which-original-files-should-you-study", "title": "11. Which original files should you study?"}, {"id": "final-advice", "title": "Final advice"}],
    markdown: section_10,
  },
  {
    id: 'solved-fall-2024',
    slug: "solved-fall-2024-midterm",
    title: "Solved Questions \u2014 Fall 2024 Midterm",
    label: "Solved \u2014 Fall 2024",
    sections: [{"id": "question-1-a-population-sample-parameter-statistic-variable-and-sampling-technique-3-marks", "title": "Question 1(a) — Population, Sample, Parameter, Statistic, Variable and Sampling Technique [3 marks]"}, {"id": "question-1-b-appropriate-measures-of-central-tendency-2-marks", "title": "Question 1(b) — Appropriate Measures of Central Tendency [2 marks]"}, {"id": "question-2-a-i-construct-an-appropriate-graph-3-marks", "title": "Question 2(a)(i) — Construct an Appropriate Graph [3 marks]"}, {"id": "question-2-a-ii-detect-outliers-4-marks", "title": "Question 2(a)(ii) — Detect Outliers [4 marks]"}, {"id": "question-2-b-mean-median-and-mode-3-marks", "title": "Question 2(b) — Mean, Median and Mode [3 marks]"}, {"id": "question-2-b-i-effect-of-a-new-employee-2-marks", "title": "Question 2(b)(i) — Effect of a New Employee [2 marks]"}, {"id": "question-2-b-ii-recommended-measure-of-central-tendency-1-mark", "title": "Question 2(b)(ii) — Recommended Measure of Central Tendency [1 mark]"}, {"id": "question-3-a-comparing-relative-dispersion-of-samsung-and-oneplus-5-marks", "title": "Question 3(a) — Comparing Relative Dispersion of Samsung and OnePlus [5 marks]"}, {"id": "question-3-b-finding-the-top-20-of-coding-practice-time-2-marks", "title": "Question 3(b) — Finding the Top 20% of Coding Practice Time [2 marks]"}],
    markdown: solved_fall_2024,
  },
  {
    id: 'solved-summer-2025',
    slug: "solved-summer-2025-midterm",
    title: "Solved Questions \u2014 Summer 2025 Midterm",
    label: "Solved \u2014 Summer 2025",
    sections: [{"id": "question-1-identify-data-type-and-measurement-level-5-marks", "title": "Question 1 — Identify Data Type and Measurement Level [5 marks]"}, {"id": "question-2-a-i-frequency-distribution-with-cumulative-relative-frequencies-3-marks", "title": "Question 2(a)(i) — Frequency Distribution with Cumulative Relative Frequencies [3 marks]"}, {"id": "question-2-a-ii-draw-an-appropriate-graph-2-marks", "title": "Question 2(a)(ii) — Draw an Appropriate Graph [2 marks]"}, {"id": "question-2-a-iii-calculate-mean-median-and-mode-from-the-frequency-distribution-5-marks", "title": "Question 2(a)(iii) — Calculate Mean, Median and Mode from the Frequency Distribution [5 marks]"}, {"id": "question-2-b-find-q-2-d-8-and-p-80-3-marks", "title": "Question 2(b) — Find $Q_2$, $D_8$ and $P_{80}$ [3 marks]"}, {"id": "question-3-a-i-construct-box-and-whisker-plots-2-marks", "title": "Question 3(a)(i) — Construct Box-and-Whisker Plots [2 marks]"}, {"id": "question-3-a-ii-investigate-x-and-y-according-to-variability-2-marks", "title": "Question 3(a)(ii) — Investigate X and Y According to Variability [2 marks]"}, {"id": "question-3-b-shape-characteristics-of-examination-scores-3-marks", "title": "Question 3(b) — Shape Characteristics of Examination Scores [3 marks]"}, {"id": "question-4-a-calculate-skewness-and-kurtosis-of-examination-marks-3-marks", "title": "Question 4(a) — Calculate Skewness and Kurtosis of Examination Marks [3 marks]"}, {"id": "question-4-b-scatter-diagram-and-pearson-s-correlation-coefficient-4-marks", "title": "Question 4(b) — Scatter Diagram and Pearson's Correlation Coefficient [4 marks]"}],
    markdown: solved_summer_2025,
  },
  {
    id: 'solved-fall-2025',
    slug: "solved-fall-2025-midterm",
    title: "Solved Questions \u2014 Fall 2025 Midterm",
    label: "Solved \u2014 Fall 2025",
    sections: [{"id": "question-1-a-population-sample-parameter-statistic-variable-and-data-3-marks", "title": "Question 1(a) — Population, Sample, Parameter, Statistic, Variable and Data [3 marks]"}, {"id": "question-1-b-identify-data-types-and-measurement-levels-2-marks", "title": "Question 1(b) — Identify Data Types and Measurement Levels [2 marks]"}, {"id": "question-2-a-i-construct-a-frequency-distribution-with-cumulative-relative-frequencies-4-marks", "title": "Question 2(a)(i) — Construct a Frequency Distribution with Cumulative Relative Frequencies [4 marks]"}, {"id": "question-2-a-ii-sketch-an-appropriate-graph-2-marks", "title": "Question 2(a)(ii) — Sketch an Appropriate Graph [2 marks]"}, {"id": "question-2-a-iii-mean-median-and-mode-4-marks", "title": "Question 2(a)(iii) — Mean, Median and Mode [4 marks]"}, {"id": "question-2-b-calculate-q-2-d-8-and-p-80-3-marks", "title": "Question 2(b) — Calculate $Q_2,D_8$ and $P_{80}$ [3 marks]"}, {"id": "question-3-a-i-box-and-whisker-plots-for-x-and-y-2-marks", "title": "Question 3(a)(i) — Box-and-Whisker Plots for X and Y [2 marks]"}, {"id": "question-3-a-ii-investigate-x-and-y-according-to-variability-2-marks", "title": "Question 3(a)(ii) — Investigate X and Y According to Variability [2 marks]"}, {"id": "question-3-b-shape-characteristics-of-examination-score-distribution-3-marks", "title": "Question 3(b) — Shape Characteristics of Examination Score Distribution [3 marks]"}, {"id": "question-3-a-five-number-summary-and-box-and-whisker-plot-4-marks", "title": "Question 3(a) — Five-Number Summary and Box-and-Whisker Plot [4 marks]"}, {"id": "question-3-b-variance-standard-deviation-and-coefficient-of-variation-4-marks", "title": "Question 3(b) — Variance, Standard Deviation and Coefficient of Variation [4 marks]"}, {"id": "question-4-a-skewness-and-kurtosis-3-marks", "title": "Question 4(a) — Skewness and Kurtosis [3 marks]"}, {"id": "question-4-b-scatter-diagram-and-pearson-s-correlation-coefficient-4-marks", "title": "Question 4(b) — Scatter Diagram and Pearson's Correlation Coefficient [4 marks]"}, {"id": "5-my-recommendations-for-your-upcoming-exam", "title": "5. My recommendations for your upcoming exam"}],
    markdown: solved_fall_2025,
  }
]
