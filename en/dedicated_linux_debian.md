---
id: dedicated_linux_debian
title: Install Debian
sidebar_label: Install Debian
---
> In this example, the installation of Debian 10 is performed

## 📋 Preparations
In your ZAP interface, select the desired ISO of Debian and let the server boot with the ISO until it is in the setup process.

> Navigation in the setup process is done with TAB, Space and Enter.
> TAB = switch between items, Space = highlight, Enter = confirm

***

## ⌚ The setup
When the ISO is successfully loaded, the server is in the setup process.

![image](https://user-images.githubusercontent.com/13604413/159173874-c0b29b7a-2581-466e-8829-9fd400ab43ed.png)

In this example, we will go through the installation process using the "classic" install.

***

![image](https://user-images.githubusercontent.com/13604413/159173878-41be0dca-ab9a-4b0f-97d0-7e9d2dadf46f.png)

Select your desired language in which the installation wizard will be displayed.
Keep in mind that this language will later affect the installed system in the end.

***

![image](https://user-images.githubusercontent.com/13604413/159173881-27f6cfa0-3ad0-4a15-b4ad-9cd5eab0cc9c.png)

Our desired location is not in the first selection page, so we go to the next page with "Other".

***

![image](https://user-images.githubusercontent.com/13604413/159173886-6836fe51-e9d7-4fad-a9b7-86fcd6541747.png)

In our example we select the "Europe" option.

***

![image](https://user-images.githubusercontent.com/13604413/159173890-5c171366-8228-4374-8f38-fa4b01f6f933.png)

Depending on the desired time zone, we choose the german time zone in this example.

***

![image](https://user-images.githubusercontent.com/13604413/159173897-a32f2217-fc89-4951-96d6-ffd28ad3625d.png)

We choose United States as locale.

***

![image](https://user-images.githubusercontent.com/13604413/159173903-7785630e-7fd6-4eb6-b505-3aa73158af42.png)

In our case we choose the German keyboard layout which is the QWERTZ layout.
If you're from America the default layout would by QWERTY

> Your server is now preparing some components which are necessary for the installation, this can take a few minutes.

### 🔧 Configurations

![image](https://user-images.githubusercontent.com/13604413/159173907-17d2a4f8-35ce-42fc-a22e-2b0d60079e81.png)

Your server configures its network interface automatically by using dhcp.
Select `eno1` this is the default network adapter of your ZAP Dedicated Server.

***

![image](https://user-images.githubusercontent.com/13604413/159173909-e0d2de0e-f333-4972-9809-6832de905ca9.png)

The hostname can be modified if you'd like to, but does not need to be changed.

***

![image](https://user-images.githubusercontent.com/13604413/159173917-f581618c-c92c-4f56-837f-8156dc7e0ba7.png)

The domain name does not have to be changed either.

***

![image](https://user-images.githubusercontent.com/13604413/159173920-28980d2d-3570-4ea5-a59e-0f3d483049a8.png)

Here you have to set the password for your "root" account, make a note of the chosen password.

***

![image](https://user-images.githubusercontent.com/13604413/159173927-8bda11e6-2a99-4299-96b6-a3796cda206b.png)

To confirm the password you have to enter it again.

***

> The installation wizard asks you to create a second user account

![image](https://user-images.githubusercontent.com/13604413/159173939-526bddc4-ef8c-4747-a852-e673dff89a16.png)

Now enter the name of the owner for a normal user account, you can of course freely choose what you'd like to enter here.

> You can of course use the "root" account in the end

***

![image](https://user-images.githubusercontent.com/13604413/159173944-ef487bd3-9a35-40ef-a727-a178fd521483.png)

Now enter the username of the account.
Also choose a password of your choice and confirm it again.

Your server will now prepare the next installation steps.

### 💾 Partitioning

![image](https://user-images.githubusercontent.com/13604413/159173949-e58c9c27-9dc5-4018-8334-085f52cdc9ae.png)

You have now the possibility to create partitions or alternatively to use the whole ssd as 1 partition.
If you don't want to change anything on the partition just choose "Guided - Use entire disk".

***

![image](https://user-images.githubusercontent.com/13604413/159173953-8db5f379-76c1-4e3f-9aac-6f80e2907763.png)

Select the ssd which is installed in your server.

***

![image](https://user-images.githubusercontent.com/13604413/159173955-e77b0c0c-9453-4482-8ad8-9350b9229aca.png)

Basically it is fine if the complete structure is stored on one partition.

***

![image](https://user-images.githubusercontent.com/13604413/159173956-62d59a31-3d9a-4343-8839-9356f5d39e9f.png)

We confirm the configuration with "Finish partitioning and write changes to disk".

> If there are old partitions on your ssd we confirm the overwrite with "Yes".

Your server now performs the partitioning and prepares the installation of the system.

### 💻 Installation of the operating system

![image](https://user-images.githubusercontent.com/13604413/159173960-6290e5b5-2205-4d48-a5fc-54ce108d53e7.png)

If you want to include other installation media, for example for certain packages, this could be done now.
Normally, however, you can download all packages conveniently afterwards via the package manager (apt).

***

![image](https://user-images.githubusercontent.com/13604413/159173968-fb24e35e-96c5-49a2-b856-799c5ce482fb.png)

Our dedicated server is located in Germany, so we also choose the german mirror location to achieve the best possible download rates.

***

![image](https://user-images.githubusercontent.com/13604413/159173970-8905935e-9fd0-4c9e-98b9-c32da48ac228.png)

Basically we recommend to use the default Debian repository.

***

![image](https://user-images.githubusercontent.com/13604413/159173979-5d4169d3-f516-4bfe-8f9f-dab51eabf18b.png)

If you'd like to use a HTTP proxy, you could enter the data. (this is not required)

***

![image](https://user-images.githubusercontent.com/13604413/159173982-e24e6f85-fb01-4823-9b39-3bfa364b97f3.png)

The system wants to collect anonymized statistics, this can be refused or confirmed.

***

![image](https://user-images.githubusercontent.com/13604413/159173987-38512558-c08f-4437-8468-e033d0af83f9.png)

Now select the packages you want to install:

* Debian desktop enviroment
Would create a graphical user interface on your server, but in this example we only use the shell level of the server.

* SSH server
Is needed to connect to PuTTY for example.

* standard system utilities
Is needed to provide a number of basic packages.

The selection of the different packages is done by TAB and arrow keys. Packages are selected or deselected with the space bar.
When you are satisfied with your selection press TAB until you reach <Continue> and confirm with Enter.

***

![image](https://user-images.githubusercontent.com/13604413/159173990-605c4f25-3480-43d1-89e3-dad3dedd01a5.png)

Confirm that this operating system is the only one on the current server with `Yes`.

***

![image](https://user-images.githubusercontent.com/13604413/159173991-197f8295-2441-49b0-b411-1247a6071112.png)

As storage location we choose the default location on our ssd.

> 🎉 The installation of your Debian system is now finished.

Open "Virtual Media" in your iLO and press "Eject Media" to remove the ISO from the system.

![image](https://user-images.githubusercontent.com/13604413/159173993-37b4c6a4-45f7-486a-b1e8-06adbff7c072.png)

When this is done successfully, we select Continue, the server will now perform a reboot.

![image](https://user-images.githubusercontent.com/13604413/159173996-5278b311-c648-4bfc-a7b6-cbc4f3e7c5bb.png)

### 🔑 Enable SSH Login

Once the reboot of your server is done and the installation was successful, you will now be prompted to login.

![image](https://user-images.githubusercontent.com/13604413/159173998-1c28db47-6839-4b39-8532-718c503708fe.png)

Of course you also want to be able to manage your server through SSH i.e. PuTTY for example, so we still need to enable the login for that:

![image](https://user-images.githubusercontent.com/13604413/159173999-9251e54d-a858-4f4e-95c6-0a5c988dc36a.png)

Open with nano the configuration file of your SSH service `nano /etc/ssh/sshd_config`.

![image](https://user-images.githubusercontent.com/13604413/159174006-2fdac4ee-ffee-41e4-b9ea-d485601b9217.png)

Search for `#PermitRootLogin no` and change it to `PermitRootLogin yes`.

Now press `STRG + X` and confirm your changes with `Y`.

After that you have to restart the SSH service, by typing `service ssh restart`.

Your SSH login is now active and you can connect via PuTTY for example.
Enter the IP address of your server, which you see in your zap dashboard and use the previously defined credentials.

![image](https://user-images.githubusercontent.com/13604413/159174010-4cf4901a-9481-45f9-b51a-6f07f53f050e.png)

> If you have any further questions or problems, our support is happy to assist you!
