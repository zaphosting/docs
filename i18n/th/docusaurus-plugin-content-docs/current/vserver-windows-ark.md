---
id: vserver-windows-ark
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK Survival Evolved บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK: Survival Evolved บน VPS Windows ของคุณอย่างรวดเร็วและง่ายดาย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## แนะนำ
มี VPS Windows และอยากติดตั้งเซิร์ฟเวอร์เกมบนมันใช่ไหม? เช่น เซิร์ฟเวอร์เฉพาะ ARK: Survival Evolved? ถ้าใช่ คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทีละขั้นตอนว่าคุณจะติดตั้งเซิร์ฟเวอร์นี้บนเซิร์ฟเวอร์ของคุณได้อย่างไร

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="ตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK: Survival Evolved บน VPS Windows" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>

เชื่อมต่อกับ VPS ของคุณผ่าน RDP เพื่อเริ่มตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK: Survival Evolved หากคุณไม่รู้วิธีเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน RDP เราแนะนำให้ดูที่ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md)

<InlineVoucher />

## เตรียมตัว

สำหรับการตั้งค่าเซิร์ฟเวอร์ ARK จำเป็นต้องใช้ SteamCMD ซึ่งเป็น **เวอร์ชันบรรทัดคำสั่งของ Steam client** เครื่องมือนี้ช่วยให้ดาวน์โหลดแอปเซิร์ฟเวอร์เฉพาะของเกม Steam ยอดนิยมได้อย่างรวดเร็วและง่ายดาย คุณสามารถดาวน์โหลด SteamCMD ได้จากเว็บไซต์นักพัฒนาของ Valve อย่างเป็นทางการ: https://developer.valvesoftware.com/wiki/SteamCMD

หลังจากนั้นจะเป็นขั้นตอนดาวน์โหลด ซึ่งจะได้ไฟล์ **steamcmd.zip** ที่ต้องแตกไฟล์ก่อน แนะนำให้สร้างโฟลเดอร์แยกต่างหากเพื่อแตกไฟล์นี้ คุณจะเห็นไฟล์ **steamcmd.exe** เมื่อแตกไฟล์เสร็จ เปิดไฟล์นี้และรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

เมื่อเห็นข้อความ **Loading Steam API.... OK** แสดงว่ากระบวนการเสร็จสมบูรณ์และคุณพร้อมเริ่มติดตั้งเซิร์ฟเวอร์ ARK ได้เลย



## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งใน **Steam command line (steamcmd.exe)** ได้ ที่นี่คุณต้องล็อกอินด้วยผู้ใช้ **anonymous** รันคำสั่งนี้: `login anonymous`

ขั้นตอนถัดไปคือการติดตั้ง ใช้คำสั่ง `app_update 376030` โดย App ID **376030** คือแอปเซิร์ฟเวอร์เฉพาะของ **ARK: Survival Evolved**

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::



ไปที่โฟลเดอร์ที่ติดตั้งแล้ว จากนั้นเข้าไปที่โฟลเดอร์ย่อยนี้: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**

ที่นี่คุณต้องสร้างไฟล์สตาร์ทอัพสำหรับรันซอฟต์แวร์เซิร์ฟเวอร์ สร้างไฟล์ชื่อ: start-ark.bat

:::info
ตรวจสอบให้แน่ใจว่าเปิดใช้งานตัวเลือกแสดงนามสกุลไฟล์ (Display file extensions) เพื่อให้ไฟล์มีนามสกุลถูกต้อง
:::

เปิดไฟล์นี้ ใส่โค้ดด้านล่างแล้วบันทึก:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



เพื่อให้เซิร์ฟเวอร์มองเห็นและเข้าถึงได้จากภายนอก ต้องเปิด/ส่งต่อพอร์ตเซิร์ฟเวอร์ในไฟร์วอลล์ Windows เปิดการตั้งค่า Windows Firewall

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


เพิ่มกฎใหม่ในส่วนการตั้งค่า คลิกที่กฎขาเข้าและขาออกตามนี้ แล้วเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:

- TCP ขาเข้าและขาออก: 27020
- UDP ขาเข้าและขาออก: 27015
- UDP ขาเข้าและขาออก: 7777-7778



## การตั้งค่าเพิ่มเติม

การตั้งค่าพื้นฐานเสร็จแล้ว คุณสามารถปรับแต่งเพิ่มเติมได้ในไฟล์ config **DefaultGameUserSettings.ini** และ **Gameusersettings.ini** ที่นี่คุณสามารถเปลี่ยนชื่อเซิร์ฟเวอร์ รหัสผ่านเซิร์ฟเวอร์ รหัสผ่านแอดมิน และตัวเลือกอื่น ๆ ได้ โดยไปที่โฟลเดอร์เหล่านี้:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## เริ่มเล่น

เมื่อเสร็จแล้ว คุณสามารถเริ่มเซิร์ฟเวอร์ได้โดยรันไฟล์ **start-ark.bat** ที่สร้างไว้ ซึ่งจะเปิดคอนโซลเซิร์ฟเวอร์และเริ่มกระบวนการเซิร์ฟเวอร์ ถ้าทุกอย่างถูกต้อง เซิร์ฟเวอร์จะปรากฏในรายชื่อเซิร์ฟเวอร์หลังจากเริ่มต้นสำเร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ ARK Survival บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />