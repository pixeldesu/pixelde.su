---
title: Goodbye TweetDeck
description: |
  With TweetDeck long gone and me shutting down my TweetDeck hacking community, it's finally time to lose some words about
  all the things I did for it.
tags:
  - reverse-engineering
  - twitter
  - open-source
templateEngine: [vto, md]
---

_I'm a little bit late, aren't I?_

Yesterday, I announced the shutdown of my TweetDeck hacking community/Discord
server, DeckHack. I had already wanted to write about all my TweetDeck
shenanigans before (when BetterTweetDeck announced its discontinuation), but I
didn't get to it. So I'll take this chance now.

Unbeknownst to my current follower base, my contributions to BetterTweetDeck
weren't the first things I did with TweetDeck. To go back in time, I used
TweetDeck way back when it was an Adobe AIR application and it even had an
Android app.

Fast-forward a few years and after TweetDeck got acquired by Twitter it got
turned into a web application, the one that most of us know and loved and
probably spent most of our time in. Around that time I got into web development
and at some point, I thought to myself: _"Damn, TweetDeck is kinda ugly."_

I quickly found my way around Stylus (and whatever its precursor at the time was
called) and managed to whip up a custom style for TweetDeck, naming it
**Technicolour** (for no real reason...naming is hard).

<!-- deno-fmt-ignore-start -->
{{ comp.Figure({
  url: "/assets/img/blog/tweetdeck/technicolour.png",
  image: "/assets/img/blog/tweetdeck/technicolour.png",
  alt: "Screenshot of TweetDeck with the Technicolour user style being applied, changing the font and colors and spacing, a prominent change being colored column headers.", 
  caption: "The Technicolour user style applied to TweetDeck (ca. 2014)"
}) }}
<!-- deno-fmt-ignore-end -->

Visible in that screenshot is one feature of my user style that I would later
contribute to BetterTweetDeck.

At some point in 2016 I learned about [BetterTweetDeck](https://better.tw), and
being deep in the open-source contribution game, I quickly decided to add
features. I stopped maintaining my style and thus I brought over some of the
features I built. The main one is
[collapsed read direct messages](https://github.com/eramdam/BetterTweetDeck/pull/105).

This followed up with
[multiple](https://github.com/eramdam/BetterTweetDeck/pull/107)
[documentation](https://github.com/eramdam/BetterTweetDeck/pull/137)
contributions, making it easier for others to learn how to contribute to
BetterTweetDeck.

## DeckHack

We're approaching the end of March 2017 and I'm full on in the TweetDeck fever.
I noticed that BetterTweetDeck wasn't the only thing messing about with
TweetDeck, and to further everyone's knowledge and mess on things together
collaboratively, I decided to start the Discord server/community "DeckHack". I
invited everyone I could find who built TweetDeck extensions and the like.
Prominent members were:

- [Damien](https://damien.zone), creator of [BetterTweetDeck](https://better.tw)
- [chylex](https://github.com/chylex), creator of
  [TweetDuck](https://tweetduck.chylex.com/)
- [Ben](https://github.com/nurodev), who built some ecosystem stuff and helped
  with his knowledge with JS
- [twilight sparkle](https://github.com/twilight-sparkle-irl), breaker of all
  things JavaScript

Later on, the developers of [Tweeten](https://tweetenapp.com/) and
[ModernDeck](https://github.com/dangeredwolf/ModernDeck) also joined the group.

We didn't have specific goals in taking apart TweetDeck, we just did things for
fun and documented them on the way. One of the remains of that is the
[discoveries](https://deckhack.gitbooks.io/discoveries/content/) documentation,
which contains a large chunk of documentation around the most used programmatic
features for TweetDeck extension developers.

Initially, we also had a Discord bot/website that notified us of new TweetDeck
releases, as 2017/2018 was a timeframe of active development on TweetDeck (after
it was laying dormant between 2014 and 2017).

<!-- deno-fmt-ignore-start -->
{{ comp.Figure({
  url: "/assets/img/blog/tweetdeck/deckcheck.png",
  image: "/assets/img/blog/tweetdeck/deckcheck.png",
  alt: "Screenshot of a website export of deckcheck, a tool that notified us on TweetDeck changes listing a diff view of important values that changed across versions.", 
  caption: "A deckcheck report for a new version of TweetDeck"
}) }}
<!-- deno-fmt-ignore-end -->

_This bot/script also saved all assets from the new versions onto a server, and
after TweetDeck was closed,
[I publicly released all those assets on GitHub](https://github.com/DeckHack/archives)._

## Locking myself out of TweetDeck

One of the first DeckHack adventures after messing around with the internal APIs
and functions we unearthed by documenting all the code was...me locking myself
out of TweetDeck.

I found the code to create columns programmatically, and while looking at the
list of available column types I found the suspiciously named `DATAMINR` column
type. This sounded intriguing for 2017 Andy, so I created a column of that type.
I promptly received an error suggesting that some API keys were missing in my
account, which is true as I was no business user/Dataminr affiliate.

I shrugged off this error at first, but then came a point where I had to reload
TweetDeck.

Suddenly, the login screen appears. And in TweetDeck terms that meant one of
three things:

- Your session expired and you need to log in again.
- The Twitter API is down and TweetDeck can't connect to it.
- A faulty update broke TweetDeck.

I unlocked the magical 4th bullet point in this case:

- Pushing invalid account state by creating a column type I don't have access
  to, causing a JS error every time TweetDeck tries to load my columns from the
  backend.

I don't remember if I was laughing out of surprise or shock then, but I quickly
realized that I could not get back in by myself. Contacting Twitter Support
would be futile too, because the first level would not answer such a technical
query.

Thinking for a bit I then remembered that the TweetDeck Twitter account had a
list containing all staff. I went through the list and searched for the first
occurrence of a staff member with a personal website. After finding someone that
also luckily had a personal email I contacted them and they forwarded my
inquiry, which got me my account state reset.

And I was back in action! _(and more careful with things that would alter my
backend state)_

## Deciders and Experiment Buckets

I mentioned above that 2017-2018 was quite an active development period for
TweetDeck. That also included many changes that we and the wide range of
TweetDeck users disliked. So, what do you do? Of course, you try to find a way
to reverse them.

The first way that comes to mind would be hard overrides to replicate the old
behavior again. With all the rummaging around in TweetDeck code, we found two
other options that would aid us here: **A/B test deciders and experiment
buckets.**

Knowing these would be temporary only, we still used them in our extensions to
give users the option to revert to the old behaviors, one example being
[the revert to the old search](https://github.com/eramdam/BetterTweetDeck/pull/144).

If you want to read more on these topics, you can read our documentation on
[Deciders](https://deckhack.gitbooks.io/discoveries/content/docs/deciders.html)
and
[Experiments](https://deckhack.gitbooks.io/discoveries/content/docs/experiments.html).

## Advanced Mute Engine

Delving more and more into TweetDecks internals and UI code, it was time for a
big one: I always felt that the muting options were straightforward compared to
apps like [Tweetbot](https://tapbots.com/tweetbot/) with Regular Expression
support.

I quickly found the methods that did the global filtering and the UI code for
the dropdown that rendered the existing muting options and I built a system to
extend both modularly, the **Advanced Mute Engine**.

AME added the following muting options to TweetDeck:

- Retweets from Users (yes, this was not natively supported in TweetDeck)
- Keywords from Users
- Regular Expressions
- Quotes (this should have been a feature in all other apps)
- Biography content
- Default avatars
- Follower count less than x

With the system being modular
[I also included documentation](https://github.com/eramdam/BetterTweetDeck/blob/main/docs/filters.md)
on how to define own filters.

You can check the PR that added this feature
[here](https://github.com/eramdam/BetterTweetDeck/pull/286).

## TweetDeck Insider

Fast forward to the end of 2017 and Damien and I notice someone suspicious in
our Discord join logs: **TweetDeckInsider**. We quickly shrug it off, however,
since anyone could name themselves that.

A day later and looking again, the account is not named TweetDeckInsider
anymore, but **andrs**. That's more specific. A quick search on Twitter reveals:

**That's the Tech Lead of TweetDeck.**

Whew. That was a surprise to all of us. Our semi-public shenanigans attracted
the attention of TweetDeck staff, and now the lead developer has joined our
"hacking" Discord server. That was crazy.

Andreas then revealed that the team was impressed with our work and wanted to
collaborate, using him as an official bridge between the community and the
developers. So, when TweetDeck adjusts something deeply structurally, we can
prepare our extensions for that, and when we find some big security issue or
other problem, we would have direct contact as well.

While Twitter was already a mixed bag of a company, that at least showed us that
the TweetDeck developers were dedicated to their project, and we were super
thankful for the opportunity.

## webcrack and moduleRaid

[webcrack](https://gist.github.com/twilight-sparkle-irl/cb63762000e606e50690911cac1bcead)
is a script that our resident breaker of things **twi** built. It's a simple
injection into Webpack chunk bundles that allows module information to be
retrieved in user scripts/extensions.

For BetterTweetDeck, this was, for example, used to get the site's jQuery
instance or use the notification system that TweetDeck built for themselves.

With Webpack reaching different milestones and versions being swapped at random,
webcrack wasn't always up to date anymore, and that's when I decided to step in.
I built [moduleRaid](https://github.com/pixeldesu/moduleRaid) which is webcrack
on steroids. It supports all known injection methods for Webpack modules and is
additionally available as an NPM package, which makes distribution and usage
with other projects in the ecosystem easier.

## Almost becoming a TweetDeck Insider

**andrs** was still in our Discord server, acting as a bridge between TweetDeck
and DeckHack, when he started approaching us in 2018, talking about a big
refactoring project being planned for TweetDeck and the team searching for new
members. With us being in the deep end, we were offered recommendations through
him, skipping the cover letter step in the application process.

After some initial hesitation, I decided to go for this one-of-a-kind chance and
took the recommendation, applying as a **Frontend Engineer** at TweetDeck.

The timing couldn't have been worse, however: Following the initial conversation
with Twitter's in-house recruiting, things seemed to go well. Still, responses
took multiple weeks (which I thought might be normal for such a large company as
Twitter). In mid-July, I suddenly got put on hold because of a large
restructuring at Twitter, which involved the entire staff being flown to SF for
an internal conference.

Once that concluded, my process got picked up again and I had to re-apply
because I finished my apprenticeship around that time, which changed my CV. I
finally advanced in the steps and took the interview with the TweetDeck Manager,
which went well and I got a _"We'll set up the coding challenge ASAP!"_.

Fast-forward two weeks, and I sent my recruiter another email requesting a
status update. I got an almost instant reply which is kind of unusual, but it
wasn't from who I expected it. Instead of my recruiter, I got an email from
**the Google Mailer daemon** notifying me that the inbox I tried to reach was
shut down.

_"What's happening here?"_, I asked myself. I already had a hunch though.
Thankfully every Twitter employee has their Twitter account in their mail
signature, so I go on the profile of my recruiter and see the final tweet
**#LoveWhereYouWorked** which was an adjusted variant of Twitter's work mantra
**#LoveWhereYouWork**.

So, my recruiter either left the company or got fired (I assume it's the latter)
and didn't forward me to someone else to continue the process. Having contacted
multiple Twitter staff I had another email to contact and was promptly
forwarded. The next day I had an email in my inbox _"There are no open vacancies
left at TweetDeck."_.

This was in September, and after 6 months of failing to hire a new team member,
TweetDeck lost its headcount.

I talked with **andrs** and found out that they internally also pestered the
recruiter to get on with my application because they wanted me, but the
recruiter was not feeling it, I guess.

It would have been a huge opportunity, but looking at Twitter now, I also dodged
**a massive bullet** with this one.

## TweetDeck Preview

Things have been mostly silent between 2018 and 2021, with development around
TweetDeck slowing down, at least publicly facing. Then suddenly, in July 2021 a
tweet by TweetDeck drops,
[announcing TweetDeck Preview](https://twitter.com/TweetDeck/status/1417499555122323457),
the next version of TweetDeck.

We were still in contact with the TweetDeck team, and as the resident "messing
around and finding out" team, we got early access to the Preview. Funnily
enough, I think no one of us used the official method we got; we all found our
way in programmatically first.

The new TweetDeck was built using React (Native), just like regular Twitter, and
that's when it already dawned upon us that this would be the beginning of the
end. We spent quite a lot of time figuring out how much data we could
potentially get out of React to make adjustments with our extensions, but in the
end, we deemed it not worth it.

With most people not being super satisfied with TweetDeck Preview this wasn't
much of a problem though as Legacy TweetDeck was still running.

## XPro is sealing the deal

Two years later, we're already deep in Musk's reign over the platform. The API
got paid and a lot of other things have happened. Then, his sights turned to
TweetDeck, and he decided to replace Legacy TweetDeck with TweetDeck Preview
entirely, renaming the product to **XPro**.

It then happened: At the end of July 2023, things were switched over, and while
we could still go back to Legacy for a while, it was completely disabled by
mid-August. Some extensions still use old and new API endpoints to keep Legacy
TweetDeck alive, but that'd be an ongoing cat-and-mouse game.

This was when the extension developers threw the towel and TweetDeck was laid to
rest.

---

DeckHack was still around, but mostly as a talking space for us to rant and
banter about Musk shenanigans, and even that stopped at some point. That's why I
announced the shutdown of the Discord community on October 31st, 2024, ending
the 7-year run.

Thanks to everyone who participated in the journey and joined us. It was a fun
and exciting time throughout.

TweetDeck gave us more than just a good Twitter experience through this, and I'm
thankful for that.

Closing this the same way I ended my shutdown announcement for DeckHack:

_A big **fuck you** to Elon Musk!_

---

Also check out Damien's post-mortem series on BetterTweetDeck:

- [Better TweetDeck, a Post-Mortem, Part 1: frequently asked questions](https://damien.zone/bettertweetdeck-post-mortem-part-1-faq/)
- [Better TweetDeck, a Post-Mortem, Part 2: A written history and credits](https://damien.zone/bettertweetdeck-post-mortem-part-2/)
