---
id: dedicated-windows-rdp-freeze
title: "Serveur dédié : Connexion Bureau à distance qui se coupe"
description: "Découvrez comment résoudre le gel du RDP en améliorant la stabilité de la connexion et en évitant les interruptions de session → En savoir plus maintenant"
sidebar_label: Coupures de connexion RDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le problème de gel du RDP est un phénomène courant où, selon le système d’exploitation et la version utilisée, les sessions de bureau à distance se figent de manière inattendue. Ce souci peut être frustrant et nuire sérieusement à la productivité. Dans ce document, vous allez en apprendre plus sur la cause du problème et comment le résoudre.

<InlineVoucher />

## Cause principale

Différentes sources indiquent de plus en plus que le problème vient de la faible résilience du protocole RDP face à la perte de paquets ou aux paquets corrompus. De plus, un bug dans certaines versions de Windows peut empêcher le système d’exploitation de basculer de manière fluide entre les protocoles TCP et UDP, ce qui aggrave encore le problème.

## Solution proposée

Pour résoudre ce souci, vous pouvez désactiver le protocole UDP pour la connexion RDP et utiliser à la place le protocole TCP, plus stable. Pour cela, ouvrez l’Invite de commandes (cmd.exe) en mode administrateur sur votre ordinateur et exécutez la commande suivante :

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

En exécutant cette commande, votre ordinateur utilisera désormais le protocole TCP au lieu de l’UDP pour la session RDP. Cela peut améliorer la stabilité de la connexion, surtout sur des réseaux instables ou avec une forte perte de paquets.

:::info 
**Confirmez la saisie** en appuyant sur la touche Entrée et **redémarrez votre ordinateur ensuite** pour que la modification soit prise en compte et appliquée.
:::

<InlineVoucher />