---
id: dedicated-linux-ts6
title: "เซิร์ฟเวอร์เฉพาะ: ตั้งค่า Teamspeak 6 Server บนเซิร์ฟเวอร์เฉพาะ Linux ของคุณ"
description: "ค้นพบวิธีตั้งค่าและปรับแต่ง TeamSpeak 6 Server เพื่อการเช่าเซิร์ฟเวอร์ที่เสถียรและประสิทธิภาพสูง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Teamspeak 6 Server
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ในช่วงซัมเมอร์ปี 2025 ทีมสปีคได้ปล่อย **เวอร์ชันเบต้า** ของ **TeamSpeak 6 Server** ออกมาแล้ว! ตอนนี้คุณสามารถสัมผัสประสบการณ์เจเนอเรชันถัดไปของ TeamSpeak ได้ด้วยตัวเอง!

กำลังคิดจะเช่าเซิร์ฟเวอร์เกมนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนตั้งแต่การตั้งค่าไปจนถึงการคอนฟิก พร้อมทุกสิ่งที่คุณต้องรู้เพื่อให้เซิร์ฟเวอร์ของคุณทำงานได้ลื่นไหล

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **Teamspeak 6 Server** ให้แน่ใจว่าสภาพแวดล้อมเช่าเซิร์ฟเวอร์ของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อให้การติดตั้งราบรื่นและประสิทธิภาพดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ     | คำแนะนำจาก ZAP-Hosting |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 คอร์ CPU | 4 คอร์ CPU                |
| RAM        | 1 GB        | 4 GB                       |
| พื้นที่ดิสก์ | 1 GB        | 25 GB                      |



## การเตรียมตัว

ก่อนตั้งค่า **TeamSpeak 6 Server** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็นทั้งหมด การเตรียมตัวนี้จะช่วยให้สภาพแวดล้อมเสถียรและลดปัญหาระหว่างหรือตอนหลังติดตั้ง


### อัปเดตระบบ
เพื่อให้ระบบของคุณทำงานด้วยซอฟต์แวร์และแพตช์ความปลอดภัยล่าสุด ควรอัปเดตระบบก่อนเสมอ ใช้คำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะช่วยให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว ให้ติดตั้ง dependencies ต่อไป สำหรับการติดตั้งที่ง่ายและแนะนำ เราแนะนำให้ใช้ Docker โดยต้องติดตั้ง Docker Engine ก่อน:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## การติดตั้ง
เมื่อผ่านข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว คุณก็พร้อมติดตั้งแอปพลิเคชัน Teamspeak 6 Server ได้เลย

ขั้นตอนต่อไปคือสร้างไฟล์ Docker Compose ชื่อ `docker-compose.yml` สำหรับ TeamSpeak 6 Server คุณสามารถเลือกโฟลเดอร์ใดก็ได้ แต่ในตัวอย่างนี้จะสร้างที่ `/opt/containers/ts6/` โดยใช้ไฟล์ Compose อย่างเป็นทางการของ TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # พอร์ตเสียง
      - "30033:30033/tcp" # โอนถ่ายไฟล์
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

เข้าไปยังโฟลเดอร์ที่ต้องการสร้างไฟล์ แล้วใช้คำสั่ง `nano docker-compose.yml` เพื่อสร้างไฟล์และวางเนื้อหาดังกล่าวลงไป

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


เพื่อเริ่มคอนเทนเนอร์ Docker และ TeamSpeak 6 Server ให้รันคำสั่ง Docker Compose นี้:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

ตอนนี้คอนเทนเนอร์ Docker สำหรับ TeamSpeak 6 Server จะเริ่มทำงาน โดยค่าเริ่มต้นจะยังไม่รันแบบถาวร ในการเริ่มต้นครั้งแรก คุณจะเห็น **ข้อมูลสำคัญ** เกี่ยวกับ **บัญชี Server Query Admin** และ **privilege key**

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

อย่าลืมเก็บข้อมูลนี้ไว้อย่างปลอดภัย เพราะจะไม่แสดงอีกในครั้งถัดไป หลังจากนั้นให้หยุดคอนเทนเนอร์ด้วย `CTRL+C`



## การตั้งค่า

คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมของ TeamSpeak 6 Server ผ่าน **environment variables** ในไฟล์ Docker Compose ได้ เพื่อให้เซิร์ฟเวอร์ตรงกับความต้องการของคุณ รายการตัวเลือกทั้งหมดดูได้ในเอกสารอย่างเป็นทางการของ [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)

ตัวอย่างโค้ดใน `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## การใช้งานเซิร์ฟเวอร์

ถ้าต้องการให้ TeamSpeak 6 Server รันอยู่เบื้องหลัง ให้เริ่มคอนเทนเนอร์ด้วยคำสั่งนี้:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

ถ้าต้องการหยุด TeamSpeak 6 Server ให้หยุดคอนเทนเนอร์ด้วยคำสั่งนี้:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## การเชื่อมต่อ

เมื่อ TeamSpeak 6 Server ทำงานแล้ว คุณสามารถเชื่อมต่อด้วย TeamSpeak 6 Client ได้เลย ใช้ที่อยู่ IP ของเซิร์ฟเวอร์พร้อมพอร์ตที่ถูกต้อง กรอกข้อมูลเหล่านี้ในไคลเอนต์เพื่อเชื่อมต่อและเริ่มทดสอบ

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณติดตั้งและตั้งค่า Teamspeak 6 Server บนเซิร์ฟเวอร์เฉพาะของคุณเรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลเหล่านี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการคอนฟิกเซิร์ฟเวอร์

- [เว็บไซต์ทางการ](https://teamspeak.com/en/) - ข้อมูลและดาวน์โหลด TeamSpeak 6
- [ฟอรัมชุมชน](https://community.teamspeak.com/) - สนับสนุนผู้ใช้และพูดคุย
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - รายงานบั๊กและติดตามปัญหา

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? ถ้ามีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂