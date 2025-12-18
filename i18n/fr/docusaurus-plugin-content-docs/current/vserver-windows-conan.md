---
id: vserver-windows-conan
title: "VPS : Installation d’un serveur dédié Conan Exiles sous Windows"
description: "Découvrez comment installer rapidement et efficacement un serveur dédié Conan Exiles sur votre VPS Windows → En savoir plus maintenant"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous avez un VPS Windows et vous souhaitez installer le service serveur dédié Conan Exiles dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS via Remote Desktop (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

:::note Outil de lancement serveur
En alternative à SteamCMD, les développeurs de Conan Exiles maintiennent un utilitaire de lancement de serveur très pratique qui peut être utilisé sous Windows pour faciliter le lancement d’un serveur.

Nous vous recommandons de lire le [post officiel sur le forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) si vous souhaitez utiliser cet outil à la place.
:::

Une fois connecté à votre serveur, vous devrez configurer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici nous l’appellerons `steamcmd`. Rendez-vous dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression native de Windows, ou avec un logiciel comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que le processus d’installation soit complètement terminé.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié Conan Exiles dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\Conan-Server
```
:::

Lancez maintenant la commande `app_update 443030` qui va démarrer le téléchargement. L’ID d’application **443030** correspond à **Conan Exiles**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Cela peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rendez-vous dans le répertoire où tous les fichiers du serveur ont été téléchargés. Ici, vous pouvez utiliser le fichier **StartServer.bat** pour démarrer le serveur. Cependant, nous vous recommandons de configurer d’abord le transfert de ports et votre serveur.

### Transfert de ports pour votre serveur

Pour que votre serveur soit accessible au public, vous devez modifier les règles de transfert de ports pour les ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes Powershell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

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
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que votre serveur Conan Exiles soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la fonction de recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre nécessaire si vous ouvrez la page de base du pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Vous devez créer de nouvelles règles pour votre serveur Conan Exiles. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 7777, 25575
- UDP entrant et sortant : 7777, 7778, 27015

Utilisez notre guide [Transfert de ports (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous connecter via l’adresse IP de votre serveur. Nous vous recommandons de configurer d’abord les paramètres de votre serveur dans la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur Conan Exiles. Vous pouvez effectuer des réglages supplémentaires via un fichier de configuration situé dans le répertoire de votre serveur.

Tout d’abord, rendez-vous dans le répertoire suivant :
```
../Conan-Server/Engine/Config/Windows
```

Vous y trouverez le fichier de configuration **WindowsServerEngine.ini**. Ce fichier vous permet d’ajuster une grande variété d’options en ajoutant des paramètres spécifiques.

Par exemple, pour ajouter un nom de serveur, un mot de passe et un mot de passe admin, vous ajouterez ceci dans le fichier :
```
[OnlineSubsystem]
ServerName=[votre_nom_serveur]
ServerPassword=[votre_mot_de_passe]

[ServerSettings]
AdminPassword=[votre_mot_de_passe_admin]
```

Nous vous recommandons de consulter le [Wiki Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) pour une liste complète des options disponibles.

## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Rendez-vous dans le répertoire principal de votre serveur Conan Exiles et lancez **StartServer.bat** que vous avez créé précédemment pour démarrer le serveur. Cela ouvrira la console du serveur dans une invite de commande et lancera le processus de démarrage. Vous pourrez alors vous connecter directement à votre serveur via le navigateur de serveurs en jeu en entrant l’adresse IP et le port de votre serveur (par défaut 7777).

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre serveur Conan Exiles sur votre VPS ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />