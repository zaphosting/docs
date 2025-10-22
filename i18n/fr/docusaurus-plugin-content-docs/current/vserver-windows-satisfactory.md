---
id: vserver-windows-satisfactory
title: "VPS : Installation d’un Serveur Dédié Satisfactory sous Windows"
description: "Découvre comment installer rapidement et facilement un serveur dédié Satisfactory sur ton VPS ou serveur dédié → En savoir plus maintenant"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS ou un serveur dédié et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié Satisfactory ? Alors tu es au bon endroit ! Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Installation Serveur Dédié Satisfactory sur VPS Windows" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus immersive !"/>
<InlineVoucher />

## Préparation

Pour installer un serveur Satisfactory, SteamCMD est nécessaire. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil permet de télécharger rapidement et facilement les applications serveurs dédiés des jeux populaires sur Steam. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD. 

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip**, qu’il faudra d’abord décompresser. On te conseille de créer un dossier dédié pour y extraire ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux commencer l’installation du serveur Satisfactory.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Là, il faut te connecter. C’est avec l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Elle se fait avec la commande `app_update 1690800`. L’ID de l’application **1690800** correspond à l’application **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Ne coupe pas le processus avant sa fin pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::



Va dans le dossier où tu as fait l’installation et rends-toi dans le sous-dossier suivant : **../steamapps/common/SatisfactoryDedicatedServer**

Là, tu dois créer le fichier de démarrage, nécessaire pour lancer le logiciel serveur. Crée un fichier nommé : server-start.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre le fichier, ajoute ce contenu et sauvegarde :

```
Factoryserver.exe -log -unattended
```



Lance ensuite ce fichier. Au premier démarrage, une fenêtre popup devrait apparaître pour te dire que certains composants sont nécessaires pour faire tourner le programme. Le jeu requiert le Visual C++ Runtime. Clique sur Oui et termine l’installation. 

Pour que le serveur soit visible et accessible depuis l’extérieur, les ports utilisés par le serveur doivent être ouverts/redirigés dans le pare-feu. Pour ça, ouvre les paramètres du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


Il faut ajouter des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué ci-dessous et ajoute-les pour le protocole UDP et le port 15000.



## Configuration

L’installation de base est terminée. Tu peux faire d’autres réglages dans le fichier de config **ServerSettings.ini**. Tu peux y modifier le nom du serveur, le mot de passe et d’autres options. Va dans ce dossier : 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Jouer

À la fin de l’installation, tu peux lancer le serveur en exécutant le fichier **server-start.bat** que tu as créé. Ça devrait ouvrir la console du serveur et démarrer le processus. Si tout se passe bien, le serveur sera visible dans la liste des serveurs après un démarrage réussi.



## Conclusion

Félicitations, tu as installé et configuré ton serveur Satisfactory sur ton VPS avec succès ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />