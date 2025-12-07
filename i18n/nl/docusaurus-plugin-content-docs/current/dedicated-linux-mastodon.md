---
id: dedicated-linux-mastodon
title: "Dedicated Server: Installatie van Mastodon"
description: "Ontdek hoe je een veilige, zelf-gehoste Mastodon sociale netwerk op Debian-gebaseerde servers opzet voor onafhankelijke microblogging → Leer nu meer"
sidebar_label: Installeer Mastodon
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mastodon is gratis en open-source software voor het draaien van zelf-gehoste sociale netwerken.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Het heeft microblogging functies vergelijkbaar met de X (voorheen Twitter) dienst, aangeboden door een groot aantal onafhankelijk gerunde nodes, bekend als instances,  
elk met hun eigen gedragscode, servicevoorwaarden, privacybeleid, privacyopties en moderatiebeleid.  
:::info  
Deze gids richt zich op de installatie op een Debian gebaseerde distro. Voorbeelden zijn Debian en Ubuntu. Deze gids verschilt afhankelijk van welk OS je gebruikt.  
:::

## Systeemvereisten
Als je een Mastodon Instance op je server wilt opzetten, moet je aan een paar vereisten voldoen:
- Domein
- Linux-gebaseerde server
- E-mailserver

## Je systeem voorbereiden
Het is aan te raden om vooraf het wachtwoord-inloggen via SSH uit te schakelen, omdat dit een beveiligingsrisico is op servers die vanaf het internet bereikbaar zijn.  
Dit kun je doen in het webinterface van je server onder Informatie -> Toegang & Beveiliging -> Wachtwoord-inloggen deactiveren  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Daarna update je je pakketten met het volgende commando:  
```
apt update && apt upgrade -y
```

Vervolgens moet je de dependencies van Mastodon installeren:  
```bash
# Systeem repositories
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Nadat we de dependencies voor Mastodon hebben geïnstalleerd, kunnen we de benodigde systeem pakketten installeren. Dat doen we met deze twee commando’s:  
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
Laat de pakketten installeren, dit kan even duren. Daarna moeten we yarn configureren, dat is een package manager voor de eerder geïnstalleerde Node.JS:  
```bash
corepack enable
yarn set version stable
```

## Ruby installeren
We maken een aparte gebruiker aan, dat maakt het beheren van Ruby-versies veel makkelijker. Maak eerst een gebruiker aan met de naam mastodon, zonder login. Daarna switch je naar de mastodon gebruiker met:  
```bash
# Je kunt de velden gewoon leeg laten
adduser --disabled-login mastodon
su - mastodon
```

Nu installeren we de Ruby manager `rbenv`, die het beheren van Ruby-versies makkelijker maakt. Dat doe je zo:  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Als je dit hebt gedaan, kun je Ruby installeren met dit commando. We installeren ook bundler in deze stap:  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Dit kan even duren, dus chill even met een kop thee of koffie. Als je klaar bent, kun je terug naar de root gebruiker met `exit`.

## PostgreSQL configureren
Mastodon gebruikt PostgreSQL als database. Configureer het zo:  
```bash
sudo -u postgres psql
```

In de PostgreSQL prompt voer je het volgende in:  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodon opzetten
Switch weer naar de mastodon gebruiker:  
```bash
su - mastodon
```
Download de nieuwste Mastodon versie met git:  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Installeer daarna de laatste dependencies voor Ruby en Javascript:  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Maak nu je Mastodon configuratiebestand aan met:  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info  
Als je database setup faalt, log dan in op postgres met `sudo -u postgres psql` en volg deze documentatie:  

https://gist.github.com/amolkhanorkar/8706915  
:::

Ga daarna weer terug naar root met `exit`.

## Webserver configureren
Nu komt het lastige deel: je moet je webserver configureren. Maak eerst een A-record en/of AAAA-record aan in je DNS die direct naar je server verwijst. Je kunt ook het root-record naar je server laten wijzen.

Gebruik daarna deze twee commando’s om de Mastodon webserverconfiguratie te kopiëren en te activeren:  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Bewerk het bestand `/etc/nginx/sites-available/mastodon` met een teksteditor zoals vim of nano en vervang example.com door jouw domein.  
Vervolgens moet je een SSL-certificaat voor je domein aanvragen. Dat doe je makkelijk met:  
```bash
certbot --nginx -d <jouw domein>
```
Voer je domein in. Je wordt gevraagd om wat gegevens. Aan het einde vraagt het of je http automatisch naar https wilt laten doorverwijzen, wij raden aan dit aan te zetten.

## Mastodon service aanmaken
Tot slot maken we een Mastodon systemd service aan. Dit is vrij straightforward.  
Kopieer de standaard serviceconfiguratie naar de service map van je distro:  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Activeer en start je nieuwe services met:  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Na een reboot is je setup klaar. Veel plezier met je eigen Mastodon instance!