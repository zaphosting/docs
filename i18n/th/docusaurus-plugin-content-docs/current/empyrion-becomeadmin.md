---
id: empyrion-becomeadmin
title: "Empyrion: วิธีเป็นแอดมิน"
description: "เรียนรู้วิธีมอบสิทธิ์แอดมินเพื่อควบคุมเซิร์ฟเวอร์เกมแบบเต็มรูปแบบและจัดการฟังก์ชันเกมได้อย่างมีประสิทธิภาพ → เริ่มเรียนรู้เลย"
sidebar_label: เป็นแอดมิน
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการเซิร์ฟเวอร์เกมได้ง่ายและครบถ้วนด้วยการควบคุมเต็มรูปแบบ ในฐานะแอดมิน คุณสามารถใช้ตัวเลือกและฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินให้กับเซิร์ฟเวอร์ของคุณจะถูกอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

## หา Steam64ID

อันดับแรก คุณต้องหา Steam64ID ของคุณก่อน  
คุณสามารถใช้เครื่องมือต่อไปนี้ได้: [SteamID Lookup](https://steamid.io/lookup)  
ID นี้จะถูกนำไปใส่ในไฟล์คอนฟิกในขั้นตอนถัดไป

นี่คือตัวอย่างวิธีการหา steamid โดยการใส่ลิงก์โปรไฟล์ของคุณ:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## ตั้งค่า adminconfig

ไฟล์ "**adminconfig.yaml**" ที่ต้องแก้ไขจะอยู่ในโฟลเดอร์ "**Saves**"  
หากต้องการเปิดโฟลเดอร์นี้ ให้ทำตามคำแนะนำใน [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

ค่าต่อไปนี้จะถูกตั้งเป็นค่าเริ่มต้น:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

ให้ใส่ Steam64ID ที่หาได้ก่อนหน้านี้หลังคำว่า "**Id:**"

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

ที่ "**Permission**" คือการกำหนดระดับสิทธิ์ที่ต้องการมอบให้ผู้ใช้  
ระดับสิทธิ์มีดังนี้:

Permission | ระดับ
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## สรุป

ยินดีด้วย! คุณตั้งค่าสิทธิ์แอดมินเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />