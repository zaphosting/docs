---
id: vserver-linux-plex
title: "VPS: Instalacja Plex na Linuxie"
description: "Dowiedz się, jak zarządzać i streamować swoją prywatną bibliotekę multimediów bez wysiłku dzięki Plex, zapewniając płynny dostęp na różnych urządzeniach → Sprawdź teraz"
sidebar_label: Instalacja Plex
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plex to platforma do zarządzania i streamowania treści multimedialnych, takich jak filmy, seriale, muzyka i zdjęcia, z jednego centralnego miejsca. Dzięki Plex Media Server możesz organizować biblioteki, automatycznie wzbogacać je o metadane i streamować na różne urządzenia zarówno w sieci lokalnej, jak i przez internet. To elastyczne rozwiązanie, które pozwala na łatwy i wygodny dostęp do Twojej prywatnej kolekcji multimediów.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Myślisz o samodzielnym hostingu tego serwisu? Przeprowadzimy Cię krok po kroku przez proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Plex** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła bezproblemowo, a wydajność była optymalna.

| Sprzęt    | Minimum      | Rekomendacja ZAP-Hosting  |
| --------- | ------------ | ------------------------- |
| CPU       | 4 rdzenie vCPU | 8 rdzeni vCPU            |
| RAM       | 4 GB         | 8 GB                      |
| Miejsce na dysku | 25 GB   | 25 GB                     |

Oprogramowanie wymaga, aby wszystkie niezbędne zależności były zainstalowane oraz aby działało na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** brak

**System operacyjny:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Sprawdź, czy wszystkie zależności są zainstalowane, a wersja systemu operacyjnego jest odpowiednia, aby uniknąć problemów z kompatybilnością podczas instalacji Plex.

## Instalacja

Oficjalna strona Plex Media udostępnia aktualną wersję Plex Media Server dla Linuxa do pobrania. Użyj wersji 64-bitowej, aby zapewnić kompatybilność ze wszystkimi nowoczesnymi dystrybucjami Linuxa. Wykonaj poniższe polecenie, aby pobrać plik `.deb`:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Po pobraniu możesz uruchomić instalator, aby zainstalować Plex Media Server. Konfiguracja odbywa się przez interfejs webowy w przeglądarce, gdzie możesz tworzyć biblioteki i zarządzać swoją kolekcją multimediów. Uruchom poniższe polecenie, aby rozpocząć instalację:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Aby skonfigurować Plex Media Server, na tym samym VPS, na którym zainstalowałeś serwer, otwórz przeglądarkę i przejdź pod adres `http://127.0.0.1:32400/web`. Na tym etapie zostaniesz poproszony o zalogowanie się na istniejące konto Plex lub utworzenie nowego, jeśli jeszcze go nie masz.

Ten krok logowania jest niezbędny, aby powiązać serwer z Twoim kontem, co umożliwia funkcje takie jak zdalny dostęp, zarządzanie użytkownikami i synchronizację między urządzeniami. Po pomyślnym zalogowaniu znajdziesz się w swojej instancji Plex Media. Stamtąd możesz tworzyć biblioteki filmów, seriali, muzyki lub zdjęć, automatycznie pobierać metadane i udostępniać zawartość innym użytkownikom w sieci lokalnej lub przez internet.

Po konfiguracji możesz także uzyskać dostęp do Plex Media Server z zewnątrz, otwierając interfejs webowy w przeglądarce pod adresem `http://<adres-ip>:32400`. Zastąp `<adres-ip>` publicznym adresem IP Twojego serwera.

Port 32400 to domyślny port dostępu do Plex przez przeglądarkę i może wymagać odblokowania w zaporze sieciowej lub routerze, jeśli chcesz łączyć się przez internet.

Po wejściu na ten adres zostaniesz przekierowany na stronę logowania Plex, gdzie możesz zarządzać swoimi bibliotekami i ustawieniami. Dla bezpiecznego dostępu zdalnego zalecamy włączenie opcji Remote Access w ustawieniach Plex, co zapewnia szyfrowane połączenie i przekierowuje ruch przez usługę Plex.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Plex na swoim VPS. Polecamy też zapoznać się z poniższymi materiałami, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Plex.com](https://Plex.com/) - Oficjalna strona
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Centrum pomocy Plex (dokumentacja)

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />