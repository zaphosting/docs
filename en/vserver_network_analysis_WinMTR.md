---
id: vserver_network_analysis_WinMTR
title: Network analysis MTR/WinMTR
sidebar_label: Network analysis MTR/WinMTR
---

## ❓ What is MTR/WinMTR?

WinMTR is a network diagnostics program that combines the features of ping and traceroute. The program was developed by Matt Kimball based on the well-known MTR program for Linux. It offers the possibility to get detailed information about possible network problems. The program also allows to track the time between sending a signal and receiving the corresponding response packet. In the following screenshot the outgoing route to ZAP-Hosting.com is shown as an example:



![img](https://cloud.galz.dev/index.php/s/FQ53jHQ26GxxwQK/preview)



All nodes are listed, which are used to reach the destination. In case of possible problems you can see if there are problems on the server side or if they already occur on your own. The starting point starts with the first value and the end (ZAP - 104.xx.xx) with the last value.



## ❓ When should the test be performed?

The network diagnostic test should be performed when the problem actively occurs. The person who is affected by the problem should perform the test. In order to be able to analyze the network problems as well as possible, an evaluation of the outgoing and ingoing route should be made. Depending on the operating system either WinMTR (Windows) or MTR (Linux) is used. 



## 🔧 Configuration of MTR / WinMTR



### Windows

WinMTR for Windows can be downloaded from the [ZAP-Hosting](https://zap-hosting.com/de/winmtr) page. Once installed, the program must be started and the host name or IP address of the affected case needs to be filled in:

![img](https://cloud.galz.dev/index.php/s/2wgJbMdkgwA5tiw/preview)





### Linux

MTR on Linux requires an SSH connection to the server. If you don't know exactly how to do this, you can have a look at the following instructions: [Initial access (SSH)](https://docs.zap-hosting.com/docs/de/vserver_linux_ssh/)

Now the package can be installed with the following command:

```
apt-get install mtr
```

![img](https://cloud.galz.dev/index.php/s/PXKQyDFskM92MxS/preview)



The evaluation can then be started with the command **mtr IP address**. By pressing CTRL+C you can stop the test at any time as desired.

![img](https://cloud.galz.dev/index.php/s/g49D84NjjJC7SPi/preview)





## ❓ Analyzing the evaluation

The program provides several kinds of information. You have to check this information carefully in order to identify the problem correctly. The information includes the following aspects:

![img](https://cloud.galz.dev/index.php/s/t8EjJarDg9wCJMp/preview)



While evaluating a route, the message **No response from host** may appear from time to time, reporting 100% packet loss. However, this is often not the direct cause. In such a case it is possible that only the packets are filtered by the firewall and therefore no response comes or is generally unreachable. The next possible option for the route is then selected. Only if the packet loss starts at one point and continues through others is there active packet loss. 

| Value  |                Meaning                 |
| :----: | :------------------------------------: |
|  Host  |        Name of the network node        |
| Loss % |       Percentage of packet loss        |
|  Sent  | The number of packets sent to the node |
|  Recv  |     The number of received packets     |
|  Best  |         Best ping of the node          |
|  Avrg  |        Average ping of the node        |
|  Wrst  |         Worst ping of the node         |
|  Last  |         Last ping of the node          |
