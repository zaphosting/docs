---
id: dedicated-windows-openmp
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า Open.mp Dedicated Server บน Windows"
description: "ค้นพบวิธีตั้งค่าและรัน open.mp Dedicated Server บน Windows เพื่อเล่นเกมมัลติเพลเยอร์แบบลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คุณมีเซิร์ฟเวอร์เฉพาะ Windows และต้องการติดตั้งบริการ open.mp Dedicated Server บนเซิร์ฟเวอร์ของคุณใช่ไหม? คุณมาถูกที่แล้ว ในคู่มือนี้ เราจะอธิบายขั้นตอนทีละขั้นตอนในการติดตั้งบริการนี้บนเซิร์ฟเวอร์ของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อไปยังเซิร์ฟเวอร์เฉพาะของคุณผ่าน Remote Desktop (RDP) ใช้ [คู่มือการเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md) ของเรา หากคุณต้องการความช่วยเหลือในการทำเช่นนี้

เมื่อคุณเข้าถึงเซิร์ฟเวอร์ได้แล้ว ให้ดาวน์โหลดเวอร์ชันล่าสุดจาก [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) ตรวจสอบให้แน่ใจว่าเลือกเวอร์ชัน **win-x86**

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## การติดตั้ง

เมื่อดาวน์โหลดไฟล์เสร็จแล้ว ให้แตกไฟล์โดยใช้โปรแกรมอย่าง 7zip หรือ WinRAR จะได้โฟลเดอร์ **Server** ซึ่งจะมีไฟล์เซิร์ฟเวอร์ทั้งหมดที่จำเป็น

เพื่อเริ่มเซิร์ฟเวอร์ ให้รันไฟล์ **omp-server.exe** เซิร์ฟเวอร์จะเริ่มบูตขึ้นทันที แต่เราขอแนะนำให้ตั้งค่า port forwarding และกำหนดค่าเซิร์ฟเวอร์ก่อน

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### การตั้งค่า Port Forwarding สำหรับเซิร์ฟเวอร์ของคุณ

เพื่อให้แน่ใจว่าเซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎ port forwarding สำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ทั้งผ่านคำสั่ง PowerShell โดยตรง ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

:::tip
เมื่อเปิดเซิร์ฟเวอร์ครั้งแรก จะมีหน้าต่าง UAC ขึ้นมา หากคุณกดยอมรับ กฎไฟร์วอลล์จะถูกตั้งค่าให้อัตโนมัติ ทำให้คุณสามารถข้ามไปยังส่วนถัดไปได้เลย หากไม่ ให้ทำตามวิธีใดวิธีหนึ่งด้านล่าง
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **PowerShell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน PowerShell ในโหมดผู้ดูแลระบบ มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
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

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดแค่หน้า Windows Firewall ปกติ

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ open.mp ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามนี้ และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 7777
- UDP ขาเข้าและขาออก: 7777

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดู [คู่มือ Port Forwarding (Firewall)](vserver-windows-port.md)

</TabItem>
</Tabs>

เมื่อเพิ่มกฎเหล่านี้แล้ว เซิร์ฟเวอร์ของคุณจะเข้าถึงได้แล้ว หมายความว่าคุณจะสามารถเชื่อมต่อผ่านที่อยู่ IP ของเซิร์ฟเวอร์ได้

เราแนะนำให้คุณตั้งค่าเซิร์ฟเวอร์ก่อนผ่านส่วนถัดไปก่อนเข้าถึงเซิร์ฟเวอร์

## การตั้งค่า

ตอนนี้คุณได้ติดตั้งเซิร์ฟเวอร์ open.mp เสร็จเรียบร้อยแล้ว คุณสามารถตั้งค่าเซิร์ฟเวอร์เพิ่มเติมผ่านไฟล์คอนฟิกูเรชันได้

กลับไปที่โฟลเดอร์หลัก แล้วหาและเปิดไฟล์ **config.json** ในไฟล์นี้ คุณสามารถปรับแต่งพารามิเตอร์เซิร์ฟเวอร์ได้หลากหลาย ตั้งแต่พอร์ต รหัสผ่าน และอื่น ๆ อีกมากมาย

ตัวอย่างเช่น นี่คือตัวเลือกการตั้งค่าบางส่วนที่ตั้งไว้:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

ดู [คู่มือการตั้งค่าเซิร์ฟเวอร์](openmp-configuration.md) เพื่อดูตัวเลือกทั้งหมดและความหมายของแต่ละตัว

## การเริ่มต้น & การเชื่อมต่อเซิร์ฟเวอร์ของคุณ

ถึงเวลาสตาร์ทเซิร์ฟเวอร์แล้ว ไปที่ไดเรกทอรีหลักและรัน **omp-server.exe** เพื่อเริ่มกระบวนการบูต เซิร์ฟเวอร์จะเปิดคอนโซลใน command prompt และเริ่มทำงาน

ตอนนี้คุณจะสามารถเชื่อมต่อเซิร์ฟเวอร์โดยตรงผ่านตัวเปิดเกม open.mp ได้เลย หากต้องการให้แสดงข้อมูลเซิร์ฟเวอร์ในรายการเซิร์ฟเวอร์ ให้ตรวจสอบใน [คู่มือการตั้งค่าเซิร์ฟเวอร์](openmp-configuration.md) และตั้งค่า `enable_query` เป็น true (ซึ่งควรเป็นค่าเริ่มต้น) จากนั้นบันทึกไฟล์และรันไฟล์เซิร์ฟเวอร์อีกครั้ง

## สรุป

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ open.mp บนเซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />