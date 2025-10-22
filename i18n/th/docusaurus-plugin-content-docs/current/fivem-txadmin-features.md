---
id: fivem-txadmin-features
title: "FiveM: อินเทอร์เฟซ txAdmin"
description: "ค้นพบวิธีจัดการและตรวจสอบเซิร์ฟเวอร์เกม FiveM ของคุณอย่างมีประสิทธิภาพด้วยแผงเว็บฟีเจอร์ครบของ txAdmin → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: อินเทอร์เฟซ txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## แนะนำ

txAdmin คือแผงเว็บฟีเจอร์ครบที่ใช้ฟรี 100% สำหรับจัดการ & ตรวจสอบเซิร์ฟเวอร์เกม FiveM ของคุณ มันมีฟีเจอร์หลากหลายที่ออกแบบมาเพื่อให้การจัดการเซิร์ฟ FiveM เป็นเรื่องง่ายสุดๆ ในคู่มือนี้ เราจะพาคุณไปรู้จักกับอินเทอร์เฟซ txAdmin เน้นฟีเจอร์หลักๆ และอธิบายว่าคุณทำอะไรได้บ้างกับมัน

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## การนำทาง

เมนูนำทางประกอบด้วยรายการต่อไปนี้: **Players**, **History**, **Whitelist**, **Admins**, **Settings**, และ **System** แต่ละหัวข้อจะอธิบายอย่างละเอียดด้านล่าง

### Players

ส่วน Players ให้ภาพรวมสถิติผู้เล่น เช่น จำนวนผู้เล่นทั้งหมดที่เคยเชื่อมต่อ จำนวนผู้เล่นที่เชื่อมต่อใน 24 ชั่วโมงล่าสุด และจำนวนผู้เล่นใหม่ที่เชื่อมต่อใน 24 ชั่วโมงและ 7 วันที่ผ่านมา ด้านล่างจะแสดงรายชื่อผู้เล่นที่กำลังเชื่อมต่ออยู่ พร้อมเวลาการเล่นรวม, เวลาเชื่อมต่อครั้งแรก และเวลาเชื่อมต่อครั้งล่าสุด

คลิกที่ผู้เล่นเพื่อเข้าถึงตัวเลือกการจัดการเพิ่มเติม ที่นี่คุณสามารถดูข้อมูลเพิ่มเติม, โน้ต, ประวัติ (แบน/เตือน), รหัสประจำตัว (Player Identifiers, Player Hardware IDs) และตัวเลือกแบน

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### History

ส่วน History จะแสดงรายการเตือนและแบนทั้งหมดที่ออกให้กับผู้เล่น พร้อมข้อมูลละเอียดเกี่ยวกับผู้เล่น เหตุผล และผู้ที่ออกหรือดำเนินการเตือน/แบน รวมถึงวันที่และเวลา คุณยังสามารถยกเลิกเตือนและแบนจากที่นี่ได้

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

ในส่วน Whitelist คุณสามารถจัดการฟังก์ชัน whitelist ได้ Whitelist ช่วยจำกัดว่าใครสามารถเข้าถึงเซิร์ฟเวอร์ได้ หากเปิดใช้งานตัวเลือกนี้ในตั้งค่า txAdmin ระบบจะสร้างคำขอ whitelist อัตโนมัติเมื่อผู้เล่นใหม่เชื่อมต่อครั้งแรก จากนั้นคุณสามารถจัดการคำขอเหล่านี้ได้ในส่วนนี้

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

ในส่วน Admins คุณสามารถระบุและจัดการแอดมินได้ เพิ่มแอดมินใหม่โดยคลิกปุ่ม **Add** จะมีหน้าต่างป็อปอัพเปิดขึ้นเพื่อสร้างบัญชีและตั้งค่าสิทธิ์ที่เหมาะสม

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Settings

ในส่วน Settings คุณสามารถตั้งค่าตัวเลือกหลากหลายสำหรับทั้ง txAdmin และเซิร์ฟเวอร์เอง เนื่องจากมีตัวเลือกเยอะมาก จึงแบ่งเป็นหมวดหมู่ดังนี้: **Global**, **FXServer**, **Bans**, **Whitelist**, **Discord**, และ **Game** แต่ละหมวดจะอธิบายละเอียดด้านล่าง

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### General

ตั้งค่าชื่อเซิร์ฟเวอร์, ภาษาแชท/ข้อความ Discord, และเทมเพลตแบนได้ในส่วน Global

![img](https://screensaver01.zap-hosting.com/index.php/s/7mr4D28GGqfPQQw/preview)

#### FXServer

ตั้งค่าโฟลเดอร์ข้อมูลเซิร์ฟเวอร์และเส้นทางไฟล์ CFG รวมถึงอาร์กิวเมนต์เสริม เช่น เปิดใช้งานโหมดเกม/DLC, เปิด/ปิด OneSync, Autostart, และ Quietmode ได้ในส่วน FXServer

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

ในส่วน Bans คุณสามารถจัดการฟีเจอร์แบน กำหนดว่าตรวจสอบสถานะแบนของบัญชีอย่างไร และตั้งข้อความที่จะแสดงเมื่อการเชื่อมต่อถูกปฏิเสธเพราะถูกแบน

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

ในส่วน Whitelist คุณสามารถจัดการฟีเจอร์ whitelist กำหนดว่าจะเปิดหรือปิด whitelist และตั้งข้อความที่จะแสดงเมื่อการเชื่อมต่อถูกปฏิเสธเพราะไม่มีระเบียน whitelist

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)



#### Discord

สามารถเปิดใช้งานการเชื่อมต่อกับ Discord ในส่วน Discord เพื่อให้ข้อมูลถูกส่งอัตโนมัติไปยังเซิร์ฟเวอร์ Discord ที่เชื่อมต่อ ต้องตั้งค่ารายละเอียดของบอท Discord ให้เรียบร้อยก่อน

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Game

ในส่วน Game คุณสามารถเปิดเมนู txAdmin สำหรับใช้งานในเกม ให้แอดมินเข้าถึงและจัดการเมนูผ่านคำสั่ง /tx ได้ นอกจากนี้ยังตั้งค่าการปรับแต่งเพิ่มเติม เช่น เลย์เอาต์, การตั้งค่าปุ่มสำหรับสลับสวิตช์, และการแจ้งเตือน/เตือนความจำได้

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

ในส่วน Settings คุณจะเห็นตัวเลือกและข้อมูลทั่วไปสำคัญ แบ่งเป็นหมวดหมู่ดังนี้: **Master Actions**, **Diagnostics**, **Console Log** และ **Action Log** อธิบายรายละเอียดแต่ละส่วนด้านล่าง



#### Master Actions

ใน Master Actions คุณจะพบตัวเลือกรีเซ็ต FXServer, สำรองข้อมูลฐานข้อมูล, ทำความสะอาดฐานข้อมูล และกำหนดเวลาลบผู้เล่นออกจาก whitelist หากไม่ได้ใช้งานนานเกินไป

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

ส่วน Diagnostics แสดงข้อมูลที่เกี่ยวข้องทั้งหมดเกี่ยวกับสภาพแวดล้อม, เวลารัน txAdmin, รายงาน Diagnostics, FXServer /info.json และกระบวนการต่างๆ

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Console Log

Console Log แสดงผลลัพธ์จาก txAdmin บนเทอร์มินัลหลัก รวมถึงข้อความดีบักที่ปกติซ่อนอยู่

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Action Log

Console Log แสดง Action Log ที่บันทึกการกระทำทั้งหมดที่ทำโดย txAdmin หรือแอดมินคนใดก็ตาม

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## แถบด้านข้าง

เมนูแถบด้านข้างประกอบด้วยรายการต่อไปนี้: **แดชบอร์ด**, **Live Console**, **Resources**, **Server Log** และ **CFG Editor** อธิบายแต่ละหัวข้อด้านล่าง



### แดชบอร์ด

แดชบอร์ดแสดงข้อมูลทั่วไปสำคัญทั้งหมดเกี่ยวกับเซิร์ฟเวอร์ ข้อมูลสดเกี่ยวกับการใช้งานและประสิทธิภาพสามารถตรวจสอบผ่านสถิติได้ สถานะเซิร์ฟเวอร์ ไม่ว่าจะเริ่มทำงาน, ออนไลน์ หรือหยุดทำงาน จะแสดงในแถบด้านข้าง จากตรงนี้คุณยังสามารถสั่งเริ่ม, หยุด หรือรีสตาร์ทเซิร์ฟเวอร์, เตะผู้เล่นทั้งหมดด้วยคลิกเดียว และส่งประกาศได้ นอกจากนี้ยังตั้งเวลาการรีสตาร์ทอัตโนมัติได้อีกด้วย ด้านขวาของแถบด้านข้างจะแสดงข้อมูลผู้เล่นที่กำลังเชื่อมต่ออยู่

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

Live Console ให้ข้อมูลแบบเรียลไทม์เกี่ยวกับกิจกรรมบนเซิร์ฟเวอร์ ที่นี่คุณสามารถดูรายละเอียดกิจกรรม, การเตือน และข้อความผิดพลาด เป็นจุดอ้างอิงสำคัญสำหรับการดีบักโดยวิเคราะห์ข้อความผิดพลาดที่อาจเกิดขึ้น

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Resources
ในส่วน Resources คุณจะเห็นภาพรวมของทรัพยากรทั้งหมด ไม่ว่าจะติดตั้งล่วงหน้าผ่านเทมเพลต (recipe) หรือเพิ่มเองทีหลัง คุณยังสามารถรีสตาร์ทหรือหยุดทรัพยากรเหล่านี้ได้ตามต้องการ

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Server Log

Server Log ช่วยให้คุณตรวจสอบกิจกรรมทั้งหมดบนเซิร์ฟเวอร์ เช่น ดูรายละเอียดเมื่อผู้เล่นเชื่อมต่อหรือออก, ข้อความแชท, การตายในเกม, การใช้งานเมนู, คำสั่งที่ถูกสั่ง และเหตุการณ์ระบบต่างๆ

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG Editor

คุณสามารถใช้ CFG Editor เพื่อจัดการและอัปเดตไฟล์การตั้งค่า `server.cfg` ของเซิร์ฟเวอร์ ที่นี่คือที่เก็บคำสั่งตั้งค่าที่จำเป็นทั้งหมดสำหรับควบคุมการตั้งค่าเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />