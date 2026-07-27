---
term: Boundary
summary: A named place where authority, representation, trust, or meaning changes hands.
status: working
aliases:
  - architectural boundary
related:
  - capability
  - primitive
tags:
  - boundaries
  - ownership
projects:
  - tokimu
  - tosumu
  - weaver
ideas:
  - semantic-ownership
underConstruction: true
---

A boundary is more than a package edge. It identifies a change in responsibility: plaintext becomes authenticated storage, an XML layer becomes an intermediate representation, or an owned capability delegates execution to a provider.

Good boundaries make the crossing visible and give each side a contract it can actually enforce.
