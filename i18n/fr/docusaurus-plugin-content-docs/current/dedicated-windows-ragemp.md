---
id: dedicated-windows-ragemp
title: "Serveur dédié : Configuration du serveur dédié RageMP sous Windows"
description: "Apprenez à configurer un serveur dédié RageMP sur votre serveur Windows pour héberger des sessions multijoueur GTA V → Découvrez-le maintenant"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Windows et tu veux installer le service serveur dédié RageMP dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur.

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via Remote Desktop (RDP). Utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si tu as besoin d’aide pour ça.

Une fois connecté à ton serveur, commence par installer le [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe) car c’est une dépendance obligatoire pour RageMP. Assure-toi que c’est bien installé avant de continuer. Si tu ne sais pas si tu l’as déjà, lance l’installateur, il te le dira pendant l’installation.

Quand la dépendance est installée, télécharge la dernière version du serveur depuis le [site officiel de RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Si tu as déjà RageMP installé, tu peux passer directement à la sous-section **Changer de branche serveur**. Pas besoin de réinstaller RageMP.
:::

## Installation

Une fois le fichier téléchargé, lance l’exécutable **RAGEMultiplayer_Setup.exe** et suis les étapes d’installation. Tu pourras choisir le chemin d’installation, ce qu’on te recommande de faire.

Maintenant que RageMP est installé, lance l’application **RAGE Multiplayer** qui devrait être accessible dans tes applications Windows.

Au premier lancement, tu devras indiquer le chemin vers le dossier d’installation de GTA:V. Le répertoire dépend du launcher avec lequel tu as installé le jeu, et par défaut il se trouve sous `C:/Program Files` ou `C:/Program Files (x86)`.

Tu vas maintenant devoir changer la branche pour télécharger les fichiers serveur.

### Changer de branche serveur

Va dans le dossier où RageMP a été installé. Trouve le fichier **config.xml** dans ce dossier. Modifie le paramètre `channel` de `prerelease` à `prerelease_server` et sauvegarde le fichier.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Lance ensuite l’exécutable **updater.exe** qui téléchargera les fichiers serveur nécessaires selon le changement de branche. Tu verras un nouveau dossier **server-files** apparaître dans ton répertoire RageMP, c’est celui dont tu auras besoin.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Tu peux maintenant remettre le paramètre `channel` à `prerelease` et relancer **update.exe** pour revenir à la version client et pouvoir rejouer.

:::tip
Tu peux déplacer les fichiers serveur et renommer le dossier comme tu veux, par exemple sur ton bureau. Tu n’es pas obligé de lancer ça dans le dossier `RAGEMP`.
:::

Pour démarrer le serveur, lance simplement **ragemp-server.exe** qui se trouve dans le dossier `server-files` ou dans ton dossier serveur, et le serveur va démarrer. Par contre, on te conseille de configurer le port forwarding et ton serveur avant.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Configurer le port forwarding de ton serveur

Pour que ton serveur soit accessible publiquement, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux faire ça soit via des commandes PowerShell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

:::tip
Le premier lancement du serveur devrait afficher une invite UAC. Si tu acceptes, les règles de pare-feu seront automatiquement configurées, tu pourras passer à la section suivante. Sinon, suis une des méthodes ci-dessous.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvre la barre de recherche Windows et cherche **PowerShell**. Pense bien à faire un clic droit et **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi de lancer PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console PowerShell :

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Ces commandes vont créer automatiquement les règles de pare-feu nécessaires pour que ton serveur RageMP soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu es sur la page de base du pare-feu.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur RageMP. Pour ça, clique sur les règles entrantes et sortantes comme décrit ci-dessous et ajoute-les pour les protocoles et ports suivants :

- TCP entrant et sortant : 22005
- UDP entrant et sortant : 22005

Si tu as besoin d’aide, consulte notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras donc te connecter via l’adresse IP de ton serveur.

On te recommande de configurer ton serveur avant d’y accéder, comme expliqué dans la section suivante.

## Configuration

À ce stade, l’installation de ton serveur RageMP est terminée. Tu peux faire des réglages supplémentaires via un fichier de configuration.

Retourne dans le dossier racine. Trouve et ouvre le fichier **conf.json**. Dans ce fichier, tu peux modifier plusieurs paramètres du serveur, comme le port, le nom du serveur, etc.

Voici quelques exemples de paramètres configurés :

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Démarrer & se connecter à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier `server-files` ou ton dossier serveur et lance **ragemp-server.exe** pour démarrer le serveur. Une console s’ouvrira dans une invite de commandes et le serveur commencera à se lancer.

Tu pourras maintenant te connecter directement à ton serveur en jeu via le launcher RageMP.

## Conclusion

Félicitations, tu as installé et configuré avec succès le serveur RageMP sur ton serveur dédié ! Si tu as d’autres questions ou problèmes, contacte notre support, dispo tous les jours pour t’aider !