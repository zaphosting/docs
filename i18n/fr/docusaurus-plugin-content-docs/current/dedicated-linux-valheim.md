---
id: dedicated-linux-valheim
title: "Serveur dédié : Installation du serveur dédié Valheim sous Linux"
description: "Découvrez comment configurer un serveur dédié Valheim sous Linux pour héberger votre serveur de jeux efficacement et optimiser ses performances → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le serveur dédié Valheim dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre-en plus sur l’[interface GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout est OK.

## Configuration

À ce stade, la configuration de ton serveur Valheim est terminée. Tu peux faire des réglages supplémentaires en éditant directement le fichier de lancement.

Va dans ton répertoire principal et ouvre le fichier `.sh`. Tu pourras modifier les paramètres ici.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Démarrage & connexion à ton serveur

Il est maintenant temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute le script **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier démarrage peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.

:::info
Si tu ne peux pas te connecter et que tu as des erreurs `PlayFab` dans la console, il faudra peut-être désactiver le support crossplay pour régler ça, car c’est un problème connu sur la version Linux. Pour ça, lance `nano /home/steam/Valheim-Server/start_server.sh` et supprime le flag `-crossplay`.

Si tu as besoin du crossplay, une autre solution est d’installer la version Windows et d’utiliser **Wine** comme couche de compatibilité. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) pour configurer ça. Une fois prêt, tu peux installer la version Windows du serveur Valheim via SteamCMD avec :
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Une fois installé, lance la version Windows via Wine avec la commande : `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Valheim sur ton serveur dédié ! Pour la suite, on te recommande de jeter un œil à notre [guide de création de service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur de jeux dédié en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée et l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, ils sont là pour t’aider tous les jours !

<InlineVoucher />