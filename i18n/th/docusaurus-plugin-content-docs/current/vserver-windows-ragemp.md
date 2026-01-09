---
id: vserver-windows-ragemp
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ RageMP บน Windows"
description: "เรียนรู้วิธีติดตั้งและตั้งค่าเซิร์ฟเวอร์เฉพาะ RageMP บน VPS Windows ของคุณ เพื่อประสบการณ์เล่นเกมมัลติเพลเยอร์ที่ลื่นไหล → เริ่มเรียนรู้เลย"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งเซิร์ฟเวอร์เฉพาะ RageMP บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการเชื่อมต่อ

เมื่อเข้าถึงเซิร์ฟเวอร์ได้แล้ว ให้ติดตั้ง [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) ก่อน เพราะนี่คือสิ่งที่ RageMP ต้องการเป็นเงื่อนไขเบื้องต้น ตรวจสอบให้แน่ใจว่าติดตั้งเรียบร้อยก่อนดำเนินการต่อ หากไม่แน่ใจว่าติดตั้งแล้วหรือยัง ให้รันตัวติดตั้ง มันจะแจ้งให้ทราบในระหว่างการติดตั้ง

เมื่อคุณติดตั้งสิ่งที่จำเป็นเสร็จแล้ว ให้ดาวน์โหลดเวอร์ชันเซิร์ฟเวอร์ล่าสุดจาก [เว็บไซต์ RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe)

:::tip
ถ้าคุณติดตั้ง RageMP อยู่แล้ว สามารถข้ามไปที่หัวข้อ **สลับไปยัง Server Branch** ได้เลย ไม่จำเป็นต้องติดตั้งใหม่
:::

## การติดตั้ง

เมื่อดาวน์โหลดไฟล์เสร็จแล้ว ให้รันไฟล์ **RAGEMultiplayer_Setup.exe** และทำตามขั้นตอนการติดตั้ง คุณสามารถเลือกเปลี่ยนเส้นทางติดตั้งได้ในขั้นตอนนี้ ซึ่งเราแนะนำให้ทำ

เมื่อติดตั้ง RageMP เสร็จแล้ว ให้เปิดแอป **RAGE Multiplayer** ที่จะอยู่ในแอปของ Windows

ครั้งแรกที่เปิดใช้งาน คุณจะต้องตั้งค่าเส้นทางไปยังโฟลเดอร์ติดตั้งเกม GTA:V โฟลเดอร์ติดตั้งขึ้นอยู่กับตัวเปิดเกมที่คุณใช้ โดยปกติจะอยู่ที่ `C:/Program Files` หรือ `C:/Program Files (x86)`

ตอนนี้คุณต้องเปลี่ยน branch เพื่อดาวน์โหลดไฟล์เซิร์ฟเวอร์

### สลับไปยัง Server Branch

ไปที่โฟลเดอร์ที่ติดตั้ง RageMP หาไฟล์ **config.xml** ในโฟลเดอร์นี้ แก้ไขพารามิเตอร์ `channel` จาก `prerelease` เป็น `prerelease_server` แล้วบันทึกไฟล์

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

จากนั้นรันไฟล์ **updater.exe** ซึ่งจะดาวน์โหลดไฟล์เซิร์ฟเวอร์ที่จำเป็นตามการเปลี่ยน branch คุณจะเห็นโฟลเดอร์ใหม่ชื่อ **server-files** ปรากฏในไดเรกทอรี RageMP ซึ่งเป็นไฟล์ที่คุณต้องใช้

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

คุณสามารถเปลี่ยนพารามิเตอร์ `channel` กลับเป็น `prerelease` แล้วรันไฟล์ **update.exe** อีกครั้งเพื่อสลับกลับไปยังเวอร์ชันไคลเอนต์ เพื่อเล่นเกมได้ตามปกติ

:::tip
คุณสามารถย้ายไฟล์เซิร์ฟเวอร์และเปลี่ยนชื่อโฟลเดอร์เป็นอะไรก็ได้ เช่น ย้ายไปที่เดสก์ท็อป คุณไม่จำเป็นต้องรันไฟล์นี้ภายในโฟลเดอร์ `RAGEMP`
:::

เพื่อเริ่มเซิร์ฟเวอร์ ให้รันไฟล์ **ragemp-server.exe** ที่อยู่ในโฟลเดอร์ `server-files` หรือโฟลเดอร์เซิร์ฟเวอร์ของคุณ เซิร์ฟเวอร์จะเริ่มบูตขึ้น แต่เราแนะนำให้ตั้งค่า port forwarding และการตั้งค่าเซิร์ฟเวอร์ก่อน

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องตั้งค่ากฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

:::tip
เมื่อเปิดเซิร์ฟเวอร์ครั้งแรก จะมีหน้าต่าง UAC ขึ้นมา หากคุณกดยอมรับ กฎไฟร์วอลล์จะถูกตั้งค่าให้อัตโนมัติ คุณสามารถข้ามไปยังหัวข้อต่อไปได้เลย หากไม่ ให้ทำตามวิธีใดวิธีหนึ่งด้านล่าง
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมดผู้ดูแลระบบ มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell Prompt:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ RageMP ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็น หากเปิดแค่หน้า Windows Firewall ธรรมดา

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ RageMP ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:

- TCP ขาเข้าและขาออก: 22005
- UDP ขาเข้าและขาออก: 22005

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะสามารถเข้าถึงได้จากภายนอก หมายความว่าคุณจะเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้

เราแนะนำให้ตั้งค่าเซิร์ฟเวอร์ของคุณก่อนผ่านหัวข้อต่อไปนี้ก่อนเข้าใช้งานเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ RageMP เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมผ่านไฟล์คอนฟิก

กลับไปที่โฟลเดอร์หลัก หาและเปิดไฟล์ **conf.json** ในไฟล์นี้คุณสามารถปรับพารามิเตอร์เซิร์ฟเวอร์ต่างๆ เช่น พอร์ต ชื่อเซิร์ฟเวอร์ และอื่นๆ

ตัวอย่างการตั้งค่าบางส่วนที่กำหนดไว้:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่โฟลเดอร์ `server-files` หรือโฟลเดอร์เซิร์ฟเวอร์ของคุณ แล้วรัน **ragemp-server.exe** เพื่อเริ่มกระบวนการบูต เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มทำงาน

ตอนนี้คุณสามารถเชื่อมต่อเซิร์ฟเวอร์โดยตรงผ่านตัวเปิด RageMP ในเกมได้เลย

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ RageMP บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />