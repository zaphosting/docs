---
id: vserver-linux-arksurvivalascended
title: "VPS : Installation du serveur dédié ARK Survival Ascended sous Linux"
description: "Découvrez comment installer le serveur dédié ARK : Survival Ascended sur votre VPS Linux pour une gestion de jeu fluide → En savoir plus maintenant"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le serveur dédié ARK : Survival Ascended dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. Nous utiliserons Ubuntu dans les exemples, mais le processus devrait être très similaire pour d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **interface ZAP GS/TS3** directement sur votre VPS, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvrez-en plus sur l’[interface GS/TS3 ici](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Utilisez notre guide [Accès initial SSH](vserver-linux-ssh.md) si vous avez besoin d’aide pour cela.

Vous devrez également effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Veuillez suivre notre guide [Installation SteamCMD Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est entièrement configuré avant de continuer.

:::info Wine Compatibility Layer
ARK : Survival Ascended ne propose actuellement pas de version native Linux du serveur, ce qui signifie qu’une étape supplémentaire est nécessaire pour faire tourner la version Windows du serveur sur Linux.

Vous devez effectuer une installation unique de la couche de compatibilité **Wine** si c’est la première fois que vous l’utilisez sur votre serveur Linux. Utilisez notre guide rapide [Installation de la couche de compatibilité Wine](vserver-linux-wine.md) pour la configurer avant de continuer.
:::

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire personnel `home/steam` pour garder tout organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, vous pouvez lancer l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Soyez patient pendant le téléchargement, cela peut prendre un certain temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour vous le confirmer.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur ARK : Survival Ascended. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

Vous pourrez ajuster tous les paramètres en accédant et en modifiant le fichier de configuration **GameUserSettings.ini** situé dans le dossier Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Consultez notre [guide de configuration du serveur ARK : Survival Ascended](ark-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal du jeu et lancez l’exécutable **ArkAscendedServer.exe** avec la commande ci-dessous. Assurez-vous d’ajouter les commandes **xvfb-run** et **wine** pour l’exécuter via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Malheureusement, en raison d’un manque de support, vous ne pouvez pas faire tourner la version du serveur avec l’anti-triche Battleye sous Linux. L’anti-triche n’est tout simplement pas compatible.
:::

Vous devriez voir apparaître des logs dans votre terminal, ce qui indique que le démarrage a réussi. Notez que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[votre_adresse_ip]:7777`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur ARK : Survival Ascended sur votre VPS ! En prochaine étape, nous vous recommandons de consulter notre guide [Configurer un service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Cela offre plusieurs avantages, comme le lancement automatique du serveur au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />