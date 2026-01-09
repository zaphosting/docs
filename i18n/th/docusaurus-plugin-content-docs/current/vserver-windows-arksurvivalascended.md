---
id: vserver-windows-arksurvivalascended
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK Survival Ascended บน Windows"
description: "ค้นหาวิธีตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK: Survival Ascended บน VPS Windows เพื่อการเล่นเกมที่ลื่นไหลและควบคุมเซิร์ฟเวอร์ได้ง่าย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
คุณมี VPS Windows และต้องการติดตั้งเซิร์ฟเวอร์เฉพาะ ARK: Survival Ascended บนมันใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งเซอร์วิสนี้บนเซิร์ฟเวอร์ของคุณ
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ตั้งค่าเซิร์ฟเวอร์เฉพาะ ARK: Survival Ascended บน VPS Windows" description="รู้สึกเข้าใจมากขึ้นเมื่อเห็นของจริง? เรามีให้คุณ! ดำน้ำดูวิดีโอของเราที่อธิบายทุกอย่างให้คุณ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ!"/>
<InlineVoucher />

## เตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว คุณจะต้องติดตั้ง **SteamCMD** เพื่อให้สามารถดาวน์โหลดไฟล์เซิร์ฟเวอร์เฉพาะที่จำเป็น SteamCMD คือเวอร์ชัน **command-line (CLI)** ของ Steam client ซึ่งเป็นเครื่องมือที่ช่วยให้คุณดาวน์โหลดไฟล์ Steam workshop และไฟล์เซิร์ฟเวอร์เฉพาะได้ง่าย ๆ ดาวน์โหลด [SteamCMD จากเว็บไซต์ Valve อย่างเป็นทางการ](https://developer.valvesoftware.com/wiki/SteamCMD) หรือดาวน์โหลดโดยตรง [ที่นี่](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)

สร้างโฟลเดอร์ใหม่ที่ไหนสักแห่งบนเซิร์ฟเวอร์ของคุณ ในตัวอย่างนี้เราจะตั้งชื่อว่า `steamcmd` ไปที่โฟลเดอร์ Downloads ของคุณ หาไฟล์ **steamcmd.zip** ที่เพิ่งดาวน์โหลดมาแล้ววางไว้ในโฟลเดอร์ `steamcmd` จากนั้นแตกไฟล์โดยคลิกขวาและใช้ฟังก์ชัน unzip ของ Windows หรือใช้โปรแกรมอย่าง .7zip หรือ Winrar จะได้ไฟล์ **steamcmd.exe** แตกออกมา

รันไฟล์ **steamcmd.exe** แล้วรอจนกระบวนการติดตั้งเสร็จสมบูรณ์

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

เมื่อข้อความ **Loading Steam API.... OK** ปรากฏขึ้น แสดงว่ากระบวนการเสร็จสมบูรณ์แล้ว คุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ ARK: Survival Ascended ในส่วนถัดไปได้เลย

## การติดตั้ง

หลังจากติดตั้งเสร็จ คุณจะสามารถรันคำสั่งในพรอมต์คำสั่งของ **steamcmd.exe** ที่เปิดไว้ก่อนหน้านี้ได้ คุณต้องล็อกอินก่อนที่จะทำอะไรได้ โดยใช้ผู้ใช้ **anonymous** ด้วยคำสั่ง: `login anonymous`

เมื่อเข้าสู่ระบบแล้ว คุณก็สามารถเริ่มดาวน์โหลดไฟล์ได้เลย

:::tip
ถ้าต้องการตั้งไดเรกทอรีติดตั้งเอง ให้ใช้คำสั่ง `force_install_dir [path]` โดยแทนที่ `[path]` ด้วยเส้นทางที่คุณต้องการใช้สำหรับเซิร์ฟเวอร์ เช่น:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

ตอนนี้รันคำสั่ง `app_update 2430930` เพื่อเริ่มดาวน์โหลด App ID **2430930** คือแอปพลิเคชัน **เซิร์ฟเวอร์เฉพาะ ARK: Survival Ascended**

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
อย่าหยุดกระบวนการก่อนเสร็จเพื่อหลีกเลี่ยงข้อผิดพลาด อาจใช้เวลาสักครู่ แต่คุ้มค่าที่จะรอ! :)
:::

### สร้างไฟล์สตาร์ทอัพ

เมื่อดาวน์โหลดเสร็จสมบูรณ์ ให้ไปที่ไดเรกทอรีที่ติดตั้งไว้ แล้วเข้าไปที่โฟลเดอร์ย่อยนี้:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

ในโฟลเดอร์นี้ คุณต้องสร้างไฟล์สตาร์ทอัพเพื่อใช้เปิดเซิร์ฟเวอร์เฉพาะ สร้างไฟล์ชื่อ `start-ark.bat` คุณสามารถสร้างไฟล์ข้อความก่อนแล้วเปลี่ยนนามสกุลเป็น `.bat` ได้

:::info
ตรวจสอบให้แน่ใจว่าเปิดใช้งานตัวเลือก "แสดงนามสกุลไฟล์" ใน File Explorer เพื่อให้ใช้สกุลไฟล์ถูกต้อง
:::

เปิดไฟล์ด้วยโปรแกรมแก้ไขข้อความ (เช่น Notepad++) แล้วเพิ่มเนื้อหาดังนี้:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

ในคำสั่งนี้ ให้แทนที่ `[server_name]`, `[admin_password]` และ `[max_players]` ด้วยค่าที่คุณต้องการ

ถ้าคุณต้องการตั้งรหัสผ่านสำหรับผู้เล่นทั่วไปที่จะเข้าร่วมด้วย ให้เพิ่ม `?ServerPassword=[join_password]` เข้าไปในคำสั่งข้างบน เช่น:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

ตรวจสอบว่าคุณตั้งค่าตัวแปรครบถ้วนและบันทึกไฟล์ก่อนปิด

เซิร์ฟเวอร์ของคุณจะเข้าถึงได้ในเครื่องผ่าน `127.0.0.1:7777` เมื่อคุณรันไฟล์สตาร์ทอัพและเซิร์ฟเวอร์ออนไลน์แล้ว แต่คุณยังต้องตั้งค่าเปิดพอร์ตใน Windows Firewall เพื่อให้เซิร์ฟเวอร์เข้าถึงได้จากภายนอก ซึ่งจะอธิบายในส่วนถัดไป

### การเปิดพอร์ตให้เซิร์ฟเวอร์

เพื่อให้เซิร์ฟเวอร์เข้าถึงได้จากภายนอก คุณต้องตั้งค่ากฎการเปิดพอร์ตสำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้ คุณสามารถทำได้ผ่านคำสั่ง Powershell ที่ง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่ารัน Powershell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ Ark: Survival Ascended ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาใน Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ Ark: Survival Ascended ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามนี้ และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 27020
- UDP ขาเข้าและขาออก: 27015
- UDP ขาเข้าและขาออก: 7777-7778

ถ้าต้องการความช่วยเหลือเพิ่มเติมในการทำนี้ ให้ใช้ [คู่มือการเปิดพอร์ต (Firewall)](vserver-windows-port.md) ของเรา

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก คุณสามารถเชื่อมต่อโดยเปิดคอนโซลในเกม Ark: Survival Ascended แล้วรันคำสั่ง `open [your_ip_address]:7777`

เราแนะนำให้ตั้งค่าเซิร์ฟเวอร์ของคุณก่อนผ่านส่วนถัดไปก่อนเข้าเล่น

## การตั้งค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์เฉพาะ Ark: Survival Ascended เสร็จแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมได้ผ่านไฟล์ตั้งค่าสองไฟล์ที่อยู่ในไดเรกทอรีเซิร์ฟเวอร์ของคุณ

ไปที่ไดเรกทอรีเหล่านี้:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

คุณจะเจอไฟล์ตั้งค่า **DefaultGameUserSettings.ini** และ **Gameusersettings.ini** ในไฟล์เหล่านี้คุณสามารถแก้ไขตัวแปรและตัวเลือกต่าง ๆ ที่เกี่ยวกับเซิร์ฟเวอร์ของคุณได้หลากหลาย

:::warning[CROSSPLAY SUPPORT]
ตั้งแต่วันที่ 18 พฤศจิกายน 2023 เป็นต้นไป เจ้าของเซิร์ฟเวอร์ต้องติดตั้งรายการเพิกถอนใบรับรองด้วยตนเอง ซึ่งสามารถดาวน์โหลดได้จาก https://dev.epicgames.com/ (หรือโดยตรงจาก http://crl.r2m02.amazontrust.com/r2m02.crl) ไฟล์ r2m02.crl ที่ดาวน์โหลดต้องติดตั้ง (คลิกขวาที่ไฟล์) โดยเลือก Place all certificates in the following store และเลือก Trusted Root Certification Authorities อาจต้องรีสตาร์ทเครื่อง

ถ้าเจ้าของเซิร์ฟเวอร์ติดตั้งไฟล์ใบรับรอง r2m02.cer ก่อนวันที่ 18 พฤศจิกายน 2023 และเซิร์ฟเวอร์ไม่แสดง ต้องลบใบรับรองนั้นออกจากระบบเพื่อให้เซิร์ฟเวอร์แสดงอีกครั้ง โดยรัน (Windows + R) certmgr.msc แล้วค้นหา Amazon RSA 2048 M02 ใน Trusted Root Certification Authorities และทำแบบเดียวกันใน certlm.msc สุดท้ายอาจต้องรีสตาร์ทเครื่อง
:::

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์ของคุณแล้ว แต่ก่อนเซิร์ฟเวอร์จะเริ่มทำงานได้ คุณต้องติดตั้ง [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) บน VPS Windows ของคุณก่อน

:::info
คุณต้องติดตั้ง [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) บน VPS Windows ก่อนเริ่มเซิร์ฟเวอร์ หากยังไม่มี เพราะเป็นสิ่งจำเป็น เซิร์ฟเวอร์อาจไม่เริ่มทำงานถ้าไม่มีตัวนี้
:::

เมื่อคุณติดตั้งเสร็จแล้ว ให้รันไฟล์ **start-ark.bat** ที่สร้างไว้ก่อนหน้านี้

จะเปิดคอนโซลเซิร์ฟเวอร์ใน command prompt และเริ่มกระบวนการสตาร์ท ถ้าทุกอย่างเป็นไปตามคาด เซิร์ฟเวอร์ของคุณจะปรากฏในรายชื่อเซิร์ฟเวอร์ หรือคุณสามารถเชื่อมต่อโดยตรงโดยเปิดคอนโซลในเกมแล้วรันคำสั่ง `open [your_ip_address]:7777`

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่าเซิร์ฟเวอร์ ARK-Survival-Ascended บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />