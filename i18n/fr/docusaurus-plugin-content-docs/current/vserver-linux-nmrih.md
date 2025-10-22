---
id: vserver-linux-nmrih
title: "VPS : Installation d’un serveur dédié No More Room In Hell sous Linux"
description: "Découvrez comment configurer un serveur dédié No More Room In Hell sur votre VPS Linux pour une location de serveurs fluide → En savoir plus maintenant"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Linux et tu veux installer le serveur dédié No More Room In Hell dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton VPS ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via SSH. Si tu as besoin d’aide, consulte notre [guide d’accès SSH initial](vserver-linux-ssh.md). Tu devras aussi faire une première configuration de SteamCMD si c’est ta première fois sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD sous Linux](vserver-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur No More Room In Hell est terminée. Tu peux configurer davantage ton serveur en modifiant directement le fichier de lancement.

Retourne dans ton répertoire principal. À l’intérieur, va dans le dossier cfg et ouvre le fichier `server.cfg`. C’est là que tu peux modifier les options du serveur.
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et inclure un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour générer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et crée un token avec l’ID de jeu 317670, qui correspond à No More Room In Hell.

Une fois que tu as ton token, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.

## Démarrage & connexion à ton serveur

Il est maintenant temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute la commande de lancement suivante :
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur No More Room In Hell sur ton VPS ! Pour la suite, on te conseille de jeter un œil à notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur dédié de jeux en tant que service. Ça t’apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou besoin d’aide, n’hésite surtout pas à contacter notre support, dispo tous les jours pour t’assister ! 🙂

<InlineVoucher />