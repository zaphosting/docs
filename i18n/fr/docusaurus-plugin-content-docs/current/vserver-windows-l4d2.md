---
id: vserver-windows-l4d2
title: "VPS : Installation d’un serveur dédié Left 4 Dead 2 sous Windows"
description: "Apprenez à configurer rapidement et efficacement un serveur dédié Left 4 Dead 2 sur votre VPS ou serveur dédié → En savoir plus maintenant"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Left 4 Dead 2 ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<InlineVoucher />

## Préparation

Pour configurer un serveur Left 4 Dead 2, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip** qu’il faudra d’abord décompresser. On recommande de créer un dossier dédié pour extraire ce fichier. Tu devrais voir apparaître **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux commencer l’installation du serveur Left 4 Dead 2.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Connecte-toi avec l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation du serveur. Utilise la commande `app_update 222840`. L’ID d’application **222840** correspond à l’application **serveur dédié Left 4 Dead 2**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Ajoute des règles entrantes et sortantes comme indiqué, pour les ports suivants : 27015-27020 en TCP/UDP.



## Configuration

À ce stade, ton serveur Left 4 Dead 2 est installé. Tu peux configurer davantage ton serveur en éditant directement le fichier de lancement. Va dans ton répertoire racine. Ensuite, rends-toi dans le dossier cfg et ouvre le fichier `server.cfg`. Tu pourras modifier les options du serveur.

```
../steamapps/common/l4d2-ds/l4d2/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et ajouter un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour générer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et crée un token avec l’ID de jeu 222840, qui correspond à Left 4 Dead 2.

Une fois que tu as le token, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.



## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute la commande de lancement suivante :

```
start srcds.exe -console -game l4d2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Tu devrais voir apparaître des logs dans ta console, ce qui signifie que le démarrage a réussi. Note que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.


## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Left 4 Dead 2 sur ton VPS ! Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />