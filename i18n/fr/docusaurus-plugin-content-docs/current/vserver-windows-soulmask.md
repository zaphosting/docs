---
id: vserver-windows-soulmask
title: "VPS : Installation du serveur dédié Soulmask sous Windows"
description: "Découvrez comment installer le serveur dédié Soulmask sur votre VPS Windows ou serveur dédié pour un gameplay fluide → En savoir plus maintenant"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le serveur dédié Soulmask dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur.

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via Remote Desktop (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour ça.

Une fois connecté à votre serveur, vous devrez installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici on l’appellera `steamcmd`. Allez dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applis comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié Soulmask dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\Soulmask-Server
```
:::

Lancez maintenant la commande `app_update 3017310` qui va démarrer le téléchargement. L’ID de l’application **3017310** correspond à **Soulmask**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois terminé, rendez-vous dans le dossier de téléchargement où tous les fichiers du serveur ont été récupérés. Ici, vous pouvez utiliser le fichier **StartServer.bat** pour démarrer le serveur. Cependant, on vous recommande d’abord de configurer le port forwarding et de configurer votre serveur.

### Configuration du port forwarding de votre serveur

Pour que votre serveur soit accessible publiquement, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes PowerShell, ce qui est plus simple, soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvrez la barre de recherche Windows et cherchez **PowerShell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires et que tout fonctionne correctement.

:::info
Assurez-vous d’exécuter PowerShell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans votre invite PowerShell :
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur Soulmask soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si vous êtes sur la page de base du Pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Vous devez créer de nouvelles règles pour votre serveur Soulmask. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 8777, 27015
- UDP entrant et sortant : 8777, 27015

Utilisez notre guide [Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous y connecter via l’adresse IP de votre serveur. Pour cela, allez dans Multijoueur depuis le menu principal, entrez dans Connexion IP directe et saisissez votre adresse IP et le port utilisé, qui est 3724 par défaut ou celui que vous avez configuré.

On vous recommande de configurer d’abord les paramètres de votre serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Soulmask. Vous pouvez affiner la configuration en ajustant les paramètres dans le fichier **StartServer.bat** situé à la racine, ainsi que dans le fichier **GameUserSettings.ini** sous le chemin `../WS/Saved/Config/WindowsServer`.

Consultez notre [Configuration du serveur](soulmask-configuration.md) pour voir tous les paramètres et options de configuration disponibles pour votre serveur Soulmask.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le dossier racine et lancez **StartServer.bat** pour démarrer le processus. Cela ouvrira la console du serveur dans une invite de commande et lancera le démarrage.

:::tip
Si votre serveur ne démarre pas et que la fenêtre de commande disparaît simplement, allez dans le dossier `../WS/Saved/Logs` et consultez le dernier log pour diagnostiquer le problème.

Un problème fréquent concerne le service Steam en ligne qui ne démarre pas sur les binaires Windows du serveur dédié à cause d’un mauvais packaging. Si l’erreur est liée à Steam, allez dans votre dossier racine et déplacez les fichiers suivants dans le dossier `../WS/Binaries/Win64` : `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Essayez ensuite de relancer le serveur, il devrait démarrer correctement dans une invite de commande.
:::

Vous pourrez maintenant vous connecter directement à votre serveur via son IP en entrant l’adresse IP et le port 8777 dans le menu multijoueur du jeu.

Si vous souhaitez que votre serveur apparaisse dans la liste des serveurs, consultez notre [Configuration du serveur](soulmask-configuration.md) et ajoutez le paramètre `-SteamServerName` approprié dans votre fichier **StartServer.bat**. Sauvegardez le fichier et relancez le batch.

Vous avez installé avec succès Soulmask sur votre serveur dédié Windows.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Soulmask sur votre VPS ! Si vous avez d’autres questions ou problèmes, contactez notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />