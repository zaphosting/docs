---
id: vserver-linux-gitlab
title: "VPS: Installation of GitLab"
description: Information on how to set up GitLab on your server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install GitLab
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

GitLab is a comprehensive DevOps platform that enables teams to collaborate on code, automate workflows, and manage the full software development lifecycle efficiently.

![image](https://i.imgur.com/FbG1qx9.png)
![image](https://i.imgur.com/bhlojF4.png)

In this guide, we will explore the process of installing GitLab on a Linux server.

<InlineVoucher />

## Prerequisites

The following requirements are recommended by the official [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) and it's highly recommended to follow the prerequisites to avoid inconvenience.

#### Hardware

| Components     | Minimum                | Recommended                 |
| -------------- | ---------------------- | --------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz                 |
| RAM            | 4 GB                   | 8 GB                        |
| Storage        | 10 GB                  | 50+ GB                      |
| Bandwidth      | 100 mbit/s (up & down) | 100 mbit/s (up & down)      |

#### Software

| Platform         | Options                                                      |
| ---------------- | ------------------------------------------------------------ |
| Operating System | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| Database         | PostgreSQL 14.9+                                             |
| Web server       | NGINX (bundled with GitLab), Puma 6.4.2+                     |
| Others           | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
For the most accurate and up-to-date information, please refer to GitLab's official documentation:

[GitLab Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html)


## Preparation

A connection has to be established via a SSH client in order to install GitLab on your Linux server. In case you are not sure how to use SSH, here is a guide how to do so: [Initial access (SSH)](https://zap-hosting.com/guides/docs/vserver-linux-ssh)

Once the connection is established, you can start to install the necessary packages that are required for the actual installation of GitLab.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Step 1 — Update your Linux server and install required tools

Before installing dependencies, you have to install some updates and some tools to install the dependencies which will be used to install GitLab. Just paste the following commands to update and install the required tools on your very own Linux server.

**Update the Package List:**
```
apt update
```

**Install Sudo:**
```
apt install sudo
```

**Updating the Package List #2:**
```
sudo apt update
```

**Installing Curl:**
```
sudo apt install curl
```

**Installing Sudo updates:**
```
sudo apt-get update
```

**Installing UFW:**
```
sudo apt install ufw
```

**Enabaling UFW:**
```
sudo ufw enable
```

**Adjusting Firewall Rules:**
```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

## Step 2 - Installing required dependencies

Next, You have to install some dependencies in order run the GitLab installer. Paste the following commands to install required dependencies on your Linux server.

<Tabs>

<TabItem value="Ubuntu" label="Ubuntu" default>

<br/>
```
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

**Install Postfix ( SMTP )**

If you want to send notifications to the users via email then You have to install Postfix that will help you to send notifications to the users via email.

```
sudo apt-get install -y postfix
```

:::info
While installing Postfix, a configuration may appear. In this case, select 'Internet Site' and press enter. Use your Linux server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the default settings.

If you wish to use another solution to send emails please skip this step and [configure an external SMTP server](https://docs.gitlab.com/omnibus/settings/smtp) after GitLab has been installed on your Linux server by following a guide provided by official GitLab Team.

## Step 3 — Installing GitLab

Next, after downloading all the required dependencies you are ready to install GitLab.

First, move into the `/tmp` directory:

```
cd /tmp
```

Now, download the GitLab installation script to continue:
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Now, run the installation script to install GitLab:
```
apt-get install gitlab-ee
```

</TabItem>
<TabItem value="Debian" label="Debian">

<br/>
```
sudo apt-get install -y curl openssh-server ca-certificates perl
```

**Install Postfix ( SMTP )**

If you want to send notifications to the users via email then You have to install Postfix that will help you to send notifications to the users via email.

```
sudo apt-get install -y postfix
```

:::info
While installing Postfix, a configuration may appear. In this case, select 'Internet Site' and press enter. Use your Linux server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the default settings.

If you wish to use another solution to send emails please skip this step and [configure an external SMTP server](https://docs.gitlab.com/omnibus/settings/smtp) after GitLab has been installed on your Linux server by following a guide provided by official GitLab Team.

## Step 3 — Installing GitLab

Next, after downloading all the required dependencies you are ready to install GitLab.

First, move into the `/tmp` directory:

```
cd /tmp
```

Now, download the GitLab installation script to continue:
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Now, run the installation script to install GitLab:
```
apt-get install gitlab-ee
```

</TabItem>
<TabItem value="OpenSUSE" label="OpenSUSE">

<br/>
```
sudo zypper install curl openssh perl
```

**Enable OpenSSH server daemon if not enabled:**
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

**Check if opening the firewall is needed with:**
```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

**Install Postfix ( SMTP )**

If you want to send notifications to the users via email then You have to install Postfix that will help you to send notifications to the users via email.

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

:::info
While installing Postfix, a configuration may appear. In this case, select 'Internet Site' and press enter. Use your Linux server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the default settings.

If you wish to use another solution to send emails please skip this step and [configure an external SMTP server](https://docs.gitlab.com/omnibus/settings/smtp) after GitLab has been installed on your Linux server by following a guide provided by official GitLab Team.

## Step 3 — Installing GitLab

Next, after downloading all the required dependencies you are ready to install GitLab.

First, move into the `/tmp` directory:

```
cd /tmp
```

Now, download the GitLab installation script to continue:
```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Now, run the installation script to install GitLab:
```
zypper install gitlab-ee
```

</TabItem>
</Tabs>

## Step 4 — Editing the GitLab Configuration File

Now, you have to make some changes to the configuration file. Start by opening GitLab configuration file using your preferred text editor. As an example we'll be using `nano`:
```
sudo nano /etc/gitlab/gitlab.rb
```

Next, search for the line where it says `external_url` and enter your domain or enter your linux server's IPv4 address in case you don't have one domain to host GitLab.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL on which GitLab will be reachable.
##! For more details on configuring external_url see:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Note: During installation/upgrades, the value of the environment variable
##! EXTERNAL_URL will be used to populate/replace this value.
##! On AWS EC2 instances, we also attempt to fetch the public hostname/IP
##! address from AWS. For more details, see:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Your domain / IPv4 address of your Linux server`'
```

Additionally, you have to input your email into the line `letsencrypt['contact_emails']`, so that Let’s Encrypt can contact you in future. We'll be using Let’s Encrypt to issue a SSL certificate to our website. 

:::note 
Let’s Encrypt won't issue you one certificate if you're using your IPv4 address to host your GitLab website. You have to use an actual domain to issue the SSL certificate.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Let's Encrypt integration
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Your email here`] # This should be an array of email addresses to add as contacts
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# See https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically for more on these settings
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Should be a number or cron expression, if specified.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

*TIP:* Use `CTRL+W` to search for `letsencrypt['contact_emails']` and press enter so you don't find it in every line.

Now, press `CTRL+W` and then Y and then enter to save the changes you just made! 

Run the following command to reconfigure GitLab:

```
sudo gitlab-ctl reconfigure
```

This process may take a while because it'll initialize GitLab using the information you just gave and it's an automated process so you don't have do any any more actions untill it's done. Additionally, the SSL certificate will be issued in the mean time.

## Step 5 — Accomplishing Initial Configuration Using the Web Interface

After the initialization, the server should be accessable via web browser. Navigate to your website by entering your domain name in the search bar like the following format:
```
https://Your_domain
```

You'll be prompted with a login page at your first visit. 

![image](https://i.imgur.com/ekpj6ZS.png)
![image](https://i.imgur.com/5s9aae6.png)
To get the admin access at your first login, login as an root user by putting the username `root` and for the password, you have to access a file where the password is stored. Access the file using the command:

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# WARNING: This value is valid only in the following conditions

#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the firs$

#          2. Password hasn't been changed manually, either via UI or via command line.

#

#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `YOUR_PASSWORD_IS_HERE`

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

Afterwards, get back to your login page and enter the username and password you just copied.

Now, press `Sign in` button to enter your GitLab dashboard and that's how you do the basic installation of GitLab.

![image](https://i.imgur.com/v43r2MT.png)
![image](https://i.imgur.com/4WWLDib.png)

If you want to do additional steps, please follow the [Official Documentation of GitLab regarding Next Steps](https://docs.gitlab.com/ee/install/next_steps.html)

## Conclusion

Congratulations, you have successfully installed GitLab! If you have any further questions or problems, please contact our support team, who are available to help you every day!
