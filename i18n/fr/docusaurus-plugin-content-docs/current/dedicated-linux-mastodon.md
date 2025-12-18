---
id: dedicated-linux-mastodon
title: "Serveur dédié : Installation de Mastodon"
description: "Découvrez comment configurer un réseau social Mastodon auto-hébergé et sécurisé sur des serveurs basés sur Debian pour un microblogging indépendant → En savoir plus maintenant"
sidebar_label: Installer Mastodon
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mastodon est un logiciel libre et open-source pour faire tourner des services de réseaux sociaux auto-hébergés.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Il propose des fonctionnalités de microblogging similaires au service X (anciennement Twitter), offertes par un grand nombre de nœuds indépendants, appelés instances,  
chacune avec son propre code de conduite, conditions d’utilisation, politique de confidentialité, options de confidentialité et règles de modération.  
:::info  
Ce guide se concentre sur l’installation sur une distribution basée sur Debian. Exemples : Debian et Ubuntu. Ce guide varie selon le système d’exploitation que vous utilisez.  
:::

## Prérequis système
Si vous voulez configurer une instance Mastodon sur votre serveur, vous devez remplir certains prérequis :  
- Domaine  
- Serveur Linux  
- Serveur mail  

## Préparation de votre système
Il est recommandé de désactiver au préalable la connexion par mot de passe sur SSH, car c’est un risque de sécurité d’utiliser la connexion par mot de passe sur des serveurs accessibles depuis Internet.  
Vous pouvez faire cela dans l’interface web de votre serveur sous Informations -> Accès & Sécurité -> Désactiver la connexion par mot de passe  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Ensuite, mettez à jour vos paquets avec la commande suivante :  
```
apt update && apt upgrade -y
```

Ensuite, vous devez installer les dépendances de Mastodon :  
```bash
# Dépôts système
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Après avoir installé les dépendances pour Mastodon, on peut installer les paquets système nécessaires. Faites-le simplement avec ces deux commandes :  
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
Laissez les paquets s’installer, cela peut prendre un peu de temps. Ensuite, configurez yarn, qui est un gestionnaire de paquets pour Node.JS installé précédemment :  
```bash
corepack enable
yarn set version stable
```

## Installation de Ruby
On va créer un utilisateur différent, car ça facilite la gestion des versions de Ruby. D’abord, créez un utilisateur appelé mastodon, dont la connexion est désactivée. Ensuite, passez dans l’utilisateur mastodon. Faites-le avec ces commandes :  
```bash
# Vous pouvez laisser les champs vides
adduser --disabled-login mastodon
su - mastodon
```

Maintenant, on installe le gestionnaire Ruby `rbenv`, qui facilite la gestion des versions de Ruby. Installez-le avec ces commandes :  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Une fois cette série de commandes terminée, installez Ruby avec la commande suivante. On installera aussi bundler à cette étape.  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Cela peut prendre un peu de temps, alors sois patient et prends un thé ou un café pendant l’attente. Une fois fini, vous pouvez revenir à l’utilisateur root avec la commande `exit`.

## Configuration de PostgreSQL
Mastodon utilise PostgreSQL comme système de base de données. La configuration se fait facilement avec :  
```bash
sudo -u postgres psql
```

Dans l’invite PostgreSQL, entrez :  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mise en place de Mastodon
Revenez dans l’utilisateur mastodon :  
```bash
su - mastodon
```
Utilisez git pour télécharger la version la plus récente de Mastodon avec ces deux commandes :  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Ensuite, installez les dernières dépendances Ruby et Javascript avec ces commandes :  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Créez ensuite votre fichier de configuration Mastodon avec :  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info  
Si la configuration de votre base de données échoue, connectez-vous à postgres avec `sudo -u postgres psql` et suivez cette documentation :  

https://gist.github.com/amolkhanorkar/8706915  
:::

Ensuite, revenez à l’utilisateur root avec la commande `exit`.

## Configuration du serveur web
Voici la partie un peu plus délicate. Vous devez configurer votre serveur web. D’abord, créez un enregistrement A et/ou AAAA dans votre DNS qui pointe directement vers votre serveur. Sinon, vous pouvez pointer l’enregistrement racine vers votre serveur.

Ensuite, copiez et activez la configuration web de Mastodon avec ces deux commandes :  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Puis éditez le fichier `/etc/nginx/sites-available/mastodon` avec un éditeur de texte comme vim ou nano et remplacez example.com par votre domaine.  
Ensuite, obtenez un certificat SSL pour votre domaine. Vous pouvez facilement le faire avec cette commande :  
```bash
certbot --nginx -d <votre domaine>
```
Entrez votre domaine. Plusieurs questions vous seront posées. À la fin, il vous sera demandé si vous souhaitez rediriger automatiquement les requêtes http vers https, on vous recommande d’activer cette option.

## Création d’un service Mastodon
Enfin, on crée un service système Mastodon. C’est assez simple.  
Copiez la configuration de service par défaut dans le répertoire des services de votre distribution :  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Activez et démarrez vos nouveaux services avec ces deux commandes :  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Après un redémarrage, votre installation devrait être terminée. Amusez-vous bien avec votre instance !