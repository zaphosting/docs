---
id: dedicated-linux-avorion
title: "Serveur dédié : Installation du serveur dédié Avorion sous Linux"
description: "Apprenez à installer et configurer le serveur dédié Avorion sur votre VPS Linux pour une location de serveurs de jeux fluide → En savoir plus maintenant"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Linux et vous souhaitez installer le service serveur dédié Avorion dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre VPS, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Si vous avez besoin d’aide, utilisez notre guide [Accès SSH initial](dedicated-linux-ssh.md).

Vous devrez aussi effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est complètement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès confirmera que tout s’est bien passé.

## Configuration

À ce stade, votre serveur Avorion est installé. Vous pouvez configurer les paramètres du serveur directement via le fichier **startserver.sh** que vous avez copié précédemment. Ouvrez-le avec `nano /home/steam/Avorion-Server/startserver.sh` et ajustez les paramètres selon vos besoins.

Vous pourrez aussi modifier les paramètres spécifiques au monde en éditant le fichier de configuration **server.ini** situé dans chaque sauvegarde de galaxie. Ce fichier se trouve dans le dossier racine de l’utilisateur (normalement `steam`) et peut être géré avec ces commandes :
```
# Voir les sauvegardes actuelles
ls /home/steam/.avorion/galaxies

# Modifier la configuration d’une sauvegarde
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le répertoire principal du jeu, où on vous conseille de créer une copie du fichier batch d’exemple.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Vous pouvez modifier ce fichier si vous le souhaitez. Une fois prêt, lancez le nouveau fichier batch **startserver.sh** avec la commande suivante :
```
/home/steam/Avorion-Server/startserver.sh
```

Vous devriez voir apparaître des logs dans votre terminal, signe que le démarrage s’est bien passé. Notez que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Une fois prêt, vous verrez `Server startup complete.` dans la console. Vous pourrez alors vous connecter directement à votre serveur via le navigateur de serveurs en jeu en entrant l’adresse IP et le port de votre serveur (par défaut 27000).

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Avorion sur votre VPS ! En suite, on vous recommande de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer votre nouveau serveur dédié de jeux en service. Cela apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée avec accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !