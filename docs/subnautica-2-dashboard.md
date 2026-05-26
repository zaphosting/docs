---
id: subnautica-2-dashboard
title: "Subnautica 2: Dashboard"
description: "Discover how to manage your Subnautica 2 server with the ZAP-Hosting dashboard, monitor hosting performance, and access important zap web administration features -> Learn more now"
sidebar_label: "Dashboard"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

You are interested in a **Subnautica 2** server or already own one, but you still lack a comprehensive overview of the administration and the findability of all necessary options? Especially at the beginning, this can be a challenge. But don't worry, this guide provides you with a detailed introduction to the administration of your service so that you get the best possible overview.

After going through this guide, you will easily be able to manage your server efficiently and find all the necessary options and features quickly and easily. Here, you will get a structured overview that helps you step by step to get familiar with the server administration and expand your knowledge in a targeted manner. This way, you can ensure that your **Subnautica 2** server is optimally adapted to your needs and that you get the most out of the available options in the **ZAP-Hosting** panel.

<InlineVoucher />

## Product Administration

In the **Product Administration** section, you will find all the necessary pages for managing your server. The options for managing your server are listed in detail below.

### Dashboard

The **Dashboard** of your server is the heart of the administration. All basic and essential information about your service is clearly presented here. This includes, for example, information about the location, status, IP: Port, used memory, game in progress, server name, map, and the number of available slots. In addition, the utilization of the CPU, memory, and RAM is also displayed.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

In the dashboard, you also have the option of starting, stopping, or restarting your service to have full control over its operation. Furthermore, you can access the live console to get real-time information about the server's state and take direct action if necessary.

### Statistics

Under **Statistics**, you get a comprehensive overview of the load values of your server. There you will find information about various aspects such as the load of the available slots, the CPU, and the memory. You can view this data for different time periods, for example for the last **60 minutes, 24 hours, 3 days, 7 days**, or **30 days**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Thanks to this information, you get a good insight into the usage of your server. Additionally, these statistics are often helpful to identify possible performance issues and narrow down their causes. For example, you can trace back when the utilization has increased and whether this is related to certain events or changes. This is particularly important when sudden problems arise, as it allows you to take targeted steps to troubleshoot and systematically analyze possible causes.

### DDoS Manager

View past DDoS attacks to better assess potential threats and patterns. Enable notifications for ongoing DDoS attacks on your server so that you can react quickly when an incident occurs.

Depending on the server location and the DDoS protection available there, you can also monitor active attacks in real time. This includes detailed traffic insights, showing both legitimate traffic and the amount of traffic blocked by the mitigation systems. This level of transparency helps you understand how the protection is working and enables you to identify potential risks early.

:::info DDoS Manager Access Missing
Use of the DDoS Manager requires either a dedicated IP address or the additional option `DDoS Manager Overview`. If your current package does not include these components, you can add them at any time by upgrading your service.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution DDoS Manager Requirement
The use of the DDoS Manager is only possible if either your own IP address or the option `DDoS Manager Overview` has been booked as an additional option. If these components are missing from your current package, you can add them at any time by upgrading.
:::

### Log files

Is a technical problem occurring and you are unsure about its cause? A first possible solution strategy is to check the **Log files**. These files contain a lot of information about the server, such as current events, hints, or error messages.

Error messages in particular can help to identify and better understand the cause of a problem. Often, difficulties can be uncovered and resolved by taking a targeted look at the log files.

:::caution Need Help With Log Files
The information found there does not help or you do not understand it? In this case, you can create a **[Ticket](https://zap-hosting.com/en/customer/support/)** and explain your problem. Support is available daily and can help you analyze the issue further.
:::

### Event log

The **Event Log** provides you with a comprehensive overview of all activities related to server administration. Here you can track at any time when a server started, stopped, or crashed, as well as when updates, backups, or new installations were performed.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

The **Live Console** offers you a real-time view of all current events on your server. Here you can see information about the activities of the players as well as possible error messages and system messages. This overview allows you to get a comprehensive view of what is happening on your server and to detect possible problems at an early stage.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Additionally to monitoring the events, you can also send commands directly to the server in the **Live Console**. This can be useful to adjust settings, perform certain actions, or respond quickly to problems that arise.

### Service Interruptions

Your server was temporarily offline and you cannot explain why? A look into the event log and log files did not provide any information either? It could be that the cause of the problem does not lie directly with your server, but with the host system on which your server is operated.

If the monitoring system detects a general interruption, technicians are automatically notified and take care of the problem as soon as possible.

In this section, you will find an overview of the interruption history of the host system on which your game server service is running. You can find more information and the latest version of the service status on the [status page](https://status.zap-hosting.com/).

## Settings

In the **Settings** section, you will find all the necessary pages for configuring your server. The available options for configuring your server are listed in detail below.

### Settings

Under **Settings**, you will find an overview of the most common setting options for your server. These also include a short explanation. The use of the settings page is especially recommended for newcomers to server administration.

If you are more confident and want to make more precise changes, using the Config Editor is recommended instead. You can find more information about this in the **Configs** category.

### Configs

The config file editor allows you to edit the configuration files directly from the website in the classic way, without the simplified view. This option allows you to customize the settings of your server and configure them according to your personal preferences.

By using the editor, you get direct access to all available options and can customize them precisely. This is especially useful for advanced users who want full control over their server settings and know exactly what changes they want to make.

:::caution Config Values May Be Overwritten
Have you noticed that some of your changes are partially overwritten? Please be aware that certain option values are taken from the settings page. If you want to make these changes directly in the config, you must first disable the relevant options on the settings page.
:::

### Games

Under **Games**, you always have the possibility to change the game variant of your existing game or to install another game in general. Games with the same slot price can be selected directly under **Available Games**. For all other games, an adjustment of the slot price is required first. More information about this can be found in the [Game Change](gameserver-gameswitch.md) guide.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

Under **Versions**, you have the possibility to view and manage the current version of your game server. Here you can update to the latest version at any time or activate automatic updates to ensure that your server is always up to date.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Moreover, you can also enable the email notification feature for automatic updates to keep you informed about updates and ensure that you are always up to date.

### Scheduled Tasks

Create scheduled tasks that run automatically at defined times to automate various processes on your server. You can set whether a task should run once or repeat as needed. Supported task types include starting, stopping, or restarting services, restarting the server if it is online, creating backups, or executing custom commands.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

Do you want to schedule server restarts at specific times? The Restart Planner allows you to set up scheduled automatic restarts of your game server. With this feature, you can set up restarts at specific times or at regular intervals.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS settings

With the ZAP DNS settings, you can create easy-to-remember addresses for your service. You can either use a subdomain of one of the available domains, or you can create a DNS entry on your own domain and thus have an address that can be better associated with your project.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

In the **Tools** section of your navigation panel, you will find a range of sub-items that will help you manage your server. These include **FTP Browser**, **Databases**, and **Backups**. In the following, you will receive a detailed introduction to these different areas.

### FTP-Browser

Using the **FTP Browser**, you will get all the necessary information to establish a connection to the FTP access. The FTP access allows you direct access to the files of your game server. It is recommended to use an external FTP program such as [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/eng/index.php) for optimal use. If you are not familiar with how to use FTP, taking a look at the [Access via FTP](gameserver-ftpaccess.md) guide may help you.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla is one of the simplest and most well-known FTP clients. After installation, you can start it and enter your access data in the top bar using the credentials shown in your panel. After a quick click on connect, you are directly logged in to the server and can manage the files.

**WinSCP:** WinSCP is primarily intended for SCP and SFTP, but it can also handle standard FTP connections. The program is somewhat more extensive than FileZilla and is therefore often better suited for advanced users.

### Databases

In addition to game server products, there are also 10 included databases available. These databases are necessary, for example, when data needs to be stored in a database. Under **Databases**, you can create a database and view the access credentials. You also have the option to activate the backup option and import existing database backups.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Under **Backups**, you have the option to create both manual and automatic backups for your server and its associated database. This makes it easier to recover your data in case of any problems or data loss.

In the settings, you can specify whether backups should be created automatically and whether this should be done daily or weekly. Additionally, you can decide whether the oldest backups should be deleted if necessary, such as when the available storage space becomes limited.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

By default, 10 GB of storage space on the storage server is provided for backups for game server products. If you need more storage space, it can be upgraded for a fee. This way, you ensure that you always have enough space for your backups and can still access older backups if necessary.

## Further Links

In the **Further Links** section, you will find further links that are relevant to your product.

### Frequently Asked Questions

The **Frequently Asked Questions** section provides an overview of the most commonly asked questions from customers. Here, you will find helpful answers and detailed information on various topics to help you quickly and efficiently.

### ZAP-Hosting Documentation

Extensive documentation is available for the products and serves as a knowledge base for the most frequently asked questions and concerns. There you will find various guides and help on different topics that assist you in using and managing your product.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

The **News** provides you with a comprehensive overview of all announcements and news related to your service. Here you will find important information on various aspects such as:

- Changes to the service, for example through updates or new features
- Announcements about possible maintenance or technical problems
- Special offers and promotions that give you exclusive benefits or discounts
- Other relevant information that may be important for the use of your service

By checking the **News** regularly, you stay informed and can adjust your service accordingly to get the most out of your server.

<InlineVoucher />

## Conclusion

You now have a complete overview of the most important areas of the **Subnautica 2** dashboard and know where to find the central administration, configuration, tools, and information pages in the **ZAP-Hosting** panel.

Congratulations, you have successfully learned how to use the Subnautica 2 dashboard. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!