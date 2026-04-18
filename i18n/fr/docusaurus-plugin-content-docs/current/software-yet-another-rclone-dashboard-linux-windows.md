---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Configurez Yet Another Rclone Dashboard, une interface graphique moderne pour rclone et rclone browser sous Linux et Windows, pour gérer votre démon rclone en toute sécurité -> Découvrez comment maintenant"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard est un tableau de bord web moderne pour `rclone rcd` qui vous offre une interface graphique pour gérer vos remotes, parcourir les fichiers et suivre les transferts. Dans ce guide, vous apprendrez à le déployer sur Linux ou Windows et à le connecter à votre installation Rclone existante.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, assurez-vous que votre système répond aux exigences de base et que Rclone est déjà installé.

### Exigences

| Composant | Exigence |
| --- | --- |
| Système d’exploitation | Linux ou Windows |
| Version de Rclone | `v1.72.0` ou plus récente recommandée |
| Méthode d’accès | Shell local, SSH ou RDP |
| Port par défaut | `5572/tcp` |
| Optionnel | Reverse proxy comme Nginx ou Caddy |

### Ce dont vous avez besoin avant l’installation

Vous devez disposer de :

- Une installation fonctionnelle de [Rclone](https://rclone.org/)
- Au moins un remote Rclone configuré si vous souhaitez accéder à un stockage cloud comme *rclone Google Drive*
- L’accès au port `5572` ouvert ou redirigé si vous voulez vous connecter à distance
- Un navigateur pour accéder au tableau de bord

:::info Exigence Rclone
Yet Another Rclone Dashboard est uniquement une interface frontend pour `rclone rcd`. Il ne remplace pas Rclone lui-même, vous devez donc installer et configurer Rclone en premier.
:::

### Placeholders importants utilisés dans ce guide

Les commandes ci-dessous utilisent des placeholders que vous devez remplacer par vos propres valeurs.

| Placeholder | Signification |
| --- | --- |
| `[your_dashboard_path]` | Chemin où les fichiers du dashboard sont stockés |
| `[your_server_ip]` | Adresse IP publique ou privée de votre serveur |
| `[your_domain]` | Nom de domaine utilisé pour l’accès via reverse proxy |
| `[your_rc_user]` | Nom d’utilisateur pour l’authentification Rclone RC |
| `[your_rc_password]` | Mot de passe pour l’authentification Rclone RC |

## À propos de Yet Another Rclone Dashboard

Yet Another Rclone Dashboard est un frontend web statique publié sur [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Selon le README du projet, il est conçu pour `rclone rcd` et supporte des fonctionnalités telles que :

- connexion à Rclone en mode démon
- gestion de plusieurs profils de connexion
- inspection des informations système et du statut
- navigation dans les répertoires
- gestion des remotes et des données de configuration

Comme il s’agit d’un frontend, les opérations sur les fichiers sont toujours gérées par Rclone. Cela signifie que le dashboard dépend d’une instance `rclone rcd` en fonctionnement.

## Méthodes d’installation

Vous pouvez déployer le dashboard de plusieurs façons selon votre mode d’accès. Les méthodes les plus courantes sont d’utiliser Rclone directement avec des fichiers statiques ou de laisser Rclone récupérer automatiquement l’interface web.

### Aperçu des installations

| Méthode | Idéal pour | Notes |
| --- | --- | --- |
| `--rc-files` | Déploiements manuels | Vous téléchargez et extrayez le dashboard vous-même |
| `--rc-web-gui` avec `--rc-web-fetch-url` | Installation rapide | Rclone récupère la dernière version du dashboard |
| Serveur web externe | Hébergement personnalisé | Utile avec Nginx ou Caddy |
| Reverse proxy avec passerelle d’authentification | Configurations avancées | Idéal pour un accès distant sécurisé |

## Télécharger le Dashboard manuellement

Si vous voulez un contrôle total sur la version déployée, vous pouvez télécharger la dernière release manuellement depuis les releases GitHub du projet.

### Linux

Créez un dossier pour le dashboard, téléchargez la dernière archive et extrayez-la.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

Sous Windows, téléchargez l’archive depuis la page officielle des releases GitHub et extrayez-la dans un dossier comme :

```text
C:\rclone-dashboard
```

:::note Version de la release
Au moment de la rédaction, la dernière version vérifiée est `v0.3.8`. Si une version plus récente est disponible, vous pouvez l’utiliser à la place.
:::

## Démarrer le Dashboard avec Rclone

Une fois les fichiers disponibles, vous pouvez lancer `rclone rcd` et servir le dashboard via Rclone lui-même.

### Accès local sous Linux

Utilisez cette méthode si vous souhaitez accéder au dashboard uniquement localement sur le même système.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Accès distant sous Linux

Utilisez cette méthode si vous voulez accéder au dashboard depuis un autre appareil sur le réseau.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Accès local sous Windows

Ouvrez l’invite de commandes ou PowerShell et lancez :

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Accès distant sous Windows

Pour un accès distant, lancez :

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Ne pas exposer une interface Rclone non protégée
Si vous liez Rclone à `0.0.0.0`, n’utilisez pas `--rc-no-auth`. Protégez toujours l’accès distant avec une authentification ou un reverse proxy.
:::

## Utiliser le récupérateur WebGUI de Rclone

Rclone peut aussi récupérer automatiquement le dashboard depuis GitHub. C’est pratique si vous ne voulez pas télécharger et extraire les fichiers manuellement.

### Mode local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Mode distant

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Mises à jour automatiques
Cette méthode est pratique si vous souhaitez que Rclone récupère automatiquement la dernière version du dashboard. C’est souvent l’option la plus rapide pour tester un nouveau déploiement d’interface rclone.
:::

## Servir le Dashboard avec un serveur web

Comme Yet Another Rclone Dashboard est un frontend statique, vous pouvez aussi l’héberger avec un serveur web classique et garder `rclone rcd` en arrière-plan.

### Exemple Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemple Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Cette méthode est utile si vous utilisez déjà un reverse proxy ou souhaitez un accès plus propre basé sur un domaine pour votre app dashboard.

## Configuration avancée du reverse proxy

Si vous voulez sécuriser l’accès via une couche d’authentification externe, vous pouvez utiliser un reverse proxy devant Rclone et transmettre l’utilisateur authentifié via un header.

### Commande Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Exemple Caddy avec header utilisateur transmis

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Authentification avancée
La mise en place exacte de la passerelle d’authentification dépend de votre environnement. L’exemple ci-dessus montre uniquement le pattern d’intégration entre Rclone et le reverse proxy. Si vous utilisez un logiciel supplémentaire comme un fournisseur d’identité ou un plugin Caddy, configurez-le selon la documentation officielle de ce logiciel.
:::

## Référence de configuration

Les options Rclone RC les plus importantes utilisées avec ce dashboard sont listées ci-dessous.

| Option | Fonction |
| --- | --- |
| `--rc-files` | Sert les fichiers extraits du dashboard |
| `--rc-web-gui` | Active le support WebGUI de Rclone |
| `--rc-web-fetch-url` | Récupère les métadonnées de la release du dashboard depuis GitHub |
| `--rc-no-auth` | Désactive l’authentification, adapté uniquement pour usage local |
| `--rc-user` | Définit le nom d’utilisateur Rclone RC |
| `--rc-pass` | Définit le mot de passe Rclone RC |
| `--rc-addr` | Définit l’adresse et le port d’écoute |
| `--rc-allow-origin` | Autorise l’accès navigateur depuis l’URL spécifiée |
| `--rc-web-gui-no-open-browser` | Empêche l’ouverture automatique du navigateur |
| `--rc-user-from-header` | Accepte l’utilisateur authentifié depuis un header proxy |

### Choisir le bon `--rc-allow-origin`

Définissez `--rc-allow-origin` sur l’URL exacte que vous utilisez dans votre navigateur.

| Type d’accès | Exemple de valeur |
| --- | --- |
| Accès local | `http://127.0.0.1:5572` |
| Accès distant par IP | `http://[your_server_ip]:5572` |
| Reverse proxy avec HTTPS | `https://[your_domain]` |

:::caution L’origine doit correspondre
Si `--rc-allow-origin` ne correspond pas à l’URL utilisée dans votre navigateur, le dashboard risque de ne pas se charger correctement à cause des restrictions de sécurité du navigateur.
:::

## Accéder et vérifier le Dashboard

Une fois `rclone rcd` lancé, ouvrez le dashboard dans votre navigateur.

### URLs d’accès courantes

| Scénario | URL |
| --- | --- |
| Machine locale | `http://127.0.0.1:5572` |
| Accès distant par IP | `http://[your_server_ip]:5572` |
| Reverse proxy | `https://[your_domain]` |

### Que vérifier après le démarrage

Après avoir ouvert la page, vérifiez que :

- l’interface Yet Another Rclone Dashboard se charge
- vos remotes configurés sont visibles
- la navigation dans les fichiers fonctionne dans la vue Rclone browser
- les panneaux d’information sur les transferts et le système répondent correctement

Si la page ne se charge pas, vérifiez d’abord la sortie console de Rclone. Les erreurs d’authentification, les incompatibilités d’origine et les problèmes de liaison de port sont les causes les plus fréquentes.

## Recommandations de sécurité

Faire tourner un dashboard pour votre stockage cloud nécessite des réglages de sécurité rigoureux, surtout si vous l’exposez sur Internet.

### Bonnes pratiques de sécurité recommandées

| Recommandation | Raison |
| --- | --- |
| Utiliser `--rc-user` et `--rc-pass` pour l’accès distant | Empêche l’accès non authentifié |
| Préférer HTTPS via un reverse proxy | Protège les identifiants en transit |
| Lier à `127.0.0.1` quand c’est possible | Réduit l’exposition |
| Restreindre l’accès firewall au port `5572/tcp` | Limite la surface d’attaque |
| Éviter `--rc-no-auth` sur réseaux publics | Empêche l’accès ouvert à votre instance Rclone |

:::danger Risque d’exposition publique
Une instance `rclone rcd` exposée et non protégée peut permettre l’accès à vos remotes et fichiers configurés. Si vous vous demandez « rclone est-il sûr », la réponse dépend fortement de la manière dont vous exposez et authentifiez le service.
:::

## Dépannage

Si le dashboard ne fonctionne pas comme prévu, utilisez les vérifications ci-dessous.

### La page du dashboard ne s’ouvre pas

Causes possibles :

- `rclone rcd` n’est pas lancé
- le port `5572` est bloqué par un pare-feu
- le service est lié à `127.0.0.1` mais vous essayez de vous connecter à distance

### L’interface se charge mais les actions échouent

Causes possibles :

- `--rc-user` ou `--rc-pass` invalides
- `--rc-allow-origin` incorrect
- configuration du remote Rclone manquante ou corrompue

### Le dashboard ne se charge pas via un reverse proxy

Causes possibles :

- la cible du proxy pointe vers le mauvais backend
- l’URL HTTPS ne correspond pas à `--rc-allow-origin`
- les headers requis ne sont pas transmis correctement

### Vérifications utiles

Linux :

```bash
ss -tulpn | grep 5572
```

Windows PowerShell :

```powershell
netstat -ano | findstr 5572
```

Tester le point d’accès local :

```bash
curl http://127.0.0.1:5572
```

:::tip Vérifiez d’abord les logs Rclone
La plupart des problèmes de démarrage et de connexion sont visibles directement dans le terminal ou les logs du service où `rclone rcd` tourne. Consultez toujours ces logs avant de modifier votre configuration.
:::

## Notes supplémentaires

Yet Another Rclone Dashboard a été présenté dans Self-Host Weekly le 10 avril 2026 et est hébergé publiquement sur GitHub. Au moment de la rédaction, le projet est une solution centrée sur le frontend destinée à améliorer l’expérience utilisateur de gestion de Rclone via un tableau de bord web.

Certaines méthodes de déploiement comme Docker peuvent aussi être possibles dans des environnements personnalisés, mais aucune instruction Docker vérifiée n’était disponible dans les sources fournies. Pour cette raison, ce guide couvre uniquement les méthodes d’installation directement supportées par les informations du projet.

## Conclusion

Félicitations, vous avez installé et configuré avec succès Yet Another Rclone Dashboard sur Linux ou Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂