---
id: fivem-editlocalfiles
title: "FiveM: ไฟล์ Locales (ตัวแปรภาษา)"
description: "เรียนรู้วิธีปรับแต่งและเพิ่มภาษาลงใน resource ของคุณเพื่อประสบการณ์ที่เป็นส่วนตัว → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ไฟล์ Locales (ภาษา)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## แนะนำ

อยากเปลี่ยนตัวแปรภาษาใน resource หรือต้องการเพิ่มภาษาใหม่ที่ยังไม่มีใน resource ไหม? ไฟล์ locale ช่วยให้คุณปรับแต่งตัวแปรภาษาใน resource ที่ต้องการได้ง่ายๆ

<InlineVoucher />



## หาไฟล์ Locales

ไฟล์ locale ต้องแก้ไขผ่านโปรแกรม FTP ถ้าคุณยังใหม่กับการใช้ FTP เราแนะนำให้อ่าน [คู่มือการเข้าถึง FTP](gameserver-ftpaccess.md) ก่อน พอเชื่อมต่อแล้ว ให้ไปที่โฟลเดอร์ resource ESX ของ resource ที่คุณต้องการแก้ไข เปิดโฟลเดอร์ locales ในโฟลเดอร์ resource นั้น

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

ในโฟลเดอร์ locales คุณจะเจอไฟล์ภาษาทั้งหมดที่มีสำหรับ resource นี้ จากตรงนี้คุณสามารถแก้ไขไฟล์ที่มีอยู่แล้ว หรือก็อปปี้ไฟล์เดิมตั้งชื่อใหม่สำหรับภาษาใหม่ แล้วแก้ไขได้เลย

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## แก้ไขไฟล์ Locales

ตอนนี้คุณสามารถปรับเนื้อหาของตัวแปรภาษาแต่ละตัวในไฟล์ locale ที่เปิดอยู่ได้เลย เนื้อหาของตัวแปรภาษาจะอยู่หลังเครื่องหมายเท่ากับ (=) ในเครื่องหมายคำพูด ปรับแต่งตามใจชอบแล้วบันทึกการเปลี่ยนแปลงได้เลย

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## ตั้งค่า Locale (ภาษา)

ภาษาที่ใช้สามารถกำหนดได้ในไฟล์ config.lua ในโฟลเดอร์ resource โดยปรับค่าของ `Config.Locale = GetConvar('esx:locale', 'en')`

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## สรุป

ยินดีด้วย ถ้าคุณทำตามทุกขั้นตอนมาอย่างถูกต้อง คุณก็แก้ไขไฟล์ locale ของ resource ได้สำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />