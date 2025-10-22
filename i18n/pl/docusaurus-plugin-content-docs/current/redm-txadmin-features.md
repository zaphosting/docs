---
id: redm-txadmin-features
title: "RedM: Interfejs txAdmin"
description: "Odkryj, jak efektywnie zarządzać i monitorować swój serwer RedM dzięki pełnoprawnemu panelowi webowemu txAdmin → Dowiedz się więcej już teraz"
sidebar_label: Interfejs txAdmin
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

txAdmin to całkowicie darmowy, pełnoprawny panel webowy do zarządzania i monitorowania Twojego serwera RedM. Oferuje szeroki wachlarz funkcji, które sprawiają, że zarządzanie serwerem RedM jest dziecinnie proste. W tym poradniku przedstawimy Ci interfejs txAdmin, podkreślając jego funkcje i dokładnie wyjaśniając, co możesz z nim zrobić.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## Nawigacja

Menu nawigacyjne zawiera następujące pozycje: **Gracze**, **Historia**, **Whitelist**, **Administratorzy**, **Ustawienia** oraz **System**. Każda z nich zostanie szczegółowo omówiona poniżej.

### Gracze

Sekcja Gracze daje ogólny przegląd statystyk graczy, w tym całkowitą liczbę połączonych graczy, liczbę graczy połączonych w ciągu ostatnich 24 godzin oraz liczbę nowych graczy połączonych w ciągu ostatnich 24 godzin i 7 dni. Poniżej znajdziesz listę aktualnie połączonych graczy wraz z ich całkowitym czasem gry, czasem pierwszego połączenia oraz ostatniego połączenia.

Kliknij na gracza, aby uzyskać dodatkowe opcje zarządzania. Tutaj możesz zobaczyć więcej informacji, notatki, historię (bany/ostrzeżenia), ID (identyfikatory gracza, ID sprzętu gracza) oraz opcje banowania.

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### Historia

Sekcja Historia wyświetla wszystkie ostrzeżenia i bany nałożone na graczy, wraz ze szczegółowymi informacjami o graczu, powodzie oraz osobie, która nałożyła lub wykonała ostrzeżenie/ban, wraz z datą i godziną. Możesz także cofnąć ostrzeżenia i bany z tego miejsca.

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### Whitelist

W sekcji Whitelist możesz zarządzać funkcją whitelisty. Whitelist pozwala ograniczyć dostęp do serwera tylko dla wybranych osób. Jeśli ta opcja jest włączona w ustawieniach txAdmin, przy pierwszym połączeniu nowego gracza automatycznie tworzone jest zgłoszenie do whitelisty. Możesz wtedy zarządzać tymi zgłoszeniami w tej sekcji.

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### Administratorzy

W sekcji Administratorzy możesz określić i zarządzać administratorami. Nowych adminów dodasz klikając przycisk **Dodaj**. Otworzy się wtedy okno popup, w którym stworzysz konto i ustawisz odpowiednie uprawnienia.

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### Ustawienia

W sekcji Ustawienia możesz skonfigurować szeroki zakres opcji zarówno dla txAdmin, jak i samego serwera. Ze względu na dużą liczbę dostępnych ustawień, zostały one podzielone na następujące kategorie: **Ogólne**, **FXServer**, **Restarter**, **Player Manager**, **Discord** oraz **Gra**. Każda z nich zostanie szczegółowo omówiona poniżej.

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### Ogólne

W sekcji Ogólne skonfigurujesz nazwę serwera, język wiadomości na czacie/Discordzie oraz szablony banów.

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

W sekcji FXServer ustawisz folder danych serwera oraz ścieżkę pliku CFG, a także dodatkowe argumenty, takie jak aktywacja trybów gry/DLC, włączanie/wyłączanie OneSync, Autostart oraz Quietmode.

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### Bany

W sekcji Bany zarządzasz funkcją banów. Określasz, czy konta mają być aktywnie sprawdzane pod kątem statusu bana oraz jaka wiadomość ma się wyświetlać, gdy połączenie zostanie odrzucone z powodu bana.

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### Whitelist

W sekcji Whitelist zarządzasz funkcją whitelisty. Określasz, czy chcesz ją aktywować lub dezaktywować oraz jaka wiadomość ma się wyświetlać, gdy połączenie zostanie odrzucone z powodu braku wpisu na whitelistę.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

Integrację z Discordem możesz aktywować w sekcji Discord, co pozwoli na automatyczne przesyłanie informacji na powiązany serwer Discord. Aby to włączyć, musisz skonfigurować niezbędne dane bota Discorda.

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### Gra

W sekcji Gra możesz włączyć menu txAdmin do użytku w grze, co pozwala adminom na dostęp i zarządzanie menu za pomocą komendy /tx. Możesz też dodatkowo dostosować układ, konfigurację przycisków do przełączania opcji oraz powiadomienia/ostrzeżenia.

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### System

W sekcji Ustawienia znajdziesz kilka ważnych ogólnych opcji i informacji. Są one podzielone na następujące kategorie: **Master Actions**, **Diagnostyka**, **Konsola Logów** oraz **Log Akcji**. Każda z nich zostanie szczegółowo omówiona poniżej.



#### Master Actions

W Master Actions znajdziesz opcję resetowania FXServera, tworzenia kopii zapasowej bazy danych, czyszczenia bazy danych oraz określenia, kiedy gracze mają być usuwani z whitelisty, jeśli są zbyt długo nieaktywni.

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### Diagnostyka

Sekcja Diagnostyka wyświetla wszystkie istotne informacje o środowisku, czasie działania txAdmin, raporcie diagnostycznym, FXServer /info.json oraz procesach.

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### Konsola Logów

Konsola Logów pokazuje wyjście txAdmin na nadrzędnym terminalu, w tym zwykle ukryte komunikaty debugowania.

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### Log Akcji

Log Akcji rejestruje wszystkie działania wykonane przez txAdmin lub dowolnego Administratora.

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## Pasek boczny

Menu paska bocznego zawiera następujące pozycje: **Panel główny**, **Live Console**, **Zasoby**, **Log serwera** oraz **Edytor CFG**. Każda z nich zostanie szczegółowo omówiona poniżej.



### Panel główny

Panel główny wyświetla wszystkie kluczowe ogólne informacje o serwerze. Możesz monitorować na żywo dane dotyczące wykorzystania i wydajności przez statystyki. Status serwera, czy jest uruchomiony, online czy zatrzymany, jest widoczny w pasku bocznym. Stamtąd możesz też uruchomić, zatrzymać lub zrestartować serwer, wyrzucić wszystkich graczy jednym kliknięciem oraz wysłać ogłoszenia. Dodatkowo możesz ustawić zaplanowane restarty. Po prawej stronie paska bocznego zobaczysz informacje o aktualnie połączonych graczach.

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### Live Console

Live Console dostarcza Ci informacji w czasie rzeczywistym o aktywnościach na serwerze. Możesz tu zobaczyć szczegóły dotyczące aktywności, ostrzeżeń i komunikatów o błędach. To świetne narzędzie do debugowania problemów przez analizę potencjalnych błędów.

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### Zasoby
W sekcji Zasoby znajdziesz przegląd wszystkich zasobów, czy to preinstalowanych przez szablon (recepturę), czy dodanych przez Ciebie później. Możesz je też w razie potrzeby restartować lub zatrzymywać.

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### Log serwera

Log serwera pozwala monitorować wszystkie aktywności na serwerze. Na przykład możesz zobaczyć, kiedy gracze się łączą lub rozłączają, wiadomości na czacie, zgony w grze, akcje w menu, wykonane komendy oraz zdarzenia systemowe.

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### Edytor CFG

Edytor CFG pozwala zarządzać i aktualizować plik konfiguracyjny `server.cfg` Twojego serwera. Znajdziesz tam wszystkie kluczowe komendy konfiguracyjne, które kontrolują ustawienia Twojego serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />
