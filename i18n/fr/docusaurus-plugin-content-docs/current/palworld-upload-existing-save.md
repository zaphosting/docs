---
id: palworld-upload-existing-save
title: "Palworld : Télécharger une sauvegarde existante"
description: "Apprenez à télécharger une sauvegarde Palworld existante, à transférer correctement les fichiers et à configurer votre serveur pour charger le bon dossier de monde. -> En savoir plus maintenant"
sidebar_label: "Palworld : Télécharger une sauvegarde existante"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stocke les données du monde du serveur de jeux dédié dans un dossier de sauvegarde spécifique et nécessite une entrée de configuration correspondante pour le charger correctement. Dans ce guide, vous apprendrez comment télécharger une sauvegarde existante sur votre serveur Palworld ZAP-Hosting et configurer le serveur pour qu’il démarre avec les bonnes données du monde.

:::danger Sources de sauvegarde non prises en charge
Vous ne pouvez pas transférer directement les sauvegardes cloud des consoles Xbox ou PS5 vers un serveur de jeux dédié Palworld. Seules les sauvegardes issues d’une installation PC ou d’un autre serveur dédié peuvent être migrées avec cette méthode.
:::



## Préparation

Avant de commencer, assurez-vous de disposer des éléments suivants :

| Exigence | Détails |
| --- | --- |
| Sauvegarde Palworld existante | Un dossier de sauvegarde provenant d’une installation PC ou d’un autre serveur dédié |
| Accès à votre serveur de jeux ZAP-Hosting | Accès à l’interface web, y compris au gestionnaire de fichiers et à la section `Configs` |
| Serveur arrêté | Le serveur Palworld doit être arrêté avant de remplacer les données de sauvegarde |
| Nom du dossier de sauvegarde | Vous devez connaître le nom exact du dossier de sauvegarde que vous avez téléchargé, par exemple `[your_savefolder_id]` |

:::info Accès au fichier de configuration
Chez ZAP-Hosting, les fichiers de configuration Palworld pertinents sont accessibles via l’administration de votre serveur de jeux dans `Configs`. Vous n’avez pas besoin de modifier le fichier directement via le gestionnaire de fichiers, sauf si vous souhaitez vérifier manuellement le chemin.
:::

## Comprendre la structure requise de la sauvegarde

Avant de télécharger quoi que ce soit, il est important de comprendre quel dossier Palworld charge réellement.

L’emplacement de la sauvegarde serveur est :

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Dans ce dossier, vous devriez généralement voir des fichiers et dossiers similaires à ceux-ci :

```text
Level.sav
LevelMeta.sav
Players/
```

Dans certaines sauvegardes plus anciennes ou migrées, vous pouvez aussi trouver :

```text
WorldOption.sav
```

:::caution Supprimer le fichier obsolète WorldOption.sav
Si `WorldOption.sav` est présent dans le dossier de sauvegarde téléchargé, supprimez-le avant de démarrer le serveur. Ce fichier est connu pour causer des problèmes avec les configurations récentes des serveurs Palworld et ne doit pas être utilisé pour les sauvegardes migrées sauf si une configuration actuelle confirmée l’exige.
:::

## Trouver le fichier de configuration correct

Pour que le serveur charge votre monde téléchargé, vous devez modifier `GameUserSettings.ini`.

Dans l’administration du serveur de jeux ZAP-Hosting :

1. Ouvrez votre serveur Palworld.
2. Allez dans `Configs`.
3. Ouvrez `GameUserSettings.ini`.

Selon l’environnement serveur actuel, le chemin du fichier est généralement l’un des suivants :

| Chemin possible | Remarques |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Courant sur les serveurs Palworld basés sur Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Peut apparaître sur les déploiements Windows |

:::note Différences de chemin
Les installations serveur Palworld peuvent utiliser soit `LinuxServer` soit `WindowsServer` dans le chemin de configuration selon la plateforme utilisée par le fournisseur. Si vous modifiez le fichier via `Configs`, le bon fichier est déjà accessible, vous n’avez donc qu’à vous assurer de modifier `GameUserSettings.ini`.
:::

## Télécharger une sauvegarde depuis un autre serveur dédié

Si votre sauvegarde provient déjà d’un autre fournisseur d’hébergement, vous pouvez la migrer directement.

### Sauvegarder la sauvegarde existante

Chez votre ancien fournisseur, localisez et téléchargez le dossier de sauvegarde existant depuis :

```text
Pal/Saved/SaveGames/0/
```

Copiez le dossier complet avec le nom alphanumérique aléatoire, par exemple :

```text
[your_savefolder_id]
```

### Arrêter le serveur ZAP-Hosting

Avant de télécharger la nouvelle sauvegarde, arrêtez votre serveur Palworld dans l’interface web ZAP-Hosting.

:::caution Éviter les conflits de sauvegarde
Ne remplacez pas les fichiers de sauvegarde pendant que le serveur est en marche. Cela peut entraîner des téléchargements incomplets, des données écrasées ou une sauvegarde corrompue.
:::

### Remplacer le dossier de sauvegarde par défaut

Ouvrez le gestionnaire de fichiers de votre serveur de jeux et naviguez vers :

```text
Pal/Saved/SaveGames/0/
```

Supprimez le dossier de sauvegarde par défaut créé automatiquement par le serveur, puis téléchargez votre dossier de sauvegarde existant au même emplacement.

Après le téléchargement, la structure doit ressembler à ceci :

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Définir le dossier de sauvegarde correct dans GameUserSettings.ini

Ouvrez maintenant `GameUserSettings.ini` via `Configs` et cherchez l’entrée `DedicatedServerName`.

Définissez-la avec le nom exact de votre dossier de sauvegarde téléchargé :

```ini
DedicatedServerName=[your_savefolder_id]
```

| Entrée de config | Valeur requise |
| --- | --- |
| `DedicatedServerName` | Le nom exact du dossier dans `Pal/Saved/SaveGames/0/` |

:::tip Correspondance exacte requise
`DedicatedServerName` doit correspondre exactement au nom du dossier téléchargé, avec toutes les lettres et chiffres. Si la valeur ne correspond pas, le serveur peut démarrer un autre monde ou sembler charger sans progression sur la carte.
:::

### Démarrer le serveur

Après avoir sauvegardé la configuration, redémarrez votre serveur Palworld.

Aucune commande console supplémentaire n’est normalement nécessaire après le téléchargement. Un redémarrage complet du serveur suffit pour charger la nouvelle sauvegarde.

## Télécharger une sauvegarde depuis un monde Steam Co-op

Si vous hébergiez auparavant votre monde localement via Steam co-op, vous pouvez aussi télécharger cette sauvegarde sur votre serveur dédié.

### Localiser la sauvegarde Steam locale

Sur votre PC Windows, appuyez sur `Windows` + `R` et ouvrez :

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Dans cet emplacement, ouvrez le dossier nommé avec votre SteamID64. Puis localisez le dossier du monde que vous souhaitez télécharger :

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Télécharger la sauvegarde sur le serveur

Une fois que vous avez identifié le bon dossier de sauvegarde :

1. Arrêtez votre serveur Palworld.
2. Ouvrez le gestionnaire de fichiers.
3. Naviguez vers `Pal/Saved/SaveGames/0/`.
4. Supprimez le dossier de sauvegarde par défaut.
5. Téléchargez votre dossier de sauvegarde existant.
6. Ouvrez `GameUserSettings.ini` dans `Configs`.
7. Définissez :

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Sauvegardez le fichier et redémarrez le serveur.

:::caution Limitation du personnage hôte
Lors de la migration d’un monde Steam co-op local, le personnage hôte n’est pas transféré automatiquement de la même manière que les données des joueurs connectés. En pratique, cela signifie que l’hôte original peut avoir besoin d’étapes supplémentaires de conversion de sauvegarde tierce ou de transfert de personnage si la continuité du personnage est requise.
:::

## Télécharger une sauvegarde depuis PC Game Pass

Les sauvegardes PC Game Pass utilisent un format différent et ne sont pas directement compatibles avec un serveur dédié Palworld.

### Localiser la sauvegarde Game Pass

Les données de sauvegarde locales Game Pass sont généralement stockées dans :

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Convertir la sauvegarde d’abord

Pour utiliser une sauvegarde PC Game Pass sur un serveur dédié, vous devez la convertir au format compatible Steam à l’aide d’un outil de conversion tiers.

Une option courante est [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Avertissement sur les outils tiers
Les outils de conversion de sauvegarde tiers ne sont pas développés ni maintenus par ZAP-Hosting. Leur fonctionnement peut évoluer et la compatibilité n’est pas garantie. Créez toujours une sauvegarde de votre sauvegarde originale avant d’utiliser un outil de conversion.
:::

Après conversion, la sauvegarde exportée est généralement placée dans un dossier tel que :

```text
XGP_converted_saves
```

### Télécharger la sauvegarde convertie

Après conversion :

1. Arrêtez votre serveur.
2. Ouvrez le gestionnaire de fichiers.
3. Allez dans `Pal/Saved/SaveGames/0/`.
4. Supprimez le dossier de sauvegarde par défaut.
5. Téléchargez le dossier de sauvegarde converti.
6. Ouvrez `GameUserSettings.ini` dans `Configs`.
7. Définissez le nom correct du dossier :

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Sauvegardez le fichier et redémarrez le serveur.

## Modifications de configuration requises

L’étape manuelle la plus importante dans ce processus est la modification correcte de `GameUserSettings.ini`.

### Aperçu de l’entrée de configuration

| Fichier | Emplacement dans l’interface ZAP | Entrée à modifier | Exemple de valeur |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Exemple de configuration

Si votre dossier de sauvegarde téléchargé s’appelle `84B5E2264EC387DEDB43179D666031A1`, l’entrée doit ressembler à ceci :

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

N’ajoutez pas de guillemets supplémentaires sauf si elles existent déjà dans la syntaxe du fichier utilisée par votre modèle de configuration actuel.

## Vérifier le téléchargement

Après le démarrage du serveur, connectez-vous et vérifiez si vos données de monde ont bien été chargées.

Vous devez vérifier les points suivants :

| Vérification | Résultat attendu |
| --- | --- |
| Chargement du monde | La carte existante et les structures sont présentes |
| Données des joueurs | Les données des joueurs transférées précédemment sont disponibles si applicable |
| Correspondance du dossier de sauvegarde | `DedicatedServerName` correspond exactement au dossier téléchargé |
| Fichier obsolète supprimé | `WorldOption.sav` n’est plus présent s’il causait des problèmes |

## Dépannage

Si le téléchargement ne fonctionne pas comme prévu, vérifiez ces causes courantes.

### Le serveur démarre un nouveau monde

Si le serveur crée un nouveau monde au lieu de charger votre sauvegarde, la cause la plus fréquente est une valeur incorrecte de `DedicatedServerName`.

Assurez-vous que :

- le dossier téléchargé est bien dans `Pal/Saved/SaveGames/0/`
- le nom du dossier est copié exactement
- `DedicatedServerName=[your_savefolder_id]` correspond exactement à ce dossier

### Les données de la carte sont manquantes

Si le serveur démarre mais que votre progression ou les données de la carte semblent absentes, vérifiez à nouveau la correspondance du nom du dossier.

Ce problème est souvent causé par un décalage entre :

- le nom du dossier de sauvegarde téléchargé
- la valeur `DedicatedServerName` dans `GameUserSettings.ini`

### Le téléchargement semble correct mais échoue quand même

Si la structure du dossier semble correcte mais que la sauvegarde ne se charge toujours pas :

- confirmez que la sauvegarde provient d’une source prise en charge
- supprimez `WorldOption.sav` s’il existe
- assurez-vous que le serveur était complètement arrêté avant de remplacer les fichiers
- redémarrez le serveur après avoir sauvegardé les modifications de configuration

:::tip Meilleure pratique pour le téléchargement de fichiers
Si vous téléchargez une sauvegarde volumineuse, attendez que le transfert soit complètement terminé avant de démarrer le serveur. Un démarrage trop précoce peut laisser la sauvegarde incomplète et empêcher le chargement correct du monde.
:::

## Conclusion

Félicitations, vous avez réussi à télécharger une sauvegarde Palworld existante sur votre serveur ZAP-Hosting. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂