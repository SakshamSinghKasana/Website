---
title: "Prompting is just programming in prose"
date: 2026-09-01
category: ai
tag: Practice
featured: false
draft: false
---

The first generation of programming required fluency in assembly. The second required fluency in structured languages. What we're experiencing now is the emergence of a third: fluency in natural language as a control surface for computation.

## Constraints are still constraints

A well-formed prompt is a specification. It defines input, expected output, constraints, examples, and edge cases — the same things a function signature and its docstring used to carry. The difference is that the specification is written in English, and the interpreter is a language model.

This creates a new class of bugs: underspecification. When you write a function, the compiler rejects ambiguous syntax. When you write a prompt, the model interprets ambiguity — and may interpret it differently across runs, or across model versions.

## Few-shot examples are tests

Including examples in a prompt isn't just demonstration — it's assertion. You're telling the model: "the output I want looks like this." Poorly chosen examples bias the distribution of outputs. Well-chosen examples constrain it to exactly the space you want.

This is identical to what a test suite does for traditional code. The examples don't cover every case; they signal intent. A model that follows the examples correctly on new inputs has generalized the intent, not memorized the cases.

## Versioning your prompts

If a prompt is a program, it needs version control. Changes to the model or the prompt are changes to the program. A prompt that works well with one model version may behave unexpectedly after a model update — without any change to the text itself.

This is the deepest way in which prompting is like programming: the same source can produce different behavior depending on the runtime. We're still building the tooling to handle this well.
