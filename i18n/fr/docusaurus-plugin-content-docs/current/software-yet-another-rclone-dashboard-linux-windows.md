---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard est un tableau de bord web moderne pour gérer `rclone rcd` via une interface navigateur. Dans ce guide, vous apprendrez ce que fait ce logiciel, ses prérequis, et comment le configurer sur Linux ou Windows avec Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, vous devez avoir une installation fonctionnelle de [Rclone](https://rclone.org/) car ce tableau de bord est conçu pour se connecter à `rclone rcd` et non pour fonctionner comme un backend autonome.

### Exigences

Les exigences suivantes sont basées sur les informations disponibles du projet et le brouillon de configuration fourni.

| Exigence | Détails |
| --- | --- |
| Système d’exploitation | Linux ou Windows |
| Logiciel requis | `rclone` |
| Version recommandée de Rclone | `v1.72.0` ou ultérieure |
| Logiciel optionnel | `Nginx`, `Caddy` ou un autre serveur web si vous souhaitez servir les fichiers statiques séparément |
| Dépendance optionnelle pour la compilation | `Node.js` si vous prévoyez de compiler le projet depuis les sources |
| Port RC par défaut | `5572/tcp` |

:::info Rclone est requis
Yet Another Rclone Dashboard est une interface frontend pour `rclone rcd`. Vous ne pouvez pas l’utiliser sans une instance Rclone remote control en fonctionnement.
:::

### Accès et considérations réseau

Vous devez aussi vous assurer que le système où vous lancez Rclone autorise l’accès au port configuré si vous souhaitez ouvrir le tableau de bord à distance.

| Scénario | Adresse de liaison recommandée | URL exemple |
| --- | --- | --- |
| Accès local uniquement | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Accès distant dans un réseau | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Configuration reverse proxy | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Exposez le tableau de bord en toute sécurité
Si vous liez Rclone à `0.0.0.0`, le service peut devenir accessible depuis d’autres systèmes. Vous devez utiliser une authentification et, si possible, un reverse proxy avec HTTPS.
:::

## À propos de Yet Another Rclone Dashboard

Yet Another Rclone Dashboard est une interface web pour le mode daemon de Rclone. Selon le dépôt du projet, il supporte la connexion à `rclone rcd`, plusieurs profils de connexion, l’inspection des remotes, l’import/export de configuration, la navigation dans les fichiers, et la gestion des transferts.

Cela signifie que vous pouvez l’utiliser comme un `rclone gui` ou `rclone browser` pour des tâches courantes qui nécessiteraient autrement une interaction directe en ligne de commande.

### Détails du projet

| Élément | Valeur |
| --- | --- |
| Nom | Yet Another Rclone Dashboard |
| Catégorie | Frontend |
| Source | [Dépôt GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Dernière version référencée | `v0.3.8` |
| Fichier de la release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recommandé | `rclone rcd` |

### Modèle d’utilisation supporté

Les informations du projet confirment que le tableau de bord est prévu pour fonctionner avec le mode remote control de Rclone. Le comportement exact selon le système d’exploitation n’est pas entièrement documenté dans les sources fournies, donc ce guide se concentre sur les méthodes de déploiement vérifiées dans le brouillon du dépôt.

## Méthodes d’installation

Vous pouvez déployer Yet Another Rclone Dashboard de plusieurs façons selon votre mode d’accès. La méthode la plus directe est de laisser Rclone servir lui-même les fichiers du tableau de bord.

### Méthode 1 : Servir le tableau de bord avec `--rc-files`

Cette méthode utilise les fichiers extraits du tableau de bord et demande à `rclone rcd` de les servir directement.

#### Téléchargez les fichiers de la release

Téléchargez l’archive de la dernière version depuis la page des releases GitHub du projet :

- [Releases Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

Au moment de la référence fournie, le fichier de la dernière release est :

- `yet-another-rclone-dashboard-v0.3.8.zip`

Extrayez l’archive dans un dossier sur votre serveur ou système local.

:::note Remplacez les chemins de dossier
Dans les commandes suivantes, remplacez `[your_dashboard_path]` par le dossier contenant les fichiers extraits du build du tableau de bord.
:::

#### Exemple Linux

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple Windows

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple serveur distant avec authentification

Pour un serveur headless, utilisez une authentification et liez-vous à une adresse accessible uniquement si nécessaire.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Méthode 2 : Utiliser le fetcher web GUI de Rclone

Le brouillon de configuration fourni mentionne aussi le fetcher web GUI intégré à Rclone. Il peut automatiquement télécharger et servir le tableau de bord sans extraction manuelle séparée.

#### Exemple Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple Windows

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple serveur distant

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Utilisez le fetcher pour des mises à jour plus simples
Si vous voulez un workflow `rclone download` plus simple pour les fichiers du tableau de bord, la méthode fetcher peut être plus pratique que de télécharger manuellement les archives de release.
:::

### Méthode 3 : Servir les fichiers statiques avec un serveur web

Comme Yet Another Rclone Dashboard est une application web statique, vous pouvez aussi servir le frontend séparément avec un serveur web standard comme [Nginx](https://nginx.org/) ou [Caddy](https://caddyserver.com/).

Dans cette configuration, Rclone fournit toujours le backend via `rclone rcd`, tandis que votre serveur web sert les fichiers frontend.

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

:::note Frontend et backend séparés
Si vous utilisez un serveur web séparé, assurez-vous que votre frontend peut toujours atteindre le point d’accès RC de Rclone. Dans ce cas, la valeur `--rc-allow-origin` devient particulièrement importante.
:::

## Options importantes de Rclone

Voici les options les plus pertinentes pour configurer Yet Another Rclone Dashboard.

| Option | But |
| --- | --- |
| `--rc-files` | Sert les fichiers statiques du tableau de bord depuis un dossier local |
| `--rc-web-gui` | Active le mécanisme web GUI de Rclone |
| `--rc-web-fetch-url` | Définit l’URL source de la release pour récupérer le tableau de bord |
| `--rc-serve` | Sert l’interface RC via HTTP |
| `--rc-addr` | Définit l’adresse IP et le port d’écoute |
| `--rc-no-auth` | Désactive l’authentification |
| `--rc-user` | Définit le nom d’utilisateur RC |
| `--rc-pass` | Définit le mot de passe RC |
| `--rc-allow-origin` | Autorise l’accès navigateur depuis l’origine spécifiée |
| `--rc-web-gui-no-open-browser` | Empêche l’ouverture automatique du navigateur |
| `--rc-user-from-header` | Accepte l’utilisateur depuis un header de reverse proxy de confiance |

### Choisir la bonne valeur pour `--rc-allow-origin`

Vous devez définir `--rc-allow-origin` sur l’URL exacte que vous utilisez dans votre navigateur.

| Méthode d’accès | Valeur exemple |
| --- | --- |
| Accès local | `http://127.0.0.1:5572` |
| Accès direct par IP | `http://[your_server_ip]:5572` |
| Reverse proxy avec HTTPS | `https://[your_domain]` |

:::caution Un mauvais origin casse le tableau de bord
Si `--rc-allow-origin` ne correspond pas à l’URL réelle dans le navigateur, le tableau de bord peut ne pas réussir à se connecter à Rclone à cause des restrictions de sécurité du navigateur.
:::

## Configuration avancée du reverse proxy

Si vous souhaitez placer le tableau de bord derrière une passerelle d’authentification, le brouillon fourni inclut un exemple avancé utilisant un reverse proxy et `--rc-user-from-header`.

### Exemple Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Exemple Caddy

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

:::danger Ne faites confiance qu’aux headers de votre proxy
Vous ne devez utiliser `--rc-user-from-header` que si Rclone est lié à une interface locale de confiance comme `127.0.0.1` et accessible uniquement via votre reverse proxy. Sinon, un client pourrait falsifier les headers.
:::

## Premier démarrage et vérification

Une fois la méthode de déploiement choisie, vous pouvez vérifier que le tableau de bord fonctionne correctement.

### Démarrez le service

Lancez `rclone rcd` avec la commande choisie et laissez le processus tourner.

### Ouvrez le tableau de bord

Ouvrez l’URL correspondante dans votre navigateur :

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Confirmez l’accès réussi

Si tout est bien configuré, vous devriez voir l’interface Yet Another Rclone Dashboard et pouvoir vous connecter à votre backend Rclone.

Vous pouvez alors inspecter les remotes, naviguer dans les fichiers, et gérer les transferts selon votre configuration Rclone.

## Dépannage

Si le tableau de bord ne se charge pas ou ne peut pas se connecter, vérifiez les points suivants.

### Problèmes courants

| Problème | Cause possible | Action suggérée |
| --- | --- | --- |
| Le navigateur ne peut pas ouvrir la page | Rclone n’est pas lancé | Relancez `rclone rcd` et vérifiez la sortie terminal |
| Le tableau de bord charge mais ne peut pas se connecter | `--rc-allow-origin` est incorrect | Mettez-le à l’URL exacte du navigateur |
| L’accès distant échoue | Le port `5572` est bloqué | Ouvrez le port dans votre pare-feu ou utilisez un reverse proxy |
| L’authentification échoue | Mauvais `--rc-user` ou `--rc-pass` | Vérifiez vos identifiants |
| La configuration reverse proxy échoue | Mismatch des headers ou origin | Vérifiez les headers proxy et `--rc-allow-origin` |

### Revue des logs

Vous devez toujours commencer par vérifier la sortie console de Rclone. Le matériel source fourni ne mentionne pas de chemin de log spécifique pour Yet Another Rclone Dashboard lui-même, donc la première étape la plus fiable est d’inspecter la sortie du processus Rclone actif.

:::tip Préférez HTTPS pour l’accès distant
Si vous souhaitez accéder au tableau de bord via Internet, placez-le derrière un reverse proxy avec TLS plutôt que d’exposer HTTP en clair directement.
:::

## Notes supplémentaires

Le brouillon fourni mentionne des scénarios optionnels Docker et compilation source, mais le matériel projet récupéré ne contient pas d’instructions Docker vérifiées dans le contenu référencé. Ce guide n’inclut donc pas de commande Docker pour éviter de documenter un comportement non vérifié.

De même, le nom exact du dossier interne de build peut varier selon la structure de l’archive de release, vous devez donc vérifier le contenu du dossier extrait avant de définir `[your_dashboard_path]`.

## Conclusion

Félicitations, vous avez configuré avec succès Yet Another Rclone Dashboard avec Rclone sur Linux ou Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂