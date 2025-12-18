---
id: webspace-wordpress
title: "Webspace: Install WordPress"
description: "Discover how to set up WordPress on your webspace to create and manage your website efficiently → Learn more now"
sidebar_label: Install
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

WordPress is the most used free content management system worldwide. It was programmed from 2003 by Matthew Mullenweg as software for weblogs and continues to be developed as an open source project. In this guide we explain how to install this software on our webspace product. 

![](https://screensaver01.zap-hosting.com/index.php/s/j3Ctfont64EnpcH/preview)

<InlineVoucher />

## Preparation

Before the actual installation of WordPress can be performed, certain preparations must be made. This includes getting the software, setting up the database to be used and the mail server (email address).



**Software**

The software can be downloaded from the official website of WordPress. The download for it can be found here: [WordPress Download](https://en.wordpress.org/download/)

![](https://screensaver01.zap-hosting.com/index.php/s/69YD2QWG8iHzzaa/preview)

The download contains a packed zip file, which must be unpacked on your local computer. Inside you will find a folder with the name **wordpress**. It's content is needed and must be uploaded either via **FTP or File Manager**. In this example the setup is shown using FTP. You can create an FTP user under **Websites & Domains** at **FTP-Access**.



![](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Now we connect to the web space with the created FTP account. There we navigate to the **httpdocs** directory and upload the files of the software.



![](https://screensaver01.zap-hosting.com/index.php/s/c9JSb9XEjfwGwwQ/preview)



**Database**

As next, the database must be created, which will later be used to store all information of the website. To do this, click again on **Websites & Domains** and then on **Databases**. Then click on Add Database and create a database:  



![](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)



Click on **OK** and the database will be created.



**Mail server (e-mail address)**

For registering an account at the forum a mail server with an e-mail address is needed, so that the registration mails can be sent to the users. Instructions for setting up such an email address can be found here: [Sending Emails](webspace-plesk-sendmail.md)



## Installation

If all the steps from the preparation have been fulfilled, then the actual setup of Wordpress can be started. For this, the website must now be called up in the Internet browser. This should look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/8AcGsKyHpsSgKxL/preview)



Once there, we can click on **Let's go!** to start the setup. The first thing to do is to configure the database, which has already been created in advance in the preparation. The database information from the created database must now be entered there. 



![](https://screensaver01.zap-hosting.com/index.php/s/9jnjxz8B9TaeZSD/preview)



Click on **Submit** and in the following step on **Run the installation**. 



![](https://screensaver01.zap-hosting.com/index.php/s/ZLZdC5NeWDoQBkr/preview)



WordPress now needs some more additional information. The title of the website, username, password, and the email address can now be specified.

 

![](https://screensaver01.zap-hosting.com/index.php/s/WzckYZ47QJLd7yM/preview)



Once all fields have been fulfilled, click on **Install WordPress**. The installation will then be completed within a few seconds and the login window should show up. There you can log in with your created account. Afterwards you can set up your WordPress as you like!

![](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)



## Conclusion

Congratulations, you have installed WordPress on your webspace. If you have any further questions or problems, please contact our support team, who are available to help you every day!

<InlineVoucher />
