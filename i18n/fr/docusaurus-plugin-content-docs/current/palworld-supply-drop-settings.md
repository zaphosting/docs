---
id: palworld-supply-drop-settings
title: "Palworld : Paramètres des Supply Drops"
description: "Apprenez à modifier la fréquence des supply drops dans Palworld sur votre serveur de jeux Palworld en éditant manuellement le paramètre SupplyDropSpan. -> En savoir plus maintenant"
sidebar_label: Palworld : Paramètres des Supply Drops
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld inclut des supply drops qui apparaissent à intervalles réguliers et peuvent fournir des ressources utiles pendant le jeu. Dans ce guide, vous apprendrez à modifier manuellement la fréquence des supply drops sur votre serveur de jeux Palworld ZAP-Hosting en éditant le fichier de configuration approprié.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission d’éditer les fichiers de configuration du serveur.

:::info Configuration Manuelle Requise
Cette configuration se fait manuellement via l’administration de votre serveur sous **Configs**. Après avoir modifié le paramètre, vous devez redémarrer le serveur pour que Palworld charge la configuration mise à jour.
:::

## Localiser le fichier de configuration correct

Pour changer l’intervalle des supply drops, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’interface web ZAP-Hosting :

1. Ouvrez l’administration de votre serveur de jeux Palworld.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris le paramètre du timer des supply drops.

## Modifier le paramètre des supply drops

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings` et localisez l’entrée `SupplyDropSpan`.

La clé de configuration concernée est indiquée ci-dessous :

| Paramètre | Description | Exemple |
| --- | --- | --- |
| `SupplyDropSpan` | Définit l’intervalle entre les supply drops en minutes | `180` |

Si l’entrée existe déjà, modifiez sa valeur selon l’intervalle souhaité.

### Valeurs d’exemple

Vous pouvez utiliser les valeurs suivantes comme référence :

| Valeur | Résultat |
| --- | --- |
| `30` | Supply drops très fréquents |
| `60` | Supply drops toutes les 1 heure |
| `180` | Paramètre par défaut, toutes les 3 heures |
| `360` | Supply drops toutes les 6 heures |

### Exemple de configuration

Selon le contenu actuel de votre fichier, le paramètre apparaîtra dans la ligne plus large `OptionSettings`. Par exemple :

```ini
OptionSettings=(SupplyDropSpan=180)
```

Si votre fichier contient déjà plusieurs paramètres dans le même bloc `OptionSettings=(...)`, ne modifiez que la valeur de `SupplyDropSpan` et laissez les autres entrées intactes.

Par exemple :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Préservez les Paramètres Existants
Ne supprimez pas d’autres valeurs dans le bloc `OptionSettings` lors de l’édition de `SupplyDropSpan`. Si vous supprimez accidentellement des virgules, crochets ou autres entrées, la configuration de Palworld risque de ne plus se charger correctement.
:::

## Enregistrer et appliquer les modifications

Une fois que vous avez mis à jour la valeur `SupplyDropSpan` :

1. Enregistrez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration ZAP-Hosting.

Un redémarrage est nécessaire car Palworld n’applique pas ce paramètre en direct lorsque le serveur est déjà en fonctionnement.

:::note Aucune Commande Supplémentaire Nécessaire
Aucune commande supplémentaire en jeu ou console n’est normalement requise pour ce changement. Le redémarrage du serveur est l’étape nécessaire pour appliquer le nouvel intervalle des supply drops.
:::

## Vérifier le nouvel intervalle des supply drops

Après le redémarrage, votre serveur utilisera la nouvelle valeur `SupplyDropSpan`. Vous pouvez vérifier la modification en observant le temps entre les événements de supply drop pendant le jeu.

Si le changement ne semble pas pris en compte, vérifiez les points suivants :

| Vérification | À contrôler |
| --- | --- |
| Fichier correct | Vous avez édité `PalWorldSettings.ini` |
| Emplacement correct | Le fichier a été ouvert via **Configs** dans l’administration de votre serveur |
| Syntaxe correcte | `SupplyDropSpan` est bien écrit et reste dans le bloc `OptionSettings` |
| Redémarrage du serveur | Le serveur a été complètement redémarré après sauvegarde |

:::tip Choisissez une Valeur Équilibrée
Des valeurs très basses peuvent faire apparaître les supply drops beaucoup plus souvent que prévu dans le gameplay normal de Palworld. Si vous souhaitez plus d’événements fréquents sans excès, `60` est généralement un bon point de départ.
:::

## Conclusion

Félicitations, vous avez réussi à modifier la fréquence des supply drops sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂