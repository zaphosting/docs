---
id: dedicated-linux-debian
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Debian"
description: "เรียนรู้วิธีติดตั้งและตั้งค่า Debian OS บนเซิร์ฟเวอร์เฉพาะของคุณเพื่อประสิทธิภาพและความน่าเชื่อถือสูงสุด → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## บทนำ

ต่อไปนี้จะอธิบายทีละขั้นตอนเกี่ยวกับวิธีการติดตั้งและตั้งค่าระบบปฏิบัติการ Debian บนเซิร์ฟเวอร์เฉพาะของคุณ ทำตามคำแนะนำอย่างระมัดระวังเพื่อให้แน่ใจว่าคุณตั้งค่าระบบปฏิบัติการได้สำเร็จและใช้งานได้อย่างเต็มประสิทธิภาพ

:::info

โครงสร้างของคู่มือนี้อ้างอิงจากการใช้ระบบปฏิบัติการ Debian 10 การติดตั้งจากเวอร์ชันก่อนหน้าหรือใหม่กว่าอาจมีความแตกต่างเล็กน้อยในกระบวนการ

:::

<InlineVoucher />

## การเตรียมตัว

สำหรับการติดตั้งและตั้งค่าระบบปฏิบัติการ สิ่งสำคัญเบื้องต้นคือการเมานต์ไฟล์ ISO ของระบบปฏิบัติการนั้น มีหลายวิธีที่สามารถเมานต์ได้:

1. เมานต์ผ่านการตั้งค่าเริ่มต้น
2. เมานต์ผ่าน iLO (Virtual Media)
3. เมานต์ผ่าน iLO (Remote Console)

ถ้าคุณยังไม่คุ้นเคยกับการเมานต์ไฟล์ ISO แนะนำให้ดูที่ [การตั้งค่าเริ่มต้น](dedicated-setup.md) หรือ [ISO ของตัวเอง](dedicated-iso.md) คู่มือของเรา



## การติดตั้ง

เมื่อโหลดไฟล์ ISO สำเร็จ เซิร์ฟเวอร์จะเข้าสู่กระบวนการตั้งค่า

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

ในตัวอย่างนี้ เราจะทำการติดตั้งโดยใช้ตัวเลือก "classic" install

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

เลือกภาษาที่คุณต้องการให้ตัวช่วยติดตั้งแสดงผล โปรดจำไว้ว่าภาษานี้จะส่งผลต่อระบบที่ติดตั้งในภายหลัง

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

สถานที่ที่เราต้องการไม่ได้อยู่ในหน้าตัวเลือกแรก ดังนั้นเราจะไปหน้าถัดไปโดยเลือก "Other"

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

ในตัวอย่างนี้เราเลือกตัวเลือก "Europe"

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

ขึ้นอยู่กับโซนเวลาที่ต้องการ เราเลือกโซนเวลาของเยอรมนีในตัวอย่างนี้

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

เราเลือกสหรัฐอเมริกาเป็น locale

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

ในกรณีนี้เราเลือกเลย์เอาต์คีย์บอร์ดแบบเยอรมันซึ่งเป็นเลย์เอาต์ QWERTZ ถ้าคุณมาจากอเมริกา เลย์เอาต์เริ่มต้นจะเป็น QWERTY

:::info
เซิร์ฟเวอร์ของคุณกำลังเตรียมส่วนประกอบบางอย่างที่จำเป็นสำหรับการติดตั้ง อาจใช้เวลาสักครู่
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

เซิร์ฟเวอร์ของคุณจะตั้งค่าอินเทอร์เฟซเครือข่ายโดยอัตโนมัติผ่าน DHCP เลือก `eno1` ซึ่งเป็นอะแดปเตอร์เครือข่ายเริ่มต้นของเซิร์ฟเวอร์เฉพาะ ZAP ของคุณ ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

สามารถแก้ไข hostname ได้ถ้าต้องการ แต่ไม่จำเป็นต้องเปลี่ยน

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

ชื่อโดเมนก็ไม่จำเป็นต้องเปลี่ยนเช่นกัน

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

ที่นี่คุณต้องตั้งรหัสผ่านสำหรับบัญชี "root" ของคุณ จดรหัสผ่านที่เลือกไว้ให้ดี

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

เพื่อยืนยันรหัสผ่าน คุณต้องพิมพ์อีกครั้ง

:::info
ตัวช่วยติดตั้งจะขอให้คุณสร้างบัญชีผู้ใช้ที่สอง
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

ตอนนี้ใส่ชื่อเจ้าของสำหรับบัญชีผู้ใช้ปกติ คุณสามารถเลือกชื่ออะไรก็ได้ตามใจชอบ

:::info
แน่นอนว่าคุณสามารถใช้บัญชี "root" ได้ในที่สุด
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

ตอนนี้ใส่ชื่อผู้ใช้ของบัญชีนี้ เลือกรหัสผ่านที่คุณต้องการและยืนยันอีกครั้ง เซิร์ฟเวอร์ของคุณจะเตรียมขั้นตอนการติดตั้งถัดไป

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

ตอนนี้คุณสามารถสร้างพาร์ติชัน หรือจะใช้ SSD ทั้งหมดเป็นพาร์ติชันเดียวก็ได้ ถ้าไม่ต้องการเปลี่ยนแปลงอะไรในพาร์ติชัน ให้เลือก "Guided - Use entire disk"

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

เลือก SSD ที่ติดตั้งในเซิร์ฟเวอร์ของคุณ ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

โดยทั่วไปเก็บโครงสร้างทั้งหมดไว้ในพาร์ติชันเดียวก็โอเค ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

ยืนยันการตั้งค่าด้วย "Finish partitioning and write changes to disk"

:::info
ถ้ามีพาร์ติชันเก่าอยู่บน SSD ของคุณ ให้ยืนยันการเขียนทับด้วย "Yes"
:::

เซิร์ฟเวอร์ของคุณจะทำการแบ่งพาร์ติชันและเตรียมการติดตั้งระบบ

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

ถ้าคุณต้องการเพิ่มสื่อการติดตั้งอื่น ๆ เช่น สำหรับแพ็กเกจบางตัว สามารถทำได้ตอนนี้ แต่โดยปกติคุณสามารถดาวน์โหลดแพ็กเกจทั้งหมดได้สะดวกผ่านตัวจัดการแพ็กเกจ (apt) ภายหลัง

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

เซิร์ฟเวอร์เฉพาะของเราตั้งอยู่ในเยอรมนี ดังนั้นแนะนำให้เลือกมิเรอร์เยอรมันเพื่อให้ได้ความเร็วดาวน์โหลดที่ดีที่สุด

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

โดยทั่วไปเราแนะนำให้ใช้รีโพซิทอรี Debian เริ่มต้น

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

ถ้าคุณต้องการใช้ HTTP proxy สามารถกรอกข้อมูลได้ (ไม่จำเป็น)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

ระบบต้องการเก็บสถิติแบบไม่ระบุตัวตน คุณสามารถปฏิเสธหรือยืนยันได้

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

ตอนนี้เลือกแพ็กเกจที่คุณต้องการติดตั้ง:

* Debian desktop environment  
จะสร้างอินเทอร์เฟซกราฟิกบนเซิร์ฟเวอร์ของคุณ แต่ในตัวอย่างนี้เราใช้แค่เชลล์ของเซิร์ฟเวอร์เท่านั้น

* SSH server  
จำเป็นสำหรับการเชื่อมต่อผ่าน PuTTY เป็นต้น

* Standard system utilities  
จำเป็นสำหรับแพ็กเกจพื้นฐานหลายตัว

เลือกแพ็กเกจโดยใช้ `TAB` และ `arrow keys` กด space bar เพื่อเลือกหรือยกเลิกการเลือก  
เมื่อพอใจกับการเลือกแล้ว กด `TAB` จนถึง Continue แล้วกด Enter เพื่อยืนยัน

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

ยืนยันว่าระบบปฏิบัติการนี้เป็นระบบเดียวบนเซิร์ฟเวอร์ปัจจุบันด้วย `Yes`

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

เลือกตำแหน่งเก็บข้อมูลเริ่มต้นบน SSD ของเรา

:::info
🎉 การติดตั้งระบบ Debian ของคุณเสร็จสมบูรณ์แล้ว
:::

เปิด "Virtual Media" ใน iLO ของคุณและกด "Eject Media" เพื่อถอดไฟล์ ISO ออกจากระบบ

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

เมื่อเสร็จแล้ว เลือก Continue เซิร์ฟเวอร์จะทำการรีบูต

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## การตั้งค่า

### การเข้าสู่ระบบ SSH

เมื่อเซิร์ฟเวอร์รีบูตเสร็จและติดตั้งสำเร็จ คุณจะถูกขอให้เข้าสู่ระบบ

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

แน่นอนว่าคุณต้องการจัดการเซิร์ฟเวอร์ผ่าน SSH เช่น PuTTY ดังนั้นเราต้องเปิดใช้งานการเข้าสู่ระบบนี้ก่อน:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

เปิดไฟล์คอนฟิกของ SSH ด้วย nano `nano /etc/ssh/sshd_config`

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

ค้นหา `#PermitRootLogin no` แล้วเปลี่ยนเป็น `PermitRootLogin yes`

กด `CTRL + X` แล้วยืนยันการเปลี่ยนแปลงด้วย `Y`

หลังจากนั้นให้รีสตาร์ทบริการ SSH โดยพิมพ์ `service ssh restart`

ตอนนี้การเข้าสู่ระบบ SSH ของคุณเปิดใช้งานแล้ว คุณสามารถเชื่อมต่อผ่าน PuTTY ได้  
ใส่ที่อยู่ IP ของเซิร์ฟเวอร์ที่เห็นในแดชบอร์ด ZAP ของคุณ และใช้ข้อมูลล็อกอินที่ตั้งไว้ก่อนหน้า

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
ถ้ามีคำถามหรือปัญหาเพิ่มเติม ทีมซัพพอร์ตของเรายินดีช่วยเหลือคุณเสมอ!
:::





## สรุป

ยินดีด้วย คุณติดตั้งระบบปฏิบัติการ Debian บนเซิร์ฟเวอร์เฉพาะของคุณสำเร็จแล้ว หากมีคำถามหรือขอความช่วยเหลือเพิ่มเติม อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂

<InlineVoucher />