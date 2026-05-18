---
id: vserver-linux-ts6
title: "Konfiguracja Serwera TeamSpeak 6 na Linuxie - Wdroż Własną Platformę Głosową"
description: "Dowiedz się, jak zainstalować i zoptymalizować serwer TeamSpeak 6 dla niezawodnego wynajmu serwerów i wydajności → Sprawdź teraz"
sidebar_label: Instalacja Serwera Teamspeak 6
services:
  - vserver
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

| Sprzęt    | Minimum     | Rekomendacja ZAP-Hosting |
| --------- | ----------- | ------------------------ |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU           |
| RAM       | 1 GB        | 4 GB                     |
| Miejsce na dysku | 1 GB  | 25 GB                    |



## Przygotowanie

Przed konfiguracją **serwera TeamSpeak 6** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. To zapewni stabilne środowisko i pomoże uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Najszybszym i polecanym sposobem jest użycie Dockera. Najpierw zainstaluj Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz system, możesz przejść do instalacji aplikacji serwera Teamspeak 6.

Następnie stwórz plik Docker Compose `docker-compose.yml` dla serwera TeamSpeak 6. Możesz wybrać dowolny katalog, ale w tym przykładzie plik zostanie utworzony w `/opt/containers/ts6/`. Użyjemy oficjalnego pliku Compose TeamSpeak:

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

Przejdź do katalogu, w którym chcesz utworzyć plik i stwórz go poleceniem `nano docker-compose.yml`, a następnie wklej powyższą zawartość.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Aby uruchomić kontener Docker i serwer TeamSpeak 6, wpisz:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Teraz kontener Dockera dla serwera TeamSpeak 6 się uruchomi. Domyślnie nie działa jeszcze w trybie ciągłym. Przy pierwszym starcie zobaczysz **ważne informacje** o **koncie administratora Server Query** oraz **kluczu uprawnień**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Zachowaj te dane w bezpiecznym miejscu, bo nie pojawią się ponownie przy kolejnych uruchomieniach. Następnie zatrzymaj kontener za pomocą `CTRL+C`.



## Konfiguracja

Dodatkowe ustawienia serwera TeamSpeak 6 możesz zmieniać przez **zmienne środowiskowe** w pliku Docker Compose. Dzięki temu dostosujesz serwer do swoich potrzeb. Pełną listę dostępnych opcji znajdziesz w oficjalnej dokumentacji [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Przykład fragmentu w `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Obsługa serwera

Aby serwer TeamSpeak 6 działał w tle, uruchom kontener poleceniem:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Aby zatrzymać serwer TeamSpeak 6, zatrzymaj kontener:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Nawiązywanie połączenia

Gdy serwer TeamSpeak 6 jest już uruchomiony, połącz się z nim przez klienta TeamSpeak 6. Wystarczy użyć adresu IP Twojego serwera oraz odpowiedniego portu. Wprowadź te dane w kliencie, aby połączyć się i zacząć testować.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Podsumowanie i dodatkowe materiały

Gratulacje! Właśnie zainstalowałeś i skonfigurowałeś serwer Teamspeak 6 na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc Ci jeszcze bardziej podczas konfiguracji serwera:

- [Oficjalna strona](https://teamspeak.com/en/) - Informacje i pobieranie TeamSpeak 6
- [Forum społeczności](https://community.teamspeak.com/) - Wsparcie użytkowników i dyskusje
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Zgłaszanie błędów i śledzenie problemów

Masz pytania, których tu nie ma? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂