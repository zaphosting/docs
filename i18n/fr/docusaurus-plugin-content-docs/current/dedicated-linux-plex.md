---
id: dedicated-linux-plex
title: "Serveur dédié : Installer Plex sur Linux"
description: "Découvrez comment gérer et streamer votre bibliothèque média perso facilement avec Plex pour un accès simplifié sur tous vos appareils → En savoir plus maintenant"
sidebar_label: Installer Plex
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plex est une plateforme pour gérer et streamer du contenu média comme des films, séries, musiques et photos depuis un emplacement central. Avec le Plex Media Server, vous pouvez organiser vos bibliothèques, enrichir automatiquement vos médias avec des métadonnées, et les diffuser sur différents appareils, que ce soit sur votre réseau local ou via internet. Plex est donc une solution flexible pour accéder facilement et confortablement à vos collections perso.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.



## Prérequis

Avant d’installer **Plex**, assure-toi que ton environnement d’hébergement remplit les conditions suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 cœurs vCPU | 8 cœurs vCPU               |
| RAM        | 4 Go         | 8 Go                       |
| Espace disque | 25 Go      | 25 Go                      |

Le logiciel nécessite que toutes les dépendances requises soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur répond aux critères suivants avant de lancer l’installation :

**Dépendances :** Aucune

**Système d’exploitation :** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Assure-toi que toutes les dépendances sont en place et que la version du système d’exploitation est compatible pour éviter tout souci lors de l’installation de Plex.



## Installation

Le site officiel de Plex Media propose la version Linux actuelle du Plex Media Server en téléchargement. Utilise la version 64-bit pour garantir la compatibilité avec toutes les éditions Linux modernes. Lance la commande suivante pour télécharger le fichier `.deb`

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Une fois téléchargé, lance l’installateur pour configurer le Plex Media Server. Après l’installation, la configuration se fait via l’interface web dans ton navigateur, où tu pourras créer tes bibliothèques et gérer ta collection média. Exécute cette commande pour démarrer l’installation :

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Pour configurer Plex Media Server, sur la même machine où tu as installé le serveur, ouvre un navigateur et va sur `http://127.0.0.1:32400/web`. À ce stade, tu devras te connecter avec un compte Plex existant ou en créer un nouveau si tu n’en as pas encore.

Cette étape de connexion est obligatoire pour lier le serveur à ton compte perso, ce qui active des fonctionnalités comme l’accès à distance, la gestion des utilisateurs, et la synchronisation entre appareils. Une fois authentifié, tu seras dans ton instance Plex Media. Tu pourras alors créer des bibliothèques pour films, séries, musiques ou photos, récupérer automatiquement les métadonnées, et partager du contenu avec d’autres utilisateurs sur ton réseau local ou via internet.

Après la configuration, tu peux aussi accéder à ton Plex Media Server depuis l’extérieur en ouvrant l’interface web dans un navigateur via `http://<adresse-ip>:32400`. Remplace `<adresse-ip>` par l’adresse publique de ton serveur.

Le port 32400 est le port par défaut pour accéder à Plex via le web et devra peut-être être autorisé dans ton pare-feu ou routeur si tu souhaites te connecter depuis internet.

Une fois l’adresse atteinte, tu seras redirigé vers la page de connexion Plex et pourras gérer tes bibliothèques et paramètres. Pour un accès externe sécurisé, il est recommandé d’activer l’Accès à distance dans les paramètres Plex, ce qui garantit une connexion chiffrée et relaie le trafic via le service Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Plex avec succès sur ton serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant ta configuration.

- [Plex.com](https://Plex.com/) - Site officiel
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centre d’aide Plex (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂