---
id: vserver-windows-openmp
title: "VPS : Configuration d’un serveur dédié Open.mp sous Windows"
description: "Apprends à installer et configurer un serveur dédié open.mp sur ton VPS Windows pour un gaming multijoueur fluide → Découvre tout maintenant"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows et tu veux installer le service serveur dédié open.mp dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via Remote Desktop (RDP). Si tu as besoin d’aide, utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

Une fois connecté à ton serveur, télécharge la dernière version depuis le [dépôt GitHub open.mp](https://github.com/openmultiplayer/open.mp/releases). Assure-toi de choisir la version **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

Une fois le fichier téléchargé, décompresse-le avec un outil comme 7zip ou WinRAR. Tu obtiendras un dossier **Server** contenant tous les fichiers nécessaires au serveur.

Pour lancer le serveur, il suffit d’exécuter **omp-server.exe** et le serveur démarrera. Mais on te conseille d’abord de configurer le port forwarding et ton serveur.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Configurer le port forwarding de ton serveur

Pour que ton serveur soit accessible publiquement, tu dois modifier les règles de redirection des ports utilisés par le serveur dédié. Tu peux le faire via des commandes PowerShell, ce qui est plus simple, ou via la page du pare-feu Windows Defender.

:::tip
Au premier lancement, une fenêtre UAC devrait apparaître. Si tu acceptes, les règles du pare-feu seront automatiquement configurées, tu pourras passer à la section suivante. Sinon, suis une des méthodes ci-dessous.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvre la barre de recherche Windows, cherche **PowerShell**. Clique droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans PowerShell :
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles pare-feu nécessaires pour que ton serveur open.mp soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir **Paramètres du pare-feu Windows avec sécurité avancée**. Si tu ouvres la page de base du pare-feu, clique sur **Paramètres avancés** pour accéder à la bonne fenêtre.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Crée de nouvelles règles pour ton serveur open.mp. Clique sur les règles entrantes et sortantes comme expliqué, et ajoute-les pour ces protocoles et ports :
- TCP entrant et sortant : 7777
- UDP entrant et sortant : 7777

Si tu as besoin d’aide, consulte notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras te connecter via l’adresse IP de ton serveur.

On te conseille de configurer ton serveur avant d’y accéder, comme expliqué dans la section suivante.

## Configuration

À ce stade, l’installation de ton serveur open.mp est terminée. Tu peux configurer davantage ton serveur via un fichier de configuration.

Retourne dans le dossier racine. Trouve et ouvre le fichier **config.json**. Tu peux y modifier plein de paramètres du serveur, comme le port, le mot de passe, et bien plus.

Par exemple, voici quelques options configurées :
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Consulte notre [guide de configuration serveur](openmp-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrer & se connecter à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier racine et exécute **omp-server.exe** pour démarrer le serveur. Une console s’ouvrira dans une invite de commandes et le serveur commencera à se lancer.

Tu pourras ensuite te connecter directement à ton serveur en jeu via le launcher open.mp. Si tu veux que ton serveur apparaisse dans la liste des serveurs, vérifie dans notre [guide de configuration serveur](openmp-configuration.md) que le paramètre `enable_query` est bien à true (c’est normalement la valeur par défaut). Sauvegarde le fichier et relance le serveur.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur open.mp sur ton VPS ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />