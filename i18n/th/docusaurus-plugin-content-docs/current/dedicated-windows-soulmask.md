---
id: dedicated-windows-soulmask
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Soulmask Dedicated Server บน Windows"
description: "ค้นพบวิธีติดตั้งเซิร์ฟเวอร์เฉพาะ Soulmask บน Windows VPS หรือเซิร์ฟเวอร์เฉพาะของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows VPS หรือเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Soulmask Dedicated Server บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้ เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ



## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องตั้งค่า **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของไคลเอนต์ Steam และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ดาวน์โหลดของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาและวางไว้ในโฟลเดอร์ `steamcmd` ของคุณ จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows โดยตรง หรือใช้แอปพลิเคชันอย่าง .7zip หรือ Winrar ซึ่งจะทำให้ได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

แค่รัน **steamcmd.exe** แล้วรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ Soulmask ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Soulmask-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 3017310` เพื่อเริ่มดาวน์โหลด App ID **3017310** คือแอปพลิเคชัน **Soulmask**

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
อย่าขัดจังหวะกระบวนการก่อนเสร็จสิ้นเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลด ซึ่งไฟล์เซิร์ฟเวอร์ทั้งหมดจะถูกดาวน์โหลดไว้ที่นี่ คุณสามารถใช้ **StartServer.bat** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราขอแนะนำให้ตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง PowerShell โดยตรง ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** อย่าลืมคลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์และทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Soulmask ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Soulmask ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 8777, 27015
- UDP ขาเข้าและขาออก: 8777, 27015

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้แล้ว ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ โดยไปที่เมนู Multiplayer ในเกม เลือก IP Direct Connect แล้วกรอกที่อยู่ IP และพอร์ตที่ใช้ ซึ่งพอร์ตเริ่มต้นคือ 3724 หรือพอร์ตที่คุณตั้งค่าไว้

เราขอแนะนำให้คุณตั้งค่าเซิร์ฟเวอร์ก่อนผ่านส่วนถัดไปก่อนที่จะเข้าใช้งานเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Soulmask เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งการตั้งค่าเซิร์ฟเวอร์เพิ่มเติมได้โดยแก้ไขพารามิเตอร์ในไฟล์ **StartServer.bat** ที่อยู่ในไดเรกทอรีหลัก และไฟล์ **GameUserSettings.ini** ที่อยู่ในเส้นทาง `../WS/Saved/Config/WindowsServer`

ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](soulmask-configuration.md) ของเราเพื่อดูพารามิเตอร์และตัวเลือกการตั้งค่าทั้งหมดสำหรับเซิร์ฟเวอร์ Soulmask ของคุณ

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาที่จะเริ่มเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีหลักและรัน **StartServer.bat** เพื่อเริ่มกระบวนการเซิร์ฟเวอร์ จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มต้นเซิร์ฟเวอร์

:::tip
ถ้าเซิร์ฟเวอร์ของคุณเริ่มไม่ขึ้นและหน้าต่างพรอมต์คำสั่งหายไป ให้เข้าไปที่ไดเรกทอรี `../WS/Saved/Logs` และตรวจสอบล็อกล่าสุดเพื่อวิเคราะห์ปัญหา

มีปัญหาทั่วไปเกี่ยวกับบริการ Steam ออนไลน์ที่ไม่สามารถเริ่มบนไบนารีเซิร์ฟเวอร์เฉพาะ Windows เนื่องจากการแพ็กเกจผิดพลาด หากเกิดข้อผิดพลาดเกี่ยวกับ Steam ให้ไปที่ไดเรกทอรีหลักและย้ายไฟล์ต่อไปนี้ไปยังโฟลเดอร์ `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll` จากนั้นลองเริ่มเซิร์ฟเวอร์อีกครั้ง เซิร์ฟเวอร์ควรจะเริ่มในพรอมต์คำสั่งได้สำเร็จ
:::

ตอนนี้คุณจะสามารถเชื่อมต่อโดยตรงกับเซิร์ฟเวอร์ผ่าน IP ได้โดยกรอกที่อยู่ IP ของเซิร์ฟเวอร์และพอร์ต 8777 ในเมนู multiplayer ของเกม

ถ้าคุณต้องการให้เซิร์ฟเวอร์ของคุณแสดงในรายชื่อเซิร์ฟเวอร์ โปรดดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](soulmask-configuration.md) และเพิ่มพารามิเตอร์ `-SteamServerName` ที่เหมาะสมในไฟล์ **StartServer.bat** บันทึกไฟล์แล้วรันไฟล์ batch อีกครั้ง

คุณได้ติดตั้ง Soulmask บน Windows Dedicated Server ของคุณสำเร็จแล้ว!