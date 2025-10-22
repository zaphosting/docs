---
id: vserver-linux-firewall
title: "VPS: การจัดการไฟร์วอลล์ใน Linux"
description: "เรียนรู้วิธีตั้งค่าไฟร์วอลล์เพื่อปกป้องเซิร์ฟเวอร์ของคุณและอนุญาตการเชื่อมต่อภายนอกที่จำเป็น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การส่งต่อพอร์ต (ไฟร์วอลล์)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

สำหรับบริการและโปรแกรมหลายๆ ตัว คุณต้องอนุญาตการเชื่อมต่อภายนอก ซึ่งทำได้โดยการตั้งค่าไฟร์วอลล์
ในคู่มือนี้ คุณจะได้เรียนรู้วิธีตั้งค่าไฟร์วอลล์และอนุญาตการเชื่อมต่อเหล่านั้น

<InlineVoucher />

## การเตรียมตัว

ในการติดตั้งไฟร์วอลล์ คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน SSH หากยังไม่รู้วิธี คุณสามารถดูได้จาก [คู่มือการเข้าถึงเบื้องต้น](vserver-linux-ssh.md)
หลังจากเชื่อมต่อแล้ว ควรอัปเดตเซิร์ฟเวอร์ด้วยคำสั่ง `apt update` และ `apt upgrade`

## การใช้ UFW (ง่าย)

มีโปรแกรมไฟร์วอลล์หลายตัวสำหรับ Linux คู่มือนี้จะเน้นที่ 2 ตัวที่ได้รับความนิยมมากที่สุด: UFW และ IPTables
เราจะเริ่มที่ UFW เพราะตั้งค่าและจัดการง่ายกว่า

### การติดตั้ง UFW

คุณสามารถติดตั้ง UFW ได้ง่ายๆ ผ่าน APT ด้วยคำสั่ง `sudo apt install ufw`
เพื่อไม่ให้การเชื่อมต่อ SSH ขาดตอน คุณไม่ควรเปิดใช้งานทันที ต้องตั้งค่าก่อน

### การตั้งค่า UFW

เราแนะนำให้ใช้ค่ามาตรฐานดังนี้:

`sudo ufw default deny incoming`
และ
`sudo ufw default allow outgoing`

ตอนนี้คุณควรอนุญาตการเชื่อมต่อ SSH และพอร์ตอื่นๆ ที่ต้องการเปิด:

`sudo ufw allow 22` สำหรับ SSH

`sudo ufw allow 80` ตัวอย่างสำหรับ HTTP

`sudo ufw allow 25565` ตัวอย่างสำหรับเซิร์ฟเวอร์ Minecraft


เพื่อเปิดใช้งาน UFW ให้รันคำสั่ง `sudo ufw enable` คุณสามารถเปิดพอร์ตเพิ่มได้ตลอดเวลาถ้าจำเป็น โดยใช้ `sudo ufw allow PORT`


### การเพิ่มการส่งต่อพอร์ต

ถ้าต้องการส่งต่อพอร์ต คุณสามารถใช้คำสั่งนี้ได้เลย:

สำหรับพอร์ต TCP:

`sudo ufw allow PORT/tcp` โดยแทนที่ PORT ด้วยพอร์ตที่ต้องการส่งต่อ

ตัวอย่าง: `sudo ufw allow 25565/tcp` สำหรับเซิร์ฟเวอร์ Minecraft

สำหรับพอร์ต UDP:

`sudo ufw allow PORT/udp` โดยแทนที่ PORT ด้วยพอร์ตที่ต้องการส่งต่อ

ตัวอย่าง: `sudo ufw allow 9987/udp` สำหรับเซิร์ฟเวอร์ TeamSpeak 3

### การแสดงและลบการส่งต่อพอร์ต

ถ้าต้องการดูรายการกฎพอร์ตทั้งหมด ให้รัน `sudo ufw status numbered` ถ้าต้องการลบกฎ ให้ใช้ `sudo ufw delete NUMBER` โดยใช้หมายเลขของกฎในรายการ

## การติดตั้ง IPTables (ขั้นสูง)

ระบบส่วนใหญ่จะมี IPTables ติดตั้งมาแล้ว แต่ถ้าต้องการตรวจสอบหรือเพิ่ม สามารถรัน `sudo apt install iptables`

### การตั้งค่า IPTables

เริ่มด้วยการตั้งค่านโยบายและค่าพื้นฐาน:

`sudo iptables -P INPUT DROP` เพื่อปิดกั้นการเชื่อมเข้าทั้งหมด

`sudo iptables -P FORWARD DROP` เพื่อปิดกั้นการส่งต่อทั้งหมด

`sudo iptables -P OUTPUT ACCEPT` เพื่ออนุญาตการเชื่อมออกทั้งหมด

`sudo iptables -A INPUT -i lo -j ACCEPT` เพื่ออนุญาต loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` เพื่ออนุญาตการเชื่อมต่อที่มีอยู่แล้ว

ตอนนี้คุณควรอนุญาตการเชื่อมต่อ SSH และพอร์ตอื่นๆ ที่ต้องการเปิด:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` สำหรับ SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` ตัวอย่างสำหรับ HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` ตัวอย่างสำหรับเซิร์ฟเวอร์ Minecraft

จากนั้นต้องทำให้กฎเหล่านี้คงอยู่หลังรีสตาร์ทเซิร์ฟเวอร์ ติดตั้งแพ็กเกจ IPTables persistent ด้วย `sudo apt install iptables-persistent` แล้วบันทึกกฎด้วย `sudo netfilter-persistent save` และตั้งให้รันอัตโนมัติด้วย `sudo systemctl enable netfilter-persistent`

### การเพิ่มการส่งต่อพอร์ต

ถ้าต้องการส่งต่อพอร์ต ใช้คำสั่งนี้:

สำหรับพอร์ต TCP:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` โดยแทนที่ PORT ด้วยพอร์ตที่ต้องการส่งต่อ

ตัวอย่าง: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` สำหรับเซิร์ฟเวอร์ Minecraft

สำหรับพอร์ต UDP:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` โดยแทนที่ PORT ด้วยพอร์ตที่ต้องการส่งต่อ

ตัวอย่าง: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` สำหรับเซิร์ฟเวอร์ TeamSpeak 3


### การแสดงและลบการส่งต่อพอร์ต

คุณสามารถแสดงกฎทั้งหมดด้วยคำสั่ง: `sudo iptables -L --line-numbers` ถ้าต้องการลบกฎ ให้ใช้ `sudo iptables -D INPUT NUMBER` โดยแทนที่ `NUMBER` ด้วยหมายเลขกฎที่ต้องการลบ

## สรุป

คุณได้ติดตั้งไฟร์วอลล์บนเซิร์ฟเวอร์ Linux ของคุณเรียบร้อยแล้ว และสร้างกฎพอร์ตของคุณเองได้ตามต้องการ คุณยังสามารถใช้คู่มือนี้เพื่อส่งต่อพอร์ตเพิ่มเติมได้อีก
ถ้ามีคำถามหรืออยากได้ความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน! 🙂

<InlineVoucher />