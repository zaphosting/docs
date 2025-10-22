---
id: cs2-cstv
title: "CS2 : CSTV"
description: "Découvre comment diffuser des streams de jeux en direct avec un léger délai et un enregistrement automatique pour les spectateurs, et revivre les matchs à tout moment → En savoir plus maintenant"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

CSTV offre la possibilité de diffuser les parties en direct avec un petit délai. Cela signifie que les personnes extérieures qui ne participent pas au jeu peuvent aussi suivre ce qui se passe sur le serveur. Cette technologie est également utilisée dans les célèbres tournois de Counter-Strike pour que les spectateurs puissent profiter du spectacle. De plus, les diffusions peuvent être automatiquement enregistrées, pour que tu puisses les revoir plus tard.

<InlineVoucher />

## Activation

L’activation du service CSTV se fait via le fichier de configuration **server.cfg**. Les commandes nécessaires doivent y être ajoutées :

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Configuration

Les commandes ci-dessus sont obligatoires pour activer et rendre accessible le serveur maître CSTV. Mais il existe d’autres commandes pour une configuration avancée :

|            Commande            |                         Description                         |
| :----------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"    |        Les spectateurs peuvent prendre le rôle de cameraman        |
| tv_allow_static_shots "0\|1"   |    Utilise des caméras à orientation fixe pour filmer    |
|     tv_autorecord "0\|1"       | Enregistre automatiquement toutes les parties en démos CSTV. Le format du fichier démo est auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"        | Tente de se reconnecter après un timeout réseau |
| tv_chattimelimit "secondes"    | Limite la fréquence d’écriture des spectateurs à x secondes |
|       tv_debug "0\|1"          |             Affiche les infos de debug CSTV             |
|   tv_delaymapchange "0\|1"     | Décale le changement de map jusqu’à la fin de la diffusion |
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

Si la fonction est activée sur le serveur, l’accès se fait via l’adresse IP et le port CSTV qui lui est attribué. Pour se connecter, il faut utiliser la console dans le jeu. Tu peux alors te connecter avec la commande suivante :

```
connect SERVERIP:27020
```

Les démos enregistrées manuellement ou automatiquement sont stockées dans le répertoire principal (/gxxxxx/cs2/game/csgo) du serveur CS: GO. Tu peux les télécharger via l’accès FTP fourni. Si tu ne sais pas encore comment accéder via FTP, voici un guide pour t’aider : [Accès via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Avec la lecture de démo depuis le jeu, tu peux sélectionner la démo téléchargée via **Load** et la lancer avec le bouton **Play**.

<InlineVoucher />