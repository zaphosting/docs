---
id: vserver-windows-ark
title: "VPS : Installation d’un serveur dédié ARK Survival Evolved sous Windows"
description: "Découvre comment installer rapidement et facilement un serveur dédié ARK: Survival Evolved sur ton VPS Windows → En savoir plus maintenant"
sidebar_label: Installation serveur dédié ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
Tu as un VPS Windows et tu veux y installer des serveurs de jeux ? Par exemple un serveur dédié ARK: Survival Evolved ? Alors tu es au bon endroit ! On va t’expliquer étape par étape comment installer ce service sur ton serveur.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="Installation serveur dédié ARK: Survival Evolved sur VPS Windows" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et immersive !"/>

Connecte-toi à ton VPS via RDP pour configurer ton serveur dédié ARK: Survival Evolved. Si tu ne sais pas comment te connecter à ton serveur via RDP, on te conseille de jeter un œil au [guide d’accès initial (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Préparation

Pour installer un serveur ARK, il te faut SteamCMD. SteamCMD est la **version en ligne de commande du client Steam**. Cet outil te permet de télécharger rapidement et facilement les applications serveurs dédiés des jeux Steam populaires. Tu peux récupérer SteamCMD sur le site officiel des développeurs Valve : https://developer.valvesoftware.com/wiki/SteamCMD.

Ensuite, tu télécharges le fichier. Il contiendra le fichier **steamcmd.zip** qu’il faudra décompresser. On te recommande de créer un dossier dédié pour dézipper ce fichier. Tu devrais voir apparaître le fichier **steamcmd.exe**. Lance-le et attends que l’installation soit terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, c’est que tout s’est bien passé et tu peux commencer l’installation du serveur ARK.



## Installation

Après l’installation, tu dois pouvoir exécuter des commandes dans la **ligne de commande Steam (steamcmd.exe)**. Là, il faut te connecter. Utilise l’utilisateur **anonymous**. Tape la commande suivante : `login anonymous`

L’étape suivante est l’installation. Lance la commande `app_update 376030`. L’ID de l’application **376030** correspond au **serveur dédié ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::



Va dans le dossier où tu as fait l’installation, puis dans le sous-dossier suivant : **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Là, tu dois créer le fichier de lancement nécessaire pour démarrer le serveur. Crée un fichier nommé : start-ark.bat

:::info
Assure-toi que l’option Afficher les extensions de fichiers est activée pour que l’extension soit correcte.
:::

Ouvre ce fichier, ajoute le contenu suivant et sauvegarde :

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Pour que ton serveur soit visible et accessible depuis l’extérieur, il faut ouvrir/forwarder les ports utilisés dans le pare-feu. Ouvre les paramètres du pare-feu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Ajoute des règles supplémentaires dans les paramètres. Clique sur les règles entrantes et sortantes comme indiqué, puis ajoute-les pour les protocoles et ports suivants :

- TCP entrant et sortant : 27020
- UDP entrant et sortant : 27015
- UDP entrant et sortant : 7777-7778



## Configuration

L’installation est déjà terminée. Tu peux faire d’autres réglages dans les fichiers de config **DefaultGameUserSettings.ini** et **Gameusersettings.ini**. Tu peux y modifier le nom du serveur, le mot de passe, le mot de passe admin et plein d’autres options. Pour ça, rends-toi dans les dossiers suivants :

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jouer

À la fin de l’installation, tu peux lancer le serveur en exécutant le fichier **start-ark.bat** que tu as créé. Ça ouvrira la console du serveur et lancera le démarrage. Si tout se passe bien, ton serveur devrait apparaître dans la liste des serveurs après un démarrage réussi.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Conclusion

Félicitations, tu as installé et configuré ton serveur ARK Survival sur ton VPS avec succès ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />