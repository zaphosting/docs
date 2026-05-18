---
id: server-linux-swush
title: "Installer Swush sur un serveur Linux - Crée ton propre coffre-fort privé pour médias et fichiers"
description: "Apprends à installer et lancer Swush sur ton VPS Linux pour créer une plateforme auto-hébergée de gestion de médias, fichiers et contenus → Découvre-le maintenant"
sidebar_label: Installer Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Swush](https://github.com/imthatdev/swush) est un coffre-fort numérique auto-hébergé et une plateforme de gestion de contenu conçue pour t’aider à organiser fichiers, médias et données personnelles dans un tableau de bord centralisé. L’application combine stockage de fichiers, outils de partage, streaming média et gestion des connaissances en une seule interface web.

Avec Swush, tu peux uploader et gérer tes fichiers, organiser ton contenu avec des dossiers et des tags, générer des liens partageables, et même streamer tes médias directement depuis ton serveur. Comme c’est entièrement auto-hébergé, tu gardes un contrôle total sur tes données et ton infrastructure, ce qui en fait une super alternative aux plateformes de stockage cloud.

L’application est développée avec des technologies modernes comme Next.js, TypeScript et TailwindCSS, offrant une interface rapide et réactive tout en restant facile à déployer sur un VPS ou un serveur dédié. Ce guide te guide pas à pas pour installer et lancer Swush sur un serveur Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Cas d’usage de Swush

Swush est pensé pour être un hub central pour ton contenu digital et tes workflows. Il peut être utilisé dans plein de scénarios différents :

- Gérer et organiser fichiers, images et documents
- Créer un serveur de jeux média perso pour streamer ton contenu uploadé
- Générer des liens sécurisés pour partager fichiers et médias
- Organiser tes connaissances comme notes, favoris ou extraits
- Héberger un tableau de bord privé pour tes workflows perso
- Automatiser les uploads et intégrations via l’API Swush

La plateforme regroupe plusieurs outils en un seul environnement, réduisant ta dépendance aux services cloud dispersés.

## Prérequis

Avant d’installer Swush, assure-toi que ton serveur répond aux exigences suivantes.

| Matériel | Minimum | Recommandé |
|----------|---------|------------|
| CPU | 1 cœur | 4 cœurs |
| RAM | 2 Go | 4 Go |
| Espace disque | 20 Go | 50 Go |

Logiciels requis :

- Runtime Bun
- Base de données PostgreSQL
- Git

Pense à mettre ton système à jour avant de commencer l’installation.

<InlineServiceLink />

## Préparation

Commence par créer un dossier pour l’installation de Swush.
```
mkdir swush
cd swush
```
Ensuite, clone le dépôt Swush.
```
git clone https://github.com/imthatdev/swush.git .
```
Installe les dépendances du projet avec Bun.
```
bun install
```
## Configuration

Avant de lancer l’application, crée le fichier de configuration d’environnement.
```
cp example.env .env
```
Ouvre le fichier `.env` et configure les valeurs requises :
```
APP_NAME=Swush
APP_URL=http://your-server-ip:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://username:password@localhost:5432/swush
```
Tu peux aussi configurer des options supplémentaires comme :

- Backend de stockage (local ou S3)
- Répertoire d’upload
- Paramètres SMTP pour notifications email
- Secrets d’authentification

Swush supporte à la fois le **stockage local et les systèmes compatibles S3**, te permettant de faire évoluer ton stockage selon ton environnement.

## Installation

Après avoir configuré les variables d’environnement, initialise le schéma de la base de données.
```
bun run push:db
```
Puis compile l’application.
```
bun run build
```
Démarre le serveur Swush.
```
bun start
```
L’application va maintenant démarrer et écouter sur le port **3000**.

## Accéder à Swush

Une fois le serveur lancé, ouvre ton navigateur et va à l’adresse :
```
http://YOUR_SERVER_IP:3000
```
Remplace `YOUR_SERVER_IP` par l’adresse IP de ton VPS/serveur dédié. Lors du premier accès au tableau de bord, un assistant de configuration te guidera pour créer ton premier compte et configurer le stockage.

Après la configuration, tu pourras commencer à uploader des fichiers, organiser tes médias et gérer ton contenu digital depuis le tableau de bord Swush.

## Conclusion

Félicitations ! Tu as installé avec succès **Swush** sur ton serveur Linux. Ton coffre-fort numérique auto-hébergé est prêt à gérer fichiers, partager médias et organiser ton contenu perso depuis un tableau de bord centralisé.

En hébergeant Swush toi-même, tu gardes un contrôle total sur tes données tout en profitant d’une plateforme moderne et respectueuse de ta vie privée.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’accompagner ! 🙂

<InlineVoucher />