---
id: rust-decay
title: "Rust: ปรับแต่งการสลายตัว (Decay)"
description: "ค้นหาวิธีปรับอัตราการสลายตัวของเซิร์ฟเวอร์ Rust และบันทึกการตั้งค่าเพื่อควบคุมการเล่นเกมได้ดีขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การสลายตัว
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

ด้วยการใช้ RCON คุณสามารถรันคำสั่งโดยตรงเพื่อทำให้ตัวเองเป็นแอดมิน ก่อนอื่นคุณต้อง [เชื่อมต่อผ่าน RCON](rust-connectrcon.md) ก่อน

:::info
เซิร์ฟเวอร์ต้องเริ่มทำงานเต็มที่แล้วเท่านั้นถึงจะเชื่อมต่อผ่าน RCON ได้
:::

เมื่อเชื่อมต่อแล้ว ให้ไปที่ส่วน Console ซึ่งคุณสามารถรันคำสั่งได้ ในตัวอย่างนี้เราใช้ **RustAdmin**

คุณสามารถปรับอัตราการสลายตัว (Decay-Rate) ได้ดังนี้:

`decay.scale 1.0` คืออัตราการสลายตัวปกติ<br/>
`decay.scale 0.5` ลดอัตราการสลายตัวลง 50%<br/>
`decay.scale 0` ปิดการสลายตัวทั้งหมด<br/>

เช่น ถ้าคุณต้องการปิดการสลายตัวทั้งหมด ให้รันคำสั่ง

```decay.scale 0``` แล้วกด enter หลังจากพิมพ์คำสั่งเสร็จ

คุณสามารถตรวจสอบในแท็บคอนโซลได้เลยว่าคำสั่งถูกส่งสำเร็จหรือไม่

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

เพื่อบันทึกการเปลี่ยนแปลงของเรา จำเป็นต้องส่งคำสั่ง

```server.writecfg``` ครั้งเดียว แล้วกด enter เพื่อส่งคำสั่ง

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

ถ้าคอนโซลแสดงข้อความ `Config Saved` แปลว่าเซิร์ฟเวอร์ได้บันทึกการเปลี่ยนแปลงของคุณเรียบร้อยแล้ว


<InlineVoucher />