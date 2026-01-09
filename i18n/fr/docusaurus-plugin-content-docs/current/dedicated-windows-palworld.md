---
id: dedicated-windows-palworld
title: "Serveur dédié : Installation du serveur dédié Palworld sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Palworld sur votre VPS ou serveur Windows → En savoir plus maintenant"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le service serveur dédié Palworld dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Comment configurer un serveur dédié Palworld sur un VPS Windows !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>



## Préparation

Pour commencer, connectez-vous à votre VPS via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez installer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici nous l’appellerons `steamcmd`. Allez dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec un logiciel comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié Palworld dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\Palworld-Server
```
:::

Lancez maintenant la commande `app_update 2394010` qui va démarrer le téléchargement. L’ID de l’application **2394010** correspond à **Palworld**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rendez-vous dans le dossier où tous les fichiers du serveur ont été téléchargés. Vous pourrez utiliser **PalServer.exe** pour démarrer le serveur. Cependant, on vous recommande d’abord de configurer le port forwarding et votre serveur.

### Configuration du port forwarding de votre serveur

Pour que votre serveur soit accessible au public, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes Powershell (plus simple), soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la barre de recherche Windows et cherchez **Powershell**. Faites un clic droit et sélectionnez **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires et que tout fonctionne correctement.

:::info
Assurez-vous d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur Palworld soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si vous ouvrez la page de base du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Vous devez créer de nouvelles règles pour votre serveur Palworld. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 8211
- UDP entrant et sortant : 8211

Utilisez notre guide [Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous y connecter via l’adresse IP de votre serveur. Pour cela, allez dans le navigateur de liste de serveurs et entrez votre adresse IP et port dans la recherche en bas. Vous devez chercher : `[votre_adresse_ip]:8211`

On vous recommande de configurer d’abord les réglages de votre serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Palworld. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

Tout d’abord, rendez-vous dans ce dossier :
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Vous y trouverez le fichier de configuration **PalWorldSettings.ini**. Ce fichier vous permet de configurer un large panel de paramètres pour votre serveur. Consultez notre [guide de configuration du serveur](palworld-configuration.md) pour voir toutes les options disponibles et leur utilité.

:::note
Si vous ne voyez pas ce fichier, lancez votre serveur au moins **une fois** pour qu’il soit généré automatiquement. Sinon, vous pouvez copier les paramètres par défaut depuis `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Activer le mode Xbox

Les serveurs dédiés Palworld peuvent désormais fonctionner en mode Microsoft Store/Xbox, ce qui permet aux joueurs Xbox et aux joueurs PC Microsoft Store de jouer ensemble sur leur propre serveur.

:::note
Le cross-play entre les versions Steam et Microsoft Store/Xbox n’est toujours pas possible. Votre serveur peut être configuré soit pour Steam, soit pour Microsoft Store/Xbox.
:::

Allez dans ce dossier et ouvrez le fichier **PalWorldSettings.ini** :
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Ajoutez-y ce snippet pour activer le mode Xbox :
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Sauvegardez le fichier, et au prochain lancement, le serveur sera en mode Xbox.

:::info
Sur les consoles Xbox, vous ne pouvez pas vous connecter directement via l’adresse IP. Donc si vous comptez jouer sur Xbox, vous devrez rendre votre serveur dédié public.

Pour cela, créez un nouveau fichier `StartServer.bat` à la racine du serveur et mettez-y : `PalServer.exe -publiclobby`. Le flag spécial `-publiclobby` active le mode Community Server, rendant le serveur visible dans la liste.

Pensez aussi à définir un nom de serveur facilement identifiable, consultez notre guide [Configuration du serveur](palworld-configuration.md) pour savoir comment faire.
:::

## Démarrage & connexion à votre serveur

Il est temps de lancer votre serveur. Vous devrez peut-être installer le [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) si ce n’est pas déjà fait sur votre serveur dédié Windows.

Allez dans le dossier principal de votre serveur Palworld et lancez **PalServer.exe** pour démarrer le serveur. Cela ouvrira la console du serveur dans une invite de commande et lancera le processus. Si tout se passe bien, votre serveur sera visible dans la liste des serveurs. Sinon, vous pourrez vous connecter directement en utilisant la barre de recherche en bas de la liste des serveurs avec : `[votre_adresse_ip]:8211`.

Vous avez installé avec succès Palworld sur votre serveur dédié Windows.