---
id: vserver_linux_docker
title: vServer: Installing Docker on your server
description: Information on how to install Docker on your vServer from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Docker
---

## What is Docker anyway?

Docker is a lightweight, open source virtualization software to provide services or applications in isolation on a single system. In contrast to real virtual machines, no extra operating system is emulated or hosted for this, but rather only an application environment within the host system. This not only saves resources in general, but at the same time causes a low overhead compared to full virtualization.

## How do I install Docker on my Linux server?

> In this example we set up Docker on a Debian 9 system and install it via package sources. There may be deviations in another operating system!

Step 1: Connect to your server with Putty.

Step 2: As far as you are connected to your server via Putty, the GPG key, i.e. the key file from Docker, must be added to our system at the beginning:
```
apt-key adv –keyserver hkp://p80.pool.sks-keyservers.net:80 –recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```
Then we add Docker to our package sources so that we can install the package via apt-get.
```
echo "deb https://apt.dockerproject.org/repo debian-jessie main" >> /etc/apt/sources.list.d/docker.list 
```
Step 3: Now we can download Docker.
It is **important** that we still enable apt-get to download packages from HTTP (S) pages.
Here is the command:
```
apt-get -y install apt-transport-https ca-certificates 
```
Press enter and let it run. Then enter and execute the following commands:
```
apt-get update && apt-get -y install docker-engine
systemctl start docker
systemctl enable docker
```

## Check if the Docker installation was successful

When all of that is done, we can see if Docker is running:

```
systemctl status docker 
```

![](https://screensaver01.zap-hosting.com/index.php/s/492kc5RBqcHf5qF/preview)

If it looks like this and it says "**Active (running)**" then Docker was installed completely without any problems.
With a **docker run hello-worl**d you can then check whether Docker is also running correctly.
The output should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/gbFj5W2rnrYzdom/preview)

Docker installation was successful.
Now you can get started and use Docker!
