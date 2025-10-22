---
id: dedicated-windows-plesk
title: "เซิร์ฟเวอร์เฉพาะ: การติดตั้ง Plesk"
description: "ค้นพบวิธีจัดการเว็บไซต์และเซิร์ฟเวอร์อย่างมีประสิทธิภาพด้วย Plesk สำหรับมือใหม่และมือโปร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Plesk คือแพลตฟอร์มจัดการเว็บโฮสติ้งและเซิร์ฟเวอร์แบบครบวงจรที่ช่วยให้ผู้ใช้สามารถจัดการเว็บไซต์ เซิร์ฟเวอร์ บัญชีอีเมล และอื่นๆ ผ่านอินเทอร์เฟซที่ใช้งานง่าย เหมาะสำหรับทั้งมือใหม่และนักพัฒนาเว็บหรือแอดมินระบบที่มีประสบการณ์

<InlineVoucher />

## เชื่อมต่อกับเซิร์ฟเวอร์

เพื่อทำการติดตั้ง Plesk บนเซิร์ฟเวอร์ คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ก่อน วิธีการเชื่อมต่อนี้อธิบายอย่างละเอียดในคู่มือแยกต่างหากของเรา: [การเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md)

## ตัวติดตั้ง Plesk

ต่อไปคุณต้องมีตัวติดตั้ง Plesk ซึ่งจำเป็นสำหรับการติดตั้ง Plesk สามารถดาวน์โหลดได้โดยคลิกที่ [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

ตัวติดตั้งนี้จะถูกเก็บไว้ในโฟลเดอร์ ในตัวอย่างของเราใช้โฟลเดอร์ชื่อ "Plesk" ที่สร้างบนเดสก์ท็อป เส้นทางไปยังไฟล์นี้จะสำคัญสำหรับขั้นตอนถัดไป

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### เปิด Command Prompt

ตอนนี้ต้องเปิดคอนโซล CMD สำหรับการติดตั้ง
สามารถเปิดได้โดยกดปุ่มลัด [Windows] + [R] หรือค้นหาคำว่า "command" ในช่องค้นหาของวินโดวส์

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### การติดตั้ง Plesk

ในคอนโซล CMD นี้ คุณต้องเปลี่ยนไปยังไดเรกทอรีที่เก็บตัวติดตั้ง Plesk ในตัวอย่างของเราอยู่ในโฟลเดอร์ "Plesk" บน "Desktop"

ใช้คำสั่ง "*cd*" เพื่อเข้าไปยังไดเรกทอรีนี้ผ่าน CMD

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

เมื่ออยู่ในไดเรกทอรีที่ถูกต้อง ขั้นตอนสุดท้ายคือการรันคำสั่งติดตั้ง ซึ่งจะเรียกใช้ plesk-installer.exe และติดตั้ง Plesk เวอร์ชันล่าสุดให้อัตโนมัติ

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

คำสั่ง: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
กระบวนการติดตั้งอาจใช้เวลาประมาณ 30 ถึง 60 นาที หลังจากนั้น Plesk จะถูกติดตั้งและพร้อมใช้งาน
:::

## สรุป

ยินดีด้วย คุณได้ติดตั้ง Plesk สำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยเหลือคุณ! 🙂

<InlineVoucher />