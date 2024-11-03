---
title: Why I'm Reverse Engineering a Anime Golf Game
description: |
  This is going to be the first entry of a series of blog posts detailing my ongoing journey of reverse engineering parts of the video game "PangYa!" by Ntreev Soft.
tags:
  - reverse-engineering
  - pangya
---

This is going to be the first entry of a series of blog posts detailing my
ongoing journey of reverse engineering parts of the video game "PangYa!" by
Ntreev Soft.

The first post mainly is going to be an explanation of the core game and my
motivation on why I'm doing all of this in the first place.

## PangYa!

Okay, so onto what _PangYa!_ actually is. Coming from the title, the base genre
is already somewhat clear, it's a golf game in anime-style. While I personally
wouldn't call it a real-life accurate simulation, with systems like wind, slopes
and different terrain types in place it's also not fairly easy.

The game's development started somewhere around 2003, by a small company called
Ntreev Soft, which was founded the same year, coming from a split off a previous
company called Plenus Inc., Ntreev's focus was more on delivering MMO
experiences, while another company, Sonnori, developed single player games.

PangYa! was not using any of the bigger commercial available game engines, or
toolkits that have been available at the time, but rather used an inhouse
developed engine called WangReal, which in itself is a pun to another engine, as
_wang_ as a prefix means "very" in Korean, so it's the "very real engine". The
same engine was used in previous titles by Sonnori like "White Day". After that,
the engine mainly got developed further and extended over PangYa!'s lifetime.

Now, as a final bit to the game itself, a trailer to one of the courses of the
game, just to show the general style. If there was a proper trailer that would
show off gameplay and it actually being a game centered around golfing, I'd
surely put that here instead.

<iframe width="640" height="480" src="https://www.youtube-nocookie.com/embed/caogK7f8Djw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## So, why and how did the whole journey of reverse engineering this game even start?

Well, I have some history with this game, considering I already know of it, I
also have played it, but that has been almost 10 years back. I actively played
PangYa! around 2009 and 2010 on the European servers that were operated by GOA
(a gaming now-defunct subdivision of the french ISP/carrier Orange).

I actually forgot about the game for a while, other stuff came up, especially
school and work took up most of my time then. So, one day I posted about it on
Twitter, and shortly after, [Babbe](https://twitter.com/babbe0), of who I didn't
knew he also played the game in the past, wrote me a message, basically going
_"Hey, let's make a PangYa! server together"_. While that was not my first goal,
it definitely got things running, and my desire to take apart the game got even
stronger.

So I basically dug a bit into the game and it's history, especially the
developer, and then I basically realized...

### ...the game is (basically) dead

All officially licensed servers aside of one (PangYa! Thailand hosted by
ini3/MyGame) are gone, I already was a bit sceptical on how "active" the game
was, but checking a job listing for Ntreev on a korean job hunting site
basically confirmed it, as it stated that PangYa! PC development ceased in 2016.

Being a game that was and is very dear to me, having had one of the most kind
communities back in the day, I felt that with my over the years learned
programming experience I wanted to give back to that and make it possible for
the game to be run without official support. And that is what started my
journey.

Of course, as with anything that is available to the public, reverse engineering
of the game has been going on since the game was first released, and the peak of
communities specifically focusing on taking apart the game has been around
2010-ish I was pretty late in the game and by now most efforts have stagnated,
but I wanted to do something others haven't done at the time: Publicly
documenting my findings and research for people to work with.

And with that I was setting on my journey of reverse engineering PangYa! in
mid-2018!

_This was the introductory post to my series on my journey of reverse
engineering PangYa!. While this post didn't have many technical details about
reversing specifically, I wanted to set an even ground delivering base
information first! I plan to bring more technical details, my learnings and
findings up in follow up posts._

---

If you have any questions, feel free to ask me on the
[Fediverse](https://desu.social/@pixel) or on
[Twitter](https://twitter.com/pixeldesu)!

And if you don't want to miss any following posts, you can:

- Follow me on the above listed social media
- Use the email subscription feature on this blog
- Subscribe to the blogs [RSS feed](https://desu.blog/feed/)
