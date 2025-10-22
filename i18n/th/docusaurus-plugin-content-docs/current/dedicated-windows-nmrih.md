---
id: dedicated-windows-nmrih
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า No More Room In Hell Dedicated Server บน Windows"
description: "เรียนรู้วิธีตั้งค่าเซิร์ฟเวอร์เกม No More Room In Hell บน VPS หรือเซิร์ฟเวอร์เฉพาะของคุณได้อย่างรวดเร็วและง่ายดาย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
มี VPS หรือเซิร์ฟเวอร์เฉพาะและอยากติดตั้งเซิร์ฟเวอร์เกมใช่ไหม? เช่น No More Room In Hell Dedicated Server? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณได้อย่างไร

<InlineVoucher />

## การเตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ No More Room In Hell คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้คุณดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นจะเป็นขั้นตอนการดาวน์โหลด ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากสำหรับแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ เปิดไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ No More Room In Hell ได้เลย



## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** รันคำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 317670` โดย App ID **317670** คือแอปสำหรับ **No More Room In Hell Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

โปรดรอจนดาวน์โหลดเสร็จ อาจใช้เวลานานสำหรับเกมที่มีขนาดใหญ่ เมื่อเสร็จสมบูรณ์จะมีข้อความยืนยันความสำเร็จขึ้นมา

เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก ต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ที่ใช้ในไฟร์วอลล์ Windows เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามภาพด้านล่าง แล้วเพิ่มพอร์ตต่อไปนี้: 27015-27020 สำหรับโปรโตคอล TCP/UDP



## การตั้งค่า

ตอนนี้คุณตั้งค่าเซิร์ฟเวอร์ No More Room In Hell เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมได้โดยแก้ไขไฟล์ launch โดยตรง ไปที่ไดเรกทอรีหลักของคุณ จากนั้นเข้าโฟลเดอร์ cfg และเปิดไฟล์ `server.cfg` เพื่อแก้ไขตัวเลือกเซิร์ฟเวอร์

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## การลงทะเบียน GSL Token

เพื่อให้ผู้เล่นคนอื่นเข้าร่วมเซิร์ฟเวอร์ของคุณได้ คุณต้องสร้างและใส่ Game Server Login Token (GSLT) โทเค็นนี้จะยืนยันตัวตนเซิร์ฟเวอร์กับ Steam เข้าไปที่ http://steamcommunity.com/dev/managegameservers เพื่อสร้างโทเค็นโดยใช้รหัสเกม 317670 ซึ่งเป็นของ No More Room In Hell

เมื่อได้โทเค็นแล้ว ให้ใส่ในพารามิเตอร์การเริ่มเซิร์ฟเวอร์ด้วยคำสั่ง `+sv_setsteamaccount <TOKEN>`



## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีเกมหลักและรันคำสั่งเริ่มต้นนี้:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

คุณจะเห็นล็อกในพรอมต์คำสั่งที่บอกว่าการเริ่มต้นสำเร็จ โปรดทราบว่าการเริ่มต้นครั้งแรกอาจใช้เวลานานเพราะกำลังตั้งค่าทุกอย่าง หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างในรายการเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:2456`


## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ No More Room In Hell บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />