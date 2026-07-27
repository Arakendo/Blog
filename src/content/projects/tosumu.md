---
title: Tosumu
subtitle: Storage, trust, and epistemic honesty
summary: A small authenticated-encrypted database that tests architectural principles against persistence, corruption, recovery, cryptography, and claims about confidence.
status: Experimental, pre-stability
origin: Method under pressure
repository: https://github.com/Arakendo/tosumu
homepage: https://tosumu.org/
themes:
  - trust
  - structural-guarantees
  - inspectability
  - epistemics
featured: true
underConstruction: true
order: 3
---

## What it is

Tosumu is a small, page-based embedded database written in Rust. It combines a slotted-page storage engine, B+ tree, write-ahead log, crash recovery, per-page authenticated encryption, key protection, and inspectable diagnostic surfaces.

## Why it matters here

Storage turns vague architectural language into consequences. A boundary either authenticates bytes or it does not. A transaction either makes the dangerous path structurally impossible or leaves correctness to caller discipline. A system either distinguishes integrity from freshness or overstates what it knows.

## Questions it explores

- What does it mean for the pager to be a trust boundary?
- Which safety claims are structural and which are merely advisory?
- How should integrity, freshness, and epistemic status differ?
- What must be inspectable before a system can be trusted?
- When has an abstraction acquired enough independent evidence to stabilize?

## Evidence to curate

- Design document and file format
- Error model and safety limits
- Inspection API
- Security posture
- Crash, property, fuzz, and adversarial testing strategy
