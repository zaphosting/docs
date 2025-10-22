---
id: vserver-windows-fs-22-epic
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 2022 (Epic Games) บน Windows"
description: "ค้นหาวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Farming Simulator 22 สำหรับ Epic Games เพื่อเพิ่มประสิทธิภาพการเล่นเกมและประสบการณ์เช่าเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การตั้งค่าเซิร์ฟเวอร์สำหรับ Farming Simulator 22 เวอร์ชัน Epic Games จะแตกต่างเล็กน้อยจากการตั้งค่าเซิร์ฟเวอร์ปกติ คู่มือนี้จะพาคุณผ่านขั้นตอนต่าง ๆ โดยเน้นที่จุดที่เฉพาะเจาะจงของเวอร์ชัน Epic Games นี้
<InlineVoucher />

## การเตรียมตัว

ก่อนเริ่มต้น ให้ตรวจสอบว่าการตั้งค่าของคุณตรงตามข้อกำหนดดังนี้:
- **ระบบปฏิบัติการ:** Windows Server 2016/2019 (64-bit)
- **CPU:** อย่างน้อย 4 คอร์ 2.4 GHz (AMD/Intel)
- **RAM:** อย่างน้อย 4GB (DDR3/4)
- **พื้นที่ดิสก์:** อย่างน้อย 50GB ว่าง (แนะนำ SSD หรือดีกว่า)
- **บัญชี Epic Games:** บัญชี Epic Games ที่มีเกม Farming Simulator 22

:::info
เมื่อรันเซิร์ฟเวอร์ คุณไม่สามารถโฮสต์เซิร์ฟเวอร์และเล่นเกมบนบัญชี Epic Games เดียวกันได้ นั่นหมายความว่าคุณจะต้องมีเกมอีกหนึ่งชุดบนบัญชีอื่นถ้าต้องการเล่นบนเซิร์ฟเวอร์นี้
:::

## ขั้นตอนที่ 1: เตรียมพร้อมสำหรับการติดตั้งเซิร์ฟเวอร์
เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน Remote Desktop (RDP) หากต้องการความช่วยเหลือ โปรดดูที่ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md)

เมื่อเชื่อมต่อแล้ว คุณต้องติดตั้งโปรแกรมเสริมที่จำเป็นคือ Microsoft Visual C++ Redistribute ซึ่งดาวน์โหลดได้จาก [เว็บไซต์ของ Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) หลังดาวน์โหลด ให้ทำตามคำแนะนำบนหน้าจอเพื่อติดตั้งให้เสร็จ

:::tip
มีโอกาสที่คุณอาจติดตั้ง C++ Redistribute ไปแล้ว ถ้าเกิดติดตั้งซ้ำตัวติดตั้งอาจแจ้งข้อผิดพลาด คุณสามารถข้ามไปได้เลยโดยไม่ต้องกังวล
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

ตอนนี้คุณต้องติดตั้ง Epic Games launcher ซึ่งดาวน์โหลดได้จาก [เว็บไซต์ Epic Games](https://store.epicgames.com/en-US/download) อีกครั้ง ให้ทำตามคำแนะนำบนหน้าจอเพื่อติดตั้งให้เสร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

หลังติดตั้งเสร็จ launcher จะดาวน์โหลดไฟล์และอัปเดตเพิ่มเติมก่อนเปิดใช้งาน

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

เมื่อ launcher เปิดขึ้น ให้ล็อกอินด้วยบัญชี Epic Games ที่มีเกม Farming Simulator 2022 อยู่ในไลบรารีเกม

## ขั้นตอนที่ 2: ดาวน์โหลด Farming Simulator 2022

ใน Epic Games Launcher ให้คลิกแท็บ **Library** แล้วหา Farming Simulator 22 กดปุ่ม **Install** และเลือกที่ตั้งที่ต้องการดาวน์โหลดเกม

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

ตอนนี้รอให้ดาวน์โหลดและติดตั้งเสร็จ ความเร็วดาวน์โหลดขึ้นอยู่กับแบนด์วิดท์ของเซิร์ฟเวอร์คุณ

## ขั้นตอนที่ 3: ตั้งค่า Launch options

เมื่อเกมติดตั้งเสร็จ กลับไปที่แท็บ **Library** ใน Epic Games Launcher หา Farming Simulator 22 กดจุดสามจุดข้าง ๆ แล้วเลือก **Manage**

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

เลื่อนลงไปที่ส่วน **Launch Options** แล้วเปิดใช้งาน ในกล่องข้อความที่ปรากฏ ให้พิมพ์ `-server` แล้วปิดเมนู

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## ขั้นตอนที่ 4: รันเซิร์ฟเวอร์

ตอนนี้คุณสามารถเริ่ม Farming Simulator 2022 จาก Epic Games launcher หรือทางชอร์ตคัตบนเดสก์ท็อป เกมจะเปิดผ่าน command prompt (CMD) ในโหมดเซิร์ฟเวอร์เฉพาะ ถ้าไม่ใช่แบบนี้ ให้ตรวจสอบว่าคุณตั้งค่า launch option ถูกต้องแล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## ขั้นตอนที่ 5: เปิดใช้งานเว็บอินเทอร์เฟซ (ไม่บังคับ)

เซิร์ฟเวอร์เฉพาะ Farming Simulator 22 มาพร้อมเว็บอินเทอร์เฟซที่คุณสามารถเปิดใช้งานได้ เป็นตัวเลือกเสริม แต่เราแนะนำให้เปิดใช้งานเพราะช่วยให้ปรับแต่งการตั้งค่าและดูข้อมูลต่าง ๆ ได้ง่ายขึ้น

ก่อนดำเนินการ ให้ปิดเซิร์ฟเวอร์โดยออกจาก command prompt เพื่อให้แน่ใจว่าการเปลี่ยนแปลงในขั้นตอนนี้จะไม่ถูกเขียนทับ

ไปที่โฟลเดอร์ติดตั้งเกม โดยปกติจะอยู่ที่ `C:\Program Files\Epic Games\FarmingSimulator22` หากติดตั้งในไดเรกทอรีเริ่มต้น

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

หาและเปิดไฟล์ `dedicatedServer.xml` ในโฟลเดอร์หลักด้วยโปรแกรมแก้ไขข้อความ เช่น Notepad

ตั้งชื่อผู้ใช้และรหัสผ่านสำหรับแอดมินโดยแก้ไขในช่องที่เหมาะสม
```xml
  <initial_admin>
    <username>admin</username> //ชื่อผู้ใช้
    <passphrase>your_password</passphrase> //รหัสผ่าน
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

อย่าลืมบันทึกไฟล์ก่อนปิด แล้วรันไฟล์ `dedicatedServer.exe` ที่อยู่ในโฟลเดอร์เดียวกัน

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

ตอนนี้คุณควรจะเข้าถึงเว็บอินเทอร์เฟซได้โดยไปที่ `http://[your_serverip]:8080` ในเว็บเบราว์เซอร์ โดยแทนที่ `[your_serverip]` ด้วยที่อยู่ IP ของเซิร์ฟเวอร์คุณ ถ้าต้องการเข้าถึงแผงควบคุมบนเซิร์ฟเวอร์เดียวกันก็ใช้ `http://127.0.0.1:8080` ได้เลย

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
ด้วยการตั้งค่าพิเศษของเวอร์ชัน Epic Games คุณอาจเจอปัญหาในการใช้เว็บอินเทอร์เฟซอย่างเต็มที่ แม้ว่าจะสามารถเปลี่ยนแปลงและหยุดเซิร์ฟเวอร์ผ่านเว็บอินเทอร์เฟซได้ แต่ไม่สามารถสั่งเริ่มเซิร์ฟเวอร์ผ่านเว็บอินเทอร์เฟซได้

ถ้าเจอปัญหา ให้หยุด dedicatedServer.exe ก่อน แล้วรัน Farming Simulator 22 โดยตรงเพื่อให้เซิร์ฟเวอร์ทำงาน จากนั้นค่อยรัน dedicatedServer.exe เพื่อเปิดใช้งานเว็บอินเทอร์เฟซ

สำคัญมากที่ต้องรันเซิร์ฟเวอร์ **ก่อน** แล้วค่อยรันเว็บอินเทอร์เฟซ **หลังจากนั้น** ไม่เช่นนั้น Epic Games อาจตรวจจับว่าเป็นไฟล์เดียวกันและป้องกันไม่ให้เปิดเซิร์ฟเวอร์หลักได้
:::

## ขั้นตอนที่ 6: การตั้งค่า Port Forwarding

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องตั้งค่ากฎการส่งต่อพอร์ตสำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์เพียงพอและตั้งค่าทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมด Administrator ไม่เช่นนั้นการตั้งค่าอาจไม่ทำงาน
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell Prompt:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Farming Simulator 22 ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาใน Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่ต้องการถ้าเปิดจากหน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Farming Simulator 22 โดยคลิกที่กฎขาเข้าและขาออกตามนี้ และเพิ่มพอร์ตและโปรโตคอลดังนี้:
- TCP ขาเข้าและขาออก: 3724, 27015
- UDP ขาเข้าและขาออก: 3724, 27015

ถ้าต้องการความช่วยเหลือเพิ่มเติม โปรดดูที่ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

## ขั้นตอนที่ 7: การเชื่อมต่อกับเซิร์ฟเวอร์
เปิดเกมแล้วไปที่เมนูมัลติเพลเยอร์ หาเซิร์ฟเวอร์โดยใช้ชื่อเซิร์ฟเวอร์ที่แสดงในเว็บอินเทอร์เฟซและสามารถปรับแต่งได้

เมื่อเจอเซิร์ฟเวอร์แล้ว กดเพื่อเชื่อมต่อ ถ้ามีการขอรหัสผ่าน ให้กรอกรหัสผ่านที่แสดงในเว็บอินเทอร์เฟซด้วย

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ Farming Simulator 2022 บน VPS ของคุณเรียบร้อยแล้ว! ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />