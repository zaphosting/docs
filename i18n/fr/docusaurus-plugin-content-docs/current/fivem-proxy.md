---
id: fivem-proxy
title: "FiveM : Configurer un Reverse Proxy"
description: "Découvrez comment améliorer la sécurité et la fiabilité de votre serveur FiveM avec une configuration de reverse proxy pour une meilleure protection DDoS et performance → En savoir plus maintenant"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur reverse proxy est un serveur qui agit comme intermédiaire entre les utilisateurs finaux (vos joueurs) et votre serveur FiveM. Cela peut être très utile pour les serveurs qui subissent fréquemment des attaques DDoS, car il offre une couche supplémentaire de sécurité et de fiabilité en réduisant la visibilité de l’hôte principal et en fournissant une mitigation supplémentaire.

Dans ce guide, nous allons explorer le processus de configuration d’un reverse proxy pour votre serveur FiveM. Il existe deux types de reverse proxies dans ce scénario : le connect proxy utilisé pour le point de connexion (connect endpoint) et un server proxy utilisé pour le point serveur (server endpoint) où le proxy TCP/UDP brut a lieu. Les deux peuvent être configurés indépendamment l’un de l’autre.

<InlineVoucher />

## Préparation

Pour configurer un reverse proxy, vous aurez besoin d’un **serveur Linux** (comme un VPS) qui hébergera votre serveur proxy. Dans cet exemple, nous utiliserons Ubuntu comme distribution Linux, mais les étapes d’installation devraient être très similaires pour la plupart des distributions Linux.

:::tip Spécifications VPS recommandées
Nous recommandons fortement d’opter pour des vitesses réseau plus élevées si vous prévoyez de configurer un server proxy, surtout si votre serveur a beaucoup de joueurs. En effet, votre VPS va streamer du TCP/UDP brut directement entre le client (joueur) et le serveur FiveM. Sinon, un serveur avec des specs de base et peu d’améliorations devrait suffire. :)
:::

Nous recommandons également de configurer le proxy avec un **domaine** que vous possédez. Vous devez créer un enregistrement `A` sur le domaine que vous souhaitez utiliser (par exemple `zapdocs.example.com`), en le pointant vers l’adresse IP de votre __VPS Linux__. C’est ce que les joueurs utiliseront pour se connecter au serveur, même si vous pouvez techniquement utiliser l’adresse IP de votre serveur proxy si vous préférez.

### Accès au VPS

Avec votre VPS Linux prêt, vous devrez vous y connecter. Veuillez utiliser notre guide [Accès SSH Initial](vserver-linux-ssh.md) pour en savoir plus sur la procédure.

### Installation de Nginx

Vous utiliserez Nginx pour héberger un serveur reverse proxy car c’est un serveur web open-source très performant et populaire.

Une fois connecté à votre VPS, utilisez la commande suivante pour installer Nginx.

```
sudo apt install nginx
```

Une fois installé, vous devrez ajuster votre pare-feu pour que le service soit accessible depuis Internet. Pour ce guide, nous utiliserons le **pare-feu UFW** puisque Nginx s’enregistre comme une application, ce qui facilite la configuration. Vous pouvez en apprendre plus sur le pare-feu UFW avec notre guide [Conseils de sécurité Linux](vserver-linux-security-tips.md).

:::note
Si vous utilisez d’autres pare-feux (comme Iptables), assurez-vous de fournir l’accès nécessaire à Nginx, notamment sur les ports 80 et 443 où le service nginx fonctionne.
:::

Vous pouvez vérifier les profils Nginx en lançant `sudo ufw app list`. Dans ce cas, vous voudrez sélectionner l’option **Nginx Full**, qui donne accès au HTTP pour les tests et au HTTPS pour la production.

```
sudo ufw allow 'Nginx Full'
```

Avec Nginx maintenant configuré, essayez d’accéder à la page via un navigateur pour vérifier que tout fonctionne comme prévu. Si la page de test s’affiche correctement, vous pouvez continuer le guide.

```
http://[votre_ip_serveur]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Un connect proxy est utilisé pour proxyfier le point de connexion (connect endpoint) de votre serveur FiveM. En gros, cela signifie que votre serveur proxy sera responsable de recevoir les requêtes du point de connexion et de les transmettre à votre serveur FiveM principal. Cela offre un gros avantage en masquant la véritable adresse IP de l’hôte FiveM dans la liste des serveurs, réduisant ainsi la visibilité.

### Configuration Nginx

Commencez par créer une entrée dans le répertoire Nginx pour l’hôte que vous avez choisi lors de la configuration du domaine. Dans cet exemple, nous utiliserons `zapdocs.example.com` comme précédemment.

Utilisez la commande suivante pour créer le bloc serveur pour votre domaine, en remplaçant `[your_domain]` par le vôtre.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Copiez maintenant le template suivant dans votre éditeur et ajustez-le avec vos valeurs.

```
upstream backend {
    # Adresse IP du serveur FiveM
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Par exemple : zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Nécessaire pour transmettre correctement les headers d’authentification
        proxy_pass_request_headers on;
        # Nécessaire pour ne pas fermer la connexion instantanément
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Bloc supplémentaire pour un proxy avec cache
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Une fois toutes les valeurs adaptées à votre configuration, sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTER`.

Vous devez maintenant activer ce bloc serveur en créant un lien symbolique vers le répertoire actif.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Pour vérifier que tout est correct, notamment la syntaxe, vous pouvez utiliser `sudo nginx -t` pour voir si des erreurs apparaissent. Si tout est OK, la dernière étape est de redémarrer Nginx pour appliquer le nouveau bloc serveur.

```
systemctl reload nginx.service
```

Une fois le service redémarré, testez l’accès au domaine que vous avez configuré pour le reverse proxy dans votre navigateur. Si tout fonctionne, la page devrait charger le contenu désiré que vous avez défini dans le paramètre `targetServer`. En cas de problème, nous vous recommandons de consulter les logs pour le dépannage avec `journalctl -f -u nginx.service` afin d’identifier d’éventuelles erreurs.

### Configuration FiveM

Avec le proxy configuré, vous devrez ajuster quelques valeurs dans le fichier de configuration `server.cfg` de votre serveur FiveM.

Ajoutez les lignes suivantes dans la configuration, en remplaçant les valeurs par celles de votre setup.

```
# Empêche la liste des serveurs d’afficher votre serveur avec sa vraie IP
set sv_forceIndirectListing true

# Fait que la liste des serveurs demande votre domaine au lieu de l’IP par défaut (exemple : zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Liste d’adresses IPv4 en notation CIDR autorisées à passer 'X-Real-IP', et qui contournent le limiteur de débit
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Le point final réel où votre serveur est hébergé, ou un ou plusieurs proxies de point serveur
set sv_endpoints "[your_fivem_serverip]:30120"
```

Sauvegardez maintenant le fichier et redémarrez le serveur. Au prochain démarrage, votre domaine devrait résoudre vers votre serveur FiveM, ce qui permettra de s’y connecter via ce domaine.

Vous pouvez vérifier que tout fonctionne en essayant d’accéder à : `https://[your_domain]/info.json`. Si cela charge correctement, votre connect proxy fonctionne.

## Server Proxy

Un server proxy est utilisé pour proxyfier le point serveur vers votre serveur FiveM, ce qui proxy directement les points TCP/UDP bruts et les streams.

### Configuration Nginx

Pour cela, vous utiliserez le module **stream** qui fait partie de Nginx. Ouvrez le fichier `nginx.conf` avec nano.

```
sudo nano /etc/nginx/nginx.conf
```

Copiez maintenant le contenu suivant dans la portée racine, en remplaçant les valeurs par celles de votre setup.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Une fois toutes les valeurs adaptées, sauvegardez le fichier et quittez nano avec `CTRL + X`, puis `Y` pour confirmer et enfin `ENTER`.

Pour vérifier la syntaxe, utilisez `sudo nginx -t`. Si tout est OK, redémarrez Nginx pour appliquer la nouvelle configuration.

```
systemctl reload nginx.service
```

Une fois le service redémarré, essayez de vous connecter à votre serveur de jeux via le domaine proxy. Si tout fonctionne, vous devriez pouvoir vous connecter au serveur, précisément celui que vous avez défini dans le paramètre `targetServer`. En cas de problème, consultez les logs avec `journalctl -f -u nginx.service` pour identifier les erreurs.

### Configuration FiveM

Avec le proxy configuré, vous devrez ajuster une valeur dans le fichier `server.cfg` de votre serveur FiveM.

:::tip
Si vous avez déjà configuré le paramètre `set sv_endpoints` en mettant en place un Connect Proxy, vous pouvez sauter cette étape.
:::

Ajoutez la ligne suivante dans la configuration, en remplaçant la valeur par celle de votre setup.

```
# Le point final réel où votre serveur est hébergé, ou un ou plusieurs proxies de point serveur
set sv_endpoints "[your_fivem_serverip]:30120"
```

Sauvegardez le fichier et redémarrez le serveur. Au prochain démarrage, les points TCP/UDP bruts devraient maintenant passer par votre reverse proxy.

Vous pouvez vérifier cela en analysant l’adresse IP des joueurs, qui devrait être celle de votre serveur proxy suivie de ports aléatoires attribués.

## Certificat SSL

Avec votre reverse proxy FiveM configuré, nous recommandons vivement d’ajouter un certificat SSL à vos domaines utilisés pour garantir que les données transitent de manière sécurisée via HTTPS.

Consultez notre guide [Installer Certbot](dedicated-linux-certbot.md), qui couvre tout le processus de demande et de renouvellement automatique des certificats SSL pour vos domaines.

## Conclusion

Félicitations, vous avez configuré avec succès un reverse proxy pour votre serveur FiveM, ce qui vous apporte plusieurs améliorations en termes de sécurité, fiabilité et performance. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />