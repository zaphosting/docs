---
id: redm-prohibited-resources
title: "RedM: 'Resource contains prohibited logic?'"
description: "Understand how to protect your server from malicious RedM resources and ensure secure, high-performance gameplay → Learn more now"
sidebar_label: Resource contains prohibited logic
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The developers of RedM resources have taken great efforts in recent years to protect their source code using techniques such as obfuscation, IP locking, remote code loading and other methods. Unfortunately, these measures often lead to problems, which many already know about. Some of these tools do not just significantly slow down the performance of the code, but also introduce numerous security concerns.

Cfx.re has therefore started blocking malicious resources that contain malicious code designed to infect servers and other resources. These resources sometimes try to "spread" their code to other resources to give third parties access to scripts and databases. It is important to note that these resources can generally be compared to viruses and therefore represent a serious threat.

<InlineVoucher />



## Meaning

Our system checks all resources before the startup process for the above-mentioned security reasons and disables all resources that are recognized as dangerous. This step is absolutely necessary, which is why there is unfortunately no room for exceptions here. The security comes first! 

In case one of your uploaded resources is affected, the server console will provide additional information about it. The content of this information can for example look like the following: 

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## How to proceed

As the first and most important step, we recommend removing all malicious resources immediately. Furthermore, you should only install resources that have been obtained from reputable sources. A good place to start for this is, for example, the official website or the [Forum](https://forum.cfx.re/c/development/releases/7) of RedM. A wide selection of resources is offered there. 

As a developer or someone in contact with the developer, we recommend referring to the **RedM Asset Escrow system**, which was developed by Cfx.re in collaboration with **Tebex**. Additional details can be found in the official [Cfx.re Forum post](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Prohibited Resources

There is unfortunately no official list of resources that can lead to this message. In principle, you shouldn't use resources that use other obfuscation methods or aren't based on the RedM Asset Escrow system. 



## Conclusion
To maintain a secure and stable server environment, it is essential to use only trusted resources and remove any flagged ones immediately. By following these guidelines and utilizing the RedM Asset Escrow system, you can help ensure both security and compliance within the RedM ecosystem. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
