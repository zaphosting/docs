---
id: voiceserver-ts3backup
title: "เซิร์ฟเวอร์เสียง: สร้าง ดาวน์โหลด และนำเข้าการสำรองข้อมูล"
description: "ค้นพบวิธีสร้างและจัดการการสำรองข้อมูลได้ง่าย ๆ พร้อมพื้นที่เก็บข้อมูลฟรีและตัวเลือกอัปเกรดเพื่อปกป้องข้อมูลของคุณอย่างปลอดภัย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สำรองข้อมูล
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

เรามีฟีเจอร์ให้คุณสร้างการสำรองข้อมูลแบบรายชิ้นได้ด้วยคลิกเดียว ช่วยให้คุณสร้างสำรองข้อมูลได้ง่ายและไม่ยุ่งยาก รวมถึงสามารถนำเข้าการสำรองข้อมูลได้ทุกเมื่อในภายหลัง การสำรองข้อมูลทั้งหมดจะถูกเก็บไว้บนเซิร์ฟเวอร์เก็บข้อมูลของคุณ ซึ่งมีพื้นที่เก็บข้อมูลฟรี 10GB เป็นค่าเริ่มต้น หากคุณต้องการพื้นที่มากกว่านี้ คุณสามารถอัปเกรดเป็น Premium Storage ได้

<InlineVoucher />

## สร้างการสำรองข้อมูล

<Tabs>

<TabItem value="Webinterface" label="ผลิตภัณฑ์เซิร์ฟเวอร์ TeamSpeak" default>

เพื่อสร้างการสำรองข้อมูลบนเว็บไซต์ของเรา คุณต้องเปิดบริการเซิร์ฟเวอร์เสียงของคุณในเว็บอินเทอร์เฟซ แล้วไปที่ **Snapshots** ในส่วนการจัดการ เมื่ออยู่ที่นั่น ให้คลิกปุ่มสีเขียว **Create snapshot** เพื่อสร้างการสำรองข้อมูล

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning การสำรองข้อมูลภายนอก
การนำเข้าการสำรองข้อมูลภายนอก (snapshots) ไม่สามารถทำได้ด้วยเหตุผลด้านความปลอดภัย ไม่มีข้อยกเว้น
:::

</TabItem>
<TabItem value="self_hosted" label="โฮสต์เอง (VPS/เซิร์ฟเวอร์เฉพาะ)">

เหมือนกับผลิตภัณฑ์เซิร์ฟเวอร์ TeamSpeak หากคุณใช้ GS/TS3 อินเทอร์เฟซ คุณสามารถสร้างการสำรองข้อมูล (snapshot) ได้ด้วยคลิกเดียวผ่านการจัดการบริการเซิร์ฟเวอร์ TeamSpeak อย่างไรก็ตาม คุณยังสามารถสร้างการสำรองข้อมูลด้วยตนเองโดยใช้ข้อมูลล็อกอินของอินสแตนซ์ TeamSpeak (Query) และแอปพลิเคชันภายนอก YatQA

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

เพื่อสร้าง snapshot ใน YatQA ให้ไปที่ **Miscellaneous** ที่ด้านบนของแอปพลิเคชัน แล้วคลิกที่ **Create and save snapshot**

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## ดาวน์โหลดการสำรองข้อมูล

การสำรองข้อมูลที่สร้างขึ้น (snapshots) สามารถดาวน์โหลดได้จากเซิร์ฟเวอร์เก็บข้อมูลของคุณผ่าน FTP ข้อมูลล็อกอินสามารถดูได้ในเว็บอินเทอร์เฟซของบริการเซิร์ฟเวอร์เก็บข้อมูลของคุณ หากคุณไม่รู้วิธีใช้ FTP เราแนะนำให้ใช้ [คู่มือการเข้าถึง FTP](gameserver-ftpaccess.md) ทั่วไปของเรา

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## สรุป

คุณได้สร้างการสำรองข้อมูลสำเร็จแล้วหากทำตามขั้นตอนทั้งหมดที่กล่าวมา หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />