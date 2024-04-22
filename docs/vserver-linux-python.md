---
id: vserver-linux-python
title: "VPS: Install Python"
description: Information on how to install and run python on your VPS from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Python
---

## Introduction

This guide provides steps for the installation of Python runtime and venv. These commands must be executed via SSH, if you don't know how to connect to your server via SSH, please have a look here: [Initial access (SSH)](https://zap-hosting.com/guides/docs/vserver-linux-ssh)

## Preparation

Before you install anything on a server it is recommended to run the update command coresponding to your operating system to keep your server secure.

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

## Installing Python

Most linux distros come preinstalled with Python however the version might not be up to date or the system might have been installed without some packages. You can check if the python installation exists (`python3 --version`) and run the following commands to update / install the runtime:

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

Now that you have Python installed on your server you can start running your programs.

### Interpreter mode

Running the `python3` command will start the python interpreter. You can start writing any valid python code after the `>>>` and it will pe executed when pressing `Enter`. After running the code you can type `exit()` to close the interpreter.

### Running .py files

If you need to run code from .py files you should run the `python3 filename.py` command.

:::note
Most programs you can find online can be run with the `python3 main.py` because `main.py` is the common starting place of any Python programs.
:::

## Virtual enviroments

When writing a Python program you might need to install external packages from pip. These can be installed globally and thus be accesible for all .py scripts or you can create a virtual enviroment (venv).

### Creating the venv

Fistly navigate to the folder where you want the venv to be set up using `cd` and then run `python3 -m venv .` (this will install the required files at the current location). 

### Activating & deactivating

To run commands like `pip install` inside your venv you need to activate it by running `source /bin/activate`. Now your console is only going to run inside the venv and scripts will only have access to locally installed packages.

When you have finished working inside the venv you can go back by running the `deactivate` command.
