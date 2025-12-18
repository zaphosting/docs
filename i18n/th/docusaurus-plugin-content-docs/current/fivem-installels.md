---
id: fivem-installels
title: "FiveM: การติดตั้ง ELS บนเซิร์ฟเวอร์ของคุณ"
description: "ค้นพบวิธีตั้งค่าและเปิดใช้งาน ELS-FiveM พร้อม carmods เพื่อเพิ่มประสบการณ์การเล่นเกมบนเซิร์ฟเวอร์ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## เชื่อมต่อกับ FTP

เพื่อให้สามารถติดตั้ง resource ได้ ต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ก่อน

## การเตรียมตัว

อันดับแรกให้ดาวน์โหลด [เวอร์ชันล่าสุดของ ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest) ซึ่งจะอยู่ในส่วน "Assets"

เมื่อดาวน์โหลด ELS มาแล้ว ให้แตกไฟล์และเปิดโฟลเดอร์ "ELS-FiveM"

## การตั้งค่า

ตอนนี้เราจะตั้งค่า ELS-FiveM โดยการคัดลอกไฟล์ `vcf.default.lua` แล้วเปลี่ยนชื่อเป็น `vcf.lua`

:::info
หมายเหตุ: อย่าลบไฟล์ `vcf.default.lua` เดิมออกนะ
:::

การตั้งค่าเพิ่มเติมสามารถปรับได้ในไฟล์ "config.lua" แต่เราจะใช้ค่าตั้งต้นตามเดิม

## อัปโหลด Resource

คุณสามารถติดตั้ง ELS-FiveM ได้โดยการลาก & วางไฟล์เข้าไปในโฟลเดอร์ "resources"

เมื่ออัปโหลดเสร็จแล้ว ให้เปิดไฟล์ server.cfg ในโฟลเดอร์ server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

ในบรรทัดเริ่มต้นของ resource อื่น ๆ ให้เพิ่มบรรทัดสำหรับ ELS-FiveM เข้าไปได้เลย

จากนั้นรีสตาร์ทเซิร์ฟเวอร์ และ ELS-FiveM จะพร้อมใช้งานในเกม!

## การตั้งค่า Carmods

ถ้าต้องการเพิ่ม carmods ใหม่ให้กับ ELS-FiveM เราต้องใช้ ELS-Config ซึ่งมักจะอยู่ในโฟลเดอร์ของ carmod ที่ดาวน์โหลดมา โดยปกติจะชื่อว่า `autoname.xml` แต่ในกรณีนี้คือ `scpdvic.xml`

ให้อัปโหลดไฟล์เหล่านี้เข้าไปในโฟลเดอร์ "vcf" ของโฟลเดอร์ ELS-FiveM ผ่าน FTP

เมื่ออัปโหลดไฟล์เสร็จแล้ว ให้เปิดไฟล์ 'vcf.lua' ในโฟลเดอร์ ELS-FiveM ขึ้นมา

:::info
ตรวจสอบให้แน่ใจว่าบรรทัดก่อนหน้าจะต้องจบด้วยเครื่องหมายจุลภาค (comma) เสมอ
:::

เรียบร้อย! Carmod ของเราควรจะเปิดใช้งาน ELS ได้และใช้งานได้หลังจากรีสตาร์ทเซิร์ฟเวอร์

<InlineVoucher />