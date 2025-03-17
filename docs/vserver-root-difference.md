---
id: vserver-root-difference
title: "Differences between the VPS & Rootserver product" 
description: Information on the differences between root servers and VPSs at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: VPS vs Rootserver
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Are you unsure what the specific differences between a VPS or root server product are? We will explain the advantages, disadvantages and differences between the two products in more detail below. 

<InlineVoucher />


## Virtualization
Unlike the dedicated server product, the VPS and root server products are virtualized services. This means that you are not assigned a dedicated server exclusively, but your server is created as a virtual instance on a high-performance host system. The resources provided, such as CPU, RAM and storage space, are allocated from the host system and shared.

The type of **virtualization** depends on the product and the operating system. The virtualization variants **LXC** and **KVM** are used. 

**LXC (container virtualization)**

LXC is a form of container virtualization in which several isolated virtual instances are operated on a shared host system. All containers use the same operating system kernels, which is why it is not possible to run other operating systems such as Windows within the virtual environment.



**KVM (full virtualization)**

KVM is based on full virtualization, where each virtual server runs as an independent, isolated system. In contrast to container virtualization, resources are allocated directly, which ensures better and more stable performance.



Due to the conditions described above, our Linux VPS product is virtualized using LXC and our Windows VPS product is virtualized using KVM. Our root server product is virtualized for both Linux and Windows using KVM. 



## Hardware

The hardware configurations vary depending on the product and offer different customization options. While VPS servers provide a predefined selection of resources, root servers offer significantly more flexibility and are closer in performance to a dedicated server.

Root servers allow customized configuration with a wider range of CPU options, more RAM and storage. In addition, even more resources such as vCores or RAM can be flexibly added to adjust the server to increasing requirements.



## Conclusion
The choice between a VPS and a rootserver depends on your use case and the resources required. A VPS is a cost-efficient solution with solid performance and is ideal for smaller projects. You can run web servers, databases, voice and game servers and other services on it. The available configurations are predefined and offer a good balance between performance and price.

A rootserver offers the same capabilities, but with more flexibility and scalability. While the choice of configurations is similar, here you have the option of choosing between two CPU models and additionally booking more resources such as RAM and storage space. This makes a root server particularly suitable for large or resource-intensive projects.

:::tip Dedicated server for best performance
If you are planning a larger and long-term project, we recommend the use of a [dedicated server](dedicated-introduction.md), where you have dedicated hardware and performance. 
:::

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
