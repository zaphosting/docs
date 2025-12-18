---
id: dedicated-windows-ark
title: "Serveur dédié : Configuration d’un serveur dédié ARK Survival Evolved sous Windows"
description: "Découvrez comment configurer un serveur dédié ARK: Survival Evolved sur un VPS Windows pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: Configuration serveur dédié ARK Survival Evolved
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié ARK: Survival Evolved ? Alors t’es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur. Connecte-toi à ton VPS via RDP pour configurer ton serveur dédié ARK: Survival Evolved. Si tu ne sais pas comment te connecter à ton serveur via RDP, on te conseille de jeter un œil au [guide Accès initial (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Configuration serveur dédié ARK: Survival Evolved sur VPS Windows" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et visuelle !"/>



## Préparation

Pour configurer un serveur ARK, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, tu télécharges le fichier. Ce sera un fichier **steamcmd.zip** qu’il faudra d’abord décompresser. On te recommande de créer un dossier dédié pour y extraire le contenu. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux commencer l’installation du serveur ARK.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Là, tu dois te connecter. Utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Lance la commande `app_update 376030`. L’ID de l’application **376030** correspond à l’application **serveur dédié ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Ne coupe surtout pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup de patienter ! :)
:::



Va dans le dossier où tu as fait l’installation, puis dans le sous-dossier suivant : **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Là, tu dois créer le fichier de démarrage nécessaire pour lancer le logiciel serveur. Crée un fichier nommé : start-ark.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre le fichier, ajoute ce contenu et sauvegarde :

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Pour que le serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Ajoute des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :

- TCP entrant et sortant : 27020
- UDP entrant et sortant : 27015
- UDP entrant et sortant : 7777-7778



## Configuration

La configuration de base est déjà terminée. Tu peux faire d’autres réglages dans les fichiers de config **DefaultGameUserSettings.ini** et **Gameusersettings.ini**. Tu peux y modifier le nom du serveur, le mot de passe de connexion, le mot de passe admin et plein d’autres options. Pour ça, rends-toi dans ces dossiers :

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jouer

À la fin de la config, tu peux lancer le serveur en exécutant le fichier **start-ark.bat** que tu as créé. Ça devrait ouvrir la console du serveur et démarrer le processus. Si tout se passe bien, le serveur sera visible dans la liste après un démarrage réussi.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)