---
id: server-windows-javascript
title: 'Server: Install Javascript - Windows'
description: Information on how to install and run Javascript on your server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Javascript
---

## Introduction

This guide provides steps for the installation of NodeJS, Deno and Bun on Windows. The steps provided below must be executed via RDP, if you don't know how to connect to your server via RDP, please have a look here: [Initial access (RDP)](https://zap-hosting.com/guides/docs/vserver-windows-userdp). If you are running a Linux OS on your server you can follow [this guide](https://zap-hosting.com/guides/docs/server-linux-javascript).

## Installation

Now you need to decide which Javascript runtime to install. There are plenty of online resources describing each one in much detail. But you can also read this guide because it will include basic usage commands and code examples.

## NodeJS

1. Open up the browser of your choice (I'm going to use Chrome for this guide) and head to [https://nodejs.org/en](https://nodejs.org/en)

![Picture of nodejs.org](https://imgur.com/yGkI21n.png)

2. Now click on the `Download Node.js (LTS)` button and wait for it to finish.

![Picture of NodeJS installer downloaded](https://imgur.com/i9ZMP9L.png)

:::tip
It is generally recommended to keep your installation on the latest Long Term Support (LTS) version.
:::

3. Run the installer by clicking on it. Now you will be prompted to set a few settings for the installation. On the `Welcome` page you should click `Next`.

![Picture of NodeJS's Installer - First Page](https://imgur.com/DJzVIRM.png)

4. Now you need to read and accept (by marking the checkbox) the NodeJS License Agreement and then click on the `Next` button.

![Picture of NodeJS's Installer - Agreement Page](https://imgur.com/eUfK86B.png)

5. After that you will be asked for a location to install NodeJS.

![Picture of NodeJS's Installer - Location Page](https://imgur.com/QUInz5M.png)

:::note
The default location is recommended.
:::

6. On the next page you can opt out of installing some of NodeJS core packages. If you want a normal installation jsut click `Next`

![Picture of NodeJS's Installer - Custom Install Page](https://imgur.com/Ereqity.png)

7. Some tools like Chocolatey are optional and can be installed on the next page. Click `Next` to continue.

![Picture of NodeJS's Installer - Tools Page](https://imgur.com/biFFXfn.png)

8. That's all you can now click `Install` and wait for everything to be set up.

![Picture of NodeJS's Installer - Install Page](https://imgur.com/Nxl3553.png)

9. Now you can click `Finish` on the final page and start using NodeJS on your server.

### Update NodeJS to latest version

Running `node -v` will show you the installed version of NodeJS. From time to time you should check that you're running the latest LTS version. To update NodeJS you need to follow the provided [install guide](https://zap-hosting.com/guides/docs/server-windows-javascript#nodejs) again.

### Running NodeJS & npm

Npm is the official package manager of NodeJS. You will use it for installing any packages from the internet.

:::note
You can find all npm packages on their [website](https://www.npmjs.com/).
:::

#### Creating a new project

Every time you want to start a new NodeJS project you need to make a new directory for it using the File Explorer, open Command Promt or Powershell into it and run the `npm init` command to begin the setup. This will ask you for some basic info for creating a `package.json` file. This will be the "config" file for running NodeJS.

:::tip
On Windows clicking once on the File Explorer current path and typing `cmd` then pressing `Enter` will open Command Promt inside the current directory.
![Cmd inside directory tip](https://imgur.com/61sWPoe.png)
:::

After initializing the new project you can make a new file called `index.js` and write code inside it.

Example:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

Now you can run the provided code with the `node .` command and check the results by going to `localhost:80` in your browser.

:::tip
Installing external packages from npm is done with the `npm install [package-name]`
:::
