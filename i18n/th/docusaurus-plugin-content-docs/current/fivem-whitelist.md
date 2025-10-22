---
id: fivem-whitelist
title: "FiveM: Whitelist"
description: "ค้นพบวิธีจำกัดการเข้าถึงเซิร์ฟเวอร์ด้วยการใช้ whitelist เพื่อเพิ่มความปลอดภัยและควบคุมการเข้าเล่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Whitelist
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณไม่อยากให้เซิร์ฟเวอร์ของคุณเข้าถึงได้โดยทุกคนใช่ไหม? มีหลายวิธีในการจำกัดการมองเห็นและการเข้าถึงเซิร์ฟเวอร์ หนึ่งในวิธีเหล่านั้นคือการใช้ whitelist ซึ่งจะอธิบายในหัวข้อต่อไปนี้

Whitelist คือรายชื่อที่อนุญาตให้เฉพาะกลุ่มคนที่เลือกไว้เท่านั้น ซึ่งหมายความว่ามีแค่คนที่ถูกเพิ่มใน whitelist เท่านั้นที่สามารถเชื่อมต่อได้ คนที่ไม่ได้อยู่ใน whitelist จะไม่สามารถเข้าเล่นได้และจะได้รับข้อความแจ้งเตือนว่าคุณไม่ได้อยู่ใน whitelist เมื่อพยายามเชื่อมต่อ

![](https://screensaver01.zap-hosting.com/index.php/s/TCYYodZW2XN6FYk/preview)

<InlineVoucher />

## การตั้งค่า

ในการจัดการฟีเจอร์ whitelist สำหรับ FiveM คุณต้องเปิดอินเทอร์เฟซ txAdmin จากนั้นไปที่เมนู **Settings** และเปิดแท็บ **Whitelist**

![img](https://screensaver01.zap-hosting.com/index.php/s/WJBH63dWtyWWYQ6/download)

เลือกโหมด whitelist ที่คุณต้องการใช้งานในระบบ มีตัวเลือกดังนี้:

- Admin-only (โหมดบำรุงรักษา)
- สมาชิก Discord Server
- บทบาท Discord Server
- ใบอนุญาตที่ได้รับการอนุมัติ

ตัวอย่างนี้เลือกและเปิดใช้งานตัวเลือก **Approved License** ซึ่งจะใช้อนุมัติผู้เล่นผ่านใบอนุญาตของพวกเขา

![img](https://screensaver01.zap-hosting.com/index.php/s/dzTZLTczjWjorkf/download)

รหัสใบอนุญาตของผู้เล่นต้องได้รับการเพิ่มใน whitelist โดยผู้ดูแลระบบ txAdmin ซึ่งสามารถทำได้ผ่านหน้า **Whitelist** หรือคำสั่ง `/whitelist`

## สรุป

ถ้าคุณทำตามขั้นตอนทั้งหมดนี้แล้ว คุณก็ได้เปิดใช้งานและตั้งค่า whitelist สำหรับเซิร์ฟเวอร์ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />