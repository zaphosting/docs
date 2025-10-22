---
id: dedicated-linux-ubuntu-2204
title: "Serveur dédié : Installation d’Ubuntu 22.04"
description: "Découvre comment installer et configurer Ubuntu sur ton serveur dédié pour des performances optimales et un support longue durée → En savoir plus maintenant"
sidebar_label: Ubuntu 22.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voici un guide étape par étape pour installer et configurer le système d’exploitation Ubuntu sur ton serveur dédié. Suis ces instructions à la lettre pour réussir l’installation et exploiter ton OS au max.



:::warning Nouvelle version dispo / détails EOL

La dernière version d’Ubuntu est la [24.04](dedicated-linux-ubuntu.md). On te recommande d’utiliser la version la plus récente pour tes projets longue durée.

Le support des anciennes versions d’Ubuntu sera arrêté tôt ou tard. Voici les dates clés pour la version 22.04 :

- Fin du support standard : 01.04.2027
- Fin du support Ubuntu Pro : 01.04.2032
- Fin du support Legacy : 01.04.2034

Plus d’infos sur le [site officiel](https://ubuntu.com/about/release-cycle).
:::


<InlineVoucher />

## Préparation

Pour installer et configurer un système d’exploitation, il faut d’abord monter l’ISO correspondant. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si tu ne connais pas encore le montage d’un fichier ISO, consulte notre [guide Configuration initiale](dedicated-setup.md) ou [ISO perso](dedicated-iso.md).



## Installation

Une fois l’ISO monté et chargé avec succès, le serveur lance le processus d’installation. Choisis la langue que tu souhaites utiliser pour ton OS dès le début. Sélectionne une langue et valide avec la touche `Entrée`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Ensuite, choisis la disposition du clavier adaptée à ta langue. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Puis, la configuration réseau s’affiche. Par défaut, le serveur est configuré en DHCP. L’adaptateur réseau par défaut est `eno1`. Confirme les paramètres par défaut et continue. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Tu peux configurer un proxy en option, mais ce n’est pas obligatoire. Si tu n’en as pas besoin, passe cette étape. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Maintenant, choisis le miroir Ubuntu (serveur de téléchargement des paquets). Nos serveurs dédiés sont en Allemagne, donc on te conseille de sélectionner le miroir allemand pour avoir la meilleure vitesse de téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Tu peux définir les partitions dans la configuration du stockage. Soit tu utilises une grosse partition unique, soit tu subdivises selon tes besoins. Si tu veux utiliser tout le SSD en une seule partition, choisis `Utiliser un disque entier` et continue.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Le setup crée automatiquement les volumes, tu peux valider avec l’option `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Avant de lancer le processus, un message t’informe que toutes les données existantes seront supprimées. Confirme avec `Continuer`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configure ton compte utilisateur comme tu veux, tu peux aussi utiliser le compte root en fin de setup en changeant le mot de passe. Navigue avec tab ou les flèches. Quand c’est bon, coche `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

L’installation du setup SSH est recommandée. Si tu veux gérer ton serveur via SSH, sélectionne cette option et confirme.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu propose quelques snaps par défaut, coche ceux que tu souhaites utiliser.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Pour finir, il faut éjecter l’ISO pour éviter qu’il se recharge au redémarrage. Redémarre ton serveur une fois pour terminer.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuration



### Changer le mot de passe du user root

Tu peux facilement changer le mot de passe du user root. Tape `sudo su`, puis entre ton mot de passe. Ensuite, lance `sudo passwd` pour modifier le mot de passe. Entre le nouveau mot de passe root. Voilà, tu peux maintenant te connecter avec le user `root`.



## Conclusion

Bravo, tu as installé avec succès Ubuntu 22.04 sur ton serveur dédié. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂






<InlineVoucher />