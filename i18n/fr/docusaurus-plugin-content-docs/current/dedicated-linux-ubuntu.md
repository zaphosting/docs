---
id: dedicated-linux-ubuntu
title: "Serveur dédié : Installation d’Ubuntu 24.04"
description: "Apprends à installer et configurer Ubuntu sur ton serveur dédié pour des performances et une fiabilité optimales → Découvre-le maintenant"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voici un guide étape par étape pour installer et configurer le système d’exploitation Ubuntu sur ton serveur dédié. Suis ces instructions attentivement pour t’assurer que l’OS est bien installé et que tu en tires le meilleur parti.



## Préparation

Pour installer et configurer un système d’exploitation, il est important dans un premier temps de monter l’ISO correspondant. Plusieurs méthodes sont possibles pour le faire :

1. Montage via la configuration initiale
2. Montage via iLO (Média Virtuel)
3. Montage via iLO (Console à distance)

Si tu n’as pas encore l’habitude de monter un fichier ISO, le mieux est de consulter notre [guide Configuration initiale](dedicated-setup.md) ou [ISO perso](dedicated-iso.md).



## Installation

Une fois l’ISO monté et chargé avec succès, le serveur devrait démarrer le processus d’installation. La langue que tu souhaites utiliser pour ton OS sera définie au début de l’installation. Choisis une langue parmi celles proposées et valide avec la touche `Entrée`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

Ensuite, il faut sélectionner la disposition du clavier adaptée à la langue choisie. Choisis celle qui te convient le mieux. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Vient ensuite la configuration réseau. Par défaut, le serveur est configuré via DHCP. L’adaptateur réseau par défaut est `eno1`. Confirme les paramètres par défaut et continue. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Tu peux configurer un proxy supplémentaire en option, mais ce n’est pas obligatoire. Si tu n’en as pas besoin, passe simplement cette étape. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Maintenant, choisis le miroir d’archive Ubuntu (serveur de téléchargement des paquets). Nos serveurs dédiés sont situés en Allemagne, il est donc recommandé de sélectionner le miroir allemand pour bénéficier des meilleures vitesses de téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Tu peux maintenant définir les partitions dans la configuration du stockage. Tu peux utiliser une grande partition unique ou la subdiviser si besoin. Si tu souhaites utiliser tout le SSD comme une seule partition, choisis simplement `Utiliser un disque entier` et continue.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

Le setup crée automatiquement les volumes, tu peux continuer en sélectionnant l’option `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Avant de lancer le processus, un message t’informe que toutes les données existantes seront supprimées. Confirme ce message avec l’option `Continuer`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configure ton compte utilisateur comme tu le souhaites, tu peux aussi utiliser le compte root en changeant simplement le mot de passe.
Tu peux naviguer dans les options avec la touche tabulation ou les flèches. Une fois prêt, valide en cochant `Terminé`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

L’installation du setup SSH est recommandée. Si tu souhaites gérer ton serveur via SSH, sélectionne l’option d’installation et confirme.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu propose quelques snaps par défaut, si tu veux en utiliser certains, coche ceux qui t’intéressent.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Pour finir, il faut éjecter l’ISO pour éviter qu’il ne soit rechargé au redémarrage du serveur. Redémarre ton serveur une fois pour terminer le processus. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuration



### Changer le mot de passe de l’utilisateur root

Tu peux facilement changer le mot de passe de l’utilisateur root. Exécute `sudo su`, puis entre ton mot de passe. Ensuite, lance `sudo passwd` pour modifier le mot de passe. Entre le nouveau mot de passe souhaité pour root. Voilà, tu peux maintenant te connecter avec le compte `root`.



## Conclusion

Félicitations, tu as installé avec succès Ubuntu 24.04 sur ton serveur dédié. Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂



