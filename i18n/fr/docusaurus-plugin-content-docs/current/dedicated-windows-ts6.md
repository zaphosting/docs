---
id: dedicated-windows-ts6
title: "Serveur dédié : Installer un serveur Teamspeak 6 sur votre serveur dédié Windows"
description: "Découvrez comment configurer et optimiser votre serveur TeamSpeak 6 pour des performances et une sécurité optimales → En savoir plus maintenant"
sidebar_label: Installer un serveur Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

À l'été 2025, TeamSpeak a lancé la **version Beta** du **serveur TeamSpeak 6**. Vous pouvez maintenant découvrir la prochaine génération de TeamSpeak en avant-première !

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Prérequis

Avant d’installer le **serveur Teamspeak 6**, assurez-vous que votre environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 cœur vCPU  | 4 cœurs vCPU               |
| RAM        | 1 Go         | 4 Go                       |
| Espace disque | 1 Go       | 25 Go                      |



## Préparation

Avant de configurer le **serveur TeamSpeak 6**, vous devez préparer votre système. Pour vous assurer que votre système tourne avec les dernières mises à jour logicielles et de sécurité, effectuez toujours une mise à jour système en premier.

Cela garantit que votre système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.




## Installation
Maintenant que toutes les exigences sont remplies et que les préparatifs sont faits, vous pouvez lancer l’installation de l’application serveur Teamspeak 6. Pour installer le serveur TeamSpeak 6, téléchargez d’abord le fichier de la dernière version `http://teamspeak-server_win64-v6.0.0-beta6.zip/` depuis GitHub : [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Ensuite, extrayez le fichier dans un dossier de votre choix. Ouvrez **PowerShell** et naviguez jusqu’au dossier où vous avez extrait les fichiers du serveur. Lancez le serveur en exécutant :

```
.\tsserver.exe
```

Au premier démarrage, une fenêtre avec le contrat de licence apparaîtra, que vous devez accepter. Ensuite, les identifiants du compte administrateur Server Query et la clé de privilège seront affichés. Ces informations ne sont montrées qu’une seule fois, pensez donc à les sauvegarder précieusement.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Une fois confirmé, le serveur TeamSpeak 6 tournera déjà en arrière-plan et sera prêt à l’emploi.

##### 

## Configuration

Vous pouvez aussi ajuster des paramètres supplémentaires pour le **serveur TeamSpeak 6** via des **arguments en ligne de commande**. Les options sont passées directement au démarrage du serveur. La liste complète des options disponibles se trouve dans la documentation officielle [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Exemple :

```
./tsserver --default-voice-port 9987
```



## Connexion

Une fois le serveur TeamSpeak 6 lancé, vous pouvez vous connecter avec le client TeamSpeak 6. Il suffit d’utiliser l’adresse IP de votre serveur avec le port adéquat. Entrez ces infos dans le client pour vous connecter à votre serveur et commencer à tester.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré avec succès le serveur Teamspeak 6 sur votre serveur dédié. On vous recommande aussi de jeter un œil aux ressources suivantes, qui peuvent vous apporter un coup de main et des conseils pendant la configuration de votre serveur :

- [Site officiel](https://teamspeak.com/en/) - Infos et téléchargements pour TeamSpeak 6
- [Forum communautaire](https://community.teamspeak.com/) - Support utilisateur et discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Signaler des bugs et suivre les problèmes ouverts

Vous avez des questions spécifiques qui ne sont pas couvertes ici ? Pour toute autre question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂