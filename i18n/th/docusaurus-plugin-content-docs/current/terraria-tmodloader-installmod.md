---
id: terraria-tmodloader-installmod
title: "Terraria: การติดตั้งม็อด (tModLoader)"
description: "ค้นพบวิธีติดตั้งและเปิดใช้งานม็อด tModLoader สำหรับ Terraria ง่ายๆ เพื่อเพิ่มประสบการณ์การเล่นเกมของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งม็อด (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## การติดตั้งม็อดผ่าน tModLoader

tModLoader สำหรับ Terraria คือม็อดสำคัญที่ช่วยให้คุณโหลดม็อดลงบนเซิร์ฟเวอร์เกม Terraria ของคุณได้ การติดตั้งทำได้ง่ายๆ ด้วยการลากแล้ววาง และปรับแต่งเพียงเล็กน้อยบนเซิร์ฟเวอร์ของคุณ ทำให้ทั้งกระบวนการง่ายและเสร็จในไม่กี่นาที


## การติดตั้ง tModLoader บน PC ของคุณ

ถ้าคุณยังไม่ได้ติดตั้ง tModLoader คุณสามารถดาวน์โหลดได้ฟรีโดยตรงจาก Steam แค่ค้นหา tModLoader ใน Steam Store หรือใช้ลิงก์นี้เลย: [tModLoader ใน Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

หลังจากดาวน์โหลดและติดตั้งแล้ว คุณสามารถเปิด tModLoader ได้โดยตรงจาก Steam

## การเพิ่มม็อดบน PC ของคุณ

เมื่อเข้าเมนูหลักแล้ว ให้เปิดโฟลเดอร์ม็อดของคุณ โดยคลิกที่ **Mods** แล้วเลือก **Manage Mods** จากนั้นคลิก **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

ในโฟลเดอร์ที่เปิดขึ้นมา ซึ่งโดยปกติจะอยู่ที่ **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** คุณสามารถวางม็อดที่ต้องการได้เลย
ในตัวอย่างนี้เราจะติดตั้ง Calamity-Mod

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
ม็อดต้องมีนามสกุล **.tmod** เสมอ มิฉะนั้นจะไม่สามารถโหลดจากเซิร์ฟเวอร์ได้!
:::

จากนั้นคุณสามารถปิดโฟลเดอร์ได้ แล้วคลิกที่ **Back** ในเกม จากนั้นไปที่ **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

คุณจะเห็นม็อดที่เพิ่มเข้ามา ซึ่งสามารถเปิดใช้งานได้โดยคลิกที่ **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

เพื่อเปิดใช้งานม็อด ให้คลิกที่ **Reload Mods** จากนั้นคุณสามารถปิดเกมและเริ่มติดตั้งม็อดบนเซิร์ฟเวอร์ของคุณได้เลย


## การติดตั้งม็อดบนเซิร์ฟเวอร์ของคุณ

เพื่อให้สามารถติดตั้งม็อดบนเซิร์ฟเวอร์ของคุณได้ ให้เชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP วิธีการดูได้ที่นี่: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

จากนั้นไปที่ไดเรกทอรีนี้: /g******/terraria/mods/ แล้ววางไฟล์ **.tmod** ที่ใช้ก่อนหน้านี้ลงไป:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
ถ้าไม่มีไฟล์ชื่อ **enabled.json** คุณต้องเริ่มเซิร์ฟเวอร์ก่อน ไฟล์นี้ถึงจะถูกสร้างขึ้น หรือคุณสามารถสร้างไฟล์นี้เองก็ได้
:::

หลังจากนั้นเปิดไฟล์ **enabled.json** ผ่าน **คลิกขวา > แก้ไข** แล้วเพิ่มชื่อม็อดของคุณลงไปในไฟล์ โดยจะมีลักษณะดังนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

ถ้าคุณต้องการเพิ่มม็อดหลายตัว สามารถทำได้แบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
อย่าลืมใส่เครื่องหมายจุลภาค (,) หลังชื่อม็อดแต่ละตัว ยกเว้นชื่อม็อดตัวสุดท้าย!
:::

ตอนนี้คุณสามารถปิดการเชื่อมต่อ FTP, เริ่มเซิร์ฟเวอร์ของคุณ และเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน tModLoader ที่ดาวน์โหลดจาก Steam ได้เลย

กด **ESC** แล้วคลิกที่ **Settings** จากนั้นคลิกที่ **Mod Configuration** เพื่อดูม็อดที่โหลดบนเซิร์ฟเวอร์ของคุณ:

<InlineVoucher />