---
id: vserver_linux_webserver
title: Install webserver
sidebar_label: Install webserver

---

## Webserver installation 

Nginx and Apache are popular web services that are used to deliver web pages to a user's browser. Below we will show you how to install one of the services on your system. 



## Preparation

Before the actual installation of a webserver can begin, it's necessary to make sure that the system is up to date. To do this, we connect to the server via SSH. If you don't know what SSH is and how to use it, check out the following guide: [Initial Access (SSH)](https://zap-hosting.com/guides/docs/de/vserver_linux_ssh/).

Once there you can update the system with the following command depending on your operating system:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Installation

Once the preparation has been completed, the installation of the webserver can now begin. Depending on the operating system and webserver, the following commands must be executed for this:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

After installing the web server, the files of your website can be uploaded. Connect to your server via FTP/SFTP, navigate to the following directory and upload the files.

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

After installing the web server, the files of your website can be uploaded. Connect to your server via FTP/SFTP, navigate to the following directory and upload the files.

```
/usr/share/nginx/html
```



## Version-Check

Once the installation has been completed, you can use the commands `apache2 -v` (Apache) and `nginx -v` (Nginx) to check if the installation was successful. The output should look similar to the following:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

If either one of the two cases occurs, then the web server has been successfully installed. 
