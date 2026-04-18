---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Apprenez à configurer Yet Another Rclone Dashboard, une interface graphique moderne pour rclone et navigateur rclone sous Linux et Windows, utilisant rclone rcd et les fichiers de release depuis GitHub -> Découvrez-le maintenant"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard est un tableau de bord web moderne pour `rclone rcd` qui offre une interface graphique pour parcourir les fichiers, visualiser les remotes et gérer les transferts. Dans ce guide, vous apprendrez ce que fait le logiciel, ses prérequis, et comment le lancer sous Linux ou Windows avec les méthodes de déploiement supportées.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Avant de commencer, vous devez avoir une installation fonctionnelle de [Rclone](https://rclone.org/) car Yet Another Rclone Dashboard est uniquement une interface frontend pour le daemon de contrôle à distance de Rclone.

### Exigences

Les exigences suivantes sont basées sur les informations disponibles du projet et le brouillon d’installation.

| Exigence | Détails |
| --- | --- |
| Système d’exploitation | Linux ou Windows |
| Logiciel requis | `rclone` |
| Version recommandée de Rclone | `v1.72.0` ou plus récente |
| Logiciels optionnels | `Docker`, `Nginx` ou `Caddy` selon votre méthode de déploiement |
| Port par défaut | `5572/tcp` |
| Accès Internet | Nécessaire si vous souhaitez télécharger les releases ou utiliser la méthode web fetch |

### Dépendances du tableau de bord

Yet Another Rclone Dashboard ne remplace pas Rclone. Il se connecte à `rclone rcd`, qui est le mode *daemon de contrôle à distance* de Rclone.

| Composant | Rôle |
| --- | --- |
| Yet Another Rclone Dashboard | Interface web frontend |
| `rclone rcd` | API backend et opérations sur fichiers |
| Remotes Rclone | Vos connexions de stockage cloud configurées comme Google Drive |

:::info Rclone est obligatoire
Vous ne pouvez pas utiliser ce tableau de bord seul. Vous devez avoir `rclone` installé et le lancer en mode daemon avec l’interface de contrôle à distance activée.
:::

### Valeurs de remplacement utilisées dans ce guide

Plusieurs commandes dans ce guide utilisent des placeholders. Remplacez-les par vos propres valeurs avant d’exécuter les commandes.

| Placeholder | Signification |
| --- | --- |
| `[your_user]` | Nom d’utilisateur pour l’authentification du contrôle à distance Rclone |
| `[your_password]` | Mot de passe pour l’authentification du contrôle à distance Rclone |
| `[your_server_ip]` | Adresse IP publique ou privée de votre serveur |
| `[your_domain]` | Nom de domaine utilisé pour l’accès via reverse proxy |
| `[your_build_path]` | Chemin vers les fichiers extraits du tableau de bord |

## Méthodes de déploiement disponibles

Vous pouvez lancer Yet Another Rclone Dashboard de plusieurs façons selon votre mode d’accès souhaité.

| Méthode | Idéal pour | Notes |
| --- | --- | --- |
| `--rc-files` | Déploiements manuels | Utilise les fichiers statiques extraits |
| `--rc-web-gui` avec `--rc-web-fetch-url` | Installation rapide | Permet à Rclone de récupérer la dernière release du tableau de bord |
| Serveur web comme Nginx ou Caddy | Hébergement personnalisé | Sert le frontend statique séparément |
| Reverse proxy avec authentification externe | Configurations avancées | Utile pour une authentification centralisée |

## Télécharger la release du tableau de bord

Si vous souhaitez utiliser la méthode manuelle `--rc-files` ou héberger le frontend avec votre propre serveur web, téléchargez d’abord l’archive de la dernière release depuis les releases GitHub du projet.

Source officielle : [Yet Another Rclone Dashboard sur GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Au moment des données référencées, la dernière release est `v0.3.8` et inclut le fichier `yet-another-rclone-dashboard-v0.3.8.zip`.

### Exemple de téléchargement sous Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Exemple de téléchargement sous Windows

Sous Windows, téléchargez le fichier `.zip` depuis la page des releases GitHub et extrayez-le dans un dossier tel que :

```text
C:\yet-another-rclone-dashboard
```

:::note Informations sur la version de la release
La version de la release peut évoluer dans le temps. Si une version plus récente est disponible, utilisez le fichier de release actuel depuis la page GitHub du projet au lieu de l’exemple montré ici.
:::

## Lancer le tableau de bord avec Rclone rc-files

C’est la méthode la plus directe si vous avez déjà téléchargé et extrait les fichiers frontend.

### Exemple Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemple Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemple local sur le bureau

Si vous souhaitez utiliser le tableau de bord uniquement localement sur le même système, vous pouvez le lier à `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Ne pas exposer Rclone sans authentification
N’utilisez `--rc-no-auth` que pour des tests locaux sur `127.0.0.1`. Si vous liez Rclone à `0.0.0.0`, vous devez le protéger avec une authentification ou un reverse proxy correctement configuré.
:::

## Lancer le tableau de bord avec Rclone web fetch

Rclone peut récupérer automatiquement une interface web, ce qui simplifie le déploiement si votre configuration le permet.

### Exemple Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Exemple Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Explication des flags importants

| Flag | Rôle |
| --- | --- |
| `--rc-web-gui` | Active le support de l’interface web dans Rclone |
| `--rc-web-fetch-url` | Indique à Rclone où récupérer les métadonnées de la dernière release |
| `--rc-user` | Définit le nom d’utilisateur pour la connexion |
| `--rc-pass` | Définit le mot de passe pour la connexion |
| `--rc-addr` | Définit l’adresse IP et le port d’écoute |
| `--rc-allow-origin` | Autorise les requêtes du navigateur depuis l’URL spécifiée |
| `--rc-web-gui-no-open-browser` | Empêche l’ouverture automatique du navigateur |

:::tip Correspondance exacte de l’Origin
Réglez `--rc-allow-origin` sur l’URL exacte que vous utilisez dans votre navigateur, incluant le protocole correct comme `http://` ou `https://`. C’est particulièrement important avec un reverse proxy.
:::

## Servir le tableau de bord avec un serveur web

Comme Yet Another Rclone Dashboard est une application web statique, vous pouvez aussi l’héberger avec un serveur web classique comme Nginx ou Caddy.

Cette méthode est utile si vous souhaitez servir le frontend sur un port ou domaine distinct pendant que Rclone tourne en arrière-plan.

### Exemple Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Exemple Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Points à garder en tête

Si vous servez le frontend séparément, Rclone doit toujours tourner avec des paramètres `rc` compatibles en arrière-plan. Vous devez aussi vous assurer que les requêtes du navigateur sont autorisées depuis l’URL du frontend.

| Paramètre | Exemple |
| --- | --- |
| URL frontend | `https://[your_domain]` |
| Adresse de liaison Rclone | `127.0.0.1:5572` ou `0.0.0.0:5572` |
| Origin autorisé | `https://[your_domain]` |

## Configuration avancée avec authentification reverse proxy

Pour des environnements avancés, vous pouvez placer le tableau de bord derrière un reverse proxy et utiliser une passerelle d’authentification externe. Le brouillon fourni mentionne l’option `--rc-user-from-header` de Rclone pour cela.

### Exemple Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Configuration avancée d’authentification
Cette méthode dépend de votre reverse proxy et de votre stack d’authentification. La configuration exacte pour des outils comme `caddy-security` dépasse le cadre de ce guide, mais l’exemple ci-dessus montre comment le tableau de bord peut recevoir un header utilisateur authentifié.
:::

## Configurer l’accès et la sécurité

Avant d’utiliser le tableau de bord, vérifiez les réglages d’accès les plus importants.

### Valeurs de configuration recommandées

| Option | Recommandation |
| --- | --- |
| `--rc-user` | Choisissez un nom d’utilisateur dédié comme `zaphosting` |
| `--rc-pass` | Utilisez un mot de passe fort |
| `--rc-addr` | Utilisez `127.0.0.1:5572` derrière un reverse proxy si possible |
| `--rc-allow-origin` | Correspond à l’URL exacte utilisée dans le navigateur |
| Pare-feu | N’ouvrez `5572/tcp` que si un accès direct est nécessaire |

### Bonnes pratiques de sécurité

- Utilisez une authentification si vous exposez le service sur un réseau
- Préférez un reverse proxy avec HTTPS pour un accès public
- Limitez l’accès direct à `5572/tcp` autant que possible
- Gardez Rclone à jour si vous l’utilisez pour accéder à un stockage cloud comme `rclone google drive`

:::danger Risque d’exposition publique
L’accès au contrôle à distance de Rclone offre des capacités puissantes de gestion de fichiers et de remotes. Ne l’exposez pas publiquement sans authentification et restrictions réseau appropriées.
:::

## Démarrer et vérifier le tableau de bord

Une fois votre configuration choisie en place, lancez `rclone rcd` et ouvrez le tableau de bord dans votre navigateur.

### Exemples d’accès

| Scénario | URL |
| --- | --- |
| Accès local | `http://127.0.0.1:5572` |
| Accès direct serveur | `http://[your_server_ip]:5572` |
| Accès via reverse proxy | `https://[your_domain]` |

### Ce que vous devriez voir

Si tout est bien configuré, l’interface Yet Another Rclone Dashboard devrait se charger et vous permettre de :

- vous connecter à votre daemon Rclone
- inspecter les remotes configurés
- parcourir les fichiers
- visualiser les transferts
- consulter les réglages et infos système

Si la page ne se charge pas, vérifiez les points suivants :

| Vérification | Pourquoi c’est important |
| --- | --- |
| Processus Rclone en cours | Le tableau de bord a besoin du daemon backend |
| Port `5572` accessible | Nécessaire pour un accès direct |
| `--rc-allow-origin` correct | Évite les problèmes d’accès navigateur |
| Nom d’utilisateur et mot de passe corrects | Obligatoire pour l’accès authentifié |
| Headers reverse proxy corrects | Important pour les configurations avancées d’authentification |

## Dépannage

### Le navigateur ne peut pas se connecter

Si votre navigateur ne peut pas ouvrir le tableau de bord, vérifiez que Rclone écoute bien à l’adresse et port attendus.

Sous Linux, vous pouvez vérifier les ports d’écoute avec :

```bash
ss -tulpn | grep 5572
```

Sous Windows, utilisez :

```powershell
netstat -ano | findstr 5572
```

### Échec d’authentification

Si la connexion échoue :

- confirmez les valeurs utilisées pour `--rc-user` et `--rc-pass`
- assurez-vous que votre reverse proxy ne supprime pas les headers nécessaires
- évitez d’utiliser `--rc-no-auth` sur des interfaces distantes ou publiques

### Le frontend charge mais les actions échouent

Cela indique généralement un problème d’origine ou de communication avec le backend.

Vérifiez attentivement ces valeurs :

- `--rc-allow-origin`
- `--rc-addr`
- adresse cible du reverse proxy
- URL utilisée dans le navigateur pour accéder au tableau de bord

:::tip Utilisez les logs pour un diagnostic rapide
Si le tableau de bord ne fonctionne pas comme prévu, commencez par vérifier la sortie console de Rclone. Les problèmes d’authentification, de liaison et d’origine y sont souvent visibles immédiatement.
:::

## Référence logicielle

### Détails du projet

| Élément | Valeur |
| --- | --- |
| Nom | Yet Another Rclone Dashboard |
| Catégorie | Frontend |
| Source | [Dépôt GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Release référencée | `v0.3.8` |
| Asset de la release | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Backend recommandé | `rclone v1.72.0` ou plus récent |

### Fonctionnalités connues depuis la page du projet

D’après les informations du dépôt référencé, le tableau de bord supporte les domaines suivants :

- profils de connexion multiples
- informations système et résumé de statut Rclone
- inspection des remotes
- import/export de configuration Rclone
- navigation et filtrage de fichiers
- vues liées aux transferts

:::note Disponibilité des fonctionnalités
Le comportement des fonctionnalités peut changer entre les releases. Pour des détails exacts sur une version plus récente, consultez le changelog et les notes de release du projet sur GitHub.
:::

## Conclusion

Félicitations, vous avez configuré avec succès Yet Another Rclone Dashboard sous Linux ou Windows. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂