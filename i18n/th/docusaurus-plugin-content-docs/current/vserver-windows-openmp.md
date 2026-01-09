---
id: vserver-windows-openmp
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ Open.mp บน Windows"
description: "เรียนรู้วิธีตั้งค่าและกำหนดค่าเซิร์ฟเวอร์เฉพาะ open.mp บน VPS Windows ของคุณ เพื่อเล่นเกมมัลติเพลเยอร์ได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมี VPS Windows และต้องการติดตั้งบริการเซิร์ฟเวอร์เฉพาะ open.mp บนเครื่องใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้ เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ VPS ของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าสู่เซิร์ฟเวอร์ได้แล้ว ให้ดาวน์โหลดเวอร์ชันล่าสุดจาก [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) ตรวจสอบให้แน่ใจว่าคุณเลือกเวอร์ชัน **win-x86**

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## การติดตั้ง

เมื่อดาวน์โหลดไฟล์ release มาแล้ว ให้แตกไฟล์ด้วยโปรแกรมอย่าง 7zip หรือ WinRAR จะได้โฟลเดอร์ **Server** ซึ่งจะมีไฟล์เซิร์ฟเวอร์ทั้งหมดที่จำเป็น

เพื่อเริ่มเซิร์ฟเวอร์ ให้รันไฟล์ **omp-server.exe** เซิร์ฟเวอร์จะเริ่มบูตขึ้นทันที แต่เราแนะนำให้ตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ก่อน

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ทั้งผ่านคำสั่ง PowerShell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

:::tip
เมื่อเปิดเซิร์ฟเวอร์ครั้งแรก จะมีหน้าต่าง UAC ขึ้นมา หากคุณกดยอมรับ กฎไฟร์วอลล์จะถูกตั้งค่าให้อัตโนมัติ คุณสามารถข้ามไปยังส่วนถัดไปได้เลย หากไม่ ให้ทำตามวิธีใดวิธีหนึ่งด้านล่าง
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมด Administrator มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน PowerShell Prompt:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ open.mp ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** หากเปิดหน้า Windows Firewall ปกติ อาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่ต้องการ

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ open.mp ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามนี้ และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 7777
- UDP ขาเข้าและขาออก: 7777

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้จากภายนอก คุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้เลย

เราแนะนำให้ตั้งค่าเซิร์ฟเวอร์ของคุณก่อนผ่านส่วนถัดไปก่อนที่จะเข้าใช้งานเซิร์ฟเวอร์

## การกำหนดค่า

ตอนนี้คุณได้ตั้งค่าเซิร์ฟเวอร์ open.mp เสร็จเรียบร้อยแล้ว คุณสามารถปรับแต่งเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์กำหนดค่า

กลับไปที่โฟลเดอร์หลัก แล้วหาไฟล์ **config.json** เปิดไฟล์นี้ขึ้นมา คุณสามารถปรับแต่งพารามิเตอร์ต่าง ๆ ของเซิร์ฟเวอร์ได้หลากหลาย ตั้งแต่พอร์ต รหัสผ่าน และอื่น ๆ อีกมากมาย

ตัวอย่างการตั้งค่าบางส่วน:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

ดูรายละเอียดตัวเลือกทั้งหมดและคำอธิบายได้ใน [คู่มือการกำหนดค่าเซิร์ฟเวอร์](openmp-configuration.md)

## การเริ่มต้น & การเชื่อมต่อกับเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีหลักและรัน **omp-server.exe** เพื่อเริ่มกระบวนการบูต เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มทำงาน

ตอนนี้คุณสามารถเชื่อมต่อเซิร์ฟเวอร์โดยตรงผ่านตัวเปิด open.mp ในเกมได้เลย หากต้องการให้แสดงข้อมูลเซิร์ฟเวอร์ในรายการเซิร์ฟเวอร์ ให้ตรวจสอบใน [คู่มือการกำหนดค่าเซิร์ฟเวอร์](openmp-configuration.md) ว่าพารามิเตอร์ `enable_query` ตั้งเป็น true (ซึ่งควรเป็นค่าเริ่มต้น) บันทึกไฟล์แล้วรันเซิร์ฟเวอร์อีกครั้ง

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและกำหนดค่าเซิร์ฟเวอร์ open.mp บน VPS ของคุณสำเร็จแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />