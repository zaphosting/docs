---
id: scp-colored-servername
title: "SCP Secret Laboratory: ชื่อเซิร์ฟเวอร์สีสันสดใส"
description: "เรียนรู้วิธีปรับแต่งชื่อเซิร์ฟเวอร์ของคุณด้วยข้อความสีสันเพื่อความโดดเด่นและสไตล์ที่เจ๋งกว่า → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ชื่อเซิร์ฟเวอร์สีสันสดใส
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
ถ้าต้องการให้เซิร์ฟเวอร์ของคุณแสดงในรายชื่อเซิร์ฟเวอร์สาธารณะ จำเป็นต้องตั้งค่า Pastebin ID คุณสามารถดูคู่มือของเราได้ที่ [Pastebin ID](scp-pastebin.md)

เซิร์ฟเวอร์ต้องปิดอยู่เพื่อให้การเปลี่ยนแปลงมีผล
:::

<InlineVoucher />

เปิดการตั้งค่าเซิร์ฟเวอร์ของคุณและตรวจสอบว่า 'SCP Servername' ว่างเปล่าหรือไม่

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

เมื่อแน่ใจว่าไม่มีอะไรกรอกไว้ ให้ไปที่แท็บ 'Configs' ซึ่งอยู่เมนูถัดลงมาจากการตั้งค่า

ตอนนี้เปิดไฟล์ config_gameplay.txt โดยกดปุ่มสีน้ำเงิน

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

ตอนนี้ตัวแก้ไข Config ของเราเปิดแล้ว คุณสามารถแก้ไขชื่อเซิร์ฟเวอร์ด้วย "server_name" โดยใช้ [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) ซึ่งรองรับการใช้สีต่างๆ ได้หลายสี

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

ในตัวอย่างนี้ ผมอยากให้ "Green Text," "Blue Text" และ "Red Text" แสดงผลด้วยสีที่ตรงกัน

วิธีทำคือใช้แท็ก `<color="COLOR">ข้อความของคุณ</color>` คุณสามารถดูสีที่ใช้ได้ทั้งหมด [ที่นี่](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) นอกจากนี้ยังสามารถเปลี่ยนแปลงแอตทริบิวต์อื่นๆ เช่น ขนาดตัวอักษรได้ด้วย
:::info
สิ่งสำคัญคือต้องจำไว้ว่าต้องใส่เครื่องหมายคำพูด " " รอบๆ สีที่แท้จริงในแท็ก ตามตัวอย่างข้างบน
:::

เมื่อคุณปรับแต่งเสร็จแล้ว ให้บันทึกการเปลี่ยนแปลง

:::info
เริ่มเซิร์ฟเวอร์ของคุณใหม่ แล้วชื่อเซิร์ฟเวอร์จะมีสีสันตามที่ตั้งค่าไว้
:::

<InlineVoucher />