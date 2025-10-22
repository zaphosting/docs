---
id: fivem-esx-disableinventory
title: "FiveM: ปิดใช้งานอินเวนทอรี (F2)"
description: "ค้นหาวิธีปิดใช้งานอินเวนทอรีเริ่มต้นใน ESX เพื่อปรับแต่งประสบการณ์เซิร์ฟเวอร์ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ปิดใช้งานอินเวนทอรี (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
เอกสารนี้ถูกเก็บถาวรแล้ว เอกสารจะถูกเก็บถาวรเมื่อไม่เกี่ยวข้อง, ไม่ถูกต้อง หรือไม่ทันสมัยอีกต่อไป สาเหตุที่เก็บถาวรมีดังนี้:

**เหตุผล**: วิธีการนี้ใช้กับเวอร์ชัน ESX ที่ล้าสมัย วิธีนี้ไม่สามารถใช้กับเวอร์ชัน ESX ปัจจุบันได้เนื่องจากโครงสร้างมีการเปลี่ยนแปลง
::::

<InlineVoucher />

## เชื่อมต่อกับ FTP

ก่อนที่เราจะปิดใช้งานอินเวนทอรี ต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ให้เรียบร้อยก่อน

หลังจากตั้งค่าเสร็จแล้ว คุณก็สามารถเชื่อมต่อและเปิดโฟลเดอร์เซิร์ฟเวอร์ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## การแก้ไขไฟล์

ตอนนี้เราเปิดเส้นทาง `server-data/resources/[esx]` ซึ่งจะเจอโฟลเดอร์ es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

ในโฟลเดอร์นี้ให้เปิดไฟล์ `config.lua`

หลังจากเปิดไฟล์นี้ในโปรแกรมแก้ไขข้อความ ให้ค้นหาบรรทัดนี้:

```Lua
Config.EnableDefaultInventory   = true -- Display the default Inventory ( F2 )
```

ให้เปลี่ยนเป็น:

```Lua
Config.EnableDefaultInventory   = false
```


ตอนนี้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ หลังจากเข้าร่วมเซิร์ฟเวอร์ อินเวนทอรีจะไม่สามารถเปิดได้อีกต่อไป

<InlineVoucher />