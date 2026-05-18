---
id: dedicated-windows-plex
title: "Configurer Plex sur un serveur Windows - Stream ta bibliothèque média perso"
description: "Découvre comment gérer et streamer ta médiathèque perso facilement avec Plex pour un accès fluide sur tous tes appareils → En savoir plus maintenant"
sidebar_label: Installer Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plex est une plateforme pour gérer et streamer du contenu média comme des films, séries, musiques et photos depuis un emplacement central. Avec Plex Media Server, tu peux organiser tes bibliothèques, enrichir automatiquement avec des métadonnées, et streamer sur différents appareils, que ce soit sur ton réseau local ou via internet. Plex est donc une solution flexible pour accéder facilement et confortablement à ta collection perso.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

## Installer Plex avec le One Click Apps Installer

Tu peux installer **Plex** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après la configuration initiale des apps, ouvre le catalogue, cherche **Plex**, et lance le déploiement avec ton projet, environnement et paramètres de domaine préférés. C’est une méthode rapide et simple pour déployer et gérer **Plex** sans passer par la ligne de commande, tout en profitant d’une gestion web intégrée, du support de domaine personnalisé, et du SSL quand c’est dispo.

## Prérequis

Avant d’installer **Plex**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel   | Minimum      | Recommandation ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 4 cœurs vCPU | 8 cœurs vCPU               |
| RAM        | 4 Go         | 8 Go                       |
| Espace disque | 25 Go      | 25 Go                      |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur remplit ces conditions avant de lancer l’installation :

**Dépendances :** Aucune

**Système d’exploitation :** Windows 10/11, Windows Server 20XX

Assure-toi que toutes les dépendances sont en place et que la bonne version du système d’exploitation est utilisée pour éviter les problèmes de compatibilité lors de l’installation de Plex.

## Installation

Le site officiel de Plex Media propose la version Windows actuelle du Plex Media Server en téléchargement. Prends la version 64 bits pour garantir la compatibilité avec toutes les éditions Windows modernes. Le téléchargement est dispo ici : https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

Après téléchargement, lance l’installateur pour configurer Plex Media Server. Une fois installé, la configuration se fait via l’interface web dans ton navigateur, où tu pourras créer des bibliothèques et gérer ta collection média.

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

Une fois la configuration terminée, l’interface web de Plex Media Server s’ouvrira automatiquement dans ton navigateur par défaut. À ce stade, tu devras te connecter avec un compte Plex existant ou en créer un si tu n’en as pas encore.

Cette étape de connexion est nécessaire pour lier le serveur à ton compte perso, ce qui active des fonctionnalités comme l’accès à distance, la gestion des utilisateurs, et la synchronisation entre appareils. Après authentification, tu seras dans ton instance Plex Media. Tu pourras alors créer des bibliothèques pour films, séries, musiques ou photos, récupérer automatiquement les métadonnées, et partager du contenu avec d’autres utilisateurs sur ton réseau local ou via internet.

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

Après l’installation, tu peux aussi accéder à ton Plex Media Server depuis l’extérieur en ouvrant l’interface web dans un navigateur via `http://<adresse-ip>:32400`. Remplace `<adresse-ip>` par l’adresse publique de ton serveur.

Le port 32400 est le port par défaut pour l’accès web Plex et devra peut-être être autorisé dans ton pare-feu ou routeur si tu veux te connecter depuis internet.

Une fois l’adresse atteinte, tu seras redirigé vers la page de connexion Plex et pourras gérer tes bibliothèques et paramètres. Pour un accès externe sécurisé, il est recommandé d’activer l’Accès à distance dans les paramètres Plex, ce qui garantit une connexion chiffrée et relaie le trafic via le service Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Plex avec succès sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant ta configuration.

- [Plex.com](https://Plex.com/) - Site officiel
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centre d’aide Plex (Documentation)

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂