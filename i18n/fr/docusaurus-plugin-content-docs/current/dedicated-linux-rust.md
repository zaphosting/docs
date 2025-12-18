---
id: dedicated-linux-rust
title: "Serveur dédié : Configuration d’un serveur Rust dédié sous Linux"
description: "Apprends à configurer un serveur Rust dédié sur Linux pour héberger ton serveur de jeux efficacement et optimiser les performances → Découvre-le maintenant"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Linux et tu veux installer le service serveur Rust dédié dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer tes services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre-en plus sur l’[interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::



## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès SSH initial](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Suis notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, ton serveur Rust est installé. Tu peux faire des configurations supplémentaires via les fichiers de config qui se trouvent dans le dossier de ton serveur.

Va dans ton répertoire principal et crée un fichier `.sh`. Ce sera le script bash utilisé pour démarrer le serveur et ajuster différents paramètres de config.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ajoute maintenant le contenu suivant dans ce fichier bash. Dans la commande ci-dessous, on a mis quelques paramètres basiques et les plus utilisés. Si tu veux en ajouter plus ou en savoir plus sur chacun, on te conseille de jeter un œil au [wiki officiel de Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) qui liste toutes les options de configuration disponibles.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Sauvegarde le fichier avec `CTRL+X`, puis `Y` et `Entrée`. Enfin, pour rendre ce script exécutable sans sudo, lance la commande suivante qui ajoute la permission d’exécution au fichier.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le script **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage s’est bien passé. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Si tout se passe comme prévu, ton serveur sera visible dans la liste des serveurs. Sinon, tu peux te connecter directement en cherchant : `[ton_adresse_ip]:28015`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Rust sur ton serveur dédié ! Pour la suite, on te recommande de consulter notre [guide de configuration du service Linux](dedicated-linux-create-gameservice.md), qui explique comment transformer ton nouveau serveur de jeux dédié en service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !