---
id: vserver-windows-supabase
title: "VPS : Installer Supabase sur Windows"
description: "Découvrez comment installer et configurer Supabase, une plateforme Postgres open-source fiable avec authentification et fonctionnalités en temps réel → En savoir plus maintenant"
sidebar_label: Installer Supabase
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Supabase est une plateforme de développement Postgres open-source qui fournit une base de données Postgres complète, ainsi que l’authentification, des API instantanées, du temps réel et du stockage, faisant de lui une alternative open-source à Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Prérequis

Avant d’installer **Supabase**, assure-toi que ton environnement d’hébergement répond aux exigences suivantes pour garantir une installation fluide et des performances optimales.

| Matériel  | Minimum      | Recommandation ZAP-Hosting |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU Cœurs | 4 vCPU Cœurs               |
| RAM       | 4 Go         | 8 Go                       |
| Espace disque | 25 Go     | 25 Go                      |

Le logiciel nécessite que toutes les dépendances soient installées et qu’il tourne sur un système d’exploitation supporté. Vérifie que ton serveur remplit ces conditions avant de lancer l’installation :

**Dépendances :** `Git`, `Docker (Engine et Compose)`

**Système d’exploitation :** Dernière version d’Ubuntu/Debian compatible avec Docker 2

Assure-toi que toutes les dépendances sont installées et que la bonne version du système d’exploitation est utilisée pour éviter les problèmes de compatibilité lors de l’installation de Supabase.

## Préparation

Avant de configurer **Supabase**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation à la dernière version et l’installation de toutes les dépendances requises. Ces préparations garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mise à jour du système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour système. Ça garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

### Installer les dépendances
Une fois la mise à jour terminée, tu peux passer à l’installation des dépendances.

#### Git
Les données Supabase seront téléchargées via GitHub. Il faut donc que Git soit installé en premier. Pour ça, installe [Git pour Windows](https://git-scm.com/downloads/win) sur ton serveur.

#### Docker

Supabase sera déployé et exécuté sur ta machine via un conteneur Docker. Docker doit donc être installé en premier. Pour ça, installe [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) sur ton serveur.

Un guide complet sur l’installation et l’utilisation de Docker est dispo dans notre [guide Docker](vserver-windows-docker.md).

## Installation
Maintenant que tous les prérequis sont remplis et que la préparation est faite, tu peux lancer l’installation de Supabase. Ouvre l’invite de commandes. Récupère le dépôt Supabase, crée un dossier projet dédié, et copie les fichiers Docker et le fichier d’environnement exemple dedans.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Place-toi dans le dossier projet, récupère les dernières images des conteneurs, et lance la stack en mode détaché.
```
cd supabase-project
docker compose pull
docker compose up -d
```

Tu peux maintenant accéder à Supabase Studio via `http://<ton-ip>:8000`. Un identifiant et un mot de passe te seront demandés. Par défaut, les identifiants sont :

- Nom d’utilisateur : `supabase`
- Mot de passe : `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Identifiants par défaut
Ton appli tourne maintenant avec les identifiants par défaut. Sécurise tes services au plus vite en suivant les instructions ci-dessous.
:::

## Configuration
Ne déploie jamais avec des valeurs par défaut ou d’exemple. Remplace tous les placeholders par des secrets forts et uniques, vérifie la configuration selon tes exigences de sécurité, et redémarre tous les services pour appliquer les changements.

Génère des clés API sécurisées avant d’exposer un service. Commence par choisir un secret JWT de 40 caractères. Tu peux utiliser la valeur fournie ou créer la tienne. Stocke ce secret localement dans un endroit sûr. Ne le partage pas et ne le commit pas dans un contrôle de version. Utilise ce secret pour générer un JWT, puis dérive les clés API anon et service avec le formulaire référencé dans la doc Supabase : https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Exécute le formulaire deux fois pour produire les deux clés. Mets à jour ton fichier `./docker/.env` avec :

- `ANON_KEY` : clé anon
- `SERVICE_ROLE_KEY` : clé service

Mets à jour les secrets obligatoires dans `./docker/.env`. Ces valeurs doivent être définies pour un déploiement fonctionnel :

- `POSTGRES_PASSWORD` : mot de passe pour le rôle `postgres`
- `JWT_SECRET` : utilisé par PostgREST et GoTrue
- `SITE_URL` : URL de base de ton site
- `SMTP_*` : identifiants du serveur mail
- `POOLER_TENANT_ID` : ID du tenant utilisé par le pooler Supavisor

Protège le tableau de bord avec de nouveaux identifiants avant la mise en production. Modifie `./docker/.env` :

- `DASHBOARD_USERNAME` : utilisateur du tableau de bord
- `DASHBOARD_PASSWORD` : mot de passe du tableau de bord

Tu peux définir plusieurs utilisateurs du tableau de bord dans `./docker/volumes/api/kong.yml` :

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Pour activer toutes les fonctionnalités du tableau de bord en dehors de `localhost`, définis `SUPABASE_PUBLIC_URL` dans `./docker/.env` à l’URL ou l’IP que tu utiliseras pour accéder au tableau de bord.

Applique les changements de configuration en redémarrant la stack :

```
docker compose down
docker compose up -d
```

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Supabase avec succès sur ton VPS. On te conseille aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant la configuration de ton serveur :

- [Supabase.com](https://Supabase.com/) - Site officiel
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Documentation Supabase

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />