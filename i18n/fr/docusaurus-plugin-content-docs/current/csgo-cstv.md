---
id: csgo-cstv
title: "CS:GO : CSTV"
description: "Découvrez comment diffuser des streams de jeux en direct avec délai et enregistrement automatique pour les spectateurs et revivez les matchs à tout moment → En savoir plus maintenant"
sidebar_label: CSTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

CSTV offre la possibilité de diffuser des parties en direct avec un léger délai. Cela signifie que des personnes extérieures, qui ne participent pas au jeu, peuvent aussi suivre ce qui se passe sur le serveur. Cette technologie est également utilisée dans les célèbres tournois de Counter-Strike afin que les spectateurs puissent profiter du spectacle. De plus, les diffusions peuvent être automatiquement enregistrées, pour que vous puissiez les revoir plus tard.

<InlineVoucher />

## Activation

L’activation du service CSTV se fait via le fichier de configuration **server.cfg**. Les commandes nécessaires doivent y être ajoutées :

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuration

Les commandes ci-dessus sont obligatoires pour activer et rendre accessible le serveur maître CSTV. Cependant, il existe d’autres commandes pour une configuration avancée :

|            Commande            |                         Description                         |
| :----------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"    |        Les spectateurs peuvent prendre le rôle de cameraman        |
| tv_allow_static_shots "0\|1"   |    Utilise des caméras à orientation fixe pour filmer    |
|     tv_autorecord "0\|1"       | Enregistre automatiquement toutes les parties en démos CSTV. Le format du fichier démo est auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"        | Tente de se reconnecter après un timeout réseau |
| tv_chattimelimit "secondes"    | Limite la fréquence d’écriture des spectateurs à x secondes |
|       tv_debug "0\|1"          |             Affiche les infos de debug CSTV             |
|   tv_delaymapchange "0\|1"     | Décale le changement de carte jusqu’à la fin de la diffusion |
|      tv_maxclients "n"         |          Nombre max de clients sur le serveur CSTV          |
|        tv_maxrate "n"          | Bande passante max autorisée pour les spectateurs CSTV, 0 = illimité |
|        tv_msg "texte"          |           Envoie un message à tous les spectateurs           |
|        tv_name "nom"           | Nom d’hôte CSTV. Définit le nom CSTV tel qu’il apparaît dans le navigateur de serveurs et la barre de statut |
|       tv_nochat "0\|1"         |           Active/Désactive le chat CSTV           |
|    tv_password "motdepasse"    |       Protège la diffusion CSTV avec un mot de passe       |
|     tv_record "nomdefichier"   |             Lance l’enregistrement d’une démo CSTV             |
|           tv_stop              |                 Arrête la diffusion CSTV                 |
|        tv_stoprecord           |            Arrête l’enregistrement d’une démo CSTV             |
|           tv_title             |           Définit le nom de la diffusion CSTV           |

## Établir la connexion

Si la fonction est activée sur le serveur, l’accès se fait via l’adresse IP et le port CSTV qui lui est attribué. Pour se connecter, il faut utiliser la console dans le jeu. Vous pouvez alors vous connecter avec la commande suivante :

```
connect SERVERIP:27020
```

Les démos enregistrées manuellement ou automatiquement sont stockées dans le répertoire principal (/gxxxxx/CS:GO/game/csgo) du serveur CS:GO. Elles peuvent être téléchargées via l’accès FTP fourni. Si vous ne savez pas encore comment accéder via FTP, vous trouverez un guide ici : [Accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Avec la lecture de démo depuis le jeu, la démo téléchargée peut être sélectionnée via **Load** et lancée avec le bouton **Play**.

<InlineVoucher />