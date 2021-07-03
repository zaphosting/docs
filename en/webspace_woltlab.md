---
id: webspace_woltlab
title: Webspace: Install Woltlab forum software
description: Information on how to install the Woltlab forum software on your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Woltlab

---


## What is Woltlab?

Woltlab is a popular forum software that was first released in 2001 and has continued to be developed ever since. In this tutorial we explain how to install this forum software on our webspace product. 

![img](https://screensaver01.zap-hosting.com/index.php/s/yzDHFJ4ELHBSEYf/preview)



## Set up Woltlab

### Preparation

Before the actual installation of Woltlab can be performed, certain preparations must be made. These include getting the forum software, setting up the database to be used and the mail server (email address).



**Software**

The official files of the forum software (installer) can be downloaded from the official website of Woltlab. The download for it can be found here: [WoltLab Suite Core](https://www.woltlab.com/woltlab-suite-download/)

This must be downloaded. You will then receive a ZIP file, which must then be unpacked on the local computer before it can be uploaded. In the ZIP file there is a folder with the name **upload**. This folder should contain three files (WCFSETUP.tar.gz, install.php and test.php). These files are needed.

Uploading the files can be done either via FTP or via the File Manager. In the example we show it with the file manager. You can find it in the dashboard of your web space under **File Manager**. Once there, we drag and drop the three files we got from the ZIP file into the file manager. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RTqRZWrRKcDCrdr/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/B7CiGrHxSJocyKz/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/yCrPoCtYksiRo5y/preview)

**Database**

Next, you need to create the database where all information from the forum will be stored later. To do this, click again on **Websites & Domains** and then on **Databases**. There we click on **Add Database**, enter the **Database Name** as well as the desired **User Name** and the **Password** and then click on **OK**: 

![img](https://screensaver01.zap-hosting.com/index.php/s/oDMpf3csBinesbg/preview)


**mailserver (e-mail address)**

To register an account at the forum you need a mailserver with an e-mail address, so that the registration mails can be sent to the users. You can find instructions on how to set up such an email address here: [Send e-mails](https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/)



### Installation

If all steps of the preparation have been fulfilled, then you can start with the actual installation of WoltLab. For this, the installer file (**install.php**) of the forum software must now be called in the Internet browser, on our test webspace this is **https://zap65083-1.plesk06.zap-webspace.com/install.php**. This then looks like this: 

![img](https://screensaver01.zap-hosting.com/index.php/s/PbSAPfaTJ68FKeC/preview)


At the beginning you can choose which language the installation wizard should use. Select the language and click **Next**. Next, you have to agree to WoltLab's license terms for the use of the forum software. 

After that, an overview of the required system requirements should be displayed. These include PHP, RAM, etc. By default, the webspace should already be configured to meet all of these. You can simply scroll down there and click **Next**.

If any requirements are not met, please contact support. Otherwise you can just scroll down and click **Next**. Next you can define under which path the forum should be accessible. If you want the forum to be accessible directly from the main domain, for example without a /forum, then you can simply leave this option as it is. 



Thereupon the installation path of the forum is determined, you should leave this normally unchanged. There you can click on **Next**:

![img](https://screensaver01.zap-hosting.com/index.php/s/wN3r3CMp93idrQY/preview)


Afterwards you can select which languages the forum should support, both **German** and **English** are possible:

![img](https://screensaver01.zap-hosting.com/index.php/s/FPBRe92rezZxKHW/preview)


Now the configuration of the database is pending, which was already created in advance. The database information from the created database must now be entered there: 



![img](https://screensaver01.zap-hosting.com/index.php/s/yxZFATYeLJzYZA3/preview)



The database will be configured afterwards. This may take a moment. Afterwards, an administrator account can be created, which can later be used for administration. 

![img](https://screensaver01.zap-hosting.com/index.php/s/X46Qoc5TwaDENzF/preview)

Afterwards the package installation starts, there we select the following free packages: 

![img](https://screensaver01.zap-hosting.com/index.php/s/Z76HmkR6TNkxqKs/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/WapwQ3nP5fc95Q8/preview)

Afterwards, the initial setup can be completed in the administration interface. Once there, information such as the title of the website, time zone, mail settings, license key, etc. can be entered. It is important that the correct e-mail information is stored so that mails can be sent successfully. The license key from Woltlab must also be entered there.

![img](https://screensaver01.zap-hosting.com/index.php/s/By8wZ3JcZg2knyn/preview)
![img](https://screensaver01.zap-hosting.com/index.php/s/Fafm4pSqAAcFKPE/preview)

> Woltlab is chargeable and can therefore only be used with a valid authentication code. 


 Afterwards you can reach your forum via the URL you defined.
