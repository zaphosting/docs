---
id: palworld-technology-ids
title: "Palworld : Identifiants de Technologie"
description: "Apprenez à gérer les identifiants de technologie Palworld, désactiver des technologies spécifiques et comprendre les valeurs de configuration requises sur votre serveur -> En savoir plus maintenant"
sidebar_label: Palworld : Identifiants de Technologie
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld utilise des *identifiants de technologie* pour identifier les technologies déblocables et certains paramètres liés aux objets. Dans ce guide, vous apprendrez à désactiver des technologies spécifiques sur votre serveur de jeux Palworld ZAP-Hosting en modifiant manuellement la bonne entrée de configuration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir accès à votre serveur de jeux Palworld dans l’interface web ZAP-Hosting et la permission de modifier les fichiers de configuration du serveur.

:::info Accès Requis
Vous devez avoir accès à l’administration de votre serveur Palworld et à la section `Configs` dans le panneau ZAP-Hosting pour réaliser cette configuration.
:::

:::note Sources des Identifiants de Technologie
Les identifiants de technologie Palworld sont des chaînes internes définies par le jeu, comme `GrapplingGun` ou `SkillUnlock_JetDragon`. Il n’existe pas de liste officielle dans le panneau ZAP-Hosting, vous devez donc utiliser une référence externe fiable pour obtenir des identifiants valides.
:::

## Comprendre les identifiants de technologie

Les identifiants de technologie sont des identifiants internes utilisés par Palworld pour les technologies déblocables. Au lieu d’utiliser le nom visible en jeu, la configuration serveur attend la chaîne d’identifiant exacte.

Pour désactiver des technologies, Palworld utilise le paramètre `DenyTechnologyList`. Cette valeur accepte une liste d’identifiants de technologie séparés par des virgules.

### Fonctionnement de `DenyTechnologyList`

Lorsque vous ajoutez des identifiants valides à `DenyTechnologyList`, ces technologies sont bloquées sur votre serveur. Cela est utile si vous souhaitez restreindre la progression, retirer certains outils de mobilité ou personnaliser les règles de jeu pour votre communauté.

### Format de valeur supporté

La valeur doit être saisie sous forme d’une liste d’identifiants séparés par des virgules, sans explications supplémentaires.

| Clé de config | But | Format | Exemple |
|---|---|---|---|
| `DenyTechnologyList` | Désactive les technologies sélectionnées | Chaînes d’identifiants de technologie séparées par des virgules | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Correspondance Exacte des IDs
Les identifiants de technologie doivent correspondre exactement à la valeur interne du jeu. Si un ID est mal orthographié ou n’est plus valide pour la version actuelle de Palworld, le paramètre peut ne pas fonctionner comme prévu.
:::

## Ouvrir le fichier de configuration correct

Chez ZAP-Hosting, cette modification se fait en éditant manuellement le fichier de configuration Palworld.

### Fichier à modifier

Vous devez modifier le fichier suivant :

```ini
PalWorldSettings.ini
```

### Où le trouver dans l’interface ZAP-Hosting

Ouvrez l’administration de votre serveur de jeux Palworld, puis allez dans :

```text
Configs
```

De là, ouvrez `PalWorldSettings.ini`.

:::tip Emplacement de la config dans ZAP-Hosting
Si votre serveur propose plusieurs fichiers éditables, assurez-vous de sélectionner `PalWorldSettings.ini`, car c’est le fichier utilisé pour les paramètres serveur liés au gameplay comme `DenyTechnologyList`.
:::

## Modifier le paramètre d’identifiants de technologie

Une fois `PalWorldSettings.ini` ouvert, localisez la liste des options serveur et ajoutez ou modifiez l’entrée `DenyTechnologyList`.

### Ajouter des identifiants à `DenyTechnologyList`

Utilisez une liste séparée par des virgules des technologies que vous souhaitez désactiver.

Exemple :

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Cet exemple désactive :

| Identifiant de Technologie | Signification |
|---|---|
| `GrapplingGun` | Pistolet à grappin |
| `GrapplingGun2` | Variante de pistolet à grappin de niveau supérieur |
| `SkillUnlock_JetDragon` | Déblocage lié au JetDragon |

:::note Format des guillemets
Selon la structure existante de votre entrée dans `PalWorldSettings.ini`, la valeur peut apparaître à l’intérieur d’un bloc d’option plus large. Conservez le style de syntaxe déjà utilisé dans votre fichier et ne modifiez que la valeur de `DenyTechnologyList`.
:::

### Exemple dans un bloc d’options

Sur de nombreux serveurs Palworld, les paramètres sont stockés dans une ligne `OptionSettings` plus large. Dans ce cas, l’entrée peut ressembler à ceci :

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Si `DenyTechnologyList` n’est pas déjà présent, ajoutez-le dans le même bloc `OptionSettings=(...)` en le séparant des autres entrées par une virgule.

:::caution Préserver la syntaxe existante
Ne supprimez pas d’autres paramètres dans `OptionSettings`. Une virgule, un crochet ou un guillemet manquant peut empêcher la configuration de se charger correctement.
:::

## Choisir des identifiants de technologie valides

Vous devez utiliser des identifiants internes valides, pas les noms affichés en jeu.

### Exemples d’identifiants de technologie

Voici des exemples connus d’identifiants utilisés par Palworld :

| Identifiant de Technologie | Exemple de signification |
|---|---|
| `AIcore` | Noyau IA |
| `GrapplingGun` | Pistolet à grappin |
| `GrapplingGun2` | Variante de pistolet à grappin |
| `GrapplingGun3` | Variante de pistolet à grappin |
| `GrapplingGun4` | Variante de pistolet à grappin |
| `GrapplingGun5` | Variante de pistolet à grappin |
| `SkillUnlock_JetDragon` | Déblocage JetDragon |
| `SkillUnlock_IceHorse` | Déblocage Ice Horse |
| `PALBOX` | Technologie liée à Palbox |
| `RepairBench` | Banc de réparation |

Comme Palworld reçoit des mises à jour, la liste complète des IDs peut évoluer. Si vous avez besoin d’une liste plus large, vérifiez les IDs auprès d’une source fiable et à jour avant de les appliquer.

### Utilisation liée des IDs dans d’autres paramètres

Les identifiants internes de type technologie peuvent aussi être utilisés dans d’autres options de configuration Palworld. Un exemple connu est :

| Clé de config | But |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Définit un drop d’objet personnalisé pour les kills en PvP |

:::info Paramètre PvP lié
Si vous prévoyez d’utiliser des IDs pour personnaliser les drops PvP, vérifiez que le type d’ID requis par `AdditionalDropItemWhenPlayerKillingInPvPMode` correspond à l’objet que vous souhaitez utiliser. Ce guide se concentre spécifiquement sur `DenyTechnologyList`.
:::

## Sauvegarder et redémarrer le serveur

Après avoir modifié le fichier, sauvegardez vos changements dans l’interface ZAP-Hosting.

Pour appliquer la nouvelle configuration, redémarrez votre serveur Palworld.

### Actions requises après modification

| Action | Requis |
|---|---|
| Sauvegarder `PalWorldSettings.ini` | Oui |
| Redémarrer le serveur | Oui |
| Exécuter des commandes console supplémentaires | Aucune commande confirmée requise |

Un redémarrage est nécessaire car Palworld lit ces paramètres serveur au démarrage. Sans redémarrage, vos restrictions de technologie ne seront pas prises en compte.

:::tip Tester après redémarrage
Après le redémarrage du serveur, connectez-vous et vérifiez que les technologies sélectionnées ne sont plus disponibles comme prévu. Cela vous permet de confirmer que les IDs et la syntaxe ont été correctement saisis.
:::

## Dépannage

Si les technologies sont toujours disponibles après redémarrage, vérifiez les points suivants.

### Vérifier l’orthographe des IDs

Assurez-vous que chaque identifiant de technologie est écrit exactement comme requis, y compris la casse.

### Contrôler la syntaxe de la config

Si vous avez modifié le bloc `OptionSettings=(...)`, vérifiez que :

- chaque paramètre est séparé par une virgule
- les guillemets sont correctement ouverts et fermés
- les crochets sont complets
- `DenyTechnologyList` est bien dans le bloc de paramètres correct

### Confirmer que le serveur a redémarré correctement

Si le serveur n’a pas redémarré correctement, la configuration mise à jour n’a peut-être pas été chargée.

:::danger Risque de configuration invalide
Un fichier `PalWorldSettings.ini` mal formaté peut empêcher le chargement correct des paramètres. En cas de problème, restaurez la version précédente fonctionnelle du fichier et appliquez la modification avec précaution.
:::

## Conclusion

Félicitations, vous avez réussi à désactiver des technologies spécifiques sur votre serveur Palworld en utilisant des identifiants de technologie. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂