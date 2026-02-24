---
id: vserver-linux-ts6
title: "Setup TeamSpeak 6 Server on a Linux Server - Deploy Your Own Voice Platform"
description: "Discover how to set up and optimize the TeamSpeak 6 Server for reliable hosting and performance → Learn more now"
sidebar_label: Install Teamspeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In summer 2025, TeamSpeak released the **Beta version** of the **TeamSpeak 6 Server**. Now you can experience the next generation of TeamSpeak firsthand! 

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Prerequisites

Before installing the **Teamspeak 6 Server**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 1 GB         | 4 GB                       |
| Disk space | 1 GB         | 25 GB                      |



## Preparation

Before setting up the **TeamSpeak 6 Server**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. For quick, easy, and recommended installation, we recommend using Docker. To do this, you must install the Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Teamspeak 6 Server application. 

The next step is to create the Docker Compose file `docker-compose.yml` for the TeamSpeak 6 Server. You can choose any directory, but in this example the file will be created under `/opt/containers/ts6/`. For this, the official TeamSpeak Compose file is used:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Voice Port
      - "30033:30033/tcp" # File Transfer
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navigate to the directory where the file should be created and create the file. To do this, use the command `nano docker-compose.yml` and paste the content there.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


To start the Docker container and the TeamSpeak 6 Server, run the following Docker Compose command:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Now the Docker container for the TeamSpeak 6 Server will start. By default, it does not run persistently yet. On the first startup, you will see **important information** about the **Server Query Admin Account** and the **privilege key**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Make sure to store this information safely, as it will not be shown again on subsequent starts. Afterwards, stop the container again using `CTRL+C`.



## Configuration

You can adjust additional settings for the TeamSpeak 6 Server using **environment variables** in the Docker Compose file. This allows you to configure the server according to your needs. A full list of available options can be found in the official [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) documentation. 

Example snippet in `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Server operations

To keep the TeamSpeak 6 Server running in the background, start the container with the following command:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

To stop the TeamSpeak 6 Server, stop the container with the following command:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Establishing connection

Once the TeamSpeak 6 Server is up and running, you can connect using the TeamSpeak 6 Client. Simply use the IP address of your server along with the correct port. Enter these details in the client to connect to your server and start testing.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Teamspeak 6 Server on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Official Website](https://teamspeak.com/en/) - Information and downloads for TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) - User support and discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Report bugs and track open issues

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂