---
id: palworld-install-mods
title: "Palworld : Installer des Mods"
description: "Apprenez à installer des mods Palworld, y compris UE4SS Palworld, mods Lua et mods .pak, sur votre serveur dédié. -> En savoir plus maintenant"
sidebar_label: Palworld : Installer des Mods
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld prend en charge plusieurs types de mods serveur, les plus courants étant les mods `UE4SS`, `.lua` et `.pak`. Dans ce guide, vous apprendrez à préparer votre serveur, identifier le type de mod correct, uploader les fichiers nécessaires et redémarrer votre serveur pour que les mods se chargent correctement.



## Préparation

Avant d’installer des mods, vous devez vous assurer que votre serveur et le mod choisi sont compatibles.

:::danger Sauvegardez votre monde avant tout
Vous devez toujours créer une sauvegarde de vos données de sauvegarde Palworld avant d’installer des mods. Si un mod est incompatible ou cause des problèmes au démarrage, vous devrez peut-être restaurer l’état précédent de votre monde.
:::

Vérifiez d’abord les points suivants :

| Exigence | Détails |
| --- | --- |
| Édition du serveur | Les serveurs dédiés Palworld utilisent la version **Steam**. Les mods destinés uniquement à la version **Game Pass** ne doivent pas être utilisés. |
| Compatibilité du mod | Confirmez que l’auteur du mod indique explicitement que le mod fonctionne sur un serveur dédié. |
| Type de mod | Vérifiez si le mod est un mod `UE4SS`, `.lua` ou `.pak`. |
| Exigence client | Certains mods doivent être installés à la fois sur le **serveur** et sur tous les **clients joueurs**. |
| Version du serveur | Vérifiez la version actuelle de votre serveur avant d’installer un mod. |

### Vérifiez la version de votre serveur

Pour confirmer la version actuelle de votre serveur Palworld, ouvrez la console serveur dans l’administration de votre serveur de jeux ZAP-Hosting et lancez :

```text
info
```

Cela affiche les informations de version que vous pouvez comparer avec les exigences du mod.

:::tip Installez un mod à la fois
Vous ne devez installer qu’un seul mod à la fois et le tester avant d’en ajouter un autre. Cela facilite grandement le dépannage si le serveur ne démarre pas ou si un mod ne fonctionne pas correctement.
:::

## Comprendre quel type de mod vous installez

Les mods Palworld ne s’installent pas tous de la même manière. Vous devez identifier le type de mod avant d’uploader les fichiers.

| Type de mod | Contenu typique | Chemin d’installation courant | Remarques |
| --- | --- | --- | --- |
| Mod `UE4SS` / `.lua` | Dossier contenant des scripts comme `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Nécessite généralement le framework `UE4SS` |
| Mod `.pak` | Un ou plusieurs fichiers `.pak`, parfois avec des fichiers additionnels | `Pal/Content/Paks/~mods/` | Certains mods utilisent plutôt `Pal/Content/Paks/LogicMods/` |
| Mod côté client | Variable | Pas toujours installable sur serveur | Doit être utilisé uniquement si l’auteur confirme la prise en charge serveur |

:::caution Suivez le chemin indiqué par l’auteur du mod
Les chemins dans ce guide sont les emplacements les plus courants actuellement utilisés pour les mods Palworld. Cependant, certains mods nécessitent une structure de dossiers différente. Vous devez toujours suivre les instructions fournies par l’auteur du mod si elles diffèrent.
:::

## Accédez aux fichiers de votre serveur dans l’interface ZAP

Vous devrez utiliser les zones de gestion de fichiers dans l’administration de votre serveur de jeux ZAP-Hosting.

### Ouvrir la section Configs

Les fichiers de configuration pertinents sont accessibles dans votre administration serveur sous **Configs**. Cette zone est utile pour vérifier et modifier les fichiers de configuration disponibles pour votre serveur Palworld.

:::note Configs vs. fichiers de mod
L’installation des mods Palworld ne se fait généralement pas uniquement en modifiant un paramètre de gameplay dans un seul fichier de config. Dans la plupart des cas, vous devez uploader les fichiers du mod dans les bons dossiers serveur, et certains mods peuvent aussi nécessiter des modifications de configuration dans des fichiers disponibles sous **Configs**.
:::

### Ouvrir le gestionnaire de fichiers

Pour uploader des fichiers de mod comme des archives `.pak` ou des dossiers de scripts `UE4SS`, vous devez aussi accéder aux fichiers de votre serveur via le gestionnaire de fichiers dans l’interface ZAP.

Si un mod inclut son propre fichier de configuration, vous devez l’uploader tel que fourni par l’auteur du mod, puis le modifier uniquement si l’auteur documente les valeurs supportées.

## Installer le framework UE4SS si nécessaire

`UE4SS` est un framework de modding utilisé par de nombreux mods Palworld basés sur Lua et scripts. Vous n’en avez besoin que si votre mod en dépend.

### Confirmez que votre serveur utilise Windows

`UE4SS` pour Palworld est généralement utilisé avec la version serveur Windows. Si votre serveur n’utilise pas un environnement serveur Palworld Windows, les mods basés sur `UE4SS` peuvent ne pas fonctionner comme prévu.

:::info Exigence UE4SS
Si votre mod choisi est un mod `UE4SS` ou `.lua`, vous devez confirmer que le framework est déjà présent avant d’uploader le mod lui-même.
:::

### Vérifiez le chemin d’installation UE4SS

Si `UE4SS` est installé, le répertoire concerné est généralement :

```text
Pal/Binaries/Win64/ue4ss/
```

Le dossier de mods utilisé par la plupart des mods `UE4SS` et Lua est :

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Si votre produit ZAP-Hosting propose une option intégrée de modding ou `UE4SS` dans l’administration serveur, vous pouvez utiliser cette option si elle est disponible. Si cette option n’est pas visible dans votre interface, ne supposez pas qu’elle existe pour votre produit ou type de serveur.

## Uploader et installer les mods Lua ou UE4SS

Les mods Lua et autres mods Palworld basés sur `UE4SS` sont généralement distribués sous forme de dossiers plutôt que d’un seul fichier `.pak`.

### Extrayez le mod sur votre appareil local

Téléchargez l’archive du mod depuis la page officielle de l’auteur et extrayez-la sur votre ordinateur. Vous ne devez pas uploader le fichier `.zip` ou `.rar` sauf si l’auteur vous l’indique explicitement.

### Uploadez le dossier du mod au bon emplacement

Pour la plupart des mods Lua ou `UE4SS`, uploadez le dossier mod extrait dans :

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Une structure typique d’un mod Lua ressemble à ceci :

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Remplacez `UploadedMod` par le nom réel du dossier fourni par l’auteur du mod.

### Exemple de structure

| Élément | Chemin exemple |
| --- | --- |
| Dossier mod | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Fichier script | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Ne renommez pas les fichiers arbitrairement
Vous ne devez pas renommer le dossier mod, les fichiers scripts ou la structure interne des dossiers sauf si l’auteur du mod vous l’indique explicitement. Beaucoup de mods `UE4SS` dépendent de la structure originale pour se charger correctement.
:::

## Uploader et installer les mods .pak

Les mods `.pak` s’installent différemment des mods Lua ou scripts `UE4SS`.

### Uploadez le fichier `.pak`

Pour la plupart des mods `.pak` Palworld, uploadez le fichier dans :

```text
Pal/Content/Paks/~mods/
```

Exemple :

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Certains mods peuvent vous demander d’utiliser plutôt :

```text
Pal/Content/Paks/LogicMods/
```

### Vérifiez les fichiers additionnels s’ils sont inclus

Certains mods `.pak` peuvent contenir plusieurs fichiers, comme des métadonnées ou des fichiers compagnons. Si l’archive du mod contient plusieurs fichiers requis, uploadez-les tous exactement comme décrit par l’auteur.

| Emplacement `.pak` courant | Cas d’utilisation |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Emplacement le plus courant pour les mods `.pak` généraux |
| `Pal/Content/Paks/LogicMods/` | Utilisé par certains mods selon les instructions de l’auteur |

## Modifiez les fichiers de configuration du mod si nécessaire

Certains mods Palworld incluent leurs propres fichiers de configuration qui doivent être modifiés après l’upload. Ces réglages ne sont pas universels, donc le nom exact du fichier et les valeurs dépendent du mod choisi.

### Où trouver le fichier de configuration

Si le mod fournit un fichier de config, il peut se trouver dans l’un de ces emplacements après upload :

| Type de mod | Emplacement possible du config |
| --- | --- |
| Mod `UE4SS` / `.lua` | Dans le dossier mod sous `Pal/Binaries/Win64/ue4ss/Mods/[votre_mod]/` |
| Mod `.pak` | Parfois aucun config éditable n’est inclus ; vérifiez la documentation du mod |
| Intégration config serveur | Dans certains cas, des réglages supplémentaires peuvent être modifiés via **Configs** dans votre administration serveur ZAP |

### Que modifier

Vous ne devez modifier que les valeurs explicitement documentées par l’auteur du mod. Exemples typiques :

- activer ou désactiver des fonctionnalités du mod
- définir des multiplicateurs ou limites
- définir un comportement réservé aux admins
- changer des noms de touches ou options internes utilisées par le mod

Comme les mods Palworld n’utilisent pas un format de config standardisé unique, il n’existe pas d’entrée de configuration universelle applicable à tous les mods.

:::info Pas d’entrée de config universelle pour les mods Palworld
Il n’existe actuellement aucun fichier de configuration serveur Palworld unique ou section de config intégrée qui active tous les mods globalement. En pratique, l’installation d’un mod se fait généralement en plaçant les bons fichiers dans les bons dossiers, puis en modifiant les fichiers de config spécifiques au mod uniquement si le mod les inclut.
:::

## Redémarrez le serveur et testez le mod

Après avoir uploadé les fichiers du mod et effectué les modifications de configuration nécessaires, vous devez redémarrer votre serveur Palworld.

### Redémarrez le serveur

Utilisez la fonction de redémarrage dans l’administration de votre serveur de jeux ZAP-Hosting pour redémarrer complètement le service.

Cette étape est nécessaire car Palworld ne charge normalement pas les mods serveur nouvellement uploadés tant que le serveur n’a pas redémarré.

### Testez la fonctionnalité

Après le redémarrage :

1. Rejoignez le serveur.
2. Testez la fonctionnalité du mod en jeu.
3. Vérifiez la console serveur pour des erreurs si le mod ne fonctionne pas.
4. Supprimez les fichiers du mod récemment ajoutés si le serveur ne démarre pas ou se comporte de façon inattendue.

:::tip Dépannage des mods qui échouent
Si un mod pose problème, supprimez d’abord uniquement les fichiers du mod installé en dernier, puis redémarrez le serveur. C’est la méthode la plus rapide pour confirmer si ce mod est la cause.
:::

## Référence rapide

| Tâche | Action |
| --- | --- |
| Vérifier la version serveur | Lancez `info` dans la console serveur |
| Chemin de base UE4SS | `Pal/Binaries/Win64/ue4ss/` |
| Chemin mod UE4SS/Lua | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Fichier script Lua courant | `scripts/main.lua` |
| Chemin mod `.pak` courant | `Pal/Content/Paks/~mods/` |
| Chemin alternatif `.pak` | `Pal/Content/Paks/LogicMods/` |
| Accès fichier config | Ouvrir **Configs** dans l’administration serveur ZAP |
| Étape finale | Redémarrer le serveur |

## Conclusion

Félicitations, vous avez installé avec succès des mods sur votre serveur Palworld. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂