---
id: lastoasis-createrealm
title: "Last Oasis: สร้าง Realm ใหม่"
description: "ค้นพบวิธีสร้างและยืนยัน Realm และ Oasis ของคุณเองใน Last Oasis เพื่อการเล่นเกมและจัดการเซิร์ฟเวอร์ที่ลื่นไหล → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: สร้าง Realm
services:
  - gameserver-lastoasis
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ
เซิร์ฟเวอร์ Last Oasis ต้องการขั้นตอนการตั้งค่าหลายอย่างเพื่อยืนยันตัวตนกับเว็บไซต์ทางการ ในคู่มือนี้เราจะพาไปดูขั้นตอนที่จำเป็นในการสร้าง Realm ของคุณเองบน Last Oasis และตั้งค่า Oasis ภายใน Realm ใหม่ของคุณ

<InlineVoucher />

## การเตรียมตัว
หนึ่งในข้อกำหนดเบื้องต้นสำหรับการตั้งค่า Realm ใหม่คือการสร้างกุญแจจากเว็บไซต์ทางการเพื่อใช้ตรวจสอบและยืนยันตัวตนกับบริการออนไลน์อย่างเป็นทางการ

แค่เข้าไปที่ [เว็บไซต์ทางการของ Last Oasis](https://myrealm.lastoasis.gg/) แล้วล็อกอินด้วยแพลตฟอร์มที่คุณชอบ (Steam หรือ Xbox)

![](https://screensaver01.zap-hosting.com/index.php/s/Z2sPJLFks9LY8cg/preview)

## การตั้งค่ากุญแจเซิร์ฟเวอร์
เมื่อคุณล็อกอินแล้ว คุณจะได้ **CustomerKey** ซึ่งเป็นกุญแจสำหรับเซิร์ฟเวอร์เกมของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/DgdDoCHf7DDjZ2s/preview)

แค่เข้าไปที่ส่วน **Settings** ในเว็บอินเทอร์เฟซของเซิร์ฟเวอร์เกมของคุณ แล้วใส่โค้ดนี้ในช่อง **Customer Key** อย่าลืมกดบันทึกหลังจากเปลี่ยนแปลง

## การตั้งค่ากุญแจผู้ให้บริการ
คุณยังต้องสร้างกุญแจผู้ให้บริการเพื่อระบุเซิร์ฟเวอร์เกมของคุณอย่างเฉพาะเจาะจง ใช้ปุ่ม **Add Key** เพื่อเปิดเมนู

![](https://screensaver01.zap-hosting.com/index.php/s/JMQPTZrHcCxgEz2/preview)

ในเมนู ให้กรอกชื่อและคำอธิบายที่มีประโยชน์สำหรับกุญแจ แล้วกด **Add**

![](https://screensaver01.zap-hosting.com/index.php/s/bfiaA2gjjjxESpM/preview)

:::tip
ถ้าคุณอยากเชื่อมต่อ Oasis หลายแห่งใน Realm ของคุณและเปิดใช้งานพร้อมกัน ให้ใช้ [คู่มือ Multiple Oases](lastoasis-multiple-oases.md) ของเราเพื่อเรียนรู้วิธีเปิดใช้งาน
:::

จากนั้นกลับไปที่ส่วน **Settings** ในเว็บอินเทอร์เฟซของเซิร์ฟเวอร์เกม แล้วใส่โค้ดนี้ในช่อง **ProviderKey** อย่าลืมกดบันทึกหลังจากเปลี่ยนแปลง

## การสร้าง Realm
ตอนนี้คุณสามารถสร้าง Realm ได้แล้ว ที่เว็บไซต์ [Last Oasis ทางการ](https://myrealm.lastoasis.gg/) ให้ไปที่ส่วน **Realms** แล้วสร้าง Realm ใหม่

![](https://screensaver01.zap-hosting.com/index.php/s/ydzjKZTgG4L7QpQ/preview)

เลือกชื่อและกรอกข้อมูลเพิ่มเติมตามต้องการ เมื่อพร้อมแล้วกดบันทึก Realm นี้จำเป็นเพื่อให้คุณเชื่อมต่อกับเซิร์ฟเวอร์ของคุณได้

![](https://screensaver01.zap-hosting.com/index.php/s/4rJq5r2zfHx66Qs/preview)

เมื่อคุณสร้าง Realm แล้ว คุณจะเห็นภาพรวมของ Realm ทั้งหมดที่คุณสามารถปรับแต่งการตั้งค่าเพิ่มเติมและดูข้อมูลที่เป็นประโยชน์ได้

![](https://screensaver01.zap-hosting.com/index.php/s/j5egcHeicf3QPiR/preview)

## การสร้าง Oasis
ขั้นตอนสุดท้ายคือการสร้าง Oasis ภายใน Realm ของคุณ สำหรับเซิร์ฟเวอร์เกมแต่ละเครื่องที่คุณเป็นเจ้าของ คุณต้องสร้าง Oasis แยกต่างหาก เช่น ถ้าคุณมีเซิร์ฟเวอร์เกม 2 เครื่อง คุณควรสร้าง Oasis แยกสำหรับแต่ละเครื่อง

แค่กดปุ่ม **Manage** ในภาพรวม Realm

![](https://screensaver01.zap-hosting.com/index.php/s/GNDZ7DaeLT2qAoC/preview)

ในหน้าที่เปิดขึ้นมา เลือกตำแหน่งที่ต้องการสำหรับ Oasis ใหม่ของคุณ แล้วกด **Add** เพื่อยืนยัน

![](https://screensaver01.zap-hosting.com/index.php/s/dXKXKod6y8NE8SC/preview)

จะมีหน้าต่างใหม่ขึ้นมาให้คุณตั้งชื่อและเลือกแผนที่

![](https://screensaver01.zap-hosting.com/index.php/s/aKJmGmGQmz65Xnz/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/Hrq49c3TArdYXdG/preview)

เมื่อยืนยันแล้ว คุณก็สามารถกด **Add Oasis** เพื่อสร้าง Oasis และเปิดใช้งานด้วยปุ่ม **Activate**

![](https://screensaver01.zap-hosting.com/index.php/s/tfEXd4GgAMDd8sE/preview)

:::tip
ถ้าคุณอยากเชื่อมต่อ Oasis หลายแห่งใน Realm ของคุณและเปิดใช้งานพร้อมกัน ให้ใช้ [คู่มือ Multiple Oases](lastoasis-multiple-oases.md) ของเราเพื่อเรียนรู้วิธีเปิดใช้งาน
:::

คุณได้ตั้งค่า Realm และ Oasis ใหม่สำหรับเซิร์ฟเวอร์เกม Last Oasis ของคุณเรียบร้อยแล้ว

<InlineVoucher />