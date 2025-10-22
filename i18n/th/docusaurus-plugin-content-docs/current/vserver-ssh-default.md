---
id: vserver-ssh-default
title: "VPS: จัดการค่า SSH Keys เริ่มต้นในโปรไฟล์"
description: "ค้นพบวิธีตั้งค่า SSH Key อัตโนมัติเพื่อเข้าถึงเซิร์ฟเวอร์ได้เร็วขึ้นและติดตั้งผลิตภัณฑ์ได้ง่ายขึ้นกับ ZAP-Hosting → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: SSH Keys เริ่มต้น
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
หนึ่งในฟีเจอร์ใหม่ล่าสุดของเว็บอินเทอร์เฟซ ZAP-Hosting คือความสามารถในการเพิ่ม SSH Keys เริ่มต้นในบัญชี ZAP-Hosting ของคุณผ่านเว็บไซต์ ข้อดีเจ๋งๆ คือ SSH Keys ที่ตั้งค่าไว้ในหน้าประวัติของคุณ จะถูกตั้งค่าโดยอัตโนมัติและใช้ในระหว่างการตั้งค่าผลิตภัณฑ์ครั้งแรกหรือการติดตั้งระบบปฏิบัติการใหม่ ช่วยประหยัดเวลาของคุณเพราะไม่ต้องตั้งค่า SSH Keys ด้วยตัวเอง

<InlineVoucher />

## ความต้องการ
เพื่อใช้ฟีเจอร์นี้ คุณต้องมี SSH Key ที่สร้างไว้แล้ว ถ้าคุณมี SSH Key พร้อมแล้ว สามารถไปต่อในหัวข้อต่อไปได้เลย

สำหรับการสร้าง SSH Key เราแนะนำให้ไปที่ส่วน **Information->Access & Security** ในเว็บอินเทอร์เฟซของ vServer ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/N9FxTpdfibwCWSD/preview)

ที่นี่ คุณจะเห็นปุ่มสีเขียว **Generate SSH Key** เมื่อกดปุ่มนี้ SSH Private Key ของคุณจะถูกดาวน์โหลดลงเครื่อง PC โดยอัตโนมัติ นี่คือกุญแจที่คุณจะใช้เชื่อมต่อกับเซิร์ฟเวอร์เมื่อ SSH ถูกตั้งค่าเรียบร้อยแล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/tdYfxJYNBFC2R9k/preview)

ตอนนี้คุณควรเก็บ Public Key ที่แสดงในหน้าต่างนี้ไว้ เพราะนี่คือสิ่งที่คุณจะต้องส่งตอนสร้าง SSH Key ในโปรไฟล์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/Tc9MEGamAC9dDF3/preview)

ไปต่อในหัวข้อต่อไปเมื่อคุณพร้อมแล้ว

## การจัดการ SSH Key ในโปรไฟล์
การจัดการ SSH Keys เริ่มต้นในบัญชีของคุณง่ายมาก ไปที่ **[หน้าประวัติ ZAP-Hosting ของคุณ](https://zap-hosting.com/en/customer/home/profile/)** แล้วเลื่อนลงมาจนเจอส่วน **Standard SSH Keys**

![](https://screensaver01.zap-hosting.com/index.php/s/QzefcYZWPGz3rJr/preview)

### การเพิ่มกุญแจใหม่
เพื่อเพิ่มกุญแจ ให้กดไอคอนบวกสีเขียวเพื่อเปิดหน้าต่างสร้าง ในหน้าต่างนี้ ให้ตั้งชื่อที่เหมาะสมสำหรับ SSH Key ของคุณก่อน

จากนั้น วาง SSH Public Key ของคุณในช่องที่สอง SSH Key ของคุณควรอยู่ในรูปแบบ OpenSSH โดยเริ่มต้นด้วย `ssh-rsa` และลงท้ายด้วยซอฟฟิกซ์ เมื่อพร้อมแล้ว กดปุ่มสีเขียว **Save** เพื่อเพิ่มกุญแจ

![](https://screensaver01.zap-hosting.com/index.php/s/CBTcDSiBLfNYi2R/preview)

:::tip
ตรวจสอบให้แน่ใจว่าคุณส่ง **SSH Public Key** ไม่ใช่ SSH Private Key นะครับ SSH Private Key ใช้สำหรับล็อกอินเพื่อยืนยันตัวตนกับ Public Key
:::

คุณได้เพิ่ม SSH Key เริ่มต้นในบัญชี ZAP-Hosting ของคุณเรียบร้อยแล้ว

### การแก้ไขหรือลบกุญแจ
ถ้าต้องการแก้ไขกุญแจ ให้กดไอคอนรูปตาสีฟ้าเพื่อเปิดหน้าต่างดูรายละเอียด ในหน้านี้คุณสามารถดูข้อมูลที่ตั้งไว้และแก้ไขแล้วบันทึกได้เลย

ส่วนถ้าต้องการลบกุญแจ ให้กดไอคอนถังขยะสีแดงเพื่อเอากุญแจนั้นออก

![](https://screensaver01.zap-hosting.com/index.php/s/56mPcDswpZBaHms/preview)

<InlineVoucher />