---
title: October 2024 Site Updates
description: |
  Let's look at all the changes on this site that happened in October!
tags:
  - personal
  - changelog
comments:
  fediverse: https://desu.social/@pixel/113398716828156084
  bluesky:
    url: https://bsky.app/profile/pixelde.su/post/3l7r6r372sm2a
    uri: at://did:plc:u75m626seejet3zy76fq7kiw/app.bsky.feed.post/3l7r6r372sm2a
templateEngine: [vto, md]
---

A lot happened on my site in October, let's talk about the biggest (and newest)
thing first: Character dialogue!

Inspired by inlined character dialogue I saw on
[Xe Iaso's site](https://xeiaso.net), I thought about doing the same, which
works out well as I have a bunch of [characters](/characters) that I can use for
this!

For this, I commissioned an initial set of expressions from
[Seledri/Simpelplant](https://seledri.netlify.app/) and they turned out amazing!

Here's a preview of the 4 expressions with some sample dialogue:

{{ comp Dialog { character: "poly", emotion: "happy" } }} This is an example of
Speex, an audio compression codec specifically tuned for the reproduction of
human speech. {{ /comp }}

{{ comp Dialog { character: "poly", emotion: "confused", inverse: true } }} Has
Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?
{{ /comp }}

{{ comp Dialog { character: "poly", emotion: "thinking" } }} why do they call it
oven when you of in the cold food of out hot eat the food? {{ /comp }}

{{ comp Dialog { character: "poly", emotion: "glare", inverse: true } }} Just
according to keikaku... <br/><i>(TL note: keikaku means plan)</i> {{ /comp }}

_More characters and more expressions will follow in the future!_

---

Next up, I added [openring](/misc/openring) to my website. It's a webring-like
concept, but works with showing the newest posts from RSS feeds selected by me
at the bottom of each of my blog posts. You can see it below this one too!

If you build your site with [Lume](https://lume.land) you can use openring using
the [lume_openring](https://github.com/pixeldesu/lume_openring) plugin that I
built!

_If you have a website with blog posts, add an RSS feed so I could maybe add it
here as well._

---

I added a [bookmarks](/bookmarks) page to my site! I'll use it to share links to
anything that I find worth remembering also worth sharing to the visitors of my
website!

---

In terms of connections to other sites and rings, I added a few new buttons and
joined some more webrings as well!

**New buttons:**

<img class="inline-block m-0" src="/assets/img/88x31/chronovore.png"/>
<img class="inline-block m-0" src="/assets/img/88x31/tempest.png"/>
<img class="inline-block m-0" src="/assets/img/88x31/sasuga.gif"/>
<img class="inline-block m-0" src="/assets/img/88x31/split.png"/>

**New webrings:**

- [No AI Webring](https://baccyflap.com/noai)
- [a11y-webring](https://a11y-webring.club/)

_If you want to share buttons, feel free to [contact me somewhere](/contact) and
send me yours!_

---

I wrote a lot of blog posts this month:

- [On Productivity Methods](/blog/on-productivity-methods/)
- [I miss Hacktoberfest](/blog/i-miss-hacktoberfest/)
- [Goodbye TweetDeck](/blog/goodbye-tweetdeck/)

_Not counting in this one I wrote over 4000 words in total in October!_

---

I also did a lot of technical changes on the site, some of the highlights:

- [Port all templates from Nunjucks to Vento](https://github.com/pixeldesu/pixelde.su/commit/10eb7589e68ea3a27b2d6dfcade7687457672a94)\
  I initially started off this website using the Nunjucks templating engine,
  because I was used to it from previous website versions and other static site
  generators. As I built more features on my site, I looked more into
  [Vento](https://vento.js.org) (also made by the Lume creator) which is quite
  similar to Nunjucks but better interoperable with JavaScript/TypeScript
  syntax.
- [Add fediverse:creator meta property to blog/talk pages](https://github.com/pixeldesu/pixelde.su/commit/696bba88a0e1a7e22571abeca02145f84dd02f97)
  <!-- deno-fmt-ignore-start -->
  {{ comp.Figure({
    image: "/assets/img/blog/site-update-october-2024/fediverse-creator.png",
    alt: "Screenshot of a Mastodon post card from my blog post 'Goodbye TweetDeck' showing a 'More from @pixel' section below it", 
    caption: "Example of the 'More from' section added using the <code>fediverse:creator</code> meta tag"
  }) }}
  <!-- deno-fmt-ignore-end -->
- [Randomly order various things on build](https://github.com/search?q=repo:pixeldesu/pixelde.su+Randomly+order&type=commits)\
  In order to further emphasize that I don't favor anything that I have on
  lists, I now randomly shuffle my friend list, buttons and the webring list on
  each build.
- [Inline SVGs using Lume plugin instead of manual inlining](https://github.com/pixeldesu/pixelde.su/commit/dec87522750c5abc1af38b78754d9fc03d142bf4)
- [Refactored template includes into Lume components](https://github.com/search?q=repo:pixeldesu/pixelde.su+Refactor+into+component&type=commits)

---

I think that's pretty much everything that happened on this blog in October. If
you are interested in the site on a technical level, you can always check out
the [source code over on GitHub](https://github.com/pixeldesu/pixelde.su)!
