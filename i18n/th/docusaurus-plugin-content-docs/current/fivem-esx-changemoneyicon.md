---
id: fivem-esx-changemoneyicon
title: "FiveM: เปลี่ยนไอคอนเงิน"
description: "ค้นพบวิธีปรับแต่งไอคอนเงินของเซิร์ฟเวอร์เกมคุณเพื่อประสบการณ์ในเกมที่เป็นตัวเอง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เปลี่ยนไอคอนเงิน
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
เอกสารนี้ถูกเก็บถาวรแล้ว เอกสารจะถูกเก็บถาวรเมื่อไม่เกี่ยวข้อง, ไม่ถูกต้อง หรือไม่อัปเดตอีกต่อไป สาเหตุที่เก็บถาวรมีดังนี้:

**เหตุผล**: วิธีการนี้ใช้กับเวอร์ชัน ESX ที่ล้าสมัย วิธีนี้ไม่สามารถใช้กับเวอร์ชัน ESX ปัจจุบันได้เนื่องจากโครงสร้างได้เปลี่ยนไปแล้ว
::::



<InlineVoucher />

## เชื่อมต่อกับ FTP

อันดับแรกต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ให้เรียบร้อยก่อน


หลังจากตั้งค่าเสร็จแล้ว คุณก็สามารถเชื่อมต่อและเปิดโฟลเดอร์เซิร์ฟเวอร์ได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


ที่นี่เราเปิดไฟล์ `server.cfg` ในโฟลเดอร์ `server-data`

## แก้ไข Config

ตอนนี้ให้เพิ่มบรรทัดนี้ไว้เหนือบรรทัด `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

ตรงนี้เราสามารถเปลี่ยน $ เป็นไอคอนที่เราต้องการได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


หลังจากบันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ ไอคอนเงินในเกมก็จะเปลี่ยนตามที่ตั้งค่าไว้

<InlineVoucher />