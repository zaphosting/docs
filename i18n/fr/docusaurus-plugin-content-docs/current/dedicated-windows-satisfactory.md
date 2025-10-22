---
id: dedicated-windows-satisfactory
title: "Serveur dédié : Installation d’un serveur dédié Satisfactory sous Windows"
description: "Apprends à configurer un serveur dédié Satisfactory sur ton serveur pour un gameplay fluide et une gestion facile → Découvre-le maintenant"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Satisfactory ? Alors t’es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Installation d’un serveur dédié Satisfactory sur VPS Windows" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et immersive !"/>

<InlineVoucher />

## Préparation

Pour configurer un serveur Satisfactory, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications de serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip**, qu’il faudra d’abord décompresser. On te conseille de créer un dossier dédié pour y extraire le contenu. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux passer à l’installation du serveur Satisfactory.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Là, il faut te connecter. Utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Lance la commande `app_update 1690800`. L’ID d’application **1690800** correspond à l’application **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Ne coupe surtout pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup de patienter ! :)
:::



Va dans le dossier où tu as fait l’installation et rends-toi dans le sous-dossier suivant : **../steamapps/common/SatisfactoryDedicatedServer**

Là, tu dois créer le fichier de lancement nécessaire pour démarrer le logiciel serveur. Crée un fichier nommé : server-start.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre ce fichier, ajoute le contenu suivant et sauvegarde :

```
Factoryserver.exe -log -unattended
```



Lance ensuite ce fichier. Au premier démarrage, une fenêtre popup devrait apparaître pour te dire que certains composants sont nécessaires pour faire tourner le programme. Le jeu requiert le Visual C++ Runtime. Clique sur Oui et termine l’installation.

Pour que le serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Pour ça, ouvre les paramètres du Pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


Il faut ajouter des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué, et ajoute-les pour le protocole UDP et le port 15000.



## Configuration

La configuration de base est déjà terminée. Tu peux faire d’autres réglages dans le fichier de config **ServerSettings.ini**. Là, tu peux changer le nom du serveur, le mot de passe et d’autres options. Va dans ce dossier : 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jouer

Pour finir, tu peux maintenant lancer le serveur en exécutant le fichier **server-start.bat** que tu as créé. Ça devrait ouvrir la console du serveur et démarrer le processus. Si tout se passe bien, ton serveur apparaîtra dans la liste des serveurs après un démarrage réussi.


<InlineVoucher />