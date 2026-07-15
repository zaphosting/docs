---
id: palworld-max-guild-bases
title: "Palworld : Nombre max de bases de guilde"
description: "Apprenez à modifier le paramètre du nombre max de bases de guilde dans Palworld en éditant la valeur BaseCampMaxNumInGuild sur votre serveur. -> En savoir plus maintenant"
sidebar_label: "Palworld : Nombre max de bases de guilde"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler le nombre maximum de bases que chaque guilde peut placer sur votre serveur. Dans ce guide, vous apprendrez à modifier manuellement le fichier de configuration approprié dans l’interface web ZAP-Hosting, changer le paramètre `BaseCampMaxNumInGuild` et appliquer la modification en redémarrant votre serveur.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting.

:::info Accès requis
Vous devez avoir accès à l’administration de votre serveur Palworld et à la section `Configs` pour modifier les fichiers de configuration.
:::

## Localiser le fichier de configuration

Pour modifier le nombre max de bases de guilde, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’interface web ZAP-Hosting, ouvrez l’administration de votre serveur de jeux Palworld et naviguez vers :

`Configs` → `PalWorldSettings.ini`

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris les limites de guilde et de bases.

## Modifier la valeur max de bases de guilde

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings`. Le paramètre à modifier est :

`BaseCampMaxNumInGuild=[votre_valeur]`

Remplacez `[votre_valeur]` par le nombre de bases que vous souhaitez autoriser par guilde.

### Exemple de configuration

Si vous voulez autoriser jusqu’à `6` bases par guilde, l’entrée doit ressembler à ceci :

```ini
BaseCampMaxNumInGuild=6
```

Si le paramètre existe déjà, modifiez uniquement sa valeur. S’il est absent, ajoutez-le dans la liste des paramètres `OptionSettings` existante dans le fichier.

:::note Valeur par défaut et maximum vanilla
Les informations actuelles indiquent que la valeur par défaut est `4` et que le maximum vanilla normal est `10`. Les valeurs supérieures à `10` ne sont généralement pas supportées sur un serveur Palworld non moddé.
:::

### Référence des valeurs

| Clé de config | Description | Valeur par défaut | Maximum vanilla |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Nombre maximum de bases autorisées par guilde | `4` | `10` |

:::caution Utilisez des valeurs valides
Réglez `BaseCampMaxNumInGuild` uniquement sur une valeur raisonnable et supportée. Les valeurs supérieures à `10` nécessitent généralement des mods côté serveur et peuvent ne pas fonctionner correctement sur un serveur Palworld standard.
:::

## Sauvegarder la configuration

Après avoir modifié la valeur, sauvegardez le fichier `PalWorldSettings.ini` dans l’éditeur de configuration ZAP-Hosting.

Cela enregistre le nouveau paramètre max de guilde, mais il ne sera effectif qu’après le redémarrage du serveur.

## Redémarrer le serveur

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld depuis l’interface d’administration du serveur.

Un redémarrage est nécessaire car Palworld lit la configuration `PalWorldSettings.ini` au démarrage du serveur. Sans redémarrage, la nouvelle limite de bases de guilde ne sera généralement pas appliquée.

### Ce que vous devez faire ensuite

Aucune commande console supplémentaire n’est normalement requise après avoir modifié `BaseCampMaxNumInGuild`. Après le redémarrage, la nouvelle valeur devrait être active automatiquement.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes supplémentaires | Non |

:::tip Testez la nouvelle limite
Après le redémarrage, rejoignez le serveur et testez la limite de placement de bases avec une guilde pour confirmer que le nouveau paramètre est bien appliqué.
:::

## Dépannage

Si la limite max de bases de guilde ne semble pas changer, vérifiez les points suivants.

### Vérifiez l’entrée de config

Assurez-vous que `BaseCampMaxNumInGuild` est correctement écrit et utilise une valeur numérique, par exemple :

```ini
BaseCampMaxNumInGuild=8
```

Une faute de frappe dans le nom de la clé ou une valeur invalide peut empêcher le paramètre de fonctionner.

### Confirmez que le fichier a été sauvegardé

Vérifiez que vos modifications ont bien été sauvegardées dans `Configs` → `PalWorldSettings.ini` avant de redémarrer le serveur.

### Redémarrez complètement le serveur

Un redémarrage complet du serveur est nécessaire après avoir modifié ce paramètre. Si vous avez seulement sauvegardé le fichier sans redémarrer, l’ancienne valeur peut encore être utilisée.

### Restez dans la limite vanilla

Si vous définissez une valeur supérieure à `10`, le serveur peut l’ignorer ou se comporter de manière inattendue sauf si vous utilisez des mods compatibles. Si vous exploitez un serveur standard, maintenez la valeur à `10` ou moins.

## Conclusion

Félicitations, vous avez modifié avec succès le nombre maximum de bases de guilde sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂