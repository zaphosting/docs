---
id: vserver-windows-javascript
title: 'VPS: การติดตั้ง JavaScript'
description: "ค้นพบวิธีการติดตั้ง Node.js, Deno และ Bun บน Windows เพื่อเซ็ตอัพสภาพแวดล้อมรันไทม์ JavaScript ของคุณอย่างมีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คู่มือนี้จะบอกขั้นตอนการติดตั้ง Node.js, Deno และ Bun บน Windows ขั้นตอนด้านล่างต้องทำผ่าน RDP หากคุณไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน RDP ลองดูที่ [Initial Access (RDP)](vserver-windows-userdp.md) คู่มือของเรา
<InlineVoucher />

## การติดตั้ง

ก่อนอื่นคุณต้องเลือกว่าจะติดตั้ง JavaScript runtime ตัวไหน มีแหล่งข้อมูลออนไลน์มากมายที่อธิบายแต่ละตัวอย่างละเอียด แต่คุณก็สามารถอ่านคู่มือนี้ได้เพราะจะรวมคำสั่งใช้งานพื้นฐานและตัวอย่างโค้ด เราแนะนำให้ใช้ Node.js เพราะเป็นตัวที่ใช้กันแพร่หลายและเป็นที่นิยมมาก

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## การติดตั้ง Node.js Runtime

### ขั้นตอนที่ 1: ดาวน์โหลดไฟล์
เปิดเบราว์เซอร์ที่คุณชอบ (ผมจะใช้ Chrome สำหรับคู่มือนี้) แล้วไปที่ [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

คลิกที่ปุ่ม `Download Node.js (LTS)` แล้วรอจนดาวน์โหลดเสร็จ

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
โดยทั่วไปแนะนำให้ติดตั้งเวอร์ชัน Long Term Support (LTS) ล่าสุดเสมอ
:::

### ขั้นตอนที่ 2: การติดตั้ง Python
รันตัวติดตั้งโดยคลิกที่ไฟล์ จากนั้นจะมีหน้าต่างให้ตั้งค่าบางอย่าง ในหน้า `Welcome` ให้คลิก `Next`

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

อ่านและยอมรับข้อตกลงสิทธิ์ใช้งาน Node.js (โดยติ๊กถูกในช่อง) แล้วคลิก `Next`

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

จากนั้นจะให้เลือกที่ตั้งสำหรับติดตั้ง Node.js

:::note
เราแนะนำให้ใช้ที่ตั้งติดตั้งเริ่มต้น
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

ในหน้าถัดไป คุณสามารถเลือกไม่ติดตั้งบางแพ็กเกจหลักของ Node.js ได้ ถ้าต้องการติดตั้งแบบปกติซึ่งแนะนำ ให้กด `Next` ได้เลย คุณจะเห็นตัวเลือกติดตั้ง Chocolatey ด้วย แต่ไม่จำเป็นต้องติดตั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### ขั้นตอนที่ 3: เสร็จสิ้นการติดตั้ง
ตอนนี้คลิก `Install` แล้วรอให้ติดตั้งเสร็จ อดทนหน่อยนะเพราะอาจใช้เวลาสักพัก :)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

เมื่อติดตั้งเสร็จ กด `Finish` ที่หน้าสุดท้ายแล้วเริ่มใช้ Node.js บนเซิร์ฟเวอร์ของคุณได้เลย

### อัปเดต Node.js เป็นเวอร์ชันล่าสุด

พิมพ์คำสั่ง `node -v` เพื่อดูเวอร์ชัน Node.js ที่ติดตั้งไว้ ควรตรวจสอบเป็นระยะว่าคุณใช้เวอร์ชัน LTS ล่าสุดหรือไม่ หากต้องการอัปเดต ให้ทำตาม [ขั้นตอนติดตั้ง](vserver-windows-javascript.md#installing-nodejs-runtime) อีกครั้ง

### การใช้งาน Node.js & npm

npm คือแพ็กเกจแมเนเจอร์อย่างเป็นทางการของ Node.js ใช้สำหรับติดตั้งแพ็กเกจจากอินเทอร์เน็ต

:::tip
คุณสามารถหาแพ็กเกจ npm ทั้งหมดได้ที่ [เว็บไซต์นี้](https://www.npmjs.com/)
:::

### สร้างโปรเจกต์ใหม่

ทุกครั้งที่เริ่มโปรเจกต์ Node.js ใหม่ ให้สร้างโฟลเดอร์ใหม่ใน File Explorer เปิด Command Prompt หรือ PowerShell ในโฟลเดอร์นั้น แล้วรันคำสั่ง `npm init` เพื่อเริ่มตั้งค่า มันจะถามข้อมูลพื้นฐานเพื่อสร้างไฟล์ `package.json` ซึ่งเป็นไฟล์คอนฟิกสำหรับรัน Node.js

:::tip
บน Windows คลิกที่แถบที่อยู่ของ File Explorer แล้วพิมพ์ `cmd` แล้วกด Enter จะเปิด Command Prompt ในโฟลเดอร์นั้นเลย สะดวกมาก
:::

หลังจากเริ่มโปรเจกต์ใหม่แล้ว คุณสามารถสร้างไฟล์ชื่อ `index.js` แล้วเขียนโค้ดลงไป ตัวอย่างเช่น เราจะสร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าผ่าน localhost ดังนี้

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

ตอนนี้คุณสามารถรันโค้ดนี้ด้วยคำสั่ง `node .` แล้วเปิดเบราว์เซอร์ไปที่ `localhost:80` เพื่อตรวจสอบผลลัพธ์

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
การติดตั้งแพ็กเกจภายนอกจาก npm ใช้คำสั่ง `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## การติดตั้ง Deno Runtime

การติดตั้ง Deno ง่ายมาก แค่พิมพ์คำสั่ง `irm https://deno.land/install.ps1 | iex` ใน PowerShell ใช้แถบค้นหาของ Windows หา `Powershell` เปิดขึ้นมาในโหมดผู้ดูแลระบบ แล้วรันคำสั่งนี้ ตามขั้นตอนที่มันแนะนำ

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
ตรวจสอบเวอร์ชันที่ติดตั้งอยู่ด้วยคำสั่ง `deno --version`
:::

### อัปเดต Deno เป็นเวอร์ชันล่าสุด

อัปเดต Deno ได้ง่ายๆ ด้วยคำสั่ง `deno upgrade`

### การใช้งาน Deno

เริ่มใช้งาน Deno โดยสร้างไฟล์ `index.ts` แล้วเขียนโค้ดลงไป ตัวอย่างเช่น สร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าผ่าน localhost ดังนี้

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

รันโค้ดนี้ด้วยคำสั่ง `deno run --allow-net index.ts` แล้วเปิดเบราว์เซอร์ไปที่ `localhost:80` เพื่อตรวจสอบผลลัพธ์

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno ถูกออกแบบให้ปลอดภัยมากขึ้น จึงต้องระบุสิทธิ์เช่น `--allow-net` เพื่อเข้าถึงโมดูลบางตัว
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## การติดตั้ง Bun Runtime

Bun มีตัวติดตั้งง่ายๆ ด้วยคำสั่งเดียว และยังให้เลือกติดตั้งผ่าน npm ได้ถ้าคุณเคยใช้ Node.js มาก่อน

<Tabs>
<TabItem value="command" label="คำสั่ง" default>

รันคำสั่ง `irm bun.sh/install.ps1|iex` ใน PowerShell เพื่อติดตั้ง Bun บนเซิร์ฟเวอร์ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
เซิร์ฟเวอร์อาจขาดไฟล์ที่จำเป็น Bun จะแจ้งข้อมูลและลิงก์ดาวน์โหลดไฟล์เหล่านั้นเมื่อพยายามรันตัวติดตั้ง

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

ถ้าคุณมี npm อยู่แล้ว ให้รันคำสั่ง `npm install -g bun` เพื่อติดตั้ง Bun

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### การใช้งาน Bun

Bun ถูกออกแบบให้เร็วกว่า JavaScript engine ตัวอื่นๆ และมีการตั้งค่าคล้าย Node.js เพื่อรัน Bun ให้เปิดโฟลเดอร์เปล่าๆ แล้วรันคำสั่ง `bun init` ใน Command Prompt

:::note
ขึ้นอยู่กับภาษาที่เลือก (JS หรือ TS) Bun จะสร้างไฟล์คอนฟิก (jsconfig.json หรือ tsconfig.json)
:::

เริ่มใช้งาน Bun โดยสร้างไฟล์ `index.ts` แล้วเขียนโค้ดลงไป ตัวอย่างเช่น สร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าผ่าน localhost ดังนี้

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

รันโค้ดนี้ด้วยคำสั่ง `bun index.ts` แล้วเปิดเบราว์เซอร์ไปที่ `localhost:80` เพื่อตรวจสอบผลลัพธ์

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า JavaScript บน VPS ของคุณสำเร็จแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />