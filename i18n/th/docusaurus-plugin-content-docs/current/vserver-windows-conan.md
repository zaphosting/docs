---
id: vserver-windows-conan
title: "VPS: การตั้งค่าเซิร์ฟเวอร์เฉพาะ Conan Exiles บน Windows"
description: "ค้นพบวิธีการตั้งค่าเซิร์ฟเวอร์เฉพาะ Conan Exiles บน VPS Windows ของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ Conan Exiles บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

:::note เครื่องมือ Server Launcher
เป็นทางเลือกแทนการใช้ SteamCMD นักพัฒนา Conan Exiles ได้ดูแลเครื่องมือยูทิลิตี้ server launcher ที่มีประโยชน์ซึ่งสามารถใช้บน Windows เพื่อให้ง่ายต่อการเปิดเซิร์ฟเวอร์

เราแนะนำให้อ่าน [โพสต์อย่างเป็นทางการในฟอรัม](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) หากคุณต้องการใช้วิธีนี้แทน
:::

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ของคุณแล้ว คุณจะต้องตั้งค่า **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็นได้ SteamCMD คือเวอร์ชัน **command-line (CLI)** ของไคลเอนต์ Steam และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ใดก็ได้บนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่คุณเพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows โดยตรง หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar ก็ได้ ซึ่งจะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

แค่รัน **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ Conan Exiles ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งภายในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Conan-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 443030` เพื่อเริ่มดาวน์โหลด รหัสแอป **443030** คือแอปพลิเคชัน **Conan Exiles**

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
โปรดอย่าขัดจังหวะกระบวนการจนกว่าจะเสร็จสมบูรณ์เพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ให้ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้ ที่นี่คุณสามารถใช้ไฟล์ **StartServer.bat** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราขอแนะนำให้ตั้งค่า port forwarding และการตั้งค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** ให้คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้สิทธิ์เข้าถึงและทำงานได้อย่างถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ลงในพรอมต์ Powershell ของคุณ:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นสำหรับให้เซิร์ฟเวอร์ Conan Exiles ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **การตั้งค่าไฟร์วอลล์ Windows พร้อมความปลอดภัยขั้นสูง** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้าไฟร์วอลล์ Windows ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Conan Exiles ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 7777, 25575
- UDP ขาเข้าและขาออก: 7777, 7778, 27015

หากต้องการความช่วยเหลือเพิ่มเติม โปรดใช้ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อคุณเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้แล้ว ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ เราแนะนำให้ตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Conan Exiles เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิกที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

ก่อนอื่น ไปที่ไดเรกทอรีนี้:
```
../Conan-Server/Engine/Config/Windows
```

คุณจะพบไฟล์คอนฟิก **WindowsServerEngine.ini** ในไฟล์นี้คุณสามารถปรับแต่งตัวเลือกการตั้งค่าต่าง ๆ ได้โดยเพิ่มพารามิเตอร์เฉพาะ

ตัวอย่างเช่น หากต้องการเพิ่มชื่อเซิร์ฟเวอร์ รหัสผ่าน และรหัสผ่านแอดมิน ให้เพิ่มดังนี้ในไฟล์
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

เราแนะนำให้ดูที่ [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) เพื่อดูรายการตัวเลือกทั้งหมดที่มี

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Conan Exiles ของคุณและรัน **StartServer.bat** ที่คุณสร้างไว้ก่อนหน้านี้เพื่อเริ่มกระบวนการเซิร์ฟเวอร์ จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มต้นเซิร์ฟเวอร์ คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านตัวเลือกค้นหาเซิร์ฟเวอร์ในเกมโดยใส่ IP และพอร์ตของเซิร์ฟเวอร์ (พอร์ตเริ่มต้นคือ 7777)

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ Conan Exiles บน VPS ของคุณเรียบร้อยแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />