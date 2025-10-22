---
id: test
title: "เอกสารทดสอบ"
description: "ค้นพบวิธีเพิ่มประสิทธิภาพเซิร์ฟเวอร์เกม 7 Days to Die ของคุณด้วยม็อดสำหรับประสบการณ์การเล่นเกมที่ปรับแต่งได้ → เรียนรู้เพิ่มเติมตอนนี้"
sidebar_label: เอกสารทดสอบ
services:
  - gameserver
  - gameserver-7d2d
  - gameserver-abioticfactor
  - gameserver-afterinfection
  - gameserver-amongus
  - gameserver-animalia-survival
  - gameserver-argo
  - gameserver-ark
  - gameserver-arma3
  - gameserver-arma-reforger
  - gameserver-assettocorsa
  - gameserver-assetto-competizione
  - gameserver-astrocolony
  - gameserver-astroneer
  - gameserver-avorion
  - gameserver-ats
  - gameserver-bananashooter
  - gameserver-barotrauma
  - gameserver-battalion1944
  - gameserver-battlegrounds3
  - gameserver-beammp
  - gameserver-bob
  - gameserver-beyondthewire
  - gameserver-brokeprotocol
  - gameserver-citadel-forgedwithfire
  - gameserver-colonysurvival
  - gameserver-conan
  - gameserver-contagion
  - gameserver-corekeeper
  - gameserver-craftopia
  - gameserver-cryofall
  - gameserver-cs16
  - gameserver-cs2
  - gameserver-css
  - gameserver-dayofinfamy
  - gameserver-dayz
  - gameserver-ddracenetwork
  - gameserver-deadlock
  - gameserver-deadpoly
  - gameserver-dods
  - gameserver-dst
  - gameserver-eco
  - gameserver-empyrion
  - gameserver-enshrouded
  - gameserver-ets2
  - gameserver-factorio
  - gameserver-fivem
  - gameserver-foundry
  - gameserver-gmod
  - gameserver-groundbranch
  - gameserver-hl1
  - gameserver-hl2
  - gameserver-holdfast
  - gameserver-humanitz
  - gameserver-hurtworld
  - gameserver-icarus
  - gameserver-insurgency
  - gameserver-ironarmada
  - gameserver-jol
  - gameserver-killingfloor2
  - gameserver-lastoasis
  - gameserver-leap
  - gameserver-l4d2
  - gameserver-longvinter
  - gameserver-minecraft
  - gameserver-minetest
  - gameserver-miscreated
  - gameserver-motortown
  - gameserver-mountandblade
  - gameserver-mta
  - gameserver-moe
  - gameserver-necesse
  - gameserver-nstp
  - gameserver-nienix
  - gameserver-nmrih
  - gameserver-noonesurvived
  - gameserver-ohol
  - gameserver-openmp
  - gameserver-openttd
  - gameserver-ohd
  - gameserver-ootow
  - gameserver-palworld
  - gameserver-pathoftitans
  - gameserver-pixark
  - gameserver-portalknights
  - gameserver-projectzomboid
  - gameserver-redm
  - gameserver-reignofkings
  - gameserver-rimworldtogether
  - gameserver-risingstorm2
  - gameserver-risingworld
  - gameserver-riskofrain2
  - gameserver-rust
  - gameserver-sanctuaryisland
  - gameserver-satisfactory
  - gameserver-scp5k
  - gameserver-scp-containmentbreach
  - gameserver-scp-escapetogether
  - gameserver-scp
  - gameserver-scum
  - gameserver-soldat
  - gameserver-sonsoftheforest
  - gameserver-soulmask
  - gameserver-spaceengineers
  - gameserver-squad
  - gameserver-starbound
  - gameserver-starmade
  - gameserver-staxel
  - gameserver-stormworks
  - gameserver-subsistence
  - gameserver-sunkenland
  - gameserver-tf2
  - gameserver-teeworlds
  - gameserver-terraria
  - gameserver-terratech-worlds
  - gameserver-thebus
  - gameserver-thefront
  - gameserver-theisle
  - gameserver-lotr-rtm
  - gameserver-unfortunate-spacemen
  - gameserver-unturned
  - gameserver-vrising
  - gameserver-valheim
  - gameserver-vein
  - gameserver-veloren
  - gameserver-vintagestory
  - gameserver-wreckfest
  - gameserver-wreckfest2
  - gameserver-wurmunlimited
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## การเตรียมตัว

สิ่งแรกที่คุณต้องทำคือดาวน์โหลดม็อดที่คุณต้องการติดตั้งบนเซิร์ฟเวอร์เกมของคุณ คุณสามารถหาม็อดมากมายได้ที่ [7daystodiemods.com](https://7daystodiemods.com/) ที่นั่นคุณจะเจอม็อดมากกว่า 1000 ชิ้นและมีการเพิ่มใหม่อย่างสม่ำเสมอ เมื่อคุณดาวน์โหลดม็อดมาแล้ว มันควรจะมีโครงสร้างไฟล์ดังนี้:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## การติดตั้ง

เมื่อดาวน์โหลดม็อดที่ต้องการเสร็จแล้ว คุณก็สามารถเริ่มติดตั้งม็อดได้เลย การตั้งค่าม็อดจะทำผ่าน FTP คุณต้องมีโปรแกรม FTP client เพื่ออัปโหลดไฟล์ไปยังเซิร์ฟเวอร์เกมของคุณ ถ้าคุณไม่รู้ว่า FTP คืออะไรและทำงานยังไง คุณควรดูคู่มือต่อไปนี้: [การเข้าถึงผ่าน FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



ในไดเรกทอรี ``/gXXXXX4/7dtd-linux-exp/`` คุณต้องสร้างโฟลเดอร์ชื่อ **Mods** โดยคลิกขวาแล้วเลือก **สร้างไดเรกทอรี** 

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



จากนั้นให้คุณอัปโหลดไฟล์ของม็อดไปยังโฟลเดอร์ mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



แค่นี้ก็เสร็จสิ้นการติดตั้งม็อดแล้ว ครั้งต่อไปที่คุณสตาร์ทเซิร์ฟเวอร์ ม็อดจะถูกโหลดขึ้นมาโดยอัตโนมัติ

<InlineVoucher />