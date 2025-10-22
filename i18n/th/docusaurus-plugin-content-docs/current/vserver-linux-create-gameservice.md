---
id: vserver-linux-create-gameservice
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เกมเฉพาะของคุณเป็นบริการ Linux"
description: "ค้นพบวิธีสร้างและจัดการบริการ Linux สำหรับเซิร์ฟเวอร์เกมเฉพาะ เพื่อให้เซิร์ฟเวอร์เริ่มทำงานอัตโนมัติและดูแลรักษาง่าย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่าบริการ Linux
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

บริการ (Services) เป็นส่วนสำคัญของ Linux หมายถึงกระบวนการหรือแอปพลิเคชันที่ทำงานอยู่เบื้องหลัง ไม่ว่าจะเป็นงานที่กำหนดไว้ล่วงหน้าหรือแบบอิงเหตุการณ์ ซึ่งมีประโยชน์มากมาย เช่น การเปิดเซิร์ฟเวอร์อัตโนมัติเมื่อบูตเครื่อง, อัปเดตเซิร์ฟเวอร์อัตโนมัติ, การจัดการและเข้าถึงล็อกได้ง่าย และอื่น ๆ อีกมากมาย! ในคู่มือนี้ เราจะพาคุณไปดูขั้นตอนการสร้างบริการสำหรับเซิร์ฟเวอร์เกมเฉพาะของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน SSH หากต้องการความช่วยเหลือ สามารถดูได้จาก [คู่มือการเข้าถึง SSH เบื้องต้น](vserver-linux-ssh.md)

นอกจากนี้ คุณควรทำตามคู่มือเซิร์ฟเวอร์เกมเฉพาะในส่วนนี้เพื่อทำการติดตั้งและตั้งค่าเซิร์ฟเวอร์เกมบนระบบ Linux ของคุณ ในคู่มือนี้ เราจะใช้ตัวอย่างจาก [เซิร์ฟเวอร์เกมเฉพาะ Palworld](vserver-linux-palworld.md) แต่คำแนะนำสามารถปรับใช้กับคู่มืออื่น ๆ ของเราได้ทั้งหมด

## การสร้างบริการ

เริ่มด้วยการสร้างไฟล์บริการใหม่สำหรับเซิร์ฟเวอร์เกมเฉพาะที่คุณตั้งค่าไว้ แทนที่ `[your_game]` ด้วยชื่อที่คุณต้องการ เราแนะนำให้ใช้ชื่อเกมเพื่อความเป็นระเบียบ เช่น `palworld.service`
```
sudo nano /etc/systemd/system/[your_game].service
```

## การตั้งค่าบริการ

เมื่อเปิด nano editor แล้ว ให้คัดลอกเนื้อหาไฟล์ตัวอย่างด้านล่างนี้ ซึ่งเป็นเทมเพลตไฟล์บริการที่คุณสามารถนำไปใช้ซ้ำได้ เรามีสองเวอร์ชัน คือ สำหรับคู่มือที่ใช้ SteamCMD และสำหรับเกมที่ไม่ใช้ SteamCMD

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="เกม SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="เกมทั่วไป">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

มาดูรายละเอียดของเนื้อหาไฟล์กันเพื่อความเข้าใจที่ชัดเจนขึ้น
- `Description`: อธิบายได้ตามใจ เพื่อช่วยให้แยกแยะวัตถุประสงค์ของบริการได้ง่าย
- `User`: ตามคู่มือของเรา คุณควรตั้งค่า user แยกต่างหาก เช่น `steam` สำหรับ SteamCMD หรือ `gameservers` สำหรับเกมที่ไม่ใช้ SteamCMD หากยังไม่ได้ตั้งค่า ให้ใช้ user ที่จะรันบริการนี้
- `WorkingDirectory`: เส้นทางไปยังไดเรกทอรีหลักที่มีไฟล์ทั้งหมดที่บริการต้องการ
- `ExecStartPre` (เฉพาะ SteamCMD): ในช่องนี้ เราจะตั้งคำสั่งติดตั้ง SteamCMD เหมือนเดิม ซึ่งจะรันทุกครั้งที่เซิร์ฟเวอร์รีสตาร์ท เพื่อให้แน่ใจว่าเซิร์ฟเวอร์อัปเดตล่าสุด คุณควรคัดลอกจากคู่มือเซิร์ฟเวอร์เกมเฉพาะ หรือแก้ไขค่าเองตามเกมที่ใช้
- `ExecStart`: กำหนดงานที่ต้องรันกับบริการนี้อีกครั้ง คัดลอกเส้นทางจากคู่มือเซิร์ฟเวอร์เกมเฉพาะ หรือแก้ไขเองเพื่อชี้ไปยังไฟล์เริ่มต้น

:::important เลเยอร์ความเข้ากันได้ Wine
สำหรับเกมที่ต้องใช้เลเยอร์ความเข้ากันได้ **Wine** ในการรัน คุณควรรวมคำสั่ง **xvfb-run** และ **wine** ไว้ในพารามิเตอร์ `ExecStart` เช่นตัวอย่างสำหรับ V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

อย่าลืมตรวจสอบให้คำสั่งติดตั้ง SteamCMD ใน `ExecStartPre` รวมพารามิเตอร์ `+@sSteamCmdForcePlatformType` ด้วยถ้าจำเป็นเพื่อบังคับใช้เวอร์ชันแพลตฟอร์ม
:::

เมื่อแก้ไขค่าต่าง ๆ ให้เหมาะกับเซิร์ฟเวอร์เกมเฉพาะของคุณแล้ว ให้บันทึกไฟล์และออกจาก nano โดยกด `CTRL + X` ตามด้วย `Y` เพื่อยืนยัน และกด `ENTER`

ตัวอย่างไฟล์ของเราในกรณี Palworld จะเป็นแบบนี้:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## การจัดการบริการ

เมื่อสร้างไฟล์บริการเสร็จแล้ว คุณต้องเปิดใช้งานมัน สำหรับตัวอย่าง `palworld.service` ให้แทนที่ `[your_service]` ด้วย `palworld`
```
sudo systemctl enable [your_service]
```

:::tip
ถ้าคุณแก้ไขไฟล์บริการเมื่อไหร่ อย่าลืมรันคำสั่ง `systemctl daemon-reload` หลังจากนั้น เพื่อให้การเปลี่ยนแปลงมีผล
:::

ตอนนี้คุณสามารถเริ่มเซิร์ฟเวอร์ด้วยคำสั่ง `systemctl start` ได้เลย และสามารถหยุดหรือรีสตาร์ทเซิร์ฟเวอร์ได้ด้วยคำสั่งที่คล้ายกัน
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
ถ้าต้องการดูรายละเอียดของบริการ ใช้คำสั่ง `systemctl status` และถ้าต้องการดูล็อกเพื่อดีบัก ให้ใช้คำสั่ง `journalctl -u [your_service].service` เพื่อดูล็อกล่าสุดของบริการ
:::

สุดท้าย ถ้าคุณไม่ต้องการให้บริการรันตอนบูตเครื่องอีกต่อไป ก็แค่ปิดการใช้งานมัน
```
sudo systemctl disable [your_service]
```

## สรุป

ตอนนี้คุณได้ตั้งค่าบริการสำหรับเซิร์ฟเวอร์เกมเฉพาะของคุณเรียบร้อยแล้ว เซิร์ฟเวอร์จะเริ่มทำงานอัตโนมัติเมื่อบูตเครื่อง

คุณยังได้เรียนรู้เกี่ยวกับเนื้อหาในไฟล์บริการ รวมถึงวิธีจัดการบริการด้วยคำสั่งต่าง ๆ

<InlineVoucher />