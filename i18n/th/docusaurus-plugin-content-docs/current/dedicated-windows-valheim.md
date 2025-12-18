---
id: dedicated-windows-valheim
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Valheim Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Valheim dedicated server บนเซิร์ฟเวอร์ของคุณเองเพื่อเล่นมัลติเพลเยอร์แบบลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มีเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมบนมัน? เช่น Valheim Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณได้ยังไง

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="การตั้งค่า Valheim Dedicated Server บน Windows VPS" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>



## การเตรียมตัว
สำหรับการตั้งค่าเซิร์ฟเวอร์ Valheim คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้ดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นให้ดาวน์โหลดไฟล์ ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จแล้ว ให้รันไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ Valheim ได้เลย



## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** ใช้คำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 896660` โดย App ID **896660** คือแอปสำหรับ **Valheim Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::


ไปที่โฟลเดอร์ที่คุณติดตั้งไว้ แล้วเข้าไปที่โฟลเดอร์ย่อยนี้:  **../steamapps/common/Valheim dedicated Server/**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพสำหรับรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: start_headless.bat

:::info
อย่าลืมเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้แน่ใจว่าไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ เพิ่มโค้ดด้านล่างลงไป แล้วบันทึกการเปลี่ยนแปลง:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก พอร์ตเซิร์ฟเวอร์ที่ใช้ต้องถูกเปิด/ส่งต่อในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ แล้วเพิ่มพอร์ต 2456-2458 สำหรับโปรโตคอล TCP/UDP




## การตั้งค่าเพิ่มเติม

การตั้งค่าพื้นฐานเสร็จแล้ว คุณสามารถปรับแต่งเพิ่มเติมได้ในไฟล์ **start_headless_server.bat** ที่นี่คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ รหัสผ่านแอดมิน และตัวเลือกอื่นๆ ได้ โดยไปที่โฟลเดอร์นี้:

```
../steamapps/common/Valheim dedicated Server/
```



## เริ่มเล่น

เมื่อเสร็จขั้นตอนทั้งหมดแล้ว คุณสามารถเริ่มเซิร์ฟเวอร์ได้โดยรันไฟล์ **start_headless_server.bat** ที่สร้างไว้ก่อนหน้านี้ คอนโซลเซิร์ฟเวอร์จะเปิดขึ้นและเริ่มกระบวนการสตาร์ทเซิร์ฟเวอร์ ถ้าทุกอย่างเป็นไปตามแผน เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังจากเริ่มต้นสำเร็จแล้ว