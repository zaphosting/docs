---
id: vserver-linux-mastodon
title: "VPS: Installation av Mastodon"
description: "Upptäck hur du sätter upp ett säkert, självhostat Mastodon-socialt nätverk på Debian-baserade servrar för full kontroll och integritet → Lär dig mer nu"
sidebar_label: Installera Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Mastodon är fri och öppen källkod för att driva självhostade sociala nätverkstjänster.

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

Det har mikrobloggningsfunktioner liknande X (tidigare Twitter), som erbjuds av ett stort antal självständigt drivna noder, kallade instanser,  
var och en med sin egen uppförandekod, användarvillkor, sekretesspolicy, integritetsinställningar och modereringsregler.  
:::info  
Denna guide fokuserar på installation på en Debian-baserad distro. Exempel är Debian och Ubuntu. Guiden skiljer sig beroende på vilket OS du använder.  
:::

<InlineVoucher />

## Systemkrav  
Om du vill sätta upp en Mastodon-instans på din server måste du uppfylla några krav:  
- Domän  
- Linux-baserad server  
- E-postserver  

## Förbered din server  
Det rekommenderas att du innan dess inaktiverar lösenordsinloggning på SSH, eftersom det är en säkerhetsrisk att använda lösenordsinloggning på servrar som är åtkomliga från internet.  
Det kan du göra i din servers webbgränssnitt under Information -> Åtkomst & Säkerhet -> Avaktivera lösenordsinloggning  
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)  
Efter det, uppdatera dina paket med följande kommando:  
```
apt update && apt upgrade -y
```

Nästa steg är att installera Mastodons beroenden:  
```bash
# Systemrepositories  
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates  
# Node.JS  
curl -sL https://deb.nodesource.com/setup_16.x | bash -  
# PostgreSQL  
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc  
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list  
```

När vi installerat beroenden för Mastodon kan vi installera nödvändiga systempaket. Det gör vi enkelt med dessa två kommandon:  
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
Låt paketen installeras, det kan ta en stund. Efter det måste vi konfigurera yarn, som är en paketmanager för den tidigare installerade Node.JS:  
```bash
corepack enable
yarn set version stable
```

## Installera Ruby  
Vi skapar en separat användare, eftersom det gör hanteringen av Ruby-versioner mycket smidigare. Först skapar du en användare som heter mastodon, vars inloggning är avstängd. Sedan byter du till mastodon-användaren. Det gör du med följande kommandon:  
```bash
# Du kan lämna fälten tomma  
adduser --disabled-login mastodon
su - mastodon
```

Nu installerar vi Ruby Manager `rbenv`, som gör hanteringen av Ruby-versioner mycket enklare. Installera den med dessa kommandon:  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
När du kört igenom dessa kommandon kan du installera Ruby med följande kommando. Vi installerar även bundler i detta steg.  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Det kan ta lite tid, så ha tålamod och fixa en kopp te eller kaffe under tiden. När det är klart kan du byta tillbaka till root-användaren med kommandot `exit`.

## Konfigurera PostgreSQL  
Mastodon använder PostgreSQL som databassystem. Konfigurationen görs enkelt med:  
```bash
sudo -u postgres psql
```

I PostgreSQL-prompten skriver du:  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Sätta upp Mastodon  
Byt tillbaka till mastodon-användaren igen:  
```bash
su - mastodon
```
Använd git för att ladda ner den senaste versionen av Mastodon med dessa två kommandon:  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Nästa steg är att installera några fler och sista beroenden för Ruby och Javascript. Kör dessa kommandon:  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Skapa sedan din Mastodon-konfigurationsfil med följande kommando:  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info  
Om din databasinstallation misslyckas, logga in på postgres med `sudo -u postgres psql` och följ denna dokumentation:  

https://gist.github.com/amolkhanorkar/8706915  
:::

Byt sedan tillbaka till root-användaren med kommandot `exit`.

## Konfigurera webbservern  
Nu kommer den kluriga delen. Du måste konfigurera din webbserver. Först skapar du en A-post och/eller AAAA-post i din DNS som pekar direkt till din server. Alternativt kan du peka root-posten till din server.

Använd sedan dessa två kommandon för att kopiera och aktivera Mastodons webbserverkonfiguration:  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Redigera sedan filen `/etc/nginx/sites-available/mastodon` med en texteditor som vim eller nano och byt ut example.com mot din domän.  
Nästa steg är att skaffa ett SSL-certifikat för din domän. Det gör du enkelt med detta kommando:  
```bash
certbot --nginx -d <din domän>
```
Skriv in din domän. Du kommer bli tillfrågad om några uppgifter. I slutet frågar den om du vill omdirigera http-trafik automatiskt till https – vi rekommenderar att du aktiverar det.

## Skapa en Mastodon-tjänst  
Till sist skapar vi en Mastodon systemtjänst. Det är ganska enkelt.  
Kopiera standardkonfigurationen för tjänsten till din distributions tjänstemapp med detta kommando:  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Aktivera och starta sedan dina nya tjänster med dessa två kommandon:  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## Avslutning

Grattis, du har nu installerat och konfigurerat Mastodon! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />