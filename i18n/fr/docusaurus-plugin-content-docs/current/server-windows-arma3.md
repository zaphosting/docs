---
id: server-windows-arma3
title: "Installation d’un serveur dédié Arma 3 sous Windows"
description: "Découvrez comment configurer un serveur dédié Arma 3 sur votre serveur Windows pour un gameplay fluide et un contrôle total → En savoir plus maintenant"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS/serveur dédié Windows et vous souhaitez installer le service serveur dédié Arma 3 dessus ? Vous êtes au bon endroit. Dans ce guide, on vous explique étape par étape comment installer ce service sur votre serveur.


<InlineVoucher />

## Préparation

Pour commencer, connectez-vous à votre VPS/serveur dédié via Bureau à distance (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour ça.

Une fois connecté à votre serveur, vous devrez installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici on l’appellera `steamcmd`. Allez dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applis comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié Arma 3 dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\arma3-server
```
:::

Lancez maintenant la commande `app_update 233780` qui va démarrer le téléchargement. L’ID de l’application **233780** correspond à **Arma 3**.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Merci de ne pas interrompre le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois terminé, rendez-vous dans le dossier de téléchargement où tous les fichiers du serveur ont été récupérés. Ici, vous pouvez lancer le serveur avec **Arma 3_server.exe**. Cependant, on vous conseille d’abord de configurer le port forwarding et de paramétrer votre serveur.

### Configuration du port forwarding de votre serveur

Pour que votre serveur soit accessible au public, vous devez modifier les règles de redirection de ports pour les ports utilisés par le processus sur votre VPS/serveur dédié. Vous pouvez le faire soit via des commandes Powershell, ce qui est plus simple, soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la barre de recherche Windows et cherchez **Powershell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour que les permissions soient correctes et que tout fonctionne bien.

:::info
Assurez-vous d’exécuter Powershell en mode administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Ces commandes créent automatiquement les règles de pare-feu nécessaires pour que votre serveur Arma 3 soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si vous êtes sur la page de base du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Vous devez créer de nouvelles règles pour votre serveur Arma 3. Pour cela, cliquez sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- UDP entrant et sortant : 2302–2306

N’hésitez pas à consulter notre guide [Port Forwarding (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible, ce qui signifie que vous pourrez vous y connecter via l’adresse IP de votre serveur. Pour cela, sélectionnez votre personnage dans le menu principal, allez dans l’onglet **Trouver des parties** et cliquez sur **Ajouter un serveur**. Entrez ici l’IP de votre serveur avec le port (2302 par défaut) et le mot de passe du serveur (si vous en avez défini un, sinon laissez vide).

On vous conseille de configurer d’abord les paramètres de votre serveur dans la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de base de votre serveur Arma 3. Vous pouvez affiner la configuration via un fichier de config situé dans le dossier de votre serveur.

Allez dans le répertoire suivant :
```
C:\arma3-Server
```

Vous y trouverez le fichier de configuration **server.cfg**. Ce fichier vous permet de modifier plusieurs paramètres de votre serveur. 




## Démarrage & connexion à votre serveur

Il est maintenant temps de lancer votre serveur. Rendez-vous dans le dossier principal du jeu et lancez l’exécutable **arma3server_x64.exe**.

Cela ouvrira la console du serveur et démarrera le processus.

Les joueurs peuvent se connecter à votre serveur via le **navigateur de serveurs Arma 3** en utilisant votre **adresse IP serveur** et le port par défaut **2302**.

## Conclusion

Félicitations, vous avez installé et configuré avec succès votre **serveur Arma 3** sur votre VPS/serveur dédié ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider !


<InlineVoucher />