---
id: vserver_root_unterschied
title: Difference Rootserver / VPS at ZAP-Hosting
description: Information on the differences between root servers and VPSs at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Rootserver versus vServer
---

## Virtualization
### V-Server (Linux)
Our Linux virtual servers are virtualized using LXC. This is a container virtualization, several virtual servers can thus be operated while isolated from each other on a single main system.

However, the resources are shared, which can lead to performance fluctuations. Furthermore, containers share the same operating system kernel, which is why it is also not possible to start other operating systems, such as Windows, as LXC guest. 

### Rootserver & Windows V-Server
The root servers and Windows virtual servers are fully virtualized using KVM. A full virtualization differs from the classic virtual server in the sense that a completely independent server is simulated, which runs independently from all other servers.

The advantage is that these are independent, as well as isolated and self-contained systems, thus the root servers run stable and have a constant performance rate.

## What is the right decision for me?
First of all, you have to see what you have planned to do with the server. If you need the server for small projects, such as a web server, a Teamspeak 3 server or a mail server, then a virtual server is sufficient and for gameservers a virtual server is often sufficient as well (for example: a small minecraft server).

Especially for larger projects, a root server is often the better decision. For example, if you need a server for a community or if you want to install gameservers which need a lot of power (for example: a CS:GO Server (128 Tick) or Rust Server with many players).

If you wanted to have a large web presence, a root server would often also be the best choice for this as well.

> If you are still not sure what is the better choice for you, you are welcome to contact our support.
> Let us know what exactly you want to do with the server and we will gladly advise you of what we think is best! 
