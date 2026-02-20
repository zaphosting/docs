---
id: dedicated-linux-docker
title: "Setup Docker on a Linux Server - Run and Manage Containers on Your Infrastructure"
description: "Discover how to install Docker on your Linux server to run isolated applications efficiently and optimize resource use → Learn more now"
sidebar_label: Install Docker
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

Docker is a lightweight, open source virtualization software to provide services or applications in isolation on a single system. In contrast to real virtual machines, no extra operating system is emulated or hosted for this, but rather only an application environment within the host system. This not only saves resources in general, but at the same time causes a low overhead compared to full virtualization. In this guide, we will cover the process of installing Docker onto your server.



## Preparation

To begin, you must connect to your Linux server via SSH. Please have a look at our [Initial access (SSH)](dedicated-linux-ssh.md) guide if you require assistance with this. Throughout this guide, we will be using Ubuntu as the Linux distribution.

### Enable Docker Compatibility

You must enable **Docker Compatibility** on your web interface in order to allow Docker contaienrs to work, otherwise you will receive `Permission Denied` errors.

Head over to the **Settings** section on your server's web interface panel, enable the **Docker Compatibility** option and save.

![](https://screensaver01.zap-hosting.com/index.php/s/o5t82kKM38r2MwY/preview)

Once saved, ensure that you restart your server before proceeding.

## Installation

Now that you are connected to your Linux server, you can proceed with the installation methods. Select from one of the Linux repositories below to view the relevant installation steps.

<Tabs>
<TabItem value="ubuntu/debian" label="Ubuntu & Debian" default>

To begin, you will have to add Docker's package through the use of `apt` and set it up. This will allow you to easily install and update Docker from the repository in the future.

Use the following commands to add Docker's official GPG key to your repository list.
```
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Once these have been setup, you will have to add the repository to the `apt` sources, through the following command.
```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Now that you have added the Docker repository to your sources, run the `apt-get` update command to fetch the changes.
```
sudo apt-get update
```

By this stage, you have successfully setup the Docker `apt` repository. As the final step, you will have to install the Docker pacakages. You can install the latest version using the following command.
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</TabItem>

<TabItem value="fedora" label="Fedora">

To begin, you should install the `dnf-plugins-core` pacakge which helps in managing repositories.
```
sudo dnf -y install dnf-plugins-core
```

With the package now installed, you should add the Docker repository and install it using the following command.
```
sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

Docker should now be installed. As a final step, you need to start and enable it before it can function.
```
sudo systemctl enable --now docker
```

</TabItem>
</Tabs>

To verify that your installation is successful, try running the **hello-world** image using the following command.
```
sudo docker run hello-world
```

Upon success, you should see a useful hello message in chat with some basic information. If you are facing `Permission Denied` errors, please ensure that you enabled the **Docker Compatibility** option on your web interface and restarted the server as described in the preparation section.

![](https://screensaver01.zap-hosting.com/index.php/s/tzJwpYRYb9Mmryo/preview)

You have successfully installed Docker onto your Linux server.

## Post-Installation Setup

With Docker now installed on your server, you may choose to perform some additional setup to remove the need for sudo when executing Docker commands and to start Docker upon server boot.

### Manage Docker without Sudo

You can remove the need to prefix all Docker-related commands with the `sudo` command by creating a new Docker group and adding your users to it. This improves convenience, however be cautious that this indirectly grants root-level privileges to the user.

Create the `docker` group and add your current user to the group using the following commands.
```
# Create Docker group
sudo groupadd docker

# Add current user to the Docker group
sudo usermod -aG docker $USER
```

With this now done, we recommend restarting your server to ensure that the group membership is revaluated by the server. Alternatively, you can use `newgrp docker` to do this.

Now verify that you can run Docker commands without `sudo` privileges by running the `docker run hello-world` command again.

:::tip
Sometimes you may receive an error regarding a config file if you previously ran the command with `sudo` privileges. To resolve this, simply use `rmdir ~/.docker/` to delete the Docker directory, which will be automatically re-created upon next command usage.
:::

If the command runs as expected, that means you have successfully setup your Docker to run without the need for using `sudo` privileges.

### Start Docker on Boot

You can setup Docker to automatically start upon server boot through the use of `systemd` which is used by most Linux distributions.

:::tip
On both Ubuntu & Debian, Docker is set to automatically start upon boot by default. If you are using these two distributions, you don't need to do anything else.
:::

You can enable the Docker service to run on boot simply by running the following commands.
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

Similarly, to disable the service on boot replace `enable` with `disable`. You can also manage the service using a variety of `systemctl` sub-commands which includes the following.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

## Conclusion

Congratulations, you have successfully installed and configured Docker onto your Linux server! If you have any further questions or problems, please contact our support team, who are available to help you every day!


