---
id: dedicated-windows-satisfactory
title: "Serveur dédié : Installation d’un serveur dédié Satisfactory sous Windows"
description: "Apprends à configurer un serveur dédié Satisfactory sur ton serveur pour un gameplay fluide et une gestion facile → Découvre tout maintenant"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Satisfactory ? Alors t’es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Installation d’un serveur dédié Satisfactory sur VPS Windows" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et visuelle !"/>



## Préparation

Pour installer un serveur Satisfactory, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, tu vas télécharger un fichier **steamcmd.zip** qu’il faudra décompresser. On te conseille de créer un dossier dédié pour ça. Après extraction, tu devrais voir le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout est prêt et tu peux passer à l’installation du serveur Satisfactory.



## Installation

Une fois l’installation terminée, tu peux lancer des commandes dans la **console Steam (steamcmd.exe)**. Connecte-toi avec l’utilisateur **anonymous** en tapant : `login anonymous`

L’étape suivante est l’installation du serveur avec la commande `app_update 1690800`. L’ID d’application **1690800** correspond au **serveur dédié Satisfactory**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::



Va dans le dossier où tu as fait l’installation, puis dans le sous-dossier : **../steamapps/common/SatisfactoryDedicatedServer**

Là, tu dois créer un fichier de lancement pour exécuter le logiciel serveur. Crée un fichier nommé : server-start.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre ce fichier, colle le contenu suivant et sauvegarde :

```
Factoryserver.exe -log -unattended
```



Lance ensuite ce fichier. Au premier démarrage, une fenêtre popup devrait apparaître pour te dire que certains composants sont nécessaires pour faire tourner le programme. Le jeu a besoin du Visual C++ Runtime. Clique sur Oui et termine l’installation. 

Pour que le serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Ajoute des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué, puis ajoute-les pour le protocole UDP et le port 15000.



## Configuration

La configuration de base est déjà faite. Tu peux modifier d’autres paramètres dans le fichier **ServerSettings.ini**. Tu peux changer le nom du serveur, le mot de passe et d’autres options. Va dans ce dossier : 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jouer

À la fin de l’installation, tu peux lancer le serveur en exécutant le fichier **server-start.bat** que tu as créé. Ça ouvrira la console du serveur et lancera le démarrage. Si tout se passe bien, ton serveur devrait apparaître dans la liste des serveurs après un démarrage réussi.