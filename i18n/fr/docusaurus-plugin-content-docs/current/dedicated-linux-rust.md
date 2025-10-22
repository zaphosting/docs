---
id: dedicated-linux-rust
title: "Serveur dédié : Configuration d’un serveur Rust dédié sous Linux"
description: "Apprenez à configurer un serveur Rust dédié sous Linux pour héberger votre serveur de jeux efficacement et optimiser les performances → Découvrez-le maintenant"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un serveur dédié Linux et vous souhaitez installer le service serveur Rust dédié dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur Linux via SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Saviez-vous que vous pouvez installer notre **Interface ZAP GS/TS3** directement sur votre serveur dédié, vous permettant de configurer des services de serveur de jeux avec une intégration directe à votre tableau de bord ZAP-Hosting, en seulement quelques clics ? Découvrez-en plus sur l’[Interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre serveur dédié via SSH. Si vous avez besoin d’aide, utilisez notre [guide d’accès initial SSH](dedicated-linux-ssh.md).

Vous devrez aussi effectuer une première configuration de SteamCMD si c’est la première fois que vous l’utilisez sur votre serveur Linux. Suivez notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assurez-vous que SteamCMD est complètement configuré avant de continuer.

## Installation

Commencez par vous connecter en tant qu’utilisateur `steam` et rendez-vous dans le répertoire racine `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lancez l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Soyez patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès apparaîtra pour confirmer la bonne installation.

## Configuration

À ce stade, la configuration de votre serveur Rust est terminée. Vous pouvez affiner la configuration via les fichiers de config situés dans le répertoire de votre serveur.

Rendez-vous dans le répertoire racine et créez un fichier `.sh`. Ce sera le script bash utilisé pour démarrer le serveur et ajuster différents paramètres.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ajoutez maintenant le contenu suivant dans ce fichier bash. La commande ci-dessous inclut quelques paramètres de base et les plus utilisés. Si vous voulez en ajouter plus ou en savoir plus sur chacun, on vous recommande de consulter la [wiki officielle de Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) qui liste toutes les options de configuration disponibles.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Sauvegardez avec `CTRL+X`, puis `Y` et `Entrée`. Enfin, pour rendre ce script exécutable sans sudo, lancez la commande suivante qui ajoute la permission d’exécution au fichier.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Allez dans le répertoire principal du jeu et exécutez le script **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Vous devriez voir apparaître des logs dans votre terminal, signe que le démarrage s’est bien passé. Notez que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Si tout se passe bien, votre serveur sera visible dans la liste des serveurs. Sinon, vous pouvez vous connecter directement en cherchant : `[votre_adresse_ip]:28015`.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Rust sur votre serveur dédié ! En suite, on vous conseille de jeter un œil à notre [guide de création de service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer votre nouveau serveur de jeux dédié en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si vous avez des questions ou des soucis, n’hésitez pas à contacter notre support, dispo tous les jours pour vous aider !

<InlineVoucher />