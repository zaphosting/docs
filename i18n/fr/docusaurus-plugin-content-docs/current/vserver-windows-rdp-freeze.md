---
id: vserver-windows-rdp-freeze
title: "VPS : Connexion Bureau à Distance qui se coupe"
description: "Découvre comment résoudre les problèmes de freeze RDP en améliorant la stabilité de la connexion et en boostant ta productivité en bureau à distance → En savoir plus maintenant"
sidebar_label: Coupures de connexion RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le problème de freeze RDP est un phénomène courant où, selon le système d’exploitation et la version utilisée, les sessions de bureau à distance se figent de manière inattendue. Ce souci peut être super frustrant et nuire gravement à ta productivité. Dans ce guide, tu vas découvrir la cause du problème et comment le résoudre.

<InlineVoucher />

## Cause principale

Plusieurs sources indiquent de plus en plus que le problème vient de la faible résilience du protocole RDP face à la perte de paquets ou aux paquets corrompus. En plus, un bug dans certaines versions de Windows peut empêcher le système d’exploitation de basculer correctement entre les protocoles TCP et UDP, ce qui aggrave encore la situation.

## Solution

Pour régler ce souci, tu peux désactiver le protocole UDP pour la connexion RDP et utiliser à la place le protocole TCP, plus stable. Pour ça, ouvre l’Invite de commandes (cmd.exe) en mode administrateur sur ton PC et exécute la commande suivante :

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

En lançant cette commande, ton PC utilisera désormais le protocole TCP au lieu de l’UDP pour la session RDP. Ça peut vraiment améliorer la stabilité de la connexion, surtout sur des réseaux instables ou avec beaucoup de perte de paquets.

:::info 
**Confirme la saisie** en appuyant sur la touche Entrée et **redémarre ton PC ensuite** pour que le changement soit pris en compte et appliqué.
:::

<InlineVoucher />