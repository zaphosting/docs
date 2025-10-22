---
id: csgo-gotv
title: "CSGO : Infos sur GOTV"
description: "Découvre comment GOTV permet la diffusion en direct des parties et l’enregistrement des replays pour une meilleure expérience spectateur dans CS:GO et jeux similaires → En savoir plus maintenant"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guide Archivé
Ce document a été archivé. Les documents sont archivés s’ils ne sont plus pertinents, incorrects ou à jour. Il a été archivé pour les raisons suivantes :

Raison : CS:GO n’est plus proposé activement et n’est plus développé. CS2 est la suite de CS:GO. On te recommande de passer à CS2.
::::



## C’est quoi GOTV ?


GOTV permet de diffuser les parties en direct avec un léger délai. Ça veut dire que les personnes extérieures qui ne jouent pas peuvent quand même suivre ce qui se passe sur le serveur. Cette techno est aussi utilisée dans les tournois célèbres de Counter-Strike pour que les spectateurs puissent mater le show. En plus, les diffusions peuvent être automatiquement sauvegardées, pour que tu puisses les revoir après.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Comment utiliser GOTV ?

Si la fonction est activée sur le serveur, tu peux y accéder via l’adresse IP et le port GOTV attribué sur le serveur. Pour te connecter, il te faut la console dans le jeu. Là, tu peux te connecter avec la commande suivante :

```
connect SERVERIP:27020
```


Les démos enregistrées manuellement ou automatiquement sont stockées dans le répertoire principal (gxxxxx / csgo / csgo /) du serveur CS:GO. Tu peux les télécharger via l’accès FTP fourni. Si tu ne sais pas encore comment accéder via FTP, voici un guide pour t’aider : [Accès via FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Avec la lecture de démo depuis le jeu, tu peux sélectionner la démo téléchargée via **Load** et la lancer avec le bouton **Play**.



## Installation du serveur maître GOTV

Pour activer le serveur maître GOTV, il faut ajouter les commandes manquantes dans le **server.cfg**. Voici les commandes à ajouter :

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Ces commandes sont obligatoires pour que le serveur maître GOTV soit activé et accessible. Mais il y a aussi d’autres commandes pour une config avancée :

|            Commande            |                         Description                         |
| :--------------------------: | :----------------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Les spectateurs peuvent prendre le rôle de cameraman        |
| tv_allow_static_shots "0\|1" |    Utilise des caméras à orientation fixe pour filmer    |
|     tv_autorecord "0\|1"     | Enregistre automatiquement toutes les parties en démos GOTV. Le format du fichier démo est auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Tente de se reconnecter après un timeout réseau |
| tv_chattimelimit "secondes"  | Limite la fréquence d’écriture des spectateurs à toutes les x secondes |
|       tv_debug "0\|1"        |             Affiche les infos de debug GOTV             |
|   tv_delaymapchange "0\|1"   | Retarde le changement de map jusqu’à la fin de la diffusion |
|      tv_maxclients "n"       |          Nombre max de clients sur le serveur GOTV           |
|        tv_maxrate "n"        | Bande passante max autorisée pour les viewers GOTV, 0 == illimité |
|        tv_msg "texte"         |           Envoie un message à tous les spectateurs           |
|        tv_name "nom"        | Nom d’hôte GOTV. Définit le nom GOTV tel qu’il apparaît dans le navigateur de serveurs et dans la barre de statut |
|       tv_nochat "0\|1"       |           Active/Désactive le chat GOTV           |
|    tv_password "motdepasse"    |       Protège la diffusion GOTV avec un mot de passe        |
|     tv_record "nomdefichier"     |             Lance l’enregistrement d’une démo GOTV             |
|           tv_stop            |                 Arrête la diffusion GOTV                  |
|        tv_stoprecord         |            Arrête l’enregistrement d’une démo GOTV              |
|           tv_title           |           Définit le nom de la diffusion GOTV           |

<InlineVoucher />