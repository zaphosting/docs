---
id: dedicated-setup
title: "Serveur dédié : Configuration initiale"
description: "Découvrez comment configurer facilement votre serveur dédié ZAP et accéder à une variété de systèmes d’exploitation → En savoir plus maintenant"
sidebar_label: Configuration initiale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu débutes encore dans ce domaine et tu flippes un peu à l’idée de devoir configurer un service comme ça ou que ça soit compliqué ? Pas de stress ! Ce guide et notre assistant de configuration vont te guider pas à pas pour la mise en route de ton serveur dédié ZAP.

## Préparation

### Activation de l’iLO
Pour la configuration initiale, il faut d’abord activer l’interface d’administration iLO. Ça peut prendre un petit moment. Pour plus d’infos et pour utiliser l’interface iLO plus en détail, on te conseille de jeter un œil au [guide iLO](dedicated-ilo.md).

![EN](https://screensaver01.zap-hosting.com/index.php/s/xmAFAt4CXTt7b7c/preview)

Dès que l’iLO est activé, son statut doit s’afficher comme **Actif**. La session iLO est activée par défaut pour trois heures, après quoi il faudra la réactiver si tu veux y accéder à nouveau. Tu peux maintenant passer à la sélection de l’ISO.

### Sélection de l’ISO

L’étape suivante, c’est de choisir un ISO à monter pour la configuration initiale. Clique sur le menu déroulant, choisis un fichier ISO et clique sur le bouton **Insérer**.

![EN](https://screensaver01.zap-hosting.com/index.php/s/SfMfrWHpjAGeMgo/preview)

On propose une large sélection d’ISO pour les systèmes d’exploitation les plus courants comme Debian, Ubuntu, FreeBSD, Windows, CentOS, ArchLinux et Proxmox par défaut. Voici un tableau récapitulatif des systèmes et versions dispo :

| ISO (Système d’exploitation) | Versions                                              |
| ---------------------------- | ---------------------------------------------------- |
| Debian                       | 12, 11, 10.9, 9.13                                   |
| Ubuntu                       | 22.04.3, 22.04, 22.02, 18.04                         |
| FreeBSD                      | 13.0, 12.2, 11.4                                     |
| Windows                      | 2022 (EN/DE), 2019 (EN/DE), 2016 (EN/DE), 2012 (EN/DE) |
| CentOS                       | 7.9, 8.3                                             |
| ArchLinux                    | 2023                                                 |
| Proxmox                      | 8.0-2, 7.4-1, 7.1-1, 7.0-1, 6.4-1, 6.3-1             |

Tu peux aussi ajouter et monter ton propre ISO personnalisé. Pour savoir comment faire, on te recommande de consulter le **[guide ISO perso](dedicated-iso.md)**.

## Installation

### Monter et démarrer l’ISO

Une fois l’ISO sélectionné et inséré avec succès, il faut maintenant redémarrer le système pour que la modification soit prise en compte et que le boot se fasse depuis l’ISO. Clique simplement sur le bouton **Redémarrer**. Le redémarrage peut prendre un peu de temps.

![EN](https://screensaver01.zap-hosting.com/index.php/s/zPQagx6yD5nCM7L/preview)

### Utiliser l’iLO pour installer le système d’exploitation

La base pour installer ton système d’exploitation préféré est maintenant prête. Le système a monté l’ISO et lancé la configuration. Ouvre maintenant l’**interface d’administration iLO** de ton serveur et clique directement sur "Integrated Remote Console : **HTML 5**" pour accéder à l’écran de ton serveur. Plus d’infos sur la gestion de la console dans l’interface iLO sont dispo dans notre [guide iLO](dedicated-ilo.md).

L’installation du système d’exploitation se fait maintenant dans la console HTML. On propose aussi des guides pour les systèmes les plus courants. Pour en savoir plus sur les étapes suivantes, consulte les guides correspondants :

- [Installer Windows](dedicated-windows.md)
- [Installer Debian](dedicated-linux-debian.md)
- [Installer Ubuntu](dedicated-linux-ubuntu.md)
- [Installer FreeBSD](dedicated-freebsd.md)
- [Installer CentOS](dedicated-centos.md)
- [Installer Proxmox](dedicated-proxmox.md)