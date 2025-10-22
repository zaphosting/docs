---
id: redm-steam-web-api-key
title: "RedM: การตั้งค่า Steam Web API Key"
description: "ค้นหาวิธีรับและเปิดใช้งาน Steam Web API key สำหรับ RedM เพื่อเปิดใช้งานการยืนยันตัวตนและเพิ่มประสิทธิภาพการตั้งค่าเซิร์ฟเวอร์ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Steam Web API key มีประโยชน์สำคัญสำหรับ RedM รวมถึงการยืนยันตัวตนผ่าน API Key เมื่อ Steam ถูกใช้เป็นตัวระบุโดยสคริปต์และ/หรือรีซอร์สต่างๆ

<InlineVoucher />

## การเตรียมตัว

ต้องใช้บัญชี Steam ที่ไม่ถูกจำกัดเพื่อขอ API key บัญชี Steam ที่ถูกจำกัดจะเข้าถึงฟีเจอร์ของ Steam ได้ไม่เต็มที่ ดังนั้นถ้าไม่มีการเข้าถึงเต็มรูปแบบ จะไม่สามารถขอ API key ได้ คุณต้องใช้จ่ายอย่างน้อย **5.00 USD** ในร้านค้า Steam เพื่อปลดล็อกบัญชีและฟีเจอร์ทั้งหมดของคุณ

## การขอ API key

เมื่อคุณมีบัญชี Steam พร้อมแล้ว คุณก็สามารถขอ Steam Web API key ของตัวเองได้ โดยทำการสมัคร [ที่เว็บไซต์ Steam](https://steamcommunity.com/dev/apikey) ด้วยชื่อบัญชีและรหัสผ่าน Steam ของคุณ

![](https://github.com/zaphosting/docs/assets/42719082/56be5337-a458-425b-86b0-e0c5fa94abab)

หลังจากล็อกอินแล้ว คุณจะต้องกรอกชื่อโดเมน ยืนยันเงื่อนไขการใช้งาน Steam Web API และคลิกที่ปุ่ม **Register** โดเมนควรตั้งเป็น **ที่อยู่ IP เซิร์ฟเวอร์** ของคุณ *(ไม่ต้องใส่พอร์ต)* ดังนั้นให้กรอกที่นั่น

![](https://github.com/zaphosting/docs/assets/42719082/334e89a9-0eef-4ea5-b100-5a1e4b8cdc31)

ถ้าทุกอย่างสำเร็จ คุณจะเห็น Steam Web API Key ของคุณเองตามภาพด้านล่างนี้

![](https://github.com/zaphosting/docs/assets/42719082/a99f463b-93ae-408b-b038-29e366b30256)

## การเปิดใช้งาน API key

ตอนนี้ที่คุณมี Steam Web API Key แล้ว คุณต้องนำไปใส่ในไฟล์การตั้งค่าเซิร์ฟเวอร์ (`server.cfg`) บนเซิร์ฟเวอร์เกม RedM ของคุณ คุณสามารถเข้าถึง `server.cfg` ผ่าน **แผงควบคุม txAdmin** ในเมนู **CFG Editor** หาแถวที่มีอยู่แล้วหรือสร้างใหม่ถ้ายังไม่มี แล้วเพิ่มบรรทัดนี้โดยแทนที่ `YOUR_KEY_HERE` ด้วยคีย์ที่คุณสร้าง:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)

## สรุป

สุดท้าย คุณสามารถรีสตาร์ทเซิร์ฟเวอร์ของคุณได้ Steam Web API key จะถูกโหลดในครั้งถัดไปที่เซิร์ฟเวอร์ของคุณเริ่มทำงานเต็มที่ คุณได้เพิ่ม Steam Web API Key ลงในเซิร์ฟเวอร์เกม RedM ของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />