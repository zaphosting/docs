---
id: vserver-linux-mastodon
title: "VPS: Installazione di Mastodon"
description: "Scopri come configurare una rete sociale Mastodon sicura e self-hosted su server basati su Debian per avere pieno controllo e privacy → Scopri di più ora"
sidebar_label: Installa Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Mastodon è un software open-source e gratuito per gestire servizi di social networking self-hosted.

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

Ha funzionalità di microblogging simili a X (ex Twitter), offerte da tantissimi nodi indipendenti, chiamati istanze,  
ognuna con il proprio codice di condotta, termini di servizio, policy sulla privacy, opzioni di privacy e regole di moderazione.  
:::info
Questa guida si concentra sull’installazione su una distro basata su Debian. Esempi sono Debian e Ubuntu. La guida varia a seconda del sistema operativo che usi.
:::

<InlineVoucher />

## Prerequisiti di sistema
Se vuoi configurare un’istanza Mastodon sul tuo server, devi avere:
- Un dominio
- Un server Linux
- Un server email

## Preparazione del sistema
Ti consigliamo di disabilitare il login via password su SSH prima di tutto, perché usare il login con password su server accessibili da internet è un rischio per la sicurezza.  
Puoi farlo dal pannello web del tuo server sotto Informazioni -> Accesso & Sicurezza -> Disattiva login con password  
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)  
Dopodiché aggiorna i pacchetti con questo comando:
```
apt update && apt upgrade -y
```

Ora installa le dipendenze di Mastodon:
```bash
# Repository di sistema
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Dopo aver installato le dipendenze, installa i pacchetti di sistema necessari con questi due comandi:
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
Lascia che i pacchetti si installino, potrebbe volerci un po’. Poi configura yarn, il package manager per Node.JS:
```bash
corepack enable
yarn set version stable
```

## Installazione di Ruby
Creeremo un utente dedicato per gestire più facilmente le versioni di Ruby. Prima crea un utente chiamato mastodon con login disabilitato, poi passa a quell’utente:
```bash
# Puoi lasciare i campi vuoti
adduser --disabled-login mastodon
su - mastodon
```

Ora installa il Ruby Manager `rbenv`, che rende la gestione delle versioni Ruby molto più semplice:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Terminato, installa Ruby e bundler con:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Potrebbe volerci un po’, quindi prenditi un tè o un caffè mentre aspetti. Quando hai finito, torna all’utente root con `exit`.

## Configurazione di PostgreSQL
Mastodon usa PostgreSQL come database. Configuralo così:
```bash
sudo -u postgres psql
```

Nel prompt di PostgreSQL, inserisci:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Configurazione di Mastodon
Torna all’utente mastodon:
```bash
su - mastodon
```
Scarica l’ultima versione di Mastodon con git:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Installa le ultime dipendenze Ruby e Javascript:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Crea il file di configurazione di Mastodon:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Se la configurazione del database fallisce, accedi a postgres con `sudo -u postgres psql` e segui questa guida: 

https://gist.github.com/amolkhanorkar/8706915
:::

Torna all’utente root con `exit`.

## Configurazione del webserver
Ora la parte più delicata: configura il webserver. Prima crea un record A e/o AAAA nel DNS che punti al tuo server. In alternativa puoi puntare il record root al server.

Poi copia e abilita la configurazione di Mastodon per nginx:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Modifica il file `/etc/nginx/sites-available/mastodon` con un editor come vim o nano e sostituisci example.com con il tuo dominio.  
Ora procurati un certificato SSL con questo comando:
```bash
certbot --nginx -d <tuo dominio>
```
Inserisci il tuo dominio. Ti verranno chieste alcune informazioni. Alla fine ti chiederà se vuoi reindirizzare automaticamente le richieste http su https, ti consigliamo di attivare questa opzione.

## Creazione del servizio Mastodon
Infine, creiamo un servizio di sistema per Mastodon. È semplice:  
Copia la configurazione di default nella cartella dei servizi della tua distribuzione:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Abilita e avvia i servizi con:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## Conclusione

Congratulazioni, hai installato e configurato Mastodon con successo! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni!

<InlineVoucher />