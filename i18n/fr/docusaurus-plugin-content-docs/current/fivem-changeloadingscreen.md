---
id: fivem-changeloadingscreen
title: "FiveM : Installation d’un écran de chargement personnalisé"
description: "Découvre comment personnaliser ton écran de chargement FiveM pour une expérience unique et un visuel serveur au top → En savoir plus maintenant"
sidebar_label: Installer un écran de chargement personnalisé
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

Tu veux utiliser ton propre écran de chargement personnalisé au lieu de celui par défaut de FiveM ? On t’explique ici comment faire et quelles étapes suivre !

<InlineVoucher />



## Préparation

Pour installer ton écran de chargement, il te faut d’abord trouver une ressource adaptée. Tu peux trouver un large choix de ressources sur le site officiel [Cfx.re](https://forum.cfx.re/c/releases/7). Ensuite, télécharge la ressource et décompresse-la sur ton PC.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Installation

L’installation de l’écran de chargement se fait via FTP. Connecte-toi à ton serveur de jeux via FTP. Si tu ne sais pas encore comment utiliser le FTP, jette un œil à notre [guide accès FTP](gameserver-ftpaccess.md).

Une fois connecté en FTP, rends-toi dans le dossier des ressources. Selon le framework que tu utilises, tu trouveras ton dossier ressources sous cette structure : `/gXXXXXX/fivem/YOUR_FRAMEWORK/resources`

Upload le dossier de ta ressource que tu as téléchargée et décompressée sur ton PC à cet emplacement.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Maintenant que la ressource de l’écran de chargement est bien uploadée, il faut encore l’ajouter dans le fichier de config du serveur `server.cfg`. Pour ça, connecte-toi à l’interface txAdmin et ouvre l’éditeur CFG.

Ajoute ensuite ta ressource dans la config avec la commande `start nomdelaressource`. Par exemple ici, ce serait `start loadingscreen`. Sauvegarde tes modifications et redémarre ton serveur.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusion

Si tu as suivi toutes les étapes, tu devrais voir ton nouvel écran de chargement au prochain redémarrage de ton serveur. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />