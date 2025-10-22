---
id: 7d2d-mods
title: "7 Days to Die: การติดตั้งม็อด"
description: "ค้นพบวิธีปรับแต่งเซิร์ฟเวอร์เกมของคุณด้วยม็อดยอดนิยมและเพิ่มประสบการณ์การเล่นเกมให้ไม่เหมือนใคร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งม็อด
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ด้วยม็อด คุณมีโอกาสปรับแต่งเซิร์ฟเวอร์เกมของคุณได้มากขึ้น ในส่วนถัดไปเราจะอธิบายว่าคุณจะหาม็อดเซิร์ฟเวอร์เกมยอดนิยมได้จากที่ไหนและวิธีตั้งค่ามัน ด้วยการเปิดตัว Alpha 17 Experimental แนวคิดของ modlets ถูกแนะนำ Modlets คือม็อดขนาดเล็กที่ไม่เขียนทับไฟล์ XML แบบวานิลลา แต่จะถูกโหลดจากโฟลเดอร์ม็อด

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## การเตรียมตัว

สิ่งแรกที่คุณต้องทำคือดาวน์โหลดม็อดที่คุณต้องการติดตั้งบนเซิร์ฟเวอร์เกมของคุณ คุณสามารถหาม็อดจำนวนมากได้ที่ [7daystodiemods.com](https://7daystodiemods.com/) ที่นั่นคุณจะพบม็อดมากกว่า 1000 ม็อดและมีการเพิ่มใหม่อย่างสม่ำเสมอ หากคุณดาวน์โหลดม็อดมาแล้ว มันควรจะมีโครงสร้างไฟล์ดังนี้:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## การติดตั้ง

เมื่อดาวน์โหลดม็อดที่ต้องการเสร็จแล้ว คุณก็สามารถเริ่มติดตั้งม็อดได้เลย การตั้งค่าม็อดจะทำผ่าน FTP คุณต้องมีโปรแกรม FTP client เพื่ออัปโหลดไฟล์ไปยังเซิร์ฟเวอร์เกมของคุณ หากคุณไม่รู้ว่า FTP คืออะไรและทำงานอย่างไร คุณควรดูคู่มือต่อไปนี้: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

ภายใต้ไดเรกทอรี ``/gXXXXX4/7dtd-linux-exp/`` คุณต้องสร้างโฟลเดอร์ชื่อ **Mods** โดยคลิกขวาแล้วเลือก **สร้างไดเรกทอรี**

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

จากนั้นให้คุณอัปโหลดไฟล์ของม็อดไปยังโฟลเดอร์ mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

แค่นี้ก็เสร็จสิ้นการติดตั้งม็อดแล้ว ครั้งต่อไปที่คุณสตาร์ทเซิร์ฟเวอร์เกม ม็อดจะถูกโหลดโดยอัตโนมัติ

<InlineVoucher />