---
id: palworld-change-death-penalty
title: "Palworld : Modifier la pénalité de mort"
description: "Apprenez à modifier la pénalité de mort dans Palworld en éditant la configuration du serveur, y compris les valeurs DeathPenalty et les étapes de redémarrage. -> En savoir plus maintenant"
sidebar_label: "Modifier la pénalité de mort"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler ce que les joueurs perdent à leur mort en modifiant le paramètre `DeathPenalty` du serveur. Dans ce guide, vous apprendrez à éditer le fichier de configuration approprié dans l’interface web ZAP-Hosting et à appliquer correctement la modification.



## Préparation

Avant de commencer, assurez-vous que :

- vous avez accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting
- votre serveur est hors ligne ou que vous êtes prêt à le redémarrer après avoir effectué les modifications
- vous comprenez quel comportement de mort vous souhaitez appliquer pour vos joueurs

:::info Accès au fichier de configuration
Pour les serveurs Palworld chez ZAP-Hosting, les paramètres concernés peuvent être modifiés via l’administration de votre serveur de jeux dans la section **Configs**.
:::

## Ouvrir le fichier de configuration Palworld

Pour modifier la pénalité de mort, vous devez éditer le fichier `PalWorldSettings.ini`.

### Trouver le fichier dans l’interface ZAP-Hosting

Connectez-vous d’abord à l’interface web ZAP-Hosting et ouvrez votre serveur de jeux Palworld. Ensuite, allez dans la section **Configs** de l’administration du serveur et ouvrez le fichier nommé `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris le comportement de la pénalité de mort.

:::note Modifications manuelles de la configuration
Le paramètre de pénalité de mort est stocké directement dans le fichier de configuration. Vous devez modifier la valeur manuellement plutôt que de vous fier à un réglage rapide séparé, sauf si votre interface actuelle en propose un explicitement.
:::

## Modifier la valeur DeathPenalty

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings` où sont définis les paramètres du gameplay. Vous devez trouver l’entrée `DeathPenalty` et changer sa valeur selon l’option souhaitée.

### Valeurs DeathPenalty supportées

Voici les valeurs actuellement utilisées par Palworld pour le paramètre `DeathPenalty` :

| Valeur | Effet |
| --- | --- |
| `None` | Les joueurs ne perdent rien à la mort |
| `Item` | Les joueurs perdent des objets, mais conservent l’équipement |
| `ItemAndEquipment` | Les joueurs perdent objets et équipement |
| `All` | Les joueurs perdent objets, équipement et tous les Pals de leur équipe |

:::tip Choisir le bon réglage
Si vous voulez une expérience serveur plus détendue, `None` ou `Item` est généralement le meilleur choix. Pour une expérience survie classique, utilisez `All`.
:::

### Exemple d’entrée de configuration

Dans la plupart des configurations de serveur Palworld, le paramètre apparaît dans une ligne `OptionSettings` plus longue. Par exemple :

```ini
OptionSettings=(DeathPenalty=All)
```

Pour désactiver complètement la pénalité de mort, changez-la en :

```ini
OptionSettings=(DeathPenalty=None)
```

Si votre fichier contient déjà plusieurs paramètres dans le même bloc `OptionSettings=(...)`, ne modifiez que la valeur `DeathPenalty` et laissez les autres entrées inchangées. Par exemple :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

Dans ce cas, remplacez simplement `ItemAndEquipment` par la valeur que vous préférez.

:::caution Conserver la syntaxe existante
Ne supprimez pas les virgules, crochets ou autres paramètres existants dans le bloc `OptionSettings=(...)`. Une syntaxe incorrecte peut empêcher le serveur de charger correctement la configuration.
:::

## Enregistrer et appliquer les modifications

Après avoir modifié la valeur `DeathPenalty`, enregistrez les changements dans `PalWorldSettings.ini`.

### Redémarrer le serveur

Une fois le fichier enregistré, redémarrez votre serveur Palworld depuis l’interface web ZAP-Hosting. Le redémarrage est nécessaire pour que le serveur charge la nouvelle configuration.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |

:::info Redémarrage obligatoire
Palworld lit ce paramètre depuis la configuration du serveur. Le nouveau comportement de mort ne prendra effet qu’après un redémarrage complet du serveur.
:::

## Vérifier le nouveau paramètre de mort

Après le redémarrage du serveur, connectez-vous et testez le comportement en jeu si vous souhaitez confirmer la modification.

### Points à vérifier

Selon la valeur choisie, vérifiez si les joueurs :

- conservent tous leurs objets après la mort
- perdent uniquement les objets d’inventaire
- perdent objets d’inventaire et équipement
- perdent objets d’inventaire, équipement et Pals de l’équipe

Si le paramètre ne semble pas avoir changé, rouvrez `PalWorldSettings.ini` et vérifiez que :

- la valeur `DeathPenalty` est orthographiée exactement comme il faut
- la modification a bien été enregistrée
- le serveur a été redémarré après l’édition

:::danger Utiliser les noms exacts des valeurs
Le paramètre `DeathPenalty` est sensible à la casse dans la configuration. Utilisez toujours les noms exacts `None`, `Item`, `ItemAndEquipment` ou `All`.
:::

## Conclusion

Félicitations, vous avez modifié avec succès la pénalité de mort dans Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂