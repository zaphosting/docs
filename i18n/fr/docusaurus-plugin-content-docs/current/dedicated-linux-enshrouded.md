---
id: dedicated-linux-enshrouded
title: "Serveur dédié : Installation du serveur dédié Enshrouded sous Linux"
description: "Découvrez comment installer et lancer le serveur dédié Enshrouded sur Linux pour une location de serveurs fluide et une gestion simplifiée → En savoir plus maintenant"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le service serveur dédié Enshrouded dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre tout sur l’[Interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre guide [Accès SSH initial](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

:::info Couches de compatibilité Wine
Enshrouded ne propose pas encore de build serveur natif Linux, ce qui implique une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Tu dois faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) pour configurer ça avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire racine `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un moment pour les jeux volumineux. Une fois terminé, un message de succès confirmera que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur Enshrouded est terminée. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en éditant le fichier de configuration **enshrouded_server.json** qui se trouve à la racine.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Consulte notre guide Enshrouded [Configuration du serveur](enshrouded-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier **enshrouded_server.exe** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Tu devrais voir plein de logs s’afficher dans ton terminal. Si tu vois le message `[Session] 'HostOnline' (up)!`, c’est que le démarrage a réussi. Tu pourras te connecter directement en ajoutant les infos du serveur dans l’onglet **Find Games** : `[ton_adresse_ip]:15636`.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur Enshrouded sur ton serveur dédié ! Pour la suite, on te conseille de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur de jeux dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !