---
id: webspace_wordpress
title: Webspace: Install WordPress
description: Information on how to install WordPress on your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install WordPress
---



## What is WordPress?

WordPress is the most used free content management system worldwide. It was programmed from 2003 by Matthew Mullenweg as software for weblogs and continues to be developed as an open source project. In this guide we explain how to install this software on our webspace product. 



![image](https://user-images.githubusercontent.com/26007280/189989802-b729db5c-7e7b-4fff-b4ff-47b6a842ef49.png)



## Set up WordPress

### Preparation

Before the actual installation of WordPress can be performed, certain preparations must be made. This includes getting the software, setting up the database to be used and the mail server (email address).



**Software**

The software can be downloaded from the official website of WordPress. The download for it can be found here: [WordPress Download](https://en.wordpress.org/download/)

![image](https://user-images.githubusercontent.com/26007280/189989828-4c06b5db-42ba-4b0d-a446-554eb5a0be13.png)

The download contains a packed zip file, which must be unpacked on your local computer. Inside you will find a folder with the name **wordpress**. It's content is needed and must be uploaded either via **FTP or File Manager**. In this example the setup is shown using FTP. You can create an FTP user under **Websites & Domains** at **FTP-Access**.



![img](https://screensaver01.zap-hosting.com/index.php/s/nkKsBpyb6GM6Rkp/download/chrome_7Y5hmuXn5f.gif)



Now we connect to the web space with the created FTP account. There we navigate to the **httpdocs** directory and upload the files of the software.



![image](https://user-images.githubusercontent.com/26007280/189989855-683604d8-3ca1-4bb8-b781-b9b75334278a.png)



**Database**

As next, the database must be created, which will later be used to store all information of the website. To do this, click again on **Websites & Domains** and then on **Databases**. Then click on Add Database and create a database:  



![img](https://screensaver01.zap-hosting.com/index.php/s/99BJeGCHjS9QHkz/download/chrome_Jzw3adOg7G.gif)



Click on **OK** and the database will be created.



**Mail server (e-mail address)**

For registering an account at the forum a mail server with an e-mail address is needed, so that the registration mails can be sent to the users. Instructions for setting up such an email address can be found here: [Send e-mails](https://zap-hosting.com/guides/docs/en/webspace_plesk_sendmail/)



### Installation

If all the steps from the preparation have been fulfilled, then the actual setup of Wordpress can be started. For this, the website must now be called up in the Internet browser. This should look like this: 

![image](https://user-images.githubusercontent.com/26007280/189989882-1fc9b68b-43aa-4b14-93e0-15d50fd240c0.png)



Once there, we can click on **Let's go!** to start the setup. The first thing to do is to configure the database, which has already been created in advance in the preparation. The database information from the created database must now be entered there. 



![image](https://user-images.githubusercontent.com/26007280/189989922-d7dfd4f4-402f-435b-9c50-bfd20e9d9851.png)



Click on **Submit** and in the following step on **Run the installation**. 



![image](https://user-images.githubusercontent.com/26007280/189989953-f0a27b50-a4d7-4240-81d0-1896d46c6643.png)



WordPress now needs some more additional information. The title of the website, username, password, and the email address can now be specified.

 

![image](https://user-images.githubusercontent.com/26007280/189989966-8b113e9c-749b-43fe-9fa1-e58fee20976f.png)



Once all fields have been fulfilled, click on **Install WordPress**. The installation will then be completed within a few seconds and the login window should show up. There you can log in with your created account. Afterwards you can set up your WordPress as you like!

![img](https://screensaver01.zap-hosting.com/index.php/s/MnLRYMDJCXjJJ8i/download/chrome_4KNjihGpo0.gif)
