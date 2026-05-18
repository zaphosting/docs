---
id: dedicated-linux-java
title: "ตั้งค่า Java บนเซิร์ฟเวอร์ Linux - รันแอปและบริการที่ใช้ Java"
description: "เรียนรู้วิธีติดตั้ง Java บนระบบ Linux ต่างๆ เพื่อรันแอป Java ได้อย่างลื่นไหลและตั้งค่าสภาพแวดล้อมให้พร้อม → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Java
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Java เป็นภาษาการเขียนโปรแกรมยอดนิยมที่ใช้ทั่วโลกสำหรับโปรแกรมและบริการมากมาย เพื่อรันโปรแกรมที่ใช้ Java เหล่านี้ จำเป็นอย่างยิ่งที่ต้องติดตั้ง Java บนระบบ ในบทความนี้คุณจะได้เรียนรู้วิธีติดตั้ง Java บนระบบปฏิบัติการ Linux ที่เรามีให้บริการ



## การเตรียมตัว

ก่อนเริ่มติดตั้ง Java จริงๆ สิ่งสำคัญคือต้องแน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว สำหรับขั้นตอนนี้เราจะเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH หากคุณยังไม่รู้ว่า SSH คืออะไรและใช้งานยังไง ลองดูในคู่มือนี้ได้เลย: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

เมื่อเชื่อมต่อแล้ว สามารถอัปเดตระบบด้วยคำสั่งต่อไปนี้ ขึ้นอยู่กับระบบปฏิบัติการที่ใช้:

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



## การติดตั้ง

หลังจากเตรียมระบบเสร็จแล้ว ก็เริ่มติดตั้ง Java ได้เลย โดยใช้คำสั่งตามระบบปฏิบัติการดังนี้:

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



## ตรวจสอบเวอร์ชัน

คุณสามารถตรวจสอบว่าการติดตั้งสำเร็จหรือไม่ด้วยคำสั่ง **java --version** ผลลัพธ์ควรจะออกมาในลักษณะนี้:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

ในกรณีนี้ Java 11 ถูกติดตั้งเรียบร้อยบนระบบของคุณแล้ว ตอนนี้คุณก็สามารถรันแอป Java บนระบบของคุณได้อย่างง่ายดายแล้ว