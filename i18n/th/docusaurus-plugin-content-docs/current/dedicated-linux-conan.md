---
id: dedicated-linux-conan
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Conan Exiles Dedicated Server บน Linux"
description: "ค้นพบวิธีตั้งค่า Conan Exiles Dedicated Server บน Linux เพื่อการโฮสต์และจัดการเซิร์ฟเวอร์เกมที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมีเซิร์ฟเวอร์เฉพาะ Linux และต้องการติดตั้งบริการ Conan Exiles Dedicated Server บนเซิร์ฟเวอร์ของคุณใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ Linux ของคุณผ่าน SteamCMD เราจะใช้ Ubuntu เป็นตัวอย่าง แต่กระบวนการควรจะคล้ายกันมากสำหรับดิสโทรอื่นๆ

:::tip
รู้ไหมว่าคุณสามารถติดตั้ง **ZAP GS/TS3 Interface** ของเราโดยตรงบนเซิร์ฟเวอร์เฉพาะของคุณได้เลย ช่วยให้คุณตั้งค่าเซิร์ฟเวอร์เกม พร้อมการเชื่อมต่อโดยตรงกับแดชบอร์ด ZAP-Hosting ของคุณได้ในไม่กี่คลิก! เรียนรู้เพิ่มเติมเกี่ยวกับ [GS/TS3 Interface](dedicated-linux-gs-interface.md)
:::

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์เฉพาะของคุณผ่าน SSH หากต้องการความช่วยเหลือในการเชื่อมต่อ ใช้ [คู่มือ SSH Initial Access](dedicated-linux-ssh.md) ของเราได้เลย

คุณจะต้องทำการตั้งค่า SteamCMD ครั้งแรกหากนี่เป็นครั้งแรกที่คุณใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้ [คู่มือ SteamCMD Linux Setup](dedicated-linux-steamcmd.md) ของเราและตรวจสอบให้แน่ใจว่า SteamCMD ถูกตั้งค่าเรียบร้อยก่อนดำเนินการต่อ

:::info Wine Compatibility Layer
Conan Exiles ตอนนี้ยังไม่มีเซิร์ฟเวอร์เกมเวอร์ชัน native สำหรับ Linux ซึ่งหมายความว่าคุณต้องเตรียมตัวเพิ่มอีกขั้นตอนเพื่อรันเวอร์ชันเซิร์ฟเวอร์ Windows บน Linux

คุณต้องติดตั้ง **Wine** compatibility layer ครั้งเดียวเท่านั้นหากนี่เป็นครั้งแรกที่ใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้ [คู่มือ Wine Compatibility Layer Setup](dedicated-linux-wine.md) ของเราเพื่อเตรียมตัวก่อนดำเนินการต่อ
:::

## การติดตั้ง

เริ่มด้วยการล็อกอินเป็นผู้ใช้ `steam` และไปที่โฟลเดอร์ home ของผู้ใช้ `steam` เพื่อความเป็นระเบียบ
```
sudo -u steam -s
cd ~
```

เมื่อเข้าสู่ระบบแล้ว คุณสามารถเริ่มกระบวนการติดตั้งได้โดยใช้คำสั่งนี้เพื่อเรียก SteamCMD ติดตั้งเซิร์ฟเวอร์โดยตรงในผู้ใช้ `steam` โดยใช้พารามิเตอร์ `+@sSteamCmdForcePlatformType windows` เพื่อบังคับให้ติดตั้งไบนารีของ Windows
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

โปรดรอจนกว่าการดาวน์โหลดจะเสร็จสมบูรณ์ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อเสร็จแล้วจะมีข้อความยืนยันความสำเร็จแสดงขึ้น

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Conan Exiles เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมผ่านไฟล์คอนฟิกที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

คุณสามารถแก้ไขพารามิเตอร์ทั้งหมดได้โดยเข้าไปแก้ไขไฟล์ **WindowsServerEngine.ini** ที่อยู่ในไดเรกทอรีนี้
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

คุณสามารถเพิ่มตัวเลือกการตั้งค่าโดยเพิ่มพารามิเตอร์เฉพาะ เช่น การตั้งชื่อเซิร์ฟเวอร์ รหัสผ่าน และรหัสผ่านแอดมิน โดยเพิ่มโค้ดนี้ลงในไฟล์
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

เราแนะนำให้ดูที่ [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) เพื่อดูรายการตัวเลือกทั้งหมดที่มี

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่โฟลเดอร์เกมหลักและรันไฟล์ **ConanSandboxServer.exe** ด้วยคำสั่งด้านล่าง อย่าลืมเพิ่มคำสั่ง **xvfb-run** และ **wine64** เพื่อรันผ่าน Wine compatibility layer
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

คุณจะเห็นล็อกต่างๆ ปรากฏในคอนโซล แสดงว่าเซิร์ฟเวอร์กำลังเริ่มทำงาน คุณสามารถเชื่อมต่อโดยค้นหาเซิร์ฟเวอร์ในลิสต์เซิร์ฟเวอร์ หรือเชื่อมต่อโดยตรงผ่าน: `[your_ip_address]:7777`

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Conan Exiles บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว ขั้นตอนต่อไป เราแนะนำให้ดู [คู่มือ Setup Linux Service](dedicated-linux-create-gameservice.md) ซึ่งจะช่วยตั้งค่าเซิร์ฟเวอร์เกมเฉพาะของคุณเป็นบริการอัตโนมัติ มีข้อดีมากมาย เช่น การเปิดเซิร์ฟเวอร์อัตโนมัติเมื่อบูต, อัปเดตเซิร์ฟเวอร์อัตโนมัติ, การจัดการง่าย และเข้าถึงล็อกได้สะดวก

ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!