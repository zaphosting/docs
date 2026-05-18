---
id: test
title: "测试文档"
description: "了解如何通过安装MOD来增强你的7 Days to Die服务器，打造专属定制的游戏体验 → 立即了解更多"
sidebar_label: 测试文档
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

## 准备工作

首先，你需要下载想要安装到服务器上的MOD。你可以在 [7daystodiemods.com](https://7daystodiemods.com/) 找到海量MOD资源。这里有超过1000个MOD，并且还在不断更新。如果你已经下载了MOD，文件结构一般应该是这样的：

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## 安装步骤

下载好想要的MOD后，就可以开始安装了。MOD的安装是通过FTP完成的。你需要一个FTP客户端来上传文件到你的服务器。如果你还不清楚FTP是什么以及怎么用，可以先看看这篇教程：[通过FTP访问](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



在 ``/gXXXXX4/7dtd-linux-exp/`` 目录下，你需要新建一个名为 **Mods** 的文件夹。右键点击空白处，选择 **创建目录** 即可。

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



接着，把MOD文件上传到刚刚创建的Mods目录里：

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



这样MOD的安装就完成啦。下次启动服务器时，MOD会自动加载。

<InlineVoucher />