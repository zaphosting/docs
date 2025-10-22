---
id: fivem-installresources
title: "FiveM : Installation des ressources"
description: "Découvrez comment améliorer votre serveur FiveM avec des ressources populaires pour des projets plus ambitieux comme les serveurs roleplay → Apprenez-en plus maintenant"
sidebar_label: Installer des ressources
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introduction

Les ressources permettent d’étendre votre serveur FiveM avec des fonctionnalités supplémentaires. C’est particulièrement intéressant si vous prévoyez de lancer des projets plus importants, comme un serveur roleplay ou autre. Ce genre de projet ne peut pas se faire sans ces ressources additionnelles.

FiveM et sa communauté proposent une grande variété de ressources. Un aperçu des ressources les plus populaires est disponible sur le forum Cfx.re : https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Préparation

L’installation des ressources se fait via FTP. Vous aurez besoin d’un client FTP pour uploader les fichiers sur votre serveur. Si vous ne maîtrisez pas encore l’utilisation du FTP, on vous recommande de jeter un œil à notre [guide d’accès FTP](gameserver-ftpaccess.md).

Les ressources téléchargées sont généralement proposées dans un format compressé. Cela signifie que vous devez décompresser les fichiers compressés avec un logiciel comme 7Zip, Winrar ou WinZip. Le dossier de la ressource décompressée doit contenir au minimum les fichiers suivants : `__resource.lua` ou `fxmanifest.lua` ainsi que les fichiers scripts associés.

:::info
Si ces fichiers ne sont pas présents, il se peut qu’ils soient dans un sous-dossier à l’intérieur de la ressource.
:::

## Installation

### Upload des fichiers

Vous devez maintenant uploader les fichiers décompressés dans un dossier individuel (si ce n’est pas déjà fait). Ce dossier doit être uploadé dans le répertoire `resource` de votre serveur. La structure du répertoire ressemble généralement à ceci : `/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Certaines ressources fonctionnent avec une base de données et contiennent souvent des fichiers SQL à importer dans la base. Si c’est le cas, rendez-vous dans notre [guide d’import de fichiers SQL](fivem-sql-file-import.md) pour savoir comment faire.

### Activation

Pour que la ressource installée soit chargée au démarrage du serveur, vous devez l’activer dans le fichier `server.cfg` de votre serveur. L’activation se fait via la commande `start [nom de la ressource]`.

Par exemple, si vous avez uploadé la ressource dans un dossier nommé `eup-ui`, la commande start dans la config doit ressembler à ça : 
```
start eup-ui
```

Vous pouvez accéder à votre fichier `server.cfg` via l’éditeur CFG dans l’interface txAdmin.

:::info
Assurez-vous que le nom du dossier créé correspond exactement à celui utilisé dans la commande start, y compris la casse.
:::


## Ressources populaires

Vous cherchez encore les ressources parfaites pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des ressources les plus populaires et recommandées pour booster votre gameplay et donner à votre serveur la touche finale qu’il mérite. Inspirez-vous et trouvez exactement les ajouts qui collent à votre projet.

<SearchableItemList items={items} />


## Conclusion
Enfin, vous pouvez redémarrer votre serveur. La ressource installée devrait maintenant se charger au prochain démarrage complet de votre serveur. Vous avez réussi à installer une ressource sur votre serveur de jeux FiveM. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />