---
id: contribution-blogs-guidelines
title: Blog Guidelines
description: "Discover how to create high-quality, consistent blog posts that engage readers and enhance your writing skills → Learn more now"
sidebar_label: Guidelines
---

![Blogs Banner](https://screensaver01.zap-hosting.com/index.php/s/ysxLZ26K3dSRLJQ/preview)

In order to ensure that all ZAP-Hosting Blog Posts are consistent in quality and style, we have produced a range of guidelines you should when creating content for our Blogs Contribution Program. You must follow our guidelines closely to ensure that your suggestions and subsequent drafts are processed swiftly. More importantly, this will ensure that our readers will have a better and more consistent high-quality experience whilst reading our blogs.

Our blog contribution guidelines can be split into a few major sections, which are:

- Structure
- Style
- Formatting
- Terminology

## Structure

Our blog posts across our contribution program should follow a relatively consistent structure, creating reader interest and providing information and news for the reader. The ZAP Contribution Team will work with you to ensure your structure is appropriate when creating a blog suggestion.

- **Page Title** (H1)
- **Introduction** (H2) 
- **Preparation** (H2)
- **Main Topic** (H2)
- Optional: **Sub-topic 1** (H3)
- Optional: **Sub-topic 2** (H3)
- ...
- Optional: **Another Topic** (H2)
- **Conclusion** (H2)

:::info Use of Sub-Headings (H3 & H4)
You are encouraged to use H3 headings to create sub-sections within main H2 sections to further organise bigger chunks of content into organised sections. An example can be seen with the **Main Topic** section above.

If you are using subheadings, it usually makes sense to have at least two or more subheadings within the parent heading, otherwise it typically makes no sense to have only one subheading within a main heading.
:::

:::info
Keep in mind that the above is a rough reference. The main body of your blog post may have different headings depending on what is appropriate for your content, but all blog posts should consistently have a title, introduction and conclusion surrounding the main body content.
:::

### Titles

The title for your blog post should be short, clear and snappy to grab the reader's attention. It should state exactly what your blog post is about, for example, is it news or tips and advice? An example of a good title would be: **Top 10 FiveM Police Scripts**.

### Introduction

Introductions for your blog post should be relatively short and to the point, typically spanning 1-2 sentences. In the content you should aim to briefly describe the topic area at hand and most importantly explain what the blog post will present to the reader, informing them of the end goal.

An example of an ideal introduction for a blog post relating to SteamCMD would be:

- **1st Sentence**: SteamCMD is an essential tool that is necessary for installing dedicated servers for a wide variety of games including Palworld, Enshrouded and more.
- **2nd Sentence**: In this blog post, we will explore the first-time setup process for installing SteamCMD to your Linux server. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

As seen in the example, it briefly summarises both the relevant topics of this blog post and presents the overall goal for the reader when fulfilling this blog post.

### Preparation

The preparation section is useful in clarifying any necessary prerequisites that the reader must fulfil before being able to follow the blog post. This could be software or hardware requirements, instructions on preparing some software such as a firewall or simply guiding the user to login to their server via SSH or RDP.

We strongly recommend browsing our [ZAP-Docs website](https://zap-hosting.com/guides) to search for guides that may cover or relate to any preparation steps you plan to include. If there is a guide covering a topic, for example [SSH Initial Access](vserver-linux-ssh.md), you should link the guide and inform the reader to follow along before proceeding.

Common prerequisites for blog posts include:

- Software required (e.g. Git, Node.js, Python, Docker)
- Tutorials that may help the reader get basic knowledge (e.g. Another ZAP-Docs page)
- User Accounts such as APIs
- Required settings (e.g. DNS/SSL)

An example of this for a Reverse Proxy blog post would be:
```
In order to setup a reverse proxy you will require a Linux Server to host your proxy server and you should connect to it. Use our [SSH Initial Access](vserver-linux-ssh.md) guide if you need help doing this. You will also require access to a Domain that you own. For each subdomain that you plan to use, you should create an `A` DNS record, pointing at the IP Address of your Linux Server.
```

### Main Topic

Now it is time to write the main bulk of your blog post. We recommend splitting the blog post into a few sections to help the reader remain engaged with the content. There is no strict requirements for how these should be split, but as a general rule of thumb, you should try to split large amounts of content into a few headings. The ZAP Contributions Team will help you out with this throughout the process.

If your blog post provides procedural step-by-step information or tutorials, it would make sense to include the step number and provide a short step description within the main topic heading, for example **Step 1 - Creating the folder**. You should briefly describe what the reader is doing in the step to provide an overall goal in the first sentence. Between steps, you should aim to create a brief introduction and closing transition statements to let the reader know what they have done so far and what will be happening in the following steps. These transitions provide important context for the reader. Try to avoid repetition and use a range of terms to avoid reiterating steps.

### Conclusion

Finally, the last section is the conclusion of the blog post. This section should close off the guide in 1-3 sentences explaining what the reader has successfully accomplished, learnt or to provide a conclusion to an informative guide. 

It would also make sense to provide references to further reading or other blog posts or guides which the user can follow to expand their knowledge in the topic. You should link to any existing ZAP-Docs guides or blogs posts here, especially if they naturally following along from your guide.

## Style

The style of writing for the ZAP-Hosting docs follows our belief in producing high-quality, practical and easily accessible blog posts to support a wide range of topics and support readers from any experience level. 

### Technical & correct

Our blog posts aim to be as technically accurate as possible and up-to-date with the latest industry information. Throughout each blog post, we expect to provide readers with well-written and high-quality information regarding new topics and technologies as well as tutorials that focus on the reader learning new information. If your blog post provides procedural step-by-step information or tutorial, every step should have a clear purpose and explanation, providing additional options and/or flags where appropriate.

Writers should always proofread and test their blog posts to ensure that everything is technically correct and works as intended before submitting drafts. The ZAP Contributions Team will read through and test your blog post where appropriate to ensure it is consistent and factually correct or discuss improvements where it is seen that there is a mistake.

:::tip
We always recommend our writers place your content through a spell check tool to ensure that SPAG is correct before submitting a draft. A useful website for this is: https://languagetool.org/
:::

### Practical & useful

By the time a reader has finished reading a blog post, they should have learned, built or set up something from start to finish. Our blog posts aim to support readers of any experience, therefore your blog post contents should fully explore the topic at hand to ensure that the reader becomes knowledgeable and/or has achieved something. As a writer, this means that you must cover your topic thoroughly, providing all details necessary including prerequisites where appropriate. You should only send readers to external websites if there is no existing documentation about this on the ZAP Docs or if it is to allow the reader to gather additional details that aren't required for your article but can be beneficial to build up their technical knowledge. External links should not redirect to competitor documentation.

### Friendly, formal & comprehensive

We anticipate our documentation to be forward-thinking and friendly to make it approachable by any reader, but at the same time remain formal. Throughout your blog post, you should aim for the tone of your writing to be acceptable for all readers, regardless of any experience or existing language boundaries.

As these are blog posts that primarily focus on supporting the reader to educate and allow them to reach an outcome, we expect writers to use second person (e.g. "You need to...") tense rather than first person (e.g. "I think...") in order to keep the reader engaged and keep the focus on them.

Lastly, all writers must follow our code of conduct to ensure that our blog posts are acceptable to anyone regardless of age, ethnicity, gender identity, level of experience, nationality, religion, political affiliation, sexual orientation, socioeconomic status or technology choices. You must avoid any potentially offensive language and any other content that has reference to the above-mentioned topics.

## Formatting

Our Blog is formatted through the Markdown markup language which is widely used. Use the sections below to understand which elements we use and how they can be used within your blog posts.

We allow users to use any writing tools for their content creation, however, we **highly** recommend using the tool **[StackEdit](https://stackedit.io/app#)** to write your content whilst maintaining all the awesome functionality of Markdown. You could then directly export this to your Google Drive or any file-sharing application and receive a link that you can share with us.

:::tip
For more examples and extensive explanations of Markdown features, head over to [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) which provides further information.
:::

### Headers

Headers are one of the most important formatting options used to separate blog posts comprehensively and logically. The main title consists of the H1 header.

Across our blogs, H2 headers should be used to split the blog post into its main sections. Following this, H3 headers should be used to split the main sections into sub-sections. An example of where this may be appropriate is splitting a main section into multiple steps to make following the blog post easier. Lastly, there is also an H4 tag which is more rarely used but serves the same purpose of splitting into sub-sections.

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

We use a range of in-line formatting to improve the readability of our blog posts and suit readers with a wide range of technical skills. Read through the section below to understand the usage for each.

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

Another very useful Markdown formatting tool is code blocks. These are especially useful for blog posts that involve the usage of commands, scripts, terminal output and more. 

To use a code block, simply use ` ``` ` outside of the text block you wish to place into a block. You may also state the language next to the first set of triple backquotes to properly format the programming language. For example below is an example of code block usage using ` ```js ` for JavaScript language.

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Screenshots

Screenshots are an extremely useful method of guiding readers through the steps visually and we definitely recommend using these where appropriate.

You can use the following syntax to add a screenshot to your content, replacing `your_url` with the URL of the image:
```
![](your_url)
```

The best practice is to use an online image hosting site such as [Imgur](https://imgur.com/) to upload and use the image in your markdown.

## Terminology

Throughout our blog posts, there will be a wide range of key terminology that is used. Across your blog post, we expect you to use US-English localized spelling to ensure consistency across all of our blog posts. In this section, we aim to standardize some of the terminology that is likely to be commonly used.

### ZAP-Hosting products

When referencing a ZAP-Hosting product, you should always ensure that the correct name, spelling and capitalization are used. You can check this by heading over to [the ZAP-Hosting website](https://zap-hosting.com) and checking how the product is referenced on the relevant product site.

### User-defined attributes

Throughout some blog posts, configuration options for items such as users, hostnames, domains, IP addresses and URLs may be needed, where the reader will have to use their own details in place of our placeholders.

By default, you should always use `[your_attribute]` to differentiate between static elements and unique elements, where `[attribute]` should be replaced by the type of attribute. For example, when mentioning an IP, you should state `[your_server_ip]` within your blog post or when mentioning a URL you should state `http://[your_server_ip]:30120`. This clearly differentiates the attributes that the reader must change based on their own configuration. You should also provide an explanation or note letting the reader know what attributes they need to change throughout the blog post when it is first mentioned to ensure that everything is understood.

You should use `zaphosting` as the default hostname, username or database name.

### Software

When mentioning software within your blog post, you should ensure that you follow the correct spelling and capitalization for the name of the software. If the software website isn't consistent with its capitalization, ensure that you follow the same capitalization within a single article to maintain consistency.

You should hyperlink to the software's website when first mentioning the software, and where an official website is available.