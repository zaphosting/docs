---
id: vserver-windows-docker
title: "Setup Docker on a Windows Server - Run and Manage Containers on Your Infrastructure"
description: "Discover how to deploy and manage applications efficiently with Docker containers for seamless scaling and updates → Learn more now"
sidebar_label: Install Docker
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Docker is an open platform for developing, shipping, and running applications inside containers. A container packages an application with all its dependencies into a standardized unit that can run reliably across different environments. 

This approach removes issues caused by differences between development, testing, and production systems. With Docker, applications can be deployed quickly, scaled efficiently and updated without downtime.

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Prerequisites

Before installing **Docker**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 4 GB         | 4 GB                       |
| Disk space | 10 GB        | 25 GB                      |



## Installation

To set up Docker on Windows Server, download and run the PowerShell script `install-docker-ce.ps1`. It enables the OS features required for containers and installs the Docker runtime. Open PowerShell as admin and execute the following command: 

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

The script enables container related Windows features, installs Docker Engine and the Docker CLI and registers the Docker service for automatic start.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

The system will restart during installation and should continue automatically afterwards. After the restart, sign in and run the same command again if the script instructs you to do so so the service completes initialization. Once the script has been completed, the output will look like this:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```



## Configuration

### Start and stop docker

Docker runs as a service on Windows. After installation it starts automatically. To control it manually:

```
Start-Service docker    # Start the Docker service
Stop-Service docker     # Stop the Docker service
Restart-Service docker  # Restart the Docker service
```



### Start and stop container

Start a container with `docker run`. Example: IIS web server mapping port 80 in the container to host port 8080:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```



### Check container status

Check container status with:

```
docker ps        # Running containers
docker ps -a     # All containers, including stopped
docker inspect web   # Detailed info
docker logs web      # Container logs
```



#### Ressourcen und Status

```
docker stats            # Live CPU/RAM/IO
```




## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Docker on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Docker.com](https://Docker.com/) - Official Website
- [docs.docker.com](https://docs.docker.com/) - Docker Documentation

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂