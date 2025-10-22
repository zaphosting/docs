---
id: scp-newroles
title: "SCP Secret Laboratory: การเพิ่มบทบาทใหม่ในเซิร์ฟเวอร์"
description: "เรียนรู้วิธีสร้างและปรับแต่งบทบาทเซิร์ฟเวอร์พร้อมสิทธิ์เฉพาะสำหรับการจัดการแอดมินระยะไกลอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เพิ่มบทบาทใหม่
services:
  - gameserver-scp 
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## ดูการตั้งค่า Config
บทบาทใหม่จะถูกเพิ่มในไฟล์ "config_remoteadmin.txt"  
คุณสามารถหาไฟล์ config นี้ได้โดยคลิกที่ "Configs" ในอินเทอร์เฟซของเซิร์ฟเวอร์คุณ

![](https://screensaver01.zap-hosting.com/index.php/s/7JEE5gLDyF29mZR/preview)

ที่นี่คุณสามารถค้นหา Config ข้างต้นแล้วคลิกที่ไอคอน "รูปตา" ด้านขวาเพื่อเปิดไฟล์

## คัดลอกบทบาทที่มีอยู่
ถ้าคุณเปิด Config แล้ว คุณสามารถค้นหาข้อมูลเหล่านี้ในไฟล์:

![](https://screensaver01.zap-hosting.com/index.php/s/tDBFmR5g44gxpp5/preview)

นี่คือตัวอย่างบทบาทที่ถูกเพิ่มไว้แล้ว  
เราจะเพิ่มรายการใหม่ด้านล่าง  
โดยการคัดลอกบล็อกจากบทบาทใดบทบาทหนึ่งข้างบน แล้ววางส่วนนี้ไว้ใต้บทบาทสุดท้าย  
ในตัวอย่างนี้ เราคัดลอกบทบาท "Moderator" แล้ววางไว้ด้านล่าง:

![](https://screensaver01.zap-hosting.com/index.php/s/ELHDZCDcT6WDydJ/preview)

## เพิ่มบทบาทของตัวเอง
ตอนนี้เราสามารถแก้ไขบล็อกที่เพิ่งวางลงไปจากบทบาทที่มีอยู่แล้ว และใส่ค่าที่เราต้องการได้เลย  
ในตัวอย่างนี้เราใช้ชื่อบทบาทว่า "ZAP":

![](https://screensaver01.zap-hosting.com/index.php/s/6gtEmbeBjP5A8zy/preview)

เมื่อทำเสร็จแล้ว เรายังต้องเพิ่มบทบาทนี้เข้าไปในรายการบทบาทที่มีให้เลือก  
ซึ่งอยู่ถัดลงไปเล็กน้อยใน Config เดียวกันนี้

![](https://screensaver01.zap-hosting.com/index.php/s/qNNKnwYaYSjy2XK/preview)

ดังนั้นเราจะเพิ่มบทบาทของเราไว้ใต้บทบาท "moderator"  
:::info
ระวัง: โปรดสังเกตช่องว่างก่อนและหลังเครื่องหมาย "-" ให้ถูกต้อง!
:::

## สิทธิ์การใช้งาน (Permissions)
ที่ด้านล่างสุดของไฟล์ "config_remoteadmin.txt" เราสามารถปรับสิทธิ์สำหรับแต่ละบทบาทได้  
ถ้าเราต้องการกำหนดสิทธิ์ให้กับบทบาทของเรา เราก็ใส่ชื่อบทบาทในวงเล็บตามตัวอย่างนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/kRSiKjYyWsK2RD3/preview)


<InlineVoucher />