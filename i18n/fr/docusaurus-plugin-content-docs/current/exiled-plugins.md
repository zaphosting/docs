---
id: exiled-plugins
title: "SCP EXILED : Installer des plugins"
description: "Découvrez comment étendre et personnaliser votre serveur avec des plugins fiables pour une fonctionnalité et une personnalisation améliorées → En savoir plus maintenant"
sidebar_label: Installer des plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introduction

Les plugins vous permettent d’étendre et de personnaliser encore plus votre serveur. Dans ce qui suit, nous vous expliquons où trouver les plugins les plus utilisés et comment les configurer.

<InlineVoucher />

## Préparation

Tout d’abord, vous devez télécharger les plugins que vous souhaitez installer sur votre serveur. Une large gamme de plugins EXILED est disponible sur leur page GitHub officielle. Une fois que vous avez choisi un dépôt de plugin, vous trouverez une section releases où vous pouvez télécharger la dernière version. Des instructions détaillées sur la procédure sont fournies ci-dessous.

Bien que les plugins puissent être téléchargés depuis différentes sources, nous recommandons de rester sur des plateformes fiables comme le dépôt GitHub officiel, car elles sont généralement considérées comme les plus sûres. Soyez toujours prudent lorsque vous ajoutez des plugins à votre serveur. Vérifiez bien la source, les développeurs, et comprenez parfaitement ce que fait le plugin avant de l’installer.

Pour télécharger un plugin depuis GitHub, commencez par visiter la [page GitHub officielle d’EXILED](https://github.com/Exiled-Team) et sélectionnez le dépôt du plugin que vous souhaitez utiliser.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Une fois dans le dépôt du plugin, cherchez la section **Releases**, située sur la droite.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Dans la section Releases, vous trouverez un fichier **.dll** téléchargeable. Cliquez dessus pour lancer le téléchargement.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

C’est tout ! Une fois téléchargé, vous pouvez passer aux étapes d’installation plus bas dans ce guide pour apprendre comment installer le fichier **.dll** sur votre serveur.


## Installation

Une fois les plugins désirés téléchargés, vous pouvez procéder à l’installation. Cela se fait via **FTP**, donc vous aurez besoin d’un client FTP pour uploader les fichiers sur votre serveur. Si vous ne connaissez pas encore FTP et son fonctionnement, consultez ce guide : [Accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Vous trouverez le bon dossier de plugins sous : ```/gXXXXXX/.config/EXILED/Plugins```. Il suffit d’uploader les fichiers **.dll** des plugins téléchargés dans ce dossier. Cela devrait ressembler à ça après l’upload :  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Une fois cette étape terminée, l’installation du plugin est finie. Enfin, vérifiez la **console en direct** pour confirmer que le plugin a bien été compilé et chargé. La confirmation dans la console devrait ressembler à ça :  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Plugins populaires

Vous cherchez encore les plugins parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour améliorer votre expérience de jeu et donner à votre serveur la touche finale qu’il mérite. Inspirez-vous et trouvez exactement les ajouts qui correspondent à votre projet.

<SearchableItemList items={items} />


## Conclusion

Si vous avez suivi toutes les étapes, vous devriez avoir installé votre plugin avec succès. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />