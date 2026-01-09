---
id: vserver-windows-palworld
title: "VPS: ตั้งค่า Palworld Dedicated Server บน Windows"
description: "ค้นหาวิธีตั้งค่า Palworld Dedicated Server บน VPS Windows ของคุณเพื่อการโฮสต์เกมที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งบริการ Palworld Dedicated Server บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="วิธีตั้งค่า Palworld Dedicated Server บน Windows VPS!" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำน้ำดูวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>
<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่ายๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar ผลลัพธ์จะได้ไฟล์ **steamcmd.exe**

แค่รัน **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้ง Palworld dedicated server ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่เปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการ: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ เช่น:
```
force_install_dir C:\Palworld-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2394010` เพื่อเริ่มดาวน์โหลด App ID **2394010** คือแอปพลิเคชัน **Palworld**

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
อย่าขัดจังหวะกระบวนการก่อนเสร็จเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้ ที่นี่คุณสามารถใช้ **PalServer.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราขอแนะนำให้ตั้งค่า port forwarding และกำหนดค่าก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ทำงานอย่างถูกต้อง
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Palworld ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Palworld ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 8211
- UDP ขาเข้าและขาออก: 8211

ถ้าต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก คุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ โดยไปที่เบราว์เซอร์รายชื่อเซิร์ฟเวอร์และกรอก IP และพอร์ตในช่องค้นหาด้านล่าง ค้นหาด้วย: `[your_ip_address]:8211`

เราขอแนะนำให้ตั้งค่าการกำหนดค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Palworld เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์การกำหนดค่าที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

ก่อนอื่น ไปที่ไดเรกทอรีนี้:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

คุณจะเจอไฟล์การกำหนดค่า **PalWorldSettings.ini** ผ่านไฟล์นี้คุณสามารถตั้งค่าพารามิเตอร์หลากหลายสำหรับเซิร์ฟเวอร์ของคุณ ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](palworld-configuration.md) เพื่อดูตัวเลือกทั้งหมดและความหมายของแต่ละตัว

:::note
ถ้าไม่เจอไฟล์นี้ ให้เริ่มเซิร์ฟเวอร์ของคุณอย่างน้อย **หนึ่งครั้ง** เพื่อให้ไฟล์นี้ถูกสร้างขึ้นโดยอัตโนมัติ หรือจะก็อปปี้ไฟล์ตั้งต้นจาก `steamapps/common/PalServer/DefaultPalWorldSettings.ini` มาใช้ก็ได้
:::

### เปิดใช้งานโหมด Xbox

เซิร์ฟเวอร์ Palworld dedicated ตอนนี้รองรับการเปลี่ยนโหมดเป็นเซิร์ฟเวอร์เฉพาะ Microsoft Store/Xbox เพื่อให้ผู้เล่น Xbox และ Microsoft Store PC เล่นด้วยกันบนเซิร์ฟเวอร์เดียวกันได้

:::note
ยังไม่รองรับการเล่นข้ามแพลตฟอร์มระหว่างเวอร์ชัน Steam กับ Microsoft Store/Xbox เซิร์ฟเวอร์ของคุณจะตั้งค่าให้ทำงานได้แค่กับ Steam หรือ Microsoft Store/Xbox เท่านั้น
:::

ไปที่ไดเรกทอรีนี้แล้วเปิดไฟล์ **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

เพิ่มโค้ดนี้ในไฟล์เพื่อเปิดใช้งานโหมด Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

บันทึกไฟล์ แล้วครั้งถัดไปที่คุณเปิดเซิร์ฟเวอร์ มันจะทำงานในโหมด Xbox

:::info
บนเครื่อง Xbox คุณไม่สามารถเชื่อมต่อโดยตรงผ่านที่อยู่ IP ได้ ดังนั้นถ้าคุณวางแผนจะเล่นบน Xbox คุณต้องตั้งเซิร์ฟเวอร์เฉพาะให้เป็นสาธารณะ

ทำได้โดยสร้างไฟล์ `StartServer.bat` ใหม่ในไดเรกทอรีหลัก และใส่คำสั่ง: `PalServer.exe -publiclobby` ธงเริ่มต้นพิเศษ `-publiclobby` จะเปิดโหมด Community Server ทำให้เซิร์ฟเวอร์ปรากฏในรายชื่อเซิร์ฟเวอร์

คุณควรกำหนดชื่อเซิร์ฟเวอร์ที่ค้นหาได้ง่าย ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](palworld-configuration.md) เพื่อดูวิธีทำ
:::

## การเริ่มต้นและเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว คุณอาจต้องติดตั้ง [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) หากยังไม่มีบน VPS Windows ของคุณ

ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Palworld แล้วรัน **PalServer.exe** เพื่อเริ่มต้น กระบวนการนี้จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มเซิร์ฟเวอร์ ถ้าทุกอย่างเป็นไปตามคาด เซิร์ฟเวอร์ของคุณจะปรากฏในรายชื่อเซิร์ฟเวอร์ หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างของรายชื่อเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:8211`

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Palworld บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />