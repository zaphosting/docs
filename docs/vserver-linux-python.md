---
id: vserver-linux-python
title: "Setup Python on a Linux Server - Enable Development and Automationn"
description: "Learn how to install and update Python runtime on various Linux distros to ensure a secure and up-to-date environment → Learn more now"
sidebar_label: Install Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide provides steps for the installation of the Python runtime and venv. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, please use our [Initial Access (SSH)](vserver-linux-ssh.md) guide to learn more.

<InlineVoucher />

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

Most Linux distros come preinstalled with Python however the version might not be up to date or the system might have been installed without some packages. You can check if the python installation exists (`python3 --version`) and run the following commands to either update or install the runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Check version
  python3 --version

  // Update / install the runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Check version
  python3 --version

  // Update the runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Check version
  python3 --version

  // Update the runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Check version
  python3 --version

  // Update the runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Running code

Now that you have Python installed on your server, you can start running your Python programs.

### Interpreter mode

Running the `python3` command will start the Python interpreter. You can start writing any valid Python code after the `>>>` prefix and it will be executed after pressing `Enter`. You can close the interpreter once you are finished by running `exit()` into the console.

### Running .py files

In order to run `.py` Python files, you can simply use the `python3 [filename].py` command, replacing `[filename]` with the path to the target file name you wish to run.

:::tip
Most programs you can find online can be run with the `python3 main.py` because `main.py` is the common starting point of most Python programs.
:::

## Virtual environments

When writing a Python program you might need to install external packages from pip. These can be installed globally and thus be accessible for all `.py` scripts or you can create a virtual environment (venv).

### Creating the venv

Firstly, navigate to the folder where you wish to setup your venv using `cd` and once ready, run `python3 -m venv .` which will install the required files at the current location.

### Activating & deactivating

To run commands like `pip install` inside your venv you need to activate it by running `source /bin/activate`. Now your console is only going to run inside the venv and scripts will only have access to locally installed packages.

When you have finished working inside the venv you can go back by running the `deactivate` command.


## Conclusion

Congratulations, you have successfully installed and configured Python! If you have any further questions or problems, please contact our support team, who are available to help you every day! 

<InlineVoucher />
