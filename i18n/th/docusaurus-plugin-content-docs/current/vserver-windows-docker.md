---
id: vserver-windows-docker
title: "VPS: ตั้งค่า Docker บน Windows"
description: "ค้นพบวิธีการดีพลอยและจัดการแอปพลิเคชันอย่างมีประสิทธิภาพด้วยคอนเทนเนอร์ Docker เพื่อการสเกลและอัปเดตที่ราบรื่น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Docker
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Docker คือแพลตฟอร์มเปิดสำหรับพัฒนา ส่งมอบ และรันแอปพลิเคชันภายในคอนเทนเนอร์ คอนเทนเนอร์จะบรรจุแอปพลิเคชันพร้อมกับทุกไลบรารีที่จำเป็นในหน่วยมาตรฐานที่สามารถรันได้อย่างเสถียรในสภาพแวดล้อมที่แตกต่างกัน

วิธีนี้ช่วยแก้ปัญหาที่เกิดจากความแตกต่างระหว่างระบบพัฒนา ทดสอบ และโปรดักชัน ด้วย Docker แอปพลิเคชันสามารถดีพลอยได้อย่างรวดเร็ว สเกลได้อย่างมีประสิทธิภาพ และอัปเดตโดยไม่ต้องหยุดทำงาน

กำลังคิดจะเช่าเซิร์ฟเวอร์เพื่อโฮสต์บริการนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและคอนฟิก พร้อมกับสิ่งที่ต้องรู้ทั้งหมด

<InlineVoucher />

## ความต้องการเบื้องต้น

ก่อนติดตั้ง **Docker** ให้แน่ใจว่าสภาพแวดล้อมโฮสติ้งของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพสูงสุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU              |
| RAM        | 4 GB         | 4 GB                     |
| พื้นที่ดิสก์ | 10 GB        | 25 GB                    |

## การติดตั้ง

เพื่อเซ็ตอัพ Docker บน Windows Server ให้ดาวน์โหลดและรันสคริปต์ PowerShell `install-docker-ce.ps1` ซึ่งจะเปิดใช้งานฟีเจอร์ของ OS ที่จำเป็นสำหรับคอนเทนเนอร์และติดตั้ง Docker runtime เปิด PowerShell ในโหมดแอดมินแล้วรันคำสั่งนี้:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

สคริปต์นี้จะเปิดใช้งานฟีเจอร์ที่เกี่ยวข้องกับคอนเทนเนอร์บน Windows, ติดตั้ง Docker Engine และ Docker CLI และลงทะเบียนบริการ Docker ให้เริ่มทำงานอัตโนมัติ

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

ระบบจะรีสตาร์ทระหว่างการติดตั้งและควรดำเนินการต่อโดยอัตโนมัติ หลังรีสตาร์ท ให้ล็อกอินและรันคำสั่งเดิมอีกครั้งถ้าสคริปต์แจ้ง เพื่อให้บริการเสร็จสิ้นการเริ่มต้น เมื่อสคริปต์เสร็จสมบูรณ์ ผลลัพธ์จะเป็นแบบนี้:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```

## การตั้งค่า

### เริ่มและหยุด docker

Docker รันเป็นบริการบน Windows หลังติดตั้งจะเริ่มทำงานอัตโนมัติ หากต้องการควบคุมด้วยตัวเอง:

```
Start-Service docker    # เริ่มบริการ Docker
Stop-Service docker     # หยุดบริการ Docker
Restart-Service docker  # รีสตาร์ทบริการ Docker
```

### เริ่มและหยุดคอนเทนเนอร์

เริ่มคอนเทนเนอร์ด้วย `docker run` ตัวอย่าง: เซิร์ฟเวอร์เว็บ IIS แมปพอร์ต 80 ในคอนเทนเนอร์ไปยังพอร์ต 8080 ของโฮสต์:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

### ตรวจสอบสถานะคอนเทนเนอร์

ตรวจสอบสถานะคอนเทนเนอร์ด้วย:

```
docker ps        # คอนเทนเนอร์ที่กำลังรัน
docker ps -a     # คอนเทนเนอร์ทั้งหมด รวมถึงที่หยุดแล้ว
docker inspect web   # ข้อมูลรายละเอียด
docker logs web      # บันทึกคอนเทนเนอร์
```

#### ทรัพยากรและสถานะ

```
docker stats            # ดู CPU/RAM/IO แบบเรียลไทม์
```

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณได้ติดตั้งและตั้งค่า Docker บน VPS ของคุณเรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการคอนฟิกเซิร์ฟเวอร์ของคุณ

- [Docker.com](https://Docker.com/) - เว็บไซต์ทางการ
- [docs.docker.com](https://docs.docker.com/) - เอกสาร Docker

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการคำแนะนำหรือความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂