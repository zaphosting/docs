---
id: contribution-guides-guidelines
title: Guide Guidelines
description: Guidelines for the Guides section of the ZAP-Hosting Contribution Program - ZAP-Hosting.com documentation
sidebar_label: Guidelines
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

In order to ensure that ZAP-Hosting documentation pages are consistent in quality and style, we have created a range of guidelines to use when creating or editing content for our documentation. You must follow our guidelines closely to ensure that your suggestion and final pull request are processed swiftly. More importantly, this will ensure that our readers will have a better and more consistent high-quality experience whilst reading and following along with the guides.

Our guides contribution guidelines can be split into a few major sections, which are:

- Structure
- Style
- Formatting
- Terminology

## Structure

Our articles within the ZAP Docs follow a relatively consistent structure that walks the reader through the aim of the article in chronological order and with appropriate headings. The structure can be altered depending on the type of article that you are writing and is placed under your discretion where it is seen to be more appropriate. The ZAP Docs team will work with you as the writer to ensure that the structure is correct.

Procedural guides that are published should walk the reader step-by-step through the topic at hand so that by the end they accomplish it fully. The structure for this would/should be:

- Page Title (H1 Heading - Set via the `title` metadata at the top of the page)
- Introduction text
- Prerequisites (H2 Heading)
- Step 1 (H2 Heading)
- Step 2 (H2 Heading)
- ...
- Step x (H2 Heading)
- Conclusion (H2 Heading)

Informative guides that provide information and knowledge should use the following structure:

- Page Title (H1 Heading - Set via the `title` metadata at the top of the page)
- Introduction text
- Main topic 1 (H2 Heading)
- Main topic 2 (H2 Heading)
- Optional: Sub-topic 2.1 (H3 Heading)
- Optional: Sub-topic 2.2 (H3 Heading)
- ...
- Main topic x (H2 Heading)
- Conclusion (H2 Heading)

:::info
Keep in mind that where it is appropriate, you may use H3 headings to create sub-topics within H2 main topic headings. In the example above, this can be seen within the **Main topic 2** main topic. If you are using subheaders, please ensure that there are two or more headers of the same level within that section, otherwise, this would be incorrect usage.
:::

In the future, we will be adding templates that have pre-prepared Markdown for you, which will be a useful starting point for creating new pages. This will be added soon.

### Titles

When creating the title, try to include the goal of your guide. Think carefully about what the reader will accomplish by following your guide. A typical procedural guide will follow a title format of: **How to [Task] using [Software]**. Similarly, a typical informative guide will follow a title format of: **Information on [Guide Info]**.

### Introduction

Introductions within articles should be relatively short and simply explain what that article aims to teach and the final outcome if it is a procedural guide. A few questions that you should ask yourself:

- What is your guide about?
- What should the reader learn from this guide?
- What will they accomplish by the end?

Answering the questions should help you write up a short and concise introduction for your guide.

### Prerequisites

The prerequisites section is primarily used for procedural step-by-step guides. The purpose of this is to let the reader know what is required before they begin following the tutorial, a bit like a checklist before completion.

For example, common prerequisites for guides include:

- Software required (e.g. Git, Node.js, Python, Docker)
- Tutorials that may help the reader get basic knowledge (e.g. Another ZAP Docs page)
- User Accounts such as APIs
- Required settings (e.g. DNS/SSL)

You should provide a bullet-point list of these prerequisites under the section heading.

### Steps

The steps section is the part of a procedural tutorial where you describe what the readers have to do and why. Each step should follow the H2 heading. You may mention the step number before describing the step, for example, **Step 1 - Setting up the API account** would be an appropriate step heading. After this title, you should briefly and quickly describe what the reader will be doing in this step to provide an overall goal. As previously mentioned, use the second person tense (e.g. "You will create") rather than first person.

Between steps, you should aim to create a brief introduction and closing transition statements to let the reader know what they have done so far and what will be happening in the following steps. These transitions provide important context for the reader. Try to avoid repetition and use a range of terms to avoid reiterating steps.

### Conclusion

Finally, the conclusion of your guide should summarize what the reader has accomplished throughout the guide. It should also provide any next steps, use cases or features that the reader can take if they wish to further expand on their knowledge of the topic. If there is an existing ZAP docs guide that builds up on the guide, this would be a great place to link it.

## Style
The style of writing for the ZAP-Hosting docs follows our belief in producing high-quality, practical and easily accessible guides to support a wide range of topics and support readers from any experience level. 

### Technical & correct

Our articles aim to be as technically accurate as possible and up-to-date with the latest industry information. We expect that articles not only let the user achieve the final goal of learning, building or setting something new up, but to also learn and understand what they have done throughout the article. Every step that you create within a guide as a writer should have a clear purpose and explanation, providing additional options and/or flags where appropriate. You should always keep the reader up to date on what they are doing and why they are doing the actions that are part of the guide.

Writers should always proofread and test their guides to ensure that everything is technically correct and works as intended before submitting a pull request. The ZAP-Hosting docs team will read through and test your guide where appropriate to ensure it is consistent and factually correct or discuss improvements where it is seen that there is a mistake.

:::tip
We always recommend our writers place your content through a spell check tool to ensure that SPAG is correct before creating a pull request. A useful website for this is: https://languagetool.org/
:::

### Practical & useful

By the time a reader has finished an article, they should have learned, built or set up something from start to finish. Our guides aim to support readers of any experience, therefore your contributions should fully explore the topic at hand to ensure that the reader becomes knowledgeable and/or has achieved something. This means that as a writer, you must cover your topic thoroughly mentioning all details necessary including prerequisites. As a writer, you should only send readers to external websites if there is no existing documentation about this on the ZAP Docs or if it is to let the user gather additional details that aren't required for your article but can be beneficial to build up their technical knowledge. External links should not redirect to competitor documentation.

### Friendly, formal & comprehensive

We anticipate our documentation to be forward-thinking and friendly to make it approachable by any reader, but at the same time remain formal. Throughout your guide, we aim for the tone of our writing to be acceptable for all readers, regardless of experience or existing language boundaries.

As these guides primarily focus on supporting the reader to educate and allow them to reach an outcome, we expect writers to use second person (e.g. "You need to...") tense rather than first person (e.g. "I think...") to keep the reader engaged and keep the focus on them.

Lastly, all writers must follow our code of conduct to ensure that our guides are acceptant of anyone regardless of age, ethnicity, gender identity, level of experience, nationality, religion, political affiliation, sexual orientation, socioeconomic status or technology choices. You must avoid any potentially offensive language and any other content that has reference to the above-mentioned topics.

## Formatting
Our documentation is formatted through the Markdown markup language which is widely used and relatively simple to use. Head over to the sections below to understand which we use and how it is used.

:::tip
For more examples and extensive explanations of Markdown features, head over to [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) which provides further information.
:::

### Headers

Headers are one of the most important formatting options used to separate the pages comprehensively and logically. The main title consists of the H1 header, however you shouldn't ever have to use this in-text. Instead, you should use the `title` metadata at the top of the guide file which is responsible for this. 

Across our guides, H2 headers should be used to split the guide into its main sections. Following this, H3 headers should be used to split the main sections into sub-sections. An example of where this may be appropriate is splitting a main section into multiple steps to make following the guide easier. Lastly, there is also an H4 tag which is more rarely used within our documentation but serves the same purpose of splitting into sub-sections, but it won't specifically display in the guide structure.

:::info
If you are using subheaders (e.g. H3 headers below main H2 headers), please ensure that there are two or more headers of the same level within that section, otherwise this would be incorrect usage.
:::

Here is a quick example of how to use headers:

```
## Setting up mods
H2 main section header

### Downloading the mods
H3 subheader

#### Through Steam Workshop
H4 subheader

#### Manually via SteamCMD
H4 subheader

### Preparing the correct structure
H3 subheader

### Installing the mods to your server
H3 subheader
```

### In-line markdown

We use a range of in-line formatting to improve the readability of our guides and suit readers with a wide range of technical skills. Read through the section below to understand the usage for each.

#### Bold text

The main use of bold text is to emphasize information. Examples of this include:

- Changing context between steps
- Hostnames, credentials & usernames
- Key terminology

You can simply use a double asterisk outside of the target text to make text bold, for example, `**hello there**` results in **hello there**.

#### Italics

The primary use of italics is to introduce new technical keywords within your article. For example, we will be setting up a *reverse proxy* today.

To use italics, you simply have to place a single asterisk outside of the target text, for example, `*ZAP-Hosting - More POWER!*` results in *ZAP-Hosting - More Power!*.

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

Another very useful Markdown formatting tool is code blocks. These are especially useful for guides that involve the usage of commands, scripts, terminal output and more. 

To use a code block, simply use ` ``` ` outside of the text block you wish to place into a block. You may also state the language next to the first set of triple backquotes to properly format the programming language. For example below is an example of code block usage using ` ```js ` for JavaScript language.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Use of admonitions

Within your content, you may decide to use an admonition to highlight certain information under one of the 5 possible labels, which are explored below.

The syntax for using each admonition is the same, replacing the keyword with the type you would like to use. Here's an example of usage:

```
:::note
This is a note!
Replace the above keyword to change the type.
```

#### Note

:::note
You should use this tag to display additional notes that may be useful but aren't directly important.
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

### Screenshots

Screenshots are an extremely useful method of guiding readers through the steps visually and we recommend using these where appropriate.

In order to accommodate the German section, when you are taking a screenshot, we expect you to add both an English version and a German version to ensure that the screenshots are consistent. Within your guide, you can place them right next to each other. The German screenshots will be removed and used once the ZAP docs team translates your article.

You can use the following syntax to add a screenshot to your content, replacing `your_url` with the URL of the image:
```
![image](your_url)
```

The best practice is to use a site such as Imgur to upload and use the image, or alternatively you can directly drag it into the editing field directly if you are using the GitHub website to create your content to automatically upload it for you.

## Terminology

Throughout our documentation, there will be a wide range of key terminology that is used. Across the documentation, we expect you to use US-English localized spelling to ensure consistency across all of our articles. In this section, we aim to standardize some of the terminology that is likely to be commonly used.

### ZAP-Hosting products

When referencing a ZAP-Hosting product, you should always ensure that the correct name, spelling and capitalization are used. You can check this by heading over to [the ZAP-Hosting website](https://zap-hosting.com) and checking how the product is referenced on the relevant product site.

### User-defined attributes

Throughout most guides, configuration options for items such as users, hostnames, domains, IP addresses and URLs will be needed, where the reader will have to use their own details in place of our placeholders.

By default, you should always use `[your_attribute]` to differentiate between static elements and unique elements, where `attribute` should be replaced by the type of attribute. For example, when mentioning an IP, you should state `[your_server_ip]` within your guide or when mentioning a URL you should state `http://[your_server_ip]:30120`. This clearly differentiates the attributes that the reader must change based on their own configuration. You should also provide an explanation or note letting the reader know what attributes they need to change throughout the guide when it is first mentioned to ensure that everything is understood.

You should use `zaphosting` as the default hostname, username or database name.

### Software

When mentioning software within your guides, you should ensure that you follow the correct spelling and capitalization for the name of the software. If the software website isn't consistent with its capitalization, ensure that you follow the same capitalization within a single article to maintain consistency.

You should hyperlink to the software's website when first mentioning the software, and where an official website is available.