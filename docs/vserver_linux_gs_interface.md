---
id: vserver_linux_gs_interface
title: Gameserver/TS3 Interface
description: Information on how to install TS and game server via the game server/TS3 interface with just a few clicks - ZAP-Hosting.com documentation
sidebar_label: GS/TS3 Interface

---



## Introduction

 If game server products don't meet your taste or expectations, or if you need your service in other ways, using a VPS, root server, or dedicated server is often a better option. However, you often face the challenge that not all services are automated or pre-installed. Setting up services such as game servers, Teamspeak 3 servers, and music bots must be done independently.

To solve this problem, we have developed a practical solution for our Linux-based VPS, root server, or dedicated server. The so-called Gameserver/Teamspeak 3 Server interface (GS/TS3 Interface)!



## Use of the GS/TS3 interface

With the user-friendly GS/TS3 interface, you can install Teamspeak 3 or other selected game server services on your Linux-based VPS, root server, or dedicated server with just a few clicks. No prior knowledge is required for this installation. The setup of all required packages, server files, and the actual installation are fully automated, saving you time and effort.

> ⚠️ **Note:** To successfully install the GS/TS3 interface, it is important to ensure that your server has one of the following supported operating systems installed:
>
> - Debian 10
> - Debian 11



## Available services / games

The GS/TS3 interface supports the setup of game servers, voice servers, and music bots. Most of the games we offer for our game server products are also available in the GS/TS3 interface option. This applies to all games that we actively operate under Linux. All games that run on Windows operating systems can unfortunately not be installed. There, only a manual installation is possible, provided that the game supports a Linux server version.

| Services    | Description / Content                             | VPS  | Rootserver | Dedicated Server |
| ----------- | ------------------------------------------------- | ---- | ---------- | ---------------- |
| Gameserver  | Linux based gameserver applications are supported | ✔️    | ✔️          | ✔️                |
| Voiceserver | Teamspeak 3 servers are supported                 | ✔️    | ✔️          | ✔️                |
| Musikbot    | Sinusbot is supported                             | ✔️    | ✔️          | ✔️                |

<p style={{textAlign: 'center'}}>List updated last on 01.05.2023</p>



## Installation and configuration of the GS/TS3 interface

To install the GS/TS3 interface, you need to navigate to the navigation panel **Settings** in the server administration of your product and click on the sub-item **Gameserver / TS3**. 

The first time you call up the GS/TS3 interface, you will be taken to the user-friendly setup assistant. To set up the interface and link it to your server, it is first necessary to create an SSH key. This key is necessary for the website to establish a secure connection to the server. This makes it possible to set up, manage and control services such as game servers and Teamspeak 3 servers directly via the interface.

Once there, the SSH key must be created. To do this, click on the **Generate SSH key** button and then add the key by clicking on the **Add key** button. Optionally, you can also define a name for the key for overview purposes.


![img](https://user-images.githubusercontent.com/61839701/165696291-b5c31c89-3b4e-4099-b29c-bfda756b19a6.png)



Once you have clicked on **Add Key**, the SSH key is stored on your server. The GS/TS3 interface can then be added to your server.



![img](https://user-images.githubusercontent.com/61839701/165696735-8428cebb-8563-431b-837c-2fdbe47cb67f.png)



> ⚠️ **Note:** If the SSH key is not recognised right away, restarting the server and refreshing the page is a possible solution.

During the installation you can check the current progress. Please note that the installation and configuration of the interface and its packages may take some time. This can usually take from 5 to 15 minutes.

![img](https://user-images.githubusercontent.com/61839701/165697094-ddf800a2-2618-441d-912b-994afe8099bf.png)

> ⚠️ **Caution**: Please do not continue the process until the interface is completely installed. You can recognize the successful installation by the fact that the progress bar has disappeared and "Installed" is displayed instead of "Missing" for each required package.



## Installation of a game server

Provided that the creation and installation of the GS/TS3 interface has been completed successfully, you can now start setting up the services. The installation of a game server is done via the **Install game server** button in the **Game server** category.

![img](https://user-images.githubusercontent.com/61839701/165700146-8ee11ace-99f6-477b-9958-3a7c29599204.png)



In the next step, you have the option of selecting the IP address of the desired game server (provided your server has more than one IP). You can also specify the desired port, the number of slots and the RAM boost individually.

![img](https://user-images.githubusercontent.com/61839701/165700364-b4b07d72-f7a5-47f6-bdf8-d9f8993a8cbf.png)

Make sure that all the details are correct and meet your requirements. As soon as you have made all the settings, click on "Install game server now" to start the installation process. The game server will then be set up according to your specifications and you will soon be able to get started. You can now view and call up your newly created game server in the list.



![](https://user-images.githubusercontent.com/61839701/165700566-ce663969-7d54-4f82-81be-87b470064e2d.png)



You are now in the administration of your game server. There you can select and install the desired game for your game server in the **Settings** navigation panel under **Games**.

![img](https://user-images.githubusercontent.com/61839701/165700781-450a1116-65ad-43bf-bcc8-f17dbf30d53f.png)

Here you will find a list of all the games you can install on your server. In this example, a server with the game (package) Minecraft: Paperspigot will be installed. Select your desired game and click on the green button to start the installation.

![](https://user-images.githubusercontent.com/61839701/165700899-ddaf5731-0a4e-4daf-a691-339cd7942a32.png)

An overview with all the necessary conditions will be displayed. If all conditions are met, you can confirm the process with the **Accept and Install** button.

![img](https://user-images.githubusercontent.com/61839701/165701029-1d566a87-d4e7-4a6a-a0f2-03503466553b.png)

Setting up the game may take some time depending on the game. The progress is shown in the status display. Afterwards, you can start your game server and connect to it in the game!



## Installation of a voice server

The installation of a **Voiceserver (Teamspeak 3 Server)** is similar to the installation of a gameserver. You must first click on "Gameserver / TS3" again. In this section you will find the option **Install voice server**, which you can click to start the installation process for the Teamspeak 3 server.

![img](https://user-images.githubusercontent.com/61839701/165701625-b6443738-3b39-432e-a486-baedd6266bf6.png)

In the next step, you have the option of specifying the desired settings for your Teamspeak 3 server, such as the IP address, the port and the number of available slots. Once you have entered all the necessary information, you can complete the installation by clicking on **Install voice server now**.

![img](https://user-images.githubusercontent.com/61839701/165702011-e54549cc-4d83-4e86-b732-da3751c7c5a4.png)

Make sure that all the information is correct and meets your requirements. Once you have made all the settings, click on **Install Teamspeak 3/5 Server now** to start the installation process. You can now view and click on the installed Teamspeak 3 server in the **Voiceserver Overview**.

![](https://user-images.githubusercontent.com/61839701/165702380-5169d23a-21d0-4d58-a538-ab7b65f76615.png)

> ⚠️ **Caution**: This is the instance on which the Teamspeak 3 server will be installed afterwards.

You are now in the interface of the instance of your installed Teamspeak 3 server. You can now start the instance by clicking on the **Start** button.

![](https://user-images.githubusercontent.com/61839701/165703148-bfc3c0ee-43aa-456d-86ed-89194a368bc8.png)


You can now click on the menu item **Virtual Servers**. All installed Teamspeak 3 servers on your instance are clearly listed in this area. To call up the interface of the respective Teamspeak 3 server, simply click on the "eye" symbol.

![img](https://user-images.githubusercontent.com/61839701/165704968-0db2248f-9012-48c8-9005-320ea03d0b8b.png)

In the Teamspeak 3 server interface, you will find all the necessary information and setting options to individually design and manage your server. For example, under the tab "Authorization key" you can create a token that grants you admin rights on your server. This gives you complete control over user administration and access to the server.

Under the menu item "Settings" you have further options to customize your server. Here you can, for example, change the name of your server, set a password to restrict access, or store a personal welcome message that users receive when they enter the server.

> ⚠️ **Note**: There is no licence installed on the Teamspeak 3 server by default. This means that you can only use a Teamspeak 3 server with a capacity of 32 slots. However, if you would like to activate more capacity or additional functions for your Teamspeak 3 server, you can purchase a corresponding licence from Teamspeak.
