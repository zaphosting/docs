---
id: hytale-pvp-management
title: "Hytale : Gestion du PvP"
description: "Gère et configure le combat joueur contre joueur (PvP) sur ton serveur Hytale → Découvre-en plus maintenant"
sidebar_label: Gestion du PvP
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La gestion du PvP sur un serveur Hytale contrôle si les joueurs peuvent s’infliger des dégâts ou se battre entre eux dans un monde. En ajustant les paramètres PvP, les propriétaires de serveur peuvent définir si le combat entre joueurs est totalement activé, complètement désactivé, ou limité à des situations spécifiques.

<InlineVoucher />

## Configuration

Le comportement du PvP est défini pour chaque monde et configuré via le fichier de configuration du serveur :

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Ce paramètre détermine comment le serveur gère les dégâts entre joueurs et si le PvP est autorisé dans le monde actif. Les modifications des paramètres PvP s’appliquent globalement au monde concerné et nécessitent un redémarrage du serveur pour être prises en compte.

L’exemple suivant montre une configuration où le PvP est désactivé pour un monde :

```
"WorldConfig": {
  "PvP": false
}
```

Avec cette configuration, les joueurs ne peuvent plus s’infliger de dégâts dans ce monde, créant ainsi un environnement axé sur le PvE.

Pour activer le PvP et permettre le combat joueur contre joueur, la configuration peut être définie comme suit :

```
"WorldConfig": {
  "PvP": true
}
```

## Conclusion

Une fois configuré, tu as une vue claire de la gestion du PvP et peux facilement ajuster la configuration pour soutenir un gameplay coopératif, des environnements compétitifs ou un mix des deux. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />