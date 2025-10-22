---
id: dedicated-windows-palworld
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Palworld Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Palworld Dedicated Server บน Windows VPS หรือเซิร์ฟเวอร์ของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows VPS หรือเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Palworld Dedicated Server บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="วิธีตั้งค่า Palworld Dedicated Server บน Windows VPS!" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เรามีให้คุณ! ดำดิ่งสู่คลิปวิดีโอที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกสนาน!"/>

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็นได้ SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือโปรแกรมอย่าง .7zip หรือ Winrar ซึ่งจะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

แค่รัน **steamcmd.exe** และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้ง Palworld dedicated server ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งภายในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Palworld-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2394010` เพื่อเริ่มดาวน์โหลด App ID **2394010** คือแอปพลิเคชัน **Palworld**

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
โปรดอย่าขัดจังหวะกระบวนการจนกว่าจะเสร็จสมบูรณ์เพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้ ที่นี่คุณสามารถใช้ **PalServer.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราขอแนะนำให้ตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** อย่าลืมคลิกขวาและเลือก **Run as Administrator** เพื่อให้มีสิทธิ์และทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ลงในพรอมต์ Powershell:
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

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Palworld ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 8211
- UDP ขาเข้าและขาออก: 8211

หากต้องการความช่วยเหลือเพิ่มเติม โปรดใช้ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ โดยไปที่เบราว์เซอร์รายชื่อเซิร์ฟเวอร์และใส่ IP และพอร์ตในช่องค้นหาด้านล่าง คุณควรค้นหา: `[your_ip_address]:8211`

เราขอแนะนำให้คุณตั้งค่าเซิร์ฟเวอร์ก่อนผ่านส่วนถัดไปก่อนที่จะเข้าใช้งานเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Palworld เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์การตั้งค่าที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

ก่อนอื่น ไปที่ไดเรกทอรีนี้:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

คุณจะพบไฟล์การตั้งค่า **PalWorldSettings.ini** ผ่านไฟล์นี้คุณสามารถตั้งค่าพารามิเตอร์ต่าง ๆ ของเซิร์ฟเวอร์ได้มากมาย ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](palworld-configuration.md) ของเราเพื่อดูตัวเลือกทั้งหมดและคำอธิบายของแต่ละตัว

:::note
ถ้าคุณไม่เห็นไฟล์นี้ กรุณาเริ่มเซิร์ฟเวอร์ของคุณอย่างน้อย **หนึ่งครั้ง** เพื่อให้ไฟล์นี้ถูกสร้างขึ้นโดยอัตโนมัติ หรือคุณสามารถคัดลอกและใช้การตั้งค่าเริ่มต้นจากเส้นทาง `steamapps/common/PalServer/DefaultPalWorldSettings.ini`
:::

### เปิดใช้งานโหมด Xbox

เซิร์ฟเวอร์เฉพาะ Palworld ตอนนี้มาพร้อมกับความสามารถในการเปลี่ยนและทำงานเป็นเซิร์ฟเวอร์เฉพาะ Microsoft Store/Xbox เพื่อให้ผู้เล่น Xbox และผู้เล่น Microsoft Store บน PC สามารถเล่นบนเซิร์ฟเวอร์เดียวกันได้

:::note
การเล่นข้ามแพลตฟอร์มระหว่างเวอร์ชัน Steam กับ Microsoft Store/Xbox ยังไม่สามารถทำได้ เซิร์ฟเวอร์ของคุณจะตั้งค่าให้ทำงานได้แค่สำหรับ Steam หรือ Microsoft Store/Xbox เท่านั้น
:::

ไปที่ไดเรกทอรีนี้และเปิดไฟล์ **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

เพิ่มโค้ดนี้ในไฟล์เพื่อเปิดใช้งานโหมด Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

บันทึกไฟล์และครั้งถัดไปที่คุณเปิดเซิร์ฟเวอร์ มันจะทำงานในโหมด Xbox

:::info
บนเครื่อง Xbox คุณไม่สามารถเชื่อมต่อโดยตรงผ่านที่อยู่ IP ได้ ดังนั้นถ้าคุณวางแผนจะเล่นบนเครื่อง Xbox คุณจะต้องตั้งเซิร์ฟเวอร์เฉพาะของคุณให้เป็นสาธารณะ

คุณสามารถทำได้โดยสร้างไฟล์ `StartServer.bat` ใหม่ในไดเรกทอรีหลัก และใส่คำสั่ง: `PalServer.exe -publiclobby` ธงเริ่มต้นพิเศษ `-publiclobby` จะเปิดโหมด Community Server ทำให้เซิร์ฟเวอร์ปรากฏในรายชื่อเซิร์ฟเวอร์

คุณควรกำหนดชื่อเซิร์ฟเวอร์ที่ค้นหาได้ง่าย ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](palworld-configuration.md) ของเราเพื่อดูวิธีทำ
:::

## การเริ่มต้นและการเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาที่จะเริ่มเซิร์ฟเวอร์ของคุณแล้ว คุณอาจต้องติดตั้ง [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) หากยังไม่มีบน Windows เซิร์ฟเวอร์เฉพาะของคุณ

ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Palworld และรัน **PalServer.exe** เพื่อเริ่มกระบวนการเซิร์ฟเวอร์ จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มต้นเซิร์ฟเวอร์ หากทุกอย่างเป็นไปตามคาด เซิร์ฟเวอร์ของคุณจะปรากฏในรายชื่อเซิร์ฟเวอร์ หรือคุณสามารถเชื่อมต่อโดยตรงผ่านแถบค้นหาด้านล่างของรายชื่อเซิร์ฟเวอร์โดยค้นหา: `[your_ip_address]:8211`

คุณได้ติดตั้ง Palworld บน Windows เซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว

<InlineVoucher />