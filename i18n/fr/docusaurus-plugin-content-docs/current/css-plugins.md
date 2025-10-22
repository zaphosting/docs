---
id: css-plugins
title: "Counter-Strike: Source : Installer des plugins sur votre propre serveur"
description: "Découvrez comment personnaliser et améliorer votre serveur de jeux avec Sourcemod et Metamod pour une meilleure gestion et plus de fonctionnalités → En savoir plus maintenant"
sidebar_label: Installer des Plugins
services:
  - gameserver-css
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/css-plugins.json';


## Introduction

Découvrez comment installer Sourcemod et Metamod et comment utiliser des plugins pour votre serveur. Ces deux extensions vous permettent de personnaliser des jeux comme CS:S, CS:GO, DoD:S ou TF2 et d’élargir considérablement les options de gestion disponibles pour votre serveur.

Avec Sourcemod et Metamod, vous pouvez ajouter des plugins, activer des fonctionnalités spéciales et adapter votre serveur exactement à vos envies.

<InlineVoucher />



## Installation de Sourcemod / Metamod

### Préparation

Les extensions nécessaires peuvent être téléchargées depuis [Sourcemod](https://sourcemod.net/) et [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Utilisez toujours les dernières versions **stables** pour garantir une compatibilité et un fonctionnement optimal.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Vous aurez besoin des packages Linux **Sourcemod** et **Metamod**. Téléchargez-les depuis les sources indiquées. Après téléchargement, vous devriez avoir deux fichiers compressés. Extrayez-les sur votre ordinateur pour obtenir un dossier addons contenant les dossiers `sourcemod` et `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

Une fois ces étapes terminées, vous pouvez passer à l’installation. Transférez les fichiers sur votre serveur via FTP en utilisant un client FTP. Si vous ne connaissez pas FTP ou son fonctionnement, consultez ce guide : [Accès via FTP](gameserver-ftpaccess.md)

Ensuite, uploadez le dossier **addons** dans le répertoire principal de votre serveur. La structure des dossiers devrait ressembler à ceci :

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

La configuration de **Sourcemod** et **Metamod** est maintenant terminée. Connectez-vous à votre serveur dans le jeu et utilisez la commande ``sm version`` dans la console pour vérifier si Sourcemod et Metamod ont bien été installés. Le résultat devrait ressembler à ceci :

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Si le message **Unknown command** s’affiche, cela signifie qu’il y a eu un problème lors de l’installation.



## Installation des plugins

### Préparation

Une fois Sourcemod et Metamod installés et fonctionnels, vous pouvez commencer à ajouter des plugins. Téléchargez les plugins que vous souhaitez installer sur votre serveur depuis [Sourcemod](https://sourcemod.net/), où vous trouverez une grande collection en constante évolution. Pour chaque plugin, assurez-vous d’obtenir le fichier .smx correspondant.

### Installation

Une fois les plugins téléchargés, vous pouvez procéder à leur installation. Cela se fait via FTP en uploadant les fichiers des plugins dans le répertoire :

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Plugins populaires
Vous cherchez encore les plugins parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour améliorer votre expérience de jeu et donner à votre serveur la touche finale qu’il mérite. Trouvez l’inspiration et dénichez exactement les ajouts qui correspondent à votre projet.
<SearchableItemList items={items} />


## Conclusion

Si vous avez suivi toutes les étapes, vous avez maintenant installé avec succès Sourcemod/Metamod ainsi que les plugins de votre choix. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, disponible tous les jours pour vous assister ! 🙂 

<InlineVoucher />