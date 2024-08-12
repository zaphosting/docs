---
id: gameserver-tebex
title: 'Game server: Tebex monetization setup'
description: Information on how to earn money with Tebex on your game server from ZAP-Hosting and how to set up Tebex on your server - ZAP-Hosting.com documentation
sidebar_label: Tebex Monetization
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tebex is a platform which allows you to monetize your Gameserver and make real money 
from in-game items, ranks and much more. The platform provides you with a professional 
webstore where you can sell goods and view how your store is doing. Visit 
[tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a) for 
more information on how it works.

<InlineVoucher />

## Which games are supported by Tebex?
The platform currently supports the following games: [Click Here](https://www.tebex.io/games)



## How is Tebex configured with the ZAP Interface?
Setting up Tebex with ZAP 2.5 is simple. 

### Step 1 - Install a supported Game onto your Gameserver
Pick a game which is currently supported by Tebex and install it onto your game server. Click on
your game server and choose "Games" in the sidebar. Choose a supported game under "Available Games" 
and choose the download button to install it. As soon as this is done, proceed to step 2.

### Step 2 - Send yourself a Tebex invite
If the game you chose supports Tebex you will see a tab called "Tebex Shop" in the sidebar. Click 
on the image that appears upon loading the page. 

![](https://user-images.githubusercontent.com/61839701/165710982-2b62bf91-96b1-4b31-a3b0-ffd5aafceddb.png)

Tebex will now sent an invite to the email address
linked to your ZAP-Hosting customer account. Please follow the instructions within the email to 
activate your Tebex account. You will be guided through the basic configuration of your shop.

### Step 3 - Install the Tebex plugin onto your game server
This process is normally automated. If we have no plugin for an automatic setup present on our 
servers or if we are missing the pingback of Tebex you will have to perform a manual setup.

### Step 4 - Install & configure the Tebex plugin
Install the appropriate game server plugin for your game manually. The setup process differs 
from game to game. Basic instructions on how to install the plugins can be found
[here](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

#### Step 5 - Confirm the successful installation with us
Finally you will have to confirm that you installed the game server plugin successfully. 

![](https://user-images.githubusercontent.com/61839701/165711046-51bdf1b4-b92d-4e24-ab81-c7b4debb4653.png)

In some cases you may be required to enter your Tebex webstore plugin api key to establish
the connection from ZAP 2.5 to your Tebex store.

You can then see that the connection was successfull:
![](https://user-images.githubusercontent.com/61839701/165711320-579443a5-2a1f-4701-a590-a138e63e24d1.png)

