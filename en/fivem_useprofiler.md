---
id: fivem_useprofiler
title: Use Profiler
sidebar_label: Use Profiler
---

## What is the FiveM Profiler? 

The Profiler is there to measure the performance of the server, so bad and slow resources can be identified and removed/optimized. 

This profiler is integrated in FiveM and can be used with any server.

## Usage


### 🔑 RCon

First you should log on to the server via IceCon, the password can be found in the server settings:

![](https://screensaver01.zap-hosting.com/index.php/s/3S2ZZ2gRDsRmXyN/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SnNcYqkSgkFFsL8/preview)

After we are logged in, we can now start the Profiler with the following command:

```
profiler record 25
```

![](https://screensaver01.zap-hosting.com/index.php/s/syTtBk7RicHYdBP/preview)

Then we should wait for about 10 seconds and check whether the profiler is still running:

```
profiler status
```

![](https://screensaver01.zap-hosting.com/index.php/s/zRwfoRfXQJq5mem/preview)

If it says "Recording: No", then the recording is finished and we can now look at the recorded data above the command:

```
profiler view
```

![](https://screensaver01.zap-hosting.com/index.php/s/jecKZDyboFoGbcA/preview)

We can now open this URL in Chrome or Firefox.


### ❓ Identifying Problems

![](https://screensaver01.zap-hosting.com/index.php/s/ZkW36eTKXsmsxRq/preview)

Now we are in the Profiler and can see the performance information, it looks more complicated at the beginning than it is.

We now select a "tick" that consumes a lot of performance:

![](https://screensaver01.zap-hosting.com/index.php/s/R7Z4HwF3y2wAHGj/preview)

Now scroll in so that we can see the individual times:

![](https://screensaver01.zap-hosting.com/index.php/s/BFJgqJE6SrBK5Ws/preview)

Now we can see which resources are consuming a lot of time.

> Resources that consume more than 6 ms in total can cause problems.

In our case, only "Webadmin" is a bit slow, but this does not cause any performance problems. If a resource consumes a lot of time it should be deactivated for testing and a new measurement made.

