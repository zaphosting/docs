---
id: vserver-linux-foundry
title: "VPS : Installation du serveur dédié Foundry sous Linux"
description: "Découvrez comment installer le serveur dédié Foundry sur votre VPS Linux pour une location de serveurs et gestion de jeux sans accroc → En savoir plus maintenant"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Linux et tu veux installer le serveur dédié Foundry dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton VPS ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via SSH. Si tu as besoin d’aide, consulte notre [guide d’accès SSH initial](vserver-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

:::info Couches de compatibilité Wine
Foundry ne propose pas encore de build serveur natif Linux, ce qui implique une étape supplémentaire pour faire tourner la version Windows sur Linux.

Tu devras faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](vserver-linux-wine.md) pour la configurer avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès confirmera que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur Foundry est terminée. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en éditant le fichier **app.cfg** qui se trouve à la racine du dossier.
```
nano /home/steam/Foundry-Server/app.cfg
```

Consulte notre guide de [Configuration du serveur Foundry](foundry-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier **FoundryDedicatedServerLauncher.exe** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage s’est bien passé. Si tout se passe comme prévu, ton serveur sera visible dans la liste des serveurs. Sinon, tu peux te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[ton_adresse_ip]:3724`.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur Foundry sur ton VPS ! Pour la suite, on te conseille de jeter un œil à notre guide [Configurer un service Linux](vserver-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider !

<InlineVoucher />