---
id: dedicated-windows-arksurvivalascended
title: "Serveur dédié : Configuration du serveur dédié ARK Survival Ascended sous Windows"
description: "Découvrez comment configurer un serveur dédié ARK : Survival Ascended sur votre VPS Windows ou serveur dédié rapidement et facilement → En savoir plus maintenant"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Vous avez un VPS Windows ou un serveur dédié et vous souhaitez installer le service serveur dédié ARK : Survival Ascended dessus ? Vous êtes au bon endroit. Dans ce guide, nous allons vous expliquer étape par étape comment installer ce service sur votre serveur.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="Configuration du serveur dédié ARK : Survival Ascended sur VPS Windows" description="Vous comprenez mieux en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous préfériez apprendre de manière plus fun et immersive !"/>



## Préparation

Pour commencer, connectez-vous à votre VPS via Remote Desktop (RDP). Utilisez notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si vous avez besoin d’aide pour cela.

Une fois connecté à votre serveur, vous devrez configurer **SteamCMD** afin de pouvoir télécharger les fichiers nécessaires au serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam et c’est l’outil qui vous permet de télécharger facilement une gamme de fichiers Steam Workshop et de serveurs dédiés. Téléchargez [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Créez un nouveau dossier quelque part sur votre serveur, ici on l’appellera `steamcmd`. Allez dans votre dossier Téléchargements, trouvez le fichier **steamcmd.zip** que vous venez de télécharger et placez-le dans votre dossier `steamcmd`. Ensuite, décompressez le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec des applications comme 7zip ou Winrar. Vous devriez obtenir un fichier **steamcmd.exe** décompressé.

Lancez simplement **steamcmd.exe** et attendez que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et vous pouvez passer à l’installation du serveur dédié ARK : Survival Ascended dans la section suivante.

## Installation

Après l’installation, vous devriez pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que vous avez lancée. Vous devez vous connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous** avec la commande : `login anonymous`

Une fois connecté, vous pouvez commencer à télécharger les fichiers.

:::tip
Optionnel : Vous pouvez définir votre répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que vous souhaitez utiliser pour votre serveur. Par exemple : 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Lancez maintenant la commande `app_update 2430930` qui va démarrer le téléchargement. L’ID d’application **2430930** correspond au serveur dédié **ARK : Survival Ascended**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Merci de ne pas interrompre le processus avant sa fin pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::

### Création du fichier de démarrage

Une fois le téléchargement terminé avec succès, rendez-vous dans le répertoire où vous avez installé le serveur, puis dans le sous-dossier suivant :
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Dans ce sous-dossier, vous devez créer votre fichier de démarrage nécessaire pour lancer le serveur dédié. Créez un fichier nommé : `start-ark.bat`. Vous pouvez d’abord créer un document texte puis le renommer en `.bat`.

:::info
Assurez-vous que l’option "Afficher les extensions de fichiers" est activée dans l’Explorateur Windows pour que l’extension soit correcte.
:::

Ouvrez le fichier avec un éditeur de texte (comme Notepad++) et ajoutez-y le contenu suivant :
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Dans cette commande, remplacez `[server_name]`, `[admin_password]` et `[max_players]` par ce que vous souhaitez.

Si vous voulez aussi configurer un mot de passe pour que les joueurs puissent rejoindre, ajoutez `?ServerPassword=[join_password]` dans la commande ci-dessus. Cela donnera :
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Vérifiez que vous avez bien défini les variables et sauvegardé les modifications avant de fermer le fichier.

Votre serveur sera maintenant accessible localement via `127.0.0.1:7777` une fois que vous aurez lancé le fichier de démarrage et que le serveur sera en ligne. Cependant, vous devez encore ajouter des règles de redirection de ports dans le pare-feu Windows si vous voulez que votre serveur soit accessible publiquement, ce qui est expliqué dans la section suivante.

### Redirection des ports de votre serveur

Pour que votre serveur soit accessible au public, vous devez modifier les règles de redirection des ports utilisés par le processus du serveur dédié. Vous pouvez le faire soit via des commandes Powershell (plus simple), soit via l’interface classique du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvrez la barre de recherche Windows et tapez **Powershell**. Faites un clic droit et choisissez **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assurez-vous d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copiez-collez ensuite ces commandes dans votre invite Powershell :
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles nécessaires dans le pare-feu pour que votre serveur Ark : Survival Ascended soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilisez la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Vous devrez peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si vous êtes dans la page de base du Pare-feu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Créez de nouvelles règles pour votre serveur Ark : Survival Ascended. Pour cela, cliquez sur les règles entrantes et sortantes comme décrit ci-dessous et ajoutez-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 27020
- UDP entrant et sortant : 27015
- UDP entrant et sortant : 7777-7778

Utilisez notre [guide de redirection de ports (Pare-feu)](vserver-windows-port.md) si vous avez besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, votre serveur sera accessible publiquement, ce qui signifie que vous pourrez vous connecter via l’adresse IP de votre serveur. Pour cela, ouvrez la console en jeu sur Ark : Survival Ascended et tapez `open [votre_adresse_ip]:7777`.

On vous conseille de configurer d’abord les paramètres de votre serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, vous avez terminé la configuration de votre serveur dédié Ark : Survival Ascended. Vous pouvez effectuer des réglages supplémentaires via deux fichiers de configuration situés dans le répertoire de votre serveur.

Rendez-vous d’abord dans ces dossiers :
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Vous y trouverez les fichiers de configuration **DefaultGameUserSettings.ini** et **GameUserSettings.ini**. Dans ces fichiers, vous pouvez modifier un large éventail de variables et options concernant votre serveur.


:::warning[SOUTIEN CROSSPLAY]
Depuis le 18 novembre 2023, les propriétaires de serveurs doivent installer manuellement la liste de révocation des certificats, disponible sur https://dev.epicgames.com/ (ou directement sur http://crl.r2m02.amazontrust.com/r2m02.crl). Le fichier r2m02.crl téléchargé doit être installé (clic droit sur le fichier) en sélectionnant "Placer tous les certificats dans le magasin suivant" et en choisissant "Autorités de certification racine de confiance". Un redémarrage du système peut être nécessaire.

Si avant le 18 novembre 2023 les propriétaires avaient installé le fichier de certificat r2m02.cer et que le serveur n’apparaît plus, ce certificat doit être supprimé du système pour que les serveurs redeviennent visibles. Pour supprimer le certificat révoqué, lancez (Windows + R) certmgr.msc et cherchez "Amazon RSA 2048 M02" dans "Autorités de certification racine de confiance". Faites de même avec certlm.msc. Enfin, un redémarrage du système peut être nécessaire.
:::





## Démarrage & connexion à votre serveur

Il est maintenant temps de démarrer votre serveur. Cependant, pour que le serveur démarre correctement, vous devez installer [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sur votre VPS Windows.

:::info
Vous devez installer [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sur votre VPS Windows avant de tenter de démarrer le serveur si ce n’est pas déjà fait, car c’est une dépendance. Votre serveur risque de ne pas démarrer sans cela.
:::

Une fois installé, lancez le serveur en exécutant le fichier **start-ark.bat** que vous avez créé précédemment.

Cela ouvrira la console du serveur dans une invite de commande et démarrera le processus. Si tout se passe bien, votre serveur apparaîtra dans la liste des serveurs. Sinon, vous pourrez vous connecter directement en ouvrant la console en jeu et en tapant `open [votre_adresse_ip]:7777`.

Vous avez réussi à installer Ark : Survival Ascended sur votre serveur dédié Windows.