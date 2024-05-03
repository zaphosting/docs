---
id: vserver-windows-javascript
title: 'Server: Installation of Javascript'
description: Information on how to install and run Javascript on your Windows server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Javascript
---

## Introduction

This guide provides steps for the installation of NodeJS, Deno and Bun on Windows. The steps provided below must be executed via RDP, if you don't know how to connect to your server via RDP, please have a look at our [Initial access (RDP)](https://zap-hosting.com/guides/docs/vserver-windows-userdp) guide. If you are running a Linux OS on your server you can follow [this guide](https://zap-hosting.com/guides/docs/server-linux-javascript).

## Installation

To begin, you need to decide which Javascript runtime to install. There are plenty of online resources describing each one in much detail. But you can also read this guide because it will include basic usage commands and code examples. We can recommend using NodeJS as it is one of the most widely used and a very popular choice.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installing NodeJS Runtime

### Step 1: Downloading Files
Open up the browser of your choice (I'm going to use Chrome for this guide) and head over to [https://nodejs.org/en](https://nodejs.org/en)

![Picture of nodejs.org](https://imgur.com/yGkI21n.png)

Now click on the `Download Node.js (LTS)` button and wait for it to finish.

![Picture of NodeJS installer downloaded](https://imgur.com/i9ZMP9L.png)

:::tip
It is generally recommended to keep your installation on the latest Long Term Support (LTS) version.
:::

### Step 2: Installing Python
Run the installer by clicking on it. Now you will be prompted to set a few settings for the installation. On the `Welcome` page you should click `Next`.

![Picture of NodeJS's Installer - First Page](https://imgur.com/DJzVIRM.png)

Now you need to read and accept (by marking the checkbox) the NodeJS License Agreement and then click on the `Next` button.

![Picture of NodeJS's Installer - Agreement Page](https://imgur.com/eUfK86B.png)

After that you will be asked for a location to install NodeJS.

:::note
We recommend using the default install location.
:::

![Picture of NodeJS's Installer - Location Page](https://imgur.com/QUInz5M.png)

On the next page you can opt out of installing some of NodeJS core packages. If you want a normal installation, which is recommended, simply press on the `Next` button. You will also have an option to install Chocolatey, but this is not needed.

![Picture of NodeJS's Installer - Custom Install Page](https://imgur.com/Ereqity.png)

### Step 3: Completing Installation
That's all you can now click `Install` and wait for everything to be set up. Be patient as this may take some time. :)

![Picture of NodeJS's Installer - Install Page](https://imgur.com/Nxl3553.png)

Once finished, you can simply press `Finish` on the final page and start using NodeJS on your server.

### Update NodeJS to latest version

Running `node -v` will show you the installed version of NodeJS. From time to time you should check that you're running the latest LTS version. To update NodeJS you need to follow the provided [install section](https://zap-hosting.com/guides/docs/server-windows-javascript#nodejs) again.

### Running NodeJS & npm

npm is the official package manager of NodeJS. You will use it for installing any packages from the internet.

:::tip
You can find all npm packages on their [website](https://www.npmjs.com/).
:::

### Creating a new project

Every time you want to start a new NodeJS project you need to make a new directory for it using the File Explorer, open Command Promt or Powershell into it and run the `npm init` command to begin the setup. This will ask you for some basic info for creating a `package.json` file. This will be the "config" file for running NodeJS.

:::tip
On Windows clicking once on the File Explorer current path and typing `cmd` then pressing `Enter` will open Command Promt inside the current directory, making it easier.

![Cmd inside directory tip](https://imgur.com/61sWPoe.png)
:::

After initializing the new project you can make a new file called `index.js` and write code inside it. As an example, we will create a simple http server on default port 80 which replies with a test message when accessed via localhost. This can be seen below.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Now you can run the provided code with the `node .` command and check the results by going to `localhost:80` in your browser.

![NodeJS app in browser](https://imgur.com/DcaM9Dd.png)

:::tip
Installing external packages from npm is done with the `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installing Deno Runtime

Installing Deno is as simple as writing `irm https://deno.land/install.ps1 | iex` inside a Powershell instance. Use the Windows search bar and search for `Powershell`. Open a prompt as administrator and run the above command, following any steps it may prompt you with.

![Deno install command inside Powershell](https://imgur.com/gOjyave.png)

:::tip
To check the currently installed version you can run `deno --version`.
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

![Deno app in browser](https://imgur.com/fjBhEe7.png)

:::info
Deno was created to be more secure and thus requires certain permissions such as `--allow-net` to access some of its modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installing Bun Runtime

Bun also provides a very easy one command installer but also gives users the option to install it via npm if they've used NodeJS in the past.

<Tabs>
<TabItem value="command" label="Command" default>

Running `irm bun.sh/install.ps1|iex` inside Powershell will install Bun on your server.

![Bun install command inside Powershell](https://imgur.com/utUKgRN.png)

:::info
The server might be missing some required files. Bun will give you information on this and also links to download said files when trying to run the installer.

![Bun install error command inside Powershell](https://imgur.com/Sq0IHDQ.png)
:::

</TabItem>
<TabItem value="npm" label="npm">

If you already have npm installed you can run `npm install -g bun` to install Bun.

![Bun install command via npm](https://imgur.com/fUPmPoW.png)

</TabItem>
</Tabs>

### Running Bun

Bun was made to be faster than some of the other Javascript engines while also having a similar setup to NodeJS. To run Bun open an empty directory and run `bun init` in a Command Prompt.

:::note
Depending on the chosen language (JS or TS), Bun will create a config file (jsconfig.json or tsconfig.json).
:::

To begin running Bun you'll need to make a new `index.ts` file and write some code into it. As an example, we will create a simple http server on default port 80 which replies with a test message when accessed via localhost. This can be seen below.

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

Now you can run the provided code with the `bun index.ts` command and check the results by going to `localhost:80` in your browser.

![Bun app in browser](https://imgur.com/wwuWP4i.png)

</TabItem>
</Tabs>

By following this guide, you will have successfully installed one of the popular Javascript runtimes on your Windows server.