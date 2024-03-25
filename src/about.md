---
layout: layouts/about.njk
title: About
---

{% from "svg/bandcamp.njk" import svg as bandcampSVG %}
{% from "svg/lastfm.njk" import svg as lastfmSVG %}
{% from "svg/music.njk" import svg as musicSVG %}
{% from "svg/steam.njk" import svg as steamSVG %}
{% from "svg/tv.njk" import svg as tvSVG %}

# About

<div class="relative">
<div class="md:w-3/4 md:ms-2 md:-me-[25%] lg:-me-[50%] h-auto md:float-right md:bg-white p-2 rounded-md md:shadow-md">
  <figure class="m-0">
    <img class="rounded-md" src="/assets/img/me.jpg"/>
    <figcaption class="italic">That's me! Can you believe I'm not actually a cute blue-haired anime girl?</figcaption>
  </figure>
</div>
<p>My name is Andy, and I'm a <span class="js-age">27</span> year old Senior Frontend Developer from southern Germany.</p>

<p>I love building and contributing to open source software, some of which you can find on the <a href="/projects">Projects page</a> on this website. Besides that, I also love taking apart anything that I come across. Learning how things are built and what other secrets they might contain is really interesting to me.</p>
</div>

This also plays into my other hobby of game/tech preservation. Seeing some
online games becoming unplayable because they are deemed unprofitable or other
things is sad, so I have taken it upon myself to help out keeping at least some
of them alive. My primary focus for myself is Pangya, an MMO golf game I played
a lot in my childhood.

## Gaming

While adulthood definitely caught up to me and I don't play as much as I did
before, gaming still plays a role in my life! My favorite genres of games are
**Visual Novels**, **Rhythm Games** and **Roguelikes**. Some of my favorite
games at the moment:

- **DJMAX Respect V**
- **Risk of Rain 2**
- **Tetris Effect**

<p>
  <a href="https://steamcommunity.com/id/pixeldesu" class="not-prose inline-block rounded-md shadow-lg font-bold px-2 py-0.5 transition-all hover:translate-y-0.5 focus:translate-y-0.5 bg-zinc-800 text-white">
    {{ steamSVG({ classes: "inline fill-white h-[1.5rem] align-text-top w-auto me-1" }) }}
    Steam
  </a>
</p>

## Music

Music is a large part of my life and there are practically only very few moments
when I don't listen to something. My taste is quite varied, but I'm definitely
more into **Electronic** music, mostly of the faster variety. I have too many
favorite artists, so I'll list off some of my favorite (net)labels instead:

- **Hardcore TANO*C**
- **Diverse System**
- **Unitone**

<p>
  <a href="https://music.apple.com/profile/pixeldesu" class="not-prose inline-flex items-center rounded-md shadow-lg font-bold px-2 py-0.5 transition-all hover:translate-y-0.5 focus:translate-y-0.5 bg-red-500 text-white">
    {{ musicSVG({ classes: "inline-block fill-white h-[1.33rem] align-text-bottom w-auto me-1" }) }}
    <span>Apple Music</span>
  </a>

<a href="https://www.last.fm/user/pixelkatsu" class="not-prose inline-flex items-center rounded-md shadow-lg font-bold px-2 py-0.5 transition-all hover:translate-y-0.5 focus:translate-y-0.5 bg-red-600 text-white">
    {{ lastfmSVG({ classes: "inline-block fill-white h-[1.33rem] align-text-bottom w-auto me-2" }) }}
    <span>last.fm</span>
  </a>

<a href="https://bandcamp.com/pixeldesu" class="not-prose inline-flex items-center rounded-md shadow-lg font-bold px-2 py-0.5 transition-all hover:translate-y-0.5 focus:translate-y-0.5 bg-cyan-500 text-white">
    {{ bandcampSVG({ classes: "inline-block fill-white h-[1.33rem] align-text-bottom w-auto me-2" }) }}
    <span>Bandcamp</span>
  </a>
</p>

## Anime / Manga

You can see hints of japanese media across the previous sections already, so it's not too suprising that I also read manga and watch anime. I don't really have any favorite genre, I'll occassionally check out what people recommend and sometimes that sticks with me! Here's a small selection of favorites:

* **Neon Genesis Evangelion** (preferably the movies over the anime, though)
* **The Tatami Galaxy**
* **Mawaru Penguindrum**

<p>
  <a href="https://anilist.co/user/pixeldesu/" class="not-prose inline-flex items-center rounded-md shadow-lg font-bold px-2 py-0.5 transition-all hover:translate-y-0.5 focus:translate-y-0.5 bg-sky-700 text-white">
    {{ tvSVG({ classes: "inline-block fill-white h-[1.33rem] align-text-bottom w-auto me-2" }) }}
    <span>AniList</span>
  </a>
</p>