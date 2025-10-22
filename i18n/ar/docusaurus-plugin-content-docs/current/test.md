---
id: test
title: "وثيقة تجريبية"
description: "اكتشف كيف تعزز سيرفر 7 Days to Die الخاص بك مع المودات لتجربة لعب مخصصة → تعلّم المزيد الآن"
sidebar_label: وثيقة تجريبية
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

## التحضير

أول شيء لازم تسويه هو تحميل المودات اللي تبي تثبتها على سيرفرك. تقدر تلاقي مجموعة كبيرة من المودات على [7daystodiemods.com](https://7daystodiemods.com/). هناك بتلاقي أكثر من 1000 مود ويتم إضافة المزيد بشكل منتظم. لما تحمل مود، لازم يحتوي على هيكل الملفات التالي:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## التثبيت

بعد ما تحمل المودات اللي تبيها، تقدر تبدأ بالتثبيت الفعلي للمودات. إعداد المودات يتم عن طريق FTP. تحتاج برنامج FTP عشان ترفع الملفات على سيرفرك. إذا ما تعرف وش هو FTP وكيف يشتغل، لازم تطّلع على الدليل التالي: [الوصول عبر FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



داخل مجلد ``/gXXXXX4/7dtd-linux-exp/`` لازم تسوي مجلد اسمه **Mods**. عشان تسوي هذا، اضغط كليك يمين واختر **إنشاء مجلد**. 

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



بعدين لازم ترفع ملفات المود داخل مجلد الـ Mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



وهذا يكمل تثبيت المود. في المرة الجاية لما تشغل السيرفر، المفروض المودات تحمل تلقائياً. 

<InlineVoucher />