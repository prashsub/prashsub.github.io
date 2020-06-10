---
title: "TCP Congestion Control"
excerpt: "Project 3 of CS6250 Computer Networks. This project speciifically dealt with experiments comparing congestion control algorithms in TCP, namely TCP Reno and TCP CUBIC"
categories:
  - CS6250 Computer Networks
  - OMSCS
tags:
  - networking
---

Project 3: TCP CUBIC and Congestion Control.
The overall goal of this project is to study the dynamics of TCP in home networks, specifically congestion control algorithms and buffer occupancy. This project is structured around an interactive experiment utilizing Mininet.

The project involved understanding how congestion control happens in various TCP protocols. 

For example, this project involved running a long-lived iperf on a connection, and start a short-lived download at the same time, and see how max congestion window CWND, is affected in TCP Reno and TCP CUBIC comparatively.

Since, TCP Reno operates with an Additive Increase, Multiplicative Decrease (AIMD) and TCP CUBIC is Cubic Increase, Multiplicative Decrease(CIMD) there are some performance differences. Although, there are some surprising results, such as both having similar performances in short RTT or small Bandwidth Delay Product (BDP) networks.