---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: ติดตั้ง Mods / Modpacks"
description: "ค้นพบวิธีดาวน์โหลดและติดตั้ง Minecraft mods และ modpacks เพื่อเพิ่มประสบการณ์การเล่นบนเซิร์ฟเวอร์ของคุณ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: ติดตั้ง Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## แนะนำ

คุณจะได้เรียนรู้วิธีดาวน์โหลดและติดตั้ง Mod / Modpack บนเซิร์ฟเวอร์เกม Minecraft ของคุณ

<InlineVoucher />

## การเตรียมตัว

- เซิร์ฟเวอร์เกม ([คุณสามารถสั่งซื้อได้ที่นี่](https://zap-hosting.com/en/gameserver-hosting/))
- โปรแกรม FTP-Client (เช่น WinSCP, FileZilla)
- เชื่อมต่อกับเซิร์ฟเวอร์ของคุณผ่าน FTP: ([การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md))



## การค้นหา & ดาวน์โหลด mods หรือ modpacks

มีหลายที่บนอินเทอร์เน็ตที่คุณสามารถหา mods / modpacks ได้ แพลตฟอร์มที่ใหญ่ที่สุดสำหรับ mods และ modpacks คือ CurseForge เกือบ 99% ของ mods / modpacks สำหรับ Minecraft สามารถหาและดาวน์โหลดได้ที่นี่ด้วยคลิกไม่กี่ครั้ง คู่มือนี้จะเน้นการใช้ CurseForge คุณสามารถค้นหา mods ได้ [ที่นี่](https://www.curseforge.com/minecraft/mc-mods) และ modpacks [ที่นี่](https://curseforge.com/minecraft/modpacks)

:::note
Mods จะทำงานได้กับเวอร์ชันของ modloader ที่เฉพาะเจาะจงเท่านั้น คุณต้องตรวจสอบหน้าของ mod นั้นๆ ว่าต้องใช้เวอร์ชันไหน หากคุณติดตั้งหลาย mods ให้แน่ใจว่าทุกตัวใช้เวอร์ชันเดียวกัน นอกจากนี้ Forge mods จะไม่เข้ากันกับ Fabric mods และในทางกลับกัน
:::

ไปที่หน้าของ mod / modpack ที่คุณเลือกแล้วคลิกแท็บ "Files"

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


หาเวอร์ชันที่คุณต้องการแล้วคลิกเพื่อไปยังส่วน "File Details"

:::tip
คุณสามารถกรองตามเวอร์ชันและ modloader ได้โดยใช้เมนูดรอปดาวน์ที่ด้านบนของแท็บ "Files" ที่เลือก

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="สำหรับ Mods" default>
ในส่วน "File Details" กดปุ่ม "Download" บันทึกไฟล์นี้ไว้ที่ไหนสักแห่ง คุณจะต้องใช้มันในขั้นตอนถัดไป

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="สำหรับ Modpacks">
ในส่วน "File Details" เลื่อนลงมาจนเจอ "Additional Files" แล้วคลิกที่จุดสามจุด เลือก "Download file" บันทึกไฟล์นี้ไว้ที่ไหนสักแห่ง คุณจะต้องใช้มันในขั้นตอนถัดไป

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## ขั้นตอนที่ 2 - แตกไฟล์จากการดาวน์โหลด (เฉพาะสำหรับ modpacks)

หาไฟล์ที่ดาวน์โหลดไว้ในเครื่องของคุณ คลิกขวาแล้วเลือก "Extract All..." เลือกโฟลเดอร์ที่คุณต้องการเก็บไฟล์ที่แตกออกมา จำตำแหน่งนี้ไว้!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

โฟลเดอร์ที่แตกออกมาควรจะมีโฟลเดอร์ mods, config และ defaultconfig อาจจะมีโฟลเดอร์อื่นๆ เพิ่มเติมนอกเหนือจากที่แสดงนี้

:::note
บาง modpacks ต้องการขั้นตอนเพิ่มเติม เช่น AllOfFabric6 ในกรณีของ AllOfFabric6 คุณจะต้องรัน "startserver.bat" (Windows) หรือ "startserver.sh" (Linux / MacOS) เพื่อให้ได้โฟลเดอร์ที่กล่าวถึงข้างต้น สคริปต์จะดาวน์โหลดโฟลเดอร์เหล่านั้นให้คุณ แต่ในส่วนใหญ่โฟลเดอร์จะมีอยู่แล้วโดยไม่ต้องทำอะไรเพิ่ม หากไม่มีสคริปต์ในโฟลเดอร์ที่แตกออกมา คุณควรค้นหาวิธีการดาวน์โหลดไฟล์เซิร์ฟเวอร์สำหรับ modpack ของคุณจากอินเทอร์เน็ต
:::


## ขั้นตอนที่ 3 - ติดตั้งเวอร์ชันเซิร์ฟเวอร์ที่ถูกต้อง

ในเว็บอินเทอร์เฟซของ Zap-Hosting เลือกเซิร์ฟเวอร์เกมของคุณแล้วไปที่ "Games" ในส่วนการตั้งค่า

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

ขยายส่วน "Available Games" แล้วค้นหา modloader ของคุณ (Forge สำหรับ Forge mods / modpacks, Fabric สำหรับ Fabric mods / modpacks) เลือกปุ่มดาวน์โหลดสีเขียว

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


คลิกเมนูดรอปดาวน์ใต้ "Game version" แล้วเลือกเวอร์ชัน Minecraft ที่ตรงกับเวอร์ชันที่ถูกต้องสำหรับ mod/modpack ของคุณ สำหรับ Forge คุณสามารถเลือกใช้เวอร์ชันล่าสุดหรือเวอร์ชันที่แนะนำ ลองเวอร์ชันล่าสุดก่อน ถ้าเซิร์ฟเวอร์ของคุณไม่ทำงานตามที่คาดไว้ ให้กลับมาเลือกเวอร์ชันที่แนะนำ กดปุ่ม "Accept and Install"

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
ถ้าคุณไม่รู้ว่าเวอร์ชัน Minecraft ที่ต้องใช้คืออะไร ให้กลับไปที่หน้า "File Details" บน CurseForge ข้างๆ ไอคอนจอยเกมจะเห็นเวอร์ชันแสดงอยู่

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

เมื่อการติดตั้งเกมเสร็จสิ้น คุณจะเห็นปุ่มสีน้ำเงินข้างชื่อเกมของคุณ (เช่น Forge, Fabric) คลิกปุ่มนี้เพื่อเปิดใช้งานเกม

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## ขั้นตอนที่ 4 - เชื่อมต่อ & อัปโหลด mods / modpack ผ่าน FTP

เชื่อมต่อกับเซิร์ฟเวอร์ของคุณโดยใช้ FTP client ที่คุณเลือก ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์ของคุณถูกหยุดทำงานอยู่

### การอัปโหลด mod

เมื่อเชื่อมต่อแล้ว ให้เข้าไปที่โฟลเดอร์เกมของคุณ (เช่น minecraft-forge, minecraft-fabric) เปิดโฟลเดอร์ mods แล้วลากไฟล์ mod ที่ดาวน์โหลดมาใส่ในโฟลเดอร์นี้ได้เลย
![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

เมื่ออัปโหลดเสร็จแล้ว คุณก็สามารถเริ่มเซิร์ฟเวอร์ได้เลย

### การอัปโหลด modpack

เมื่อเชื่อมต่อแล้ว ให้เข้าไปที่โฟลเดอร์เกมของคุณ (เช่น minecraft-forge, minecraft-fabric) ลบโฟลเดอร์ world, mods, config และ defaultconfig บนเซิร์ฟเวอร์ของคุณออก จากนั้นอัปโหลดโฟลเดอร์ทั้งหมดจากโฟลเดอร์ที่แตกไฟล์ไว้ก่อนหน้านี้ ยกเว้นโฟลเดอร์ jre และ libraries เลือกโฟลเดอร์ทั้งหมดแล้วลากไปยังไดเรกทอรีเซิร์ฟเวอร์ของคุณได้เลย

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

เมื่ออัปโหลดเสร็จแล้ว คุณก็สามารถเริ่มเซิร์ฟเวอร์ได้เลย



## Mods ยอดนิยม

ยังหามอดที่ใช่สำหรับเซิร์ฟเวอร์ของคุณไม่เจอ? ลองดูรายการที่เราคัดสรรมาอย่างดีของมอดยอดนิยมและแนะนำสูงสุด เพื่อเพิ่มความสนุกและเติมเต็มเซิร์ฟเวอร์ของคุณให้สมบูรณ์แบบ ค้นหาแรงบันดาลใจและเจอสิ่งที่เหมาะกับโปรเจกต์ของคุณได้เลย

<SearchableItemList items={mods} />

## Modpacks ยอดนิยม

ยังหามอดที่ใช่สำหรับเซิร์ฟเวอร์ของคุณไม่เจอ? ลองดูรายการที่เราคัดสรรมาอย่างดีของ modpacks ยอดนิยมและแนะนำสูงสุด เพื่อเพิ่มความสนุกและเติมเต็มเซิร์ฟเวอร์ของคุณให้สมบูรณ์แบบ ค้นหาแรงบันดาลใจและเจอสิ่งที่เหมาะกับโปรเจกต์ของคุณได้เลย

<SearchableItemList items={modpacks} />

<InlineVoucher />