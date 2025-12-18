---
id: dedicated-ipmi
title: "Dedicated Server: Server Management via IPMI"
description: "Discover how to fully manage your Enterprise Dedicated Server with IPMI for seamless control and monitoring → Learn more now"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Our AMD Ryzen Dedicated Servers are managed through **Supermicro IPMI**, a powerful and proven out of band management solution designed for professional server environments. Unlike our Intel based configurations, which rely on HPE iLO, the AMD Ryzen platform uses Supermicro hardware and therefore provides IPMI as its native management interface.

Supermicro IPMI offers full remote control over your server, independent of the operating system state. You can power the system on or off, reboot it, monitor hardware health, access sensors, and use the remote console to work directly on the server as if you were physically on site. This ensures maximum control, fast reaction times, and reliable administration even in critical situations.


## IPMI access
Open the server dashboard of your ZAP Dedicated Server with a browser of your choice. There you will already find the most important information about your IPMI.
To activate the IPMI simply click on **Activate IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Please mention that it may take a few seconds until your IPMI is fully available. 
When the system has started the management interface and it is accessible, you will see the login information.
To open the IPMI click on the displayed IP address and use the login credentials to log in.



## Overview

Curious about how the IPMI management interface is structured and what each area is used for. This overview introduces the different pages of the interface and highlights how monitoring, hardware insights, and remote management are organized.

It provides a guided starting point to explore the IPMI environment and understand how the individual views work together to give full control and visibility over the server.

### Dashboard

Provides a consolidated overview of the current server state and key management functions. System information such as hardware model, BIOS version, BMC firmware, and operational status is displayed for quick reference.

The power section shows the current power state and power consumption readings, enabling direct control over power on, power off, and reboot actions while also offering insight into energy usage.

Direct access to the remote console is available from this page, allowing full remote keyboard, video, and mouse control for tasks such as operating system installation, troubleshooting, and maintenance, independent of the server’s running state.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### System

#### Component Info

Displays a detailed overview of the installed hardware components and their current status. Information is provided for CPU, memory modules, power supply units, power delivery, network AOC, sensors and cooling components.

Each section presents hardware specific details such as model information, configuration, and operational state. Status indicators allow quick identification of healthy components as well as warnings or failures.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Health Event Log

Lists system related events recorded by the management controller, providing a chronological history of hardware and health related activities. Entries include power events, boot processes, sensor threshold violations, temperature warnings, voltage irregularities, and hardware errors.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Storage Monitoring

Provides an overview of the connected storage devices and their current operational status. Information includes detected drives, interface type, capacity, and health indicators as reported by the controller and available sensors.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Configuration

#### Account Services

Displays a list of existing user accounts with their assigned roles and permission levels. The page is intended for informational purposes, allowing visibility into which accounts have access to the management interface. 

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Notification

Displays the current configuration for system notifications and alert handling. This section shows which event types can trigger notifications, such as hardware failures, temperature thresholds, power issues, or sensor warnings.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Network

Shows the network configuration of the management interface. This includes the assigned IP address, subnet mask, gateway, MAC address, and the current link status of the IPMI network port.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Virtual Media

Allows the use of remote media images through the management interface. This shows the status of mounted virtual media such as ISO images or remote storage devices connected to the server.

Virtual media can be used to boot the system, install an operating system, or perform recovery and maintenance tasks without physical access to the hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### BMC Settings

Displays configuration details of the Baseboard Management Controller. This section provides information about firmware version, system identification data, and general controller behavior.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Remote Control

Provides access to functions used for direct remote interaction with the server. This section includes power control options such as power on, power off, reset, and graceful shutdown.

It also serves as an entry point to remote management features that allow interaction with the system regardless of the operating system state.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Maintenance

#### Firmware Management

Offers insight into the firmware level of the management environment, including the active BMC firmware and related components. Firmware versions and their current state can be reviewed to confirm consistency of the management stack. Update or modification actions are intentionally unavailable to customers.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Maintenance Event Log

Records maintenance related activities and system level actions performed through the management interface. Logged entries include configuration changes, firmware related operations, resets, and administrative actions.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Common Problems, Tips & Tricks

- **The server does not boot or is stuck during POST:**
   If the server does not complete the boot process or appears to be stuck during POST, open the remote console to identify the exact stage where the process stops. Hardware initialization messages or error outputs may be visible there.
   Perform a power cycle using the power control options by forcing a power off for a few seconds and then starting the server again. If the system still does not boot, contact support.

- **Remote Console does not open or remains black:**
   Ensure that the remote console session is not already in use by another connection. Close any existing sessions and try again.
   In some cases, refreshing the browser or reopening the console resolves loading issues. If the problem persists, verify that the server is powered on and reachable.

- **Virtual Media ISO is not detected:**
   Verify that the ISO source is reachable and that the file can be accessed directly, for example by opening the link in a browser.
   Confirm that the virtual media is correctly mounted and reboot the server after attaching the ISO. Also check the boot order to ensure that virtual CD/DVD media is prioritized.

- **The server takes a long time to start:**
   Long boot times are normal for enterprise grade hardware. Hardware initialization, controller checks, and memory training can take several minutes, especially after a full power cycle.

- **IPMI interface is temporarily unreachable:**
   After configuration changes or extended inactivity, the management interface may be temporarily unavailable. Wait a few minutes and try again.
   If access does not return, contact support to verify the management interface status.



## Conclusion

This should make your administration a lot easier once you have read through everything in detail. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

