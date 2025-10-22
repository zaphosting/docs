---
id: satisfactory-switchexperimental
title: "Satisfactory: Experimental Build"
description: "ค้นพบข้อดีและความเสี่ยงของการใช้ experimental build ของ Satisfactory เพื่อเข้าถึงอัปเดตใหญ่ก่อนใครและเพิ่มประสบการณ์การเล่นเกมของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Experimental Build
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Experimental build คืออะไร?
Satisfactory มีสองเวอร์ชัน คือ regular build และ experimental build โดย regular build จะเสถียรและน่าเชื่อถือกว่า มีบั๊กน้อยกว่าเพราะเป็นเวอร์ชันที่ใกล้สมบูรณ์แล้ว ส่วน experimental build จะให้คุณได้เข้าถึงแพตช์ใหญ่ก่อนใครก่อนที่จะปล่อยเป็น regular build ทำให้มีโอกาสเจอบั๊กสูงกว่าและมีการอัปเดตบ่อยกว่า แต่ข้อดีคือได้ลองอัปเดตใหญ่ก่อนใคร!

:::info
หมายเหตุ: ไม่ว่าจะเลือก build ไหน เซิร์ฟเวอร์เกมและเกมไคลเอนต์ของคุณต้องอยู่ในเวอร์ชันเดียวกันเพื่อให้สามารถเชื่อมต่อกันได้
:::

<InlineVoucher />

## วิธีเปลี่ยนไปใช้ experimental build?
ผ่านระบบเซิร์ฟเวอร์เกมของเรา การเปลี่ยน build ของเซิร์ฟเวอร์ผ่านเว็บไซต์ของเราง่ายมาก ก่อนเริ่ม เราแนะนำให้คุณสำรองข้อมูลเซฟเกม Satisfactory ของคุณก่อน เพราะการเปลี่ยน build จะลบไฟล์ทั้งหมด

### การสำรองข้อมูลเซฟเกม
การสำรองข้อมูลเซิร์ฟเวอร์เกมหรือเซฟเกมทั้งหมดทำได้ง่ายมาก ไปที่หน้าผลิตภัณฑ์ Satisfactory แล้วเข้าแท็บ `Tools -> Backups`

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

ในหน้านี้คุณสามารถทำฟังก์ชันต่างๆ ได้มากมาย รวมถึงการสำรองข้อมูลอัตโนมัติซึ่งอธิบายเพิ่มเติมใน [Backups](gameserver-backups.md) ที่นี่เราจะเน้นการสำรองข้อมูลด้วยตนเอง

ที่ด้านบนของหน้า กดไอคอน + สีเขียวแล้วกดยืนยันเพื่อสำรองข้อมูลเซิร์ฟเวอร์เกมทั้งหมดไปยังพื้นที่สำรองข้อมูลของ ZAP

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

ตอนนี้ข้อมูลสำรองของคุณถูกสร้างขึ้นแล้ว และสามารถเข้าถึงได้ผ่าน FTP ตามที่อธิบายไว้ใน [Access via FTP](gameserver-ftpaccess.md)

อีกทางเลือกหนึ่ง คุณสามารถดาวน์โหลดไฟล์เซฟเกมได้โดยตรงจากส่วน `Savegame Manager` ในเว็บอินเทอร์เฟซ คุณสามารถดูได้ที่ [Savegame Manager](satisfactory-savegame.md)

### การเปลี่ยนไปใช้เซิร์ฟเวอร์เกม experimental
เริ่มจากไปที่หน้าผลิตภัณฑ์ Satisfactory ของคุณ แล้วเข้าแท็บ `Settings -> Games`

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

คุณจะเห็นส่วน `Installed games` ซึ่งแสดงเกมที่ติดตั้งไว้แล้ว ถ้าคุณเคยสลับ build มาก่อน เกมนั้นจะอยู่ที่นี่ และคุณสามารถข้ามไปขั้นตอนสุดท้ายเพื่อเปิดใช้งานเกมได้เลย

เลื่อนลงมาแล้วกดที่เมนูดรอปดาวน์ `Available Games` แล้วค้นหา "Satisfactory" ในช่องค้นหา

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

กดปุ่มดาวน์โหลดสีเขียวแล้วยืนยันการตั้งค่าในหน้าต่างที่เด้งขึ้น การดาวน์โหลด build เซิร์ฟเวอร์ที่ระบุจะเริ่มขึ้น

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>การดาวน์โหลดอาจใช้เวลาหลายนาที กรุณารอจนกว่าจะเสร็จก่อนดำเนินการขั้นตอนสุดท้าย

ตอนนี้ทั้งสองเวอร์ชันจะแสดงในส่วน `Installed games` เพื่อให้คุณสลับไปมาได้ง่ายขึ้นในอนาคต

สุดท้าย คุณต้องเปิดใช้งานเกมในส่วน `Installed games` กดไอคอนเปิดใช้งานเกมสีน้ำเงิน

:::info
ระวัง: ข้อมูลเกมทั้งหมดจะถูกลบในระหว่างการติดตั้งใหม่ ดังนั้นอย่าลืมย้อนกลับไปสำรองข้อมูลก่อนถ้ายังไม่ได้ทำ
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

ถ้าคุณต้องการเปลี่ยนกลับไปใช้ regular build ให้ทำตามขั้นตอนเดิม แต่เลือกเซิร์ฟเวอร์เกม Satisfactory แบบ regular ในขั้นตอนเลือกเกมแทน!

## การเปลี่ยนเกมไคลเอนต์ไปใช้ experimental
:::info
หมายเหตุ: ไม่ว่าจะเลือก build ไหน เซิร์ฟเวอร์เกมและเกมไคลเอนต์ของคุณต้องอยู่ในเวอร์ชันเดียวกันเพื่อให้สามารถเชื่อมต่อกันได้
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
เริ่มจากเปิด Steam แล้วไปที่ไลบรารีเกมของคุณ ค้นหา "Satisfactory" คลิกขวาแล้วเลือกเมนู Properties

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

ในเมนูใหม่ ให้ไปที่แท็บ `Betas` แล้วเลือก `experimental`

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

แค่นี้แหละ ตอนนี้คุณแค่รอ Steam อัปเดตเกมเป็น build ที่เลือก หลังจากนั้นก็เริ่มเกมและสนุกกับเซิร์ฟเวอร์ของคุณได้เลย!
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
สำหรับ Epic Games การเปลี่ยนไปใช้ experimental ง่ายกว่านั้นมาก แค่ไปที่ไลบรารีของคุณแล้วหาเกม "Satisfactory Experimental" ทั้งสอง build บน Epic Games Launcher จะเป็นเกมแยกกันในไลบรารี

แค่นี้แหละ ตอนนี้คุณแค่รอให้ Epic Games ดาวน์โหลดและติดตั้งเกม หลังจากนั้นก็เริ่มเกมและสนุกกับเซิร์ฟเวอร์ของคุณได้เลย!

</TabItem>
</Tabs>

<InlineVoucher />