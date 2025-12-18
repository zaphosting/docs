---
id: contribution-guides-guidelines
title: Guide Guidelines
description: "Discover how to create consistent, high-quality documentation that enhances reader experience and clarity → Learn more now"
sidebar_label: Guidelines
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

In order to ensure that the content on our ZAP-Docs always remains consistent in quality and style, we have created a range of guidelines to use when creating or editing content for our documentation. You **must** follow our guidelines closely to ensure that your suggestion and final pull request are processed swiftly. More importantly, this will ensure that our readers will have a better and more consistent high-quality experience whilst reading and following along with the guides.

Our guides contribution guidelines are split into the following sections:

- Structure
- Style
- Formatting
- Terminology

We recommend browsing these sections at least once before proceeding with writing any content. It is also a useful place to refer to if you are in doubt of how to approach something during the creation process.

## Structure

All of our guides across our ZAP-Docs follow a relatively consistent structure which begins with an short introduction along with any prerequisites or preparation steps, followed by the main content and a short conclusion.

The structure can be altered occassionally depending on the type of guide produced. This can be discussed with the ZAP-Docs Team within your initial suggestion. You can view how to utilise headings via the headers section, it done through regular traditional Markdown.

The structure that we typically expect to see would have the following headings:

- **Page Title** (H1) - This is set via the `title` metadata at the top of the page.
- **Introduction** (H2) - Brief 1-2 sentences which explains the topic of the guide and most importantly explains what the guide aims to achieve.
- **Preparation** (H2) - This heading is **optional**. It is only needed if there are certain prerequisites or preparation steps that need to be performed before the guide can be followed by a reader. For example, here you could reference our [SSH Initial Access](vserver-linux-ssh.md) guide if the user must login to their server first. Or you may present any software and/or hardware requirements needed. Or you may provide some quick instructions on how to prepare some software, such as a firewall. We recommend browsing our [ZAP-Docs website](https://zap-hosting.com/guides) to see if there are any guides that may cover these steps and if so link to them.
- **Main Topic** (H2) - This is your first main section of the guide. In many cases, this would likely be set to **Installation**, which would be followed by various sub-sections for each part of the process. But this may not always be the case, for example informational guides may have a different main topic.
- Optional: **Sub-topic 1** (H3)
- Optional: **Sub-topic 2** (H3)
- ...
- Optional: **Another Topic** (H2)
- **Conclusion** (H2) - As a final part of the guide, you should close off the guide in 1-3 sentences explaining what the reader has successfully accomplished and provide a reference to our Support Team if the reader is still facing troubles.

:::info Use of Sub-Headings (H3 & H4)
You are encouraged to use H3 headings to create sub-sections within main H2 sections to further organise bigger chunks of content into organised sections. An example can be seen with the **Main Topic** section above.

You can also use H4 headings. These are useful if you wish to create another sub-section without displaying it on the right-hand side section breakdown of a guide. They are also useful if you further need to split a H3 section into even smaller sections.

If you are using subheadings, it usually makes sense to have at least two or more subheadings within the parent heading, otherwise it typically makes no sense to have only one subheading within a main heading.
:::

In the future, we will be adding templates that have pre-prepared Markdown for you, which will be a useful starting point for creating new pages. This will be added soon.

### Titles

Titles for your guide should be short and based on the overall aim of the guide you have written. Think carefully about what the reader will accomplish by the end of the guide, for example installing a piece of software or providing information about as specific topic.

The title should be prefixed with the product category that the guide relates to, which should also be where you have placed the guide in the sidebar. You can easily check other guides in the same section to view their prefix.

An example of a good title for a guide relating to the VPS product would be: `VPS: SteamCMD Linux Setup`

### Introduction

Introductions for your guide should be relatively short and to the point, typically spanning 1-2 sentences. In the content you should aim to briefly describe the topic area at hand and most importantly explain what the guide will present to the reader, informing them of the end goal.

An example of an ideal introduction for a guide relating to SteamCMD would be:

- **1st Sentence**: SteamCMD is an essential tool that is necessary for installing dedicated servers for a wide variety of games including Palworld, Enshrouded and more.
- **2nd Sentence**: In this guide, we will explore the first-time setup process for installing SteamCMD to your Linux server. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

As seen in the example, it briefly summarises both the relevant topics of this guide and presents the overall goal for the reader when fulfilling this guide.

### Preparation

The preparation section is useful in clarifying any necessary prerequisites that the reader must fulfil before being able to follow the guide. This could be software or hardware requirements, instructions on preparing some software such as a firewall or simply guiding the user to login to their server via SSH or RDP.

We strongly recommend browsing our [ZAP-Docs website](https://zap-hosting.com/guides) to search for guides that may cover or relate to any preparation steps you plan to include. If there is a guide covering a topic, for example [SSH Initial Access](vserver-linux-ssh.md), you should link the guide and inform the reader to follow along before proceeding.

Common prerequisites for guides include:

- Software required (e.g. Git, Node.js, Python, Docker)
- Tutorials that may help the reader get basic knowledge (e.g. Another ZAP-Docs page)
- User Accounts such as APIs
- Required settings (e.g. DNS/SSL)

An example of this for a Reverse Proxy guide would be:
```
In order to setup a reverse proxy you will require a Linux Server to host your proxy server and you should connect to it. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this. You will also require access to a Domain that you own. For each subdomain that you plan to use, you should create an `A` DNS record, pointing at the IP Address of your Linux Server.
```

### Main Topic

Now it is time to write the main bulk of your guide. You are more than welcome to utilise various H2, H3 and H4 headings to appropriately structure your guide. It would make sense to utilise H2 headings for big sections and further splice them down into sub-sections using H3 and/or H4 headings.

In many cases, particularly any guide which covers the process of setting up software, you would likely utilise an **Installation** heading which is split up into various H3 sub-sections. If you are struggling to figure out a correct structure, don't fret as we will work with you during the suggestion phase of your contribution to plan a well-rounded guide structure.

Within each section, it is typically advised to add brief entry and closing transition statments to let the reader know at all times what they have done so far and what they will be doing next. Of course, this is with the exception of the last main section which doesn't require a closing statement necessarily, since this would naturally transition into the conclusion.

An example of such statements is:

- **Entry Statement**: In this section, you will go through the configuration process to customise the software to your likings.
- **Closing Statement**: With the configuration prepared and the file saved, head over to the following section to setup the administrator account and start using the software.

Through these transition statements, the reader is provided with important context which ensures that the guide flows well. Remember, you should always use the second person tense (e.g. "You will create) rather than first person when writing your content and transitions.

### Conclusion

Finally, the last section is the conclusion of the guide. This section should close off the guide in 1-3 sentences explaining what the reader has successfully accomplished and provide references to further reading or guides that they can follow to expand their knowledge of the topic. 

It would be great to link any existing ZAP-Docs guides here, especially if they naturally following along from your guide. We also recommend providing a reference to our Support Team if the reader is still facing troubles.

An example of a great conclusion is:
```
You have now successfully setup the software to run on your Linux server! We recommend browsing our Linux Service guides found in this section to install further services.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
```

## Style

The style of writing for the ZAP-Hosting docs follows our belief in producing high-quality, practical and easily accessible guides to support a wide range of topics and support readers from any experience level. 

### Technical & correct

Our articles aim to be as technically accurate as possible and up-to-date with the latest industry information. We expect that articles not only let the user achieve the final goal of learning, building or setting something new up, but to also learn and understand what they have done throughout the article. Every step that you create within a guide as a writer should have a clear purpose and explanation, providing additional options and/or flags where appropriate. You should always keep the reader up to date on what they are doing and why they are doing the actions that are part of the guide.

Writers should always proofread and test their guides to ensure that everything is technically correct and works as intended before submitting a pull request. The ZAP-Hosting docs team will read through and test your guide where appropriate to ensure it is consistent and factually correct or discuss improvements where it is seen that there is a mistake.

:::tip
We always recommend our writers place your content through a spell check tool to ensure that SPAG is correct before creating a pull request. A useful website for this is: https://languagetool.org/
:::

### Practical & useful

By the time a reader has finished an article, they should have learned, built or set up something from start to finish. Our guides aim to support readers of any experience, therefore your contributions should fully explore the topic at hand to ensure that the reader becomes knowledgeable and/or has achieved something. This means that as a writer, you must cover your topic thoroughly mentioning all details necessary including prerequisites. As a writer, you should only send readers to external websites if there is no existing documentation about this on the ZAP-Docs or if it is to let the user gather additional details that aren't required for your article but can be beneficial to build up their technical knowledge. External links should not redirect to competitor documentation.

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
## Installation
H2 - Main Section

### Downloading Game Files
H3 - Sub-section of H2

#### Via SteamCMD
H4 - Sub-section of H3

#### Manually via GitHub
H4 - Sub-section of H3

### Preparing Configuration
H3 - Sub-section of H2

### Starting Server
H3 - Sub-section of H2
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

- File names and paths (e.g. `C:/User/[your_name]/AppData....test.png`)
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
This is a note! Replace the above keyword to change the type.
:::
```

#### Note

:::note Note Title! (Optional)
You should use this tag to display additional notes that may be useful but aren't directly important.
:::

#### Tip

:::tip Tip Title! (Optional)
Place any tips that you have from experience in this tag.
:::

#### Info

:::info Info Title! (Optional)
If there is important information that the user should know about, place it within this tag.
:::

#### Caution

:::caution Caution Title! (Optional)
Is there something in your guide that the user should be warned and cautious about whilst following the guide? Use this tag to highlight it.
:::

#### Danger

:::danger Danger Title! (Optional)
You should use the danger admonition where crucial information needs highlighting. In particular, this should be used to make the user aware of known bugs or deprecated features.
:::

### Screenshots

Screenshots are an extremely useful method of guiding readers through the steps visually and we recommend using these where appropriate.

In order to accommodate the German section, when you are taking a screenshot, we expect you to add both an English version and a German version to ensure that the screenshots are consistent. Within your guide, you can place them right next to each other. The German screenshots will be removed and used once the ZAP-Docs team translates your article.

You can use the following syntax to add a screenshot to your content, replacing `your_url` with the URL of the image:
```
![](your_url)
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