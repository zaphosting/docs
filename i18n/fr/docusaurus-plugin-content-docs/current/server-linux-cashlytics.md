---
id: server-linux-cashlytics
title: "Installer Cashlytics sur un serveur Linux - Auto-hébergez votre gestionnaire financier IA"
description: "Apprenez à installer et exécuter Cashlytics sur votre VPS Linux avec Docker pour gérer vos finances personnelles et votre budget avec l’aide de l’IA → Découvrez-le maintenant"
sidebar_label: Installer Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) est une plateforme moderne de **gestion des finances personnelles et de budget** conçue pour vous aider à suivre vos dépenses, gérer vos budgets et obtenir des insights sur vos habitudes financières. En analysant les données de transactions et les catégories de dépenses, Cashlytics vous aide à comprendre où va votre argent et comment améliorer votre planification financière.

La plateforme peut aussi s’intégrer en option avec une **assistance IA**, vous permettant d’analyser les données financières, d’identifier les tendances de dépenses et de recevoir des conseils intelligents sur votre comportement budgétaire.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Auto-héberger Cashlytics sur votre propre serveur vous donne un **contrôle total sur vos données financières** tout en gardant vos outils de budget accessibles de partout via une interface web. Vous prévoyez d’héberger Cashlytics vous-même ? Ce guide vous accompagne pas à pas pour l’installation avec Docker sur votre VPS Linux.

<InlineVoucher />

## Cas d’usage de Cashlytics

Cashlytics peut être utilisé dans plein de scénarios personnels et pros où l’organisation financière et le budget sont importants. Les cas typiques incluent :

- Suivi des dépenses personnelles et des budgets mensuels
- Surveillance des habitudes de dépenses et des comportements financiers
- Gestion de plusieurs sources de revenus et catégories financières
- Génération d’insights IA pour un budget plus malin
- Hébergement d’un tableau de bord financier privé et sous contrôle total

Comme c’est auto-hébergé, Cashlytics est parfait pour les utilisateurs qui veulent une alternative respectueuse de la vie privée aux outils financiers basés sur le cloud.

## Prérequis

Avant d’installer Cashlytics, assurez-vous que votre VPS répond aux exigences suivantes.

| Matériel | Minimum | Recommandé |
|----------|---------|------------|
| CPU | 1 cœur | 2 cœurs |
| RAM | 2 Go | 4 Go |
| Espace disque | 10 Go | 20 Go |



De plus, les logiciels suivants doivent être installés :

- Docker
- Docker Compose

Si Docker n’est pas encore installé, suivez notre guide pour installer [Docker](dedicated-linux-docker.md) avant de continuer.



<InlineServiceLink />



## Préparation

Commencez par créer un dossier projet pour l’installation de Cashlytics.

```bash
mkdir cashlytics && cd cashlytics
```

Téléchargez ensuite les fichiers de configuration Docker officiels de Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Créez votre fichier de configuration d’environnement en copiant le fichier exemple.

```
cp .env.example .env
```

Le fichier `.env` contient les variables de configuration nécessaires pour faire tourner Cashlytics.



## Installation



### Ouvrir le fichier `.env`

Ouvrez le fichier `.env` et configurez les variables d’environnement requises.

```
nano .env
```



### Configurer le mot de passe de la base de données

Définissez un mot de passe sécurisé pour la base de données PostgreSQL utilisée par Cashlytics.

```
POSTGRES_PASSWORD=your_secure_password_here
```



### Configurer la connexion à la base de données

Mettez à jour la chaîne de connexion à la base de données en utilisant le même mot de passe défini ci-dessus.

```
DATABASE_URL=postgresql://cashlytics:your_secure_password_here@postgres:5432/cashlytics
```



### Assistant IA optionnel

Cashlytics supporte un assistant IA optionnel qui peut analyser les données financières et fournir des insights budgétaires. Pour activer cette fonctionnalité, ajoutez votre clé API OpenAI.

```
OPENAI_API_KEY=sk-your-openai-key
```

Si vous ne souhaitez pas utiliser l’assistant IA, cette variable peut rester vide.



## Démarrer Cashlytics

Une fois la configuration terminée, lancez l’application avec Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker va télécharger les images nécessaires et démarrer les services Cashlytics. Pour vérifier que les conteneurs tournent, utilisez :

```
docker ps
```



## Accéder à Cashlytics

Une fois les conteneurs démarrés avec succès, vous pouvez accéder à l’interface web de Cashlytics. Ouvrez votre navigateur et allez sur :

```
http://VOTRE_IP_SERVEUR:3000
```

Remplacez VOTRE_IP_SERVEUR par l’adresse IP de votre VPS. Une fois l’interface chargée, vous pouvez commencer à configurer vos finances, budgets et catégories.

## Conclusion

Félicitations ! Vous avez installé avec succès Cashlytics sur votre serveur Linux. Vous pouvez maintenant utiliser la plateforme pour suivre vos dépenses, gérer vos budgets et obtenir des insights sur vos données financières.

Faire tourner Cashlytics sur votre propre VPS/serveur dédié garantit que vos infos financières restent sous votre contrôle tout en profitant d’outils de budget modernes et d’une analyse optionnelle pilotée par IA.

Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />