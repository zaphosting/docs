---
id: fivem-gamebuild
title: "FiveM: เปิดใช้งานเนื้อหา DLC"
description: "ค้นหาวิธีบังคับใช้เวอร์ชัน DLC เฉพาะบนเซิร์ฟเวอร์ FiveM ของคุณ เพื่อเข้าถึงแผนที่ ยานพาหนะ และเนื้อหาใหม่ล่าสุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เปิดใช้งานเกมบิลด์ DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

การบังคับใช้เกมบิลด์ช่วยให้คุณกำหนดเวอร์ชัน DLC เฉพาะสำหรับเซิร์ฟเวอร์ของคุณ ทำให้คุณเล่นกับแผนที่ เสื้อผ้า ยานพาหนะ และอื่นๆ ล่าสุดได้!

<InlineVoucher />

## เกมบิลด์ที่มีให้เลือก

นี่คือภาพรวมของ DLC ทั้งหมดที่มีและรหัสบิลด์ของแต่ละตัว:

| รหัสบิลด์ |        ชื่อบิลด์         |
| :-------: | :----------------------: |
|   2060    | Los Santos Summer Special |
|   2189    |        Cayo Perico        |
|   2372    |         Tuner DLC         |
|   2545    |       The Contract        |
|   2699    | The Criminal Enterprises  |
|   2802    |   Los Santos Drug Wars    |
|   2944    |  San Andreas Mercenaries  |
|   3095    |       The Chop Shop       |
|   3258    |  Bottom Dollar Bounties   |
|   3407    |    Agents of Sabotage     |
|   3570    |        Money Fronts       |



## วิธีเปิดใช้งานบิลด์

ถ้าคุณต้องการใช้เนื้อหา DLC เพิ่มเติม เช่น Cayo Perico, Tuner DLC หรือ Los Santos Summer Special คุณต้องตั้งค่าในคอนฟิกของเซิร์ฟเวอร์คุณ โดยเปิดแผงควบคุม txAdmin แล้วไปที่การตั้งค่า FXServer

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

จากนั้นแค่เพิ่มเกมบิลด์ที่ต้องการในส่วน **Additional Arguments** ด้วยคำสั่ง set โดยแทนที่ `BUILD_ID_CHOICE` ด้วยรหัสจากตารางด้านบน:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## สรุป

เมื่อเลือกบิลด์ที่ต้องการแล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ FiveM ของคุณ เซิร์ฟเวอร์จะเริ่มต้นด้วย DLC บิลด์ที่กำหนดไว้ คุณได้ตั้งค่าเกมบิลด์สำหรับเซิร์ฟเวอร์เกม FiveM ของคุณเรียบร้อยแล้ว หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />