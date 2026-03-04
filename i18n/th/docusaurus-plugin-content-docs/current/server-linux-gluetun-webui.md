---
id: server-linux-gluetun-webui
title: "ตั้งค่า Gluetun WebUI บนเซิร์ฟเวอร์ Linux - จัดการคอนเทนเนอร์ VPN ของคุณได้ง่ายๆ"
description: "เรียนรู้วิธีติดตั้งและรัน Gluetun WebUI บน VPS Linux ของคุณเพื่อมอนิเตอร์และจัดการคอนเทนเนอร์ Gluetun VPN → เริ่มเรียนรู้เลย"
sidebar_label: ติดตั้ง Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## แนะนำ

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) คือเว็บอินเทอร์เฟซน้ำหนักเบาที่ออกแบบมาเพื่อให้ง่ายต่อการจัดการคอนเทนเนอร์ Gluetun VPN โดยตรง Gluetun เองเป็นคอนเทนเนอร์ Docker ยอดนิยมที่ใช้สำหรับส่งทราฟฟิกของแอปอื่นๆ ผ่านการเชื่อมต่อ VPN ที่ปลอดภัย

WebUI จะเพิ่มแดชบอร์ดที่สะดวกให้คุณสามารถมอนิเตอร์สถานะ VPN, จัดการการเชื่อมต่อ และควบคุมพฤติกรรมของคอนเทนเนอร์ได้โดยไม่ต้องใช้คำสั่ง Docker หรือแก้ไขไฟล์คอนฟิกด้วยตัวเอง

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

การโฮสต์ Gluetun WebUI บนเซิร์ฟเวอร์ของคุณเองจะช่วยให้มีอินเทอร์เฟซศูนย์กลางสำหรับจัดการการตั้งค่า VPN ของคุณ เหมาะมากถ้าคุณรันหลายคอนเทนเนอร์ที่ต้องพึ่งพาการเชื่อมต่อ VPN จาก Gluetun

วางแผนจะรัน Gluetun WebUI บน VPS ของคุณใช่ไหม? คู่มือนี้จะพาคุณผ่านขั้นตอนการติดตั้งและตั้งค่าแบบทีละขั้นตอน

<InlineVoucher />

## กรณีการใช้งานของ Gluetun WebUI

Gluetun WebUI เหมาะกับใครก็ตามที่รันแอปแบบคอนเทนเนอร์ที่อยู่หลัง VPN กรณีการใช้งานทั่วไปได้แก่:

- มอนิเตอร์สถานะการเชื่อมต่อ VPN แบบเรียลไทม์
- จัดการคอนเทนเนอร์ที่ส่งทราฟฟิกผ่าน Gluetun VPN
- ทำให้การตั้งค่าและแก้ไขปัญหาคอนเทนเนอร์ VPN ง่ายขึ้น
- ควบคุมบริการ VPN โดยไม่ต้องใช้คำสั่ง Docker ที่ซับซ้อน
- รันอินเทอร์เฟซจัดการ VPN ศูนย์กลางสำหรับสภาพแวดล้อมที่โฮสต์เอง

WebUI มีประโยชน์มากในสภาพแวดล้อม homelab หรือ VPS ที่มีหลายแอปพึ่งพาคอนเทนเนอร์ VPN

## ความต้องการเบื้องต้น

ก่อนติดตั้ง Gluetun WebUI ให้ตรวจสอบว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดดังนี้

| ฮาร์ดแวร์ | ขั้นต่ำ | แนะนำ |
|----------|---------|-------------|
| CPU | 1 คอร์ | 2 คอร์ |
| RAM | 1 GB | 4 GB |
| พื้นที่ดิสก์ | 5 GB | 10 GB |

ซอฟต์แวร์ที่ต้องมี:

- Docker
- Docker Compose

ถ้ายังไม่ได้ติดตั้ง Docker ให้ทำตามคู่มือของเราเกี่ยวกับการติดตั้ง Docker ก่อนดำเนินการต่อ

<InlineServiceLink />

## การเตรียมตัว

ก่อนติดตั้ง Gluetun WebUI ให้ตรวจสอบว่า Docker และ Docker Compose พร้อมใช้งานบนเซิร์ฟเวอร์ของคุณแล้ว รันคำสั่งต่อไปนี้เพื่อตรวจสอบว่า Docker ติดตั้งและพร้อมใช้งาน:

```
docker --version
docker compose version
```
จากนั้นสร้างไดเรกทอรีสำหรับติดตั้ง Gluetun WebUI
```
mkdir gluetun-webui
cd gluetun-webui
```
ไดเรกทอรีนี้จะเก็บไฟล์คอนฟิก Docker Compose ที่ใช้รันเว็บอินเทอร์เฟซ

## การติดตั้ง

สร้างไฟล์ Docker Compose สำหรับ Gluetun WebUI
```
nano compose.yaml
```
ใส่คอนฟิกนี้ลงไป:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

คอนฟิกนี้จะ:

- ดีพลอยคอนเทนเนอร์ Gluetun WebUI
- เชื่อมต่อกับ API ของ Gluetun
- เปิดพอร์ต 8000 เพื่อเข้าถึง WebUI
- เก็บข้อมูลคอนฟิกแบบถาวรในไดเรกทอรี `data`

บันทึกไฟล์แล้วออกจากโปรแกรมแก้ไข

## เริ่มต้น Gluetun WebUI

รันคอนเทนเนอร์ด้วย Docker Compose

```
docker compose up -d
```

Docker จะดาวน์โหลดอิมเมจที่ต้องการและรันคอนเทนเนอร์ WebUI เพื่อตรวจสอบว่าคอนเทนเนอร์กำลังทำงานอยู่ ใช้คำสั่ง:

```
docker ps
```

## การเข้าถึงเว็บอินเทอร์เฟซ

เมื่อคอนเทนเนอร์รันแล้ว เปิด WebUI ผ่านเบราว์เซอร์ของคุณ

```
http://YOUR_SERVER_IP:8000
```

แทนที่ `YOUR_SERVER_IP` ด้วยที่อยู่ IP ของ VPS คุณ หลังจากเปิดอินเทอร์เฟซแล้ว คุณจะสามารถ:

- มอนิเตอร์สถานะการเชื่อมต่อ VPN
- จัดการพฤติกรรมคอนเทนเนอร์ Gluetun
- ดูรายละเอียดการตั้งค่า VPN
- ควบคุมบริการที่ส่งผ่านคอนเทนเนอร์ VPN

## สรุป

ยินดีด้วย! คุณติดตั้ง **Gluetun WebUI** บนเซิร์ฟเวอร์ Linux ของคุณสำเร็จแล้ว เว็บอินเทอร์เฟซนี้จะช่วยให้คุณมอนิเตอร์และจัดการคอนเทนเนอร์ Gluetun VPN ได้ง่ายขึ้นโดยไม่ต้องใช้คำสั่ง Docker ด้วยตัวเอง

การรัน Gluetun WebUI คู่กับคอนเทนเนอร์ VPN จะช่วยให้การจัดการง่ายขึ้นและเห็นภาพรวมสถานะการเชื่อมต่อ VPN และการตั้งค่าได้ชัดเจน

ถ้ามีคำถามหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />