---
title: Cake digital banking
order: 3
img: /assets/cake.jpeg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  Implement Microservices: Onboarding, Investment, Creditcard, Driverlending... Using Golang,
  Postgres DB, Mambu corebanking, Google Cloud,...
tags:
  - Microservices
  - Golang
time: 6-2021 -> 9-2022
role: Backend developer
tech_stack: Golang, Postgres, Google Tracing, Google Cloud, Google pubsub, Kibana, Prometheus, Kubernetes, Grpc, grpc-ecosystem, ORM, Microservices, Protobuf
---

## Implement features
I successfully implemented the onboarding flow for our credit **card services**, integrating with several third-party APIs, sending files using FTP, generating contracts from user data and templates provided by the business department, and signing contracts using the digital signature API from FPT Esign. To enable better monitoring of our services, I also exported custom metrics, in addition to the metrics provided by go-telemetry.

I designed and implemented the onboarding flow for our **Driverlending service**, which involved writing an API to integrate with Be and using JWT for authentication. To ensure efficient database performance, I designed a DB system that indexes the necessary fields for effective query times.

## Refactor

I refactor our old **investment service** to support investing in multiple funds and handle API updates from Dragon Capital. Additionally, I implemented logging for every request made to external APIs to facilitate troubleshooting, set up a cron job for retrieving data from our partner, and export the required data for the BA team.

## Unit test

During my time at Cake, I was responsible for developing and maintaining various software applications. One of my key contributions was in the area of testing, where I wrote unit tests using the Testify and Mockery framework to ensure the quality and reliability of our code. I was responsible for exporting tracing data using *OpenTelemetry*, which helped us to identify and diagnose performance issues in our applications. Add custom middleware for Grpc server to avoid context cancel.

Overall, my work at _Cake_ helped to improve the quality and reliability of our software, and I am proud of the contributions I made to the team.
