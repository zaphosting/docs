---
id: dedicated-windows-fivem
title: "เซิร์ฟเวอร์เฉพาะ: การตั้งค่า FiveM Dedicated Server"
description: "ค้นพบวิธีการตั้งค่าและใช้งาน FiveM Dedicated Server ของคุณเองด้วย txAdmin เพื่อประสบการณ์เล่นเกมมัลติเพลเยอร์ที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## แนะนำ

คุณมีเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งและใช้งานบริการ FiveM Dedicated Server ของคุณเองด้วย txAdmin ใช่ไหม? คุณมาถูกที่แล้ว! ด้านล่างนี้เราจะอธิบายทุกขั้นตอนที่จำเป็นเกี่ยวกับวิธีการติดตั้งและตั้งค่า รวมถึงสิ่งที่คุณต้องคำนึงถึง



:::warning  ระบบปฏิบัติการที่เลือกและติดตั้งแล้ว
สมมติว่าคุณได้เลือกและติดตั้งระบบปฏิบัติการสำหรับเซิร์ฟเวอร์เฉพาะของคุณแล้ว หากยังไม่ได้ทำขั้นตอนนี้ คุณต้องทำตามขั้นตอนในคู่มือ [การตั้งค่าเริ่มต้น](dedicated-setup.md) สำหรับเซิร์ฟเวอร์เฉพาะก่อน
:::



## การเตรียมตัว

เพื่อที่จะตั้งค่าเซิร์ฟเวอร์ FiveM จำเป็นต้องมีขั้นตอนการเตรียมตัวบางอย่างที่ต้องทำก่อนเริ่มการตั้งค่า FiveM Dedicated Server จริง



### ตั้งค่าฐานข้อมูล

ถ้าคุณต้องการใช้และติดตั้งรีซอร์สที่ต้องการฐานข้อมูล คุณจะต้องมี **เซิร์ฟเวอร์ฐานข้อมูล** เพิ่มเติม มีหลายวิธีในการตั้งค่าเซิร์ฟเวอร์แบบนี้ ในคู่มือของเรา [ติดตั้ง MySQL](dedicated-windows-installmysql.md) เราจะแสดงวิธีติดตั้ง **เซิร์ฟเวอร์ฐานข้อมูล** ของคุณเองบน **เซิร์ฟเวอร์เฉพาะ**



### ดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM

ขั้นตอนถัดไปคือดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM ให้ไปที่เว็บไซต์ [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) ของ FiveM ผ่านเบราว์เซอร์อินเทอร์เน็ตที่ติดตั้งไว้ในเครื่องของคุณ และดาวน์โหลดเวอร์ชันล่าสุดของเซิร์ฟเวอร์ FiveM

แตกไฟล์ที่ดาวน์โหลดมาในโฟลเดอร์ Downloads และย้ายไฟล์เซิร์ฟเวอร์ FiveM ไปยังโฟลเดอร์แยกต่างหาก ในตัวอย่างนี้ ซอฟต์แวร์เซิร์ฟเวอร์จะอยู่ในโฟลเดอร์ชื่อ **FiveM** บนเดสก์ท็อป

:::warning ต้องใช้โปรแกรมแตกไฟล์
เพื่อแตกไฟล์ซอฟต์แวร์เซิร์ฟเวอร์ FiveM ที่ดาวน์โหลดมา คุณต้องใช้โปรแกรมแตกไฟล์ ในตัวอย่างนี้ใช้ [7Zip Software](https://7-zip.com/)
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### สร้างคีย์ไลเซนส์เซิร์ฟเวอร์ FiveM

เซิร์ฟเวอร์ FiveM ทุกเครื่องต้องมีคีย์ไลเซนส์ของตัวเอง ซึ่งจัดการผ่าน [Cfx.re Portal](http://portal.cfx.re/) ใหม่ คีย์ไลเซนส์จะเชื่อมโยงกับบัญชี Cfx.re ของคุณ เข้าสู่ระบบเว็บไซต์ ไปที่หมวดหมู่ **Server** แล้วคลิกปุ่ม **Generate Key**

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## การตั้งค่า

ตอนนี้คุณสามารถเริ่มติดตั้ง FiveM Server และ txAdmin ได้ เปิดโฟลเดอร์เซิร์ฟเวอร์ FiveM ของคุณอีกครั้งและรันแอปพลิเคชัน `FXServer.exe`

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


เมื่อแอปเซิร์ฟเวอร์เริ่มทำงานแล้ว คอนโซลเซิร์ฟเวอร์และ txAdmin จะเปิดขึ้น ในอินเทอร์เฟซ txAdmin คุณต้องเชื่อมบัญชี **Cfx.re** ของคุณกับ txAdmin


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### การตั้งค่า txAdmin

ในระหว่างการตั้งค่า txAdmin เซิร์ฟเวอร์ FiveM ของคุณจะถูกติดตั้งและตั้งค่าใน 5 ขั้นตอน ทำตามคำแนะนำในอินเทอร์เฟซ txAdmin และตั้งชื่อ **เซิร์ฟเวอร์** ก่อน จากนั้นเลือก **ประเภทเซิร์ฟเวอร์** ที่ต้องการ ตัวอย่างนี้แสดงการติดตั้งเซิร์ฟเวอร์ FiveM ที่มี QBCore ติดตั้งล่วงหน้า

เลือกตัวเลือก **Popular Recipes** ในขั้นตอน **Deployment Type** แล้วเลือก **QBCore Framework Template** ยืนยัน **Data Directory** ที่ต้องการ แล้วเริ่ม **Recipe Deployer** เพื่อเสร็จสิ้นการติดตั้ง

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

ในระหว่าง Recipe Deployer คุณต้องกรอกข้อมูลสำคัญก่อนเซิร์ฟเวอร์จะเริ่มทำงาน กรอกคีย์ไลเซนส์ FiveM ที่สร้างไว้ในช่อง **License Key** จากนั้นคลิก **Show/Hide Database Options (Advanced)** และกรอกรายละเอียดล็อกอินของเซิร์ฟเวอร์ฐานข้อมูล ในกรณีนี้ต้องใช้แค่รหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ **root** เท่านั้น การตั้งค่าอื่นๆ สามารถปล่อยไว้ตามเดิม ตรวจสอบข้อมูลที่กรอกแล้วคลิก **Run Recipe** เพื่อเริ่มกระบวนการ

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### การตั้งค่าไฟร์วอลล์
เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎการส่งต่อพอร์ตสำหรับพอร์ตที่กระบวนการเซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้ผ่านคำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** ให้คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทุกอย่างทำงานได้ถูกต้อง

:::info
ตรวจสอบให้แน่ใจว่าคุณรัน Powershell ในโหมดผู้ดูแลระบบ มิฉะนั้นการตั้งค่าอาจไม่ถูกนำไปใช้
:::

จากนั้นคัดลอกและวางคำสั่งต่อไปนี้ในพรอมต์ Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์ที่จำเป็นเพื่อให้เซิร์ฟเวอร์ FiveM ของคุณเข้าถึงได้จากภายนอกโดยอัตโนมัติ

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **การตั้งค่าไฟร์วอลล์ Windows พร้อมความปลอดภัยขั้นสูง** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้าไฟร์วอลล์ Windows ปกติ

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ FiveM ของคุณ ทำได้โดยคลิกที่กฎขาเข้าและขาออกตามที่อธิบายไว้ด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 30120
- UDP ขาเข้าและขาออก: 30120

ถ้าต้องการความช่วยเหลือเพิ่มเติม โปรดดูคู่มือของเรา [การส่งต่อพอร์ต (ไฟร์วอลล์)](vserver-windows-port.md)

</TabItem>
</Tabs>

## สรุป

คุณได้ติดตั้งและตั้งค่า FiveM Dedicated Server บนเซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂


<InlineVoucher />