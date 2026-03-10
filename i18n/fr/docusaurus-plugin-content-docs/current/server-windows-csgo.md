---
id: server-windows-csgo
title: "Installation d’un serveur dédié CS:GO sous Windows"
description: "Apprends à configurer rapidement et efficacement un serveur dédié CS:GO sur ton serveur → Découvre-le maintenant"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS/serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié CS:GO ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.



## Préparation

Pour configurer un serveur CS:GO, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications VPS/serveur dédié des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, tu télécharges le fichier. Tu obtiendras un fichier **steamcmd.zip** qu’il faudra décompresser. On te conseille de créer un dossier dédié pour extraire ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout est prêt et tu peux commencer l’installation du serveur CS:GO.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Il faut te connecter. Utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation du serveur. Lance la commande `app_update 730`. L’ID de l’application **730** correspond au **serveur dédié CS:GO**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Ajoute des règles entrantes et sortantes comme indiqué, pour les ports suivants : 27015-27020 en TCP/UDP.



## Configuration

À ce stade, ton serveur CS:GO est installé. Tu peux configurer davantage ton serveur en éditant directement le fichier de lancement. Va dans ton répertoire racine, puis dans le dossier cfg et ouvre le fichier `server.cfg`. Tu pourras modifier les options du serveur.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et ajouter un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour créer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et génère un token avec l’ID de jeu **4465480**, qui correspond au nouveau CS:GO Standalone.

Une fois le token obtenu, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.



## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute la commande de lancement suivante :

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Tu devrais voir apparaître des logs dans ta console, signe que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs en tapant : `[ton_adresse_ip]:2456`.


## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur CS:GO sur ton VPS/serveur dédié ! Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂