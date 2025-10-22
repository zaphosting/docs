---
id: dedicated-linux-cs16
title: "Serveur dédié : Installation d’un serveur dédié Counter-Strike 1.6 sous Linux"
description: "Apprenez à configurer un serveur dédié Counter-Strike 1.6 sur votre VPS Linux pour un gameplay fluide et une gestion facile du serveur → Découvrez-le maintenant"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le service serveur dédié Counter-Strike 1.6 dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu en exemple, mais le processus est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre VPS ? Ça vous permet de configurer vos services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, consultez notre [guide d’accès initial SSH](dedicated-linux-ssh.md). Vous devrez aussi faire une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour confirmer que tout s’est bien passé.

## Configuration

À ce stade, votre serveur Counter-Strike 1.6 est installé. Vous pouvez configurer davantage votre serveur en modifiant directement le fichier de lancement.

Rendez-vous dans votre répertoire racine. À l’intérieur, allez dans le dossier cfg et ouvrez le fichier `server.cfg`. C’est là que vous pouvez modifier les options du serveur.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre votre serveur, vous devez générer et inclure un Game Server Login Token (GSLT). Ce token authentifie votre serveur auprès de Steam. Pour générer un GSLT, rendez-vous sur http://steamcommunity.com/dev/managegameservers et créez un token avec l’ID de jeu 90, qui correspond à Counter-Strike 1.6.

Une fois le token obtenu, ajoutez-le dans les paramètres de lancement de votre serveur avec `+sv_setsteamaccount <TOKEN>`.

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Allez dans le répertoire principal du jeu et exécutez la commande de lancement suivante :
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui signifie que le démarrage a réussi. Notez que le premier démarrage peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, vous pouvez aussi vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:2456`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Counter-Strike 1.6 sur votre VPS ! En suite, on vous recommande de jeter un œil à notre [guide de création de service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Pour toute question ou besoin d’aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />