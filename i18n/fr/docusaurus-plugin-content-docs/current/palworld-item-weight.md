---
id: palworld-item-weight
title: "Palworld : Poids des objets"
description: "Apprenez à modifier le multiplicateur de poids des objets dans Palworld en éditant le paramètre de poids dans la configuration de votre serveur pour un meilleur équilibre de la charge. -> En savoir plus maintenant"
sidebar_label: Palworld : Poids des objets
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster le poids des objets sur votre serveur en modifiant une valeur de configuration dans le fichier principal des paramètres du serveur. Dans ce guide, vous apprendrez où trouver le fichier correct dans l’interface web ZAP-Hosting, quel paramètre `item weight` modifier, et comment appliquer correctement le changement.



## Preparation

Avant de commencer, assurez-vous que votre serveur de jeux Palworld est en ligne et que vous pouvez accéder à son administration web.

:::info Accès requis
Vous devez avoir accès au panneau d’administration de votre serveur Palworld dans l’interface web ZAP-Hosting pour pouvoir modifier les fichiers de configuration sous **Configs**.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier le multiplicateur de poids des objets, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay utilisées par votre serveur Palworld.

:::note Rôle du fichier de configuration
`PalWorldSettings.ini` stocke plusieurs modificateurs de gameplay, incluant les taux de dégâts, d’endurance, de loot, et le `item weight`.
:::

## Modifier le paramètre de poids des objets

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings` et trouvez l’entrée `ItemWeightRate`.

Si l’entrée existe déjà, modifiez sa valeur. Si elle est absente, ajoutez-la dans la liste des paramètres `OptionSettings`.

### Clé de configuration

Utilisez le paramètre suivant :

```ini
ItemWeightRate=1.000000
```

### Signification de la valeur

`ItemWeightRate` contrôle le multiplicateur de poids des objets sur votre serveur.

| Clé de config | Valeur par défaut | Effet |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Poids standard des objets |
| `ItemWeightRate` inférieur à `1.0` | Exemple : `0.500000` | Les objets pèsent moins, les joueurs peuvent en porter plus |
| `ItemWeightRate` supérieur à `1.0` | Exemple : `2.000000` | Les objets pèsent plus, les joueurs peuvent en porter moins |

### Exemples de valeurs

Vous pouvez utiliser l’un des exemples suivants selon l’équilibre de gameplay souhaité :

| Résultat désiré | Valeur |
|---|---:|
| Poids standard des objets | `1.000000` |
| Poids réduit de moitié | `0.500000` |
| Objets très légers | `0.250000` |
| Poids doublé des objets | `2.000000` |

:::tip Choisir un bon multiplicateur
Pour une expérience de survie plus détendue, une valeur plus basse comme `0.5` est souvent un bon point de départ. Cela réduit la pression sur l’inventaire sans supprimer complètement la gestion du poids.
:::

## Exemple de configuration

Dans Palworld, ces valeurs de gameplay sont généralement stockées dans la ligne `OptionSettings=(...)` du fichier `PalWorldSettings.ini`. Votre fichier peut déjà contenir de nombreux autres paramètres.

Un exemple simplifié ressemble à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Sur beaucoup de serveurs, `OptionSettings` contient déjà plusieurs valeurs séparées par des virgules. Dans ce cas, ajoutez ou modifiez uniquement la partie `ItemWeightRate` sans supprimer les autres entrées.

Exemple :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Ne pas supprimer les paramètres existants
Ne supprimez pas d’autres valeurs dans la ligne `OptionSettings` sauf si vous souhaitez les réinitialiser volontairement. Supprimer des virgules, crochets ou entrées existantes peut provoquer des erreurs de configuration.
:::

## Sauvegarder et appliquer les modifications

Après avoir modifié le fichier :

1. Sauvegardez les changements dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld.

Un redémarrage est nécessaire car le serveur charge cette configuration de gameplay au démarrage. La nouvelle valeur de `item weight` ne sera pleinement prise en compte qu’après ce redémarrage.

## Vérifier le nouveau poids des objets

Après le redémarrage, rejoignez votre serveur et testez le comportement du poids des objets en jeu.

Vous devriez constater que :

- les valeurs plus basses réduisent le poids effectif des objets
- les valeurs plus élevées augmentent le poids effectif des objets
- la capacité d’inventaire semble différente selon le multiplicateur choisi

Si le changement ne semble pas appliqué, rouvrez `PalWorldSettings.ini` et vérifiez que :

| Vérification | À contrôler |
|---|---|
| Fichier correct | Vous avez modifié `PalWorldSettings.ini` |
| Emplacement correct | Le fichier a été ouvert via **Configs** dans l’administration du serveur |
| Clé correcte | `ItemWeightRate` est présente |
| Syntaxe correcte | La valeur est bien dans la ligne `OptionSettings=(...)` si votre fichier utilise ce format |
| Redémarrage effectué | Le serveur a été redémarré après la sauvegarde |

## Conclusion

Félicitations, vous avez modifié avec succès le paramètre de poids des objets sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂