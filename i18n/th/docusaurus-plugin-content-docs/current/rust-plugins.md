---
id: rust-plugins
title: "Rust: การติดตั้งปลั๊กอิน"
description: "ค้นพบวิธีเพิ่มความเจ๋งให้เซิร์ฟเวอร์ Rust ของคุณด้วยปลั๊กอินยอดนิยมสำหรับการปรับแต่งและการเล่นเกมที่ดีขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งปลั๊กอิน
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## แนะนำ

ปลั๊กอินช่วยให้คุณขยายและปรับแต่งเซิร์ฟเวอร์ของคุณได้มากขึ้น ในส่วนถัดไป เราจะอธิบายว่าคุณจะหาปลั๊กอินที่ใช้บ่อยที่สุดได้จากที่ไหน และวิธีตั้งค่าอย่างไร

<InlineVoucher />


## การเตรียมตัว

อันดับแรก คุณต้องดาวน์โหลดปลั๊กอินที่ต้องการติดตั้งบนเซิร์ฟเวอร์ก่อน มีปลั๊กอินให้เลือกมากมายที่ [umod.org (เดิมชื่อ OXIDE)](https://umod.org/plugins) ขณะดาวน์โหลดคุณจะได้ไฟล์ `.cs`  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## การติดตั้ง

เมื่อดาวน์โหลดปลั๊กอินที่ต้องการเสร็จแล้ว คุณก็สามารถติดตั้งได้เลย การติดตั้งทำผ่าน **FTP** ดังนั้นคุณจะต้องมีโปรแกรม FTP client เพื่ออัปโหลดไฟล์ไปยังเซิร์ฟเวอร์ของคุณ หากคุณยังไม่คุ้นเคยกับ FTP และวิธีใช้งาน โปรดดูที่คู่มือ [การเข้าถึง FTP](gameserver-ftpaccess.md)

คุณจะเจอโฟลเดอร์ปลั๊กอินที่ถูกต้องที่: `/gXXXXXX/rust-oxide/oxide/plugins` แค่เพียงอัปโหลดไฟล์ปลั๊กอิน `.cs` ที่ดาวน์โหลดมาไปยังโฟลเดอร์นี้ หลังอัปโหลดแล้วจะดูประมาณนี้:  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

ไม่ต้องทำอะไรเพิ่มแล้ว นี่คือการติดตั้งเสร็จสมบูรณ์ หลังจากนั้นคุณสามารถตรวจสอบในคอนโซลสดได้ว่า ปลั๊กอินถูกคอมไพล์และโหลดสำเร็จหรือไม่ ผลลัพธ์ควรจะเป็นแบบนี้:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## ปลั๊กอินยอดนิยม

ยังหา ปลั๊กอินที่ใช่สำหรับเซิร์ฟเวอร์คุณไม่เจอ?

ลองดูรายการที่เราคัดสรรมาอย่างดีของปลั๊กอินยอดนิยมและแนะนำสูงสุด เพื่อเพิ่มประสบการณ์การเล่นเกมและเติมเต็มเซิร์ฟเวอร์ของคุณให้สมบูรณ์แบบ รับแรงบันดาลใจและค้นหาสิ่งเสริมที่เหมาะกับโปรเจกต์ของคุณได้เลย

<SearchableItemList items={items} />


## สรุป

ถ้าคุณทำตามทุกขั้นตอนครบถ้วนแล้ว คุณควรติดตั้งปลั๊กอินสำเร็จเรียบร้อย สำหรับคำถามเพิ่มเติมหรือขอความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ที่พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />