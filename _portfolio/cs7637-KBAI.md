---
title: "Knowledge-Based Artificial Intelligence: Cognitive Systems"
excerpt: "Various Projects performed as part of OMSCS CS7637: Knowledge-Based Artificial Intelligence: Cognitive Systems"
categories:
  - CS7637 Knowledge-Based Artificial Intelligence - Cognitive Systems
tags:
  - artificial intelligence
---


This course was very interesting in the sense that it took a very different take on AI, than the current approaches that involve applying deep learning to every problem. The course was loosely based on Patrick Winston's Artificial Intelligence. 

The course addressed the topic of a lot of structured AI, and rule based AI systems, that were being explored before Deep learning became big. I am highlighting one of the interesting assignments from this course below based on Raven's Progressive Matrices (RPMs).

Introduction:

The Raven's Progressive Matrices (RPM) is a collection of standardized tests, consisting of analogy problems, in which a set of geometric figures is presented with one entry missing and the correct entry must be selected from a set of given choices. Not only have these tests been found to be one of the single best measures of intelligence, but also they require little instruction for administering and scoring.

Approach:

I used a visual approach to the problem based on the Production Systems method. My thinking was that, a visual approach would allow me to generalize for most problems.

Although I soon found out that the visual agent suffers from ambiguity in answers due to even minor pixel differences in similar images. To deal with this ambiguity, known as chunking in production systems, as described in the KBAI e-book (Thaker, B., Joyner, D. and Goel, A.K., 2016, p.67). I decided to incorporate two different production systems with independent knowledge representations and problem-solving method within the same agent, as a conflict resolution strategy. 

![Knowledge Representation of Visual RPM Agent](https://github.com/prashsub/prashsub.github.io/blob/master/assets/images/AgentArchitecture.png)


The first method is an Affine Transform based deduction system, that solves the RPM based on Affine Transforms, mimicking human cognition. If this deduction system fails to provide a confident answer, my agent switches to a Visual Heuristics deduction system.

The Affine Transform Deduction System, uses an Affine Class, to take input of 2 images. Further on, it performs Affine Transform comparisons between these two images, and stores the respective parameters such as an Root Mean Square Error (RMSE) of the result of Reflection Transform on one of the 2 input images. This solver, also uses a Composite Class, that consists of performing Subtract or XOR result comparisons on Affine Class objects.

The Visual Heuristics Deduction System uses an Image Class, to take input of 1 image. Further on, it stores relevant attributes of the image, such as dark pixel count, total pixel count, dark pixel co-ordinates etc. This solver also uses a Solutions Class, that takes 2 Image Class instances, and calculates Intersecting Dark Pixel Ratio of the two images, as well as Difference in Dark Pixel to Total Pixel ratio of the two images.

This independent knowledge representations for 2 independent solvers, allows us to create a working memory, based on a collection of assertions (Winston, 1992, p. 121). It also provides a sufficient level of abstraction of the problem, into attributes needed for solving the problem itself, helping us separate the wheat from the chaff.

The deduction system here, uses a series of ordered list of If, Else conditions to evaluate whether the provided input problem is triggering a rule. If a rule is triggered, then certain confidence thresholds are introduced into the deduction system, which if met, a solution is returned.

![Problem Solving Method](https://github.com/prashsub/prashsub.github.io/blob/master/assets/images/AgentProblemSolver.png)

This was my first design iteration of the solver, and as the term progressed, we improved on the program, although it continued to have trade-offs between overfitting and accuracy.

Code and reports available on request.



