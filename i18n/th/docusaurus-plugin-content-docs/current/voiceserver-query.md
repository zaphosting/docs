---
id: voiceserver-query
title: "เซิร์ฟเวอร์เสียง: เข้าถึง TeamSpeak Query"
description: "ค้นพบวิธีจัดการเซิร์ฟเวอร์ TeamSpeak ของคุณจากภายนอกด้วย Query Login เพื่อการควบคุมและบริหารเซิร์ฟเวอร์ที่มีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Query Login
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การเข้าสู่ระบบ query ของ TeamSpeak ช่วยให้คุณเข้าถึงอินเทอร์เฟซ server query ซึ่งคุณสามารถจัดการเซิร์ฟเวอร์ TeamSpeak ของคุณจากภายนอกผ่านคำสั่งต่างๆ ได้

:::warning การเข้าถึง Server Admin Query
ผลิตภัณฑ์เซิร์ฟเวอร์ TeamSpeak ของเราไม่มีการเข้าถึง Server Admin Query 
:::

<InlineVoucher />

## รายละเอียดการเข้าสู่ระบบ

<Tabs>
<TabItem value="Webinterface" label="ผลิตภัณฑ์เซิร์ฟเวอร์ TeamSpeak" default>

เพื่อความปลอดภัย การเข้าสู่ระบบ **Server Admin Query** จะไม่สามารถใช้ได้กับ **ผลิตภัณฑ์เซิร์ฟเวอร์ TeamSpeak** แต่ถ้าคุณมีสิทธิ์แอดมินบนเซิร์ฟเวอร์ TeamSpeak ของคุณ คุณสามารถสร้าง Query Login ของตัวเองได้ตามขั้นตอนด้านล่าง

:::info
ฟีเจอร์อย่างการนำเข้า snapshot, เปลี่ยนจำนวนสล็อต/พอร์ต และอื่นๆ จะไม่สามารถใช้งานได้ การตั้งค่าเหล่านี้ถูกกำหนดไว้ล่วงหน้าโดยเราและไม่สามารถปรับแต่งเองได้ 
:::

ในการสร้าง Query Login ของคุณเอง ให้คลิกที่ "Server Query Login" ใน Teamspeak Client ภายใต้เมนู Tools
จากนั้นให้ตั้งชื่อสำหรับการเข้าสู่ระบบ ซึ่งจะเป็นชื่อ login ด้วย เช่น "MyQueryLogin":

![](https://screensaver01.zap-hosting.com/index.php/s/gMeQtSTkrtRzbk7/preview)

หลังจากกดยืนยันด้วย "OK" รหัสผ่านจะปรากฏขึ้น ต้องบันทึกรหัสผ่านนี้ไว้เพราะไม่สามารถเปลี่ยนแปลงได้ในภายหลัง

![](https://screensaver01.zap-hosting.com/index.php/s/c7W3mzRMJ4EP23E/preview)


ด้วยข้อมูล login ที่สร้างขึ้นนี้ คุณสามารถเชื่อมต่อได้ เช่น ผ่าน [YaTQA](https://yat.qa) โดยต้องใช้ IP เซิร์ฟเวอร์, พอร์ต Query, พอร์ตเซิร์ฟเวอร์ และชื่อผู้ใช้กับรหัสผ่าน Query Login

IP เซิร์ฟเวอร์, พอร์ต Query และพอร์ตเซิร์ฟเวอร์ สามารถดูได้ในแดชบอร์ดของเว็บอินเทอร์เฟซ:

![](https://screensaver01.zap-hosting.com/index.php/s/RGsk8wfBkoCPzA4/preview)

</TabItem>
<TabItem value="self_hosted" label="โฮสต์เอง (VPS/เซิร์ฟเวอร์เฉพาะ)">

ถ้าเซิร์ฟเวอร์ TeamSpeak ถูกติดตั้งบน VPS หรือ เซิร์ฟเวอร์เฉพาะของคุณเองผ่านเว็บอินเทอร์เฟซ คุณสามารถใช้ "Server Admin Query" ปกติได้ ข้อมูลการเข้าสู่ระบบจะอยู่ในเว็บอินเทอร์เฟซของอินสแตนซ์ TeamSpeak นั้นๆ

</TabItem>
</Tabs>

## การเข้าถึง Query

กรอกข้อมูล login ที่ได้รับหรือสร้างเองสำหรับ Query Login ของคุณในส่วน Quick Connect ของแอป **YatQA** แล้วกดปุ่ม **Connect**

![](https://screensaver01.zap-hosting.com/index.php/s/ZaBNRaQxfSjHKwT/download)

:::warning ข้อผิดพลาดพอร์ต Query แบบกำหนดเอง
โดยปกติจะเกิดข้อผิดพลาดหลังการติดตั้งครั้งแรกถ้าคุณระบุพอร์ตที่ไม่ใช่พอร์ต query เริ่มต้น ซึ่งเป็นเรื่องปกติและแก้ไขได้ดังนี้:

![img](https://screensaver01.zap-hosting.com/index.php/s/3mofjG5RKPM9yBW/download)
:::

## สรุป

คุณได้เชื่อมต่อกับ query สำเร็จโดยใช้ YatQA แล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />