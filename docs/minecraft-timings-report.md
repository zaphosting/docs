---
id: minecraft-timings-report
title: "Minecraft: Identify server problems with timings report"
description: "Discover how to analyze server performance issues using timing reports to identify lags and optimize your server → Learn more now"
sidebar_label: Timings-Report
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Explanation

### What is a timing report?

Timings reports are very similar to the task manager of your computer which allows you to find the problem especially in case of laggs. A timing report records all activities of the server and displays them visually.

## Timing report

## Create timing report

Depending on the server software, the timing report is created differently. Basically you have to start the recording first with the following command (except for **Paper Spigot** (if the settings have not been changed)

`/timings start`

While recording, make sure to use the server as you always do, so that the respective issues can be recorded and subsequently analyzed in more detail. The duration of the recording should last **min. 10 minutes** or longer if possible.

## Export timing report

In order to create and export the Timings report you have to use the following command:

`/timings paste`

After a few seconds a message appears stating that the export was successful. The Timings-Report can be opened by clicking the link.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analysis

### ↔️ Narrow down values

Once the Timings report has been exported and opened as described above, a window similar to this one should appear:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

First of all, a closer look at the graph should be taken to be able to check rough values for the individual recording points by moving the mouse over the individual points.

In order to get the most accurate values possible, which refer to a possible problem on the server, the problematic period should first be narrowed down by the sliders below, as shown in the graph:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Investigate server values

There are 3 columns in total. As you can see on the screenshot below, box number 1 shows how much % of a tick ( 20 ticks is one second) the main process needs. Among other things, you can also see how often this process was executed during the recording.

In Box number 2 you can see more precise values in miliseconds, but please note that the time should never be higher than 50ms. If this is the case, it would cause a chain reaction and all further processes would accumulate a bit, which would eventually lead to laggs as the server can only handle the processes with delay.

:::info
The **Full Server Tick** can usually be ignored, since the values are always in the red area, but this is not a big issue.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

In any case you should always investigate the colored highlighted values points more closely.

In this example, we have a look at the process for all entities (animals, monsters, items, etc.), as the values are already displayed as orange. From this you might be able to directly conclude that there is a problem with too many entities on the server.
Possibly there are mob farms on the server, or masses of new mobs are being spawned. If you have problems with too many entities, you can throttle the spawn rate in the settings or install plugins that limit the number of entities and remove them automatically if necessary.

As described above, the list basically always shows the main process. By clicking on a process, we can take a closer look at individual processes for each type of entity and investigate them. Please also pay attention to columns 2 and 3 as mentioned earlier.

You will notice that **Minecraft::tickEntity - nms.EntitySkeleton** has executed a lot of processes. Again, mob farms may be the problem.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Another process with already orange values are waiting blocks. Blocks that wait can be particularly inefficient because the server has to check the status of each waiting block every tick.As an example, this would be flying sand, gravel or even lava and water.

If a lot of water is used as an example on a large farm, this can cause many problems, among other things. The problem can also arise if new chunks are generated and water sources are created in these chunks in a mountain. The server has to calculate the status each time again so that the water flows smoothly. In addition, the server must create and load the chunks, which is also a very intense process.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

All further investigations can also be carried out in the same way, since the steps are exactly the same for any other process. If you still need help with the evaluation, we are always available for you!

### Check plugins

In some cases issues are also caused by plugins. To determine that a plugin is possibly the cause, you can temporarily remove installed plugins from the server and check the current state of the system again.

If an issue with plugins exists, this can also be investigated in the "Plugins" section. The values are also listed in three columns, which have exactly the same structure as the normal server values above. The difference is that there is no longer a main process shown. Instead, the plugin itself is shown. However, we can still check all processes by clicking on them and investigate the values more closely.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />
