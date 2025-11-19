---
id: dedicated-linux-ssh
title: "เซิร์ฟเวอร์เฉพาะ: การเข้าถึงครั้งแรกด้วย SSH"
description: "สำรวจไคลเอนต์ SSH ยอดนิยมสำหรับจัดการเซิร์ฟเวอร์ Linux แบบไม่มี GUI และเข้าใจวิธีเชื่อมต่ออย่างปลอดภัยผ่าน SSH → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การเข้าถึงครั้งแรก (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

ผลิตภัณฑ์เซิร์ฟเวอร์ Linux จะไม่มีแผงควบคุมแบบกราฟิกมาให้โดยดีฟอลต์ ดังนั้นการเชื่อมต่อและการจัดการจึงทำผ่านไคลเอนต์ SSH (คอนโซล) มีไคลเอนต์ SSH ให้เลือกใช้มากมาย ด้านล่างนี้เป็นภาพรวมของไคลเอนต์ SSH ที่รู้จักและใช้บ่อยๆ



| SSH-Client | ระบบปฏิบัติการที่รองรับ | โอเพ่นซอร์ส |                           ดาวน์โหลด                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     ใช่      |               [คลิก](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     ใช่      |        [คลิก](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     ใช่      |           [คลิก](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |    ไม่ใช่    | [คลิก](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     ใช่      |           [คลิก](https://mremoteng.org/download)            |




## ที่อยู่ IP & การเข้าถึง

ต่อไปนี้จะอธิบายการเชื่อมต่อโดยใช้ไคลเอนต์ Putty SSH ในหน้าต่างการตั้งค่า ให้กรอกที่อยู่ IP ของเซิร์ฟเวอร์และพอร์ต SSH 22 ในช่อง **hostname** จากนั้นสามารถเริ่มการเชื่อมต่อได้โดยกดปุ่ม **Open**



![](https://screensaver01.zap-hosting.com/index.php/s/Jp2Wn3s9kQG5t55/preview)



:::info
การล็อกอิน SSH ด้วยรหัสผ่านจะถูกปิดใช้งานโดยดีฟอลต์ หากคุณต้องการล็อกอินด้วยรหัสผ่าน ต้องเปิดใช้งานตัวเลือกนี้ก่อนในเมนู **Access & Security**
:::



![](https://screensaver01.zap-hosting.com/index.php/s/4fSRwzaq8QQLZ3o/preview)



:::info
เมื่อเชื่อมต่อกับเซิร์ฟเวอร์ครั้งแรก จะมีข้อความเตือนความปลอดภัยจาก Putty แจ้งว่าไม่มีคีย์โฮสต์ถูกเก็บไว้ในรีจิสทรี คุณสามารถกดยืนยัน **Yes** เพื่อไม่ให้ข้อความนี้ขึ้นมาอีกในครั้งถัดไป
:::

 

หน้าต่างคอนโซล SSH จะเปิดขึ้นและขอให้กรอก **ชื่อผู้ใช้** และ **รหัสผ่าน** ชื่อผู้ใช้คือ "**root**" รหัสผ่านสามารถดูได้ในเว็บแดชบอร์ดที่เมนู "**Access & Security**" หรือสามารถตั้งค่าใหม่ได้ที่นั่น



![](https://screensaver01.zap-hosting.com/index.php/s/pG4dTmCGFyzK3dY/preview)





## การจัดการผ่าน SSH

เพื่อการใช้งานไคลเอนต์ SSH อย่างเต็มประสิทธิภาพ จำเป็นต้องรู้คำสั่งพื้นฐาน ด้านล่างนี้เป็นภาพรวมคร่าวๆ ของคำสั่งที่สำคัญและความหมายของมัน:


### การจัดการบัญชีผู้ใช้

| คำสั่ง  |                คำอธิบาย                |            รูปแบบคำสั่ง            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          สร้างผู้ใช้ใหม่          | useradd [options] [options] |
| usermod |      แก้ไขผู้ใช้ที่มีอยู่       | usermod [options] [options] |
| userdel |        ลบผู้ใช้ที่มีอยู่        | userdel [options] [options] |
| passwd  | เปลี่ยนรหัสผ่านของผู้ใช้ที่มีอยู่ |      passwd [options]       |



### การจัดการระบบ

| คำสั่ง  |                         คำอธิบาย                         | รูปแบบคำสั่ง                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | สรุปภาระงาน, โปรเซส และข้อมูลอื่นๆ (คล้ายกับ Task Manager ของ Windows)  | top                                          |
|   df    |            แสดงการใช้งานพื้นที่จัดเก็บ (พาร์ติชัน)            | df -h                                        |
|   du    |          แสดงการใช้พื้นที่จัดเก็บ (โฟลเดอร์)           | du -sh *                                     |
|  free   | การใช้งานหน่วยความจำของระบบ แบ่งเป็น RAM และ SWAP | free                                         |
|  kill   |  ยุติโปรเซสโดยใช้รหัสโปรเซส (PID)   | kill [ID]                                    |
| killall |        ยุติโปรเซสทั้งหมดที่มีชื่อที่ระบุ        | killall [name]                               |
|   mv    |       ย้ายไฟล์หรือโฟลเดอร์ไปยังที่อื่น        | mv sourcepath newPath                        |
|  mkdir  |                    สร้างโฟลเดอร์ใหม่                    | mkdir directoryname                          |
| service |    เริ่ม, หยุด, รีสตาร์ทบริการ และตรวจสอบสถานะ     | service ชื่อบริการ start/stop/restart/status |
| reboot  |                      รีสตาร์ทระบบ                        | reboot                                       |



### การจัดการไฟล์

| คำสั่ง | คำอธิบาย | รูปแบบคำสั่ง
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | แสดงไฟล์และโฟลเดอร์ในไดเรกทอรี | ls |
| cd | เปลี่ยนไดเรกทอรี | cd [OPTION] DIRECTORY |
| cp | คัดลอกไฟล์หรือโฟลเดอร์ | cp [OPTIONS] SOURCE DESTINATION |
| mv | ย้ายไฟล์หรือโฟลเดอร์ | mv [OPTION] SOURCE DESTINATION |
| mkdir | สร้างโฟลเดอร์ใหม่ | mkdir [OPTION] DIRECTORY NAME |
| rmdir | ลบโฟลเดอร์ที่มีอยู่ | rmdir [OPTION] DIRECTORY
| find | ค้นหาไฟล์ในระบบไฟล์ | find [OPTIONS] [DIRECTORY] [ACTIONS] |
| grep | ค้นหาข้อความในไฟล์ | grep [OPTIONS] SEARCH PATTERN [FILE(S)] |



### การจัดการเครือข่าย

| คำสั่ง | คำอธิบาย | รูปแบบคำสั่ง
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | ตรวจสอบและตั้งค่าอินเทอร์เฟซเครือข่าย | ip [OPTIONS] OBJECT [COMMAND [ARGUMENTS]] |
| netstat | ตรวจสอบสถานะอินเทอร์เฟซเครือข่าย | netstat [OPTIONS] |
| nslookup | ตรวจสอบข้อมูล DNS | nslookup |
| ping | ตรวจสอบการเชื่อมต่อเครือข่าย | ping [OPTIONS] DESTINATION



