---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garages - เพิ่มรถใหม่"
description: "ค้นพบวิธีปรับแต่งและขยายโรงรถงานด้วยรถเพิ่มเติมเพื่อเพิ่มประสบการณ์การเล่นเกมของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เพิ่มรถใน Job-Garage
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

อยากเปลี่ยนหรือเพิ่มรถที่มีในโรงรถงานของคุณไหม? ด้านล่างนี้เราจะอธิบายวิธีทำและขั้นตอนที่ต้องทำ!

<InlineVoucher />



## การตั้งค่า

รถเพิ่มเติมจะถูกเพิ่มเข้าไปในโรงรถงานผ่าน FTP โดยให้เชื่อมต่อกับเซิร์ฟเวอร์เกมของคุณผ่าน FTP หากคุณยังไม่รู้วิธีใช้ FTP ลองดูใน [คู่มือการเข้าถึง FTP](gameserver-ftpaccess.md) ของเราได้เลย

เมื่อเชื่อมต่อผ่าน FTP แล้ว ให้ไปที่โฟลเดอร์ resource ของ ESX แล้วเปิดโฟลเดอร์ esx_addons โครงสร้างโฟลเดอร์จะเป็นแบบนี้: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

ตอนนี้เลือกงาน Ambulance หรือ Police เป็นตัวอย่าง แล้วเปิดไฟล์ `config.lua` ในโฟลเดอร์ resources

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



ในไฟล์ config ส่วนของ `Config.AuthorizedVehicles` ต้องถูกปรับแต่ง คุณสามารถค้นหาด้วยฟีเจอร์ค้นหาแล้วปรับหรือเพิ่มตามที่ต้องการได้เลย:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
อย่าลืมใส่เครื่องหมายจุลภาค (,) ที่ท้ายบรรทัดก่อนหน้าทุกครั้งเมื่อเพิ่มรถใหม่ ไม่งั้นอาจเกิดปัญหาได้
:::



## สรุป

ถ้าคุณทำตามขั้นตอนทั้งหมดแล้ว ตอนนี้คุณควรจะปรับแต่งหรือขยายโรงรถงานของคุณได้สำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือทุกวัน! 🙂

<InlineVoucher />