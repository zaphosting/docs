---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Identify Performance Bottlenecks"
description: "Use the Spark mod to diagnose performance issues and identify lag causes on your Hytale server → Learn more now"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduction

Performance issues such as low TPS (ticks per second), lag spikes, or stuttering can greatly impact the player experience on a Hytale server. Identifying the cause of these problems manually is difficult without detailed diagnostics.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

The **Spark** profiler mod gives server owners a powerful tool to analyze server performance. Once installed, Spark can collect data on CPU usage, tick times, server health metrics, and more, and generate detailed reports that help pinpoint exactly where performance issues are occurring. This makes it an essential tool for troubleshooting and optimization, especially on larger or busy Hytale worlds. 

<InlineVoucher />

## What Spark does

Spark provides multiple profiling capabilities:

- **Performance profiling** – records server activity and identifies slow ticks or high CPU usage 
- **Server health metrics** – includes tick durations, TPS, CPU and memory usage
- **Interactive reports** – produces a web-based report that can be viewed in a browser
- **Lightweight and easy to use** – designed to have minimal impact while collecting useful data



## Installing Spark

Spark is distributed via CurseForge and installed as a mod. You can install mods either via our Mods Installer or via FTP. You can find more information in our [Install Mods](http://localhost:3000/guides/docs/hytale-mods) guide. After installation, restart the Hytale server. 

<Button label="Download Spark" link="https://www.curseforge.com/hytale/mods/spark" block />



## Running the profiler

After installing Spark and starting your server, open the **Live Console** tab in your game server dashboard or use the in-game chat if you have the required permissions. To begin collecting performance data, start the profiler with the following command:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

Once started, Spark begins recording detailed server activity such as tick durations, CPU usage, and thread execution. The profiler should run while the server is experiencing the issue you want to analyze, for example during peak player activity or while lag spikes occur. Allowing the profiler to run for at least 30 to 60 seconds usually provides sufficient data for meaningful analysis.

While the profiler is running, you can already view live results by executing:

```
/spark profiler open
```

This command generates a web link in the console or chat output. Opening this link in your browser displays a live view of the profiling data, including tick graphs and workload distribution.

When enough data has been collected, stop the profiler using:

```
/spark profiler stop
```

After stopping, Spark generates a final report link. This report contains the complete dataset from the profiling session and can be opened in a browser or shared for further analysis.

If you need to discard the current profiling session and start over, you can reset the profiler by running:

```
/spark profiler cancel
/spark profiler start
```

This clears the existing data and immediately starts a fresh profiling run.




## Analyzing the profiler results
The Spark profiler report provides a detailed breakdown of how server resources are being used. One of the most important areas to review is the tick timeline, which shows how long individual ticks take to complete. Consistently long ticks often indicate heavy workloads that directly impact TPS and gameplay smoothness.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

The Spark profiler report provides a detailed breakdown of how server resources are being used. One of the most important areas to review is the tick timeline, which shows how long individual ticks take to complete. Consistently long ticks often indicate heavy workloads that directly impact TPS and gameplay smoothness.

The profiler also highlights **hotspots**, showing which functions or systems are responsible for the highest resource usage. These insights make it easier to determine whether performance issues are caused by specific mods, player behavior, world mechanics, or server configuration.

Spark reports are designed to be shareable. When seeking help from support teams or other administrators, providing the profiler link allows others to review the data directly and offer targeted recommendations.

## Conclusion

The Spark profiler mod for Hytale is a valuable tool for diagnosing performance issues and identifying the root causes of server lag.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

