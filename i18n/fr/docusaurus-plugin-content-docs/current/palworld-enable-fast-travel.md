---
id: palworld-enable-fast-travel
title: "Palworld : Activer le voyage rapide"
description: "Apprenez à configurer le voyage rapide sur votre serveur Palworld, y compris les paramètres de voyage rapide uniquement depuis la base et les modifications manuelles du fichier de config. -> En savoir plus maintenant"
sidebar_label: Palworld : Activer le voyage rapide
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler comment les joueurs utilisent le voyage rapide sur votre serveur via la configuration principale. Dans ce guide, vous apprendrez à modifier le bon fichier de config dans l’interface ZAP-Hosting, ajuster les paramètres de voyage rapide et appliquer correctement les changements.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission d’éditer ses fichiers de configuration.

:::info Configuration manuelle requise
Cette configuration se fait en modifiant manuellement le fichier de config du serveur Palworld. Vous pouvez accéder au fichier nécessaire via l’administration de votre serveur de jeux sous `Configs`.
:::

## Localiser le fichier de configuration

Pour changer le comportement du voyage rapide, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans `Configs`.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les paramètres liés au gameplay du serveur, y compris les options de voyage rapide.

:::note Emplacement de la configuration
Selon la version actuelle du panneau, le fichier est géré via la section `Configs` dans l’administration de votre serveur. Si le chemin exact n’est pas affiché dans l’interface, vous pouvez quand même modifier en toute sécurité les valeurs nécessaires directement dans `PalWorldSettings.ini`.
:::

## Comprendre les paramètres de voyage rapide

Palworld propose deux clés de configuration importantes pour le comportement du voyage rapide.

| Clé de config | Type de valeur | Valeur par défaut | Fonction |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Active ou désactive complètement le voyage rapide |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Restreint le voyage rapide aux déplacements uniquement entre bases |

Ces valeurs font partie de la chaîne d’options du serveur dans `PalWorldSettings.ini`.

:::tip Choisissez la bonne configuration
Si vous voulez une expérience de jeu plus immersive avec plus d’exploration, vous pouvez désactiver complètement le voyage rapide. Si vous souhaitez garder le voyage rapide mais limiter la liberté de déplacement des joueurs, le voyage rapide uniquement entre bases est généralement la meilleure option.
:::

## Modifier les valeurs de voyage rapide

Ouvrez `PalWorldSettings.ini` et cherchez la section `OptionSettings=`. Dans Palworld, beaucoup de paramètres serveur sont stockés sous forme de valeurs séparées par des virgules dans cette entrée.

### Activer le voyage rapide normal

Pour autoriser le voyage rapide standard, assurez-vous que la valeur suivante est présente :

```ini
bEnableFastTravel=True
```

Si vous voulez que les joueurs utilisent toutes les options normales de voyage rapide, vérifiez aussi que cette valeur est définie comme suit :

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Désactiver complètement le voyage rapide

Pour désactiver totalement le voyage rapide, mettez :

```ini
bEnableFastTravel=False
```

Dans ce cas, les joueurs devront se déplacer manuellement dans le monde.

### Restreindre le voyage rapide aux bases uniquement

Si vous souhaitez autoriser le voyage rapide uniquement entre les camps de base, utilisez cette combinaison :

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

Cette configuration est souvent préférée pour les serveurs PvP car elle permet un déplacement limité sans offrir une liberté totale.

:::caution Ne modifiez pas la syntaxe existante
Ne supprimez pas d’autres valeurs existantes dans la ligne `OptionSettings=` sauf si vous souhaitez vraiment les changer. Palworld stocke beaucoup de paramètres dans une seule entrée séparée par des virgules, donc une mauvaise mise en forme peut empêcher le chargement des paramètres.
:::

## Exemple de configuration

Voici un exemple montrant à quoi peut ressembler la partie pertinente de la config dans `PalWorldSettings.ini` :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Remplacez les valeurs de voyage rapide dans votre config existante selon la configuration que vous souhaitez appliquer.

:::note Configurations serveur existantes
Votre ligne `OptionSettings=` contiendra généralement beaucoup plus de valeurs que dans l’exemple ci-dessus. Vous n’avez besoin d’ajuster que `bEnableFastTravel` et `bEnableFastTravelOnlyBaseCamp` en conservant le reste de la ligne intact.
:::

## Configurations recommandées

Vous pouvez utiliser les combinaisons suivantes selon le type de serveur que vous souhaitez exploiter :

| Style de serveur | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Résultat |
| --- | --- | --- | --- |
| Gameplay par défaut | `True` | `False` | Voyage rapide complet activé |
| Orientation exploration | `False` | `False` | Voyage rapide complètement désactivé |
| PvP ou déplacement restreint | `True` | `True` | Voyage rapide uniquement entre bases |

## Appliquer les changements

Après avoir sauvegardé vos modifications dans `PalWorldSettings.ini`, vous devez redémarrer le serveur pour que les nouveaux paramètres soient pris en compte.

### Redémarrer le serveur

Utilisez la fonction de redémarrage dans l’administration de votre serveur de jeux ZAP-Hosting après avoir sauvegardé le fichier.

Aucune commande supplémentaire en jeu ou console n’est normalement nécessaire. La nouvelle configuration de voyage rapide est appliquée au démarrage du serveur.

:::info Redémarrage obligatoire
Les changements dans `PalWorldSettings.ini` ne seront pas appliqués de manière fiable tant que le serveur Palworld n’aura pas été redémarré.
:::

## Vérifier le résultat

Une fois le serveur de nouveau en ligne, connectez-vous et testez le comportement du voyage rapide en jeu.

Vous devez vérifier que :

- le voyage rapide complet fonctionne s’il est activé
- aucune option de voyage rapide n’est disponible s’il est désactivé
- seul le voyage entre bases fonctionne si vous avez activé le voyage rapide limité aux bases

:::tip Résolution des problèmes de comportement incorrect
Si le paramètre ne s’applique pas, rouvrez `PalWorldSettings.ini` et vérifiez les erreurs de format dans la ligne `OptionSettings=`, notamment les virgules manquantes, les clés dupliquées ou les valeurs `True` / `False` invalides.
:::

## Conclusion

Félicitations, vous avez activé ou configuré avec succès le voyage rapide sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂