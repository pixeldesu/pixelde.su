---
title: "Reverse Engineering Pangya – File Formats #2: .iff"
description: |
  Even though I talked about a different file format in my first post about reverse engineering Pangya, that actually wasn't the first format that I took apart, or messed with.
date: 2021-12-19
tags:
  - reverse-engineering
  - pangya
---

_Another blogpost after...almost a year! So much about that resolve of planning
to post stuff frequently!_

Even though I talked about a different file format in
[my first post about reverse engineering Pangya](https://desu.blog/reverse-engineering-pangya-file-formats-1-dat),
that actually wasn't the first format that I took apart, or messed
with.<!--more-->

This one is, `.iff`.

## What is `.iff`?

Well, `.iff` is already taken as "Interchangable File Format", but in regards to
Pangya it probably can be watered down to it meaning "Item File Format". because
that's what it mainly does, even if it's use diverged over the years.

## How does the format inside `.iff` files look like?

It's actually pretty simple, aside of some metadata fields at the beginning (the
count of entries, a binding identifier, and whats presumed to be a version
number), it's only the records.

Those records are pretty much just sets of `struct`/`class` instances of the
specific model type and their values serialized, so nothing special.

## How did you find out what means what?

Considering we have the basic structure down now, the interesting thing is the
structure of each record/data set.

There's a problem now though. The structure data the game de-serializes has not
been present in any of the decompilations or version of the game we got our
hands on...so, this pretty much means we need to apply manual labour for the
most part.

One thing that was pretty easy to figure out at first was that strings are
always of a fixed length, for English regions it was 40 bytes (or 512 bytes for
long descriptions).

So, without a functional version of the game running (for the most cases) how
can we figure out what the fields mean?

_Comparing data with official sources of course!_

Back when Pangya was active, the US-based publishers had MediaWiki sites set up
for all the information around the game. The sites aren't online anymore, but
that's nothing the Wayback Machine can't help us with!

[wiki.gamerage.com/pangya - 2014](https://web.archive.org/web/20141123154403/http://wiki.gamerage.com/pangya/index.php/Main_Page)

With this data in our hands, we can cross-reference entries inside the files to
the text information in the Wiki. It's quite a tedious process, but definitely
the easiest way to get to know stuff without having the running game at your
exposal.

As an example, one of the most successful infos I pulled from the wiki were the
[card effect flags](https://github.com/retreev/PangLib/blob/master/PangLib.IFF/Models/Flags/CardEffectFlag.cs)
on
[cards](https://github.com/retreev/PangLib/blob/master/PangLib.IFF/Models/Data/Card.cs).

---

So, that's pretty much it for `.iff`, a pretty simple file format, but the
research surely was some work, and it is far from done.

_Data tends to differ between the regions, and to this day people are looking
through the files and documenting the fields!_
