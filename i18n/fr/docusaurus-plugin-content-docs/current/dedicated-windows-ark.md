---
id: dedicated-windows-ark
title: "Serveur dédié : Installation d’un serveur dédié ARK Survival Evolved sous Windows"
description: "Découvre comment installer un serveur dédié ARK: Survival Evolved sur un VPS Windows pour un gaming multijoueur sans prise de tête → En savoir plus maintenant"
sidebar_label: Installation Serveur Dédié ARK Survival Evolved
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un VPS Windows et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié ARK: Survival Evolved ? T’es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur. Connecte-toi à ton VPS via RDP pour configurer ton serveur dédié ARK: Survival Evolved. Si tu ne sais pas comment te connecter à ton serveur via RDP, on te conseille de jeter un œil à notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Installation Serveur Dédié ARK: Survival Evolved sur VPS Windows" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de manière plus fun et visuelle !"/>

<InlineVoucher />

## Préparation

Pour installer un serveur ARK, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Tu obtiendras un fichier **steamcmd.zip** qu’il faudra décompresser. On te recommande de créer un dossier dédié pour dézipper ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux commencer l’installation du serveur ARK.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Connecte-toi avec l’utilisateur **anonymous** en lançant la commande : `login anonymous`

L’étape suivante est l’installation du serveur. Lance la commande `app_update 376030`. L’ID de l’application **376030** correspond au **serveur dédié ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Ne coupe pas le processus avant la fin pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::



Va dans le dossier où tu as fait l’installation, puis dans le sous-dossier suivant : **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Là, tu dois créer un fichier de démarrage pour lancer le serveur. Crée un fichier nommé : start-ark.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre ce fichier, colle le contenu suivant et sauvegarde :

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu Windows. Ouvre les paramètres du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Ajoute des règles entrantes et sortantes comme suit pour ces protocoles et ports :

- TCP entrant et sortant : 27020
- UDP entrant et sortant : 27015
- UDP entrant et sortant : 7777-7778



## Configuration

Le plus gros est fait ! Tu peux encore modifier la config dans les fichiers **DefaultGameUserSettings.ini** et **Gameusersettings.ini**. Tu peux changer le nom du serveur, le mot de passe, le mot de passe admin et plein d’autres options. Ces fichiers se trouvent ici :

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jouer

Pour finir, lance ton serveur en exécutant le fichier **start-ark.bat** que tu as créé. La console du serveur devrait s’ouvrir et démarrer le serveur. Si tout se passe bien, ton serveur apparaîtra dans la liste des serveurs après un démarrage réussi.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

<InlineVoucher />