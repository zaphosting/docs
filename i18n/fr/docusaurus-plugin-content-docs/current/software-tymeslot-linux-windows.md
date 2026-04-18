---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Apprenez à déployer Tymeslot avec Docker, les conteneurs Docker, et les bases de l'installation Docker sur Linux ou Windows pour une planification auto-hébergée. -> En savoir plus maintenant"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot est une plateforme open-source de planification de réunions et de rendez-vous développée avec Elixir et Phoenix LiveView. Dans ce guide, vous apprendrez ce qu’est Tymeslot, ce dont vous avez besoin pour le faire tourner, et comment le déployer sur Linux ou Windows avec Docker.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de déployer Tymeslot, assurez-vous que votre système répond aux exigences de base et que Docker est installé.

### Exigences

Les exigences suivantes sont basées sur les informations disponibles du projet et le brouillon de configuration fourni :

| Exigence | Recommandation |
|---|---|
| CPU | Au moins `1` vCPU |
| RAM | Au moins `2 GB` |
| Espace disque | Au moins `10 GB` |
| Système d’exploitation | Linux ou Windows |
| Runtime conteneur | Docker |
| Réseau | Accès au port `4000` |

### Ce qui est vérifié et ce qui ne l’est pas

:::info Disponibilité de la source
Le dépôt Tymeslot confirme que le projet est une plateforme open-source de planification de réunions construite avec Elixir et Phoenix LiveView, et que des fichiers liés à Docker comme `Dockerfile.docker` et `docker-compose.yml` existent dans le dépôt.

Cependant, les étapes exactes de déploiement en production, le nom de l’image, et toutes les variables d’environnement requises ne sont pas entièrement vérifiables à partir du matériel source fourni ici. C’est pourquoi ce guide utilise les informations du brouillon disponible et marque clairement les valeurs que vous devez vérifier dans le dépôt officiel avant une utilisation en production.
:::

### Installer Docker

Vous devez avoir Docker avant de pouvoir exécuter Tymeslot dans un conteneur.

- Sur Linux, installez Docker Engine en suivant la documentation officielle [Docker documentation](https://docs.docker.com/engine/install/)
- Sur Windows, installez [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker pour Windows
Si vous utilisez Docker pour Windows, assurez-vous que la virtualisation est activée et que Docker Desktop est lancé avant de continuer.
:::

## Aperçu du logiciel

Tymeslot appartient à la catégorie *Scheduling* et est conçu pour la gestion auto-hébergée des rendez-vous et réunions.

| Propriété | Valeur |
|---|---|
| Nom | `Tymeslot` |
| Catégorie | `Scheduling` |
| Source | `https://github.com/tymeslot/tymeslot` |
| Stack technique | `Elixir`, `Phoenix LiveView` |
| Mode de déploiement | Auto-hébergé, support Docker |
| Mention hebdo | Self-Host Weekly, 10 avril 2026 |

### Pourquoi utiliser Tymeslot

Tymeslot peut être utile si vous souhaitez :

- héberger votre propre plateforme de planification
- garder les données de réservation sur votre propre infrastructure
- gérer les rendez-vous sans dépendre d’une plateforme SaaS tierce
- déployer une application web moderne avec des conteneurs Docker

## Options de déploiement

D’après les informations disponibles, deux approches sont possibles :

| Méthode | Statut |
|---|---|
| Déploiement Docker | Recommandé |
| Installation native Elixir/Phoenix | Possible, mais plus avancée |

Pour la plupart des utilisateurs, Docker est la meilleure option car il simplifie l’installation, les mises à jour et la gestion du service.

## Installer Tymeslot avec Docker

C’est la méthode la plus pratique pour les systèmes Linux et Windows.

### Récupérer l’image Docker

Le brouillon fourni utilise la référence d’image suivante :

```bash
docker pull youruser/tymeslot:latest
```

:::caution Vérifiez d’abord l’image Docker
Le nom exact de l’image publique n’est pas confirmé par le contenu du dépôt récupéré. Avant d’utiliser cette commande en production, vérifiez le nom correct de l’image dans le dépôt officiel Tymeslot, les notes de version, ou la page Docker Hub si elle existe.
:::

### Démarrer le conteneur

Vous pouvez lancer Tymeslot avec la commande suivante issue du brouillon :

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Si vous utilisez Windows PowerShell, la commande `openssl` peut ne pas être disponible par défaut. Dans ce cas, générez une valeur aléatoire sécurisée séparément et remplacez manuellement `SECRET_KEY_BASE`.

### Référence de la commande exemple

| Option | But |
|---|---|
| `--name tymeslot` | Définit le nom du conteneur |
| `-p 4000:4000` | Expose Tymeslot sur le port `4000` |
| `-e SECRET_KEY_BASE=...` | Définit le secret de l’application pour le chiffrement et les sessions |
| `-e PHX_HOST=localhost` | Définit le nom d’hôte utilisé par Phoenix |
| `-v tymeslot_data:/app/data` | Persiste les données de l’application |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste les données PostgreSQL |
| `youruser/tymeslot:latest` | Nom de l’image Docker du brouillon |

### Générer une clé secrète sous Linux

Si `openssl` est installé, vous pouvez générer un secret ainsi :

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Générer une clé secrète sous Windows PowerShell

Vous pouvez générer un secret temporaire dans PowerShell ainsi :

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Utilisez votre propre secret
Ne réutilisez pas les secrets d’exemple en production. Générez toujours votre propre `SECRET_KEY_BASE` et stockez-le en sécurité.
:::

## Configurer Tymeslot

Avant la première utilisation, vous devez vérifier les paramètres d’exécution les plus importants.

### Variables d’environnement

Le brouillon confirme les variables d’environnement suivantes :

| Variable | Exemple | But |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Sécurise les sessions et fonctions de chiffrement |
| `PHX_HOST` | `[your_domain]` ou `[your_server_ip]` | Définit le nom d’hôte public utilisé par l’application |

Pour les placeholders :

- `[your_secret_key]` est votre secret sécurisé généré
- `[your_domain]` est votre domaine public si vous en utilisez un
- `[your_server_ip]` est l’adresse IP de votre serveur pour un accès direct

### Configuration SMTP

Le brouillon mentionne aussi la configuration SMTP dans `config/prod.exs` pour les notifications par mail :

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note Vérification SMTP
Le format exact de la configuration mailer doit être vérifié dans le dépôt Tymeslot actuel avant de l’appliquer en production, car la configuration de l’application peut changer entre les versions.
:::

## Accéder à Tymeslot

Une fois le conteneur lancé, vous pouvez tester l’interface web.

### Accès local

Si vous testez localement, ouvrez :

```text
http://localhost:4000
```

### Accès distant

Si Tymeslot tourne sur un serveur distant, ouvrez :

```text
http://[your_server_ip]:4000
```

Si vous avez configuré un domaine et un reverse proxy, vous pouvez aussi y accéder via :

```text
https://[your_domain]
```

## Pare-feu et réseau

Tymeslot nécessite un accès réseau sur le port que vous publiez depuis Docker.

### Port requis

| Port | Protocole | But |
|---|---|---|
| `4000` | TCP | Accès web à l’application Tymeslot |

### Considérations pare-feu

Vous devez vous assurer que :

- le port `4000` est ouvert sur le pare-feu du serveur si vous voulez un accès direct
- votre pare-feu cloud ou fournisseur autorise aussi ce port
- votre reverse proxy redirige correctement le trafic si vous utilisez un domaine

:::caution Exposition publique
Si vous exposez le port `4000` directement sur Internet, assurez-vous de comprendre les implications en matière de sécurité. Pour les déploiements en production, un reverse proxy avec HTTPS est généralement préférable.
:::

## Installation native optionnelle

Une installation native peut être possible si vous préférez ne pas utiliser Docker. Cette méthode est plus avancée et nécessite un environnement compatible Elixir et Phoenix.

### Étapes natives basiques

Selon le brouillon fourni, le processus est :

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Notes sur le déploiement natif

Pour un déploiement natif, vous aurez aussi besoin de :

- Elixir
- Erlang/OTP
- dépendances Phoenix
- une base de données supportée
- une revue de la configuration production

:::info Complexité de l’installation native
Le matériel source récupéré ne fournit pas assez de détails vérifiés pour documenter une configuration native complète sous Linux ou Windows en production en toute sécurité. Si vous souhaitez utiliser cette méthode, consultez directement la documentation officielle du dépôt avant le déploiement.
:::

## Maintenance et dépannage

Après le déploiement, vous devez vérifier que le service reste disponible et que vos données sont persistantes.

### Vérifier le statut du conteneur

```bash
docker ps
```

### Voir les logs

```bash
docker logs tymeslot
```

### Redémarrer le conteneur

```bash
docker restart tymeslot
```

### Problèmes courants

| Problème | Cause possible | Action suggérée |
|---|---|---|
| La page web ne charge pas | Port `4000` bloqué | Vérifiez le pare-feu et le mapping des ports Docker |
| Le conteneur se ferme immédiatement | Variables d’environnement invalides | Vérifiez `SECRET_KEY_BASE` et les paramètres de l’image |
| Erreurs liées à la base de données | Problème de stockage persistant ou d’initialisation | Consultez les logs et vérifiez l’utilisation des volumes |
| Mauvais nom d’hôte dans les liens | `PHX_HOST` incorrect | Définissez `PHX_HOST` sur `[your_domain]` ou `[your_server_ip]` |

## Bonnes pratiques

### Utilisez des volumes persistants

Gardez toujours des volumes Docker persistants pour les données de l’application et de la base de données afin que la recréation du conteneur ne supprime pas vos données.

### Utilisez un reverse proxy

Pour les déploiements publics, il est généralement préférable de placer Tymeslot derrière un reverse proxy comme Nginx ou Apache et d’activer HTTPS.

### Vérifiez les changements en amont

Comme Tymeslot est activement développé, vous devez vérifier le dépôt officiel avant toute mise à jour. Cela est particulièrement important pour :

- les images Docker modifiées
- les variables d’environnement mises à jour
- les migrations de base de données
- les changements de configuration mail

## Références supplémentaires

| Ressource | Lien |
|---|---|
| Dépôt GitHub Tymeslot | [Dépôt officiel Tymeslot](https://github.com/tymeslot/tymeslot) |
| Mention Self-Host Weekly | [Self-Host Weekly - 10 avril 2026](https://selfh.st/weekly/2026-04-10/) |
| Documentation Docker | [Documentation Docker](https://docs.docker.com/) |
| Téléchargement Docker Desktop | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusion

Félicitations, vous avez appris avec succès à examiner et déployer Tymeslot sur Linux ou Windows en utilisant Docker. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂