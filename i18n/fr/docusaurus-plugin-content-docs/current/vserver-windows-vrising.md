---
id: vserver-windows-vrising
title: "VPS : Configuration d’un serveur dédié V-Rising sous Windows"
description: "Découvrez comment configurer un serveur dédié Windows pour V Rising afin d’optimiser les performances de jeu et assurer une location de serveurs fluide → En savoir plus maintenant"
sidebar_label: V-Rising
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="to2ghqNpGLA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qnEwRNpMmo3JzQq/preview" title="Comment configurer un serveur dédié Windows pour V RISING !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !" />
<InlineVoucher />

## Infos de base :  
Un serveur basé sur Windows Server 2016/2019 avec au moins 4x CPU à 2,4 GHz (AMD/Intel), au moins 4 Go de RAM (DDR3/4) et 6 Go d’espace disque libre (SSD ou mieux, recommandé) est nécessaire. Le serveur doit fonctionner sur une architecture 64 bits.

## Étape 1 : Créez un dossier pour V-Rising

D’abord, connectez-vous à votre serveur via [Accès initial (RDP)](vserver-windows-userdp.md). Une fois connecté, créez un nouveau dossier sur votre serveur où les fichiers de V-Rising seront installés.  
Dans cet exemple, on crée un nouveau dossier sur le Bureau.  
Pour cela, faites un clic droit.  
Puis choisissez "Nouveau -> Dossier".

![](https://screensaver01.zap-hosting.com/index.php/s/wgf8ckdTgiQ9wAq/preview)

Vous pouvez le nommer comme vous voulez. Ici, on l’appelle "VRising".

## Étape 2 : Téléchargez SteamCMD sur votre serveur Windows

Ouvrez le navigateur et allez sur ce [lien](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Cela téléchargera SteamCMD pour Windows sur votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/7HE5smMXq6mEetw/preview)

Le fichier sera téléchargé et devrait se trouver dans le dossier de téléchargements (le dossier peut varier).

![](https://screensaver01.zap-hosting.com/index.php/s/eEsyPe9J8KWGRMs/preview)

Pour plus de clarté, on copie le fichier steamcmd.zip dans le dossier VRising créé précédemment sur le Bureau.  
Pour ça, cliquez sur le fichier et appuyez sur "CTRL+C".  
Puis ouvrez le dossier VRising sur le Bureau et appuyez sur "CTRL+V".  
Vous verrez maintenant le fichier dans le dossier VRising.

![](https://screensaver01.zap-hosting.com/index.php/s/rNCZB7NDYkqDxrm/preview)

Faites un clic droit sur le fichier steamcmd.zip et choisissez "Extraire tout". Validez le message qui apparaît en cliquant sur le bouton "Extraire".

![](https://screensaver01.zap-hosting.com/index.php/s/RSQReHkc3SYbzNS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yaw87p2bcmFe9z6/preview)

Une fois l’extraction terminée, double-cliquez sur le fichier steamcmd.  
Une nouvelle fenêtre s’ouvrira pour installer les fichiers steamcmd.

![](https://screensaver01.zap-hosting.com/index.php/s/R7Xm4tSLfEBqboD/preview)

## Étape 3 : Téléchargez les fichiers de V Rising

Une fois les fichiers steamcmd installés, vous verrez ceci dans la fenêtre ouverte.

![](https://screensaver01.zap-hosting.com/index.php/s/DjaZjaqM8tFZzCj/preview)

Maintenant, indiquez l’emplacement où les fichiers seront téléchargés.  
Cela se fait avec la commande "force_install_dir".  
La commande complète dans notre exemple est :  
force_install_dir "C:\Users\Administrator\Desktop\VRising"

![](https://screensaver01.zap-hosting.com/index.php/s/EFdLWdJ5Ypym3Ym/preview)

Ensuite, connectez-vous en tant qu’utilisateur anonyme.  
Pour cela, tapez "login anonymous".

![](https://screensaver01.zap-hosting.com/index.php/s/SN8qqRPezLDEF3Q/preview)

Une fois connecté, vous pouvez enfin télécharger les fichiers.  
Utilisez cette commande :  
app_update 1829350 validate

Les fichiers vont maintenant se télécharger, ce qui peut prendre quelques minutes.

![](https://screensaver01.zap-hosting.com/index.php/s/S5cwykrPq6bYyrG/preview)

Une fois terminé, vous verrez tous les fichiers dans le dossier VRising sur votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/8PwswWgB8BxwECL/preview)

## Étape 4 : Lancez et configurez le serveur V Rising

Vous pouvez modifier le fichier start_server_example.bat pour faire quelques ajustements.  
Faites un clic droit sur le fichier puis choisissez "Modifier".  
Vous pouvez changer le nom du serveur et le chemin où la sauvegarde sera enregistrée.

![](https://screensaver01.zap-hosting.com/index.php/s/PFDkyayBtSBoEFa/preview)

D’autres modifications sont possibles dans les fichiers de config, situés dans le répertoire VRisingServer_Data\StreamingAssets\Settings.

![](https://screensaver01.zap-hosting.com/index.php/s/jQWy34tbPTEtcc9/preview)

Dans le fichier ServerHostSettings.json, vous pouvez faire des réglages généraux, comme définir les ports, la description du serveur, l’intervalle de sauvegarde, ou encore le mot de passe du serveur de jeux.  
Ici, j’ai changé le nom du serveur en "ZAP-Hosting Test Server".

Pour démarrer le serveur, double-cliquez sur le fichier start_server_example.bat.

![](https://screensaver01.zap-hosting.com/index.php/s/nSqbQQb3pHXnWmZ/preview)

Le démarrage peut prendre un peu de temps.  
Si les ports ont été correctement redirigés à l’étape suivante, vous pourrez trouver le serveur dans la liste des serveurs.

![](https://screensaver01.zap-hosting.com/index.php/s/TajWHXtRCLEeRKf/preview)

## Étape 5 : Ouvrez les ports dans le pare-feu

Le serveur doit bien sûr être accessible publiquement pour jouer avec vos potes. Pour ça, il faut ouvrir les ports du serveur dans le pare-feu Windows.  
Les ports 9876 et 9877 doivent être ouverts pour les protocoles TCP ET UDP.  
9876 est le port du serveur de jeux et 9877 est le port Query.  
Comment ouvrir les ports sous Windows, [Redirection de ports (Pare-feu)](vserver-windows-port.md).

Une fois les ports ouverts, le serveur sera accessible publiquement, à condition qu’il soit démarré.

## Conclusion

Félicitations, vous avez installé et configuré avec succès V-Rising sur votre VPS ! Si vous avez d’autres questions ou soucis, notre équipe support est là pour vous aider tous les jours !

<InlineVoucher />