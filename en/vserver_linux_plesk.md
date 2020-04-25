---
id: vserver_linux_plesk
title: Plesk
sidebar_label: Plesk
---

## Plesk installieren

> Before installing, run apt update and apt upgrade so that the latest packages are installed on the server. 
Plesk can currently only be installed on Debian 8 (Jessie), Debian 9 (Strech), Ubuntu 16.04 (Xenial Xerus), Ubuntu 18.04 (Bionic Beaver), CentOS 6/7/8, Red Hat Enterprise Linux 6.x/7.x/8.x, CloudLinux 6.x/7.1+ and Virtuozzo Linux 7. The architecture must be 64-bit.

The connection to the server can be made via Putty, for example.


## Starting the installation 

<!--DOCUSAURUS_CODE_TABS-->
<!--One-Click Installation-->

For Plesk to install fully automatically with the standard components and features used by most Plesk users, only one command is required:

>The Plesk installer always installs the latest/most recent version of Plesk. It may happen that the graphics/screenshots shown here do not show the latest/most recent version of Plesk.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

> If this error is displayed: "-bash: curl: command not found" you have to reload the package with `` apt install curl``.

Once this command has been executed, it usually takes between 15 and 60 minutes to fully install Plesk.

> The SSH session must not be closed while the installer is still active. This would otherwise lead to termination. 
Also, the server would have to be reinstalled to restart the installer. 
If the installer is restarted without first reinstalling the server, there will be problems with non-functioning features during the installation or in the Plesk panel itself. 

> It can happen that it looks like the installer is "stuck", in 99% of the cases the installer will continue to run after a few minutes, because it still has to configure packages/configs and co.


The installation is complete when this is displayed

![](https://screensaver01.zap-hosting.com/index.php/s/P4CBEszxPZTA6qn/preview)

<!--Web Installation-->

Only a few commands are needed to install Plesk via the Web. 

> The Plesk installer always installs the latest/most recent version of Plesk. It may happen that the graphics/screenshots shown here do not show the latest/most recent version of Plesk.

Download the Plesk Installer:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Set correct authorization:

```
chmod +x plesk-installer
```

Start the installer:

```
./plesk-installer --web-interface
```

![](https://screensaver01.zap-hosting.com/index.php/s/6gzT95ded8d99RD/preview)

<!--Konsolen Installation-->

Only a few commands are required to install Plesk via the console. 

> The Plesk installer always installs the latest/most recent version of Plesk. It may happen that the graphics/screenshots shown here do not show the latest/most recent version of Plesk.

Download the installer:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Set correct authorization:

```
chmod +x plesk-installer
```

Start the installer:

```
./plesk-installers
```

Once the three startup commands have been executed, the license must be approved with "F": 

![](https://screensaver01.zap-hosting.com/index.php/s/B3fEBqeDkzxf3iQ/preview)

After approval, the system will ask which Plesk to install. In this case Plesk Obsidian or Plesk Onyx. It will also indicate which is the more stable one. Usually a "stable" version is used for productive use. Since the selected options already point to the stable version, confirm this again with "F".

The question of whether Plesk may collect data for product improvement can be answered with "Y"(Yes) or "n"(No). 

[](https://screensaver01.zap-hosting.com/index.php/s/6PEEjG9zTSZTcfJ/preview)

After answering, the system will ask you what type of the selected Plesk version you want to install. Usually the type "Recommended" already set is sufficient. Modules that may not be installed later but are needed can be installed in the Plesk panel. 

[](https://screensaver01.zap-hosting.com/index.php/s/a8Bi982gTtgAcrx/preview)

The next question whether packages may be installed/upgraded is confirmed with "F".

[](https://screensaver01.zap-hosting.com/index.php/s/Sp9DjKBEKkowoo4/preview)

Now the installer starts the installation.

> The SSH session must not be closed while the installer is still active. This would lead to an abort and the server would have to be reinstalled for the installer to restart. 
It can happen that it looks like the installer is "stuck", in 99% of the cases the installer continues running after a few minutes, because it has to configure packages/configs and co.

The installation is complete as soon as the following appears: 

![](https://screensaver01.zap-hosting.com/index.php/s/Fyy72nWq4NbRxmz/preview)

<!--END_DOCUSAURUS_CODE_TABS-->

## Open the Web Installer

After the installer has been started, the installation is carried out in the browser. The installation page can be reached via https://IP:8447 or via https://Domain.xx:8447.

## The Plesk Web Panel 

> The following is displayed when calling the Web Panel: "This is not a secure connection". This must be confirmed the first time, then the page opens. 

The web interface can be reached via https://IP:8443 or https://Domain.xx:8443 of the server. The login data is root/admin and the current root password. Alternatively you can simply use one of the displayed URLs. If these are no longer valid, you can create new URLs with the command ``plesk login``. 

### Setup

As soon as the registration was successful, the Admin Account must be set up. A contact name, an e-mail and a password must be entered. If you already have a Plesk license, you can enter it directly. Alternatively, a 15-day trial license can be requested from Plesk. Finally, the user contract must be confirmed. 
Plesk can now be used. 

### Set language


After installation, the Plesk panel is in English, the German language can be set or selected under Tools&Settings ➡️ Plesk Appearance ➡️ Languages. There "de-DE" must be selected. Afterwards the language can be set permanently for all by clicking on "Make default". 
After a logout and login you will find the Plesk panel in German.

![](https://screensaver01.zap-hosting.com/index.php/s/z428FDYSsQeiHDK/preview)

### Add domain

To add the first domain click on the blue button "Add domain".

[](https://screensaver01.zap-hosting.com/index.php/s/iaeTSKXWCSeN9Kk/preview)

Now the own domain can be entered. Also an IP as well as a user name and password for the web space of the domain must be defined. If the subdoimain "www" is already entered in the DNS of the domain, an SSL certificate from Lets Encrypt can be created directly. This option can be selected, after entering a mail address, it is confirmed on the blue "OK" button.  

[](https://screensaver01.zap-hosting.com/index.php/s/GPdFbozmJBgLEYZ/preview)

Now you can enter a domain, select an IP address and enter a user name and password for the web space that you now create for the domain. If you have already created the subdomain "www", you can have Lets Encrypt generate an SSL certificate for you directly, select this option, enter a mail and confirm everything on the blue "OK" button at the bottom. 

> The domain must point to the IP of the webspace, if the domain is ZAP-hosting, it can be easily redirected to the webspace via EasyDNS, if it is external, an A-record must be set to the IP and the subdomain "www", "webmail" must also point to the IP. An MX record should also be set to the IP of the web space. 

![](https://screensaver01.zap-hosting.com/index.php/s/PeYANEka7rysPdN/preview)

> It can take up to 24 hours until a new/changed DNS entry is forwarded to the correct destination. 

## SSL encryption

During the domain registration/creation of the web space, an SSL certificate from Lets Encrypt was already generated, this can now be entered/selected under "Hosting settings" of the domain. Afterwards it must confirm with a click on "Apply".

> In order to be permanently redirected to HTTPS (SSL) when calling up the web page, the checkbox "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS" must be checked. 

[](https://screensaver01.zap-hosting.com/index.php/s/cPQxT5qFAkfy6Gb/preview)

If the domain is now opened in the browser, it shows its encryption.

![](https://screensaver01.zap-hosting.com/index.php/s/Nb3jawSSknSQajg/preview)

> The installation as well as the setup of the first domain with encryption is now completely finished. 
