---
id: humanitz-airdrop-management
title: "HumanitZ : Gestion des Airdrops"
description: "Apprends à activer, désactiver et configurer les airdrops sur ton serveur HumanitZ → Découvre tout maintenant"
sidebar_label: "Gestion des Airdrops"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Les airdrops dans HumanitZ offrent du loot précieux et peuvent influencer fortement les déplacements des joueurs, les zones de conflit, et la dynamique globale du serveur. Selon le style de jeu de ton serveur, tu peux vouloir des largages fréquents pour plus d’action ou les désactiver complètement pour une expérience de survie plus rude et avec moins de ressources.

<InlineVoucher />

## Configuration

Les réglages des airdrops se font dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de gestion serveur sous **Configs**. Dans ce fichier de config, trouve les paramètres suivants :

```
; Définir si les airdrops sont activés ou non
AirDrop=true
; Nombre de jours de jeu entre chaque airdrop
AirDropInterval=1
```

Le fonctionnement est simple :

- `AirDrop=true` – Active les airdrops  
- `AirDrop=false` – Désactive complètement les airdrops  
- `AirDropInterval` – Définit le nombre de jours en jeu entre chaque airdrop  

Par exemple, si tu veux que les airdrops arrivent tous les trois jours en jeu :

```
AirDrop=true
AirDropInterval=3
```

Si tu préfères désactiver totalement les airdrops :

```
AirDrop=false
```

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que les nouveaux réglages soient pris en compte.

## Conclusion

Bravo ! En modifiant les valeurs `AirDrop` et `AirDropInterval` dans le fichier `GameServerSettings.ini`, tu as configuré avec succès le comportement des airdrops sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />