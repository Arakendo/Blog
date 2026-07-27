---
title: Corpus-driven validation
summary: A design becomes credible when it must explain a representative body of evidence rather than only examples chosen to flatter it.
status: developing
tags:
  - corpus
  - evidence
  - validation
projects:
  - tonesu
  - tokimu
  - weaver
ideas: []
underConstruction: true
---

## Working definition

A corpus is not a collection of demos. It is an adversary for the model.

The corpus should contain ordinary cases, difficult cases, historical accidents, competing interpretations, and examples the current design cannot yet explain. A model that survives only curated examples has demonstrated presentation, not coverage.

## Across the projects

- Tonesu uses translations and conversations to pressure its grammar and vocabulary.
- Tokimu uses standards-derived XML, SVG, font, and presentation corpora.
- Weaver uses XSLT, XPath, XML, and host-integration conformance suites.

## Questions still open

The site still needs to distinguish validation corpora, regression fixtures, golden outputs, and sources of domain knowledge.
