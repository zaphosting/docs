---
id: windrose-world-modifiers
title: "Windrose: ตัวปรับแต่งโลก"
description: "ตั้งค่าตัวปรับแต่งโลกของ Windrose พร้อมอ้างอิงพารามิเตอร์เต็มรูปแบบสำหรับค่าทศนิยม, การตั้งค่าการต่อสู้ และตัวอย่างพารามิเตอร์การปรับขนาดโคออป -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ตัวปรับแต่งโลก
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

ตัวปรับแต่งโลกของ Windrose ช่วยให้คุณปรับแต่งการต่อสู้, การต่อสู้ทางเรือ, การสำรวจ, เควส และการปรับขนาดโคออปได้อย่างละเอียด ในคู่มือนี้ คุณจะได้เรียนรู้วิธีแก้ไขไฟล์ `WorldDescription.json` เข้าใจแต่ละพารามิเตอร์ และนำการตั้งค่าแบบกำหนดเองไปใช้กับเซิร์ฟเวอร์เกม Windrose ของคุณ

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณมีสิ่งต่อไปนี้:

- เซิร์ฟเวอร์เกม Windrose ที่ใช้งานได้บน ZAP-Hosting
- การเข้าถึงการจัดการเซิร์ฟเวอร์เกม
- เซิร์ฟเวอร์ของคุณถูกหยุดก่อนแก้ไขไฟล์
- การเข้าถึงพื้นที่ **Configs** หรือ **File Manager** ในการจัดการเซิร์ฟเวอร์เกม

:::info ตำแหน่งไฟล์การตั้งค่า
ตัวปรับแต่งโลกแบบกำหนดเองจะถูกเก็บไว้ในไฟล์ `WorldDescription.json` ภายใต้บล็อก `WorldSettings`
:::

:::caution หยุดเซิร์ฟเวอร์ก่อนเสมอ
คุณควรหยุดเซิร์ฟเวอร์ก่อนแก้ไขไฟล์ `WorldDescription.json` เพื่อป้องกันการเสียหายของไฟล์หรือการเขียนทับการเปลี่ยนแปลงในระหว่างการเริ่มต้นหรือการบันทึกอัตโนมัติ
:::

## Understanding World Modifiers

การตั้งค่าแบบกำหนดเองแต่ละรายการจะถูกกำหนดแยกกันในไฟล์ `WorldDescription.json` ภายใต้ `WorldSettings` เกมจะแยกค่าตามประเภทดังนี้:

- `float` สำหรับตัวคูณตัวเลข เช่น พลังชีวิตหรือความเสียหาย
- `bool` สำหรับตัวเลือกจริงหรือเท็จ
- `tag` สำหรับค่าความยากที่มีชื่อ เช่น ความยากในการต่อสู้

โครงสร้างนี้สำคัญเพราะแต่ละพารามิเตอร์ต้องอยู่ในส่วนที่ถูกต้อง หากคุณใส่ค่า `float` ใน `bool` หรือใช้แท็กที่ไม่ถูกต้อง การตั้งค่าอาจไม่ทำงานตามที่คาดหวัง

:::note ประเภทพารามิเตอร์
ถ้าคุณไม่คุ้นเคยกับคำว่า *พารามิเตอร์* หมายถึงค่าที่สามารถตั้งค่าได้ซึ่งเกมใช้ ในคู่มือนี้แต่ละพารามิเตอร์ควบคุมส่วนหนึ่งของความยากของโลกหรือพฤติกรรมการเล่นเกม
:::

## Open the World Configuration File

เพื่อใช้ตัวปรับแต่งโลกแบบกำหนดเอง คุณต้องแก้ไขไฟล์โลกที่ถูกต้อง

1. หยุดเซิร์ฟเวอร์ Windrose ของคุณในแผงจัดการเซิร์ฟเวอร์เกม
2. เปิด **File Manager**
3. ไปที่เส้นทางต่อไปนี้:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

แทนที่ค่าตัวแทนดังนี้:

| ตัวแทน | ความหมาย |
| --- | --- |
| `[your_game_version]` | โฟลเดอร์เวอร์ชันเกม Windrose ปัจจุบันของคุณ |
| `[your_world_id]` | รหัสโลกที่คุณต้องการแก้ไข |

:::tip หาตัวโลกที่ถูกต้อง
ถ้าคุณมีหลายโลก ให้แน่ใจว่าแก้ไขไฟล์ `WorldDescription.json` ในโฟลเดอร์ `[your_world_id]` ที่ถูกต้อง มิฉะนั้นการเปลี่ยนแปลงจะส่งผลกับเซฟอื่น
:::

## Edit the WorldSettings Block

ในไฟล์ `WorldDescription.json` ให้ค้นหาบล็อก `WorldSettings` แล้วเพิ่มหรือปรับค่ากำหนดเองของคุณที่นั่น

ใช้โครงสร้างดังนี้:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

หลังบันทึกไฟล์แล้ว ให้เริ่มเซิร์ฟเวอร์ของคุณอีกครั้ง

:::info พฤติกรรมของ Preset
ถ้าคุณตั้งค่ากำหนดเองใดๆ ด้วยตนเอง ค่า `WorldPresetType` จะเปลี่ยนเป็น `Custom` อัตโนมัติเมื่อเซิร์ฟเวอร์เริ่มใหม่ หากคุณต้องการใช้ preset ที่สะอาดแทนค่ากำหนดเอง ควรใช้การตั้งค่า preset ที่เหมาะสมแทนการผสมทั้งสองวิธี
:::

## Full Parameter Reference

ตารางต่อไปนี้เป็นอ้างอิงพารามิเตอร์ตัวปรับแต่งโลกแบบกำหนดเองทั้งหมดที่มี

### Combat Parameters

| พารามิเตอร์ | ส่วน | ค่าเริ่มต้น | ช่วง | ผลกระทบ |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | ตัวคูณพลังชีวิตศัตรู |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | ตัวคูณความเสียหายศัตรู |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | ความก้าวร้าวและความยากของบอส |

`CombatDifficulty` ต้องเขียนเป็นค่าแท็ก เช่น:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

ค่าที่ใช้ได้:

| ความยาก | ค่า TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Naval Combat Parameters

| พารามิเตอร์ | ส่วน | ค่าเริ่มต้น | ช่วง | ผลกระทบ |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | ตัวคูณพลังชีวิตเรือศัตรู |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | ตัวคูณความเสียหายเรือศัตรู |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | จำนวนลูกเรือศัตรูที่ต้องชนะในการบุกเรือ |

การตั้งค่าเหล่านี้เหมาะถ้าคุณอยากให้การต่อสู้ทางทะเลง่ายขึ้นสำหรับลูกเรือเล็ก หรือยากขึ้นมากสำหรับกลุ่มที่มีประสบการณ์

### Co-Op Scaling Parameters

| พารามิเตอร์ | ส่วน | ค่าเริ่มต้น | ช่วง | ผลกระทบ |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | ปรับพลังชีวิตและการสูญเสียท่าทางของศัตรูตามจำนวนผู้เล่น |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | ปรับพลังชีวิตเรือศัตรูตามจำนวนผู้เล่น |

ค่านี้มีประโยชน์มากสำหรับลูกเรือขนาดใหญ่ ช่วยให้การต่อสู้สมดุลเมื่อมีผู้เล่นเพิ่มขึ้นในโลก

### Exploration Parameters

| พารามิเตอร์ | ส่วน | ค่าเริ่มต้น | ผลกระทบ |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | ปิดการแสดงเครื่องหมายแผนที่สำหรับจุดสนใจ |

:::note ความหมายชื่อ EasyExplore
แม้ชื่อจะบอกว่า "ง่าย" แต่การตั้งค่า `EasyExplore` เป็น `true` จะทำให้การสำรวจยากขึ้นเพราะปิดเครื่องหมายแผนที่สำหรับจุดสนใจ นี่คือโหมดสำรวจแบบสมจริง
:::

### Quest Parameters

| พารามิเตอร์ | ส่วน | ค่าเริ่มต้น | ผลกระทบ |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | เมื่อผู้เล่นคนหนึ่งทำเควสโคออปเสร็จ เควสจะเสร็จอัตโนมัติสำหรับผู้เล่นคนอื่นที่มีเควสนั้นอยู่ |

การตั้งค่านี้เหมาะถ้าคุณอยากให้การเล่นกลุ่มง่ายขึ้น หรืออยากให้แต่ละคนทำเควสแยกกัน

## Multiplier Scale Reference

ถ้าคุณไม่แน่ใจว่าค่า `float` จะเปลี่ยนแปลงการเล่นเกมอย่างไร ใช้ตารางนี้เป็นตัวช่วย

| ค่า | ผลกระทบ |
| --- | --- |
| `0.5` | `50%` - ง่ายขึ้นอย่างเห็นได้ชัด |
| `1.0` | `100%` - ค่าเริ่มต้นหรือปกติ |
| `2.0` | `200%` - ยากขึ้นอย่างเห็นได้ชัด |
| `5.0` | `500%` - ยากมาก |

ตารางนี้เป็นตัวอย่างพารามิเตอร์ที่ใช้งานได้จริงสำหรับปรับสมดุลโลกของคุณ ค่าต่ำกว่าจะลดความยาก ในขณะที่ค่าสูงจะเพิ่มความยากอย่างมาก

:::tip เริ่มจากการปรับเล็กน้อย
ถ้าคุณกำลังทดสอบการเปลี่ยนแปลงสมดุล ให้เพิ่มหรือลดทีละพารามิเตอร์ เพื่อให้เข้าใจง่ายว่าการตั้งค่าใดส่งผลต่อการเล่นเกมอย่างไร
:::

## Example Configurations

ตัวอย่างต่อไปนี้ช่วยให้คุณสร้างการตั้งค่าแบบกำหนดเองของคุณเองได้

### Casual Crew

การตั้งค่านี้ลดความกดดันในการต่อสู้ เปิดใช้งานการแชร์เควส และทำให้การบุกเรือง่ายขึ้น

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

การตั้งค่านี้เพิ่มความยากทั้งบนบกและทางทะเล ปิดการแชร์เควส และเปิดใช้งานการสำรวจแบบสมจริง

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Large Group Scaling

การตั้งค่านี้เหมาะสำหรับกลุ่มใหญ่ เช่น 8 คน ที่การปรับขนาดเริ่มต้นอาจรู้สึกง่ายเกินไป

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Best Practices for Editing Values

### Use Valid Ranges

พารามิเตอร์ `float` แต่ละตัวรองรับช่วงค่าที่กำหนดเท่านั้น การอยู่ในช่วงที่ระบุช่วยหลีกเลี่ยงพฤติกรรมที่ไม่คาดคิด

| พารามิเตอร์ | ขั้นต่ำ | สูงสุด |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution ค่าที่ไม่ถูกต้อง
ถ้าคุณใช้ค่าที่ไม่รองรับ รูปแบบไม่ถูกต้อง หรือวางพารามิเตอร์ในส่วนผิด เกมอาจไม่สนใจการตั้งค่านั้นหรือไม่สามารถใช้ได้อย่างถูกต้อง
:::

### Keep JSON Formatting Correct

เมื่อแก้ไขไฟล์ `WorldDescription.json` ให้แน่ใจว่า:

- คีย์ทั้งหมดอยู่ในเครื่องหมายคำพูดคู่
- ใส่เครื่องหมายจุลภาคถูกต้อง
- ปีกกา `{}` และวงเล็บ `[]` ปิดครบถ้วน
- คำว่า `true` และ `false` เขียนเป็นตัวพิมพ์เล็ก
- ค่าทศนิยมใช้จุด เช่น `1.5`

ไฟล์ JSON ที่เสียหายอาจทำให้การโหลดการตั้งค่าโลกล้มเหลว

### Restart After Saving

หลังจากแก้ไขเสร็จ:

1. บันทึกไฟล์ `WorldDescription.json`
2. เริ่มเซิร์ฟเวอร์ของคุณอีกครั้ง
3. เข้าร่วมเซิร์ฟเวอร์และทดสอบการเปลี่ยนแปลงในการเล่นเกม

บางค่าจะตรวจสอบง่ายที่สุดในระหว่างการต่อสู้, การบุกเรือ หรือโคออป มากกว่าตอนล็อกอินทันที

## Managing Configs in the Gameserver Management

คุณสามารถจัดการไฟล์การตั้งค่า Windrose ได้โดยตรงในแผงจัดการเซิร์ฟเวอร์เกมของ ZAP-Hosting ผ่านตัวเลือก config และไฟล์ที่มีให้ นี่คือวิธีที่แนะนำในการแก้ไข `WorldDescription.json` หากคุณไม่ต้องการใช้เครื่องมือภายนอก

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

ถ้ารายการ config ที่ต้องการไม่แสดงโดยตรง ให้ใช้ **File Manager** และไปยังเส้นทางไฟล์โลกที่แสดงไว้ก่อนหน้านี้ในคู่มือนี้ด้วยตนเอง

:::info การจัดการ Config
ขึ้นอยู่กับอินเทอร์เฟซเซิร์ฟเวอร์เกมปัจจุบันและการตั้งค่าโลกของคุณ รายการไฟล์อาจแตกต่างกัน หากไม่เห็นรายการ config เฉพาะ ให้ใช้เส้นทางไฟล์โดยตรงแทนการคาดเดาว่าฟีเจอร์หายไป
:::

## Troubleshooting

### Changes Do Not Apply

ถ้าตัวปรับแต่งของคุณไม่ทำงานหลังรีสตาร์ท ให้ตรวจสอบดังนี้:

- แก้ไขไฟล์ `WorldDescription.json` ที่ถูกต้อง
- เซิร์ฟเวอร์ถูกหยุดก่อนแก้ไข
- ไวยากรณ์ JSON ถูกต้อง
- แต่ละพารามิเตอร์อยู่ในส่วนที่ถูกต้อง: `float`, `bool` หรือ `tag`
- เซิร์ฟเวอร์ถูกรีสตาร์ทเต็มที่หลังบันทึก

### Difficulty Feels Unchanged

ตัวปรับแต่งบางตัวสังเกตเห็นได้ง่ายกว่าตัวอื่น เช่น:

- `MobHealthMultiplier` สังเกตง่ายสุดในระหว่างการต่อสู้ปกติ
- `ShipHealthMultiplier` สังเกตได้เฉพาะตอนต่อสู้ทางเรือ
- `Coop_StatsCorrectionModifier` เห็นชัดเมื่อมีผู้เล่นหลายคน
- `EasyExplore` มีผลเฉพาะกับพฤติกรรมการสำรวจและเครื่องหมายแผนที่

### Preset Changed to Custom

นี่คือพฤติกรรมปกติเมื่อคุณตั้งค่ากำหนดเองด้วยตนเอง เกมจะเปลี่ยนประเภท preset โลกเป็น `Custom` อัตโนมัติเมื่อเริ่มใหม่ครั้งถัดไป

## Conclusion

Congratulations, you have successfully configured Windrose world modifiers. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂