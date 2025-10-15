---
id: empyrion-troubleshooting-common-issues
title: "Empyrion: Common issues"
description: "Discover how to troubleshoot and resolve common Empyrion server issues for a smooth gaming experience → Learn more now"
sidebar_label: Common issues
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Setting up and running your own Empyrion game server can be an exciting and a lot of fun. While it can be a great way to build a custom gaming environment and community, it also means taking responsibility when things go wrong. Crashes, lag, and configuration issues are common issue that every server owner may encounters at some point.

To make sure you spend less time fixing and more time enjoying your server, this section highlights the most common issues server owners face and provides solutions to help you resolve them quickly and effectively.


<InlineVoucher />



## Issues and solutions

The cause of server issues can vary and is often not immediately obvious. Learn how to troubleshoot typical issues step by step and keep everything running smoothly.

### General
General issues can include all kinds of unexpected problems that don’t fit into a specific category. They often relate to basic settings, missing files or simple misconfigurations. These can usually be fixed quickly with a few checks and adjustments.

<details>
  <summary>Server not visible</summary>

A lack of visibility of the server can occur if the initialization was not completed successfully. This may for example be due to a faulty configuration or corrupted files. Further information can usually be traced in the server console or log files. Apart from this, it should be ensured that no incorrect filter settings are used in the server list, which would ensure that the server is not displayed.

</details>


### Crashes

Nothing disrupts a good session faster than an unexpected crash. Crashes can be caused by faulty server software, broken or incompatible extensions (such as plugins, mods, resources, or frameworks), system overload, or misconfigurations. 

<details>
  <summary>Keeping your server up to date</summary>

Running your game server on the latest version is essential for stability, security, and compatibility. Game updates, framework changes, or modifications to third-party tools can lead to serious issues if your server version is outdated.

An outdated game server may experience crashes, unexpected behavior, or even fail to start entirely.

![img](https://screensaver01.zap-hosting.com/index.php/s/JXLHyHeMJqErHLJ/preview)


</details>

<details>
  <summary>Faulty/problematic extensions (Frameworks, Plugins, Mods, Resources)</summary>

Crashes can often be caused by faulty or outdated extensions. Whether it’s a framework, plugin, mod or resource, problems can arise if an extension is not compatible with the latest game version or contains bugs in its code.

This may lead to unexpected server crashes, freezes or errors, especially when several problematic extensions interact. If you suspect that an extension is the cause, try disabling it temporarily and check if your server stays stable without it. This is a simple way to identify which extension is creating issues.

Make sure that all extensions you use are up to date, actively maintained and tested for compatibility with the current version of your game to avoid crashes and downtime.

To isolate the root cause of crash issues, it's often helpful to disable additional content temporarily. Start with a minimal setup and check whether the problem persists. If the issue disappears, gradually reintroduce extensions, mods, or resources one by one testing after each step. This incremental approach helps identify the specific element causing trouble. This method not only narrows down potential culprits efficiently but also ensures your troubleshooting is based on evidence rather than assumptions.

</details>

### Performance

Smooth server performance is essential for a good gaming experience. Issues like lag, delays or sudden crashes often occur when the server setup is not optimal, the hardware does not match the game’s requirements or installed extensions overload the system.

Typical reasons include a bad configuration, missing resources or unoptimized plugins and mods. Checking and adjusting these areas helps fix most performance-related problems and keeps your game running stable and responsive.

<details>
  <summary>Bad server configuration</summary>

Incorrect or poorly adjusted server settings can lead to higher resource usage and cause performance problems like lag or stuttering. Make sure your configuration values match the recommended settings for your game and server size. Review and adjust them if needed to keep your server running as efficiently as possible.

You can change your configuration through the available settings in the **Settings** section  or directly in the configuration files under **Configs** of your web interface.

</details>

<details>
  <summary>Not meeting the game requirements</summary>

To ensure your game server runs smoothly and reliably, it is essential to choose a configuration that matches the needs of your planned project. Requirements can vary greatly depending on the game, the use of extensions such as mods, plugins, or resources, and the expected number of players.

ZAP-Hosting provides a recommended minimum configuration during the ordering process. These suggestions are based on typical use cases and are designed to help you avoid common performance issues such as lag, crashes, or long loading times.

![img](https://screensaver01.zap-hosting.com/index.php/s/87ADJdwNAXxXxdk/preview)

Please make sure to follow these recommendations or scale up if needed to ensure optimal stability and the best possible experience for you and your players. This is a minimum recommendation. 

Depending on the scope of your project and the amount of additional content, the required resources may already be higher from the start or increase over time. In such cases, upgrading your game server package is a straightforward way to ensure continued performance and stability.

</details>

<details>
  <summary>Unoptimized extensions (Frameworks, Plugins, Mods, Resources)</summary>

Not all extensions are created with performance in mind. Whether it's a framework, plugin, mod, or resource, poor implementation can lead to significant performance issues on your server. In many cases, the intended functionality may work but the way it's executed is inefficient, overly complex or causes unnecessary load on server resources.

This can result in high CPU usage, memory leaks, lag, or even crashes, especially when multiple unoptimized components interact. Always ensure that extensions are actively maintained, well-documented, and tested for performance. When in doubt, consult community feedback or monitor server performance to identify problematic elements.

To isolate the root cause of performance issues, it's often helpful to disable additional content temporarily. Start with a minimal setup and check whether the problem persists. If the issue disappears, gradually reintroduce extensions, mods, or resources one by one testing after each step. This incremental approach helps identify the specific element causing trouble, whether it's a conflict, memory leak, or excessive resource usage.

This method not only narrows down potential culprits efficiently but also ensures your troubleshooting is based on evidence rather than assumptions.

</details>



### Network
Network issues can lead to lag, delays or connection drops. These problems can have different causes but can usually be fixed with the right settings and security measures.

<details>
  <summary>Ping Spikes, Lag and Network Delay</summary>

Ping spikes, lag, and network delays are usually the result of limited server resources, such as insufficient CPU power, RAM, or bandwidth.

They can also occur when the server is overloaded by a high player count or resource-intensive scripts and plugins. Network related issues like poor routing, external overloading, or hosting the server far from the player base can further increase latency. 

Additionally, background processes, unstable internet connections, packet loss, and outdated or misconfigured server software can all contribute to noticeable performance problems during gameplay.

If you're experiencing lag or high ping on your server, there are a few simple steps you can take to improve performance. First, make sure your server meets or exceeds the recommended specifications for your game and project. Choosing a server location close to your player base can also help reduce latency.

If you suspect that routing problems or external network issues are causing delays, don’t hesitate to contact our support team. They will help you analyze the situation and find the best possible solution.


</details>

<details>
  <summary>DDoS and Other Network Threats</summary>

Game servers can occasionally become targets of malicious network activity, most notably Distributed Denial of Service (DDoS) attacks. These attacks flood the server with excessive traffic, causing lag, connection loss, or even complete downtime. In other cases, attackers may attempt to exploit network vulnerabilities or disrupt server stability through repeated connection attempts or unusual data patterns.

While most of these threats are beyond the control of the average user, ZAP-Hosting provides built-in protection and mitigation systems to shield your server from common and advanced attacks. If you suspect your server is being targeted which causes any issues, contact our support team for assistance and further guidance.

</details>






## Preventive Measures 

Regular backups can avoid a lot of stress and worries. Create regular backups to ensure that in case of any issues you still have a backup of an older version when everything was still working. We offer a [backup solution](gameserver-backups.md) for our Empyrion game servers, which you can use to create either manual or scheduled automatic backups. 



<Button label="Access ZAP-Storage" link="https://zap-hosting.com/en/customer/home/storage/" block/>






## Conclusion

These steps should help you solve the issue. If you find your problem listed here, the matching solution should already point you in the right direction and help you get things running again. 

If not, please don't hesitate to contact our support team for further questions or assistance, which is available daily to assist you! 🙂

<InlineVoucher />
