---
id: dedicated-linux-create-gameservice
title: "Serveur dédié : Configure ton serveur de jeux dédié comme un service Linux"
description: "Découvre comment configurer et gérer des services de serveur de jeux dédiés sous Linux pour une automatisation fluide et un contrôle facile → Apprends-en plus maintenant"
sidebar_label: Configurer un service Linux
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les services sont une partie intégrante de Linux et désignent un processus ou une application qui tourne en arrière-plan, que ce soit une tâche prédéfinie ou basée sur un événement. Ça apporte plein d’avantages comme le lancement automatique du serveur au démarrage, les mises à jour automatiques, une gestion facile et l’accès aux logs, et bien plus encore ! Dans ce guide, on va voir comment créer un service pour ton serveur de jeux dédié.

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](vserver-linux-ssh.md).

Tu devrais aussi suivre un de nos guides de serveur de jeux dédié dans cette section pour installer et configurer un serveur de jeux sur ton système Linux. Ici, on prendra l’exemple du [serveur de jeux dédié Palworld](dedicated-linux-palworld.md), mais les instructions peuvent être adaptées à tous nos guides.

## Création d’un service

Commence par créer un nouveau fichier de service pour ton serveur de jeux dédié. Remplace `[your_game]` par le nom que tu veux. On recommande d’utiliser le nom du jeu pour rester organisé, donc ici on prendra `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Configuration du service

Avec l’éditeur nano ouvert, copie le contenu de base du fichier ci-dessous, c’est un modèle de fichier service que tu peux réutiliser. On a deux versions : une pour les guides utilisant SteamCMD et une autre pour les jeux sans SteamCMD.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="Jeu SteamCMD" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Jeu classique">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Décryptons un peu le contenu du fichier pour mieux comprendre.
- `Description` : C’est libre, ça sert à distinguer facilement le but du service.
- `User` : Avec nos guides, tu devrais avoir créé un utilisateur `steam` pour SteamCMD, ou `gameservers` pour les jeux sans SteamCMD. Sinon, mets l’utilisateur qui doit lancer le service.
- `WorkingDirectory` : C’est le chemin vers le dossier principal qui contient tout ce dont le service a besoin.
- `ExecStartPre` (SteamCMD uniquement) : Ici, on lance la commande d’installation SteamCMD à chaque redémarrage du serveur pour s’assurer qu’il est à jour. Tu peux copier ça depuis le guide dédié, ou remplacer manuellement avec les valeurs du jeu.
- `ExecStart` : C’est la tâche prédéfinie qui doit tourner avec le service. Là aussi, copie le chemin depuis le guide dédié ou remplace-le manuellement pour pointer vers le fichier de démarrage.
:::important Couches de compatibilité Wine
Pour les jeux qui nécessitent la couche de compatibilité **Wine** pour tourner, tu dois inclure les commandes **xvfb-run** et **wine** dans le paramètre `ExecStart`. Par exemple pour V-Rising :
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Assure-toi aussi que ta commande d’installation SteamCMD dans `ExecStartPre` inclut le paramètre `+@sSteamCmdForcePlatformType` si besoin pour forcer une version plateforme.
:::

Une fois que tu as adapté toutes les valeurs à ton serveur de jeux dédié, sauvegarde le fichier et quitte nano avec `CTRL + X`, puis `Y` pour confirmer, et enfin `ENTER`.

Avec notre exemple Palworld, le fichier ressemblerait à ça :
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Gestion du service

Maintenant que ton fichier de service est créé, tu dois l’activer. Avec l’exemple `palworld.service`, remplace `[your_service]` par `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Si tu modifies ton fichier de service, pense à lancer `systemctl daemon-reload` après pour que les changements soient pris en compte.
:::

Tu peux maintenant démarrer le serveur avec la commande `systemctl start`. De la même façon, tu peux arrêter ou redémarrer le serveur avec des commandes similaires.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
Pour voir les détails du service, utilise `systemctl status`. Si tu as besoin des logs pour débugger, utilise `journalctl -u [your_service].service` pour voir les derniers logs du service.
:::

Enfin, si tu veux empêcher le service de démarrer automatiquement au boot, désactive-le simplement.
```
sudo systemctl disable [your_service]
```

## Conclusion

Tu as maintenant configuré avec succès un service pour ton serveur de jeux dédié. Le serveur démarrera automatiquement au démarrage du serveur dédié.

Tu as aussi appris le contenu du fichier service et comment gérer le service avec différentes commandes.