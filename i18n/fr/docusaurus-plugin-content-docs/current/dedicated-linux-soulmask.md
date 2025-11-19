---
id: dedicated-linux-soulmask
title: "Serveur dédié : Configuration du serveur dédié Soulmask sous Linux"
description: "Découvrez comment configurer et installer un serveur dédié Soulmask sous Linux pour une location de serveurs fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le service serveur dédié Soulmask dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[Interface GS/TS3](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre guide [Accès initial SSH](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur Soulmask est terminée. Tu peux faire des réglages supplémentaires via les fichiers de configuration situés dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en accédant et en éditant le fichier **Engine.ini** qui se trouve dans le dossier Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Démarrage & connexion à ton serveur

Il est maintenant temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le fichier **StartServer.sh** avec la commande suivante.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:18888`.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur Soulmask sur ton serveur dédié ! Pour la suite, on te conseille de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur dédié de jeux en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider !