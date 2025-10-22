---
id: source-metamod-installation
title: ติดตั้ง Source Mod และ Meta Mod บนเซิร์ฟเวอร์
description: "ค้นพบวิธีเพิ่มประสิทธิภาพเซิร์ฟเวอร์เกม Source engine ของคุณด้วย Source- และ Metamod สำหรับการปรับแต่งและการจัดการขั้นสูง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การติดตั้ง
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## SM และ MM คืออะไร?

Source- และ Metamod คือส่วนขยายสองตัวของ Half Life 2 ที่ช่วยให้คุณสามารถปรับแต่งเซิร์ฟเวอร์เกม Source engine (เช่น CS: S, CS: GO, DoD: S, TF2 ฯลฯ) ได้มากกว่าปกติ รวมถึงการใช้ปลั๊กอินและการจัดการเซิร์ฟเวอร์ที่ขยายขึ้น

<InlineVoucher />

## การติดตั้ง SM / MM

### ดาวน์โหลดไฟล์

อันดับแรกต้องมีส่วนขยายจริง ๆ ก่อน โดยควรใช้เวอร์ชันล่าสุด (**stable**) เสมอเพื่อให้ยังใช้งานได้เต็มประสิทธิภาพและเข้ากันได้ดี เวอร์ชันล่าสุดสามารถดาวน์โหลดได้จากเว็บไซต์ต่อไปนี้:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
เซิร์ฟเวอร์เกม Source engine ใน ZAP-Hosting มักจะรันบนระบบปฏิบัติการ Linux ดังนั้นจึงต้องใช้เวอร์ชัน Linux ของส่วนขยายเหล่านี้
:::

### แตกไฟล์

เมื่อดาวน์โหลดส่วนขยายทั้งสองมาแล้ว คุณจะได้ไฟล์บีบอัดสองไฟล์ (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) ซึ่งต้องแตกไฟล์ก่อนอัปโหลด คุณสามารถใช้โปรแกรมอย่าง Winrar, 7zip หรือโปรแกรมที่คล้ายกันได้

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

จากไฟล์ที่แตกออกมาจะได้โฟลเดอร์ addons และ cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### อัปโหลดไฟล์

เมื่อทำตามขั้นตอนข้างต้นเสร็จแล้ว ก็เริ่มการติดตั้งจริงได้ โดยเราต้องเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน FTP เพื่ออัปโหลดโฟลเดอร์ของส่วนขยาย

ไฟล์ต้องอัปโหลดไปยังไดเรกทอรีหลัก ซึ่งไดเรกทอรีหลักจะอยู่ในโครงสร้างโฟลเดอร์ดังนี้:

| เกม | โฟลเดอร์  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

โครงสร้างโฟลเดอร์ควรจะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## ตรวจสอบการติดตั้ง SM / MM ของคุณ

มีสองวิธีในการตรวจสอบว่าส่วนขยายถูกติดตั้งถูกต้องหรือไม่:

1. คอนโซลในเกม
2. Remote Console (HLSW - RCON)

### ตรวจสอบเวอร์ชันผ่านคำสั่ง

เราสามารถตรวจสอบเวอร์ชันของเซิร์ฟเวอร์ได้ตามขั้นตอนนี้:

1. เชื่อมต่อกับเซิร์ฟเวอร์ในเกม
2. เปิดคอนโซลแล้วพิมพ์คำสั่งต่อไปนี้:

```
sm version
meta version
```

ผลลัพธ์จะเป็นแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 ตรวจสอบเวอร์ชันผ่าน RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

เราสามารถตรวจสอบเวอร์ชันของเซิร์ฟเวอร์ตัวเองได้ตามขั้นตอนนี้:

1. ใส่ที่อยู่ IP ด้านบนในช่อง IP / Port
2. ไปที่ Rcon Configuration ด้านล่าง
3. ใส่รหัสผ่าน Rcon ของคุณในช่อง Rcon password
4. เปิดคอนโซลแล้วพิมพ์คำสั่งต่อไปนี้:

```
sm version
meta version
```

ผลลัพธ์จะเป็นแบบนี้:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

ดาวน์โหลด HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />