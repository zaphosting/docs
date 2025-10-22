---
id: dedicated-linux-plausible
title: "เซิร์ฟเวอร์เฉพาะ: ติดตั้ง Plausible บนระบบปฏิบัติการ"
description: "ค้นพบวิธีติดตั้งแพลตฟอร์มวิเคราะห์เว็บที่เน้นความเป็นส่วนตัว ให้ข้อมูลเชิงลึกสำคัญได้ง่ายและรวดเร็ว → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Plausible
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Plausible คือแพลตฟอร์มวิเคราะห์เว็บแบบโอเพนซอร์สที่น้ำหนักเบา ทำงานโดยไม่ใช้คุกกี้และปฏิบัติตามกฎความเป็นส่วนตัวอย่างเต็มที่ มันแสดงเมตริกสำคัญ เช่น จำนวนผู้เยี่ยมชม, การดูหน้าเว็บ และระยะเวลาการเยี่ยมชม ผ่านแดชบอร์ดที่สะอาดและใช้งานง่าย ด้วยความง่ายในการใช้งาน, ประสิทธิภาพที่รวดเร็ว และโครงสร้างพื้นฐานที่ตั้งอยู่ในยุโรป Plausible จึงเป็นทางเลือกที่ทันสมัยและใส่ใจความเป็นส่วนตัวแทน Google Analytics

กำลังคิดจะเช่าเซิร์ฟเวอร์เกมนี้เองใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการติดตั้งและตั้งค่า พร้อมทุกสิ่งที่ต้องรู้ก่อนเริ่มใช้งาน

<InlineVoucher />

## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Plausible** ให้แน่ใจว่าสภาพแวดล้อมเช่าเซิร์ฟเวอร์เกมของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ     | คำแนะนำจาก ZAP-Hosting |
| ---------- | ----------- | ----------------------- |
| CPU        | 1 คอร์ CPU | 4 คอร์ CPU              |
| RAM        | 2 GB        | 4 GB                    |
| พื้นที่ดิสก์ | 10 GB       | 25 GB                   |

ซอฟต์แวร์ต้องการให้ติดตั้ง dependencies ที่จำเป็นทั้งหมดและรันบนระบบปฏิบัติการที่รองรับ ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดเหล่านี้ก่อนเริ่มติดตั้ง:

**Dependencies:** `Docker`

**ระบบปฏิบัติการ:** เวอร์ชันล่าสุดของ Ubuntu/Debian ที่รองรับ Docker 26+

ตรวจสอบให้แน่ใจว่าติดตั้ง dependencies ครบถ้วนและใช้ระบบปฏิบัติการเวอร์ชันที่ถูกต้อง เพื่อหลีกเลี่ยงปัญหาความเข้ากันได้ระหว่างการติดตั้ง Plausible

## การเตรียมตัว

ก่อนตั้งค่า **Plausible** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็น การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมเสถียรและป้องกันปัญหาระหว่างหรือติดตั้งเสร็จแล้ว

### อัปเดตระบบ
เพื่อให้ระบบของคุณรันด้วยซอฟต์แวร์และการปรับปรุงความปลอดภัยล่าสุด ควรอัปเดตระบบก่อนเสมอ โดยรันคำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะช่วยให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ติดตั้ง dependencies ต่อได้เลย

#### Git
ข้อมูลของ Plausible จะดาวน์โหลดผ่าน GitHub ซึ่งต้องติดตั้ง Git ก่อน รันคำสั่งนี้:

```
sudo apt install git-all
```

#### Docker

Plausible จะถูกดีพลอยและรันบนเครื่องของคุณผ่านคอนเทนเนอร์ Docker ดังนั้นต้องติดตั้ง Docker ก่อน รันคำสั่งนี้:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

คู่มือการติดตั้งและใช้งาน Docker แบบละเอียดมีให้ใน [คู่มือ Docker](vserver-linux-docker.md) ของเรา

## การติดตั้ง
เมื่อครบทุกข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว คุณก็พร้อมติดตั้งแอปพลิเคชัน Plausible ได้เลย

เริ่มด้วยการโคลนรีโพส Community Edition และสร้างไฟล์คอนฟิกที่จำเป็น:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

จากนั้นสร้างไฟล์ environment (.env) และกำหนดตัวแปรสำคัญ BASE_URL ต้องชี้ไปยังโดเมนจริงที่มีระเบียน DNS ชี้มายังเซิร์ฟเวอร์ของคุณ นอกจากนี้ต้องสร้าง SECRET_KEY_BASE แบบสุ่มอย่างน้อย 64 ไบต์:

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

พอร์ตดีฟอลต์เหล่านี้ช่วยให้ Let’s Encrypt ออกใบรับรอง TLS อัตโนมัติ หากคุณวางแผนรัน Plausible หลัง reverse proxy สามารถปรับค่าเหล่านี้ได้ นอกจากนี้ สร้างไฟล์ `compose.override.yml` เพื่อเปิดพอร์ตที่ถูกต้องสำหรับคอนเทนเนอร์ Plausible:

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

Plausible สามารถเชื่อมต่อกับ Google Search Console เพื่อเพิ่มข้อมูลการวิเคราะห์ด้วยข้อมูลคำค้นหา ช่วยให้คุณเห็นคำหลักที่ดึงทราฟฟิกมายังเว็บไซต์ ให้ข้อมูลเชิงลึกลึกซึ้งขึ้นเกี่ยวกับพฤติกรรมผู้เยี่ยมชม

ถ้าคุณมีบัญชี Google Cloud และตั้งค่า OAuth client แล้ว แค่เพิ่มข้อมูลรับรอง (`GOOGLE_CLIENT_ID` และ `GOOGLE_CLIENT_SECRET`) ลงในไฟล์ `.env` แล้วบันทึก จากนั้นรีสตาร์ทบริการ Docker ด้วย `docker compose up -d` ในแดชบอร์ด Plausible ไปที่ *Site Settings > Integrations* เพื่อเชื่อมต่อและทำตามขั้นตอนการยืนยันตัวตน

สำหรับคนที่ยังไม่มี OAuth client หรือไม่คุ้นเคยกับขั้นตอน Wiki อย่างเป็นทางการของ Plausible มีคู่มือทีละขั้นตอนอธิบายวิธีสร้างโปรเจกต์ใน Google Cloud, เปิดใช้งาน API ที่จำเป็น, ตั้งค่า OAuth client และเพิ่มข้อมูลรับรองที่สร้างขึ้นใน Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration)

ถ้าใช้ Google Search Console คุณสามารถตั้งค่า Google Integration เพื่อดึงข้อมูลคำค้นหาจาก Search Console ได้ ซึ่งเจ๋งมาก

ถ้ามีบัญชี Google Cloud พร้อม OAuth client แล้ว ก็แค่ใส่ `GOOGLE_CLIENT_ID` และ `GOOGLE_CLIENT_SECRET` ในไฟล์ `.env` รีสตาร์ทบริการ Docker ด้วย `docker compose up -d` แล้วทำตามคำแนะนำในหน้าการตั้งค่า Site Settings > Integrations ของ Plausible

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณติดตั้งและตั้งค่า Plausible บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว เราขอแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์

- [Plausible.io](https://Plausible.io/) - เว็บไซต์ทางการ
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - ประกาศ, การสนทนา, รายงานปัญหา

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂

<InlineVoucher />