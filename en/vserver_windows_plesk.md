---
id: vserver_windows_plesk
title: Plesk Installation
sidebar_label: Plesk Installation
---

## 🖥️ Establish a connection to the server

To install Plesk on the server, you first need to connect to it. How this works is explained in detail in our separate instructions: [RDP First Access](https://docs.zap-hosting.com/docs/en/vserver_windows_userdp/#-remotedesktopverbindung)

## ⏳ Plesk Installer 

Next you need the Plesk Installer, which is required for the installation of Plesk. This can be downloaded by clicking on  [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

This installer is now stored in a folder, in our example we use a "Plesk" folder created on our desktop. The path to this file would be important for the next steps.

![](https://screensaver01.zap-hosting.com/index.php/s/5EyG4GPQZFTi59T/preview)

### Open Command Prompt

The CMD console must now be opened for the installation.
This would go over the key combination [Windows] + [R] or also if one searches "command" in the windows console. 

![](https://screensaver01.zap-hosting.com/index.php/s/jBbYgnNeqQsYgyA/preview)

### Plesk Installation

In this CMD console you have to navigate to the directory into which the Plesk installer was uploaded. In our example it was the "Plesk" folder on the "Desktop".

This directory is accessed via CMD with the "*cd*" command.

![](https://screensaver01.zap-hosting.com/index.php/s/RLec8B6WPJbAKy5/preview)

Correctly in this directory, the last step would be the execution of the installer command. This would run Plesk-installer.exe and the latest Plesk version would be installed automatically.

![](https://screensaver01.zap-hosting.com/index.php/s/AXjnDfJGZfsmb3C/preview)

Command: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

> The installation process can take 30 to 60 minutes, after which Plesk would be installed and ready to use.
