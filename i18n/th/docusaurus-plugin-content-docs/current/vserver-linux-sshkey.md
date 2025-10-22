---
id: vserver-linux-sshkey
title: "VPS: การสร้างและใช้งาน SSH Key สำหรับเซิร์ฟเวอร์ Linux"
description: "ค้นพบวิธีสร้างและจัดการ SSH Key อย่างปลอดภัยสำหรับเซิร์ฟเวอร์ Linux ของคุณ เพื่อเพิ่มความปลอดภัยและการควบคุมการเชื่อมต่อ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: SSH Key
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## สร้าง SSH Key

เพื่อการเชื่อมต่อที่ปลอดภัยกว่าแบบปกติที่ใช้รหัสผ่าน SSH แนะนำให้ใช้ SSH Key โดยให้เปิดแท็บ "**Access & Security**" ในแดชบอร์ดของเซิร์ฟเวอร์ Linux ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

ใน "**Access & Security**" คุณสามารถสร้างคีย์ได้ด้วยปุ่ม "**Generate SSH Key**"  
เมื่อกดปุ่มนี้ จะมีหน้าต่างป็อปอัปเปิดขึ้นและดาวน์โหลดคีย์ที่สร้างแบบสุ่มลงในเครื่อง PC ของคุณทันที  
เพื่อเพิ่มคีย์นี้เข้าเซิร์ฟเวอร์ ให้กดปุ่ม "**Add Key**"

:::info
สำหรับ Linux VPS คีย์จะถูกเพิ่มเข้าเซิร์ฟเวอร์โดยตรง ส่วนสำหรับ Linux Root Server ต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การเปลี่ยนแปลงมีผล
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

ถ้าต้องการสร้างคีย์เพิ่ม ให้กดปุ่ม "**Generate Key**" ในหน้าต่างเดียวกัน  
ที่ "**Key name**" คุณสามารถตั้งชื่อคีย์เพื่อแสดงในแผงควบคุม ZAP-Hosting ซึ่งช่วยให้จัดการได้ง่ายขึ้นมาก

เมื่อสร้างและเพิ่มคีย์ครบตามต้องการ คีย์เหล่านี้จะแสดงในส่วน "**Access & Security**"

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

ถ้าคุณมี public key ที่สร้างเองภายนอก ไม่ได้ผ่านแผงควบคุมของเรา สามารถเพิ่มได้โดยคลิกที่ไอคอน "**+**"

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

จะมีแผงว่างเปิดขึ้นให้คุณวาง public key ของคุณ จากนั้นกด "**Add Key**" เพื่อเพิ่มคีย์เข้าเซิร์ฟเวอร์และแสดงในแผงควบคุมของเรา

## แปลง OpenSSH เป็น PuTTY Private Key ด้วย PuTTYGen

SSH Key ที่สร้างจากแผงของเราเป็นฟอร์แมต OpenSSH  
ถ้าจะใช้กับ PuTTY ต้องแปลงเป็นฟอร์แมต private key ของ PuTTY ก่อน โดยใช้โปรแกรม "**PuTTYGen**" ที่ติดตั้งมาพร้อมกับ PuTTY

โปรแกรม PuTTYGen จะอยู่ในโฟลเดอร์หลักของ PuTTY โดยปกติจะอยู่ที่ " **C:>Program Files>PuTTY**"

เปิดโปรแกรม PuTTYGen แล้วคลิก "**File**" -> "**Load private key**"

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

จากนั้นเปิดไฟล์ที่ ZAP-Hosting สร้างไว้ ซึ่งอยู่ในโฟลเดอร์ดาวน์โหลดของคุณ

:::info
**สำคัญ:** ให้ตั้งตัวกรองเป็น "**ALL Files**" ตามภาพ เพราะไฟล์ .pri ที่ระบบสร้างจะไม่แสดงถ้าใช้ตัวกรองอื่น
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

เมื่อโหลดไฟล์แล้ว คุณสามารถใส่คอมเมนต์และรหัสผ่านสำหรับคีย์ได้  
ถ้าจะตั้งรหัสผ่าน ให้กรอกรหัสเดียวกันในช่อง "**Key passphrase**" และ "**Confirm passphrase**"  
*หมายเหตุ:* สามารถปล่อยว่างช่องนี้ได้เพื่อสร้างคีย์แบบไม่มีรหัสผ่าน แต่จะปลอดภัยน้อยกว่าและไม่แนะนำ  
เมื่อกรอกครบแล้ว ให้กด "**Save private key**" เพื่อบันทึกคีย์ที่รองรับ PuTTY

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

ตั้งชื่อไฟล์ .ppk และบันทึกไว้เพื่อใช้งานในภายหลัง

## การเชื่อมต่อด้วย SSH Key

เพื่อใช้คีย์นี้กับการเชื่อมต่อ ต้องเชื่อมโยงกับ PuTTY ก่อน  
ให้คลิก "**SSH**" - "**Auth**" - "**Browse...**"

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

เลือกคีย์ที่สร้างด้วย PuTTYGen แล้วกด "**Open**"

เพื่อไม่ต้องทำซ้ำทุกครั้ง แนะนำให้บันทึกการตั้งค่านี้ในเซสชัน  
โดยคลิก "**Session**" - "**Default Settings**" - "**Save**" ตามภาพ

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

ตอนนี้คุณสามารถล็อกอินเข้าเซิร์ฟเวอร์ด้วย PuTTY ได้  
และจะเห็น "**Key comment**" ที่ตั้งไว้ใน PuTTYGen แสดงขึ้นมา

## ปิดการล็อกอินด้วยรหัสผ่าน

SSH Key ถูกสร้างขึ้นเพื่อเพิ่มความปลอดภัย  
ถ้ายังเปิดให้ล็อกอินด้วยรหัสผ่าน SSH อยู่ ความปลอดภัยของเซิร์ฟเวอร์ก็ยังไม่เปลี่ยนแปลง  
ดังนั้นต้องปิดการล็อกอินด้วยรหัสผ่านผ่านการตั้งค่า  
วิธีปิดจะแตกต่างกันระหว่าง Linux VPS กับ Linux Root Server  
ถ้าปิดล็อกอินด้วยรหัสผ่านได้ถูกต้อง การเชื่อมต่อจะทำได้เฉพาะผู้ใช้ที่มี SSH Key ที่คุณสร้างเท่านั้น

### Linux VPS

คุณสามารถปิดล็อกอินด้วยรหัสผ่านได้ง่าย ๆ ในแท็บ Access & Security  
กดปุ่ม **Deactivate Password Login** ที่อยู่ข้างปุ่ม Generate SSH Key  
เมื่อปิดแล้ว จะไม่สามารถล็อกอินด้วยรหัสผ่านได้อีกต่อไป

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

สถานะ "**SSH login via password**" จะเปลี่ยนเป็น "**Inactive**"

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่า SSH Key สำเร็จแล้ว  
ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!

<InlineVoucher />