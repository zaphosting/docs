---
id: vserver-linux-mastodon
title: "VPS: Installatie van Mastodon"
description: "Ontdek hoe je een veilige, zelfgehoste Mastodon social network op Debian-gebaseerde servers opzet voor volledige controle en privacy → Leer nu meer"
sidebar_label: Installeer Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Mastodon is gratis en open-source software om zelfgehoste sociale netwerken te draaien.

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

Het heeft microblogging functies vergelijkbaar met X (voorheen Twitter), aangeboden door een groot aantal onafhankelijk draaiende nodes, ook wel instances genoemd,  
elk met hun eigen gedragscode, servicevoorwaarden, privacybeleid, privacy-instellingen en moderatiebeleid.  
:::info
Deze handleiding richt zich op de installatie op een Debian-gebaseerde distro. Voorbeelden zijn Debian en Ubuntu. De stappen kunnen verschillen afhankelijk van je OS.
:::

<InlineVoucher />

## Systeemvereisten
Als je een Mastodon instance op je server wilt opzetten, moet je aan een paar vereisten voldoen:
- Domein
- Linux-gebaseerde server
- E-mailserver

## Je systeem voorbereiden
Het is aan te raden om vooraf het wachtwoordlogin via SSH uit te schakelen, want wachtwoordlogin is een beveiligingsrisico op servers die vanaf het internet bereikbaar zijn.  
Dit kun je doen in het webinterface van je server onder Informatie -> Toegang & Beveiliging -> Wachtwoordlogin deactiveren  
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)  
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

Nadat we de dependencies voor Mastodon hebben geïnstalleerd, installeren we de benodigde systeem pakketten met deze twee commando’s:
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
Laat de pakketten installeren, dit kan even duren. Daarna moeten we yarn configureren, een package manager voor de eerder geïnstalleerde Node.JS:
```bash
corepack enable
yarn set version stable
```

## Ruby installeren
We maken een aparte gebruiker aan, dat maakt het beheren van Ruby-versies veel makkelijker. Maak eerst een gebruiker aan genaamd mastodon, met uitgeschakelde login. Daarna switch je naar de mastodon gebruiker met deze commando’s:
```bash
# Je kunt de velden leeg laten
adduser --disabled-login mastodon
su - mastodon
```

Nu installeren we de Ruby manager `rbenv`, die het beheren van Ruby-versies makkelijker maakt. Installeer het met deze commando’s:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Als je hiermee klaar bent, installeer je Ruby met dit commando. We installeren ook bundler in deze stap:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Dit kan even duren, dus chill even met een kop thee of koffie. Daarna ben je klaar met de setup en kun je terug naar de root gebruiker met `exit`.

## PostgreSQL configureren
Mastodon gebruikt PostgreSQL als database. Configureer het eenvoudig met:
```bash
sudo -u postgres psql
```

In de PostgreSQL prompt voer je het volgende in:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodon opzetten
Switch nu weer naar de mastodon gebruiker:
```bash
su - mastodon
```
Download de nieuwste versie van Mastodon met git via deze twee commando’s:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Installeer daarna de laatste dependencies voor Ruby en Javascript met deze commando’s:
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
Als je database setup faalt, log dan in op je postgres met `sudo -u postgres psql` en volg deze documentatie: 

https://gist.github.com/amolkhanorkar/8706915
:::

Ga daarna terug naar de root gebruiker met `exit`.

## Webserver configureren
Nu komt het lastige deel: je webserver configureren. Maak eerst een A-record en/of AAAA-record aan in je DNS die direct naar je server verwijst. Je kunt ook het root-record naar je server laten wijzen.

Gebruik daarna deze twee commando’s om de Mastodon webserverconfiguratie te kopiëren en te activeren:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Bewerk daarna het bestand `/etc/nginx/sites-available/mastodon` met een teksteditor zoals vim of nano en vervang example.com door jouw domein.  
Vervolgens moet je een SSL-certificaat voor je domein aanvragen. Dat doe je makkelijk met dit commando:
```bash
certbot --nginx -d <jouw domein>
```
Voer je domein in. Je wordt gevraagd om wat gegevens. Aan het einde vraagt het of je http automatisch naar https wilt laten doorverwijzen, wij raden aan dit aan te zetten.

## Mastodon service aanmaken
Tot slot maken we een Mastodon system service aan. Dit is vrij straightforward.  
Gebruik dit commando om de standaard serviceconfiguratie naar de service map van je distro te kopiëren:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Activeer en start je nieuwe services met deze twee commando’s:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## Conclusie

Gefeliciteerd, je hebt Mastodon succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />