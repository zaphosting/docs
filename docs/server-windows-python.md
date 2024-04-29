---
id: server-windows-python
title: 'Server: Install Python - Windows'
description: Information on how to install and run Python on your server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Python
---

## Introduction

This guide provides steps for the installation of Python runtime on Windows. The steps provided below must be executed via RDP, if you don't know how to connect to your server via RDP, please have a look here: [Initial access (RDP)](https://zap-hosting.com/guides/docs/vserver-windows-userdp). If you are running a Linux OS on your server you can follow [this guide](https://zap-hosting.com/guides/docs/vserver-linux-python).

## Installing

1. Open up the browser of your choice (I'm going to use Chrome for this guide) and head to [https://www.python.org/downloads/](https://www.python.org/downloads/)

![Picture of python.com/downloads](https://imgur.com/g30evfk.png)

2. Now click on the `Download Python [version]` button and wait for it to finish.

![Picture of Python installer downloaded](https://imgur.com/eHjq3nI.png)

3. Run the installer by clicking on it. Now you will be prompted to set a few settings for the installation. Make sure the `Add python.exe to PATH` checkbox at the bottom is marked (this will make running py easier later on) and click the `Install Now` button.

![Picture of Python's Installer - First Page](https://imgur.com/CcRCbhn.png)

4. Wait for all files to be installed.

![Picture of Python's Installer downloading files](https://imgur.com/CNqjZ4c.png)

5. Now you can click `Close` and start using Python on your server.

![Picture of Python's Installer - Succefully installed Page](https://imgur.com/f9I8zaa.png)

## Running code

Now that you have Python installed on your server, you can start running your Python programs.

### Interpreter mode

Running the `python` command inside a Command Promt or Powershell instance will now start the Python interpreter. You can start writing any valid Python code after the `>>>` prefix and it will be executed after pressing `Enter`. You can close the interpreter once you are finished by running `exit()` into the console.

![Python Interpreter mode](https://imgur.com/AQSm2hX.png)

### Running .py files

In order to run `.py` Python files, you can simply use the `python3 [filename].py` command, replacing `[filename]` with the path to the target file name you wish to run.

:::tip
Most programs you can find online can be run with the `python3 main.py` because `main.py` is the common starting point of most Python programs.
:::

## Virtual environments

When writing a Python program you might need to install external packages from pip. These can be installed globally and thus be accessible for all `.py` scripts or you can create a virtual environment (venv).

### Creating the venv

Firstly, navigate to the folder where you wish to setup your venv using the file explorer and once ready, run `python -m venv .` which will install the required files at the current location.

### Activating & deactivating

To run commands like `pip install` inside your venv you need to activate it by running `.\Scripts\activate`. Now your console is only going to run inside the venv and scripts will only have access to locally installed packages.

When you have finished working inside the venv you can go back by running the `deactivate` command.

![Activating / Deactivating Python venv](https://imgur.com/KvJxliT.png)
