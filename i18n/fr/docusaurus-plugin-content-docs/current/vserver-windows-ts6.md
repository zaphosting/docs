---
id: vserver-windows-ts6
title: "VPS : Installer un serveur Teamspeak 6 sur votre VPS Windows"
description: "Découvrez comment installer et optimiser la bêta du serveur TeamSpeak 6 pour un hébergement fluide et performant → En savoir plus maintenant"
sidebar_label: Installer le serveur Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

À l'été 2025, TeamSpeak a lancé la **version bêta** du **serveur TeamSpeak 6**. Vous pouvez maintenant découvrir la prochaine génération de TeamSpeak en avant-première !

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Prérequis

Avant d’installer le **serveur Teamspeak 6**, assurez-vous que votre environnement d’hébergement respecte les exigences suivantes pour garantir une installation sans accroc et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cœurs | 4 vCPU Cœurs               |
| RAM        | 1 Go         | 4 Go                       |
| Espace disque | 1 Go       | 25 Go                      |



## Préparation

Avant de configurer le **serveur TeamSpeak 6**, il faut préparer votre système. Pour être sûr que votre système tourne avec les dernières mises à jour logicielles et de sécurité, commencez toujours par faire une mise à jour complète.

Ça garantit que votre système dispose des derniers patchs de sécurité et des versions logicielles à jour avant de continuer.




## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, vous pouvez lancer l’installation de l’application serveur Teamspeak 6. Pour installer le serveur TeamSpeak 6, commencez par télécharger la dernière version `http://teamspeak-server_win64-v6.0.0-beta6.zip/` depuis GitHub : [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Ensuite, extrayez le fichier dans un dossier de votre choix. Ouvrez **PowerShell** et rendez-vous dans le dossier où vous avez extrait les fichiers du serveur. Lancez le serveur avec la commande :

```
.\tsserver.exe
```

Au premier démarrage, une fenêtre avec le contrat de licence apparaîtra, que vous devrez accepter. Ensuite, les identifiants du compte administrateur Server Query et la clé de privilège seront affichés. Ces infos ne s’affichent qu’une seule fois, alors pensez à bien les sauvegarder.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Une fois validé, le serveur TeamSpeak 6 tourne déjà en arrière-plan et est prêt à l’emploi.

##### 

## Configuration

Vous pouvez aussi ajuster des paramètres supplémentaires pour le **serveur TeamSpeak 6** via des **arguments en ligne de commande**. Les options sont passées directement au lancement du serveur. La liste complète des options est dispo dans la doc officielle [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md). Exemple :

```
./tsserver --default-voice-port 9987
```



## Connexion

Une fois le serveur TeamSpeak 6 lancé, vous pouvez vous connecter avec le client TeamSpeak 6. Il suffit d’utiliser l’adresse IP de votre serveur avec le port adéquat. Entrez ces infos dans le client pour vous connecter à votre serveur et commencer à tester.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusion et ressources supplémentaires

Félicitations ! Vous avez installé et configuré avec succès le serveur Teamspeak 6 sur votre VPS. On vous conseille aussi de jeter un œil aux ressources suivantes, qui peuvent vous aider et vous guider encore plus dans la configuration de votre serveur :

- [Site officiel](https://teamspeak.com/en/) - Infos et téléchargements pour TeamSpeak 6
- [Forum communautaire](https://community.teamspeak.com/) - Support utilisateur et discussions
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Signaler des bugs et suivre les problèmes ouverts

Vous avez des questions spécifiques qui ne sont pas couvertes ici ? Pour toute autre demande ou assistance, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂