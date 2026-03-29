---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI : Configurer le système de réanimation"
description: "Apprenez à configurer les mécaniques de réanimation sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Système de réanimation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le système de réanimation dans **Over the Top WWI** détermine comment les joueurs peuvent revenir au combat après avoir été mis à terre. Ajuster ces paramètres vous permet de contrôler à quel point le combat est indulgent ou punitif.

Un système de réanimation plus rapide ou plus fiable peut rendre le gameplay plus accessible, tandis que des réglages plus stricts augmentent le réalisme et les conséquences des erreurs.

<InlineVoucher />

## Configuration

Le système de réanimation se configure dans le fichier de configuration du serveur. Vous pouvez accéder et modifier ce fichier dans votre **panneau de contrôle du serveur de jeux** sous **Configs**. Trouvez et ouvrez le fichier de configuration `ServerConfiguration.ini`. À l’intérieur, repérez les paramètres suivants :

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` définit le temps nécessaire pour réanimer un joueur  
- `ReviveChance` détermine la probabilité de succès d’une réanimation  
- `ReviveMaxDamage` définit les dégâts maximum qu’un joueur peut avoir pour être réanimé  

Ajustez ces valeurs pour contrôler la fréquence des réanimations réussies et la durée du processus.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegardez-le et redémarrez votre serveur. Les nouveaux réglages de réanimation seront appliqués automatiquement.

## Conclusion

Félicitations ! Vous avez configuré avec succès le système de réanimation sur votre **serveur Over the Top WWI**. Cela vous permet d’ajuster la difficulté du combat et d’améliorer l’expérience de jeu globale.

Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />