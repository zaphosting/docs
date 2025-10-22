---
id: contribution-guides
title: Guides Process
description: "Discover how to contribute valuable, original guides to ZAP-Docs and help educate users with clear, practical content → Learn more now"
sidebar_label: Guides Process
---

![Guides Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Learn more about the process for contributing to our ZAP-Docs on this page. The process is written in chronological order throughout this page, thus we recommend beginning from here.

## Step 1: Suggesting Content

The first part of the process involves creating a suggestion issue via our GitHub repository. You must provide us with details about the changes and improvements that you plan to produce.

Please ensure that your idea is not a duplicate of any existing guide or suggestion and that you deeply believe will be useful for beginners or more advanced users. You can view existing suggestions by heading over to the [Issues Page](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
We recommend reviewing our [Guidelines](contribution-guides-guidelines.md) to understand the content and documentation style that we are pursuing.
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

Now that you are confident that your suggestion is appropriate for our documentation, please head over to our [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and open an issue using the **Contribution Suggestion** template. Please follow the template that is provided and ensure that you fill in all necessary details. You will also be requested to confirm that you accept our Terms & Conditions for the Contribution Program, which can be [Contribution Terms](contribution-terms.md). 

:::caution
Please ensure that you fill in your ZAP ID correctly to ensure you receive your reward to the correct account!
:::

Now that you have submitted your suggestion, we aim to get back to you within 3-5 days. You will receive a reply directly within your GitHub issue.

:::tip
**Facing any troubles?** Feel free to join our [ZAP-Hosting Discord Server](https://zap-hosting.com/discord) where we and the ZAP Community will be more than happy to assist and help you out with any queries. Alternatively, contact us via a [Ticket on our website](https://zap-hosting.com/en/customer/support/) and reference "Contribution Program - Guides" within your message to be relayed to the ZAP-Hosting Contributions Team.
:::

Within our response, we will provide you with additional feedback or details that we wish to adjust regarding your suggestion. If there is an issue, we will follow this up with you directly in your GitHub issue.

## Step 2: Writing the Guide

When performing any additions or changes to our documentation, please ensure that you follow our [Guidelines](contribution-guides-guidelines.md) thoroughly to ensure consistency and a high-quality end product. In this sub-section we will dive deep into best practices and the optimal workflow for creating new content, but also for modifying existing content. If you are new to using GitHub, please use these brief tutorials below to understand the easiest way to edit or create new content for our ZAP-Docs.

:::note
Ensure that you have created a suggestion on our [GitHub Repository](https://github.com/zaphosting/docs) and that this has been approved by one of our ZAP Contribution Team members before proceeding to work on a new guide or changes. We will not be able to guarantee a reward if you haven't followed the process as it has not been approved.
:::

**Prerequisites:**
- [GitHub Account](https://github.com/)

The first step is to create your own fork of the ZAP-Docs repository from GitHub. You can do this by heading over to the [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and pressing the **Fork** button at the top of the page. 

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

You should name the repository based on the suggestion that was accepted and tick the `Copy the master branch only` text. Next, press the create button and await a few seconds until it has successfully forked.

With your own repository fork ready, you can now proceed to the following section to complete your contribution. There are two main methods of producing content, either directly through the GitHub website or cloning the repository locally. The benefit of the first is that it is much more user-friendly, where as the benefit of locally is that you can test run Docusaurus beforehand to view live changes.

:::tip
For beginners or those without much experience with Git, we recommend using **Method 1** to write your content as it is more user-friendly, faster and all done through a web browser via the GitHub website. This approach is much more hassle-free as it requires no local setup.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Methods of Creating Guides

<Tabs>
<TabItem value="direct" label="Method 1: Directly via GitHub Website" default>

The easiest and recommended way to create content is to do so through the GitHub website. In this section, we will show you how to create a new guide and edit an existing guide through the GitHub website.

To begin, head over to the Fork that you have created in the previous step. Once you are on your ZAP Docs fork, you can access all of the documentation guides through the **docs** folder.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refer to the specific section. We recommend looking at our current live [ZAP-Docs Website](https://zap-hosting.com/guides) to browse and find the correct area a guide would belong in. As an example, `dedicated-windows.md` refers to the Dedicated Server section, specifically for the Windows OS.

Now you will either have to open an existing guide file or create a new one based on whether your contribution is relevant to updating a guide or creating a new guide. Use the appropriate tab below to get the relevant instructions, as a new guide requires some extra file preparation.

<Tabs>
<TabItem value="direct_new" label="Create a new guide file" default>

In this example, our suggestion was to create a new guide for the game Rust, specifically about commands that the game provides. From checking the ZAP-Docs website and/or the repository, we can see that a **Rust** section already exists under the game servers product category. Based on the naming convention mentioned previously and the existing guides, we can infer that the new guide should be called `rust-commands.md`.

Now to create a new file, head over to the [GitHub Repository](https://github.com/zaphosting/docs), open the **docs** folder and on the right-hand side of the screen, select **Add File**. In the meny, you should press the **Create new file** option which will open a new tab.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

At the top of the page within the file path directory, you can set the name of the file. As we have established before, this will be `rust-commands.md` in our example.

:::info
Please ensure that you add the `.md` file extension as all guides are in the Markdown format.
:::

Now the next part involves adding key metadata at the beginning of the file. The easiest way to do this is by going into another file such as `rust-plugins.md` and copying over the top metadata tags. Then you can simply adjust each value to match your new guide, with the most important one being the `id` field which **must** match your file name (without `.md`).

Using our example, the file should now contain the following:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information on Admin commands for Rust from ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
We double check the metadata during our review process, so don't worry if you are facing troubles with this and simply proceed.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Edit an existing guide file" default>

In this case, you will have to open up the target file that you wish to edit. In this example, we will use `dedicated-linux-satisfactory.md` which you can find in the `/docs` folder on the repository. Now that you have opened the file, you will see a rough preview of how it looks based on Markdown.

Head over to the top right of the file and press the edit (pen) icon. This will open up a new tab where you can edit the file directly.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Continue: Creating content

Now that you have prepared and opened your file, you can proceed to write the content that was agreed upon in your suggestion. We recommend saving or committing regularly to ensure that you do not potentially lose some of your work.

:::tip Keep Your Work Safe
Whilst writing your content, please ensure that you regularly commit or make copies of the content as the editor on GitHub does not have any auto-save functionality, meaning if you close a browser tab or something occurs, you may lose progress.

We can **highly recommend** using the Markdown tool **[StackEdit](https://stackedit.io/app#)** to write your content as this allows you to store progress locally and even sync it to your drive or various accounts if you wish. Once you are finished, you can then simply copy and paste the contents into the file on the GitHub website and commit.
:::

You can use the **Preview** button at the top of the edit window to switch to the preview mode which will display the rough preview and switch back again via the **Edit** button.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus Elements
Please keep in mind that some Docusaurus-specific elements such as admonitions (tags like `:::note`, `:::tip` etc.) or tabs may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however, they will display correctly during local testing and production.
:::

:::info Follow our Guidelines
Please refer to the [Guidelines](contribution-guides-guidelines.md) for everything regarding Markdown, structure, terminology and more.
:::

Once you have performed your changes, use the **Commit changes...** button which will display a prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/2iQCZzzAHsHS2rt/preview)

Enter a useful commit message that explains what you have done and an extended description where appropriate. Finally, commit the changes. This will commit it to your fork of the docs. You may now head over to the **Submitting Content** section to create a Pull Request to submit the content to our main ZAP-Docs Repository.

</TabItem>

<TabItem value="local" label="Method 2: Locally via IDE (git cloning)">

You may prefer to write content locally via an IDE or editor such as Visual Studio Code. In this section, we will show you how to create a new guide and edit an existing guide locally through an editor.

**Prerequisites:**
- IDE of choice, in this example we will use [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) (or anything else with Git functionality)

The first part of the process is to clone your fork repository. The simpler and more user-friendly way of doing this is through GitHub Desktop by selecting **Add**, followed by **Clone repository** and choosing your fork repository. You may also do this directly through the IDE if it has Git functionality.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Next, open up the repository folder within Visual Studio Code. On the **Explorer** left tab you should see all of the folders within the repository.

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refer to the specific section. We recommend looking at our current live [ZAP-Docs Website](https://zap-hosting.com/guides) to browse and find the correct area a guide would belong in. As an example, `dedicated-windows.md` refers to the Dedicated Server section, specifically for the Windows OS.

Now you will either have to open an existing guide file or create a new one based on whether your contribution is relevant to updating a guide or creating a new guide. Use the appropriate tab below to get the relevant instructions, as a new guide requires some extra file preparation.

<Tabs>
<TabItem value="local_new" label="Create a new guide file" default>

In this example, our suggestion was to create a new guide for the game Rust, specifically about commands that the game provides. From checking the ZAP-Docs website and/or the repository, we can see that a **Rust** section already exists under the game servers product category. Based on the naming convention mentioned previously and the existing guides, we can infer that the new guide should be called `rust-commands.md`.

Open up the `/docs` folder in your IDE and create a new file with the approrpiate name for your new guide.

:::info
Please ensure that you add the `.md` file extension as all guides are in the Markdown format.
:::

Now the next part involves adding key metadata at the beginning of the file. The easiest way to do this is by going into another file such as `rust-plugins.md` and copying over the top metadata tags. Then you can simply adjust each value to match your new guide, with the most important one being the `id` field which **must** match your file name (without `.md`).

Using our example, the file should now contain the following:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Information on Admin commands for Rust from ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
We double check the metadata during our review process, so don't worry if you are facing troubles with this and simply proceed.
:::

The final step for ensuring that your newly created page shows up on the sidebar on Docusuarus, is to add it to the `sidebar.js` file in the correct section. Since the **Rust** section already exists, we can find it using `CTRL+F` and searching for rust.

Under the last item, you should create a new line and enter the name of your file, in our example, this is `rust-commands`. If an appropriate section doesn't exist yet, you can simply follow the formatting from other sections to add a new section.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

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

You can use the `CTRL+SHIFT+V` shortcut or press the preview icon in the top right of the editor to split view the IDE which will let you see your Markdown changes live as you edit.

:::note Docusaurus Elements
Please keep in mind that some Docusaurus-specific elements such as admonitions (tags like `:::note`, `:::tip` etc.) may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however, they will display correctly during local testing and production.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Follow our Guidelines
Please refer to the [Guidelines](contribution-guides-guidelines.md) for everything regarding Markdown, structure, terminology and more.
:::

Once you are finished with the changes to your guide, the last step of the entire process is to push a commit to your fork repository and submit a Pull Request. You can create a commit through GitHub Desktop (or any other Git application) by adding an appropriate title and description and pushing via the top button.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

You may now head over to the **Submitting Content** section to create a Pull Request to submit the content to our ZAP-Docs Repository.

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

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

A new page will open up where you can view the changes that you have produced. By default, the description will contain a small checklist to ensure that you have done everything correctly and comprehensively. You may delete this template once you have browsed it as it is not needed.

Next, please set an appropriate title that explains what has been done. Within the description, please ensure that you mention/link your suggestion by using `#000` alongside the ID of the suggestion. If you can't find it via the menu, you can quickly head over to the main [ZAP Docs GitHub repository](https://github.com/zaphosting/docs), enter the issues section and look for your suggestion alongside the ID number it has.

Once you have populated the title, description and ensured that the changes are correct, you may create your pull request via the button to submit it to our Repository.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Our system will ensure that your changes pass a range of syntax and quality checks. If both of these checks pass successfully, your Pull Request will finally be reviewed by the ZAP-Docs team within a couple of days. 

Upon review of your Pull Request, we may ask you to produce a few changes that we feel are necessary. We may also make some changes ourselves where we believe it is appropriate. Once any additional changes are completed, we will approve your change so that it is ready to be published.

## Step 4: Publish guide changes & reward payment

Once we finally accept your Pull Request after completing any requested changes, we will reply to your Pull Request and let you know about key details regarding this. This includes providing information about publishing your guide changes, as well as your reward payment for completing your guide changes successfully.

:::info
The reward for this type of contribution will depend on a couple of factors, most notably the quality and scale of content written, alongside other criteria that are evaluated by the ZAP Contribution Team. Read more about our criteria in our [Rewards](contribution-rewards.md).
:::

Congratulations on contributing to our ZAP-Hosting Guides! We appreciate all your contributions! 💚