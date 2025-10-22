---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Import bazy serwera"
description: "Dowiedz się, jak zaimportować gotową bazę serwera na swój serwer za pomocą txAdmin, aby szybko skonfigurować i bezproblemowo zintegrować → Sprawdź teraz"
sidebar_label: Import bazy serwera
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

Znalazłeś gotowy serwer w sieci i chcesz go wgrać na swój własny serwer? Żaden problem! Dzięki txAdmin możesz szybko i łatwo zaimportować gotową bazę serwera – pod warunkiem, że zadbasz o kilka ważnych wymagań i szczegółów. W tym poradniku pokażemy, jak zaimportować bazę serwera.



<InlineVoucher />

## Przygotowanie

Aby rozpocząć proces konfiguracji, musisz mieć już pobraną gotową bazę serwera na swój komputer i rozpakowany plik.

Zawartość bazy serwera może się różnić w zależności od typu i zawartości serwera, a pliki mogą wyglądać różnie. Jednak Twoja baza serwera powinna generalnie zawierać następujące dane:

- **Konfiguracja serwera - `server.cfg` (wymagane):** Plik konfiguracyjny serwera zawiera wszystkie istotne komendy/ustawienia dla Twojego serwera.
- **Folder zasobów - `resource` (wymagane):** Folder zasobów zawiera wszystkie gotowe zasoby użyte w dostarczonej bazie serwera.
- **Plik SQL - `filenameXY.sql` (opcjonalny):** Ten plik zawiera gotową strukturę bazy danych, niezbędną do działania i komunikacji między zasobami a bazą danych (jeśli jest używana).

**Dane (`server.cfg`, `resources`)** z pobranej bazy serwera muszą zostać wgrane na Twój serwer gier. **Plik SQL** musi zostać zaimportowany do bazy danych ZAP, którą Ci udostępniamy.

### Pliki serwera
Wgrywanie danych bazy serwera odbywa się przez FTP. Jeśli jeszcze nie wiesz, jak to działa, zerknij na ten poradnik: [Dostęp FTP](gameserver-ftpaccess.md)

Połącz się ze swoim serwerem gier przez FTP i przejdź do folderu `fivem`. Stwórz tam folder dla swojej bazy serwera, jeśli jeszcze go nie ma. W tym przykładzie nazwa **ExampleServer** jest używana dla gotowej bazy serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Po utworzeniu folderu, teraz musisz wgrać dane bazy serwera. Przejdź do nowo utworzonego folderu i wgraj folder zasobów oraz plik konfiguracyjny serwera. Efekt powinien wyglądać tak:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Baza danych

Jeśli Twoja baza serwera wymaga również użycia bazy danych, to dostarczony plik SQL musi zostać zaimportowany do Twojej bazy ZAP. Jeśli jeszcze nie wiesz, jak to zrobić, zerknij na ten poradnik: [Import pliku SQL](fivem-sql-file-import.md)

Zaimportuj swój plik SQL do bazy danych zgodnie z instrukcjami w poradniku. Najpierw jednak upewnij się, że dostosowałeś zawartość pliku SQL i podałeś poprawną nazwę swojej bazy ZAP. W tym celu zamień oryginalną wartość w poleceniu Use '...' na nazwę swojej bazy ZAP.

:::warning Sprawdź dokładnie zawartość pliku SQL przed importem
Upewnij się, że zawartość pliku SQL została poprawnie dostosowana i jest w pełni poprawna przed importem. W przeciwnym razie pojawi się następujący błąd:

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’`
:::



## Konfiguracja txAdmin

Przygotowanie do konfiguracji serwera zostało zakończone. Dalsza konfiguracja, instalacja i ustawienia serwera odbywają się teraz przez proces konfiguracji w panelu txAdmin. Szczegółowy poradnik, jak wejść do txAdmin i jak dokładnie przebiega konfiguracja, znajdziesz tutaj: [Konfiguracja txAdmin](fivem-txadmin-setup.md)



### Powitanie

Nadaj nazwę swojemu projektowi. Ta nazwa nie jest przeznaczona do listy serwerów, a służy wyłącznie do użytku w panelu txAdmin oraz w wiadomościach na czacie/Discordzie. Kontynuuj do kroku Deployment Type.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Typ wdrożenia

W sekcji Deployment Type musisz teraz wybrać, jak chcesz skonfigurować swój serwer. Masz do wyboru: **Popular Recipes**, **Existing Server Data**, **Remote URL Template** oraz **Custom Template**. W Twoim przypadku wybierz **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Wybór ścieżek

Następnie musisz podać ścieżkę, gdzie znajduje się Twoja baza serwera. Struktura folderów zaczyna się tak i musi być rozszerzona o nazwę Twojej bazy serwera: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Możesz po prostu skopiować i wkleić podaną strukturę folderów jak na zrzucie ekranu, a następnie dodać nazwę wcześniej utworzonego folderu bazy serwera. Efekt powinien wyglądać tak:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Kliknij **Next**. Plik konfiguracyjny serwera `server.cfg` powinien zostać teraz rozpoznany. Potwierdź to i dokończ standardową konfigurację przez przycisk **Save & Start**.



## Konfiguracja

Jest bardzo prawdopodobne, że serwer nie uruchomi się od razu, ponieważ nie wszystkie niezbędne informacje będą poprawne. Dzieje się tak m.in. z powodu błędnych danych dotyczących adresu IP i portu serwera, brakujących danych bazy do poprawnego połączenia z bazą danych oraz braku klucza licencyjnego. Dlatego konieczne są jeszcze końcowe poprawki w konfiguracji serwera.

### Szczegóły serwera

Domyślnie podane dane adresu IP i portu są albo niedostępne, albo niepoprawne. Upewnij się, że wpisy dotyczące endpointów są obecne i poprawne w pliku konfiguracyjnym serwera. Składnia wygląda tak:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Zamień adres IP (0.0.0.0) i port (30120) na dane swojego serwera. Znajdziesz je w panelu administracyjnym serwera gier.

:::warning Niepoprawny adres IP/port
Jeśli skonfigurowane dane są niepoprawne, rozpoznasz to po następującym komunikacie błędu:

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Baza danych

Aby Twój serwer mógł nawiązać połączenie z bazą danych, w pliku konfiguracyjnym `server.cfg` musi być podany łańcuch połączenia MySQL z danymi bazy. Domyślnie może wyglądać tak:

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Czy taki łańcuch połączenia MySQL jest już w Twojej konfiguracji, zależy od używanej bazy serwera. Jeśli go nie ma lub nie zawiera potrzebnych danych bazy, musisz go dodać i dostosować. Dane bazy znajdziesz w panelu administracyjnym serwera gier w sekcji Bazy danych. Przykład może wyglądać tak:

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Prosto i wygodnie
Jeśli chcesz sobie ułatwić ten krok, możesz kliknąć przycisk **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** w panelu administracyjnym serwera gier, w ustawieniach na dole strony.
:::


### Onesync

Jeśli w pliku `server.cfg` Twojej bazy serwera znajdują się informacje dotyczące **Onesync**, musisz je usunąć. Onesync jest teraz zarządzany przez ustawienia w panelu txAdmin. Jeśli chcesz go aktywować, znajdziesz tę opcję pod **Settings ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Klucz licencyjny

Do działania serwera potrzebujesz własnego klucza licencyjnego od CFX. Jak stworzyć swój klucz, dowiesz się z tego poradnika: [Własny klucz licencyjny](fivem-licensekey.md)

Dodaj klucz licencyjny do pliku konfiguracyjnego serwera:

```
sv_licenseKey "twójKluczLicencyjnyTutaj"
```



## Podsumowanie

Gratulacje! Po pomyślnym wgraniu plików, ukończeniu konfiguracji txAdmin i wprowadzeniu niezbędnych zmian w konfiguracji serwera, możesz teraz uruchomić i grać na swoim serwerze z własną bazą serwera.

<InlineVoucher />