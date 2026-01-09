---
id: dedicated-windows-conan
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Conan Exiles Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Conan Exiles Dedicated Server บน Windows Dedicated Server เพื่อการเล่นเกมและการจัดการเซิร์ฟเวอร์ที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows เซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Conan Exiles Dedicated Server บนเซิร์ฟเวอร์ของคุณใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ



## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับเซิร์ฟเวอร์เฉพาะของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือ Initial Access (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

:::note เครื่องมือ Server Launcher
เป็นทางเลือกแทนการใช้ SteamCMD นักพัฒนาของ Conan Exiles ได้ดูแลเครื่องมือยูทิลิตี้ server launcher ที่มีประโยชน์ซึ่งสามารถใช้บน Windows เพื่อให้ง่ายต่อการเปิดเซิร์ฟเวอร์

เราแนะนำให้อ่าน [โพสต์อย่างเป็นทางการในฟอรัม](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) หากคุณต้องการใช้วิธีนี้แทน
:::

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ของคุณแล้ว คุณจะต้องตั้งค่า **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็นได้ SteamCMD คือเวอร์ชัน **command-line (CLI)** ของไคลเอนต์ Steam และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ใดก็ได้บนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่คุณเพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` ของคุณ จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows โดยตรง หรือใช้แอปพลิเคชันอย่าง .7zip หรือ Winrar ซึ่งจะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

แค่รัน **steamcmd.exe** และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้ง Conan Exiles dedicated server ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งภายในพรอมต์คำสั่ง **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Conan-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 443030` เพื่อเริ่มดาวน์โหลด App ID **443030** คือแอปพลิเคชัน **Conan Exiles**

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
โปรดอย่าขัดจังหวะกระบวนการก่อนเสร็จสิ้นเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกดาวน์โหลดไว้ ที่นี่คุณสามารถใช้ **StartServer.bat** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราแนะนำให้ตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากสาธารณะ คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell โดยตรงซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** อย่าลืมคลิกขวาและเลือก **Run as Administrator** เพื่อให้มีสิทธิ์และทุกอย่างทำงานได้ถูกต้อง

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

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์โดยอัตโนมัติที่จำเป็นสำหรับให้เซิร์ฟเวอร์ Conan Exiles ของคุณเข้าถึงได้จากสาธารณะ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Conan Exiles ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 7777, 25575
- UDP ขาเข้าและขาออก: 7777, 7778, 27015

โปรดใช้ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา หากคุณต้องการความช่วยเหลือเพิ่มเติมในการทำเช่นนี้

</TabItem>
</Tabs>

เมื่อคุณเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้ ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ เราแนะนำให้ตั้งค่าเซิร์ฟเวอร์ของคุณก่อนผ่านส่วนถัดไปก่อนที่จะเข้าใช้งานเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Conan Exiles เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิกที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

เริ่มต้นด้วยการไปที่ไดเรกทอรีนี้:
```
../Conan-Server/Engine/Config/Windows
```

คุณจะพบไฟล์คอนฟิก **WindowsServerEngine.ini** ผ่านไฟล์นี้คุณสามารถปรับแต่งตัวเลือกการตั้งค่าต่างๆ ได้โดยเพิ่มพารามิเตอร์เฉพาะ

ตัวอย่างเช่น หากต้องการเพิ่มชื่อเซิร์ฟเวอร์ รหัสผ่าน และรหัสผ่านแอดมิน ให้เพิ่มดังนี้ในไฟล์
```
[OnlineSubsystem]
ServerName=[your_servername]
ServerPassword=[your_password]

[ServerSettings]
AdminPassword=[your_adminpassword]
```

เราแนะนำให้เข้าไปดู [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) เพื่อดูรายการตัวเลือกที่มีอย่างละเอียด

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาที่จะเริ่มเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Conan Exiles ของคุณและรัน **StartServer.bat** ที่คุณสร้างไว้ก่อนหน้านี้เพื่อเริ่มกระบวนการเปิดเซิร์ฟเวอร์ หน้าต่างคอนโซลของเซิร์ฟเวอร์จะเปิดขึ้นในพรอมต์คำสั่งและเริ่มกระบวนการเปิดเซิร์ฟเวอร์ คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านตัวเลือกค้นหาเซิร์ฟเวอร์ในเกมโดยใส่ IP และพอร์ตของเซิร์ฟเวอร์ (พอร์ตเริ่มต้นคือ 7777)

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Conan Exiles บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว! หากคุณมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!