---
id: fivem-txadmin-features
title: "FiveM : Interface txAdmin"
description: "Découvrez comment gérer et surveiller efficacement votre serveur FiveM avec le panneau web complet de txAdmin → En savoir plus maintenant"
sidebar_label: Interface txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

txAdmin est un panneau web complet et totalement gratuit pour gérer et surveiller votre serveur FiveM. Il offre une large gamme de fonctionnalités conçues pour rendre la gestion d’un serveur FiveM super simple. Dans ce guide, on vous présente l’interface txAdmin, en mettant en avant ses fonctionnalités et en expliquant exactement ce que vous pouvez faire avec.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Navigation

Le menu de navigation comprend les éléments suivants : **Joueurs**, **Historique**, **Whitelist**, **Admins**, **Paramètres** et **Système**. Chacun sera expliqué plus en détail ci-dessous.

### Joueurs

La section Joueurs donne un aperçu général des statistiques des joueurs, incluant le nombre total de joueurs connectés, le nombre de joueurs connectés dans les dernières 24 heures, ainsi que le nombre de nouveaux joueurs connectés dans les dernières 24 heures et 7 jours. En dessous, vous trouverez la liste des joueurs actuellement connectés, avec leur temps de jeu total, leur première connexion et leur dernière connexion.

Cliquez sur un joueur pour accéder à des options de gestion supplémentaires. Vous pouvez y voir plus d’infos, des notes, l’historique (bans/avertissements), les IDs (Identifiants Joueur, IDs Matériel Joueur), et les options de ban.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### Historique

La section Historique liste tous les avertissements et bans donnés aux joueurs, avec des infos détaillées sur le joueur, la raison, et qui a émis ou appliqué l’avertissement/ban, incluant la date et l’heure. Vous pouvez aussi révoquer les avertissements et bans depuis là.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

Dans la section Whitelist, vous pouvez gérer la fonction de liste blanche. La whitelist vous permet de restreindre l’accès au serveur. Si cette option est activée dans les paramètres txAdmin, une demande de whitelist est automatiquement créée quand un nouveau joueur se connecte pour la première fois. Vous pouvez ensuite gérer ces demandes dans cette section.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Admins

Dans la section Admins, vous pouvez spécifier et gérer les administrateurs. Pour ajouter un nouvel admin, cliquez sur le bouton **Ajouter**. Une fenêtre pop-up s’ouvre où vous pouvez créer le compte et définir les permissions appropriées.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Paramètres

Dans la section Paramètres, vous pouvez configurer un large éventail d’options pour txAdmin et le serveur lui-même. Vu le nombre important de réglages disponibles, ils sont classés dans les sections suivantes : **Global**, **FXServer**, **Bans**, **Whitelist**, **Discord** et **Jeu**. Chacune sera expliquée plus en détail ci-dessous.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### Général

Les paramètres pour le nom du serveur, la langue des messages chat/Discord, et les modèles de ban peuvent être configurés dans la section Global.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mr4D28GGqfPQQw/preview)

#### FXServer

Les paramètres pour le dossier de données du serveur et le chemin du fichier CFG, ainsi que des arguments supplémentaires comme l’activation des gamemodes/DLCs, l’activation/désactivation de OneSync, l’Autostart et le Quietmode, peuvent être configurés dans la section FXServer.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bans

Dans la section Bans, vous pouvez gérer la fonction de ban. Définissez si les comptes doivent être activement vérifiés pour leur statut de ban et quel message doit s’afficher si la connexion est refusée à cause d’un ban.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

Dans la section Whitelist, vous pouvez gérer la fonction de liste blanche. Définissez si vous souhaitez activer ou désactiver la whitelist et quel message doit s’afficher si la connexion est refusée à cause d’une absence dans la whitelist.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)



#### Discord

L’intégration Discord peut être activée dans la section Discord, permettant de transmettre automatiquement des infos au serveur Discord lié. Pour activer cela, les détails nécessaires pour le bot Discord doivent être configurés.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Jeu

Dans la section Jeu, vous pouvez activer le menu txAdmin pour une utilisation en jeu, permettant aux admins d’accéder et gérer le menu via la commande /tx. Des options de personnalisation supplémentaires pour la mise en page, la configuration des boutons pour activer/désactiver les interrupteurs, et les notifications/avertissements peuvent aussi être définies.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### Système

Dans la section Paramètres, vous trouverez quelques options générales importantes et des infos. Elles sont classées dans les sections suivantes : **Actions Maîtres**, **Diagnostics**, **Journal Console** et **Journal d’Actions**. Chacune sera expliquée plus en détail ci-dessous.



#### Actions Maîtres

Dans Actions Maîtres, vous trouverez l’option pour réinitialiser votre FXServer, faire une sauvegarde de la base de données, nettoyer la base de données et définir quand les joueurs doivent être retirés d’une whitelist s’ils sont inactifs trop longtemps.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostics

La section Diagnostics affiche toutes les infos pertinentes sur l’environnement, le runtime txAdmin, le rapport de diagnostics, FXServer /info.json, et les processus.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Journal Console

Le Journal Console affiche la sortie de txAdmin sur le terminal parent, incluant les messages de debug normalement cachés.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Journal d’Actions

Le Journal Console montre le Journal d’Actions, qui enregistre toutes les actions effectuées par txAdmin ou un Admin.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Barre latérale

Le menu de la barre latérale comprend les éléments suivants : **Tableau de bord**, **Console en direct**, **Ressources**, **Journal du serveur** et **Éditeur CFG**. Chacun sera expliqué plus en détail ci-dessous.



### Tableau de bord

Le tableau de bord affiche toutes les infos générales essentielles sur le serveur. Les données en direct sur l’utilisation et la performance peuvent être suivies via les statistiques. Le statut du serveur, qu’il soit démarré, en ligne ou arrêté, est visible dans la barre latérale. De là, vous pouvez aussi démarrer, arrêter ou redémarrer le serveur, kicker tous les joueurs en un clic, et envoyer des annonces. En plus, des redémarrages programmés peuvent être configurés. Sur la droite de la barre latérale, vous pouvez voir les infos sur les joueurs actuellement connectés.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Console en direct

La Console en direct vous donne des infos en temps réel sur les activités du serveur. Vous pouvez y voir les détails des activités, avertissements et messages d’erreur. C’est un outil précieux pour débugger en analysant les messages d’erreur potentiels.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Ressources
Dans la section Ressources, vous trouverez un aperçu de toutes les ressources, qu’elles soient préinstallées via un template (recette) ou ajoutées par vous plus tard. Vous pouvez aussi les redémarrer ou les arrêter selon vos besoins.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Journal du serveur

Le journal du serveur vous permet de suivre toutes les activités sur le serveur. Par exemple, vous pouvez voir quand les joueurs se connectent ou déconnectent, les messages du chat, les morts en jeu, les actions dans les menus, les commandes exécutées, et les événements système.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### Éditeur CFG

Vous pouvez utiliser l’éditeur CFG pour gérer et mettre à jour le fichier de configuration `server.cfg` de votre serveur. C’est là que vous trouverez toutes les commandes de configuration essentielles qui contrôlent les réglages de votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />