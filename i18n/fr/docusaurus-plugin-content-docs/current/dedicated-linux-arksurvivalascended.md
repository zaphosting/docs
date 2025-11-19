---
id: dedicated-linux-arksurvivalascended
title: "Serveur dédié : Installation du serveur dédié ARK Survival Ascended sous Linux"
description: "Découvrez comment configurer un serveur dédié ARK: Survival Ascended sur Linux pour un gameplay fluide et une gestion facile du serveur → En savoir plus maintenant"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le service serveur dédié ARK: Survival Ascended dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre tout sur l’[interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Suis notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

:::info Wine Compatibility Layer
ARK: Survival Ascended ne propose pas encore de build serveur natif Linux, ce qui signifie qu’il y a une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Tu dois faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) pour configurer ça avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, tu as fini la configuration de ton serveur ARK: Survival Ascended. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en accédant et en éditant le fichier de configuration **GameUserSettings.ini** qui se trouve dans le dossier Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Consulte notre [guide de configuration serveur ARK: Survival Ascended](ark-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier exécutable **ArkAscendedServer.exe** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Malheureusement, à cause d’un manque de support, tu ne peux pas faire tourner la version du serveur avec l’anti-triche Battleye sur Linux. L’anti-triche n’est tout simplement pas compatible.
:::

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le serveur a démarré avec succès. Note que le premier démarrage peut prendre un peu de temps le temps que tout se mette en place. Sinon, tu peux te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[ton_adresse_ip]:7777`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur ARK: Survival Ascended sur ton serveur dédié ! En suite, on te conseille de jeter un œil à notre [guide de création de service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur de jeux dédié en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre équipe support, dispo tous les jours pour t’aider !