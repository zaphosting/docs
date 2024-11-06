---
id: fivem-useprofiler
title: "FiveM: Using the Profiler to identify server issues"
description: Information on how to use and interpret the profiler for your FiveM server on ZAP-Hosting to identify problems - ZAP-Hosting.com 
sidebar_label: Use Profiler
services:
  - gameserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

The Profiler is a quite useful and easy to use game tool to measure the performance of the server. This can be used to check codes and threads that lead to possible performance issues. This can for example be caused by poorly developed resources or similar. The profiler is directly integrated into the server software and can therefore also be used for any FiveM server variant. 

<InlineVoucher />

## Usage of the Profiler
The procedure for using the Profiler may differ slightly depending on the FiveM Server variant selected (Windows/Linux/TxAdmin). How to proceed is explained in more detail in the following sections. 

<Tabs>
  <TabItem value="fivem_txadmin" label="FiveM (txAdmin) server" default>

  The FiveM (Linux) server variant allows you to create a profile directly via the live console. To do this, execute the commands `profiler record 100` and `profiler view` in the console. A profile with 100 frames will be created, which can then be accessed via the link provided in the console. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)

  </TabItem>

 <TabItem value="fivem_linux" label="FiveM (Linux) server">

The FiveM (Linux) server variant allows you to create a profile directly via the live console. To do this, execute the commands `profiler record 100` and `profiler view` in the console. A profile with 100 frames will be created, which can then be accessed via the link provided in the console. 
![img](https://screensaver01.zap-hosting.com/index.php/s/mK8HPBZESz4LKfN/download)

  </TabItem>

<TabItem value="fivem_windows" label="FiveM (Windows) server">
The FiveM (Windows) server variant doesn't support the live console option, which means that no commands can be executed from there. The RCON tool [Icecon](https://github.com/icedream/icecon/releases/tag/v1.0.0) can therefore be used as an alternative. 

In order to establish a connection, you will need the IP address, port and the defined RCON password of your server, which you must specify in the required fields. 

![img](https://screensaver01.zap-hosting.com/index.php/s/kogH6z4XeGGwMCf/download)

As soon as the connection is established via RCON, you can create a profile. To do this, execute the  commands `profiler record 25` and `profiler view`. A profile with 100 frames will be created, which can then be accessed via the link provided in the console.



  </TabItem>
</Tabs>


## Identifying issues
The profiler contains information on the individual activities (ticks) that need to be checked  more closely. Select a tick area and zoom in on it. Based on the tick, you can now see which processes were executed and how long they took. 

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

This way, you can for example also recognize which resources take up a lot of time. Resources that consume more than 6 ms in total can cause possible issues.
:::



## Conclusion

Congratulations, you have successfully created a FiveM profile that allows you to identify potential issues. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂