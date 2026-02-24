---
id: dedicated-linux-javascript
title: "ตั้งค่า JavaScript Runtime บนเซิร์ฟเวอร์ Linux - เปิดใช้งานการรันแอปเว็บสมัยใหม่"
description: "ค้นพบวิธีติดตั้งและตั้งค่า Node.js, Deno และ Bun บนเซิร์ฟเวอร์ของคุณเพื่อการจัดการ JavaScript runtime ที่มีประสิทธิภาพ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คู่มือนี้จะบอกขั้นตอนการติดตั้ง Node.js, Deno และ Bun คำสั่งเหล่านี้ต้องรันผ่าน SSH หากคุณยังไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน SSH ลองดูที่ [การเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md) ของเราได้เลย



## เตรียมตัว

ก่อนติดตั้งอะไรบนเซิร์ฟเวอร์ แนะนำให้รันคำสั่งอัปเดตที่เหมาะสมกับระบบปฏิบัติการของคุณเพื่อให้เซิร์ฟเวอร์ปลอดภัย

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## การติดตั้ง

ก่อนอื่น คุณต้องเลือกว่าจะติดตั้ง JavaScript runtime ตัวไหน มีแหล่งข้อมูลออนไลน์มากมายที่อธิบายแต่ละตัวอย่างละเอียด แต่คุณก็สามารถอ่านคู่มือนี้ได้เลยเพราะจะรวมคำสั่งใช้งานพื้นฐานและตัวอย่างโค้ด เราแนะนำให้ใช้ NodeJS เพราะเป็นตัวที่ใช้กันแพร่หลายและได้รับความนิยมมาก

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## การติดตั้ง Node.js Runtime

คุณสามารถติดตั้ง Node.js ผ่านตัวจัดการแพ็กเกจของลีนุกซ์ดิสโทรของคุณ หรือใช้ nvm เราแนะนำให้ใช้ apt เพราะมักจะง่ายกว่า

<Tabs>
<TabItem value="apt" label="ตัวจัดการแพ็กเกจ" default>

รันคำสั่งนี้เพื่อเริ่มติดตั้ง Node.js ผ่านตัวจัดการแพ็กเกจ

```
apt install nodejs -y
```

ถ้าต้องการติดตั้งแพ็กเกจ Node.js สำหรับโปรเจกต์ของคุณ คุณจะต้องติดตั้งตัวจัดการแพ็กเกจ npm ด้วย

```
apt install npm
```

### อัปเดต Node.js เป็นเวอร์ชันล่าสุด

รัน `node -v` เพื่อดูเวอร์ชัน Node.js ที่ติดตั้งอยู่ ซึ่งมักจะไม่ใช่เวอร์ชันล่าสุด ดังนั้นคุณต้องอัปเดตเพื่อใช้ฟีเจอร์ใหม่ๆ โชคดีที่แพ็กเกจ npm ชื่อ `n` ช่วยให้ทำได้ง่ายมาก

อันดับแรก ติดตั้งโดยรัน `npm install -g n` จากนั้นรัน `n [version]` โดยแทนที่ `[version]` ด้วยหมายเลขเวอร์ชันที่ต้องการ เพื่อติดตั้ง Node.js เวอร์ชันใดก็ได้

:::tip
แนะนำให้ใช้เวอร์ชัน Long Term Support ล่าสุด โดยรัน `n lts`
:::

</TabItem>
<TabItem value="nvm" label="nvm">

การติดตั้ง Node.js ผ่าน nvm จะให้การควบคุมที่ละเอียดขึ้นสำหรับการมีหลายเวอร์ชัน Node.js พร้อมแพ็กเกจของตัวเอง

ก่อนอื่นตรวจสอบว่าคุณติดตั้ง curl แล้ว จากนั้นรันคำสั่งนี้

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

คำสั่งนี้จะดาวน์โหลดสคริปต์ติดตั้ง nvm จาก GitHub และรันมัน

:::note
ถ้าคำสั่ง nvm ใช้งานไม่ได้หลังติดตั้ง ให้รัน `source ~/.bashrc` เพื่อโหลดไฟล์ config bash ใหม่
:::

เหมือนวิธีก่อนหน้า คุณสามารถรันคำสั่ง (`nvm install v[version]`) เพื่อติดตั้ง Node.js เวอร์ชันใดก็ได้ ถ้าต้องการดูเวอร์ชันทั้งหมดที่ดาวน์โหลดได้ ให้รัน `nvm list-remote` และถ้าต้องการดูเวอร์ชันที่ติดตั้งแล้ว ให้รัน `nvm list`

:::tip
ติดตั้ง Long Term Support ได้ด้วย `nvm install --lts`
:::

</TabItem>
</Tabs>

### การรัน Node.js & npm

npm คือ ตัวจัดการแพ็กเกจอย่างเป็นทางการของ Node.js คุณจะใช้มันเพื่อติดตั้งแพ็กเกจจากอินเทอร์เน็ต

:::note
คุณสามารถหาแพ็กเกจ npm ทั้งหมดได้ที่ [เว็บไซต์](https://www.npmjs.com/)
:::

### สร้างโปรเจกต์ใหม่

ทุกครั้งที่คุณอยากเริ่มโปรเจกต์ Node.js ใหม่ ให้สร้างไดเรกทอรีใหม่ (`mkdir [project-name]`) หรือเข้าไปในโฟลเดอร์ว่างแล้วรันคำสั่ง `npm init` เพื่อเริ่มตั้งค่า มันจะถามข้อมูลพื้นฐานเพื่อสร้างไฟล์ `package.json` ซึ่งเป็นไฟล์ "คอนฟิก" สำหรับรัน Node.js

หลังจากเริ่มโปรเจกต์ใหม่แล้ว คุณสามารถสร้างไฟล์ชื่อ `index.js` แล้วเขียนโค้ดลงไป ตัวอย่างเช่น เราจะสร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าถึงผ่าน localhost ดังนี้

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

ตอนนี้คุณสามารถรันโค้ดนี้ด้วยคำสั่ง `node .` และตรวจสอบผลลัพธ์โดยเปิด `localhost:80` ในเบราว์เซอร์ของคุณ

:::tip
ติดตั้งแพ็กเกจภายนอกจาก npm ด้วยคำสั่ง `npm install [package-name]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## การติดตั้ง Deno Runtime

การติดตั้ง Deno ง่ายมาก แค่พิมพ์ `curl -fsSL https://deno.land/install.sh | sh` ในคอนโซลของคุณ

:::tip
ตรวจสอบเวอร์ชันที่ติดตั้งอยู่ได้ด้วยคำสั่ง `deno --version`
:::

### อัปเดต Deno เป็นเวอร์ชันล่าสุด

อัปเดต Deno ได้ง่ายๆ โดยรัน `deno upgrade`

### การรัน Deno

เริ่มรัน Deno โดยสร้างไฟล์ `index.ts` ใหม่แล้วเขียนโค้ดลงไป ตัวอย่างเช่น เราจะสร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าถึงผ่าน localhost ดังนี้

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

ตอนนี้คุณสามารถรันโค้ดนี้ด้วยคำสั่ง `deno run --allow-net index.ts` และตรวจสอบผลลัพธ์โดยเปิด `localhost:80` ในเบราว์เซอร์ของคุณ

:::info
Deno ถูกออกแบบให้ปลอดภัยขึ้น จึงต้องการสิทธิ์บางอย่าง เช่น `--allow-net` เพื่อเข้าถึงโมดูลบางตัว
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## การติดตั้ง Bun Runtime

Bun มีวิธีติดตั้งอย่างเป็นทางการ 2 วิธี คือ ผ่าน curl หรือ npm

<Tabs>
<TabItem value="curl" label="curl" default>

รัน `curl -fsSL https://bun.sh/install | bash` เพื่อติดตั้ง Bun บนเซิร์ฟเวอร์ของคุณ

:::tip
ถ้าต้องการติดตั้งเวอร์ชันอื่นของ Bun ให้รัน `curl -fsSL https://bun.sh/install | bash -s "bun-v[version]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

ถ้าคุณติดตั้ง npm แล้ว สามารถรัน `npm install -g bun` ได้เลย

</TabItem>
</Tabs>

### การรัน Bun

Bun ถูกออกแบบให้เร็วกว่า JavaScript engine ตัวอื่นๆ และมีการตั้งค่าคล้าย Node.js เพื่อรัน Bun ให้เปิดไดเรกทอรีว่างแล้วรัน `bun init`

:::note
ขึ้นอยู่กับภาษาที่เลือก (JS หรือ TS) Bun จะสร้างไฟล์คอนฟิก (jsconfig.json หรือ tsconfig.json)
:::

เริ่มรัน Bun โดยสร้างไฟล์ `index.ts` ใหม่แล้วเขียนโค้ดลงไป ตัวอย่างเช่น เราจะสร้างเซิร์ฟเวอร์ http ง่ายๆ บนพอร์ต 80 ที่ตอบกลับข้อความทดสอบเมื่อเข้าถึงผ่าน localhost ดังนี้

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

ตอนนี้คุณสามารถรันโค้ดนี้ด้วยคำสั่ง `bun index.ts` และตรวจสอบผลลัพธ์โดยเปิด `localhost:80` ในเบราว์เซอร์ของคุณ

</TabItem>
</Tabs>

ด้วยการทำตามคู่มือนี้ คุณจะติดตั้ง JavaScript runtime ยอดนิยมบนเซิร์ฟเวอร์ Linux ของคุณได้สำเร็จแล้ว  
