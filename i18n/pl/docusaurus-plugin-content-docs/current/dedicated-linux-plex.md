---
id: dedicated-linux-plex
title: "Konfiguracja Plex na serwerze Linux - Streamuj swoją prywatną bibliotekę multimediów"
description: "Dowiedz się, jak zarządzać i streamować swoją prywatną bibliotekę multimediów bez problemów z Plex, aby mieć łatwy dostęp na różnych urządzeniach → Sprawdź teraz"
sidebar_label: Instalacja Plex
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plex to platforma do zarządzania i streamowania treści multimedialnych, takich jak filmy, seriale, muzyka i zdjęcia, z jednego centralnego miejsca. Dzięki Plex Media Server możesz organizować biblioteki, automatycznie wzbogacać je o metadane i streamować na różne urządzenia zarówno w sieci lokalnej, jak i przez internet. To sprawia, że Plex to elastyczne rozwiązanie do wygodnego dostępu do własnych kolekcji multimediów.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień oraz podpowiemy, na co zwrócić uwagę.





## Wymagania wstępne

Przed instalacją **Plex** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła gładko, a wydajność była optymalna.

| Sprzęt    | Minimum     | Rekomendacje ZAP-Hosting  |
| --------- | ----------- | ------------------------- |
| CPU       | 4 rdzenie vCPU | 8 rdzeni vCPU           |
| RAM       | 4 GB        | 8 GB                      |
| Miejsce na dysku | 25 GB  | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** Brak

**System operacyjny:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedniej wersji, aby uniknąć problemów z kompatybilnością podczas instalacji Plex.



## Instalacja

Oficjalna strona Plex Media udostępnia aktualną wersję Plex Media Server dla Linuksa do pobrania. Użyj wariantu 64-bitowego, aby zapewnić kompatybilność ze wszystkimi nowoczesnymi dystrybucjami Linuksa. Wykonaj poniższe polecenie, aby pobrać plik `.deb`:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Po pobraniu możesz uruchomić instalator, aby zainstalować Plex Media Server. Konfiguracja odbywa się przez interfejs webowy w przeglądarce, gdzie stworzysz biblioteki i zarządzisz swoją kolekcją multimediów. Uruchom poniższe polecenie, aby rozpocząć instalację:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Aby skonfigurować Plex Media Server, na tym samym serwerze, na którym zainstalowałeś serwer, otwórz przeglądarkę i przejdź pod adres `http://127.0.0.1:32400/web`. Na tym etapie zostaniesz poproszony o zalogowanie się na istniejące konto Plex lub utworzenie nowego, jeśli jeszcze go nie masz.

Ten krok logowania jest konieczny, aby powiązać serwer z Twoim kontem, co umożliwia funkcje takie jak zdalny dostęp, zarządzanie użytkownikami i synchronizację między urządzeniami. Po pomyślnym zalogowaniu znajdziesz się w swojej instancji Plex Media. Stamtąd możesz tworzyć biblioteki filmów, seriali, muzyki lub zdjęć, automatycznie pobierać metadane i udostępniać zawartość innym użytkownikom w sieci lokalnej lub przez internet.

Po konfiguracji możesz także uzyskać dostęp do Plex Media Server z zewnątrz, otwierając interfejs webowy w przeglądarce pod adresem `http://<adres-ip>:32400`. Zastąp `<adres-ip>` publicznym adresem IP Twojego serwera.

Port 32400 to domyślny port dla dostępu webowego do Plex i może wymagać odblokowania w zaporze sieciowej lub routerze, jeśli chcesz łączyć się przez internet.

Po wejściu na ten adres zostaniesz przekierowany na stronę logowania Plex, gdzie możesz zarządzać swoimi bibliotekami i ustawieniami. Dla bezpiecznego dostępu zdalnego zalecamy włączenie opcji Remote Access w ustawieniach Plex, co zapewnia szyfrowane połączenie i przekierowuje ruch przez usługę Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Plex na swoim VPS/serwerze dedykowanym. Polecamy też rzucić okiem na poniższe materiały, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [Plex.com](https://Plex.com/) - Oficjalna strona
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centrum pomocy Plex (dokumentacja)

Masz pytania, których tu nie ma? Jeśli potrzebujesz dalszej pomocy lub wsparcia, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂