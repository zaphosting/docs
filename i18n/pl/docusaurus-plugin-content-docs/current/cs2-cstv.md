---
id: cs2-cstv
title: "CS2: CSTV "
description: "Odkryj, jak transmitować na żywo rozgrywki z opóźnieniem i automatycznym nagrywaniem dla widzów oraz oglądać mecze w dowolnym momencie → Sprawdź teraz"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie


CSTV daje możliwość transmitowania gier na żywo z niewielkim opóźnieniem. Oznacza to, że osoby postronne, które nie biorą udziału w grze, mogą śledzić to, co dzieje się na serwerze. Ta technologia jest również wykorzystywana w znanych turniejach counter-strike, aby widzowie mogli oglądać widowisko. Co więcej, transmisje mogą być też automatycznie zapisywane, dzięki czemu możesz je potem obejrzeć ponownie.

<InlineVoucher />

## Aktywacja

Aktywacja usługi CSTV odbywa się przez plik konfiguracyjny **server.cfg**. Należy tam dodać wymagane komendy:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



## Konfiguracja

Powyższe komendy są obowiązkowe, aby aktywować i udostępnić master serwer CSTV. Poniżej znajdziesz inne komendy do zaawansowanej konfiguracji:

|            Komenda            |                         Opis                         |
| :--------------------------: | :-------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Widzowie mogą przejąć rolę kamerzysty        |
| tv_allow_static_shots "0\|1" |    Używa kamer o stałej orientacji do nagrywania    |
|     tv_autorecord "0\|1"     | Automatycznie nagrywa wszystkie gry jako dema CSTV. Wszystkie gry są nagrywane automatycznie, format pliku demo to auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Próbuje ponownie połączyć się po timeout sieciowym |
| tv_chattimelimit "seconds"  | Ogranicza widzów do pisania tylko co x sekund |
|       tv_debug "0\|1"        |             Wyświetlanie informacji debug CSTV             |
|   tv_delaymapchange "0\|1"   | Opóźnia zmianę mapy do zakończenia transmisji |
|      tv_maxclients "n"       |          Maksymalna liczba klientów na serwerze CSTV          |
|        tv_maxrate "n"        | Maks. dozwolona przepustowość dla widzów CSTV, 0 == bez limitu |
|        tv_msg "text"         |           Wysyła wiadomość do wszystkich widzów           |
|        tv_name "name"        | Nazwa hosta CSTV. Definiuje nazwę CSTV wyświetlaną w przeglądarce serwerów i na pasku statusu |
|       tv_nochat "0\|1"       |           Włącz/Wyłącz czat CSTV           |
|    tv_password "password"    |       Chroni transmisję CSTV hasłem       |
|     tv_record "filename"     |             Rozpoczyna nagrywanie dema CSTV             |
|           tv_stop            |                 Zatrzymuje transmisję CSTV                 |
|        tv_stoprecord         |            Zatrzymuje nagrywanie dema CSTV             |
|           tv_title           |           Definiuje nazwę transmisji CSTV           |



## Nawiązywanie połączenia

Jeśli funkcja jest aktywna na serwerze, dostęp jest możliwy przez adres IP i przypisany do niego port CSTV na serwerze. Aby się połączyć, potrzebujesz konsoli w grze. Tam możesz połączyć się poleceniem:

```
connect SERVERIP:27020
```


Ręcznie i automatycznie nagrane dema są przechowywane w głównym katalogu /gxxxxx/cs2/game/csgo) serwera CS: GO. Można je pobrać przez udostępniony dostęp FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, znajdziesz instrukcje tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)



Podczas odtwarzania dema z gry, pobrane demo można wybrać przez **Load** i uruchomić przyciskiem **Play**.

<InlineVoucher />