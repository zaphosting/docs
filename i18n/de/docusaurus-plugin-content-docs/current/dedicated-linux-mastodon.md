---
id: dedicated-linux-mastodon
title: "Dedicated Server: Installation von Mastodon"
description: Informationen, wie du einen Mastodon Server auf deinem Dedicated Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Mastodon installieren
---

## Einführung

Mastodon ist ein verteilter Mikroblogging-Dienst, der seit 2016 von Eugen Rochko und der von ihm in Jena gegründeten und in Berlin ansässigen Mastodon gGmbH entwickelt wird.

![image](https://user-images.githubusercontent.com/32127408/207198152-fa6ca1e6-b845-4fd8-83d9-cc4a8fb91f9f.png)

Im Gegensatz zu großen vergleichbaren Diensten wie Twitter ist Mastodon als dezentrales Netzwerk konzipiert, das nicht auf einer Plattform basiert:
Verschiedene Server, von Privatpersonen, Vereinen oder sonstigen Stellen eigenverantwortlich betrieben, können miteinander interagieren.
:::info
Diese Anleitung basiert auf einem auf Debian basierten Betriebssystem. Diese Anleitung varriert je nach Betriebssystem.
:::

## Voraussetzungen
Für das Aufsetzen einer Mastodon Instanz, benötigst du Folgendes:
- Domain
- Linux basierten Server
- E-Mail Server

## Systemvorbereitung
Wir empfehlen, das Deaktivieren vom Passwortlogin über SSH, da dies ein Sicherheitsrisiko darstellt, vor allem auf Servern, die aus dem Internet erreichbar sind. Dies kannst du im Webinterface unter Informationen -> Zugang & Sicherheit -> Deaktiviere Passwortlogin machen. 
![image](https://user-images.githubusercontent.com/32127408/207198356-d36eeb4d-647c-4102-9d09-dcaebd8a29b5.png)
Danach verbinden wir uns mit SSH und führen folgenden Befehl aus:
```
apt update && apt upgrade -y
```

Als Nächstes installieren wir die benötigten Repositoriess:
```bash
# System Repositories
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Daraufhin installieren wir die ersten Abhängigkeiten von Mastodon:
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

Das Installieren der Pakete kann einige Zeit in Anspruch nehmen. Nachdem diese installiert sind, müssen wir yarn konfigurieren. Dies ist der Paketmanager vom vorher installiertem node.js
```bash
corepack enable
yarn set version stable
```

## Ruby installieren 
Um Ruby zu installieren, erstellen wir einen separaten Benutzer. Dies macht das Verwalten von verschiedenen Ruby Versionen einfacher. Dafür erstellen wir den Benutzer Mastodon, dessen Login deaktiviert ist und loggen uns in das Konto ein:
```bash
# You can just leave the fields empty
adduser --disabled-login mastodon
su - mastodon
```

Nun installieren wir den Ruby-Manager `rbenv`, dieser macht das Verwalten von Ruby einfacher. Diesen kannst du mit der folgenden Befehlsfolge umsetzen:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Nach der Installation können wir jetzt Ruby installieren. In diesem Schritt werden wir ebenfalls Bundler installieren.
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Dies kann einige Zeit in Anspruch nehmen. Sobald die Installation erfolgreich abgeschlossen wurde, verlassen wir das Mastodon Konto mit dem Befehl `exit`

## PostgreSQL konfigurieren
Mastodon nutzt als Datenbanksystem PostgreSQL. Die Konfiguration ist schnell durch folgende Befehle erledigt. Dazu melden wir uns zuerst in Postgres an
```bash
sudo -u postgres psql
```

Dann führen wir folgende Befehle der Reihe nach aus:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Mastodon einrichten
Nun müssen wir erneut in das Mastodon Nutzerprofil wechseln:
```bash
su - mastodon
```
Jetzt klonen wir Git mittels des folgenden Befehles:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Als nächstes müssen wir noch einige Abhängigkeiten installieren:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```

Nun erstellen wir die Mastodon Konfiguration mit dem folgenden Befehl
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Sollte die Datenbank installation Fehlschlagen, melde dich mittels `sudo -u postgres psql` in der SQL Datenbank an und folge dieser Dokumentation (Englisch) 

https://gist.github.com/amolkhanorkar/8706915
:::

Danach wechsle zurück auf den Root-Benutzer mit dem Befehl `exit`

## Konfiguration des Webservers
Als nächstes kommt der komplizierte Teil. Erstelle einen A- (IPv4) oder AAAA- (IPv6) Record in deiner DNS Konfiguration um deine (Sub-)Domain auf deiner Mastodon Instanz zu leiten. Alternativ kannst du auch den Root-Record (@) auf deinen Server zeigen lassen.

Jetzt musst du die Webserver Konfiguration anpassen, sodass dein Webserver auch die Mastodon Webseite erkennt und freigeben kann. Dies machst du wie folgt.
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Danach bearbeite die Konfiguration `/etc/nginx/sites-available/mastodon` mit einem Editor wie vim oder nano und ändere example.com zu deiner Domain.
Als Nächstes benötigst du noch ein SSL Zertifikat für deine Mastodon Instanz, um die Datenübertragung zu verschlüsseln. Dies machst du folgendermaßen:
```bash
certbot --nginx -d <your domain>
```
Gib deine Domain an. Danach wirst du nach einigen Daten zu deinem SSL Zertifikat angeben müssen. 

## Erstellen eines Mastodon-Dienstes
Zum Schluss erstellen wir einen Mastodon System Service. Dies erleichtert den Autostart sowie die Verwaltung von Mastodon. Dies machst du wie folgt: 
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Lade deine Systemdienste neu und starte anschließend den Mastodon Service. 
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Nach einem Neustart ist deine Installation fertig und ready-to-go für den Livebtrieb! 
