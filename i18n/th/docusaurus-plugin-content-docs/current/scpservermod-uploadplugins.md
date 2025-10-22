---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: การติดตั้งปลั๊กอินบนเซิร์ฟเวอร์"
description: "ค้นพบวิธีติดตั้งและตั้งค่า SMOD ปลั๊กอินสำหรับเซิร์ฟเวอร์ SCP ของคุณ เพื่อเพิ่มประสบการณ์การเล่นและฟีเจอร์ของเซิร์ฟเวอร์ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งปลั๊กอิน
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
เอกสารนี้ถูกเก็บถาวรแล้ว เอกสารจะถูกเก็บถาวรเมื่อไม่เกี่ยวข้อง, ไม่ถูกต้อง หรือไม่อัปเดตอีกต่อไป สาเหตุที่เก็บถาวรคือ:

เหตุผล: ส่วนขยาย Servermod สำหรับ SCP ถูกละทิ้งและจะไม่มีการดูแลรักษาอีกต่อไป เราแนะนำให้เปลี่ยนไปใช้ **[SCP:EXILED](exiled-plugins.md)** แทน
::::

<InlineVoucher />

## เชื่อมต่อกับ FTP

ก่อนที่จะติดตั้งปลั๊กอินได้ ต้องตั้งค่า [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md) ก่อน

หลังจากตั้งค่าเสร็จแล้ว คุณสามารถเชื่อมต่อและเปิดโฟลเดอร์เซิร์ฟเวอร์นี้ได้
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## การติดตั้งปลั๊กอิน

### การค้นหาปลั๊กอิน

อันดับแรก คุณต้องหาปลั๊กอินที่รองรับ SMOD

ที่ที่ดีที่สุดในการหาปลั๊กอินเหล่านี้คือใน [Discord ของพวกเขา](https://discord.gg/T9aurNf)

:::info
นี่เป็นเพียงที่เดียวที่คุณสามารถหาปลั๊กอินได้ พวกมันอาจจะมีที่อื่นด้วย สำคัญมากที่จะต้องตรวจสอบให้แน่ใจว่าปลั๊กอินนั้นรองรับเวอร์ชัน SMOD ของคุณ
:::

ในตัวอย่างนี้ เราจะใช้ปลั๊กอินนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### การอัปโหลดปลั๊กอิน

เมื่อคุณได้ปลั๊กอินที่ต้องการแล้ว ให้ทำการอัปโหลดไปยัง FTP เซิร์ฟเวอร์ของคุณ คุณสามารถอัปโหลดโดยการ **ลาก&วาง** ลงในโฟลเดอร์ **sm_plugins**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
หมายเหตุ: หลังจากติดตั้งปลั๊กอินใด ๆ คุณจะต้อง **รีสตาร์ทเซิร์ฟเวอร์** เพื่อให้ปลั๊กอินนั้น **ทำงานได้**
:::

### การตั้งค่าปลั๊กอิน

ขึ้นอยู่กับปลั๊กอิน อาจมีการตั้งค่าต่าง ๆ ที่คุณต้องเพิ่มในไฟล์ config_gameplay.txt

ในตัวอย่างปลั๊กอินนี้ มีการกำหนดค่าดังนี้

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

เพื่อเพิ่มค่าพวกนี้ เราจะต้องแก้ไขไฟล์ config_gameplay.txt

คุณสามารถหาไฟล์นี้ได้จากแท็บ **Configs** ทางซ้ายมือ

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

แล้วเราจะเจอไฟล์ **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
การตั้งค่าต่าง ๆ สามารถเขียนไว้ที่ไหนก็ได้ แต่เพื่อความเป็นระเบียบ เราจะเขียนไว้ใต้หัวข้อ '#Misc gameplay settings' ในไฟล์ config_gameplay.txt
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
หมายเหตุ: ขึ้นอยู่กับปลั๊กอิน การตั้งค่าของคุณอาจแตกต่างกันเสมอ ควรอ่านคำแนะนำของปลั๊กอินนั้น ๆ เพื่อเพิ่มการตั้งค่าได้ถูกต้อง
:::

หลังจากกำหนดค่าต่าง ๆ แล้ว ให้รีสตาร์ทเซิร์ฟเวอร์ (หรือเริ่มเซิร์ฟเวอร์) แล้วตรวจสอบได้เลยในเกม!

<InlineVoucher />