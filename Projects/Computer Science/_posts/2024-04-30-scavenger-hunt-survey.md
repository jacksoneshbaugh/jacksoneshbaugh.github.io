---
layout: project
lang: "en"
title: "Scavenger Hunt Survey"
domain: "Computer Science"
listed-date: "Mar. — Apr. 2024"
image: "/images/projects/bingo-survey.png"
description: >-
  A friend reached out to me asking if I knew of any websites that present a survey in the form of a bingo board. I didn't, but since I was on spring break, I figured I'd code it up for him real quick. The survey is displayed in the form of a bingo board, and clicking on a tile allows you to respond to a question. My other friend Joe Freeston was very helpful in providing Docker build config and instructions. We reconsidered the design recently and pivoted to a scavenger hunt model.
authors: [ { github: "https://github.com/jacksoneshbaugh", image: "/images/jackson.jpg", name: "Jackson Eshbaugh" }, { github: "https://github.com/snorklerjoe", image: "https://avatars.githubusercontent.com/u/101837621?v=4", name: "Joe Freeston" } ]

links: [
  { title: "GitHub", url: "https://github.com/jacksoneshbaugh/scavengersurvey/" }
]
---

## Introduction

A friend reached out to me asking if I knew of any websites that present a survey in the form of a bingo board. I
didn't, but since I was on spring break, I figured I'd code it up for him real quick. The survey is displayed in the
form of a bingo board, and clicking on a tile allows you to respond to a question. My other friend Joe Freeston was very
helpful in providing Docker build config and instructions. We reconsidered the design recently and pivoted to a
scavenger hunt model.

## Development

I used Python with the Flask web framework to develop the web application. Data was stored in an external SQL database.

## Deployment

To deploy the application, we used Docker and the Google Cloud Run service, and a free SQL database was spun up at
Kamatara. Although both of these services are typically paid, each offers a limited number of credits. Since we only
needed to deploy for one week, we were able to use these services for free. The only cost was the domain name, which was
relatively inexpensive.

## Conclusion

Over the course of the week-long event, many people engaged with the site, networking and filling out the survey. The
Dyer Center called it a success, and I was specifically instructed to "save the code" for a possible future event. I am
proud of the work I did on this project and am excited to
see where it goes in the future.