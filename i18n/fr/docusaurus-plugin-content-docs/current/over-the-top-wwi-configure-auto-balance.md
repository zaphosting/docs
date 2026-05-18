---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI : Configurer l’Auto-Équilibrage des Équipes"
description: "Apprends à configurer l’équilibrage automatique des équipes sur ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Auto-Équilibrage des Équipes
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

L’équilibrage des équipes est crucial pour des parties justes et fun dans **Over the Top WWI**. Sans un bon équilibrage, une équipe peut prendre un avantage énorme, ce qui rend le gameplay déséquilibré et l’expérience joueur moins cool.

Le système d’auto-équilibrage aide à garder l’équité en redistribuant automatiquement les joueurs entre les équipes quand certaines conditions sont remplies.

<InlineVoucher />

## Configuration

L’auto-équilibrage des équipes se configure dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` active ou désactive l’équilibrage automatique des équipes

- `0` → Désactivé  
- `1` → Activé

- `TeamPercentsAutoBalance` définit la répartition souhaitée des équipes. Exemple : `50` = équipes de taille égale  
- `AutoBalanceThreshold` définit le déséquilibre toléré avant que l’équilibrage se déclenche  
- `MinAutoBalanceCount` définit le nombre minimum de joueurs requis pour que l’auto-équilibrage soit actif  
- `LimitTeamSelection` limite la possibilité pour les joueurs de choisir leur équipe manuellement

- `0` → Pas de restriction  
- `1–3` → Limite la sélection d’équipe selon la valeur

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Le système d’auto-équilibrage gérera alors automatiquement la répartition des équipes pendant les parties.

## Conclusion

Bravo ! Tu as configuré avec succès l’équilibrage automatique des équipes sur ton **serveur Over the Top WWI**. Ça garantit des parties plus justes et améliore l’expérience globale pour tous les joueurs.

Si tu as d’autres questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />