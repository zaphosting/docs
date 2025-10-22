---
id: vserver-windows-valheim
title: "VPS: ตั้งค่า Valheim Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Valheim dedicated server บน VPS หรือ เซิร์ฟเวอร์เฉพาะของคุณอย่างรวดเร็วและง่ายดาย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มี VPS หรือ เซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมใช่ไหม? เช่น Valheim Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณได้ยังไง

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="ตั้งค่า Valheim Dedicated Server บน Windows VPS" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งไปกับวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>
<InlineVoucher />

## เตรียมตัว
สำหรับการตั้งค่าเซิร์ฟเวอร์ Valheim คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้ดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นจะเป็นขั้นตอนดาวน์โหลด ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ เปิดไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

เมื่อเห็นข้อความ **Loading Steam API.... OK** แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณก็พร้อมเริ่มติดตั้งเซิร์ฟเวอร์ Valheim ได้เลย



## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** รันคำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 896660` โดย App ID **896660** คือแอปของ **Valheim Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เข้าไปที่โฟลเดอร์ที่ติดตั้งไว้ แล้วไปที่โฟลเดอร์ย่อยนี้:  **../steamapps/common/Valheim dedicated Server/**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพสำหรับรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: start_headless.bat

:::info
อย่าลืมเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้แน่ใจว่าไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ ใส่โค้ดด้านล่างแล้วบันทึกการเปลี่ยนแปลง:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก ต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ที่ใช้ในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

เพิ่มกฎใหม่ในส่วนของกฎขาเข้าและขาออก ตามนี้สำหรับพอร์ต 2456-2458 ทั้ง TCP/UDP




## การตั้งค่าเพิ่มเติม

ตอนนี้การตั้งค่าพื้นฐานเสร็จแล้ว คุณสามารถแก้ไขการตั้งค่าเพิ่มเติมในไฟล์ **start_headless_server.bat** ได้ เช่น เปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ รหัสผ่านแอดมิน และตัวเลือกอื่นๆ โดยไปที่โฟลเดอร์นี้:

```
../steamapps/common/Valheim dedicated Server/
```



## เริ่มเล่น

หลังตั้งค่าเสร็จ คุณก็สามารถเริ่มเซิร์ฟเวอร์ได้โดยรันไฟล์ **start_headless_server.bat** ที่สร้างไว้ จะเปิดคอนโซลเซิร์ฟเวอร์และเริ่มกระบวนการเซิร์ฟเวอร์ ถ้าทุกอย่างราบรื่น เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังเริ่มต้นสำเร็จ


## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่า Valheim บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน!

<InlineVoucher />