---
title: Recap of TYPO3 Surfcamp 2024
description: |
  I participated in the very first TYPO3 Surfcamp, hosted in Fuerteventura. I'll talk a bit about what it is, my expectations, and what went down on that one Canary Island.
date: 2024-04-15
tags:
  - event-recap
  - typo3
---

I participated in the very first [TYPO3 Surfcamp](https://surfcamp.typo3.com/), hosted in Fuerteventura. I'll talk a bit about what it is, my expectations, and what went down on that one Canary Island.

## What is the TYPO3 Surfcamp?

The TYPO3 Surfcamp is a new format that was envisioned by some members of the TYPO3 core team in 2023. Its main goal was to introduce young interested developers/designers/marketers to the TYPO3 community, be that through contribution or making connections.

The main set of tasks for this endeavor was building a set of websites in teams that showcase the newly introduced [Site Sets](https://docs.typo3.org/c/typo3/cms-core/main/en-us//Changelog/13.1/Feature-103437-IntroduceSiteSets.html) feature. The feature was _so new_ in fact, that it was merged on Sunday on-location, in front of the participants.

Of course, the Surfcamp isn't just work, we were situated in the sports hotel [La Pared by Playitas](https://www.laparedbyplayitas.net/), giving us a nice and relaxing environment. 

For the people who signed up for it, there were 3 days of surf lessons with the team of [Nalusurf](https://nalusurf.de/).

## My expectations

Since I am already a Core Developer, and hence close to the organizers of the event, I was kinda spoiled on the task ahead of time. I knew we were going to build websites, but not about what topics.

Being in the agency and website-building business for almost 10 years now I know that websites don't appear out of thin air. Even with my close-knit team at work, building something with only a basic topic as a goal would probably span over a week already. 

Combining that with the fact that I didn't know anyone I'd be in a team with, makes the entire thing even harder.

I didn't think we'd manage to build a website in the given timeframe, but I was proven otherwise. _More on that later,  however!_

## Day 0 - Saturday: Munich to Fuerteventura

<figure class="m-0">
  <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/flight-munich.jpg" alt="Picture taken out of a plane window, showing a green landscape down below"/>
  <figcaption class="italic text-center font-normal">Picture out the plane window from my flight to Fuerteventura</figcaption>
</figure>

The trip started with me already meeting a few other attendees of the Surfcamp at Munich Airport. With about an hour of delay (and voice comm complaints from Condor flight staff), we were on our way to Fuerteventura at 1:15 PM.

This was my first longer flight on my own, and also my first flight with Condor, so having the flight turn into a sales show midway was a new sight for me.

Aside from the initial delay, everything went smoothly and we landed in Fuerteventura exactly at 5 PM after a 4-and-a-half-hour flight. _(timezones, you know?)_

Flights from the other participants also landed at about the same time, so we already met shortly at the airport, before we split into groups to drive to the hotel.

Driving (or rather, being driven) over Fuerteventura for the first time was _an experience_ because...it's empty. Sand and rocks as far as the eye can see, are quite the contrast to the lush forests of Bavaria.

After an hour of driving, we arrived at the hotel and after getting into a more appropriate change of clothes (from cold Munich to sunny Fuerteventura), it was time for dinner.

The rest of the day was free to us and mostly was spent chilling around the pool, exploring the area, and getting to know the other participants.

## Day 1 - Sunday: Let's get started

<figure class="m-0">
  <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/fuerteventura-poolside-day.jpg" alt="A orange-red-ish hotel building in front of a bright blue hotel pool"/>
  <figcaption class="italic text-center font-normal">The pool area of the La Pared by Playitas sports hotel</figcaption>
</figure>

After breakfast, the day started with us getting an introduction to what would happen over the week. We also got our first look into what would await us at the surf lessons in the coming days. We were put into our respective teams and together with our mentors, we started working on our projects.

The task of our team was building a website for a local football/sports club, FC Bigfoot (anyone remember [_FC Bigfeet_](https://docs.typo3.org/typo3cms/extensions/doc_tut_quickstart_de/stable/Manual/Index.html)?)

The members of our team were:
* Oliver (mentor)
* Myrna (project management)
* Kostandina (design/frontend)
* Lisa (backend)
* George (backend)
* Andreas (backend/frontend)

Our first day consisted of researching what a football club/sports association website looks like, and what content it has, doesn't have and could potentially need.

At the end of each day, each team also had to present their results at 6 PM in front of everyone else.

## Day 2 - Monday: Surfing begins

At 9:30 in the morning, we met with our surf instructors close to our hotel and were taken to the east side of the island, because the beach of La Pared didn't have proper conditions for surfing beginners. After a quick 20-minute drive we arrived at a coast with smaller waves, repeated the initial instructions from the day before, and then went right into the water.

The first day consisted of us sliding onto our boards, taking waves, and paddling. Sounds simple enough, but it was quite the challenge, not having that done before. Also, me being unathletic caught back up to me here.

We finished up about one and a half hours later, returning to the hotel just in time to freshen up a bit and then heading for lunch.

After lunch, our team assembled again. This time with an additional member, as Lisa only arrived that day. Using our research from the prior day, we also created more issues in our bug tracker and prioritized them. We also set up the base site package and created our site set. 

The day ended with a Mario Kart tournament, which consisted of a ladder of 2vs2 games being played against each other. I ended up placing second in the tournament after being a bit unlucky with my item drops in the final round on MK8 Rainbow Road. Regardless, it was a fun time and I enjoyed it a lot!

## Day 3 - Tuesday: Content elements galore

<figure class="m-0">
  <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/finca-amicab-sunset.jpg" alt="A picture of the sun setting on the Fuerteventura coast"/>
  <figcaption class="italic text-center font-normal">Sunset from the Finca AMICAB</figcaption>
</figure>

The day started with another surfing lesson at the usual place. This time we also had quite windy conditions on the east side of the island, creating massive waves. That was quite tiring, but in turn also made some other things easier (instead of me having to put pressure on the board, the board put pressure on me).

Later that day, continuing with work, we started laying the foundations of the FC Bigfoot website. Wireframes and designs were made, while others worked on configuring the defined content elements from our backlog.

In the evening, as a social event, we visited [AMICAB](https://amicab.de/) on the island. They're an association on the island taking care of abandoned animals, like horses that were used in film productions, and more. To collect more funding, the owner of the premises renovated some old ruins into a modern building. TYPO3 donated some money to _rent_ the building for the evening, and we had a small party over there.

## Day 4 - Wednesday: Final surfing day

After the tumultuous waves of the day before, this day was quite calm. _What wasn't calm were my muscles_, hurting from the previous days of usage. 

This was the end of the regular surf lessons, and people that wanted to keep on going, were free to do so if they wanted. Even though I'm not super athletic, I was glad that I decided to sign up for the surfing lessons, because I still had fun in the end!

Project-wise, on Wednesday we finished our frontend tooling and the initial set of content elements. Myrna, our project manager, was panicking a bit, which is understandable without any visual progress. After all, only two days were remaining to finish the MVP. But I threw in some words of reassurance since we prepared all the backend work now to work on the frontend.

That day's evening event was a game of Jeopardy between all the different project teams. It just had a twist, with some categories being about TYPO3 or containing TYPO3-related questions. A lot of interesting trivia was learned, and some of the tricky questions were able to confuse everyone!

## Day 5 - Thursday: Suddenly, frontend!

<figure class="m-0">
  <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/fuerteventura-poolside-night.jpg" alt="Picture of a hotel pool at night that is illuminated by green lights"/>
  <figcaption class="italic text-center font-normal">The pool area of the La Pared by Playitas sport hotel, at night</figcaption>
</figure>

The first day without surfing, and instead of heading out there in the morning, the team assembled at 9:30 and we went right ahead with working.

With everything being prepared, it now was our time to work on the frontend implementation of the designs. And, as I predicted it on the day before, was going super fast. The page layout and a large set of content elements for the main page were done by the end of the day. That made our project manager quite happy!

Thursday's evening activity was organized by the camp participants, not the mentors. It was decided to go to the beach of La Pared.

I, however, skipped out on that and decided to help Andreas (_not me_, [the other Andreas](https://twitter.com/_kienandreas)) with some funky JavaScript problems in the TYPO3 project toolchain. (it's always JavaScript...)

## Day 6 - Friday: The _final_ stretch

Dawn of the final day. At 6 PM this day, we would hold our final presentation of the website, showing off whatever we did over the week.

We prioritized our tasks for the day and went right ahead finishing the final things and fixing every bug that we came across. We were this close, the final deployment happened one minute before our presentation.

<a href="/assets/img/blog/surfcamp-recap/team4-fullpage.png" class="no-underline" target="_blank">
  <figure class="m-0">
    <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/team4-thumbnail.png" alt="Picture of the FC Bigfoot website, showcasing a large header element and some game scores below it"/>
    <figcaption class="italic text-center font-normal">The final FC Bigfoot website from Friday, click it for a full-page screenshot</figcaption>
  </figure>
</a>

We didn't manage to complete the website entirely, but we're still quite happy with the progress we made over the week. Here's a summary of the features the site has:

* Responsive, sleek layout
* An eye-catching hero element
* A game results listing that can pull JSON data from an external endpoint, displaying either a slider (on the start page) or a table listing. _For demo purposes, no actual endpoint is used, but a static JSON file._
* Placeholders for news and event teasers. (once `news` is available for v13 we will implement that)
* A sponsor listing content element
* A call-to-action element
* Working indexed search
* Contact forms with a custom design

This might not sound like much, but in addition to being urged to use the new Site Sets, we also had some restrictions imposed on the projects. One of them was `fluid_styled_content` being completely forbidden to be used. Same with things like Mask or DCE and alike.

Congratulations to Team Success and Team Portfolio who managed to finish their projects in the given timespan, impressive work. Especially Team Portfolio, [which even released its theme to the TYPO3 Extension repository](https://extensions.typo3.org/extension/theme_portfolio)!

The day was rounded up with a small party and free drinks at Cafe Caveto (and lounging around the pool and hotel bar).

## Day 7 - Saturday: Back home

<figure class="m-0">
  <img class="rounded-md" src="/assets/img/blog/surfcamp-recap/airport-fuerteventura.jpg" alt="Picture of the airport of Fuerteventura from the perspective of the airfield"/>
  <figcaption class="italic text-center font-normal">View of the Airport Fuerteventura from the airfield</figcaption>
</figure>

On Friday, the day started with a quick explainer of the plans for the day, and shortly after we were put in mixed groups to do a retrospective of the entire week. For this, a member of each team was picked. We discussed what we liked and disliked about the event for 20 minutes (well...our group took more than 30).

After that, we did a small photoshoot in front of the hotel. One picture was just the standard group picture every event would do. The second thing we did was record a birthday message for Kasper, the creator of TYPO3. [You can watch it here!](https://twitter.com/typo3/status/1779117979352899690)

We then packed our bags, checked out of the hotel, and had a proper goodbye session.

The mentors drove us to the Airport and flight-wise everything was fine too. I made the mistake of checking my train status while still in Fuerteventura, and then being surprised by railworks near Munich Airport, requiring me to take a replacement bus service.

This was a bit of a problem because my schedule in Germany ended up being quite tight. I'd arrive in Munich by 10 PM and my final train back to Rosenheim would depart sometime after midnight. With pickling up my luggage and taking a tram line this already was super close, having railworks added to that was a massive pain.

In the end, I managed to catch the very final train and arrived home at about 2 AM after 12 hours of traveling.

## Conclusion

Albeit the initial expectations that I had, the Surfcamp was an absolute success. It was a fun, relaxing _and_ challenging experience all the same. I'm glad about the things my and all the other teams achieved, we can be proud of that!

I'm also glad to have met everyone at the camp, and the talks and discussions we had. I can't wait to see everyone again in the future, may that be at the DevDays in August or any next Surfcamp!

Also thanks to the organizers for putting this event together. For the first of its type, this went by smoothly. Everyone did a great job here!

🧡

<div class="outline-dashed outline-2 bg-lime-50 outline-lime-600 px-2 py-1 rounded-md leading-snug italic text-center mb-3">
  Thanks to my employer <a href="https://in2code.de" target="_blank">in2code GmbH</a> for counting the Surfcamp week as work time for me, it's much appreciated!
</div>