---
id: arma3-serverconfig
title: "Arma 3 : Modifier le fichier de configuration du serveur"
description: "Découvrez comment personnaliser les paramètres de votre serveur de jeux Arma 3 pour un gameplay et des performances optimales → En savoir plus maintenant"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Paramètres et configuration du Server.cfg

Le Server.cfg d’Arma 3 est indispensable au fonctionnement de tout serveur de jeux Arma 3 et offre une multitude de possibilités pour configurer un serveur Arma 3 de manière personnalisée.

Le Server.cfg se modifie soit directement via FTP sur un serveur de jeux ou VPS préinstallé.  
Avec un serveur de jeux, l’option Configs est aussi disponible à gauche dans l’interface du serveur de jeux, depuis laquelle le Server.cfg peut être modifié en quelques clics.

<InlineVoucher />

## Modifier le Server.cfg via l’éditeur ZAP

Pour modifier le server.cfg de votre serveur Arma 3 dans l’éditeur ZAP, cliquez d’abord sur votre serveur dans l’interface, puis sélectionnez « Configs » dans le menu à gauche sous « Paramètres ».

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Vous verrez alors une liste des fichiers de configuration disponibles pour Arma 3, nous allons uniquement modifier le Server.cfg.  
En cliquant sur le bouton bleu « Ouvrir le fichier », vous accédez à l’éditeur ZAP.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Là, vous pouvez configurer votre serveur Arma 3 individuellement, notamment le nom du serveur et le nombre de slots. Ajustez les paramètres comme vous le souhaitez, puis cliquez sur « Enregistrer ».

![](https://puu.sh/Fk7I1/407a039e38.png)

Lors de la saisie du nom du serveur, veillez à entourer le nom de guillemets, sinon le serveur ne pourra pas le lire. Il est aussi important de terminer chaque ligne par un point-virgule (;), sinon le serveur ne pourra pas lire les paramètres suivants. Une exception concerne l’option « motd[] », où chaque ligne doit se terminer par une virgule, sauf la dernière où il faut l’omettre.

## Correct :

Ici, les guillemets ainsi que le point-virgule et la virgule sont bien placés.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Incorrect : 

Ici, les guillemets ainsi que le point-virgule et la virgule manquent, le serveur ne démarrerait pas ainsi.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Modifier le Server.cfg via FTP

Au lieu de l’éditeur ZAP, le Server.cfg peut aussi être modifié directement via FTP. Dans cet exemple, nous utilisons **FileZilla** pour établir une connexion FTP vers le serveur de jeux et accéder aux dossiers de votre serveur de jeux.

Voici comment vous connecter à votre serveur de jeux via FTP : [Accès via FTP](gameserver-ftpaccess.md).

## Établir la connexion et naviguer jusqu’au chemin du server.cfg

:::info
Assurez-vous que votre serveur de jeux est arrêté pendant que vous travaillez dessus via FTP.
:::

Une fois connecté à votre serveur de jeux via FTP comme expliqué ci-dessus, naviguez dans FileZilla dans la fenêtre en bas à droite jusqu’au dossier contenant votre server.cfg, que vous trouverez sous : **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
Le nom du premier dossier (g198376) correspond à l’ID de votre serveur, ce qui vous permet de différencier les dossiers si vous avez plusieurs serveurs de jeux.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

Dans ce dossier, vous trouverez le Server.cfg de votre serveur Arma 3 ainsi que d’autres fichiers de configuration existants.  
Vous pouvez maintenant **faire un clic droit** sur le server.cfg et cliquer sur **Afficher/Éditer**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Un éditeur standard s’ouvre alors, dans lequel vous pouvez modifier votre Server.cfg comme décrit plus haut.  
Après avoir modifié votre Server.cfg, sauvegardez avec **CTRL+S**. Vous pouvez ensuite fermer l’éditeur, votre serveur est prêt à redémarrer.

<InlineVoucher />