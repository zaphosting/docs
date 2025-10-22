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

Plex est une plateforme pour gérer et streamer du contenu média comme des films, séries, musiques et photos depuis un emplacement central. Avec le Plex Media Server, vous pouvez organiser vos bibliothèques, enrichir automatiquement vos médias avec des métadonnées, et les streamer sur différents appareils, que ce soit sur votre réseau local ou via internet. Plex est donc une solution flexible pour accéder facilement et confortablement à vos collections perso.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Vous pensez à héberger ce service vous-même ? On vous guide pas à pas pour l’installer, le configurer, et tout ce qu’il faut savoir pour que ça roule.

<InlineVoucher />

## Prérequis

Avant d’installer **Plex**, assurez-vous que votre environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 cœurs vCPU | 8 cœurs vCPU               |
| RAM        | 4 Go         | 8 Go                       |
| Espace disque | 25 Go      | 25 Go                      |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifiez que votre serveur remplit ces conditions avant de lancer l’installation :

**Dépendances :** Aucune

**Système d’exploitation :** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64 bits

Assurez-vous que toutes les dépendances sont en place et que la bonne version du système d’exploitation est utilisée pour éviter tout souci de compatibilité lors de l’installation de Plex.

## Installation

Le site officiel de Plex Media propose la version Linux actuelle du Plex Media Server en téléchargement. Utilisez la version 64 bits pour garantir la compatibilité avec toutes les éditions Linux modernes. Lancez la commande suivante pour télécharger le fichier `.deb` :

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Une fois téléchargé, lancez l’installateur pour configurer le Plex Media Server. Après l’installation, la configuration se fait via l’interface web dans votre navigateur, où vous pourrez créer vos bibliothèques et gérer votre collection média. Exécutez cette commande pour démarrer l’installation :

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Pour configurer Plex Media Server, sur la même machine où vous avez installé le serveur, ouvrez un navigateur et allez à `http://127.0.0.1:32400/web`. À ce stade, vous devrez vous connecter avec un compte Plex existant ou en créer un si vous n’en avez pas encore.

Cette étape de connexion est obligatoire pour lier le serveur à votre compte perso, ce qui active des fonctionnalités comme l’accès à distance, la gestion des utilisateurs, et la synchronisation entre appareils. Une fois authentifié, vous accédez à votre instance Plex Media. Vous pouvez alors créer des bibliothèques pour films, séries, musiques ou photos, récupérer automatiquement les métadonnées, et partager du contenu avec d’autres utilisateurs sur votre réseau local ou via internet.

Après la configuration, vous pouvez aussi accéder à votre Plex Media Server depuis l’extérieur en ouvrant l’interface web dans un navigateur via `http://<adresse-ip>:32400`. Remplacez `<adresse-ip>` par l’adresse publique de votre serveur.

Le port 32400 est le port par défaut pour l’accès web à Plex et devra peut-être être autorisé dans votre pare-feu ou routeur si vous souhaitez vous connecter depuis internet.

Une fois l’adresse atteinte, vous serez redirigé vers la page de connexion Plex et pourrez gérer vos bibliothèques et paramètres. Pour un accès externe sécurisé, il est recommandé d’activer l’Accès à distance dans les paramètres Plex, ce qui garantit une connexion chiffrée et relaie le trafic via le service Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## Conclusion et ressources supplémentaires

Félicitations ! Vous avez maintenant installé et configuré Plex avec succès sur votre serveur dédié. On vous conseille aussi de jeter un œil aux ressources suivantes, qui pourront vous aider et vous guider encore plus dans la configuration de votre serveur :

- [Plex.com](https://Plex.com/) - Site officiel
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centre d’aide Plex (Documentation)

Vous avez des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />