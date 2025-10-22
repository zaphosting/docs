---
id: exiled-plugins
title: "SCP EXILED : Installer des plugins"
description: "Découvrez comment étendre et personnaliser votre serveur avec des plugins fiables pour plus de fonctionnalités et de personnalisation → En savoir plus maintenant"
sidebar_label: Installer des plugins
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Introduction

Les plugins te permettent d’étendre et de personnaliser encore plus ton serveur. Dans ce guide, on t’explique où trouver les plugins les plus utilisés et comment les configurer.

<InlineVoucher />

## Préparation

D’abord, tu dois télécharger les plugins que tu souhaites installer sur ton serveur. Une large sélection de plugins EXILED est dispo sur leur page GitHub officielle. Une fois que tu as choisi un dépôt de plugin, tu trouveras une section releases où tu peux télécharger la dernière version. Les instructions détaillées pour la suite sont expliquées juste en dessous.

Même si les plugins peuvent être téléchargés depuis plusieurs sources, on te conseille de rester sur des plateformes fiables comme le dépôt GitHub officiel, car ce sont généralement les plus sûres. Sois toujours vigilant quand tu ajoutes des plugins à ton serveur – vérifie bien la source, regarde qui sont les développeurs, et comprends parfaitement ce que fait le plugin avant de l’installer.

Pour télécharger un plugin depuis GitHub, commence par visiter la page officielle [EXILED GitHub](https://github.com/Exiled-Team) et choisis le dépôt du plugin que tu veux utiliser.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Une fois dans le dépôt du plugin, cherche la section **Releases**, située à droite.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Dans la section Releases, tu trouveras un fichier **.dll** téléchargeable. Clique dessus pour lancer le téléchargement.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Voilà ! Une fois téléchargé, tu peux passer aux étapes d’installation plus bas dans ce guide pour apprendre à installer le fichier **.dll** sur ton serveur.


## Installation

Une fois les plugins souhaités téléchargés, tu peux passer à l’installation. Ça se fait via **FTP**, donc tu auras besoin d’un client FTP pour uploader les fichiers sur ton serveur. Si tu ne connais pas encore FTP et comment ça marche, consulte ce guide : [Accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Tu trouveras le bon dossier plugins sous : ```/gXXXXXX/.config/EXILED/Plugins```. Il te suffit d’uploader les fichiers **.dll** téléchargés dans ce dossier. Ça devrait ressembler à ça après l’upload :  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Une fois cette étape terminée, l’installation du plugin est finie. Pour finir, vérifie la **console en direct** pour confirmer que le plugin a bien été compilé et chargé. La confirmation dans la console devrait ressembler à ça :  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Plugins populaires

Tu cherches encore les plugins parfaits pour ton serveur ? Parcours notre liste soigneusement sélectionnée des plugins les plus populaires et recommandés pour booster ton gameplay et donner à ton serveur la touche finale qu’il mérite. Inspire-toi et trouve exactement les ajouts qui collent à ton projet.

<SearchableItemList items={items} />


## Conclusion

Si tu as suivi toutes les étapes, tu as normalement installé ton plugin avec succès. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />