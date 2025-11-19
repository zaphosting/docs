---
id: dedicated-linux-palworld
title: "Serveur dédié : Configuration du serveur dédié Palworld sous Linux"
description: "Découvrez comment configurer et installer un serveur dédié Palworld sur Linux pour une gestion de jeu fluide → En savoir plus maintenant"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le service serveur dédié Palworld dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre tout sur l’[Interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, consulte notre guide [Accès initial SSH](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est ta première fois à l’utiliser sur ton serveur Linux. Utilise notre guide [Installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, ton serveur Palworld est installé. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Tu dois d’abord créer une copie du fichier de configuration par défaut et la placer dans le dossier saved avant de pouvoir modifier quoi que ce soit.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Avec la copie créée, tu peux éditer les paramètres principaux en ouvrant le fichier **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Consulte notre guide Palworld [Configuration du serveur](palworld-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute le script shell **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Tu devrais voir apparaître des logs dans ton terminal, y compris une ligne indiquant la version du jeu, ce qui signifie que le démarrage a réussi. Si tout se passe bien, ton serveur sera visible dans la liste des serveurs. Sinon, tu peux te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[ton_adresse_ip]:8211`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Palworld sur ton serveur dédié ! En suite, on te conseille de jeter un œil à notre guide [Configurer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur de jeux dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée avec accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !