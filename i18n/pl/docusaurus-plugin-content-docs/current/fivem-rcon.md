---
id: fivem-rcon
title: "FiveM: RCON"
description: "Dowiedz się, jak zdalnie zarządzać serwerami gier FiveM za pomocą RCON, aby mieć elastyczną kontrolę i monitoring serwera → Sprawdź teraz"
sidebar_label: RCON
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

RCON (Remote Console) to protokół sieciowy służący do zdalnego zarządzania serwerami gier. Umożliwia dostęp do konsoli serwera bez bezpośredniej interakcji ze środowiskiem serwera. Dzięki temu można wykonywać polecenia administracyjne, zmieniać parametry konfiguracji lub pobierać informacje o stanie serwera.

W FiveM RCON służy do wykonywania poleceń po stronie serwera, takich jak zarządzanie graczami, zmiana ustawień rozgrywki czy dostęp do danych diagnostycznych. Połączenie jest chronione hasłem i działa przez określony port, dostępny za pomocą kompatybilnych klientów RCON.

Kluczową zaletą RCON jest to, że pozwala na zarządzanie serwerem **bez konieczności bycia połączonym z grą jako gracz**. Administratorzy serwera mogą monitorować i kontrolować FiveM z poziomu zewnętrznych narzędzi, interfejsów wiersza poleceń lub paneli głównych, co daje dużą elastyczność i wygodę przy zdalnej obsłudze.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Konfiguracja

Zanim będzie można korzystać z RCON, trzeba go włączyć i skonfigurować. Robi się to w sekcji **CFG Editor** w panelu administracyjnym serwera gier w **txAdmin**. Upewnij się, że w konfiguracji znajdują się lub zostały zmodyfikowane następujące linie:

```cfg
ensure rconlog
set rcon_password "twoje-bezpieczne-hasło"
```



## Łączenie się przez RCON

Do połączenia się z serwerem GameXY przez RCON używamy narzędzia Windows **IceCon**. Można je pobrać z [repozytorium GitHub](https://github.com/icedream/icecon). Po zainstalowaniu programu na komputerze, utwórz nowe połączenie, podając następujące dane:

- **Adres IP serwera**  
- **Port gry**
- **Hasło RCON**

Po pomyślnym połączeniu IceCon udostępnia graficzny interfejs do wysyłania poleceń RCON do serwera FiveM. Możesz wykonywać standardowe komendy RCON i na bieżąco oglądać odpowiedzi serwera bezpośrednio w narzędziu.

IceCon oferuje też dodatkowe funkcje, takie jak:

- Historia poleceń i autouzupełnianie  
- Podgląd logów serwera  
- Własne przyciski do poleceń  
- Profile połączeń do zarządzania wieloma serwerami



## Komendy RCON

Po połączeniu przez RCON można wykonywać różne polecenia administracyjne i diagnostyczne na serwerze FiveM. Dostępne komendy zależą od silnika gry, ale zwykle obejmują zarządzanie graczami, zapytania o status i kontrolę serwera.

| Komenda                   | Opis                                               |
| ------------------------- | ------------------------------------------------- |
| `say <wiadomość>`         | Wysyła wiadomość do wszystkich graczy na czacie  |
| `start <nazwa-zasobu>`    | Uruchamia konkretny zasób serwera                  |
| `stop <nazwa-zasobu>`     | Zatrzymuje konkretny zasób serwera                  |
| `restart <nazwa-zasobu>`  | Restartuje konkretny zasób serwera                  |
| `ensure <nazwa-zasobu>`   | Uruchamia zasób tylko jeśli nie jest już aktywny   |
| `refresh`                 | Przeładowuje wszystkie zasoby z katalogu zasobów   |
| `clear`                   | Czyści wyjście konsoli serwera                      |
| `crash`                   | Wymusza awarię serwera (do celów debugowania)      |
| `quit`                    | Zamyka serwer w sposób bezpieczny                   |



## Podsumowanie

RCON to podstawowe narzędzie do zdalnej administracji serwerami gier FiveM. Umożliwia szybki i bezpośredni dostęp do funkcji administracyjnych, jednocześnie zapewniając kontrolę dostępu przez uwierzytelnianie hasłem. Prawidłowa i bezpieczna konfiguracja jest kluczowa, aby zapewnić stabilność serwera i ochronę przed nieautoryzowanym dostępem.

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />