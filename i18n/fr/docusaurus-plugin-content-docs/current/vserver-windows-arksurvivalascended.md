---
id: vserver-windows-arksurvivalascended
title: "VPS : Installation d’un serveur dédié ARK Survival Ascended sous Windows"
description: "Découvrez comment installer un serveur dédié ARK : Survival Ascended sur un VPS Windows pour un gameplay fluide et un contrôle total du serveur → En savoir plus maintenant"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu as un VPS Windows et tu veux installer le service serveur dédié ARK : Survival Ascended dessus ? T’es au bon endroit. Dans ce guide, on t’explique étape par étape comment installer ce service sur ton serveur.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="Installation d’un serveur dédié ARK : Survival Ascended sur VPS Windows" description="Tu préfères voir les choses en action pour mieux comprendre ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout. Que tu sois pressé ou que tu préfères apprendre de manière plus fun et visuelle !"/>
<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton VPS via Bureau à distance (RDP). Utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md) si tu as besoin d’aide pour ça.

Une fois connecté à ton serveur, tu devras installer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement une gamme de fichiers Steam Workshop et serveurs dédiés. Télécharge [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crée un nouveau dossier quelque part sur ton serveur, ici on l’appellera `steamcmd`. Va dans ton dossier Téléchargements, trouve le fichier **steamcmd.zip** que tu viens de télécharger et place-le dans ton dossier `steamcmd`. Maintenant, décompresse le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec une appli comme 7zip ou Winrar. Tu devrais obtenir un fichier **steamcmd.exe** décompressé.

Lance simplement **steamcmd.exe** et attends que l’installation soit complètement terminée.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux passer à l’installation du serveur dédié ARK : Survival Ascended dans la section suivante.

## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que tu as lancée. Tu dois te connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous**, avec la commande : `login anonymous`

Une fois connecté, tu peux commencer à télécharger les fichiers.

:::tip
Optionnel : Tu peux définir ton répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que tu souhaites utiliser pour ton serveur. Par exemple : 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Lance maintenant la commande `app_update 2430930` qui va démarrer le téléchargement. L’ID de l’application **2430930** correspond au **serveur dédié ARK : Survival Ascended**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Ne coupe pas le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un moment, mais ça vaut le coup d’être patient ! :)
:::

### Création du fichier de démarrage

Une fois le téléchargement terminé avec succès, va dans le répertoire où tu as fait l’installation et rends-toi dans le sous-dossier suivant :
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

Dans ce sous-dossier, tu devras créer ton fichier de démarrage nécessaire pour lancer le serveur dédié. Crée un fichier nommé : `start-ark.bat`. Tu peux d’abord créer un document texte puis le renommer en `.bat`.

:::info
Assure-toi que l’option "Afficher les extensions de fichiers" est activée dans l’Explorateur Windows pour que l’extension soit bien prise en compte.
:::

Ouvre le fichier avec un éditeur de texte (comme Notepad++) et ajoute le contenu suivant :
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Dans cette commande, remplace `[server_name]`, `[admin_password]` et `[max_players]` par ce que tu souhaites.

Si tu veux aussi configurer un mot de passe pour que les joueurs puissent rejoindre, ajoute `?ServerPassword=[join_password]` dans la commande, ce qui donnera :
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Vérifie que tu as bien configuré les variables et sauvegardé avant de fermer le fichier.

Ton serveur sera accessible localement via `127.0.0.1:7777` une fois que tu lanceras le fichier de démarrage et que le serveur sera en ligne. Par contre, tu dois encore ajouter des règles de redirection de ports dans le pare-feu Windows si tu veux que ton serveur soit accessible publiquement, ce qu’on va voir dans la section suivante.

### Redirection de ports pour ton serveur

Pour que ton serveur soit accessible publiquement, tu dois modifier les règles de redirection des ports utilisés par le processus du serveur dédié. Tu peux le faire soit via des commandes Powershell (plus simple), soit via la page du Pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows, cherche **Powershell**. Clique droit et choisis **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires.

:::info
Assure-toi d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console Powershell :
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Ces commandes vont créer automatiquement les règles nécessaires dans le pare-feu pour que ton serveur Ark : Survival Ascended soit accessible publiquement.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du Pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu ouvres la page de base du Pare-feu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Tu dois créer de nouvelles règles pour ton serveur Ark : Survival Ascended. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 27020
- UDP entrant et sortant : 27015
- UDP entrant et sortant : 7777-7778

Utilise notre [guide Redirection de ports (Pare-feu)](vserver-windows-port.md) si tu as besoin d’aide supplémentaire.

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible publiquement, tu pourras donc te connecter via l’adresse IP de ton serveur. Pour ça, ouvre la console en jeu sur Ark : Survival Ascended et tape `open [ton_adresse_ip]:7777`.

On te conseille de configurer d’abord les réglages de ton serveur via la section suivante avant d’y accéder.

## Configuration

À ce stade, tu as fini la configuration de ton serveur dédié Ark : Survival Ascended. Tu peux faire des réglages supplémentaires via deux fichiers de configuration situés dans le répertoire de ton serveur.

Va d’abord dans ces dossiers :
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Tu trouveras les fichiers de config **DefaultGameUserSettings.ini** et **GameUserSettings.ini**. Dans ces fichiers, tu peux modifier plein de variables et options concernant ton serveur.

:::warning[SOUTIEN CROSSPLAY]
Depuis le 18 novembre 2023, les propriétaires de serveurs doivent installer manuellement la liste de révocation des certificats qu’on peut récupérer sur https://dev.epicgames.com/ (ou directement sur http://crl.r2m02.amazontrust.com/r2m02.crl). Le fichier r2m02.crl téléchargé doit être installé (clic droit sur le fichier) en sélectionnant "Placer tous les certificats dans le magasin suivant" et en choisissant "Autorités de certification racines de confiance". Un redémarrage du système peut être nécessaire.

Si avant le 18 novembre 2023 les propriétaires avaient installé le fichier de certificat r2m02.cer et que le serveur n’apparaît plus, ce certificat doit être supprimé du système pour que les serveurs redeviennent visibles. Pour supprimer le certificat révoqué, lance (Windows + R) certmgr.msc et cherche "Amazon RSA 2048 M02" dans "Autorités de certification racines de confiance". Fais la même chose avec certlm.msc. Enfin, un redémarrage du système peut être nécessaire.
:::

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Mais pour que ça marche, tu dois d’abord installer [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sur ton VPS Windows.

:::info
Tu dois installer [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) sur ton VPS Windows avant de tenter de démarrer le serveur si ce n’est pas déjà fait, car c’est une dépendance. Ton serveur risque de ne pas démarrer sans.
:::

Une fois que c’est installé, lance le serveur en exécutant le fichier **start-ark.bat** que tu as créé.

Cela ouvrira la console du serveur dans une invite de commande et démarrera le processus. Si tout se passe bien, ton serveur apparaîtra dans la liste des serveurs. Sinon, tu pourras te connecter directement en ouvrant la console en jeu et en tapant `open [ton_adresse_ip]:7777`.

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur ARK-Survival-Ascended sur ton VPS ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />