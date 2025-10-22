---
id: vserver-windows-valheim
title: "VPS : Installation d’un serveur dédié Valheim sous Windows"
description: "Découvre comment installer rapidement et efficacement un serveur dédié Valheim sur ton VPS ou serveur dédié → En savoir plus maintenant"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Valheim ? Alors tu es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Installation d’un serveur dédié Valheim sur VPS Windows" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et visuelle !"/>
<InlineVoucher />

## Préparation
Pour installer un serveur Valheim, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra un fichier **steamcmd.zip** qu’il faudra décompresser. On te conseille de créer un dossier dédié pour dézipper ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux commencer l’installation du serveur Valheim.



## Installation

Après l’installation, tu dois pouvoir lancer des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Il faut te connecter. Utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Tape la commande `app_update 896660`. L’ID d’application **896660** correspond à l’application **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::


Va dans le dossier où tu as fait l’installation, puis dans le sous-dossier suivant :  **../steamapps/common/Valheim dedicated Server/**

Là, tu dois créer le fichier de lancement nécessaire pour démarrer le serveur. Crée un fichier nommé : start_headless.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit bien prise en compte.
:::

Ouvre ce fichier, ajoute le contenu suivant et sauvegarde :

```
@echo off
set SteamAppId-892970

echo "Démarrage du serveur, APPUIE SUR CTRL-C pour quitter"

REM Astuce : fais une copie locale de ce script pour éviter qu’il soit écrasé par Steam.
REM NOTE : Le mot de passe doit faire au moins 5 caractères & ne peut pas être dans le nom du serveur.
REM NOTE : Assure-toi que les ports 2456-2458 sont bien redirigés vers ton serveur via ton routeur local & pare-feu.

valheim server -nographics -batchmode -name "Mon Serveur" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Pour que le serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/rediriger les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Ajoute des règles entrantes et sortantes comme expliqué ci-dessous, pour les ports suivants : 2456-2458 en TCP/UDP.




## Configuration

L’installation est déjà terminée. Tu peux modifier la configuration dans le fichier **start_headless_server.bat**. Tu peux changer le nom du serveur, le mot de passe, le mot de passe admin et plein d’autres options. Pour ça, rends-toi dans le dossier :

```
../steamapps/common/Valheim dedicated Server/
```



## Jouer

À la fin de l’installation, lance le serveur en exécutant le fichier **start_headless_server.bat** que tu as créé. La console du serveur devrait s’ouvrir et démarrer le serveur. Si tout se passe bien, ton serveur apparaîtra dans la liste des serveurs après un démarrage réussi.


## Conclusion

Félicitations, tu as installé et configuré ton serveur Valheim sur ton VPS avec succès ! Si tu as des questions ou des soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />