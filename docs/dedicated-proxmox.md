---
id: dedicated-proxmox
title: "Dedicated Server: Installation of Proxmox VE"
description: Information on how to install Proxmox Virtual Environment on your dedicated server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Proxmox
---



## Introduction

Proxmox Virtual Environment is a complete, open-source server management platform for enterprise virtualization. It tightly integrates the KVM hypervisor and Linux Containers (LXC), software-defined storage and networking functionality, on a single platform. With the integrated web-based user interface you can manage VMs and containers, high availability for clusters, or the integrated disaster recovery tools with ease.



## Preparation

To begin, you must mount and boot from the Proxmox VE (Virtual Environment) ISO installer onto your dedicated server. There are two ways that you can do this, the easier method which is via your dedicated server's webinterface or the more lengthy method which is manually through your server's iLO panel.



### Mount ISO via the web interface
Head over to the **Initial Installation** section on your dedicated server's webinterface panel. Here you must first press the green **enable iLO** button. Wait a short period until the sections become unhidden. You may have to refresh your page to ensure it loads fully.

![image](https://github.com/zaphosting/docs/assets/42719082/b457f17a-0bc6-42db-91ec-a553fd456936)

Next, select a **Proxmox VE** ISO from the drop down menu. We recommend using the latest version to remain up-to-date with the latest changes. Now use the green **Insert** button.

![image](https://github.com/zaphosting/docs/assets/42719082/2b0baf71-d683-46ad-a34a-bfda9d71939d)

Finally you must restart your dedicated server in order to be able to boot from the ISO. You can do so via the restart button under step 3.



### Mount ISO via the iLO
Prepare your Proxmox VE ISO by heading over to the [Proxmox download site](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso). You must then upload and mount it to your dedicated server by following the [iLO guide](dedicated-ilo.md) & [Own ISO guide](dedicated-iso.md) which show how to login and upload your custom ISO.



## Setup & configuration

:::important
Ensure that you have restarted your server after importing and mouting the new ISO before continuing.
:::

Now that you have your ISO mounted, you will have to boot from it. You can approach this through the **HTML5 remote console** on your iLO panel. Through the webinterface, press the **Open here** hyperlink under `iLO web access` which will take you to your panel and use the credentials which were presented to login.

:::note
You browser may display a security risk prompt, you should ignore this and accept to continue.
:::

Once logged in, under the **Overview** section you should locate and use the **HTML5** hyperlink provided under the `Integrated Remote Console` section. This will open up a panel overlay.

![image](https://github.com/zaphosting/docs/assets/42719082/3b9ce97e-f974-439b-8e57-ced05f248ef9)

Your Proxmox should be on the setup process. Using the `arrow keys`, `enter` and `esc` to nativate, we recommend selecting the **Graphical** version of Proxmox as this is what the guide will follow.

![image](https://github.com/zaphosting/docs/assets/42719082/614218f2-df12-43ad-95fe-39026b900141)

Wait a couple of seconds until the setup process continues. You will have to accept Proxmox's EULA via the **I agree** button on the bottom right. The next page requires you to select the target drive for your environment. If you are using a single drive, the default settings are tailed for you so you can simply continue via the **Next** button.

![image](https://github.com/zaphosting/docs/assets/42719082/090c1f2e-20fe-48f3-b4b4-070c197f4825)

:::note
If you want to setup RAID as some of our dedicated servers offer two drives, you will have to use the **Options** button to select your choice of `RAID` mode. We recommend `RAID1` which mirrors both drives.

![image](https://github.com/zaphosting/docs/assets/42719082/44e3b6ba-07f3-4313-8d36-b185a6da8089)
:::

The next section involves general stuff such as language and keyboard selection which should be automatically detected. Fill these in and then proceed to continue.

![image](https://github.com/zaphosting/docs/assets/42719082/931e066c-9868-48d9-a638-f07c932579d2)

Now you must setup a strong password and an email address. The email address will be used by your panel to send important alerts and notifications.

:::important
Remember the password, as this is what you must use when logging in to the panel for the first time after installation!
:::

![image](https://github.com/zaphosting/docs/assets/42719082/617a504c-9520-4b89-93c3-81fba06e5fdc)

The final step is setting up the network configuration. Select the available management interface and a hostname for your server.

![image](https://github.com/zaphosting/docs/assets/42719082/d694a5af-20e2-4c1b-9cdb-c1a8ca684cde)

Now head over to the **IP-Addresses** section on your dedicated server's webinterface in order to find an available IP.

![image](https://github.com/zaphosting/docs/assets/42719082/e358f264-8535-4280-a1c5-0a15f4b99ed9)

Pick an IP Address which you want to use for your Proxmox panel. Fill in the IP Address, Netmask and Gateway in the installer using the details from the webinterface. Finally, for the DNS Server you can enter `8.8.8.8` which is Google's public DNS server.

Once you have filled everything, press **Next** and review all of the options selected within the summary page. If everything looks correct, press **Install** to proceed!

## Access the panel
After the installation is complete and the system has restarted, select the **Proxmox Environment GNU/Linux** option in the menu and press **Enter**. Once loaded, you should see a welcome message from Proxmox in the console which will contain the IP Address and link to which you can access your panel via a browser (the one you specified previously). Navigate to this link.

:::note
You browser may display a security risk prompt again, you should ignore this and accept to continue.
:::

If the link provided is not accessible, this suggests that you have made an configuration during the setup, likely in regards to the network configuration settings.

Now that you are on the panel you must login. You can do this through the username `root` and the password that you set during the installation process. Make sure that **Realm** is set to `Linux PAM standard authentication`.

![image](https://github.com/zaphosting/docs/assets/42719082/4072c2ac-6f5c-4350-a5df-0635b1f433c0)

Once logged in, you can ignore the subscription message by pressing the **OK** button to acknowledge it. And just like that, you have successfully installed Proxmox VE on your dedicated server and logged in to your panel!



## Create your first VM
This section will provide the basic steps required to create your first Virtual Machine (VM) via your Proxmox panel. Head over to `local (panel)` and select the **ISO Images** section. Here you can choose to either upload the `.iso` file manually, or have Proxmox fetch it by providing the direct download URL to the ISO file.

![image](https://github.com/zaphosting/docs/assets/42719082/8182bd73-690f-434f-8394-5fdca6889a74)

Once you have done this, you can proceed to create your VM. Glance over to the top-right and press the **Create VM** button. This will open up a new menu with a great selection of options.

Firstly you have to configure general settings section. By default the `Node` will be set to the default one (in this case `panel`). You must provide a unique VM ID, which will default to `100` or increment if you already have any existing VMs. Now add a name for your VM, it can be anything.

![image](https://github.com/zaphosting/docs/assets/42719082/bcd2eb41-a8fc-4a44-9abb-072f9e408d10)

Swiftly move alone to the OS settings section. Here you should select the ISO image that you wish to use, the one that you uploaded in an earlier step. Make sure to also define the type and version of the OS that you are using.

![image](https://github.com/zaphosting/docs/assets/42719082/05d51c46-5a69-4cd7-b2e6-c3472437caf9)

We recommend leaving the System settings section default as it should be configured appropriately. Move along to the Disk settings section where you can specify the disk size you want to use for your VM. You can also set the storage pool you wish to use, although this will be `local-lvm` by default. The rest of the settings should work well by default.

![image](https://github.com/zaphosting/docs/assets/42719082/26f11d42-8884-4bb5-b0fe-d7b4df7885a5)

Next you reach the CPU settings section where you can define options such as the socket and amount of cores that should be used. This can be configured as you please for your VM.

![image](https://github.com/zaphosting/docs/assets/42719082/91103b8d-dadc-4305-a3fe-bf4c8f96fc27)

Likewise in the Memory settings section, you can define how much memory you wish to provide the VM with and choose the state of ballooning.

![image](https://github.com/zaphosting/docs/assets/42719082/ac0048cb-0bd4-4791-9a9f-857e5037955d)

We also recommend leaving the Network settings section default as it should be configured appropriately for now. Finally, you can review all the settings that you have configured throughout this VM setup. We recommend setting the `Start after created` option on so that your VM automatically starts for you. If you are satisfied with everything, proceed to create the VM by pressing the **Finish** button.

![image](https://github.com/zaphosting/docs/assets/42719082/d14a8b3d-e9bb-4feb-8049-428e84c1e917)

And just like that you have created your first VM on your Proxmox panel! You should be able to view it in the server view section on the left side of the panel.