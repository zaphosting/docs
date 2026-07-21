---
id: dedicated-windows-fivem
title: "ตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM"
description: "ค้นพบวิธีการตั้งค่าและใช้งานเซิร์ฟเวอร์เฉพาะ FiveM ของคุณเองด้วย txAdmin เพื่อเล่นเกมแบบมัลติเพลเยอร์ได้อย่างราบรื่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

คุณมีเซิร์ฟเวอร์เฉพาะและต้องการติดตั้งและใช้งานเซิร์ฟเวอร์เฉพาะ FiveM ของคุณเองด้วย txAdmin หรือไม่? คุณมาถูกที่แล้ว! ในคู่มือนี้เราจะอธิบายขั้นตอนทั้งหมดที่จำเป็นสำหรับการติดตั้งและตั้งค่า รวมถึงสิ่งที่คุณต้องคำนึงถึง

:::warning  ระบบปฏิบัติการที่เลือกและติดตั้งแล้ว
สมมติว่าคุณได้เลือกและติดตั้งระบบปฏิบัติการสำหรับ VPS/เซิร์ฟเวอร์เฉพาะของคุณแล้ว หากยังไม่ได้ทำขั้นตอนนี้ คุณต้องทำตามขั้นตอนในคู่มือ [การตั้งค่าเริ่มต้น](dedicated-setup.md) สำหรับเซิร์ฟเวอร์เฉพาะก่อน
:::

## Preparation

เพื่อที่จะตั้งค่าเซิร์ฟเวอร์ FiveM จำเป็นต้องมีการเตรียมการบางอย่างก่อนที่การตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM จะเริ่มต้นได้จริง

### ตั้งค่าฐานข้อมูล

หากคุณต้องการใช้และติดตั้งทรัพยากรที่ต้องการฐานข้อมูล คุณจะต้องมี **เซิร์ฟเวอร์ฐานข้อมูล** เพิ่มเติม มีหลายวิธีในการตั้งค่าเซิร์ฟเวอร์นี้ ในคู่มือของเรา [ติดตั้ง MySQL](dedicated-windows-installmysql.md) เราจะแสดงวิธีติดตั้ง **เซิร์ฟเวอร์ฐานข้อมูล** ของคุณเองบน **เซิร์ฟเวอร์เฉพาะ**

### ดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM

ขั้นตอนถัดไปคือการดาวน์โหลดซอฟต์แวร์เซิร์ฟเวอร์ FiveM ให้ไปที่เว็บไซต์ [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) ของ FiveM ผ่านเว็บเบราว์เซอร์ที่ติดตั้งไว้ในเครื่องของคุณ และดาวน์โหลดเวอร์ชันเซิร์ฟเวอร์ FiveM ล่าสุด

แตกไฟล์ที่ดาวน์โหลดในโฟลเดอร์ Downloads และย้ายไฟล์เซิร์ฟเวอร์ FiveM ไปยังโฟลเดอร์แยกต่างหาก ในตัวอย่างนี้ ซอฟต์แวร์เซิร์ฟเวอร์จะอยู่ในโฟลเดอร์ชื่อ **FiveM** บนเดสก์ท็อป

:::warning เครื่องมือแตกไฟล์ที่จำเป็น
เพื่อแตกไฟล์ซอฟต์แวร์เซิร์ฟเวอร์ FiveM ที่ดาวน์โหลดมา คุณต้องใช้เครื่องมือแตกไฟล์ ในตัวอย่างนี้ใช้ [ซอฟต์แวร์ 7Zip](https://7-zip.com/)
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### สร้างคีย์ไลเซนส์เซิร์ฟเวอร์ FiveM

เซิร์ฟเวอร์ FiveM ทุกเครื่องต้องมีคีย์ไลเซนส์ของตัวเอง ซึ่งจัดการผ่าน [Cfx.re Portal](http://portal.cfx.re/) ใหม่ คีย์ไลเซนส์จะเชื่อมโยงกับบัญชี Cfx.re ของคุณ เข้าสู่ระบบเว็บไซต์ ไปที่หมวดหมู่ **Server** แล้วคลิกปุ่ม **Generate Key**

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Configuration

ตอนนี้คุณสามารถเริ่มติดตั้งเซิร์ฟเวอร์ FiveM และ txAdmin ได้ เปิดโฟลเดอร์เซิร์ฟเวอร์ FiveM อีกครั้งแล้วรันแอปพลิเคชัน `cfx-server.exe`

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

เมื่อแอปเซิร์ฟเวอร์ทำงานแล้ว คอนโซลเซิร์ฟเวอร์และ txAdmin จะเปิดขึ้น ในอินเทอร์เฟซ txAdmin คุณต้องเชื่อมบัญชี **Cfx.re** ของคุณกับ txAdmin

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### การตั้งค่า txAdmin

ในระหว่างการตั้งค่า txAdmin เซิร์ฟเวอร์ FiveM ของคุณจะถูกติดตั้งและตั้งค่าใน 5 ขั้นตอน ให้ทำตามคำแนะนำในอินเทอร์เฟซ txAdmin และกำหนด **ชื่อเซิร์ฟเวอร์** ก่อน จากนั้นเลือก **ประเภทเซิร์ฟเวอร์** ที่ต้องการ ตัวอย่างนี้แสดงการติดตั้งเซิร์ฟเวอร์ FiveM พร้อม QBCore ที่ติดตั้งล่วงหน้า

เลือกตัวเลือก **Popular Recipes** ในขั้นตอน **Deployment Type** แล้วเลือก **QBCore Framework Template** ยืนยัน **โฟลเดอร์ข้อมูล** ที่ต้องการ แล้วเริ่ม **Recipe Deployer** เพื่อทำการติดตั้งให้เสร็จสมบูรณ์

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

ในขั้นตอน Recipe Deployer คุณต้องกรอกข้อมูลสำคัญก่อนเซิร์ฟเวอร์จะเริ่มทำงาน กรอกคีย์ไลเซนส์ FiveM ที่สร้างไว้ในช่อง **License Key** จากนั้นคลิก **Show/Hide Database Options (Advanced)** และกรอกรายละเอียดล็อกอินของเซิร์ฟเวอร์ฐานข้อมูล ในกรณีนี้ต้องใช้แค่รหัสผ่านที่ตั้งไว้สำหรับผู้ใช้ **root** เท่านั้น การตั้งค่าอื่นๆ สามารถปล่อยไว้ตามเดิม ตรวจสอบข้อมูลให้ถูกต้องแล้วคลิก **Run Recipe** เพื่อเริ่มกระบวนการ

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### การตั้งค่าไฟร์วอลล์

เพื่อให้เซิร์ฟเวอร์ของคุณเข้าถึงได้จากภายนอก คุณต้องแก้ไขกฎการส่งต่อพอร์ตสำหรับพอร์ตที่กระบวนการ VPS/เซิร์ฟเวอร์เฉพาะใช้งาน คุณสามารถทำได้โดยใช้คำสั่ง Powershell ซึ่งง่ายกว่า หรือผ่านหน้า Windows Defender Firewall ตามปกติ

<Tabs>
<TabItem value="powershell" label="ผ่าน Powershell" default>

เปิดกล่องค้นหาของ Windows แล้วค้นหา **Powershell** ให้คลิกขวาแล้วเลือก **Run as Administrator** เพื่อให้มีสิทธิ์ที่จำเป็นและทำงานได้ถูกต้อง

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

คำสั่งเหล่านี้จะสร้างกฎไฟร์วอลล์โดยอัตโนมัติที่จำเป็นเพื่อให้เซิร์ฟเวอร์ FiveM ของคุณเข้าถึงได้จากภายนอก

</TabItem>

<TabItem value="windefender" label="ผ่าน Windows Defender">

ใช้ฟังก์ชันค้นหาของ Windows เพื่อเปิด **Windows Firewall Settings with Advanced Security** คุณอาจต้องกด **Advanced Settings** เพื่อเปิดหน้าต่างที่จำเป็นหากเปิดหน้า Windows Firewall ปกติ

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

คุณต้องสร้างกฎใหม่สำหรับเซิร์ฟเวอร์ FiveM ของคุณ โดยคลิกที่กฎขาเข้าและขาออกตามคำแนะนำด้านล่าง และเพิ่มกฎสำหรับโปรโตคอลและพอร์ตดังนี้:
- TCP ขาเข้าและขาออก: 30120
- UDP ขาเข้าและขาออก: 30120

หากต้องการความช่วยเหลือเพิ่มเติม โปรดดูคู่มือของเรา [การส่งต่อพอร์ต (ไฟร์วอลล์)](vserver-windows-port.md)

</TabItem>
</Tabs>

## Conclusion

คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์เฉพาะ FiveM บน VPS/เซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว สำหรับคำถามหรือความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂