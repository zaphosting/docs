---
id: dedicated-linux-satisfactory
title: "Serveur dédié : Installation du serveur dédié Satisfactory sous Linux"
description: "Commencez à installer et configurer un serveur dédié Satisfactory sur votre serveur Linux pour une location de serveurs fluide → En savoir plus maintenant"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur dédié Satisfactory dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. Nous utiliserons Ubuntu dans les exemples, mais le processus devrait être très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux, avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[Interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md) si vous avez besoin d’aide pour cela.

Vous devrez également effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Veuillez utiliser notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est entièrement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` de cet utilisateur pour garder tout organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, vous pouvez lancer l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Soyez patient pendant le téléchargement, cela peut prendre un certain temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour vous confirmer la bonne installation.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Satisfactory. Vous pouvez effectuer des réglages supplémentaires via les fichiers de configuration situés dans le répertoire de votre serveur.

Vous pourrez ajuster tous les paramètres en accédant et en modifiant les fichiers de configuration **Engine.ini** et **GameUserSettings.ini** situés dans le dossier Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez le script shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Vous devriez voir apparaître des logs dans votre terminal, ce qui indique que le démarrage a réussi. Notez que le premier démarrage peut prendre un certain temps le temps que tout se mette en place. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:15777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Satisfactory sur votre serveur dédié ! Comme prochaine étape, nous vous recommandons de consulter notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Cela offre plusieurs avantages, notamment le lancement automatique du serveur au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible pour vous aider tous les jours !