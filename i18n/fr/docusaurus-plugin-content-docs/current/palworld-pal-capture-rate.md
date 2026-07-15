---
id: palworld-pal-capture-rate
title: "Palworld : Taux de Capture des Pals"
description: "Apprenez à modifier le taux de capture des Pals dans Palworld en éditant le paramètre PalCaptureRate pour faciliter la capture sur votre serveur. -> Découvrez comment maintenant"
sidebar_label: "Palworld : Taux de Capture des Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster le taux de capture des Pals sur votre serveur via la configuration principale du monde. Dans ce guide, vous apprendrez où trouver le fichier de config approprié dans l’interface ZAP-Hosting, quelle valeur modifier, et comment appliquer le nouveau taux de capture.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et que le serveur est bien configuré et en fonctionnement.

:::info Accès au fichier de configuration
Pour les serveurs Palworld chez ZAP-Hosting, les paramètres concernés peuvent être modifiés via l’administration du serveur de jeux dans la section `Configs`.
:::

## Localiser le fichier de configuration Palworld

Pour modifier le taux de capture des Pals, vous devez éditer le fichier `PalWorldSettings.ini`.

### Ouvrir la section Configs

Connectez-vous d’abord à l’interface web ZAP-Hosting et ouvrez votre serveur de jeux Palworld. Dans l’administration du serveur, allez dans `Configs`.

Cherchez ensuite le fichier nommé :

```ini
PalWorldSettings.ini
```

### Identifier le paramètre correct

Dans `PalWorldSettings.ini`, Palworld stocke de nombreux paramètres de gameplay dans la section `OptionSettings`. Le paramètre lié à la capture des Pals est :

```ini
PalCaptureRate=[votre_valeur]
```

La valeur par défaut est généralement :

```ini
PalCaptureRate=1.000000
```

Une valeur plus élevée facilite la capture des Pals, tandis qu’une valeur plus basse rend la capture plus difficile.

## Modifier le taux de capture des Pals

Maintenant que vous avez ouvert le bon fichier, vous pouvez ajuster le taux de capture selon l’équilibre de gameplay que vous souhaitez.

### Modifier la valeur de configuration

Recherchez dans `PalWorldSettings.ini` l’entrée `PalCaptureRate` et remplacez sa valeur par le multiplicateur que vous préférez.

Par exemple :

```ini
PalCaptureRate=2.000000
```

Cela doublera le taux de capture par rapport au paramètre par défaut.

### Valeurs d’exemple

Utilisez le tableau suivant comme référence générale :

| Valeur | Effet |
| --- | --- |
| `1.000000` | Taux de capture des Pals par défaut |
| `1.500000` | Capture légèrement facilitée |
| `2.000000` | Capture nettement facilitée |
| `3.000000` | Capture beaucoup plus facile |

:::tip Configuration équilibrée
Si vous souhaitez faciliter les captures sans les rendre garanties, une valeur entre `1.500000` et `2.000000` est généralement un bon point de départ.
:::

## Enregistrer et appliquer les modifications

Après avoir modifié la valeur `PalCaptureRate`, enregistrez les changements dans l’éditeur de config ZAP-Hosting.

### Redémarrer le serveur

Palworld n’applique pas ce paramètre en direct. Après avoir sauvegardé le fichier, vous devez redémarrer votre serveur de jeux depuis l’administration ZAP-Hosting pour que le nouveau taux de capture soit pris en compte.

:::caution Redémarrage obligatoire
Si vous ne redémarrez pas le serveur après avoir modifié `PalWorldSettings.ini`, le nouveau taux de capture ne sera pas appliqué.
:::

## Référence de configuration

Le tableau suivant résume le paramètre utilisé pour ce changement :

| Fichier | Clé de config | Valeur par défaut | But | Redémarrage requis |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Contrôle le multiplicateur du taux de capture des Pals | Oui |

## Dépannage

Si le nouveau taux de capture ne semble pas fonctionner, vérifiez les points suivants.

### Vérifier le format du paramètre

Assurez-vous que la ligne est correctement écrite et utilise une valeur numérique, par exemple :

```ini
PalCaptureRate=2.000000
```

Évitez d’ajouter des caractères supplémentaires ou de modifier des entrées non liées dans le fichier.

### Confirmer que le fichier a été enregistré

Après modification, vérifiez que les changements ont bien été sauvegardés dans `PalWorldSettings.ini` via la section `Configs`.

### Redémarrer à nouveau si nécessaire

Si le serveur n’a pas été redémarré correctement après la modification, effectuez un nouveau redémarrage depuis l’administration du serveur.

:::note Paramètre de gameplay côté serveur
`PalCaptureRate` est un paramètre de gameplay côté serveur, donc les joueurs ne verront le nouveau taux qu’après le rechargement de la configuration mise à jour par le serveur.
:::

## Conclusion

Félicitations, vous avez modifié avec succès le taux de capture des Pals sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂