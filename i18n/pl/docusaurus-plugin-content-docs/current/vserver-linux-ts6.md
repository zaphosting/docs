---
id: vserver-linux-ts6
title: "VPS: Jak zainstalować serwer Teamspeak 6 na Twoim Linux VPS"
description: "Dowiedz się, jak skonfigurować i zoptymalizować serwer TeamSpeak 6 dla niezawodnego hostingu i wydajności → Sprawdź teraz"
sidebar_label: Instalacja serwera Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Latem 2025 TeamSpeak wypuścił **wersję Beta** **serwera TeamSpeak 6**. Teraz możesz na własne oczy zobaczyć, jak wygląda kolejna generacja TeamSpeak!

Myślisz o samodzielnym hostingu tego serwera? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

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
Dzięki temu Twój system będzie miał najnowsze łatki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Najszybszym i polecanym sposobem jest użycie Dockera. Najpierw zainstaluj Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz system, możesz przejść do instalacji serwera Teamspeak 6.

Następnie stwórz plik Docker Compose `docker-compose.yml` dla serwera TeamSpeak 6. Możesz wybrać dowolny katalog, w tym przykładzie plik powstanie w `/opt/containers/ts6/`. Użyjemy oficjalnego pliku Compose TeamSpeak:

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

Teraz kontener Dockera z serwerem TeamSpeak 6 się uruchomi. Domyślnie nie działa jeszcze w trybie ciągłym. Przy pierwszym starcie zobaczysz **ważne informacje** o **koncie administratora Server Query** oraz **kluczu uprawnień**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Zachowaj te dane w bezpiecznym miejscu, bo przy kolejnych uruchomieniach nie będą już wyświetlane. Następnie zatrzymaj kontener za pomocą `CTRL+C`.



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

Gdy serwer TeamSpeak 6 jest już uruchomiony, połącz się z nim za pomocą klienta TeamSpeak 6. Wystarczy podać adres IP Twojego serwera oraz odpowiedni port. Wprowadź te dane w kliencie, aby połączyć się z serwerem i zacząć testować.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Podsumowanie i dodatkowe źródła

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś serwer Teamspeak 6 na swoim VPS. Polecamy też zajrzeć do poniższych źródeł, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Oficjalna strona](https://teamspeak.com/en/) - Informacje i pobieranie TeamSpeak 6
- [Forum społeczności](https://community.teamspeak.com/) - Wsparcie i dyskusje użytkowników
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Zgłaszanie błędów i śledzenie problemów

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂