---
id: dedicated-windows-openmp
title: "Serveur dédié : Configuration du serveur dédié Open.mp sous Windows"
description: "Découvrez comment configurer et lancer un serveur dédié open.mp sous Windows pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Windows et tu veux installer le service serveur dédié open.mp dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via Remote Desktop (RDP). Si tu as besoin d’aide, utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

Une fois connecté à ton serveur, télécharge la dernière version depuis le [dépôt GitHub open.mp](https://github.com/openmultiplayer/open.mp/releases). Assure-toi de choisir la version **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

Une fois le fichier téléchargé, décompresse-le avec un outil comme 7zip ou WinRAR. Tu obtiendras un dossier **Server** contenant tous les fichiers nécessaires au serveur.

Pour lancer le serveur, il suffit d’exécuter **omp-server.exe** et le serveur commencera à démarrer. Cependant, on te recommande d’abord de configurer le port forwarding et ton serveur.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Configuration du port forwarding pour ton serveur

Pour que ton serveur soit accessible publiquement, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux le faire soit via des commandes PowerShell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

:::tip
Au premier lancement, une invite UAC devrait apparaître. Si tu acceptes, les règles du pare-feu seront automatiquement configurées, tu pourras alors passer à la section suivante. Sinon, suis une des méthodes ci-dessous.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **PowerShell**. Clique droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console PowerShell :
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles de pare-feu nécessaires pour que ton serveur open.mp soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Si tu ouvres la page de base du pare-feu, clique sur **Paramètres avancés** pour accéder à la bonne fenêtre.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur open.mp. Pour cela, ajoute des règles entrantes et sortantes pour les protocoles et ports suivants :
- TCP entrant et sortant : 7777
- UDP entrant et sortant : 7777

Si tu as besoin d’aide, consulte notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras donc te connecter via l’adresse IP de ton serveur.

On te conseille de configurer ton serveur avant d’y accéder, comme expliqué dans la section suivante.

## Configuration

À ce stade, l’installation de ton serveur open.mp est terminée. Tu peux configurer davantage ton serveur via un fichier de configuration.

Retourne dans le dossier racine. Trouve et ouvre le fichier **config.json**. Dans ce fichier, tu peux modifier plein de paramètres du serveur, comme le port, le mot de passe, et bien plus.

Par exemple, voici quelques options de configuration déjà définies :
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Consulte notre [guide de configuration serveur](openmp-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier racine et exécute **omp-server.exe** pour démarrer le serveur. Une console s’ouvrira dans une invite de commandes et le serveur commencera à se lancer.

Tu pourras ensuite te connecter directement à ton serveur en jeu via le launcher open.mp. Si tu veux que ton serveur apparaisse dans la liste des serveurs, vérifie dans notre [guide de configuration serveur](openmp-configuration.md) que le paramètre `enable_query` est bien à true (c’est normalement la valeur par défaut). Sauvegarde le fichier et relance le serveur.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur open.mp sur ton serveur dédié ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !