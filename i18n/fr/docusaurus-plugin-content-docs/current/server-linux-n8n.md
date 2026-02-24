---
id: server-linux-n8n
title: "Installer n8n sur un serveur Linux - Crée des automatisations de workflow puissantes"
description: "Découvre comment installer et configurer n8n en auto-hébergement pour créer une automatisation de workflow IA qui facilite ton travail → En savoir plus maintenant"
sidebar_label: Installer n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introduction

[n8n](https://n8n.io/) est un éditeur visuel de référence pour itérer rapidement où tu peux créer des workflows d’automatisation et voir les résultats instantanément. Parfait pour les automatisations du quotidien comme pour les workflows complexes d’agents IA.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Le support de l’auto-hébergement et l’éditeur Low Code font de n8n le chouchou de tous les devs. Si tu veux un contrôle maximal, des personnalisations poussées et réduire les coûts sur le long terme, l’option auto-hébergée est un excellent choix.

Tu prévois d’héberger n8n toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut garder en tête.

<InlineVoucher />



## Cas d’usage de n8n

n8n peut être utilisé dans plein de scénarios quotidiens différents et convient à tous ceux qui veulent automatiser des tâches, utiliser un éditeur low code, créer des agents IA, piloter des automatisations, booster un CRM, gérer des opérations IT, des opérations de sécurité, prototyper des backends, et bien plus encore ! n8n est parfait aussi bien pour les débutants que pour les experts.

n8n propose plus de 1367 intégrations comme Google Sheets, Telegram, MySQL, Slack, Discord, Postgres avec des combinaisons d’automatisation tendances comme HubSpot et Salesforce, Twilio et WhatsApp, GitHub et Jira, Asana et Slack, Asana et Salesforce, Jira et Slack, et plein de templates communautaires.

## Prérequis

Même si n8n est léger à la base, l’utilisation des ressources peut augmenter avec le temps selon le nombre de workflows, les appels API, les nœuds gourmands en données. On recommande la config matérielle suivante pour héberger n8n sur ton VPS.

| Matériel   | Minimum      | Recommandé                |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cœurs | 2 vCPU Cœurs               |
| RAM        | 2 Go         | 4 Go                       |
| Espace disque | 20 Go      | 50 Go                      |
<InlineServiceLink />

## Préparation

Avant de commencer, il faut installer Docker et mettre à jour les paquets système. On a déjà un guide sur [Installer Docker](dedicated-linux-docker.md). Assure-toi de l’avoir fait avant de lancer l’installation.

## Installation
Après avoir installé Docker sur ton serveur, lance cette commande pour vérifier l’installation :

```
docker --version
docker compose version
```

### Créer un fichier `.env`

Crée un dossier projet pour stocker les fichiers locaux de n8n et la config d’environnement, puis entre dedans :

```
mkdir n8n-compose
cd n8n-compose
```

Dans le dossier `n8n-compose`, crée un fichier `.env` avec `nano .env` et ajoute ce code avec la config d’environnement n8n.

```
# DOMAIN_NAME et SUBDOMAIN déterminent ensemble où n8n sera accessible
# Le domaine principal à utiliser
DOMAIN_NAME=zap.cloud

# Le sous-domaine à utiliser
SUBDOMAIN=silver-octopus-xxxxx

# L’exemple ci-dessus sert n8n à : https://silver-octopus-xxxxx.zap.cloud

# Fuseau horaire optionnel utilisé par Cron et autres nœuds de planification
GENERIC_TIMEZONE=Europe/Berlin

# Adresse email utilisée pour la création du certificat TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Pour trouver DOMAIN_NAME et SUBDOMAIN, rends-toi sur ta page produit ZAP-Hosting, accède à ton VPS et repère ton `Nom d’hôte`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Entre la partie `zap.cloud` dans DOMAIN_NAME et la partie précédente dans SUBDOMAIN (exemple silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning Exigence HTTPS
N’utilise pas une adresse IP brute dans le fichier .env. n8n nécessite une connexion HTTPS pour accéder au site, et les certificats SSL ne sont délivrés que pour des domaines, pas pour des IP brutes.
:::

Si tu veux héberger n8n sur ton propre Domaine, crée un sous-domaine pour n8n en ajoutant un enregistrement A dans le gestionnaire DNS de ton Domaine pointant vers l’adresse IP de ton VPS.

| Nom              | Type | Valeur          | TTL  | Priorité |
| ---------------- | ---- | --------------- | ---- | -------- |
| n8n (Sous-domaine) | A    | Adresse IPv4    | 1440 | 0        |

### Créer le dossier des fichiers locaux

Dans le dossier projet, crée un autre dossier `local-files` pour partager des fichiers entre l’instance n8n et le système hôte :

```
mkdir local-files
```

### Créer le fichier Docker Compose

Crée le fichier Docker Compose `compose.yaml` avec `nano compose.yaml` et colle ce contenu :

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

Ça installe n8n, génère un certificat SSL, configure et met n8n en ligne sur le Domaine.

### Démarrer n8n

Pour démarrer n8n, lance cette commande :

```
sudo docker compose up -d
```

Pour arrêter n8n, lance cette commande :

```
sudo docker compose stop
```

### Accéder à n8n

Après avoir démarré n8n, la prochaine étape est d’y accéder via un navigateur web. Entre l’URL (ou le Nom d’hôte si tu l’as utilisé) pour arriver sur la page de configuration. Là, tu dois créer un compte Admin avant de continuer.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Astuce mot de passe
Assure-toi de bien retenir ton mot de passe pour la suite !
:::

Ensuite, un petit sondage s’affichera pour te demander quelques infos basiques.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Optionnellement, tu peux accéder gratuitement à certaines fonctionnalités payantes en entrant ton email pour recevoir une clé de licence par mail. Si ça t’intéresse, entre ton adresse email et demande ta clé.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

Une clé de licence arrive instantanément dans ta boîte mail. Copie-la et colle-la dans Paramètres > Usage et Plans > Entrer la clé d’activation.

### Créer ton premier Workflow

Après ça, tu pourras accéder au tableau de bord et commencer à utiliser n8n direct !

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Tu peux commencer avec une toile blanche ou utiliser un template préfabriqué. Ton installation n8n est prête à l’emploi !

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Conclusion et ressources supplémentaires

Bravo ! Tu as installé n8n avec succès sur ton serveur et tu peux commencer à l’utiliser tout de suite. On te conseille aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant ta configuration.

- [n8n.io](https://n8n.io/) - Site officiel
- [docs.n8n.io](https://docs.n8n.io/) - Documentation n8n

Tu as des questions spécifiques non couvertes ici ? Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂



<InlineVoucher />