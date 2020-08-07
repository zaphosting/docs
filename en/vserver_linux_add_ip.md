---
id: vserver_linux_add_ip
title: Add IPv4 Address
sidebar_label: Add IPv4 Address
---

## Add Additional IPv4 address(es)

If this has not already been entered automatically, it can be entered manually in the network config.

### Step 1️⃣
The network config is opened with an editor, eg with "nano".
```
sudo nano /etc/network/interfaces
```
> ⚠️ The config must be edited with root rights.

There is already an entry in the config that could look like this:

```
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
        address 123.123.123.100
        netmask 255.255.255.0
        gateway 123.123.123.1
```
There the interface "eth0" is specified as well as the IPv4, its netmask and gateway.

### Step 2️⃣

In order to add a further IPv4, another interface must be entered, eg "eth1". The additional IPv4 is e.g. 124.124.124.55. The network mask is 255.255.255.0 because it is a class C network. The gateway is always the IPv4 address with a 1 at the end.

>⚠️ Important: It must be the additional IPv4 that is displayed in the web interface under IP addresses.


The additional interface then looks like this: 

```
auto eth1
iface eth1 inet static
        address 124.124.124.55
        netmask 255.255.255.0
        gateway 124.124.124.1
```

Together with the "eth0" interface, the config now looks like this:

```
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
        address 123.123.123.100
        netmask 255.255.255.0
        gateway 123.123.123.1
        
auto eth1
iface eth1 inet static
        address 124.124.124.55
        netmask 255.255.255.0
        gateway 124.124.124.1
```
The confing must then be saved, with "nano" eg with **CTRL+X, y then Enter**

### Step 3️⃣

The network module must now be restarted so that the new IPv4 address becomes active, this is done with the following command:
```
sudo service networking restart
```
As soon as this is completed, the server can be reached via both IPv4 addresses. This can be checked, for example, with a ping check via Windows CMD or Linux Terminal, depending on your own computer operating system:
```
ping TheNewIP
```
The same steps have to be done with even more additional IPv4 addresses, the interface then always increases by a number e.g. "eth2", "eht3" etc.

✅ The additional IPv4 address has now been successfully set up.
