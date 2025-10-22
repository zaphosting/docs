---
id: gmod-servercfg
title: "Garry's Mod: การตั้งค่า Server.cfg"
description: "ปรับแต่งการตั้งค่าเซิร์ฟเวอร์เกม Garry's Mod ของคุณเพื่อปรับแต่งการเล่นและจำกัดการสปawns เพื่อประสบการณ์ที่ดีที่สุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การแก้ไข Server.cfg ของ Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## ปรับแต่ง server.cfg ของคุณใน Garry's Mod

ถ้าต้องการเปลี่ยน server.cfg โดยตรงผ่านเว็บอินเทอร์เฟซของเรา ให้ไปที่แท็บ Configs

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

จากนั้นเปิด server.cfg ในตัวแก้ไข Config ที่ติดตั้งมาให้

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

ตอนนี้คุณอยู่ในตัวแก้ไข Config ของเรา ที่นี่คุณสามารถเปลี่ยนแปลงตัวแปรทั้งหมดตามต้องการ โปรดระวังอย่าให้ตั้งค่าซ้ำซ้อนระหว่างแท็บ Settings กับ server.cfg เพราะอาจส่งผลต่อ: hostname, rcon_password และ sv_password

ตัวแปรที่สามารถปรับแต่งเซิร์ฟเวอร์เกม Garry's Mod ของคุณได้:

การตั้งค่าสปawns:
```
sbox_maxprops 150		//กำหนดจำนวนสูงสุดของ props ที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxragdolls 10		//กำหนดจำนวนสูงสุดของ ragdolls ที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxballoons 10		//กำหนดจำนวนสูงสุดของลูกโป่งที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxeffects 10		//กำหนดจำนวนสูงสุดของเอฟเฟกต์ที่ผู้เล่นแต่ละคนสามารถมีได้ (มีผลต่อ FPS)
sbox_maxdynamite 10		//กำหนดจำนวนสูงสุดของไดนาไมต์ที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxlamps 10		//กำหนดจำนวนสูงสุดของโคมไฟที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxthrusters 10	//กำหนดจำนวนสูงสุดของเครื่องผลักดันที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxwheels 10		//กำหนดจำนวนสูงสุดของล้อที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxnpcs 10			//กำหนดจำนวนสูงสุดของ NPCs ที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxhoverballs 10	//กำหนดจำนวนสูงสุดของลูกบอลลอยที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxvehicles 10		//กำหนดจำนวนสูงสุดของยานพาหนะที่ผู้เล่นแต่ละคนสามารถมีได้
sbox_maxbuttons 10		//กำหนดจำนวนสูงสุดของปุ่มที่ผู้เล่นแต่ละคนสามารถมีได้
```

การตั้งค่าเกม:
```
sbox_plpldamage 0 / 1	//0 = ปิด PVP, 1 = เปิด PVP
sbox_godmode	0 / 1	//0 = ปิด, 1 = เปิด (โหมดเทพสำหรับผู้เล่นทุกคน)
sbox_noclip		0 / 1	//0 = ปิด Noclip, 1 = เปิด Noclip
sv_noclipaccelerate 3	//ปรับความเร็วของ noclip
sv_alltalk 1			//ถ้าเปิดใช้งาน คุณจะได้ยินเสียงผู้เล่นทุกคนในเซิร์ฟเวอร์
```

การตั้งค่าเครือข่าย (ไม่แนะนำให้เปลี่ยน)
```
sv_minrate 0			//ความเร็วเชื่อมต่อต่ำสุด
sv_maxrate 10000		//ความเร็วเชื่อมต่อสูงสุด
sv_minupdaterrate 10	//อัตรา Tick ต่ำสุด
sv_maxupdaterrate 66	//อัตรา Tick สูงสุด
net_maxfilesize	64		//ขนาดไฟล์สูงสุดที่สามารถโอนไปได้โดยไม่ใช้ FastDL
sv_lan 0				//ตั้งค่าเกมให้เป็นออนไลน์
sv_region 3				//0+1 = US, 2 = South Africa, 3 = Europe, 4 = Asia, 5 = Australia, 6 = Middle East, 7 = Africa, 255 = Worldwide
```

ถ้าคุณเปลี่ยนแปลงทุกอย่างตามต้องการแล้ว ก็แค่บันทึกการเปลี่ยนแปลงของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

หลังจากรีบูตเซิร์ฟเวอร์ การเปลี่ยนแปลงทั้งหมดจะมีผลทันที

<InlineVoucher />