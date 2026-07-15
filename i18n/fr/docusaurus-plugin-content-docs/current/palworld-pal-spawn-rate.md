---
id: palworld-pal-spawn-rate
title: "Palworld : Taux d'apparition des Pals"
description: "Apprenez à modifier le taux d'apparition des Pals dans Palworld en éditant le paramètre de fréquence d'apparition dans votre serveur -> Découvrez comment maintenant"
sidebar_label: "Palworld : Taux d'apparition des Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler la fréquence d'apparition des Pals dans votre monde via un paramètre de configuration serveur. Dans ce guide, vous apprendrez à modifier le fichier de configuration approprié dans l'administration de votre serveur de jeux ZAP-Hosting et à appliquer un nouveau taux d'apparition des Pals en toute sécurité.



## Preparation

Avant de commencer, assurez-vous que :

- vous avez accès à votre serveur de jeux Palworld dans l'interface web ZAP-Hosting
- votre serveur est hors ligne ou que vous êtes prêt à le redémarrer après les modifications
- vous comprenez que des valeurs d'apparition plus élevées peuvent augmenter la charge serveur et réduire les performances

:::info Configuration Manuelle Requise
Cette modification s'effectue manuellement en éditant le fichier de configuration du serveur sous **Configs** dans l'administration de votre serveur de jeux. Il n'existe pas de curseur dédié dans le panneau ZAP-Hosting pour ce paramètre spécifique.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier le taux d'apparition des Pals, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l'administration de votre serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur **Palworld**.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les principaux paramètres liés au gameplay du serveur, y compris le multiplicateur d'apparition des Pals.

:::note Emplacement du fichier de configuration
Pour les serveurs Palworld ZAP-Hosting, le fichier concerné est accessible directement via la section **Configs** dans l'administration du serveur, comme fourni lors de la configuration.
:::

## Modifier le taux d'apparition des Pals

Le paramètre à modifier est `PalSpawnNumRate`.

### À quoi sert `PalSpawnNumRate`

`PalSpawnNumRate` contrôle le multiplicateur de fréquence d'apparition des Pals sur votre serveur.

| Clé de config | Valeur par défaut | Description |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Contrôle le nombre de Pals qui apparaissent dans le monde. Des valeurs plus élevées augmentent la fréquence d'apparition. |

Dans Palworld, cette valeur fait généralement partie de la ligne `OptionSettings` dans le fichier `PalWorldSettings.ini`.

### Modifier le paramètre

Ouvrez `PalWorldSettings.ini` et cherchez la section `OptionSettings=`. Dans cette section, trouvez l'entrée `PalSpawnNumRate`.

Si l'entrée existe déjà, modifiez sa valeur. Par exemple :

```ini
PalSpawnNumRate=1.000000
```

Vous pouvez l'augmenter ainsi :

```ini
PalSpawnNumRate=2.000000
```

Cet exemple double le multiplicateur d'apparition des Pals par rapport à la valeur par défaut.

:::tip Valeurs de départ recommandées
Commencez par de petites augmentations comme `1.500000` ou `2.000000` et testez les performances du serveur avant d'utiliser des valeurs plus élevées.
:::

### Exemple d'extrait de configuration

Selon le contenu actuel de votre fichier, le paramètre peut apparaître dans une longue ligne `OptionSettings` similaire à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Conserver la syntaxe existante
Ne supprimez pas les virgules, crochets ou autres valeurs existantes dans la ligne `OptionSettings`. Une mauvaise mise en forme dans `PalWorldSettings.ini` peut empêcher le serveur de charger correctement la configuration.
:::

## Valeurs recommandées et impact sur les performances

Vous pouvez utiliser différentes valeurs selon l'expérience de jeu souhaitée.

| Valeur | Effet |
| --- | --- |
| `1.000000` | Taux d'apparition par défaut des Pals |
| `1.500000` | Fréquence d'apparition légèrement augmentée |
| `2.000000` | Plus de Pals visibles dans le monde |
| `3.000000` ou plus | Forte augmentation des apparitions, peut affecter les performances |

Des valeurs plus élevées rendent le monde plus actif, mais augmentent aussi le nombre d'entités que le serveur doit gérer.

:::danger Valeurs élevées peuvent réduire la stabilité
Des réglages d'apparition très élevés peuvent nuire aux performances du serveur, surtout sur des serveurs chargés ou combinés à d'autres paramètres exigeants. En cas de lag, réduisez la valeur et redémarrez le serveur.
:::

## Sauvegarder et redémarrer le serveur

Après avoir modifié le fichier :

1. Enregistrez les changements dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l'administration du serveur de jeux ZAP-Hosting.

Un redémarrage est nécessaire pour que le nouveau taux d'apparition des Pals soit pris en compte.

## Vérifier la modification

Une fois le serveur en ligne, connectez-vous à votre serveur Palworld et observez l'activité dans les zones où les Pals apparaissent normalement.

Si le taux d'apparition ne semble pas avoir changé :

- rouvrez `PalWorldSettings.ini` et vérifiez que `PalSpawnNumRate` est bien présent
- assurez-vous que la valeur est dans la bonne section `OptionSettings`
- vérifiez que le fichier a bien été enregistré
- redémarrez à nouveau le serveur après avoir confirmé la modification

## Référence de configuration

| Élément | Valeur |
| --- | --- |
| Fichier de configuration | `PalWorldSettings.ini` |
| Emplacement ZAP-Hosting | Administration serveur de jeux → `Configs` |
| Nom du paramètre | `PalSpawnNumRate` |
| Valeur par défaut | `1.000000` |
| Redémarrage requis | Oui |

## Conclusion

Félicitations, vous avez modifié avec succès le taux d'apparition des Pals sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂