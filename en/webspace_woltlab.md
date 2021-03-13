---
id: webspace_woltlab
title: Install Woltlab
sidebar_label: Install Woltlab

---



## What is Woltlab?

Woltlab is a widely used forum software, which was first released in 2001 and has continued to be developed ever since. In this guide we explain how to install this forum software on our webspace product. 

![img](https://screensaver01.zap-hosting.com/index.php/s/8cnWkrByjoy29LK/preview)



## Set up WoltLab

### Preparation

Before the actual installation of Woltlab can be performed, certain preparations must be made. This includes getting the forum software, setting up the database to be used and the mail server (email address).



**Software**

The official files of the forum software (installer) can be downloaded from the official website of Woltlab. The download for it can be found here: [WoltLab Suite Core](https://www.woltlab.com/woltlab-suite-download/)

![img](https://screensaver01.zap-hosting.com/index.php/s/3dELXxpsfgiGDCC/preview)

This must be downloaded. You will then receive a ZIP file, which must then be unzipped on your local computer before it can be uploaded. The ZIP file contains a folder with the name **upload**. This folder should contain three files (WCFSETUP.tar.gz, install.php and test.php). Those files are needed. Once that is done, then you can start uploading the files.

Uploading the files can be done either via FTP or via the File Manager. In this example we will use the file manager. You can find it in the dashboard of your web space under **File Manager**. Once there, we drag and drop the three files we got from the ZIP file into the file manager. 

![img](https://screensaver01.zap-hosting.com/index.php/s/2AjysjoprbrTmeq/preview)



**Database**

As next, the database must be created, which will later be used to store all information of the forum. To do this, click again on **Websites & Domains** and then on **Databases**. Then click on Add Database and create a database:  

![img](https://screensaver01.zap-hosting.com/index.php/s/eQp3FbdtaMwRYJH/preview)

Click on **OK** and the database will be created.



**Mail server (e-mail address)**

For registering an account at the forum a mail server with an e-mail address is needed, so that the registration mails can be sent to the users. Instructions for setting up such an email address can be found here: [Send e-mails](https://zap-hosting.com/guides/docs/en/webspace_plesk_sendmail/)



### Installation

If all steps of the preparation have been fulfilled, then the actual setup of WoltLab can be started. For this, the installer file (**install.php**) of the forum software must now be called in the Internet browser. This should look like this: 

![img](https://screensaver01.zap-hosting.com/index.php/s/ixGkH8sSqCpFjei/preview)



The language to be used by the installation assistant can be set there at the beginning. Select the language and click **Next**. Now you have to agree to WoltLab's license terms for the use of the forum software. 

An overview of the required system requirements should then be displayed. These include PHP, memory, etc. The webspace should already be configured to meet all of these requirements by default.

![img](https://screensaver01.zap-hosting.com/index.php/s/mEfHzJ7aYE7awmA/preview)



In case any requirements are not met, please contact the support. Otherwise you can simply scroll down and click on **Next**. Then you can define under which path the forum should be accessible. If you want the forum to be accessible directly from the main domain, for example without a /forum, then you can simply leave this option as it is. 



After that you can choose which languages the forum should support. Select your desired languages and click continue. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jns5rMmafrXf68k/preview)



Now we have to configure the database, which has already been created in preparation. The database information from the created database must now be entered there: 



![img](https://screensaver01.zap-hosting.com/index.php/s/LDD794T7qcyqFqE/preview)



The database will be configured afterwards. This may take a moment. Afterwards, an administrator account has to be created, which can be used for the administration later on. 

Following this, the initial setup can be completed in the administration interface. Once there, information such as the title of the website, time zone, mail settings, license key, etc. can be configured. It's important that the correct e-mail information is set, so that mails can be sent successfully. Also the license key of Woltlab has to be entered there.



> Woltlab is fee-based and can therefore only be used with a valid authentication code. 



![img](https://screensaver01.zap-hosting.com/index.php/s/q7PTjXx3T3PrD7P/preview)



Last but not least, the only thing left to install under Packages is the Woltlab Suite Forum (Burning Board) package:

![img](https://screensaver01.zap-hosting.com/index.php/s/M5HL2dfR6PcFmSe/preview)



 Afterwards you can reach your forum via the URL defined.
