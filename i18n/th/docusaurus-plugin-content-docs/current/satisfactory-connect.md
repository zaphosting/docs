---
id: satisfactory-connect
title: "Satisfactory: เชื่อมต่อกับเซิร์ฟเวอร์"
description: "ค้นหาวิธีเชื่อมต่อและจัดการเซิร์ฟเวอร์เกม Satisfactory ของคุณอย่างมีประสิทธิภาพ เพื่อประสบการณ์การเล่นเกมที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เชื่อมต่อกับเซิร์ฟเวอร์
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="วิธีสร้างเซิร์ฟเวอร์ Satisfactory ที่ ZAP และอัปโหลดเซฟเกมของคุณเอง" description="รู้สึกว่าคุณเข้าใจได้ดีขึ้นเมื่อเห็นของจริง? เราจัดให้! ดำดิ่งสู่คลิปวิดีโอของเราที่อธิบายทุกอย่างให้คุณเข้าใจ ไม่ว่าคุณจะรีบหรือชอบเรียนรู้แบบสนุก ๆ ก็เหมาะสุด ๆ!"/>

:::info
ถ้าคุณใช้แป้นพิมพ์แบบ QWERTY อยู่แล้ว ไม่ต้องทำตามขั้นตอนนี้ แค่กด CTRL + SHIFT + L แล้วเปิดคอนโซลด้วย ~
:::

เพื่อเชื่อมต่อกับเซิร์ฟเวอร์เกม Satisfactory ของคุณ จำเป็นต้องเปิดคอนโซลของเกม ซึ่งมีสองวิธีในการทำแบบนี้

<InlineVoucher />

## เปิดคอนโซล

### สลับเลย์เอาต์แป้นพิมพ์
คุณสามารถสลับเลย์เอาต์แป้นพิมพ์ได้ง่าย ๆ ในไม่กี่ขั้นตอน  
เริ่มเกม Satisfactory ของคุณจนถึงเมนูหลัก  
กด `CTRL + Shift` เลย์เอาต์แป้นพิมพ์ของคุณจะเปลี่ยนเป็น `EN`  
คุณสามารถตรวจสอบได้ง่าย ๆ ว่าสลับสำเร็จหรือไม่ โดยสลับไปที่เดสก์ท็อปและดูที่ทาสก์บาร์มุมล่างขวาว่ามี `EN` หรือเปล่า

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

ถ้าการเปลี่ยนแปลงสำเร็จแล้ว คุณก็กลับเข้าเกม กด `CTRL + SHIFT + L`  
จากนั้นกด `^` บนแป้นพิมพ์ จะเปิดคอนโซลขึ้นมา

### เปลี่ยนปุ่มที่ใช้เปิดคอนโซล
กด `Windows-Key + R` หรือค้นหาในเมนูเริ่มด้วยคำว่า `Run`  
คัดลอกพาธนี้ลงไป:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

แล้วกด Enter

เปิดไฟล์ Input.ini ด้วยโปรแกรมแก้ไขข้อความที่คุณชอบ (เช่น Notepad)

:::info
ถ้าไฟล์ยังไม่มี ให้สร้างไฟล์นี้ขึ้นมาเลย
:::

เพิ่มข้อความนี้ลงไปในไฟล์:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

บันทึกไฟล์แล้วรีสตาร์ทเกม — ตอนนี้คุณสามารถเปิดคอนโซลด้วยปุ่ม `F6` ได้เลย

## เชื่อมต่อกับเซิร์ฟเวอร์เกม Satisfactory ของคุณ
คัดลอกที่อยู่ IP จากแดชบอร์ดเซิร์ฟเวอร์ของคุณ:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

เปิดคอนโซลในเกม ตามขั้นตอนที่บอกไว้ก่อนหน้า

พิมพ์คำสั่ง `open IP-Adress-of-Your-Server` ลงไป

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

แล้วกด Enter

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

ตอนนี้คุณกำลังเข้าร่วมเซิร์ฟเวอร์ Satisfactory ของคุณแล้ว!

## HUB
HUB จะถูกวางไว้ในโลกเกมแล้ว คุณสามารถทำลายมันได้โดยกด `F` แล้ววางใหม่ในตำแหน่งอื่น  
คุณจะเจอ HUB ได้ง่าย ๆ โดยตามเครื่องหมายนี้

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
เซิร์ฟเวอร์จะบันทึกความคืบหน้าของคุณทุก 5 นาที คุณสามารถดูได้ในตัวจัดการเซฟเกมที่แดชบอร์ดเซิร์ฟเวอร์ของคุณ  
ระบบจะเก็บเซฟล่าสุดไว้ 6 ครั้ง (30 นาที) เสมอ

<InlineVoucher />