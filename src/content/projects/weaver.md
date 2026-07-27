---
title: Weaver
subtitle: Semantics across execution boundaries
summary: A TypeScript-native XSLT platform built around inspectable compilation, diagnostics, provenance, and preserving the same meaning across interpreter and native backends.
status: Active development
origin: Method across backends
repository: https://github.com/Arakendo/weaver-xslt
homepage: https://weaverxslt.org/
themes:
  - boundaries
  - diagnostics
  - provenance
  - execution
featured: true
underConstruction: true
order: 4
---

## What it is

Weaver is a TypeScript-native XSLT 3.0 platform with interpreter and native execution backends, inspectable emitted TypeScript, diagnostics, source maps, bundler integrations, and a public workbench.

## Why it matters here

Weaver makes semantic boundaries observable. XML layers retain their identities, lexical form and resolved identity remain distinct, provenance is explicit, and different execution backends are required to preserve the same meaning.

## Questions it explores

- What must an intermediate representation own?
- How can a compiler emit an artifact a human can inspect?
- When should a boundary crossing become a named event?
- How should multiple backends prove semantic agreement?
- Why are diagnostics part of the language architecture?

## Evidence to curate

- Architecture and pinned decisions
- Semantic boundary principles
- Differentiators
- Workbench evidence
- Native execution boundary
- XML and conformance corpora
