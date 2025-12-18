---
id: gameserver-scheduled-tasks
title: "Game server: Scheduled Tasks (Cron)"
description: "Discover how to automate server processes with scheduled tasks for backups, service management, and commands → Learn more now"
sidebar_label: Scheduled tasks
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Create scheduled task that are automatically executed at defined times. This allows you to automate various processes on your server. You can specify whether the task should only be executed once or repeatedly. 



## Task types

The scheduled tasks allow you to execute different types of tasks. The following task types are currently supported: 

- Start service
- Stop service
- Restart service
- Restart server (only if it is online)
- Create backup
- Execute command

The predefined types allow you to manage your server in an extensively automated way. Especially the **Execute Command** type allows you to create many more specific and customized tasks. 

:::warning Rate limits
Certain planned tasks have rate limits, which means that they cannot be carried out an infinite number of times and instead have a cooldown/limit.
 :::

## Create tasks

Navigate to Scheduled tasks in your game server administration under Settings. To create a new scheduled task, click on the green button with the plus symbol on the right side of the list of scheduled tasks.  A new pop-up window will open where you can configure your task. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Manage tasks

In the configuration of a task, you can define what type of task you want to create. Define a name (optional) and select one of the task types offered. This example shows how to create a scheduled task to restart the service regularly. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Select the option `repeating` for repetition type. In the Cron expression field, you must now specify the intervals at which the task should be executed. In this case, the service is restarted every three hours. 

:::tip Cron generator

Aren't familiar with the structure or syntax of Cron? Simply use the [**Crontab Guru**](https://crontab.guru/). It is a simple application which allows you to build and copy cron expressions with a few clicks. 

:::

To complete the creation, select from when to when the scheduled task should be executed and then click on save.

## Remove tasks

Do you want to remove existing tasks? Delete existing tasks in the list by clicking on the red recycle bin button on the right. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusion

Now you know how to create, manage and remove scheduled tasks. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
