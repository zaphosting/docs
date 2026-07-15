---
id: palworld-randomized-pals
title: "Palworld : Pals aléatoires"
description: "Apprenez à activer les Pals aléatoires dans Palworld en modifiant la configuration de votre serveur, y compris le type de randomizer et les paramètres de seed pour le monde de jeu Palworld. -> En savoir plus maintenant"
sidebar_label: "Pals aléatoires"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld inclut des paramètres de randomizer qui peuvent modifier la façon dont les Pals apparaissent dans votre monde de jeu. Dans ce guide, vous apprendrez à activer et configurer manuellement les Pals aléatoires sur votre serveur Palworld ZAP-Hosting en éditant le fichier de configuration approprié.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et d’avoir la permission de modifier les fichiers de configuration du serveur.

:::info Accès à la configuration requis
Vous devez avoir accès à l’administration web de votre serveur pour ouvrir la section `Configs` et modifier les fichiers de configuration Palworld.
:::

## Ouvrir le fichier de configuration correct

Pour configurer les Pals aléatoires, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur **Palworld**.
2. Allez dans **Configs**.
3. Ouvrez le fichier nommé `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay pour votre serveur Palworld, y compris les options de randomizer.

## Configurer les Pals aléatoires

Les paramètres du randomizer sont stockés sous forme de clés dans `PalWorldSettings.ini`. Vous devez localiser le bloc de paramètres existant et ajuster manuellement les valeurs pertinentes.

### Aperçu des paramètres du randomizer

Utilisez les clés de configuration suivantes pour les apparitions aléatoires de Pals :

| Clé de config | Valeurs autorisées | Par défaut | But |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Contrôle si l’apparition aléatoire de Pals est désactivée ou randomisée par région |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Active des niveaux de Pals sauvages totalement aléatoires si réglé sur `True` |
| `RandomizerSeed` | `[votre_valeur_seed]` ou vide | `""` | Définit la seed utilisée lors de la génération du monde |

:::caution Compatibilité serveur dédié
La valeur `All` a été signalée comme incompatible avec les serveurs dédiés Palworld. Vous devez uniquement utiliser des valeurs supportées comme `None` ou `Region`.
:::

### Exemple de configuration

Ajoutez ou modifiez les valeurs suivantes dans votre fichier `PalWorldSettings.ini` selon vos besoins :

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Remplacez `zaphosting` par votre propre valeur de seed si vous souhaitez une configuration aléatoire spécifique. Une seed garantit que le même motif de randomisation est utilisé lors de la génération du monde.

### Fonctionnement de chaque paramètre

#### `RandomizerType`

Ce paramètre contrôle si les apparitions de Pals sont randomisées.

- `None` désactive la randomisation
- `Region` active la randomisation régionale des apparitions de Pals

Si vous voulez des Pals aléatoires dans votre carte du monde Palworld, réglez cette valeur sur `Region`.

#### `bIsRandomizerPalLevelRandom`

Ce paramètre contrôle les niveaux des Pals sauvages.

- `False` conserve le comportement normal des niveaux
- `True` active des niveaux de Pals sauvages totalement aléatoires

Cela peut rendre le jeu Palworld beaucoup moins prévisible, surtout en début de progression.

#### `RandomizerSeed`

Ce paramètre optionnel définit la seed de randomisation utilisée lors de la génération du monde.

Exemple :

```ini
RandomizerSeed="[votre_valeur_seed]"
```

Remplacez `[votre_valeur_seed]` par n’importe quel texte ou nombre personnalisé que vous souhaitez utiliser comme seed.

:::note Comportement de la seed
La seed du randomizer est appliquée lors de la génération du monde. Si vous modifiez `RandomizerSeed` plus tard sur un monde existant, le changement ne s’appliquera pas à moins de réinitialiser le monde ou d’en créer un nouveau.
:::

## Sauvegarder et appliquer les modifications

Après avoir modifié le fichier, sauvegardez vos changements dans la section `Configs` de ZAP-Hosting.

Une fois le fichier sauvegardé, redémarrez votre serveur Palworld pour que la configuration mise à jour soit prise en compte.

| Action | Requis |
| --- | --- |
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |
| Réinitialiser le monde pour appliquer les changements de seed sur une sauvegarde existante | Si vous changez `RandomizerSeed` |

:::tip Quand démarrer un nouveau monde
Si vous activez la randomisation pour la première fois, surtout avec une `RandomizerSeed` personnalisée, il est préférable d’utiliser un monde neuf pour garantir que les paramètres s’appliquent correctement.
:::

## Vérifier le résultat

Après le redémarrage, connectez-vous à votre serveur et vérifiez si les apparitions de Pals correspondent aux paramètres de randomizer sélectionnés.

Vous devez vérifier :

- si les apparitions régionales aléatoires sont actives
- si les niveaux des Pals sauvages sont randomisés si activé
- si le comportement attendu du monde correspond à la seed configurée sur un nouveau monde

Si les changements ne semblent pas fonctionner, rouvrez `PalWorldSettings.ini` et confirmez que :

- les clés ont été saisies correctement
- les valeurs utilisent la bonne casse, comme `True` et `False`
- le serveur a été redémarré après la sauvegarde
- un nouveau monde a été créé si vous avez changé la seed

## Dépannage

### Les Pals aléatoires n’apparaissent pas

Vérifiez que `RandomizerType=Region` est présent dans `PalWorldSettings.ini`. S’il est toujours réglé sur `None`, la randomisation est désactivée.

### Les changements de seed n’ont pas pris effet

Cela signifie généralement que le monde a déjà été généré avant l’ajout de la nouvelle seed. Dans ce cas, vous devez réinitialiser le monde ou en créer un nouveau pour que la seed soit prise en compte.

### Problèmes serveur après modification des paramètres du randomizer

Si vous avez utilisé une valeur non supportée, comme `All`, revenez à une valeur supportée comme `None` ou `Region`, sauvegardez le fichier, puis redémarrez le serveur.

:::danger Évitez les valeurs de randomizer non supportées
N’utilisez pas `RandomizerType=All` sur un serveur dédié à moins que la documentation officielle du serveur Palworld ne confirme son support. Ce paramètre est actuellement connu pour être incompatible dans les environnements de serveurs dédiés.
:::

## Conclusion

Félicitations, vous avez configuré avec succès les Pals aléatoires sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂