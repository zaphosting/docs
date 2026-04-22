---
id: vserver-linux-supabase
title: "ตั้งค่า Supabase บนเซิร์ฟเวอร์ Linux - เปิดตัวแพลตฟอร์ม Backend แบบโอเพ่นซอร์สของคุณ"
description: "ค้นพบวิธีโฮสต์และตั้งค่า Supabase สำหรับแพลตฟอร์ม Postgres แบบโอเพ่นซอร์สที่เชื่อถือได้ พร้อมระบบยืนยันตัวตนและฟีเจอร์เรียลไทม์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Supabase คือแพลตฟอร์มพัฒนา Postgres แบบโอเพ่นซอร์สที่มาพร้อมกับฐานข้อมูล Postgres เต็มรูปแบบ รวมถึงระบบยืนยันตัวตน, API ทันที, เรียลไทม์ และพื้นที่เก็บข้อมูล ทำให้เป็นทางเลือกโอเพ่นซอร์สแทน Firebase ได้เลย

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

กำลังคิดจะโฮสต์บริการนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและคอนฟิก พร้อมทุกสิ่งที่คุณต้องรู้เพื่อให้ใช้งานได้อย่างราบรื่น

## ติดตั้ง Supabase ด้วย One Click Apps Installer

คุณสามารถติดตั้ง **Supabase** ได้โดยตรงผ่าน **One Click Apps Installer** ในเว็บอินเทอร์เฟซของ VPS หลังจากตั้งค่าแอปเริ่มต้นเสร็จแล้ว ให้เปิดแคตตาล็อกแอป ค้นหา **Supabase** และเริ่มการติดตั้งพร้อมตั้งค่าโปรเจกต์, สภาพแวดล้อม และโดเมนที่ต้องการ วิธีนี้ช่วยให้คุณติดตั้งและจัดการ **Supabase** ได้อย่างรวดเร็วและง่ายดายโดยไม่ต้องตั้งค่าผ่านคอมมานด์ไลน์เอง พร้อมทั้งได้ประโยชน์จากการจัดการผ่านเว็บ, รองรับโดเมนที่กำหนดเอง และการจัดเตรียม SSL เมื่อมีให้บริการ

<InlineVoucher />

## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Supabase** ให้ตรวจสอบว่าสภาพแวดล้อมโฮสต์ของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting |
| ---------- | ------------ | ----------------------- |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU             |
| RAM        | 4 GB         | 8 GB                    |
| พื้นที่ดิสก์ | 25 GB        | 25 GB                   |

ซอฟต์แวร์ต้องการให้ติดตั้ง dependencies ที่จำเป็นทั้งหมดและรันบนระบบปฏิบัติการที่รองรับ ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดเหล่านี้ก่อนเริ่มติดตั้ง:

**Dependencies:** `Git`, `Docker (Engine และ Compose)`

**ระบบปฏิบัติการ:** เวอร์ชันล่าสุดของ Ubuntu/Debian ที่รองรับ Docker 2

ตรวจสอบให้แน่ใจว่าติดตั้ง dependencies ครบและใช้ระบบปฏิบัติการเวอร์ชันถูกต้อง เพื่อหลีกเลี่ยงปัญหาความเข้ากันได้ระหว่างการติดตั้ง Supabase

## การเตรียมตัว

ก่อนตั้งค่า **Supabase** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็นทั้งหมด การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมเสถียรและลดปัญหาระหว่างหรือตอนหลังติดตั้ง

### อัปเดตระบบ
เพื่อให้ระบบของคุณรันด้วยซอฟต์แวร์และแพตช์ความปลอดภัยล่าสุด ควรอัปเดตระบบก่อนเสมอ ใช้คำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะช่วยให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ติดตั้ง dependencies ต่อไปนี้

#### Git
ข้อมูล Supabase จะถูกดาวน์โหลดผ่าน GitHub ซึ่งต้องติดตั้ง Git ก่อน ใช้คำสั่งนี้:

```
sudo apt install git-all
```

#### Docker

Supabase จะถูกดีพลอยและรันบนเครื่องของคุณผ่านคอนเทนเนอร์ Docker ซึ่งต้องติดตั้ง Docker ก่อน ใช้คำสั่งนี้:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

คู่มือการติดตั้งและใช้งาน Docker แบบละเอียดมีให้ใน [คู่มือ Docker](dedicated-linux-docker.md)

## การติดตั้ง
เมื่อเตรียมทุกอย่างครบแล้ว คุณก็พร้อมติดตั้งแอป Supabase ได้เลย

ดึงรีโพซิทอรี Supabase สร้างไดเรกทอรีโปรเจกต์เฉพาะ และคัดลอกไฟล์ Docker กับไฟล์ตัวอย่าง environment ลงไป

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

เข้าไปในไดเรกทอรีโปรเจกต์ ดึงอิมเมจคอนเทนเนอร์ล่าสุด และรันสแตกในโหมด detached

```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

ตอนนี้คุณสามารถเข้าถึง Supabase Studio ผ่าน `http://<your-ip>:8000` ระบบจะขอชื่อผู้ใช้และรหัสผ่าน ค่าเริ่มต้นคือ:

- ชื่อผู้ใช้: `supabase`
- รหัสผ่าน: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning ข้อมูลล็อกอินเริ่มต้น
แอปของคุณกำลังรันด้วยข้อมูลล็อกอินเริ่มต้น รีบตั้งค่าความปลอดภัยให้บริการโดยเร็วที่สุดตามคำแนะนำด้านล่าง
:::

## การตั้งค่า
อย่าดีพลอยด้วยค่าตัวอย่างหรือค่าเริ่มต้นเด็ดขาด คุณควรเปลี่ยนทุกตัวแปรเป็นความลับที่แข็งแรงและไม่ซ้ำใคร ตรวจสอบการตั้งค่าตามความต้องการด้านความปลอดภัย และรีสตาร์ทบริการทั้งหมดเพื่อให้การเปลี่ยนแปลงมีผล

สร้าง API keys ที่ปลอดภัยก่อนเปิดเผยบริการ เริ่มจากเลือก JWT secret ความยาว 40 ตัวอักษร คุณสามารถใช้ค่าที่ให้มา หรือสร้างเองก็ได้ เก็บความลับนี้ไว้อย่างปลอดภัยในเครื่องของคุณ ห้ามแชร์หรือคอมมิตลง version control ใช้ความลับนี้สร้าง JWT แล้วสร้าง anon และ service API keys ตามฟอร์มในเอกสาร Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

รันฟอร์มสองครั้งเพื่อสร้างคีย์ทั้งสอง อัปเดตไฟล์ `./docker/.env` ด้วย:

- `ANON_KEY`: คีย์ anon
- `SERVICE_ROLE_KEY`: คีย์ service

อัปเดตความลับที่จำเป็นใน `./docker/.env` ค่าต่อไปนี้ต้องตั้งเพื่อให้ดีพลอยทำงานได้:

- `POSTGRES_PASSWORD`: รหัสผ่านสำหรับ role `postgres`
- `JWT_SECRET`: ใช้โดย PostgREST และ GoTrue
- `SITE_URL`: URL หลักของเว็บไซต์คุณ
- `SMTP_*`: ข้อมูลล็อกอินเซิร์ฟเวอร์เมล
- `POOLER_TENANT_ID`: tenant id ที่ใช้โดย Supavisor pooler

ปกป้องแดชบอร์ดด้วยข้อมูลล็อกอินใหม่ก่อนใช้งานจริง แก้ไข `./docker/.env`:

- `DASHBOARD_USERNAME`: ผู้ใช้แดชบอร์ด
- `DASHBOARD_PASSWORD`: รหัสผ่านแดชบอร์ด

คุณสามารถกำหนดผู้ใช้แดชบอร์ดหลายคนใน `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

ถ้าต้องการเปิดใช้ฟีเจอร์แดชบอร์ดทั้งหมดนอก `localhost` ให้ตั้งค่า `SUPABASE_PUBLIC_URL` ใน `./docker/.env` เป็น URL หรือ IP ที่จะใช้เข้าถึงแดชบอร์ด

ใช้คำสั่งนี้เพื่อรีสตาร์ทสแตกและใช้การตั้งค่าใหม่:

```
docker compose down
docker compose up -d
```

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณติดตั้งและตั้งค่า Supabase บน VPS/เซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว เราขอแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยเสริมความเข้าใจและคำแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [Supabase.com](https://Supabase.com/) - เว็บไซต์ทางการ
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - เอกสาร Supabase

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? ถ้าต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂