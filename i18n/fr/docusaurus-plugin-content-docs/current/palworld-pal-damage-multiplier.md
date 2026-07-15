---
id: palworld-pal-damage-multiplier
title: "Palworld : Multiplicateur de dégâts des Pals"
description: "Apprenez à modifier le multiplicateur de dégâts des Pals dans Palworld en éditant les paramètres de dégâts pour les valeurs d’attaque et de défense sur votre serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Multiplicateur de dégâts des Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet d’ajuster les dégâts infligés et subis par vos Pals en modifiant les paramètres de multiplicateur de dégâts du serveur. Dans ce guide, vous apprendrez quel fichier de configuration éditer dans l’interface ZAP-Hosting, quelles valeurs modifier, et comment appliquer correctement les nouveaux réglages.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via le panneau d’administration ZAP-Hosting.

:::info Configuration manuelle requise
Cette configuration se fait en éditant manuellement le fichier de configuration de Palworld. Aucun commande en jeu n’est nécessaire pour ce changement.
:::

## Ouvrir le fichier de configuration correct

Pour modifier le multiplicateur de dégâts des Pals, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting, ouvrez la section `Configs` et localisez le fichier `PalWorldSettings.ini`. Ce fichier contient les principales valeurs de configuration du monde et du gameplay pour votre serveur Palworld.

:::note Emplacement de la configuration
Le fichier concerné par ce guide est `PalWorldSettings.ini`, accessible via l’administration de votre serveur de jeux sous `Configs`.
:::

## Modifier les valeurs du multiplicateur de dégâts des Pals

Dans `PalWorldSettings.ini`, cherchez la section `OptionSettings`. Les paramètres du multiplicateur de dégâts des Pals sont stockés sous forme de clés de configuration dans cette section.

Vous devez ajuster les entrées suivantes :

| Clé de config | Valeur par défaut | But |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Contrôle les dégâts infligés par vos Pals |
| `PalDamageRateDefense` | `1.000000` | Contrôle les dégâts subis par vos Pals |

### Exemple de configuration

Si les clés existent déjà, modifiez leurs valeurs avec le multiplicateur souhaité. Si elles sont absentes, ajoutez-les dans l’entrée `OptionSettings`.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Signification des valeurs

Utilisez le comportement suivant comme référence pour choisir vos valeurs de multiplicateur :

| Changement de valeur | Effet |
| --- | --- |
| Augmentation de `PalDamageRateAttack` | Vos Pals infligent plus de dégâts |
| Diminution de `PalDamageRateAttack` | Vos Pals infligent moins de dégâts |
| Augmentation de `PalDamageRateDefense` | Vos Pals bénéficient d’une défense moins favorable et subissent effectivement plus de dégâts selon le multiplicateur augmenté |
| Diminution de `PalDamageRateDefense` | Vos Pals subissent plus de dégâts |

:::caution Vérifiez attentivement vos valeurs de multiplicateur
Les paramètres du serveur Palworld utilisent des valeurs numériques décimales. Entrez uniquement des nombres décimaux valides comme `0.500000`, `1.000000` ou `2.000000`. Un format incorrect peut empêcher le serveur de charger correctement la configuration.
:::

## Enregistrer les modifications

Après avoir modifié les valeurs dans `PalWorldSettings.ini`, enregistrez le fichier dans l’éditeur de configuration ZAP-Hosting.

Si vous ajustez l’équilibre pour du PvE ou du jeu coopératif, il est recommandé de modifier un multiplicateur à la fois. Cela facilite les tests pour évaluer l’impact sur les dégâts infligés ou subis.

:::tip Commencez par de petits ajustements
Une légère augmentation comme `1.200000` pour `PalDamageRateAttack` est souvent plus facile à équilibrer qu’un saut important comme `3.000000`.
:::

## Redémarrer le serveur

Une fois la configuration mise à jour enregistrée, redémarrez votre serveur Palworld pour que les nouveaux paramètres de multiplicateur de dégâts soient pris en compte.

Aucune commande console supplémentaire n’est nécessaire après l’édition du fichier. Un redémarrage complet du serveur suffit pour appliquer les changements.

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Exécuter des commandes supplémentaires | Non |
| Redémarrer le serveur | Oui |

## Vérifier les nouveaux paramètres de dégâts

Après le redémarrage du serveur, connectez-vous à votre serveur Palworld et testez le combat avec vos Pals. Vérifiez que :

- vos Pals infligent la quantité de dégâts attendue
- vos Pals subissent la quantité de dégâts attendue
- l’équilibre du gameplay correspond toujours à la configuration de votre serveur

Si le résultat est trop fort ou trop faible, retournez dans `PalWorldSettings.ini`, ajustez à nouveau les valeurs des multiplicateurs, enregistrez le fichier, puis redémarrez le serveur.

## Conclusion

Félicitations, vous avez modifié avec succès le multiplicateur de dégâts des Pals sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂