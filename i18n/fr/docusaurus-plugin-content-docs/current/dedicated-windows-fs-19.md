---
id: dedicated-windows-fs-19
title: "Serveur dédié : Configuration du serveur dédié Farming Simulator 2019 sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Farming Simulator 2019 sur votre VPS Windows ou serveur dédié → En savoir plus maintenant"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le service serveur dédié Farming Simulator 2019 dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<InlineVoucher />

## Préparation

Un serveur sous Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel) et au moins 2 Go de RAM (DDR3/4) ainsi que 6 Go d’espace disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit fonctionner sur une architecture 64 bits.  
De plus, une licence de jeu propre est requise (pas la version Steam), ainsi qu’une adresse IPv4 publique. Une carte graphique ou une carte son ne sont pas nécessaires pour le serveur dédié.  
Selon le niveau de modding, d’extensions avec mods ou DLCs du serveur dédié, plus de ressources peuvent être nécessaires.  

## Étape 1 Achat de la licence digitale

Une version digitale de Farming Simulator 2019 est requise, la version Steam n’est pas compatible.  
La version digitale peut être achetée sur le [site officiel de Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Après l’achat de la version digitale, Farming Simulator peut être téléchargé en ligne via le lien suivant [Lien](https://eshop.giants-software.com/downloads.php) présent dans le mail que vous avez reçu de Giants.  
:::info
Important : Dans ce mail, vous trouverez la clé de jeu (GameKey) nécessaire pour le téléchargement ainsi que pour l’activation ultérieure de l’installation.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Étape 2 Télécharger Farming Simulator directement sur votre serveur Windows

Connectez-vous via [Accès initial (RDP)](vserver-windows-userdp.md) à votre serveur Windows. Une fois connecté, ouvrez le navigateur et rendez-vous à nouveau sur le [lien](https://eshop.giants-software.com/downloads.php) reçu par mail. Entrez votre GameKey et sélectionnez le téléchargement pour Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Le fichier sera alors téléchargé et devrait se trouver dans le dossier de téléchargement. (Le dossier de téléchargement peut varier)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Un double-clic ouvre le fichier et vous pouvez lancer le Setup.exe.  
Ensuite, lisez les conditions d’utilisation (TOS) et confirmez-les. L’installation peut être faite en mode Standard ou Personnalisé, généralement le mode Standard suffit.  
Enfin, cliquez sur installer et Farming Simulator 2019 va s’installer, cela peut prendre quelques minutes. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Une fois l’installation terminée, le message suivant apparaît, que vous pouvez valider avec "Terminer". 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

L’installation de base est maintenant terminée. 

## Étape 3 Activation du jeu et configuration du serveur dédié

Lancez maintenant Farming Simulator. Un raccourci devrait être présent sur le bureau, sinon vous pouvez aussi le démarrer via le menu Windows.  
Les erreurs concernant l’absence de GPU ou autres peuvent être ignorées ou fermées avec Non/Annuler. Farming Simulator doit juste être lancé pour pouvoir entrer la clé. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Une fois la clé reconnue, une confirmation apparaît. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Il faut maintenant définir un nom d’utilisateur et un mot de passe ou les modifier/consulter dans la config du serveur dédié, afin de pouvoir se connecter à l’interface web du serveur dédié.  
La config se trouve dans l’installation standard sous  
`C:\Program Files (x86)\Farming Simulator 2019` dans le fichier nommé `"dedicatedServer.xml"`.  
Les identifiants peuvent être personnalisés librement. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Étape 4 Démarrer le serveur dédié Farming Simulator 2019

Pour démarrer le serveur dédié, lancez `"dedicatedServer.exe"` dans le même dossier où se trouve `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Ensuite, l’interface web peut être ouverte via `https://IP-SERVEUR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

La connexion se fait avec les identifiants définis ou lus dans le fichier `"dedicatedServer.xml"`.  
La configuration suivante est intuitive dans l’interface web et peut être faite en quelques clics selon vos préférences personnelles. 

## Étape 5 Ouvrir les ports dans le pare-feu

Le serveur doit bien sûr être accessible publiquement pour jouer avec des amis. Pour cela, les ports du serveur doivent être ouverts dans le pare-feu Windows. Les ports 10823 et 8080 doivent être autorisés pour le protocole TCP. 10823 est le port du serveur de jeux et 8080 est le port web pour l’interface web, ce dernier doit être ouvert uniquement si nécessaire, une administration peut toujours être faite localement sur le serveur Windows via RDP.  
Comment ouvrir des ports sous Windows : [Redirection de ports (Pare-feu)](vserver-windows-port.md).  

Après l’ouverture des ports, le serveur est accessible publiquement, s’il a été démarré. 

<InlineVoucher />