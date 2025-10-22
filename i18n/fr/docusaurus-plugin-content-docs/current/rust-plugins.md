---
id: rust-plugins
title: "Rust : Installation de plugins"
description: "Découvrez comment améliorer votre serveur Rust avec des plugins populaires pour personnaliser et optimiser votre gameplay → En savoir plus maintenant"
sidebar_label: Installer des plugins
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## Introduction

Les plugins vous permettent d’étendre et de personnaliser encore plus votre serveur. Dans ce qui suit, nous vous expliquons où trouver les plugins les plus utilisés et comment les configurer.

<InlineVoucher />


## Préparation

Tout d’abord, vous devez télécharger les plugins que vous souhaitez installer sur le serveur. Une large sélection de plugins est disponible sur [umod.org (anciennement OXIDE)](https://umod.org/plugins). Lors du téléchargement, vous obtiendrez un fichier `.cs`.  

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## Installation

Une fois les plugins désirés téléchargés, vous pouvez passer à l’installation. Celle-ci se fait via **FTP**, vous aurez donc besoin d’un client FTP pour uploader les fichiers sur votre serveur. Si vous ne connaissez pas encore FTP et son fonctionnement, consultez notre [guide d’accès FTP](gameserver-ftpaccess.md).

Vous trouverez le bon répertoire pour les plugins sous : `/gXXXXXX/rust-oxide/oxide/plugins`. Il vous suffit d’uploader les fichiers `.cs` des plugins téléchargés dans ce dossier. Après l’upload, cela devrait ressembler à ça :  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

Rien d’autre n’est nécessaire. L’installation est déjà terminée. Ensuite, vous pouvez vérifier dans la console live si le plugin a bien été compilé et chargé. La sortie devrait ressembler à ceci :

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Plugins populaires

Vous cherchez encore les plugins parfaits pour votre serveur ?

Parcourez notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour améliorer votre gameplay et donner à votre serveur la touche finale qu’il mérite. Inspirez-vous et trouvez exactement les ajouts qui correspondent à votre projet.

<SearchableItemList items={items} />


## Conclusion

Si vous avez suivi toutes les étapes, vous devriez avoir installé votre plugin avec succès. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />