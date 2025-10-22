---
id: dedicated-windows-css
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า Counter-Strike: Source Dedicated Server บน Windows"
description: "เรียนรู้วิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Counter-Strike: Source บน VPS หรือเซิร์ฟเวอร์ของคุณได้อย่างรวดเร็วและง่ายดาย → เริ่มเลยตอนนี้"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มี VPS หรือเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมใช่ไหม? เช่น Counter-Strike: Source Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณได้ยังไง

<InlineVoucher />

## การเตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Source คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้คุณดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นให้ดาวน์โหลดไฟล์ ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ ให้รันไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

เมื่อเห็นข้อความ **Loading Steam API.... OK** แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณก็พร้อมเริ่มติดตั้งเซิร์ฟเวอร์ Counter-Strike: Source ได้เลย



## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** ใช้คำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 232330` โดย App ID **232330** คือแอปสำหรับ **Counter-Strike: Source Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

รอให้ดาวน์โหลดเสร็จ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อเสร็จจะมีข้อความยืนยันความสำเร็จขึ้นมา

เพื่อให้เซิร์ฟเวอร์ของคุณมองเห็นและเข้าถึงได้จากภายนอก คุณต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ที่ใช้ในไฟร์วอลล์ Windows เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามภาพ แล้วเพิ่มพอร์ตเหล่านี้: 27015-27020 สำหรับโปรโตคอล TCP/UDP



## การตั้งค่า

ตอนนี้คุณตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Source เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมได้โดยแก้ไขไฟล์ launch โดยตรง ไปที่โฟลเดอร์ root ของคุณ จากนั้นเข้าไปที่โฟลเดอร์ cfg แล้วเปิดไฟล์ `server.cfg` เพื่อแก้ไขตัวเลือกเซิร์ฟเวอร์

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## การลงทะเบียน GSL Token

เพื่อให้ผู้เล่นคนอื่นเข้าร่วมเซิร์ฟเวอร์ของคุณได้ คุณต้องสร้างและใส่ Game Server Login Token (GSLT) ซึ่งเป็นโทเค็นที่ยืนยันตัวเซิร์ฟเวอร์กับ Steam ไปที่ http://steamcommunity.com/dev/managegameservers เพื่อสร้างโทเค็นโดยใช้ game ID 232330 ซึ่งตรงกับ Counter-Strike: Source

เมื่อได้โทเค็นแล้ว ให้ใส่ในพารามิเตอร์การเริ่มต้นเซิร์ฟเวอร์ด้วยคำสั่ง `+sv_setsteamaccount <TOKEN>`



## การเริ่มต้น & การเชื่อมต่อเซิร์ฟเวอร์

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่โฟลเดอร์เกมหลักและรันคำสั่งนี้:

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

คุณจะเห็นล็อกใน command prompt แสดงว่าเซิร์ฟเวอร์เริ่มทำงานสำเร็จ โปรดทราบว่าการเริ่มต้นครั้งแรกอาจใช้เวลานานเพราะกำลังตั้งค่าทุกอย่าง หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างในรายการเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:2456`


## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Source บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />