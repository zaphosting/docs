---
id: vserver-linux-ts6
title: "VPS: ตั้งค่าเซิร์ฟเวอร์ Teamspeak 6 บน VPS Linux ของคุณ"
description: "ค้นพบวิธีตั้งค่าและปรับแต่งเซิร์ฟเวอร์ TeamSpeak 6 เพื่อการโฮสต์ที่เสถียรและประสิทธิภาพสูง → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งเซิร์ฟเวอร์ Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

ในช่วงฤดูร้อนปี 2025 ทีม TeamSpeak ได้ปล่อย **เวอร์ชันเบต้า** ของ **เซิร์ฟเวอร์ TeamSpeak 6** แล้ว! ตอนนี้คุณสามารถสัมผัสประสบการณ์เจนเนอเรชันถัดไปของ TeamSpeak ได้ด้วยตัวเอง!

กำลังคิดจะโฮสต์บริการนี้เองอยู่ใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและการกำหนดค่า พร้อมทุกสิ่งที่คุณต้องรู้เพื่อให้เซิร์ฟเวอร์ของคุณทำงานได้อย่างราบรื่น

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## ข้อกำหนดเบื้องต้น

ก่อนติดตั้ง **เซิร์ฟเวอร์ Teamspeak 6** ให้ตรวจสอบว่าสภาพแวดล้อมโฮสต์ของคุณตรงตามข้อกำหนดต่อไปนี้ เพื่อรับประกันการติดตั้งที่ราบรื่นและประสิทธิภาพที่ดีที่สุด

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting |
| ---------- | ------------ | ----------------------- |
| CPU        | 1 คอร์ vCPU  | 4 คอร์ vCPU             |
| RAM        | 1 GB         | 4 GB                    |
| พื้นที่ดิสก์ | 1 GB         | 25 GB                   |



## การเตรียมตัว

ก่อนตั้งค่า **เซิร์ฟเวอร์ TeamSpeak 6** คุณต้องเตรียมระบบของคุณก่อน ซึ่งรวมถึงการอัปเดตระบบปฏิบัติการเป็นเวอร์ชันล่าสุดและติดตั้ง dependencies ที่จำเป็นทั้งหมด การเตรียมตัวเหล่านี้ช่วยให้สภาพแวดล้อมเสถียรและป้องกันปัญหาระหว่างหรือติดตั้งเสร็จแล้ว


### อัปเดตระบบ
เพื่อให้แน่ใจว่าระบบของคุณใช้งานซอฟต์แวร์และแพตช์ความปลอดภัยล่าสุด คุณควรอัปเดตระบบก่อนเสมอ โดยใช้คำสั่งนี้:

```
sudo apt update && sudo apt upgrade -y
```
คำสั่งนี้จะช่วยให้ระบบของคุณมีแพตช์ความปลอดภัยและเวอร์ชันซอฟต์แวร์ล่าสุดก่อนดำเนินการต่อ

### ติดตั้ง dependencies
เมื่ออัปเดตเสร็จแล้ว คุณสามารถติดตั้ง dependencies ได้เลย สำหรับการติดตั้งที่รวดเร็ว ง่าย และแนะนำ เราขอแนะนำให้ใช้ Docker โดยต้องติดตั้ง Docker Engine ก่อน:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## การติดตั้ง
เมื่อคุณผ่านข้อกำหนดและเตรียมระบบเรียบร้อยแล้ว ก็สามารถติดตั้งแอปพลิเคชันเซิร์ฟเวอร์ Teamspeak 6 ได้เลย

ขั้นตอนถัดไปคือการสร้างไฟล์ Docker Compose ชื่อ `docker-compose.yml` สำหรับเซิร์ฟเวอร์ TeamSpeak 6 คุณสามารถเลือกไดเรกทอรีใดก็ได้ แต่ในตัวอย่างนี้จะสร้างไฟล์ไว้ที่ `/opt/containers/ts6/` โดยใช้ไฟล์ Compose อย่างเป็นทางการของ TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # พอร์ตเสียง
      - "30033:30033/tcp" # การโอนย้ายไฟล์
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

ไปยังไดเรกทอรีที่ต้องการสร้างไฟล์ แล้วใช้คำสั่ง `nano docker-compose.yml` เพื่อสร้างและวางเนื้อหาลงไป

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


เพื่อเริ่มคอนเทนเนอร์ Docker และเซิร์ฟเวอร์ TeamSpeak 6 ให้รันคำสั่ง Docker Compose นี้:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

ตอนนี้คอนเทนเนอร์ Docker สำหรับเซิร์ฟเวอร์ TeamSpeak 6 จะเริ่มทำงาน โดยค่าเริ่มต้นจะยังไม่รันแบบถาวร ในการเริ่มต้นครั้งแรก คุณจะเห็น **ข้อมูลสำคัญ** เกี่ยวกับ **บัญชีผู้ดูแล Server Query** และ **คีย์สิทธิ์** 

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

อย่าลืมเก็บข้อมูลนี้ไว้อย่างปลอดภัย เพราะจะไม่แสดงอีกในครั้งถัดไป หลังจากนั้นให้หยุดคอนเทนเนอร์ด้วย `CTRL+C`



## การตั้งค่า

คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมของเซิร์ฟเวอร์ TeamSpeak 6 ได้ด้วย **environment variables** ในไฟล์ Docker Compose ซึ่งช่วยให้คุณกำหนดค่าเซิร์ฟเวอร์ตามความต้องการ รายการตัวเลือกทั้งหมดดูได้ในเอกสารอย่างเป็นทางการของ [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)

ตัวอย่างโค้ดใน `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## การใช้งานเซิร์ฟเวอร์

เพื่อให้เซิร์ฟเวอร์ TeamSpeak 6 ทำงานอยู่เบื้องหลัง ให้เริ่มคอนเทนเนอร์ด้วยคำสั่งนี้:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

ถ้าต้องการหยุดเซิร์ฟเวอร์ TeamSpeak 6 ให้หยุดคอนเทนเนอร์ด้วยคำสั่งนี้:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## การเชื่อมต่อ

เมื่อเซิร์ฟเวอร์ TeamSpeak 6 ทำงานแล้ว คุณสามารถเชื่อมต่อผ่าน TeamSpeak 6 Client ได้เลย ใช้ที่อยู่ IP ของเซิร์ฟเวอร์พร้อมพอร์ตที่ถูกต้อง กรอกข้อมูลเหล่านี้ในไคลเอนต์เพื่อเชื่อมต่อและเริ่มทดสอบเซิร์ฟเวอร์ของคุณ

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! ตอนนี้คุณได้ติดตั้งและตั้งค่าเซิร์ฟเวอร์ Teamspeak 6 บน VPS เรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลต่อไปนี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์ของคุณ

- [เว็บไซต์ทางการ](https://teamspeak.com/en/) - ข้อมูลและดาวน์โหลด TeamSpeak 6
- [ฟอรัมชุมชน](https://community.teamspeak.com/) - สนับสนุนผู้ใช้และพูดคุย
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - รายงานบั๊กและติดตามปัญหาเปิดอยู่

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂