---
id: gameserver-scheduled-tasks
title: "Serveur de jeux : Tâches planifiées (Cron)"
description: "Découvrez comment automatiser les processus serveur avec des tâches planifiées pour les sauvegardes, la gestion des services et les commandes → En savoir plus maintenant"
sidebar_label: Tâches planifiées
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Crée des tâches planifiées qui s’exécutent automatiquement à des horaires définis. Cela te permet d’automatiser différents processus sur ton serveur. Tu peux spécifier si la tâche doit être exécutée une seule fois ou de manière répétée. 



## Types de tâches

Les tâches planifiées te permettent d’exécuter différents types de tâches. Les types suivants sont actuellement supportés : 

- Démarrer un service
- Arrêter un service
- Redémarrer un service
- Redémarrer le serveur (uniquement s’il est en ligne)
- Créer une sauvegarde
- Exécuter une commande

Les types prédéfinis te permettent de gérer ton serveur de façon largement automatisée. Surtout le type **Exécuter une commande** te permet de créer des tâches beaucoup plus spécifiques et personnalisées. 

:::warning Limites de fréquence
Certaines tâches planifiées ont des limites de fréquence, ce qui signifie qu’elles ne peuvent pas être exécutées un nombre infini de fois et qu’elles ont un temps de recharge/une limite.
 :::

## Créer des tâches

Va dans Tâches planifiées dans l’administration de ton serveur de jeux sous Paramètres. Pour créer une nouvelle tâche planifiée, clique sur le bouton vert avec le symbole plus à droite de la liste des tâches planifiées. Une nouvelle fenêtre pop-up s’ouvrira où tu pourras configurer ta tâche. 

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## Gérer les tâches

Dans la configuration d’une tâche, tu peux définir quel type de tâche tu souhaites créer. Donne un nom (optionnel) et sélectionne un des types de tâches proposés. Cet exemple montre comment créer une tâche planifiée pour redémarrer régulièrement le service. 

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Sélectionne l’option `répétée` pour le type de répétition. Dans le champ expression Cron, tu dois maintenant spécifier les intervalles auxquels la tâche doit s’exécuter. Ici, le service est redémarré toutes les trois heures. 

:::tip Générateur Cron

Tu ne connais pas la structure ou la syntaxe de Cron ? Utilise simplement le [**Crontab Guru**](https://crontab.guru/). C’est une application simple qui te permet de construire et copier des expressions cron en quelques clics. 

:::

Pour finaliser la création, sélectionne la période pendant laquelle la tâche planifiée doit être active, puis clique sur enregistrer.

## Supprimer des tâches

Tu veux supprimer des tâches existantes ? Supprime-les dans la liste en cliquant sur le bouton rouge de la corbeille à droite. 

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## Conclusion

Maintenant tu sais comment créer, gérer et supprimer des tâches planifiées. Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />
