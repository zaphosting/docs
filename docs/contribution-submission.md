---
id: contribution-submission
title: Submission Process
description: Information on the submission process for the ZAP-Hosting docs contribution program - ZAP-Hosting.com documentation
sidebar_label: Submission
---

Learn more about the process for contributing to our documentation on this page, following in chronological order.

## Suggesting Content
The first part of the process involves creating a suggestion issue via our repository. You must provide us with details about the changes and improvements that you plan to produce. Please ensure that your idea is not a duplicate of any existing docs pages and which you believe will be useful for beginners or more advanced users.

:::tip
Use our guidelines page to understand the content and documentation style that we are looking for.
:::

### What topics are we looking for?
For our contribution program, we look for a wide range of practical and high-quality guides covering products, services and open-source software that is available through ZAP-Hosting or relates to any service that we offer. If you need some ideas or inspiration, check out our pages across our documentation to get a feel for our writing style and the type of content that we publish.

As mentioned in the introduction, all content that is produced must be original in order to comply with copyright laws. Our guides aim to provide high-quality information through a series of steps to ensure that the reader understands what they are doing and how they can do it with an end goal of educating the reader and providing them with the solution.

### Submitting suggestion
Now that you are are confident that your suggestion is appropriate for our documentation, please head over to our [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and open a issue using the "Contribution Suggestion" template. Please follow the template that is provided and ensure that you fill in all necessary details. You will also be requested to confirm that you accept our Terms & Conditions for the Contribution Program, which can be [accessed here](https://zap-hosting.com/guides/docs/contribution-terms). Once you have submitted, we aim to get back to you within a few days.

:::caution
Please ensure that you fill in your ZAP ID correctly to ensure you receive your reward to the correct account!
:::

Once we approve your suggestion, your change will qualify for the contribution program and we will send you a contract to sign which will let us publish your work! Otherwise if there is an issue, we will follow up with you and let you know any proposed changes that we would like in order to accept your suggestion.

## Producing content
When performing any contribution to our documentation, please keep in mind to follow our contribution guidelines thoroughly to ensure consistency and a high-quality end product. In this sub-section we will dive deep into best practises and the optimal workflow for creating new content, but also for modifying existing content. If you are new to using GitHub, please use these brief tutorials below to understand the easiest way to edit or create new content for our documentation site.

:::note
Ensure that you have suggested your content and that it has been approved before attempting to produce changes, otherwise we cannot guarantee a reward because the idea has not been approved.
:::

**Prerequisites:**
- [GitHub Account](https://github.com/)

The first step is to create your own fork of the ZAP-Hosting documentaiton repository from GitHub. You can do this by heading over to the [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) and pressing the **Fork** button at the top of the page. 

![image](https://github.com/zaphosting/docs/assets/42719082/9bc28311-0a4c-4c25-9736-9d0eab932689)

You should name the repository based on the suggestion that was accepted and tick the `Copy the master branch only` text. Next, press the create button and await a few seconds until it has successfully forked. 

Now you can head over to the next section to create or edit content. For more advanced users, creating locally may make more sense as you can test it easily and on-the-go.

### Creating locally via editor
The recommended way to **create new content** is to do so through locally via an editor such as Visual Studio Code. In this section, we will show you how to create a new guide locally through an editor.

**Prerequisites:**
- IDE of choice, in this example we will use [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/)

The first part of the process is to clone your fork repository. The simpler and a more user-friendly way of doing this is through GitHub Desktop by selecting **Add**, followed by **Clone repository** and choosing your fork repository. You may also do this directly through the Visual Studio Code application.

![image](https://github.com/zaphosting/docs/assets/42719082/75f02edb-0b46-4c5a-a4ca-c1fd2f49a1c3)

Next, open up the repository folder within Visual Studio Code. On the **Explorer** left tab you should see all of the folders within the repository. We will focus on creating a new page.

The first step is determining the correct name for your new guide file. The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refering to the specific section. We recommend looking at the current website to find the correct place which your suggested guide will fit into.

In this case, we suggested in our issue that we want to create a new guide about the game Rust containing a range of useful commands. From the website, we can see that there is already an existing **Rust** section under gameservers, so we can check within the **docs** folder in our IDE to find the correct naming convention. This means that the file name of the guide will be `rust-commands.md`. Create this file within the **docs** folder.

The next part involves placing the top file metadata. The easiest way of doing this, is by heading over to another file, for example `rust-plugins.md`, and copy and pasting the top metadata tags into your new file. You should edit the `id` tag to match the name of your file, in this case `rust-commands` and edit the other metadata based on your accepted suggestion for the new guide.

The file should now begin with (following the example):
```
---
id: rust-commands
title: Admin Commands
description: Information on Admin commands for Rust from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Admin Commands
---
```

The final step for ensuring that your newly created page shows up on the sidebar, is to add it to the `sidebar.js` file into the correct place. Since the **Rust** section already exists, we can find it using `CTRL+F` and searching for rust. Under the last item, you should create a new line and enter the name of your file, in this example it will be `rust-comamnds`.

![image](https://github.com/zaphosting/docs/assets/42719082/c5480a84-1778-4c62-928a-928fd4da962e)

:::note
Ensure that you add a comma (`,`) on the line before your new line so that the syntax is correct. 
:::

Now head back to your new guide file. You can use `CTRL+SHIFT+V` or press the preview icon in the top right of the editor to split view the IDE which will let you see your Markdown changes live. Your new guide file is now ready to go, and you may begin writing and creating your content within it.

![image](https://github.com/zaphosting/docs/assets/42719082/95effdaa-ab2d-4556-832c-dad33834d636)

:::tip
We highly suggest that you also read the **Testing build locally** section, as you can pair this section with testing locally to create an optimal workflow where changes are updated on your local build on-the-go which is proven to be very useful.
:::

Once you are finished with the changes to your new guide, the last step of the entire process is to push a commit to your fork repository and submit a Pull Request. You can create a commit through the GitHub Desktop by adding an appropriate title and descrption and pushing via the top button. Likewise, you can do this directly through Visual Studio Code if you prefer. You may now head over to the **Submit Content** section to create a Pull Request to submit the content to the main documentation repository.

### Editing via GitHub website
The easiest and recommended way to **edit existing content** is doing so through the GitHub website. In this section, we will show you how to edit existing guides through the GitHub website.

To begin, head over to the Fork that you have created in the previous step. Once you are on your ZAP Docs fork, you can access all of the documentation guides through the **docs** folder.

![image](https://github.com/zaphosting/docs/assets/42719082/6a91889f-891d-440d-a5d3-720afc5d8abc)

The documentation files are named in a simple convention, where the first word refers to the type of guide, typically a game, product or section and any following words refering to the specific section. For example `dedicated-windows.md` refers to the Dedicated Server section, and specifically for the Windows OS.

In this case, open up the target file that you wish to edit, in this example we will use `dedicated-windows.md`. Now that you have opened the file, you will see a rough preview of how it looks based on Markdown (layout may be slightly different due to beta).

Head over to the top right of the file and press the edit (pen) icon. This will open up an edit window where you can perform any changes that you have previously suggested and which has been accepted.

![image](https://github.com/zaphosting/docs/assets/42719082/49570185-b495-42d2-b74a-0b9300922758)

You can use the **Preview** button at the top of the edit window to switch to the preview mode which will display the rough preview and switch back again via the **Edit** button.

![image](https://github.com/zaphosting/docs/assets/42719082/711ae450-e8c7-4a03-b358-4c5cf2caa7ba)

:::note
Please keep in mind that some docusaurus-specific elements such as admonitions may not show up correctly when previewing through GitHub. This is because they aren't part of traditional Markdown, however they will display correctly during local testing and production. 
:::

Please refer to the [ZAP Documentation Guidelines](https://zap-hosting.com/guides/docs/contribution-guidelines) for everything regarding Markdown, structure, terminology and more.

Once you have performed your changes, use the **Commit changes...** button which will display a prompt.

![image](https://github.com/zaphosting/docs/assets/42719082/1c401a6f-71ef-4853-8d9e-3f5e400f2c2c)

Enter a useful commit message which explains what you have done and an extended description where appropriate. Finally, commit the changes. This will commit it to your fork of the docs. You may now head over to the **Submit Content** section to create a Pull Request to submit the content to the main documentation repository.

### Testing build locally
Before creating the final Pull Request, it is a best practise to locally build and test out the documentatiton to ensure everything is working correctly with the changes that you have made. We highly recommend that you test your changes locally to ensure that your Pull Request is processes swiftly.

:::note
If you followed the tutorial to create changes locally, you can skip the first step involving cloning your repository as you should already have it.
:::

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

### Submitting Content
Once you have done your necessary contributions which you believe follow our guidelines closely and is of the highest standard, you may create a Pull Request. You can do this by heading over to your own fork of the ZAP Docs repository, pressing the **Contribute** text found below the primary buttons and opening a pull request.

![image](https://github.com/zaphosting/docs/assets/42719082/d08ce65e-2c21-4110-97d4-a15588172db4)

A new page will open up where you can view the changes that you have produced. Please set an appropriate title which explains what has been done. Within the description, please ensure that you mention/link your suggestion by using `#000` alongside the id of the suggestion. If you can't find it via the menu, you can quickly head over to the main [ZAP Docs GitHub repository](https://github.com/zaphosting/docs), enter the issues section and look for your suggestion alongside the id number it has.

Once you have populated the title, description and ensured that the changes are correct, you may create your pull request via the button.

![image](https://github.com/zaphosting/docs/assets/42719082/fc04a359-bffc-459b-89fd-94eee74e4a71)

Our system will ensure that your changes pass range of syntax and quality checks. If both of these checks pass successfully, your Pull Request will finally be reviewed by the ZAP-Hosting docs team within a couple of days. We may ask you to produce a few changes where we feel necessary, but once this is approved, your change will be ready to publish and you will receive your reward.