---
title:  "My Attempt at the Cloud Resume Challenge"
date:   2020-06-08 02:31:36 -0500
author_profile: true
read_time: true
comments: true
share: true
related: true
category:
    - AWS
tags:
    - serverless
---

## What I built

Forrest Brazeal had recently posted a challenge on twitter, that if you succeeded in, would help in breaking into the cloud computing world.

Initially, I thought it would be a straightforward challenge, but as I started reading it in detail, I noticed that he had touched upon all sorts of fundamental aspects of cloud computing within the challenge. Coincidentally, I had just recently completed my AWS Solutions Architect certification, and thought this would be a good challenge, to apply my new learnings.

Forrest's original post lay down a framework of steps to achieve, but he left them vague enough for the challenge to be difficult (but doable), if you would spend time on the resources he pointed to.

At the end, I believe I finished the challenge, and what I built is as follows:

1. An AWS S3 Static Site with Cloudfront hosting my resume, that automatically updates itself and invalidates the cache, based on code commits on github.

2. This static site also has a visitor counter, which uses a REST API, that is built using AWS API Gateway, Lambda and DynamoDB as the database. The code for the visitor counter, is hosted in a separate github, which also automatically updates the entire AWS architecture (using codebuild, cloudformation, and GitHub Actions). 

## Demo
[prashsub.com](https://prashsub.com)

## How I built it 

As I have learnt in my journey in computer science, that all complex things are nothing but bits of simple things that are meticulously assembled together. Thus, I took an approach of breaking down this problem into modules of work for myself as follows:

1. Setting up AWS S3 for Static Website Hosting
2. Setting up a Cloudfront Distribution for Edge Location Caching
3. Setting up API Gateway, Lambda and DynamoDB for a serverless architecture to count visits
4. Front-end HTML, CSS for Resume Layout
5. Javascript to display visitor counter

Below is a link to the final system architecture.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/h075ncgdochgo3a72mj7.png)