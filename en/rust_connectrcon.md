---
id: rust_connectrcon
title: Rust: Connecting to the server via RCON
description: Information on how to connect to your Rust server from ZAP-Hosting via RCON to administer your server - ZAP-Hosting.com documentation
sidebar_label: Connect via RCON
---

## ❓ What is RCON?

Rcon is a protocol for executing commands on the server without having direct access to the console.

### Enable WebRCON

Firstly before you can connect, you must make sure Web RCON is enabled.
To enable it, visit the **Settings** tab.

![image](https://user-images.githubusercontent.com/26007280/189935759-39b98b61-696e-4323-b5e6-09bc4a6b1f94.png)

And then enable it directly on this page.
![image](https://user-images.githubusercontent.com/26007280/189935810-6d274470-b9bc-42e0-ae43-e68ea387c736.png)

> A server restart would be required for it to take affect. 

### Install RCON Program

You will be required to connect to it from an RCON Program. There are several different ones available you could use.
For this example, and as a reccomendation, you can download [RustAdmin](https://www.rustadmin.com/).

You can install it with the button directly on their website.
![image](https://user-images.githubusercontent.com/26007280/189935892-0bdd5beb-d049-419d-b547-49323f50c97c.png)

## 🖥️ Connect via RCON 

Once you have opened WebAdmin, press the **Server** at the top. And then press **Connect**.

> Your server must be fully ONLINE to be reachable from RCON. 

![image](https://user-images.githubusercontent.com/26007280/189935938-74112814-b941-4565-92a5-29f1646dd048.png)

Then you are redirected to a Configuration page.
Here you would enter your respective server information.

![image](https://user-images.githubusercontent.com/26007280/189935958-10c971be-1d55-400b-8820-5dee6443e4a1.png)

> TIP: Your RCON Port && RCON Password can be found in the **Settings** tab where you enabled the WebRCON. 

Once you have entered your data, you can save the configuration.

![image](https://user-images.githubusercontent.com/26007280/189935985-f254f19d-81ed-484d-affd-ff22f1111b58.png)

And then press Server -> Connect.

![image](https://user-images.githubusercontent.com/26007280/189936018-751035e8-e4b2-4e5e-961e-99e091971c47.png)

Then if connected sucessfully, you will be the **Connected** in green letters at the bottom.

![image](https://user-images.githubusercontent.com/26007280/189936052-7127c373-de6d-45f4-99ea-fd8834ed2bc4.png)

You can now use RCON to manage your server! :) 

