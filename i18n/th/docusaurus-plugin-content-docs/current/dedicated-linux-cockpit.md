---
id: dedicated-linux-cockpit
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Cockpit"
description: "ค้นพบวิธีจัดการเซิร์ฟเวอร์ Linux อย่างมีประสิทธิภาพด้วยเว็บอินเทอร์เฟซของ Cockpit สำหรับการมอนิเตอร์และการดูแลระบบ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Cockpit คือเว็บอินเทอร์เฟซสำหรับจัดการเซิร์ฟเวอร์ Linux หนึ่งเครื่องหรือหลายเครื่อง (คลัสเตอร์) ตั้งแต่การดูล็อกง่ายๆ ไปจนถึงการจัดการ RAID Cockpit มีฟีเจอร์มากมาย  
Cockpit เหมาะสำหรับมือใหม่และผู้ใช้ขั้นสูงที่ต้องการดู/จัดการทุกอย่างที่สำคัญในเวลาสั้นๆ นอกจากนี้ยังสามารถเข้าถึงได้จากแทบทุกอุปกรณ์  
เว็บไซต์โปรเจกต์สามารถเข้าได้ที่ https://cockpit-project.org/  

:::info
คู่มือนี้อธิบายการติดตั้งสำหรับ Debian (ตั้งแต่ Buster)/ สำหรับ Ubuntu (ตั้งแต่ Bionic Beaver) การติดตั้งยังมีในหน้าโปรเจกต์สำหรับ Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux และ Tumbleweed  
:::

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
เมื่อการติดตั้งเสร็จสิ้น แผงควบคุม Cockpit สามารถเข้าถึงได้ผ่าน IP:9090  
การล็อกอินใช้ข้อมูลล็อกอินปกติของเซิร์ฟเวอร์/ผู้ใช้  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)