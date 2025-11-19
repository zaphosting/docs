---
id: dedicated-freebsd
title: "Serveur dédié : Installation de FreeBSD"
description: "Découvrez comment installer et configurer FreeBSD sur votre serveur dédié pour des performances et une fiabilité optimales → En savoir plus maintenant"
sidebar_label: Installer FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ce guide vous explique étape par étape comment installer et configurer le système d’exploitation FreeBSD sur votre serveur dédié. Suivez ces instructions attentivement pour garantir une installation réussie et une utilisation optimale du système.

:::info

La structure de ce guide est basée sur l’utilisation de FreeBSD 13.0. Les installations avec des versions antérieures ou plus récentes peuvent légèrement différer dans le processus.

:::



## Préparation

Pour l’installation et la configuration d’un système d’exploitation, il est d’abord important de monter l’ISO correspondante. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si vous ne savez pas encore comment monter un fichier ISO, référez-vous à notre [configuration initiale](dedicated-setup.md) ou au guide [ISO perso](dedicated-iso.md).



## Installation
Une fois l’ISO chargée avec succès, le serveur démarre le processus d’installation.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

On lance l’installation en appuyant sur `Entrée` ![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Choisissez la disposition du clavier qui vous convient puis continuez.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Choisissez le nom d’hôte souhaité.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Vous pouvez sélectionner des paquets système optionnels à installer, puis validez avec OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Ici, vous pouvez créer des partitions. Dans cet exemple, on utilise un RAID0. Plus d’infos sur les RAID dans [Configurer RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Si vous n’avez pas de modifications, continuez avec `Entrée`.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Comme on a un RAID0, on choisit pas de redondance.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Sélectionnez votre volume avec `Espace` puis validez avec `Entrée`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

On vérifie que toutes les données seront effacées.

:::info
Votre serveur est en train de configurer le système, cela peut prendre plusieurs minutes.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Entrez votre mot de passe puis validez avec `Entrée`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Choisissez "Non" pour la configuration IPv4/IPv6, cela se fera à la fin.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Choisissez "Oui" et sélectionnez votre fuseau horaire ainsi que la date/heure.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Vous pouvez modifier les services qui démarrent automatiquement au lancement du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Si besoin, ajustez les paramètres de sécurité.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

L’installation est terminée, choisissez "Quitter" et confirmez avec `Entrée`.

:::info
Retirez le fichier ISO dans votre iLO et choisissez "Redémarrer"
:::



## Configuration

### Réseau

Pour activer la carte réseau, connectez-vous à votre système avec le mot de passe.

Ouvrez loader.conf avec un éditeur de votre choix, par exemple `ee /boot/loader.conf` et ajoutez la ligne suivante :

```if_oce_load="YES"```

Quittez l’éditeur en appuyant sur `CTRL+C` puis tapez exit, ensuite redémarrez votre serveur dédié.

***

Après le redémarrage, modifiez le rc.conf, par exemple avec `ee /etc/rc.conf`, ajoutez les lignes suivantes :

```
ifconfig_oce0="DHCP"
```

:::caution
Le nom de la carte réseau dans l’exemple **oce0** peut être différent. Assurez-vous d’indiquer la bonne carte réseau. Vous pouvez vérifier cela avec la commande ifconfig. L’adresse sera alors récupérée automatiquement via le serveur DHCP.
:::

Cela devrait ressembler à ça :

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Quittez l’éditeur avec `CTRL+C` puis tapez "exit", ensuite lancez la commande `/etc/netstart` une fois.

:::info
Votre serveur devrait maintenant avoir une connexion internet active.
:::



## Conclusion

Félicitations, vous avez installé avec succès FreeBSD sur votre serveur dédié. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂