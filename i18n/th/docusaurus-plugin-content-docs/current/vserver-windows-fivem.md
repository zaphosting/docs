---
id: vserver-windows-fivem
title: "VPS: ตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM"
description: "ค้นพบวิธีติดตั้งและตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM ของคุณเองบน VPS เพื่อเล่นเกมมัลติเพลเยอร์ได้อย่างลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## แนะนำ

คุณมี VPS และอยากติดตั้งและใช้งานเซิร์ฟเวอร์เฉพาะ FiveM ของตัวเองพร้อม txAdmin ไหม? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทุกขั้นตอนที่จำเป็นในการติดตั้งและตั้งค่า รวมถึงสิ่งที่คุณต้องรู้ก่อนเริ่มใช้งาน


## การเตรียมตัว

เพื่อที่จะตั้งค่าเซิร์ฟเวอร์ FiveM จำเป็นต้องมีขั้นตอนเตรียมตัวบางอย่างที่ต้องทำก่อนจะเริ่มติดตั้งเซิร์ฟเวอร์เฉพาะ FiveM จริงๆ



### ตั้งค่าฐานข้อมูล

ถ้าคุณต้องการใช้และติดตั้งรีซอร์สที่ต้องใช้ฐานข้อมูล คุณจะต้องมี **เซิร์ฟเวอร์ฐานข้อมูล** เพิ่มเติม มีหลายวิธีในการตั้งค่าเซิร์ฟเวอร์แบบนี้ ใน [คู่มือติดตั้ง MySQL](vserver-windows-installmysql.md) ของเรา เราจะแสดงวิธีติดตั้ง **เซิร์ฟเวอร์ฐานข้อมูล** ของคุณเองบน **VPS**



### ดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM

ขั้นตอนถัดไปคือดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM ให้เข้าไปที่เว็บไซต์ [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) ของ FiveM ผ่านเว็บเบราว์เซอร์ที่ติดตั้งไว้ในเครื่องของคุณ แล้วดาวน์โหลดเวอร์ชันเซิร์ฟเวอร์ FiveM ล่าสุด

แตกไฟล์ที่ดาวน์โหลดมาในโฟลเดอร์ Downloads แล้วย้ายไฟล์เซิร์ฟเวอร์ FiveM ไปไว้ในโฟลเดอร์แยกต่างหาก ตัวอย่างนี้จะเก็บซอฟต์แวร์เซิร์ฟเวอร์ไว้ในโฟลเดอร์ชื่อ **FiveM** บนเดสก์ท็อป

:::warning ต้องใช้โปรแกรมแตกไฟล์
เพื่อแตกไฟล์ซอฟต์แวร์เซิร์ฟเวอร์ FiveM ที่ดาวน์โหลดมา คุณต้องใช้โปรแกรมแตกไฟล์ ในตัวอย่างนี้ใช้ [โปรแกรม 7Zip](https://7-zip.com/)
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### สร้างคีย์ไลเซนส์เซิร์ฟเวอร์ FiveM

เซิร์ฟเวอร์ FiveM ทุกเครื่องต้องมีคีย์ไลเซนส์ของตัวเอง ซึ่งจัดการผ่าน [พอร์ทัล Cfx.re ใหม่](http://portal.cfx.re/) คีย์ไลเซนส์จะเชื่อมโยงกับบัญชี Cfx.re ของคุณ เข้าสู่ระบบเว็บไซต์ เลือกหมวด **Server** แล้วคลิกปุ่ม **Generate Key**

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## การตั้งค่า

ตอนนี้คุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ FiveM และ txAdmin ได้ เปิดโฟลเดอร์เซิร์ฟเวอร์ FiveM อีกครั้งแล้วรันแอป `FXServer.exe`

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


เมื่อแอปเซิร์ฟเวอร์รันขึ้นมาแล้ว จะเปิดคอนโซลเซิร์ฟเวอร์และ txAdmin ขึ้นมา ในอินเทอร์เฟซ txAdmin คุณต้องเชื่อมบัญชี **Cfx.re** ของคุณกับ txAdmin ด้วย  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### ตั้งค่า txAdmin

ในขั้นตอนตั้งค่า txAdmin เซิร์ฟเวอร์ FiveM ของคุณจะถูกติดตั้งและตั้งค่าใน 5 ขั้นตอน ทำตามคำแนะนำในอินเทอร์เฟซ txAdmin เริ่มจากตั้งชื่อ **เซิร์ฟเวอร์** ก่อน จากนั้นเลือก **ประเภทเซิร์ฟเวอร์** ที่ต้องการ ตัวอย่างนี้แสดงการติดตั้งเซิร์ฟเวอร์ FiveM ที่มี QBCore ติดตั้งมาแล้ว

เลือกตัวเลือก **Popular Recipes** ในขั้นตอน **Deployment Type** แล้วเลือก **QBCore Framework Template** ยืนยัน **Data Directory** ที่ต้องการ แล้วเริ่ม **Recipe Deployer** เพื่อทำการติดตั้งให้เสร็จ

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

ในขั้นตอน Recipe Deployer คุณต้องกรอกข้อมูลสำคัญก่อนเซิร์ฟเวอร์จะเริ่มทำงาน ใส่คีย์ไลเซนส์ FiveM ที่สร้างไว้ในช่อง **License Key** จากนั้นคลิก **Show/Hide Database Options (Advanced)** แล้วกรอกรายละเอียดล็อกอินของเซิร์ฟเวอร์ฐานข้อมูล ในกรณีนี้ต้องใช้แค่รหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ **root** เท่านั้น ส่วนการตั้งค่าอื่นๆ ไม่ต้องเปลี่ยน ตรวจสอบข้อมูลให้ถูกต้องแล้วคลิก **Run Recipe** เพื่อเริ่มกระบวนการ

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### ตั้งค่าไฟร์วอลล์
เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องตั้งค่ากฎการส่งต่อพอร์ตสำหรับพอร์ตที่เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือจะตั้งค่าผ่านหน้า Windows Defender Firewall ก็ได้

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมด Administrator ไม่เช่นนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ใน Powershell Prompt:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ FiveM ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **การตั้งค่าไฟร์วอลล์ Windows พร้อมความปลอดภัยขั้นสูง** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่ต้องการถ้าเปิดจากหน้าไฟร์วอลล์ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ FiveM ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามนี้ แล้วเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 30120
- UDP ขาเข้าและขาออก: 30120

ถ้าต้องการความช่วยเหลือเพิ่มเติมในการตั้งค่านี้ โปรดดู [คู่มือการส่งต่อพอร์ต (ไฟร์วอลล์)](vserver-windows-port.md)

</TabItem>
</Tabs>

## สรุป

คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM บน VPS ของคุณเรียบร้อยแล้ว หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂


<InlineVoucher />