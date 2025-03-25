---
title: One Year of This Site
description: |
  After several years I relaunched this website on March 25th, 2024. Let's talk a bit about that.
tags:
  - personal
templateEngine: [vto, md]
---

_[Exactly one year ago](https://desu.social/@pixel/112155482973824039), I
relaunched [pixelde.su](https://pixelde.su). Let's talk about it!_

## An Ode To Lume

[I also posted this on launch day](https://desu.social/@pixel/112155492135005017),
but once again, big thanks to [Xe Iaso](https://xeiaso.net/) for responding to
my call about static site generators back when I asked about what people build
their sites with. I checked out [Lume](https://lume.land) and instantly fell in
love.

I built my previous sites with [Jekyll](https://jekyllrb.com/) and
[Eleventy](https://www.11ty.dev/), but my need for frontend tooling has
increased, especially in recent years. Back then, the frontend stuff was always
something _additional_ to the built site. So I had to set up my tooling (using
Gulp or something else) and then run a watcher that built my site and assets on
a change.

With motivation and focus sometimes significantly waning, getting stuck in that
process quite often meant the end of the site-building endeavor before I started
building the actual site content.

**Lume** makes that incredibly easy because the plugin system allows you to add
preprocessors for a bunch of different formats and languages. Those files are
processed as soon as they are found on the page. For example, if you link a JS
asset in your body, the minification plugin processes it — no configuration
needed.

This made building the site effortless. I set up plugins for the file formats I
wanted (Nunjucks and Markdown in the beginning, now Vento and Markdown) and then
wrote documents, building layouts and pages.

I don't have an exact starting day, but looking at my posts
[it must have been around the 25th or 26th of February](https://desu.social/@pixel/111995037720904396).
So, with work time, etc., included, I built the initial version of the site in
about a month!

Since then, I have gone all-out on Lume, built plugins, used all kinds of
available features, and just had a blast. Whenever I had issues,
[Óscar](https://oscarotero.com/) responded quickly on GitHub, Mastodon, or
Discord. Sometimes even go as far as releasing a bugfix update the next day.

{{ comp Dialog { character: "poly", emotion: "thinking" } }} Of course it was
the next day when you report bugs in the middle of the night... {{ /comp }}

I highly recommend Lume if you're building your next website. If you're looking
for inspiration, feel free to look at
[my site's source code on GitHub](https://github.com/pixeldesu/pixelde.su).

## My Experience with Tailwind

People with a keen eye might have already noticed, but I built this site
entirely using [Tailwind CSS](https://tailwindcss.com), even though I've been a
loud opponent of utility-based CSS frameworks in the past...and I still kinda am
to this day. **Why did I do it then?**

I wanted to test it with a real use case. Previously, I only dabbled with
Tailwind in a project that was in the prototyping stage, and I felt like that
wasn't really a fair chance I gave the framework.

As Lume offered a plugin integration with Tailwind that directly sets up CSS
purging and all the other stuff out of the box, I was even more inclined to give
it a shot. My initial impressions were positive because I was able to build the
layout of my website incredibly quickly.

The claim _"Rapidly build modern websites without ever leaving your HTML."_
definitely holds true.

The thing is: _**Tailwind is not built for component-free static sites.**_

The benefit of never leaving your HTML comes with the drawback that you write
inline CSS as classes and bloat up your HTML instead. Technically, this results
in two bloated parts: the generated CSS and the huge markup of your HTML files.
Especially in later stages, this becomes a massive pain.

**Have you noticed that the spacing between elements is off or too small?** It's
time to search for and replace the old class and adjust it — and break other
things in the process.

If you don't use components and keep track of your colors somehow, you also run
into the issue with the color system: You might use `bg-gray-100` most of the
time, and if you come back to the site after a while and add something new, you
use `bg-gray-200` for some reason. I adjusted my colors and unified them only
after I found those inconsistencies after building a
[Kitchen Sink](/misc/kitchen-sink) for this website.

One way to get rid of all those CSS classes is to use `@apply`, which isn't
actually recommended by Tailwind. However, I went ahead and used that,
componentized my CSS, and was happy. Then I looked at my site's performance and
wondered how it came to be that my CSS was well over 100 kilobytes in size. It
turns out that using `@apply` massively blows up generated CSS.

I then utilized [Lume Components](https://lume.land/docs/core/components/),
basically doing what Tailwind was built for: Instead of using `@apply` in CSS, I
put all the classes in their respective components. With all the rules removed,
my CSS shrunk down to about 60 kilobytes.

That said: The defaults, colors, spacing, and other stylistic choices that
Tailwind offers are great. If I don't use Tailwind for my next project (I'll
only do that if it makes sense in context), I'll at least ~~steal~~ take
inspiration from the design system.

## Celebrating the Small and Personal Web

With my new website, even though it didn't even launch with a blog in the
beginning, I really started to embrace small/indie web and
[POSSE](https://indieweb.org/POSSE) (**P**ublish (on your) **O**wn **S**ite,
**S**yndicate **E**lsewhere).

This site now houses all my publications in writing and speaking, links to
relevant resources, and includes a bunch of gimmicks from the old web.

While I might have been browsing the web at that time already, I didn't really
live to tell the tale of webrings and guestbooks back in the day, but nowadays I
can, and I do. I saw all my friends being part of various webrings, which became
one of the first features I added to my website. The latest feature celebrating
that era is a guestbook that even works albeit my website being fully static
(the magic being Netlify Forms and a script that fetches form submissions ahead
of build time).

Especially in this age of crumbling large social media sites, it's time to take
the web back and make it fun and personal again!

## Beating the Perfectionist Mindset

Managing to just ship something quickly with Lume also got me out of my
perfectionist mindset.

I launched my website very well, aware that things weren't perfect. I remember
that the start page was incredibly barren, and I wasn't satisfied with it, but I
was with the rest. And so I just winged it. I gathered all the feedback from my
friends and how much people loved the design, which later pushed me to rework
and improve the other parts.

A personal website doesn't need to be perfect and never will be. It'll grow with
you, and you can tinker with it, break it, and improve it all the time!

{{ comp Dialog { character: "poly", emotion: "glare" } }} And if you use proper
version control, you can even roll back changes easily! {{ /comp }}

---

So that's the first year of the _new_ [pixelde.su](https://pixelde.su)! Thank
you to everyone who reads this post, follows the development of this site, reads
the articles, and leaves me feedback of any kind. It's much appreciated!

**PS:** If you want to know how previous iterations of my website looked, you
can check out the [History](/misc/history) page!
