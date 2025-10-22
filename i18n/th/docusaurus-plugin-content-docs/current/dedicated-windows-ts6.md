---
id: dedicated-windows-ts6
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า Teamspeak 6 Server บนเซิร์ฟเวอร์เฉพาะ Windows ของคุณ"
description: "ค้นพบวิธีตั้งค่าและปรับแต่ง TeamSpeak 6 Server เพื่อประสิทธิภาพและความปลอดภัยสูงสุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Teamspeak 6 Server
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ในช่วงซัมเมอร์ปี 2025 ทีม TeamSpeak ได้ปล่อย **เวอร์ชัน Beta** ของ **TeamSpeak 6 Server** ออกมาแล้ว! ตอนนี้คุณสามารถสัมผัสประสบการณ์เจนเนอเรชันถัดไปของ TeamSpeak ได้ด้วยตัวเอง!

กำลังคิดจะเช่าโฮสต์บริการนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและการคอนฟิก พร้อมกับทุกสิ่งที่คุณต้องรู้เพื่อให้เซิร์ฟเวอร์ของคุณทำงานได้อย่างราบรื่น

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Teamspeak 6 Server** ให้ตรวจสอบว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดดังนี้ เพื่อให้การติดตั้งและการใช้งานเป็นไปอย่างราบรื่นและมีประสิทธิภาพสูงสุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting   |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU               |
| RAM        | 1 GB         | 4 GB                       |
| พื้นที่ดิสก์ | 1 GB         | 25 GB                      |



## การเตรียมตัว

ก่อนตั้งค่า **TeamSpeak 6 Server** คุณต้องเตรียมระบบของคุณให้พร้อม โดยควรอัปเดตระบบปฏิบัติการและซอฟต์แวร์ให้เป็นเวอร์ชันล่าสุดก่อนเสมอ

เพื่อให้แน่ใจว่าระบบของคุณมีแพตช์ความปลอดภัยและซอฟต์แวร์เวอร์ชันใหม่ล่าสุดก่อนเริ่มติดตั้ง




## การติดตั้ง
เมื่อคุณตรวจสอบว่าตรงตามข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว ก็สามารถเริ่มติดตั้ง Teamspeak 6 Server ได้เลย ดาวน์โหลดไฟล์เวอร์ชันล่าสุด `http://teamspeak-server_win64-v6.0.0-beta6.zip/` จาก GitHub: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

จากนั้นแตกไฟล์ลงในโฟลเดอร์ที่คุณต้องการ เปิด **PowerShell** แล้วเข้าไปยังโฟลเดอร์ที่แตกไฟล์เซิร์ฟเวอร์ไว้ เริ่มเซิร์ฟเวอร์ด้วยคำสั่ง:

```
.\tsserver.exe
```

เมื่อเริ่มครั้งแรก จะมีหน้าต่างข้อตกลงใบอนุญาตแสดงขึ้นมา ให้คุณยอมรับ หลังจากนั้นข้อมูลบัญชี Server Query Admin และ privilege key จะถูกแสดงขึ้นมา รายละเอียดนี้จะแสดงแค่ครั้งเดียวเท่านั้น ดังนั้นเก็บข้อมูลนี้ให้ดีนะ

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

เมื่อยืนยันแล้ว TeamSpeak 6 Server จะทำงานอยู่เบื้องหลังและพร้อมใช้งานทันที

##### 

## การตั้งค่า

คุณยังสามารถปรับแต่งการตั้งค่าเพิ่มเติมของ **TeamSpeak 6 Server** ผ่าน **อาร์กิวเมนต์บรรทัดคำสั่ง** ได้โดยตรงตอนเริ่มเซิร์ฟเวอร์ รายการตัวเลือกทั้งหมดดูได้ในเอกสารอย่างเป็นทางการของ [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) ตัวอย่างเช่น:

```
./tsserver --default-voice-port 9987
```



## การเชื่อมต่อ

เมื่อ TeamSpeak 6 Server ทำงานแล้ว คุณสามารถเชื่อมต่อผ่าน TeamSpeak 6 Client ได้เลย ใช้ที่อยู่ IP ของเซิร์ฟเวอร์พร้อมพอร์ตที่ถูกต้อง กรอกข้อมูลเหล่านี้ในไคลเอนต์เพื่อเชื่อมต่อและเริ่มทดสอบได้ทันที

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณได้ติดตั้งและตั้งค่า Teamspeak 6 Server บนเซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลเหล่านี้เพื่อช่วยเสริมความเข้าใจและการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [เว็บไซต์ทางการ](https://teamspeak.com/en/) - ข้อมูลและดาวน์โหลด TeamSpeak 6
- [ฟอรัมชุมชน](https://community.teamspeak.com/) - สนับสนุนและพูดคุยกับผู้ใช้คนอื่น
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - รายงานบั๊กและติดตามปัญหาต่างๆ

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงในนี้ไหม? ถ้าต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />