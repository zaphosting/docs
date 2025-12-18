---
id: dedicated-windows-valheim
title: "Serveur dédié : Installation d’un serveur dédié Valheim sous Windows"
description: "Découvrez comment configurer un serveur dédié Valheim sur votre propre serveur pour un jeu multijoueur fluide → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un serveur dédié et vous voulez y installer des serveurs de jeux ? Par exemple un serveur dédié Valheim ? Alors vous êtes au bon endroit ! Dans ce qui suit, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Installation d’un serveur dédié Valheim sur VPS Windows" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus immersive !"/>



## Préparation
Pour l’installation d’un serveur Valheim, SteamCMD est nécessaire. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Vous trouverez SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, procédez au téléchargement. Vous obtiendrez un fichier **steamcmd.zip** qu’il faudra d’abord décompresser. Il est recommandé de créer un dossier dédié où vous pourrez extraire ce fichier. Vous devriez voir apparaître le fichier **steamcmd.exe**. Lancez-le et patientez jusqu’à la fin de l’installation.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez commencer l’installation du serveur Valheim.



## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Vous devez vous connecter. Cela se fait avec l’utilisateur **anonymous**. Tapez la commande suivante : `login anonymous`

L’étape suivante est l’installation. Elle se fait avec la commande `app_update 896660`. L’ID de l’application **896660** correspond à l’application **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::


Allez dans le dossier où vous avez effectué l’installation, puis dans le sous-dossier suivant :  **../steamapps/common/Valheim dedicated Server/**

Vous devez y créer le fichier de démarrage nécessaire pour lancer le logiciel serveur. Créez un fichier nommé : start_headless.bat

:::info
Assurez-vous que l’option Afficher les extensions de fichiers est activée pour que la bonne extension soit utilisée.
:::

Ouvrez ce fichier, ajoutez le contenu suivant et sauvegardez vos modifications :

```
@echo off
set SteamAppId-892970

echo "Démarrage du serveur, APPUYEZ SUR CTRL-C pour quitter"

REM Astuce : Faites une copie locale de ce script pour éviter qu’il soit écrasé par Steam.
REM NOTE : Le mot de passe doit contenir au minimum 5 caractères & ne peut pas être le même que le nom du serveur.
REM NOTE : Assurez-vous que les ports 2456-2458 sont bien redirigés vers votre serveur via votre routeur local & pare-feu.

valheim server -nographics -batchmode -name "Mon Serveur" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Pour que le serveur soit visible et accessible depuis l’extérieur, les ports utilisés par le serveur doivent être ouverts/redirigés dans le pare-feu. Pour cela, ouvrez les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Il faut ajouter des règles supplémentaires dans les paramètres. Cliquez sur les règles entrantes et sortantes comme indiqué ci-dessous et ajoutez-les pour les ports suivants : 2456-2458 pour les protocoles TCP/UDP.




## Configuration

L’installation est maintenant terminée. Vous pouvez modifier la configuration dans le fichier **start_headless_server.bat**. Vous pouvez y changer le nom du serveur, le mot de passe du serveur, le mot de passe admin et bien d’autres options. Pour cela, rendez-vous dans le dossier suivant :

```
../steamapps/common/Valheim dedicated Server/
```



## Jouer

À la fin de l’installation, vous pouvez lancer le serveur en exécutant le fichier **start_headless_server.bat** que vous avez créé. Cela ouvrira la console du serveur et lancera le processus de démarrage. Si tout se passe bien, le serveur devrait apparaître dans la liste des serveurs après un démarrage réussi.


