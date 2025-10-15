---
id: wreckfest2-firststeps-dashboard
title: "Wreckfest 2: Dashboard Overview"
description: "Discover how to efficiently manage and optimize your Wreckfest 2 Server with a clear overview of all features and options → Learn more now"
sidebar_label: Dashboard
services:
  - gameserver-wreckfest2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

You are interested in an **Wreckfest 2 Server** or already own one, but you still lack a comprehensive overview of the administration and the findability of all necessary options? Especially at the beginning, this can be a challenge. But don't worry, we'll provide you with a detailed introduction to the administration of your service below, so you'll have the best possible overview.

After going through this guide, you will easily be able to manage your server efficiently and find all the necessary options and features quickly and easily. Here, you will get a structured overview that will help you step by step to get familiar with the server administration and expand your knowledge in a targeted manner. This way, you can ensure that your **Wreckfest 2 Server** is optimally adapted to your needs and that you get the most out of the available options.



## Product Administration

In the **Product Administration** section, you will find all the necessary pages for managing your server. The options for managing your server are listed in detail below. 



### Dashboard

The **Dashboard** of your server is the heart of the administration. All basic and essential information about your service is clearly presented here. This includes, for example, information about the location, status, IP: Port, used memory, game in progress, server name, map and the number of available slots. In addition, the utilization of the CPU, memory and RAM is also displayed.

![img](https://screensaver01.zap-hosting.com/index.php/s/woXJxHmSDgc6Tna/preview)

In the dashboard you also have the option of starting, stopping or restarting your service, to have full control over its operation. Furthermore, you can access the live console to get real-time information about the server's state and take direct action if necessary.






### Statistics

Under the **Statistics** you get a comprehensive overview of the load values of your server. There you will find information about various aspects such as the load of the available slots, the CPU and the memory. You can view this data for different time periods, for example for the last **60 minutes, 24 hours, 3 days, 7 days** or **30 days.**

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Thanks to this information, you get a good insight into the usage of your server. Additionally, these statistics are often helpful to identify possible performance issues and narrow down their causes. For example, you can trace back when the utilization has increased and whether this is related to certain events or changes. This is particularly important when sudden problems arise, as it allows you to take targeted steps to troubleshoot and systematically analyze possible causes.



### DDoS Manager


View past DDoS attacks to better assess potential threats and patterns. Enable notifications for ongoing DDoS attacks on your server to react quickly when an incident occurs.

Depending on the server location and the DDoS protection available there, you can also monitor active attacks in real time. This includes detailed traffic insights, showing both legitimate traffic and the amount of traffic blocked by the mitigation systems. This level of transparency helps you understand how the protection is working and enables you to identify potential risks early.

:::info DDoS manager access missing?
Use of the DDoS Manager requires either a dedicated IP address or the additional option "DDoS Manager Overview". If your current package does not include these components, you can add them at any time by upgrading your service.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
The use of the DDoS Manager is only possible if either an own IP address or the option "DDoS Manager Overview" has been booked as an additional option. If these components are missing from your current package, you can add them at any time by upgrading.
:::





### Log files

Is a technical problem occurring and you are unsure about its cause? A first possible solution strategy is to check the **Log files**. These files contain a lot of information about the server, such as current events, hints or error messages.

Error messages in particular can help to identify and better understand the cause of a problem. Often, difficulties can be uncovered and resolved by taking a targeted look at the log files.

:::warning
The information found there does not help or you do not understand it? Don't worry! In this case, we are also daily available in support. Just create a **[Ticket](https://zap-hosting.com/en/customer/support/)** and explain your problem to us. We will look at it as quickly as possible and help you to solve the problem accordingly! :)
:::


### Event log

The **Event Log** provides you with a comprehensive overview of all activities related to server administration. Here you can track at any time when a server started, stopped or crashed, as well as when updates, backups or new installations were performed.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)





### Service Interruptions

Your server was temporarily offline and you can't explain why? A look into the event log and log files did not provide any information either? It could be that the cause of the problem does not lie directly with your server, but with the host system on which your server is operated.

If our monitoring system detects a general interruption, our technicians are automatically notified and take care of the problem as soon as possible.

In this section you will find an overview of the interruptions history of the host system on which your game server service is running. You can find more information and the latest version of our service status on our new [status page](https://status.zap-hosting.com/).


## Settings

In the **Settings** section, you will find all the necessary pages for configuring your server. The available options for configuring your server are listed in detail below.



### Settings

Under the settings you will find an overview of the most common setting options for your server. These also include a short explanation. The use of the settings page is especially recommended for newcomers to server administration.



### Configs

The config file editor allows you to edit the configuration files directly from the website in the classic way, without the simplified view. This option allows you to customize the settings of your server and configure them according to your personal preferences.

By using the editor, you get direct access to all available options and can customize them precisely. This is especially useful for advanced users who want full control over their server settings and know exactly what changes they want to make.

:::warning
Have you noticed that some of your changes are partially overwritten? Please be aware that certain option values are taken from the settings page. If you want to make these changes directly in the config, you must first disable the relevant options on the settings page.
:::


### Games

Under **Games** you always have the possibility to change the game variant of your existing game or to install another game in general.  Games with the same slot price can be selected directly under **Available Games**. For all other games an adjustment of the slot price is required first. More information about this can be found in the [Game Change](gameserver-gameswitch.md) guide.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versions

Under **Versions** you have the possibility to view and manage the current version of your game server. Here you can update to the latest version at any time or activate automatic updates to ensure that your server is always up to date.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Moreover, you can also enable the email notification feature for automatic updates to keep you informed about updates and ensure that you are always up-to-date.



### Scheduled Tasks

Create scheduled tasks that run automatically at defined times to automate various processes on your server. You can set whether a task should run once or repeat as needed. Supported task types include starting, stopping or restarting services, restarting the server if it’s online, creating backups or executing custom commands. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

Do you want to schedule server restarts at specific times? The Restart Planner allows you to set up scheduled automatic restarts of your game server. With this feature, you can set up restarts at specific times or at regular intervals.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS settings
With the ZAP DNS settings, you can create easy-to-remember addresses for your service. You can either use a subdomain of one of our domains or you can create a DNS entry on your own domains and thus have an address that can be better associated with you as a person.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)


## Tools

In the **Tools** section of your navigation panel, you will find a range of sub-items that will help you manage your server. These include **FTP Browser**, **Databases**, and **Backups**. In the following, you will receive a detailed introduction to these different areas.



### FTP-Browser

Using the **FTP Browser**, you will get all the necessary information to establish a connection to the FTP access. The FTP access allows you direct access to the files of your game server. We recommend using an external FTP program such as **Filezilla** or **WinSCP** for optimal use. If you are not familiar with how to use FTP, then taking a look at the [Access via FTP](gameserver-ftpaccess.md) guide may help you.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:**  FileZilla ist der wohl einfachste und bekannteste FTP-Client. Einfach installieren, starten und in der oberen Leiste deine Zugangsdaten eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem schnellen Klick auf "Verbinden" bist du direkt am Server angemeldet und kannst die Dateien verwalten.

**WinSCP:**  WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Abkömmlinge des Dateiübertragungsprotokolls FTP) gedacht, kann aber genau so gut mit dem normalen FTP umgehen. Das Programm ist etwas umfangreicher als FileZilla und eignet sich eher für fortgeschrittene User.



### Databases

In addition to our game server products, we also offer 10 included databases. These databases are necessary, for example, when data needs to be stored in a database. Under **Databases**, you can create a database and view the access credentials. You also have the option to activate the backup option and import existing database backups.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backups

Under **Backups**, you have the option to create both manual and automatic backups for your server and its associated database. This makes it easier to recover your data in case of any problems or data loss.

In the settings, you can specify whether backups should be created automatically and whether this should be done daily or weekly. Additionally, you can decide whether the oldest backups should be deleted if necessary, such as when the available storage space becomes limited.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

We provide 10 GB of storage space on the storage server for backups for our game server products by default. If you need more storage space, it can be upgraded for a fee. This way you ensure that you always have enough space for your backups and can still access older backups if necessary.

## Further Links
In the **Further Links** section, you will find further links that are relevant to your product. 

### Frequently Asked Questions
The **Frequently Asked Questions** section provides an overview of the most commonly asked questions from our customers. Here, you will find helpful answers and detailed information on various topics to help you quickly and efficiently.

### ZAP-Hosting Documentation
We offer extensive documentation for our products, which serves as a knowledge base for the most frequently asked questions and concerns. There you will find various guides and help on different topics that will assist you in using and managing your product.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
The **News** provides you with a comprehensive overview of all announcements and news related to your service. Here you will find important information on various aspects such as:

- Changes of the service for example by updates or new features
- Announcements about possible maintenance or technical problems
- Special offers and promotions that give you exclusive benefits or discounts
- Other relevant information that may be relevant to the use of your service

By checking the **News** regularly, you'll stay informed and be able to adjust your service accordingly to get the most out of your server.

<InlineVoucher />
