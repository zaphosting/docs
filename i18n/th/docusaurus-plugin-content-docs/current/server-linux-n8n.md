---
id: server-linux-n8n
title: "ตั้งค่า n8n บนเซิร์ฟเวอร์ Linux - สร้างระบบอัตโนมัติ Workflow สุดเจ๋ง"
description: "ค้นพบวิธีติดตั้งและตั้งค่า n8n สำหรับการโฮสต์เอง เพื่อสร้างระบบอัตโนมัติ AI ที่ช่วยให้งานของคุณง่ายขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## แนะนำ

[n8n](https://n8n.io/) คือเครื่องมือแก้ไขแบบภาพชั้นนำสำหรับการทำซ้ำอย่างรวดเร็ว ที่คุณสามารถสร้าง workflow อัตโนมัติและเห็นผลลัพธ์ได้ทันที เหมาะสำหรับทั้งงานอัตโนมัติทั่วไปและ workflow ตัวแทน AI ที่ซับซ้อน

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

การรองรับการโฮสต์เองและตัวแก้ไขแบบ Low Code ทำให้ n8n เป็นที่ชื่นชอบของนักพัฒนาทุกคน หากคุณต้องการควบคุมสูงสุด ปรับแต่งได้ตามใจ และอยากประหยัดค่าใช้จ่ายในระยะยาว ตัวเลือกโฮสต์เองคือคำตอบที่ยอดเยี่ยมสำหรับคุณ

วางแผนจะโฮสต์ n8n เองใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและกำหนดค่า พร้อมทุกสิ่งที่คุณต้องรู้

<InlineVoucher />



## กรณีการใช้งานของ n8n

n8n สามารถใช้ได้ในหลายสถานการณ์ประจำวัน และเหมาะกับทุกคนที่อยากทำงานอัตโนมัติ ใช้ตัวแก้ไข Low Code สร้างตัวแทน AI นำระบบอัตโนมัติ เสริมพลัง CRM, การดำเนินงาน IT, การดำเนินงานด้านความปลอดภัย, การสร้างต้นแบบ backend และอื่นๆ อีกมากมาย! n8n เหมาะสำหรับทั้งมือใหม่และมือโปร

n8n มีการเชื่อมต่อมากกว่า 1367 รายการ เช่น Google Sheets, Telegram, MySQL, Slack, Discord, Postgres พร้อมชุดการทำงานอัตโนมัติยอดนิยมอย่าง HubSpot และ Salesforce, Twilio และ WhatsApp, GitHub และ Jira, Asana และ Slack, Asana และ Salesforce, Jira และ Slack รวมถึงเทมเพลตจากชุมชนอีกมากมาย

## ข้อกำหนดเบื้องต้น

แม้ว่า n8n จะมีน้ำหนักเบาที่แกนหลัก แต่การใช้ทรัพยากรอาจเพิ่มขึ้นตามจำนวน workflow, การเรียก API, โหนดที่ใช้ข้อมูลหนัก เราแนะนำสเปคฮาร์ดแวร์ดังนี้สำหรับการโฮสต์ n8n บน VPS ของคุณ

| ฮาร์ดแวร์   | ขั้นต่ำ       | แนะนำ                      |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 คอร์ vCPU  | 2 คอร์ vCPU                |
| RAM        | 2 GB         | 4 GB                       |
| พื้นที่ดิสก์ | 20 GB        | 50 GB                      |
<InlineServiceLink />

## การเตรียมตัว

ก่อนเริ่ม เราต้องติดตั้ง Docker และอัปเดตแพ็กเกจระบบ เรามีคู่มือ [การติดตั้ง Docker](dedicated-linux-docker.md) อยู่แล้ว ให้คุณทำตามให้เสร็จก่อนเริ่มติดตั้ง

## การติดตั้ง
หลังจากติดตั้ง Docker บนเซิร์ฟเวอร์แล้ว ให้รันคำสั่งต่อไปนี้เพื่อตรวจสอบการติดตั้ง:

```
docker --version
docker compose version
```

### สร้างไฟล์ `.env`

สร้างไดเรกทอรีโปรเจกต์เพื่อเก็บไฟล์ท้องถิ่นของ n8n และการตั้งค่าสภาพแวดล้อมของ n8n แล้วเข้าไปในโฟลเดอร์นั้น:

```
mkdir n8n-compose
cd n8n-compose
```

ในไดเรกทอรี `n8n-compose` ให้สร้างไฟล์ `.env` โดยใช้คำสั่ง `nano .env` และใส่โค้ดต่อไปนี้สำหรับการตั้งค่าสภาพแวดล้อมของ n8n

```
# DOMAIN_NAME และ SUBDOMAIN รวมกันกำหนดที่อยู่ที่ n8n จะเข้าถึงได้
# โดเมนระดับบนสุดที่ให้บริการ
DOMAIN_NAME=zap.cloud

# ซับโดเมนที่ให้บริการ
SUBDOMAIN=silver-octopus-xxxxx

# ตัวอย่างข้างต้นจะให้บริการ n8n ที่: https://silver-octopus-xxxxx.zap.cloud

# โซนเวลาที่เลือกใช้ ซึ่งจะถูกใช้โดย Cron และโหนดการตั้งเวลาอื่นๆ
GENERIC_TIMEZONE=Europe/Berlin

# อีเมลสำหรับใช้สร้างใบรับรอง TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
เพื่อหาค่า DOMAIN_NAME และ SUBDOMAIN ให้ไปที่หน้าผลิตภัณฑ์ ZAP-Hosting ของคุณ เข้า VPS และหาค่า `Hostname`


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

ใส่ส่วน `zap.cloud` ใน DOMAIN_NAME และส่วนก่อนหน้าใน SUBDOMAIN (เช่น silver-octopus-xxxxx)

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning ข้อกำหนด HTTPS
อย่าใช้ที่อยู่ IP เปล่าในไฟล์ .env เพราะ n8n ต้องการการเชื่อมต่อ HTTPS เพื่อเข้าถึงเว็บไซต์ และใบรับรอง SSL จะออกให้กับโดเมนเท่านั้น ไม่ออกให้กับที่อยู่ IP เปล่า
:::

ถ้าคุณอยากโฮสต์ n8n บนโดเมนของคุณเอง ให้สร้างซับโดเมนสำหรับ n8n โดยสร้างระเบียน A ในตัวจัดการ DNS ของโดเมน ชี้ไปที่ที่อยู่ IP ของ VPS ที่คุณใช้

| ชื่อ             | ประเภท | ค่า             | TTL  | ลำดับความสำคัญ |
| ---------------- | ---- | --------------- | ---- | -------- |
| n8n (ซับโดเมน)  | A    | ที่อยู่ IPv4    | 1440 | 0        |

### สร้างไดเรกทอรีไฟล์ท้องถิ่น

ในไดเรกทอรีโปรเจกต์ ให้สร้างไดเรกทอรีอีกอันชื่อ `local-files` สำหรับแชร์ไฟล์ระหว่างอินสแตนซ์ n8n กับระบบโฮสต์:

```
mkdir local-files
```

### สร้างไฟล์ Docker Compose

สร้างไฟล์ Docker Compose ชื่อ `compose.yaml` โดยใช้คำสั่ง `nano compose.yaml` แล้ววางเนื้อหาต่อไปนี้ลงไป:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

ไฟล์นี้จะติดตั้ง n8n ออกใบรับรอง SSL กำหนดค่า และทำให้ n8n พร้อมใช้งานบนโดเมนของคุณ

### เริ่มต้น n8n

เพื่อเริ่ม n8n ให้รันคำสั่งนี้:

```
sudo docker compose up -d
```

เพื่อหยุด n8n ให้รันคำสั่งนี้:

```
sudo docker compose stop
```

### การเข้าถึง n8n

หลังจากเริ่ม n8n ขั้นตอนถัดไปคือเข้าถึงด้วยเว็บเบราว์เซอร์ ใส่ URL (หรือ Hostname ถ้าใช้) เพื่อเข้าสู่หน้าตั้งค่า ที่นี่คุณต้องสร้างบัญชีแอดมินก่อนดำเนินการต่อ

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info แจ้งเตือนรหัสผ่าน
อย่าลืมรหัสผ่านของคุณไว้ใช้ในอนาคตนะ!
:::

ต่อมาแบบสำรวจเล็กๆ จะเด้งขึ้นมาให้กรอกรายละเอียดพื้นฐานบางอย่าง

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

ถ้าต้องการ คุณจะได้รับสิทธิ์ใช้งานฟีเจอร์พรีเมียมฟรีโดยกรอกอีเมลเพื่อรับ License Key ทางอีเมล ถ้าสนใจ กรอกอีเมลแล้วขอ License Key ได้เลย

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

License Key จะถูกส่งมาในอีเมลทันที คัดลอก Key นั้นแล้ววางใน Settings > Usage and Plans > Enter Activation Key

### สร้าง Workflow แรก

หลังจากนั้น คุณจะเข้าถึงแดชบอร์ดและเริ่มใช้ n8n ได้ทันที!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

ตอนนี้คุณสามารถเริ่มจาก Canvas ว่าง หรือใช้เทมเพลตที่มีอยู่ การติดตั้ง n8n ของคุณพร้อมใช้งานแล้ว!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## สรุปและแหล่งข้อมูลเพิ่มเติม

เยี่ยม! คุณติดตั้ง n8n บนเซิร์ฟเวอร์สำเร็จและพร้อมใช้งานทันที เราขอแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [n8n.io](https://n8n.io/) - เว็บไซต์ทางการ
- [docs.n8n.io](https://docs.n8n.io/) - เอกสาร n8n

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการคำถามหรือความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂



<InlineVoucher />