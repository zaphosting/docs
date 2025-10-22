---
id: dedicated-windows-mythofempires
title: "Serveur dédié : Configuration du serveur dédié Myth of Empires sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Myth of Empires sur votre VPS Windows → En savoir plus maintenant"
sidebar_label: Configuration Serveur MOE dédié
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Windows et vous souhaitez installer un serveur MOE dédié dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Comment configurer un serveur Myth Of Empires sur VPS Windows !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>

<InlineVoucher />

## Préparation
Pour commencer, connectez-vous à votre VPS via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici on l’appellera `steamcmd`. Allez dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec une application comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur MOE dédié dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commandes **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\MOE-Server
```
:::

Lancez maintenant la commande `app_update 1794810` qui va démarrer le téléchargement. L’ID de l’application **1794810** correspond à **MOE**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois terminé, rendez-vous dans le dossier de téléchargement où tous les fichiers du serveur ont été récupérés.

### Accéder à PrivateServerTool

Contrairement aux installations SteamCMD classiques, MOE nécessite que vous récupériez un dossier depuis votre installation locale du jeu Steam pour pouvoir lancer le serveur sous Windows.

Ouvrez Steam sur votre PC, faites un clic droit sur votre jeu **Myth of Empires** et sélectionnez **Parcourir les fichiers locaux** en survolant la section **Gérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Dans le dossier racine qui s’ouvre, trouvez le dossier **PrivateServerTool**. C’est ce dossier que vous devrez copier sur votre serveur. Vous pouvez facilement faire un `CTRL+C` pour copier sur votre PC local, puis un `CTRL+V` pour coller dans votre serveur Windows via RDP. Veillez à le coller dans le répertoire racine de votre serveur dédié.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ensuite, passez à la section suivante pour configurer le port forwarding et paramétrer votre serveur.

### Configurer le port forwarding de votre serveur

Pour que votre serveur soit accessible publiquement, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes Powershell (plus simple), soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la barre de recherche Windows et tapez **Powershell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour que les permissions soient correctes et que tout fonctionne.

:::info
Assurez-vous d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur MOE soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si vous êtes sur la page de base du Pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Vous devez créer de nouvelles règles pour votre serveur MOE. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 11888, 12888
- UDP entrant et sortant : 11888, 12888

Utilisez notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Passez à la section suivante avant d’accéder à votre serveur pour créer votre fichier de configuration et le fichier de démarrage `.bat`.

## Configuration

Vous allez maintenant utiliser l’outil serveur situé dans le dossier que vous avez copié précédemment depuis vos fichiers de jeu, pour créer votre fichier de configuration et le fichier `.bat` de démarrage que vous utiliserez pour lancer votre serveur.

Allez dans ce répertoire (le dossier que vous avez copié) :
```
../MOE/PrivateServerTool
```

Dans ce dossier, lancez le fichier **PrivateServerTool.exe**. Avec cet outil, configurez les options du serveur selon vos préférences, y compris les mods, les réglages du jeu et bien plus.

On recommande de configurer au moins les paramètres de base comme le **Nom du serveur** avant de continuer.

Quand vous êtes prêt, allez dans l’onglet **Start Console** de l’outil, cliquez sur **Save Config** puis sur **Start Server**. Cela va générer le fichier `StartPrivateServer.bat` que vous utiliserez pour démarrer votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

On conseille de créer un raccourci vers votre fichier `StartPrivateServer.bat` en faisant un clic droit et en choisissant **Créer un raccourci**, pour faciliter le lancement.

:::note
Il se peut que vous deviez modifier le chemin vers votre dossier de jeu dans le fichier `StartPrivateServer.bat` généré automatiquement. Ouvrez simplement le fichier avec un outil comme le bloc-notes et vérifiez que le chemin au début du fichier correspond bien au chemin où se trouve le serveur.

Si le chemin est incorrect, vous pouvez double-cliquer sur la barre d’adresse en haut quand vous êtes dans le dossier racine de votre serveur MOE dédié pour copier le chemin actuel, puis le coller au bon endroit dans le fichier.
:::

## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le dossier de votre serveur Myth of Empires et lancez **StartPrivateServer.bat** (ou le raccourci si vous en avez créé un) pour démarrer le processus. Cela ouvrira la console du serveur dans une invite de commandes et lancera le démarrage. Vous pourrez ensuite vous connecter directement à votre serveur en allant dans l’onglet **Custom Server** et en cherchant votre serveur via la barre de recherche.

:::tip
Si vous avez des problèmes pour vous connecter au serveur, ouvrez votre fichier `StartPrivateServer.bat` avec un outil comme le bloc-notes et vérifiez que les deux paramètres IP correspondent bien à l’adresse IP de votre serveur Windows. Cela devrait être rempli automatiquement par l’outil utilisé, mais c’est une bonne étape de dépannage.
:::

Vous avez installé avec succès Myth of Empires sur votre serveur dédié Windows.

<InlineVoucher />