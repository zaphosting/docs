---
id: vserver-windows-foundry
title: "VPS: ตั้งค่า Foundry เซิร์ฟเวอร์เฉพาะบน Windows"
description: "เรียนรู้วิธีตั้งค่า Foundry เซิร์ฟเวอร์เฉพาะบน VPS Windows ของคุณ เพื่อการโฮสต์เกมที่ลื่นไหล → เริ่มต้นเลย"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และอยากติดตั้งบริการ Foundry เซิร์ฟเวอร์เฉพาะบนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="วิธีตั้งค่า Foundry เซิร์ฟเวอร์เฉพาะบน VPS Windows!" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำน้ำดูวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>
<InlineVoucher />

## เตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา ถ้าคุณต้องการความช่วยเหลือในการทำแบบนี้

เมื่อเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client ซึ่งเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่ายๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดตรงๆ [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมา แล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาแล้วใช้ฟังก์ชัน unzip ของ Windows หรือโปรแกรมอย่าง .7zip หรือ Winrar จะได้ไฟล์ **steamcmd.exe** แตกออกมา

แค่รัน **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณก็พร้อมเริ่มติดตั้ง Foundry เซิร์ฟเวอร์เฉพาะในส่วนถัดไปได้เลย

## การติดตั้ง

หลังติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่เปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนถึงจะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็เริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการ: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณอยากใช้สำหรับเซิร์ฟเวอร์ เช่น:
```
force_install_dir C:\Foundry-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2915550` เพื่อเริ่มดาวน์โหลด App ID **2915550** คือแอปพลิเคชัน **Foundry**

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จ ให้ไปที่ไดเรกทอรีดาวน์โหลด ซึ่งไฟล์เซิร์ฟเวอร์ทั้งหมดจะอยู่ที่นั่น คุณสามารถใช้ **FoundryDedicatedServerLauncher.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราแนะนำให้ตั้งค่า port forwarding และเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
อย่าลืมรัน PowerShell ในโหมด Administrator ไม่งั้นการตั้งค่าอาจไม่ทำงานถูกต้อง
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell Prompt:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Foundry ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นถ้าเปิดแค่หน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Foundry ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามนี้ แล้วเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 3724, 27015
- UDP ขาเข้าและขาออก: 3724, 27015

ถ้าต้องการความช่วยเหลือเพิ่มเติม ดูที่ [Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้แล้ว คุณจะเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้โดยไปที่เมนู Multiplayer เลือก IP Direct Connect แล้วใส่ที่อยู่ IP และพอร์ตที่ใช้ ซึ่งค่าเริ่มต้นคือ 3724 ตามที่ตั้งค่าไว้

เราแนะนำให้ตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าใช้งานเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณตั้งค่า Foundry เซิร์ฟเวอร์เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิก ไปที่โฟลเดอร์เกมของคุณ แล้วสร้างไฟล์ **app.cfg** ใหม่ (ถ้ายังไม่มี) ในไดเรกทอรีหลัก ซึ่งควรอยู่ในโฟลเดอร์เดียวกับไฟล์ **FoundryDedicatedServerLauncher.exe**

เปิดไฟล์ **app.cfg** ด้วย notepad หรือโปรแกรมแก้ไขที่คุณชอบ แล้วเริ่มเพิ่มตัวเลือกคอนฟิกสำหรับพารามิเตอร์ที่ต้องการปรับ โดยสร้างบรรทัดใหม่สำหรับแต่ละพารามิเตอร์ในรูปแบบ `ชื่อพารามิเตอร์=ค่า`

ตัวอย่างเช่น มีการตั้งค่าดังนี้:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

ดูรายละเอียดตัวเลือกทั้งหมดได้ที่ [Server Configuration](foundry-configuration.md)

## การเริ่มต้น & การเชื่อมต่อเซิร์ฟเวอร์

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีหลักแล้วรัน **FoundryDedicatedServerLauncher.exe** เพื่อเริ่มต้น เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มกระบวนการสตาร์ท

ตอนนี้คุณสามารถเชื่อมต่อเซิร์ฟเวอร์โดยตรงผ่าน IP ได้โดยไปที่ **Multiplayer->IP Direct Connect** แล้วใส่ที่อยู่ IP เซิร์ฟเวอร์และพอร์ต 3724 ซึ่งเป็นค่าเริ่มต้นและพอร์ตที่คุณตั้งค่า port forwarding ไว้

ถ้าต้องการให้เซิร์ฟเวอร์ของคุณแสดงในรายการเซิร์ฟเวอร์ ให้ดูที่ [Server Configuration](foundry-configuration.md) แล้วเพิ่มพารามิเตอร์ `server_name` และ `server_is_public` ในไฟล์คอนฟิก จากนั้นบันทึกไฟล์และรันไฟล์เซิร์ฟเวอร์อีกครั้ง

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่า Foundry เซิร์ฟเวอร์บน VPS ของคุณสำเร็จแล้ว ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />