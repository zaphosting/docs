---
id: test
title: "Document de Test"
description: "Découvrez comment améliorer votre serveur 7 Days to Die avec des mods pour une expérience de jeu personnalisée → En savoir plus maintenant"
sidebar_label: Document de Test
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

## Préparation

La première chose à faire est de télécharger les mods que tu souhaites installer sur ton serveur. Tu peux trouver une large sélection de mods sur [7daystodiemods.com](https://7daystodiemods.com/). Tu y trouveras plus de 1000 mods, et de nouveaux sont ajoutés régulièrement. Une fois que tu as téléchargé un mod, il devrait contenir la structure de fichiers suivante :

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```



## Installation

Une fois les mods désirés téléchargés, tu peux commencer l’installation proprement dite. La configuration des mods se fait via FTP. Tu as besoin d’un client FTP pour pouvoir uploader les fichiers sur ton serveur. Si tu ne sais pas ce qu’est le FTP ni comment ça marche, jette un œil à ce guide : [Accès via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)



Dans le répertoire ``/gXXXXX4/7dtd-linux-exp/``, tu dois créer un dossier nommé **Mods**. Pour cela, fais un clic droit et clique sur **Créer un répertoire**. 

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)



Ensuite, il faut uploader les fichiers du mod dans le dossier mods :

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)



L’installation du mod est maintenant terminée. La prochaine fois que tu démarres le serveur, les mods devraient se charger automatiquement. 

<InlineVoucher />