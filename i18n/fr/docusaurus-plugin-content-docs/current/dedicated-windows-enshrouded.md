---
id: dedicated-windows-enshrouded
title: "Serveur dédié : Configuration du serveur dédié Enshrouded sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Enshrouded sur votre VPS Windows ou serveur dédié → En savoir plus maintenant"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le service serveur dédié Enshrouded dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Comment configurer un serveur dédié Enshrouded sur un VPS Windows !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez configurer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, dans cet exemple nous l’appellerons `steamcmd`. Rendez-vous dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Maintenant, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec une application comme 7zip ou Winrar. Cela devrait extraire un fichier **steamcmd.exe**.

Lancez simplement **steamcmd.exe** et attendez que le processus d’installation soit complètement terminé.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez commencer l’installation du serveur dédié Enshrouded dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée précédemment. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous**, avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\Enshrouded-Server
```
:::

Lancez maintenant la commande `app_update 2278520` qui va démarrer le téléchargement. L’ID d’application **2278520** correspond à **Enshrouded**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rendez-vous dans le dossier où tous les fichiers du serveur ont été téléchargés. Ici, vous pouvez utiliser **enshrouded_server.exe** pour démarrer le serveur. Cependant, on vous recommande d’abord de configurer le port forwarding et de configurer votre serveur.

### Configuration du port forwarding de votre serveur

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
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur Enshrouded soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la fonction de recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si vous ouvrez la page de base du Pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Vous devez créer de nouvelles règles pour votre serveur Enshrouded. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 15636-15637
- UDP entrant et sortant : 15636-15637

N’hésitez pas à consulter notre guide [Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous y connecter via l’adresse IP de votre serveur. Pour cela, sélectionnez votre personnage dans le menu principal, allez dans l’onglet **Trouver des parties** et cliquez sur **Ajouter un serveur**. Entrez ici l’adresse IP de votre serveur ainsi que le port (15636 par défaut) et le mot de passe du serveur (si défini, sinon laissez vide).

:::tip
Jetez un œil à notre guide [Configuration du serveur](enshrouded-configuration.md) si vous souhaitez activer un mot de passe pour votre serveur et ajuster les paramètres.
:::

On vous conseille de configurer d’abord les paramètres de votre serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Enshrouded. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

Tout d’abord, rendez-vous dans le répertoire suivant :
```
..EnshroudedServer/ (répertoire racine)
```

Vous y trouverez le fichier de configuration **enshrouded_server.json**. Ce fichier vous permet de configurer plusieurs paramètres de votre serveur. Consultez notre guide [Configuration du serveur](enshrouded-configuration.md) pour découvrir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal de votre serveur Enshrouded et lancez **enshrouded_server.exe** pour démarrer le processus. Cela ouvrira la console du serveur dans une invite de commande et lancera le démarrage. Vous pourrez alors vous connecter directement à votre serveur en allant dans l’onglet **Trouver des parties**, en cliquant sur **Ajouter un serveur** et en entrant l’adresse IP et le port de votre serveur (15636 par défaut).

Vous avez installé avec succès Enshrouded sur votre serveur dédié Windows.

<InlineVoucher />