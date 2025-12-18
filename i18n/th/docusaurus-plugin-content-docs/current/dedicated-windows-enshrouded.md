---
id: dedicated-windows-enshrouded
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Enshrouded Dedicated Server บน Windows"
description: "ค้นพบวิธีการตั้งค่า Enshrouded Dedicated Server บน Windows VPS หรือเซิร์ฟเวอร์เฉพาะของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณมี Windows VPS หรือเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งบริการ Enshrouded Dedicated Server บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="วิธีตั้งค่า Enshrouded Dedicated Server บน Windows VPS!" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>



## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดได้โดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ใดก็ได้บนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือโปรแกรมอื่น ๆ เช่น .7zip หรือ Winrar จะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

รันไฟล์ **steamcmd.exe** และรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้ง Enshrouded dedicated server ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งภายในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ตัวเลือกเสริม: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\Enshrouded-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2278520` เพื่อเริ่มดาวน์โหลด App ID **2278520** คือแอปพลิเคชัน **Enshrouded**

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
โปรดอย่าขัดจังหวะกระบวนการจนกว่าจะเสร็จสมบูรณ์เพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกดาวน์โหลดไว้ ที่นี่คุณสามารถใช้ **enshrouded_server.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราขอแนะนำให้ตั้งค่า port forwarding และกำหนดค่าก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ลงในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์โดยอัตโนมัติที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Enshrouded ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Enshrouded ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 15636-15637
- UDP ขาเข้าและขาออก: 15636-15637

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้แล้ว ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ โดยเลือกตัวละครในเมนูหลัก ไปที่แท็บ **Find Games** แล้วกด **Add Server** ใส่ IP เซิร์ฟเวอร์ของคุณพร้อมพอร์ต (ค่าเริ่มต้นคือ 15636) และรหัสผ่านเซิร์ฟเวอร์ (ถ้ามี หากไม่มีให้เว้นว่างไว้)

:::tip
ดูคู่มือ [การตั้งค่าเซิร์ฟเวอร์](enshrouded-configuration.md) หากคุณต้องการตั้งรหัสผ่านสำหรับเซิร์ฟเวอร์และปรับแต่งการตั้งค่าอื่น ๆ
:::

เราแนะนำให้คุณตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Enshrouded เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์การตั้งค่าที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

ก่อนอื่น ไปที่ไดเรกทอรีนี้:
```
..EnshroudedServer/ (ไดเรกทอรีหลัก)
```

คุณจะพบไฟล์การตั้งค่า **enshrouded_server.json** ผ่านไฟล์นี้คุณสามารถตั้งค่าพารามิเตอร์บางอย่างของเซิร์ฟเวอร์ได้ ดูคู่มือ [การตั้งค่าเซิร์ฟเวอร์](enshrouded-configuration.md) เพื่อดูตัวเลือกทั้งหมดและคำอธิบายของแต่ละตัว

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Enshrouded และรัน **enshrouded_server.exe** เพื่อเริ่มกระบวนการสตาร์ท จะเปิดคอนโซลเซิร์ฟเวอร์ใน command prompt และเริ่มต้นเซิร์ฟเวอร์ คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านแท็บ **Find Games** กด **Add Server** แล้วใส่ IP และพอร์ตเซิร์ฟเวอร์ (ค่าเริ่มต้นคือ 15636)

คุณติดตั้ง Enshrouded บน Windows Dedicated Server ของคุณสำเร็จแล้ว!