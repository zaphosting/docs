---
id: hytale-death-penalty
title: "Hytale : Modifier la pénalité de mort"
description: "Découvrez comment fonctionnent les pénalités de mort sur votre serveur de jeux Hytale → En savoir plus maintenant"
sidebar_label: Modifier la pénalité de mort
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Sur un serveur de jeux Hytale, la **pénalité de mort** détermine comment les joueurs sont impactés lorsqu’ils meurent. Ce réglage contrôle dans quelle mesure la progression du joueur, les objets, la durabilité ou d’autres conséquences de gameplay sont appliquées après un événement de mort.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement active, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />


## Paramètres disponibles pour la pénalité de mort
Les paramètres de pénalité de mort contrôlent comment les morts des joueurs affectent le contenu de l’inventaire et la durabilité des objets. Ces options vous permettent de définir si les objets sont conservés, partiellement perdus ou entièrement lâchés, ainsi que la quantité d’usure que les objets subissent à la mort.

Les options de configuration suivantes sont disponibles :

**ItemsLossMode**  
Ce paramètre définit le comportement global de la perte d’objets lors de la mort d’un joueur.  
Il supporte les valeurs suivantes :

- `None` – Les joueurs conservent tout leur inventaire après la mort  
- `All` – Tous les objets sont lâchés à la mort  
- `Configured` – La perte d’objets est déterminée par des réglages basés sur un pourcentage

**ItemsAmountLossPercentage**  
Cette valeur s’applique uniquement lorsque `ItemsLossMode` est réglé sur `Configured`.  
Elle définit la quantité de chaque pile d’objets retirée à la mort, exprimée en pourcentage.  
Par exemple, une valeur de `50.0` signifie que la moitié de chaque pile est perdue.

**ItemsDurabilityLossPercentage**  
Ce paramètre contrôle la quantité de durabilité que les objets perdent lorsqu’un joueur meurt.  
La valeur est définie en pourcentage de la durabilité actuelle de l’objet et permet à la mort d’avoir des conséquences sans retirer complètement les objets.

Ensemble, ces paramètres offrent un contrôle précis sur le niveau de sévérité ou de clémence de la mort sur le serveur.  
Un réglage soigné garantit une expérience équilibrée qui correspond à la difficulté et au style de jeu souhaités sur le serveur.



## Configuration de la pénalité de mort

Les paramètres de pénalité de mort se trouvent dans le fichier principal `config.json` de votre serveur. Ces valeurs sont lues au démarrage du serveur et s’appliquent globalement à tous les joueurs.

Dans le fichier de configuration, les paramètres liés à la mort font partie de la configuration gameplay. Pour ajouter ou modifier la pénalité de mort, localisez la ligne suivante dans `config.json` :

```
"GameplayConfig": "Default",
```

Cette entrée définit le profil de configuration gameplay actif. La configuration de la pénalité de mort se place directement sous cette ligne en tant que nouveau bloc. Une fois localisé, ajoutez le bloc de configuration de la mort pour définir comment le respawn et la perte d’objets sont gérés :

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

L’exemple suivant montre une configuration typique où la perte d’objets et la perte de durabilité sont partiellement appliquées à la mort :

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

Dans cette configuration, le serveur utilise le mode de perte `Configured`, ce qui signifie que la perte d’objets est contrôlée par des pourcentages.  
Lorsqu’un joueur meurt, la moitié de chaque pile d’objets est retirée et les objets perdent 25 % de leur durabilité actuelle.

Si aucune perte d’objets ne doit se produire, le mode de perte peut être réglé sur `None`, auquel cas les valeurs en pourcentage sont ignorées :

```
{
  "ItemsLossMode": "None"
}
```

Pour une expérience plus punitive où tous les objets sont lâchés à la mort, la configuration peut être réglée ainsi :

```
{
  "ItemsLossMode": "All"
}
```

Après avoir modifié le `config.json`, le serveur doit être redémarré pour que les changements prennent effet.  
Il est recommandé de vérifier le comportement en jeu après le redémarrage pour s’assurer que la pénalité de mort correspond à la difficulté souhaitée.



## Conclusion

Avec la pénalité de mort configurée, vous avez maintenant une vision claire de la gestion des morts des joueurs sur votre serveur de jeux Hytale. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂



<InlineVoucher />