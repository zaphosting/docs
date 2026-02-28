---
id: gameserver-tebex
title: 'เซิร์ฟเวอร์เกม: การตั้งค่าเก็บรายได้ด้วย Tebex'
description: "ค้นพบวิธีเก็บรายได้จากเซิร์ฟเวอร์เกมของคุณด้วย Tebex และเพิ่มรายได้จากการขายไอเท็มและอันดับในเกม → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: การเก็บรายได้ด้วย Tebex
services:
  - gameserver
---

import Cards, { Card } from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Tebex คือแพลตฟอร์มที่ช่วยให้คุณเก็บรายได้จากเซิร์ฟเวอร์เกมของคุณและสร้างรายได้จริงจากไอเท็มในเกม อันดับ และอื่นๆ อีกมากมาย แพลตฟอร์มนี้มาพร้อมกับเว็บสโตร์มืออาชีพที่คุณสามารถขายสินค้าและดูผลการดำเนินงานของร้านได้ เข้าไปที่ [tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a) เพื่อดูข้อมูลเพิ่มเติมเกี่ยวกับวิธีการทำงาน

<InlineVoucher />

## เกมที่รองรับ

เกมต่อไปนี้ที่เรามีให้บริการสำหรับผลิตภัณฑ์เซิร์ฟเวอร์เกมของเราเอง รองรับโดย Tebex สำหรับข้อมูลเพิ่มเติมและเกมอื่นๆ ที่รองรับ เราแนะนำให้ดูที่ [เว็บไซต์ทางการ](https://www.tebex.io/game-servers) 

<Cards columns={2} layout="horizontal">
  <Card title="ARK" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
  <Card title="CS:GO" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
  <Card title="Minecraft" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
  <Card title="FiveM" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
  <Card title="Hurtworld" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
  <Card title="Rust" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
  <Card title="Space Engineers" description="ตัวอย่าง" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
  <Card title="Team Fortress 2" description="ตัวอย่าง" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
  <Card title="Unturned" description="ตัวอย่าง" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
  <Card title="Garry's Mod" description="ตัวอย่าง" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## การเชื่อมต่อกับ Tebex

การตั้งค่า Tebex กับ ZAP ง่ายมาก การติดตั้งและการตั้งค่าต้องทำเพียงไม่กี่ขั้นตอน ซึ่งจะอธิบายอย่างละเอียดด้านล่างนี้

### เลือกเกมที่รองรับ

เลือกเกมที่รองรับโดย Tebex และเพิ่มเข้าไปในเซิร์ฟเวอร์เกมของคุณ คลิกที่เซิร์ฟเวอร์เกมของคุณแล้วเลือก `Games` ในแถบด้านข้าง เลือกเกมที่รองรับภายใต้ `Available Games` แล้วกดปุ่มดาวน์โหลดเพื่อติดตั้ง

### ขอคำเชิญจาก Tebex

ถ้าเกมที่คุณเลือกรองรับ Tebex คุณจะเห็นแท็บชื่อ "Tebex Shop" ในแถบด้านข้าง คลิกที่รูปภาพที่ปรากฏขึ้นเมื่อโหลดหน้าเว็บ

![](https://screensaver01.zap-hosting.com/index.php/s/SztAWeeNX8fx5kF/preview)

Tebex จะส่งคำเชิญไปยังอีเมลที่เชื่อมโยงกับบัญชีลูกค้า ZAP-Hosting ของคุณ กรุณาทำตามคำแนะนำในอีเมลเพื่อเปิดใช้งานบัญชี Tebex ของคุณ คุณจะได้รับการแนะนำผ่านการตั้งค่าพื้นฐานของร้านค้า

### ติดตั้งปลั๊กอิน Tebex

กระบวนการนี้โดยปกติจะเป็นแบบอัตโนมัติ หากเราไม่มีปลั๊กอินสำหรับการตั้งค่าอัตโนมัติบนเซิร์ฟเวอร์ของเราหรือถ้าเราไม่ได้รับ pingback จาก Tebex คุณจะต้องตั้งค่าด้วยตนเอง

### ตั้งค่าปลั๊กอิน Tebex

ติดตั้งปลั๊กอินเซิร์ฟเวอร์เกมที่เหมาะสมกับเกมของคุณด้วยตนเอง ขั้นตอนการตั้งค่าจะแตกต่างกันไปตามเกม คำแนะนำพื้นฐานเกี่ยวกับการติดตั้งปลั๊กอินสามารถดูได้ที่ [นี่](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition)

## ตรวจสอบการเชื่อมต่อกับ Tebex

สุดท้ายคุณต้องยืนยันว่าคุณติดตั้งปลั๊กอินเซิร์ฟเวอร์เกมสำเร็จแล้ว

![](https://screensaver01.zap-hosting.com/index.php/s/DkDtPMtij2QTKGS/preview)

ในบางกรณีคุณอาจต้องกรอกคีย์ API ของปลั๊กอินเว็บสโตร์ Tebex เพื่อสร้างการเชื่อมต่อจาก ZAP ไปยังร้าน Tebex ของคุณ จากนั้นคุณจะเห็นว่าการเชื่อมต่อสำเร็จ:
![](https://screensaver01.zap-hosting.com/index.php/s/4YS2SwHfSTgn4DE/preview)

## สรุป

คุณได้เชื่อมต่อ Tebex กับบริการเซิร์ฟเวอร์เกมของคุณเรียบร้อยแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />