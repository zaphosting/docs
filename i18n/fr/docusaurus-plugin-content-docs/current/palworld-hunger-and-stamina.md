---
id: palworld-hunger-and-stamina
title: "Palworld : Faim et Endurance"
description: "Apprenez à ajuster les taux de diminution de la faim et de l’endurance pour les joueurs et les Pals en modifiant la configuration de votre serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Faim et Endurance
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler la vitesse à laquelle la faim et l’endurance diminuent pour les joueurs et les Pals. Dans ce guide, vous apprendrez à modifier le fichier de configuration serveur approprié dans l’interface web ZAP-Hosting et à appliquer des taux de diminution personnalisés en toute sécurité.

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’administration serveur de jeux ZAP-Hosting.

:::info Accès à la configuration requis
Vous devez avoir accès au panneau d’administration du serveur et à la section `Configs` pour modifier manuellement les fichiers de configuration Palworld.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier le comportement de la faim et de l’endurance, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Rendez-vous dans la section `Configs`.
3. Ouvrez le fichier `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Fichier utilisé pour les multiplicateurs de gameplay
Les réglages de faim et d’endurance sont stockés dans `PalWorldSettings.ini`. Ces valeurs font généralement partie de la chaîne d’options principale utilisée par le serveur dédié.
:::

## Modifier les valeurs de faim et d’endurance

Dans `PalWorldSettings.ini`, cherchez la section des paramètres de gameplay contenant les valeurs d’options de votre serveur. Vous devez ajouter ou ajuster les clés de configuration suivantes.

:::caution Orthographe importante dans Palworld
Palworld utilise l’orthographe `Decreace` dans ces entrées de configuration. C’est intentionnel dans le format de configuration serveur, vous devez donc utiliser les clés exactement comme indiqué ci-dessous.
:::

### Clés de configuration disponibles

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Contrôle la vitesse de diminution de la faim du joueur | `1.0` |
| `PlayerStaminaDecreaceRate` | Contrôle la vitesse de diminution de l’endurance du joueur | `1.0` |
| `PalStomachDecreaceRate` | Contrôle la vitesse de diminution de la faim du Pal | `1.0` |
| `PalStaminaDecreaceRate` | Contrôle la vitesse de diminution de l’endurance du Pal | `1.0` |

### Fonctionnement des valeurs

Des valeurs plus basses réduisent la vitesse à laquelle la faim ou l’endurance sont consommées.

| Valeur | Effet |
| --- | --- |
| `1.0` | Taux de diminution par défaut |
| `0.5` | Taux de diminution divisé par deux |
| `0.0` | Désactive complètement la diminution |

:::tip Choisir des réglages équilibrés
Si vous souhaitez une expérience de survie plus détendue sans supprimer complètement la mécanique, `0.5` est un bon point de départ pour la faim et l’endurance.
:::

## Exemple de configuration

Ajoutez ou modifiez les valeurs suivantes dans `PalWorldSettings.ini` selon l’expérience de jeu souhaitée :

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Cet exemple réduit la diminution de la faim et de l’endurance à la moitié du taux par défaut pour les joueurs et les Pals.

Si vous souhaitez désactiver complètement la faim et l’endurance, utilisez :

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Placement des réglages
Selon la structure de votre `PalWorldSettings.ini`, ces valeurs doivent peut-être être incluses dans la liste d’options existante plutôt que placées en lignes séparées. Si votre fichier contient déjà une longue entrée `OptionSettings`, veillez à conserver le formatage existant et à ne modifier ou insérer que les clés pertinentes.
:::

## Sauvegarder et redémarrer le serveur

Après avoir modifié le fichier :

1. Sauvegardez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration serveur de jeux ZAP-Hosting.

Un redémarrage est nécessaire pour que les nouveaux réglages de faim et d’endurance prennent effet.

:::caution Redémarrage obligatoire
Si vous ne redémarrez pas le serveur, les valeurs de configuration mises à jour ne seront pas prises en compte par le serveur de jeux.
:::

## Vérifier les changements en jeu

Une fois le serveur de nouveau en ligne, connectez-vous et testez les nouveaux réglages.

### Points à vérifier

- La faim du joueur diminue-t-elle plus lentement ?
- L’endurance du joueur dure-t-elle plus longtemps lors des déplacements et actions ?
- La faim du Pal diminue-t-elle au rythme attendu ?
- L’utilisation de l’endurance du Pal correspond-elle aux valeurs configurées ?

Si les valeurs ne semblent pas appliquées, rouvrez `PalWorldSettings.ini` et vérifiez que :

- les clés de config sont orthographiées exactement comme indiqué
- les valeurs sont des nombres décimaux valides comme `1.0`, `0.5` ou `0.0`
- les réglages ont bien été sauvegardés
- le serveur a été complètement redémarré après modification

## Conclusion

Félicitations, vous avez réussi à modifier les taux de diminution de la faim et de l’endurance sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂