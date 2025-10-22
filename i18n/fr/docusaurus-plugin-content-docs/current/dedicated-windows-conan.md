---
id: dedicated-windows-conan
title: "Serveur dédié : Configuration du serveur dédié Conan Exiles sous Windows"
description: "Découvrez comment configurer un serveur dédié Conan Exiles sur un serveur dédié Windows pour un gameplay fluide et une gestion facile → En savoir plus maintenant"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tu as un serveur dédié Windows et tu veux installer le service serveur dédié Conan Exiles dessus ? T’es au bon endroit. Dans ce guide, on va t’expliquer étape par étape comment installer ce service sur ton serveur.

<InlineVoucher />

## Préparation

Pour commencer, connecte-toi à ton serveur dédié via Remote Desktop (RDP). Si tu as besoin d’aide, utilise notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

:::note Outil de lancement serveur
En alternative à SteamCMD, les développeurs de Conan Exiles maintiennent un utilitaire de lancement de serveur super pratique qui peut être utilisé sous Windows pour faciliter le lancement d’un serveur.

On te recommande de lire le [post officiel sur le forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) si tu préfères utiliser cet outil.
:::

Une fois connecté à ton serveur, tu devras configurer **SteamCMD** pour pouvoir télécharger les fichiers nécessaires du serveur dédié. SteamCMD est la version **ligne de commande (CLI)** du client Steam, c’est l’outil qui te permet de télécharger facilement plein de fichiers Steam Workshop et serveurs dédiés. Télécharge [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crée un nouveau dossier quelque part sur ton serveur, ici on l’appellera `steamcmd`. Va dans ton dossier Téléchargements, trouve le fichier **steamcmd.zip** que tu viens de télécharger et place-le dans ton dossier `steamcmd`. Maintenant, décompresse le fichier en faisant un clic droit et en utilisant la fonction de décompression de Windows, ou avec un logiciel comme 7zip ou Winrar. Tu devrais obtenir un fichier **steamcmd.exe** décompressé.

Lance simplement **steamcmd.exe** et attends que l’installation soit complètement terminée.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Dès que le message **Loading Steam API.... OK** s’affiche, le processus est terminé avec succès et tu peux passer à l’installation du serveur dédié Conan Exiles dans la section suivante.

## Installation

Après l’installation, tu devrais pouvoir exécuter des commandes dans l’invite de commande **steamcmd.exe** que tu as lancée. Tu dois te connecter avant de pouvoir faire quoi que ce soit, en utilisant l’utilisateur **anonymous**, avec la commande : `login anonymous`

Une fois connecté, tu peux commencer à télécharger les fichiers.

:::tip
Optionnel : Tu peux définir ton répertoire d’installation préféré avec la commande `force_install_dir [chemin]`, en remplaçant `[chemin]` par le chemin que tu souhaites utiliser pour ton serveur. Par exemple : 
```
force_install_dir C:\Conan-Server
```
:::

Lance maintenant la commande `app_update 443030` qui va démarrer le téléchargement. L’ID de l’application **443030** correspond à **Conan Exiles**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Merci de ne pas interrompre le processus avant qu’il soit terminé pour éviter les erreurs. Ça peut prendre un peu de temps, mais ça vaut le coup d’être patient ! :)
:::

Une fois le téléchargement terminé, rends-toi dans le dossier où tous les fichiers du serveur ont été téléchargés. Ici, tu peux utiliser le fichier **StartServer.bat** pour démarrer le serveur. Cependant, on te conseille de configurer d’abord le port forwarding et ton serveur.

### Configuration du port forwarding pour ton serveur

Pour que ton serveur soit accessible au public, tu dois modifier les règles de redirection de ports pour les ports utilisés par le processus du serveur dédié. Tu peux le faire soit via des commandes Powershell, ce qui est plus simple, soit via la page du pare-feu Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Ouvre la barre de recherche Windows et cherche **Powershell**. Pense bien à faire un clic droit et **Exécuter en tant qu’administrateur** pour avoir les permissions nécessaires et que tout fonctionne correctement.

:::info
Assure-toi d’exécuter Powershell en mode Administrateur, sinon les réglages risquent de ne pas s’appliquer correctement.
:::

Copie-colle ensuite ces commandes dans ta console Powershell :
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Ces commandes vont automatiquement créer les règles de pare-feu nécessaires pour que ton serveur Conan Exiles soit accessible au public.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Utilise la recherche Windows pour ouvrir les **Paramètres du pare-feu Windows avec sécurité avancée**. Tu devras peut-être cliquer sur **Paramètres avancés** pour ouvrir la fenêtre complète si tu es sur la page de base du pare-feu.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Tu dois créer de nouvelles règles pour ton serveur Conan Exiles. Pour ça, clique sur les règles entrantes et sortantes comme expliqué ci-dessous et ajoute-les pour les protocoles et ports suivants :
- TCP entrant et sortant : 7777, 25575
- UDP entrant et sortant : 7777, 7778, 27015

Si tu as besoin d’aide, consulte notre guide [Port Forwarding (Pare-feu)](vserver-windows-port.md).

</TabItem>
</Tabs>

Une fois ces règles ajoutées, ton serveur sera accessible, tu pourras donc te connecter via l’adresse IP de ton serveur. On te conseille de configurer d’abord les paramètres de ton serveur dans la section suivante avant de te connecter.

## Configuration

À ce stade, tu as fini la configuration de base de ton serveur Conan Exiles. Tu peux faire des réglages supplémentaires via un fichier de configuration situé dans le dossier de ton serveur.

Va d’abord dans ce répertoire :
```
../Conan-Server/Engine/Config/Windows
```

Tu trouveras le fichier de configuration **WindowsServerEngine.ini**. Dans ce fichier, tu peux modifier plein d’options en ajoutant des paramètres spécifiques.

Par exemple, pour ajouter un nom de serveur, un mot de passe et un mot de passe admin, tu écris ça dans le fichier :
```
[OnlineSubsystem]
ServerName=[ton_nom_serveur]
ServerPassword=[ton_mot_de_passe]

[ServerSettings]
AdminPassword=[ton_mot_de_passe_admin]
```

On te recommande de jeter un œil au [Wiki Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) pour une liste complète des options disponibles.

## Démarrage & connexion à ton serveur

Il est temps de lancer ton serveur. Va dans le dossier principal de ton serveur Conan Exiles et lance le fichier **StartServer.bat** que tu as créé plus tôt pour démarrer le serveur. Ça ouvrira la console du serveur dans une invite de commande et lancera le processus. Tu pourras ensuite te connecter directement via le navigateur de serveurs en jeu en entrant l’IP et le port de ton serveur (par défaut 7777).

## Conclusion

Félicitations, tu as installé et configuré avec succès ton serveur Conan Exiles sur ton serveur dédié ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />