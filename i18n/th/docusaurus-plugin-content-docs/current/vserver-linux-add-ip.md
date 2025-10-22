---
id: vserver-linux-add-ip
title: "VPS: ตั้งค่า ที่อยู่ IP"
description: "เรียนรู้วิธีตั้งค่าและจัดการที่อยู่ IP หลักและที่อยู่ IP เพิ่มเติมบนระบบ Debian และ Ubuntu เพื่อการตั้งค่าเครือข่ายที่เหมาะสม → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่า ที่อยู่ IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

กำลังมองหาวิธีตั้งค่าเครือข่ายและระบุที่อยู่ IP อยู่ใช่ไหม?

<InlineVoucher />

## การตั้งค่า ที่อยู่ IP

ส่วนนี้จะอธิบายวิธีการกำหนดและตั้งค่าที่อยู่ IP หลัก

<Tabs>
  <TabItem value="debian" label="Debian" default>

การตั้งค่าเครือข่ายใน Debian จะทำผ่าน network interfaces ใช้คำสั่ง `sudo nano /etc/network/interfaces` เพื่อเปิดการตั้งค่าเครือข่าย โดยปกติเนื้อหาของการตั้งค่าควรเป็นแบบนี้:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

ถ้ายังไม่มีไฟล์นี้ เนื้อหาต้องเป็นแบบนี้แทน แทนที่ที่อยู่ IP (XXX.XXX.XXX.XXX) ด้วย IP เซิร์ฟเวอร์ของคุณที่แสดงในแดชบอร์ดของการจัดการเซิร์ฟเวอร์ ใช้ `255.255.255.0` (เครือข่ายคลาส C) เป็น subnet และตรวจสอบให้แน่ใจว่าเลขตัวสุดท้ายของ gateway เป็น 1 เท่านั้น

บันทึกการเปลี่ยนแปลงโดยกด CTRL+X แล้วกด Enter เพื่อยืนยัน จากนั้นต้องรีสตาร์ทโมดูลเครือข่ายเพื่อให้ที่อยู่ IPv4 ใหม่ทำงาน ใช้คำสั่งนี้:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## การตั้งค่า ที่อยู่ IP เพิ่มเติม
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## ทดสอบการตั้งค่า
เพื่อเช็คความถูกต้องและการทำงานของที่อยู่ IP ที่ตั้งค่าไว้ สามารถทดสอบด้วยการ ping ได้ เช่น บนคอมพิวเตอร์ของคุณเองโดยเปิด command prompt (cmd.exe) แล้วรันคำสั่งนี้:

```
ping <your_server_ip>
```

หลังจากรันคำสั่งและสมมติว่าคุณตั้งค่า IP ถูกต้อง ผลลัพธ์ควรเป็นแบบนี้:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## สรุป

ยินดีด้วย! คุณตั้งค่าเครือข่ายเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />