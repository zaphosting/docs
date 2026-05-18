---
id: vserver-linux-python
title: "ตั้งค่า Python บนเซิร์ฟเวอร์ Linux - เปิดใช้งานการพัฒนาและอัตโนมัติ"
description: "เรียนรู้วิธีติดตั้งและอัปเดต Python runtime บนดิสโทร Linux ต่างๆ เพื่อให้สภาพแวดล้อมของคุณปลอดภัยและทันสมัย → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

คู่มือนี้จะบอกขั้นตอนการติดตั้ง Python runtime และ venv คำสั่งเหล่านี้ต้องรันผ่าน SSH ถ้าคุณยังไม่รู้วิธีเชื่อมต่อเซิร์ฟเวอร์ผ่าน SSH ให้ใช้ [คู่มือการเข้าถึงเบื้องต้น (SSH)](vserver-linux-ssh.md) เพื่อเรียนรู้เพิ่มเติม

<InlineVoucher />

## เตรียมตัว

ก่อนติดตั้งอะไรบนเซิร์ฟเวอร์ แนะนำให้รันคำสั่งอัปเดตที่เหมาะกับระบบปฏิบัติการของคุณก่อน เพื่อให้เซิร์ฟเวอร์ของคุณปลอดภัย

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

ดิสโทร Linux ส่วนใหญ่จะมาพร้อม Python ติดตั้งไว้แล้ว แต่เวอร์ชันอาจไม่ใช่เวอร์ชันล่าสุด หรือระบบอาจถูกติดตั้งโดยไม่มีแพ็กเกจบางตัว คุณสามารถตรวจสอบว่ามีการติดตั้ง Python หรือไม่ (`python3 --version`) และรันคำสั่งด้านล่างเพื่ออัปเดตหรือติดตั้ง runtime

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // ตรวจสอบเวอร์ชัน
  python3 --version

  // อัปเดต / ติดตั้ง runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // ตรวจสอบเวอร์ชัน
  python3 --version

  // อัปเดต runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // ตรวจสอบเวอร์ชัน
  python3 --version

  // อัปเดต runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // ตรวจสอบเวอร์ชัน
  python3 --version

  // อัปเดต runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## การรันโค้ด

ตอนนี้คุณติดตั้ง Python บนเซิร์ฟเวอร์เรียบร้อยแล้ว คุณก็สามารถเริ่มรันโปรแกรม Python ของคุณได้เลย

### โหมด Interpreter

การรันคำสั่ง `python3` จะเริ่ม Python interpreter คุณสามารถเขียนโค้ด Python ที่ถูกต้องหลัง `>>>` แล้วกด `Enter` เพื่อรันโค้ดนั้น เมื่อเสร็จแล้วสามารถปิด interpreter ได้โดยรันคำสั่ง `exit()` ในคอนโซล

### รันไฟล์ .py

ถ้าต้องการรันไฟล์ Python `.py` ให้ใช้คำสั่ง `python3 [filename].py` โดยแทนที่ `[filename]` ด้วยชื่อไฟล์หรือพาธของไฟล์ที่ต้องการรัน

:::tip
โปรแกรมส่วนใหญ่ที่คุณเจอออนไลน์สามารถรันด้วยคำสั่ง `python3 main.py` เพราะ `main.py` เป็นจุดเริ่มต้นทั่วไปของโปรแกรม Python หลายๆ ตัว
:::

## สภาพแวดล้อมเสมือน (Virtual environments)

เวลาที่เขียนโปรแกรม Python คุณอาจต้องติดตั้งแพ็กเกจภายนอกจาก pip ซึ่งสามารถติดตั้งแบบทั่วระบบให้ทุกสคริปต์ `.py` ใช้งานได้ หรือจะสร้างสภาพแวดล้อมเสมือน (venv) ก็ได้

### การสร้าง venv

ก่อนอื่นให้เข้าไปที่โฟลเดอร์ที่ต้องการตั้งค่า venv ด้วยคำสั่ง `cd` แล้วรัน `python3 -m venv .` เพื่อสร้างไฟล์ที่จำเป็นในตำแหน่งนั้น

### การเปิดใช้งาน & ปิดใช้งาน

ถ้าต้องการรันคำสั่งอย่าง `pip install` ภายใน venv ต้องเปิดใช้งานก่อนด้วยคำสั่ง `source /bin/activate` ตอนนี้คอนโซลจะทำงานเฉพาะใน venv เท่านั้น และสคริปต์จะเข้าถึงแพ็กเกจที่ติดตั้งในพื้นที่นี้เท่านั้น

เมื่อทำงานเสร็จแล้ว สามารถออกจาก venv ได้ด้วยคำสั่ง `deactivate`

## สรุป

ยินดีด้วย คุณติดตั้งและตั้งค่า Python สำเร็จแล้ว! ถ้ามีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />