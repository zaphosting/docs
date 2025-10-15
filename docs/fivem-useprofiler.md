---
id: fivem-useprofiler
title: "FiveM: Using the Profiler to identify server issues"
description: "Discover how to analyze server performance and identify resource issues with the FiveM Profiler for smoother gameplay → Learn more now"
sidebar_label: Use Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

The Profiler is a quite useful and easy to use game tool to measure the performance of the server. This can be used to check codes and threads that lead to possible performance issues. This can for example be caused by poorly developed resources or similar. The profiler is directly integrated into the server software. 

<InlineVoucher />

## Usage of the Profiler
The procedure for using the FiveM Profiler is relatively simple. To do this, execute the commands `profiler record 100` and `profiler view` in the live console. A profile with 100 frames will be created, which can then be accessed via the link provided in the console. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Identifying issues
The profiler contains information on the individual activities (ticks) that need to be checked  more closely. Select a tick area and zoom in on it. Based on the tick, you can now see which processes were executed and how long they took. 

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

This way, you can for example also recognize which resources take up a lot of time. Resources that consume more than 6 ms in total can cause possible issues.
:::



## Conclusion

Congratulations, you have successfully created a FiveM profile that allows you to identify potential issues. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
