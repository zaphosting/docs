---
id: dedicated-linux-mythofempires
title: "Serveur dédié : Installation du serveur dédié Myth of Empires sous Linux"
description: "Découvrez comment installer le serveur dédié Myth of Empires sur Linux et optimiser votre configuration de location de serveurs → En savoir plus maintenant"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié Linux et tu veux installer le serveur dédié Myth of Empires dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur Linux en utilisant SteamCMD. On prendra Ubuntu en exemple, mais le process est très similaire sur d’autres distributions.

:::tip
Tu savais que tu peux installer notre **Interface ZAP GS/TS3** directement sur ton serveur dédié ? Ça te permet de configurer des services de serveur de jeux avec une intégration directe à ton tableau de bord ZAP-Hosting, en seulement quelques clics ! Découvre tout sur l’[Interface GS/TS3 ici](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via SSH. Si tu as besoin d’aide, utilise notre [guide d’accès initial SSH](dedicated-linux-ssh.md).

Tu devras aussi faire une première configuration de SteamCMD si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre [guide d’installation SteamCMD Linux](dedicated-linux-steamcmd.md) et assure-toi que SteamCMD est bien configuré avant de continuer.

:::info Wine Compatibility Layer
Myth of Empires ne propose pas encore de build serveur natif Linux, ce qui signifie qu’il faut une étape supplémentaire pour faire tourner la version Windows du serveur sur Linux.

Tu dois faire une installation unique de la couche de compatibilité **Wine** si c’est la première fois que tu l’utilises sur ton serveur Linux. Utilise notre guide rapide [Installation de la couche de compatibilité Wine](dedicated-linux-wine.md) pour configurer ça avant de continuer.
:::

## Installation

Commence par te connecter en tant qu’utilisateur `steam` et rends-toi dans le répertoire home de cet utilisateur pour garder tout bien organisé.
```
sudo -u steam -s
cd ~
```

Une fois connecté, lance l’installation avec la commande suivante pour démarrer l’installation via SteamCMD directement sous l’utilisateur `steam`. En utilisant le paramètre `+@sSteamCmdForcePlatformType windows`, tu forces l’installation des binaires Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Sois patient pendant le téléchargement, ça peut prendre un peu de temps pour les jeux volumineux. Une fois terminé, un message de succès s’affichera.

## Configuration

À ce stade, l’installation de ton serveur Myth of Empires est terminée. Tu peux configurer ton serveur plus en détail via plusieurs fichiers de configuration situés dans le dossier de ton serveur.

Tu pourras modifier tous les paramètres en éditant les fichiers `.ini` dans le dossier Saved. Utilise la commande `ls` pour voir les fichiers disponibles.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Pour éditer un fichier, lance simplement `nano ./[nom_du_fichier].ini` pour ouvrir l’éditeur nano.

Consulte notre guide Myth of Empires [Configuration du serveur](moe-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le répertoire principal du jeu et exécute le fichier **MOEServer.exe** avec la commande ci-dessous. N’oublie pas d’ajouter les commandes **xvfb-run** et **wine** pour le faire tourner via la couche de compatibilité Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Tu devrais voir apparaître des logs dans ton terminal, ce qui signifie que le démarrage a réussi. Note que le premier lancement peut prendre un peu de temps le temps que tout se mette en place. Tu pourras te connecter directement en cherchant les infos du serveur dans l’onglet **Custom Server** : `[ton_adresse_ip]:15636`.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur Myth of Empires sur ton serveur dédié ! La prochaine étape, on te conseille de jeter un œil à notre guide [Créer un service Linux](dedicated-linux-create-gameservice.md), qui explique comment configurer ton nouveau serveur de jeux dédié en tant que service. Ça apporte plein d’avantages comme le lancement automatique au démarrage, les mises à jour automatiques, une gestion simplifiée, l’accès aux logs, et bien plus encore !

Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />