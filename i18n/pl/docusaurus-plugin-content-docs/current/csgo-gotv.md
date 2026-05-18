---
id: csgo-gotv
title: "CS:GO: GOTV"
description: "Dowiedz się, jak transmitować na żywo rozgrywki z opóźnieniem i automatycznym nagrywaniem dla widzów oraz oglądać mecze w dowolnym momencie → Sprawdź teraz"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

GOTV daje możliwość transmitowania gier na żywo z niewielkim opóźnieniem. Oznacza to, że osoby postronne, które nie biorą udziału w rozgrywce, mogą śledzić to, co dzieje się na serwerze. Ta technologia jest wykorzystywana również w znanych turniejach Counter-Strike, aby widzowie mogli oglądać widowisko. Co więcej, transmisje mogą być automatycznie zapisywane, dzięki czemu można je później ponownie obejrzeć.

<InlineVoucher />

## Aktywacja

Aktywacja usługi GOTV odbywa się poprzez plik konfiguracyjny **server.cfg**. Należy tam dodać następujące komendy:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## Konfiguracja

Powyższe komendy są obowiązkowe, aby aktywować i udostępnić master serwer GOTV. Poniżej znajdziesz inne komendy do zaawansowanej konfiguracji:

|            Komenda            |                         Opis                         |
| :--------------------------: | :-------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Widzowie mogą przejąć rolę kamerzysty        |
| tv_allow_static_shots "0\|1" |    Używa kamer o stałej orientacji do nagrywania    |
|     tv_autorecord "0\|1"     | Automatycznie nagrywa wszystkie gry jako dema GOTV. Format pliku demo to auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Próbuje ponownie połączyć się po timeout sieciowym |
| tv_chattimelimit "sekundy"   | Ogranicza widzów do pisania co x sekund |
|       tv_debug "0\|1"        |             Wyświetlanie informacji debug GOTV             |
|   tv_delaymapchange "0\|1"   | Opóźnia zmianę mapy do zakończenia transmisji |
|      tv_maxclients "n"       |          Maksymalna liczba klientów na serwerze GOTV          |
|        tv_maxrate "n"        | Maks. dozwolona przepustowość dla widzów GOTV, 0 == bez limitu |
|        tv_msg "tekst"        |           Wysyła wiadomość do wszystkich widzów           |
|        tv_name "nazwa"       | Nazwa hosta GOTV. Definiuje nazwę GOTV widoczną w przeglądarce serwerów i pasku statusu |
|       tv_nochat "0\|1"       |           Włącz/Wyłącz czat GOTV           |
|    tv_password "hasło"       |       Chroni transmisję GOTV hasłem       |
|     tv_record "nazwa_pliku"  |             Rozpoczyna nagrywanie dema GOTV             |
|           tv_stop            |                 Zatrzymuje transmisję GOTV                 |
|        tv_stoprecord         |            Zatrzymuje nagrywanie dema GOTV             |
|           tv_title           |           Definiuje nazwę transmisji GOTV           |

## Nawiązywanie połączenia

Jeśli funkcja jest aktywna na serwerze, dostęp jest możliwy przez adres IP i przypisany do niego port GOTV na serwerze. Aby się połączyć, potrzebujesz konsoli w grze. Następnie możesz połączyć się komendą:

```
connect SERVERIP:27020
```

Ręcznie i automatycznie nagrane dema są przechowywane w głównym katalogu /gxxxxx/CS:GO/game/csgo) serwera CS:GO. Można je pobrać przez udostępniony dostęp FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, znajdziesz instrukcje tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

Podczas odtwarzania dema w grze, pobrane demo można wybrać przez **Load** i uruchomić przyciskiem **Play**.

<InlineVoucher />