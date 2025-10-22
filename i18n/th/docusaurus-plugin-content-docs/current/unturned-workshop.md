---
id: unturned-workshop
title: "Unturned: ติดตั้งเนื้อหา Workshop บนเซิร์ฟเวอร์"
description: "ค้นพบวิธีเพิ่มความเจ๋งให้เซิร์ฟเวอร์ Unturned ของคุณด้วยเนื้อหา Steam Workshop แบบกำหนดเอง เพื่อประสบการณ์เล่นเกมที่ใช่สำหรับคุณ → เรียนรู้เพิ่มเติมเลย"
sidebar_label: เนื้อหา Workshop
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Steam Workshop เปิดโอกาสให้คุณปรับแต่งเซิร์ฟเวอร์ได้มากขึ้นอีกขั้น ด้านล่างนี้เราจะอธิบายวิธีเพิ่มเนื้อหาให้เซิร์ฟเวอร์ของคุณด้วยการใช้ Steam Workshop

### การเตรียมตัว

มีแหล่งต่างๆ ที่คุณสามารถดาวน์โหลดม็อด, แผนที่, โมเดล ฯลฯ ได้ แหล่งที่ได้รับความนิยมที่สุดคือ Steam Workshop ที่นั่นคุณจะเจอทรัพยากรมากมายที่สามารถติดตั้งบนเซิร์ฟเวอร์ของคุณได้ ก่อนอื่นคุณต้องหาไอเท็ม Workshop ที่ต้องการก่อน Steam Workshop สำหรับ Unturned หาได้ที่นี่:  [Unturned - Steam Workshop](https://steamcommunity.com/app/304930/workshop/)

เมื่อคุณเลือกได้แล้ว ให้คัดลอก ID ของไอเท็ม Workshop นั้น แล้วนำไปเพิ่มในแผงควบคุม ขึ้นอยู่กับว่าคุณเปิดดู Steam Workshop ผ่านเบราว์เซอร์หรือ Steam Client คุณสามารถคัดลอก ID ได้ตามนี้:

- **Steam Client**

  คลิกขวาที่หน้า Steam Workshop ของไอเท็มนั้น แล้วเลือก Copy page url จากนั้นคัดลอก ID จาก URL

  ![](https://screensaver01.zap-hosting.com/index.php/s/QD89esrFTQ8gZfb/preview)

  

- **เบราว์เซอร์**

  คุณจะเห็นชุดตัวเลขหลัง **.../?id=** ในแถบ URL ให้คัดลอกตัวเลขนั้น

  ![](https://screensaver01.zap-hosting.com/index.php/s/XzRRT98ess4dyFX/preview)





### เพิ่มเนื้อหา

เมื่อรวบรวมเนื้อหาที่ต้องการครบแล้ว ก็ถึงเวลานำไปเพิ่มในเซิร์ฟเวอร์ เนื้อหาที่ต้องการจะถูกระบุไว้ในไฟล์ Config ชื่อ **WorkshopDownloadConfig.json** ซึ่งหาได้ในแผงควบคุมใต้เมนู Configs

![](https://screensaver01.zap-hosting.com/index.php/s/T7gsio62gDH7DHb/preview)

เราจะเพิ่ม ID ของแต่ละไอเท็ม Steam Workshop ลงใน 'FileIDs' ผลลัพธ์สุดท้ายจะหน้าตาประมาณนี้:

```json
{
  "File_IDs": [
  	1567256534,
    1234567890, // ตัวอย่าง (Placeholder)
    0987654321  // ตัวอย่าง (Placeholder)
  
  ],
  "Ignore_Children_File_IDs": [],
  "Query_Cache_Max_Age_Seconds": 600,
  "Max_Query_Retries": 2,
  "Use_Cached_Downloads": true,
  "Should_Monitor_Updates": true,
  "Shutdown_Update_Detected_Timer": 600,
  "Shutdown_Update_Detected_Message": "ตรวจพบการอัปเดตไฟล์ Workshop, ปิดเซิร์ฟเวอร์ใน: {0}",
  "Shutdown_Kick_Message": "ปิดเซิร์ฟเวอร์เพื่ออัปเดตไฟล์ Workshop."
}
```

จากนั้นให้สตาร์ทเซิร์ฟเวอร์ เนื้อหาที่เพิ่มจะถูกดาวน์โหลดอัตโนมัติในระหว่างกระบวนการสตาร์ท คุณจะเห็นข้อความนี้ใน Live Console ผลลัพธ์ควรจะเป็นแบบนี้:

```
1 workshop item(s) to download...
Downloading workshop item 1567256534
Successfully downloaded workshop item: 1567256534
```

เนื้อหาได้ถูกดาวน์โหลด ติดตั้งเรียบร้อย และควรจะพร้อมใช้งานแล้ว

<InlineVoucher />