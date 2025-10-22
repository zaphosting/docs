---
id: fivem-qbcore-admin
title: "FiveM: เป็นแอดมินด้วย QBCore"
description: "ค้นพบวิธีมอบสิทธิ์แอดมินเพื่อควบคุมเซิร์ฟเวอร์เต็มรูปแบบและจัดการในเกมได้ง่ายขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการเซิร์ฟเวอร์ได้ง่ายและครบถ้วน ด้วยการควบคุมเต็มรูปแบบในเซิร์ฟเวอร์ของคุณ ในฐานะแอดมิน คุณสามารถใช้ตัวเลือกและฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินให้กับเซิร์ฟเวอร์ของคุณจะถูกอธิบายไว้ด้านล่างนี้

<InlineVoucher />

## การตั้งค่า

การตั้งค่าสิทธิ์แอดมินทำผ่านไฟล์คอนฟิก ``server.cfg`` โดยให้ล็อกอินเข้าอินเทอร์เฟซ txAdmin แล้วเปิด CFG Editor จากนั้นเลื่อนลงไปจนถึงส่วน `Permissions`

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore รองรับตัวระบุผู้เล่นหลายแบบ เช่น FiveM IDs (`identifier.fivem:`), Rockstar licenses (`identifier.license:`) และ Discord IDs (`identifier.discord:`) ซึ่งตัวระบุเหล่านี้สามารถดึงได้โดยตรงจากอินเทอร์เฟซ txAdmin ของคุณ คุณสามารถเลือกได้ว่าจะมอบสถานะ GOD, Admin หรือ Mod ให้กับผู้เล่นเหล่านั้น

เมื่อคุณได้ตัวระบุและตัดสินใจเลือกสถานะที่ต้องการแล้ว คุณสามารถมอบสิทธิ์ผู้เล่นแต่ละคนโดยเพิ่มเข้าไปใน `server.cfg` ของคุณ โดยเพิ่มตัวเลือกหนึ่งในสามนี้เป็นรายการใหม่ในส่วน permissions:

```
add_principal identifier.license:xxxxxx qbcore.god   # Player Name
add_principal identifier.license:xxxxxx qbcore.admin # Player Name
add_principal identifier.license:xxxxxx qbcore.mod   # Player Name
```

ผลลัพธ์สุดท้ายอาจดูเป็นแบบนี้ เช่น:

```
## Permissions ##
add_ace group.admin command allow # อนุญาตคำสั่งทั้งหมด
# Deployer Note: แอดมินหลักนี้ไม่มีตัวระบุที่จะถูกเพิ่มอัตโนมัติ
# add_principal identifier.discord:111111111111111111 group.admin #example

add_principal identifier.fivem:16219250 qbcore.admin # Player Name
```

## สรุป

ถ้าคุณทำตามขั้นตอนทั้งหมดสำเร็จแล้ว ตอนนี้คุณก็เป็นแอดมินในเซิร์ฟเวอร์ของคุณเองแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />