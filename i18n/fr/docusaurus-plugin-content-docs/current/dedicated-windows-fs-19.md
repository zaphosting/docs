---
id: dedicated-windows-fs-19
title: "Serveur dédié : Installation du serveur dédié Farming Simulator 2019 sous Windows"
description: "Découvre comment installer rapidement et efficacement un serveur dédié Farming Simulator 2019 sur ton VPS Windows ou serveur dédié → En savoir plus maintenant"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows ou un serveur dédié et tu veux installer le service serveur dédié Farming Simulator 2019 dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

## Préparation

Un serveur sous Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel) et au moins 2 Go de RAM (DDR3/4) ainsi que 6 Go de disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit tourner sur une architecture 64 bits.  
De plus, une licence de jeu propre est requise (pas la version Steam), ainsi qu’une adresse IPv4 publique. Une carte graphique ou une carte son ne sont pas nécessaires pour le serveur dédié.  
Selon le niveau de modding, d’extensions avec mods ou DLCs, plus de ressources peuvent être nécessaires.

## Étape 1 Achat de la licence digitale

Une version digitale de Farming Simulator 2019 est obligatoire, la version Steam ne convient pas.  
La version digitale peut être achetée sur le [site officiel Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Après l’achat, tu peux télécharger Farming Simulator en ligne via le lien dans le mail reçu de Giants : [Lien](https://eshop.giants-software.com/downloads.php).  
:::info
Important : Dans ce mail, tu trouveras la clé de jeu (GameKey) nécessaire pour le téléchargement ainsi que pour l’activation ultérieure de l’installation.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Étape 2 Téléchargement de Farming Simulator directement sur ton serveur Windows

Connecte-toi via [Accès initial (RDP)](vserver-windows-userdp.md) à ton serveur Windows. Une fois connecté, ouvre le navigateur et rends-toi à nouveau sur le [lien](https://eshop.giants-software.com/downloads.php) du mail. Entre ta GameKey et choisis le téléchargement pour Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Le fichier sera alors téléchargé et devrait se trouver dans le dossier de téléchargement (le dossier peut varier).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Un double-clic ouvre le fichier et tu peux lancer Setup.exe.  
Ensuite, lis les CGU et confirme-les. L’installation peut se faire en mode Standard ou Personnalisé, généralement le mode Standard suffit.  
Enfin, clique sur installer et Farming Simulator 2019 va s’installer, cela peut prendre quelques minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Une fois l’installation terminée, ce message apparaît, clique sur "Terminer".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

L’installation de base est maintenant terminée.

## Étape 3 Activation du jeu et configuration du serveur dédié

Lance maintenant Farming Simulator. Un raccourci devrait être sur le bureau, sinon tu peux le lancer via le menu Windows.  
Les erreurs concernant l’absence de GPU ou autres peuvent être ignorées ou fermées avec Non/Annuler. Farming Simulator doit juste être lancé pour pouvoir entrer la clé.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Une fois la clé reconnue, une confirmation apparaît.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Maintenant, un nom d’utilisateur et un mot de passe doivent être définis ou modifiés/consultés dans la config du serveur dédié, pour pouvoir se connecter à l’interface web du serveur dédié.  
La config se trouve dans l’installation standard sous  
`C:\Program Files (x86)\Farming Simulator 2019` dans le fichier `"dedicatedServer.xml"`.  
Les identifiants peuvent être personnalisés librement.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Étape 4 Démarrage du serveur dédié Farming Simulator 2019

Pour démarrer le serveur dédié, lance `"dedicatedServer.exe"` dans le même dossier où se trouve `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Ensuite, l’interface web peut être ouverte via `https://SERVER-IP:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

La connexion se fait avec les identifiants définis/consultés dans `"dedicatedServer.xml"`.  
La configuration suivante est intuitive dans l’interface web et peut être faite en quelques clics selon tes préférences.

## Étape 5 Ouverture des ports dans le pare-feu

Le serveur doit bien sûr être accessible publiquement pour jouer avec tes potes. Pour ça, il faut ouvrir les ports du serveur dans le pare-feu Windows. Les ports 10823 et 8080 doivent être ouverts pour le protocole TCP. 10823 est le port du serveur de jeux et 8080 est le port web pour l’interface web, ce dernier doit être ouvert uniquement si nécessaire, l’administration peut toujours se faire localement sur le serveur Windows via RDP.  
Comment ouvrir des ports sous Windows : [Redirection de ports (Pare-feu)](vserver-windows-port.md).

Après l’ouverture des ports, le serveur est accessible publiquement, si il a été démarré.