---
id: dedicated-windows-cscz
title: "เซิร์ฟเวอร์เฉพาะ: คู่มือการตั้งค่า Counter-Strike: Condition Zero Dedicated Server บน Windows"
description: "เรียนรู้วิธีตั้งค่า Counter-Strike: Condition Zero เซิร์ฟเวอร์เฉพาะบน VPS หรือเซิร์ฟเวอร์เฉพาะของคุณได้อย่างรวดเร็วและง่ายดาย → เริ่มเรียนรู้เลย"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มี VPS หรือเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมใช่ไหม? เช่น Counter-Strike: Condition Zero Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณได้อย่างไร

<InlineVoucher />

## การเตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Condition Zero คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้คุณดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกมยอดนิยมบน Steam ได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นให้ดาวน์โหลดไฟล์ ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ ให้รันไฟล์นี้และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ Counter-Strike: Condition Zero ได้เลย



## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** ใช้คำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 90` โดย App ID **90** คือแอปสำหรับ **Counter-Strike: Condition Zero Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

โปรดรอให้ดาวน์โหลดเสร็จ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อเสร็จสมบูรณ์จะมีข้อความยืนยันความสำเร็จขึ้นมา

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก พอร์ตเซิร์ฟเวอร์ที่ใช้ต้องถูกเปิด/ส่งต่อในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามภาพด้านล่าง และเพิ่มพอร์ตต่อไปนี้: 27015-27020 สำหรับโปรโตคอล TCP/UDP



## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Condition Zero เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมได้โดยแก้ไขไฟล์ launch โดยตรง ไปที่โฟลเดอร์ root ของคุณ จากนั้นเข้าโฟลเดอร์ cfg และเปิดไฟล์ `server.cfg` เพื่อแก้ไขตัวเลือกเซิร์ฟเวอร์

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่โฟลเดอร์เกมหลักและรันคำสั่งนี้เพื่อเริ่มเซิร์ฟเวอร์:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

คุณจะเห็นล็อกในคอนโซลที่บอกว่าการเริ่มต้นสำเร็จ โปรดทราบว่าการเริ่มต้นครั้งแรกอาจใช้เวลานานเพราะกำลังตั้งค่าทุกอย่าง หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างในรายชื่อเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:2456`


## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Counter-Strike: Condition Zero บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />