---
id: dedicated-windows-fs-22
title: "Serveur dédié : Configuration du serveur dédié Farming Simulator 2022 sous Windows"
description: "Découvrez comment configurer le serveur dédié Farming Simulator 2022 sur votre VPS Windows ou serveur dédié → En savoir plus maintenant"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le service serveur dédié Farming Simulator 2022 dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur.

## Préparation
Un serveur sous Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel) et au moins 2 Go de RAM (DDR3/4) ainsi que 6 Go d’espace disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit fonctionner sur une architecture 64 bits.  
De plus, une licence de jeu propre est requise (pas la version Steam), ainsi qu’une adresse IPv4 publique. Une carte graphique ou une carte son ne sont pas nécessaires pour le serveur dédié.  
Selon le niveau de modding, d’extensions avec mods ou DLCs, plus de ressources peuvent être nécessaires.

## Étape 1 Achat de la licence digitale

Une version digitale de Farming Simulator 2022 est requise, la version Steam n’est pas compatible.  
La version digitale peut être achetée sur le [site officiel Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Après l’achat, Farming Simulator peut être téléchargé en ligne via le lien dans le mail reçu de Giants : [Lien](https://eshop.giants-software.com/downloads.php).  
:::info
Important : Dans ce mail, vous trouverez la clé de jeu (GameKey) nécessaire pour le téléchargement ainsi que pour l’activation ultérieure de l’installation.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## Étape 2 Téléchargement de Farming Simulator directement sur votre serveur Windows

Connectez-vous via [Accès initial (RDP)](vserver-windows-userdp.md) à votre serveur Windows. Une fois connecté, ouvrez le navigateur et retournez sur le [lien](https://eshop.giants-software.com/downloads.php) du mail. Entrez votre GameKey et sélectionnez le téléchargement pour Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

Le fichier sera alors téléchargé et devrait se trouver dans le dossier de téléchargement (le dossier peut varier).

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

Un double-clic ouvre le fichier et lance le Setup.exe.  
Ensuite, lisez les CGU et confirmez-les. L’installation peut être Standard ou Personnalisée, généralement la Standard suffit.  
Enfin, cliquez sur installer et Farming Simulator 2022 va s’installer, cela peut prendre quelques minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

Une fois l’installation terminée, ce message apparaît, confirmez avec "Terminer".

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

L’installation de base est maintenant terminée.

## Étape 3 Activation du jeu et configuration du serveur dédié

Lancez maintenant Farming Simulator. Un raccourci devrait être sur le bureau, sinon lancez-le via le menu Windows.  
Les erreurs concernant une carte graphique manquante ou autre peuvent être ignorées ou fermées avec Non/Annuler. Farming Simulator doit juste être lancé pour pouvoir entrer la clé.

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

Définissez ou modifiez un nom d’utilisateur et un mot de passe dans la config du serveur dédié pour pouvoir vous connecter à l’interface web du serveur dédié.  
La config se trouve dans l’installation standard sous  
`C:\Program Files (x86)\Farming Simulator 2022` dans le fichier `"dedicatedServer.xml"`.  
Les identifiants peuvent être personnalisés librement.

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## Étape 4 Démarrage du serveur dédié Farming Simulator 2022

Pour démarrer le serveur dédié, lancez `"dedicatedServer.exe"` dans le même dossier que `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

Ensuite, ouvrez l’interface web via `https://IP-DU-SERVEUR:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

La connexion se fait avec les identifiants définis dans `"dedicatedServer.xml"`.  
La configuration dans l’interface web est intuitive et peut être faite en quelques clics selon vos préférences.

## Étape 5 Ouverture des ports dans le pare-feu

Pour que le serveur soit accessible publiquement et que vous puissiez jouer avec vos potes, il faut ouvrir les ports dans le pare-feu Windows.  
Les ports 10823 et 8080 doivent être ouverts en TCP. 10823 est le port du serveur de jeux, 8080 est le port web pour l’interface web (à ouvrir uniquement si nécessaire, sinon l’administration peut se faire localement via RDP).  
Comment ouvrir les ports sous Windows : [Redirection de ports (Pare-feu)](vserver-windows-port.md).

Après l’ouverture des ports, le serveur est accessible publiquement, si celui-ci est lancé.