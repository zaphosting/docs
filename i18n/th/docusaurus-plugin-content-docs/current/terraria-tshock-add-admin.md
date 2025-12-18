---
id: terraria-tshock-add-admin
title: "Terraria: เป็นแอดมินเซิร์ฟเวอร์ (tShock)"
description: "ค้นหาวิธีการมอบสิทธิ์แอดมินบนเซิร์ฟเวอร์ Terraria ของคุณเพื่อควบคุมและจัดการได้เต็มที่ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เป็นแอดมิน (tShock)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
การมอบสิทธิ์แอดมินช่วยให้คุณบริหารจัดการเซิร์ฟเวอร์ได้ง่ายและครบถ้วนด้วยการควบคุมเต็มรูปแบบ ในฐานะแอดมิน คุณสามารถใช้ตัวเลือกและฟังก์ชันทั้งหมดที่เกมมีให้ได้โดยตรงในเกม ขั้นตอนทั้งหมดที่คุณต้องทำเพื่อมอบสิทธิ์แอดมินบนเซิร์ฟเวอร์ของคุณจะถูกอธิบายไว้ด้านล่างนี้  
<InlineVoucher />

## การรับโทเค็น

เพื่อที่จะลงทะเบียนเป็นแอดมินบนเซิร์ฟเวอร์ Terraria ของคุณ คุณต้องมีโทเค็นเฉพาะตัว  
โทเค็นนี้จะถูกสร้างขึ้นเมื่อคุณเริ่มเซิร์ฟเวอร์ครั้งแรก จากนั้นเปิดคอนโซลสดที่คุณจะเจอโทเค็นนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/5cEQYgBgxAYQRcx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/HEYwEWe5c3DPZ6E/preview)

ในตัวอย่างนี้ โทเค็นคือ **4914096**

## ใส่โทเค็นในเกม

เพื่อที่จะลงทะเบียนเป็นแอดมิน ให้เข้าร่วมเซิร์ฟเวอร์ Terraria ของคุณแล้วพิมพ์คำสั่ง **/setup 4914096** ในเกม  
แน่นอนว่าคุณต้องแทนที่โทเค็น **4914096** ด้วยของคุณเอง

![](https://screensaver01.zap-hosting.com/index.php/s/tadkJkQf5cE3dTB/preview)

### ข้อความต่อไปนี้จะปรากฏในแชท:

![](https://screensaver01.zap-hosting.com/index.php/s/JDfKNpaeB63pCeB/preview)


## การเพิ่มแอดมิน

ตอนนี้คุณสามารถเพิ่มแอดมินใหม่ในเซิร์ฟเวอร์ของคุณด้วยคำสั่ง **/user add USERNAME PASSWORD owner**  
โดยที่คุณแทนที่ **USERNAME** ด้วยชื่อของคุณ และ **PASSWORD** คือรหัสผ่านที่คุณเลือกเอง  
ซึ่งจะใช้สำหรับล็อกอินเป็นแอดมินในอนาคต

![](https://screensaver01.zap-hosting.com/index.php/s/iX62CLtn577NfFQ/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/xeP8Y8sx66LkSJQ/preview)

:::info
อย่าลืมว่ารหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษรนะ!
:::

## การล็อกอินเป็นแอดมิน

หลังจากที่คุณลงทะเบียนในเกมเป็นแอดมินแล้ว คุณสามารถล็อกอินด้วยคำสั่งนี้:  
**/login USERNAME PASSWORD**

แน่นอนว่าคุณต้องแทนที่ **USERNAME** ด้วยชื่อของคุณ และ **PASSWORD** ด้วยรหัสผ่านที่ตั้งไว้ก่อนหน้านี้

![](https://screensaver01.zap-hosting.com/index.php/s/ewTra2Fi2yia9jS/preview)

ตอนนี้คุณล็อกอินเป็นแอดมินบนเซิร์ฟเวอร์ของคุณแล้ว และสามารถจัดการเซิร์ฟเวอร์ด้วยคำสั่งต่างๆ ได้เลย

<InlineVoucher />