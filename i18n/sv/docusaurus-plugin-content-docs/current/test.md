---
id: test
title: "Testdokument"
description: "Upptäck hur du förbättrar din 7 Days to Die-server med mods för en skräddarsydd spelupplevelse → Lär dig mer nu"
sidebar_label: Testdokument
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

## Förberedelser

Det första du behöver göra är att ladda ner de mods du vill installera på din server. Du hittar ett stort utbud av mods på [7daystodiemods.com](https://7daystodiemods.com/). Där finns över 1000 mods och fler läggs till regelbundet. När du har laddat ner en mod ska den innehålla följande mappstruktur:

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## Installation

När du har laddat ner de mods du vill ha kan du börja med själva installationen. Mods installeras via FTP. Du behöver en FTP-klient för att kunna ladda upp filer till din server. Om du inte vet vad FTP är eller hur det funkar, kolla in vår guide: [Access via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



Under katalogen ``/gXXXXX4/7dtd-linux-exp/`` måste du skapa en mapp som heter **Mods**. Högerklicka och välj **Create directory** för att göra detta. 

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



Sen laddar du upp mod-filerna till mappen mods:

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



Det är allt som krävs för att installera modden. Nästa gång du startar servern kommer mods att laddas automatiskt. 

<InlineVoucher />