---
id: vserver-windows-ts6
title: "Installer un serveur TeamSpeak 6 sur un serveur Windows - Déploie ta propre plateforme vocale"
description: "Découvre comment installer et optimiser la bêta du serveur TeamSpeak 6 pour un hébergement fluide et performant → En savoir plus maintenant"
sidebar_label: Installer le serveur Teamspeak 6
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

À l'été 2025, TeamSpeak a lancé la **version bêta** du **serveur TeamSpeak 6**. Tu peux maintenant tester la prochaine génération de TeamSpeak en avant-première !

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />

## Prérequis

Avant d’installer le **serveur Teamspeak 6**, assure-toi que ton environnement d’hébergement respecte les exigences suivantes pour garantir une installation sans accroc et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 cœur vCPU  | 4 cœurs vCPU               |
| RAM        | 1 Go         | 4 Go                       |
| Espace disque | 1 Go       | 25 Go                      |

## Préparation

Avant de configurer le **serveur TeamSpeak 6**, tu dois préparer ton système. Pour t’assurer que ton système tourne avec les dernières mises à jour logicielles et de sécurité, commence toujours par faire une mise à jour complète.

Ça garantit que ton système dispose des derniers patchs de sécurité et des versions logicielles à jour avant de continuer.

## Installation

Maintenant que tous les prérequis sont remplis et que la préparation est faite, tu peux passer à l’installation de l’application serveur TeamSpeak 6. Pour installer le serveur TeamSpeak 6, commence par télécharger le dernier fichier de release `http://teamspeak-server_win64-v6.0.0-beta6.zip/` depuis GitHub : [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Ensuite, décompresse le fichier dans un dossier de ton choix. Ouvre **PowerShell** et rends-toi dans le dossier où tu as extrait les fichiers du serveur. Lance le serveur avec la commande :

```
.\tsserver.exe
```

Au premier démarrage, une fenêtre avec le contrat de licence apparaîtra, il faudra l’accepter. Ensuite, les identifiants du compte administrateur Server Query et la clé de privilège seront affichés. Ces infos ne s’affichent qu’une seule fois, alors pense bien à les sauvegarder en lieu sûr.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Une fois validé, le serveur TeamSpeak 6 tournera déjà en arrière-plan et sera prêt à l’emploi.

##### 

## Configuration

Tu peux aussi ajuster des paramètres supplémentaires pour le **serveur TeamSpeak 6** via des **arguments en ligne de commande**. Les options sont passées directement au lancement du serveur. La liste complète des options est dispo dans la doc officielle [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Exemple :

```
./tsserver --default-voice-port 9987
```

## Connexion

Une fois le serveur TeamSpeak 6 lancé, tu peux te connecter avec le client TeamSpeak 6. Il suffit d’utiliser l’adresse IP de ton serveur avec le port adéquat. Entre ces infos dans le client pour te connecter à ton serveur et commencer à tester.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré avec succès le serveur Teamspeak 6 sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui pourront t’aider et te guider encore plus dans ta configuration serveur :

- [Site officiel](https://teamspeak.com/en/) - Infos et téléchargements pour TeamSpeak 6  
- [Forum communautaire](https://community.teamspeak.com/) - Support utilisateur et discussions  
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Signaler des bugs et suivre les problèmes ouverts  

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute autre question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂