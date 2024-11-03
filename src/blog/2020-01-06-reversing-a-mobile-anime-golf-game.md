---
title: Reversing a Mobile Anime Golf Game
description: |
  Pangya Mobile is shutting down on 7th February and I'm talking about how I scrambled to reverse-engineer and save Pangya Mobile before it is gone forever.
tags:
  - reverse-engineering
  - pangya
---

I don't think I mentioned it in my introductory-post for my Pangya reverse
engineering series, but as the efforts on the PC MMO version of the game were
ceased, there already was a mobile game in cooperation with NCsoft in the
making. It was announced in 2014, there was a long silence until a release in
2017, one year after the development of PC was stopped.

Now, just before New Years, I see a message popping up in a Discord server
centered around Pangya, which was...

**Pangya Mobile is shutting down 7th February 2020**

_Well, oops._

<!--more-->

Attached to the message they posted to their Facebook page was a timeline on how
the shutdown proceedings would follow. Including one crucial part that download
of the game from the app stores wouldn't be possible after **January 10th
2020**.

I never played the Mobile version, because I heard how watered down the
mechanics were and how much it was focused on pulling money out of users wallets
with cosmetic outfits that cost upwards of $41, so now was the time to actually
create an account.

I couldn't be bothered setting up a VPN for Thailand, the only region the game
was distributed in, so I grabbed a APK off of APKPure, verified it was the
latest version of the game, pre-patches of course, launched it on my Android
phone, logged in and downloaded all patches, a whopping 1.6GB of them. As soon
as that was done, I closed it again. Connected the phone up to my PC and
proceeded to move all local assets to my PC. I also downloaded a fresh APK onto
my PC to take apart, so now we're good to go.

## Taking apart a mobile game

So, contrary to the first post, Pangya Mobile is not using the inhouse-developed
WangReal engine and made it portable, no...they actually use Unity, which makes
everything far, far easier to take apart.

### The APK

Taking apart an APK is pretty easy, since it's pretty much just a ZIP archive
with some extra metadata to it.

But to really get everything out of it, I opted to use
[Apktool](https://ibotpeaches.github.io/Apktool/) which is specifically made to
reverse apps. With that I'd also be able to repackage an APK if I wanted to.

This resulted in following output:

![Folder layout inside Pangya Mobile APK](https://desu.pictures/HystericalWhiteGoldfinch9.png)

- `assets/`: Some dependency version information and the base game Unity assets
- `lib/`: Libraries used by the APK, in Pangya's case in x86 and armeabi-v7a
- `original/`: The APKs META-INF files
- `res/`: Typical APK resources, like layouts, icons and strings
- `smali/`: Disassembly from the APKs Dalvik bytecode, ordered into
  library-structured folders
- `unknown/`: Files Apktool can't put into a proper place. In Pangya's case
  mainly LINE specific files

### The Assets (Part 1 - From the base APK)

So now that we have all the `.assets` and `.resource` files from the `assets/`
folder, let's peak into them and extract the assets.

Those files are bare assets and using tools like
[Asset/UnityStudio](https://github.com/Perfare/AssetStudio) looking into them is
as easy as selecting the folder they are in. Once that's done we're greated by
following view:

![UnityStudio showing the Pangya Mobile logo](https://desu.pictures/EvilPurpleSealion6.png)

Using the **Export** option given by the tool, we just dump all the assets in
their proper formats. Done!

### The Assets (Part 2 - From the patches)

_But wait, there's more!_ I downloaded 1.6GB of patches for Pangya Mobile, and
they all are `.ab/.assetbundle` files, which are basically just a lot of
`.assets` compressed together in a Unity-specific format.

And of course there are tools for it we can utilize to take them apart for us!

My main tool of trade for this was
[utinyRipper](https://github.com/mafaca/UtinyRipper) which exports `.asset`
files from the asset bundles. There also are tools like
[UABE](https://github.com/DerPopo/UABE) that work just as well for this!

It looks like some of the newer assets are encrypted, or at least the tools
don't seem to fare well with them, which I still have to look into.

As this requires a lot of manual labor I haven't fully extracted all assets yet,
but as times comes I'll definitely do that. Having them backed up already gives
us indefinite time for it anyway.

### The Code (Part 1 - Smali)

Now that we have the assets, it'd be really interesting to see what the game
actually does under the hood, right?

Apktool already gave us a headstart with the `smali/` directory, containing a
disassembly of the Dalvik bytecode. Using the proper syntax highlighting, we
already have something to look at!

![VSCode with a .smali file open](https://desu.pictures/BewilderingBlueBat3.png)

### The Code (Part 2 - Unity/il2cpp)

The Dalvik bytecode in this case isn't really related to the Unity game
contained in it, though. The really interesting bits are found in the
`libil2cpp.so` file found in the `lib/{arch}` subdirectory.

[IL2CPP](https://docs.unity3d.com/Manual/IL2CPP.html) (Intermediate Language To
C++) is an alternative Unity scripting backend which converts the IL code to C++
before making a binary, to increase performance, security and compatibility of
games.

It indeed amps up the security compared to regular Unity-built assemblies, but
it's not impossible.

Combined with the file `global-metadata.dat` found in the `assets/` directory,
which contains a map of symbols and classes, we can actually map the metadata
back to the `libil2cpp.so` file.

A tool aiding us with this endeavor is
[Il2CppDumper](https://github.com/Perfare/Il2CppDumper), which gives us several
output files, including a `script.py` file we can run with IDAPython to place
functions. After quite a while of waiting with a 42 MB source file being
analyzed and having the script place everything, we're now at this:

![IDA open with the il2cpp.so file and named functions](https://desu.pictures/AstonishingWhiteHorse3.png)

Now we have a disassembly and pseudocode of both the APK and the Unity binary to
look through!

### Extra: Internal Game Data

So, we basically have everything ready to go through the game in it's entirity,
but while exporting assets and checking the disassembly, I found references to
something interesting. There were files called `cremadata`, which by filenaming
seemed to contain strings of game data...but what format were they, it just
seemed like binary data.

Well, as every developer, the first thing to do is a quick DuckDuckGo/Google
search and...what's that?

![DuckDuckGo search of "ntreev crema"](https://desu.pictures/ArrogantBlueLemur7.png)

[Their format and toolchain is actually open-source!](https://github.com/NtreevSoft/Crema)
Unexpected from my dealings with MMO developers before, but hey, means less work
for us!

So I went ahead, downloaded a Crema release and found the proper tool to import
the files I found in the games assets, and...

_Voilà!_

![Crema Development open with Pangya Mobile Crema files](https://desu.pictures/MiniatureGreenGiant5.png)

That marks most of the assets open to us. Either from the asset bundles to the
code, now to the string/game data in Ntreev's specific format, we all have it.

It definitely was quite the journey, because I did this in a single night on a
whim, so I'm finished before the deadline of being able to download the game and
assets rushes by. But I also learned a lot of new stuff about Unity, which I
already dabbled with in the past!

Now Pangya Mobile can shut down, the data is safe! :P

---

This wouldn't have been possible with all the research and tools provided by
many, way more knowledgable people, here's a full list of them again:

- [Apktool](https://ibotpeaches.github.io/Apktool/)
- [Asset/UnityStudio](https://github.com/Perfare/AssetStudio)
- [utinyRipper](https://github.com/mafaca/UtinyRipper)
- [UABE](https://github.com/DerPopo/UABE)
- [Il2CppDumper](https://github.com/Perfare/Il2CppDumper)
- [Crema](https://github.com/NtreevSoft/Crema)

---

_This post was more of a quick side track of the main reverse engineering series
around Pangya, but as it still covers the same game series I felt like writing a
blogpost about it. I'll resume the regular series soon again with posts on how I
took apart the PC version and my journey on that!_
