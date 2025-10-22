---
id: fivem-steam-web-api-key
title: "FiveM: การตั้งค่า Steam Web API Key"
description: "ค้นหาวิธีรับและเปิดใช้งาน Steam Web API Key สำหรับ FiveM เพื่อเปิดใช้งานการยืนยันตัวตนและเพิ่มประสิทธิภาพเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Steam Web API Key มีประโยชน์สำคัญสำหรับ FiveM รวมถึงการยืนยันตัวตนผ่าน API Key เมื่อ Steam ถูกใช้เป็นตัวระบุโดยสคริปต์และ/หรือรีซอร์สต่างๆ

<InlineVoucher />

## การเตรียมตัว

จำเป็นต้องมีบัญชี Steam ที่ไม่ถูกจำกัดเพื่อขอ API Key บัญชี Steam ที่ถูกจำกัดจะเข้าถึงฟีเจอร์ของ Steam ได้ไม่เต็มที่ ดังนั้นถ้าไม่มีการเข้าถึงเต็มรูปแบบ จะไม่สามารถขอ API Key ได้ คุณต้องใช้จ่ายอย่างน้อย **5.00 USD** ในร้านค้า Steam เพื่อปลดล็อกบัญชีและฟีเจอร์ทั้งหมด

## การขอ API Key

เมื่อคุณมีบัญชี Steam พร้อมแล้ว คุณก็สามารถขอ Steam Web API Key ของตัวเองได้ โดยทำการสมัคร [ที่เว็บไซต์ Steam](https://steamcommunity.com/dev/apikey) ด้วยชื่อบัญชีและรหัสผ่าน Steam ของคุณ

![](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

หลังจากล็อกอินแล้ว คุณจะต้องกรอกชื่อโดเมน ยืนยันเงื่อนไขการใช้งาน Steam Web API และคลิกปุ่ม **Register** โดยโดเมนควรตั้งเป็น **ที่อยู่ IP เซิร์ฟเวอร์** ของคุณ *(ไม่ต้องใส่พอร์ต)* ให้กรอกที่นั่น

![](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

ถ้าทุกอย่างสำเร็จ คุณจะเห็น Steam Web API Key ของคุณเองตามภาพด้านล่าง

![](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## การเปิดใช้งาน API Key

เมื่อคุณมี Steam Web API Key แล้ว คุณต้องนำไปใส่ในไฟล์การตั้งค่าเซิร์ฟเวอร์ (`server.cfg`) บนเซิร์ฟเวอร์เกม FiveM ของคุณ คุณสามารถเข้าถึง `server.cfg` ผ่าน **แผงควบคุม txAdmin** ในเมนู **CFG Editor** หาแถวที่มีอยู่แล้วหรือสร้างใหม่ถ้ายังไม่มี แล้วเพิ่มบรรทัดนี้โดยแทนที่ `YOUR_KEY_HERE` ด้วยคีย์ที่คุณสร้าง:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## สรุป

สุดท้าย คุณสามารถรีสตาร์ทเซิร์ฟเวอร์ของคุณ Steam Web API Key จะถูกโหลดเมื่อเซิร์ฟเวอร์เริ่มทำงานเต็มที่แล้ว คุณได้เพิ่ม Steam Web API Key ลงในเซิร์ฟเวอร์เกม FiveM ของคุณเรียบร้อยแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />