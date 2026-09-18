---
title: "The geometry of embeddings"
date: 2026-08-15
category: cars
tag: Theory
featured: false
draft: false
---

Before transformers, before attention, there was Word2Vec — and the famous demonstration that `king - man + woman ≈ queen`. It was arresting because it implied that meaning could be encoded as direction in a high-dimensional space.

## What an embedding is

An embedding is a function from a discrete object (a word, a document, a user) to a point in a continuous vector space. The space has hundreds or thousands of dimensions, and the geometry of the space — distances, angles, directions — carries semantic information.

Two embeddings close together in cosine distance represent similar meanings. A direction in the space can represent a consistent transformation: masculine to feminine, present to past tense, country to capital city.

## Emergent structure

The remarkable thing is that this structure isn't programmed in. It emerges from the training objective: predict the next word, or predict whether a sentence was masked. The model discovers that encoding certain relationships geometrically helps it minimize prediction error.

This means the geometry of an embedding space is a kind of compression of regularities in language. The directions that emerge are the directions that the training corpus rewards having.

## Limitations

The analogy arithmetic (`king - man + woman`) is real but fragile. It works reliably for well-represented concepts in the training data and breaks down near the edges of the distribution. The geometric intuition is useful but shouldn't be over-trusted.

More fundamentally: the geometry reflects the biases and emphases of the training corpus. Embeddings trained on skewed data encode skewed geometry. The distances and directions are not neutral measurements — they're records of what was written, by whom, and in what quantities.
