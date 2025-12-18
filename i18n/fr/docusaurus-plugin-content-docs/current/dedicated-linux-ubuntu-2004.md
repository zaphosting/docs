---
id: dedicated-linux-ubuntu-2004
title: "Serveur dédié : Installation d’Ubuntu 20.04"
description: "Découvrez comment installer et configurer Ubuntu sur votre serveur dédié pour des performances optimales et un support à long terme → En savoir plus maintenant"
sidebar_label: Ubuntu 20.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voici un guide étape par étape pour installer et configurer le système d’exploitation Ubuntu sur votre serveur dédié. Suivez ces instructions attentivement pour garantir une installation réussie et une utilisation optimale.



:::warning Nouvelle version disponible / Détails EOL

La dernière version d’Ubuntu est la version [24.04](dedicated-linux-ubuntu.md). Nous recommandons d’utiliser la version la plus récente pour vos projets à long terme.

Le support des anciennes versions d’Ubuntu sera arrêté tôt ou tard. Voici les dates clés pour la version 20.04 :

- Fin du support standard : 01.05.2025
- Fin du support Ubuntu Pro : 01.04.2030
- Fin du support Legacy : 01.04.2032

Plus d’infos sur le [site officiel](https://ubuntu.com/about/release-cycle).
:::




## Préparation

Pour installer et configurer un système d’exploitation, il est important de monter l’ISO correspondant. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si vous ne savez pas encore comment monter un fichier ISO, consultez notre [guide Configuration initiale](dedicated-setup.md) ou [ISO perso](dedicated-iso.md).



## Installation

Une fois l’ISO monté et chargé avec succès, le serveur démarre le processus d’installation. La langue que vous souhaitez utiliser pour votre OS sera définie au début. Choisissez une langue parmi celles proposées et validez avec la touche `Entrée`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Ensuite, sélectionnez la disposition du clavier adaptée à votre langue. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Puis vient la configuration réseau. Par défaut, le serveur est configuré en DHCP. L’adaptateur réseau par défaut est `eno1`. Confirmez les paramètres par défaut et continuez. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Vous pouvez configurer un proxy supplémentaire en option, mais ce n’est pas obligatoire. Si vous n’en avez pas besoin, passez cette étape. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Définissez maintenant le miroir d’archive Ubuntu (serveur de téléchargement des paquets). Nos serveurs dédiés sont situés en Allemagne, il est donc conseillé de choisir le miroir allemand pour bénéficier des meilleures vitesses de téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Vous pouvez maintenant définir les partitions dans la configuration du stockage. Vous pouvez utiliser une grande partition unique ou la subdiviser si besoin. Si vous souhaitez utiliser tout le SSD comme une seule partition, choisissez simplement `Utiliser un disque entier` et continuez.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Le setup crée automatiquement les volumes, vous pouvez continuer en sélectionnant l’option `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Avant de lancer le processus, un message vous informe que toutes les données existantes seront supprimées. Confirmez ce message avec l’option `Continuer`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configurez votre compte utilisateur comme vous le souhaitez, vous pourrez aussi utiliser le compte root en changeant son mot de passe.
Naviguez dans les options avec la touche tabulation ou les flèches. Quand c’est bon, validez avec `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)





L’installation du setup SSH est recommandée. Si vous souhaitez gérer le serveur via SSH, sélectionnez l’option d’installation et confirmez.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu propose quelques snaps par défaut, cochez ceux que vous souhaitez utiliser.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Pour finir, l’ISO doit être éjecté pour éviter qu’il ne soit rechargé au redémarrage du serveur. Redémarrez le serveur une fois pour terminer le processus. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuration



### Changer le mot de passe de l’utilisateur root

Vous pouvez facilement changer le mot de passe de l’utilisateur root. Exécutez `sudo su`, puis entrez votre mot de passe. Ensuite, lancez `sudo passwd` pour modifier le mot de passe. Entrez le nouveau mot de passe souhaité pour root. Voilà, vous pouvez maintenant vous connecter avec le compte `root`.



## Conclusion

Félicitations, vous avez installé avec succès Ubuntu 20.04 sur votre serveur dédié. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂