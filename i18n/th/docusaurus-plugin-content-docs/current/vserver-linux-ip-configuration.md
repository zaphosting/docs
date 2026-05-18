---
id: vserver-linux-ip-configuration
title: "VPS: การตั้งค่า IP (Ubuntu/Debian)"
description: "เรียนรู้วิธีตั้งค่า IP แบบคงที่บนเซิร์ฟเวอร์ Linux ที่ใช้ Ubuntu หรือ Debian → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตั้งค่า IP Address
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## แนะนำ

การตั้งค่า IP บน VPS Linux ของคุณช่วยให้คุณควบคุมวิธีที่เซิร์ฟเวอร์สื่อสารในเครือข่ายได้ ซึ่งรวมถึงการกำหนด IP address, การตั้งค่า default gateway และการตั้งค่า DNS server ที่จำเป็นสำหรับการเชื่อมต่อเครือข่าย

:::warning เซิร์ฟเวอร์เข้าไม่ได้เพราะไม่มีการเชื่อมต่ออินเทอร์เน็ต?
ถ้าเซิร์ฟเวอร์ของคุณเข้าไม่ได้เพราะการตั้งค่าเครือข่ายผิดพลาดหรือไม่มีการเชื่อมต่ออินเทอร์เน็ต การเข้าถึงระยะไกลผ่าน SSH อาจไม่ทำงาน ใช้ [คอนโซล VNC](vserver-vnc.md) ในเว็บอินเตอร์เฟสเพื่อเชื่อมต่อกับเซิร์ฟเวอร์และแก้ไขการตั้งค่าเครือข่าย
:::

<InlineVoucher />

## เตรียมตัว

ก่อนตั้งค่า IP แบบคงที่ ให้แน่ใจว่าคุณมีข้อมูลเหล่านี้พร้อม:

- IP address ที่ต้องการกำหนด  
- Subnet mask  
- Default gateway  
- DNS servers  

ข้อมูลนี้สามารถดูได้ในเว็บอินเตอร์เฟส โดยเปิด **การจัดการ VPS** แล้วไปที่ **IP addresses**

## การตั้งค่า

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

การติดตั้ง Ubuntu ใช้ **Netplan** สำหรับการตั้งค่าเครือข่าย เชื่อมต่อกับ VPS ของคุณผ่าน SSH แล้วหาไฟล์ตั้งค่า Netplan ในโฟลเดอร์ `/etc/netplan/` เปิดไฟล์ตั้งค่า:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

แก้ไขการตั้งค่าเพื่อกำหนด IP แบบคงที่:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

ปรับค่าต่อไปนี้ให้ตรงกับการตั้งค่าเครือข่ายของคุณ:

- 109.230.238.45 → IP แบบคงที่ของคุณ
- 109.230.238.1 → เกตเวย์ของคุณ
- ที่อยู่ DNS → DNS server ที่คุณต้องการใช้

บันทึกไฟล์แล้วใช้คำสั่งนี้เพื่อใช้การตั้งค่า:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian มักใช้ไฟล์ตั้งค่า network interfaces แทน Netplan เชื่อมต่อกับ VPS ของคุณผ่าน SSH แล้วเปิดไฟล์ตั้งค่า network interfaces:

```
nano /etc/network/interfaces
```

เพิ่มหรือแก้ไขการตั้งค่าสำหรับอินเทอร์เฟซเครือข่ายของคุณ ตัวอย่างการตั้งค่า:

```bash
auto lo
iface lo inet loopback

# อินเทอร์เฟซเครือข่ายหลัก
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # ตัวเลือก dns-* จะถูกจัดการโดยแพ็กเกจ resolvconf ถ้าติดตั้งแล้ว
        dns-nameservers 1.1.1.1
```

ปรับค่าตามการตั้งค่าเครือข่ายของคุณ:
- address → IP แบบคงที่ของคุณ
- netmask → Subnet mask ของคุณ
- gateway → Default gateway ของคุณ
- dns-nameservers → DNS server ที่คุณต้องการใช้

หลังบันทึกไฟล์ตั้งค่า ให้รีสตาร์ทบริการเครือข่าย:

```
systemctl restart networking
```

</TabItem> </Tabs>



## การตรวจสอบ

หลังจากใช้การตั้งค่าแล้ว แนะนำให้ตรวจสอบว่า IP ใหม่ถูกตั้งค่าเรียบร้อยแล้วหรือไม่ โดยรันคำสั่งนี้ในเทอร์มินัล:

```
ip a
```

คำสั่งนี้จะแสดง **อินเทอร์เฟซเครือข่าย** ทั้งหมดในระบบพร้อมรายละเอียดการตั้งค่าปัจจุบัน ในผลลัพธ์ ให้หาอินเทอร์เฟซที่ตั้งค่าไว้ก่อนหน้านี้ โดยปกติจะชื่อ `eth0`, `ens18` หรือชื่อที่คล้ายกันตามระบบ

ในส่วนของอินเทอร์เฟซ ให้ดูที่ **รายการ `inet`** ซึ่งแสดงที่อยู่ IPv4 ที่กำหนดให้กับอินเทอร์เฟซนั้น ผลลัพธ์ควรมี IP แบบคงที่ที่คุณตั้งค่าไว้ เช่น:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

ถ้าที่อยู่ถูกต้องแสดงในผลลัพธ์ แสดงว่าการตั้งค่า IP แบบคงที่สำเร็จแล้ว ถ้า IP ใหม่ไม่แสดง ให้ตรวจสอบไฟล์ตั้งค่าอีกครั้งและแน่ใจว่าบันทึกการเปลี่ยนแปลงเรียบร้อยก่อนใช้คำสั่งนี้อีกครั้ง:

```
sudo netplan apply
```



## สรุป

เยี่ยมมาก! คุณตั้งค่า IP บนเซิร์ฟเวอร์ Linux ของคุณเรียบร้อยแล้ว หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />