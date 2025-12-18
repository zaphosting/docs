---
id: dedicated-linux-vrising
title: "Serveur dédié : Installation du serveur dédié V-Rising sous Linux"
description: "Découvrez comment installer le serveur dédié V-Rising sur Linux pour une location de serveurs fluide et une gestion simplifiée → En savoir plus maintenant"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le service serveur dédié V-Rising dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre guide [Accès SSH initial](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

:::info Couches de compatibilité Wine
V-Rising ne propose pas encore de build serveur natif Linux, ce qui signifie qu’il faut une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Tu dois faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur V-Rising est terminée. Tu peux faire des configurations supplémentaires en éditant directement le fichier de lancement.

Tu pourras ajuster tous les paramètres de configuration en accédant et modifiant les fichiers **ServerGameSettings.json** et **ServerHostSettings.json** situés dans le dossier Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Consulte notre guide V-Rising [Configuration du serveur](vrising-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le répertoire principal du jeu, où on te recommande de créer une copie du fichier batch d’exemple.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Tu peux modifier ce fichier si tu veux. Une fois prêt, lance le nouveau fichier exécutable **start_server.bat** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:8211`.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur V-Rising sur ton serveur dédié ! En suite, on te conseille de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur de jeux dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !