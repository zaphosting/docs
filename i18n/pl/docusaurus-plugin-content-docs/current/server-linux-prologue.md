---
id: server-linux-prologue
title: "Konfiguracja Prologue na serwerze Linux – Hostuj własną platformę do słuchania audiobooków"
description: "Dowiedz się, jak zainstalować i uruchomić serwer audiobooków kompatybilny z Prologue na swoim Linux VPS, korzystając z Dockera lub instalacji manualnej → Sprawdź teraz"
sidebar_label: Instalacja Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

[Prologue](https://prologue.audio/) to nowoczesna platforma do słuchania audiobooków, zaprojektowana do współpracy z samodzielnie hostowanymi serwerami audiobooków. Pozwala na streamowanie, organizowanie i słuchanie swojej biblioteki audiobooków na wielu urządzeniach, takich jak iPhone, iPad, Apple Watch czy CarPlay.

Zamiast polegać na chmurowych platformach audiobooków, samodzielny hosting daje Ci pełną kontrolę nad kolekcją audiobooków i infrastrukturą streamingu. Po skonfigurowaniu serwera, aplikacja mobilna Prologue łączy się z nim i synchronizuje postęp odtwarzania, zakładki oraz historię słuchania.

W tym poradniku nauczysz się, jak wdrożyć serwer audiobooków kompatybilny z Prologue na Linux VPS, korzystając z dwóch metod:

- Ręczna instalacja na serwerze WWW
- Wdrożenie oparte na Dockerze dla łatwiejszego zarządzania w kontenerze

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Zastosowania Prologue

Prologue sprawdzi się w wielu sytuacjach, gdy użytkownicy chcą mieć pełną własność i elastyczność nad swoją biblioteką audiobooków.

Typowe zastosowania to:

- Hostowanie prywatnej platformy do streamowania audiobooków
- Zarządzanie dużymi kolekcjami audiobooków w jednym, centralnym panelu
- Synchronizacja odtwarzania na wielu urządzeniach
- Zdalny dostęp do audiobooków z dowolnego miejsca
- Tworzenie samodzielnie hostowanej alternatywy dla komercyjnych platform audiobooków

Samodzielny hosting gwarantuje, że Twoje pliki multimedialne pozostają pod Twoją kontrolą, a jednocześnie pozwala na skalowalność serwera audiobooków.



## Wymagania wstępne

Przed instalacją serwera upewnij się, że Twój system spełnia poniższe wymagania.

| Sprzęt | Minimum | Zalecane |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Miejsce na dysku | 20 GB | 50 GB |

<InlineServiceLink />

Wymagane oprogramowanie zależy od wybranej metody instalacji:

Instalacja manualna:

- serwer Linux
- serwer WWW (Apache lub Nginx)
- PHP
- serwer bazy danych

Instalacja Docker:

- Docker
- Docker Compose





## Przygotowanie

Przed rozpoczęciem instalacji zaktualizuj pakiety systemowe.

```
sudo apt update
sudo apt upgrade
```


Sprawdź, czy wymagane środowisko uruchomieniowe jest zainstalowane, w zależności od wybranej metody. Dla instalacji Docker:

```
docker --version
docker compose version
```

Jeśli Docker nie jest jeszcze zainstalowany, zainstaluj go przed kontynuacją.



## Instalacja manualna

Instalacja manualna instaluje aplikację bezpośrednio na serwerze, bez kontenerów. Ta metoda jest przydatna przy wdrażaniu na tradycyjnych hostingach WWW.



### Pobierz aplikację

Najpierw utwórz katalog projektu i pobierz pliki aplikacji.

```
mkdir prologue-server
cd prologue-server
```


Następnie sklonuj repozytorium projektu:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Konfiguracja serwera WWW

Przenieś pliki aplikacji do katalogu serwera WWW. Przykład dla [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Utwórz konfigurację wirtualnego hosta wskazującą na katalog aplikacji. Przykładowa konfiguracja Apache:

```<VirtualHost *:80>
ServerName twojadomena.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Po konfiguracji zrestartuj serwer WWW.

```
sudo systemctl restart apache2
```



### Konfiguracja ustawień środowiska

Edytuj plik konfiguracyjny i zaktualizuj wymagane ustawienia, takie jak połączenie z bazą danych i URL serwera.

```
nano config.php
```


Po zakończeniu konfiguracji, interfejs webowy będzie dostępny pod Twoją skonfigurowaną domeną lub adresem IP serwera.



## Instalacja Docker

Docker oferuje prostszą metodę wdrożenia, uruchamiając aplikację w kontenerze.



### Utwórz katalog projektu

Utwórz katalog dla wdrożenia Docker.

```
mkdir prologue-docker
cd prologue-docker
```



### Utwórz konfigurację Docker Compose

Stwórz plik Docker Compose, używając `nano compose.yaml` i wklej poniższą konfigurację:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Uruchom kontener

Uruchom kontener za pomocą Docker Compose poleceniem `docker compose up -d` i sprawdź, czy kontener działa poleceniem `docker ps`. Docker automatycznie pobierze potrzebny obraz i uruchomi serwer audiobooków.



### Dostęp do serwera

Gdy serwer działa, otwórz przeglądarkę i przejdź pod adres:

```
http://TWOJE_ADRES_IP_SERWERA:13378
```

Zamień TWOJE_ADRES_IP_SERWERA na adres IP Twojego VPS. Podczas pierwszego uruchomienia zostaniesz poproszony o:

- Utworzenie konta administratora
- Skonfigurowanie katalogu biblioteki audiobooków
- Skanowanie i import plików audiobooków


Po skonfigurowaniu biblioteki możesz połączyć aplikację mobilną Prologue z serwerem i zacząć streamować swoją kolekcję audiobooków.



## Podsumowanie

Gratulacje! Pomyślnie wdrożyłeś serwer audiobooków kompatybilny z Prologue, korzystając z instalacji manualnej lub Docker.

Obie metody pozwalają hostować kolekcję audiobooków na własnej infrastrukturze i streamować ją na urządzenia przez aplikację Prologue. Instalacja Docker ułatwia utrzymanie i aktualizacje, natomiast instalacja manualna daje większą kontrolę nad środowiskiem serwera WWW.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />