---
id: dedicated-ilo
title: "Serwer dedykowany: iLO"
description: "Dowiedz się, jak w pełni zarządzać swoim Enterprise Serwerem dedykowanym za pomocą iLO, aby mieć płynną kontrolę i monitoring → Sprawdź teraz"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Na naszych Enterprise Serwerach dedykowanych korzystamy z interfejsu zarządzania iLO, który pozwala na nieograniczone, pełne zarządzanie Twoim serwerem.  
Jego funkcje obejmują uruchamianie/wyłączanie/restart serwera, konsolę zarządzania przez Java lub HTML5 oraz montowanie nośników startowych (ISO).  
Ustawienia należy modyfikować ostrożnie, bo błędne zmiany mogą powodować poważne problemy.

<InlineVoucher />

## Dostęp do iLO
Otwórz panel główny swojego ZAP Serwera dedykowanego w wybranej przeglądarce. Znajdziesz tam najważniejsze informacje o swoim iLO.  
Aby aktywować iLO, po prostu kliknij „Aktywuj iLO”.  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Pamiętaj, że może to potrwać kilka sekund, zanim iLO będzie w pełni dostępne.  
Gdy system uruchomi interfejs zarządzania i będzie on dostępny, zobaczysz dane do logowania.  
Aby otworzyć iLO, kliknij wyświetlony adres IP i zaloguj się przy użyciu podanych danych.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Po chwili jesteś zalogowany do panelu administracyjnego swojego serwera dedykowanego.  
Znajdziesz tu wiele ważnych informacji:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Przegląd
* **Stan systemu**  
Zazwyczaj powinien być zielony. Przy każdym uruchomieniu serwera sprzęt wykonuje samodzielne testy, a w razie problemów system od razu je zgłasza.  
Możliwe stany to: zielony (OK), żółty (Degradacja) i czerwony (Krytyczny). Czasem serwer może pokazać SSD jako zdegradowany, zwykle nie jest to problem.  
Oczywiście możesz zgłosić to do supportu, sprawdzimy wtedy, czy wymagana jest interwencja. Jeśli status systemu jest czerwony („Krytyczny”), support powinien zostać powiadomiony natychmiast.  
Pierwszym krokiem do rozwiązania problemu powinien być zawsze pełny restart serwera.

* **Stan iLO**  
Pokazuje więcej informacji o parametrach iLO, nie powinno tu być istotnych zmian.  
Nie ma potrzeby nic tu zmieniać.

* **Zasilanie serwera**  
Pokazuje status Twojego serwera, np. „ON” oznacza, że serwer działa.

* **Zintegrowana konsola zdalna**  
Masz tu możliwość wizualnego podglądu serwera i wykonywania poleceń.  
Konsola zdalna występuje w dwóch wersjach:  
HTML5 uruchamiana jest bezpośrednio w przeglądarce, bez potrzeby instalowania dodatkowego oprogramowania.  
Java Web Start, jak sama nazwa wskazuje, korzysta z Javy do otwarcia konsoli zarządzania.  
Wszelkie ostrzeżenia bezpieczeństwa można bezpiecznie zignorować.  
Jak krok po kroku połączyć się z serwerem przez konsolę zdalną, przeczytasz w szczegółowym poradniku.

* **Aktywne sesje**  
Tutaj zobaczysz wszystkich użytkowników aktualnie połączonych z iLO.

### Dziennik zdarzeń iLO
Zapisuje wszystkie zmiany wykonane przez iLO, np. logowania, uruchomienia/wyłączenia serwera oraz zmiany ustawień.

### Zintegrowany dziennik zarządzania
Przechowuje wszystkie informacje sprzętowe, np. wyniki testu POST (Power on Self Test), który jest wykonywany przy każdym starcie serwera.  
Jeśli pojawią się problemy ze sprzętem serwera dedykowanego, zostaną tutaj pokazane.

### Wirtualne nośniki
Podłączenie własnych nośników startowych (ISO) odbywa się w podmenu „Podłącz CD/DVD-ROM”.  
Kolejność bootowania serwera jest ustawiona tak, że domyślnie najpierw bootuje z zarejestrowanego ISO.  
Kolejność można zmienić w menu „Kolejność bootowania”.

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

W polu „Scripted Media URL” wpisz pełny link do ISO, które chcesz zamontować, np.: http://mydomain.com/bootimage.iso  
Twój wpis musi wskazywać bezpośrednio na plik ISO, więc musi kończyć się na .iso.  
Następnie kliknij „Wstaw nośnik” i zrestartuj serwer w „Zarządzaniu zasilaniem”.  
Serwer załaduje teraz wybrane ISO.

### Zarządzanie zasilaniem
W tym menu możesz zarządzać uruchamianiem i wyłączaniem swojego ZAP Serwera dedykowanego.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Łagodne wyłączenie**  
Bezpiecznie wyłącza serwer, tak jakbyś nacisnął przycisk zasilania na laptopie/komputerze.  
Wszystkie aplikacje są poprawnie zamykane, a serwer wyłącza się w zaplanowany sposób.  
Oczywiście może to potrwać w zależności od uruchomionych aplikacji.

* **Wymuszone wyłączenie**  
Jeśli serwer musi zostać wyłączony natychmiast, bez czekania, to jest właściwa opcja. Odpowiada odłączeniu zasilania.  
System wyłącza się natychmiast, bez opóźnień.

* **Wymuszony reset systemu**  
Natychmiastowy restart systemu.

### Miernik zużycia energii
Pokazuje średnie zużycie energii przez system, generalnie im wyższe zużycie, tym większe obciążenie.

### Sieć
Pokazuje konfigurację sieciową Twojego iLO, pamiętaj, że te ustawienia nie dotyczą konfiguracji sieciowej samego serwera.

:::info
Jeśli konfigurujesz serwer lub dostęp przez sieć nie działa, zawsze możesz spojrzeć bezpośrednio na swój serwer.
:::

## Konsola zdalna (wyświetlacz)
iLO oferuje domyślnie dwa typy konsol zdalnych:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### Konsola HTML5
Jednym kliknięciem jesteś już na swoim serwerze, nie potrzebujesz żadnego dodatkowego oprogramowania, konsola uruchamia się bezpośrednio w przeglądarce.  
Oferuje wiele przydatnych narzędzi:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - ustawienia zarządzania zasilaniem (start, stop, restart) serwera  
* 2 - wysyłanie skrótów klawiaturowych (np. CTRL + ALT + DEL)  
* 3 - dołączanie ISO > CD/DVD > Scripted Media URL  
* 4 - stan systemu  
* 5 - status zasilania serwera (ON / OFF)  

Jeśli Twój serwer ma graficzny interfejs użytkownika (GUI), możesz korzystać z myszy jak zwykle, a także przesyłać dane z klawiatury.

### Konsola Java
Aby korzystać z konsoli Java, musisz mieć zainstalowaną Javę (do pobrania na java.com).  
:::info  
Wszelkie komunikaty o bezpieczeństwie można zignorować.  
:::

Po otwarciu pliku pojawi się komunikat, potwierdź go klikając „Kontynuuj”.  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Potwierdź ryzyko i kliknij „Uruchom”.

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Teraz otworzy się konsola Java.  
:::info  
Aplikacja często zmienia układ klawiatury na „EN”.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - ustawienia zarządzania zasilaniem (start, stop, restart) serwera  
* 2 - dołączanie ISO > URL CD/DVD-ROM  
* 3 - wysyłanie kombinacji klawiszy (np. CTRL + ALT + DEL)  
* 4 - stan systemu  
* 5 - status zasilania serwera (ON / OFF)  

Jeśli Twój serwer ma graficzny interfejs użytkownika (GUI), możesz korzystać z myszy jak zwykle, a także przesyłać dane z klawiatury.

## Typowe problemy, wskazówki i triki

* Serwer utknął w POST (Power on Self Test) i nie bootuje.  
Połącz się z konsolą zdalną i sprawdź, gdzie dokładnie serwer się zatrzymał. Czy pokazuje błędy?  
Wyłącz serwer w Zarządzaniu zasilaniem na kilka sekund (Wymuszone wyłączenie), a potem włącz ponownie (Chwilowe naciśnięcie).  
Jeśli serwer nadal nie bootuje, skontaktuj się z supportem.

* ISO się nie ładuje.  
Sprawdź, czy link do ISO jest poprawny – najprostszy test to wklejenie linku w przeglądarce, jeśli zaczyna się pobieranie, wszystko jest OK.  
Upewnij się, że link jest poprawnie wpisany w Wirtualnych nośnikach i że serwer został zrestartowany. Sprawdź też kolejność bootowania i czy napęd CD/DVD jest na pierwszym miejscu.

* Mój serwer długo się uruchamia.  
Enterprise sprzęt używany w serwerach potrzebuje więcej czasu na start, to normalne. Może to trwać nawet 10-15 minut.

* Nie mogę już otworzyć iLO.  
Upewnij się, że iLO jest włączone w panelu głównym serwera, z powodów bezpieczeństwa interfejs zarządzania wyłącza się automatycznie po pewnym czasie.  
Możesz oczywiście wyłączyć iLO i włączyć je ponownie. (Odczekaj co najmniej 5 minut po aktywacji)

## Podsumowanie

Po dokładnym przeczytaniu tego poradnika zarządzanie Twoim serwerem dedykowanym stanie się dużo prostsze.  
W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />