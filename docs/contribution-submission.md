---
id: contribution-submission
title: Submission Process
description: Information on the submission process for the ZAP-Hosting docs contribution program - ZAP-Hosting.com documentation
sidebar_label: Submission Process
---

Learn more about the process for contributing to our documentation on this page, following in chronological order.

### Registering for the program
The first part of the process is ensuring that you have linked up your GitHub account. Head over to the zap-hosting.com website and login to your account. Next, head over into your settings and to the connections section, where you can link your GitHub account with your ZAP-Hosting account. You may now continue to suggest your contribution idea knowing that you are part of the contribution program.

## Suggesting Content
Next is the most important step which you must complete before contributing. You must provide us with details about the changes and improvements that you plan to produce. Please ensure that your idea is not a duplicate of any existing docs pages and which you believe will be useful for beginners or more advanced users.

:::tip
Use our guidelines page to understand the content and documentation style that we are looking for.
:::

### What topics are we looking for?
For our contribution program, we look for a wide range of practical and high-quality guides covering products, services and open-source software that is available through ZAP-Hosting or relates to any service that we offer. If you need some ideas or inspiration, check out our pages across our documentation to get a feel for our writing style and the type of content that we publish.

As mentioned in the introduction, all content that is produced must be original in order to comply with copyright laws. Our guides aim to provide high-quality information through a series of steps to ensure that the reader understands what they are doing and how they can do it with an end goal of educating the reader and providing them with the solution.

### Submitting suggestion

Now that you are are confident that your suggestion is appropirate for our documentation, please head over to our [GitHub repository](https://github.com/zaphosting/docs) and open a issue using the "Contribution Suggestion" template. Please follow the template that is provided and ensure that you fill in all necessary details. Once you have submitted, we aim to get back to you within a few days.

Once we approve your suggestion, your change will qualify for the contribution program and we will send you a contract to sign which will let us publish your work! Otherwise if there is an issue, we will follow up with you and let you know any proposed changes that we would like in order to accept your suggestion.

## Producing content
When performing any contribution to your documentation, please keep in mind to follow our contribution guidelines thoroughly to ensure consistency and a high-quality end product. In this sub-section we will dive deep into best practises and the optimal workflow for creating new content, but also for modifying existing content. If you are new to using GitHub, please use these brief tutorials below to understand the easiest way to edit or create new content for our documentation site.

:::note
Ensure that you have suggested your content and that it has been approved before attempting to produce changes, otherwise we cannot guarantee a reward because the idea has not been approved.
:::

The first step is to create your own fork of the ZAP-Hosting documentaiton repository from GitHub. You can do this by heading over to the [GitHub repository](https://github.com/zaphosting/docs) and pressing the **Fork** button at the top of the page. You should name the repository based on the suggestion that was accepted and tick the `Copy the master branch only` text. Next, press the create button and await a few seconds until it has successfully forked. 

Now you can head over to the next section based on what your accepted suggestion involved (creating or modifying content).

### Creating New content
.


### Modifying Existing content
The easiest and recommended way to edit existing content is doing so through the GitHub website. To begin, head over to the Fork that you have created in the previous step. Once you are on your ZAP Docs fork, you can access all of the documentation guides through the **docs** folder. 

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refering to the specific section. For example `dedicated-windows.md` refers to the Dedicated Server section, and specifically for the Windows OS.

In this case, open up the target file that you wish to edit, in this example we will use `dedicated-windows.md`. Now that you have opened the file, you will see a rough preview of how it looks based on Markdown. 

Head over to the top right of the file and press the edit (pen) icon. This will open up an edit window where you can perform any changes that you have previously suggested and which has been accepted.

You can use the **Preview** button at the top of the edit window to switch to the preview mode which will display the rough preview and switch back again via the **Edit** button.

:::note
Please keep in mind that some docusaurus-specific elements such as admonitions may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however they will display correctly during local testing and production. 
:::

Please refer to the [ZAP Documentation Guidelines](contribution.guidelines) for everything regarding Markdown, structure, terminology and more.

Once you have performed your changes, use the **Commit changes...** button which will display a prompt. Enter a useful commit message which explains what you have done and an extended description where appropriate. Finally, commit the changes. This will commit it to your fork of the docs. You may now head over to the next section to create a Pull Request to submit the content to the main documentation repository.

### Testing changes locally
Before creating the final Pull Request, it is a best practise to locally build and test out the documentatiton to ensure everything is working correctly with the changes that you have made. We highly recommend that you test your changes locally to ensure that your Pull Request is processes swiftly.

**Prerequisites:**
- [Node.js v16.14 or above](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) or [Git](https://git-scm.com/)

The first part of the process is to clone your fork repository. The simpler and a more user-friendly way of doing this is through GitHub Desktop by selecting **Add**, followed by **Clone repository** and choosing your fork repository. 

Likewise, you can use Git to achieve this. Create a new folder, in this case we will use `Docs Test`, enter the folder and Git Bash (right click and press Git Bash on Windows). Head over to GitHub and take note of the URL of your fork. Next run the following command replacing `your_url` with the URL of your fork:
```
git clone your_url
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

### Finally, how do I submit content?
Once you have done your necessary contributions which you believe follow our guidelines closely and is of the highest standard, you may create a Pull Request. You can do this by heading over to your own fork of the ZAP Docs repository, pressing the **Contribute** text found below the primary buttons and opening a pull request.

A new page will open up where you can view the changes that you have produced. Please set an appropriate title which explains what has been done. Within the description, please ensure that you mention/link your suggestion by using `#000` alongside the id of the suggestion. If you can't find it via the menu, you can quickly head over to the main [GitHub repository](https://github.com/zaphosting/docs), enter the issues section and look for your suggestion alongside the id number it has.

Once you have populated the title, description and ensured that the changes are correct, you may create your pull request via the button.

Our system will check to ensure that you have linked your GitHub account with your ZAP-Hosting account for the contribution program. The system will also ensure that your changes pass range of syntax and quality checks. If both of these checks pass successfully, your Pull Request will finally be reviewed by the ZAP-Hosting docs team within a couple of days. We may ask you to produce a few changes where we feel necessary, but once this is approved, your change will be ready to publish and you will receive your reward.