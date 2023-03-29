---
id: rust_header
title: Rust: How to add a custom header image for your server
description: Customize your server's browser page with a new header image
sidebar_label: Header Image
---
# How to add custom header image to your Rust Server

## Table of Contents
1. [Introduction](#introduction)
2. [Preparing Your Image](#preparing-your-image)
3. [Where to Host the Image](#where-to-host-the-image)
4. [Add the Image URL to Your Server](#add-the-image-url-to-your-server)
5. [server.cfg Config File](#server-cfg-config-file)
6. [Troubleshooting](#troubleshooting)

<a name="introduction"></a>
## 1. Introduction
A "header image" is the artwork displayed in your server description when a potential player clicks on your server in the Rust in-game listings. You can use the image to attract new players and to "brand" your server, setting it apart from others.

If you don't specify your own image, the game will supply generic default images when your server is viewed in the listings.

<a name="preparing-your-image"></a>
## 2. Preparing Your Image
First, you will need the image you want to use to represent your server. The image needs to be sized to either 512x256 or 1024x512. It also needs to be in either .png or .jpg format.

Note: using a custom image will end up reducing the quality of it, unfortunately.

Here's an example of a 1024x512 format image and its 512x256 counterpart:

The Rust header image at 1024x512 hosted with ZAP-Hosting
The Rust server header image 512x256 with ZAP-Hosting

<a name="where-to-host-the-image"></a>
## 3. Where to Host the Image
The image you want to use needs to be hosted on a file-sharing site, where it can be accessed by a URL. Some good and easy-to-use sites are Dropbox or Imgur, which can be set up for free.

Sites that don't provide a URL or require logins will probably not work correctly.

<a name="add-the-image-url-to-your-server"></a>
## 4. Add the Image URL to Your Server
With ZAP-Hosting, you can set the server header image directly on the control panel. Click on the "Game Settings" section of the control panel, and on the "Basic Settings" tab is a field for entering the URL.

If the URL provided from Dropbox ends in dl=0, change it to dl=1. That allows the image to be downloaded automatically.

Save the changes and restart the server. Your Rust server will now display your artwork when players view your server in the listings!

<a name="server-cfg-config-file"></a>
## 5. server.cfg Config File
The setting is stored in the server.cfg config file, which is usually located in server/(server name)/cfg. With ZAP-Hosting, that path is set to server/default/cfg, unless renamed. It's normal for this config file to be empty following a fresh server installation.

When this setting is added automatically by the ZAP-Hosting control panel, it will appear as the line:
`server.headerimage "(URL to image)"`

<a name="troubleshooting"></a>
## 6. Troubleshooting
If after setting the image, you see a white box with a big blurry red question mark, this means something is wrong with the setting, the URL, or the image. The red question mark is a default image that the game will use instead.

Some causes of why the image URL might not be usable are:

- The image is the wrong size
- The Dropbox image URL ends in dl=0 and must be changed to dl=1 to allow automatic download
- The file-sharing site used does not provide a correct URL or requires some form of login that the game cannot automatically perform

With this guide, you can now customize your Rust server header image with ZAP-Hosting. This will help you create a unique appearance for your server in the in-game listings, attracting new players and setting your server apart from the rest.
