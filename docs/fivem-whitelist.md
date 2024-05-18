---
id: fivem-whitelist
title: "FiveM: Whitelist"
description: Information on how to use a whitelist with FiveM Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Whitelist
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction
You don't want to make your server accessible to everyone? There are several ways to limit the visibility and accessibility of a server. One of those possibilities is, for example, the use of a whitelist, which will be explained in the following.

<YouTube videoId="CrLK7o-rX2g" title="How to enable WHITELIST on your FiveM Server" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

The whitelist is a list that makes it possible to allow a certain selection of people. This means that only the people who are entered in the whitelist can connect. People who are not on the whitelist will not be accepted and will receive a message that they are not on the whitelist when they establish a connection. 

![image](https://user-images.githubusercontent.com/26007280/219639252-afb24ed1-99d9-42c0-81a9-c767ca65d9f3.png)


## Installation

Through our resource installer, which you can find in your game server dashboard under **Settings** at **Resources**, you can install our offered whitelist resource per click. Click on the green button at the **Whitelist** resource to install the resource. 

![image](https://user-images.githubusercontent.com/26007280/219639570-e43bebd5-7821-4f66-a896-540628ae2d22.png)

Once the installation is complete, click on the blue configuration button to configure the whitelist. There you will have the option to add the desired people to the whitelist. 


## Configuration

Under the Whitelist settings the Steam64 IDs of the persons have to be entered. For each line one record will be added. If you don't know what your ID is, you have for example the possibility to check it on the page [steamid.io](https://steamid.io/lookup). Copy the URL from your Steam profile and paste it into the search field. Afterwards you will get the Steam64 ID, which you can enter into the field.

![image](https://user-images.githubusercontent.com/26007280/219639588-3a74fbe3-cf13-4835-ad30-a1c189b095b0.png)

When restarting the server, the list will now be taken into account and only players that are deposited will be able to connect. 
