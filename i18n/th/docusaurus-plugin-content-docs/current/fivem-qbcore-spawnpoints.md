---
id: fivem-qbcore-spawnpoints
title: "FiveM: จัดการและปรับแต่งจุดเกิดด้วย QbCore"
description: "ค้นพบวิธีปรับแต่งและเพิ่มจุดเกิดในเฟรมเวิร์ก QBCore เพื่อประสบการณ์การเล่นเกมที่ดียิ่งขึ้น → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: จุดเกิด
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## แนะนำ

อยากเปลี่ยนจุดเกิดเริ่มต้นหรือเพิ่มจุดเกิดใหม่ใช่ไหม? การจัดการจุดเกิดใน **เฟรมเวิร์ก QBCore** ถูกกำหนดผ่าน resource `qb-spawn` ด้านล่างนี้จะอธิบายวิธีที่คุณสามารถปรับแต่งได้

<InlineVoucher />

## การตั้งค่า

จุดเกิดจะถูกปรับผ่านไฟล์ตั้งค่า `config.lua` ของ resource `qb-spawn` ไฟล์นี้สามารถแก้ไขผ่าน FTP ได้ ถ้าคุณยังไม่รู้วิธีใช้ FTP เราแนะนำให้ดูที่คู่มือ [การเข้าถึง FTP](gameserver-ftpaccess.md)

การตั้งค่าจุดเกิดเริ่มต้นจะมีลักษณะดังนี้:

```
QB.Spawns = {
    ["legion"] = { -- ดัชนีสำหรับตาราง
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- ตำแหน่งที่ผู้เล่นจะเกิด
        location = "legion", -- ตัวนี้คือวิธีที่จาวาสคริปต์รู้ว่าคุณเลือกอันไหน
        label = "Legion Square", -- สิ่งที่ผู้เล่นเห็นในเมนู
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

สมมติว่าคุณอยากเพิ่มจุดเกิดใหม่ คุณก็แค่เพิ่มระเบียนใหม่ในไฟล์ตั้งค่า:

```
["new_spawn_name"] = { -- ต้องไม่ซ้ำกับอันอื่น
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- ตำแหน่งที่ผู้เล่นจะเกิด
    location = "new_spawn_name", -- ต้องไม่ซ้ำกับอันอื่น
    label = "New spawn name", -- ชื่อที่จะโชว์ในเมนูเลือก
},
```

:::info หาตำแหน่งพิกัด
คุณจะต้องใช้ resource ที่เหมาะสมเพื่อหาพิกัดปัจจุบัน มีหลายตัวให้เลือกในอินเทอร์เน็ต เลือกตัวที่เหมาะกับคุณที่สุดได้เลย :)
:::

ผลลัพธ์สุดท้ายจะเป็นแบบนี้:

```
    QB.Spawns = {
    
        ["legion"] = { -- ดัชนีสำหรับตาราง
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- ตำแหน่งที่ผู้เล่นจะเกิด
            location = "legion", -- ตัวนี้คือวิธีที่จาวาสคริปต์รู้ว่าคุณเลือกอันไหน
            label = "Legion Square", -- สิ่งที่ผู้เล่นเห็นในเมนู
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- ต้องไม่ซ้ำกับอันอื่น
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- ตำแหน่งที่ผู้เล่นจะเกิด
        location = "new_spawn_name", -- ต้องไม่ซ้ำกับอันอื่น
        label = "New spawn name", -- ชื่อที่จะโชว์ในเมนูเลือก
         },
    }
```




## สรุป

คุณได้เปลี่ยนจุดเกิดเดิมหรือเพิ่มจุดเกิดใหม่สำเร็จแล้วด้วยวิธีนี้ ถ้ามีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมช่วยเหลือคุณทุกวัน! 🙂

<InlineVoucher />