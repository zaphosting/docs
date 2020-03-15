---
id: whatiszap
title: The ZAP-Hosting Docs
sidebar_label: The ZAP-Hosting Docs
---

Here you can find instructions and explanations for various products, games or the control panel.

## Navigation

In the left sidebar all Doc entries can be viewed and opened:

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/4ajTrW35DwFXJYG?x=1920&y=553&a=true&file=firefox_5o8oDnjmBc.png&scalingup=0)

All entries also have a right sidebar, with which you can quickly find certain parts of the entry:

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/nzDodoLQwM8rCcS?x=1920&y=553&a=true&file=firefox_P1tTEtDoUT.png&scalingup=0)


If you find a mistake, want to correct an image, or even write your own entry, you can do so through our [GitHub Repository](https://github.com/zap-docs/docs).

## Structure & Tools

It is important that instructions are written in a consistent style. This includes proper spelling as well as the use of formatting (code blocks, screenshots, indentations, fonts, etc.) and emojis.


### 📚 Table of contents

On the right hand side next to Instructions you will find a table of contents which you can use to quickly jump to the desired location.
This includes h2 and h3 tags that are used in this way:

h2 Tag:
``` 
## Text 
```
h3 Tag:
```
### Text
```

For understanding once again:
```
(h1) # Not displayed in the list
(h2) ## Displayed
(h3) ### Is displayed as a sub-entry below the upper one
(h4) #### Not displayed in the list
```

### 😀 Emojis

In the tables of contents emojis should be used for all h3 tags.
Download an Emoji Picker for Firefox. Example:
https://addons.mozilla.org/de/firefox/addon/awesome-emoji-picker/

### ✏️ Speech Correction

Download a spelling/grammar tools before writing instructions.
For Firefox: https://addons.mozilla.org/de/firefox/addon/languagetool/

You can select the text with and check it with *right click*:
![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/p6yfWF9jAYbcN8z?x=1920&y=553&a=true&file=firefox_j3QnCDKL5O.png&scalingup=0)

### 📑 Syntax

*Italicizing*
```
*Text*
``` 


**Bold Text**
```
**Text**
``` 


**Unordered List**
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```


**Ordered List**
```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```


**Screenshots**
```
![](LinkZumBild)
```
Please use the ZAP-Hosting Screensaver to upload pictures here.


>Blockquotes (Quotes) - or. we like to use Quotes as a tip, they should improve the overview in every manual and can also be multiline.
```
> MY wonderful
> Quote
```


`Inline code goes like this:`
```
`Code`
```


## Modifying a page

To change an existing page you can click on the "Edit" button in the upper right corner:

![](https://i.imgur.com/S7Jga7m.png)

This leads you to the source file of the entry:

![](https://i.imgur.com/XXLwOus.png)

Here you can now click on the "Edit" button, this will create a copy of all the docs on your Github account:

![](https://i.imgur.com/FKjvhW6.png)

![](https://i.imgur.com/aoD4odD.png)

### 🔎 Text search

Click with the mouse in the source code and then press *Ctrl + F*

![](https://screensaver01.zap-hosting.com/index.php/apps/files_sharing/publicpreview/SYN5pdmNjDm5fkX?x=1920&y=553&a=true&file=firefox_Dn5cN39pkU.png&scalingup=0)


### 🥅 Finalization

Make sure that you describe your change correctly so that we know immediately what it is about:

![](https://i.imgur.com/brIixcL.png)

When you have made your changes, you can now click on "**Propose File Change**", this will take you to the Pull Request Preview, here you can review your changes again:

![](https://i.imgur.com/22bHojQ.png)

If you are sure that everything is correct, you can now click on "**Create Pull Request**"

![](https://i.imgur.com/gOstBbM.png)

![](https://i.imgur.com/4SdxcHb.png)


Now your Pull Request has been created.

> Before it is integrated into the Wiki, it must be checked for correctness. For this purpose you may receive a response to the pull request or an e-mail from the system.

![](https://i.imgur.com/M4VZpra.png)

If you want to make further changes, you can open to your branch and change more files there, they will be automatically integrated into the Pull Request:

![](https://i.imgur.com/Tush4SB.png)


## Creating a new page

### 🗃️ Repository klonen

To create a new page, the repository must be forked:

![](https://i.imgur.com/IfVrnoY.png)

This fork is a 1:1 copy of the repository on your own account, where changes can be made.

> If your fork already exists but is no longer up to date, it must be recreated, this is done in [the following video](https://screensaver01.zap-hosting.com/index.php/s/JyXci8T6ziCk424/)

![](https://i.imgur.com/lIyCWc2.png)

### 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Language selection

To create a new file, first open the folder of the language you want to create the page for (in our example it is **en**).

![](https://i.imgur.com/EBXMRts.png)

Here all data of the Docs are stored, to create a new one, click on "Create new file"

![](https://i.imgur.com/SaPdUqx.png)

### 📁 Filename

Give the file a name, pay attention to the categorization, if it is a wiki entry for Minecraft, the file should start with "minecraft_", e.g.

```
minecraft_configure
```

Also, the file extension must always be 'md', the end result will look like this:

```
minecraft_configure.md
```

![](https://i.imgur.com/BaxQ8ZA.png)

Now the metadata of the page must be created, use the following example:

```
---
id: pagename
title: Page-Title
sidebar_label: Page-Title
---
```

In our example the file would look like this:

```
---
id: minecraft_configure
title: Server Properties
sidebar_label: Server Properties
---
```

### 📡 Second Language

After the page has been written, it must now be recreated in the "en" folder and translated.

> Note: pages must **always** have an English and German version.

### 📚 Navigation

Once both versions have been created, all you need to do is add your new page to sidebar.json:

![](https://i.imgur.com/YyutX8M.png)

> The sidebars.json file describes where exactly in the left sidebar the articles are located and follows the JSON format.

To add the page to Minecraft, you need to find the Minecraft category and decide which category it fits into:

![](https://i.imgur.com/C5XPt7b.png)

If you are not sure if an existing subcategory fits, a new one can be created using the following example:

```json
{
 "type":"subcategory",
 "label":"Name of subcategory",
 "ids":[
	"ids",
    "the",
    "pages"
 ]
},
```

In our example this would be as follows:

```json
{
    "type":"subcategory",
    "label":"Administration",
    "ids":[
        "minecraft_configure"
    ]
},
```


If you already have a suitable category, you can simply add it again:

For subcategories:
```json
{
    "type":"subcategory",
    "label":"Administration",
    "ids":[
        "minecraft_addop",
        "minecraft_worlds",
        "minecraft_configure"
    ]
},
```

For normal categories:
```json
"Minecraft":[
    "minecraft_configure"
]
```
### 🥅 Finalization

Now your new page is created and ready to use!

Now you can create a Pull Request:

Open the original zap-docs repo and open the "Pull Requests" menu:

![](https://i.imgur.com/uxTnmvb.png)

On the right side click on "New Pull Request" and select your own fork as follows:

![](https://i.imgur.com/INPzQwX.png)

1. Click on "compare across forks"
2. On the right side, select your fork, this is normally called your username/docs
3. Click on "Create Pull Request"


![](https://i.imgur.com/22bHojQ.png)

If you are sure that everything is correct, you can now click on "**Create Pull Request**"

![](https://i.imgur.com/gOstBbM.png)

![](https://i.imgur.com/4SdxcHb.png)

Now your Pull Request has been created.

> Before it is integrated into the Wiki, it must be checked for correctness. For this purpose you may receive a response to the pull request or an e-mail from the system.

![](https://i.imgur.com/M4VZpra.png)

If you want to make further changes, you can open on your fork and change other files there, they will be automatically integrated into the Pull Request:

![](https://i.imgur.com/Tush4SB.png)

As soon as your Pull Request is accepted, you will see it on docs.zap-hosting.com!
