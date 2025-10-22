---
id: vserver-windows-python
title: 'VPS: การติดตั้ง Python'
description: "เรียนรู้วิธีติดตั้ง Python runtime บนเซิร์ฟเวอร์ Windows และเริ่มรันโปรแกรม Python ได้อย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Python
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คู่มือนี้จะบอกขั้นตอนการติดตั้ง Python runtime บน Windows ขั้นตอนด้านล่างต้องทำผ่าน RDP ถ้าคุณยังไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน RDP ลองดู [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเราได้เลย  
<InlineVoucher />

## การติดตั้ง

### ขั้นตอนที่ 1: ดาวน์โหลดไฟล์
เปิดเบราว์เซอร์ที่คุณชอบ (ผมจะใช้ Chrome สำหรับคู่มือนี้) แล้วไปที่ [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

ตอนนี้คลิกที่ปุ่ม `Download Python [version]` แล้วรอให้ดาวน์โหลดเสร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### ขั้นตอนที่ 2: ติดตั้ง Python
รันตัวติดตั้งโดยการคลิกที่ไฟล์ จากนั้นจะมีหน้าต่างให้ตั้งค่าการติดตั้ง ให้แน่ใจว่าได้ติ๊กถูกที่ช่อง `Add python.exe to PATH` ด้านล่าง (จะช่วยให้รันไฟล์ Python ง่ายขึ้นในภายหลัง) แล้วกดปุ่ม `Install Now`

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### ขั้นตอนที่ 3: เสร็จสิ้นการติดตั้ง
รอให้ไฟล์ทั้งหมดติดตั้งเสร็จ อดทนหน่อยนะครับ อาจใช้เวลาสักพัก :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

เมื่อเสร็จแล้ว กด `Close` แล้วคุณก็พร้อมใช้งาน Python บนเซิร์ฟเวอร์ของคุณได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## การรันโค้ด

ตอนนี้ที่คุณติดตั้ง Python บนเซิร์ฟเวอร์เรียบร้อยแล้ว คุณก็สามารถเริ่มรันโปรแกรม Python ของคุณได้เลย

### โหมด Interpreter

การรันคำสั่ง `python` ใน Command Prompt หรือ PowerShell จะเปิด Python interpreter ขึ้นมา คุณสามารถเขียนโค้ด Python ที่ถูกต้องหลัง `>>>` แล้วกด `Enter` เพื่อรันโค้ดนั้นได้ เมื่อเสร็จแล้วสามารถปิด interpreter ได้โดยพิมพ์ `exit()` หรือปิดหน้าต่างคอนโซลเลยก็ได้

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### การรันไฟล์ .py

ถ้าต้องการรันไฟล์ Python `.py` ให้ใช้คำสั่ง `python3 [filename].py` โดยแทนที่ `[filename]` ด้วยชื่อไฟล์หรือพาธของไฟล์ที่ต้องการรัน ซึ่งทำได้ผ่าน Command Prompt หรือ PowerShell

:::tip
โปรแกรมส่วนใหญ่ที่คุณหาได้ออนไลน์มักจะรันด้วยคำสั่ง `python3 main.py` เพราะ `main.py` เป็นจุดเริ่มต้นทั่วไปของโปรแกรม Python หลายๆ ตัว
:::

คุณยังสามารถรันไฟล์ Python (.py) ได้ง่ายๆ โดยการเปิดไฟล์นั้น หรือคลิกขวาแล้วเลือกรัน Python ผ่าน Windows ได้เลย

## สภาพแวดล้อมเสมือน (Virtual environments)

เวลาที่เขียนโปรแกรม Python คุณอาจต้องติดตั้งแพ็กเกจเสริมจาก pip ซึ่งสามารถติดตั้งแบบทั่วระบบให้ทุกสคริปต์ `.py` ใช้งานได้ หรือจะสร้างสภาพแวดล้อมเสมือน (venv) ก็ได้

### การสร้าง venv

ก่อนอื่นให้ไปที่โฟลเดอร์ที่คุณอยากตั้ง venv ผ่านตัวจัดการไฟล์ แล้วรันคำสั่ง `python -m venv .` เพื่อสร้างไฟล์ที่จำเป็นในตำแหน่งนั้น

### การเปิดใช้งาน & ปิดใช้งาน

ถ้าจะรันคำสั่งอย่าง `pip install` ใน venv ต้องเปิดใช้งานก่อนโดยรัน `.\Scripts\activate` ตอนนี้คอนโซลจะทำงานใน venv เท่านั้น และสคริปต์จะเข้าถึงแพ็กเกจที่ติดตั้งในพื้นที่นี้เท่านั้น

เมื่อทำงานเสร็จแล้ว สามารถออกจาก venv ได้โดยรันคำสั่ง `deactivate`

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่า Python บน VPS ของคุณเรียบร้อยแล้ว ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />