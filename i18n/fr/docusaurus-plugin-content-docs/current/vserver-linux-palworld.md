---
id: vserver-linux-palworld
title: "VPS : Installation d’un serveur dédié Palworld sous Linux"
description: "Découvrez comment installer et lancer un serveur dédié Palworld sur votre VPS Linux efficacement → En savoir plus maintenant"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Linux et vous souhaitez installer le service serveur dédié Palworld dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le processus est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre VPS, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via SSH. Utilisez notre guide [Accès SSH initial](vserver-linux-ssh.md) si vous avez besoin d’aide pour ça.

Vous devrez aussi effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre guide [Installation SteamCMD Linux](vserver-linux-steamcmd.md) et assurez-vous que SteamCMD est complètement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour confirmer la bonne installation.

## Configuration

À ce stade, votre serveur Palworld est installé. Vous pouvez configurer davantage votre serveur via un fichier de configuration situé dans le dossier de votre serveur.

Il faut d’abord créer une copie du fichier de configuration par défaut et la placer dans le dossier sauvegardé avant de pouvoir modifier.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Une fois la copie créée, vous pouvez éditer les paramètres principaux en ouvrant le nouveau fichier **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Consultez notre guide Palworld [Configuration du serveur](palworld-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le répertoire principal du jeu et exécutez le script shell **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Vous devriez voir apparaître des logs dans votre terminal, incluant une ligne indiquant la version du jeu, ce qui signifie que le démarrage a réussi. Si tout se passe bien, votre serveur sera visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[votre_adresse_ip]:8211`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Palworld sur votre VPS ! En suite, on vous recommande de jeter un œil à notre guide [Créer un service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur dédié de jeux en tant que service. Cela apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée avec accès aux logs, et bien plus encore !

Si vous avez d’autres questions ou soucis, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />