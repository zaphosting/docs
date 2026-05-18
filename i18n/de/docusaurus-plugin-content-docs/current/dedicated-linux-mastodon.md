---
id: dedicated-linux-mastodon
title: "Mastodon auf einem Linux Server einrichten – Starte deine eigene Social-Networking-Plattform"
description: "Entdecke, wie du ein sicheres, selbstgehostetes Mastodon Social Network auf Debian-basierten Servern für unabhängiges Microblogging einrichtest → Jetzt mehr erfahren"
sidebar_label: Mastodon installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mastodon ist eine kostenlose und Open-Source-Software zum Betreiben selbstgehosteter Social-Networking-Dienste.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Es bietet Microblogging-Funktionen ähnlich dem Dienst X (ehemals Twitter), die von einer Vielzahl unabhängig betriebener Knoten, sogenannten Instanzen, bereitgestellt werden – jede mit eigenem Verhaltenskodex, Nutzungsbedingungen, Datenschutzrichtlinien, Privatsphäre-Einstellungen und Moderationsrichtlinien.
:::info
Diese Anleitung konzentriert sich auf die Installation auf einer Debian-basierten Distro. Beispiele sind Debian und Ubuntu. Die Anleitung variiert je nach verwendetem Betriebssystem.
:::

## Systemvoraussetzungen
Wenn du eine Mastodon-Instanz auf deinem Server einrichten möchtest, musst du folgende Voraussetzungen erfüllen:
- Domain
- Linux-basierter Server
- Mailserver

## Vorbereitung deines Systems
Es wird empfohlen, vorab den Passwort-Login über SSH zu deaktivieren, da die Nutzung von Passwort-Login auf Servern, die aus dem Internet erreichbar sind, ein Sicherheitsrisiko darstellt.
Das kannst du im Webinterface deines Servers unter Information -> Zugang & Sicherheit -> Passwort-Login deaktivieren einstellen.
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)
Danach aktualisierst du deine Pakete mit folgendem Befehl:
```
apt update && apt upgrade -y
```

Als Nächstes installierst du die Abhängigkeiten von Mastodon:
```bash
# System-Repositories
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Nachdem wir die Abhängigkeiten für Mastodon installiert haben, installieren wir die notwendigen Systempakete mit diesen zwei Befehlen:
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
Lass die Pakete installieren, das kann eine Weile dauern. Danach konfigurieren wir yarn, den Paketmanager für das zuvor installierte Node.JS:
```bash
corepack enable
yarn set version stable
```

## Ruby installieren
Wir erstellen einen separaten Benutzer, da das Verwalten der Ruby-Versionen so viel einfacher ist. Zuerst legst du einen User namens mastodon an, dessen Login deaktiviert ist. Dann wechselst du in den mastodon-User. Das machst du mit diesen Befehlen:
```bash
# Du kannst die Felder einfach leer lassen
adduser --disabled-login mastodon
su - mastodon
```

Jetzt installieren wir den Ruby-Manager `rbenv`, der das Verwalten von Ruby-Versionen deutlich erleichtert. Installiere ihn mit diesen Befehlen:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Nachdem du diese Befehle durchlaufen hast, kannst du Ruby installieren und gleichzeitig bundler mitinstallieren:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Das kann etwas dauern, also gönn dir in der Zwischenzeit einen Tee oder Kaffee. Danach bist du fertig mit der Einrichtung und kannst mit `exit` wieder zum root-User zurückwechseln.

## PostgreSQL konfigurieren
Mastodon nutzt PostgreSQL als Datenbanksystem. Die Konfiguration erfolgt einfach so:
```bash
sudo -u postgres psql
```

Im PostgreSQL-Prompt gibst du Folgendes ein:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodon einrichten
Jetzt wechselst du nochmal in den mastodon-User:
```bash
su - mastodon
```
Dann lädst du mit git die aktuellste Mastodon-Version herunter, mit diesen zwei Befehlen:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Als Nächstes installierst du die letzten Abhängigkeiten für Ruby und Javascript:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Erstelle nun deine Mastodon-Konfigurationsdatei mit:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Falls die Datenbankeinrichtung fehlschlägt, logge dich bitte mit `sudo -u postgres psql` in deine Postgres-Datenbank ein und folge dieser Anleitung:

https://gist.github.com/amolkhanorkar/8706915
:::

Danach wechselst du wieder zurück zum root-User mit `exit`.

## Webserver konfigurieren
Jetzt kommt der knifflige Teil: die Webserver-Konfiguration. Erstelle zuerst einen A-Record und/oder AAAA-Record in deiner DNS, der direkt auf deinen Server zeigt. Alternativ kannst du den Root-Record auf deinen Server zeigen lassen.

Dann kopierst und aktivierst du die Mastodon-Webserver-Konfiguration mit diesen zwei Befehlen:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Bearbeite danach die Datei `/etc/nginx/sites-available/mastodon` mit einem Texteditor wie vim oder nano und ersetze example.com durch deine gewünschte Domain.
Als Nächstes musst du ein SSL-Zertifikat für deine Domain besorgen. Das geht ganz easy mit:
```bash
certbot --nginx -d <deine domain>
```
Gib deine Domain ein. Du wirst nach einigen Angaben gefragt. Am Ende wirst du gefragt, ob HTTP-Anfragen automatisch auf HTTPS umgeleitet werden sollen – wir empfehlen, das zu aktivieren.

## Mastodon-Service erstellen
Zum Schluss erstellen wir einen Mastodon-Systemdienst. Das ist ziemlich straightforward.
Kopiere die Standard-Service-Konfiguration in das Service-Verzeichnis deiner Distribution:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Aktiviere und starte deine neuen Services mit diesen zwei Befehlen:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Nach einem Neustart solltest du mit deinem Setup fertig sein. Viel Spaß mit deiner Instanz!