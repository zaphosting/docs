---
id: vserver-linux-cockpit
title: "ตั้งค่า Cockpit บนเซิร์ฟเวอร์ Linux - จัดการเซิร์ฟเวอร์ของคุณผ่านเว็บอินเทอร์เฟซ"
description: "ค้นพบวิธีจัดการเซิร์ฟเวอร์ Linux อย่างมีประสิทธิภาพด้วยเว็บอินเทอร์เฟซของ Cockpit สำหรับมือใหม่และมือโปร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Cockpit คือเว็บอินเทอร์เฟซสำหรับจัดการเซิร์ฟเวอร์ Linux หนึ่งเครื่องหรือหลายเครื่อง (คลัสเตอร์) ตั้งแต่การดูล็อกง่ายๆ ไปจนถึงการจัดการ RAID Cockpit มีฟีเจอร์ครบครัน  
Cockpit เหมาะสำหรับมือใหม่และผู้ใช้ขั้นสูงที่ต้องการดู/จัดการทุกอย่างที่สำคัญในเวลาอันสั้น นอกจากนี้ยังสามารถเข้าถึงได้จากแทบทุกอุปกรณ์  
เว็บไซต์โปรเจกต์สามารถเข้าได้ที่ https://cockpit-project.org/  

:::info
คู่มือนี้อธิบายการติดตั้งสำหรับ Debian (ตั้งแต่ Buster)/ สำหรับ Ubuntu (ตั้งแต่ Bionic Beaver) การติดตั้งยังมีให้บนหน้าโปรเจกต์สำหรับ Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux และ Tumbleweed ด้วย  
:::

<InlineVoucher />

## การติดตั้ง

อันดับแรก เซิร์ฟเวอร์ต้องอัปเดตก่อน:
```
// อัปเดต
sudo apt update; sudo apt upgrade -y
```
หลังจากนั้นก็สามารถติดตั้งได้เลย: 
```
// ติดตั้ง Cockpit
sudo apt install cockpit -y
```
เมื่อการติดตั้งเสร็จสิ้น แผงควบคุม Cockpit สามารถเข้าถึงได้ผ่าน IP:9090  
การล็อกอินใช้ข้อมูลล็อกอินปกติของเซิร์ฟเวอร์/ผู้ใช้  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า Cockpit เรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!  

<InlineVoucher />