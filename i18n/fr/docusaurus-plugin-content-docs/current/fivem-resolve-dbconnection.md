---
id: fivem-resolve-dbconnection
title: "FiveM : Résoudre les problèmes de connexion à la base de données"
description: "Découvrez comment réparer les problèmes de connexion à la base de données de votre serveur FiveM et rétablir une communication fluide avec votre base → En savoir plus maintenant"
sidebar_label: Résoudre la connexion DB
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Oxmysql est une ressource open-source super utile pour FiveM, préinstallée sur votre serveur FiveM, qui permet la communication entre le serveur et votre base de données. Pendant le développement, il est possible que vous fassiez des modifications (comme rafraîchir les identifiants de la base) qui nécessiteront de mettre à jour la chaîne de connexion oxmysql. Exemple de problème de connexion à la base de données :

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

Dans ce guide, on va voir comment résoudre les problèmes de connexion à la base de données sur votre serveur FiveM en ajustant la chaîne de connexion dans votre fichier de config serveur.

<InlineVoucher />

## Méthode automatique

Commencez par ouvrir le panneau web de votre serveur sur le site et allez dans la section **Paramètres**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Sur cette page, descendez tout en bas où vous trouverez les boutons **Actions**. Utilisez simplement le bouton **Reconfigurer la chaîne de connexion MySQL** puis, une fois cliqué, redémarrez votre serveur pour appliquer les changements.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Cela mettra automatiquement à jour votre fichier `server.cfg` avec les bonnes identifiants actuels, ce qui signifie que votre base de données devrait recommencer à fonctionner.

## Méthode manuelle

Pour régler ça manuellement, vous aurez besoin d’accéder à votre fichier `server.cfg` où vous modifierez la chaîne de connexion avec les identifiants fournis dans votre panneau web. Connectez-vous à l’interface txAdmin et ouvrez l’éditeur CFG. Ensuite, dans un autre onglet, allez dans la section **Outils->Bases de données** où vous pourrez voir vos identifiants actuels.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

Dans votre fichier `server.cfg`, ajoutez la ligne suivante (ou **remplacez-la** si elle existe déjà), en remplissant avec vos propres identifiants de base trouvés dans le panneau web.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Une fois fait, pensez à sauvegarder le fichier et redémarrez votre serveur.

## Conclusion

Au prochain lancement du serveur, votre base de données devrait être à nouveau accessible et tout devrait fonctionner nickel. Vous avez réussi à résoudre vos soucis de connexion à la base de données. Pour toute question ou aide, n’hésitez pas à contacter notre support, dispo tous les jours pour vous filer un coup de main ! 🙂

<InlineVoucher />