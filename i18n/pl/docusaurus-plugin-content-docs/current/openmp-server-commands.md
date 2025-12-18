---
id: openmp-server-commands
title: "Open.mp: Komendy serwera Open.mp"
description: "Dowiedz się, jak bezpiecznie zarządzać komendami serwera Open.mp z dostępem RCON i zwiększ kontrolę nad swoim serwerem → Sprawdź teraz"
sidebar_label: Komendy serwera
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery Open.mp mają wbudowany zestaw przydatnych komend serwera, które można używać zarówno w grze, jak i przez konsolę serwera. W tym poradniku omówimy wiele z tych komend, podając opisy i przykłady użycia.

<InlineVoucher />

## Konfiguracja dostępu (RCON)

Aby móc wykonywać komendy serwera w grze, musisz włączyć funkcję RCON. Należy wejść do pliku konfiguracyjnego `config.json` i dostosować odpowiednie parametry, aby aktywować tę funkcję oraz ustawić hasło. Skorzystaj z naszego [poradnika Konfiguracja serwera](openmp-configuration.md), aby uzyskać dostęp do pliku konfiguracyjnego serwera.

Gdy masz już plik, znajdź poniższe parametry; włącz funkcję i ustaw hasło RCON.

| Nazwa parametru               | Przykład                               | Opis                                                                                          |
| ------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                    | true                                  | Włącz lub wyłącz funkcję RCON                                                                 |
| rcon.password                  | ZAP-IS-AWESOME                        | Ustaw hasło, które jest wymagane do dostępu do RCON z poziomu klienta                         |

:::info
Upewnij się, że ustawiłeś hasło RCON w konfiguracji. W przeciwnym razie możesz mieć problemy, a RCON będzie dostępne dla każdego, co jest bardzo niebezpieczne.
:::

Po wprowadzeniu zmian zapisz plik i zrestartuj serwer. Przy następnym uruchomieniu serwera RCON powinno być dostępne i gotowe do użycia.

:::tip
Chcesz dowiedzieć się więcej o RCON? Skorzystaj z naszego [poradnika RCON](openmp-rcon.md), który omawia temat bardziej szczegółowo.
:::

## Dostępne komendy

Poniższa tabela zawiera ważne komendy serwera Open.mp wraz z przykładami użycia i opisami. Można ich używać w grze, przez konsolę serwera lub program RCON. Jeśli chcesz zobaczyć wszystkie aktualne komendy, polecamy przeczytać [poradnik open.mp o zarządzaniu serwerem](https://www.open.mp/docs/server/ControllingServer), gdzie znajdziesz pełną listę dostępnych komend.

:::tip
Podczas wykonywania komend bezpośrednio przez konsolę lub program RCON nie musisz używać prefiksu `/rcon`. Prefiks jest wymagany tylko podczas wpisywania komend **w grze**.
:::

:::note
Upewnij się, że RCON jest włączone, inaczej te komendy nie będą działać ani w grze, ani przez program RCON.
:::

### Komendy ogólne

| Składnia komendy              | Akceptowane wartości | Opis                                                                 | 
| ------------------------------ | -------------------- | -------------------------------------------------------------------- | 
| /rcon cmdlist                  | -                    | Zwraca listę wszystkich komend serwera                              | 
| /rcon varlist                  | -                    | Zwraca listę wszystkich aktualnych zmiennych serwera                | 
| /rcon exit                     | -                    | Wyłącza serwer                                                      | 
| /rcon echo [tekst]             | String               | Wysyła wiadomość do konsoli serwera (nie wyświetla się w grze)      | 
| /rcon say [tekst]              | String               | Wysyła wiadomość do wszystkich graczy w grze (wyświetla się jako "Admin: [tekst]") | 
| /rcon players                  | -                    | Pokazuje informacje o wszystkich aktualnie połączonych graczach     |
| /rcon reloadlog                | -                    | Przeładowuje plik logów serwera                                     |

### Komendy moderacyjne

| Składnia komendy              | Akceptowane wartości | Opis                                                                 | 
| ------------------------------ | -------------------- | -------------------------------------------------------------------- | 
| /rcon kick [id]                | Liczba całkowita     | Wyrzuca wskazanego gracza z serwera                                 | 
| /rcon ban [id]                 | Liczba całkowita     | Banuje wskazanego gracza na serwerze                                | 
| /rcon banip [ip]               | String               | Banuje adres IP na serwerze                                         | 
| /rcon unbanip [ip]             | String               | Usuwa bana z adresu IP na serwerze                                  | 
| /rcon reloadbans               | -                    | Przeładowuje plik z banami                                         |

<InlineVoucher />