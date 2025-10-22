---
id: gameserver-database-external-access
title: 'เซิร์ฟเวอร์เกม: การเข้าถึงฐานข้อมูลภายนอก'
description: "ค้นพบวิธีจัดการฐานข้อมูล MySQL ของ ZAP-Hosting สำหรับเซิร์ฟเวอร์เกมด้วยเครื่องมือต่างๆ เช่น Navicat หรือ HeidiSQL → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การเข้าถึงฐานข้อมูลภายนอก
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ZAP-Hosting มีฐานข้อมูล MySQL รวมอยู่ในผลิตภัณฑ์เซิร์ฟเวอร์เกม ซึ่งสามารถจัดการได้ทั้งภายในผ่าน phpMyAdmin หรือภายนอกผ่านเครื่องมือจัดการ MySQL อย่าง Navicat หรือ HeidiSQL

ข้อมูลบัญชีผู้ใช้สำหรับเข้าถึงฐานข้อมูลจำเป็นสำหรับการนี้ คุณสามารถหาได้ในแผงควบคุมเซิร์ฟเวอร์เกมในส่วนฐานข้อมูล โดยต้องใช้ข้อมูลเกี่ยวกับ **เซิร์ฟเวอร์/IP**, **ฐานข้อมูล**, **ผู้ใช้**, **รหัสผ่าน** และพอร์ตเริ่มต้น **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## การเตรียมตัว

อันดับแรกเราต้องมีซอฟต์แวร์ ในตัวอย่างนี้เราจะแนะนำ [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) หรือ [HeidiSQL](https://www.heidisql.com/download.php) หลังจากดาวน์โหลดไฟล์แล้ว ให้รันไฟล์และทำตามขั้นตอนการติดตั้ง เมื่อเสร็จแล้วก็สามารถเปิดโปรแกรมและตั้งค่าการเชื่อมต่อกับฐานข้อมูลได้เลย

## HeidiSQL

เพื่อสร้างการเชื่อมต่อใน HeidiSQL ให้เราสร้างการเชื่อมต่อใหม่โดยกด "New"

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

ที่ช่อง Hostname / IP ให้ใส่ชื่อฐานข้อมูลของคุณ เช่น ในตัวอย่างคือ "mysql-mariadb-5-101.zap-hosting.com"  
ชื่อผู้ใช้และรหัสผ่านก็ให้ใส่ตามข้อมูลที่ได้มา ส่วนพอร์ตให้ใช้ค่าเริ่มต้นคือ 3306

จากนั้นกด "Open" เพื่อเชื่อมต่อ

## Navicat

เพื่อสร้างการเชื่อมต่อใน Navicat ให้สร้างการเชื่อมต่อใหม่ ในส่วน **Connection** ให้เลือก **MySQL** จากนั้นจะมีหน้าต่างป๊อปอัพขึ้นมาให้กรอกข้อมูลฐานข้อมูล

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

**Connection Name** ใช้สำหรับตั้งชื่อเพื่อดูภาพรวมฐานข้อมูล สามารถตั้งชื่ออะไรก็ได้ ส่วนข้อมูลอื่นๆ ให้ใส่ตามที่ได้จากแผงควบคุมเซิร์ฟเวอร์เกม จากนั้นกด **OK** เพื่อเสร็จสิ้นการตั้งค่า การเชื่อมต่อจะปรากฏในแถบฐานข้อมูลทางซ้ายมือ ให้ดับเบิลคลิกที่ฐานข้อมูลของคุณ หรือคลิกขวาแล้วเลือก "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

หลังจากนั้นฐานข้อมูลจะเปิดขึ้นพร้อมกับตารางฐานข้อมูลทั้งหมด คุณสามารถแก้ไขหรือจัดการฐานข้อมูลได้เหมือนกับ phpMyAdmin ทั้งการคลิกและใช้คำสั่ง SQL

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## สรุป

คุณได้เชื่อมต่อกับฐานข้อมูลของคุณสำเร็จแล้ว และสามารถจัดการได้ทันที หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />