---
id: vserver-windows-avorion
title: "VPS: การตั้งค่าเซิร์ฟเวอร์เฉพาะ Avorion บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Avorion บน VPS Windows ของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ Avorion บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="วิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Avorion บน VPS Windows!" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุกๆ!"/>
<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของไคลเอนต์ Steam และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่ายๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ใดก็ได้บนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้วนำไปวางในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือโปรแกรมอื่นๆ เช่น .7zip หรือ Winrar จะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

รันไฟล์ **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ Avorion ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่เปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนจึงจะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการ: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ เช่น:
```
force_install_dir C:\Avorion-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 565060` เพื่อเริ่มดาวน์โหลด App ID **565060** คือแอปพลิเคชัน **Avorion**

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
อย่าขัดจังหวะกระบวนการจนกว่าจะเสร็จเพื่อป้องกันข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จ ให้ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้ ที่นี่คุณควรทำสำเนาไฟล์ **server.bat** และเปลี่ยนชื่อสำเนาเป็น **startserver.bat** หรือชื่ออื่นที่คล้ายกัน คุณจะใช้ไฟล์ `.bat` ใหม่เพื่อเริ่มเซิร์ฟเวอร์และแก้ไขการตั้งค่าเซิร์ฟเวอร์ในส่วนถัดไป เราแนะนำให้ตั้งค่า port forwarding และการตั้งค่าเซิร์ฟเวอร์ก่อน

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Avorion ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Avorion ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 27000
- UDP ขาเข้าและขาออก: 27000, 27003, 27020, 27021

หากต้องการความช่วยเหลือเพิ่มเติม โปรดใช้ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้ ซึ่งหมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้ เราแนะนำให้ตั้งค่าการตั้งค่าเซิร์ฟเวอร์ก่อนในส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ Avorion เสร็จแล้ว คุณสามารถตั้งค่าการตั้งค่าเซิร์ฟเวอร์ได้โดยตรงผ่านไฟล์ **startserver.bat** ที่คุณคัดลอกไว้ก่อนหน้านี้ เปิดไฟล์ด้วยโปรแกรมแก้ไขข้อความ เช่น notepad และปรับแต่งพารามิเตอร์สำหรับเซิร์ฟเวอร์ของคุณ

ถ้าคุณต้องการแก้ไขพารามิเตอร์และการตั้งค่าเฉพาะโลก คุณต้องเข้าไปที่โฟลเดอร์ galaxy saves และแก้ไขไฟล์การตั้งค่า **server.ini** ซึ่งจะถูกเก็บไว้ใน Windows AppData โดยเข้าถึงได้ผ่านเส้นทางนี้
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
คุณสามารถเข้าถึงเส้นทางนี้ได้ง่ายๆ โดยกด `CTRL` + `R` พร้อมกัน แล้วพิมพ์เส้นทางนี้ในกล่อง run: `%userprofile%/AppData/Roaming/Avorion/galaxies` กด **OK** แล้วคุณจะถูกพาไปยังโฟลเดอร์นั้นทันที

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีหลักของเซิร์ฟเวอร์ Avorion และรันไฟล์ **startserver.bat** ที่คุณสร้างไว้ก่อนหน้านี้เพื่อเริ่มกระบวนการสตาร์ท จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มต้นเซิร์ฟเวอร์ คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านตัวเลือกค้นหาเซิร์ฟเวอร์ในเกมโดยใส่ IP และพอร์ตของเซิร์ฟเวอร์ (พอร์ตเริ่มต้นคือ 27000)

## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ Avorion บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />