---
id: windrose-firststeps-dashboard
title: "Windrose: Dashboard Overview"
description: "Discover the ZAP-Hosting Windrose dashboard and learn how to manage your gameserver hosting, monitor performance, and use key control features efficiently -> Learn more now"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The **Windrose** dashboard is the central area for managing your game server in the ZAP-Hosting web interface. In this guide, you will get a structured overview of the available dashboard sections and learn how to use the most important administration, monitoring, and hosting tools efficiently.

<InlineVoucher />

## Product Administration

In the **Product Administration** area, you will find the most important pages for controlling and monitoring your **Windrose** server. These pages help you manage the current server state, review technical events, and quickly access essential service information.

### Dashboard

The **Dashboard** is the main overview page of your **Windrose** server. Here, you can typically find the most important service details at a glance, such as the current server status, location, connection address, and resource usage.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Depending on the current server setup and game integration, the dashboard may also show additional information such as the active map, server name, used memory, or player slot usage. It is also the place where you can directly start, stop, or restart your service.

The dashboard is especially useful because it combines both server control and monitoring in one place. This allows you to quickly check whether your service is online and react immediately if changes are necessary.

### Statistics

Under **Statistics**, you can review the historical usage data of your server. This helps you better understand how your **Windrose** hosting service performs over time.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

The available graphs usually include values such as CPU usage, memory usage, and slot utilization. You can often switch between different time ranges to analyze short-term spikes or long-term trends.

| Metric | Purpose |
| --- | --- |
| CPU usage | Helps you identify processing load and possible performance bottlenecks |
| Memory usage | Shows how much RAM your server is using |
| Slot utilization | Indicates how many available player slots are actively used |

:::tip Performance Analysis
If you notice lag, crashes, or slow response times, the statistics page is one of the best places to begin troubleshooting. It can help you determine whether the issue is related to resource usage or occurred only at a specific time.
:::

### DDoS Manager

The **DDoS Manager** allows you to review information related to detected and mitigated DDoS attacks against your service. This can be helpful if you want to understand unusual traffic patterns or investigate service interruptions caused by malicious traffic.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Depending on your booked options and the available protection at your selected location, you may also be able to view active attack information and traffic details in real time.

:::info DDoS Manager Availability
The DDoS Manager is only available if your service includes either a dedicated IP address or the additional option **DDoS Manager Overview**. If this is not included in your current package, you need to upgrade your service first.
:::

### Log Files

If your **Windrose** server is showing errors or behaving unexpectedly, the **Log Files** section is one of the most important places to check. Log files contain technical output from the server and can include warnings, startup messages, and error details.

These files are particularly useful when you need to identify the cause of crashes, failed startups, or configuration problems.

:::caution Log Review Limitations
If the log output is unclear or does not help you identify the issue, you should contact support through the official [support page](https://zap-hosting.com/en/customer/support/). Include a clear description of the problem and any relevant log messages to speed up troubleshooting.
:::

### Event Log

The **Event Log** gives you an overview of actions and events related to your service. This can include server starts, stops, crashes, installations, updates, and backup activities.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

This section is especially helpful if you want to verify when a change happened or whether an automated task was executed successfully.

### Live Console

The **Live Console** shows real-time server output while your **Windrose** server is running. It allows you to monitor what is currently happening on the server and can help you detect issues immediately.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

If supported by the server software, you can also send commands directly through the live console. This is useful for administrative actions that need to be performed without restarting the service.

| Function | Description |
| --- | --- |
| Real-time output | Displays current server events and messages |
| Error visibility | Helps you identify issues as they happen |
| Command input | Lets you send supported server commands directly |

### Service Interruptions

If your server was temporarily unavailable and there is no obvious cause in the event log or log files, the problem may be related to the underlying host system rather than your individual service.

In the **Service Interruptions** section, you can review interruption history related to the host environment of your game server. For broader platform status information, you can also check the official [status page](https://status.zap-hosting.com/).

## Settings

The **Settings** area contains the main configuration pages for your **Windrose** server. Here, you can adjust service behavior, change installed games where supported, manage updates, and configure automation features.

### Settings

The **Settings** page provides a simplified overview of common server options. This is especially useful if you are new to game server hosting and want to make changes without directly editing configuration files.

If available for **Windrose**, these options may include gameplay-related settings or other common service parameters. The exact options can vary depending on the current game integration.

### Configs

The **Configs** section allows you to edit configuration files directly through the web interface. This gives you more precise control than the simplified settings page and is generally better suited for advanced users.

:::caution Overwritten Values
Some values may be managed by the simplified **Settings** page. If you notice that certain manual changes in the config editor are being overwritten, check whether the same option is still controlled there.
:::

### Games

Under **Games**, you can switch to another available game or game variant if your service supports it. Games with the same slot pricing can usually be selected directly, while other games may require a package adjustment first.

If you want to learn more about changing the installed game on your service, refer to the [Game Change](gameserver-gameswitch.md) guide.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

The **Versions** page allows you to manage the installed server version for your **Windrose** service, if version management is supported. You can usually update to the latest available version and enable automatic updates.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Automatic updates can help keep your hosting environment current, but you should still verify compatibility after major version changes.

### Scheduled Tasks

With **Scheduled Tasks**, you can automate recurring actions for your server. This is useful if you want to reduce manual administration work and keep your service running consistently.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Common automated actions may include:

| Task Type | Example Use |
| --- | --- |
| Start service | Automatically start the server at a specific time |
| Stop service | Shut down the server during maintenance windows |
| Restart service | Perform routine restarts for stability |
| Backup creation | Create regular backups without manual action |
| Custom commands | Run supported commands automatically |

### Restart Planner

The **Restart Planner** is designed specifically for scheduling automatic server restarts. This can be useful if you want to restart your **Windrose** server regularly, for example during low-activity hours.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS Settings

With **DNS Settings**, you can assign a more user-friendly address to your service. This can make your server easier to remember and easier to share with other players.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

You may be able to use either a ZAP-provided subdomain or your own domain, depending on your setup and booked options.

## Tools

The **Tools** section contains additional service management features that support file access, database management, and backup handling.

### FTP Browser

In the **FTP Browser**, you can find the connection details required to access your server files. FTP access is useful if you need to upload, download, or edit files directly.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

For easier file management, it is recommended to use an external FTP client such as [FileZilla](https://filezilla-project.org/) or [WinSCP](https://winscp.net/). If you need help connecting, take a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

### Databases

Under **Databases**, you can create and manage the databases included with your game server product, if required by your setup. This is useful for services, mods, or tools that need structured data storage.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

You can usually view the access credentials, create new databases, and import existing backups from this section.

### Backups

The **Backups** section allows you to create and manage backups for your server and, where supported, its associated database data.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Regular backups are strongly recommended because they allow you to restore your service after configuration mistakes, file corruption, or unexpected issues.

:::tip Backup Best Practice
Create a manual backup before making major changes such as editing configuration files, switching versions, or changing the installed game. This gives you a safe restore point if something goes wrong.
:::

## Further Links

The **Further Links** section provides additional resources related to your service and general ZAP-Hosting platform usage.

### Frequently Asked Questions

The **Frequently Asked Questions** area contains answers to common topics related to your service. This can help you solve typical issues more quickly without needing to contact support.

### ZAP-Hosting Documentation

The **ZAP-Hosting Documentation** gives you access to a broad knowledge base covering server administration, hosting setup, troubleshooting, and related topics. If you are looking for more advanced guides beyond this **Windrose** dashboard overview, this is the best place to continue.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

The **News** section contains announcements relevant to your service. This may include technical notices, maintenance information, feature changes, and other important updates.

Checking this section regularly helps you stay informed about changes that may affect your **Windrose** server hosting environment.

<InlineVoucher />

## Conclusion

You now have a complete overview of the most important areas of the **Windrose** dashboard in the ZAP-Hosting panel, from server monitoring and logs to settings, tools, and automation features. This knowledge helps you navigate your hosting service more efficiently and manage your server with greater confidence.

Congratulations, you have successfully learned how to use the Windrose dashboard. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!