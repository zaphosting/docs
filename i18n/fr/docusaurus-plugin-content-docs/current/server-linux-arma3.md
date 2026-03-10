---
id: server-linux-arma3
title: "Installation du serveur dédié Arma 3 sous Linux"
description: "Découvrez comment installer et lancer le serveur dédié Arma 3 sur Linux pour une location de serveurs fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS/serveur dédié Linux et tu veux installer le service serveur dédié Arma 3 dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **interface ZAP GS/TS3** directement sur ton VPS/serveur dédié ? Ça te permet de configurer tes serveurs de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton VPS/serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès SSH initial](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le dossier home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès confirmera que tout s’est bien passé.

## Configuration

À ce stade, tu as fini la configuration de ton serveur Arma 3. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en accédant et en éditant le fichier **server.cfg** qui se trouve à la racine.
```
nano /home/steam/arma3-server/server.cfg
```

## Démarrage & connexion à ton serveur

Il est maintenant temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier **arma3server_x64** avec la commande suivante.

```
/home/steam/arma3-server/arma3server_x64
```

Tu devrais voir plein de logs s’afficher dans ton terminal, ce qui indique que le serveur a démarré avec succès.

Les joueurs pourront se connecter directement via le **navigateur de serveurs Arma 3** en utilisant l’adresse IP de ton serveur et le port par défaut **2302**.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton **serveur Arma 3** sur ton VPS/serveur dédié ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />