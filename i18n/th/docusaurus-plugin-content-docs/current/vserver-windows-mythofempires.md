---
id: vserver-windows-mythofempires
title: "VPS: การตั้งค่าเซิร์ฟเวอร์เฉพาะ Myth of Empires บน Windows"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ Myth of Empires บน VPS Windows ของคุณอย่างรวดเร็วและมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การตั้งค่าเซิร์ฟเวอร์เฉพาะ MOE
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ
คุณมี VPS Windows และต้องการติดตั้งเซิร์ฟเวอร์เฉพาะ MOE ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ  
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="วิธีตั้งค่าเซิร์ฟเวอร์ Myth Of Empires บน Windows VPS!" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำน้ำดูวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>
<InlineVoucher />

## การเตรียมตัว
เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของไคลเอนต์ Steam และเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และเซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ดาวน์โหลดของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางลงในโฟลเดอร์ `steamcmd` ของคุณ จากนั้นแตกไฟล์โดยคลิกขวาแล้วใช้ฟังก์ชันแตกไฟล์ของ Windows หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar ซึ่งจะได้ไฟล์ **steamcmd.exe** ที่ถูกแตกไฟล์ออกมา

แค่รัน **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว และคุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ MOE ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่คุณเปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการ: คุณสามารถตั้งไดเรกทอรีติดตั้งที่ต้องการได้ด้วยคำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ของคุณ เช่น:
```
force_install_dir C:\MOE-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 1794810` เพื่อเริ่มดาวน์โหลด App ID **1794810** คือแอปพลิเคชัน **MOE**

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

เมื่อดาวน์โหลดเสร็จแล้ว ไปที่ไดเรกทอรีดาวน์โหลดที่ไฟล์เซิร์ฟเวอร์ทั้งหมดถูกเก็บไว้

### การเข้าถึง PrivateServerTool

ต่างจากการติดตั้ง SteamCMD ปกติ MOE ต้องให้คุณนำโฟลเดอร์จากการติดตั้งเกม Steam บนเครื่องของคุณมาใช้เพื่อให้สามารถรันเซิร์ฟเวอร์บน Windows ได้

เปิด Steam บนเครื่องของคุณ คลิกขวาที่เกม **Myth of Empires** แล้วเลือก **Browse local files** ขณะที่เลื่อนเมาส์ไปที่ส่วน **Manage**

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

ในโฟลเดอร์หลักที่เปิดขึ้น หาโฟลเดอร์ **PrivateServerTool** นี่คือโฟลเดอร์ที่คุณต้องคัดลอกไปยังเซิร์ฟเวอร์ของคุณ คุณสามารถกด `CTRL+C` เพื่อคัดลอกบนพีซีของคุณ และกด `CTRL+V` เพื่อวางในเซิร์ฟเวอร์ Windows ผ่าน RDP ให้แน่ใจว่าได้วางในไดเรกทอรีหลักของเซิร์ฟเวอร์เฉพาะของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

ต่อไป ไปที่ส่วนถัดไปเพื่อทำการตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ของคุณ

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ MOE ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ MOE ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 11888, 12888
- UDP ขาเข้าและขาออก: 11888, 12888

ถ้าต้องการความช่วยเหลือเพิ่มเติม โปรดใช้ [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

ไปที่ส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์ของคุณเพื่อสร้างไฟล์คอนฟิกและไฟล์เริ่มต้น `.bat`

## การตั้งค่า

ตอนนี้คุณจะใช้เครื่องมือเซิร์ฟเวอร์ที่อยู่ในโฟลเดอร์ที่คุณคัดลอกมาจากไฟล์เกมของคุณ เพื่อสร้างไฟล์คอนฟิกและไฟล์เริ่มต้น `.bat` ที่จะใช้เปิดเซิร์ฟเวอร์ของคุณ

ไปที่ไดเรกทอรีนี้ (โฟลเดอร์ที่คุณคัดลอกมาก่อนหน้านี้):
```
../MOE/PrivateServerTool
```

ในโฟลเดอร์นี้ รันไฟล์ **PrivateServerTool.exe** ใช้เครื่องมือนี้เพื่อกำหนดค่าตัวเลือกเซิร์ฟเวอร์ตามที่คุณต้องการ รวมถึงม็อด การตั้งค่าเกม และอื่น ๆ

เราแนะนำให้ตั้งค่าพารามิเตอร์พื้นฐานอย่างน้อย เช่น **ชื่อเซิร์ฟเวอร์** ก่อนดำเนินการต่อ

เมื่อพร้อมแล้ว ไปที่แท็บ **Start Console** ในเครื่องมือ กดปุ่ม **Save Config** แล้วตามด้วยปุ่ม **Start Server** ซึ่งจะสร้างไฟล์ `StartPrivateServer.bat` ที่คุณจะใช้เปิดเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

เราแนะนำให้สร้างช็อตคัตของไฟล์ `StartPrivateServer.bat` โดยคลิกขวาแล้วเลือก **Create a shortcut** เพื่อให้เปิดเซิร์ฟเวอร์ได้ง่ายขึ้น

:::note
คุณอาจต้องแก้ไขเส้นทางไปยังโฟลเดอร์เกมในไฟล์ `StartPrivateServer.bat` ที่สร้างขึ้นอัตโนมัติ เปิดไฟล์ด้วยโปรแกรมอย่าง notepad แล้วตรวจสอบว่าเส้นทางตอนต้นไฟล์ตรงกับเส้นทางที่เซิร์ฟเวอร์อยู่หรือไม่

ถ้าเส้นทางไม่ถูกต้อง คุณสามารถดับเบิลคลิกที่แถบเส้นทางด้านบนเมื่ออยู่ในโฟลเดอร์หลักของเซิร์ฟเวอร์ MOE เพื่อคัดลอกเส้นทางปัจจุบัน แล้ววางในไฟล์ให้ถูกต้อง
:::

## การเริ่มต้นและเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว ไปที่ไดเรกทอรีของเซิร์ฟเวอร์ Myth of Empires แล้วรัน **StartPrivateServer.bat** (หรือช็อตคัตถ้าคุณสร้างไว้) เพื่อเริ่มกระบวนการเปิดเซิร์ฟเวอร์ จะเปิดคอนโซลเซิร์ฟเวอร์ในพรอมต์คำสั่งและเริ่มต้นเซิร์ฟเวอร์ คุณจะสามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้โดยตรงผ่านแท็บ **Custom Server** และค้นหาเซิร์ฟเวอร์ของคุณผ่านช่องค้นหา

:::tip
ถ้าคุณเจอปัญหาเชื่อมต่อเซิร์ฟเวอร์ ให้เปิดไฟล์ `StartPrivateServer.bat` ด้วยโปรแกรมอย่าง notepad แล้วตรวจสอบว่าพารามิเตอร์ IP ทั้งสองตรงกับ IP ของเซิร์ฟเวอร์ Windows ของคุณหรือไม่ เครื่องมือที่ใช้สร้างไฟล์นี้จะกรอกให้อัตโนมัติ แต่การตรวจสอบนี้ช่วยแก้ปัญหาได้ดี
:::

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ Myth of Empires บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />