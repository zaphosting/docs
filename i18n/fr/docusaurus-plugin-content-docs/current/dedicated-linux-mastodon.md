---
id: dedicated-linux-mastodon
title: "Installer Mastodon sur un serveur Linux - Lance ta propre plateforme sociale"
description: "Découvre comment configurer un réseau social Mastodon auto-hébergé et sécurisé sur des serveurs basés sur Debian pour un microblogging indépendant → En savoir plus maintenant"
sidebar_label: Installer Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mastodon est un logiciel libre et open-source pour faire tourner des services de réseaux sociaux auto-hébergés.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Il propose des fonctionnalités de microblogging similaires à celles du service X (anciennement Twitter), offertes par un grand nombre de nœuds indépendants, appelés instances,  
chacun avec son propre code de conduite, conditions d’utilisation, politique de confidentialité, options de confidentialité et règles de modération.  
:::info
Ce guide se concentre sur l’installation sur une distribution basée sur Debian. Exemples : Debian et Ubuntu. Ce guide varie selon le système d’exploitation que tu utilises.
:::

## Prérequis système
Si tu veux installer une instance Mastodon sur ton serveur, tu dois remplir quelques prérequis :
- Domaine
- Serveur Linux
- Serveur mail

## Préparation de ton système
Il est recommandé de désactiver au préalable la connexion par mot de passe sur SSH, car c’est un risque de sécurité d’utiliser la connexion par mot de passe sur des serveurs accessibles depuis Internet.  
Tu peux faire ça dans le panneau de contrôle de ton serveur sous Informations -> Accès & Sécurité -> Désactiver la connexion par mot de passe  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Ensuite, mets à jour tes paquets avec la commande suivante :  
```
apt update && apt upgrade -y
```

Ensuite, installe les dépendances de Mastodon :  
```bash
# Dépôts système
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Après avoir installé les dépendances pour Mastodon, on peut installer les paquets système nécessaires. On fait ça avec ces deux commandes :  
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
Laisse les paquets s’installer, ça peut prendre un peu de temps. Ensuite, configure yarn, le gestionnaire de paquets pour Node.JS installé précédemment :  
```bash
corepack enable
yarn set version stable
```

## Installation de Ruby
On va créer un utilisateur dédié, ça facilite la gestion des versions de Ruby. Commence par créer un utilisateur appelé mastodon, avec la connexion désactivée. Ensuite, connecte-toi en tant que mastodon avec ces commandes :  
```bash
# Tu peux laisser les champs vides
adduser --disabled-login mastodon
su - mastodon
```

Maintenant, installe le gestionnaire Ruby `rbenv`, qui simplifie la gestion des versions Ruby. Fais-le avec ces commandes :  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Une fois que c’est fait, installe Ruby et bundler avec cette commande :  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Ça peut prendre un moment, alors profite-en pour te prendre un thé ou un café. Une fois fini, tu peux revenir à l’utilisateur root avec la commande `exit`.

## Configuration de PostgreSQL
Mastodon utilise PostgreSQL comme système de base de données. Configure-le facilement avec :  
```bash
sudo -u postgres psql
```

Dans l’invite PostgreSQL, tape :  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Installation de Mastodon
Reviens à l’utilisateur mastodon :  
```bash
su - mastodon
```
Télécharge la dernière version de Mastodon avec git, via ces deux commandes :  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Ensuite, installe les dernières dépendances Ruby et Javascript avec ces commandes :  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Crée ton fichier de configuration Mastodon avec :  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Si la configuration de ta base de données échoue, connecte-toi à postgres avec `sudo -u postgres psql` et suis cette doc :  

https://gist.github.com/amolkhanorkar/8706915
:::

Ensuite, reviens à l’utilisateur root avec `exit`.

## Configuration du serveur web
Là, ça devient un peu plus technique. Commence par créer un enregistrement A et/ou AAAA dans ta zone DNS qui pointe directement vers ton serveur. Sinon, tu peux pointer l’enregistrement racine vers ton serveur.

Ensuite, copie et active la configuration web de Mastodon avec ces commandes :  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Modifie ensuite le fichier `/etc/nginx/sites-available/mastodon` avec un éditeur comme vim ou nano, et remplace example.com par ton domaine.  
Après ça, récupère un certificat SSL pour ton domaine facilement avec :  
```bash
certbot --nginx -d <ton domaine>
```
Entre ton domaine. On te demandera plusieurs infos. À la fin, il te proposera de rediriger automatiquement les requêtes http vers https, on te conseille d’accepter.

## Création du service Mastodon
Enfin, crée un service système Mastodon. C’est assez simple. Copie la configuration par défaut dans le dossier des services de ta distribution :  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Active et démarre tes nouveaux services avec ces commandes :  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Après un reboot, ton installation devrait être terminée. Amuse-toi bien avec ton instance !