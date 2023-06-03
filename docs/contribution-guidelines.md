---
id: contribution-guidelines
title: Contribution Guidelines
description: Guidelines for the ZAP-Hosting docs contribution program - ZAP-Hosting.com documentation
sidebar_label: Docs Guidelines
---

In order to ensure that ZAP-Hosting documentation pages are consistent in quality and style, we have created a range of guidelines to use when creating or editing content for our documentation. You must follow our guidlines closely to ensure that your suggestion and final pull request are processed swiftly. More importantly, this will ensure that our readers will have a better and more consistent high-quality experience whilst reading and following along with the guides.

Our contribution guidelines can be split into a few major sections, which are:
- Structure
- Style
- Formatting

## Structure
.

## Style
.

## Formatting
Our documentation is formatted through the Markdown markup language which is widely used and relatively simple to use. Head over to the sections below to understand which we use and how it is used.

### Headers
Headers are one of the most important formatting options used to separate the pages in a comprehensive and logical manner. The main title consists of the H1 header, however you shouldn't ever have to use this in-text, instead you should use the `title:` metadata at the top of the guide file which is responsible for this. 

Across our guides, H2 headers should be used to split the guide into it's main sections. Follwing this, H3 headers should be used to split the main sections into sub-sections. Examples of where this may be appropirate is splitting a main section into multiple steps to make following along the guide easier. Lastly, there is also a H4 tag which is more rarely used within our documentation but serves the same purpose of splitting into sub-sections, but it won't specifically display in the guide structure.

:::info
If you are using subheaders (e.g. H3 headers below main H2 headers), please ensure that there are two or more headers of the same level within that section, otherwise this would be incorrect usage.
:::

Here is an quick example on how to use headers:

![image](https://github.com/zaphosting/docs/assets/42719082/b17f86f3-ae7c-4083-b8e6-a520e1c1cd84)

### In-line markdown
We use a range of in-line formatting to improve readability of our guides and suit a readers with a wide range of technical skills. Read through the section below to understand the usage for each.

#### Bold text
The main use for bold text is to emphasise information. Examples of this includes:
- Changing context between steps
- Hostnames, credentials & usernames
- Key terminology

You can simply use double asteriks outside of target text to make text bold, for example `**hello there**` results in **hello there**.

#### Italics
The primary use for italics is to introduce new technical key words within your article. For example, we will be setting up a *reverse proxy* today.

To use italics, you simply have to place a single asteriks outside of the target text, for example `*ZAP-Hosting - More POWER!*` results in *ZAP-Hosting - More Power!*.

#### In-line code
In-line code formatting is primarily used to display more technical information such as URLs. A more comprehensive list of examples includes:
- File names and paths (e.g. `C:/User/[YourName]/AppData....test.png`)
- URLs (e.g. `https://zap-hosting.com`)
- Ports (e.g. `:30120`)
- Commands (e.g. `ipconfig `)
- SQL Queries (e.g. `SELECT * FROM servers`)
- Keybinds & key presses (e.g. `ENTER` or `CTRL + C`)

#### Tables
Another useful markdown feature is tables. These can be especially useful when you need to display a large amount of repetitive information, for example the commands, descriptions and usages available within a game. Below is an example of table usage:

```
| Command     | Description              | Usage                 |
| ----------- | ------------------------ | --------------------- |
| /help       | Sends help command       | /help [category]      |
| /stop       | Stops the server         | /stop [true/false]    |
```

#### Code blocks
Another very useful markdown formatting tool is code blocks. These are especially useful for guides which involve usage of commands, scripts, termianl output and more. 

To use a code block, simply use ` ``` ` outside of the text block you wish to place into a block. Below is an example of code block usage.

```
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Use of admonitions
Within your content, you may decide to use an admonition to highlight certain information under one of the 5 possible labels which are explored below.

The syntax for using each admonition is the same, replacing the keyword with the type you would like to use. Here's an example of usage:
```
:::note
This is a note!
Replace the above keyword to change the type.
```

#### Note
:::note
You should use this tag to display and additional notes that may be useful but isn't directly important.
:::

#### Tip
:::tip
Place any tips that you have from experience in this tag.
:::

#### Info
:::info
If there is important information that the user should know about, place it within this tag.
:::

#### Caution
:::caution
Is there something in your guide that the user should be warned and cautious about whilst following the guide? Use this tag to highlight it.
:::

#### Danger
:::danger
You should use the danger admonition where crucial information needs highlighting. In particular, this should be used to make the user aware of known bugs or deprecated features.
:::