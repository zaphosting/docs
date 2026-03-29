---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI : Configurer le système de sondage"
description: "Apprenez à configurer les paramètres de vote et de sondage sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Système de sondage
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le système de sondage dans **Over the Top WWI** permet aux joueurs de voter sur diverses actions comme expulser des joueurs, changer de carte ou modifier les réglages du gameplay. Cette fonctionnalité améliore l’interaction communautaire et réduit le besoin d’une intervention constante des admins.

En configurant les paramètres de sondage, tu peux contrôler quels votes sont autorisés et comment ils se comportent pendant la partie.

<InlineVoucher />

## Configuration

Le système de sondage se configure dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` définit le pourcentage de votes nécessaires pour qu’un sondage soit validé
- `EnableBanPlayerPoll` permet aux joueurs de voter pour bannir d’autres joueurs
- `EnableKickPlayerPoll` permet aux joueurs de voter pour expulser d’autres joueurs
- `EnableChangeMapsPoll` permet aux joueurs de voter pour changer de carte
- `EnableMutePlayerPoll` permet aux joueurs de voter pour rendre muets d’autres joueurs
- `EnableCustomPoll` active les options de vote personnalisées
- `ChangeMapImmediately` détermine si un vote de changement de carte réussi est appliqué immédiatement

Modes de jeu autorisés pour les sondages :

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Ces réglages définissent quels modes de jeu peuvent être sélectionnés lors des sondages.

- `1` → Activé
- `0` → Désactivé

Tu peux désactiver certains modes pour limiter les options de vote et garder une expérience de jeu cohérente.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Les nouveaux paramètres de sondage seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès le système de sondage sur ton **serveur de jeux Over the Top WWI**. Cela permet aux joueurs de participer aux décisions et aide à automatiser la gestion du serveur.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />