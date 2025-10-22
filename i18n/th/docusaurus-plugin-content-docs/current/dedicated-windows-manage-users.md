---
id: dedicated-windows-manage-users
title: "เซิร์ฟเวอร์เฉพาะ: จัดการผู้ใช้บน Windows Server"
description: "ค้นพบวิธีจัดการผู้ใช้หลายคนบน Windows server เพื่อการเข้าถึงระยะไกลที่ปลอดภัยพร้อมกันและสภาพแวดล้อมที่ปรับแต่งได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เพิ่ม & จัดการผู้ใช้
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Windows OS มีระบบจัดการผู้ใช้ในตัวที่ช่วยให้คุณจัดการผู้ใช้เพิ่มเติมได้ง่ายๆ ข้อดีของการใช้ผู้ใช้แต่ละคนคือสามารถเข้าใช้งาน Remote Desktop พร้อมกันได้สูงสุดถึง 2 คนด้วยข้อมูลประจำตัวของตัวเอง มีเดสก์ท็อปและไฟล์ส่วนตัว รวมถึงระบบสิทธิ์ที่ง่าย ในคู่มือนี้เราจะครอบคลุมขั้นตอนการจัดการผู้ใช้บน Windows server ของคุณ

<InlineVoucher />

## การเตรียมตัว

เริ่มต้นด้วยการเชื่อมต่อกับ Windows server ของคุณผ่าน RDP หากต้องการความช่วยเหลือในการทำเช่นนี้ โปรดดูที่ [Initial Access (RDP)](dedicated-windows-userdp.md) คู่มือของเรา

:::important สิทธิ์ผู้ดูแลระบบ
ตรวจสอบให้แน่ใจว่าคุณใช้ผู้ใช้ **Administrator** หรือผู้ใช้ที่มีสิทธิ์ผู้ดูแลระบบในการเข้าสู่ระบบ Windows server ของคุณ มิฉะนั้นคุณจะไม่สามารถจัดการผู้ใช้ได้
:::

ผู้ใช้แต่ละคนที่คุณสร้างบน Windows server จะสามารถใช้ข้อมูลประจำตัวของตัวเองเชื่อมต่อกับเซิร์ฟเวอร์ผ่าน Remote Desktop ได้ เช่นเดียวกัน ผู้ใช้แต่ละคนจะมีเดสก์ท็อป ไฟล์ และโปรแกรมของตัวเองที่แยกจากกันและสามารถดูได้เฉพาะผู้ใช้ที่มีสิทธิ์ผู้ดูแลระบบเท่านั้น โปรแกรมที่ติดตั้งสำหรับผู้ใช้ทุกคนโดยเฉพาะ จะสามารถเข้าถึงได้ทั่วทั้งระบบ

ด้วยไลเซนส์ Windows Server ปกติ จะสามารถเข้าสู่ระบบและใช้งานเซิร์ฟเวอร์พร้อมกันได้ **2** บัญชี หากเกินกว่านี้และมีผู้ใช้คนอื่นเชื่อมต่อเข้ามา ผู้ใช้ที่เชื่อมต่อก่อนจะถูกตัดการเชื่อมต่อเพื่อให้ผู้ใช้ใหม่เข้ามาแทน อย่างไรก็ตาม ไม่มีข้อจำกัดในการสร้างบัญชีผู้ใช้จำนวนเท่าใดก็ได้

## การเข้าถึงการจัดการผู้ใช้

การจัดการบัญชีผู้ใช้ทำได้ผ่านการตั้งค่าผ่านแผงควบคุม เริ่มต้นด้วยการเปิดเมนูเริ่มของ Windows บน Windows server ของคุณและเลือก **Control Panel** เลือกตัวเลือก **User Accounts** ซึ่งจะพาคุณไปยังเมนูย่อยอีกหน้า

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

อีกครั้ง เลือกตัวเลือก **User Accounts** บนเมนูซึ่งจะพาคุณไปยังหน้าภาพรวม

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

บนหน้าภาพรวม เลือกตัวเลือก **Manage another account** เพื่อเข้าสู่ส่วน **Manage Accounts** ซึ่งใช้สำหรับจัดการผู้ใช้โดยเฉพาะ

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

ตอนนี้คุณพร้อมที่จะจัดการผู้ใช้บน Windows server ของคุณแล้ว ดำเนินการต่อด้วยหนึ่งในหัวข้อต่อไปนี้ตามการกระทำที่คุณต้องการทำ

## การสร้างผู้ใช้ใหม่

เพื่อเริ่มกระบวนการสร้างผู้ใช้ เลือกตัวเลือก **Add a user account** ที่พบในส่วน **Manage Accounts**

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

จะมีหน้าต่างแจ้งเตือนขึ้นมาให้คุณกรอกข้อมูลบางอย่างสำหรับบัญชีผู้ใช้ เช่น ชื่อผู้ใช้ รหัสผ่าน และคำใบ้รหัสผ่าน ตรวจสอบให้แน่ใจว่ารหัสผ่านของคุณแข็งแรง มิฉะนั้นอาจเกิดข้อผิดพลาดในการตรวจสอบ

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

เมื่อพร้อมแล้ว กดปุ่มถัดไปและผู้ใช้ใหม่ของคุณจะถูกสร้างขึ้น

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

สุดท้าย คุณจะต้องเพิ่มผู้ใช้ใหม่เข้าสู่รายการการเชื่อมต่อ Remote Desktop เพื่อให้เซิร์ฟเวอร์ยอมรับการเชื่อมต่อ RDP จากผู้ใช้นั้น ไปที่ **Control Panel** และเข้า **System and Security**

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

จากนั้นหา **Allow remote access** และเลือก ซึ่งจะเปิดเมนูใหม่ขึ้นมา

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

ในเมนูนี้ กด **Select Users...** ที่ด้านล่างเพื่อแสดงเมนูใหม่ที่แสดงผู้ใช้ที่มีสิทธิ์เข้าถึง Remote Desktop ปัจจุบัน

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

ในเมนูนี้ เลือก **Add...** เพื่อเปิดหน้าต่างเลือกผู้ใช้ใหม่ และเลือก **Advanced...**

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

หน้าต่างจะขยายเพื่อให้คุณค้นหาผู้ใช้ได้ง่ายขึ้น ใช้ปุ่ม **Find Now** เพื่อแสดงรายชื่อผู้ใช้และค้นหาผู้ใช้ใหม่ของคุณ ในตัวอย่างนี้คือ `ZAP-Docs`

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

เลือกผู้ใช้และกดปุ่ม **OK** เพื่อปิดเมนูทั้งหมดและยืนยันการเปลี่ยนแปลง

คุณได้สร้างผู้ใช้ใหม่บน Windows server ของคุณพร้อมสิทธิ์เข้าถึง Remote Desktop เรียบร้อยแล้ว ลองเข้าสู่ระบบเซิร์ฟเวอร์ผ่าน RDP ด้วยข้อมูลประจำตัวของผู้ใช้ใหม่ที่คุณสร้างขึ้นเพื่อให้แน่ใจว่าทุกอย่างทำงานได้ปกติ

## การจัดการผู้ใช้

คุณสามารถจัดการผู้ใช้ทั้งหมดได้ง่ายๆ ผ่านส่วน **Manage Accounts** เพียงเลือกผู้ใช้ที่คุณต้องการจัดการ

:::important สิทธิ์ผู้ดูแลระบบ
เพื่อจัดการผู้ใช้ คุณต้องใช้บัญชี **Administrator** หลัก หรือผู้ใช้ที่มีประเภทบัญชีผู้ดูแลระบบซึ่งมีสิทธิ์ทั้งหมดที่จำเป็นสำหรับการจัดการนี้
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

บนหน้านี้ คุณจะสามารถใช้ฟังก์ชันต่างๆ เพื่อจัดการผู้ใช้ได้ เช่น การปรับชื่อผู้ใช้ รหัสผ่าน ประเภทบัญชี รวมถึงการลบผู้ใช้

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />