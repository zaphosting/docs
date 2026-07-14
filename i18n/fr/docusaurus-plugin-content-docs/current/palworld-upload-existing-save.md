---
id: palworld-upload-existing-save
title: "Palworld : Télécharger une sauvegarde existante"
description: "Apprenez à télécharger une sauvegarde Palworld existante, migrer un monde serveur et mettre à jour correctement le fichier de configuration requis sur votre serveur de jeux ZAP-Hosting. -> En savoir plus maintenant"
sidebar_label: Palworld : Télécharger une sauvegarde existante
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stocke les données du monde du serveur dédié dans un dossier de sauvegarde spécifique et lie ce dossier via la configuration du serveur. Dans ce guide, vous apprendrez comment télécharger une sauvegarde existante sur votre serveur Palworld ZAP-Hosting et mettre à jour le paramètre requis pour que le serveur charge le bon monde.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous d’avoir le dossier de sauvegarde Palworld existant disponible sur votre appareil local.

:::danger Sources de sauvegarde non prises en charge
Les sauvegardes cloud des consoles Xbox et PS5 ne peuvent pas être transférées directement vers un serveur dédié Palworld. Vous ne pouvez migrer que des sauvegardes depuis une installation PC ou depuis un autre serveur dédié existant.
:::

:::info Accès requis
Vous devez avoir accès à l’interface web de votre serveur de jeux ZAP-Hosting, incluant le gestionnaire de fichiers et la section `Configs`.
:::

Si vous avez besoin d’aide pour accéder aux fichiers de votre serveur, utilisez le guide de gestion des fichiers correspondant dans la documentation ZAP-Hosting si disponible pour votre produit.

## Comprendre la structure requise de la sauvegarde

Avant de télécharger quoi que ce soit, vous devez vérifier que votre sauvegarde a la bonne structure.

Sur un serveur dédié Palworld, la sauvegarde active du monde est stockée dans :

```text
Pal/Saved/SaveGames/0/[votre_id_de_dossier_de_sauvegarde]/
```

Le nom du dossier `[votre_id_de_dossier_de_sauvegarde]` est généralement une longue chaîne de lettres et de chiffres, par exemple :

```text
84B5E2264EC387DEDB43179D666031A1
```

Un dossier de sauvegarde valide contient normalement des fichiers et dossiers similaires aux suivants :

| Élément | Fonction |
| --- | --- |
| `Level.sav` | Données principales de la sauvegarde du monde |
| `LevelMeta.sav` | Métadonnées du monde |
| `Players/` | Données de sauvegarde des joueurs |
| `WorldOption.sav` | Fichier d’options du monde obsolète qui peut devoir être supprimé |

:::caution Supprimer WorldOption.sav obsolète
Si votre dossier de sauvegarde téléchargé contient `WorldOption.sav`, supprimez-le avant de démarrer le serveur. Ce fichier est connu pour causer des problèmes sur les configurations actuelles de serveurs dédiés et ne doit pas être utilisé pour les sauvegardes migrées sauf si une mise à jour officielle récente de Palworld l’exige.
:::

## Trouver le fichier de configuration dans l’interface ZAP

Après avoir téléchargé le dossier de sauvegarde, vous devez indiquer au serveur de pointer vers ce dossier en modifiant la configuration Palworld.

Dans l’administration du serveur de jeux ZAP-Hosting, ouvrez la section `Configs` et localisez :

```text
GameUserSettings.ini
```

Selon l’environnement actuel du serveur, ce fichier se trouve généralement dans l’un des chemins suivants :

| Chemin possible | Remarques |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Chemin courant sur les serveurs Palworld basés sur Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Chemin plus ancien ou alternatif sur les configurations Windows |

:::note Chemin LinuxServer vs WindowsServer
Les serveurs dédiés Palworld sont généralement déployés avec le chemin de config `LinuxServer`. Si vous ne voyez pas `WindowsServer`, vérifiez plutôt `LinuxServer`. Dans l’interface ZAP, la méthode la plus simple est d’ouvrir `Configs` et de sélectionner directement `GameUserSettings.ini`.
:::

## Télécharger la sauvegarde existante

Le processus de téléchargement dépend de la provenance de votre sauvegarde, mais l’emplacement cible sur le serveur ZAP est toujours le même.

### Arrêter d’abord le serveur

Avant de remplacer le monde par défaut, arrêtez votre serveur Palworld dans l’interface web ZAP-Hosting.

:::caution Éviter la corruption de sauvegarde
Ne téléchargez pas et ne remplacez pas les fichiers du monde pendant que le serveur est en fonctionnement. Arrêter le serveur avant aide à éviter les écritures incomplètes et la corruption des données de sauvegarde.
:::

### Supprimer le dossier de sauvegarde par défaut

Ouvrez le gestionnaire de fichiers et naviguez vers :

```text
Pal/Saved/SaveGames/0/
```

Dans ce répertoire, vous trouverez généralement un dossier de sauvegarde généré par défaut. Supprimez ce dossier par défaut avant de télécharger votre propre sauvegarde.

### Télécharger votre dossier de sauvegarde existant

Téléchargez votre dossier de sauvegarde existant dans :

```text
Pal/Saved/SaveGames/0/
```

Après le téléchargement, la structure devrait ressembler à ceci :

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [votre_id_de_dossier_de_sauvegarde]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Si `WorldOption.sav` existe, supprimez-le après le téléchargement.

:::tip Copier exactement le nom du dossier
Vous aurez besoin du nom exact du dossier téléchargé pour l’étape suivante. Copiez `[votre_id_de_dossier_de_sauvegarde]` exactement comme affiché dans le gestionnaire de fichiers, lettres et chiffres compris.
:::

## Modifier GameUserSettings.ini

Une fois le téléchargement de la sauvegarde terminé, vous devez mettre à jour la configuration du serveur pour que Palworld charge le bon monde.

Ouvrez `GameUserSettings.ini` depuis la section `Configs` et cherchez l’entrée `DedicatedServerName`.

Définissez-la sur le nom exact du dossier de sauvegarde téléchargé :

```ini
DedicatedServerName=[votre_id_de_dossier_de_sauvegarde]
```

Exemple :

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Entrée de configuration requise

Voici la référence à utiliser lors de la modification du fichier :

| Fichier de config | Clé | Valeur requise |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Nom exact du dossier de sauvegarde téléchargé |

### Ce que fait ce paramètre

`DedicatedServerName` indique au serveur dédié Palworld quel dossier dans `Pal/Saved/SaveGames/0/` doit être chargé comme monde actif.

Si cette valeur ne correspond pas exactement au nom du dossier téléchargé, le serveur peut créer un nouveau monde ou charger incorrectement.

:::danger Correspondance exacte obligatoire
Si vous constatez une progression de carte manquante, un monde vide ou une sauvegarde nouvellement générée au démarrage, la cause la plus fréquente est que `DedicatedServerName` ne correspond pas exactement au nom du dossier téléchargé.
:::

## Emplacements spécifiques selon la source de la sauvegarde

Si vous ne savez pas d’où provient votre sauvegarde originale, utilisez le chemin source correct ci-dessous.

### Depuis un autre fournisseur de serveur dédié

Chez votre ancien fournisseur, sauvegardez le dossier de sauvegarde depuis :

```text
Pal/Saved/SaveGames/0/
```

Copiez le dossier complet du monde avec son nom d’origine, puis téléchargez ce dossier sur votre serveur ZAP-Hosting comme décrit ci-dessus.

### Depuis une sauvegarde Steam en coop

Pour les sauvegardes Steam locales sous Windows, ouvrez le chemin suivant :

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[votre_steamid64]\[votre_id_de_dossier_de_sauvegarde]
```

Le dossier `[votre_steamid64]` est votre ID Steam 64 bits, et `[votre_id_de_dossier_de_sauvegarde]` est le dossier du monde que vous souhaitez migrer.

:::caution Limitation du personnage hôte
Lors de la migration d’un monde coop local Steam vers un serveur dédié, le personnage hôte original n’est pas transféré automatiquement comme les données des joueurs connectés. Des outils tiers de conversion de sauvegarde ou de transfert de personnage peuvent être nécessaires si vous souhaitez conserver le personnage hôte.
:::

### Depuis PC Game Pass

Pour les installations PC Game Pass, les données de sauvegarde locales sont généralement stockées sous :

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Les sauvegardes Game Pass ne sont pas stockées au même format que les sauvegardes Steam ou serveur dédié. En pratique, vous aurez généralement besoin d’un outil tiers de conversion pour transformer la sauvegarde en un format compatible Steam ou serveur dédié avant de la télécharger.

:::info Conversion requise pour Game Pass
Un téléchargement direct des données brutes de sauvegarde PC Game Pass n’est généralement pas suffisant. Vous devez d’abord convertir la sauvegarde, puis télécharger le dossier du monde converti dans `Pal/Saved/SaveGames/0/` et définir `DedicatedServerName` en conséquence.
:::

## Démarrer le serveur

Une fois le dossier de sauvegarde téléchargé et `GameUserSettings.ini` mis à jour, redémarrez votre serveur depuis l’interface web ZAP-Hosting.

Aucune commande console supplémentaire n’est normalement requise pour ce processus de migration.

Après le démarrage, rejoignez le serveur et vérifiez que :

- le bon monde se charge
- les constructions et la progression de la carte sont présentes
- les données des joueurs sont disponibles comme prévu

## Dépannage

Si la sauvegarde téléchargée ne se charge pas correctement, vérifiez les points suivants.

### Le serveur a créé un nouveau monde

Vérifiez que la valeur suivante dans `GameUserSettings.ini` correspond exactement au nom du dossier téléchargé :

```ini
DedicatedServerName=[votre_id_de_dossier_de_sauvegarde]
```

Confirmez aussi que la sauvegarde téléchargée se trouve directement dans :

```text
Pal/Saved/SaveGames/0/[votre_id_de_dossier_de_sauvegarde]/
```

### La carte ou la progression du monde est manquante

Cela signifie généralement l’une des causes suivantes :

| Cause possible | Solution |
| --- | --- |
| Mauvaise valeur `DedicatedServerName` | Renseignez à nouveau le nom exact du dossier téléchargé |
| Dossier de sauvegarde téléchargé dans le mauvais répertoire | Déplacez-le dans `Pal/Saved/SaveGames/0/` |
| Téléchargement incomplet | Retéléchargez le dossier complet et vérifiez que tous les fichiers sont présents |

### WorldOption.sav cause des problèmes

Si votre sauvegarde contient `WorldOption.sav`, supprimez-le et redémarrez le serveur.

Ce fichier est lié à un comportement ancien de gestion des sauvegardes et peut interférer avec les mondes migrés sur serveur dédié.

## Conclusion

Félicitations, vous avez réussi à télécharger une sauvegarde Palworld existante sur votre serveur ZAP-Hosting. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂