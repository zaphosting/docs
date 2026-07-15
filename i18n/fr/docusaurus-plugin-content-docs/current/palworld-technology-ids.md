---
id: palworld-technology-ids
title: "Palworld : Identifiants de Technologie"
description: "Apprenez à gérer les identifiants de technologie Palworld, désactiver des technologies spécifiques et modifier en toute sécurité la bonne configuration serveur. -> En savoir plus maintenant"
sidebar_label: "Identifiants de Technologie"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld utilise des *identifiants de technologie* pour reconnaître les technologies déblocables et certains paramètres liés aux objets dans la configuration du serveur. Dans ce guide, vous apprendrez à désactiver des technologies spécifiques en modifiant le paramètre `DenyTechnologyList` dans la configuration de votre serveur de jeux Palworld chez ZAP-Hosting.



## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld via l’interface web ZAP-Hosting et la permission de modifier ses fichiers de configuration.

:::info Accès à la Configuration Obligatoire
Vous devez avoir accès à l’administration de votre serveur de jeux et à la section `Configs` pour pouvoir éditer le fichier `PalWorldSettings.ini`.
:::

:::note Source des Identifiants de Technologie
Les identifiants de technologie Palworld sont des valeurs sous forme de chaînes, comme `GrapplingGun`, `GrapplingGun2` ou `SkillUnlock_JetDragon`. Une liste de référence tierce à jour est disponible ici : [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Comme les mises à jour de Palworld peuvent modifier les technologies disponibles, vérifiez toujours que les IDs que vous souhaitez utiliser existent encore dans la version actuelle du jeu.
:::

## Comprendre les identifiants de technologie

Les identifiants de technologie sont des identifiants internes utilisés par Palworld pour les entrées de technologies déblocables. Sur les serveurs dédiés, ces IDs peuvent être utilisés dans certaines options de configuration pour contrôler le comportement du gameplay.

Le paramètre le plus pertinent ici est `DenyTechnologyList`, qui vous permet de bloquer certaines technologies pour qu’elles ne soient pas débloquées ou utilisées sur votre serveur.

### Utilisation supportée en configuration

Le tableau suivant montre la clé de configuration concernée dans ce guide :

| Clé de config | But | Format de valeur |
| --- | --- | --- |
| `DenyTechnologyList` | Désactive des technologies spécifiques sur le serveur | Liste d’IDs de technologie séparés par des virgules |

### Exemples d’identifiants de technologie

Voici quelques exemples d’IDs fréquemment référencés :

| Identifiant de Technologie | Signification Exemple |
| --- | --- |
| `GrapplingGun` | Pistolet à grappin |
| `GrapplingGun2` | Pistolet à grappin de niveau supérieur |
| `SkillUnlock_JetDragon` | Déblocage lié au Jetragon |
| `SkillUnlock_IceHorse` | Déblocage lié au Frostallion |
| `PALBOX` | Technologie liée à Palbox |
| `RepairBench` | Banc de réparation |
| `AIcore` | Noyau IA |

:::caution Utilisez les Valeurs Exactes des IDs
Les identifiants de technologie sont sensibles à la casse. Si vous entrez un ID incorrect, Palworld peut l’ignorer et la technologie ne sera pas désactivée comme prévu.
:::

## Ouvrir le fichier de configuration Palworld

Pour configurer les identifiants de technologie sur votre serveur ZAP-Hosting, vous devez modifier manuellement le bon fichier de configuration Palworld.

### Trouver le fichier dans l’interface ZAP-Hosting

1. Connectez-vous à l’interface web ZAP-Hosting.
2. Ouvrez votre serveur de jeux **Palworld**.
3. Allez dans **Configs** dans l’administration du serveur de jeux.
4. Ouvrez le fichier `PalWorldSettings.ini`.

C’est dans ce fichier de configuration que le paramètre `DenyTechnologyList` est stocké et modifié.



### Localiser le paramètre concerné

Dans `PalWorldSettings.ini`, cherchez le bloc d’options serveur contenant vos paramètres Palworld.

Vous devez trouver ou ajouter l’entrée `DenyTechnologyList`.

:::tip Recherche Rapide dans le Fichier
Utilisez la fonction de recherche de votre navigateur avec `CTRL` + `F` et cherchez `DenyTechnologyList` pour trouver plus vite le paramètre.
:::

## Configurer `DenyTechnologyList`

Vous pouvez maintenant définir quelles technologies doivent être bloquées sur votre serveur.

### Format de la valeur

`DenyTechnologyList` utilise une liste d’IDs de technologie séparés par des virgules.

Exemple de format :

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Chaque entrée doit être un ID de technologie Palworld valide. N’ajoutez pas de descriptions, d’espaces supplémentaires dans l’ID ou de caractères non supportés.

### Ajouter ou modifier le paramètre

Si le paramètre existe déjà, remplacez sa valeur actuelle par la liste souhaitée.

S’il n’existe pas encore, ajoutez-le dans la section appropriée des paramètres serveur dans `PalWorldSettings.ini`.

Exemple :

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Cet exemple désactive plusieurs technologies par leurs IDs.

### Référence d’exemples de configuration

| Entrée Exemple | Résultat |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Désactive uniquement la technologie de base Pistolet à grappin |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Désactive plusieurs niveaux de la technologie Pistolet à grappin |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Désactive certains déblocages spéciaux sélectionnés |

:::note Utilisation Connexe des IDs d’Objets
Certains paramètres liés aux objets dans Palworld utilisent aussi des valeurs basées sur des IDs. Par exemple, des références tierces indiquent que `AdditionalDropItemWhenPlayerKillingInPvPMode` peut aussi utiliser des IDs Palworld pour les drops d’objets en PvP. Ce guide se concentre cependant uniquement sur `DenyTechnologyList`.
:::

## Sauvegarder et appliquer les modifications

Après avoir modifié la configuration, vous devez enregistrer le fichier et redémarrer le serveur pour que Palworld charge les paramètres mis à jour.

### Sauvegarder le fichier

Une fois l’édition de `PalWorldSettings.ini` terminée :

1. Enregistrez les modifications dans l’éditeur `Configs`.
2. Vérifiez une dernière fois que les IDs sont correctement orthographiés.

### Redémarrer le serveur

Après avoir sauvegardé le fichier, redémarrez votre serveur Palworld depuis l’administration du serveur de jeux ZAP-Hosting.

Ce redémarrage est nécessaire car les modifications dans `PalWorldSettings.ini` ne sont pas appliquées de manière fiable tant que le serveur ne redémarre pas avec le fichier mis à jour.

:::info Redémarrage Obligatoire
Un redémarrage du serveur est obligatoire après avoir modifié `DenyTechnologyList`. Aucune commande en jeu supplémentaire n’est généralement requise pour ce paramètre lorsqu’on utilise la méthode du fichier de configuration.
:::

## Vérifier que les technologies sont désactivées

Après le redémarrage, vous devez confirmer que la configuration fonctionne comme prévu.

### Ce qu’il faut vérifier

Vous pouvez vérifier le résultat en contrôlant si les technologies sélectionnées sont toujours disponibles en jeu.

Utilisez la checklist suivante :

| Vérification | Résultat attendu |
| --- | --- |
| Redémarrage du serveur réussi | Le serveur revient en ligne normalement |
| `PalWorldSettings.ini` sauvegardé correctement | Votre entrée `DenyTechnologyList` est toujours présente |
| Technologie désactivée testée en jeu | La technologie sélectionnée n’est plus disponible comme prévu |

### Si le paramètre ne fonctionne pas

Si les technologies sont encore disponibles, vérifiez les points suivants :

| Problème possible | À vérifier |
| --- | --- |
| ID invalide | Confirmez que l’ID de technologie correspond exactement à la version actuelle du jeu |
| Problème de formatage | Assurez-vous que la liste est bien séparée par des virgules et écrite en chaînes d’IDs simples |
| Fichier non sauvegardé | Rouvrez `PalWorldSettings.ini` et confirmez que la valeur est toujours présente |
| Serveur non redémarré | Redémarrez le serveur à nouveau après avoir sauvegardé les modifications |

:::caution Les Mises à Jour Peuvent Modifier les IDs
Palworld reçoit des mises à jour régulières, et les informations sur les technologies peuvent changer avec le temps. Si un ID auparavant valide ne fonctionne plus, vérifiez-le avec une référence fiable et à jour avant de poursuivre le dépannage.
:::

## Conclusion

Félicitations, vous avez réussi à désactiver des technologies spécifiques sur votre serveur Palworld en utilisant les identifiants de technologie. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂