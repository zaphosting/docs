---
id: satisfactory-switchexperimental
title: "Satisfactory : Version Expérimentale"
description: "Découvre les avantages et les risques d’utiliser la version expérimentale de Satisfactory pour accéder en avant-première aux grosses mises à jour et booster ton expérience de jeu → En savoir plus maintenant"
sidebar_label: Version Expérimentale
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## C’est quoi la version expérimentale ?
Satisfactory existe en deux versions : la version classique et la version expérimentale. La version classique est plus fiable, stable et moins sujette aux bugs car c’est une version plus finalisée. En revanche, la version expérimentale te donne accès aux grosses mises à jour en premier, avant leur sortie officielle, donc elle a plus de risques de bugs et des mises à jour beaucoup plus fréquentes, mais l’avantage c’est de tester les nouveautés en avant-première !

:::info
Note : Peu importe la version que tu choisis, ton serveur et ton client de jeu doivent être sur la même version pour pouvoir se connecter.
:::

<InlineVoucher />

## Comment passer à la version expérimentale ?
Avec notre système de serveur de jeux, c’est super simple de changer la version du serveur directement depuis notre site. Avant de commencer, on te conseille de faire une sauvegarde de tes parties Satisfactory car changer de version effacera tous les fichiers.

### Sauvegarder tes parties
Sauvegarder ton serveur de jeux ou tes parties est hyper simple. Va sur la page produit Satisfactory et clique sur l’onglet `Outils -> Sauvegardes`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

Sur cette page, tu peux faire plein de trucs, y compris des sauvegardes automatiques expliquées en détail dans le [guide Sauvegardes](gameserver-backups.md). Ici, on va se concentrer sur une sauvegarde manuelle.

En haut de la page, clique simplement sur l’icône verte + et accepte la demande pour lancer une sauvegarde complète du serveur de jeux vers ton espace de sauvegarde ZAP.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Ta sauvegarde est maintenant créée et tu peux y accéder via FTP, comme expliqué dans [Accès via FTP](gameserver-ftpaccess.md).

Sinon, tu peux aussi télécharger directement les fichiers de sauvegarde depuis la section `Gestionnaire de sauvegardes` dans l’interface web. Tu trouveras ça dans ce [guide Gestionnaire de sauvegardes](satisfactory-savegame.md).

### Passer au serveur de jeux expérimental
D’abord, va sur ta page produit Satisfactory et clique sur l’onglet `Paramètres -> Jeux`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Tu verras la section `Jeux installés` qui montre les jeux déjà installés. Si tu as déjà switché entre les versions, elle sera là et tu pourras passer à la dernière étape pour activer le jeu.

Ensuite, descends un peu et clique sur le menu déroulant `Jeux disponibles` puis cherche "Satisfactory" dans la barre de recherche.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Clique sur le bouton vert de téléchargement puis confirme l’installation dans la fenêtre qui s’ouvre. Le téléchargement de la version serveur choisie va commencer.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>Le téléchargement peut prendre quelques minutes. Patiente bien jusqu’à la fin avant de passer à l’étape suivante.

Maintenant, les deux versions apparaîtront dans `Jeux installés` pour que tu puisses facilement switcher entre elles.

Enfin, il faut activer la version choisie dans la section `Jeux installés`. Clique sur l’icône bleue d’activation du jeu.

:::info
Attention : Toutes les données du jeu seront supprimées lors de la réinstallation, assure-toi d’avoir fait une sauvegarde avant de continuer.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Si tu veux revenir à la version classique, refais la même procédure mais choisis le serveur de jeux Satisfactory classique lors de la sélection !

## Passer le client de jeu en version expérimentale
:::info
Note : Peu importe la version que tu choisis, ton serveur et ton client de jeu doivent être sur la même version pour pouvoir se connecter.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Ouvre d’abord Steam et va dans ta bibliothèque de jeux. Cherche "Satisfactory", fais un clic droit et choisis le menu propriétés.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

Dans le nouveau menu, va dans la section `Bêtas` et sélectionne `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

C’est tout, maintenant Steam va mettre à jour le jeu vers la version sélectionnée, après quoi tu pourras lancer ton jeu et profiter de ton serveur !
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Pour Epic Games, passer à la version expérimentale est encore plus simple. Il te suffit d’aller dans ta bibliothèque et de trouver le jeu "Satisfactory Experimental". Les deux versions du jeu sont séparées dans la bibliothèque Epic Games.

C’est tout, maintenant Epic Games va télécharger et installer le jeu, après quoi tu pourras lancer ton jeu et profiter de ton serveur !

</TabItem>
</Tabs>

<InlineVoucher />