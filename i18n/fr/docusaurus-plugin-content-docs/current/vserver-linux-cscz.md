---
id: vserver-linux-cscz
title: "VPS : Serveur dédié Counter-Strike : Condition Zero sous Linux"
description: "Découvrez comment configurer un serveur dédié Counter-Strike : Condition Zero sur un VPS Linux pour une expérience de jeu fluide → En savoir plus maintenant"
sidebar_label: "Counter-Strike : Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Linux et tu veux installer le service serveur dédié Counter-Strike : Condition Zero dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton VPS ? Ça te permet de configurer tes serveurs de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre-en plus sur l’[Interface GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès SSH initial](vserver-linux-ssh.md). Tu devras aussi faire une première configuration de SteamCMD si c’est ta première fois à l’utiliser sur ton serveur Linux. Suis notre [guide d’installation SteamCMD Linux](vserver-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer facilement l’installation via SteamCMD directement sous l’utilisateur `steam`.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera pour te confirmer que tout s’est bien passé.

## Configuration

À ce stade, l’installation de ton serveur Counter-Strike : Condition Zero est terminée. Tu peux configurer davantage ton serveur en éditant directement le fichier de lancement.

Va dans ton répertoire racine. Ensuite, navigue vers le dossier cfg et ouvre le fichier `server.cfg`. C’est là que tu peux modifier les options de ton serveur.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Démarrage & connexion à ton serveur

Il est maintenant temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute la commande de lancement suivante :
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier démarrage peut prendre un peu plus de temps le temps que tout se mette en place. Sinon, tu peux aussi te connecter directement en utilisant la barre de recherche en bas de la liste des serveurs et en cherchant : `[ton_adresse_ip]:2456`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Counter-Strike : Condition Zero sur ton VPS ! En suite, on te conseille de jeter un œil à notre [guide de configuration du service Linux](vserver-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur dédié de jeux en tant que service. Ça t’apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée avec accès aux logs, et bien plus encore !

Pour toute question ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’assister ! 🙂

<InlineVoucher />