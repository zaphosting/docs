---
id: dedicated-windows-nmrih
title: "Serveur dédié : Configuration du serveur dédié No More Room In Hell sous Windows"
description: "Apprenez à configurer rapidement et facilement un serveur de jeux dédié No More Room In Hell sur votre VPS ou serveur dédié → En savoir plus maintenant"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié No More Room In Hell ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<InlineVoucher />

## Préparation

Pour configurer un serveur No More Room In Hell, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux trouver SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip**, qu’il faudra d’abord décompresser. On te conseille de créer un dossier dédié pour décompresser ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux commencer l’installation du serveur No More Room In Hell.



## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Il faut te connecter. Pour ça, utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Elle se fait avec la commande `app_update 317670`. L’ID de l’application **317670** correspond au **serveur dédié No More Room In Hell**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés par le serveur dans le pare-feu. Pour ça, ouvre les paramètres du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Il faut ajouter des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué, puis ajoute-les pour les ports suivants : 27015-27020 pour les protocoles TCP/UDP.



## Configuration

À ce stade, tu as fini la configuration de base de ton serveur No More Room In Hell. Tu peux faire des réglages supplémentaires en éditant directement le fichier de lancement. Va dans ton répertoire racine. Dans ce dossier, ouvre le dossier cfg et édite le fichier `server.cfg`. Tu pourras y modifier les options du serveur.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et inclure un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour générer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et crée un token avec l’ID du jeu 317670, qui correspond à No More Room In Hell.

Une fois que tu as le token, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.



## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute la commande de lancement suivante :

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Tu devrais voir apparaître des logs dans ta console, ce qui signifie que le démarrage a réussi. Note que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.


## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur No More Room In Hell sur ton VPS ! Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />