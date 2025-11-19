---
id: dedicated-centos
title: "Serveur dédié : Installation de CentOS"
description: "Découvrez comment installer et configurer avec succès CentOS sur votre serveur dédié pour des performances et une sécurité optimales → En savoir plus maintenant"
sidebar_label: Installer CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Voici un guide étape par étape pour installer et configurer le système d’exploitation CentOS sur votre serveur dédié. Suivez ces instructions attentivement pour garantir une installation réussie et une utilisation optimale.

:::info

La structure de ce guide est basée sur l’utilisation de CentOS 8.3. Les installations sur des versions antérieures ou plus récentes peuvent légèrement différer dans le processus.

:::



## Préparation

Pour l’installation et la configuration d’un système d’exploitation, il est important dans un premier temps de monter l’ISO correspondant. Plusieurs méthodes sont possibles :

1. Montage via la configuration initiale
2. Montage via iLO (Média virtuel)
3. Montage via iLO (Console distante)

Si vous ne connaissez pas encore le montage d’un fichier ISO, nous vous recommandons de consulter notre [guide Configuration initiale](dedicated-setup.md) ou [ISO personnalisée](dedicated-iso.md).



## Installation

Une fois l’ISO chargée avec succès, le serveur passe en mode installation.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Clavier  
Choisissez la disposition de clavier que vous préférez

* Date & Heure  
Sélectionnez votre fuseau horaire

* Mot de passe root  
Définissez un mot de passe pour le compte root. Il peut être libre, mais pensez à choisir un mot de passe fort et à le sauvegarder en lieu sûr.

* Destination de l’installation  
Sélectionnez le SSD sur lequel CentOS sera installé

* Réseau & Nom d’hôte  
À cause d’un problème d’incompatibilité, le réseau n’a pas pu être configuré pour l’instant, nous le ferons à la fin.

Une fois tous les paramètres configurés à votre convenance, cliquez sur « Begin Installation ».

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

Après la fin de l’installation, retirez le fichier ISO de votre serveur et cliquez sur « Reboot System ».



## Configuration

### Réseau

Ensuite, nous allons configurer le périphérique réseau, ce qui nécessite la mise à jour de certains fichiers. Veuillez monter ce fichier ISO sur votre serveur, via la console distante ou directement via iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

Une fois l’ISO montée avec succès, il faut la monter dans le système pour y accéder.

```mount /dev/sr0 /mnt```

Le fichier ISO est maintenant monté dans `/mnt`

```rpm -i /mnt/be2net.rpm```

Ensuite, installez le paquet de mise à jour.

```modprobe be2net```

À cette étape, lancez la mise à jour, cela peut prendre quelques secondes.  
Vous pouvez vérifier avec `ip a s` si un périphérique réseau nommé `eno1` existe, si oui, redémarrez votre système.

Après le redémarrage, configurez le périphérique réseau.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Remplissez le fichier avec les données suivantes :

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Quittez nano en appuyant sur `CTRL+X` puis `Y`

Il faut maintenant démarrer le périphérique réseau avec `ifup eno1` 

:::info
Votre serveur dédié devrait maintenant avoir une connexion internet fonctionnelle.
:::





## Conclusion

Félicitations, vous avez installé avec succès CentOS sur votre serveur dédié. Pour toute question ou aide supplémentaire, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂