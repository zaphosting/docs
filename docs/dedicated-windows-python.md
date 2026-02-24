---
id: dedicated-windows-python
title: 'Setup Python on a Windows Server - Enable Development and Automation'
description: "Learn how to install and set up Python runtime on Windows servers to run your Python programs efficiently → Learn more now"
sidebar_label: Install Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

This guide provides steps for the installation of Python runtime on Windows. The steps provided below must be executed via RDP, if you don't know how to connect to your server via RDP, please have a look at our [Initial Access (RDP)](vserver-windows-userdp.md) guide.



## Installation

### Step 1: Downloading Files
Open up the browser of your choice (I'm going to use Chrome for this guide) and head over to [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Now click on the `Download Python [version]` button and wait for it to finish.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Step 2: Installing Python
Run the installer by clicking on it. Now you will be prompted to set a few settings for the installation. Make sure the `Add python.exe to PATH` checkbox at the bottom is marked (this will make running Python files easier later on) and click the `Install Now` button.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Step 3: Completing Installation
Wait for all files to be installed. Be patient as this may take some time. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Once it is finished, simply press `Close` and you can begin using Python on your server.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Running code

Now that you have Python installed on your server, you can start running your Python programs.

### Interpreter mode

Running the `python` command inside a Command Prompt or PowerShell instance will now start the Python interpreter. You can start writing any valid Python code after the `>>>` prefix and it will be executed after pressing `Enter`. You can close the interpreter once you are finished by running `exit()` into the console or simply closing the prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Running .py files

In order to run `.py` Python files, you can simply use the `python3 [filename].py` command, replacing `[filename]` with the path to the target file name you wish to run. This is once again done through a Command Prompt or PowerShell instance.

:::tip
Most programs you can find online can be run with the `python3 main.py` because `main.py` is the common starting point of most Python programs.
:::

You can also simply run Python (.py) files by opening them, or right-clicking and selecting Python directly through Windows.

## Virtual environments

When writing a Python program you might need to install external packages from pip. These can be installed globally and thus be accessible for all `.py` scripts or you can create a virtual environment (venv).

### Creating the venv

Firstly, navigate to the folder where you wish to set up your venv using the file explorer and once ready, run `python -m venv .` which will install the required files at the current location.

### Activating & deactivating

To run commands like `pip install` inside your venv you need to activate it by running `.\Scripts\activate`. Now your console is only going to run inside the venv and scripts will only have access to locally installed packages.

When you have finished working inside the venv you can go back by running the `deactivate` command.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)



## Conclusion

Congratulations, you have successfully installed Python. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


