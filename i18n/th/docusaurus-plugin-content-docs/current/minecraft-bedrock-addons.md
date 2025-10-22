---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: ติดตั้ง Addons"
description: "ค้นพบวิธีเพิ่มความสนุกให้เซิร์ฟเวอร์เกม Minecraft Bedrock ของคุณด้วย addons เพื่อขยายการเล่นและปรับแต่งโลกของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## แนะนำ
Minecraft Bedrock Edition มีระบบรองรับการม็อดแบบเนทีฟและชุมชนขนาดใหญ่ที่ช่วยให้คุณขยายและเพิ่มความสนุกในการเล่นกับเพื่อน ๆ ได้ ในคู่มือนี้เราจะครอบคลุมขั้นตอนการติดตั้งและเปิดใช้งาน addon บนเซิร์ฟเวอร์เกม Minecraft Bedrock ของคุณ

<InlineVoucher />

## การเตรียมตัว

เพื่อที่จะติดตั้งแผนที่ addon ลงบนเซิร์ฟเวอร์เกม Minecraft: Bedrock ของคุณ คุณต้องเชื่อมต่อผ่าน FTP ก่อน หากคุณยังไม่คุ้นเคย เราแนะนำให้ดูที่คู่มือ [การเข้าถึง FTP](gameserver-ftpaccess.md)

ก่อนจะติดตั้ง คุณต้องหา addons ที่ต้องการติดตั้งบนเซิร์ฟเวอร์ของคุณก่อน เราแนะนำให้ค้นหาได้ที่ [CurseForge](https://www.curseforge.com/minecraft-bedrock) เพราะที่นั่นมีไลบรารี addons และ resource packs ขนาดใหญ่ที่สร้างโดยชุมชน

## การติดตั้ง

มีสองวิธีในการติดตั้ง addon ใน Minecraft Bedrock คุณสามารถติดตั้ง addons ลงในโลกใหม่ ซึ่งทำได้ง่ายมาก หรือจะติดตั้งลงในโลกที่มีอยู่แล้ว ซึ่งจะยากกว่า

## ใช้โลกใหม่ (ง่าย)

เพื่อสร้างโลกใหม่พร้อม addons คุณแค่เปิดไฟล์ `.mcaddon` หรือ `.mcpack` ที่ดาวน์โหลดมา
ซึ่งจะเปิด Minecraft Bedrock และนำเข้า addon เข้าสู่เกม

### สร้างโลก

เพื่อสร้างโลกและติดตั้ง addons ให้คลิกที่ `เล่น` แล้วเลือก `สร้างโลกใหม่`
จากนั้นคุณสามารถตั้งค่าต่าง ๆ ของโลกได้ตามปกติ:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### ติดตั้ง Addons

ก่อนกด `สร้าง` คุณต้องไปที่ `Resource packs` หรือ `Behavior packs`
แล้วคลิก `เปิดใช้งาน` ข้างชื่อ addon:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

บาง addon จะมีทั้ง resource pack และ behavior pack คุณต้องเปิดใช้งานทั้งสองอย่าง ถ้าเปิดใช้งานครบแล้วก็สามารถกด `สร้าง` ได้เลย

ถ้าต้องการส่งออกโลกและอัปโหลดไปยังเซิร์ฟเวอร์ของคุณ สามารถใช้คู่มือ [นำเข้าโลกของตัวเอง](minecraft-bedrock-add-world.md)

## ใช้โลกที่มีอยู่แล้ว (ยาก)

การติดตั้ง addon ลงในโลกที่มีอยู่แล้วจะยากกว่า แต่ข้อดีคือคุณสามารถเล่นกับ addon พร้อมเก็บความคืบหน้าที่มีอยู่ได้

### ติดตั้ง 7-zip

เพื่อเปิดไฟล์ addon ในโลก Minecraft ที่มีอยู่ คุณต้องติดตั้ง 7-zip ก่อน
ขั้นตอนติดตั้งง่ายมาก แค่เข้าไปที่ [หน้าโหลด 7-zip](https://www.7-zip.org/) เพื่อดาวน์โหลดเวอร์ชันล่าสุด:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

ดาวน์โหลดเสร็จแล้ว เปิดไฟล์แล้วกด **ติดตั้ง**

### แตกไฟล์ Addon

เมื่อดาวน์โหลด addon ที่ต้องการแล้ว ให้คลิกขวาที่ไฟล์ `.mcaddon` เลือก `7-zip` แล้วกด `Extract to FOLDERNAME`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

ถ้า addon มีทั้ง resource pack และ behavior pack คุณต้องทำแบบเดียวกันกับไฟล์ในโฟลเดอร์นั้น เพราะเป็นไฟล์ `.mcpack` เหมือนกัน:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

ความแตกต่างระหว่าง resource packs กับ behavior packs ดูได้จากชื่อโฟลเดอร์ Resource Pack จะมี `RP` ในชื่อ ส่วน behavior pack จะมี `BP`

<Tabs>
  <TabItem value="resource-pack" label="Resource Pack" default>

### อัปโหลด Resource Pack

เพื่ออัปโหลด resource pack ให้ไปที่โฟลเดอร์นี้ใน FTP client ของคุณ:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

จากนั้นลากโฟลเดอร์ RP ลงใน FTP client ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
ตรวจสอบให้แน่ใจว่าอัปโหลดโฟลเดอร์ที่มี resource pack โดยตรง ไม่ใช่แค่ซับโฟลเดอร์
เนื้อหาของโฟลเดอร์ที่อัปโหลดควรมีลักษณะแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### เปิดใช้งาน Resource Pack

เพื่อเปิดใช้งาน resource pack ให้เปิดไฟล์ `manifest.json` ในโฟลเดอร์ RP จากนั้นไปที่โฟลเดอร์โลกใน FTP client:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

เมื่อเข้าไปแล้ว ให้เปิดไฟล์ `world_resource_packs.json`
ถ้ายังไม่เคยติดตั้ง addon มาก่อน คุณต้องสร้างไฟล์นี้ขึ้นมาเอง แล้ววางข้อความนี้ลงไป:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

แทนที่ค่า `pack_id` และ `version` ด้วยค่าจากไฟล์ manifest.json ที่เปิดไว้ก่อนหน้านี้:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
ถ้าต้องการติดตั้งหลายแพ็ค สามารถเพิ่มค่าได้หลายชุด
สำคัญมากที่ต้องมีเครื่องหมายจุลภาค `,` คั่นระหว่างค่า แต่ห้ามใส่จุลภาคที่บรรทัดสุดท้าย:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Behavior Pack">

### อัปโหลด Behavior Pack

เพื่ออัปโหลด behavior pack ให้ไปที่โฟลเดอร์นี้ใน FTP client ของคุณ:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

จากนั้นลากโฟลเดอร์ BP ลงใน FTP client ได้เลย:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
ตรวจสอบให้แน่ใจว่าอัปโหลดโฟลเดอร์ที่มี behavior pack โดยตรง ไม่ใช่แค่ซับโฟลเดอร์
เนื้อหาของโฟลเดอร์ที่อัปโหลดควรมีลักษณะแบบนี้:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### เปิดใช้งาน Behavior Pack

เพื่อเปิดใช้งาน behavior pack ให้เปิดไฟล์ `manifest.json` ในโฟลเดอร์ BP จากนั้นไปที่โฟลเดอร์โลกใน FTP client:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

เมื่อเข้าไปแล้ว ให้เปิดไฟล์ `world_behavior_packs.json`
ถ้ายังไม่เคยติดตั้ง addon มาก่อน คุณต้องสร้างไฟล์นี้ขึ้นมาเอง แล้ววางข้อความนี้ลงไป:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

แทนที่ค่า `pack_id` และ `version` ด้วยค่าจากไฟล์ manifest.json ที่เปิดไว้ก่อนหน้านี้:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
ถ้าต้องการติดตั้งหลายแพ็ค สามารถเพิ่มค่าได้หลายชุด
สำคัญมากที่ต้องมีเครื่องหมายจุลภาค `,` คั่นระหว่างค่า แต่ห้ามใส่จุลภาคที่บรรทัดสุดท้าย:

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### ตรวจสอบการเปลี่ยนแปลง

สตาร์ทเซิร์ฟเวอร์เกมของคุณ เชื่อมต่อเข้าไป และตรวจสอบว่า addons ถูกติดตั้งเรียบร้อยแล้ว ทดสอบฟีเจอร์หรือทรัพยากรใหม่ ๆ เพื่อให้แน่ใจว่าทุกอย่างทำงานได้ตามที่คาดไว้ ถ้ามีปัญหา ให้ตรวจสอบขั้นตอนอีกครั้งว่าคุณอัปโหลดไฟล์ถูกต้องหรือไม่ และลองดูข้อผิดพลาดในคอนโซลเซิร์ฟเวอร์

## สรุป

การติดตั้ง addons บนเซิร์ฟเวอร์เกม Minecraft Bedrock เป็นวิธีที่เจ๋งมากในการขยายประสบการณ์การเล่นและเพิ่มเนื้อหาใหม่ ๆ ด้วยคู่มือนี้ คุณสามารถติดตั้ง addons และปรับแต่งเซิร์ฟเวอร์ของคุณได้ง่าย ๆ หากมีคำถามหรืออยากได้ความช่วยเหลือเพิ่มเติม ติดต่อทีมซัพพอร์ตของเราได้เลย พร้อมให้บริการทุกวัน! 🙂

<InlineVoucher />