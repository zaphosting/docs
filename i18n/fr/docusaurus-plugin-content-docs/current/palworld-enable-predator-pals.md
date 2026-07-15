---
id: palworld-enable-predator-pals
title: "Palworld : Activer les Predator Pals"
description: "Apprenez à activer ou désactiver les predator pals sur votre serveur Palworld, corriger l'absence d'apparition des predator pals, et configurer manuellement le bon paramètre. -> En savoir plus maintenant"
sidebar_label: "Palworld : Activer les Predator Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les *Predator Pals* sont des Pals puissants de type boss qui peuvent apparaître dans le monde de Palworld. Dans ce guide, vous apprendrez à activer ou désactiver les predator pals sur votre serveur de jeux Palworld ZAP-Hosting en modifiant manuellement le fichier de configuration approprié.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission de gérer ses fichiers de configuration.

:::info Accès au fichier de configuration
Pour cette configuration, vous devez modifier manuellement votre fichier de configuration via la section **Configs** de l’administration de votre serveur de jeux.
:::

## Ouvrir la configuration Palworld

Pour changer la possibilité d’apparition des predator pals, vous devez éditer le fichier `PalWorldSettings.ini`.

### Trouver le bon fichier dans l’interface ZAP

Ouvrez d’abord votre serveur de jeux Palworld dans l’interface web ZAP-Hosting. Ensuite, rendez-vous dans la section **Configs** de l’administration de votre serveur et ouvrez le fichier `PalWorldSettings.ini`.

C’est le fichier principal utilisé pour les réglages liés au gameplay, y compris le comportement des predator boss pals.

:::note Modification manuelle requise
Ce paramètre doit être modifié manuellement dans le fichier de configuration. Si votre interface ne propose pas de bouton dédié pour cette option, éditer directement `PalWorldSettings.ini` est la méthode correcte.
:::

## Modifier le paramètre Predator Pals

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings`. La clé de configuration concernée est `EnablePredatorBossPal`.

### Valeur de configuration

Utilisez l’une des valeurs suivantes selon le résultat souhaité :

| Paramètre | Valeur | Résultat |
| --- | --- | --- |
| Activer les predator pals | `True` | Les predator boss Pals peuvent apparaître dans le monde |
| Désactiver les predator pals | `False` | Les predator boss Pals n’apparaîtront pas dans le monde |

### Exemple d’entrée

Si le paramètre existe déjà, modifiez sa valeur. S’il est absent, ajoutez-le dans la liste de configuration `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

Pour désactiver les predator pals, utilisez plutôt :

```ini
EnablePredatorBossPal=False
```

:::tip Vérifiez d’abord la syntaxe existante
Les réglages du serveur Palworld sont souvent stockés dans une ligne plus longue `OptionSettings` dans `PalWorldSettings.ini`. Si votre fichier contient déjà cette structure, ajoutez ou modifiez `EnablePredatorBossPal=True` ou `EnablePredatorBossPal=False` dans cette liste existante au lieu de créer une section séparée.
:::

## Enregistrer et appliquer les modifications

Après avoir modifié le fichier, enregistrez vos changements dans la section **Configs**.

### Redémarrer le serveur

Une fois le fichier enregistré, redémarrez votre serveur Palworld pour que le nouveau paramètre soit pris en compte correctement.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Non |

:::caution Redémarrage obligatoire
Le nouveau paramètre predator pals ne sera appliqué qu’après le redémarrage du serveur. Si les predator pals n’apparaissent pas après la modification, vérifiez que le fichier a bien été enregistré et que le redémarrage s’est déroulé avec succès.
:::

## Vérifier le paramètre

Après le redémarrage, connectez-vous à votre serveur et vérifiez si les predator pals se comportent comme prévu.

Si vous les avez activés et qu’ils n’apparaissent pas, revérifiez l’entrée dans `PalWorldSettings.ini` et assurez-vous que la valeur est exactement `True` ou `False`. Confirmez aussi que le paramètre est bien placé dans la syntaxe de configuration existante.

:::note Comportement d’apparition
Ce paramètre contrôle si les predator boss Pals sont autorisés à apparaître dans le monde. Il ne fournit pas de carte des emplacements des predator pals, ne modifie pas les points d’apparition individuels, ni ne garantit des rencontres immédiates dans une zone spécifique.
:::

## Référence de configuration

| Fichier | Emplacement dans ZAP-Hosting | Clé | Valeurs possibles | Comportement par défaut | Redémarrage requis |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Administration serveur de jeux → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Oui |

## Conclusion

Félicitations, vous avez activé ou désactivé avec succès les predator pals sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂