---
id: dedicated-windows-ragemp
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า RageMP Dedicated Server บน Windows"
description: "เรียนรู้วิธีตั้งค่า RageMP Dedicated Server บนเซิร์ฟเวอร์ Windows ของคุณเพื่อโฮสต์เซสชัน GTA V แบบมัลติเพลเยอร์ → เริ่มเรียนรู้เลย"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมีเซิร์ฟเวอร์เฉพาะ Windows และต้องการติดตั้งบริการ RageMP Dedicated Server บนเซิร์ฟเวอร์ของคุณใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ



## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์เฉพาะของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว ให้เริ่มติดตั้ง [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) เพราะนี่คือสิ่งที่ RageMP ต้องการเป็นเงื่อนไขเบื้องต้น ตรวจสอบให้แน่ใจว่าติดตั้งเรียบร้อยก่อนดำเนินการต่อ หากไม่แน่ใจว่าติดตั้งแล้วหรือยัง ให้รันตัวติดตั้งและมันจะแจ้งให้ทราบระหว่างการติดตั้ง

เมื่อคุณติดตั้ง dependency เรียบร้อยแล้ว ดาวน์โหลดเวอร์ชันเซิร์ฟเวอร์ล่าสุดจาก [เว็บไซต์ของ RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)

:::tip
ถ้าคุณติดตั้ง RageMP แล้ว คุณสามารถข้ามไปที่หัวข้อ **การสลับไปยัง Server Branch** ได้เลย คุณไม่จำเป็นต้องติดตั้ง RageMP ใหม่อีกครั้ง
:::

## การติดตั้ง

เมื่อดาวน์โหลดไฟล์ release เรียบร้อยแล้ว ให้รันไฟล์ **RAGEMultiplayer_Setup.exe** และทำตามขั้นตอนการติดตั้ง คุณจะสามารถปรับเปลี่ยนเส้นทางการติดตั้งได้ในระหว่างการตั้งค่า ซึ่งเราแนะนำให้ทำ

ตอนนี้เมื่อ RageMP ติดตั้งเสร็จแล้ว ให้รันแอป **RAGE Multiplayer** ซึ่งจะสามารถเข้าถึงได้จากแอป Windows ของคุณ

เมื่อเปิดใช้งานครั้งแรก คุณจะต้องตั้งค่าเส้นทางไปยังโฟลเดอร์ติดตั้งเกม GTA:V ของคุณ โฟลเดอร์ติดตั้งขึ้นอยู่กับ launcher ที่คุณใช้ติดตั้งเกม และโดยปกติจะอยู่ที่ `C:/Program Files` หรือ `C:/Program Files (x86)`

ตอนนี้คุณต้องปรับ branch เพื่อดาวน์โหลดไฟล์เซิร์ฟเวอร์

### การสลับไปยัง Server Branch

ไปที่โฟลเดอร์ที่ติดตั้ง RageMP หาไฟล์ **config.xml** ในโฟลเดอร์นี้ ปรับพารามิเตอร์ `channel` จาก `prerelease` เป็น `prerelease_server` แล้วบันทึกไฟล์

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

จากนั้นรันไฟล์ **updater.exe** ซึ่งจะดาวน์โหลดไฟล์เซิร์ฟเวอร์ที่จำเป็นตามการเปลี่ยนแปลง branch คุณจะเห็นโฟลเดอร์ **server-files** ใหม่ในไดเรกทอรี RageMP ของคุณ ซึ่งเป็นสิ่งที่คุณต้องใช้

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

คุณสามารถเปลี่ยนพารามิเตอร์ `channel` กลับเป็น `prerelease` แล้วรันไฟล์ **update.exe** อีกครั้งเพื่อสลับกลับไปยังเวอร์ชัน client เพื่อเล่นเกมได้ตามปกติ

:::tip
คุณสามารถย้ายไฟล์เซิร์ฟเวอร์และเปลี่ยนชื่อโฟลเดอร์เป็นอะไรก็ได้ เช่น ย้ายไปที่เดสก์ท็อป คุณไม่จำเป็นต้องรันไฟล์นี้ภายในโฟลเดอร์ `RAGEMP`
:::

เพื่อเริ่มเซิร์ฟเวอร์ ให้รันไฟล์ **ragemp-server.exe** ที่อยู่ในไดเรกทอรี `server-files` หรือโฟลเดอร์เซิร์ฟเวอร์ของคุณ เซิร์ฟเวอร์จะเริ่มบูตขึ้นทันที แต่เราแนะนำให้ตั้งค่า port forwarding และการตั้งค่าเซิร์ฟเวอร์ก่อน

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell โดยตรง ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

:::tip
การเปิดเซิร์ฟเวอร์ครั้งแรกจะมีหน้าต่าง UAC ขึ้นมา หากคุณยอมรับ หน้าต่างนี้จะตั้งค่ากฎไฟร์วอลล์ให้อัตโนมัติ ทำให้คุณสามารถดำเนินการต่อได้เลย หากไม่ ให้ทำตามวิธีใดวิธีหนึ่งด้านล่าง
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** อย่าลืมคลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell Prompt ของคุณ:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์โดยอัตโนมัติ ซึ่งจำเป็นสำหรับให้เซิร์ฟเวอร์ RageMP ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาใน Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ RageMP ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:

- TCP ขาเข้าและขาออก: 22005
- UDP ขาเข้าและขาออก: 22005

ถ้าต้องการความช่วยเหลือเพิ่มเติมในการทำเช่นนี้ โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้ ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้

เราแนะนำให้ตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนผ่านหัวข้อต่อไปนี้ก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ RageMP เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิก

กลับไปที่โฟลเดอร์รากหลัก หาและเปิดไฟล์ **conf.json** ในไฟล์นี้คุณสามารถปรับพารามิเตอร์เซิร์ฟเวอร์ต่าง ๆ ตั้งแต่พอร์ต ชื่อเซิร์ฟเวอร์ และอื่น ๆ

ตัวอย่างเช่น นี่คือตัวเลือกการตั้งค่าบางส่วนที่ตั้งไว้:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรี `server-files` หรือโฟลเดอร์เซิร์ฟเวอร์ของคุณ แล้วรัน **ragemp-server.exe** เพื่อเริ่มกระบวนการบูต เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มต้นการทำงาน

ตอนนี้คุณจะสามารถเชื่อมต่อเซิร์ฟเวอร์โดยตรงในเกมผ่าน launcher ของ RageMP ได้เลย

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ RageMP บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!