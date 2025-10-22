---
id: fivem-installeup
title: "FiveM: ติดตั้ง EUP (Emergency Uniform Pack)"
description: "ค้นหาวิธีตั้งค่า Emergency Uniform Pack สำหรับตัวละครโหมดฟรี โดยต้องมีสมาชิก Element Club → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## แนะนำ

**EUP** หรือที่รู้จักในชื่อ Emergency Uniform Pack ช่วยให้คุณมีชุดเครื่องแบบบริการฉุกเฉินสำหรับตัวละครโหมดฟรีได้ คู่มือนี้จะอธิบายอย่างละเอียดว่าคุณสามารถติดตั้งได้อย่างไรบ้าง

:::warning ต้องมีสมาชิก Element Club
เพื่อที่จะติดตั้งและใช้งาน EUP จำเป็นต้องมีสมาชิก Element Club สมัครสมาชิกของคุณได้ที่ [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)!
:::

<InlineVoucher />



## การเตรียมตัว

ก่อนเริ่มติดตั้ง **EUP** ต้องเตรียมตัวเล็กน้อย โดยต้องดาวน์โหลดและแตกไฟล์ [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) และ [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) ลงบนคอมพิวเตอร์ของคุณ เมื่อดาวน์โหลดไฟล์เสร็จแล้ว คุณจะได้ไฟล์ ZIP ดังนี้:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

ให้แตกไฟล์เหล่านี้ลงบนเครื่องของคุณ ตอนนี้จะต้องมีไฟล์ `__resource.lua` หรือ `fxmanifest.lua` และไฟล์/โฟลเดอร์สคริปต์อยู่ในนั้น

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
สำหรับ NativeUI คุณต้องเปิดโฟลเดอร์ "NativeUI-master" ก่อน ในนั้นจะเจอสคริปต์ที่ถูกต้อง หากไม่เจอ อาจจะอยู่ในซับโฟลเดอร์ที่มักจะมีชื่อเดียวกัน
:::

## การติดตั้ง
ตอนนี้คุณพร้อมเริ่มติดตั้งแล้ว ให้เชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่านทาง [FTP](gameserver-ftpaccess.md) แล้วอัปโหลดไฟล์เหล่านี้เข้าไป ไฟล์และโฟลเดอร์ต้องอัปโหลดไปที่ไดเรกทอรี `resources` คุณจะเจอโฟลเดอร์นี้ตามโครงสร้างไดเรกทอรีดังนี้:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## การตั้งค่า

เพื่อให้ resources ที่ติดตั้งโหลดขึ้นมาได้ ต้องระบุในไฟล์คอนฟิกของเซิร์ฟเวอร์ โดยล็อกอินเข้าแดชบอร์ด txAdmin แล้วไปที่ CFG Editor

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## สรุป

คุณได้ติดตั้ง EUP บนเซิร์ฟเวอร์ FiveM ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂


<InlineVoucher />