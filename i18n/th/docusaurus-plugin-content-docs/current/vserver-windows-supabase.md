---
id: vserver-windows-supabase
title: "ตั้งค่า Supabase บน Windows"
description: "ค้นพบวิธีการตั้งค่าและกำหนดค่า Supabase สำหรับแพลตฟอร์ม Postgres แบบโอเพ่นซอร์สที่เชื่อถือได้ พร้อมระบบยืนยันตัวตนและฟีเจอร์เรียลไทม์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Supabase คือแพลตฟอร์มพัฒนา Postgres แบบโอเพ่นซอร์สที่ให้ฐานข้อมูล Postgres ครบชุด พร้อมระบบยืนยันตัวตน, API ทันที, เรียลไทม์ และพื้นที่เก็บข้อมูล ทำให้เป็นทางเลือกโอเพ่นซอร์สแทน Firebase

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

กำลังคิดจะเช่าโฮสต์บริการนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและกำหนดค่า พร้อมทุกสิ่งที่คุณต้องรู้

## ติดตั้ง Supabase ด้วย One Click Apps Installer

คุณสามารถติดตั้ง **Supabase** ได้โดยตรงผ่าน **One Click Apps Installer** ในเว็บอินเทอร์เฟซของ VPS หลังจากตั้งค่าแอปเริ่มต้นเสร็จ เปิดแคตตาล็อกแอป ค้นหา **Supabase** แล้วเริ่มดีพลอยด้วยโปรเจกต์, สภาพแวดล้อม และการตั้งค่าโดเมนที่คุณต้องการ วิธีนี้ช่วยให้คุณดีพลอยและจัดการ **Supabase** ได้อย่างรวดเร็วและง่ายดายโดยไม่ต้องตั้งค่าผ่านคอมมานด์ไลน์ด้วยตัวเอง พร้อมทั้งได้ประโยชน์จากการจัดการผ่านเว็บ, รองรับโดเมนที่กำหนดเอง และการจัดเตรียม SSL เมื่อมีให้บริการ

<InlineVoucher />

## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Supabase** ให้แน่ใจว่าสภาพแวดล้อมโฮสต์ของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting  |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU               |
| RAM        | 4 GB         | 8 GB                       |
| พื้นที่ดิสก์ | 25 GB        | 25 GB                      |

ซอฟต์แวร์ต้องการให้ติดตั้ง dependencies ที่จำเป็นทั้งหมดและรันบนระบบปฏิบัติการที่รองรับ ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดเหล่านี้ก่อนเริ่มติดตั้ง:

**Dependencies:** `Git`, `Docker (Engine และ Compose)`

**ระบบปฏิบัติการ:** เวอร์ชันล่าสุดของ Ubuntu/Debian ที่รองรับ Docker 2

ตรวจสอบให้แน่ใจว่าติดตั้ง dependencies ครบและใช้ระบบปฏิบัติการเวอร์ชันที่ถูกต้องเพื่อหลีกเลี่ยงปัญหาความเข้ากันได้ระหว่างการติดตั้ง Supabase

## การเตรียมตัว

ก่อนตั้งค่า **Supabase** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็น การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมเสถียรและป้องกันปัญหาระหว่างหรือตอนหลังติดตั้ง

### อัปเดตระบบ
เพื่อให้ระบบของคุณรันด้วยซอฟต์แวร์และการปรับปรุงความปลอดภัยล่าสุด ควรทำการอัปเดตระบบก่อนเสมอ เพื่อให้ระบบมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ดำเนินการติดตั้ง dependencies ต่อไป

#### Git
ข้อมูล Supabase จะดาวน์โหลดผ่าน GitHub ซึ่งต้องติดตั้ง Git ก่อน ให้ติดตั้ง [Git สำหรับ Windows](https://git-scm.com/downloads/win) บนเซิร์ฟเวอร์ของคุณ
#### Docker

Supabase จะดีพลอยและรันบนเครื่องของคุณโดยใช้คอนเทนเนอร์ Docker ซึ่งต้องติดตั้ง Docker ก่อน ให้ติดตั้ง [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) บนเซิร์ฟเวอร์ของคุณ

คู่มือการติดตั้งและวิธีใช้ Docker แบบละเอียดมีให้ใน [คู่มือ Docker](vserver-windows-docker.md) ของเรา

## การติดตั้ง
เมื่อครบทุกข้อกำหนดและเตรียมตัวเรียบร้อยแล้ว คุณสามารถติดตั้งแอป Supabase ได้ เปิด command prompt ดึงรีโพซิทอรี Supabase สร้างไดเรกทอรีโปรเจกต์เฉพาะ และคัดลอกไฟล์ Docker และไฟล์ตัวอย่าง environment ลงไป

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

เปลี่ยนไปยังไดเรกทอรีโปรเจกต์ ดึงอิมเมจคอนเทนเนอร์ล่าสุด และรันสแตกในโหมด detached
```
cd supabase-project
docker compose pull
docker compose up -d
```

ตอนนี้คุณสามารถเข้าถึง Supabase Studio ผ่าน `http://<your-ip>:8000` ระบบจะขอชื่อผู้ใช้และรหัสผ่าน ค่าเริ่มต้นคือ:

- ชื่อผู้ใช้: `supabase`
- รหัสผ่าน: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning ข้อมูลเข้าสู่ระบบเริ่มต้น
แอปของคุณกำลังรันด้วยข้อมูลเข้าสู่ระบบเริ่มต้น รีบตั้งค่าความปลอดภัยให้บริการของคุณโดยเร็วที่สุดตามคำแนะนำด้านล่าง
:::

## การกำหนดค่า
อย่าดีพลอยด้วยค่าตั้งต้นหรือค่าตัวอย่างเด็ดขาด คุณควรเปลี่ยนทุกตัวแปรเป็นความลับที่แข็งแรงและไม่ซ้ำใคร ตรวจสอบการตั้งค่าตามความต้องการด้านความปลอดภัยของคุณ และรีสตาร์ทบริการทั้งหมดเพื่อให้การเปลี่ยนแปลงมีผล

สร้างคีย์ API ที่ปลอดภัยก่อนเปิดเผยบริการใดๆ เริ่มจากเลือก JWT secret ความยาว 40 ตัวอักษร คุณสามารถใช้ค่าที่ให้มา หรือสร้างเอง เก็บความลับนี้ไว้ในที่ปลอดภัย อย่าแชร์หรือ commit ลง version control ใช้ความลับนี้สร้าง JWT แล้วสร้างคีย์ API anon และ service ตามฟอร์มในเอกสาร Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

รันฟอร์มสองครั้งเพื่อสร้างคีย์ทั้งสอง อัปเดตไฟล์ `./docker/.env` ด้วย:

- `ANON_KEY`: คีย์ anon
- `SERVICE_ROLE_KEY`: คีย์ service

อัปเดตความลับที่จำเป็นใน `./docker/.env` ค่าต่อไปนี้ต้องตั้งเพื่อให้ดีพลอยทำงานได้:

- `POSTGRES_PASSWORD`: รหัสผ่านสำหรับ role `postgres`
- `JWT_SECRET`: ใช้โดย PostgREST และ GoTrue
- `SITE_URL`: URL หลักของเว็บไซต์คุณ
- `SMTP_*`: ข้อมูลรับรองเซิร์ฟเวอร์เมล
- `POOLER_TENANT_ID`: tenant id ที่ใช้โดย Supavisor pooler

ปกป้องแดชบอร์ดด้วยข้อมูลเข้าสู่ระบบใหม่ก่อนใช้งานจริง แก้ไข `./docker/.env`:

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

ถ้าต้องการเปิดใช้ฟีเจอร์แดชบอร์ดทั้งหมดนอก `localhost` ให้ตั้งค่า `SUPABASE_PUBLIC_URL` ใน `./docker/.env` เป็น URL หรือ IP ที่คุณจะใช้เข้าถึงแดชบอร์ด

ใช้การเปลี่ยนแปลงโดยรีสตาร์ทสแตก:

```
docker compose down
docker compose up -d
```

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณติดตั้งและกำหนดค่า Supabase บน VPS/เซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลต่อไปนี้ซึ่งจะช่วยให้คุณได้รับคำแนะนำและความช่วยเหลือเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์

- [Supabase.com](https://Supabase.com/) - เว็บไซต์ทางการ
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - เอกสาร Supabase

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการคำถามเพิ่มเติมหรือความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂