---
id: vserver-linux-java
title: "VPS: การติดตั้ง Java"
description: "เรียนรู้วิธีติดตั้งและตั้งค่า Java บนระบบ Linux ต่างๆ เพื่อให้โปรแกรมของคุณทำงานได้อย่างราบรื่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Java
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Java เป็นภาษาการเขียนโปรแกรมยอดนิยมที่ใช้ทั่วโลกสำหรับโปรแกรมและบริการมากมาย เพื่อให้โปรแกรมที่ใช้ Java ทำงานได้ จำเป็นอย่างยิ่งที่ต้องติดตั้ง Java บนระบบ ในบทความนี้คุณจะได้เรียนรู้วิธีติดตั้ง Java บนระบบของคุณสำหรับระบบปฏิบัติการ Linux ที่ให้บริการ

<InlineVoucher />

## การเตรียมตัว

ก่อนเริ่มการติดตั้ง Java จริงๆ สิ่งสำคัญคือต้องแน่ใจว่าระบบของคุณอัปเดตล่าสุดแล้ว สำหรับการนี้เราจะเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH หากคุณไม่รู้ว่า SSH คืออะไรและใช้งานอย่างไร โปรดดูที่คู่มือต่อไปนี้: [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md)

เมื่อเชื่อมต่อแล้ว สามารถอัปเดตระบบด้วยคำสั่งต่อไปนี้ ขึ้นอยู่กับระบบปฏิบัติการ:

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

หลังจากเตรียมตัวเสร็จแล้ว ก็สามารถเริ่มติดตั้ง Java ได้เลย ขึ้นอยู่กับระบบปฏิบัติการ ให้รันคำสั่งดังนี้:

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

คุณสามารถตรวจสอบว่าการติดตั้งสำเร็จหรือไม่ด้วยคำสั่ง **java --version** ผลลัพธ์ควรจะคล้ายกับตัวอย่างนี้:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า Java เรียบร้อยแล้ว! หากคุณมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!



<InlineVoucher />