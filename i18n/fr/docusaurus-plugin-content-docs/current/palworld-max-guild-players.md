---
id: palworld-max-guild-players
title: "Palworld : Nombre max de joueurs par guilde"
description: "Apprenez à modifier la limite de joueurs par guilde dans Palworld en éditant le paramètre max guild players sur votre serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Nombre max de joueurs par guilde
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler combien de joueurs peuvent rejoindre une même guilde sur votre serveur. Dans ce guide, vous apprendrez à modifier manuellement la limite maximale de joueurs par guilde en éditant le fichier de configuration approprié dans l’administration de votre serveur de jeux ZAP-Hosting.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir accès à l’administration de votre serveur Palworld dans l’interface web ZAP-Hosting.

:::info Accès à la configuration requis
Vous devez avoir accès à l’administration de votre serveur Palworld et à la section `Configs`, car ce paramètre doit être modifié manuellement dans le fichier de configuration du serveur.
:::

## Localiser le fichier de configuration correct

Pour changer la limite de joueurs par guilde, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur **Palworld**
2. Allez dans **Configs**
3. Ouvrez le fichier nommé `PalWorldSettings.ini`

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris les paramètres liés aux guildes.

## Modifier le paramètre max guild players

Dans `PalWorldSettings.ini`, cherchez la ligne de configuration `OptionSettings`. La limite de joueurs par guilde est contrôlée par la clé `GuildPlayerMaxNum`.

### Valeur de configuration

Utilisez le paramètre suivant pour définir le nombre maximal de joueurs autorisés dans une guilde :

```ini
GuildPlayerMaxNum=[votre_valeur]
```

Remplacez `[votre_valeur]` par le nombre de joueurs que vous souhaitez autoriser par guilde.

### Valeurs par défaut et exemples

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Nombre maximal de joueurs autorisés dans une guilde | `20` |

Par exemple, si vous souhaitez autoriser jusqu’à `30` joueurs par guilde, définissez :

```ini
GuildPlayerMaxNum=30
```

:::note Modifier la ligne OptionSettings existante
Dans Palworld, les paramètres du serveur sont généralement stockés dans une seule entrée `OptionSettings=(...)`. Vous devez habituellement modifier la valeur existante `GuildPlayerMaxNum` dans cette ligne plutôt que d’ajouter une seconde entrée en double.
:::

### Exemple de snippet

Votre configuration peut ressembler à ceci :

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Si votre fichier contient déjà plusieurs paramètres dans `OptionSettings=(...)`, ne modifiez que la partie `GuildPlayerMaxNum` et laissez les autres valeurs inchangées.

:::caution Évitez les clés en double
N’ajoutez pas plusieurs fois `GuildPlayerMaxNum` dans le même bloc de configuration. Les clés en double peuvent provoquer un comportement inattendu ou rendre flou le paramètre utilisé par le serveur.
:::

## Enregistrer et appliquer les modifications

Après avoir modifié la valeur :

1. Enregistrez les modifications dans `PalWorldSettings.ini`
2. Redémarrez votre serveur Palworld

Un redémarrage est nécessaire pour que la nouvelle limite de joueurs par guilde soit prise en compte par le serveur.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Aucune commande vérifiée requise |

:::tip Redémarrage obligatoire
La nouvelle valeur max guild players ne s’applique pas immédiatement pendant que le serveur tourne. Vous devez redémarrer complètement le serveur après avoir sauvegardé la configuration.
:::

## Vérifier la nouvelle limite de guilde

Une fois le serveur redémarré, la nouvelle limite de taille de guilde devrait être active pour les joueurs qui rejoignent ou gèrent des guildes sur votre serveur Palworld.

Si la modification ne semble pas prise en compte, vérifiez les points suivants :

- confirmez que vous avez modifié le bon fichier : `PalWorldSettings.ini`
- confirmez que `GuildPlayerMaxNum` est correctement écrit
- confirmez que la valeur est bien dans la configuration active `OptionSettings=(...)`
- confirmez que le redémarrage du serveur s’est bien déroulé

:::caution Formatage de la configuration
Les fichiers de configuration Palworld sont sensibles au formatage. Si vous supprimez accidentellement des virgules, crochets ou d’autres valeurs existantes dans `OptionSettings=(...)`, le serveur peut ignorer le paramètre ou ne pas le charger correctement.
:::

## Conclusion

Félicitations, vous avez modifié avec succès la limite maximale de joueurs par guilde sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂