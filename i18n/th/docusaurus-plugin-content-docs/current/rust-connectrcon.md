---
id: rust-connectrcon
title: "Rust: การเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน RCON"
description: "ค้นพบวิธีการจัดการเซิร์ฟเวอร์ของคุณจากระยะไกลด้วย RCON เพื่อสั่งงานและควบคุมได้อย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เชื่อมต่อผ่าน RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## RCON คืออะไร?

RCON คือโปรโตคอลสำหรับสั่งคำสั่งบนเซิร์ฟเวอร์โดยไม่ต้องเข้าถึงคอนโซลโดยตรง

<InlineVoucher />

### เปิดใช้งาน WebRCON

อันดับแรกก่อนจะเชื่อมต่อได้ คุณต้องแน่ใจว่าเปิดใช้งาน Web RCON แล้ว  
เพื่อเปิดใช้งาน ให้ไปที่แท็บ **Settings**

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

จากนั้นเปิดใช้งานได้เลยบนหน้านี้  
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
จำเป็นต้องรีสตาร์ทเซิร์ฟเวอร์เพื่อให้การตั้งค่ามีผล  
:::

### ติดตั้งโปรแกรม RCON

คุณจะต้องเชื่อมต่อผ่านโปรแกรม RCON มีหลายโปรแกรมให้เลือกใช้  
สำหรับตัวอย่างนี้ และแนะนำให้ใช้ คุณสามารถดาวน์โหลด [RustAdmin](https://www.rustadmin.com/)

สามารถติดตั้งได้ง่าย ๆ ด้วยปุ่มบนเว็บไซต์ของพวกเขาเลย  
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## เชื่อมต่อผ่าน RCON

เมื่อเปิด WebAdmin แล้ว กดที่ **Server** ด้านบน จากนั้นกด **Connect**

:::info
เซิร์ฟเวอร์ของคุณต้องอยู่ในสถานะ ONLINE เต็มที่เพื่อให้ RCON เข้าถึงได้  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

จากนั้นจะถูกพาไปยังหน้าการตั้งค่า  
ที่นี่ให้กรอกข้อมูลเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
เคล็ดลับ: พอร์ต RCON และรหัสผ่าน RCON ของคุณหาได้ในแท็บ **Settings** ที่คุณเปิดใช้งาน WebRCON ไว้  
:::

เมื่อกรอกข้อมูลเสร็จแล้ว ให้บันทึกการตั้งค่า

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

แล้วกด Server -> Connect

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

ถ้าเชื่อมต่อสำเร็จ จะเห็นคำว่า **Connected** สีเขียวที่ด้านล่าง

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

ตอนนี้คุณก็สามารถใช้ RCON เพื่อจัดการเซิร์ฟเวอร์เกมของคุณได้แล้ว! :)

<InlineVoucher />