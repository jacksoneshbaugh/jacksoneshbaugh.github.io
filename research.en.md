---
layout: page
title: Research
permalink: /research/
page_id: research
lang: "en"
---

<div style="font-size: 2rem; font-weight: 300; margin-bottom: 1rem;">
  I believe that one of the greatest joys in life is to discover and build new things—and to contribute, in however small a way, to the ongoing conversation of science.
</div>

<blockquote style="font-size: 1.1rem; margin-top: 1rem; font-style: italic;">
  Great are the works of the Lord;<br>
  they are pondered by all who delight in them... <br>
  He has caused his wonders to be remembered; <br>
  the Lord is gracious and compassionate. <br>
  <br>
  <span style="font-size: 0.95rem;">(Psalm 111:2,4, NIV)</span>
</blockquote>

# Research Interests

I'm broadly interested in machine learning interpretability, computational linguistics, and the theoretical foundations
of artificial intelligence. I'm especially drawn to questions like: _How do we make neural networks more transparent?_
and _How do linguistic structure and semantics interact in multilingual NLP models?_

**Looking for a list of all my publications?**
You can view a summary of my research projects and scholarly output [here](/publications) or on my
<img alt="ORCID iD" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png"
width="16" height="16" style="vertical-align: text-bottom; margin-left: 4px;" />
<a href="https://orcid.org/0009-0009-1806-2166" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">
ORCID profile</a>.

# Current Projects

## Recommending Energy Efficiency Retrofits for Neighborhoods Using Machine Learning

*June 2025—Present*

Wise stewardship of resources is essential, particularly in the realm of building energy. Many buildings are far less
energy efficient than they could be, resulting in excessive energy use and costs. While modeling tools like
EnergyPlus&trade; and urban building energy models (UBEMs) can simulate building energy consumption, these remain only
simulations. Our project seeks to go further: using simulation outputs alongside additional data as inputs to neural
networks that generate retrofit recommendations at the neighborhood level.

_Note_: EnergyPlus is a trademark of the United States Department of Energy.

**In collaboration with** Professor [Jorge Silveyra](https://compsci.lafayette.edu/people/jorge-silveyra/) (Lafayette
College)
and [Dr. Chetan Tiwari](https://cas.gsu.edu/profile/chetan-tiwari/) (Georgia State University)

## Interpreting Regression Neural Networks with Linear Surrogates

**April 2025–Present**

In this project, I evaluate the reliability of linear surrogates for interpreting neural networks. Using a metric I call
the lambda score, I measure how well linear models can approximate the predictions and representations of trained
networks. While surrogates often achieve high correlation, I show that this does not imply faithful approximation—and in
fact, the remaining unexplained variance may correspond to the network’s actual decision logic. This suggests that
simple linear proxies can be misleading, especially when key nonlinear behaviors reside in low-variance regions of the
input space.

Looking ahead, I’m interested in developing a related framework for classification tasks to explore whether the
disconnect between fidelity and accuracy observed in regression also arises in classification settings. I also aim to
characterize the fidelity–accuracy gap more precisely by studying the relationship between λ(f) and the R² between the
surrogate and the ground truth—analyzing when and why high surrogate fidelity fails to preserve predictive performance.

### Publications

**Jackson Eshbaugh.**  
*Fidelity Isn’t Accuracy: When Linearly Decodable Functions Fail to Match the Ground Truth.*  
arXiv preprint [arXiv:2506.12176](https://arxiv.org/abs/2506.12176), June 2025.  
📄 [PDF](https://arxiv.org/pdf/2506.12176)🔗 [arXiv](https://arxiv.org/abs/2506.12176)
💻 [Code](https://github.com/jacksoneshbaugh/lambda-linearity-score)

## Detecting French Idioms Using Neural Machine Translation Techniques

**February 2025–Present**

Idiomatic expressions remain a major challenge in neural machine translation (NMT), often leading to errors in both
statistical and modern NMT systems. In this project, I’m adapting techniques that have been successful in identifying
idioms in English corpora and applying them to French data. This work, currently in its early stages, will become my
combined honors thesis in French and Computer Science.

# Upcoming Projects

## FuncLearn: A Functional Programming Language for Machine Learning

**Status**: Early Design

Machine learning is used across many disciplines — but for those outside computer science, working with Python and
TensorFlow can feel unnecessarily complex. FuncLearn aims to provide a simple, intuitive, English-like functional
language that lowers the barrier to entry. The language will compile to TensorFlow-based Python code, allowing users to
import datasets, chain models, and train networks using expressive, composable syntax — no ML expertise required.

# Long-Term Interests / Ideas

I'm also interested in accessibility within programming languages — particularly the potential for localized keywords (
e.g., using native-language syntax like `si` instead of `if`) and rethinking syntax structures for right-to-left
languages. While this work is still conceptual, it reflects a broader interest in language-inclusive design.
