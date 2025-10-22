---
id: vserver-linux-dods
title: "VPS : Installation d’un serveur dédié Day of Defeat: Source sous Linux"
description: "Découvrez comment installer rapidement et efficacement un serveur dédié Day of Defeat: Source sur votre VPS Linux → En savoir plus maintenant"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le service serveur dédié Day of Defeat: Source dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le processus est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre VPS ? Ça vous permet de configurer vos serveurs de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, consultez notre [guide d’accès SSH initial](vserver-linux-ssh.md). Vous devrez aussi effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD sous Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire personnel `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante qui utilise SteamCMD pour installer directement dans le dossier de l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

## Configuration

À ce stade, l’installation de votre serveur Day of Defeat: Source est terminée. Vous pouvez configurer davantage votre serveur en modifiant directement le fichier de lancement.

Rendez-vous dans le répertoire racine. À l’intérieur, ouvrez le dossier cfg et éditez le fichier `server.cfg` pour ajuster les options du serveur.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## Enregistrement du token GSL

Pour que d’autres joueurs puissent rejoindre votre serveur, vous devez générer et inclure un Game Server Login Token (GSLT). Ce token authentifie votre serveur auprès de Steam. Pour créer un GSLT, rendez-vous sur http://steamcommunity.com/dev/managegameservers et générez un token avec l’ID jeu 232290, qui correspond à Day of Defeat: Source.

Une fois le token obtenu, ajoutez-le dans les paramètres de lancement de votre serveur avec `+sv_setsteamaccount <TOKEN>`.

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Allez dans le répertoire principal du jeu et exécutez la commande de lancement suivante :
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Vous devriez voir des logs s’afficher dans votre terminal, ce qui signifie que le serveur démarre correctement. Notez que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, vous pouvez aussi vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[votre_adresse_ip]:2456`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Day of Defeat: Source sur votre VPS ! En suite, on vous conseille de jeter un œil à notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Pour toute question ou besoin d’aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />