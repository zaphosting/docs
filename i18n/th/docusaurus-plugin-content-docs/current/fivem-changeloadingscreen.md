---
id: fivem-changeloadingscreen
title: "FiveM: การติดตั้งหน้าจอโหลดแบบกำหนดเอง"
description: "ค้นพบวิธีปรับแต่งหน้าจอโหลด FiveM ของคุณเพื่อประสบการณ์ผู้เล่นที่ไม่เหมือนใครและเพิ่มความสวยงามให้เซิร์ฟเวอร์ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งหน้าจอโหลดแบบกำหนดเอง
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## แนะนำ

อยากใช้หน้าจอโหลดที่คุณออกแบบเองแทนหน้าจอโหลด FiveM แบบมาตรฐานไหม? ด้านล่างนี้เราจะอธิบายวิธีทำและขั้นตอนที่คุณต้องทำตาม!

<InlineVoucher />



## การเตรียมตัว

เพื่อที่จะติดตั้งหน้าจอโหลดของคุณเอง คุณต้องหา resource ที่เหมาะสมก่อน คุณสามารถหา resource หลากหลายได้ที่เว็บไซต์ทางการของ [Cfx.re](https://forum.cfx.re/c/releases/7) จากนั้นดาวน์โหลด resource และแตกไฟล์บนคอมพิวเตอร์ของคุณ



![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## การติดตั้ง

การติดตั้งหน้าจอโหลดจะทำผ่าน FTP เชื่อมต่อกับเซิร์ฟเวอร์เกมของคุณผ่าน FTP หากคุณยังไม่รู้วิธีใช้ FTP ลองดูในคู่มือ [การเข้าถึง FTP](gameserver-ftpaccess.md) ของเราได้เลย

เมื่อเชื่อมต่อผ่าน FTP แล้ว ให้ไปที่โฟลเดอร์ resource ขึ้นอยู่กับ framework ที่คุณติดตั้ง คุณจะเจอโฟลเดอร์ resource ของคุณในโครงสร้างโฟลเดอร์นี้: `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

อัปโหลดโฟลเดอร์ resource ที่คุณดาวน์โหลดและแตกไฟล์ไว้บนคอมพิวเตอร์ของคุณไปยังตำแหน่งนี้



![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



เมื่ออัปโหลด resource หน้าจอโหลดเรียบร้อยแล้ว คุณต้องเพิ่ม resource นี้ในไฟล์ config เซิร์ฟเวอร์ `server.cfg` โดยล็อกอินเข้าแดชบอร์ด txAdmin แล้วเปิด CFG Editor

จากนั้นเพิ่ม resource ของคุณใน config ด้วยคำสั่ง `start resourcename` เช่นในตัวอย่างนี้จะเป็น `start loadingscreen` บันทึกการเปลี่ยนแปลงแล้วรีสตาร์ทเซิร์ฟเวอร์



![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## สรุป

ถ้าคุณทำตามทุกขั้นตอนครบถ้วน คุณจะเห็นหน้าจอโหลดใหม่ของคุณหลังจากรีสตาร์ทเซิร์ฟเวอร์ครั้งถัดไป หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />