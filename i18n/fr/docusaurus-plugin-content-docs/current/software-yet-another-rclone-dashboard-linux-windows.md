---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Apprenez à utiliser Yet Another Rclone Dashboard comme une interface graphique moderne pour rclone sous Linux et Windows, incluant l’accès au navigateur et la configuration du daemon avec rclone rcd. -> Découvrez-le maintenant"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard est un tableau de bord web moderne pour gérer `rclone rcd` via une interface accessible depuis un navigateur. Dans ce guide, vous apprendrez ce que fait ce logiciel, ses prérequis, et comment le configurer sous Linux ou Windows avec les méthodes de déploiement supportées.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Préparation

Avant de commencer, assurez-vous que votre système remplit les conditions minimales et que `rclone` est déjà installé.

### Prérequis

Selon le dépôt du projet, Yet Another Rclone Dashboard est conçu pour `rclone rcd` et recommande **Rclone `v1.72.0` ou supérieur**.

| Prérequis | Détails |
|---|---|
| Système d’exploitation | Linux ou Windows |
| Dépendance principale | `rclone` |
| Version recommandée de Rclone | `v1.72.0` ou plus récente |
| Mode d’accès | Navigateur web |
| Port RC par défaut | `5572/tcp` |
| Logiciels optionnels | `Docker`, `Nginx` ou `Caddy` selon votre configuration |

### Ce que le tableau de bord offre

Le projet décrit Yet Another Rclone Dashboard comme une interface frontend pour `rclone rcd`. D’après les informations disponibles, il propose les fonctionnalités suivantes :

| Fonctionnalité | Description |
|---|---|
| Profils de connexion multiples | Connexion à différentes instances `rclone rcd` |
| Informations système | Affiche les infos système et le statut de Rclone |
| Gestion des remotes | Inspecter les remotes et importer/exporter la config Rclone |
| Explorateur de fichiers | Parcourir les dossiers et gérer les fichiers via le tableau de bord |

:::info Prérequis Rclone
Ce logiciel n’est pas un serveur de stockage autonome. Vous devez avoir une installation fonctionnelle de `rclone` et lancer `rclone` en mode daemon avec `rcd`.
:::

### Télécharger la source

Le code officiel est disponible sur GitHub :

- [Yet Another Rclone Dashboard sur GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Au moment de la rédaction, la dernière version est `v0.3.8` avec l’archive `yet-another-rclone-dashboard-v0.3.8.zip`.

## Comprendre le fonctionnement du tableau de bord

Yet Another Rclone Dashboard est une interface web statique qui se connecte à l’*API de contrôle à distance* fournie par `rclone rcd`. Cela signifie que le tableau de bord ne remplace pas `rclone`, mais offre une expérience plus propre de type `rclone gui` dans votre navigateur.

En pratique, vous avez plusieurs façons de l’utiliser :

| Méthode | Cas d’usage | Remarques |
|---|---|---|
| `--rc-files` | Déploiement manuel local ou serveur | Sert les fichiers extraits du tableau de bord via `rclone rcd` |
| `--rc-web-gui` avec URL de fetch | Téléchargement automatique via Rclone | Permet à Rclone de récupérer la dernière version du tableau de bord |
| Reverse proxy | Accès via domaine | Utile pour publier le tableau de bord via `Nginx` ou `Caddy` |
| Serveur web externe | Hébergement statique | Sert le frontend séparément et le connecte à `rclone rcd` |

:::note Accès via navigateur
Comme il s’agit d’un tableau de bord web, vous y accéderez via votre navigateur une fois que `rclone rcd` est lancé et configuré correctement.
:::

## Télécharger les fichiers du tableau de bord

Si vous souhaitez utiliser la méthode manuelle, commencez par télécharger l’archive de la dernière version depuis la page GitHub du projet et extrayez-la sur votre serveur ou système local.

### Exemple Linux

Vous pouvez télécharger l’archive actuelle avec `wget` :

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Puis extrayez-la :

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [votre_dossier_dashboard]
```

Remplacez `[votre_dossier_dashboard]` par le dossier où vous souhaitez stocker les fichiers extraits, par exemple `/opt/yet-another-rclone-dashboard`.

### Exemple Windows

Sous Windows, téléchargez l’archive `.zip` depuis la page GitHub et extrayez-la dans un dossier tel que :

```text
C:\yet-another-rclone-dashboard
```

:::tip Gardez les fichiers dans un emplacement permanent
N’extrayez pas le tableau de bord dans un dossier temporaire. `rclone rcd` doit pouvoir accéder aux fichiers en continu si vous utilisez la méthode `--rc-files`.
:::

## Démarrer Rclone avec le tableau de bord

Une fois les fichiers prêts, vous pouvez lancer `rclone rcd` et exposer le tableau de bord.

### Méthode 1 : Configuration manuelle avec `--rc-files`

Cette méthode utilise directement les fichiers extraits du tableau de bord.

#### Exemple Linux local

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple Linux serveur

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[votre_nom_utilisateur_rc] \
  --rc-pass=[votre_mot_de_passe_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[votre_ip_serveur]:5572
```

#### Exemple Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[votre_nom_utilisateur_rc] `
  --rc-pass=[votre_mot_de_passe_rc] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[votre_ip_serveur]:5572
```

### Méthode 2 : Configuration automatique avec `--rc-web-gui`

Cette méthode demande à Rclone de récupérer automatiquement le tableau de bord via l’API GitHub.

#### Exemple local

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Exemple serveur distant

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[votre_nom_utilisateur_rc] \
  --rc-pass=[votre_mot_de_passe_rc] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[votre_ip_serveur]:5572
```

:::caution Ne pas exposer une interface RC non protégée
Si vous liez `rclone rcd` à `0.0.0.0`, le service peut être accessible depuis d’autres systèmes. Utilisez `--rc-user` et `--rc-pass` ou placez-le derrière un reverse proxy correctement configuré.
:::

## Options Rclone importantes

Voici les options les plus pertinentes pour configurer ce tableau de bord.

| Option | But |
|---|---|
| `--rc-files` | Sert les fichiers statiques du tableau de bord depuis un dossier local |
| `--rc-web-gui` | Active le mécanisme de récupération du GUI web de Rclone |
| `--rc-web-fetch-url` | Spécifie l’endpoint API de la release du tableau de bord |
| `--rc-no-auth` | Désactive l’authentification, adapté uniquement pour usage local de confiance |
| `--rc-user` | Définit le nom d’utilisateur RC |
| `--rc-pass` | Définit le mot de passe RC |
| `--rc-addr` | Définit l’adresse et le port d’écoute |
| `--rc-allow-origin` | Autorise l’accès navigateur depuis l’origine spécifiée |
| `--rc-web-gui-no-open-browser` | Empêche l’ouverture automatique du navigateur sur systèmes sans interface |
| `--rc-user-from-header` | Accepte l’utilisateur authentifié depuis un header de reverse proxy |

### Explication des valeurs de remplacement

Utilisez les placeholders suivants dans les exemples :

| Placeholder | Signification |
|---|---|
| `[votre_dossier_dashboard]` | Dossier contenant les fichiers extraits du tableau de bord |
| `[votre_nom_utilisateur_rc]` | Nom d’utilisateur pour l’authentification `rclone rcd` |
| `[votre_mot_de_passe_rc]` | Mot de passe pour l’authentification `rclone rcd` |
| `[votre_ip_serveur]` | Adresse IP publique ou privée de votre serveur |

## Configurer l’accès via navigateur

Après avoir lancé `rclone rcd`, ouvrez l’URL du tableau de bord dans votre navigateur.

### Accès local

Si vous avez démarré le service localement sur la même machine, ouvrez :

```text
http://127.0.0.1:5572
```

### Accès distant

Si vous avez démarré le service sur un serveur Linux ou Windows distant et autorisé l’accès externe, ouvrez :

```text
http://[votre_ip_serveur]:5572
```

Si vous utilisez un domaine et un reverse proxy, ouvrez plutôt l’URL configurée, par exemple :

```text
https://[votre_domaine]
```

:::info L’origine autorisée doit correspondre
La valeur utilisée avec `--rc-allow-origin` doit correspondre à l’adresse que vous utilisez réellement dans votre navigateur. Sinon, le tableau de bord risque de ne pas se connecter correctement.
:::

## Utiliser un reverse proxy

Un reverse proxy est utile si vous souhaitez des URLs plus propres, du HTTPS ou un contrôle d’accès supplémentaire.

### Exemple Nginx

Cet exemple sert les fichiers statiques extraits du tableau de bord via `Nginx` :

```nginx
server {
    listen 80;
    server_name [votre_domaine];

    location / {
        root /chemin/vers/build_extrait;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemple Caddy

Cet exemple sert les fichiers statiques via `Caddy` :

```caddy
[votre_domaine] {
    root * /chemin/vers/build_extrait
    file_server
}
```

:::note Hébergement statique du frontend
Ces exemples servent uniquement les fichiers frontend. Vous devez toujours avoir un backend `rclone rcd` fonctionnel que le tableau de bord peut atteindre.
:::

## Authentification avancée avec reverse proxy

Le projet documente aussi une configuration avancée où l’authentification est gérée par une passerelle externe et transmise à Rclone via `--rc-user-from-header`.

### Exemple Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/chemin/vers/build_extrait' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[votre_domaine]
```

### Exemple reverse proxy Caddy

```caddy
@rclone host [votre_domaine]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution L’authentification avancée nécessite des tests rigoureux
Cette configuration dépend de votre reverse proxy et de la passerelle d’authentification qui doivent transmettre correctement les headers. Si le header est absent ou mal configuré, l’accès peut échouer ou se comporter de manière inattendue.
:::

## Vérifier l’installation

Une fois tout en place, vérifiez que le tableau de bord se charge correctement.

### Vérifications de base

Confirmez les points suivants :

| Vérification | Résultat attendu |
|---|---|
| Processus `rclone rcd` en cours | Pas d’erreurs au démarrage dans la console ou les logs |
| Port `5572` à l’écoute | Service accessible localement ou à distance |
| Ouverture du navigateur sur l’URL configurée | Interface Yet Another Rclone Dashboard chargée |
| Authentification fonctionnelle | Connexion possible si l’authentification RC est activée |

### Problèmes courants

| Problème | Cause possible | Action suggérée |
|---|---|---|
| Tableau de bord ne se charge pas | Mauvaise URL ou service non lancé | Vérifiez la valeur `--rc-addr` et le statut du processus |
| Erreurs de connexion navigateur | Port bloqué par le pare-feu | Autorisez l’accès entrant sur `5572/tcp` si nécessaire |
| Échec de connexion | Mauvais `--rc-user` ou `--rc-pass` | Redémarrez `rclone rcd` avec les bons identifiants |
| Frontend ouvert mais appels API échouent | Incohérence `--rc-allow-origin` | Mettez l’origine à l’URL exacte du navigateur |
| Accès distant indisponible | Service lié uniquement à `127.0.0.1` | Utilisez `0.0.0.0:5572` si accès distant voulu |

:::danger Exposition publique sans protection
Ne publiez pas le tableau de bord directement sur Internet sans authentification ni reverse proxy sécurisé. Si vous comptez l’utiliser comme navigateur `rclone` distant ou gérer des remotes `rclone google drive` sur le réseau, sécurisez d’abord le point d’accès.
:::

## Notes supplémentaires pour Linux et Windows

### Linux

Linux est généralement l’environnement le plus simple pour faire tourner un service `rclone rcd` en continu. Vous pouvez lancer la commande manuellement, via un multiplexeur de terminal ou en service selon votre architecture.

### Windows

Sous Windows, assurez-vous que le chemin utilisé avec `--rc-files` pointe bien vers le dossier extrait du tableau de bord et que le pare-feu autorise le port configuré si vous avez besoin d’un accès distant.

### Note Docker

Le matériel source mentionne Docker comme dépendance optionnelle, mais ne fournit pas de procédure Docker validée pour ce projet. Si vous souhaitez utiliser des workflows `rclone docker`, consultez le dépôt officiel avant de vous lancer, plutôt que de supposer une configuration conteneurisée.

## Conclusion

Félicitations, vous avez configuré avec succès Yet Another Rclone Dashboard sous Linux ou Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂