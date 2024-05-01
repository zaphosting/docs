---
id: fivem-prohibited-resources
title: "FiveM: Error: 'Resource contains prohibited logic?'"
description: Information about the error "Resource contains prohibited logic" on a FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Resource contains prohibited logic
---

## Introduction

The developers of FiveM resources have taken great efforts in recent years to protect their source code using techniques such as obfuscation, IP locking, remote code loading and other methods. Unfortunately, these measures often lead to problems, which many already know about. Some of these tools do not just significantly slow down the performance of the code, but also introduce numerous security concerns.

FiveM has therefore started blocking malicious resources that contain malicious code designed to infect servers and other resources. These resources sometimes try to "spread" their code to other resources to give third parties access to scripts and databases. It is important to note that these resources can generally be compared to viruses and therefore represent a serious threat.

## What does "Resource contains prohibited logic" mean?

Our system checks all resources before the startup process for the above-mentioned security reasons and disables all resources that are recognized as dangerous. This step is absolutely necessary, which is why there is unfortunately no room for exceptions here. The security comes first! 

In case one of your uploaded resources is affected, the server console will provide additional information about it. The content of this information can for example look like the following: 

![image-20230109185341047](https://user-images.githubusercontent.com/26007280/217035956-c62a44cc-7651-4d87-bf0d-60a870181863.png)

## What can I do about it?

As the first and most important step, we recommend removing all malicious resources immediately. Furthermore, you should only install resources that have been obtained from reputable sources. A good place to start for this is, for example, the official website or the [Forum](https://forum.cfx.re/c/development/releases/7) of FiveM. A wide selection of resources is offered there. 

As a developer or a person who has been in contact with the developer, we recommend to refer to the **FiveM Asset Escrow system**, which FiveM has developed in cooperation with Tebex. A post has also been published in the [FiveM Forum](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151) regarding this.

## What resources exactly are prohibited?

There is unfortunately no official list of resources that can lead to this message. In principle, you shouldn't use resources that use other obfuscation methods or aren't based on the FiveM Asset Escrow system. 
