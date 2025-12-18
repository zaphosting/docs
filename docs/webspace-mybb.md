---
id: webspace-mybb
title: "Webspace: Install MyBB forum software"
description: "Discover how to set up and launch your own MyBB forum to build an engaging online community → Learn more now"
sidebar_label: Install MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

MyBB, previously MyBulletinBoard, is a free and open source forum software developed by the MyBB Group. In this guide we explain how to install this forum software on our webspace product. 

<InlineVoucher />

## Preparation

Before the actual installation of MyBB can be performed, certain preparations must be made. This includes getting the forum software, setting up the database to be used and the mail server (email address).


**Software**

The forum software can be downloaded from the official website of MyBB. The download for it can be found here: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

The download contains a packed file, which must be unpacked on your local computer. Inside you will find a folder with the name **Upload**. Its content is needed and must be uploaded either via **FTP or File Manager**. Under **Websites & Domains** at **FTP-Access** you can create a FTP user.

After opening the file manager in the Pleskpanel, we navigate to the **httpdocs** directory and upload the files of the forum software.


![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)


**Database**

As next, the database must be created, which will later be used to store all information of the forum. To do this, click again on **Websites & Domains** and then on **Databases**. Then click on Add Database and create a database:  

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Click on **OK** and the database will be created.



**Mail server (e-mail address)**

For registering an account at the forum a mail server with an e-mail address is needed, so that the registration mails can be sent to the users. Instructions for setting up such an email address can be found here: [Sending Emails](webspace-plesk-sendmail.md)



## Installation

If all the steps from the preparation have been fulfilled, then the actual setup of MyBB can be started. For this, the website must now be called up in the Internet browser. This should look like this: 

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)


Once there, we now have to configure the 9 categories during the setup. The configuration will check if all the prerequisites are met, configure the database and forum software, and so on. To begin with, we must first determine whether anonymous statistics should be forwarded to MyBB or not. After that, the license terms have to be agreed upon as well. 

An overview of the required system prerequisites should then be displayed. This includes PHP version, memory, etc. The webspace should already be configured to meet all of these prerequisites by default.


![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)


In case any prerequisites are not met, please contact the support. Otherwise you can click on **Next** and continue the setup. Now we have to configure the database, which has already been created in advance. The database information from the created database must be filled in there: 

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)



The database will be configured afterwards. This may take a moment.  After that, the implementation of the default data and themes takes place. All you have to do here is to click on **Next**.


Subsequently, we come to the general configuration. Here you can define the name of the website, forum, URL and more:


![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)


Last but not least, a general administrator account must be created before the setup can finally be completed. 


![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)


If you have done this and everything else has been configured successfully, then you should see the following message and be able to access your forum as well:

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />
