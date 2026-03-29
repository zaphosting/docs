---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI : Configurer les points de construction et les ressources"
description: "Apprenez à configurer les points de construction, les canons et les limites de ressources sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Points de construction & Ressources
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les points de construction et les paramètres de ressources dans **Over the Top WWI** déterminent combien de structures, défenses et équipements les joueurs peuvent déployer pendant une partie. Ces valeurs impactent directement l’équilibre du gameplay, surtout dans les modes où la construction et les fortifications sont essentielles.

En ajustant ces paramètres, tu peux créer un gameplay plus défensif avec des fortifications étendues ou limiter les ressources pour des parties plus rapides et agressives.

<InlineVoucher />

## Configuration

Les paramètres de construction et de ressources se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` et `DefenderBuildPoints` définissent combien de points de construction chaque équipe possède

- `AttackerCannonPoints` et `DefenderCannonPoints` contrôlent combien de canons ou unités d’artillerie peuvent être déployés

- `SapperBPRegenAmount` indique combien de points de construction sont régénérés au fil du temps

- `SapperCannonPRegenAmount` contrôle la vitesse de régénération des points de canon

- `SapperPropBPRegenTime` et `CannonPropPRegenTime` définissent le temps en secondes entre chaque tick de régénération

Ajuste ces valeurs pour gérer combien de structures et défenses les joueurs peuvent créer et à quelle vitesse les ressources se rechargent pendant la partie.

Après avoir modifié le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Les nouveaux paramètres de ressources seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès les points de construction et les ressources sur ton **serveur Over the Top WWI**. Cela te permet de contrôler les fortifications, d’équilibrer le gameplay et de façonner l’expérience globale de bataille.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />