---
id: dedicated-windows-mythofempires
title: "Serveur dédié : Configuration du serveur dédié Myth of Empires sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Myth of Empires sur votre VPS Windows → En savoir plus maintenant"
sidebar_label: Configuration Serveur MOE
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Windows et vous souhaitez installer un serveur dédié MOE dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Comment configurer un serveur Myth Of Empires sur VPS Windows !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>



## Préparation
Pour commencer, connectez-vous à votre VPS via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez configurer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, dans cet exemple nous l’appellerons `steamcmd`. Rendez-vous dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Maintenant, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applications comme 7zip ou Winrar. Cela devrait extraire un fichier **steamcmd.exe**.

Lancez simplement **steamcmd.exe** et attendez que le processus d’installation soit complètement terminé.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié MOE dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée précédemment. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\MOE-Server
```
:::
 
Lancez maintenant la commande `app_update 1794810` qui va démarrer le téléchargement. L’ID de l’application **1794810** correspond à **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Cela peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois terminé, rendez-vous dans le répertoire de téléchargement où tous les fichiers du serveur ont été téléchargés.

### Accéder à PrivateServerTool

Contrairement aux installations SteamCMD classiques, MOE nécessite que vous récupériez un dossier depuis votre installation locale du jeu Steam pour pouvoir lancer le serveur sous Windows.

Ouvrez Steam sur votre système, faites un clic droit sur votre jeu **Myth of Empires** et sélectionnez **Parcourir les fichiers locaux** en survolant la section **Gérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Dans le dossier racine qui s’ouvre, trouvez le dossier **PrivateServerTool**. C’est ce dossier que vous devrez copier sur votre serveur. Vous pouvez facilement le faire en utilisant `CTRL+C` pour copier sur votre PC local, puis `CTRL+V` pour coller dans votre serveur Windows via RDP. Assurez-vous de le coller dans le répertoire racine de votre serveur dédié.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ensuite, passez à la section suivante pour configurer le port forwarding et configurer votre serveur.

### Configurer le port forwarding de votre serveur

Pour que votre serveur soit accessible au public, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes Powershell, ce qui est plus simple, soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la barre de recherche Windows et cherchez **Powershell**. Faites un clic droit et sélectionnez **Exécuter en tant qu’administrateur** pour que les permissions soient correctes et que tout fonctionne bien.

:::info
Assurez-vous d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite les commandes suivantes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur MOE soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si vous ouvrez la page de base du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Vous devez créer de nouvelles règles pour votre serveur MOE. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 11888, 12888
- UDP entrant et sortant : 11888, 12888

Utilisez notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Passez à la section suivante avant d’accéder à votre serveur pour créer votre fichier de configuration et le fichier de démarrage `.bat`.

## Configuration

Vous allez maintenant utiliser l’outil serveur situé dans le dossier que vous avez copié précédemment depuis vos fichiers de jeu, pour créer votre fichier de configuration et le fichier de démarrage `.bat` que vous utiliserez pour lancer votre serveur.

Naviguez vers le répertoire suivant (le dossier que vous avez copié) :
```
../MOE/PrivateServerTool
```

Dans ce dossier, lancez le fichier **PrivateServerTool.exe**. Avec cet outil, configurez les options du serveur selon vos préférences, y compris les mods, les réglages du jeu et bien plus.

On recommande de configurer au moins les paramètres de base comme le **Nom du serveur** avant de continuer.

Une fois prêt, rendez-vous simplement dans l’onglet **Start Console** de l’outil, cliquez sur le bouton **Save Config** puis sur **Start Server**. Cela générera le fichier `StartPrivateServer.bat` que vous utiliserez pour démarrer votre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

On recommande de créer un raccourci vers votre fichier `StartPrivateServer.bat` en faisant un clic droit et en sélectionnant **Créer un raccourci**, pour faciliter le démarrage.

:::note
Il se peut que vous deviez modifier le chemin vers votre dossier de jeu dans le fichier `StartPrivateServer.bat` généré automatiquement. Ouvrez simplement le fichier avec un outil comme le bloc-notes et vérifiez que le chemin au début du fichier correspond bien au chemin où se trouve le serveur.

Si le chemin est incorrect, vous pouvez double-cliquer sur la barre d’adresse en haut lorsque vous êtes dans le dossier racine de votre serveur MOE dédié pour copier le chemin actuel, puis le coller au bon endroit dans le fichier.
:::

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire de votre serveur Myth of Empires et lancez **StartPrivateServer.bat** (ou le raccourci si vous en avez créé un) pour lancer le processus de démarrage. Cela ouvrira la console du serveur dans une invite de commande et lancera le démarrage. Vous pourrez ensuite vous connecter directement à votre serveur en allant dans l’onglet **Custom Server** et en recherchant votre serveur via la barre de recherche.

:::tip
Si vous avez des problèmes pour vous connecter au serveur, ouvrez votre fichier `StartPrivateServer.bat` avec un outil comme le bloc-notes et vérifiez que les deux paramètres IP correspondent bien à l’adresse IP de votre serveur Windows. Cela devrait être automatiquement rempli par l’outil utilisé, mais c’est une bonne étape de dépannage.
:::

Vous avez installé avec succès Myth of Empires sur votre serveur dédié Windows.