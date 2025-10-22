---
id: fivem-esx-addcarstoshop
title: "FiveM: การเพิ่มรถเข้าไปในร้าน"
description: "ค้นพบวิธีจัดการและเพิ่มรถเข้าไปในฐานข้อมูลของคุณเพื่อประสบการณ์ร้านรถที่ปรับแต่งได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เพิ่มรถเข้าโชว์รูม
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## การเข้าถึงฐานข้อมูล

อันดับแรกเราต้องเชื่อมต่อกับฐานข้อมูลของเรา เราทำได้ที่แท็บ "Databases"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

จากนั้นคลิกที่ไอคอนสีน้ำเงินและล็อกอินด้วยข้อมูลของเรา ซึ่งเราจะเจอข้อมูลนี้ในหน้านั้นด้วย

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## หาชื่อ spawn ของรถ

ต่อไปเราต้องหาชื่อ spawn ของรถ เราสามารถทำได้โดยลองทดสอบเอง หรือเข้าไปดูในหน้าต่อไปนี้:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## เพิ่มรถใหม่

เมื่อเราเลือกได้แล้วว่าอยากเพิ่มรถอะไร เราก็สามารถเพิ่มเข้าไปในลิสต์ได้เลย

:::info
โดยปกติจะมีรถหลายคันอยู่ในร้านอยู่แล้ว ลองเช็คดูว่ารถของคุณมีอยู่ในลิสต์หรือยัง
:::

อันดับแรกเราต้องเช็คหมวดหมู่รถก่อน เพื่อรู้ว่าเราสามารถเพิ่มรถเข้าไปในหมวดไหนได้บ้าง
เราทำได้ในตาราง "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

ตรงนี้เราต้องใช้คอลัมน์ "name" จำค่านี้ไว้ให้ดี


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

เมื่อได้แล้ว ให้ไปที่ตาราง "vehicles"
แล้วเลือก Insert


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

ตอนนี้เราจะเพิ่มรถใหม่ อธิบายสั้นๆ ว่าค่าต่างๆ หมายถึงอะไร:

**name** ชื่อที่จะแสดงในร้าน  
**model** ชื่อ spawn (ต้องเขียนเป็นตัวพิมพ์เล็ก)  
**price** ราคาของรถ  
**category** หมวดหมู่ที่เราเลือกไว้

ผมมีตัวอย่างเล็กๆ ให้ดูด้วย:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />