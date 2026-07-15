---
id: palworld-enable-hardcore-mode
title: "Palworld : Activer le mode Hardcore"
description: "Apprenez à activer le mode hardcore dans Palworld en modifiant la bonne config serveur, en définissant les valeurs True ou False, et en appliquant les options de mort permanente en toute sécurité. -> En savoir plus maintenant"
sidebar_label: Palworld : Activer le mode Hardcore
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le *mode hardcore* dans Palworld active les règles de mort permanente pour les joueurs et, optionnellement, pour les Pals. Dans ce guide, vous apprendrez à activer manuellement le mode hardcore sur votre serveur de jeux Palworld ZAP-Hosting en modifiant le bon fichier de configuration et en redémarrant ensuite le serveur.



## Préparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting. Vous devez également avoir la permission de modifier les fichiers de configuration du serveur via la section **Configs** de l’administration de votre serveur de jeux.

:::danger Risque de Perte de Données Permanente
Lorsque les paramètres hardcore sont activés, les personnages peuvent être perdus définitivement à la mort. Si vous activez aussi la perte des Pals, vos Pals peuvent également être perdus de façon permanente.
:::

:::tip Créez une Sauvegarde Avant
Avant de modifier des paramètres de gameplay comme le mode hardcore, il est recommandé de créer une sauvegarde de votre serveur ou de vos données de sauvegarde si une option de sauvegarde est disponible pour votre service.
:::

## Ouvrir le fichier de configuration Palworld

Pour activer le mode hardcore, vous devez modifier le fichier `PalWorldSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

:::info Fichier de Configuration Correct
Les paramètres hardcore sont stockés dans `PalWorldSettings.ini`. Si vous modifiez un autre fichier, les changements ne seront pas appliqués à votre serveur Palworld.
:::

## Modifier les paramètres Hardcore

Palworld stocke de nombreux paramètres de gameplay dans l’entrée de configuration `OptionSettings` dans `PalWorldSettings.ini`. Vous devez définir manuellement les valeurs hardcore pertinentes à cet endroit.

### Clés de configuration requises

Les clés de configuration suivantes contrôlent le comportement hardcore :

| Clé de config | Valeur | Effet |
| --- | --- | --- |
| `bHardcore` | `True` ou `False` | Active ou désactive la mort permanente des joueurs |
| `bPalLost` | `True` ou `False` | Active ou désactive la perte permanente des Pals à la mort |
| `bCharacterRecreateInHardcore` | `True` ou `False` | Permet de créer un nouveau personnage après une mort hardcore |

### Aperçu des valeurs recommandées

| Scénario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Mort permanente joueur uniquement | `True` | `False` | `False` ou `True` |
| Hardcore complet avec perte des Pals | `True` | `True` | `False` ou `True` |
| Désactiver le mode hardcore | `False` | `False` | `False` |

:::note Valeurs True et False
Ces paramètres utilisent des valeurs booléennes, ce qui signifie que vous devez entrer soit `True` soit `False` exactement comme supporté par le format de configuration.
:::

### Exemple de configuration

Si les clés sont déjà présentes dans votre `OptionSettings`, modifiez leurs valeurs selon vos besoins. Si elles manquent, ajoutez-les dans la même ligne `OptionSettings`.

Exemple :

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Si votre ligne `OptionSettings` contient déjà beaucoup d’autres paramètres, ne les supprimez pas. Ajoutez ou ajustez uniquement les entrées liées au hardcore dans les parenthèses existantes.

:::caution Préservez les Paramètres Existants
`PalWorldSettings.ini` contient souvent de nombreux paramètres actifs du serveur dans une seule entrée `OptionSettings`. Supprimer par erreur d’autres valeurs peut réinitialiser des options de gameplay non liées sur votre serveur.
:::

## Enregistrer et appliquer les modifications

Après avoir modifié le fichier :

1. Enregistrez les modifications dans `PalWorldSettings.ini`.
2. Redémarrez votre serveur Palworld depuis l’administration du serveur de jeux ZAP-Hosting.

Un redémarrage est nécessaire pour que le serveur charge la configuration hardcore mise à jour.

## Vérifier que le mode Hardcore est actif

Après le redémarrage, connectez-vous à votre serveur et confirmez que les règles hardcore sont actives.

### Ce qu’il faut vérifier

| Paramètre | Comportement attendu |
| --- | --- |
| `bHardcore=True` | Les joueurs ne peuvent pas continuer normalement après la mort |
| `bPalLost=True` | Les Pals sont perdus définitivement à la mort |
| `bCharacterRecreateInHardcore=True` | Un nouveau personnage peut être créé après une mort hardcore |

:::info Note importante sur le comportement
Le résultat exact en jeu dépend des trois paramètres hardcore que vous avez activés. Si vous voulez la mort permanente des joueurs mais que vous souhaitez que les utilisateurs puissent recommencer avec un nouveau personnage, activez `bCharacterRecreateInHardcore=True`.
:::

## Dépannage

Si le mode hardcore ne fonctionne pas comme prévu, vérifiez les points suivants.

### Confirmez que le fichier a été modifié correctement

Assurez-vous d’avoir modifié `PalWorldSettings.ini` dans la zone **Configs** de votre serveur Palworld ZAP-Hosting et pas un autre fichier.

### Vérifiez la syntaxe

Les clés hardcore doivent être placées dans l’entrée `OptionSettings=(...)`. Une ponctuation incorrecte, des virgules manquantes ou des valeurs placées hors de la section correcte peuvent empêcher le serveur de les lire.

Exemple de syntaxe valide :

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Redémarrez à nouveau le serveur

Si le serveur n’a pas été redémarré après l’enregistrement du fichier, les nouveaux paramètres ne seront pas chargés. Effectuez un redémarrage complet et testez à nouveau.

## Conclusion

Félicitations, vous avez activé avec succès le mode hardcore sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂