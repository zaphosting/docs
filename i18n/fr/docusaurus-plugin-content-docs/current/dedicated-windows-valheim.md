---
id: dedicated-windows-valheim
title: "Serveur dédié : Installation d’un serveur dédié Valheim sous Windows"
description: "Découvre comment installer un serveur dédié Valheim sur ton propre serveur pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Valheim ? Alors tu es au bon endroit ! Dans ce qui suit, on t’explique étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Installation d’un serveur dédié Valheim sur VPS Windows" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus immersive !"/>

<InlineVoucher />

## Préparation
Pour l’installation d’un serveur Valheim, SteamCMD est nécessaire. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu trouveras SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip**, qu’il faudra d’abord décompresser. On recommande de créer un dossier dédié pour y extraire le fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux commencer l’installation du serveur Valheim.



## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Il faut te connecter. Cela se fait avec l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Elle se fait avec la commande `app_update 896660`. L’ID de l’application **896660** correspond à l’application **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::


Va dans le dossier où tu as fait l’installation et rends-toi dans le sous-dossier suivant :  **../steamapps/common/Valheim dedicated Server/**

Là, tu dois créer le fichier de démarrage nécessaire pour lancer le logiciel serveur. Crée un fichier nommé : start_headless.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que la bonne extension soit utilisée.
:::

Ouvre le fichier, ajoute le contenu suivant et sauvegarde les modifications :

```
@echo off
set SteamAppId-892970

echo "Démarrage du serveur, APPUIE SUR CTRL-C pour quitter"

REM Astuce : Fais une copie locale de ce script pour éviter qu’il soit écrasé par Steam.
REM NOTE : Le mot de passe doit faire au moins 5 caractères & ne peut pas être dans le nom du serveur.
REM NOTE : Assure-toi que les ports 2456-2458 sont bien redirigés vers ton serveur via ton routeur local & pare-feu.

valheim server -nographics -batchmode -name "Mon Serveur" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Pour que le serveur soit visible et accessible depuis l’extérieur, les ports utilisés doivent être ouverts/redirigés dans le pare-feu. Pour cela, ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Il faut ajouter des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué ci-dessous et ajoute-les pour les ports suivants : 2456-2458 pour les protocoles TCP/UDP.




## Configuration

L’installation est déjà terminée. Tu peux faire d’autres réglages dans le fichier **start_headless_server.bat**. Tu peux y modifier le nom du serveur, le mot de passe, le mot de passe admin et plein d’autres options. Pour ça, rends-toi dans le dossier suivant :

```
../steamapps/common/Valheim dedicated Server/
```



## Jouer

À la fin de l’installation, tu peux lancer le serveur en exécutant le fichier **start_headless_server.bat** que tu as créé. Cela devrait ouvrir la console du serveur et démarrer le processus de lancement. Si tout se passe bien, le serveur devrait apparaître dans la liste des serveurs après un démarrage réussi.

<InlineVoucher />