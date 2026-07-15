---
id: palworld-collection-drop-rate
title: "Palworld : Taux de Drop de Collection"
description: "Apprenez à ajuster les paramètres de collection dans Palworld, augmenter les ressources récoltées et accélérer les respawns sur votre serveur de jeux Palworld. -> En savoir plus maintenant"
sidebar_label: "Palworld : Taux de Drop de Collection"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler la quantité de ressources que les joueurs collectent et la rapidité avec laquelle les objets récoltables réapparaissent. Dans ce guide, vous apprendrez à modifier manuellement le fichier de configuration approprié sur votre serveur de jeux Palworld ZAP-Hosting pour changer le taux de drop de collection et les paramètres liés aux ressources.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et que le serveur est actuellement hors ligne ou peut être redémarré après les modifications.

:::info Accès au fichier de configuration
Pour Palworld, les paramètres de gameplay pertinents sont stockés dans le fichier `PalWorldSettings.ini`. Dans l’administration de votre serveur de jeux ZAP-Hosting, vous pouvez accéder à ce fichier via la section `Configs`.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier les paramètres de collection, vous devez éditer le fichier principal de configuration du serveur Palworld.

### Localiser le fichier dans l’interface ZAP-Hosting

1. Connectez-vous à l’[interface web ZAP-Hosting](https://zap-hosting.com).
2. Ouvrez votre serveur de jeux Palworld.
3. Allez dans la section `Configs` de l’administration du serveur.
4. Ouvrez le fichier nommé `PalWorldSettings.ini`.

:::note Fichier correct
Les paramètres liés à la collection décrits dans ce guide sont stockés dans `PalWorldSettings.ini`. Si vous ne voyez pas immédiatement les entrées attendues, elles se trouvent généralement dans la ligne de configuration `OptionSettings`.
:::

## Modifier les paramètres de collection

Palworld stocke de nombreuses options de gameplay sous forme de paires clé-valeur dans la section `OptionSettings` du fichier `PalWorldSettings.ini`. Pour augmenter les ressources récoltées ou modifier la vitesse de réapparition des ressources, vous devez ajuster les valeurs correspondantes.

### Clés de configuration pertinentes

Utilisez les paramètres suivants pour le comportement lié à la collection :

| Clé de config | Valeur par défaut | Description |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Contrôle la quantité d’objets reçus par les joueurs à partir des ressources récoltables. Des valeurs plus élevées augmentent la quantité collectée. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Contrôle la rapidité de réapparition des objets récoltables. Des valeurs plus élevées accélèrent le retour des ressources. |
| `CollectionObjectHpRate` | `1.000000` | Contrôle les points de vie des objets récoltables comme les rochers ou les arbres. Des valeurs plus élevées les rendent généralement plus longs à casser. |

### Exemple de valeurs de configuration

Si vous souhaitez doubler les ressources récoltées et faire réapparaître les ressources deux fois plus vite, définissez les deux valeurs à `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Si vous voulez aussi que les objets récoltables soient plus faciles à casser, vous pouvez réduire leur multiplicateur de points de vie :

```ini
CollectionObjectHpRate=0.500000
```

:::tip Valeurs de départ recommandées
Une valeur de `2.000000` est un point de départ courant pour `CollectionDropRate` et `CollectionObjectRespawnSpeedRate`. Cela permet une progression nettement plus rapide sans modifier trop agressivement le gameplay de Palworld.
:::

## Appliquer les modifications dans `PalWorldSettings.ini`

Après avoir ouvert `PalWorldSettings.ini`, trouvez l’entrée existante `OptionSettings` et ajustez directement les clés concernées à l’intérieur.

### Exemple d’extrait `OptionSettings`

Selon la configuration actuelle de votre serveur, la ligne peut déjà contenir de nombreux paramètres. Vous devez uniquement modifier les valeurs des clés liées à la collection si elles existent déjà, ou les ajouter si elles manquent.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Conserver la syntaxe existante
Assurez-vous de ne pas modifier la syntaxe existante de la ligne `OptionSettings`. Ne supprimez pas accidentellement de virgules, parenthèses ou autres paramètres, sinon le serveur risque de ne pas charger correctement la configuration.
:::

## Sauvegarder et redémarrer le serveur

Une fois l’édition terminée, sauvegardez vos modifications dans la section `Configs`.

### Nécessité de redémarrage

Palworld n’applique pas ces changements de configuration de gameplay instantanément pendant que le serveur tourne. Vous devez redémarrer le serveur après avoir sauvegardé le fichier pour que les nouvelles valeurs soient prises en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Aucune commande vérifiée requise |

:::info Redémarrage obligatoire
Un redémarrage complet du serveur est nécessaire après avoir modifié `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` ou `CollectionObjectHpRate`. Aucune commande supplémentaire en jeu ou console n’est requise pour ces paramètres spécifiques.
:::

## Vérifier le nouveau comportement de collection

Après le redémarrage, connectez-vous à votre serveur et testez quelques objets récoltables comme des arbres, pierres ou gisements de minerai.

### Points à vérifier

- Si les joueurs reçoivent plus de matériaux par action de collecte
- Si les ressources détruites réapparaissent plus rapidement qu’avant
- Si les objets récoltables sont plus faciles ou plus difficiles à casser selon votre modification de `CollectionObjectHpRate`

Si le résultat est trop fort ou trop faible, retournez dans `PalWorldSettings.ini` et ajustez à nouveau les multiplicateurs.

:::tip Ajustement fin de votre serveur
Pour un réglage plus équilibré de la collection dans Palworld, augmentez les valeurs progressivement, par exemple de `1.000000` à `1.500000`, avant de passer à des multiplicateurs plus élevés.
:::

## Référence de configuration

Le tableau suivant résume les valeurs les plus importantes pour cette configuration de collection Palworld.

| Paramètre | Exemple | Effet |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Par défaut | Quantité standard de ressources récoltées |
| `CollectionDropRate=2.000000` | Augmenté | Doublement des ressources récoltées |
| `CollectionObjectRespawnSpeedRate=1.000000` | Par défaut | Vitesse de réapparition standard |
| `CollectionObjectRespawnSpeedRate=2.000000` | Augmenté | Réapparition plus rapide des ressources |
| `CollectionObjectHpRate=1.000000` | Par défaut | Points de vie standard des objets récoltables |
| `CollectionObjectHpRate=0.500000` | Réduit | Objets récoltables cassent plus vite |

## Conclusion

Félicitations, vous avez réussi à modifier le taux de drop de collection sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂