---
id: palworld-structure-damage-rate
title: "Palworld : Taux de dégâts des structures"
description: "Apprenez à modifier les taux de dégâts et de dégradation des structures dans Palworld en éditant correctement et en toute sécurité la configuration du serveur. -> En savoir plus maintenant"
sidebar_label: Palworld : Taux de dégâts des structures
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld vous permet de contrôler la quantité de dégâts subis par les structures ainsi que leur vitesse de dégradation dans le temps. Dans ce guide, vous apprendrez à modifier manuellement le fichier de configuration adéquat dans l’administration de votre serveur de jeux ZAP-Hosting et à appliquer les nouveaux réglages de dégâts des structures.



## Preparation

Avant de commencer, assurez-vous que votre serveur Palworld est déjà installé et que vous pouvez accéder à son administration web.

:::info Accès requis
Vous devez avoir accès au panneau d’administration de votre serveur de jeux ZAP-Hosting et à la section `Configs` de votre serveur Palworld.
:::

:::note Configuration manuelle
Cette configuration s’effectue en éditant manuellement le fichier de configuration Palworld. Les réglages exacts ne sont pas modifiables via un bouton ou un toggle en un clic dans ce guide.
:::

## Ouvrir le fichier de configuration correct

Pour modifier les dégâts et la dégradation des structures, vous devez éditer le fichier `PalWorldSettings.ini`.

Dans l’administration de votre serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur **Palworld**.
2. Allez dans **Configs**.
3. Ouvrez le fichier `PalWorldSettings.ini`.

Ce fichier contient les principales valeurs de configuration du gameplay de votre serveur, y compris les multiplicateurs liés aux structures.

## Modifier les réglages des dégâts des structures

Les valeurs concernées se trouvent dans les entrées de configuration du serveur dans `PalWorldSettings.ini`.

### Clés de configuration pertinentes

Utilisez les réglages suivants pour contrôler le comportement des dégâts sur les structures :

| Clé de config | Description | Valeur par défaut |
| --- | --- | --- |
| `BuildObjectDamageRate` | Contrôle la quantité de dégâts subis par les structures | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Contrôle la vitesse de dégradation des structures dans le temps | `1.0` |

Une valeur de `1.0` correspond au taux normal par défaut. Des valeurs plus basses réduisent l’effet, tandis que des valeurs plus élevées l’augmentent.

### Exemple de configuration

Selon le contenu actuel de votre fichier, ces valeurs font généralement partie de la liste des options serveur dans `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Si votre configuration utilise une chaîne d’options combinée, assurez-vous de ne modifier que les valeurs tout en conservant la syntaxe environnante intacte.

Par exemple :

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Conserver la syntaxe existante
Le fichier `PalWorldSettings.ini` peut contenir de nombreux réglages dans une seule ligne `OptionSettings=(...)`. Si c’est le cas sur votre serveur, ne supprimez pas les virgules, crochets ou autres entrées existantes lors de l’édition du fichier.
:::

## Choisir des valeurs adaptées

Vous pouvez ajuster les multiplicateurs selon la durabilité souhaitée pour les structures construites par les joueurs.

### Multiplicateur des dégâts des structures

`BuildObjectDamageRate` modifie la quantité de dégâts directs reçus par une structure.

| Valeur | Effet |
| --- | --- |
| `0.5` | Les structures subissent la moitié des dégâts |
| `1.0` | Dégâts par défaut des structures |
| `2.0` | Les structures subissent le double des dégâts |

### Multiplicateur de la dégradation des structures

`BuildObjectDeteriorationDamageRate` modifie la vitesse à laquelle les structures se dégradent dans le temps.

| Valeur | Effet |
| --- | --- |
| `0.1` | Dégradation très lente |
| `1.0` | Vitesse de dégradation par défaut |
| `2.0` | Dégradation plus rapide |

:::tip Minimum recommandé pour la dégradation
Il est conseillé de maintenir `BuildObjectDeteriorationDamageRate` à `0.1` ou plus. Une dégradation très faible ou désactivée peut laisser des structures inutilisées plus longtemps, ce qui peut nuire au nettoyage et aux performances du serveur sur la durée.
:::

## Enregistrer le fichier et redémarrer le serveur

Après avoir modifié les valeurs dans `PalWorldSettings.ini`, enregistrez le fichier dans la section `Configs`.

Vous devez ensuite redémarrer le serveur Palworld pour que les nouveaux réglages de dégâts des structures soient pris en compte.

### Actions requises après modification

| Action | Requis |
| --- | --- |
| Enregistrer `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Commande console supplémentaire | Aucune commande vérifiée requise |

:::info Redémarrage obligatoire
Les modifications de `BuildObjectDamageRate` et `BuildObjectDeteriorationDamageRate` ne sont pas appliquées de manière fiable tant que le serveur n’a pas été redémarré.
:::

## Vérifier les modifications

Une fois le serveur de nouveau en ligne, connectez-vous à votre serveur Palworld et testez le nouveau comportement.

Vous pouvez vérifier les changements en observant si :

- les structures subissent plus ou moins de dégâts directs qu’avant
- les structures abandonnées ou exposées se dégradent au rythme attendu

Si les modifications ne semblent pas prises en compte, rouvrez `PalWorldSettings.ini` et vérifiez que :

- les noms des réglages sont exactement `BuildObjectDamageRate` et `BuildObjectDeteriorationDamageRate`
- les valeurs sont placées dans la bonne section ou ligne `OptionSettings`
- le serveur a bien été redémarré après l’enregistrement

## Conclusion

Félicitations, vous avez modifié avec succès les taux de dégâts et de dégradation des structures sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂