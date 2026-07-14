---
id: palworld-player-damage-and-defense
title: "Palworld : Dégâts et Défense du Joueur"
description: "Apprenez à modifier les dégâts infligés et la défense du joueur dans Palworld en éditant la config du serveur et en ajustant correctement les multiplicateurs de dégâts. -> En savoir plus maintenant"
sidebar_label: Palworld : Dégâts et Défense du Joueur
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster les dégâts infligés par un joueur ainsi que les dégâts reçus via des valeurs de configuration serveur. Dans ce guide, vous apprendrez à modifier le bon fichier de configuration sur votre serveur de jeux ZAP-Hosting, à changer les multiplicateurs de dégâts et de défense du joueur, puis à appliquer correctement ces changements.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous que votre serveur Palworld est déjà installé et que vous pouvez accéder à son interface web d’administration.

Vous avez besoin de :  
- un serveur de jeux Palworld actif chez ZAP-Hosting  
- accès à l’interface web du serveur de jeux  
- permission pour éditer les fichiers sous `Configs`  

:::info Configuration manuelle requise  
Cette configuration se fait manuellement en éditant le fichier de configuration Palworld. Aucune commande en jeu supplémentaire n’est nécessaire pour ces réglages spécifiques.  
:::

## Ouvrir le bon fichier de configuration

Pour modifier les dégâts et la défense du joueur, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :  
1. Ouvrez votre serveur Palworld  
2. Allez dans `Configs`  
3. Ouvrez `PalWorldSettings.ini`  

Ce fichier contient les multiplicateurs principaux du gameplay utilisés par le serveur dédié, y compris les valeurs pour les dégâts d’attaque du joueur et la défense contre les dégâts reçus.

:::note Emplacement de la configuration  
Le contexte confirme que le fichier concerné est accessible via l’administration du serveur de jeux sous `Configs`. Si votre interface diffère légèrement, cherchez la liste des fichiers de configuration de votre serveur et ouvrez `PalWorldSettings.ini`.  
:::

## Modifier les valeurs de dégâts et de défense du joueur

Dans `PalWorldSettings.ini`, localisez les entrées de configuration suivantes.

| Clé de config | Fonction | Valeur par défaut |
| --- | --- | --- |
| `PlayerDamageRateAttack` | Contrôle les dégâts infligés par un joueur | `1.000000` |
| `PlayerDamageRateDefense` | Contrôle les dégâts reçus par un joueur | `1.000000` |

Ces valeurs se trouvent généralement dans le bloc principal d’options du fichier.

### Exemple de configuration

Voici un exemple de référence :

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

Si ces valeurs existent déjà, modifiez uniquement les nombres. Si votre fichier utilise une ligne d’option longue, veillez à éditer les entrées existantes sans supprimer les virgules, crochets ou valeurs voisines.

### Fonctionnement des valeurs

| Valeur | Effet |
| --- | --- |
| `PlayerDamageRateAttack` plus élevé | Les joueurs infligent plus de dégâts |
| `PlayerDamageRateAttack` plus bas | Les joueurs infligent moins de dégâts |
| `PlayerDamageRateDefense` plus élevé | Les joueurs reçoivent moins de dégâts (selon la logique du jeu, ce réglage est généralement le multiplicateur des dégâts reçus) |
| `PlayerDamageRateDefense` plus bas | Les joueurs reçoivent plus de dégâts |

:::caution Comprendre le multiplicateur de défense  
`PlayerDamageRateDefense` affecte le multiplicateur des dégâts reçus par le joueur. Une valeur plus basse signifie que le joueur subit plus de dégâts, tandis qu’une valeur plus élevée réduit le danger relatif de façon moins agressive selon l’équilibrage du serveur. Testez toujours vos réglages après modification.  
:::

## Choisir des valeurs de multiplicateurs adaptées

Vous pouvez personnaliser ces réglages selon la difficulté souhaitée pour votre serveur.

### Exemple équilibré

Pour une expérience proche de la valeur par défaut, laissez les deux valeurs à `1.000000` :

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### Exemple combat plus facile

Pour que les joueurs infligent plus de dégâts et survivent plus facilement, augmentez l’attaque et testez prudemment la défense :

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### Exemple combat plus difficile

Pour que les joueurs infligent moins de dégâts et subissent plus de dégâts, réduisez les valeurs :

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip Ajustez progressivement  
Modifiez les multiplicateurs par petits paliers comme `0.1` ou `0.25`. Cela facilite la recherche d’un bon équilibre sans rendre le combat trop facile ou trop punitif.  
:::

## Sauvegarder le fichier et redémarrer le serveur

Après avoir édité `PalWorldSettings.ini`, sauvegardez le fichier dans la section `Configs` de ZAP-Hosting.

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que les nouveaux réglages de dégâts soient pris en compte.

### Actions requises après modification

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter une commande en jeu | Non |
| Exécuter une commande console manuellement | Non |

:::info Redémarrage obligatoire  
Les changements sur `PlayerDamageRateAttack` et `PlayerDamageRateDefense` ne sont pas appliqués de manière fiable tant que le serveur n’a pas été redémarré.  
:::

## Vérifier les nouveaux réglages

Après le redémarrage, connectez-vous à votre serveur et testez le combat directement.

Vérifiez :  
- si le joueur inflige la quantité de dégâts attendue  
- si les attaques ennemies semblent plus fortes ou plus faibles  
- si l’équilibre général correspond toujours à votre gameplay souhaité  

Si le résultat ne vous convient pas, retournez dans `PalWorldSettings.ini`, ajustez à nouveau les multiplicateurs, sauvegardez et redémarrez le serveur.

## Conclusion

Félicitations, vous avez modifié avec succès les réglages de dégâts et de défense du joueur sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂