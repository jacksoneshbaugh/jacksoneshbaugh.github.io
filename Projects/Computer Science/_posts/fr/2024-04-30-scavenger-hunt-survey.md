---
layout: project
lang: "fr"
title: "Sondage de chasse au trésor"
domain: "Informatique"
listed-date: "mar. — avr. 2024"
image: "/images/projects/bingo-survey.png"
description: >-
  Un ami m'a contacté pour me demander si je connaissais des sites Web qui présentent un sondage sous la forme d'un tableau de bingo. Je ne savais pas, mais comme j'étais en vacances de printemps, j'ai décidé de le coder rapidement pour lui. Le sondage est affiché sous la forme d'un tableau de bingo, et en cliquant sur une tuile, vous pouvez répondre à une question. Mon autre ami Joe Freeston m'a beaucoup aidé en fournissant une configuration de construction Docker et des instructions. Nous avons récemment réexaminé la conception et pivoté vers un modèle de chasse au trésor.
authors: [ { github: "https://github.com/jacksoneshbaugh", image: "/images/jackson.jpg", name: "Jackson Eshbaugh" }, { github: "https://github.com/snorklerjoe", image: "https://avatars.githubusercontent.com/u/101837621?v=4", name: "Joe Freeston" } ]

links: [
  { title: "GitHub", url: "https://github.com/jacksoneshbaugh/scavengersurvey/" }
]
---

## Introduction

Un ami m'a contacté pour me demander si je connaissais des sites Web qui présentent un sondage sous la forme d'un
tableau de bingo. Je Je ne l'ai pas fait, mais comme j'étais en vacances de printemps, j'ai pensé que je le coderais
pour lui très rapidement. L'enquête est affichée dans le champ d'un tableau de bingo et cliquer sur une tuile vous
permet de répondre à une question. Mon autre ami Joe Freeston était très utile pour fournir la configuration et les
instructions de construction de Docker. Nous avons récemment reconsidéré la conception et nous nous sommes tournés vers
un Modèle de chasse au trésor.

## Développement

J'ai utilisé Python avec le framework web Flask pour développer l'application web. Les données étaient stockées dans une
base de données SQL externe.

## Déploiement

Pour déployer l'application, nous avons utilisé Docker et le service Google Cloud Run, et une base de données SQL
gratuite a été lancée à Kamatara. Bien que ces deux services soient généralement payants, chacun offre un nombre limité
de crédits. Puisque nous ne faisons que nécessaires pour déployer pendant une semaine, nous avons pu utiliser ces
services gratuitement. Le seul coût était le nom de domaine, qui était relativement peu coûteux.

## En conclusion

Lors de l'événement du Dyer Center (pour lequel cette application a été développée), la chasse au trésor a été un
succès. J'étais spécifiquement instructé pour « enregistrer le code » pour un éventuel événement futur. Je suis fier du
travail que j'ai accompli sur ce projet et je suis ravi de voyez où cela va à l'avenir.