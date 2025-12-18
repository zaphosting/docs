---
id: fivem-mastodon
title: "FiveM : Configurer un fil d’activité pour ton serveur"
description: "Découvre comment intégrer un fil d’activité Mastodon à ton serveur pour des mises à jour en temps réel et une meilleure interaction avec ta communauté → En savoir plus maintenant"
sidebar_label: Configurer le fil d’activité
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Préparation

Pour configurer un fil d’activité sur notre serveur, il faut d’abord créer un compte sur Mastodon.

## Configuration

Ouvre maintenant ton profil Mastodon et copie ton nom d’utilisateur, dans notre cas c’est `zaphosting@mstdn.instance`

Ensuite, ouvre les "Configs" de ton serveur FiveM et édite le fichier server.cfg.

Insère la ligne suivante tout en bas :

```
sets activitypubFeed username
```

Remplace "username" par ton nom d’utilisateur Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Sauvegarde le fichier et redémarre ton serveur. Après environ 20 minutes, l’onglet "Feed" sera dispo une fois ton serveur lancé.


<InlineVoucher />