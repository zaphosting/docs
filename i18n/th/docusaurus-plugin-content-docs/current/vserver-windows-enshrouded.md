---
id: vserver-windows-enshrouded
title: "VPS: การตั้งค่าเซิร์ฟเวอร์เฉพาะ Enshrouded บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Enshrouded บน VPS Windows ของคุณ เพื่อการเล่นเกมและควบคุมที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณมี VPS Windows และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ Enshrouded บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="วิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Enshrouded บน VPS Windows!" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>
<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็นได้ SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client ซึ่งเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่ายๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมา แล้วนำไปวางในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาแล้วใช้ฟังก์ชัน unzip ของ Windows หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar ก็ได้ ผลลัพธ์จะได้ไฟล์ **steamcmd.exe**

แค่รัน **steamcmd.exe** แล้วรอจนกระทั่งกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณก็พร้อมเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ Enshrouded ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่เปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการ: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณอยากใช้สำหรับเซิร์ฟเวอร์ เช่น:
```
force_install_dir C:\Enshrouded-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2278520` เพื่อเริ่มดาวน์โหลด App ID **2278520** คือแอปพลิเคชัน **Enshrouded**

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
อย่าขัดจังหวะกระบวนการก่อนเสร็จเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้ ที่นี่คุณสามารถใช้ **enshrouded_server.exe** เพื่อเริ่มเซิร์ฟเวอร์ได้เลย แต่เราแนะนำให้ตั้งค่า port forwarding และตั้งค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** อย่าลืมคลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์และทุกอย่างทำงานถูกต้อง

:::info
ต้องรัน Powershell ในโหมด Administrator เท่านั้น ไม่งั้นการตั้งค่าอาจไม่ทำงานถูกต้อง
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Enshrouded ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นถ้าเปิดแค่หน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Enshrouded ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามนี้ แล้วเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 15636-15637
- UDP ขาเข้าและขาออก: 15636-15637

ถ้าต้องการความช่วยเหลือเพิ่มเติม ดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเราได้เลย

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก คุณสามารถเชื่อมต่อโดยใช้ที่อยู่ IP ของเซิร์ฟเวอร์ โดยเลือกตัวละครในเมนูหลัก ไปที่แท็บ **Find Games** แล้วกด **Add Server** ใส่ IP เซิร์ฟเวอร์พร้อมพอร์ต (ค่าเริ่มต้นคือ 15636) และรหัสผ่านเซิร์ฟเวอร์ (ถ้ามี ถ้าไม่มีเว้นว่างไว้)

:::tip
ลองดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](enshrouded-configuration.md) ของเรา ถ้าคุณอยากตั้งรหัสผ่านเซิร์ฟเวอร์และปรับแต่งการตั้งค่าอื่นๆ
:::

เราแนะนำให้ตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนจะเข้าเล่น

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Enshrouded เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิกที่อยู่ในไดเรกทอรีของเซิร์ฟเวอร์

ก่อนอื่น ไปที่ไดเรกทอรีนี้:
```
..EnshroudedServer/ (ไดเรกทอรีหลัก)
```

คุณจะเจอไฟล์คอนฟิกชื่อ **enshrouded_server.json** ผ่านไฟล์นี้คุณสามารถตั้งค่าพารามิเตอร์ต่างๆ ของเซิร์ฟเวอร์ได้ ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](enshrouded-configuration.md) เพื่อดูตัวเลือกทั้งหมดและความหมายของแต่ละตัว

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Enshrouded แล้วรัน **enshrouded_server.exe** เพื่อเริ่มต้น เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มกระบวนการสตาร์ท คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านแท็บ **Find Games** กด **Add Server** แล้วใส่ IP และพอร์ตเซิร์ฟเวอร์ (ค่าเริ่มต้นคือ 15636)

## สรุป

ยินดีด้วย! คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Enshrouded บน VPS ของคุณสำเร็จแล้ว! ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />