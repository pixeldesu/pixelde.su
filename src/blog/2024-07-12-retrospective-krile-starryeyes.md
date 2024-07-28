---
url: ./retrospective-krile-starryeyes/
title: A retrospective on the coolest Twitter client you (probably) didn't know
description: |
  A retrospective on the japanese Twitter client Krile StarryEyes by karno, why it was so cool
  and what my personal involvement with it was back 10 years ago.
date: 2024-07-12
tags:
  - twitter
---

People know I've been an avid Twitter user back in the good old days (_good old days_ mostly being pre-2015), and after Twitter crushed a lot of desktop clients with the introduction of the APIv1.1 and its abhorrent 100,000 token limit, I was always on the search for a new client that filled the void in terms of nice UI and good usability.

I actually don't even remember anymore how I stumbled upon it, but in 2014 my prayers were listened to, and I found it: 

## **Krile StarryEyes**

### What is it and who made it?

Krile StarryEyes was a desktop Twitter client, made by [@karno](https://x.com/@karno) (also [@karno@mstdn.maud.io](https://mstdn.maud.io/@karno)). It was written in C# utilizing .NET Framework and featured a Metro-style interface.

<a href="/assets/img/blog/krile-retro/ui.png" class="no-underline" target="_blank">
  <figure class="m-0">
    <img class="rounded-md m-auto" src="/assets/img/blog/krile-retro/ui-thumb.png" alt="Screenshot of the Krile StarryEyes interface, showing a multi-column layout in a Metro-style application"/>
    <figcaption class="italic text-center font-normal">The Krile StarryEyes user interface, click it for a full-size screenshot</figcaption>
  </figure>
</a>

The UI instantly stuck with me, not just because of its simplicity, but because it also reminded me a lot of my favorite desktop Twitter client from before that: [MetroTwit](https://metrotwit.com/) (RIP, also succumbed to the token limit).

<figure class="m-0">
    <img class="rounded-md" src="/assets/img/blog/krile-retro/metrotwit-ui.gif" alt="Screenshot of the MetroTwit interface, showing a multi-column layout in a Metro-style application, with a sidebar and the composer at the bottom"/>
    <figcaption class="italic text-center font-normal">The MetroTwit user interface</figcaption>
</figure>

Just like MetroTwit, Krile StaryEyes supported the Twitter streaming API, which was just perfect for power users. Additionally, Krile also was fully open-source, so contributions could be made easily. As an extra feat, as far as I'm aware, even the used Twitter API library was written by Karno themselves.

Aside of the simple (but effective) UI, Krile had a feature that I never saw in another social media client...

### Krile Query (KQL)

Krile StarryEyes featured its own query language called **Krile Query** and you could use it to modify what the columns in the app showed you. A usability nightmare for non-technical users, but after reading a bit into it, you could do _anything_ you wanted with it.

Want to filter down all the posts in your timeline for a specific `keyword`? That's possible!

```
WHERE text CONTAINS "keyword"
```

A user column for `@pixeldesu`?

```
FROM user:"pixeldesu" WHERE ()
```

Or, even multiple users in a single column, like `@karno` and `@pixeldesu`

```
FROM user:"karno", "pixeldesu" WHERE ()
```

You get the gist. Instead of being limited to a selection of columns and subsequent filters inside them, Krile allowed massive customizability in terms of actual column content, and I have never seen that anywhere else, not even replicated after the fact.

This is also where I started to get a little bit involved with Krile, because I noticed its capabilities after playing around with the UI a bit. Not being able to read Japanese in a fully Japanese client was a bit of trial and error, where I at some point stumbled upon the query editing interface.

After I found it, I decided to write up [a small example guide](https://github.com/karno/StarryEyes/wiki/KQ_Basic_Examples-%5BEnglish%5D/54230c27cafa18424f2e89ebcf6ff6e22059c2e4) in the Krile wiki on GitHub.

Karno noticed my guide, and shortly afterwards added localization support to Krile, including an English translation. It was a bit rough around the edges, but it being open source, i was able to help out here and fix some of the strings with Pull Requests.

### The End...?

Krile also had support for custom API keys, which would become relevant for it quite soon, because in 2015 it also was hit by the token limit, preventing anyone to log in using the default shipped app keys.

At the very end of 2017, Krile [was announced to end development](https://x.com/kriletan/status/947302990066495488) sometimes in 2018. [Krile stopped serving binary releases](https://x.com/kriletan/status/1028986589815300096) shortly after the shutdown of the Streaming API (UserStreams) on August 16th, 2018. 

This marked the end of 9 years of development history on Krile.

## A look back at Krile's history

Krile StarryEyes wasn't the first version of Krile! It's actually the third, which was released in 2013, and there having been two major releases beforehand.

### Krile

I wasn't able to find much about the first version of Krile, just that it was teased on Karno's website as far back as 2008!

<figure class="m-0">
    <img class="rounded-md m-auto" src="/assets/img/blog/krile-retro/krile_small.png" alt="Screenshot of Krile, in a Windows Forms-ish look"/>
    <figcaption class="italic text-center font-normal">Tiny teaser screenshot of Krile's user interface, shown on Karno's website in 2008</figcaption>
</figure>

### Krile 2 (Mystique)

Krile 2, codenamed Mystique, was released sometime between 2010/2011. According to documents on the website it already included features like Krile Query.

<figure class="m-0">
    <img class="rounded-md m-auto" src="/assets/img/blog/krile-retro/krile_whole_s.png" alt="Screenshot of Krile Mystique, the second version of Krile, in a Windows Forms-ish look"/>
    <figcaption class="italic text-center font-normal">The Krile Mystique user interface</figcaption>
</figure>

Here's an [archived version of the Krile website from 2013](http://krile.starwing.net/index.html) and an [archived copy of the GitHub repository from 2015](https://web.archive.org/web/20130414030039/https://github.com/karno/Mystique).

### Krile for Windows Phone

With Karno being an avid developer on the Windows platform, looking into Windows Phone was a given! I don't know too many details about this version of Krile, but [the web archive has its website preserved quite well](https://web.archive.org/web/20131026022503/http://krile.starwing.net/wp/)!

<figure class="m-0">
    <img class="rounded-md m-auto" src="/assets/img/blog/krile-retro/krile_wp.png" width="240" alt="Screenshot of Krile for Windows Phone, a Twitter client in a relatively WP-ish look"/>
    <figcaption class="italic text-center font-normal">Screenshot of the home timeline in Krile for Windows Phone</figcaption>
</figure>

## Where are they now, and what's next?

With the entire debacle around the Twitter API turning worse and worse, Karno left Twitter client development behind and focused on other things. A lot of experimentation with other languages like Rust etc. and building a bunch of experiments over the years. One that I want to highlight is [celestian.io](https://celestian.io/), which is one of their homepages and features a full starscape including constellations, rendered with ThreeJS and react-three-fiber.

Karno also has been playing around with VRChat a lot, bringing the beloved mascot Krile-tan into the third dimension!

<a href="https://mstdn.maud.io/@karno/112767102039696113" class="no-underline" target="_blank">
  <figure class="m-0">
    <img class="rounded-md m-auto" src="/assets/img/blog/krile-retro/kriletan_vr.png" width="360" alt="Screenshot of VRChat, showing Krile-tan, Krile's mascot, with teal hair, wearing a kimono in a forest"/>
    <figcaption class="italic text-center font-normal">Krile-tan in VRChat!</figcaption>
  </figure>
</a>

With Karno using the fediverse quite a bit, and being present on both a Mastodon instance and Misskey, might there be the possibility of Krile for the Fediverse at some point? We will only know once it happens!

Until then, thank you Karno for making Twitter browsing a joy with Krile over the years! 💚