---
id: vserver-windows-fs-22
title: "VPS : Installation du serveur dédié Farming Simulator 2022 sous Windows"
description: "Découvrez comment configurer le serveur dédié Farming Simulator 2022 sur votre VPS Windows pour un gameplay multijoueur fluide → En savoir plus maintenant"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows et tu veux installer le service serveur dédié Farming Simulator 2022 dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.
<InlineVoucher />

## Préparation
Un serveur sous Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel) et au moins 2 Go de RAM (DDR3/4) ainsi que 6 Go d’espace disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit tourner sur une architecture 64 bits.  
En plus, une licence de jeu propre est requise (pas la version Steam), ainsi qu’une adresse IPv4 publique. Une carte graphique ou une carte son ne sont pas nécessaires pour le serveur dédié.  
Selon le niveau de modding, d’extensions ou de DLCs ajoutés au serveur dédié, plus de ressources peuvent être nécessaires. 

## Étape 1 Achat de la licence digitale

Une version digitale de Farming Simulator 2022 est obligatoire, la version Steam ne convient pas.  
La version digitale peut être achetée sur le [site officiel Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Après l’achat, Farming Simulator peut être téléchargé en ligne via le lien dans le mail reçu de Giants : [Lien](https://eshop.giants-software.com/downloads.php).  
:::info
Important : Dans ce mail, tu trouveras la clé de jeu (GameKey) nécessaire pour le téléchargement et l’activation ultérieure de l’installation. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Étape 2 Téléchargement de Farming Simulator directement sur ton serveur Windows

Connecte-toi via [Accès initial (RDP)](vserver-windows-userdp.md) à ton serveur Windows. Une fois connecté, ouvre le navigateur et rends-toi à nouveau sur le [lien](https://eshop.giants-software.com/downloads.php) du mail. Entre ta GameKey et choisis le téléchargement pour Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

Le fichier sera alors téléchargé et devrait se trouver dans le dossier de téléchargement (le dossier peut varier).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Double-clique sur le fichier pour l’ouvrir et lance le Setup.exe.  
Lis les conditions d’utilisation (TOS) et confirme-les. Ensuite, tu peux choisir une installation Standard ou Personnalisée, généralement la Standard suffit.  
Enfin, clique sur installer et Farming Simulator 2022 va s’installer, ça peut prendre quelques minutes. 

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Une fois l’installation terminée, ce message apparaît, confirme avec "Terminer". 

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

L’installation de base est maintenant terminée. 

## Étape 3 Activation du jeu et configuration du serveur dédié

Lance maintenant Farming Simulator. Il devrait y avoir un raccourci sur le bureau, sinon tu peux le démarrer via le menu Windows.  
Les erreurs liées à l’absence de GPU ou autres peuvent être ignorées ou fermées avec Non/Annuler. Farming Simulator doit juste être lancé pour pouvoir entrer la clé. 

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Maintenant, un nom d’utilisateur et un mot de passe doivent être définis ou modifiés/consultés dans la config du serveur dédié, pour pouvoir se connecter à l’interface web du serveur dédié.  
La config se trouve dans l’installation standard sous  
`C:\Program Files (x86)\Farming Simulator 2022` dans le fichier `"dedicatedServer.xml"`.  
Les identifiants peuvent être personnalisés librement. 

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Étape 4 Démarrer le serveur dédié Farming Simulator 2022

Pour lancer le serveur dédié, exécute `"dedicatedServer.exe"` dans le même dossier où se trouve `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Ensuite, l’interface web peut être ouverte via `https://IP-SERVEUR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

La connexion se fait avec les identifiants définis/consultés dans `"dedicatedServer.xml"`.  
La configuration suivante est intuitive dans l’interface web et peut être faite en quelques clics selon tes préférences perso. 

## Étape 5 Ouvrir les ports dans le pare-feu

Le serveur doit bien sûr être accessible publiquement pour jouer avec tes potes. Pour ça, il faut ouvrir les ports du serveur dans le pare-feu Windows. Les ports 10823 et 8080 doivent être ouverts pour le protocole TCP. 10823 est le port du serveur de jeux et 8080 est le port web pour l’interface web, ce dernier doit être ouvert uniquement si nécessaire, l’administration peut aussi se faire localement sur le serveur Windows via RDP.  
Comment ouvrir les ports sous Windows : [Redirection de ports (Pare-feu)](vserver-windows-port.md).  

Après l’ouverture des ports, le serveur est accessible publiquement, si il est lancé. 

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur Farming Simulator 2022 sur ton VPS ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider ! 

<InlineVoucher />