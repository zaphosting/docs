---
id: vserver-linux-nodejs
title: "Setup Node.js on a Linux Server - Run Modern JavaScript Applications"
description: "Discover how to set up a stable Node.js environment for scalable, real-time applications using Docker and system preparation → Learn more now"
sidebar_label: Install Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Node.js is a cross-platform, open-source JavaScript runtime environment that executes JavaScript code outside of the browser, such as on servers or within command-line tools. Built on the V8 engine, it supports asynchronous, event-driven I/O, making it highly efficient for building scalable network and real-time applications. 

The “JavaScript everywhere” paradigm allows developers to use a single language across both backend and frontend development.  



<InlineVoucher />



## Preparation

Before setting up the **Node.js**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. Node.js will be deployed and run on your machine using an array of Docker containers. This requires Docker to be installed first. To do this, run the following command: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](dedicated-linux-docker.md) guide.



## Installation

Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Node.js application.


To use Node.js inside an isolated environment, you first need to download the official Alpine-based image. Run the following command to fetch the latest Node.js 22 image onto your system, making it available for container deployments:

```
docker pull node:22-alpine
```

Next, you can launch a container based on this image and open a shell session inside it. Use it to start the container with an interactive shell. The `--rm` option ensures that the container is removed automatically once you exit, keeping your host environment clean.  

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Inside the container, verify the installed Node.js version with `node -v` which should display `v22.19.0`. You can also confirm the npm version by running

`npm -v` and the expected output is `10.9.3`. This confirms that the image provides the correct versions of Node.js and npm, ready for immediate use.





## Configuration

After starting the Node.js container, it is recommended to configure essential Node.js settings inside the environment itself. One common approach is to define environment variables, for example:

```
export NODE_ENV=production
```

This enables production mode, activating performance optimizations and adjusting logging behavior. For development purposes, you can instead set NODE_ENV=development to benefit from verbose error messages and debugging features.  

A well-structured project directory is important, starting with a configuration file created via:

```
npm init -y
```

This generates a `package.json` file, which defines dependencies, scripts, and metadata for your project. It is the central configuration file for every Node.js application.  

Dependencies can then be installed with `npm install <package>`, while development dependencies are added using `npm install <package> --save-dev`. The `scripts` section inside `package.json` allows you to define custom commands, such as `npm start` or `npm run build`, to simplify execution and project management.  

For more advanced setups, Node.js can be customized using `.npmrc` or `.nvmrc` files, which allow configuration of private registries, caching options, or enforcing a specific Node.js version. This ensures that your applications run consistently across different environments.



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Node.js on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Node.js.com](https://Node.js.com/) - Official Website
- https://Node.js.com/help/ - Node.js Help Center (Documentation)

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂