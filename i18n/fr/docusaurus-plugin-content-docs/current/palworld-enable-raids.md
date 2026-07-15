---
id: palworld-enable-raids
title: "Palworld : Activer les Raids"
description: "Apprenez à activer ou désactiver les raids sur votre serveur Palworld en modifiant le bon paramètre de configuration pour les attaques ennemies envahissantes. -> En savoir plus maintenant"
sidebar_label: Palworld : Activer les Raids
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les raids dans Palworld sont des attaques ennemies envahissantes qui peuvent cibler les bases des joueurs sur votre serveur. Dans ce guide, vous apprendrez à activer ou désactiver les raids en modifiant manuellement le bon fichier de configuration dans l’administration de votre serveur de jeux ZAP-Hosting.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission de modifier les fichiers de configuration du serveur.

:::info Configuration Manuelle Requise
Cette configuration s’effectue en modifiant manuellement la configuration du serveur Palworld sous **Configs** dans l’administration de votre serveur de jeux. Après avoir sauvegardé vos modifications, vous devez redémarrer le serveur pour que le nouveau paramètre soit pris en compte.
:::

## Localiser le Fichier de Configuration Correct

Pour activer ou désactiver les raids, vous devez modifier le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur de jeux **Palworld**.
2. Allez dans **Configs**.
3. Ouvrez le fichier nommé `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris le paramètre qui contrôle l’activation des raids.

## Modifier le Paramètre de Raid

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings`. La clé de configuration concernée est :

```ini
bEnableInvaderEnemy=True
```

Ce paramètre contrôle si les raids ennemis envahissants sont actifs sur le serveur.

### Activer les Raids

Si vous souhaitez activer les raids, mettez la valeur à `True` :

```ini
bEnableInvaderEnemy=True
```

Avec cette valeur, des attaques ennemies périodiques sur les bases des joueurs peuvent se produire pendant le jeu.

### Désactiver les Raids

Si vous souhaitez désactiver les raids, mettez la valeur à `False` :

```ini
bEnableInvaderEnemy=False
```

Cela désactive complètement les attaques ennemies envahissantes, ce qui peut offrir une expérience de construction plus paisible et réduire légèrement la charge du serveur.

## Référence de Configuration

Utilisez le tableau suivant comme référence rapide pour le paramètre de raid :

| Fichier de config | Clé de config | Valeur | Effet |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Active les raids et les attaques ennemies envahissantes |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Désactive tous les raids et attaques ennemies envahissantes |

:::note Comportement Par Défaut
Le comportement par défaut du serveur Palworld est généralement `bEnableInvaderEnemy=True`, ce qui signifie que les raids sont activés sauf si vous modifiez manuellement ce paramètre.
:::

## Sauvegarder et Appliquer les Modifications

Après avoir modifié la valeur dans `PalWorldSettings.ini`, sauvegardez le fichier dans la section **Configs** de ZAP-Hosting.

Vous devez ensuite redémarrer votre serveur Palworld pour que la configuration mise à jour soit chargée.

### Redémarrer le Serveur

Utilisez la fonction de redémarrage dans l’administration de votre serveur de jeux ZAP-Hosting après avoir sauvegardé le fichier.

:::caution Redémarrage Obligatoire
Si vous ne redémarrez pas le serveur, le paramètre de raid modifié risque de ne pas être appliqué. Modifier le fichier seul ne suffit pas.
:::

## Vérifier le Paramètre

Après le redémarrage, votre nouvelle configuration de raid devrait être active.

- Si `bEnableInvaderEnemy=True`, les raids sont activés.
- Si `bEnableInvaderEnemy=False`, les raids sont désactivés.

Si le paramètre ne semble pas s’appliquer, rouvrez `PalWorldSettings.ini` et vérifiez que la valeur a bien été sauvegardée sans erreur de format.

:::tip Construction de Base Paisible
Désactiver les raids peut être utile si vous souhaitez vous concentrer sur l’exploration, la construction de base ou un gameplay coopératif moins stressant sans attaques ennemies périodiques.
:::

## Conclusion

Félicitations, vous avez réussi à activer ou désactiver les raids sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂