---
id: dedicated-windows-tf2
title: "Serveur dédié : Configuration d’un serveur dédié Team Fortress 2 sous Windows"
description: "Découvre comment configurer rapidement et facilement un serveur dédié Team Fortress 2 sur ton VPS ou serveur dédié → En savoir plus maintenant"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Team Fortress 2 ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.



## Préparation

Pour configurer un serveur Team Fortress 2, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, tu télécharges le fichier **steamcmd.zip**, qu’il faudra décompresser. On te conseille de créer un dossier dédié pour extraire ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout est prêt et tu peux passer à l’installation du serveur Team Fortress 2.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Connecte-toi avec l’utilisateur **anonymous** en lançant la commande : `login anonymous`

L’étape suivante est l’installation du serveur avec la commande `app_update 232250`. L’ID d’application **232250** correspond à l’application **Team Fortress 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Ajoute des règles entrantes et sortantes pour les ports suivants : 27015-27020 en TCP/UDP.



## Configuration

À ce stade, ton serveur Team Fortress 2 est installé. Tu peux configurer davantage ton serveur en éditant directement le fichier de lancement. Va dans ton répertoire racine, puis dans le dossier cfg et ouvre le fichier `server.cfg`. Tu pourras y modifier les options du serveur.

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et ajouter un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour créer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et génère un token avec l’ID de jeu 232250, qui correspond à Team Fortress 2.

Une fois que tu as ton token, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.



## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute la commande de lancement suivante :

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Tu devrais voir apparaître des logs dans ta console, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en cherchant dans la barre de recherche du listing des serveurs : `[ton_adresse_ip]:2456`.


## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Team Fortress 2 sur ton VPS ! Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂