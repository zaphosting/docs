---
id: vserver-windows-plesk
title: "VPS: การติดตั้ง Plesk"
description: "ค้นพบวิธีจัดการเว็บไซต์และเซิร์ฟเวอร์อย่างมีประสิทธิภาพด้วยแพลตฟอร์ม Plesk ที่ใช้งานง่าย เหมาะสำหรับมือใหม่และมือโปร → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Plesk
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

Plesk คือแพลตฟอร์มจัดการเว็บโฮสติ้งและเซิร์ฟเวอร์แบบครบวงจร ที่ช่วยให้ผู้ใช้สามารถจัดการเว็บไซต์ เซิร์ฟเวอร์ บัญชีอีเมล และอื่นๆ ผ่านอินเทอร์เฟซที่ใช้งานง่าย เหมาะกับทั้งมือใหม่และนักพัฒนาเว็บหรือผู้ดูแลระบบที่มีประสบการณ์  
<InlineVoucher />


## เชื่อมต่อกับเซิร์ฟเวอร์

เพื่อทำการติดตั้ง Plesk บนเซิร์ฟเวอร์ คุณต้องเชื่อมต่อกับเซิร์ฟเวอร์ก่อน วิธีการเชื่อมต่ออธิบายอย่างละเอียดในคู่มือแยกต่างหากของเรา: [การเข้าถึงเบื้องต้น (RDP)](vserver-windows-userdp.md)

## ตัวติดตั้ง Plesk

ถัดไปคุณต้องมีตัวติดตั้ง Plesk ซึ่งจำเป็นสำหรับการติดตั้ง Plesk คุณสามารถดาวน์โหลดได้โดยคลิกที่ [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

ไฟล์ตัวติดตั้งนี้จะถูกเก็บไว้ในโฟลเดอร์ ในตัวอย่างของเราใช้โฟลเดอร์ชื่อ "Plesk" ที่สร้างไว้บนเดสก์ท็อป เส้นทางไปยังไฟล์นี้จะสำคัญสำหรับขั้นตอนถัดไป

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### เปิด Command Prompt

ตอนนี้ต้องเปิดคอนโซล CMD เพื่อทำการติดตั้ง  
สามารถเปิดได้โดยกดปุ่มลัด [Windows] + [R] หรือค้นหาคำว่า "command" ในช่องค้นหาของวินโดวส์

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### การติดตั้ง Plesk

ในคอนโซล CMD นี้ คุณต้องเปลี่ยนไปยังไดเรกทอรีที่เก็บตัวติดตั้ง Plesk ในตัวอย่างของเราอยู่ในโฟลเดอร์ "Plesk" บน "Desktop"

เปลี่ยนไดเรกทอรีใน CMD ด้วยคำสั่ง "*cd*"

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

เมื่ออยู่ในไดเรกทอรีที่ถูกต้อง ขั้นตอนสุดท้ายคือการรันคำสั่งติดตั้ง ซึ่งจะเรียกใช้ plesk-installer.exe และติดตั้งเวอร์ชันล่าสุดของ Plesk โดยอัตโนมัติ

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

คำสั่ง: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
กระบวนการติดตั้งอาจใช้เวลาประมาณ 30 ถึง 60 นาที หลังจากนั้น Plesk จะถูกติดตั้งและพร้อมใช้งาน
:::


## สรุป

ยินดีด้วย คุณได้ติดตั้งและตั้งค่า Plesk บน VPS ของคุณเรียบร้อยแล้ว! หากมีคำถามหรือปัญหาเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน!

<InlineVoucher />