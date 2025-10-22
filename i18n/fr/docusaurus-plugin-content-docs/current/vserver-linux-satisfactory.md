---
id: vserver-linux-satisfactory
title: "VPS : Installation d’un serveur dédié Satisfactory sous Linux"
description: "Découvrez comment installer un serveur dédié Satisfactory sur votre VPS Linux pour une location de serveurs fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le serveur dédié Satisfactory dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre VPS ? Ça vous permet de configurer vos services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, suivez notre [guide d’accès initial SSH](vserver-linux-ssh.md).

Vous devrez aussi faire une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est bien configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et allez dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec cette commande qui utilise SteamCMD pour installer directement dans le dossier de l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour confirmer que tout s’est bien passé.

## Configuration

À ce stade, votre serveur Satisfactory est installé. Vous pouvez configurer davantage votre serveur via les fichiers de configuration situés dans le dossier de votre serveur.

Vous pourrez modifier tous les paramètres en éditant les fichiers **Engine.ini** et **GameUserSettings.ini** qui se trouvent dans le dossier Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le dossier principal du jeu et lancez le script shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui signifie que le démarrage a réussi. Notez que le premier démarrage peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, vous pouvez aussi vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[votre_adresse_ip]:15777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Satisfactory sur votre VPS ! Pour la suite, on vous conseille de jeter un œil à notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez des questions ou des soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !

<InlineVoucher />