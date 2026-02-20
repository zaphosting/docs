---
id: vserver-linux-gitlab
title: "Setup GitLab on a Linux Server - Host Your Own DevOps Platform"
description: "Discover how to efficiently set up GitLab on Linux to streamline DevOps workflows and enhance team collaboration → Learn more now"
sidebar_label: Install GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

GitLab is a comprehensive DevOps platform that enables teams to collaborate on code, automate workflows, and manage the full software development lifecycle efficiently. In this guide, the installation of GitLab on a Linux server will be explained.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Preparation

The following requirements are recommended by the official [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) and it's highly recommended to follow the prerequisites to avoid inconveniences and issues later down the line.

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
For the most accurate and up-to-date specification information, please refer to GitLab's official [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html) documentation.
:::

A connection has to be established via a SSH client in order to install GitLab on your Linux server. Please view our [Initial access (SSH)](vserver-linux-ssh.md) guide to learn more about this.

Once the connection is established, you can begin to install the necessary packages that are required for the actual installation of GitLab.

## Step 1: Installing Dependencies

First, you have to install some dependencies in order run the GitLab installer. Use the following commands to install required dependencies on your Linux server.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Update package list to the latest version and install the OpenSSH Server package alongside the prerequisites it requires using the following command. This is how your web interface panel for GitLab will be hosted.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

You can also install Postfix (STMP Server) if you wish to be able to send email notifications when using GitLab. This is **optional**.

If you wish to use email notifications, download Postfix by running the following command.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Update package list to the latest version and install the OpenSSH Server package alongside the prerequisites it requires using the following command. This is how your web interface panel for GitLab will be hosted.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

You can also install Postfix (STMP Server) if you wish to be able to send email notifications when using GitLab. This is **optional**.

If you wish to use email notifications, download Postfix by running the following command.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Install the OpenSSH Server package alongside the prerequisites it requires using the following command. This is how your web interface panel for GitLab will be hosted.

```
sudo zypper install curl openssh perl
```

Next, ensure that the OpenSSH daemon is enabled through the following commands.
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

You should ensure that the firewall provides the necessary access, if you are using `firewalld`.

Find out it if you are using `firewalld` by running the following command first:

```bash
sudo systemtl status firewalld
```

If you are, make sure you open required ports (80 and 443 by default):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

You can also install Postfix (STMP Server) if you wish to be able to send email notifications when using GitLab. This is **optional**.

If you wish to use email notifications, download Postfix by running the following commands.
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
While installing Postfix, a configuration may appear. In this case, select 'Internet Site' and press enter. Use your Linux server's external DNS for 'mail name' and press enter. If additional screens appear, continue to press enter to accept the default settings.

If you wish to use another solution to send emails please skip this step and [configure an external SMTP server](https://docs.gitlab.com/omnibus/settings/smtp) after GitLab has been installed on your Linux server by following a guide provided by official GitLab Team.
:::

## Step 2: Installing GitLab

After downloading and installing all the required dependencies you are now ready to install GitLab.

In this guide, we will be installing GitLab directly from the official package repositories.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
The following script will add GitLab's repositories to the apt package manager:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Once done, the `gitlab-ee` package can be installed:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
The following script will add GitLab's repositories to the Zypper package manager:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Once done, the `gitlab-ee` package can be installed:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Once this process is complete, you should have GitLab ready to go on your Linux server. Proceed with the following section where you will configure some essential settings to ensure the server is functional.

## Step 3: Configuring GitLab

To ensure everything is functional, you must complete some changes to the configuration file. Begin by opening the GitLab configuration file using your preferred text editor. As an example we wil be using the pre-built `nano` editor.
```
sudo nano /etc/gitlab/gitlab.rb
```

Next, search for the `external_url` line and either enter your domain or enter your Linux Server's IP Address in case you don't have a domain to use with GitLab.

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

Additionally, we recommend inputting your email into the `letsencrypt['contact_emails']` line. This will allow Let's Encrypt to provide you notifications and contact you regarding the automatic and free SSL certificates.

:::note
You need to use a domain if you wish to acquire a free SSL Certificate from Let's Encrypt. You cannot request one directly to your IP Address.
:::

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

:::tip
You can use `CTRL+W` to search for `letsencrypt['contact_emails']` and press enter so that you don't have to search the entire file manually.
:::

Once ready, press `CTRL+X` followed by `Y` and `Enter` to confirm the changed you have made.

Finally, run the following command to reconfigure GitLab with the new configuration options.
```
sudo gitlab-ctl reconfigure
```

This process may take a while because it will initialize GitLab using the updated configuration information, with automated processes. The SSL Certificates will also be issued if a domain has been used.

## Step 4: Accessing the Web Interface

After the initialization, the server should now be accessable via a web browser. Navigate to your website by entering your domain name or IP Address as following.
```
https://[your_domain] OR http://[your_ip_address]
```

On initial entry of the web interface, you will be prompted with a login page.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

To get the admin access at your first login, login as an root user by using `root` as the username.

For the password, you will have to access a file on your Linux server where it is stored. Access the file using the following command and find the `Password` field.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# WARNING: This value is valid only in the following conditions

# 1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the firs$

# 2. Password hasn't been changed manually, either via UI or via command line.

#

# If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[YOUR_PASSWORD_IS_HERE]`

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

Input the username and password on the login page to enter your GitLab dashboard for the first time. You should now be able to access your GitLab panel on your very own Linux server.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

We highly recommend creating a new user and/or changing the password for your `root` user. This can be all done by accessing **Admin** in the bottom-left corner and selecting **Overview->Users**. On this page, you will be able to manage users for your GitLab instance.

## Optional: Setup a firewall with ufw

You can skip this if you don't want to configure a firewall or, for example, already use `firewalld` on OpenSUSE.
Ensure that you allow port 80/443 and port 22.

### Install ufw

If you already have installed `ufw`, you can safely skip this step.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### Open required ports

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Enable firewall

:::warning
This will by default block access to all ports other than the ones allowed. Make sure the whitelist is properly setup before running this command.
:::

For the firewall to take effect, enable it with the following command.

```
sudo ufw enable
```

## Conclusion

Congratulations, you have successfully installed GitLab! If you have any further questions or problems, please contact our support team, who are available to help you every day!

If you wish to perform additional setup, we recommend reading the [Official GitLab Documentation](https://docs.gitlab.com/ee/install/next_steps.html) for next steps.

<InlineVoucher />
