---
id: dedicated-windows-foundry
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Foundry Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่า Foundry Dedicated Server บน Windows VPS หรือเซิร์ฟเวอร์เฉพาะของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี Windows VPS หรือเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Foundry Dedicated Server บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="วิธีตั้งค่า Foundry Dedicated Server บน Windows VPS!" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องตั้งค่า **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar ผลลัพธ์จะได้ไฟล์ **steamcmd.exe**

รันไฟล์ **steamcmd.exe** และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้ง Foundry dedicated server ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งภายในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Foundry-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2915550` เพื่อเริ่มดาวน์โหลด App ID **2915550** คือแอปพลิเคชัน **Foundry**

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
อย่าขัดจังหวะกระบวนการก่อนเสร็จสิ้นเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลด ซึ่งไฟล์เซิร์ฟเวอร์ทั้งหมดจะถูกเก็บไว้ ที่นี่คุณสามารถใช้ **FoundryDedicatedServerLauncher.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราแนะนำให้ตั้งค่า port forwarding และการตั้งค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

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
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Foundry ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Foundry ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 3724, 27015
- UDP ขาเข้าและขาออก: 3724, 27015

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้ ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ โดยไปที่เมนู Multiplayer เลือก IP Direct Connect แล้วกรอกที่อยู่ IP และพอร์ตที่ใช้ ซึ่งโดยค่าเริ่มต้นคือ 3724 ตามที่คุณตั้งค่าไว้

เราแนะนำให้ตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์ของคุณ

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่า Foundry server เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์การตั้งค่า กลับไปที่โฟลเดอร์เกมของคุณ และสร้างไฟล์ **app.cfg** ใหม่ (ถ้ายังไม่มี) ในไดเรกทอรีหลัก ซึ่งควรอยู่ในโฟลเดอร์เดียวกับไฟล์ **FoundryDedicatedServerLauncher.exe**

เปิดไฟล์ **app.cfg** ด้วย notepad หรือโปรแกรมแก้ไขที่คุณชอบ แล้วเริ่มเพิ่มตัวเลือกการตั้งค่าสำหรับพารามิเตอร์ที่ต้องการปรับแต่ง โดยสร้างบรรทัดใหม่สำหรับแต่ละพารามิเตอร์ในรูปแบบ `ชื่อพารามิเตอร์=ค่า`

ตัวอย่างเช่น นี่คือตัวเลือกการตั้งค่าที่ตั้งไว้สามตัว:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](foundry-configuration.md) เพื่อดูตัวเลือกทั้งหมดและคำอธิบายของแต่ละตัว

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีหลักและรัน **FoundryDedicatedServerLauncher.exe** เพื่อเริ่มกระบวนการสตาร์ท เซิร์ฟเวอร์จะเปิดคอนโซลในพรอมต์คำสั่งและเริ่มทำงาน

ตอนนี้คุณสามารถเชื่อมต่อโดยตรงกับเซิร์ฟเวอร์ผ่าน IP ได้โดยไปที่ **Multiplayer->IP Direct Connect** และกรอกที่อยู่ IP ของเซิร์ฟเวอร์พร้อมพอร์ต 3724 ซึ่งเป็นค่าเริ่มต้นและพอร์ตที่คุณตั้งค่า port forwarding ไว้

ถ้าคุณต้องการให้เซิร์ฟเวอร์ของคุณแสดงในรายชื่อเซิร์ฟเวอร์ โปรดดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](foundry-configuration.md) และเพิ่มพารามิเตอร์ `server_name` และ `server_is_public` ที่เหมาะสมในไฟล์การตั้งค่า บันทึกไฟล์แล้วรันไฟล์เซิร์ฟเวอร์อีกครั้ง

คุณได้ติดตั้ง Foundry บน Windows Dedicated Server ของคุณสำเร็จแล้ว

<InlineVoucher />