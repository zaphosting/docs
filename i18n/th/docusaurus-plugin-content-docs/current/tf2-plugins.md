---
id: tf2-plugins
title: "Team Fortress 2: ติดตั้งปลั๊กอินบนเซิร์ฟเวอร์ของคุณเอง"
description: "ค้นพบวิธีปรับแต่งและเพิ่มประสิทธิภาพเซิร์ฟเวอร์เกมของคุณด้วยปลั๊กอิน Sourcemod และ Metamod เพื่อการจัดการและฟีเจอร์ที่ดีกว่า → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งปลั๊กอิน
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/tf2-plugins.json';


## แนะนำ

มารู้จักวิธีติดตั้ง Sourcemod และ Metamod รวมถึงวิธีใช้ปลั๊กอินสำหรับเซิร์ฟเวอร์ของคุณ ส่วนเสริมทั้งสองนี้ช่วยให้คุณปรับแต่งเกมอย่าง CS:S, CS:GO, DoD:S หรือ TF2 และขยายตัวเลือกการจัดการเซิร์ฟเวอร์ได้อย่างมาก

ด้วย Sourcemod และ Metamod คุณสามารถเพิ่มปลั๊กอิน เปิดใช้งานฟีเจอร์พิเศษ และปรับแต่งเซิร์ฟเวอร์ให้ตรงกับความชอบของคุณได้อย่างเป๊ะ ๆ

<InlineVoucher />



## การติดตั้ง Sourcemod / Metamod

### การเตรียมตัว

ส่วนเสริมที่ต้องการสามารถดาวน์โหลดได้จาก [Sourcemod](https://sourcemod.net/) และ [Metamod](https://www.sourcemm.net/downloads.php?branch=stable) ควรใช้เวอร์ชัน **stable** ล่าสุดเสมอเพื่อความสมบูรณ์และความเข้ากันได้สูงสุด

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

คุณต้องใช้แพ็กเกจ Linux ของ **Sourcemod** และ **Metamod** ดาวน์โหลดจากแหล่งที่ระบุ หลังดาวน์โหลด คุณจะได้ไฟล์บีบอัดสองไฟล์ ให้แตกไฟล์บนคอมพิวเตอร์ของคุณเพื่อให้ได้โฟลเดอร์ addons ที่มีโฟลเดอร์ `sourcemod` และ `metamod` อยู่ข้างใน

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### การติดตั้ง

เมื่อทำตามขั้นตอนข้างต้นเสร็จแล้ว คุณก็พร้อมติดตั้งได้เลย อัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ของคุณผ่าน FTP โดยใช้โปรแกรม FTP client หากคุณยังไม่คุ้นกับ FTP และวิธีใช้งาน ดูได้จากคู่มือ: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

จากนั้นให้อัปโหลดโฟลเดอร์ **addons** ไปยังไดเรกทอรีหลักของเซิร์ฟเวอร์ โครงสร้างโฟลเดอร์จะต้องเป็นแบบนี้:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

การตั้งค่า **Sourcemod** และ **Metamod** เสร็จเรียบร้อยแล้ว คุณสามารถเชื่อมต่อกับเซิร์ฟเวอร์ในเกมและใช้คำสั่ง ``sm version`` ในคอนโซลเพื่อตรวจสอบว่า Sourcemod และ Metamod ถูกติดตั้งสำเร็จหรือไม่ ผลลัพธ์ควรเป็นแบบนี้:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

ถ้าแสดงข้อความ **Unknown command** แปลว่ามีบางอย่างผิดพลาดระหว่างการติดตั้ง



## การติดตั้งปลั๊กอิน

### การเตรียมตัว

เมื่อ Sourcemod และ Metamod ถูกติดตั้งและใช้งานได้เรียบร้อยแล้ว คุณก็เริ่มเพิ่มปลั๊กอินได้เลย ดาวน์โหลดปลั๊กอินที่คุณต้องการติดตั้งบนเซิร์ฟเวอร์จาก [Sourcemod](https://sourcemod.net/) ซึ่งมีคอลเลกชันปลั๊กอินขนาดใหญ่และเพิ่มขึ้นเรื่อย ๆ ตลอดหลายปีที่ผ่านมา สำหรับแต่ละปลั๊กอิน ให้แน่ใจว่าคุณได้ไฟล์ .smx ที่ตรงกัน

### การติดตั้ง

เมื่อดาวน์โหลดปลั๊กอินที่ต้องการครบแล้ว คุณก็สามารถติดตั้งได้เลย โดยอัปโหลดไฟล์ปลั๊กอินผ่าน FTP ไปยังไดเรกทอรีนี้:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## ปลั๊กอินยอดนิยม
ยังหาไม่เจอปลั๊กอินที่ใช่สำหรับเซิร์ฟเวอร์ของคุณอยู่ใช่ไหม? ลองดูรายชื่อปลั๊กอินยอดนิยมที่เราคัดสรรมาอย่างดี เพื่อเพิ่มความสนุกและเติมเต็มเซิร์ฟเวอร์ของคุณให้สมบูรณ์แบบ ค้นหาแรงบันดาลใจและเจอปลั๊กอินที่เหมาะกับโปรเจกต์ของคุณได้เลย
<SearchableItemList items={items} />


## สรุป

ถ้าคุณทำตามทุกขั้นตอนครบถ้วนแล้ว คุณควรติดตั้ง Sourcemod/Metamod และปลั๊กอินที่ต้องการได้สำเร็จ หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂 

<InlineVoucher />