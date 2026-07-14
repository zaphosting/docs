---
id: palworld-host-character-transfer
title: "Palworld: โอนย้ายตัวละครโฮสต์"
description: "เรียนรู้วิธีโอนย้ายตัวละครโฮสต์ Palworld จากการบันทึกแบบเล่นคนเดียวหรือเล่นร่วมกันไปยังเซิร์ฟเวอร์เฉพาะโดยใช้ Palworld Save Tools และไฟล์บันทึกที่ถูกต้อง -> เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: Palworld: โอนย้ายตัวละครโฮสต์
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

การโอนย้ายตัวละครโฮสต์ Palworld ช่วยให้คุณย้ายตัวละครจากการเล่นคนเดียวหรือเล่นร่วมกันไปยังการบันทึกเซิร์ฟเวอร์เฉพาะ ในคู่มือนี้ คุณจะเตรียมไฟล์บันทึกที่จำเป็น ใช้เครื่องมือย้ายข้อมูลที่รองรับ และอัปโหลดข้อมูลตัวละครที่อัปเดตกลับไปยังเซิร์ฟเวอร์ของคุณ

:::danger Experimental Character Transfer Warning
ขั้นตอนนี้ถือเป็นการทดลองและแก้ไขข้อมูลบันทึกด้วยตนเอง การอัปเดตของ Palworld อาจเปลี่ยนโครงสร้างไฟล์บันทึก ซึ่งอาจทำให้เครื่องมือหรือขั้นตอนการย้ายข้อมูลไม่ทำงานอย่างถูกต้อง
:::

## Preparation

ก่อนเริ่มต้น ให้แน่ใจว่าคุณสามารถเข้าถึงเซิร์ฟเวอร์เกม Palworld ของคุณและมีระบบ Windows ในเครื่องที่สามารถรันเครื่องมือย้ายข้อมูลบันทึกได้

### Requirements

คุณต้องมีสิ่งต่อไปนี้:

| Requirement | Purpose |
| --- | --- |
| การเข้าถึงเซิร์ฟเวอร์ Palworld ของคุณที่ ZAP-Hosting | เพื่อดาวน์โหลดและอัปโหลดไฟล์บันทึกที่จำเป็น |
| ที่เก็บข้อมูลสำรองในเครื่อง | เพื่อเก็บสำเนาข้อมูลบันทึกต้นฉบับอย่างปลอดภัย |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | เพื่อดำเนินการย้ายตัวละครโฮสต์ |
| ตัวละครเซิร์ฟเวอร์เฉพาะที่สร้างใหม่ | ข้อมูลตัวละครโฮสต์จะถูกย้ายไปยังตัวละครนี้บนเซิร์ฟเวอร์เฉพาะ |

:::caution Create a Backup First
ก่อนแก้ไขไฟล์บันทึกใดๆ ให้ดาวน์โหลดและเก็บสำรองข้อมูลบันทึกเซิร์ฟเวอร์ปัจจุบันอย่างครบถ้วน หากการโอนย้ายล้มเหลวหรือข้อมูลตัวละครเสียหาย คุณจะต้องใช้ไฟล์ต้นฉบับเพื่อกู้คืนเซิร์ฟเวอร์
:::

### Important Notes About Configuration Files

การโอนย้ายนี้ **ไม่ใช่** การแก้ไขไฟล์คอนฟิก Palworld ในโฟลเดอร์ `Configs` ตามเอกสารและคำแนะนำจากชุมชนในปัจจุบัน การโอนย้ายตัวละครโฮสต์ทำโดยการแทนที่ไฟล์ข้อมูลบันทึกแทน

ไฟล์ที่เกี่ยวข้องจะอยู่ในไดเรกทอรีบันทึกเซิร์ฟเวอร์ของคุณ ไม่ใช่ไฟล์คอนฟิกเกมปกติ เช่น `PalWorldSettings.ini`

## Understand Which Files Are Used

ก่อนเริ่มโอนย้าย คุณควรระบุไฟล์ที่เกี่ยวข้อง

### Save Files Required for the Transfer

การย้ายตัวละครโฮสต์ใช้ข้อมูลบันทึกดังนี้:

| File or Folder | Location | Purpose |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | เก็บข้อมูลบันทึกระดับโลกที่เครื่องมือย้ายข้อมูลใช้ |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | เก็บไฟล์บันทึกผู้เล่น รวมถึงตัวละครเซิร์ฟเวอร์เฉพาะที่สร้างใหม่ |
| `00000001.sav` | ภายใน `Players/` จากบันทึกเล่นคนเดียวหรือเล่นร่วมกันที่อัปโหลด | โดยปกติคือไฟล์ตัวละครโฮสต์ต้นฉบับในบันทึกเล่นร่วมกัน |

`[your_savefolder_id]` คือชื่อโฟลเดอร์ยาวที่ใช้สำหรับบันทึกโลก Palworld ของคุณ ค่านี้จะแตกต่างกันในแต่ละบันทึก

### Where to Find the Files in the ZAP Interface

คุณสามารถเข้าถึงไฟล์บันทึกที่จำเป็นผ่านตัวจัดการไฟล์ของแผงควบคุมเซิร์ฟเวอร์เกม

ไปที่:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

ในโฟลเดอร์นี้ คุณควรพบอย่างน้อย:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Prepare the Dedicated Server Character

ก่อนจะย้ายตัวละครโฮสต์ เซิร์ฟเวอร์เฉพาะต้องมีไฟล์บันทึกผู้เล่นที่สร้างใหม่สำหรับบัญชีของคุณแล้ว

### Create a New Character on the Server

เข้าร่วมเซิร์ฟเวอร์เฉพาะ Palworld ของคุณตามปกติและสร้างตัวละครใหม่ จากนั้นเล่นจนตัวละครมีเลเวลอย่างน้อย `2`

ขั้นตอนนี้จำเป็นเพราะเครื่องมือย้ายข้อมูลต้องการไฟล์ตัวละครเซิร์ฟเวอร์เฉพาะที่มีอยู่แล้วเป็นเป้าหมายการย้าย

### Force or Wait for a Save

หลังจากสร้างตัวละครใหม่ คุณต้องแน่ใจว่าเซิร์ฟเวอร์ได้บันทึกข้อมูลผู้เล่นใหม่ลงดิสก์แล้ว

คุณสามารถ:

- รอช่วงเวลาบันทึกอัตโนมัติ ซึ่งโดยทั่วไปประมาณ `4` นาที หรือ
- รันคำสั่ง `save` ในคอนโซลเซิร์ฟเวอร์

| Command | Where to run it | Purpose |
| --- | --- | --- |
| `save` | คอนโซลเซิร์ฟเวอร์ | บังคับให้เซิร์ฟเวอร์เขียนข้อมูลโลกและผู้เล่นปัจจุบันลงดิสก์ |

:::info Save Command Requirement
ถ้าคุณใช้คำสั่ง `save` ให้รันก่อนหยุดเซิร์ฟเวอร์ เพื่อให้แน่ใจว่าไฟล์ตัวละครเซิร์ฟเวอร์เฉพาะใหม่มีอยู่ในโฟลเดอร์ `Players/`
:::

### Stop the Server

เมื่อบันทึกเสร็จแล้ว ให้หยุดเซิร์ฟเวอร์ Palworld ผ่านแผงควบคุมเซิร์ฟเวอร์

อย่าดำเนินการต่อขณะที่เซิร์ฟเวอร์ยังทำงานอยู่ เพราะการบันทึกที่กำลังทำงานอาจเขียนทับหรือขัดแย้งกับไฟล์ที่คุณจะเปลี่ยน

## Download the Required Save Data

ตอนนี้ที่ตัวละครใหม่มีอยู่บนเซิร์ฟเวอร์เฉพาะแล้ว คุณสามารถดาวน์โหลดไฟล์ที่จำเป็นสำหรับการย้ายข้อมูลได้

### Open the Save Directory

ในตัวจัดการไฟล์ของ ZAP-Hosting ไปที่:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Download the Files

ดาวน์โหลดรายการต่อไปนี้ลงในเครื่องคอมพิวเตอร์ของคุณ:

| Item | Required |
| --- | --- |
| `Level.sav` | ใช่ |
| โฟลเดอร์ `Players/` | ใช่ |

เก็บไฟล์ทั้งสองไว้ในโฟลเดอร์ทำงานเดียวกันในเครื่อง เพื่อให้เครื่องมือย้ายข้อมูลประมวลผลได้ถูกต้อง

:::tip Keep Files Together
วาง `Level.sav` และโฟลเดอร์ `Players/` ไว้ข้างกันในโฟลเดอร์เดียวกันในเครื่อง นี่คือวิธีที่ Palworld Save Tools คาดหวัง
:::

## Migrate the Host Character

เมื่อดาวน์โหลดข้อมูลบันทึกแล้ว คุณสามารถดำเนินการโอนย้ายตัวละครโฮสต์ได้เลย

### Start Palworld Save Tools

ดาวน์โหลดและแตกไฟล์ [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) จากนั้นเปิด `PalworldSaveTools.exe`

ในแอปพลิเคชัน เลือก:

```text
Fix Host Save
```

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Select the Correct Files

ในเครื่องมือย้ายข้อมูล:

1. เลือกไฟล์ `Level.sav` ที่ดาวน์โหลดมา
2. ในช่องเลือกซ้าย เลือก `00000001.sav`
3. ในช่องเลือกขวา เลือกตัวละครเซิร์ฟเวอร์เฉพาะที่คุณสร้างไว้
4. เริ่มการย้ายข้อมูลโดยเลือก `Migrate`

| Tool Field | Value to select |
| --- | --- |
| `Path to Level.sav` | ไฟล์ `Level.sav` ที่ดาวน์โหลด |
| ช่องตัวละครซ้าย | `00000001.sav` |
| ช่องตัวละครขวา | ตัวละครเซิร์ฟเวอร์เฉพาะที่สร้างใหม่ |
| Action | `Migrate` |

### What the Migration Does

กระบวนการย้ายข้อมูลจะย้ายข้อมูลตัวละครโฮสต์ต้นฉบับจากบันทึกเล่นคนเดียวหรือเล่นร่วมกันไปยังตัวละครเซิร์ฟเวอร์เฉพาะที่คุณสร้างไว้ก่อนหน้านี้

นี่คือเหตุผลที่คุณต้องเข้าร่วมเซิร์ฟเวอร์และสร้างไฟล์บันทึกผู้เล่นใหม่ก่อนใช้เครื่องมือ

:::caution Verify the Target Character
ตรวจสอบให้แน่ใจว่าคุณเลือกตัวละครเซิร์ฟเวอร์ใหม่ที่ถูกต้องทางด้านขวา การเลือกผิดอาจเขียนทับข้อมูลผู้เล่นคนอื่น
:::

## Upload the Updated Save Files

หลังจากการย้ายข้อมูลเสร็จสมบูรณ์ คุณต้องอัปโหลดไฟล์ที่แก้ไขแล้วกลับไปยังเซิร์ฟเวอร์ของคุณ

### Replace the Existing Save Data

กลับไปที่โฟลเดอร์เซิร์ฟเวอร์เดียวกันในตัวจัดการไฟล์ ZAP-Hosting:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

อัปโหลดและแทนที่:

- ไฟล์ `Level.sav` ที่อัปเดต
- โฟลเดอร์ `Players/` ที่อัปเดต

ถ้าตัวจัดการไฟล์ถามให้ยืนยันการเขียนทับไฟล์ ให้ยืนยันการแทนที่

### Configuration File Changes

สำหรับการโอนย้ายตัวละครโฮสต์นี้ ปัจจุบันยังไม่มีความจำเป็นที่ได้รับการยืนยันให้แก้ไขไฟล์คอนฟิก Palworld เช่น `PalWorldSettings.ini`

| Item | Required for host transfer |
| --- | --- |
| แก้ไข `PalWorldSettings.ini` | ไม่จำเป็น |
| แก้ไขไฟล์ใน `Configs` | ไม่มีความจำเป็นที่ได้รับการยืนยัน |
| แทนที่ `Level.sav` | จำเป็น |
| แทนที่ `Players/` | จำเป็น |

:::note No Additional Config Entries Required
ตามเอกสารและคำแนะนำการย้ายข้อมูลในปัจจุบัน ไม่มีความจำเป็นต้องเพิ่มค่าคอนฟิกหรือแก้ไขไฟล์ `.ini` ด้วยตนเองสำหรับการโอนย้ายนี้
:::

## Start the Server and Test the Character

เมื่ออัปโหลดไฟล์ที่อัปเดตแล้ว ให้เริ่มเซิร์ฟเวอร์ Palworld ของคุณอีกครั้ง

### Rejoin the Server

เชื่อมต่อกับเซิร์ฟเวอร์โดยใช้บัญชีเดียวกับที่สร้างตัวละครเซิร์ฟเวอร์เฉพาะใหม่ หากการย้ายข้อมูลสำเร็จ คุณจะโหลดเข้าสู่ตัวละครโฮสต์ที่ถูกโอนย้ายแทนตัวละครชั่วคราวใหม่

### Check Important Character Data

หลังจากเข้าร่วม ให้ตรวจสอบข้อมูลต่อไปนี้ว่าปรากฏถูกต้อง:

- เลเวลตัวละคร
- อินเวนทอรี
- เพื่อน (pals)
- การเป็นเจ้าของฐาน
- ข้อมูลความก้าวหน้า

ถ้ามีข้อมูลใดหายไปหรือผิดพลาด ให้หยุดเซิร์ฟเวอร์ทันทีและกู้คืนข้อมูลสำรองก่อนลองใหม่

:::danger Restore Backup if Data Is Incorrect
ถ้าข้อมูลตัวละคร อินเวนทอรี หรือการเป็นเจ้าของโลกเสียหายหลังการย้ายข้อมูล อย่าดำเนินการเล่นต่อ ให้กู้คืนไฟล์ `Level.sav` และโฟลเดอร์ `Players/` ต้นฉบับก่อน เพื่อป้องกันการบันทึกข้อมูลผิดพลาดเพิ่มเติม
:::

## Reference Summary

### Required Paths, Files, and Actions

| Type | Value |
| --- | --- |
| Save path | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Required file | `Level.sav` |
| Required folder | `Players/` |
| Host save file typically selected | `00000001.sav` |
| Server command | `save` |
| Server restart required | ใช่ |
| Config file edit required | ไม่มีความจำเป็นที่ได้รับการยืนยัน |

## Conclusion

Congratulations, you have successfully transferred your Palworld host character to a dedicated server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂