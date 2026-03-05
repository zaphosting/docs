---
id: csgo-plugins
title: "CS:GO: การติดตั้งปลั๊กอิน"
description: "สำรวจวิวัฒนาการของปลั๊กอิน CS:GO และโปรเจกต์ชุมชนเพื่อยกระดับประสบการณ์ Counter-Strike ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้งปลั๊กอิน
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## แนะนำ

CS:GO ยังคงสืบทอดประเพณีการปรับแต่งเซิร์ฟเวอร์โดยชุมชน ปลั๊กอินช่วยให้เจ้าของเซิร์ฟเวอร์สามารถขยายการเล่นเกม เพิ่มฟีเจอร์ที่ช่วยให้ชีวิตง่ายขึ้น ใช้กฎแบบกำหนดเอง หรือสร้างโหมดเกมใหม่ทั้งหมดได้

ด้วยการเปลี่ยนผ่านไปยัง Source 2 ระบบปลั๊กอินก็เปลี่ยนแปลงไปอย่างมาก สำหรับ CS:GO, **CounterStrikeSharp** ได้กลายเป็นเฟรมเวิร์กหลักที่ได้รับการดูแลอย่างต่อเนื่องสำหรับการพัฒนาปลั๊กอินฝั่งเซิร์ฟเวอร์

<InlineVoucher />



## การติดตั้ง Metamod:Source

ต้องติดตั้ง Metamod ก่อน เพราะ CounterStrikeSharp ขึ้นอยู่กับมัน หลังจากดาวน์โหลด [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev) ให้แตกไฟล์เก็บไว้ ในไฟล์เก็บจะมีโฟลเดอร์ `addons` โฟลเดอร์นี้ต้องอัปโหลดตรงไปยังไดเรกทอรีเกม CS:GO ผ่าน [FTP](gameserver-ftpaccess.md)

```
../game/csgo/
```

หลังจากคัดลอกไฟล์แล้ว ให้หาไฟล์ `gameinfo.gi` ในโฟลเดอร์ `/game/csgo/` เปิดไฟล์นี้ด้วยโปรแกรมแก้ไขข้อความ ในไฟล์ให้หาแถวที่มีคำว่า `Game_LowViolence csgo_lv` ใต้แถวนั้นให้เพิ่มบรรทัดนี้เข้าไป:

```
Game csgo/addons/metamod
```

<Button label="ดาวน์โหลด Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## การติดตั้ง CounterStrikeSharp

เมื่อยืนยันว่า Metamod ทำงานแล้ว สามารถติดตั้ง CounterStrikeSharp ได้ CounterStrikeSharp แจกจ่ายผ่าน GitHub อย่างเป็นทางการและมีแพ็กเกจรีลีสที่คอมไพล์ไว้แล้ว ดาวน์โหลดเวอร์ชัน CounterStrikeSharp ที่รวม runtime มาให้ แตกไฟล์เก็บและคัดลอกโฟลเดอร์ `addons` ที่มีอยู่ไปยังไดเรกทอรีเกม CS:GO เดียวกันผ่าน [FTP](gameserver-ftpaccess.md)

```
/game/csgo/
```

อย่ารวมโฟลเดอร์หรือเปลี่ยนชื่อเอง โครงสร้างที่ให้มาในไฟล์เก็บต้องไม่ถูกแก้ไข หลังจากอัปโหลดไฟล์แล้ว ให้รีสตาร์ทเซิร์ฟเวอร์อีกครั้ง ในระหว่างการเริ่มต้น CounterStrikeSharp จะถูกโหลดโดย Metamod อัตโนมัติ เพื่อตรวจสอบการติดตั้ง เปิดคอนโซลเซิร์ฟเวอร์แล้วรันคำสั่ง:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="ดาวน์โหลด CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## การติดตั้งปลั๊กอิน

ปลั๊กอินสำหรับ CounterStrikeSharp จะมาในรูปแบบไฟล์ `.dll` ที่คอมไพล์แล้ว ไฟล์เหล่านี้ต้องวางไว้ในโฟลเดอร์ `plugins` ภายในเส้นทางติดตั้ง CounterStrikeSharp

หลังจากคัดลอกปลั๊กอินไปยังโฟลเดอร์นี้และรีสตาร์ทเซิร์ฟเวอร์ CounterStrikeSharp จะโหลดปลั๊กอินทั้งหมดที่มีให้อัตโนมัติ หากปลั๊กอินใดโหลดไม่สำเร็จ ให้ตรวจสอบล็อกเซิร์ฟเวอร์สำหรับข้อความผิดพลาดที่เกี่ยวข้องกับ CounterStrikeSharp หรือปลั๊กอินนั้นๆ




## ปลั๊กอินยอดนิยม

<SearchableItemList items={items} />



## สรุป

ถ้าคุณทำตามขั้นตอนทั้งหมดนี้ คุณควรติดตั้ง Metamod/CounterStrikeSharp และปลั๊กอินที่ต้องการได้สำเร็จแล้ว หากมีคำถามเพิ่มเติมหรือต้องการความช่วยเหลือ อย่าลังเลที่จะติดต่อทีมซัพพอร์ตของเรา ซึ่งพร้อมให้บริการทุกวันเพื่อช่วยคุณ! 🙂




<InlineVoucher />