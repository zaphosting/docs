---
id: vserver-network-analysis-winmtr
title: "VPS: Identifying network issues with WinMTR/MTR"
description: "Discover how to diagnose network issues by analyzing outbound and return routes to improve connection stability and performance → Learn more now"
sidebar_label: Network issues
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Network problems can be disruptive and, of course, should not be part of everyday life. However, when they do occur, it is important to quickly and efficiently identify the cause in order to resolve the issue. Detailed information about network problems can be effectively analyzed using the **WinMTR (Windows)** or **MTR (Linux/Mac OS)** application.

![img](https://screensaver01.zap-hosting.com/index.php/s/RecNoSB7J7A7B72/preview)

WinMTR/MTR is a network diagnostic tool that combines the functions of Ping and Traceroute. It allows for detailed analysis of both the **outbound route (Client → Server)** and the **return route (Server → Client)** by tracking the path of data packets in both directions. In doing so, it captures important information such as latency and packet loss, which are crucial for accurately diagnosing and addressing network problems.

**Outbound route (Client → Server)**: A report for the **outbound route** is useful when issues such as connection drops, slow connections, or difficulties establishing connections arise. This analysis helps identify potential problems on the path from the client to the server, such as network congestion, packet loss, or faulty routing.

**Return route (Server → Client)**: A report for the **return route** only makes sense once a stable and functional connection on the outbound route has been confirmed. This means the return route report becomes particularly relevant when the outbound route shows no issues, but problems such as slow server responses, delayed loading times, or incomplete data transmissions still persist.

In summary, if noticeable network problems occur, the **outbound route (Client → Server)** should be analyzed first. If the outbound report shows no anomalies and the issues persist, it is necessary to check the **return route (Server → Client)** to identify possible asymmetric problems. Asymmetric network issues can arise when data packets are transmitted without problems in one direction, while delays or packet loss occur in the opposite direction.



## Installation
Now that it has been clarified when reports for the inbound and outbound routes are useful, we can move on to the installation on both the client and server levels.

### Client
For the outbound route, the application must be installed on the client (**your computer**). The following steps will explain how to install the application for your operating system.

<Tabs>
  <TabItem value="windows" label="Windows" default>
When using a computer with a Windows operating system, the network analysis is conducted through the WinMTR application. To install WinMTR on your computer, first download the application from the ZAP-Hosting website. After downloading, extract the file. As a result, you will obtain the executable `WinMTR.exe` file.

| Application | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

  </TabItem>
  <TabItem value="linux" label="Linux">

When using a computer with a Linux operating system, the network analysis is conducted through the MTR application. To install MTR on your system, please open the terminal and execute the appropriate installation command for your operating system:

**Debian**

```
apt install mtr -y
```

**Ubuntu**

```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

  </TabItem>
  <TabItem value="macos" label="MacOS">

When using a computer with a Mac OS operating system, the network analysis is conducted through the MTR application. However, the MTR application is not pre-installed on Mac OS devices and is also not available in the Apple Store. To install MTR, you need to install Homebrew as the package management system on your computer.



**Installing Homebrew**

Open the terminal on your computer and run the following command to install Homebrew:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Installing MTR**

Follow the displayed steps to complete the installation. Once Homebrew is successfully set up, you can use it to install MTR by entering the following command in the terminal:

```
brew install mtr
```

</TabItem>
</Tabs>


### Server
For the return route, the application must be installed on the server. The following steps will explain how to install the application for your server's operating system.

<Tabs>

<TabItem value="linux" label=" Server operating on Linux" default>

Connect to your server via **[SSH](vserver-linux-ssh.md)**. To install MTR on your system, execute the appropriate installation command for your server's operating system:

**Debian**
```
apt install mtr -y
```

**Ubuntu**
```
apt install mtr -y
```

**OpenSUSE**
```
zypper addrepo https://download.opensuse.org/repositories/openSUSE:11.4/standard/openSUSE:11.4.repo
zypper refresh
zypper install mtr
```

**Fedora**
```
yum install mtr -y
```

</TabItem>

<TabItem value="windows" label="Server operating on Windows">

Connect to your server via **[Remote Desktop Connection](vserver-windows-userdp.md)**. To install WinMTR on your server, first download the application from the ZAP-Hosting website. After downloading, extract the file. As a result, you will obtain the executable `WinMTR.exe` file.

| Application | Download                                   |
| ----------- | ------------------------------------------ |
| WinMTR      | [Link](https://zap-hosting.com/winmtr.zip) |

</TabItem>

</Tabs>



## Create Report



In the following, a report will be created using the WinMTR/MTR application. This will be done for both the **outbound route (Client → Server)** and the **return route (Server → Client)**.

:::warning Create report during active issues 
The report should be generated when the issue is actively occurring and noticeable. Only in such a case will the report provide useful information that can aid in troubleshooting and resolving the problem.
:::

### Outbound route (Client → Server)

To analyze the route from your computer to the server, open the WinMTR/MTR application on your computer and follow the steps outlined below.

<Tabs>
<TabItem value="windows" label="Windows" default>

The WinMTR application can be launched by double-clicking the `WinMTR.exe` file. In the `Host` field, enter the IP address or hostname of the server. Then, start the report. Let the application run for at least **one minute** to collect enough data. Once you have sufficient data, stop the analysis and save the result by clicking on `Export TEXT`.

![img](https://screensaver01.zap-hosting.com/index.php/s/pYNikLsj3jHxBSD/preview)

</TabItem>

<TabItem value="linux" label="Linux">

The MTR application can be used on your computer by opening the terminal and running the following command:

```
mtr <your server-ip-address>
```

Let the application run for at least **one minute** to collect enough data. Once you have sufficient data, stop the analysis and save the result.

</TabItem>

<TabItem value="macos" label="MacOS">

The MTR application can be used on your computer by opening the terminal and running the following command:

```
mtr <your client-ip-address>
```

Let the application run for at least **one minute** to collect enough data. Once you have sufficient data, stop the analysis and save the result.

</TabItem>
</Tabs>





### Return route (Server → Client)

To analyze the route from the server to your computer, connect to your server and follow the steps outlined below.

<Tabs>
<TabItem value="linux" label=" Server operating on Linux" default>
    

The MTR application can be used on your server by executing the following command in the SSH terminal:

```
mtr <your client-ip-address>
```

Let the application run for at least **one minute** to collect enough data. Once you have sufficient data, stop the analysis and save the result.

:::info
Don't know your IP address or unsure how to find it? There are several methods to determine your IP address. The quickest way is through an online service like WhatIsMyIPAddress.
:::

</TabItem>
<TabItem value="windows" label="Server operating on Windows">

In the `Host` field, enter the IP address of your connection. Then, start the report. Let the application run again for at least **one minute** to collect enough data. Once you have sufficient data, stop the analysis and save the result by clicking on `Export TEXT`.

:::info
Don't know your IP address or unsure how to find it? There are several methods to determine your IP address. The quickest way is through an online service like **[WhatIsMyIPAddress](https://whatismyipaddress.com/)**.
:::

</TabItem>
</Tabs>


## Evaluate report

When evaluating the results, there are several key points you should keep in mind. The following section will explain these points in more detail and clarify their significance for the analysis. Paying close attention to these aspects is crucial for making an accurate diagnosis and identifying potential causes effectively.

### Packet loss

If you see packet loss in the results, this indicates potential network problems. A minor temporary packet loss of 1-2% might not be problematic, but higher values suggest more serious issues. Packet loss can cause delays or interruptions in the services' connections. If the loss is evenly distributed across all hops, the problem could lie within your own network or on the server side. However, if the loss occurs only at a specific hop or area, the issue is likely with that node or the connection to the next one. It's also important to know that small losses in the first hops, which belong to your local network, are not necessarily critical, as these devices often prioritize ICMP requests (such as ping) lower and may discard them.



### Latency (ping times)
The latency values (`Avg`, `Best`, `Worst`) give you insight into the speed and stability of the connection. If you notice that latency remains consistently high at a particular hop, this could indicate network congestion or a slow router. A sudden increase in latency between two hops points to a possible bottleneck. Normally, latency gradually increases along the route to the destination. However, be on the lookout for sudden, significant spikes, which are often a sign of an issue. Comparing the outbound and return routes can also be helpful in identifying asymmetric problems, which indicate that traffic in one direction is encountering difficulties.

With careful analysis of these factors, you can accurately determine where the network problem lies—whether in your own network, with the internet service provider, or somewhere along the path to the server.



### Diagnostic examples 
To enhance your understanding, let's clarify the previous information with a few diagnostic examples. We have compiled a few scenarios that illustrate different situations and possible causes. These examples will help demonstrate how to interpret the data and diagnose network issues more effectively.

:::info
The following diagnostic examples illustrate various scenarios based on fictional WinMTR/MTR reports. The IP addresses, hostnames, and routes contained within are entirely fictional and have no connection to real networks or hosts.
:::

<Tabs>

<TabItem value="mtrResultsExample1" label="Example 1" default>

**Example:** Packet Loss at the Client

**Description**

In this example, the situation describes packet loss occurring on the client side, which is visible on both the outbound and return routes.

**Outbound Route (Client → Server)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                     15.0%   20    1.1    3.4   1.0   10.2  2.8
2. 10.0.0.1                        10.0%   20   12.3   15.7  10.5   30.8  5.5
3. 172.16.0.1                       0.0%   20   25.1   26.0  24.8   27.2  0.6
4. 203.0.113.5                      0.0%   20   35.4   34.5  33.2   36.1  0.9
5. be1234.ccr42.isp.net             0.0%   20   50.6   49.8  49.1   51.5  0.8
6. be5678.ccr21.isp.net             0.0%   20   60.1   59.9  59.5   61.0  0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3  0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
```

**Return Route (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2  0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2  0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7  0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0  0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0  0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3  0.7
7. 10.0.0.1                        10.0%   20   15.8   16.5  15.0   35.2  6.2
8. 192.168.1.1                     15.0%   20    2.0    4.0   1.2   12.0  3.8
```

**Evaluation**

The evaluation reveals that packet loss is occurring on the client side. Both routes show losses at the first hops (Hop 1 and 2), indicating an issue on the client's side, either within the local network or with the router.

</TabItem>

<TabItem value="mtrResultsExample2" label="Example 2">

**Example:** Packet Loss at the server

**Description**

In this example, the situation describes packet loss occurring on the server side, visible on both the outbound and return routes.

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
7. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
8. Ziel-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
```



**Return Route (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                15.0%   20   85.3   90.2  85.0  105.0  7.0
2. 198.51.100.10                   10.0%   20   70.5   72.5  70.0   80.0  4.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5  0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0  0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5  0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0  0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5  0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0  0.3
```



**Evaluation**

The evaluation indicates that packet loss is occurring on the server side. Both routes show losses at the final hops (Hop 7 and 8), pointing to an issue on the server's end.

</TabItem>

<TabItem value="mtrResultsExample3" label="Example 3">

**Example:** Latency Issues at the client

**Description**

In this example, the situation describes high latency times on the client side, noticeable on both the outbound and return routes.

**Outbound Route (Client → Server)**

```console {2-3} 
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
2. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
3. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
4. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
5. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
6. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Return Route (Server → Client)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.1   70.4  69.8   71.2   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.2   60.0  59.6   60.7   0.4
4. be1234.ccr42.isp.net             0.0%   20   50.1   50.2  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.5   35.0  34.5   36.0   0.4
6. 172.16.0.1                       0.0%   20   25.2   26.1  24.9   27.3   0.7
7. 10.0.0.1                         0.0%   20  120.7  115.5  60.0  190.0  30.0
8. 192.168.1.1                      0.0%   20  150.5  130.5  50.0  200.0  40.0
```

**Evaluation**

The evaluation shows that there is high latency on the client side. Both routes exhibit increased latency at the first hops (Hop 1 and 2), indicating a problem on the client's side.

</TabItem>

<TabItem value="mtrResultsExample4" label="Example 4">

**Example:** Latency Issues at the server

**Description**

In this example, the situation describes high latency times occurring on the server side, noticeable on both the outbound and return routes.

**Outbound Route (Client → Server)**

```console {8-9}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
8. Ziel-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
```

**Return Route (Server → Client)**

```console {2-3}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20  300.5  320.0 300.0  350.0  15.0
2. 198.51.100.10                    0.0%   20  200.5  210.0 200.0  230.0  10.0
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Evaluation**

The evaluation shows that there is high latency on the server side. Both routes exhibit increased latency at the final hops (Hop 7 and 8), indicating a problem on the server's end.

</TabItem>

<TabItem value="mtrResultsExample5" label="Example 5">

**Example:** Routing Issue (ISP Routing)

**Description**

In this example, the situation describes how the route from Client X to the server works without any issues, while there are routing problems from Client Y to the server, leading to packet loss. This indicates a problem with the routing from the internet service provider (ISP).

**Outbound Route (Client X → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6

```

**Outbound Route (Client Y → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     30.0%   20   30.6   50.3  29.5   95.0  20.5
5. be1234.ccr42.isp.net            25.0%   20   80.2  120.0  70.0  250.0  55.0
6. be5678.ccr21.isp.net            10.0%   20   60.1   60.2  59.5   61.5   0.7
7. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
8. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
```

**Return Route (Server → Client X)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3
```

**Return Route (Server  → Client Y)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   80.2   80.0  79.5   81.2   0.6
2. 198.51.100.10                    0.0%   20   70.2   70.5  70.0   71.3   0.5
3. be5678.ccr21.isp.net             0.0%   20   60.1   60.2  59.5   61.5   0.7
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
5. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.3   1.1    2.0   0.3

```

**Evaluation**

The evaluation shows that there is a routing issue with the ISP. While the route from Client X to the server is stable, the route from Client Y exhibits significant problems, resulting in packet loss and high latency.

</TabItem>

<TabItem value="mtrResultsExample6" label="Example 6">

**Example:** Packet Loss Only on the Outbound Route (Client → Server)

**Description**

In this example, packet loss occurs only on the outbound route (from the client to the server), while the return route (from the server to the client) shows no loss. This could indicate a problem in a network segment toward the server, possibly caused by faulty routers, congestion, or a poor connection along the path.

**Outbound Route (Client → Server)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                     10.0%   20   35.7   35.0  34.5   36.5   0.6
5. be1234.ccr42.isp.net            15.0%   20   50.6   55.5  50.0   70.0   6.0
6. be5678.ccr21.isp.net            10.0%   20   65.1   65.9  65.0   67.0   0.6
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5

```

**Return Route (Server → Client)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  65.0   66.0   0.3
4. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.5
5. 203.0.113.5                      0.0%   20   35.7   35.0  34.5   36.5   0.6
6. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluation**

The evaluation shows that packet loss occurs exclusively on the outbound route. The losses are visible at hops 4, 5, and 6, indicating a problem along the path from the client to the server, such as congestion or faulty network devices in a segment of the route. On the return route, however, there are no losses, meaning the connection in the opposite direction is stable.

</TabItem>

<TabItem value="mtrResultsExample7" label="Example 7">

**Example:** Packet Loss Only on the Return Route (Server → Client)

**Description**

In this example, packet loss occurs only on the return route (from the server to the client), while the outbound route (from the client to the server) shows no loss. This could indicate an issue in a network segment on the return path.

**Outbound Route (Client → Server)**

```
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
2. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
3. 172.16.0.1                       0.0%   20   20.2   20.5  19.5   21.0   0.5
4. 203.0.113.5                      0.0%   20   30.6   30.3  29.5   31.5   0.6
5. be1234.ccr42.isp.net             0.0%   20   50.2   50.5  49.5   51.0   0.4
6. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
7. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
8. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
```

**Return Route (Server → Client)**

```console {5-7}
Host                               Loss%   Snt   Last   Avg  Best  Wrst StDev
1. Ziel-IP (Server)                 0.0%   20   85.3   85.0  84.5   86.0   0.5
2. 198.51.100.10                    0.0%   20   75.2   75.5  75.0   76.2   0.4
3. be5678.ccr21.isp.net             0.0%   20   65.1   65.2  64.5   66.5   0.5
4. be1234.ccr42.isp.net            10.0%   20   50.6   51.0  50.0   55.0   1.2
5. 203.0.113.5                     15.0%   20   35.7   36.5  34.5   40.0   1.8
6. 172.16.0.1                      10.0%   20   20.2   21.5  19.5   25.0   2.5
7. 10.0.0.1                         0.0%   20   10.5   11.1  10.0   12.5   0.7
8. 192.168.1.1                      0.0%   20    1.2    1.5   1.1    2.5   0.3
```

**Evaluation**

The evaluation shows that packet loss occurs only on the return route. The losses are visible at hops 4, 5, and 6 of the return route, indicating a problem along the path from the server to the client.

</TabItem>

</Tabs>

## Reporting Issues

Although ZAP-Hosting continuously monitors the network, it is important to contact our support team promptly in case of network issues. To ensure an accurate diagnosis and a quick resolution, we kindly ask you to provide us with the results of your WinMTR/MTR reports for both the outbound and return routes. This information helps us to precisely identify potential problem areas and resolve the issue quickly.

<InlineVoucher />
