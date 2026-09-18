---
title: "The Test of the centurary"
date: 2026-09-200
category: ai
tag: Theory
featured: true
draft: false
---

The word "attention" in machine learning borrows its name from neuroscience but works quite differently in practice. Where human attention is selective and metabolically expensive, the transformer's attention is exhaustive — every token considers every other token, all at once.

## The core intuition

Think of a sentence as a set of positions, each holding a word. Attention asks: for each position, how much should every other position contribute to my updated meaning? The answer is a weighted sum. The weights come from dot products between learned query and key vectors, scaled and passed through a softmax.

What makes this powerful is that the weighting is *content-dependent*. The word "bank" attends differently depending on whether "river" or "money" is nearby. The mechanism learns, during training, which relationships matter.

## Why "multi-head"?

A single attention head learns one kind of relationship — perhaps syntactic subject-verb agreement. Multi-head attention runs several attention operations in parallel, each potentially capturing a different type of dependency. The outputs are concatenated and projected back to the model dimension.

In practice, different heads do specialize. Some track coreference, some handle positional proximity, some capture semantic similarity. This division emerges from training, not from any explicit design.

## The residual connection matters as much as the attention

A detail often skipped in introductions: the attention output is *added back* to the input (a residual connection), then normalized. This means attention is better understood as a refinement operation than a replacement. Each layer asks "what should I add to this representation?" rather than "what should this representation become?"

That framing helps explain why very deep transformers don't collapse into noise — each layer makes incremental adjustments rather than wholesale rewrites.
