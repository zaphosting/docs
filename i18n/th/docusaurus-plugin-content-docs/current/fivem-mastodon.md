---
id: fivem-mastodon
title: "FiveM: ตั้งค่า Activity Feed สำหรับเซิร์ฟเวอร์ของคุณ"
description: "ค้นพบวิธีการรวม Mastodon activity feed เข้ากับเซิร์ฟเวอร์ของคุณเพื่ออัปเดตแบบเรียลไทม์และเพิ่มการมีส่วนร่วมของชุมชน → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่า Activity Feed
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## การเตรียมตัว

เพื่อจะตั้งค่า activity feed บนเซิร์ฟเวอร์ของเรา เราต้องลงทะเบียนบัญชีบน Mastodon ก่อน

## การตั้งค่า

ตอนนี้เราเปิดโปรไฟล์ Mastodon ของเราและก็อปปี้ชื่อผู้ใช้ของเรา ในกรณีนี้คือ `zaphosting@mstdn.instance`

จากนั้นเราเปิด "Configs" บนเซิร์ฟเวอร์ FiveM ของเราและแก้ไขไฟล์ server.cfg

เราจะเพิ่มบรรทัดนี้เข้าไปที่ด้านล่างสุด:

```
sets activitypubFeed username
```

โดยที่ "username" ให้แทนที่ด้วยชื่อผู้ใช้ Mastodon ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

ตอนนี้บันทึกไฟล์และรีสตาร์ทเซิร์ฟเวอร์ของเรา หลังจากประมาณ 20 นาที แท็บ "Feed" จะปรากฏขึ้นหลังจากที่เซิร์ฟเวอร์ของคุณเปิดใช้งานแล้ว


<InlineVoucher />