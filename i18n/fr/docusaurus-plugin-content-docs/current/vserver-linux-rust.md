---
id: vserver-linux-rust
title: "VPS : Installation d’un serveur dédié Rust sous Linux"
description: "Apprends à installer un serveur dédié Rust sur ton VPS Linux avec SteamCMD pour une location de serveurs de jeux fluide → Découvre tout maintenant"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Linux et tu veux installer le service serveur dédié Rust dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur Linux grâce à SteamCMD. On utilise Ubuntu dans les exemples, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton VPS ? Ça te permet de configurer des services de serveurs de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en quelques clics seulement ! Découvre-en plus sur l’[Interface GS/TS3 ici](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](vserver-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire personnel `home/steam` pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout est bon.

## Configuration

À ce stade, ton serveur Rust est installé. Tu peux faire des configurations supplémentaires via les fichiers de config qui se trouvent dans le dossier de ton serveur.

Va dans ton répertoire racine et crée un fichier `.sh`. Ce sera le script bash utilisé pour démarrer le serveur et ajuster différents paramètres de config.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ajoute maintenant ce contenu dans le fichier bash. La commande ci-dessous contient quelques paramètres de base et les plus utilisés. Si tu veux en ajouter plus ou en savoir plus sur chacun, on te conseille de jeter un œil au [wiki officiel de Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) qui liste toutes les options de configuration disponibles.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Sauvegarde le fichier avec `CTRL+X`, puis `Y` et `Entrée`. Enfin, pour rendre le script exécutable sans sudo, lance cette commande qui ajoute la permission d’exécution au fichier.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal du jeu et exécute le script shell **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Si tout se passe bien, ton serveur sera visible dans la liste des serveurs. Sinon, tu peux te connecter directement en cherchant : `[ton_adresse_ip]:28015`.

## Conclusion

Félicitations, tu as installé et configuré ton serveur Rust sur ton VPS avec succès ! Pour la suite, on te recommande de consulter notre [guide de création de service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur dédié de jeux en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre équipe support, dispo tous les jours pour t’aider !

<InlineVoucher />