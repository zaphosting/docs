---
id: dedicated-windows-ark
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า ARK Survival Evolved Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า ARK: Survival Evolved Dedicated Server บน Windows VPS เพื่อเล่นมัลติเพลเยอร์ได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การตั้งค่า ARK Survival Evolved Dedicated Server
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

มี Windows VPS แล้วอยากติดตั้งเซิร์ฟเวอร์เกมบนมันใช่ไหม? เช่น ARK: Survival Evolved Dedicated Server? ถ้าใช่ คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณยังไง เชื่อมต่อกับ VPS ของคุณผ่าน RDP เพื่อเริ่มตั้งค่า ARK: Survival Evolved Dedicated Server ของคุณ ถ้าคุณยังไม่รู้วิธีเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน RDP เราแนะนำให้ดูที่ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md)

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="การตั้งค่า ARK: Survival Evolved Dedicated Server บน Windows VPS" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>

<InlineVoucher />

## การเตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ ARK คุณจะต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้ดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการที่นี่: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นให้ดาวน์โหลดไฟล์ ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ เปิดไฟล์นี้และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณก็พร้อมเริ่มติดตั้งเซิร์ฟเวอร์ ARK ได้เลย



## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** ใช้คำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 376030` โดย App ID **376030** คือแอปสำหรับ **ARK: Survival Evolved Dedicated Server**

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::



ไปที่โฟลเดอร์ที่คุณติดตั้งไว้ แล้วเข้าไปที่โฟลเดอร์ย่อยนี้: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพสำหรับรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: start-ark.bat

:::info
อย่าลืมเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้แน่ใจว่าไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ ใส่โค้ดด้านล่างลงไป แล้วบันทึกการเปลี่ยนแปลง:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก พอร์ตเซิร์ฟเวอร์ที่ใช้ต้องถูกเปิด/ส่งต่อในไฟร์วอลล์ เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามนี้ แล้วเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:

- TCP ขาเข้าและขาออก: 27020
- UDP ขาเข้าและขาออก: 27015
- UDP ขาเข้าและขาออก: 7777-7778



## การตั้งค่าเพิ่มเติม

การตั้งค่าหลักเสร็จแล้ว คุณสามารถแก้ไขการตั้งค่าเพิ่มเติมได้ในไฟล์ config **DefaultGameUserSettings.ini** และ **Gameusersettings.ini** ที่นี่คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ รหัสผ่านแอดมิน และตัวเลือกอื่นๆ ได้ โดยไปที่โฟลเดอร์เหล่านี้:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## เริ่มเล่น

เมื่อเสร็จสิ้นการตั้งค่า คุณสามารถเริ่มเซิร์ฟเวอร์ได้โดยรันไฟล์ **start-ark.bat** ที่สร้างไว้ก่อนหน้านี้ ซึ่งจะเปิดคอนโซลเซิร์ฟเวอร์และเริ่มกระบวนการสตาร์ทเซิร์ฟเวอร์ ถ้าทุกอย่างเป็นไปตามแผน เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังจากเริ่มต้นสำเร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

<InlineVoucher />