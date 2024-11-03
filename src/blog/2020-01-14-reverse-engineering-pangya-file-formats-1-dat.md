---
title: "Reverse Engineering Pangya - File Formats #1: .dat"
description: |
  As I pretty much started out with barely any knowledge in reverse engineering in mid-2018, when this whole endeavor started, I also picked one of the simpler formats of Pangya to write a tool for first.
tags:
  - reverse-engineering
  - pangya
---

_Welcome to the first post in my series of reverse engineering Pangya, a MMO
golf game that ceased active development in 2016._

As I pretty much started out with barely any knowledge in reverse engineering in
mid-2018, when this whole endeavor started, I also picked one of the simpler
formats of Pangya to write a tool for first.

<!--more-->

### .dat

From the naming already, one of the probably most used file extensions for
"data" generally. The data in Pangya's case is translations.

For every distribution of the game, there are several `.dat` files, at least 2.
One of the files always is `korea.dat`. As the game is Korean and so the origin
language, this makes sense. The other file(s) depend on the released region, so
there are files like `english.dat`, `thailand.dat` or more.

### So, how does the format inside `.dat` files look like?

It's pretty simple. It's basically just a list of strings separated by null
(`0x00`) bytes. To get all the strings, simply skim through it and split at
null, tada. One thing to note however is, that you should respect the origin
language encoding, otherwise you might get into issues with saving the data.

### Okay, so that was pretty straight-forward, but how about we now take a look how translations with those files actually work?

Considering we have no indices or keys with which translations can be identified
with, general i18n solutions from nowadays can be ruled out. But...hey, we have
multiple files, and the origin language is always supplied as well, so if we
take a string from `korea.dat` and take the same index from `english.dat` we
should get the same text, right?

And we do! So, the `.dat` backed translation system is gettext-alike, where the
game searches for the index of a korean string inside the `korea.dat` file and
then takes the index to read a translation from `english.dat`!

One format and it's functionality down, many more to go! _I think, next time we
will handle all the game data that is there!_
