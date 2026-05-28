---
id: subnautica-2-mods
title: "Subnautica 2 : Installer des Mods"
description: "Apprenez à installer des mods Subnautica 2 sur votre serveur de jeux en ajoutant des mods Lua ou C++ dans le bon dossier, pour que votre serveur Subnautica les charge automatiquement au démarrage. -> En savoir plus maintenant"
sidebar_label: "Installer des Mods"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les mods vous permettent de personnaliser et d’améliorer votre expérience sur votre serveur de jeux Subnautica 2 en ajoutant de nouvelles fonctionnalités, en améliorant les mécaniques ou en introduisant du contenu inédit. Ce guide vous montre comment installer des mods Subnautica 2 sur votre serveur de jeux ZAP-Hosting en téléchargeant des mods Lua ou C++ compatibles dans le bon dossier pour qu’ils se chargent automatiquement au démarrage du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Préparation

Avant de commencer, vous devez avoir accès aux fichiers de votre serveur de jeux Subnautica 2 via l’interface web ZAP-Hosting ou un autre moyen de gestion des fichiers disponible.

:::info Type de Mod Requis
Seuls les mods Lua ou C++ conçus pour Subnautica 2 doivent être utilisés. Si un mod est destiné à un autre jeu, comme Subnautica 1 ou Subnautica Below Zero, la compatibilité n’est pas garantie.
:::

:::note Sources de Téléchargement des Mods
Les mods Subnautica 2 peuvent par exemple être obtenus sur des plateformes communautaires comme [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Comme les pages de mods tiers peuvent changer à tout moment, vous devez toujours lire la description et les notes d’installation avant de télécharger les fichiers.
:::

## Télécharger des Mods Compatibles

Commencez par télécharger les mods que vous souhaitez utiliser sur votre serveur. Assurez-vous que le mod est bien destiné à **Subnautica 2** et vérifiez si l’auteur fournit des exigences supplémentaires.

### Vérifier le Contenu du Mod

Après avoir téléchargé une archive de mod, extrayez-la sur votre ordinateur local et examinez les fichiers inclus.

Voici ce qu’il est courant de trouver :

- fichiers scripts Lua
- fichiers mods C++
- une structure de dossiers fournie par l’auteur du mod
- un fichier `README`, une note d’installation ou une liste de dépendances

:::caution Vérifiez la Compatibilité
Tous les mods ne sont pas compatibles avec un serveur. Certains sont uniquement destinés au client et peuvent ne pas fonctionner sur un serveur dédié Subnautica 2. Si l’auteur ne mentionne pas le support serveur, testez soigneusement avant de l’utiliser en production.
:::

## Accéder aux Fichiers de Votre Serveur de Jeux

Ensuite, ouvrez le système de fichiers de votre serveur de jeux Subnautica 2 et localisez le répertoire principal du serveur.

Si vous utilisez l’interface web ZAP-Hosting, ouvrez le gestionnaire de fichiers de votre serveur de jeux et naviguez jusqu’au répertoire racine de l’installation du serveur.

### Localiser le Dossier Mods

Dans le répertoire principal du serveur de jeux, trouvez le dossier `mods`.

Le chemin d’installation est :

```text
[racine_serveur_jeux]/mods
```

Remplacez `[racine_serveur_jeux]` par le répertoire de base des fichiers de votre serveur Subnautica 2.

:::info Chargement Automatique des Mods
Le serveur vérifie le dossier `mods` au lancement. Si un mod Lua ou C++ compatible est placé correctement, il sera chargé automatiquement au prochain démarrage du serveur.
:::

## Télécharger et Installer les Mods

Une fois que vous avez les fichiers de mod corrects et que vous avez ouvert le dossier `mods`, vous pouvez y uploader le contenu du mod.

### Copier les Fichiers du Mod

Téléchargez ou déplacez les fichiers extraits Lua ou C++ dans le dossier `mods` du répertoire principal de votre serveur de jeux.

Selon le mod, cela peut signifier :

- uploader un seul fichier directement dans `mods`
- uploader un dossier complet de mod dans `mods`
- conserver exactement la structure de dossiers fournie par l’auteur du mod

### Garder la Structure d’Origine

Si l’archive téléchargée contient déjà un dossier de mod, ne réorganisez pas les fichiers internes sauf si l’auteur vous l’indique explicitement.

| Élément | Que faire |
| --- | --- |
| Fichier mod Lua unique | Téléchargez-le dans le dossier `mods` |
| Fichier mod C++ unique | Téléchargez-le dans le dossier `mods` |
| Mod basé sur un dossier | Téléchargez le dossier complet dans `mods` |
| Archive comme `.zip` | Extrayez-la d’abord, puis téléchargez le contenu si nécessaire |

:::caution Ne Pas Télécharger d’Archives Compressées Sauf Support Explicite
Si vous ne téléchargez qu’un fichier `.zip` ou autre archive sans l’extraire, le serveur risque de ne pas détecter le mod. Sauf indication contraire de l’auteur, téléchargez les fichiers ou dossiers extraits.
:::

## Redémarrer le Serveur

Après avoir téléchargé les mods, redémarrez votre serveur de jeux Subnautica 2.

Ceci est nécessaire car le serveur charge les mods au démarrage. Si le serveur est déjà en marche, les fichiers nouvellement téléchargés ne seront généralement pas pris en compte avant le prochain lancement.

### Confirmer le Chargement du Mod

Après le redémarrage, vérifiez si le mod est actif en jeu ou via les logs ou sorties disponibles pour votre serveur.

La confirmation peut inclure :

- un changement dans le gameplay
- de nouvelles commandes ou fonctionnalités
- des entrées visibles dans les logs du mod
- un démarrage réussi du serveur sans erreurs

:::tip Installer les Mods Un par Un
Si vous souhaitez utiliser plusieurs mods, installez-les et testez-les un par un. Cela facilite grandement l’identification du mod qui pose problème si le serveur ne démarre plus correctement.
:::

## Dépannage

Si vos mods Subnautica 2 ne fonctionnent pas, plusieurs causes courantes sont à vérifier.

### Problèmes Courants

| Problème | Cause possible | Solution |
| --- | --- | --- |
| Mod ne se charge pas | Fichiers uploadés dans le mauvais dossier | Vérifiez que les fichiers sont bien dans le dossier `mods` du répertoire principal |
| Serveur démarre mais mod n’a aucun effet | Mod uniquement client ou incompatible | Consultez la page du mod et confirmez le support serveur dédié |
| Serveur ne démarre pas | Fichiers mod corrompus ou version incompatible | Supprimez le dernier mod installé et redémarrez le serveur |
| Fichiers mod présents mais ignorés | Archive uploadée au lieu des fichiers extraits | Extrayez le téléchargement et uploadez les vrais fichiers du mod |
| Conflit entre plusieurs mods | Deux mods modifient le même comportement | Testez chaque mod séparément et ne gardez que les combinaisons compatibles |

### Supprimer un Mod Problématique

Si un mod récemment installé cause des problèmes, supprimez le fichier ou dossier correspondant dans le répertoire `mods` puis redémarrez le serveur.

```text
[racine_serveur_jeux]/mods
```

:::danger Utilisez des Sources de Mods Fiables
Téléchargez uniquement des mods provenant de sources fiables. Les fichiers tiers peuvent contenir du contenu corrompu, obsolète ou malveillant. Lisez attentivement la page du mod et évitez les téléchargements inconnus sans informations claires sur l’installation ou la compatibilité.
:::

## Bonnes Pratiques

Pour garder votre serveur stable, gérez les mods avec soin au lieu d’en installer beaucoup d’un coup.

### Flux de Travail Recommandé

1. Téléchargez un mod Subnautica 2 compatible.
2. Extrayez les fichiers localement.
3. Téléchargez les fichiers ou dossier dans le répertoire `mods` du serveur.
4. Redémarrez le serveur.
5. Testez la fonctionnalité.
6. Répétez pour le mod suivant.

### Gardez une Sauvegarde Locale

Avant de modifier votre configuration de mods active, conservez une sauvegarde de :

- vos fichiers de mods actuels
- tous fichiers de configuration liés
- une liste des mods installés avec leurs versions

Cela vous aide à restaurer rapidement une configuration fonctionnelle si un nouveau mod pose problème.

## Conclusion

Félicitations, vous avez installé avec succès des mods sur votre serveur de jeux Subnautica 2. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂