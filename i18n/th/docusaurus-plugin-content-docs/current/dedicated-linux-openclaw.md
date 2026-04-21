---
id: dedicated-linux-openclaw
title: "ตั้งค่า OpenClaw บนเซิร์ฟเวอร์ Linux - สร้างผู้ช่วย AI ส่วนตัวของคุณ!"
description: "ค้นพบวิธีการตั้งค่าและกำหนดค่า OpenClaw สำหรับการโฮสต์ด้วยตัวเอง เพื่อสร้างผู้ช่วย AI ส่วนตัวและทรงพลังแบบโอเพ่นซอร์ส → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง OpenClaw
services:
  - vserver-service-openclaw
  - dedicated-service-openclaw
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## บทนำ

[OpenClaw](https://openclaw.ai/) คือแพลตฟอร์มอัตโนมัติและควบคุมด้วย AI ที่ช่วยให้คุณโต้ตอบกับซอฟต์แวร์ผ่านอินเทอร์เฟซบนเว็บเบราว์เซอร์ แทนที่จะต้องคลิกเมนูด้วยตัวเอง, นำทางผ่าน UI หรือทำงานซ้ำ ๆ OpenClaw สามารถรันคำสั่งแบบโปรแกรมและให้ความสามารถควบคุมระยะไกลผ่านแดชบอร์ดเว็บได้

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

สิ่งที่ทำให้ OpenClaw ปฏิวัติวงการคือมันสร้าง “ชั้นควบคุม” สมัยใหม่สำหรับแอปและระบบ แทนที่จะผูกติดกับเซสชันเดสก์ท็อปในเครื่องท้องถิ่น OpenClaw สามารถรันบนเครื่องระยะไกล เช่น VPS หรือ เซิร์ฟเวอร์เฉพาะ และยังจัดการได้เต็มที่จากทุกที่ นี่คือเครื่องมือทรงพลังสำหรับผู้ใช้ที่ต้องการระบบอัตโนมัติที่เชื่อถือได้, ควบคุมระยะไกล และการจัดการศูนย์กลางโดยไม่ต้องเปิดคอมพิวเตอร์ท้องถิ่นตลอดเวลา

กำลังคิดจะโฮสต์บริการนี้เองใช่ไหม? เราจะพาคุณผ่านทุกขั้นตอนการตั้งค่าและกำหนดค่า พร้อมทุกสิ่งที่ต้องรู้

## ติดตั้ง OpenClaw ด้วย One Click Apps Installer

คุณสามารถติดตั้ง **OpenClaw** ได้โดยตรงผ่าน **One Click Apps Installer** ในเว็บอินเทอร์เฟซของ VPS หลังจากตั้งค่าแอปเริ่มต้นเสร็จ เปิดแคตตาล็อกแอป, ค้นหา **OpenClaw** และเริ่มดีพลอยด้วยโปรเจกต์, สภาพแวดล้อม และการตั้งค่าโดเมนที่คุณต้องการ วิธีนี้ช่วยให้คุณติดตั้งและจัดการ **OpenClaw** ได้อย่างรวดเร็วและง่ายดายโดยไม่ต้องตั้งค่าคำสั่งด้วยตัวเอง พร้อมได้ประโยชน์จากการจัดการผ่านเว็บ, รองรับโดเมนที่กำหนดเอง และการจัดเตรียม SSL เมื่อมีให้บริการ

<InlineVoucher />

## กรณีการใช้งานของ OpenClaw

OpenClaw ใช้ได้ในหลายสถานการณ์ประจำวัน เหมาะกับใครก็ตามที่อยากทำงานอัตโนมัติ, รวมศูนย์การใช้ AI หรือรันผู้ช่วยที่พร้อมใช้งานตลอดเวลา

กรณีใช้งานทั่วไปคือการรวมการโต้ตอบ AI จากหลายแพลตฟอร์ม แทนที่จะใช้เครื่องมือแยกสำหรับแอปแชทต่าง ๆ OpenClaw สามารถทำหน้าที่เป็นผู้ช่วยเดียวที่มีบริบทและการตั้งค่าคงที่ ไม่ขึ้นกับที่ที่เข้าถึง

OpenClaw ยังเหมาะกับงานอัตโนมัติ ช่วยลดงานซ้ำ ๆ ด้วยการจัดการงานที่เกิดซ้ำ, จัดระเบียบข้อมูล, สรุปเนื้อหา และให้คำตอบที่มีโครงสร้าง

อีกกรณีสำคัญคือการอัตโนมัติบนเว็บ โดยควบคุมเซสชันเบราว์เซอร์ผ่าน Chrome หรือ Chromium เฉพาะตัว OpenClaw สามารถโต้ตอบกับเว็บอินเทอร์เฟซได้แม้ไม่มี API ตรง

เพื่อรองรับสถานการณ์เหล่านี้ OpenClaw มีฟีเจอร์หลากหลาย เช่น รองรับการส่งข้อความหลายช่องทาง (WhatsApp, Telegram, Slack, Discord), สถาปัตยกรรมเกตเวย์สำหรับจัดการเซสชันและช่องทาง, ฟีเจอร์เสียงเสริม, อินเทอร์แอคทีฟแคนวาส, แพลตฟอร์มสกิลที่ขยายได้, รองรับผู้ให้บริการ AI หลายราย (รวม OpenAI และ Anthropic), โหนดอุปกรณ์สำหรับแอคชันมือถือ, การยืนยันตัวตนด้วย API key, และการจัดการเวิร์กสเปซและการตั้งค่าคงที่

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)

## ความต้องการเบื้องต้น

ขึ้นอยู่กับวิธีการใช้งาน **OpenClaw** การใช้ทรัพยากรอาจเพิ่มขึ้นอย่างรวดเร็ว ในขณะที่การตั้งค่าพื้นฐาน (เช่น ใช้ Web UI อย่างเดียวกับอัตโนมัติน้อย) รันได้ดีบนแผน VPS ขนาดเล็ก กรณีใช้งานขั้นสูง เช่น รันหลายช่องทาง, เปิดใช้งานสกิลจำนวนมาก หรือใช้เบราว์เซอร์อัตโนมัติ อาจต้องใช้ทรัพยากรมากขึ้นมาก และในกรณีนี้เราแนะนำให้ใช้ เซิร์ฟเวอร์เฉพาะ

| ฮาร์ดแวร์   | ขั้นต่ำ       | คำแนะนำจาก ZAP-Hosting |
| ---------- | ------------ | ----------------------- |
| CPU        | 1 คอร์ vCPU  | 8 คอร์ vCPU             |
| RAM        | 4 GB         | 16 GB                   |
| พื้นที่ดิสก์ | 25 GB        | 50 GB                   |

<InlineServiceLink />

## การติดตั้ง
การติดตั้งเริ่มต้นด้วยการรันสคริปต์ติดตั้ง OpenClaw อย่างเป็นทางการบน เซิร์ฟเวอร์เฉพาะ Linux ของคุณ เชื่อมต่อกับเซิร์ฟเวอร์ผ่าน SSH และรันคำสั่งนี้:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

หลังรันคำสั่ง สคริปต์ติดตั้งแบบอินเทอร์แอคทีฟจะเริ่มทำงานและแนะนำคุณผ่านขั้นตอนการตั้งค่า ตัวติดตั้งจะตรวจสอบสภาพแวดล้อม, ติดตั้ง dependencies ที่ขาด และเริ่มกระบวนการ onboarding ของ OpenClaw

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)

### ตรวจจับแพลตฟอร์มและตรวจสอบ dependencies

ตัวติดตั้งจะตรวจจับระบบปฏิบัติการของคุณโดยอัตโนมัติและติดตั้ง dependencies ที่จำเป็นถ้ายังไม่มี เช่น ถ้า Node.js ขาดหาย จะติดตั้งให้เองโดยไม่ต้องทำอะไรเพิ่ม

### การติดตั้งแพ็กเกจที่จำเป็น

OpenClaw จะติดตั้งแพ็กเกจที่ต้องใช้ผ่านตัวจัดการแพ็กเกจของระบบโดยอัตโนมัติ ไม่ต้องทำอะไรเพิ่ม เมื่อแพ็กเกจครบถ้วน ตัวติดตั้งจะดำเนินการต่อเอง

### การติดตั้ง OpenClaw

เมื่อเตรียม dependencies เสร็จ ตัวติดตั้งจะดาวน์โหลดและติดตั้ง OpenClaw เวอร์ชันล่าสุด เมื่อเสร็จสิ้น คุณจะเห็นข้อความยืนยันแบบนี้:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)

### การ onboarding OpenClaw

หลังติดตั้ง OpenClaw เสร็จ ตัวช่วย onboarding จะเริ่มทำงานอัตโนมัติ ขั้นตอนนี้จำเป็นเพื่อกำหนดค่าเริ่มต้นและทำให้ OpenClaw ใช้งานได้

อ่านประกาศความปลอดภัยที่แสดงและยืนยันเพื่อดำเนินการต่อ เลือกโหมด onboarding สำหรับผู้ใช้ส่วนใหญ่ **QuickStart** คือโหมดแนะนำ

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

จากนั้นเลือกโมเดล/ผู้ให้บริการยืนยันตัวตน ในตัวอย่างนี้เลือก **OpenAI** ใส่ API key ของ OpenAI OpenClaw จะเก็บคีย์นี้ไว้ในคอนฟิกเพื่อใช้ในเซสชันถัดไป เมื่อบันทึกคีย์แล้ว เลือกโมเดลเริ่มต้นที่ OpenClaw จะใช้

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

ขั้นตอนสุดท้าย คุณสามารถตั้งค่าช่องทาง (เช่น Telegram, Discord, Slack), สกิล และ hooks ได้ หากยังไม่ต้องการตั้งค่าตอนนี้ สามารถข้ามไปก่อนแล้วตั้งค่าทีหลังได้

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

ถ้าต้องการใช้ OpenClaw ผ่าน Telegram คุณต้องสร้าง Telegram bot และรับ API token ก่อน ทำได้โดยตรงใน Telegram ผ่านบัญชีอย่างเป็นทางการ **BotFather**

เปิดแชทกับ **BotFather** เริ่มสร้างบอทด้วยการส่งคำสั่ง `/newbot` แล้วทำตามขั้นตอน BotFather จะถามชื่อแสดงผลก่อน จากนั้นถามชื่อผู้ใช้ ชื่อผู้ใช้ต้องลงท้ายด้วย `bot`

บทสนทนาจะประมาณนี้:

```
User: /newbot 

BotFather: Alright, a new bot. How are we going to call it? Please choose a name for your bot.  

User: ZAP DOCS EXAMPLE

BotFather: Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot. 

User: ZAP_DOCS_EXAMPLE_BOT 

BotFather:  Done! Congratulations on your new bot. You will find it at t.me/ZAP_DOCS_EXAMPLE_BOT. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

เมื่อ BotFather ยืนยันการสร้างบอทแล้ว ให้คัดลอก **token** ที่แสดงและเก็บไว้อย่างปลอดภัย คุณจะต้องใช้ token นี้เมื่อต่อ Telegram เป็นช่องทางใน onboarding หรือการตั้งค่า OpenClaw ใครก็ตามที่มี token นี้สามารถควบคุมบอทได้ ดังนั้นห้ามเผยแพร่สู่สาธารณะเด็ดขาด

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

หลังสร้าง Telegram bot และบันทึก token แล้ว คุณสามารถดำเนินการ onboarding ต่อไปได้ ในขั้นตอนถัดไป OpenClaw ให้คุณติดตั้ง **สกิล** และเปิดใช้งาน **hooks** ตัวเลือกเหล่านี้แนะนำให้ทำ แต่สามารถข้ามไปตั้งค่าทีหลังได้เช่นกัน

เมื่อ onboarding เสร็จสิ้น OpenClaw จะติดตั้ง **บริการ Gateway** ให้อัตโนมัติ สุดท้ายเลือกตัวเลือก **Web UI** เพื่อให้ OpenClaw แสดงลิงก์แดชบอร์ด ซึ่งช่วยให้คุณเข้าถึง UI ควบคุม OpenClaw และจัดการผ่านเบราว์เซอร์ได้

หลังจากนั้น onboarding จะถูกทำเครื่องหมายว่าสำเร็จ ในตอนท้าย OpenClaw ยังเสนอให้ติดตั้ง **สคริปต์เติมคำสั่งอัตโนมัติในเชลล์** ตัวเลือกนี้ไม่บังคับแต่แนะนำ เพราะช่วยให้ใช้งานคำสั่ง OpenClaw ใน CLI ได้สะดวกขึ้น ทำตามขั้นตอนนี้ได้เลย

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)

<InlineVoucher />

## การตั้งค่า

เซิร์ฟเวอร์ VPS และ เซิร์ฟเวอร์เฉพาะ ของเราจะไม่มี GUI ติดตั้งมาโดยดีฟอลต์ เพราะฉะนั้น OpenClaw จะรันในโหมด headless และเปิด UI ควบคุมเฉพาะบนเครื่องเซิร์ฟเวอร์ที่พอร์ต `18789`

เมื่อการติดตั้งและ onboarding เสร็จ OpenClaw จะแสดงข้อมูลแดชบอร์ดในคอนโซล:

```
Dashboard link (with token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copy/paste this URL in a browser on this machine to control OpenClaw.
No GUI detected. Open from your computer:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Then open:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

เนื่องจากเว็บอินเทอร์เฟซผูกกับ `127.0.0.1` จึงไม่สามารถเข้าถึงโดยตรงจากอินเทอร์เน็ตได้ เพื่อเข้าถึงอย่างปลอดภัยจากเครื่อง PC ของคุณ ให้สร้าง SSH tunnel ที่ส่งต่อพอร์ต OpenClaw จาก VPS/เซิร์ฟเวอร์เฉพาะมายังเครื่องของคุณ

บน PC เปิดเทอร์มินัลแล้วรัน:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

ตราบใดที่เซสชัน SSH นี้เปิดอยู่ คุณสามารถเข้าถึง UI ควบคุม OpenClaw ผ่านเบราว์เซอร์ด้วย URL นี้:

```
http://localhost:18789/
```

ถ้า OpenClaw ต้องการการยืนยันตัวตน ให้เปิดลิงก์ที่มี token ซึ่งแสดงในเอาต์พุต OpenClaw:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

:::tip ใช้ GUI (Desktop Environment)

ถ้าคุณชอบใช้ OpenClaw ผ่านอินเทอร์เฟซกราฟิก คุณสามารถติดตั้ง desktop environment บน VPS/เซิร์ฟเวอร์เฉพาะ เช่น **XFCE** หลังติดตั้ง GUI (และโซลูชันเดสก์ท็อประยะไกลอย่าง RDP หรือ VNC) คุณจะเข้าถึงและควบคุม OpenClaw ได้โดยตรงผ่านเดสก์ท็อปเซิร์ฟเวอร์เฉพาะ แทนการใช้ SSH port forwarding

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)

### การติดตั้งสกิล

สกิลช่วยขยายฟังก์ชันและการเชื่อมต่อของ OpenClaw
OpenClaw มาพร้อมกับสกิลมากกว่า 50 ตัว คุณสามารถติดตั้งสกิลได้โดยตรงในแดชบอร์ด เปิดส่วน **Skills** แล้วเลือกสกิลที่ต้องการเปิดใช้งาน

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)

### การเปิดใช้งาน hooks

Hooks ช่วยให้ OpenClaw รันคำสั่งอัตโนมัติเมื่อเกิดเหตุการณ์บางอย่างหรือใช้คำสั่งเฉพาะ
เหมาะสำหรับงานอัตโนมัติที่เกิดซ้ำ, บันทึกบริบท หรือทริกเกอร์เวิร์กโฟลว์โดยไม่ต้องโต้ตอบด้วยมือ

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)

### การตั้งค่าช่องทาง

ช่องทางช่วยให้คุณใช้ OpenClaw ผ่านแพลตฟอร์มส่งข้อความ
ในแดชบอร์ดคุณสามารถตั้งค่าและเชื่อมต่อช่องทางที่รองรับ เช่น Telegram, Discord, Slack และอื่น ๆ

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

ขึ้นอยู่กับแพลตฟอร์มที่เลือก คุณต้องใส่ token หรือข้อมูลรับรองเพิ่มเติม (เช่น token บอท Telegram ที่สร้างผ่าน BotFather ตามขั้นตอนติดตั้ง)

เมื่อเชื่อมต่อช่องทางสำเร็จ OpenClaw จะรับและตอบข้อความผ่านแพลตฟอร์มนั้นได้ ตัวอย่างการสนทนากับผู้ช่วย AI ผ่าน Telegram อาจเป็นแบบนี้:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)

## ความปลอดภัย

OpenClaw เป็นเครื่องมือทรงพลังและควรใช้งานด้วยมาตรการความปลอดภัยที่เหมาะสม แดชบอร์ด Gateway ถูกป้องกันด้วย token ซึ่งทำหน้าที่เหมือนรหัสผ่านและให้สิทธิ์เข้าถึง OpenClaw ของคุณ ห้ามแชร์ token นี้สู่สาธารณะ (เช่น ในภาพหน้าจอ, ตั๋วซัพพอร์ต หรือบันทึกแชท) เพราะใครก็ตามที่มี token สามารถเข้าถึงและควบคุมแดชบอร์ดได้

แนะนำให้เก็บ OpenClaw ไว้หลังไฟร์วอลล์และหลีกเลี่ยงการเปิดเผยอินเทอร์เฟซเกตเวย์สู่สาธารณะ โดยดีฟอลต์ OpenClaw จะผูกบริการเกตเวย์กับ `127.0.0.1` เพื่อป้องกันการเข้าถึงจากภายนอกและเป็นตัวเลือกที่ปลอดภัยที่สุดสำหรับกรณีส่วนใหญ่ หากต้องการเข้าถึงแดชบอร์ดระยะไกล ให้ใช้ SSH port forwarding และจำกัดการเข้าถึงเฉพาะผู้ใช้ที่เชื่อถือได้

<InlineServiceLink />

## สรุปและแหล่งข้อมูลเพิ่มเติม

ยินดีด้วย! คุณได้ติดตั้งและตั้งค่า OpenClaw บน VPS หรือ เซิร์ฟเวอร์เฉพาะ ของคุณเรียบร้อยแล้ว เรายังแนะนำให้ดูแหล่งข้อมูลเหล่านี้เพื่อช่วยและแนะนำเพิ่มเติมในกระบวนการตั้งค่าเซิร์ฟเวอร์

- [openclaw.ai](https://https://openclaw.ai/) - เว็บไซต์ทางการ
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - เอกสาร OpenClaw
- [clawhub.com](https://clawhub.com/) - ClawHub - สกิลที่สร้างโดยชุมชน

มีคำถามเฉพาะที่ไม่ได้กล่าวถึงที่นี่ไหม? หากต้องการคำแนะนำหรือความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมช่วยเหลือคุณทุกวัน! 🙂