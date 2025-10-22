---
id: spaceengineers-becomeadmin
title: "Space Engineers: วิธีเป็นแอดมินเซิร์ฟเวอร์"
description: "ค้นพบวิธีมอบสิทธิ์แอดมินเพื่อควบคุมเซิร์ฟเวอร์เต็มรูปแบบและจัดการในเกมได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการเซิร์ฟเวอร์ได้ง่ายและครบถ้วนด้วยการควบคุมเต็มที่ในมือคุณ ในฐานะแอดมิน คุณสามารถใช้ฟีเจอร์และตัวเลือกทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินให้กับเซิร์ฟเวอร์ของคุณจะอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

เพื่อให้คุณจัดการเซิร์ฟเวอร์เกมของตัวเองได้ดีในเกม สิ่งสำคัญคือต้องมีตำแหน่งแอดมิน

### SteamID64 ผ่านเว็บไซต์

อันดับแรก ให้เปิดโปรไฟล์ใน Steam แล้วคลิกขวาที่ไหนก็ได้ในโปรไฟล์นั้น  
จากนั้นคุณก็สามารถคัดลอก URL ของโปรไฟล์ Steam ได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

เมื่อได้แล้ว คุณสามารถนำ URL ไปใส่ในเว็บไซต์เหล่านี้ได้:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### ใส่ SteamID ใน Config

ต่อไปให้เข้าสู่แผงควบคุมและเซิร์ฟเวอร์ของคุณ  
จากนั้นไปที่แท็บ **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

แล้วเปิดไฟล์ **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

หลังจากนั้น กด **STR + F** แล้วค้นหาคำว่า *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

ตอนนี้ให้เขียนแบบนี้:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
โดยภาพรวมจะต้องดูแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

จากนั้นแค่ **บันทึก** ไฟล์ Config ก็เรียบร้อย

## สรุป

ยินดีด้วย คุณตั้งค่าสิทธิ์แอดมินสำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />