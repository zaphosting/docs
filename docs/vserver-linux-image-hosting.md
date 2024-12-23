---
id: vserver-linux-image-hosting
title: "VPS: Setting Up Image Hosting with Apache and PHP"
description: Information on setting up an Apache and PHP-based image hosting server with ShareX integration - ZAP-Hosting.com documentation
sidebar_label: Image Hosting
services:
  - vserver
---

## Introduction

This guide demonstrates the process of setting up an image hosting server on a Linux-based VPS and blend it with [ShareX](https://getsharex.com/) for seamless image uploads.

## Prerequisites

The following requirements are recommended to ensure best performance.

#### Hardware Requirements:

| Components     | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 1x 1.5 GHz             | 2x 2.0+ GHz                 |
| RAM            | 1 GB                   | 2 GB                        |
| Storage        | 10 GB                  | 10+ GB ( based on usage )   |
| Bandwidth      | 1 mbit/s (up & down)   | 5 mbit/s (up & down)        |

#### Software Requirements:

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Linux (Ubuntu, Debian, or CentOS recommended).               |
| Web server       | Apache                                                       |
| Additional Tools | PHP                                                          |
| Optional         | SSL/TLS for secure file uploads.                             |

## Preparation

A connection has to be established via a SSH client in order to begin the setup on your Linux server. Please view our [Initial access (SSH)](vserver-linux-ssh.md) guide to learn more about this.

Once the connection is established, you can begin to install the necessary packages that are required for the actual setup.

## Step 1: Installing Dependencies

First, you have to install the required dependencies and web server before starting the actual setup. Use the following commands to install all the required dependencies in your Linux server.

### Install PHP and Web Server

Install Apache and PHP:

```
sudo apt update
sudo apt install apache2 php
```
## Step 2: Create Upload Folder and Upload Script

Create the `uploads` directory:

```
sudo mkdir -p /var/www/html/uploads
sudo chown -R www-data:www-data /var/www/html/uploads
```
Open the `upload.php` script file using the nano file editor:

```
sudo nano /var/www/html/upload.php
```

Now, paste the following script into the script file:

```php
<?php
if(isset($_FILES['image'])){
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["image"]["name"]);

    if(move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)){
        echo "http://203.0.113.45/" . $target_file; // Replace with your real IP
    } else {
        echo "File upload failed!";
    }
}
?>
```
Save the file (`Ctrl+O`, then `Enter`) and exit (`Ctrl+X`).

## Step 3: Configure ShareX

1. Open ShareX:
Go to Destinations > Custom uploader settings...
2. Create a New Uploader:
- Name: Give it a name as you wish.
- Request URL: Enter your server's upload script URL (e.g., `http://yourdomain.com/upload.php`).
- Method: Set to `POST`.
- File Form Name: Set it to the input field name (`image`).
- Destination type: Tick the image uploader option.

![ShareX Custom Uploader Settings](https://i.imgur.com/hxsvNaZ.png)
![](https://i.imgur.com/8aCd4DA.png)

3. Test Upload:
Upload an image using ShareX. Verify it appears in the upload directory.

## Additional Measures

1. Using a Custom Domain:
To use a custom domain with your image hosting server, you'll have to purchase a Domain address and point your Domain DNS to your Linux VPS by adding a A record within your Domain settings and update the `upload.php` script by replacing the IP address with your Domain.

```php
echo "http://yourdomain.com/" . $target_file;
```


## Conclusion 

Congratulations, you have successfully setuped image hosting on your Linux server which has introduced searmless image hosting using ShareX! For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
