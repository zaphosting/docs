---
id: server-linux-javascript
title: 'Server: Install Javascript'
description: Information on how to install and run Javascript on your server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Javascript
---

## Introduction

This guide provides steps for the installation of NodeJS, Deno and Bun. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, please have a look here: [Initial access (SSH)](https://zap-hosting.com/guides/docs/vserver-linux-ssh)

## Preparation

Before you install anything on a server it is recommended to run the update command corresponding to your operating system to keep your server secure.

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

Now you need to decide which Javascript runtime to install. There are plenty of online resources describing each one in much detail. But you can also read this guide because it will include basic usage commands and code examples.

## NodeJS

You can install NodeJS via your Linux distro package manager or using nvm.

<Tabs>
<TabItem value="apt" label="Package Manager" default>

Run the following command to begin installing NodeJS via the package manager:

```
apt install nodejs -y
```

To install NodeJS packages for your projects you will also need to install the npm package manager:

```
apt install npm
```

### Update NodeJS to latest version

Running `node -v` will show you the installed version of NodeJS. This is usually not the latest one and thus you'll need to update it to get the latest features. Luckily the npm package `n` provides a very easy way to do this.

Firstly, we'll need to install it by running `npm install -g n` and then we can run `n [version]` to install any version of NodeJS.

:::tip
It is generally recommended to keep your installation on the latest Long Term Support version. You can do so by runnning `n lts`.
:::

</TabItem>
<TabItem value="nvm" label="nvm">

Installing NodeJS via nvm provides a more fine grained control over having different NodeJS versions associated with their own packages.

Firstly, make sure you have curl installed on your system and then run the following command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Running this will get the nvm install script from github and run it.

:::note
If running nvm commands doesn't work after installing please run `source ~/.bashrc` to reload the bash config file.
:::

Similarly to the previous method you can now run a command (`nvm install v[version]`) to install any NodeJS version. If you want to see all downloadable versions you can run `nvm list-remote` and if you want to see all NodeJS versions curently installed you can run `nvm list`.

:::tip
Installing the Long Term Support can be done with `nvm install --lts`
:::

</TabItem>
</Tabs>

### Running NodeJS & npm

Npm is the official package manager of NodeJS. You will use it for installing any packages from the internet.

:::note
You can find all npm packages on their [website](https://www.npmjs.com/).
:::

#### Creating a new project

Every time you want to start a new NodeJS project you need to make a new directory for it (`mkdir [project-name]`) or `cd` into an empty folder and run the `npm init` command to begin the setup. This will ask you for some basic info for creating a `package.json` file. This will be the "config" file for running NodeJS.

After initializing the new project you can make a new file called `index.js` and write code inside it.

Example:

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs 👋')
})

server.listen(80)
```

Now you can run the provided code with the `node .` command and check the results by going to `localhost:80` in your browser.

:::tip
Installing external packages from npm is done with the `npm install [package-name]`
:::

## Deno

Installing Deno is as simple as writing `curl -fsSL https://deno.land/install.sh | sh` in your console.

:::tip
To check the currently installed version you can run `deno --version`.
:::

### Update Deno to latest version

Updating Deno can be done by running `deno upgrade`.

### Running Deno

To begin running Deno you'll need to make a new `index.ts` file and write some code into it.

Example:

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs 👋')
})
```

This example will create a http server on `localhost:80` and welcome users on every request. To start it run `deno run --allow-net index.ts`

:::info
Deno was created to be more secure and thus requires certain permissions such as `--allow-net` to access some of its modules.
:::

## Bun

Bun provides 2 official ways of installation: curl & npm.

<Tabs>
<TabItem value="curl" label="curl" default>

Running `curl -fsSL https://bun.sh/install | bash` will install Bun on your server.

:::tip
For installing other versions of Bun you can run `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

If you already have npm installed you can run `npm install -g bun`.

</TabItem>
</Tabs>

### Running Bun

Bun was made to be faster than some of the other Javascript engines while also having a similar setup to NodeJS. To run Bun open an empty directory and run `bun init`.

:::note
Depending on the chosen language (JS or TS) Bun will then create a config file (jsconfig.json or tsconfig.json).
:::

You'll need to make a `index.ts` and add code to it.

Example:

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs 👋')
  },
})
```

You can now run your code with `bun index.ts`. Opening your browser on `localhost:80` will now show a friendly message.

## Conclusion

Thank you for reading this guide on installing Javascript runtimes. If you want to run other programming languages like Python you can check out our [other guides](https://docs.zap-hosting.com/).
