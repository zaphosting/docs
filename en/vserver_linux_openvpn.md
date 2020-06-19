---
id: vserver_linux_openvpn
title: OpenVPN
sidebar_label: OpenVPN
---

# Activate TUN
First of all the network driver **TUN** must be activated. This step is not required for root servers.
To do this you have to create a new file called **tunscript.sh** in the **/usr/sbin** folder. 
```
nano /usr/sbin/tunscript.sh 
```

Insert the following lines afterwards:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Save the file by pressing 'STRG+O', then 'Y' and finally press 'Enter'. To exit the file press 'CTRL+X'.

After that run the following command: 
```
chmod +x /usr/sbin/tunscript.sh
```

Once you have done this, run ``crontab -e`` and select the **nano editor** [1]. Add this line to the end of the file:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Save the file by pressing 'STRG+O', then 'Y' and finally press 'Enter'. To exit the file press 'CTRL+X'.

You should then be able to continue after a restart.

# Installation of OpenVPN
In order to install OpenVPN, execute the following command in the console: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Then a dialog appears asking whether you want to use UDP or TCP. We recommend UDP, hence you type '1' and press 'Enter'.

After that you will be asked for a port for OpenVPN. Select a port. 

Then you have to configure the DNS server. We recommend using either Google or Cloudflare DNS:
8.8.8.8 / 8.8.4.4 - Google
1.1.1.1 / 1.0.01 - Cloudflare

Following this step, you have to define a client name. To do this, choose a name such as the name of your device.

# Add more clients
If you want to create multiple connections, it is useful to create multiple accounts. To create another account, execute the following command: 
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Select '1' and then confirm. Now you have to define the client name. 

# Connect to the VPN
If you want to connect to your VPN, then you need the OpenVPN client. There you can find the download sources: https://openvpn.net/community-downloads/

Connect via SFTP to your server to download the created .ovpn file and then delete the file on your server afterwards.

As soon as you have installed the client, start the program. Right click on the OpenVPN icon in the taskbar. Then click on 'Import file' and select the file you downloaded earlier and click 'Open'.

To connect, click again on icon and select "Connect".

> In case you have imported several files, you have to select the client you want to use and then click on Connect

# Remove clients
Run the following command to remove a Client:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Select the number of the client in your list which you want to remove. Then press 'Enter'. You will now be prompted to confirm the deletion. If you are sure, press 'y' and then 'Enter'.
The client should be removed at this point. 

# Uninstall OpenVPN. 
If you no longer need OpenVPN, then you can uninstall it this way:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Press '3' and confirm. Confirm once again and OpenVPN is uninstalled after that.
