---
id: dst-create-cave
title: "Don't Starve Together: การสร้างถ้ำบนเซิร์ฟเวอร์"
description: "ค้นพบวิธีตั้งค่าเซิร์ฟเวอร์มาสเตอร์และสเลฟสำหรับถ้ำใน Don't Starve Together เพื่อเพิ่มประสบการณ์การเล่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้างถ้ำ
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## การเตรียมตัวสำหรับถ้ำ

เพื่อใช้ถ้ำใน Don't Starve Together จำเป็นต้องมีเซิร์ฟเวอร์เกมสองเครื่องที่สั่งผ่านเรา เครื่องหนึ่งจะเป็น "มาสเตอร์" สำหรับโลกบน และอีกเครื่องจะเป็น "สเลฟ" ที่ใช้เฉพาะสำหรับถ้ำ เซิร์ฟเวอร์ไหนจะเป็น "มาสเตอร์" และเซิร์ฟเวอร์ไหนจะเป็น "สเลฟ" จะถูกกำหนดโดยการตั้งค่าในไฟล์ server.ini และ cluster.ini

ทั้งสองไฟล์คอนฟิกนี้สามารถดูได้ในแผงควบคุมภายใต้ "**Configs**" และสามารถแก้ไขได้ที่นั่น

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

จะมีการแก้ไขเฉพาะส่วน "**[SHARD]**" ในไฟล์ .ini ทั้งสองเท่านั้น

## มาสเตอร์

มาสเตอร์คือเซิร์ฟเวอร์โลกบน เซิร์ฟเวอร์นี้ต้องตั้งค่าเป็นมาสเตอร์ในคอนฟิก

### server.ini

:::info
**สำคัญ** "**MASTERIP**" หมายถึง ที่อยู่ IP ของเซิร์ฟเวอร์มาสเตอร์ ถ้า IP นี้คือ 123.123.123.123 ต้องใส่ "bind_ip = 123.123.123.123" ในไฟล์นี้

"**MASTERIP**" ไม่ใช่ค่าคงที่ที่ใส่ตรงๆ ใน server.ini ที่ "bind_ip = "
:::

โดยปกติใน server.ini ส่วน "**[SHARD]**" จะมีแค่ "is_master = true" เท่านั้น ให้เพิ่มคำสั่งต่อไปนี้เข้าไป

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

โดยปกติใน cluster.ini ส่วน "**[SHARD]**" จะมีแค่ "is_master = true" ให้เพิ่มคำสั่งต่อไปนี้เข้าไป

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## สเลฟ

สเลฟคือเซิร์ฟเวอร์ถ้ำ ซึ่งข้อมูลจากมาสเตอร์ต้องถูกใส่ในคอนฟิก

### server.ini

:::info
**สำคัญ** "**SLAVEIP**" หมายถึง ที่อยู่ IP ของเซิร์ฟเวอร์สเลฟ ถ้า IP นี้คือ 123.123.123.123 ต้องใส่ "bind_ip = 123.123.123.123" ในไฟล์นี้

"**SLAVEIP**" ไม่ใช่ค่าคงที่ที่ใส่ตรงๆ ใน server.ini ที่ "bind_ip = "

"**MASTERIP**" ไม่ใช่ค่าคงที่ที่ใส่ตรงๆ ใน server.ini ที่ "master_ip = "
:::

โดยปกติใน server.ini ส่วน "**[SHARD]**" จะมีแค่ "is_master = true" ให้เพิ่มคำสั่งต่อไปนี้เข้าไป

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

โดยปกติใน cluster.ini ส่วน "**[SHARD]**" จะมีแค่ "is_master = true" ให้เพิ่มคำสั่งต่อไปนี้เข้าไป

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### สร้างโลกใหม่

ถ้าคอนฟิกทั้งหมดตั้งค่าเรียบร้อยแล้ว ต้องสร้างโลกใหม่สำหรับเซิร์ฟเวอร์สเลฟ จำเป็นต้องมีไฟล์ใหม่เพื่อให้ถ้ำถูกสร้างอย่างถูกต้อง

ใช้ [คู่มือการเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) เพื่อเข้าไปยังเซิร์ฟเวอร์สเลฟในไดเรกทอรี: */starve/Save/Cluster_1/Master/*  
สร้างไฟล์ใหม่ชื่อ "*worldgenoverride.lua*" ในไดเรกทอรีนี้  
ไฟล์นี้ให้ใส่เนื้อหาดังนี้

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

จากนั้นกดปุ่ม "**TAB**" ค้างไว้บนเซิร์ฟเวอร์เพื่อดูสถานะเซิร์ฟเวอร์ ที่นี่คุณสามารถคลิกที่จุดสามจุดมุมบนซ้ายและเลือก "**Regenerate World**" เพื่อสร้างโลกใหม่ด้วยพารามิเตอร์ที่แก้ไขแล้ว

เมื่อโหลดเสร็จ ทุกอย่างก็พร้อมแล้ว คุณก็สามารถเล่นกับถ้ำบนเซิร์ฟเวอร์ของคุณได้เลย

<InlineVoucher />