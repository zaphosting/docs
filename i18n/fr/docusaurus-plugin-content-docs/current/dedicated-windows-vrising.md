---
id: dedicated-windows-vrising
title: "Serveur dédié : Configuration d’un serveur dédié V-Rising sous Windows"
description: "Découvrez comment configurer un serveur dédié V Rising sous Windows pour des performances de jeu optimales et une gestion facile → En savoir plus maintenant"
sidebar_label: V-Rising
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/yCRYqJAjTTp4YFf/preview" title="Comment configurer un serveur dédié V RISING sous Windows !" description="Tu comprends mieux en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout ça. Que tu sois pressé ou que tu préfères apprendre de la manière la plus cool possible !" />

<InlineVoucher />

## Infos de base :  
Un serveur sous Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel), 4 Go de RAM (DDR3/4) minimum et 6 Go de disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit tourner sur une architecture 64 bits.

## Étape 1 : Crée un dossier pour V-Rising

D’abord, connecte-toi à ton serveur via [Accès initial (RDP)](vserver-windows-userdp.md). Une fois connecté, crée un nouveau dossier sur ton serveur où les fichiers de V-Rising seront installés.  
Dans cet exemple, on crée un nouveau dossier sur le Bureau.  
Fais un clic droit, puis choisis "Nouveau -> Dossier".

![](https://screensaver01.zap-hosting.com/index.php/s/SzB3TgsSkHRAaAB/preview)

Tu peux le nommer comme tu veux. Ici, on l’appelle "VRising".

## Étape 2 : Télécharge SteamCMD sur ton serveur Windows

Ouvre ton navigateur et va sur ce [lien](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Ça va télécharger SteamCMD pour Windows sur ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/oHSse2fToxxTpCt/preview)

Le fichier sera téléchargé dans le dossier de téléchargement (qui peut varier).

![](https://screensaver01.zap-hosting.com/index.php/s/35r8Dm49xcdwfq4/preview)

Pour plus de clarté, on copie le fichier steamcmd.zip dans le dossier VRising qu’on a créé sur le bureau.  
Pour ça, clique sur le fichier et fais "CTRL+C".  
Puis ouvre le dossier VRising sur le bureau et fais "CTRL+V".  
Tu verras maintenant le fichier dans le dossier VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/kKGt3gy2yDQXSLx/preview)

Fais un clic droit sur steamcmd.zip et choisis "Extraire tout". Accepte le message en cliquant sur "Extraire".

![](https://screensaver01.zap-hosting.com/index.php/s/SHsNeRy4RbEenDX/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/y5ef3ncPgYMTzFw/preview)

Une fois extrait, double-clique sur le fichier steamcmd.exe.  
Une nouvelle fenêtre s’ouvre et installe les fichiers steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/TC2KAbWaCHEeZiF/preview)

## Étape 3 : Télécharge les fichiers de V Rising

Quand les fichiers steamcmd sont installés, tu verras ça dans la fenêtre ouverte.

![](https://screensaver01.zap-hosting.com/index.php/s/GAb4TgCNbpiW2F2/preview)

Maintenant, indique où tu veux télécharger les fichiers avec la commande "force_install_dir".  
Dans notre exemple :  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/DeNFAWGLLnKq7pr/preview)

Ensuite, connecte-toi en tant qu’utilisateur anonyme avec :  
login anonymous

![](https://screensaver01.zap-hosting.com/index.php/s/pq74iCW6E2k8Sid/preview)

Une fois connecté, lance le téléchargement des fichiers avec :  
app_update 1829350 validate

Le téléchargement va commencer, ça peut prendre quelques minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/6XX8wtekd89PJec/preview)

Quand c’est fini, tu verras tous les fichiers dans le dossier VRising sur ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/y9Gx9ANEpgbpESy/preview)

## Étape 4 : Lance et configure ton serveur V Rising

Tu peux modifier le fichier start_server_example.bat pour faire quelques réglages.  
Fais un clic droit dessus puis "Modifier".  
Tu peux changer le nom du serveur et le chemin où les sauvegardes seront stockées.

![](https://screensaver01.zap-hosting.com/index.php/s/zpEw92o7eQG9P2a/preview)

D’autres réglages sont possibles dans les fichiers de config situés dans :  
VRisingServer_Data\StreamingAssets\Settings

![](https://screensaver01.zap-hosting.com/index.php/s/9TtQm6Yp8g3y5HH/preview)

Dans ServerHostSettings.json, tu peux modifier des paramètres généraux comme les ports, la description du serveur, l’intervalle de sauvegarde, ou encore le mot de passe du serveur de jeux.  
Ici, j’ai changé le nom du serveur en "ZAP-Hosting Test Server".

Pour démarrer le serveur, double-clique sur start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/gzs85C4HRy9MPTy/preview)

Le démarrage peut prendre un peu de temps.  
Si les ports sont bien ouverts (étape suivante), tu trouveras ton serveur dans la liste des serveurs.

![](https://screensaver01.zap-hosting.com/index.php/s/S9mM8KNzsFARmQW/preview)

## Étape 5 : Ouvre les ports dans le pare-feu

Pour que ton serveur soit accessible publiquement et que tu puisses jouer avec tes potes, il faut ouvrir les ports dans le pare-feu Windows.  
Les ports 9876 et 9877 doivent être ouverts en TCP ET UDP.  
9876 est le port du serveur de jeux, 9877 est le port Query.  
Comment ouvrir les ports sous Windows : [Redirection de ports (Pare-feu)](vserver-windows-port.md).

Une fois les ports ouverts et le serveur lancé, il sera accessible publiquement.

<InlineVoucher />