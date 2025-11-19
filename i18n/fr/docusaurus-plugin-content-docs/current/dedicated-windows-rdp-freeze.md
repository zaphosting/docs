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

Le problème de gel du RDP est un phénomène courant où, selon le système d’exploitation et la version utilisée, les sessions de bureau à distance se figent de manière inattendue. Ce souci peut être frustrant et nuire sérieusement à la productivité. Dans ce document, tu vas en apprendre plus sur la cause du problème et comment le résoudre.



## Cause principale

Plusieurs sources indiquent de plus en plus que le problème vient de la faible résilience du protocole RDP face à la perte de paquets ou aux paquets corrompus. En plus, un bug dans certaines versions de Windows peut empêcher le système d’exploitation de basculer de manière fluide entre les protocoles TCP et UDP, ce qui aggrave encore le problème.

## Solution proposée

Pour régler ce souci, tu peux désactiver le protocole UDP pour la connexion RDP et utiliser à la place le protocole TCP, plus stable. Pour cela, ouvre l’Invite de commandes (cmd.exe) en mode administrateur sur ton ordinateur et exécute la commande suivante :

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

En lançant cette commande, ton PC utilisera désormais le protocole TCP au lieu de l’UDP pour la session RDP. Ça peut améliorer la stabilité de la connexion, surtout sur des réseaux instables ou avec beaucoup de perte de paquets.

:::info 
**Confirme la saisie** en appuyant sur la touche Entrée et **redémarre ton ordinateur ensuite** pour que le changement soit pris en compte et appliqué.
:::
