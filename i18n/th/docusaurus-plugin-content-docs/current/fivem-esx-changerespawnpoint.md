---
id: fivem-esx-changerespawnpoint
title: "FiveM: ตั้งจุดเกิดใหม่"
description: "ค้นพบวิธีอัปเดตจุดเกิดใหม่ของรถพยาบาลใน ESX เพื่อปรับแต่งการเล่นเกมและจัดการเซิร์ฟเวอร์ได้ดีขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เปลี่ยนจุดเกิดใหม่
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning คู่มือเก่า
เอกสารนี้ถูกเก็บถาวรแล้ว เอกสารจะถูกเก็บถาวรเมื่อไม่เกี่ยวข้อง, ไม่ถูกต้อง หรือไม่ทันสมัยอีกต่อไป สาเหตุที่เก็บถาวรคือ:

**เหตุผล**: วิธีการนี้ใช้กับเวอร์ชัน ESX เก่า วิธีนี้ไม่สามารถใช้กับเวอร์ชัน ESX ปัจจุบันได้เพราะโครงสร้างเปลี่ยนไปแล้ว
::::



:::info
ต้องติดตั้ง ESX ก่อน
:::

<InlineVoucher />

📔 การเตรียมตัว

เพื่อหาพิกัด เราต้องใช้สคริปต์ Coords แบบนี้:
[CoordsScript](https://github.com/qalle-fivem/qalle_coords)
ติดตั้งแบบนี้: [ติดตั้ง resources](fivem-installresources.md)
เมื่อติดตั้งสคริปต์นี้แล้ว ให้กดในเกม */coords*
ระบบจะแสดงพิกัดให้เรา

📑 แก้ไข Config

เมื่อได้พิกัดแล้ว ให้ไปที่แท็บ Config

กด **CTRL + F** แล้วค้นหา **ambulance**
จากนั้นเปิดไฟล์นี้ขึ้นมา
เลื่อนลงมาจนเจอ **Config_RespawnPoint**

![](https://screensaver01.zap-hosting.com/index.php/s/6FYfkgfPfEWK6sj/preview)

ตอนนี้ให้แก้ไขและแทนที่พิกัดใหม่
จากนั้นกดบันทึก เท่านี้ก็เสร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/ZEcfQt69SX5if3Q/preview)

:::info
หลังรีสตาร์ทเซิร์ฟเวอร์ การเปลี่ยนแปลงจะมีผล
:::

<InlineVoucher />