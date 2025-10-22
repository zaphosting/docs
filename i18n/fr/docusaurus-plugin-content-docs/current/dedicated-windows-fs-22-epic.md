---
id: dedicated-windows-fs-22-epic
title: "Serveur dédié : Farming Simulator 2022 (Epic Games) Configuration Serveur Dédié Windows"
description: "Découvrez comment configurer un serveur dédié pour Farming Simulator 22 version Epic Games avec des performances optimisées et des exigences spécifiques → En savoir plus maintenant"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
La configuration d’un serveur pour la version Epic Games de Farming Simulator 22 diffère un peu du processus pour un serveur classique. Ce guide vous accompagne étape par étape, en mettant l’accent sur les particularités de la version Epic Games.

<InlineVoucher />

## Préparation

Avant de commencer, assurez-vous que votre configuration répond aux exigences suivantes :
- **Système d’exploitation :** Windows Server 2016/2019 (64 bits)
- **CPU :** Au moins 4x 2,4 GHz (AMD/Intel)
- **RAM :** Minimum 4 Go (DDR3/4)
- **Espace disque :** Au moins 50 Go libres (SSD ou mieux recommandé)
- **Compte Epic Games :** Un compte Epic Games possédant Farming Simulator 22.

:::info
Lorsque vous lancez le serveur, vous ne pouvez pas héberger le serveur et jouer avec le même compte Epic Games. Cela signifie que vous aurez besoin d’une seconde copie du jeu sur un autre compte si vous souhaitez jouer sur le serveur.
:::

## Étape 1 : Préparation à l’installation du serveur
Commencez par vous connecter à votre serveur via Remote Desktop (RDP). Si vous avez besoin d’aide, consultez notre [Accès Initial (RDP)](vserver-windows-userdp.md).

Une fois connecté, vous devez installer un prérequis nécessaire, Microsoft Visual C++ Redistribuable, téléchargeable depuis le [site de Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Après téléchargement, suivez les instructions à l’écran pour finaliser l’installation.

:::tip
Il est possible que vous ayez déjà les outils C++ Redistribuables installés, dans ce cas l’installateur peut renvoyer une erreur. Vous pouvez l’ignorer sans problème et continuer.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Ensuite, installez le launcher Epic Games, téléchargeable depuis le [site d’Epic Games](https://store.epicgames.com/en-US/download). Suivez à nouveau les instructions à l’écran pour terminer l’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Après l’installation, il est très probable que le launcher doive télécharger quelques fichiers supplémentaires et mises à jour avant de se lancer.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Une fois le launcher ouvert, connectez-vous avec votre compte Epic Games, celui qui possède Farming Simulator 2022 dans sa bibliothèque.

## Étape 2 : Téléchargement de Farming Simulator 2022

Dans le launcher Epic Games, cliquez sur l’onglet **Bibliothèque** et localisez Farming Simulator 22. Utilisez le bouton **Installer** et choisissez l’emplacement où vous souhaitez télécharger le jeu.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Vous devrez maintenant attendre la fin du téléchargement et de l’installation. La vitesse dépendra de la bande passante de votre serveur.

## Étape 3 : Configuration des options de lancement

Une fois le jeu installé, retournez dans l’onglet **Bibliothèque** du launcher Epic Games. Trouvez Farming Simulator 22, cliquez sur les trois points à côté et sélectionnez **Gérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Descendez jusqu’à la section **Options de lancement** et activez-la. Dans la zone de texte qui apparaît, entrez `-server` puis fermez le menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Étape 4 : Lancement du serveur

Vous pouvez maintenant démarrer Farming Simulator 2022 depuis votre launcher Epic Games ou le raccourci sur le bureau. Le jeu devrait se lancer via une invite de commande (CMD) en mode serveur dédié. Si ce n’est pas le cas, vérifiez que vous avez bien configuré l’option de lancement.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Étape 5 : Activation de l’interface web (optionnel)

Les serveurs dédiés Farming Simulator 22 disposent d’une interface web que vous pouvez activer pour votre serveur. C’est optionnel, mais ça peut être super utile pour ajuster les réglages et accéder à plein d’infos, donc on recommande de l’activer.

Avant de continuer, assurez-vous de fermer le serveur en quittant l’invite de commande. Cela évite que les modifications que vous allez faire soient écrasées.

Allez dans le chemin d’installation du jeu, généralement `C:\Program Files\Epic Games\FarmingSimulator22` si vous avez installé dans le dossier par défaut.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Trouvez et ouvrez le fichier `dedicatedServer.xml` à la racine avec un éditeur de texte comme Notepad.

Modifiez les champs pour définir le nom d’utilisateur et le mot de passe admin : 
```xml
  <initial_admin>
    <username>admin</username> //nom d’utilisateur
    <passphrase>votre_mot_de_passe</passphrase> //mot de passe
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

N’oubliez pas de sauvegarder avant de fermer, puis lancez `dedicatedServer.exe` qui se trouve dans le même dossier racine.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Vous devriez maintenant pouvoir accéder à l’interface web en allant sur `http://[votre_ip_serveur]:8080` dans votre navigateur, en remplaçant `[votre_ip_serveur]` par l’adresse IP de votre serveur. Si vous êtes directement sur le serveur, vous pouvez aussi utiliser `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
À cause de la configuration spécifique de la version Epic Games, vous pouvez rencontrer des limitations avec l’interface web. Par exemple, vous pouvez faire des modifications et arrêter le serveur via l’interface, mais vous ne pouvez pas lancer le serveur depuis celle-ci.

Si vous avez des soucis, arrêtez d’abord dedicatedServer.exe, lancez Farming Simulator 22 directement pour vérifier que le serveur fonctionne, puis relancez dedicatedServer.exe pour activer l’interface web.

Il est important de lancer le serveur **d’abord** puis l’interface web **ensuite**, sinon Epic Games peut détecter les deux comme le même fichier et empêcher le lancement du serveur principal.
:::

## Étape 6 : Redirection de ports

Pour que votre serveur soit accessible publiquement, vous devez configurer la redirection des ports utilisés par le processus du serveur dédié. Vous pouvez le faire via des commandes PowerShell, ce qui est plus simple, ou via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la recherche Windows et tapez **PowerShell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour avoir les droits nécessaires.

:::info
Assurez-vous d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans PowerShell :
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles nécessaires dans le pare-feu pour que votre serveur Farming Simulator 22 soit accessible.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour accéder à la fenêtre complète si vous ouvrez la page de base du pare-feu.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Créez de nouvelles règles pour votre serveur Farming Simulator 22. Pour cela, ajoutez des règles entrantes et sortantes pour les protocoles et ports suivants :
- TCP entrant et sortant : 3724, 27015
- UDP entrant et sortant : 3724, 27015

Si besoin, consultez notre [guide Redirection de Ports (Pare-feu)](vserver-windows-port.md) pour plus d’aide.

</TabItem>
</Tabs>

## Étape 7 : Connexion au serveur
Lancez le jeu et allez dans le menu multijoueur. Cherchez le nom du serveur, visible dans l’interface web et personnalisable.

Une fois trouvé, cliquez dessus pour vous connecter. Si un mot de passe est demandé, entrez-le, il est aussi visible dans l’interface web.

Vous avez installé avec succès Farming Simulator 22 (version Epic Games) sur votre serveur dédié Windows.

<InlineVoucher />