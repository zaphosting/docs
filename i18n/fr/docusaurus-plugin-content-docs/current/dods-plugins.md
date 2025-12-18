---
id: dods-plugins
title: "Day of Defeat: Source : Installer des plugins sur ton propre serveur"
description: "Découvre comment personnaliser et améliorer ton serveur de jeux avec Sourcemod et Metamod pour une meilleure gestion et plus de fonctionnalités → Apprends-en plus maintenant"
sidebar_label: Installer des Plugins
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/dods-plugins.json';


## Introduction

Apprends à installer Sourcemod et Metamod et à utiliser des plugins pour ton serveur. Ces deux extensions te permettent de personnaliser des jeux comme CS:S, CS:GO, DoD:S ou TF2 et d’élargir considérablement les options de gestion disponibles pour ton serveur.

Avec Sourcemod et Metamod, tu peux ajouter des plugins, activer des fonctionnalités spéciales et adapter ton serveur exactement à tes envies.

<InlineVoucher />



## Installation de Sourcemod / Metamod

### Préparation

Les extensions nécessaires peuvent être téléchargées depuis [Sourcemod](https://sourcemod.net/) et [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Utilise toujours les dernières versions **stables** pour garantir une compatibilité et un fonctionnement optimaux.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Tu as besoin des packages Linux **Sourcemod** et **Metamod**. Télécharge-les depuis les sources indiquées. Après le téléchargement, tu devrais avoir deux fichiers compressés. Extrayez-les sur ton ordinateur pour obtenir un dossier addons contenant les dossiers `sourcemod` et `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

Une fois ces étapes terminées, tu peux passer à l’installation. Upload les fichiers sur ton serveur via FTP en utilisant un client FTP. Si tu ne connais pas FTP ou comment ça marche, consulte ce guide : [Accès via FTP](gameserver-ftpaccess.md)

Ensuite, upload le dossier **addons** dans le répertoire principal de ton serveur. La structure des dossiers devrait ressembler à ça :

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

La configuration de **Sourcemod** et **Metamod** est maintenant terminée. Connecte-toi à ton serveur dans le jeu et utilise la commande ``sm version`` dans la console pour vérifier si Sourcemod et Metamod ont bien été installés. Le résultat devrait ressembler à ça :

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

Si le message **Unknown command** s’affiche, c’est qu’il y a eu un souci pendant l’installation.



## Installation des plugins

### Préparation

Une fois Sourcemod et Metamod installés et fonctionnels, tu peux commencer à ajouter des plugins. Télécharge les plugins que tu souhaites installer sur ton serveur depuis [Sourcemod](https://sourcemod.net/), où tu trouveras une grande collection en constante évolution. Pour chaque plugin, assure-toi d’obtenir le fichier .smx correspondant.

### Installation

Une fois les plugins téléchargés, tu peux procéder à leur installation. Cela se fait via FTP en uploadant les fichiers des plugins dans le répertoire :

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Plugins populaires
Tu cherches encore les plugins parfaits pour ton serveur ? Parcours notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour booster ton gameplay et donner à ton serveur la touche finale qu’il mérite. Inspire-toi et trouve exactement les ajouts qui collent à ton projet.
<SearchableItemList items={items} />


## Conclusion

Si tu as suivi toutes les étapes, tu as normalement réussi à installer Sourcemod/Metamod ainsi que les plugins que tu voulais. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />