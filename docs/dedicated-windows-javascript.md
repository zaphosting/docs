---
id: dedicated-windows-javascript
title: "Setup JavaScript Runtime on a Windows Server - Enable Modern Web Application Execution"
description: "Discover how to install and set up Node.js, Deno, and Bun on Windows to run JavaScript efficiently → Learn more now"
sidebar_label: Install JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide provides steps for the installation of Node.js, Deno and Bun on Windows. The steps provided below must be executed via RDP, if you don't know how to connect to your server via RDP, please have a look at our [Initial Access (RDP)](vserver-windows-userdp.md) guide.



## Installation

To begin, you need to decide which JavaScript runtime to install. There are plenty of online resources describing each one in much detail. But you can also read this guide because it will include basic usage commands and code examples. We can recommend using Node.js as it is one of the most widely used and a very popular choice.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## Installing Node.js Runtime

### Step 1: Downloading Files
Open up the browser of your choice (I'm going to use Chrome for this guide) and head over to [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

Now click on the `Download Node.js (LTS)` button and wait for it to finish.

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
It is generally recommended to keep your installation on the latest Long Term Support (LTS) version.
:::

### Step 2: Installing Python
Run the installer by clicking on it. Now you will be prompted to set a few settings for the installation. On the `Welcome` page you should click `Next`.

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

Now you need to read and accept (by marking the checkbox) the Node.js License Agreement and then click on the `Next` button.

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

After that you will be asked for a location to install Node.js.

:::note
We recommend using the default install location.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

On the next page, you can opt out of installing some of Node.js core packages. If you want a normal installation, which is recommended, simply press on the `Next` button. You will also have an option to install Chocolatey, but this is not needed.

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### Step 3: Completing Installation
That's all you can now click `Install` and wait for everything to be set up. Be patient as this may take some time. :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

Once finished, you can simply press `Finish` on the final page and start using Node.js on your server.

### Update Node.js to latest version

Running `node -v` will show you the installed version of Node.js. From time to time, you should check that you're running the latest LTS version. To update Node.js, you need to follow the provided [Install JavaScript](dedicated-windows-javascript.md) guide section again.

### Running Node.js & npm

npm is the official package manager of Node.js. You will use it for installing any packages from the internet.

:::tip
You can find all npm packages on their [website](https://www.npmjs.com/).
:::

### Creating a new project

Every time you want to start a new Node.js project you need to make a new directory for it using the File Explorer, open the Command Prompt or PowerShell into it and run the `npm init` command to begin the setup. This will ask you for some basic info for creating a `package.json` file. This will be the "config" file for running Node.js.

:::tip
On Windows, clicking once on the File Explorer current path and typing `cmd` then pressing `Enter` will open the Command Prompt inside the current directory, making it easier.
:::

After initializing the new project, you can make a new file called `index.js` and write code inside it. As an example, we will create a simple http server on default port 80 which replies with a test message when accessed via localhost. This can be seen below.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Now you can run the provided code with the `node .` command and check the results by going to `localhost:80` in your browser.

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
Installing external packages from npm is done with the `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installing Deno Runtime

Installing Deno is as simple as writing `irm https://deno.land/install.ps1 | iex` inside a PowerShell instance. Use the Windows search bar and search for `Powershell`. Open a prompt as administrator and run the above command, following any steps it may prompt you with.

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
To check the currently installed version, you can run `deno --version`.
:::

### Update Deno to latest version

Updating Deno can be done simply by running `deno upgrade`.

### Running Deno

To begin running Deno you'll need to make a new `index.ts` file and write some code into it. As an example, we will create a simple http server on default port 80 which replies with a test message when accessed via localhost. This can be seen below.

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

Now you can run the provided code with the `deno run --allow-net index.ts` command and check the results by going to `localhost:80` in your browser.

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno was created to be more secure and thus requires certain permissions such as `--allow-net` to access some of its modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installing Bun Runtime

Bun also provides a very easy one command installer but also gives users the option to install it via npm if they've used Node.js in the past.

<Tabs>
<TabItem value="command" label="Command" default>

Running `irm bun.sh/install.ps1|iex` inside PowerShell will install Bun on your server.

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
The server might be missing some required files. Bun will give you information on this and also links to download said files when trying to run the installer.

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

If you already have npm installed, you can run `npm install -g bun` to install Bun.

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### Running Bun

Bun was made to be faster than some of the other JavaScript engines, while also having a similar setup to Node.js. To run Bun, open an empty directory and run `bun init` in a Command Prompt.

:::note
Depending on the chosen language (JS or TS), Bun will create a config file (jsconfig.json or tsconfig.json).
:::

To begin running Bun, you'll need to make a new `index.ts` file and write some code into it. As an example, we will create a simple http server on default port 80 which replies with a test message when accessed via localhost. This can be seen below.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Now you can run the provided code with the `bun index.ts` command and check the results by going to `localhost:80` in your browser.

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>

## Conclusion

Congratulations, you have successfully installed JavaScript. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂





