---
id: palworld-increase-xp
title: "Palworld : Augmenter l’XP"
description: "Apprenez à augmenter l’XP dans le jeu Palworld en modifiant la configuration du serveur Palworld et en ajustant correctement le multiplicateur de taux d’XP. -> En savoir plus maintenant"
sidebar_label: Palworld : Augmenter l’XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster les multiplicateurs de gameplay via la configuration de son serveur, y compris la quantité d’XP que les joueurs gagnent. Dans ce guide, vous apprendrez comment augmenter le taux d’XP sur votre serveur Palworld ZAP-Hosting en modifiant le bon fichier de configuration et en appliquant correctement les changements.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission de modifier ses fichiers de configuration.

:::info Accès à la configuration requis
Vous devez avoir accès à l’administration web de votre serveur pour modifier les fichiers de configuration dans la section `Configs`. Si vous ne pouvez pas accéder à l’administration du serveur, vérifiez d’abord vos droits sur le produit dans le panneau ZAP-Hosting.
:::

## Localiser le fichier de configuration

Pour augmenter l’XP sur votre serveur Palworld, vous devez modifier le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans la section `Configs`.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les paramètres principaux du gameplay utilisés par le serveur dédié Palworld, y compris le multiplicateur d’XP.

## Modifier le multiplicateur d’XP

Le paramètre responsable du gain d’XP est `ExpRate`.

### Trouver le bon paramètre

Ouvrez `PalWorldSettings.ini` et cherchez la ligne `OptionSettings` ou la section où les multiplicateurs de gameplay sont définis.

L’entrée de configuration concernée est :

```ini
ExpRate=1.000000
```

### Modifier la valeur

Ajustez la valeur de `ExpRate` au multiplicateur que vous souhaitez appliquer.

| Clé de config | Valeur par défaut | Exemple de valeur | Effet |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Double le gain d’XP |
| `ExpRate` | `1.000000` | `3.000000` | Triple le gain d’XP |

Par exemple, pour activer le double XP, mettez :

```ini
ExpRate=2.000000
```

Pour activer le triple XP, mettez :

```ini
ExpRate=3.000000
```

:::tip Format de valeur recommandé
Les paramètres du serveur Palworld utilisent généralement des valeurs décimales comme `1.000000` ou `2.000000`. Utiliser ce format permet de garder la configuration cohérente et plus lisible.
:::

## Exemple de configuration

Selon le contenu actuel de votre fichier, le paramètre apparaîtra généralement dans le bloc `OptionSettings`. Par exemple :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Si `ExpRate` est déjà présent, modifiez simplement sa valeur. S’il manque, ajoutez `ExpRate=[votre_valeur]` dans le bloc `OptionSettings=(...)` existant.

:::caution Modifier le bloc OptionSettings existant avec précaution
Ne créez pas plusieurs entrées `OptionSettings` sauf si votre configuration actuelle l’exige spécifiquement. Dans la plupart des cas, vous devez uniquement modifier la ligne `OptionSettings=(...)` existante et changer la valeur de `ExpRate` à cet endroit.
:::

## Sauvegarder et redémarrer le serveur

Après avoir modifié le multiplicateur d’XP :

1. Sauvegardez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration ZAP-Hosting.

Un redémarrage est nécessaire car Palworld n’applique pas ce changement de paramètre de gameplay immédiatement si le serveur est déjà en fonctionnement.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |

:::note Aucune commande supplémentaire requise
Pour ce paramètre, aucune commande supplémentaire en jeu ou dans la console n’est normalement nécessaire. Le nouveau taux d’XP est appliqué après le redémarrage du serveur.
:::

## Vérifier le nouveau taux d’XP

Une fois le serveur de nouveau en ligne, connectez-vous et effectuez une action qui donne de l’XP, comme vaincre des ennemis, capturer des Pals ou accomplir des activités normales du gameplay.

Si le gain d’XP ne semble pas changer :

- rouvrez `PalWorldSettings.ini`
- confirmez que `ExpRate` est bien présent dans le bloc `OptionSettings`
- vérifiez que la valeur est correctement écrite, par exemple `2.000000`
- assurez-vous que le serveur a bien été redémarré après la sauvegarde

:::danger Évitez une syntaxe de configuration invalide
Si vous supprimez accidentellement des virgules, crochets ou d’autres valeurs dans la ligne `OptionSettings=(...)`, le serveur peut ignorer le paramètre ou ne pas charger correctement la configuration. Relisez toujours la ligne complète avant de sauvegarder.
:::

## Conclusion

Félicitations, vous avez réussi à augmenter le taux de gain d’XP sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂