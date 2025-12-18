---
id: vserver-linux-vrising
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ V-Rising บน Linux"
description: "ค้นพบวิธีติดตั้งและรันเซิร์ฟเวอร์เฉพาะ V-Rising บน VPS Linux ของคุณอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณมี VPS Linux และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ V-Rising ไว้ใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ Linux ของคุณผ่าน SteamCMD เราจะใช้ Ubuntu เป็นตัวอย่าง แต่กระบวนการควรจะคล้ายกันมากสำหรับดิสโทรอื่นๆ

:::tip
รู้ไหมว่าคุณสามารถติดตั้ง **ZAP GS/TS3 Interface** ของเราโดยตรงบน VPS ของคุณได้เลย ทำให้คุณตั้งค่าเซิร์ฟเวอร์เกม พร้อมการเชื่อมต่อโดยตรงกับแดชบอร์ด ZAP-Hosting ของคุณได้ในไม่กี่คลิก! เรียนรู้เพิ่มเติมเกี่ยวกับ [GS/TS3 Interface](vserver-linux-gs-interface.md)
:::

<InlineVoucher />

## เตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน SSH หากต้องการความช่วยเหลือในการเชื่อมต่อ ให้ดูคู่มือ [SSH Initial Access](vserver-linux-ssh.md)

คุณจะต้องทำการตั้งค่า SteamCMD ครั้งแรกถ้านี่เป็นครั้งแรกที่ใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้คู่มือ [SteamCMD Linux Setup](vserver-linux-steamcmd.md) และตรวจสอบให้แน่ใจว่า SteamCMD ถูกตั้งค่าเรียบร้อยก่อนดำเนินการต่อ

:::info Wine Compatibility Layer
ตอนนี้ V-Rising ยังไม่มีเซิร์ฟเวอร์เวอร์ชัน native สำหรับ Linux ซึ่งหมายความว่าคุณต้องเตรียมตัวเพิ่มอีกขั้นตอนเพื่อรันเซิร์ฟเวอร์เวอร์ชัน Windows บน Linux

คุณต้องติดตั้งเลเยอร์ความเข้ากันได้ **Wine** ครั้งเดียวถ้านี่เป็นครั้งแรกที่ใช้บนเซิร์ฟเวอร์ Linux ของคุณ กรุณาใช้คู่มือ [Wine Compatibility Layer Setup](vserver-linux-wine.md) เพื่อเตรียมตัวก่อนดำเนินการต่อ
:::

## การติดตั้ง

เริ่มด้วยการล็อกอินเป็นผู้ใช้ `steam` และไปที่โฟลเดอร์ home ของผู้ใช้ `steam` เพื่อจัดระเบียบไฟล์
```
sudo -u steam -s
cd ~
```

เมื่อเข้าสู่ระบบแล้ว คุณสามารถเริ่มติดตั้งโดยใช้คำสั่งนี้เพื่อเรียก SteamCMD ติดตั้งเซิร์ฟเวอร์โดยตรงในโฟลเดอร์ของผู้ใช้ `steam` โดยใช้พารามิเตอร์ `+@sSteamCmdForcePlatformType windows` เพื่อบังคับติดตั้งไบนารี Windows
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

โปรดรอจนดาวน์โหลดเสร็จ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อสำเร็จจะมีข้อความยืนยันขึ้นมา

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ V-Rising เสร็จแล้ว คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมได้โดยแก้ไขไฟล์ launch

คุณสามารถปรับแต่งพารามิเตอร์ทั้งหมดได้โดยเข้าไปแก้ไขไฟล์ **ServerGameSettings.json** และ **ServerHostSettings.json** ที่อยู่ในโฟลเดอร์ Settings
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

ดูคู่มือ V-Rising [Server Configuration](vrising-configuration.md) เพื่อดูตัวเลือกเซิร์ฟเวอร์ทั้งหมดและความหมายของแต่ละตัวเลือก

## การเริ่มต้น & การเชื่อมต่อเซิร์ฟเวอร์

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่โฟลเดอร์เกมหลัก เราแนะนำให้สร้างสำเนาไฟล์ batch ตัวอย่าง
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

คุณสามารถแก้ไขไฟล์นี้ได้ เมื่อพร้อมแล้ว รันไฟล์ **start_server.bat** ใหม่โดยใช้คำสั่งด้านล่าง อย่าลืมเพิ่มคำสั่ง **xvfb-run** และ **wine** เพื่อรันผ่านเลเยอร์ความเข้ากันได้ Wine
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

คุณจะเห็นล็อกในพรอมต์คำสั่งซึ่งแสดงว่าการเริ่มต้นสำเร็จ โปรดทราบว่าการเริ่มต้นครั้งแรกอาจใช้เวลานานเนื่องจากการตั้งค่าทั้งหมด หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างในรายการเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:8211`

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ V-Rising บน VPS ของคุณสำเร็จแล้ว! ขั้นตอนต่อไป เราแนะนำให้ดูคู่มือ [Setup Linux Service](vserver-linux-create-gameservice.md) ซึ่งครอบคลุมการตั้งค่าเซิร์ฟเวอร์เกมเฉพาะของคุณเป็นบริการ ซึ่งมีข้อดีหลายอย่าง เช่น การเปิดเซิร์ฟเวอร์อัตโนมัติเมื่อบูต, อัปเดตเซิร์ฟเวอร์อัตโนมัติ, การจัดการและเข้าถึงล็อกได้ง่าย และอื่นๆ อีกมากมาย!

ถ้าคุณมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!

<InlineVoucher />