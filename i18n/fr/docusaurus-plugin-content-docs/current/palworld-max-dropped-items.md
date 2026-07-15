---
id: palworld-max-dropped-items
title: "Palworld : Nombre maximal d’objets lâchés"
description: "Apprenez à modifier les limites d’objets lâchés et les paramètres de disparition des objets sur votre serveur de jeux Palworld en éditant les bonnes valeurs de configuration. -> En savoir plus maintenant"
sidebar_label: "Palworld : Nombre maximal d’objets lâchés"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler combien d’objets lâchés peuvent exister dans votre monde et combien de temps ces objets restent avant de disparaître. Dans ce guide, vous apprendrez à modifier le fichier de configuration approprié dans l’interface ZAP-Hosting, ajuster les paramètres des objets lâchés, et appliquer les changements en toute sécurité.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission d’éditer ses fichiers de configuration.

:::info Configuration manuelle requise
Cette configuration se fait manuellement en éditant la configuration du serveur Palworld. Le fichier nécessaire est accessible dans l’administration de votre serveur de jeux sous `Configs`.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier la limite d’objets lâchés, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld  
2. Allez dans `Configs`  
3. Ouvrez le fichier `PalWorldSettings.ini`

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris le comportement des objets lâchés.

## Modifier les paramètres des objets lâchés

Les paramètres des objets lâchés sont configurés via des entrées dans `PalWorldSettings.ini`. Vous devez ajuster les valeurs pertinentes dans la ligne ou section active du fichier.

### Clés de configuration pertinentes

Utilisez les clés de configuration suivantes pour contrôler les objets lâchés :

| Clé de config | Valeur par défaut | Description |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Nombre maximal d’objets lâchés pouvant exister simultanément dans le monde |
| `DropItemAliveMaxHours` | `1.0` | Durée en heures avant que les objets lâchés ne disparaissent automatiquement |

### Exemple de configuration

Selon le contenu actuel de votre fichier, ces valeurs font généralement partie de l’entrée des options Palworld. Par exemple :

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

Si ces clés existent déjà dans votre entrée `OptionSettings`, modifiez uniquement les valeurs. Par exemple :

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

Dans cet exemple :

- `DropItemMaxNum=2000` limite le monde à `2000` objets lâchés  
- `DropItemAliveMaxHours=0.500000` fait disparaître les objets lâchés après `0.5` heures, soit `30` minutes  

:::note Format des valeurs  
Les paramètres du serveur Palworld utilisent souvent des valeurs décimales avec plusieurs zéros après la virgule, comme `1.000000`. Vous devez conserver le style de formatage existant dans votre fichier autant que possible.
:::

## Choisir des valeurs adaptées

Les valeurs correctes dépendent du nombre de joueurs, de l’activité du serveur et de la génération de butin.

### Cas d’usage recommandés

| Scénario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Petit serveur privé | `3000` | `1.000000` |
| Serveur multijoueur actif | `2000` | `0.500000` |
| Configuration axée performance | `1000` à `1500` | `0.250000` à `0.500000` |

### Considérations de performance

Des limites plus basses sur les objets lâchés peuvent améliorer les performances du serveur, surtout si :

- plusieurs joueurs sont actifs en même temps  
- votre monde génère un grand nombre d’objets  
- les joueurs farment, construisent ou laissent souvent du butin au sol  

:::tip Améliorer les performances avec des limites d’objets plus basses  
Si vous constatez des lags ou une baisse de réactivité du serveur, réduire à la fois la limite maximale d’objets lâchés et le timer de disparition peut aider à réduire l’encombrement du monde et améliorer la stabilité.
:::

:::caution Évitez des valeurs trop basses  
Si vous définissez ces valeurs trop basses, les joueurs peuvent remarquer que les objets disparaissent trop vite ou que le plafond d’objets lâchés est atteint plus rapidement que prévu. Testez soigneusement les changements après application.
:::

## Sauvegarder et appliquer les modifications

Après avoir édité `PalWorldSettings.ini`, sauvegardez le fichier dans l’interface ZAP-Hosting.

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que les nouveaux paramètres d’objets lâchés soient pris en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Non |

:::info Redémarrage requis  
Les modifications dans `PalWorldSettings.ini` ne seront effectives qu’après le redémarrage du serveur Palworld.
:::

## Vérifier les nouveaux paramètres

Après le redémarrage, connectez-vous à votre serveur et observez le comportement des objets lâchés pendant le jeu normal.

Vous devez vérifier si :

- le nombre d’objets lâchés est bien contrôlé comme prévu  
- les objets restent au sol pendant la durée souhaitée  
- les performances du serveur s’améliorent après réduction de la quantité ou durée de vie des objets  

Si nécessaire, retournez dans `PalWorldSettings.ini` pour affiner davantage les valeurs.

## Conclusion

Félicitations, vous avez configuré avec succès le nombre maximal d’objets lâchés et le timer de disparition sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂