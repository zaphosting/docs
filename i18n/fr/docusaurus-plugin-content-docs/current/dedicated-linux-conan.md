---
id: dedicated-linux-conan
title: "Serveur dédié : Configuration du serveur dédié Conan Exiles sous Linux"
description: "Découvrez comment configurer un serveur dédié Conan Exiles sous Linux pour un hébergement et une gestion de jeu sans accroc → En savoir plus maintenant"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Linux et tu veux installer le service serveur dédié Conan Exiles dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre guide [Accès SSH initial](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide [Configuration SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien installé avant de continuer.

:::info Couches de compatibilité Wine
Conan Exiles ne propose pas encore de build serveur natif Linux, ce qui implique une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Tu devras faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un moment pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

## Configuration

À ce stade, ton serveur Conan Exiles est installé. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en éditant le fichier de configuration **WindowsServerEngine.ini** qui se trouve ici :
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Tu peux ajouter des options de configuration en insérant des paramètres spécifiques. Par exemple, pour définir un nom de serveur, un mot de passe et un mot de passe admin, ajoute ceci dans le fichier :
```
[OnlineSubsystem]
ServerName=[ton_nom_de_serveur]
ServerPassword=[ton_mot_de_passe]

[ServerSettings]
AdminPassword=[ton_mot_de_passe_admin]
```

On te conseille de jeter un œil au [Wiki Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) pour une liste complète des options disponibles.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier **ConanSandboxServer.exe** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine64** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Tu verras plein de logs s’afficher dans ton terminal, signe que le serveur démarre. Tu pourras te connecter directement en cherchant le serveur dans la liste ou en te connectant directement via : `[ton_adresse_ip]:7777`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Conan Exiles sur ton serveur dédié ! En suite, on te recommande de consulter notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur de jeux dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !