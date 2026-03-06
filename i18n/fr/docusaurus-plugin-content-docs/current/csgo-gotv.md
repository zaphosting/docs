---
id: csgo-gotv
title: "CS:GO : GOTV"
description: "Découvrez comment diffuser des streams de jeu en direct avec délai et enregistrement automatique pour les spectateurs et revivez les matchs à tout moment → En savoir plus maintenant"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

GOTV offre la possibilité de diffuser les parties en direct avec un léger délai. Cela signifie que les personnes extérieures qui ne participent pas au jeu peuvent aussi suivre ce qui se passe sur le serveur. Cette technologie est également utilisée dans les célèbres tournois de Counter-Strike afin que les spectateurs puissent profiter du spectacle. De plus, les diffusions peuvent être automatiquement enregistrées, pour que vous puissiez les revoir ensuite.

<InlineVoucher />

## Activation

L’activation du service GOTV se fait via le fichier de configuration **server.cfg**. Les commandes nécessaires doivent y être ajoutées :

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuration

Les commandes ci-dessus sont obligatoires pour que le serveur maître GOTV soit activé et accessible. Cependant, il existe d’autres commandes pour une configuration avancée :

|            Commande            |                         Description                         |
| :----------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"    |        Les spectateurs peuvent prendre le rôle de cameraman        |
| tv_allow_static_shots "0\|1"   |    Utilise des caméras à orientation fixe pour filmer    |
|     tv_autorecord "0\|1"       | Enregistre automatiquement toutes les parties en démos GOTV. Le format du fichier démo est auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"        | Tente de se reconnecter après un timeout réseau |
| tv_chattimelimit "secondes"    | Limite la fréquence d’écriture des spectateurs à x secondes |
|       tv_debug "0\|1"          |             Affiche les infos de debug GOTV             |
|   tv_delaymapchange "0\|1"     | Retarde le changement de map jusqu’à la fin de la diffusion |
|      tv_maxclients "n"         |          Nombre max de clients sur le serveur GOTV          |
|        tv_maxrate "n"          | Bande passante max autorisée pour les spectateurs GOTV, 0 == illimité |
|        tv_msg "texte"          |           Envoie un message à tous les spectateurs           |
|        tv_name "nom"           | Nom d’hôte GOTV. Définit le nom GOTV tel qu’il apparaît dans le navigateur de serveurs et la barre de statut |
|       tv_nochat "0\|1"         |           Active/Désactive le chat GOTV           |
|    tv_password "motdepasse"    |       Protège la diffusion GOTV avec un mot de passe       |
|     tv_record "nomdefichier"   |             Lance l’enregistrement d’une démo GOTV             |
|           tv_stop              |                 Arrête la diffusion GOTV                 |
|        tv_stoprecord           |            Arrête l’enregistrement d’une démo GOTV             |
|           tv_title             |           Définit le nom de la diffusion GOTV           |

## Établir la connexion

Si la fonction est activée sur le serveur, l’accès se fait via l’adresse IP et le port GOTV qui lui est attribué sur le serveur. Pour se connecter, il faut utiliser la console dans le jeu. Vous pouvez alors vous connecter avec la commande suivante :

```
connect SERVERIP:27020
```

Les démos enregistrées manuellement ou automatiquement sont stockées dans le répertoire principal (/gxxxxx/CS:GO/game/csgo) du serveur CS:GO. Elles peuvent être téléchargées via l’accès FTP fourni. Si vous ne savez pas encore comment accéder via FTP, vous trouverez un guide ici : [Accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Avec la lecture de démo depuis le jeu, la démo téléchargée peut être sélectionnée via **Load** et lancée avec le bouton **Play**.

<InlineVoucher />