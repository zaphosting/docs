---
id: fivem_rcon
title: FiveM Server: Use Rcon
description: Information on how to use Rcon on your FiveM server to send commands to the server - ZAP-Hosting.com documentation
sidebar_label: Use Rcon
---

## What is Rcon?

Rcon is a protocol for executing commands on the server without having direct access to the console.

### Preparation

A suitable Rcon tool is required for the use. For example, the well-known Rcon tool Icecon can be used for this. This example is based on Icecon. The tool can be set up by downloading and executing the icecon_windows_amd64.exe.

![image](https://user-images.githubusercontent.com/13604413/159168520-9b0e166a-9ae9-47ef-8121-733b447092e0.png)

An additional installation is not required. The program can be started right away. To establish the connection, the information about the IP address, port and rcon password is required.

### Define rcon password

**Configuration via the settings**

With the FiveM server products "FiveM (Linux/Windows/ESX RP Server/QBCore)" the rcon password can be defined under the settings by default. The password defined there is then required for the following rcon connection via Icecon.

![image](https://user-images.githubusercontent.com/26007280/190453536-bbe82057-9772-45a4-bdb0-1dc6e5bc7884.png)


**Configuration via the server config**

The rcon password can alternatively also be set directly via the server config. The value of the following command must be adjusted for this:
```
rcon_password "DeinWunschRconPasswort"
```

> To manage it via the server config, the option of the rcon field must first be deactivated under the settings. 

> **txAdmin:** The definition of the rcon password is only possible via the server config for txAdmin.

### Usage

Once the password has been defined and the server has been restarted, the rcon connection can be established. To do this, complete the two fields IP:Port and Password (Rcon) with the information from your server and click on "OK". 

![image](https://user-images.githubusercontent.com/13604413/159168532-0b80c7c5-16e0-4a3b-8b06-907c2846f5d4.png)

The connection will be established afterwards and you can now execute your desired commands there!
