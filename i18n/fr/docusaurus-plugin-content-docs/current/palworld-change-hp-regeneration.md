---
id: palworld-change-hp-regeneration
title: "Palworld : Modifier la régénération de PV"
description: "Apprenez à modifier la régénération de PV dans Palworld en éditant les paramètres de régénération des joueurs et des Pals sur votre serveur pour une guérison plus rapide, plus lente ou désactivée -> Découvrez comment faire maintenant"
sidebar_label: Palworld : Modifier la régénération de PV
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de modifier les paramètres de régénération pour les joueurs et les Pals via la configuration principale du serveur. Dans ce guide, vous apprendrez à éditer le fichier de config approprié dans l’interface web ZAP-Hosting, ajuster les valeurs de régénération de PV, et appliquer correctement les changements.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous que votre serveur Palworld est en ligne et que vous pouvez accéder à son administration web via le panneau ZAP-Hosting.

:::info Accès à la configuration requis
Vous devez avoir accès à l’administration de votre serveur de jeux et à la section `Configs` pour modifier manuellement les fichiers de configuration Palworld.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier la régénération de PV, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans `Configs`.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay de votre serveur, incluant les multiplicateurs de régénération de santé pour les joueurs et les Pals.

:::note Modifications manuelles de configuration
Selon votre configuration actuelle, les paramètres peuvent apparaître dans une longue ligne de paramètres dans la section `OptionSettings`. Modifiez les valeurs existantes avec précaution en conservant la mise en forme intacte.
:::

## Modifier les valeurs de régénération de PV

Les paramètres de régénération de PV sont stockés sous forme de multiplicateurs numériques. Une valeur de `1.0` correspond à la vitesse de régénération par défaut.

### Paramètres de régénération supportés

Utilisez les clés de configuration suivantes dans `PalWorldSettings.ini` :

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Taux naturel de régénération de PV du joueur | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Régénération de PV du joueur pendant le sommeil | `1.0` |
| `PalAutoHPRegeneRate` | Taux naturel de régénération de PV du Pal | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Régénération de PV du Pal pendant le sommeil dans la Palbox | `1.0` |

### Comportement des valeurs

Voici la logique des valeurs que vous pouvez utiliser pour modifier la régénération :

| Valeur | Effet |
| --- | --- |
| `1.0` | Vitesse de régénération par défaut |
| Supérieure à `1.0` | Guérison plus rapide |
| Inférieure à `1.0` | Guérison plus lente |
| `0.0` | Désactive la régénération |

:::tip Choisir de bonnes valeurs de régénération
Pour une survie un peu plus facile, essayez des valeurs comme `1.5` ou `2.0`. Pour un défi plus corsé, utilisez des valeurs inférieures à `1.0` ou désactivez complètement la régénération avec `0.0`.
:::

## Modifier les entrées de configuration

Dans la plupart des configurations de serveur Palworld, ces valeurs se trouvent dans la ligne `OptionSettings=(...)` du fichier `PalWorldSettings.ini`.

### Exemple de configuration

Ajoutez les entrées si elles manquent, ou modifiez les valeurs existantes si elles sont déjà présentes :

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Par exemple, pour une guérison naturelle plus rapide des joueurs et des Pals, vous pouvez utiliser :

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Si vous souhaitez modifier uniquement certaines valeurs, ajustez uniquement ces entrées et laissez les autres valeurs `OptionSettings` existantes inchangées.

:::caution Conserver les valeurs existantes dans OptionSettings
Ne supprimez pas les entrées non liées dans la ligne `OptionSettings`. Cette section contient généralement de nombreux paramètres de gameplay, et les supprimer peut réinitialiser involontairement d’autres parties de la configuration de votre serveur.
:::

## Enregistrer et appliquer les modifications

Après avoir édité le fichier, enregistrez vos modifications dans la section `Configs` du panneau ZAP-Hosting.

Pour appliquer les nouveaux paramètres de régénération, redémarrez votre serveur Palworld.

### Redémarrer le serveur

1. Enregistrez le fichier `PalWorldSettings.ini` modifié.
2. Retournez à l’administration de votre serveur.
3. Redémarrez le serveur.

Un redémarrage est nécessaire car Palworld charge ces paramètres de gameplay au démarrage du serveur.

:::info Redémarrage obligatoire
Les modifications de régénération de PV ne prennent pas effet immédiatement pendant que le serveur tourne. Vous devez redémarrer le serveur après avoir sauvegardé la configuration.
:::

## Vérifier les nouveaux paramètres de régénération

Après le redémarrage du serveur, connectez-vous et testez le nouveau comportement de guérison en jeu.

Vous pouvez vérifier la modification en observant :

- la récupération naturelle de PV du joueur
- la guérison du joueur pendant le sommeil
- la récupération naturelle de PV du Pal
- le comportement de guérison du Pal dans la Palbox pendant le sommeil

Si la régénération ne fonctionne pas comme prévu, rouvrez `PalWorldSettings.ini` et vérifiez que :

- les clés de config sont orthographiées exactement
- les valeurs sont des nombres décimaux valides comme `1.0` ou `2.0`
- les entrées sont toujours dans la section `OptionSettings`
- le serveur a bien été redémarré après la sauvegarde

## Conclusion

Félicitations, vous avez modifié avec succès la régénération de PV dans Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂