---
id: palworld-building-limits
title: "Palworld : Limites de Construction"
description: "Apprenez à modifier les limites de construction, les règles de base et les restrictions de zone dans Palworld en éditant manuellement la configuration de votre serveur. -> En savoir plus maintenant"
sidebar_label: "Palworld : Limites de Construction"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler plusieurs limites et restrictions de construction via la configuration du serveur. Dans ce guide, vous apprendrez à éditer manuellement le fichier de config approprié dans l’interface web ZAP-Hosting, modifier les valeurs de construction pertinentes, et appliquer correctement les changements.



## Préparation

Avant de commencer, assurez-vous que :

- vous avez accès à votre serveur de jeux Palworld dans l’administration serveur de jeux ZAP-Hosting
- votre serveur est actuellement hors ligne ou que vous êtes prêt à le redémarrer après les modifications
- vous savez que ce guide couvre les limites générales de construction et les restrictions de zone, pas les limites spécifiques aux guildes

:::info Configuration Manuelle Obligatoire
Ces paramètres doivent être modifiés manuellement dans le fichier de configuration. Le fichier concerné est accessible dans l’administration serveur de jeux ZAP-Hosting sous `Configs`.
:::

:::note Limites des Bases de Guilde
Si vous souhaitez modifier le nombre de bases par guilde plutôt que les limites générales de construction abordées ici, vous devez utiliser le guide spécifique aux limites des bases de guilde si disponible dans ZAP-Docs.
:::

## Ouvrir le fichier de configuration

Pour modifier les limites de construction, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans `Configs`.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les paramètres principaux du monde et du gameplay pour votre serveur Palworld, incluant plusieurs entrées liées à la construction.

## Modifier les paramètres de limite de construction

Les valeurs pertinentes se trouvent dans la section `OptionSettings` du fichier `PalWorldSettings.ini`.

### Clés de configuration importantes

Utilisez les paramètres suivants pour contrôler les limites de construction et les restrictions de zone :

| Clé de config | Description | Exemple de valeur |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Définit le nombre maximum de constructions par joueur. `0` désactive la limite. | `0` |
| `BaseCampMaxNum` | Définit le nombre maximum de camps de base autorisés sur l’ensemble du serveur. | `128` |
| `bBuildAreaLimit` | Contrôle si les restrictions de construction près de certaines structures sont activées. | `False` |

### Exemple de configuration

Selon le contenu actuel de votre fichier, ces valeurs font généralement partie de la ligne `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Si votre fichier contient déjà une ligne `OptionSettings` plus longue, ne supprimez pas les autres valeurs existantes. Vous devez uniquement modifier ou ajouter les entrées pertinentes dans ce même bloc de paramètres.

### Fonction de chaque valeur

| Paramètre | Effet |
| --- | --- |
| `MaxBuildingLimitNum=0` | Supprime la limite de construction par joueur |
| `MaxBuildingLimitNum=[votre_nombre]` | Limite chaque joueur au nombre spécifié de constructions |
| `BaseCampMaxNum=[votre_nombre]` | Définit le nombre total de camps de base autorisés sur le serveur |
| `bBuildAreaLimit=True` | Empêche la construction près des structures restreintes comme les points de voyage rapide |
| `bBuildAreaLimit=False` | Désactive cette restriction de zone |

:::caution Conserver la Syntaxe Existante
Le fichier `PalWorldSettings.ini` est sensible à la mise en forme. Veillez à ne modifier que les valeurs nécessaires et à conserver les virgules, crochets et la structure globale `OptionSettings=(...)` intactes.
:::

## Enregistrer vos modifications

Après avoir modifié les valeurs :

1. Enregistrez le fichier dans la section `Configs`.
2. Vérifiez une dernière fois la ligne pour détecter d’éventuelles erreurs de formatage.

Si la syntaxe est incorrecte, le serveur peut ignorer les paramètres modifiés ou ne pas les appliquer correctement.

### Exemples de valeurs personnalisées

Voici un exemple qui limite chaque joueur à `5000` constructions, autorise jusqu’à `20` camps de base sur le serveur, et maintient les zones de construction restreintes activées :

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Voici un autre exemple qui supprime la limite de construction par joueur et désactive les restrictions de zone :

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Redémarrer le serveur

Après avoir enregistré la configuration, vous devez redémarrer votre serveur Palworld pour que les nouveaux paramètres soient pris en compte.

Dans l’administration serveur de jeux ZAP-Hosting :

1. Arrêtez le serveur s’il est encore en fonctionnement
2. Démarrez-le à nouveau

Un redémarrage complet est nécessaire pour que les modifications dans `PalWorldSettings.ini` prennent effet.

:::tip Appliquer les Modifications Fiablement
Si vous effectuez plusieurs modifications de configuration en même temps, il est conseillé d’enregistrer toutes les modifications d’abord, puis de faire un seul redémarrage ensuite. Cela évite des temps d’arrêt inutiles.
:::

## Vérifier les nouvelles limites

Une fois le serveur de nouveau en ligne, connectez-vous et testez le nouveau comportement de construction.

Vous devez vérifier :

- si les joueurs peuvent placer plus ou moins de structures qu’avant
- si le nombre total de camps de base correspond à la valeur configurée
- si la construction près des structures restreintes est autorisée ou bloquée selon `bBuildAreaLimit`

Si les changements ne semblent pas appliqués, rouvrez `PalWorldSettings.ini` et confirmez que :

- les valeurs ont bien été enregistrées
- les clés sont bien dans le bloc `OptionSettings`
- le serveur a été complètement redémarré après la modification

## Référence de configuration

| Fichier | Emplacement dans ZAP-Hosting | Action requise après modification |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` dans votre administration serveur de jeux | Redémarrer le serveur |

| Paramètre | Utilisation recommandée |
| --- | --- |
| `MaxBuildingLimitNum` | Contrôler les limites de construction par joueur |
| `BaseCampMaxNum` | Contrôler le nombre total de camps de base sur le serveur |
| `bBuildAreaLimit` | Autoriser ou restreindre la construction près des structures protégées de la carte |

## Conclusion

Félicitations, vous avez modifié avec succès les limites de construction sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂