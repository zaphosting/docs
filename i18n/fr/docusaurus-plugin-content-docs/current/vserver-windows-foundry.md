---
id: vserver-windows-foundry
title: "VPS : Installation du serveur dédié Foundry sous Windows"
description: "Découvrez comment installer un serveur dédié Foundry sur votre VPS Windows pour une expérience de jeu fluide → En savoir plus maintenant"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows et vous souhaitez installer le service serveur dédié Foundry dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Comment configurer un serveur dédié Foundry sur un VPS Windows !" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>
<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez installer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers du workshop Steam et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici nous l’appellerons `steamcmd`. Rendez-vous dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec une application comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié Foundry dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\Foundry-Server
```
:::

Lancez maintenant la commande `app_update 2915550` qui va démarrer le téléchargement. L’ID de l’application **2915550** correspond à **Foundry**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Cela peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rendez-vous dans le dossier d’installation où tous les fichiers du serveur ont été téléchargés. Ici, vous pouvez utiliser **FoundryDedicatedServerLauncher.exe** pour démarrer le serveur. Cependant, on vous recommande d’abord de configurer le port forwarding et votre serveur.

### Configuration du port forwarding pour votre serveur

Pour que votre serveur soit accessible publiquement, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes PowerShell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Ouvrez la barre de recherche Windows et cherchez **PowerShell**. Faites un clic droit et sélectionnez **Exécuter en tant qu’administrateur** pour que les permissions soient correctes et que tout fonctionne bien.

:::info
Assurez-vous d’exécuter PowerShell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite les commandes suivantes dans votre invite PowerShell :
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur Foundry soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si vous ouvrez la page de base du pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Vous devez créer de nouvelles règles pour votre serveur Foundry. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 3724, 27015
- UDP entrant et sortant : 3724, 27015

Si besoin, consultez notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md) pour plus d’aide.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous y connecter via l’adresse IP de votre serveur. Pour cela, allez dans Multijoueur depuis le menu principal, sélectionnez Connexion IP directe et entrez votre adresse IP ainsi que le port utilisé, qui est 3724 par défaut et comme vous l’avez configuré.

On vous recommande de configurer d’abord les paramètres de votre serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Foundry. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration. Retournez dans le dossier de votre jeu et créez un nouveau fichier **app.cfg** (s’il n’existe pas déjà) à la racine. Ce fichier doit être créé dans le même dossier que l’exécutable **FoundryDedicatedServerLauncher.exe**.

Ouvrez ensuite le fichier **app.cfg** avec le Bloc-notes ou un éditeur de votre choix, et commencez à ajouter les options de configuration pour les paramètres que vous souhaitez modifier. Il suffit de créer une nouvelle ligne par paramètre avec un signe égal suivi de la valeur que vous souhaitez définir.

Par exemple, voici trois options de configuration définies :
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Consultez notre [guide de configuration serveur](foundry-configuration.md) pour voir toutes les options disponibles et leur utilité.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le dossier racine et lancez **FoundryDedicatedServerLauncher.exe** pour démarrer le serveur. Cela ouvrira la console du serveur dans une invite de commande et lancera le processus de démarrage.

Vous pourrez ensuite vous connecter directement à votre serveur via son IP en allant dans **Multijoueur -> Connexion IP directe** et en entrant l’adresse IP de votre serveur ainsi que le port 3724, qui est le port par défaut et celui que vous avez redirigé.

Si vous souhaitez que votre serveur apparaisse dans la liste des serveurs, consultez notre [guide de configuration serveur](foundry-configuration.md) et ajoutez les paramètres `server_name` et `server_is_public` appropriés dans votre fichier de configuration. Sauvegardez le fichier et relancez l’exécutable du serveur.

## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur Foundry sur votre VPS ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />