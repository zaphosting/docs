---
id: palworld-enemy-drop-rate
title: "Palworld : Taux de Drop des Ennemis"
description: "Apprenez à modifier le taux de drop des ennemis dans Palworld sur votre serveur de jeux Palworld en éditant la bonne valeur de configuration pour un meilleur équilibre du loot. -> En savoir plus maintenant"
sidebar_label: "Palworld : Taux de Drop des Ennemis"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

`EnemyDropItemRate` contrôle la quantité de loot que les ennemis lâchent dans Palworld. Dans ce guide, vous apprendrez à modifier manuellement le fichier de configuration approprié dans l’administration de votre serveur de jeux ZAP-Hosting et à appliquer avec succès le nouveau taux de drop des ennemis.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur de jeux Palworld et la permission d’éditer les fichiers de configuration du serveur.

:::info Configuration Manuelle Requise
Cette configuration se fait en éditant manuellement le fichier de configuration du serveur. Le fichier concerné est disponible dans l’administration de votre serveur de jeux ZAP-Hosting sous la section `Configs`.
:::

## Localiser le Fichier de Configuration

Pour modifier le taux de drop des ennemis, vous devez éditer le fichier `PalWorldSettings.ini`.

### Ouvrir la Section Configs

Connectez-vous à l’administration de votre serveur de jeux ZAP-Hosting et ouvrez votre serveur Palworld. Ensuite, naviguez vers la section `Configs`, où sont listés les fichiers de configuration disponibles.

### Sélectionner `PalWorldSettings.ini`

Ouvrez le fichier `PalWorldSettings.ini` depuis la section `Configs`. Ce fichier contient les principales valeurs de configuration du gameplay de votre serveur de jeux Palworld, incluant les réglages liés au loot et aux drops.

:::note Aperçu du Fichier de Configuration
Sur les serveurs dédiés Palworld, les paramètres de gameplay sont généralement stockés dans `PalWorldSettings.ini`. Le multiplicateur de loot des ennemis y est configuré via l’entrée `EnemyDropItemRate`.
:::

## Modifier le Taux de Drop des Ennemis

Maintenant que vous avez ouvert le bon fichier, vous pouvez ajuster le multiplicateur de loot.

### Trouver le Paramètre Correct

Cherchez dans `PalWorldSettings.ini` la ligne `OptionSettings` et localisez la clé suivante :

```ini
EnemyDropItemRate=1.000000
```

Si la clé est déjà présente, modifiez sa valeur selon le multiplicateur souhaité.

### Définir Votre Multiplicateur Souhaité

`EnemyDropItemRate` utilise un multiplicateur numérique :

| Clé de config | Valeur par défaut | Exemple de valeur | Effet |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Les ennemis lâchent deux fois plus d’objets |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Les ennemis lâchent moins d’objets |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Les ennemis lâchent trois fois plus d’objets |

Par exemple, pour doubler les drops des ennemis vaincus, des Pals sauvages et des boss, définissez :

```ini
EnemyDropItemRate=2.000000
```

Si vous éditez l’entrée complète `OptionSettings`, elle peut ressembler à cet extrait :

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Ne Pas Modifier les Autres Paramètres
Dans de nombreuses configurations de serveur Palworld, `OptionSettings` contient plusieurs valeurs sur une seule ligne. Ne modifiez que la valeur de `EnemyDropItemRate` et évitez de supprimer des virgules, crochets ou autres paramètres existants, car cela pourrait faire échouer la configuration.
:::

## Vérifier les Limites de Drop Associées

Un multiplicateur de loot plus élevé peut augmenter le nombre d’objets lâchés au sol. Cela peut impacter les performances du serveur, notamment lors de combats intenses ou de boss.

### Vérifier `DropItemMaxNum`

Si votre serveur a déjà un grand nombre d’objets lâchés simultanément, vérifiez le paramètre `DropItemMaxNum` dans le même fichier de configuration.

| Clé de config | But |
| --- | --- |
| `EnemyDropItemRate` | Multiplie le loot lâché par les ennemis vaincus |
| `DropItemMaxNum` | Limite le nombre d’objets lâchés pouvant exister simultanément |

:::tip Équilibrer Loot et Performance
Si vous augmentez significativement `EnemyDropItemRate`, pensez à garder `DropItemMaxNum` à une valeur raisonnable pour éviter une accumulation excessive d’objets et des problèmes de performance.
:::

## Sauvegarder et Appliquer les Modifications

Après avoir édité la configuration, sauvegardez le fichier `PalWorldSettings.ini` dans la section `Configs`.

### Redémarrer le Serveur

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que le nouveau paramètre soit pris en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Aucune commande vérifiée requise |

:::info Redémarrage Obligatoire
Les modifications dans `PalWorldSettings.ini` ne sont pas appliquées immédiatement en cours d’exécution. Vous devez redémarrer le serveur après avoir sauvegardé le fichier.
:::

## Vérifier le Nouveau Taux de Drop

Après le redémarrage, rejoignez votre serveur Palworld et tuez des ennemis pour confirmer que le nouveau multiplicateur de loot fonctionne comme prévu.

Si la quantité de drops ne semble pas changer, rouvrez `PalWorldSettings.ini` et vérifiez que :

- `EnemyDropItemRate` est correctement orthographié
- la valeur est bien dans la bonne configuration `OptionSettings`
- le fichier a été sauvegardé avec succès
- le serveur a été redémarré après la modification

## Conclusion

Félicitations, vous avez modifié avec succès le taux de drop des ennemis sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂