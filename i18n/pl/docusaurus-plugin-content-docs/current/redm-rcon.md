---
id: redm-rcon
title: "RedM: RCON"
description: "Dowiedz się, jak bezpiecznie i efektywnie zarządzać serwerami gier RedM zdalnie, bez konieczności bycia w grze → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji z jego środowiskiem. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W RedM RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do diagnostyki. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest możliwość zarządzania serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować RedM z poziomu zewnętrznych narzędzi, konsoli czy paneli webowych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Konfiguracja

Zanim zaczniesz korzystać z RCON, musisz go włączyć i skonfigurować. Zrobisz to w sekcji **CFG Editor** panelu administracyjnego serwera gier w **txAdmin**. Upewnij się, że w konfiguracji znajdują się lub zostały zmodyfikowane następujące linie:

```cfg
ensure rconlog
set rcon_password "twoje-bezpieczne-hasło"
```



## Łączenie się przez RCON

Do połączenia z serwerem GameXY przez RCON używamy narzędzia Windows **IceCon**. Możesz je pobrać z [repozytorium GitHub](https://github.com/icedream/icecon). Po zainstalowaniu programu na komputerze, utwórz nowe połączenie, podając:

- **Adres IP serwera**  
- **Port gry**
- **Hasło RCON**

Po pomyślnym połączeniu IceCon udostępnia graficzny interfejs do wysyłania poleceń RCON na serwer RedM. Możesz wykonywać standardowe komendy RCON i na bieżąco oglądać odpowiedzi serwera bezpośrednio w narzędziu.

IceCon oferuje też dodatkowe funkcje, takie jak:

- Historia poleceń i autouzupełnianie  
- Podgląd logów serwera  
- Własne przyciski do komend  
- Profile połączeń do zarządzania wieloma serwerami



## Komendy RCON

Po połączeniu przez RCON możesz wykonywać różne polecenia administracyjne i diagnostyczne na serwerze RedM. Dostępne komendy zależą od silnika gry, ale zwykle obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Komenda                   | Opis                                               |
| ------------------------- | ------------------------------------------------- |
| `say <wiadomość>`         | Wysyła wiadomość do wszystkich graczy na czacie   |
| `start <nazwa-zasobu>`    | Uruchamia konkretny zasób serwera                  |
| `stop <nazwa-zasobu>`     | Zatrzymuje konkretny zasób serwera                 |
| `restart <nazwa-zasobu>`  | Restartuje konkretny zasób serwera                  |
| `ensure <nazwa-zasobu>`   | Uruchamia zasób tylko jeśli nie jest już aktywny  |
| `refresh`                 | Przeładowuje wszystkie zasoby z katalogu zasobów  |
| `clear`                   | Czyści wyjście konsoli serwera                      |
| `crash`                   | Wymusza awarię serwera (do celów debugowania)      |
| `quit`                    | Zamyka serwer w sposób bezpieczny                   |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier RedM. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa dla stabilności serwera i ochrony przed nieautoryzowanym dostępem.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />