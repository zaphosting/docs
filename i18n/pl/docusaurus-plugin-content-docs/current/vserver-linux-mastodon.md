---
id: vserver-linux-mastodon
title: "VPS: Instalacja Mastodon"
description: "Dowiedz się, jak skonfigurować bezpieczną, samodzielnie hostowaną sieć społecznościową Mastodon na serwerach opartych na Debianie, aby mieć pełną kontrolę i prywatność → Sprawdź teraz"
sidebar_label: Instalacja Mastodon
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Mastodon to darmowe i otwarte oprogramowanie do prowadzenia samodzielnie hostowanych serwisów społecznościowych.

![](https://screensaver01.zap-hosting.com/index.php/s/tprjy6DYmZNWSDH/preview)

Posiada funkcje mikroblogowania podobne do serwisu X (dawniej Twitter), oferowane przez dużą liczbę niezależnie działających węzłów, zwanych instancjami,  
z każdą z własnym regulaminem, warunkami korzystania, polityką prywatności, opcjami prywatności i zasadami moderacji.  
:::info
Ten poradnik skupia się na instalacji na dystrybucji opartej na Debianie. Przykładami są Debian i Ubuntu. Poradnik różni się w zależności od używanego systemu operacyjnego.
:::

<InlineVoucher />

## Wymagania systemowe
Jeśli chcesz uruchomić instancję Mastodon na swoim serwerze, musisz spełnić kilka wymagań:
- Domena
- Serwer oparty na Linuxie
- Serwer pocztowy

## Przygotowanie systemu
Zalecamy wyłączyć logowanie hasłem przez SSH, ponieważ jest to ryzyko bezpieczeństwa na serwerach dostępnych z internetu.  
Możesz to zrobić w panelu Twojego serwera w zakładce Informacje -> Dostęp i bezpieczeństwo -> Dezaktywuj logowanie hasłem  
![](https://screensaver01.zap-hosting.com/index.php/s/jYHPGg6t9qJn3gD/preview)  
Następnie zaktualizuj pakiety poleceniem:
```
apt update && apt upgrade -y
```

Kolejnym krokiem jest instalacja zależności Mastodona:
```bash
# Repozytoria systemowe
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Po zainstalowaniu zależności Mastodona, instalujemy niezbędne pakiety systemowe za pomocą dwóch poleceń:
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
Poczekaj na zakończenie instalacji, co może chwilę potrwać. Następnie konfigurujemy yarn, menedżera pakietów dla Node.JS:
```bash
corepack enable
yarn set version stable
```

## Instalacja Ruby
Stworzymy osobnego użytkownika, co ułatwia zarządzanie wersjami Ruby. Najpierw dodaj użytkownika o nazwie mastodon z wyłączonym logowaniem, a potem przełącz się na niego:
```bash
# Możesz zostawić pola puste
adduser --disabled-login mastodon
su - mastodon
```

Teraz instalujemy menedżera Ruby `rbenv`, który ułatwia zarządzanie wersjami Ruby:
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Po wykonaniu tych poleceń instalujemy Ruby i bundler:
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
To może chwilę potrwać, więc w międzyczasie możesz sobie zrobić herbatę lub kawę. Po zakończeniu wróć do użytkownika root poleceniem `exit`.

## Konfiguracja PostgreSQL
Mastodon korzysta z PostgreSQL jako systemu bazodanowego. Skonfiguruj go tak:
```bash
sudo -u postgres psql
```

W konsoli PostgreSQL wpisz:
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Konfiguracja Mastodon
Przełącz się ponownie na użytkownika mastodon:
```bash
su - mastodon
```
Pobierz najnowszą wersję Mastodona przez git:
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Zainstaluj pozostałe zależności Ruby i Javascript:
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Utwórz plik konfiguracyjny Mastodona:
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Jeśli konfiguracja bazy danych się nie powiedzie, zaloguj się do postgres przez `sudo -u postgres psql` i postępuj według tej dokumentacji: 

https://gist.github.com/amolkhanorkar/8706915
:::

Po wszystkim wróć do użytkownika root poleceniem `exit`.

## Konfiguracja serwera WWW
Teraz najtrudniejsza część — konfiguracja serwera WWW.  
Najpierw utwórz rekord A i/lub AAAA w DNS, który będzie wskazywał bezpośrednio na Twój serwer. Alternatywnie możesz skierować rekord root domeny na serwer.

Następnie skopiuj i aktywuj konfigurację serwera Mastodon:
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Edytuj plik `/etc/nginx/sites-available/mastodon` w edytorze tekstu (vim, nano) i zmień example.com na swoją domenę.  
Teraz zdobądź certyfikat SSL dla domeny poleceniem:
```bash
certbot --nginx -d <twoja domena>
```
Podaj swoją domenę. Zostaniesz poproszony o kilka danych. Na końcu zapyta, czy chcesz automatycznie przekierowywać ruch HTTP na HTTPS — zalecamy to włączyć.

## Tworzenie usługi Mastodon
Na koniec utworzymy usługę systemową Mastodon. To proste:  
Skopiuj domyślną konfigurację usługi do katalogu usług systemowych:
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Włącz i uruchom nowe usługi:
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Mastodon! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />