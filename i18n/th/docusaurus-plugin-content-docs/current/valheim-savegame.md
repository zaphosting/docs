---
id: valheim-savegame
title: "Valheim: การจัดการเซฟเกมบนเซิร์ฟเวอร์"
description: "ค้นพบวิธีจัดการ ดาวน์โหลด และกู้คืนเซฟเกม Valheim ของคุณอย่างมีประสิทธิภาพด้วย Savegame-Manager → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: จัดการเซฟเกม
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## ดาวน์โหลดเซฟเกม

:::info
หมายเหตุ: ก่อนดาวน์โหลดเซฟเกม คุณต้องหยุดเซิร์ฟเวอร์ก่อน เพื่อบันทึกเซฟเกมที่กำลังใช้งานอยู่ หลังจากหยุดเซิร์ฟเวอร์แล้ว เซฟเกมจะปรากฏขึ้นหลังจากรีเฟรชหน้าเว็บหนึ่งครั้ง
:::

ในการดาวน์โหลดเซฟเกมของคุณ คุณสามารถใช้ `Savegame-Manager` ในเว็บอินเทอร์เฟซได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

ที่นี่คุณสามารถดาวน์โหลดเซฟเกมได้ง่ายๆ โดยคลิกที่ปุ่มสีเขียว "ดาวน์โหลด":

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
หมายเหตุ คุณต้องดาวน์โหลดไฟล์ทั้ง `.db` **และ** `.fwl`
:::

เสร็จแล้ว! ตอนนี้คุณสามารถใช้ไฟล์สำรองนี้สำหรับวัตถุประสงค์อื่น หรืออัปโหลดกลับมาใหม่ในภายหลังได้

## อัปโหลด & เปิดใช้งานเซฟเกม

ในการอัปโหลดเซฟเกมของคุณเอง ให้เราเปิด Savegame-Manager ขึ้นมาก่อน

ที่นี่เราสามารถอัปโหลดเซฟเกมของเราได้โดยการลากแล้วปล่อย (drag&drop) ซึ่งจะดูประมาณนี้หลังจากอัปโหลดเสร็จ:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
โปรดทราบว่าเซฟเกมของคุณควรมีชื่อเดียวกับที่เกมสร้างขึ้นมา
:::

ในกรณีของเรา ไฟล์สำรองชื่อว่า `380622.fwl` และ `380622.db`

ตอนนี้ให้เราใส่ชื่อไฟล์สำรองด้านบนในช่อง `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

ในส่วน `ZAP Backups` ให้เราค้นหาเซฟเกมของเรา:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

ตอนนี้แค่กดปุ่มสีเหลือง "กู้คืน" ที่ไฟล์ทั้งสองและยืนยัน จากนั้นเซฟเกมของเราจะถูกโหลด

หลังจากโหลดเสร็จ จะมีข้อความแจ้งเตือนที่มุมล่างขวา:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

ตอนนี้เซิร์ฟเวอร์สามารถเริ่มทำงานได้ เซฟเกมที่อัปโหลดจะถูกเปิดใช้งานบนเซิร์ฟเวอร์

## การบันทึกอัตโนมัติ (Autosaves)

น่าเสียดายที่ Valheim ยังไม่รองรับการบันทึกอัตโนมัติ ในการบันทึกกระบวนการเล่นเกม คุณต้องหยุดเซิร์ฟเวอร์ก่อน โดยสามารถใช้ตัววางแผนรีสตาร์ท (Restart Planer) ในเว็บอินเทอร์เฟซเพื่อรีสตาร์ทเซิร์ฟเวอร์อัตโนมัติในเวลาที่กำหนดได้:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

ที่นี่เราสามารถเพิ่มเวลาสำหรับรีสตาร์ทแบบรายวันหรือรายสัปดาห์ได้ง่ายๆ:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

เมื่อบันทึกการรีสตาร์ทแล้ว เราสามารถเพิ่มเวลาหลายช่วงสำหรับรีสตาร์ทรายวันหรือรายสัปดาห์ได้ด้วย

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

เสร็จแล้ว! เซิร์ฟเวอร์ของคุณจะรีสตาร์ทตามเวลาที่กำหนดไว้ และเซฟเกมจะถูกบันทึกในช่วงเวลานั้นๆ

<InlineVoucher />