---
id: palworld-enable-global-palbox
title: "Palworld : Activer la Global Palbox"
description: "Apprenez à activer le paramètre global Palbox de Palworld pour l’import et l’export global de Palbox sur votre serveur dédié. -> En savoir plus maintenant"
sidebar_label: Palworld : Activer la Global Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

La *Global Palbox* dans Palworld permet aux joueurs de transférer des Pals entre serveurs en utilisant le système global de stockage cloud de Palworld. Dans ce guide, vous apprendrez à activer l’import et l’export Global Palbox sur votre serveur de jeux Palworld ZAP-Hosting en modifiant manuellement le fichier de configuration approprié.



## Preparation

Avant de commencer, assurez-vous que :

- vous avez accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting
- votre serveur est actuellement arrêté ou peut être redémarré après les modifications
- vous pouvez accéder à la section `Configs` dans l’administration de votre serveur de jeux

:::info Accès au fichier de configuration
Pour les serveurs Palworld ZAP-Hosting, les paramètres concernés peuvent être modifiés via l’administration du serveur de jeux dans `Configs`. Vous n’avez pas besoin d’un accès externe aux fichiers si l’éditeur de configuration est disponible à cet endroit.
:::

## Ouvrir le fichier de configuration Palworld

Pour activer la fonctionnalité Global Palbox, vous devez modifier le fichier `PalWorldSettings.ini`.

### Trouver le fichier de config dans l’interface ZAP

1. Connectez-vous sur le [site ZAP-Hosting](https://zap-hosting.com).
2. Ouvrez l’administration de votre serveur de jeux Palworld.
3. Allez dans la section `Configs`.
4. Ouvrez le fichier nommé `PalWorldSettings.ini`.

Ce fichier contient les principaux paramètres du serveur utilisés par Palworld, y compris les options Global Palbox.

:::note Configuration manuelle requise
Le paramètre Global Palbox se configure manuellement via le fichier de configuration du serveur. Si vous ne voyez pas de bouton spécifique pour cette fonction dans l’interface, modifier directement `PalWorldSettings.ini` est la bonne méthode.
:::

## Activer l’import et l’export Global Palbox

Une fois `PalWorldSettings.ini` ouvert, localisez la liste des options serveur et ajustez les entrées Global Palbox.

### Clés de configuration requises

Les paramètres suivants contrôlent le comportement de la Global Palbox :

| Clé de config | Valeur | Fonction |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` ou `False` | Permet aux joueurs d’importer des Pals depuis la Global Palbox |
| `bAllowGlobalPalboxExport` | `True` ou `False` | Permet aux joueurs d’exporter des Pals vers la Global Palbox |

Selon les références tierces actuelles, `bAllowGlobalPalboxImport` est désactivé par défaut avec `False`, tandis que `bAllowGlobalPalboxExport` est activé par défaut avec `True`. Si votre fichier contient déjà ces valeurs, ajustez-les simplement selon vos besoins.

### Définir les valeurs

Pour activer complètement les transferts Global Palbox entre serveurs, mettez les deux valeurs à `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Si ces options existent déjà dans le fichier, remplacez les valeurs existantes. Sinon, ajoutez-les dans la section des paramètres serveur de `PalWorldSettings.ini`.

:::caution Ne modifiez pas la syntaxe existante
Les fichiers de configuration Palworld sont sensibles au formatage. Ne changez que les valeurs nécessaires et évitez de supprimer des virgules, crochets ou autres entrées existantes si ces options font partie d’une ligne de paramètres plus large dans votre fichier.
:::

## Enregistrer les modifications

Après avoir modifié le fichier :

1. Enregistrez les modifications dans l’éditeur de `PalWorldSettings.ini`.
2. Vérifiez que les deux valeurs Global Palbox sont bien présentes et correctement définies.

Si votre panneau serveur propose uniquement un bouton d’enregistrement, utilisez-le avant de redémarrer le serveur à l’étape suivante.

## Redémarrer le serveur

Après avoir changé les paramètres Global Palbox, vous devez redémarrer le serveur Palworld pour que la nouvelle configuration soit prise en compte.

### Appliquer les nouveaux paramètres

Redémarrez votre serveur depuis l’administration du serveur de jeux après avoir enregistré le fichier.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Non |

Aucune commande supplémentaire n’est nécessaire après la modification du fichier de configuration. Un redémarrage normal du serveur suffit pour appliquer le nouveau paramètre Global Palbox de Palworld.

:::tip Vérifiez la fonctionnalité en jeu
Après le redémarrage, connectez-vous à votre serveur et testez si les joueurs peuvent importer et exporter des Pals via la Global Palbox. C’est la manière la plus simple de confirmer que le paramètre a bien été appliqué.
:::

## Dépannage

Si la Global Palbox ne fonctionne pas après le redémarrage, vérifiez les points suivants.

### Confirmez que les valeurs ont bien été enregistrées

Ouvrez à nouveau `PalWorldSettings.ini` et vérifiez que ces valeurs sont toujours présentes :

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Si les valeurs ont été réinitialisées, le fichier n’a peut-être pas été enregistré correctement.

### Vérifiez les problèmes de formatage

Si vous avez inséré les valeurs dans un bloc de paramètres existant, assurez-vous que la syntaxe autour est toujours valide. Un formatage incorrect dans `PalWorldSettings.ini` peut faire que Palworld ignore les paramètres ou ne les charge pas correctement.

### Redémarrez à nouveau le serveur

Si vous avez enregistré le fichier alors que le serveur tournait, effectuez un redémarrage complet supplémentaire pour garantir que la nouvelle configuration est prise en compte.

:::danger Disponibilité de la fonctionnalité dépend de la version du jeu
La Global Palbox est une fonctionnalité du jeu fournie par Palworld lui-même. Si le paramètre ne fonctionne pas même si la configuration est correcte, la fonctionnalité peut dépendre de la version actuelle du serveur Palworld ou de limitations temporaires côté jeu. Dans ce cas, vérifiez que votre serveur est bien à jour.
:::

## Conclusion

Félicitations, vous avez activé avec succès l’import et l’export Global Palbox sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂