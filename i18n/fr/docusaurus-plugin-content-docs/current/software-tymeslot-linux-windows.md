---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Apprenez à déployer Tymeslot avec Docker, gérer les conteneurs Docker, et examiner les points clés de configuration pour les environnements d’hébergement Linux et Windows. -> En savoir plus maintenant"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot est une plateforme open-source de planification de réunions et de rendez-vous développée avec Elixir et Phoenix LiveView. Dans ce guide, vous apprendrez les prérequis de Tymeslot, comment le déployer avec Docker sur Linux ou Windows, et quels points de configuration vérifier avant la mise en production.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, vous devez disposer d’un système capable d’exécuter Docker de manière fiable et d’exposer Tymeslot sur le réseau.

### Exigences

| Exigence | Recommandation |
| --- | --- |
| CPU | 1 vCPU ou plus |
| RAM | Au moins 2 Go |
| Espace disque | Au moins 10 Go |
| Système d’exploitation | Linux ou Windows |
| Plateforme de conteneurs | [Docker](https://www.docker.com/) |
| Port réseau | `4000/tcp` |

### Ce que vous devez avoir prêt

| Élément | Pourquoi c’est nécessaire |
| --- | --- |
| Un serveur Linux ou un système Windows | Pour héberger l’application |
| Docker installé | Tymeslot fournit des fichiers liés à Docker dans son dépôt |
| Accès réseau ouvert sur le port `4000` ou un reverse proxy | Pour accéder à l’interface web |
| Un nom d’hôte tel que `[your_domain]` | Recommandé pour une utilisation en production |
| Un secret fort généré | Nécessaire pour la sécurité des sessions et de l’application |

:::info Installation Docker requise
Ce guide se concentre sur Docker car le dépôt Tymeslot inclut des fichiers liés à Docker comme `Dockerfile.docker` et `docker-compose.yml`. Une installation native avec Elixir et Phoenix peut être possible, mais les étapes exactes pour la production n’ont pas été entièrement vérifiables à partir des sources fournies.
:::

### Note pour Windows

Sous Windows, vous avez généralement besoin d’un environnement Docker fonctionnel comme Docker Desktop. Si vous utilisez Docker pour Windows, assurez-vous que la virtualisation est activée et que Docker Desktop est lancé avant de continuer.

## À propos de Tymeslot

Tymeslot est présenté dans son dépôt comme une plateforme open-source de planification de réunions développée avec Elixir et Phoenix LiveView. Il est destiné à l’auto-hébergement et peut aussi être utilisé via l’offre cloud gérée du projet.

### Détails vérifiés du projet

| Attribut | Valeur |
| --- | --- |
| Nom | Tymeslot |
| Catégorie | Planification |
| Dépôt source | `https://github.com/tymeslot/tymeslot` |
| Mention hebdomadaire | Self-Host Weekly, 10 avril 2026 |
| Technologie | Elixir / Phoenix LiveView |
| Support auto-hébergement | Oui |

:::note Vérification des sources
Le dépôt confirme le nom du projet, son objectif et sa stack technologique. Cependant, certains détails d’exécution comme le nom exact de l’image Docker publiée, la liste complète des variables d’environnement, et le mapping officiel des ports en production n’étaient pas entièrement visibles dans le snapshot source fourni. Ces points doivent être vérifiés directement dans le dépôt officiel avant la mise en production.
:::

## Méthode de déploiement

Pour la plupart des utilisateurs, Docker est la méthode de déploiement la plus simple car elle isole les dépendances et facilite la gestion des mises à jour.

### Pourquoi Docker est recommandé

| Avantage | Explication |
| --- | --- |
| Installation simplifiée | Pas besoin d’installer manuellement Elixir, Erlang et Phoenix |
| Mises à jour plus propres | Vous pouvez remplacer les images Docker sans reconstruire l’environnement hôte |
| Meilleure portabilité | La même configuration de conteneur fonctionne sur Linux et Windows |
| Repli plus simple | Vous pouvez revenir à une version antérieure de l’image si nécessaire |

### Limite importante

:::caution Nom de l’image Docker à vérifier
Le brouillon fourni utilisait `youruser/tymeslot:latest` comme exemple d’image, mais c’est un simple placeholder et non un nom d’image officiel vérifié. Avant le déploiement, vérifiez dans le dépôt Tymeslot, son `README-Docker.md` ou les instructions du registre de conteneurs du projet pour confirmer la source correcte de l’image.
:::

## Installer Tymeslot avec Docker

Cette section montre un flux de déploiement basé sur Docker avec une référence d’image placeholder. Remplacez `[your_tymeslot_image]` par le nom d’image vérifié du projet officiel Tymeslot.

### Télécharger l’image

```bash
docker pull [your_tymeslot_image]
```

### Générer une clé secrète

Sous Linux, vous pouvez générer un secret fort avec :

```bash
openssl rand -base64 64 | tr -d '\n'
```

Sauvegardez la sortie en lieu sûr et utilisez-la comme `[your_secret_key_base]`.

Sous Windows, vous pouvez générer une valeur aléatoire sécurisée avec une autre méthode fiable si `openssl` n’est pas disponible dans votre shell.

### Lancer le conteneur

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Référence des paramètres

| Paramètre | Signification |
| --- | --- |
| `-d` | Démarre le conteneur en mode détaché |
| `--name tymeslot` | Attribue un nom lisible au conteneur |
| `-p 4000:4000` | Mappe le port `4000` de l’hôte au port `4000` du conteneur |
| `-e SECRET_KEY_BASE=...` | Définit le secret de l’application |
| `-e PHX_HOST=...` | Définit le nom d’hôte utilisé par Phoenix |
| `-v tymeslot_data:/app/data` | Persiste les données de l’application |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste les données PostgreSQL si utilisé dans le conteneur |

:::caution Vérifiez d’abord les chemins des volumes
Les chemins de volumes indiqués ci-dessus proviennent du brouillon et n’ont pas été entièrement confirmés dans la documentation officielle. Vérifiez la documentation Docker officielle de Tymeslot avant de vous fier à ces chemins exacts en production.
:::

### Vérifier le statut du conteneur

```bash
docker ps
```

Pour consulter les logs :

```bash
docker logs tymeslot
```

Si vous rencontrez des problèmes au démarrage, les logs sont le premier endroit à vérifier.

## Déploiement optionnel avec Docker Compose

Si vous préférez gérer les conteneurs avec Compose, vous pouvez définir le service dans un fichier `docker-compose.yml`. C’est souvent plus simple à maintenir que de longues commandes `docker run`.

### Exemple de fichier Compose

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Démarrez la stack avec :

```bash
docker compose up -d
```

:::tip Gestion avec Compose
Utiliser Compose facilite les mises à jour, redémarrages et sauvegardes car la configuration du conteneur reste dans un seul fichier. C’est particulièrement utile si vous gérez plusieurs images Docker sur le même hôte.
:::

## Configurer Tymeslot

Une fois le conteneur lancé, vérifiez les valeurs de configuration les plus importantes.

### Variables d’environnement principales

| Variable | But |
| --- | --- |
| `SECRET_KEY_BASE` | Protège les sessions et secrets de l’application |
| `PHX_HOST` | Définit le nom d’hôte public ou l’adresse IP |

Utilisez les placeholders ainsi :

- `[your_secret_key_base]` est votre secret sécurisé généré
- `[your_domain_or_ip]` est le nom d’hôte public ou l’IP du serveur, par exemple `schedule.[your_domain]` ou `[your_server_ip]`

### Configuration SMTP

Le brouillon indique que SMTP peut être configuré pour les notifications email dans `config/prod.exs`. Exemple :

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

:::note Vérification de la configuration SMTP
L’exemple ci-dessus provient du brouillon fourni et reflète une configuration typique d’un mailer Elixir. Vous devez néanmoins comparer avec les fichiers de configuration actuels de Tymeslot car les paramètres mail peuvent changer entre les versions.
:::

## Réseau et accès

Une fois Tymeslot en fonctionnement, vous devez vous assurer qu’il est accessible depuis votre navigateur.

### Accéder à l’interface web

Ouvrez l’URL suivante dans votre navigateur :

```text
http://[your_server_ip]:4000
```

Si vous avez configuré un reverse proxy et DNS, vous pouvez utiliser à la place :

```text
https://[your_domain]
```

### Référence des ports

| Port | Protocole | Usage |
| --- | --- | --- |
| `4000` | TCP | Accès web par défaut selon la configuration du brouillon |

### Considérations pare-feu

Vous devez autoriser le trafic entrant sur `4000/tcp` si vous accédez directement à Tymeslot.

:::caution Exposition publique
Si vous exposez Tymeslot directement sur Internet, il est fortement recommandé de le placer derrière un reverse proxy avec HTTPS. Cela améliore la sécurité et offre un accès plus propre basé sur le domaine.
:::

## Recommandation Reverse Proxy

Un reverse proxy est conseillé si vous souhaitez utiliser un nom de domaine et un certificat TLS.

### Pourquoi utiliser un reverse proxy

| Avantage | Explication |
| --- | --- |
| Support HTTPS | Chiffre le trafic entre les utilisateurs et votre service |
| Accès par domaine | Permet d’utiliser `[your_domain]` au lieu d’un port brut |
| Gestion simplifiée des certificats | Fonctionne bien avec Let’s Encrypt et outils similaires |
| Accès public plus propre | Cache les ports internes de l’application |

### Points à vérifier

La configuration exacte du reverse proxy dépend de votre serveur web (Nginx, Apache, etc.). Comme aucun exemple officiel complet n’était disponible dans les sources fournies, vérifiez les en-têtes requis et la gestion des websockets dans la documentation officielle Tymeslot avant déploiement.

## Notes sur l’installation native

Tymeslot est construit avec Elixir et Phoenix LiveView, donc une installation native peut être possible sur des environnements de développement Linux ou Windows. Le brouillon incluait ces commandes :

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Points à garder en tête

| Sujet | Note |
| --- | --- |
| Elixir et Erlang | Doivent être installés en versions compatibles |
| Dépendances Phoenix | Peuvent nécessiter des outils de compilation supplémentaires |
| Configuration base de données | Doit être correctement configurée avant les migrations |
| Durcissement production | Généralement plus complexe qu’avec Docker |

:::danger Déploiement natif en production à vérifier
Les étapes d’installation native ci-dessus figuraient dans le brouillon mais n’ont pas été entièrement confirmées dans le snapshot du dépôt officiel. Ne vous fiez pas à ces étapes pour la production sans vérifier d’abord la documentation et les fichiers officiels actuels de Tymeslot.
:::

## Vérifier l’installation

Après le déploiement, confirmez que l’application fonctionne correctement.

### Vérifications de base

| Vérification | Résultat attendu |
| --- | --- |
| `docker ps` | Le conteneur `tymeslot` est en cours d’exécution |
| `docker logs tymeslot` | Pas d’erreurs répétées au démarrage ou liées à la base de données |
| Accès navigateur | L’interface Tymeslot se charge |
| Test de port | Le port `4000` répond sur le serveur |

### Problèmes courants

| Problème | Cause possible |
| --- | --- |
| Page ne se charge pas | Port `4000` bloqué ou conteneur non lancé |
| Conteneur quitte immédiatement | Variables d’environnement invalides ou dépendances manquantes |
| Erreurs base de données dans les logs | Échec d’initialisation ou mauvais chemin de stockage |
| Comportement incorrect du nom d’hôte | `PHX_HOST` mal configuré |

## Mise à jour de Tymeslot

Lorsqu’une nouvelle version est disponible, mettez à jour le déploiement avec précaution.

### Workflow de mise à jour Docker

1. Téléchargez l’image mise à jour :
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Arrêtez le conteneur actuel :
   ```bash
   docker stop tymeslot
   ```
3. Supprimez l’ancien conteneur :
   ```bash
   docker rm tymeslot
   ```
4. Lancez un nouveau conteneur avec la même configuration.

Si vous utilisez Compose, vous pouvez généralement mettre à jour avec :

```bash
docker compose pull
docker compose up -d
```

:::tip Sauvegarde avant mise à jour
Avant la mise à jour, sauvegardez vos volumes persistants et toutes les données de base associées. Cela vous offre une voie de récupération si la nouvelle version introduit une migration ou un problème de compatibilité.
:::

## Références supplémentaires

| Ressource | Lien |
| --- | --- |
| Dépôt officiel Tymeslot | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Site officiel Docker | [Docker](https://www.docker.com/) |
| Mention Self-Host Weekly | [Self-Host Weekly - 10 avril 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusion

Félicitations, vous avez réussi à examiner et déployer Tymeslot sur Linux ou Windows en utilisant Docker. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂