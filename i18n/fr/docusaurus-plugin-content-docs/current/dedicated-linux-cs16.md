---
id: dedicated-linux-cs16
title: "Serveur dédié : Configuration d’un serveur dédié Counter-Strike 1.6 sous Linux"
description: "Apprenez à configurer un serveur dédié Counter-Strike 1.6 sur votre VPS Linux pour un gameplay fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Linux et tu veux installer le service serveur dédié Counter-Strike 1.6 dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton VPS ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton VPS via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](dedicated-linux-ssh.md). Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Suis notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout est OK.

## Configuration

À ce stade, tu as fini la configuration de ton serveur Counter-Strike 1.6. Tu peux faire des réglages supplémentaires en éditant directement le fichier de lancement.

Retourne dans ton répertoire racine. À l’intérieur, va dans le dossier cfg et ouvre le fichier `server.cfg`. C’est là que tu peux modifier les options du serveur.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre ton serveur, tu dois générer et inclure un Game Server Login Token (GSLT). Ce token authentifie ton serveur auprès de Steam. Pour générer un GSLT, rends-toi sur http://steamcommunity.com/dev/managegameservers et crée un token avec l’ID jeu 90, qui correspond à Counter-Strike 1.6.

Une fois que tu as ton token, ajoute-le dans les paramètres de lancement de ton serveur avec `+sv_setsteamaccount <TOKEN>`.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute la commande de lancement suivante :
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Counter-Strike 1.6 sur ton VPS ! Pour la suite, on te conseille de jeter un œil à notre [guide de création de service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur dédié de jeux en tant que service. Ça t’apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as des questions ou besoin d’aide, n’hésite surtout pas à contacter notre support, dispo tous les jours pour t’assister ! 🙂