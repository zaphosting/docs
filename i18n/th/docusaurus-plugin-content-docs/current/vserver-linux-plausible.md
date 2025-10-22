---
id: vserver-linux-plausible
title: "VPS: ตั้งค่า Plausible บนระบบปฏิบัติการ"
description: "ค้นพบวิธีตั้งค่าแพลตฟอร์มวิเคราะห์เว็บที่เน้นความเป็นส่วนตัว เพื่อข้อมูลเชิงลึกที่ชัดเจนและประสิทธิภาพรวดเร็ว → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Plausible
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Plausible คือแพลตฟอร์มวิเคราะห์เว็บแบบโอเพนซอร์สที่น้ำหนักเบา ทำงานโดยไม่ใช้คุกกี้และปฏิบัติตามกฎระเบียบความเป็นส่วนตัวอย่างเต็มที่ มันแสดงเมตริกสำคัญ เช่น จำนวนผู้เยี่ยมชม, การดูหน้าเว็บ และระยะเวลาการเยี่ยมชม ผ่านแดชบอร์ดที่สะอาดและใช้งานง่าย ด้วยความง่ายในการใช้งาน, ประสิทธิภาพที่รวดเร็ว และโครงสร้างพื้นฐานที่ตั้งอยู่ในยุโรป Plausible จึงเป็นทางเลือกที่ทันสมัยและใส่ใจความเป็นส่วนตัวแทน Google Analytics

กำลังคิดจะเช่าเซิร์ฟเวอร์เกมนี้เองใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและการกำหนดค่า พร้อมทุกสิ่งที่คุณต้องรู้

<InlineVoucher />

## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Plausible** ให้แน่ใจว่าสภาพแวดล้อมเช่าเซิร์ฟเวอร์เกมของคุณตรงตามข้อกำหนดดังนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU              |
| RAM        | 2 GB         | 4 GB                     |
| พื้นที่ดิสก์ | 10 GB        | 25 GB                    |

ซอฟต์แวร์ต้องการให้ติดตั้ง dependencies ที่จำเป็นทั้งหมดและรันบนระบบปฏิบัติการที่รองรับ ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดเหล่านี้ก่อนเริ่มติดตั้ง:

**Dependencies:** `Docker`

**ระบบปฏิบัติการ:** เวอร์ชันล่าสุดของ Ubuntu/Debian ที่รองรับ Docker 26+

ตรวจสอบให้แน่ใจว่าติดตั้ง dependencies ครบถ้วนและใช้ระบบปฏิบัติการเวอร์ชันที่ถูกต้อง เพื่อหลีกเลี่ยงปัญหาความเข้ากันได้ระหว่างการติดตั้ง Plausible

## การเตรียมตัว

ก่อนตั้งค่า **Plausible** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็น การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมเสถียรและป้องกันปัญหาระหว่างหรือต่อหลังการติดตั้ง

### อัปเดตระบบ
เพื่อให้ระบบของคุณรันด้วยซอฟต์แวร์และการปรับปรุงความปลอดภัยล่าสุด ควรอัปเดตระบบก่อนเสมอ โดยรันคำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะช่วยให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ติดตั้ง dependencies ต่อไปนี้

#### Git
ข้อมูลของ Plausible จะถูกดาวน์โหลดผ่าน GitHub ซึ่งต้องติดตั้ง Git ก่อน รันคำสั่งนี้:

```
sudo apt install git-all
```

#### Docker

Plausible จะถูกดีพลอยและรันบนเครื่องของคุณผ่านคอนเทนเนอร์ Docker ซึ่งต้องติดตั้ง Docker ก่อน รันคำสั่งนี้:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

คู่มือการติดตั้งและการใช้งาน Docker แบบละเอียดมีให้ใน [คู่มือ Docker](vserver-linux-docker.md) ของเรา

## การติดตั้ง
เมื่อครบทุกข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว คุณก็พร้อมติดตั้งแอปพลิเคชัน Plausible

เริ่มด้วยการโคลนรีโพส Community Edition และสร้างไฟล์คอนฟิกที่จำเป็น:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

ถัดไป สร้างไฟล์ environment (.env) และกำหนดตัวแปรสำคัญ BASE_URL ต้องชี้ไปยังโดเมนจริงที่มีระเบียน DNS ชี้มายังเซิร์ฟเวอร์ของคุณ นอกจากนี้ต้องสร้าง SECRET_KEY_BASE แบบสุ่มอย่างน้อย 64 ไบต์:

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

ตรวจสอบเนื้อหาไฟล์ด้วยคำสั่ง `cat .env` เพื่อยืนยันค่าถูกต้อง ผลลัพธ์ควรเป็นแบบนี้:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

พอร์ตดีฟอลต์เหล่านี้ช่วยให้ Let’s Encrypt ออกใบรับรอง TLS อัตโนมัติ หากคุณวางแผนรัน Plausible หลัง reverse proxy คุณสามารถปรับค่าพอร์ตได้ นอกจากนี้ สร้างไฟล์ `compose.override.yml` เพื่อเปิดพอร์ตที่ถูกต้องสำหรับคอนเทนเนอร์ Plausible:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

สุดท้าย เริ่มบริการที่จำเป็นด้วย Docker Compose:

```
docker compose up -d
```

เมื่อคอนเทนเนอร์รันแล้ว เปิดเบราว์เซอร์ไปยังโดเมนที่ระบุใน BASE_URL และสร้างบัญชีผู้ใช้แรก

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## การตั้งค่า

Plausible สามารถเชื่อมต่อกับ Google Search Console เพื่อเพิ่มข้อมูลวิเคราะห์ด้วยข้อมูลคำค้นหา ช่วยให้คุณเห็นคำค้นหาที่ดึงทราฟฟิกมายังเว็บไซต์ของคุณ ให้ข้อมูลเชิงลึกลึกซึ้งขึ้นเกี่ยวกับพฤติกรรมผู้เยี่ยมชม

ถ้าคุณมีบัญชี Google Cloud และตั้งค่า OAuth client แล้ว เพียงเพิ่มข้อมูลรับรอง (`GOOGLE_CLIENT_ID` และ `GOOGLE_CLIENT_SECRET`) ลงในไฟล์ `.env` บันทึกแล้วรีสตาร์ทบริการ Docker ด้วย `docker compose up -d` จากนั้นในแดชบอร์ด Plausible ไปที่ *Site Settings > Integrations* เพื่อเชื่อมต่อและทำตามขั้นตอนการยืนยันตัวตน

สำหรับคนที่ยังไม่มี OAuth client หรือไม่คุ้นเคยกับขั้นตอน Wiki อย่างเป็นทางการของ Plausible มีคู่มือทีละขั้นตอนอย่างละเอียด อธิบายวิธีสร้างโปรเจกต์ใน Google Cloud, เปิดใช้งาน API ที่จำเป็น, ตั้งค่า OAuth client และเพิ่มข้อมูลรับรองที่ได้ลงใน Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration)

ถ้าคุณใช้ Google Search Console คุณสามารถตั้งค่า Google Integration เพื่อดึงข้อมูลคำค้นหาจาก Search Console ได้ ซึ่งเจ๋งมาก

ถ้าคุณมีบัญชี Google Cloud พร้อม OAuth client แล้ว ก็แค่ใส่ `GOOGLE_CLIENT_ID` และ `GOOGLE_CLIENT_SECRET` ลงในไฟล์ `.env` รีสตาร์ทบริการ Docker ด้วย `docker compose up -d` แล้วทำตามคำแนะนำในหน้าการตั้งค่า Site Settings > Integrations ของ Plausible

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณติดตั้งและตั้งค่า Plausible บน VPS เรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลต่อไปนี้ ซึ่งจะช่วยให้คุณได้รับความช่วยเหลือและคำแนะนำเพิ่มเติมระหว่างการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [Plausible.io](https://Plausible.io/) - เว็บไซต์ทางการ
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - ประกาศ, การสนทนา, รายงานปัญหา

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการคำถามเพิ่มเติมหรือความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />