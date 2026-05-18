---
id: hytale-obtain-uuid
title: "Hytale : Obtenir l’UUID"
description: "Découvrez comment trouver ou obtenir l’UUID d’un joueur pour la configuration du serveur et les permissions → En savoir plus maintenant"
sidebar_label: Obtenir l’UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Chaque joueur sur un serveur Hytale est identifié en interne par un UUID, aussi appelé Identifiant Unique Universel. Cet identifiant est permanent et ne change pas, même si le joueur modifie ensuite son pseudo.

Les UUID sont nécessaires pour diverses tâches administratives comme gérer les permissions, attribuer des groupes, ou référencer des joueurs dans les commandes serveur et les fichiers de configuration.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement en Early Access. Comme le jeu est encore en phase de développement actif, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />


## Obtenir l’UUID

L’UUID d’un joueur peut être obtenu directement depuis le jeu grâce à la commande chat intégrée au serveur. Cette méthode est particulièrement pratique quand le joueur est déjà en ligne et que l’UUID est nécessaire immédiatement.

Connecté avec les permissions suffisantes, ouvre le chat en jeu et exécute la commande de recherche d’UUID pour le joueur souhaité :

```
/whoami <nomdujoueur>
```

Après avoir lancé la commande, le serveur répond directement dans le chat avec l’UUID associé au joueur spécifié. L’UUID retourné identifie de façon unique ce joueur et peut être copié pour gérer les permissions, assigner des groupes, ajouter à la whitelist ou pour d’autres opérations côté serveur.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Conclusion

Obtenir l’UUID d’un joueur est une étape essentielle pour les tâches avancées de gestion sur un serveur Hytale. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂


<InlineVoucher />