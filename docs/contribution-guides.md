---
id: contribution-guides
title: Guides Process
description: Information on the guides (ZAP-Docs) contribution process for the ZAP-Hosting Community Contributions program - ZAP-Hosting.com documentation
sidebar_label: Guides Process
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Learn more about the process for contributing to our ZAP-Docs on this page. The process is written in chronological order throughout this page, thus we recommend beginning from here.

## Step 1: Suggesting Content

The first part of the process involves creating a suggestion issue via our GitHub repository. You must provide us with details about the changes and improvements that you plan to produce.

Please ensure that your idea is not a duplicate of any existing guide or suggestion and that you deeply believe will be useful for beginners or more advanced users. You can view existing suggestions by heading over to the [Issues Page](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
We recommend reviewing our [Guidelines Page](contribution-guides-guidelines.md) to understand the content and documentation style that we are pursuing.
:::

### What topics are we looking for?

In our guides, we look for a wide range of practical and high-quality guides covering products, services and open-source software that is available through ZAP-Hosting or relates to any service that we offer. If you need some ideas or inspiration, check out our pages across our ZAP-Docs to get a feel for our writing style and the type of content that we publish.

As mentioned in the introduction, all content that is produced must be original to comply with copyright laws. Any unauthorized use of AI/generative tools and/or other pieces of intellectual property is strictly disallowed. Our guides aim to provide high-quality information through a series of steps to ensure that the reader understands what they are doing and how they can do it with an end goal of educating the reader and providing them with the solution.

#### Wanted Guides List

We have a useful list of great suggestions below, for new guides that you may be interested in writing. Certain guide topics and suggestions may even have an extra reward bonus. You can access the [list manually here](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Keep in mind, these are only useful ideas, you **do not** have to strictly write about these, your guide suggestions can be creative as mentioned previously.
:::

### Submitting suggestion

Now that you are confident that your suggestion is appropriate for our documentation, please head over to our [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and open an issue using the **Contribution Suggestion** template. Please follow the template that is provided and ensure that you fill in all necessary details. You will also be requested to confirm that you accept our Terms & Conditions for the Contribution Program, which can be [accessed here](contribution-terms.md). 

:::caution
Please ensure that you fill in your ZAP ID correctly to ensure you receive your reward to the correct account!
:::

Now that you have submitted your suggestion, we aim to get back to you within 3-5 days. You will receive a reply directly within your GitHub issue.

:::tip
**Facing any troubles?** Feel free to join our [ZAP-Hosting Discord Server](https://zap-hosting.com/discord) where we and the ZAP Community will be more than happy to assist and help you out with any queries. Alternatively, contact us via a [Ticket on our website](https://zap-hosting.com/en/customer/support/) and reference "Contribution Program - Guides" within your message to be relayed to the ZAP-Hosting Contributions Team.
:::

Within our response, we will provide you with additional feedback or details that we wish to adjust regarding your suggestion. If there is an issue, we will follow this up with you directly in your GitHub issue.

## Step 2: Writing the Guide

When performing any additions or changes to our documentation, please ensure that you follow our [Contribution Guidelines](contribution-guides-guidelines.md) thoroughly to ensure consistency and a high-quality end product. In this sub-section we will dive deep into best practices and the optimal workflow for creating new content, but also for modifying existing content. If you are new to using GitHub, please use these brief tutorials below to understand the easiest way to edit or create new content for our ZAP-Docs.

:::note
Ensure that you have created a suggestion on our [GitHub Repository](https://github.com/zaphosting/docs) and that this has been approved by one of our ZAP Contribution Team members before proceeding to work on a new guide or changes. We will not be able to guarantee a reward if you haven't followed the process as it has not been approved.
:::

**Prerequisites:**
- [GitHub Account](https://github.com/)

The first step is to create your own fork of the ZAP-Hosting documentation repository from GitHub. You can do this by heading over to the [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and pressing the **Fork** button at the top of the page. 

![image](https://github.com/zaphosting/docs/assets/42719082/9bc28311-0a4c-4c25-9736-9d0eab932689)

You should name the repository based on the suggestion that was accepted and tick the `Copy the master branch only` text. Next, press the create button and await a few seconds until it has successfully forked. 

Now you can head over to the next section to create or edit content. For more advanced users, creating locally may make more sense as you can test it easily and on the go.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Methods of Creating Guides

:::tip
We recommend using **Method 1** to write your content, as this method is faster and more user-friendly, especially for new writers.
:::

<Tabs>
<TabItem value="direct" label="Method 1: Directly via GitHub Website" default>

The easiest and recommended way to create content is to do so through the GitHub website. In this section, we will show you how to create a new guide and edit an existing guide through the GitHub website.

To begin, head over to the Fork that you have created in the previous step. Once you are on your ZAP Docs fork, you can access all of the documentation guides through the **docs** folder.

![image](https://github.com/zaphosting/docs/assets/42719082/6a91889f-891d-440d-a5d3-720afc5d8abc)

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refer to the specific section. For example `dedicated-windows.md` refers to the Dedicated Server section, specifically for the Windows OS.

Now you will either have to open an existing guide file or create a new one if you are creating new content. Use the appropriate heading below to continue.

<Tabs>
<TabItem value="direct_new" label="Create a new guide file" default>

In this case, head over to the top right whilst you are in the `/docs` folder, and press **Add File**. In the menu, you should press **Create new file** which will open a new page.

![image](https://github.com/zaphosting/docs/assets/42719082/5a980882-4b47-4e40-9d15-b3b9ea2fe650)

On this page, you can set a name for your new guide at the top directory and simply begin writing your content.

:::tip
Make sure that you don't forget to add `.md` as the file extension.
:::

![image](https://github.com/zaphosting/docs/assets/42719082/562269e1-aaf7-4b07-9bbe-5641e3b54274)

</TabItem>

<TabItem value="direct_existing" label="Edit an existing guide file" default>

In this case, open up the target file that you wish to edit, in this example, we will use `dedicated-windows.md`. Now that you have opened the file, you will see a rough preview of how it looks based on Markdown (the layout may be slightly different due to beta).

Head over to the top right of the file and press the edit (pen) icon. This will open up an edit window where you can perform any changes that you have previously suggested and which have been accepted.

![image](https://github.com/zaphosting/docs/assets/42719082/49570185-b495-42d2-b74a-0b9300922758)

</TabItem>
</Tabs>

#### Continue: Creating content

Now that your file is ready, you can proceed to write the content that was agreed upon in your suggestion. We recommend saving or committing regularly to ensure that you do not potentially lose some of your work.

You can use the **Preview** button at the top of the edit window to switch to the preview mode which will display the rough preview and switch back again via the **Edit** button.

![image](https://github.com/zaphosting/docs/assets/42719082/711ae450-e8c7-4a03-b358-4c5cf2caa7ba)

:::note
Please keep in mind that some Docusaurus-specific elements such as admonitions (tags like `:::note`, `:::tip` etc.) may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however, they will display correctly during local testing and production.
:::

Please refer to the [ZAP Guides Guidelines](contribution-guides-guidelines.md) for everything regarding Markdown, structure, terminology and more.

Once you have performed your changes, use the **Commit changes...** button which will display a prompt.

![image](https://github.com/zaphosting/docs/assets/42719082/1c401a6f-71ef-4853-8d9e-3f5e400f2c2c)

Enter a useful commit message that explains what you have done and an extended description where appropriate. Finally, commit the changes. This will commit it to your fork of the docs. You may now head over to the **Submitting Content** section to create a Pull Request to submit the content to our main ZAP-Hosting Docs Repository.

</TabItem>


<TabItem value="local" label="Method 2: Locally via IDE (git cloning)">

You may prefer to write content locally via an IDE or editor such as Visual Studio Code. In this section, we will show you how to create a new guide and edit an existing guide locally through an editor.

**Prerequisites:**
- IDE of choice, in this example we will use [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

The first part of the process is to clone your fork repository. The simpler and more user-friendly way of doing this is through GitHub Desktop by selecting **Add**, followed by **Clone repository** and choosing your fork repository. You may also do this directly through the Visual Studio Code application.

![image](https://github.com/zaphosting/docs/assets/42719082/75f02edb-0b46-4c5a-a4ca-c1fd2f49a1c3)

Next, open up the repository folder within Visual Studio Code. On the **Explorer** left tab you should see all of the folders within the repository.

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refer to the specific section. We recommend looking at the current website to find the correct place in which your suggested guide will fit.

<Tabs>
<TabItem value="local_new" label="Create a new guide file" default>

In this case, we suggested in our issue that we want to create a new guide about the game Rust containing a range of useful commands. From the website, we can see that there is already an existing **Rust** section under gameservers, so we can check within the **docs** folder in our IDE to find the correct naming convention. This means that the file name of the guide will be `rust-commands.md`. Create this file within the **docs** folder.

The next part involves placing the top file metadata. The easiest way of doing this, is by heading over to another file, for example `rust-plugins.md`. From this file, copy and paste the top metadata tags into your new file. You should edit the `id` tag to match the name of your file, in this case `rust-commands`, and edit the other metadata based on your accepted suggestion for the new guide.

The file should now begin with (following the example):
```
---
id: rust-commands
title: Admin Commands
description: Information on Admin commands for Rust from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Admin Commands
---
```

The final step for ensuring that your newly created page shows up on the sidebar is to add it to the `sidebar.js` file in the correct place. Since the **Rust** section already exists, we can find it using `CTRL+F` and searching for rust. Under the last item, you should create a new line and enter the name of your file, in this example, it will be `rust-commands`.

![image](https://github.com/zaphosting/docs/assets/42719082/c5480a84-1778-4c62-928a-928fd4da962e)

:::note
Ensure that you add a comma (`,`) on the line before your new line so that the syntax is correct. 
:::

</TabItem>

<TabItem value="local_existing" label="Edit an existing guide file" default>

Editing an existing file is very simple, as you will not have to set the entire file structure up.

Simply open up the target guide file that you wish to edit within the `/docs` folder and you are ready to proceed and perform any changes that you have previously suggested and which have been accepted.

</TabItem>
</Tabs>

#### Continue: Creating Content

Now that your file is ready, you can proceed to write the content that was agreed upon in your suggestion. We recommend saving or committing regularly to ensure that you do not potentially lose some of your work.

You can use `CTRL+SHIFT+V` or press the preview icon in the top right of the editor to split view the IDE which will let you see your Markdown changes live. 

:::note
Please keep in mind that some Docusaurus-specific elements such as admonitions (tags like `:::note`, `:::tip` etc.) may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however, they will display correctly during local testing and production.
:::

![image](https://github.com/zaphosting/docs/assets/42719082/95effdaa-ab2d-4556-832c-dad33834d636)

Please refer to the [ZAP Guides Guidelines](contribution-guides-guidelines.md) for everything regarding Markdown, structure, terminology and more.

Once you are finished with the changes to your guide, the last step of the entire process is to push a commit to your fork repository and submit a Pull Request. You can create a commit through the GitHub Desktop by adding an appropriate title and description and pushing via the top button. Likewise, you can do this directly through Visual Studio Code if you prefer. You may now head over to the **Submitting Content** section to create a Pull Request to submit the content to our ZAP-Hosting Docs Repository.

:::tip
We recommend that you also read the optional **Testing build locally** section, as you can pair this section with testing locally to create an optimal workflow where changes are updated on your local build on-the-go which is proven to be very useful. However, this is not necessary.
:::

</TabItem>
</Tabs>

### Optional: Testing build locally

Before creating the final Pull Request, it is typically best practice to locally build and test to ensure everything is working correctly with the changes that you have made. We recommend that you test your changes locally to ensure that your Pull Request is processed swiftly. However, this is not required and you may proceed to the next section if you wish.

:::tip
This is **NOT** required, as we automatically run a build when you submit a Pull Request. However, you may find this useful to debug and live-test locally.
:::

:::note
If you followed the tutorial to create changes locally, you can skip the first step involving cloning your repository as you should already have it.
:::

**Prerequisites:**
- [Node.js v16.14 or above](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) or [Git](https://git-scm.com/)

The first part of the process is to clone your fork repository. The simpler and more user-friendly way of doing this is through GitHub Desktop by selecting **Add**, followed by **Clone repository** and choosing your fork repository. 

Likewise, you can use Git to achieve this. Create a new folder, in this case, we will use `Docs Test`. Enter the folder and open Git Bash (right-click and press Git Bash on Windows). Head over to GitHub and take note of the URL of your fork. Next, run the following command replacing `[your_url]` with the URL of your fork:
```
git clone [your_url]
```

Now you should have the repository cloned to your local machine regardless of which method you have used. The next step involves downloading all of the required modules. Simply head over to the folder you used for your repository, right click and open a cmd terminal (or you can use the git window). Run the following command which will download all of the modules:
```
npm install
```

This may take some time, but once complete it should create a `node_modules` folder within your repo folder. If you receive any errors, it is likely that you haven't installed the Node.js prerequisite.

The final step is running the documentation site locally. Use the following command to build the docs website:
```
npm start
```

Once this is complete, a local version of the website should automatically open in your default browser on the `3000` port. This local version is exactly how the documentation will look like during production and here you can test out anything you wish!

Once you are satisfied with your changes, you may now head over to the next section to create a Pull Request to submit the content to the main documentation repository.

## Step 3: Submitting Content

Once you have made your necessary contributions which you believe follow our guidelines closely and are of the highest standard, you may create a Pull Request. You can do this by heading over to your fork of the ZAP Docs repository, pressing the **Contribute** text found below the primary buttons and opening a pull request.

![image](https://github.com/zaphosting/docs/assets/42719082/d08ce65e-2c21-4110-97d4-a15588172db4)

A new page will open up where you can view the changes that you have produced. By default, the description will contain a small checklist to ensure that you have done everything correctly and comprehensively. You may delete this template once you have browsed it as it is not needed.

Next, please set an appropriate title that explains what has been done. Within the description, please ensure that you mention/link your suggestion by using `#000` alongside the ID of the suggestion. If you can't find it via the menu, you can quickly head over to the main [ZAP Docs GitHub repository](https://github.com/zaphosting/docs), enter the issues section and look for your suggestion alongside the ID number it has.

Once you have populated the title, description and ensured that the changes are correct, you may create your pull request via the button to submit it to our Repository.

![image](https://github.com/zaphosting/docs/assets/42719082/fc04a359-bffc-459b-89fd-94eee74e4a71)

Our system will ensure that your changes pass a range of syntax and quality checks. If both of these checks pass successfully, your Pull Request will finally be reviewed by the ZAP-Hosting docs team within a couple of days. 

Upon review of your Pull Request, we may ask you to produce a few changes that we feel are necessary. We may also make some changes ourselves where we believe it is appropriate. Once any additional changes are completed, we will approve your change so that it is ready to be published.

## Step 4: Publish guide changes & reward payment

Once we finally accept your Pull Request after completing any requested changes, we will reply to your Pull Request and let you know about key details regarding this. This includes providing information about publishing your guide changes, as well as your reward payment for completing your guide changes successfully.

:::info
The reward for this type of contribution will depend on a couple of factors, most notably the quality and scale of content written, alongside other criteria that are evaluated by the ZAP Contribution Team. Read more about our criteria in our [Contribution Rewards guide](contribution-rewards.md).
:::

Congratulations on contributing to our ZAP-Hosting Guides! We appreciate all your contributions! 💚