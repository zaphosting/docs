---
id: dedicated-linux-certbot
title: "Serveur dédié : Installer Certbot sur Linux"
description: "Découvrez comment sécuriser votre site web avec des certificats SSL gratuits grâce à Certbot et Let's Encrypt pour une transmission de données sécurisée → En savoir plus maintenant"
sidebar_label: Installer Certbot
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les certificats SSL sont des éléments essentiels d’internet, garantissant que les données peuvent être transmises en toute sécurité entre le client et l’hôte. Dans ce guide, nous allons explorer le processus d’installation de l’outil open-source [**Certbot**](https://certbot.eff.org/) pour demander des certificats SSL gratuits auprès de l’autorité de certification à but non lucratif **Let's Encrypt**.

<InlineVoucher />

## Préparation

Pour utiliser Certbot, vous aurez besoin d’un serveur Linux et d’un **domaine** que vous possédez. Vous devez avoir accès aux paramètres DNS du domaine et vous **devez** créer un enregistrement DNS `A` pointant vers l’adresse IP de votre __serveur Linux__ pour chaque domaine racine ou sous-domaine que vous souhaitez utiliser.

Certbot propose aussi des plugins supplémentaires qui vous permettent d’installer un certificat en "un clic" pour un domaine, compatible avec plusieurs serveurs web comme Nginx ou Apache. Nous recommandons d’utiliser Nginx, un serveur web open-source très performant et populaire. Consultez notre [guide proxy inverse Linux](dedicated-linux-proxy.md) pour vous aider à le configurer.

## Installation

Commencez par installer le paquet open-source [**Certbot**](https://certbot.eff.org/), que vous utiliserez pour demander des certificats SSL gratuits auprès de **Let's Encrypt**.

```
sudo apt install certbot
```

Une fois Certbot installé, vous pouvez demander des certificats pour votre(s) domaine(s). Let's Encrypt et Certbot proposent plusieurs défis ACME pour vérifier la propriété du domaine.

Nous recommandons vivement d’utiliser la méthode par défaut **HTTP-01** car elle permet un renouvellement automatique. Cependant, si vous rencontrez des problèmes, vous pouvez essayer la méthode **DNS-01** en alternative, qui est manuelle et ne supporte pas le renouvellement automatique car elle repose sur la vérification via un enregistrement DNS **TXT**.

:::tip Utilise les plugins pour serveurs web
Pour les utilisateurs d’un serveur web comme Nginx, Apache ou un serveur web personnalisé, nous recommandons de passer à la section **Plugins pour serveurs web** ci-dessous, qui montre comment utiliser les plugins Certbot pour ces serveurs afin de bénéficier d’une installation "en un clic" et de demander des certificats sans devoir arrêter le serveur web.
:::

### Défi HTTP-01

Avec Certbot installé, vous pouvez maintenant demander des certificats pour votre(s) domaine(s). Dans cet exemple, nous utiliserons le mode standalone, ce qui signifie que Certbot va lancer un serveur web temporaire pour effectuer les actions nécessaires. Cela implique que vous devez ouvrir le port 80 dans votre pare-feu et ne pas avoir d’autres serveurs web ou services utilisant ce port, afin que le serveur temporaire puisse démarrer et permettre la récupération du défi (d’où le `HTTP` dans le nom du défi).

Dans la commande suivante, vous utiliserez le paramètre `--standalone` pour indiquer à Certbot que vous souhaitez utiliser le serveur web temporaire.

```
# Pour les domaines racines
certbot certonly --standalone -d [votre_domaine_racine] -d www.[votre_domaine_racine]

# Pour les sous-domaines
certbot certonly --standalone -d [votre_domaine]

# Installation interactive
certbot certonly --standalone
```

Une fois la commande lancée, il se peut que vous deviez suivre une configuration interactive initiale qui vous demandera une adresse email pour la communication liée au certificat, suivie d’une option pour une liste de diffusion et des conditions générales à accepter.

Certbot va maintenant générer un défi ACME et l’héberger via le serveur web temporaire. Les serveurs de Let's Encrypt tenteront alors de récupérer ce défi depuis votre serveur et, en cas de succès, les certificats seront créés et sauvegardés dans le répertoire `/etc/letsencrypt/live/[votre_domaine]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Vous pouvez maintenant utiliser les certificats SSL où vous le souhaitez, simplement en fournissant le chemin local vers les certificats.

### Enregistrement DNS TXT

Si vous rencontrez des difficultés à vérifier votre domaine via la méthode **HTTP-01**, vous pouvez essayer la méthode **DNS-01** qui consiste à créer un enregistrement DNS **TXT** avec une valeur fournie par Let's Encrypt.

Comme mentionné précédemment, cette méthode ne supporte **pas** le renouvellement automatique à moins que vous ne mettiez en place votre propre infrastructure pour gérer cela. Il est donc fortement recommandé d’utiliser la méthode **HTTP-01** quand c’est possible.

Dans la commande suivante, vous utiliserez le paramètre `--preferred-challenges` pour indiquer à Certbot que vous souhaitez utiliser la méthode `DNS-01`.

```
# Pour les domaines racines
certbot certonly --preferred-challenges dns-01 -d [votre_domaine_racine] -d www.[votre_domaine_racine] --manual -m [votre_email]

# Pour les sous-domaines
certbot certonly --preferred-challenges dns-01 -d [votre_domaine] --manual -m [votre_email]

# Installation interactive
certbot certonly --preferred-challenges dns-01
```

Une fois la commande lancée, vous devrez suivre une configuration interactive initiale qui vous demandera une adresse email pour la communication liée au certificat, suivie d’une option pour une liste de diffusion et des conditions générales à accepter.

Certbot vous fournira alors les instructions pour créer un enregistrement DNS **TXT** avec une valeur spécifique à utiliser. La cible sera généralement `_acme-challenge.` préfixé à votre domaine (dans cet exemple, ce serait `_acme-challenge.zapdocs.example.com`) et la valeur à définir sera affichée dans la console.

Une fois l’enregistrement créé, appuyez sur Entrée pour continuer. Si tout est correct et propagé, les certificats seront créés et sauvegardés dans le répertoire `/etc/letsencrypt/live/[votre_domaine]`.

:::note
Soyez patient, car les modifications des enregistrements DNS peuvent prendre un certain temps à se propager. Cela se produit généralement en quelques minutes, mais dans de rares cas, cela peut prendre plus longtemps.
:::

Vous pouvez maintenant utiliser les certificats SSL où vous le souhaitez, simplement en fournissant le chemin local vers les certificats.

## Plugins pour serveurs web

Certbot propose plusieurs plugins pour serveurs web qui facilitent encore plus la gestion des certificats, car ils modifient automatiquement les blocs serveur concernés. Pour utiliser un plugin, il suffit d’ajouter le paramètre correspondant à votre commande `certbot`.

Ces méthodes utilisent toutes la validation **HTTP-01** et fonctionnent de manière similaire. Lorsqu’un plugin est utilisé, Certbot recherche d’abord le bloc serveur correspondant qui inclut le domaine demandé dans le paramètre `server_name`. Une fois trouvé, Certbot génère un défi ACME et ajoute un bloc temporaire `location /.well-known/acme-challenge/...` dans la configuration du serveur.

Les serveurs de Let's Encrypt tenteront alors de récupérer ce défi depuis votre serveur et, en cas de succès, votre certificat sera généré. La configuration du bloc serveur sera automatiquement modifiée pour passer en HTTPS (port 443) et pour pointer vers les certificats nouvellement créés.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Plugin Nginx

Avant d’utiliser le plugin, assurez-vous qu’il est installé.

```
sudo apt install python3-certbot-nginx
```

Pour utiliser le plugin Nginx, ajoutez le paramètre `--nginx` à votre commande comme suit.

```
# Pour les domaines racines
certbot --nginx -d [votre_domaine_racine] -d www.[votre_domaine_racine]

# Pour les sous-domaines
certbot --nginx -d [votre_domaine]

# Installation interactive
certbot --nginx
```

:::tip
Si vous souhaitez désactiver les modifications automatiques "en un clic" des blocs serveur par Certbot, vous pouvez ajouter le paramètre `certonly` dans la commande, par exemple `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Plugin Apache

Avant d’utiliser le plugin, assurez-vous qu’il est installé.

```
sudo apt install python3-certbot-apache
```

Pour utiliser le plugin Apache, ajoutez le paramètre `--apache` à votre commande comme suit.

```
# Pour les domaines racines
certbot --apache -d [votre_domaine_racine] -d www.[votre_domaine_racine]

# Pour les sous-domaines
certbot --apache -d [votre_domaine]

# Installation interactive
certbot --apache
```

:::tip
Si vous souhaitez désactiver les modifications automatiques "en un clic" des blocs serveur par Certbot, vous pouvez ajouter le paramètre `certonly` dans la commande, par exemple `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Plugin Webroot

Si vous utilisez votre propre serveur web local qui n’utilise pas de logiciel traditionnel, vous pouvez préférer la méthode webroot pour utiliser votre serveur web sans devoir l’arrêter.

Pour utiliser le plugin Webroot, ajoutez le paramètre `--webroot` à votre commande. Vous devez aussi inclure `-w [chemin_vers_votre_webroot]` (abréviation de `--webroot-path`), qui est le chemin vers le répertoire racine de votre serveur web.

```
# Pour les domaines racines
certbot --webroot -w [chemin_vers_votre_webroot] -d [votre_domaine_racine] -d www.[votre_domaine_racine]

# Pour les sous-domaines
certbot --webroot -w [chemin_vers_votre_webroot] -d [votre_domaine]

# Installation interactive
certbot --webroot -w [chemin_vers_votre_webroot]
```

:::tip
Un des emplacements webroot les plus courants est `/var/www/html`. Vous pouvez aussi utiliser cette méthode pour des serveurs web comme Nginx ou Apache si vous souhaitez utiliser le serveur sans que Certbot modifie automatiquement les blocs serveur comme le font les plugins natifs.
:::

</TabItem>
</Tabs>

## Renouvellement automatique

Dans la plupart des cas, Certbot configure automatiquement le renouvellement des certificats via un cronjob et/ou un timer systemd. Vous pouvez vérifier cela en lançant la commande suivante qui utilise le paramètre `--dry-run` pour tester le processus.

```
certbot renew --dry-run
```

:::tip
Comme mentionné plus haut, la méthode **DNS-01** ne supporte pas le renouvellement automatique via Certbot, sauf si vous mettez en place votre propre infrastructure pour gérer cela. Il est donc fortement recommandé d’utiliser la méthode **HTTP-01**.
:::

Cette commande devrait réussir si tout est en ordre. Si vous souhaitez consulter ou modifier le renouvellement automatique, la commande se trouve généralement dans l’un des emplacements suivants : `/etc/crontab/`, `/etc/cron.*/*` ou via `systemctl list-timers`.

### Configuration manuelle du cronjob

Si pour une raison quelconque le renouvellement automatique n’est pas configuré, vous pouvez l’ajouter vous-même via un cronjob. Ouvrez le menu crontab avec `crontab -e`. Si c’est la première fois, il vous sera demandé de choisir un éditeur. Sélectionnez la première option, généralement `/bin/nano`.

Avec le fichier ouvert dans nano, ajoutez simplement la ligne suivante pour lancer le renouvellement tous les jours à 6h du matin, heure locale.

```
0 6 * * * certbot renew
```

Sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTRÉE`.

## Conclusion

Vous avez configuré avec succès Certbot pour votre(s) domaine(s) via plusieurs méthodes, que ce soit en standalone, webroot ou via un des plugins, offrant à votre site une transmission sécurisée des données via HTTPS. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />