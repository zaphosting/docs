---
id: dedicated-windows-enshrouded
title: "Serveur dédié : Installation d’un serveur dédié Enshrouded sous Windows"
description: "Découvrez comment configurer rapidement et efficacement un serveur dédié Enshrouded sur votre VPS Windows ou serveur dédié → En savoir plus maintenant"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Windows ou un serveur dédié et tu veux installer le service serveur dédié Enshrouded dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Comment configurer un serveur dédié Enshrouded sur un VPS Windows !" description="Tu comprends mieux en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et visuelle !"/>



## Préparation

Pour commencer, connecte-toi à ton VPS via Bureau à distance (RDP). Utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si tu as besoin d’aide pour ça.

Une fois connecté à ton serveur, il faudra installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement plein de fichiers Steam Workshop et serveurs dédiés. Télécharge [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crée un nouveau dossier quelque part sur ton serveur, ici on l’appellera `steamcmd`. Va dans ton dossier Téléchargements, trouve le fichier **steamcmd.zip** que tu viens de télécharger et place-le dans ton dossier `steamcmd`. Maintenant, il faut dézipper ce fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applis comme 7zip ou Winrar. Tu devrais obtenir un fichier **steamcmd.exe** dézippé.

Lance simplement **steamcmd.exe** et attends que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux passer à l’installation du serveur dédié Enshrouded dans la section suivante.

## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que tu as lancée. Tu dois te connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, tu peux commencer à télécharger les fichiers.

:::tip
Optionnel : Tu peux définir ton dossier d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que tu souhaites utiliser pour ton serveur. Par exemple : 
```
force_install_dir C:\Enshrouded-Server
```
:::

Lance maintenant la commande `app_update 2278520` qui va démarrer le téléchargement. L’ID de l’application **2278520** correspond à **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rends-toi dans le dossier où tous les fichiers du serveur ont été téléchargés. Là, tu peux utiliser **enshrouded_server.exe** pour lancer le serveur. Cependant, on te conseille d’abord de configurer le port forwarding et la configuration de ton serveur.

### Redirection de ports pour ton serveur

Pour que ton serveur soit accessible au public, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux faire ça soit via des commandes Powershell, ce qui est plus simple, soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **Powershell**. Pense à faire un clic droit et **Exécuter en tant qu’administrateur** pour avoir les droits nécessaires et que tout fonctionne bien.

:::info
Assure-toi de lancer Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta fenêtre Powershell :
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que ton serveur Enshrouded soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu ouvres la page de base du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur Enshrouded. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 15636-15637
- UDP entrant et sortant : 15636-15637

Si tu as besoin d’aide, consulte notre guide [Redirection de ports (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras donc te connecter via l’adresse IP de ton serveur. Pour ça, sélectionne ton personnage dans le menu principal, va dans l’onglet **Trouver des parties** et clique sur **Ajouter un serveur**. Là, entre l’IP de ton serveur avec le port (15636 par défaut) et le mot de passe du serveur (si tu en as mis un, sinon laisse vide).

:::tip
Jette un œil à notre guide [Configuration du serveur](enshrouded-configuration.md) si tu veux activer un mot de passe pour ton serveur et ajuster les réglages.
:::

On te conseille de configurer ton serveur d’abord via la section suivante avant d’y accéder.

## Configuration

À ce stade, tu as fini la mise en place de ton serveur Enshrouded. Tu peux faire des configurations supplémentaires via un fichier de config situé dans le dossier de ton serveur.

Va d’abord dans ce dossier :
```
..EnshroudedServer/ (répertoire racine)
```

Tu trouveras le fichier de configuration **enshrouded_server.json**. Avec ce fichier, tu peux modifier plusieurs paramètres de ton serveur. Consulte notre guide [Configuration du serveur](enshrouded-configuration.md) pour voir toutes les options dispo et leur utilité.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal de ton serveur Enshrouded et lance **enshrouded_server.exe** pour démarrer le serveur. Ça ouvrira la console du serveur dans une invite de commande et lancera le processus de démarrage. Tu pourras ensuite te connecter directement à ton serveur en allant dans l’onglet **Trouver des parties**, en cliquant sur **Ajouter un serveur** et en entrant l’IP et le port de ton serveur (15636 par défaut).

Tu as installé avec succès Enshrouded sur ton serveur dédié Windows.