---
id: dedicated-linux-mastodon
title: "Mastodon op een Linux Server Installeren - Start Je Eigen Social Network"
description: "Ontdek hoe je een veilige, zelf-gehoste Mastodon social network op Debian-gebaseerde servers opzet voor onafhankelijke microblogging → Leer het nu"
sidebar_label: Mastodon Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mastodon is gratis en open-source software om zelf-gehoste social networking diensten te draaien.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Het heeft microblogging features vergelijkbaar met X (voorheen Twitter), aangeboden door een groot aantal onafhankelijk draaiende nodes, ook wel instances genoemd,  
elk met hun eigen gedragscode, servicevoorwaarden, privacybeleid, privacy-instellingen en moderatiebeleid.  
:::info  
Deze gids richt zich op installatie op een Debian-gebaseerde distro. Voorbeelden zijn Debian en Ubuntu. De gids verschilt afhankelijk van welk OS je gebruikt.  
:::

## Systeemvereisten  
Wil je een Mastodon instance op je server opzetten, dan moet je aan een paar voorwaarden voldoen:  
- Domein  
- Linux server  
- Mailserver  

## Je Systeem Voorbereiden  
Het is aan te raden om vooraf wachtwoord-login via SSH uit te schakelen, want dit is een beveiligingsrisico op servers die vanaf internet bereikbaar zijn.  
Dit doe je in het webinterface van je server onder Informatie -> Toegang & Beveiliging -> Wachtwoord-login uitschakelen  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Daarna update je je pakketten met het volgende commando:  
```
apt update && apt upgrade -y
```

Vervolgens installeer je de dependencies van Mastodon:  
```bash
# Systeem repositories
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Als de dependencies geïnstalleerd zijn, installeren we de benodigde systeem pakketten met deze twee commando’s:  
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
Laat de installatie even lopen, dat kan wat tijd kosten. Daarna configureren we yarn, de package manager voor Node.JS:  
```bash
corepack enable
yarn set version stable
```

## Ruby Installeren  
We maken een aparte gebruiker aan, dat maakt het beheren van Ruby-versies veel makkelijker. Maak eerst een gebruiker aan met de naam mastodon, zonder login. Daarna switch je naar die gebruiker:  
```bash
# Velden leeg laten is prima
adduser --disabled-login mastodon
su - mastodon
```

Nu installeren we de Ruby manager `rbenv`, die het beheren van Ruby-versies een stuk eenvoudiger maakt:  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Als dat klaar is, installeer je Ruby en bundler met:  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Dit kan even duren, dus pak een kop koffie of thee. Daarna kun je terug naar de root gebruiker met `exit`.

## PostgreSQL Configureren  
Mastodon gebruikt PostgreSQL als database. Configureer het zo:  
```bash
sudo -u postgres psql
```

In de PostgreSQL prompt voer je in:  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodon Installeren  
Switch weer naar de mastodon gebruiker:  
```bash
su - mastodon
```
Download de nieuwste Mastodon versie met git:  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Installeer daarna de laatste Ruby en Javascript dependencies:  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Maak je Mastodon configuratiebestand aan met:  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info  
Als je database setup faalt, log dan in op postgres met `sudo -u postgres psql` en volg deze handleiding:  

https://gist.github.com/amolkhanorkar/8706915  
:::

Ga daarna weer terug naar root met `exit`.

## Webserver Configureren  
Nu het lastige deel: je webserver instellen. Maak eerst een A-Record en/of AAAA-Record aan in je DNS die direct naar je server verwijst. Je kunt ook het root-record naar je server laten wijzen.

Kopieer en activeer daarna de Mastodon webserver configuratie met:  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Open `/etc/nginx/sites-available/mastodon` met een editor zoals vim of nano en vervang example.com door jouw domein.  
Vervolgens vraag je een SSL-certificaat aan met:  
```bash
certbot --nginx -d <jouw domein>
```
Vul je domein in. Je krijgt een paar vragen over credentials. Aan het einde wordt gevraagd of je http automatisch naar https wilt laten doorverwijzen, wij raden aan dit aan te zetten.

## Mastodon Service Aanmaken  
Tot slot maken we een systemd service aan voor Mastodon. Kopieer de standaard service configuratie naar de juiste map:  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Activeer en start de services met:  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Na een reboot is je setup klaar. Veel plezier met je eigen Mastodon instance!