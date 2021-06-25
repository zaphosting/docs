---
id: fivem_useprofiler
title: FiveM: Using the Profiler and Identifying Server Problems
description: Information on how to use and interpret the profiler for your FiveM server on ZAP-Hosting to identify problems - ZAP-Hosting.com 
sidebar_label: Use Profiler
---

## What is the FiveM Profiler? 

The Profiler is there to measure the performance of the server, so bad and slow resources can be identified and removed/optimized. 

This profiler is integrated in FiveM and can be used with any server.

## Usage


### 🔑 RCon

First you should log on to the server via [Icecon](https://github.com/icedream/icecon/releases), the password can be found in the server settings

After we are logged in, we can now start the Profiler with the following command:

```
profiler record 25
```

![](https://screensaver01.zap-hosting.com/index.php/s/keKjnW88dm3zzRM/preview)

Then we should wait for about 10 seconds and check whether the profiler is still running:

```
profiler status
```

![](https://screensaver01.zap-hosting.com/index.php/s/3aWWiLf6cJ7KpEr/preview)

If it says "Recording: No", then the recording is finished and we can now look at the recorded data above the command:

```
profiler view
```

![](https://screensaver01.zap-hosting.com/index.php/s/Z4sTqLFTFJDbjyc/preview)

We can now open this URL in Chrome or Firefox.


### ❓ Identifying Problems

![](https://screensaver01.zap-hosting.com/index.php/s/gd3BSRp886jKMr9/preview)

Now we are in the Profiler and can see the performance information, it looks more complicated at the beginning than it is.

We now select a "tick" that consumes a lot of performance:

![](https://screensaver01.zap-hosting.com/index.php/s/AnW22nT7E7RRK2A/preview)


Now we can see which resources are consuming a lot of time.

In In our case, only "mysql-async" is a bit slow, which can mean for example an Unoptimised Database. If a resource consumes a lot of time it should be deactivated for testing and a new measurement made.



> Resources that consume more than 6 ms in total can cause problems.

