---
id: dedicated-windows-avorion
title: "Serveur dédié : Installation du serveur dédié Avorion sous Windows"
description: "Découvrez comment installer le serveur dédié Avorion sur votre VPS Windows pour une expérience de jeu fluide → En savoir plus maintenant"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows et tu veux installer le serveur dédié Avorion dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Comment configurer un serveur dédié Avorion sur VPS Windows !" description="Tu comprends mieux en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus cool et interactive !"/>
<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via Remote Desktop (RDP). Si tu as besoin d’aide, consulte notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

Une fois connecté à ton serveur, il faudra installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement des fichiers du workshop Steam et des serveurs dédiés. Télécharge [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crée un nouveau dossier quelque part sur ton serveur, ici on l’appellera `steamcmd`. Va dans ton dossier Téléchargements, trouve le fichier **steamcmd.zip** que tu viens de télécharger et place-le dans ton dossier `steamcmd`. Maintenant, décompresse le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec un logiciel comme 7zip ou Winrar. Tu devrais obtenir un fichier **steamcmd.exe** décompressé.

Lance simplement **steamcmd.exe** et attends que l’installation soit complètement terminée.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux passer à l’installation du serveur dédié Avorion dans la section suivante.

## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que tu as lancée. Tu dois te connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, tu peux commencer à télécharger les fichiers.

:::tip
Optionnel : Tu peux définir ton dossier d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que tu souhaites utiliser pour ton serveur. Par exemple : 
```
force_install_dir C:\Avorion-Server
```
:::

Lance maintenant la commande `app_update 565060` qui va démarrer le téléchargement. L’ID de l’application **565060** correspond à **Avorion**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rends-toi dans le dossier où tous les fichiers du serveur ont été téléchargés. Là, fais une copie du fichier **server.bat** et renomme cette copie en **startserver.bat** ou un nom similaire. Tu utiliseras ce nouveau fichier `.bat` pour démarrer le serveur et pour pouvoir modifier les options de configuration du serveur dans la section suivante. On te conseille de faire d’abord le port forwarding et la configuration de ton serveur.

### Faire du port forwarding sur ton serveur

Pour que ton serveur soit accessible au public, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux le faire soit via des commandes Powershell (plus simple), soit via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **Powershell**. Pense à faire un clic droit et **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires et que tout fonctionne bien.

:::info
Assure-toi de lancer Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console Powershell :
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que ton serveur Avorion soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu ouvres la page de base du pare-feu Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Tu dois créer de nouvelles règles pour ton serveur Avorion. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 27000
- UDP entrant et sortant : 27000, 27003, 27020, 27021

Si tu as besoin d’aide, consulte notre [guide Port Forwarding (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras donc te connecter via l’adresse IP de ton serveur. Pour ça, sélectionne ton personnage dans le menu principal, va dans l’onglet **Trouver des parties** et clique sur **Ajouter un serveur**. Là, entre l’IP de ton serveur avec le port (15636 par défaut) et ton mot de passe serveur (si tu en as mis un, sinon laisse vide).

On te conseille de configurer ton serveur avant d’y accéder, comme expliqué dans la section suivante.

## Configuration

À ce stade, tu as fini la configuration de base de ton serveur Avorion. Tu peux modifier les paramètres de ton serveur directement dans le fichier **startserver.bat** que tu as copié plus tôt. Ouvre-le avec un éditeur de texte comme Notepad et ajuste les paramètres de ton serveur.

Si tu veux modifier les paramètres spécifiques au monde, tu devras accéder à tes sauvegardes de galaxie et éditer le fichier de configuration **server.ini**. Il est stocké dans ton AppData Windows, accessible via ce chemin :
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Tu peux accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/AppData/Roaming/Avorion/galaxies`. Clique sur **OK** et tu seras directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Démarrer & se connecter à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal de ton serveur Avorion et lance **startserver.bat** que tu as créé plus tôt pour démarrer le serveur. Ça ouvrira la console du serveur dans une invite de commande et lancera le processus de démarrage. Tu pourras ensuite te connecter directement via le navigateur de serveurs en jeu en entrant l’IP et le port de ton serveur (27000 par défaut).

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Avorion sur ton VPS ! Si tu as d’autres questions ou soucis, contacte notre équipe support, dispo tous les jours pour t’aider !

<InlineVoucher />