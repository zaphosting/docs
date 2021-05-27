---
id: webspace_mybb
title: Webspace: Install MyBB forum software
description: Information on how to install the MyBulletinBoard forum software on your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install MyBB

---



## What is MyBB?

MyBB, previously MyBulletinBoard, is a free and open source forum software developed by the MyBB Group. In this guide we explain how to install this forum software on our webspace product. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XcScX6TPWx9HDS/preview)

## Set up MyBB

### Preparation

Before the actual installation of MyBB can be performed, certain preparations must be made. This includes getting the forum software, setting up the database to be used and the mail server (email address).



**Software**

The forum software can be downloaded from the official website of MyBB. The download for it can be found here: [MyBB](https://mybb.com/download/)

![img](https://screensaver01.zap-hosting.com/index.php/s/AwDjrrGq87Jfs7Y/preview)

The download contains a packed file, which must be unpacked on your local computer. Inside you will find a folder with the name **Upload**. Its content is needed and must be uploaded either via **FTP or File Manager**. In this example the setup is shown using FTP. Under **Websites & Domains** at **FTP-Access** you can create a FTP user.



![img](https://screensaver01.zap-hosting.com/index.php/s/sMfW8jfKbXRDkzQ/preview)



Now we connect to the web space with the created FTP account. There we navigate to the **httpdocs** directory and upload the files of the forum software.



![img](https://screensaver01.zap-hosting.com/index.php/s/nMqdcxaDMTTFDkp/preview)



**Database**

As next, the database must be created, which will later be used to store all information of the forum. To do this, click again on **Websites & Domains** and then on **Databases**. Then click on Add Database and create a database:  

![img](https://screensaver01.zap-hosting.com/index.php/s/ozrs9fj5ybYjrzf/preview)

Click on **OK** and the database will be created.



**Mail server (e-mail address)**

For registering an account at the forum a mail server with an e-mail address is needed, so that the registration mails can be sent to the users. Instructions for setting up such an email address can be found here: [Send e-mails](https://zap-hosting.com/guides/docs/en/webspace_plesk_sendmail/)



### Installation

If all the steps from the preparation have been fulfilled, then the actual setup of MyBB can be started. For this, the website must now be called up in the Internet browser. This should look like this: 

![img](https://screensaver01.zap-hosting.com/index.php/s/yJi7wgeFAKLsQPL/preview)



Once there, we now have to configure the 9 categories during the setup. The configuration will check if all the requirements are met, configure the database and forum software, and so on. To begin with, we must first determine whether anonymous statistics should be forwarded to MyBB or not. After that, the license terms have to be agreed upon as well. 

An overview of the required system requirements should then be displayed. This includes PHP version, memory, etc. The webspace should already be configured to meet all of these requirements by default.



![img](https://screensaver01.zap-hosting.com/index.php/s/ZjGBg6M4bp679x5/preview)



In case any requirements are not met, please contact the support. Otherwise you can click on **Next** and continue the setup. Now we have to configure the database, which has already been created in advance. The database information from the created database must be filled in there: 

![img](https://screensaver01.zap-hosting.com/index.php/s/H9tRFZiceQHCXC6/preview)



The database will be configured afterwards. This may take a moment.  After that, the implementation of the default data and themes takes place. All you have to do here is to click on **Next**.



Subsequently, we come to the general configuration. Here you can define the name of the website, forum, URL and more:



![img](https://screensaver01.zap-hosting.com/index.php/s/e2EDJNPBZiqjY4A/preview)



Last but not least, a general administrator account must be created before the setup can finally be completed. 

![img](https://screensaver01.zap-hosting.com/index.php/s/eDw94nz97Abe9tB/preview)

If you have done this and everything else has been configured successfully, then you should see the following message and be able to access your forum as well:

![img](https://screensaver01.zap-hosting.com/index.php/s/TMjQ3zPzm7zxZYx/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/6XcScX6TPWx9HDS/preview)
