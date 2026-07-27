---
title: Semantic ownership
summary: Every meaning needs an owner, even when its implementation is delegated across libraries, providers, frontends, or backends.
status: developing
tags:
  - meaning
  - ownership
  - boundaries
projects:
  - tonesu
  - tokimu
  - weaver
ideas: []
underConstruction: true
---

## Working definition

Semantic ownership answers a question that module diagrams often avoid:

> Who is responsible for deciding what this thing means?

An owner does not need to perform every operation. It may delegate storage, rendering, transport, or execution. What it cannot safely delegate by accident is the authority to reinterpret the concept.

## Emerging evidence

Tonesu makes ownership visible through domains and compositional heads. Tokimu states the principle directly in its architectural maxims. Weaver applies it across XML layers, its intermediate representation, and multiple execution backends.

## Questions still open

- How is ownership shared without becoming ambiguous?
- When does a provider's constraint legitimately change the owned meaning?
- What evidence demonstrates that a boundary is semantic rather than merely organizational?
