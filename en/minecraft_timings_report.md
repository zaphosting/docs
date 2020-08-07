---
id: minecraft_timings_report
title: Timings-Report
sidebar_label: Timings-Report
---

## Erklärung

### ❓ What is a Timing Report?

A timing report is very similar to the task manager on your PC and makes it possible to find the problem, especially at Lags. A timing report records all processes on the server and then visually displays them.

## Create a Timing Report

## 📈 Create Timing Report

Depending on the server software, the timing report is created differently. Basically, with the exception of **Paper Spigot** (unless the settings have been changed), you first have to start the recording with the following command:

`/timings start`

During the recording, the server should be played on as normal as possible so that the respective problems can also be recorded and then analyzed more precisely. The recording should be given around 10 minutes, if possible longer.

## 🔍 Timings-Report Export

In order for the timing report to really be created and exported, the following command must be used:

`/timings paste`

After a few seconds, a message appears that the export was successful and the timing report can be opened by clicking on the link.

![](https://i.imgur.com/Akum9cl.png)

## Evaluation

### Narrow Down Values

After the timings report has been exported and opened as described above, a window similar to this should appear:

![](https://i.imgur.com/X6ErJGe.png)

First, you should take a closer look at the graph to be able to view rough values for the individual recording points by moving the mouse over the individual points.

In order to obtain the most accurate values possible, which refers to a possible problem on the server, the problematic period as shown in the graph should first be limited by the sliders below.

![](https://i.imgur.com/k3pHKOi.gif)

### 🧐 Examine Server Values

There are 3 columns in total, as shown in the screenshot below, Box 1 shows what % of a tick (with 20 ticks per second) takes the main process. Among other things, you can see here how often this process was carried out during the recording.

In Box 2 we see more precise values ​​in milliseconds, here you should note that the times should never be higher than 50ms. Should this nevertheless be the case, this would trigger a chain reaction and all other processes accumulate something, which ultimately leads to lag, as the server can only process the processes with a delay.

> The **full server tick** can usually be ignored, as the values ​​are always in the red area, which is not a problem.

![](https://screensaver01.zap-hosting.com/index.php/s/FR5aqdsXjeLJ5tZ/preview)

In any case, you should always examine the color-highlighted points more closely.

In this example we look at the process for all entities (animals, monsters, items, etc.) because the values are already shown in orange. From this one could directly conclude that there is a problem with too many entities on the server. Such mob farms may be running on the server, or new mobs may be spawned by the crowd. If you have problems with too many entities, it is helpful to reduce the spawn rate in the settings or to install plugins, which limit entities and automatically remove them as needed.

As described above, the list always shows the main process. With one click on a process, we can examine and examine individual processes for each type of entity more precisely. Again, you should note columns 2 and 3, as described above.

It is noticeable that **Minecraft :: tickEntity - nms.EntitySkeleton** has executed a lot of processes. Again, such bullying farms can be the problem.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Another process with values that are already orange are blocks waiting in German. Blocks that are waiting are particularly performance-hungry because the server has to check the status of each waiting block every tick. As an example this would be flying sand, gravel or lava and water.

After the main process has been expanded, another process is already in the orange area. As the name of the process suggests, these are liquids like lava and water.

Taking a lot of water as an example at a large farm as an example can cause many problems, among other things. The problem can also arise if new chunks are generated and water sources were created in these chunks as an example in a mountain. Again, the server has to calculate the status so that the water runs normally. In addition, the server has to create and load the chunks, which is also a very intensive process.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW/preview)

All other examinations can also be carried out in this way, since the same steps are also used in every other process. If you still need help with the evaluation, we are always available in support!

### ✔️ Check Plugins

Sometimes problems also come from plugins, in order to be able to determine at all that a plugin is possibly to blame, you can temporarily remove installed plugins from the server and then get an idea of the situation again.

If a problem with plugins is possible, this can also be examined more closely in the "Plugins" area. Again, the values are broken down into three columns, which are structured exactly the same as the normal server values above. It is different here that the main process is no longer shown, but the plugin itself. Nevertheless, we can click on the processes to see them all and better examine the values.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD/preview)
