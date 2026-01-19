---
id: hytale-gamemode
title: "Hytale : Configuration du mode de jeu"
description: "Découvrez comment sécuriser votre serveur Hytale en gérant l’accès des joueurs avec des fonctionnalités de liste blanche et protégez votre expérience de jeu → En savoir plus maintenant"
sidebar_label: Mode de jeu
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Hytale vous permettent de configurer les paramètres de jeu comme le mode de jeu qui définit l’expérience des joueurs. Changer le mode de jeu vous permet d’adapter votre serveur à un style de jeu spécifique ou aux préférences de votre communauté.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement actif, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Changer le mode de jeu

### Console live
Le mode de jeu peut être changé pendant que le serveur tourne en utilisant la console live ou les commandes en jeu, à condition d’avoir les permissions nécessaires. Cette méthode permet aux admins de changer le mode de jeu sans modifier les fichiers de configuration.

Utiliser la commande console met à jour immédiatement le mode de jeu actif pour la session serveur. Selon la configuration du serveur, le changement peut persister jusqu’au prochain redémarrage ou revenir à la valeur définie dans le fichier de configuration.

```
/gamemode <gamemode> <playername>
```

La valeur de `GameMode` détermine quel mode de jeu est appliqué au démarrage du serveur. Selon l’expérience de jeu souhaitée, cette valeur peut être ajustée.

Les valeurs de mode de jeu couramment utilisées sont :

- `Creative` pour une construction et création de contenu sans restrictions
- `Adventure` pour un gameplay structuré avec progression et règles d’interaction définies

Après avoir changé la valeur du mode de jeu, le serveur doit être redémarré pour que le nouveau paramètre soit pris en compte.



### Fichier de configuration

Le mode de jeu peut être défini directement dans le fichier de configuration du serveur.  
Cette méthode est recommandée si vous voulez que le serveur démarre toujours avec un mode de jeu spécifique ou lors de la préparation d’une nouvelle installation serveur.

Le fichier de configuration est accessible via votre panneau de contrôle d’hébergement ou gestionnaire de fichiers. Dans ce fichier, un paramètre contrôle le mode de jeu actif utilisé au démarrage du serveur. Après modification, un redémarrage du serveur est nécessaire pour appliquer le changement.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

La valeur de `GameMode` détermine quel mode de jeu est appliqué au démarrage du serveur. Selon l’expérience de jeu souhaitée, cette valeur peut être ajustée.

Les valeurs de mode de jeu couramment utilisées sont :

- `Creative` pour une construction et création de contenu sans restrictions
- `Adventure` pour un gameplay structuré avec progression et règles d’interaction définies

Après avoir changé la valeur du mode de jeu, le serveur doit être redémarré pour que le nouveau paramètre soit pris en compte.



## Conclusion

En configurant le mode de jeu via le fichier de configuration serveur ou la console live, vous pouvez contrôler précisément l’expérience de jeu sur votre serveur Hytale. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂