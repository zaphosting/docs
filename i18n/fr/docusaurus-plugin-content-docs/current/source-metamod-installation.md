---
id: source-metamod-installation
title: Installer Source Mod et Meta Mod sur serveur
description: "Découvre comment booster ton serveur de jeux Source engine avec Source- et Metamod pour une personnalisation et une administration avancées → Apprends-en plus maintenant"
sidebar_label: Installation
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## C’est quoi SM et MM au juste ?

Source- et Metamod sont deux extensions pour Half Life 2, qui permettent de personnaliser encore plus un serveur de jeux Source engine (ex : CS: S, CS: GO, DoD: S, TF2, etc.). Ça inclut, par exemple, l’utilisation de plugins et une administration étendue de ton serveur.

<InlineVoucher />

## Installation SM / MM

### Télécharge les fichiers

D’abord, il te faut les extensions elles-mêmes. C’est important d’utiliser toujours les dernières versions (**stables**) pour qu’elles fonctionnent parfaitement et restent compatibles. Tu peux télécharger les dernières versions sur ces sites :

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Les serveurs de jeux Source engine chez ZAP-Hosting tournent généralement sous Linux. Il te faut donc la version Linux des extensions.
:::

### Décompresse les fichiers

Quand tu télécharges les deux extensions, tu obtiens deux fichiers compressés (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar) qu’il faut décompresser avant de les uploader. Tu peux utiliser Winrar, 7zip ou un programme similaire.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Après extraction, tu obtiens les dossiers addons et cfg :

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Upload les fichiers

Une fois ces étapes faites, l’installation peut commencer. Il faut se connecter au serveur via FTP pour uploader les dossiers des extensions.

Les fichiers doivent être uploadés dans le répertoire principal. Ce répertoire principal se trouve dans la structure de dossiers suivante :

| Jeu | Dossier  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

La structure des dossiers devrait ressembler à ça ensuite :

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Vérifie ton installation SM / MM

Il y a deux façons de vérifier si les extensions sont bien installées :

1. Console du jeu
2. Console distante (HLSW - RCON)

### Vérification de version via commandes

Voici comment vérifier la version sur ton serveur :

1. Connecte-toi au serveur en jeu
2. Ouvre la console et tape les commandes suivantes :

```
sm version
meta version
```

Tu obtiens ce genre de résultat :

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Vérification de version via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Voici comment vérifier la version via RCON :

1. Entre l’adresse IP en haut sous IP / Port
2. Va dans Configuration Rcon en dessous
3. Entre ton mot de passe Rcon sous Rcon password
4. Ouvre la console et tape les commandes suivantes :

```
sm version
meta version
```

Tu obtiens ce genre de résultat :

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Télécharge HLSW : http://www.hlsw.net/hlsw/download/

<InlineVoucher />