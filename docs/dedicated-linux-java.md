---
id: dedicated-linux-java
title: "Setup Java on a Linux Server - Run Java Based Applications and Services"
description: "Learn how to install Java on various Linux systems to run Java applications smoothly and ensure your environment is properly set up → Learn more now"
sidebar_label: Install Java
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Java is a very popular programming language that is used worldwide for numerous programs and services. To run these programs based on Java it is absolutely necessary that Java is installed on the system. In the following you will learn how to install Java on your system for the offered Linux operating systems. 



## Preparation

Before starting the actual Java installation, it is important to make sure that the system is up to date. For this we connect to the server via SSH. If you don't know what SSH is and how to use it, please have a look at the following guide: [Initial access (SSH)](vserver-linux-ssh.md)

Once there, the system can be updated with the following command, depending on the operating system:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```



## Installation

After finishing the preparation, the Java installation can now be started. Depending on the operating system, the following commands must be executed:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```



## Version-Check

You can check if the installation was successful with the **java --version** command. The output should look similar to the following:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

In this case Java 11 was successfully installed on your system. Now you can easily run your Java applications on your system. 

