---
id: vserver-linux-valheim
title: "VPS : Installation d’un serveur dédié Valheim sous Linux"
description: "Découvrez comment installer un serveur dédié Valheim sur votre VPS Linux pour un gameplay fluide et une gestion facile du serveur → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le serveur dédié Valheim dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le processus est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre VPS ? Ça vous permet de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvrez-en plus sur l’[interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, consultez notre [guide d’accès SSH initial](vserver-linux-ssh.md).

Vous devrez aussi faire une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et allez dans le répertoire personnel `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour confirmer que tout s’est bien passé.

## Configuration

À ce stade, votre serveur Valheim est installé. Vous pouvez configurer davantage votre serveur en éditant directement le fichier de lancement.

Rendez-vous dans le répertoire racine et ouvrez le fichier `.sh`. Vous pouvez modifier les paramètres ici.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Allez dans le dossier principal du jeu et exécutez le script shell **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui signifie que le démarrage a réussi. Notez que le premier lancement peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:2456`.

:::info
Si vous ne pouvez pas vous connecter et que vous voyez des erreurs `PlayFab` dans la console, il se peut que vous deviez désactiver le support crossplay pour régler ce problème, qui est connu sur la version Linux. Pour cela, lancez `nano /home/steam/Valheim-Server/start_server.sh` et supprimez le flag `-crossplay`.

Si vous avez besoin du crossplay, une autre solution est d’installer la version Windows et d’utiliser **Wine** comme couche de compatibilité. Suivez notre guide rapide [Installation de la couche de compatibilité Wine](vserver-linux-wine.md) pour configurer ça. Une fois prêt, vous pouvez installer la version Windows du serveur Valheim via SteamCMD avec :
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Une fois installé, lancez la version Windows via Wine avec la commande : `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Valheim sur votre VPS ! Pour la suite, on vous recommande de jeter un œil à notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !

<InlineVoucher />