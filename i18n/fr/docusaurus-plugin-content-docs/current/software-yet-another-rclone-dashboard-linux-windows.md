---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Apprenez à configurer Yet Another Rclone Dashboard comme une interface graphique moderne pour rclone sur Linux et Windows. -> Découvrez-le maintenant"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard est un tableau de bord web moderne pour `rclone rcd` qui vous offre une interface graphique pour parcourir vos fichiers, inspecter vos remotes et gérer votre configuration Rclone. Dans ce guide, vous apprendrez à le déployer sur Linux ou Windows et à le connecter en toute sécurité à votre démon Rclone existant.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous que votre système répond aux exigences de base et que Rclone est déjà installé.

### Exigences

| Exigence | Détails |
|---|---|
| Système d’exploitation | Linux ou Windows |
| Version de Rclone | `v1.72.0` ou plus récente recommandée |
| Méthode d’accès | Console locale, SSH ou RDP |
| Réseau | Accès à l’URL du tableau de bord depuis votre navigateur |
| Port par défaut | `5572/tcp` |

### Ce que vous devez savoir avant

Yet Another Rclone Dashboard n’est pas un service de stockage autonome. C’est une interface pour `rclone rcd`, le mode démon de contrôle à distance de Rclone. Cela signifie que vous devez lancer `rclone rcd` avec les bonnes options web pour que le tableau de bord puisse se charger et communiquer avec le backend.

:::info Rclone est requis
Vous devez avoir une installation fonctionnelle de [Rclone](https://rclone.org/) avant d’utiliser ce tableau de bord. Si Rclone n’est pas encore installé, installez-le et configurez-le d’abord.
:::

### Checklist de préparation recommandée

| Tâche | Pourquoi c’est important |
|---|---|
| Installer Rclone | Nécessaire pour lancer `rclone rcd` |
| Configurer au moins un remote | Obligatoire si vous voulez parcourir un stockage cloud comme `rclone google drive` |
| Ouvrir ou rediriger le port requis | Nécessaire pour un accès distant via navigateur |
| Choisir accès local ou distant | Détermine si une authentification est nécessaire |

## Comprendre le fonctionnement du tableau de bord

Yet Another Rclone Dashboard est une application web statique qui se connecte à l’API de contrôle à distance de Rclone. Vous pouvez soit servir les fichiers du tableau de bord directement via Rclone, soit héberger le frontend séparément avec un serveur web comme Nginx ou Caddy.

### Fonctionnalités principales

D’après les infos publiées sur le projet, le tableau de bord offre les fonctions suivantes :

| Fonctionnalité | Description |
|---|---|
| Profils de connexion multiples | Connexion à différentes instances `rclone rcd` |
| Informations système | Voir le statut et l’environnement Rclone |
| Inspection des remotes | Examiner les remotes et la configuration |
| Explorateur de fichiers | Parcourir les dossiers et gérer les fichiers |
| Aperçu média | Prévisualiser les contenus supportés |
| Vue des transferts | Suivre l’activité des transferts |
| Interface de réglages | Modifier les options liées au tableau de bord |

### Quand utiliser ce tableau de bord

Ce projet est utile si vous voulez une interface légère `rclone gui` ou `rclone browser` plutôt que de travailler uniquement en terminal. Il est particulièrement pratique pour gérer des remotes cloud depuis un VPS, un serveur dédié ou un système Windows local.

## Méthodes d’installation

Vous pouvez déployer Yet Another Rclone Dashboard de plusieurs façons. Le choix dépend si vous voulez la configuration la plus simple, une installation manuelle ou un reverse proxy devant le service.

### Méthode 1 : Servir le tableau de bord avec des fichiers locaux

Cette méthode utilise la version extraite du tableau de bord avec l’option `--rc-files` de Rclone.

#### Télécharger la release

Téléchargez la dernière archive de release depuis la page GitHub du projet :

- Projet GitHub : [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Dernière release vérifiée dans la source fournie : `v0.3.8`
- Archive de la release : `yet-another-rclone-dashboard-v0.3.8.zip`

Extrayez l’archive à l’emplacement de votre choix.

Exemples d’emplacements :

| Plateforme | Chemin exemple |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Démarrer Rclone sous Linux

Si vous lancez le tableau de bord localement sur la même machine et que vous voulez uniquement un accès local via navigateur, vous pouvez le lier à `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Si vous souhaitez y accéder à distance depuis un autre appareil, utilisez l’authentification et écoutez sur toutes les interfaces.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Démarrer Rclone sous Windows

Ouvrez `Invite de commandes` ou `PowerShell` et lancez :

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Remplacez les placeholders par vos propres valeurs :

| Placeholder | Signification |
|---|---|
| `[your_rc_username]` | Nom d’utilisateur pour se connecter à l’API Rclone |
| `[your_rc_password]` | Mot de passe pour protéger l’API Rclone |
| `[your_server_ip]` | Adresse IP publique ou privée utilisée pour accéder au tableau de bord |

:::caution Ne pas exposer une API Rclone sans authentification
N’utilisez pas `--rc-no-auth` avec `0.0.0.0:5572` sur un serveur accessible depuis Internet. Cela exposerait votre interface de contrôle Rclone sans protection.
:::

### Méthode 2 : Utiliser le fetcher WebGUI de Rclone

Cette méthode permet à Rclone de récupérer automatiquement le tableau de bord au lieu de télécharger manuellement les fichiers. Cela simplifie le déploiement pour une configuration rapide.

#### Exemple d’accès local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple d’accès distant

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::note Comportement du fetch automatique
Le chemin de stockage exact utilisé par Rclone pour les assets du GUI téléchargés dépend de votre environnement Rclone. Si vous voulez un contrôle total sur les fichiers et mises à jour, la méthode manuelle `--rc-files` est généralement plus simple à gérer.
:::

### Méthode 3 : Servir le frontend avec un serveur web

Comme le projet est une application web statique, vous pouvez héberger le frontend séparément avec un serveur web et garder `rclone rcd` en arrière-plan.

#### Exemple Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Exemple Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

Cette approche est utile si vous utilisez déjà une stack reverse proxy et souhaitez servir le tableau de bord depuis un domaine personnalisé.

:::tip Meilleure pratique reverse proxy
Si vous utilisez un domaine ou un reverse proxy, définissez `--rc-allow-origin` sur l’URL exacte que vous ouvrez dans votre navigateur, par exemple `https://[your_domain]`.
:::

### Méthode 4 : Reverse proxy avancé avec authentification externe

Une configuration avancée peut utiliser une passerelle d’authentification externe et transmettre l’utilisateur authentifié à Rclone via un header. Destiné aux utilisateurs expérimentés.

#### Exemple Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Exemple Caddy

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::danger Configuration avancée d’authentification
L’authentification basée sur les headers doit être utilisée uniquement derrière un reverse proxy de confiance. Une mauvaise configuration peut permettre un accès non autorisé à votre instance Rclone.
:::

## Options Rclone importantes

Voici les options les plus pertinentes pour déployer Yet Another Rclone Dashboard.

| Option | But |
|---|---|
| `--rc-files` | Sert les fichiers extraits du tableau de bord via Rclone |
| `--rc-web-gui` | Active le support de l’interface web via Rclone |
| `--rc-web-fetch-url` | Récupère les métadonnées de la release GUI depuis une source distante |
| `--rc-user` | Définit le nom d’utilisateur API |
| `--rc-pass` | Définit le mot de passe API |
| `--rc-no-auth` | Désactive l’authentification |
| `--rc-addr` | Définit l’adresse et le port d’écoute |
| `--rc-allow-origin` | Autorise l’accès navigateur depuis l’origine spécifiée |
| `--rc-web-gui-no-open-browser` | Empêche l’ouverture automatique du navigateur |
| `--rc-user-from-header` | Accepte l’utilisateur authentifié depuis un header reverse proxy |

## Guide de configuration

Après avoir choisi une méthode d’installation, vérifiez les principales valeurs de configuration avant la première utilisation.

### Paramètres d’authentification

Si le tableau de bord est utilisé uniquement localement sur votre machine, un accès local sans authentification peut être acceptable. Pour toute configuration distante ou publique, utilisez toujours l’authentification.

| Type d’accès | Configuration recommandée |
|---|---|
| Local uniquement | `127.0.0.1` avec option `--rc-no-auth` possible |
| Accès LAN ou Internet | `0.0.0.0` avec `--rc-user` et `--rc-pass` |
| Reverse proxy avec domaine | Liaison `127.0.0.1` ou privée + authentification proxy |

### Origine autorisée

La valeur `--rc-allow-origin` doit correspondre à l’URL depuis laquelle votre navigateur charge le tableau de bord.

Exemples :

| URL d’accès | `--rc-allow-origin` correspondante |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

Si cette valeur ne correspond pas, le navigateur peut bloquer les requêtes et le tableau de bord risque de ne pas se charger correctement.

## Démarrage et vérification du tableau de bord

Une fois votre commande lancée, ouvrez l’adresse configurée dans votre navigateur.

### À quoi s’attendre

Si la configuration est correcte, vous devriez voir l’interface Yet Another Rclone Dashboard et pouvoir vous connecter à votre démon Rclone configuré.

Exemples typiques :

| Scénario | URL |
|---|---|
| Accès local Linux ou Windows | `http://127.0.0.1:5572` |
| Accès distant par IP | `http://[your_server_ip]:5572` |
| Accès via reverse proxy | `https://[your_domain]` |

### Étapes de vérification basiques

1. Lancez `rclone rcd` avec la méthode choisie.
2. Ouvrez l’URL du tableau de bord dans votre navigateur.
3. Connectez-vous si l’authentification est activée.
4. Vérifiez que les remotes, l’explorateur de fichiers ou les infos de statut sont visibles.
5. Testez une action simple de lecture, comme ouvrir un dossier.

## Dépannage

Si le tableau de bord ne se charge pas ou ne se connecte pas correctement, vérifiez ces causes courantes.

### Connexion refusée

Si vous obtenez une erreur de connexion refusée, vérifiez :

- que `rclone rcd` est bien lancé
- que le port `5572` est utilisé correctement
- que le service écoute sur l’interface attendue
- que votre pare-feu autorise l’accès entrant si nécessaire

### Problèmes d’origine navigateur ou de connexion

Si la page charge mais les requêtes API échouent :

- vérifiez `--rc-allow-origin`
- confirmez que l’URL dans le navigateur correspond exactement à l’origine autorisée
- vérifiez `--rc-user` et `--rc-pass`
- assurez-vous que votre reverse proxy transmet correctement les requêtes

### Problèmes de chemin de fichiers

Si vous utilisez `--rc-files` et que l’interface n’apparaît pas :

- confirmez que les fichiers extraits du tableau de bord sont dans le bon dossier
- vérifiez la syntaxe du chemin sous Linux ou Windows
- assurez-vous que le contenu de l’archive a été extrait et non seulement téléchargé

:::tip Vérifiez la sortie console de Rclone
Rclone affiche généralement des infos utiles au démarrage et en cas d’erreur directement dans le terminal. Consultez cette sortie en priorité si le tableau de bord, `rclone download` ou les fonctions d’explorateur distant ne fonctionnent pas comme prévu.
:::

## Recommandations de sécurité

Un tableau de bord qui contrôle Rclone peut accéder aux remotes configurés et aux opérations sur fichiers, donc la sécurité est importante.

| Recommandation | Raison |
|---|---|
| Utiliser l’authentification pour l’accès distant | Protège l’API Rclone |
| Lier à `127.0.0.1` quand c’est possible | Réduit l’exposition |
| Utiliser HTTPS derrière un reverse proxy | Protège les identifiants en transit |
| Limiter l’exposition du pare-feu | Réduit la surface d’attaque |
| Utiliser des identifiants forts | Empêche les accès non autorisés |

:::caution Remotes sensibles
Si votre configuration Rclone inclut du stockage cloud comme Google Drive, exposer le tableau de bord sans sécurité peut aussi exposer l’accès à ces remotes et données.
:::

## Informations supplémentaires sur le projet

Le projet est publié sur GitHub et a été présenté dans Self-Host Weekly le 10 avril 2026.

| Élément | Valeur |
|---|---|
| Nom du projet | Yet Another Rclone Dashboard |
| Catégorie | Frontend |
| Source | [Dépôt GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Présentation hebdo | [Self-Host Weekly (10 avril 2026)](https://selfh.st/weekly/2026-04-10/) |
| Release vérifiée dans la source | `v0.3.8` |

## Conclusion

Félicitations, vous avez configuré avec succès Yet Another Rclone Dashboard sur Linux ou Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂