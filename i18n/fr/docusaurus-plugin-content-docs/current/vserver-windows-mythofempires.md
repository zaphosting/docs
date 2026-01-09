---
id: vserver-windows-mythofempires
title: "VPS : Installation d’un serveur dédié Myth of Empires sous Windows"
description: "Découvre comment installer rapidement et efficacement un serveur dédié Myth of Empires sur ton VPS Windows → En savoir plus maintenant"
sidebar_label: Installation Serveur Dédié MOE
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Windows et tu veux installer un serveur dédié MOE dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="Comment configurer un serveur Myth Of Empires sur VPS Windows !" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et visuelle !"/>
<InlineVoucher />

## Préparation
Pour commencer, connecte-toi à ton VPS via Remote Desktop (RDP). Utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si tu as besoin d’aide pour ça.

Une fois connecté à ton serveur, tu devras installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement une gamme de fichiers Steam Workshop et serveurs dédiés. Télécharge [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crée un nouveau dossier quelque part sur ton serveur, ici on l’appellera `steamcmd`. Va dans ton dossier Téléchargements, trouve le fichier **steamcmd.zip** que tu viens de télécharger et place-le dans ton dossier `steamcmd`. Maintenant, décompresse le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applis comme 7zip ou Winrar. Tu devrais obtenir un fichier **steamcmd.exe** décompressé.

Lance simplement **steamcmd.exe** et attends que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux passer à l’installation du serveur dédié MOE dans la section suivante.

## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que tu as lancée. Tu dois te connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, tu peux commencer à télécharger les fichiers.

:::tip
Optionnel : Tu peux définir ton dossier d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que tu souhaites utiliser pour ton serveur. Par exemple : 
```
force_install_dir C:\MOE-Server
```
:::
 
Lance maintenant la commande `app_update 1794810` qui va démarrer le téléchargement. L’ID de l’application **1794810** correspond à **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

Une fois terminé, rends-toi dans le dossier de téléchargement où tous les fichiers du serveur ont été récupérés.

### Accéder à PrivateServerTool

Contrairement aux installations SteamCMD classiques, MOE te demande de récupérer un dossier depuis ton installation locale du jeu Steam pour pouvoir lancer le serveur sous Windows.

Ouvre Steam sur ta machine, fais un clic droit sur ton jeu **Myth of Empires** et choisis **Parcourir les fichiers locaux** en passant par la section **Gérer**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Dans le dossier racine qui s’ouvre, trouve le dossier **PrivateServerTool**. C’est ce dossier que tu devras copier sur ton serveur. Tu peux facilement faire ça avec `CTRL+C` sur ton PC local, puis `CTRL+V` pour coller dans ton serveur Windows via RDP. Assure-toi de le coller dans le répertoire racine de ton serveur dédié.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ensuite, passe à la section suivante pour configurer le port forwarding et paramétrer ton serveur.

### Configurer le port forwarding de ton serveur

Pour que ton serveur soit accessible au public, tu dois modifier les règles de redirection de ports pour les ports utilisés par le serveur dédié. Tu peux faire ça soit via des commandes Powershell (plus simple), soit via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **Powershell**. Clique droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console Powershell :
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Ces commandes vont créer automatiquement les règles de pare-feu nécessaires pour que ton serveur MOE soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu es sur la page de base du pare-feu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur MOE. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 11888, 12888
- UDP entrant et sortant : 11888, 12888

Utilise notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md) si tu as besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Passe à la section suivante avant d’accéder à ton serveur pour créer ton fichier de config et ton fichier de lancement `.bat`.

## Configuration

Tu vas maintenant utiliser l’outil serveur situé dans le dossier que tu as copié depuis tes fichiers de jeu, pour créer ton fichier de configuration et le fichier `.bat` de démarrage que tu utiliseras pour lancer ton serveur.

Va dans ce répertoire (le dossier que tu as copié) :
```
../MOE/PrivateServerTool
```

Dans ce dossier, lance le fichier **PrivateServerTool.exe**. Avec cet outil, configure les options du serveur comme tu veux, y compris les mods, les réglages du jeu et bien plus.

On te conseille de configurer au moins les paramètres de base comme le **Nom du serveur** avant de continuer.

Quand c’est prêt, va dans l’onglet **Start Console** de l’outil, clique sur **Save Config** puis sur **Start Server**. Ça va générer le fichier `StartPrivateServer.bat` que tu utiliseras pour démarrer ton serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

On te recommande de créer un raccourci vers ton fichier `StartPrivateServer.bat` en faisant un clic droit et en choisissant **Créer un raccourci**, pour démarrer plus facilement.

:::note
Tu devras peut-être modifier le chemin vers ton dossier de jeu dans le fichier `StartPrivateServer.bat` généré automatiquement. Ouvre simplement le fichier avec un éditeur comme notepad et vérifie que le chemin au début du fichier correspond bien à l’emplacement de ton serveur.

Si le chemin est incorrect, tu peux double-cliquer sur la barre d’adresse en haut quand tu es dans le dossier racine de ton serveur MOE dédié pour copier le chemin actuel, puis le coller au bon endroit dans le fichier.
:::

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier de ton serveur Myth of Empires et lance **StartPrivateServer.bat** (ou le raccourci si tu en as créé un) pour démarrer. Ça ouvrira la console du serveur dans une invite de commande et lancera le processus. Tu pourras ensuite te connecter directement à ton serveur en allant dans l’onglet **Custom Server** et en cherchant ton serveur via la barre de recherche.

:::tip
Si tu as des soucis pour te connecter, ouvre ton fichier `StartPrivateServer.bat` avec un éditeur comme notepad et vérifie que les deux paramètres IP correspondent bien à l’IP de ton serveur Windows. Ça devrait être rempli automatiquement par l’outil, mais c’est une bonne étape de dépannage.
:::

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Myth of Empires sur ton VPS ! Si tu as d’autres questions ou problèmes, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />