---
id: dedicated-linux-vrising
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า V-Rising Dedicated Server บน Linux"
description: "ค้นพบวิธีตั้งค่า V-Rising Dedicated Server บน Linux เพื่อการเช่าเซิร์ฟเวอร์เกมและการจัดการที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณมีเซิร์ฟเวอร์เฉพาะ Linux และต้องการติดตั้งบริการ V-Rising Dedicated Server บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ Linux ของคุณผ่าน SteamCMD เราจะใช้ Ubuntu เป็นตัวอย่าง แต่กระบวนการควรจะคล้ายกันมากสำหรับดิสโทรอื่นๆ

:::tip
รู้ไหมว่าคุณสามารถติดตั้ง **ZAP GS/TS3 Interface** ของเราโดยตรงบนเซิร์ฟเวอร์เฉพาะของคุณได้เลย ช่วยให้คุณตั้งค่าเซิร์ฟเวอร์เกม พร้อมการเชื่อมต่อโดยตรงกับแดชบอร์ด ZAP-Hosting ของคุณได้ในไม่กี่คลิก! เรียนรู้เพิ่มเติมเกี่ยวกับ [GS/TS3 Interface](dedicated-linux-gs-interface.md)
:::

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์เฉพาะของคุณผ่าน SSH ใช้คู่มือ [SSH Initial Access](dedicated-linux-ssh.md) ของเรา หากคุณต้องการความช่วยเหลือในการเชื่อมต่อ

คุณจะต้องทำการตั้งค่า SteamCMD ครั้งแรกหากนี่เป็นครั้งแรกที่ใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้คู่มือ [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) ของเราและตรวจสอบให้แน่ใจว่า SteamCMD ถูกตั้งค่าเรียบร้อยก่อนดำเนินการต่อ

:::info Wine Compatibility Layer
V-Rising ยังไม่มีเซิร์ฟเวอร์เวอร์ชัน native สำหรับ Linux ซึ่งหมายความว่าคุณต้องเตรียมตัวเพิ่มอีกขั้นตอนเพื่อรันเซิร์ฟเวอร์เวอร์ชัน Windows บน Linux

คุณต้องติดตั้งเลเยอร์ความเข้ากันได้ **Wine** ครั้งเดียวเท่านั้นหากนี่เป็นครั้งแรกที่ใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้คู่มือ [Wine Compatibility Layer Setup](dedicated-linux-wine.md) ของเราเพื่อเตรียมตัวก่อนดำเนินการต่อ
:::

## การติดตั้ง

เริ่มด้วยการล็อกอินเป็นผู้ใช้ `steam` และไปที่ไดเรกทอรีโฮมของผู้ใช้ `steam` เพื่อจัดระเบียบไฟล์
```
sudo -u steam -s
cd ~
```

เมื่อเข้าสู่ระบบแล้ว คุณสามารถเริ่มกระบวนการติดตั้งได้โดยใช้คำสั่งนี้ เพื่อเริ่มติดตั้งผ่าน SteamCMD โดยตรงในผู้ใช้ `steam` โดยใช้พารามิเตอร์ `+@sSteamCmdForcePlatformType windows` เพื่อบังคับให้ติดตั้งไบนารี Windows
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

โปรดรอจนดาวน์โหลดเสร็จ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อสำเร็จ คุณจะเห็นข้อความยืนยันความสำเร็จ

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ V-Rising เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเซิร์ฟเวอร์เพิ่มเติมได้โดยแก้ไขไฟล์ launch

คุณสามารถปรับแต่งพารามิเตอร์ทั้งหมดได้โดยเข้าไปแก้ไขไฟล์การตั้งค่า **ServerGameSettings.json** และ **ServerHostSettings.json** ที่อยู่ในโฟลเดอร์ Settings
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

ดูคู่มือ V-Rising [Server Configuration](vrising-configuration.md) ของเราเพื่อดูตัวเลือกเซิร์ฟเวอร์ทั้งหมดและความหมายของแต่ละตัวเลือก

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีเกมหลัก เราแนะนำให้สร้างสำเนาไฟล์ batch ตัวอย่าง
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

คุณสามารถแก้ไขไฟล์นี้ได้ เมื่อพร้อมแล้ว ให้รันไฟล์ **start_server.bat** ใหม่โดยใช้คำสั่งด้านล่าง อย่าลืมเพิ่มคำสั่ง **xvfb-run** และ **wine** เพื่อรันผ่านเลเยอร์ความเข้ากันได้ Wine
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

คุณจะเห็นล็อกปรากฏในพรอมต์คำสั่ง ซึ่งแสดงว่าการเริ่มต้นสำเร็จ โปรดทราบว่าการเริ่มต้นครั้งแรกอาจใช้เวลานานเนื่องจากการตั้งค่าทั้งหมด นอกจากนี้คุณยังสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างในรายการเซิร์ฟเวอร์ โดยค้นหาว่า: `[your_ip_address]:8211`

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ V-Rising บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว! ขั้นตอนต่อไป เราแนะนำให้ดูคู่มือ [Setup Linux Service](dedicated-linux-create-gameservice.md) ของเรา ซึ่งครอบคลุมการตั้งค่าเซิร์ฟเวอร์เกมเฉพาะของคุณเป็นบริการ ซึ่งมีข้อดีมากมาย เช่น การเปิดเซิร์ฟเวอร์อัตโนมัติเมื่อบูต, อัปเดตเซิร์ฟเวอร์อัตโนมัติ, การจัดการและเข้าถึงล็อกได้ง่าย และอื่นๆ อีกมากมาย!

ถ้าคุณมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />