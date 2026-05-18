---
id: dedicated-linux-javascript
title: "Setup JavaScript Runtime on a Linux Server - Enable Modern Web Application Execution"
description: "Discover how to install and set up Node.js, Deno, and Bun on your server for efficient JavaScript runtime management → Learn more now"
sidebar_label: Install JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide provides steps for the installation of Node.js, Deno and Bun. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, please have a look at our [Initial access (SSH)](vserver-linux-ssh.md).



## Preparation

Before you install anything on a server, it is recommended to run the update command corresponding to your operating system to keep your server secure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

To begin, you need to decide which JavaScript runtime to install. There are plenty of online resources describing each one in much detail. But you can also read this guide because it will include basic usage commands and code examples. We can recommend using NodeJS as it is one of the most widely used and a very popular choice.

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## Installing Node.js Runtime

You can install Node.js via your Linux distro package manager or using nvm. We recommend using apt as this is usually easier.

<Tabs>
<TabItem value="apt" label="Package Manager" default>

Run the following command to begin installing Node.js via the package manager.

```
apt install nodejs -y
```

To install Node.js packages for your projects, you will also need to install the npm package manager.

```
apt install npm
```

### Update Node.js to latest version

Running `node -v` will show you the installed version of Node.js. This is usually not the latest one and thus you'll need to update it to get the latest features. Luckily, the npm package `n` provides a very easy way to do this.

Firstly, we'll need to install it by running `npm install -g n` and then we can run `n [version]`, replacing `[version]` with the version number of choice, to install any version of Node.js.

:::tip
It is generally recommended to keep your installation on the latest Long Term Support version. You can do so by running `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Installing Node.js via nvm provides a more fine grained control over having different Node.js versions associated with their own packages.

Firstly, ensure that you have curl installed on your system and then run the following command.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Running this will get the nvm install script from GitHub and run it.

:::note
If running nvm commands doesn't work after installing, please run `source ~/.bashrc` to reload the bash config file.
:::

Similarly to the previous method, you can now run a command (`nvm install v[version]`) to install any Node.js version. If you want to see all downloadable versions you can run `nvm list-remote` and if you want to see all Node.js versions currently installed you can run `nvm list`.

:::tip
Installing the Long Term Support can be done with `nvm install --lts`
:::

</TabItem>
</Tabs>

### Running Node.js & npm

Npm is the official package manager of Node.js. You will use it for installing any packages from the internet.

:::note
You can find all npm packages on their [website](https://www.npmjs.com/).
:::

### Creating a new project

Every time you want to start a new Node.js project, you need to make a new directory for it (`mkdir [project-name]`) or `cd` into an empty folder and run the `npm init` command to begin the setup. This will ask you for some basic info for creating a `package.json` file. This will be the "config" file for running Node.js.

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

:::tip
Installing external packages from npm is done with the `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## Installing Deno Runtime

Installing Deno is as simple as writing `curl -fsSL https://deno.land/install.sh | sh` in your console.

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

:::info
Deno was created to be more secure and thus requires certain permissions such as `--allow-net` to access some of its modules.
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## Installing Bun Runtime

Bun provides 2 official ways of installation, either via curl or npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Running `curl -fsSL https://bun.sh/install | bash` will install Bun on your server.

:::tip
For installing other versions of Bun, you can run `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

If you already have npm installed, you can run `npm install -g bun`.

</TabItem>
</Tabs>

### Running Bun

Bun was made to be faster than some of the other JavaScript engines, while also having a similar setup to Node.js. To run Bun, open an empty directory and run `bun init`.

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

</TabItem>
</Tabs>

By following this guide, you will have successfully installed one of the popular JavaScript runtimes on your Linux server.


