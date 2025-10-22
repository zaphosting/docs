---
id: dedicated-linux-ts6
title: "Serwer dedykowany: Instalacja serwera Teamspeak 6 na Twoim serwerze dedykowanym Linux"
description: "Dowiedz się, jak zainstalować i zoptymalizować serwer TeamSpeak 6 dla niezawodnego wynajmu serwerów i wydajności → Sprawdź teraz"
sidebar_label: Instalacja serwera Teamspeak 6
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Latem 2025 TeamSpeak wypuścił **wersję Beta** **serwera TeamSpeak 6**. Teraz możesz na własne oczy zobaczyć kolejną generację TeamSpeak!

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Wymagania wstępne

Przed instalacją **serwera Teamspeak 6** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła gładko, a wydajność była optymalna.

| Sprzęt    | Minimum    | Rekomendacja ZAP-Hosting |
| --------- | ---------- | ------------------------ |
| CPU       | 1 rdzeń CPU| 4 rdzenie CPU            |
| RAM       | 1 GB       | 4 GB                     |
| Miejsce na dysku | 1 GB | 25 GB                    |



## Przygotowanie

Przed konfiguracją **serwera TeamSpeak 6** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze najpierw wykonaj aktualizację systemu. W tym celu uruchom poniższe polecenie:

```
sudo apt update && sudo apt upgrade -y
```
To zapewni, że Twój system ma najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Dla szybkiej, łatwej i rekomendowanej instalacji polecamy użycie Dockera. W tym celu musisz zainstalować Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalacja
Gdy wszystkie wymagania są spełnione, a przygotowania zakończone, możesz przejść do instalacji aplikacji serwera Teamspeak 6.

Następnym krokiem jest utworzenie pliku Docker Compose `docker-compose.yml` dla serwera TeamSpeak 6. Możesz wybrać dowolny katalog, ale w tym przykładzie plik zostanie utworzony w `/opt/containers/ts6/`. Używamy oficjalnego pliku Compose TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Port głosowy
      - "30033:30033/tcp" # Transfer plików
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Przejdź do katalogu, w którym chcesz utworzyć plik i stwórz go. Użyj polecenia `nano docker-compose.yml` i wklej tam powyższą zawartość.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Aby uruchomić kontener Docker i serwer TeamSpeak 6, wpisz następujące polecenie Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Teraz kontener Docker dla serwera TeamSpeak 6 się uruchomi. Domyślnie nie działa jeszcze w trybie ciągłym. Przy pierwszym uruchomieniu zobaczysz **ważne informacje** o **koncie administratora Server Query** oraz **kluczu uprawnień**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Pamiętaj, aby bezpiecznie zapisać te dane, bo przy kolejnych uruchomieniach nie będą już wyświetlane. Następnie zatrzymaj kontener za pomocą `CTRL+C`.



## Konfiguracja

Możesz dostosować dodatkowe ustawienia serwera TeamSpeak 6 za pomocą **zmiennych środowiskowych** w pliku Docker Compose. Pozwala to skonfigurować serwer według własnych potrzeb. Pełną listę dostępnych opcji znajdziesz w oficjalnej dokumentacji [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Przykładowy fragment w `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Obsługa serwera

Aby utrzymać serwer TeamSpeak 6 działający w tle, uruchom kontener poleceniem:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Aby zatrzymać serwer TeamSpeak 6, zatrzymaj kontener poleceniem:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Nawiązywanie połączenia

Gdy serwer TeamSpeak 6 jest uruchomiony, możesz połączyć się za pomocą klienta TeamSpeak 6. Wystarczy użyć adresu IP Twojego serwera wraz z odpowiednim portem. Wprowadź te dane w kliencie, aby połączyć się z serwerem i zacząć testować.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś serwer Teamspeak 6 na swoim serwerze dedykowanym. Polecamy też rzucić okiem na poniższe zasoby, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Oficjalna strona](https://teamspeak.com/en/) - Informacje i pobieranie TeamSpeak 6
- [Forum społeczności](https://community.teamspeak.com/) - Wsparcie użytkowników i dyskusje
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Zgłaszanie błędów i śledzenie problemów

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂