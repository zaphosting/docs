---
id: vserver-linux-cockpit
title: "VPS: การติดตั้ง Cockpit"
description: "ค้นพบวิธีจัดการเซิร์ฟเวอร์ Linux อย่างมีประสิทธิภาพด้วยเว็บอินเทอร์เฟซของ Cockpit สำหรับมือใหม่และมือโปร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Cockpit
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Cockpit คือเว็บอินเทอร์เฟซสำหรับจัดการเซิร์ฟเวอร์ Linux หนึ่งเครื่องหรือหลายเครื่อง (คลัสเตอร์) ตั้งแต่การดูล็อกง่ายๆ ไปจนถึงการจัดการ RAID Cockpit มีฟีเจอร์มากมาย  
Cockpit เหมาะสำหรับมือใหม่ แต่ก็เหมาะกับผู้ใช้ขั้นสูงที่อยากเห็น/จัดการทุกอย่างที่สำคัญได้ในเวลาสั้นๆ นอกจากนี้ยังสามารถเข้าถึงได้จากแทบทุกอุปกรณ์  
เว็บไซต์โปรเจกต์สามารถเข้าได้ที่ https://cockpit-project.org/  

:::info
คู่มือนี้อธิบายการติดตั้งสำหรับ Debian (ตั้งแต่ Buster) / สำหรับ Ubuntu (ตั้งแต่ Bionic Beaver) การติดตั้งยังมีในหน้าโปรเจกต์สำหรับ Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux และ Tumbleweed ด้วย  
:::

<InlineVoucher />

## การติดตั้ง

อันดับแรก ต้องอัปเดตเซิร์ฟเวอร์ก่อน:
```
// อัปเดต
sudo apt update; sudo apt upgrade -y
```
หลังจากนั้นก็สามารถติดตั้งได้เลย: 
```
// ติดตั้ง Cockpit
sudo apt install cockpit -y
```
เมื่อติดตั้งเสร็จแล้ว สามารถเข้าถึงแผงควบคุม Cockpit ผ่าน IP:9090  
การล็อกอินใช้ข้อมูลล็อกอินปกติของเซิร์ฟเวอร์/ผู้ใช้  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า Cockpit เรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!  

<InlineVoucher />