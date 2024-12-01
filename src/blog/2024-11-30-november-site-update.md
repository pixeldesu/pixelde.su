---
title: November 2024 Site Updates
description: |
  Let's look at all the changes on this site that happened in November!
tags:
  - personal
  - changelog
comments:
  fediverse: https://desu.social/@pixel/113573733038883980
  bluesky: https://bsky.app/profile/pixelde.su/post/3lc6vtwx34k2z
templateEngine: [vto, md]
---

_A lot of stuff happened on this site in November. Here's a summary of all of
them!_

## Comments

The most significant change and feature I'm proud of is the comments on this
site. Some readers have already asked me how they could leave feedback on some
posts, which got me thinking. I saw others that employ a variety of different
options, which are:

- Webmentions
- GitHub-backed comment widgets (like [Giscus](https://giscus.app/))
- Comment widgets via self-hostable options (like
  [Comentario](https://comentario.app/))
- Fediverse-backed comments

I opted for the last option after I saw
[Wheelsbot's website](https://wheelsbot.dev/) using it (and later finding out
it's just based on
[Lume's Simple Blog template](https://github.com/lumeland/theme-simple-blog)). I
reimplemented the web components with my spin, creating several components
instead of just one to split the markup between them nicely.

Additionally to having Fediverse support, I also added Bluesky support with
another web component. This allows me to specify two post URLs, which are then
displayed below, highlighting the post you need to reply to to get your post
listed here.

Every URL fetched is cached for a bit, so repeated loading does not cause
endless requests to my instance/Bluesky.

Design and accessibility aren't all done yet, and I'll improve that in the
future, but otherwise, I'm really satisfied with this solution!

_Feel free to try out commenting below!_

## Updated Contact page

With Bluesky becoming more popular and more people moving off Twitter, I gave my
[contact page](/contact) a much-needed brush-up.

The updated design now features categories for all the social sites and contact
options. I also added the feature to "deprecate" certain things that still need
to be listed (just as some sort of verification that it's indeed me) but inform
users that they should use those to contact me as I'm elsewhere, preferably.

## Performance

I shrunk the general size of assets being fetched by 50 kilobytes!

I love optimizing my websites as much as possible, and considering I'm utilizing
Tailwind in a way it's not supposed to be used (with a bunch of `@apply` rules),
I was wondering why the CSS was over 100kB as it's just a bunch of utility
classes. Debugging it a bit, I noticed that applying the `prose` classes was
probably the worst thing I could do regarding components, as it duplicated the
entire Typography CSS for each element I applied it on. Removing these
applications has cut off most of the size.

After that massive improvement, I decided to move most of my site's design
elements into components and get rid of all `@apply` usages, or most of them.
This was a massive refactoring of the entire site, and in the end, I managed to
shave off 55 kilobytes from my `styles.css` file (down from the original 107
kilobytes).

There are still some elements left, but I don't think I'll be able to get below
100 kilobytes to join the [512KB Club](https://512kb.club/) Green Team.

I also added a [Kitchen Sink](/misc/kitchen-sink) page to better keep track of
what I have in my "design system".

---

I wrote quite a few blog posts in November:

- [Out of the Loop(s)](/blog/out-of-the-loops)
- [Make your own Personal Hub](/blog/make-your-own-personal-hub)
- [Recap of TYPO3 Community Sprint Q4 2024](/blog/typo3-cs-2024-q4-recap)

---

No new webrings this month, but some buttons have made their way:

<img class="inline-block m-0" src="/assets/img/88x31/toffee.gif"/>
<img class="inline-block m-0" src="/assets/img/88x31/willow.png"/>

If you want your button added to [my site](/friends), don't hesitate to get in
touch with me!

---

This is pretty much everything that happened on the site in November. There were
quite a few changes in code, with almost 90 commits. If you are interested in
how this site is built, feel free to check out the
[source code on GitHub](https://github.com/pixeldesu/pixelde.su)!
