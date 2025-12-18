---
id: csgo-gotv
title: "CSGO: Informacje o GOTV"
description: "Dowiedz się, jak GOTV umożliwia transmisje na żywo i nagrywanie powtórek, aby poprawić doświadczenia widzów w CS:GO i podobnych grach → Sprawdź teraz"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, poprawne lub istotne. Został zarchiwizowany z następujących powodów:

Powód: CS:GO nie jest już aktywnie oferowane ani rozwijane. CS2 to następca CS:GO. Zalecamy przejście na CS2.
::::



## Co to jest GOTV?


GOTV daje możliwość transmitowania gier na żywo z niewielkim opóźnieniem. Oznacza to, że osoby postronne, które nie biorą udziału w rozgrywce, mogą śledzić, co dzieje się na serwerze. Ta technologia jest również wykorzystywana w znanych turniejach Counter-Strike, aby widzowie mogli oglądać widowisko. Dodatkowo transmisje mogą być automatycznie zapisywane, dzięki czemu można je później obejrzeć ponownie.

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## Jak korzystać z GOTV?

Jeśli funkcja jest aktywowana na serwerze, dostęp jest możliwy przez adres IP i przypisany do niego port GOTV na serwerze. Aby się połączyć, potrzebujesz konsoli w grze. Następnie możesz połączyć się za pomocą następującego polecenia:

```
connect SERVERIP:27020
```


Ręcznie i automatycznie nagrane dema są przechowywane w głównym katalogu (gxxxxx / csgo / csgo /) serwera CS:GO. Można je pobrać przez udostępniony dostęp FTP. Jeśli nie wiesz jeszcze, jak korzystać z FTP, znajdziesz instrukcje tutaj: [Dostęp przez FTP](gameserver-ftpaccess.md).


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



Podczas odtwarzania dema w grze, pobrane demo można wybrać przez **Load** i uruchomić przyciskiem **Play**.



## Instalacja serwera głównego GOTV

Aby aktywować serwer główny GOTV, w pliku **server.cfg** trzeba dodać brakujące komendy. Są to następujące polecenia:

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



Powyższe komendy są obowiązkowe, aby serwer główny GOTV został aktywowany i był dostępny. Poniżej znajdują się inne polecenia do zaawansowanej konfiguracji:

|            Komenda            |                         Opis                         |
| :--------------------------: | :-------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        Widzowie mogą przejąć rolę kamerzysty        |
| tv_allow_static_shots "0\|1" |    Używa kamer o stałej orientacji do nagrywania    |
|     tv_autorecord "0\|1"     | Automatycznie nagrywa wszystkie gry jako dema GOTV. Wszystkie gry są nagrywane automatycznie, format pliku demo to auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | Próbuje ponownie połączyć się po przerwaniu sieci |
| tv_chattimelimit "seconds"  | Ogranicza widzów do pisania tylko co x sekund |
|       tv_debug "0\|1"        |             Wyświetlanie informacji debugowych GOTV             |
|   tv_delaymapchange "0\|1"   | Opóźnia zmianę mapy do zakończenia transmisji |
|      tv_maxclients "n"       |          Maksymalna liczba klientów na serwerze GOTV           |
|        tv_maxrate "n"        | Maks. dozwolona przepustowość dla widzów GOTV, 0 == bez limitu |
|        tv_msg "text"         |           Wysyła wiadomość do wszystkich widzów           |
|        tv_name "name"        | Nazwa hosta GOTV. Definiuje nazwę GOTV wyświetlaną w przeglądarce serwerów i na pasku statusu |
|       tv_nochat "0\|1"       |           Włącz/Wyłącz czat GOTV           |
|    tv_password "password"    |       Chroni transmisję GOTV hasłem        |
|     tv_record "filename"     |             Rozpoczyna nagrywanie dema GOTV             |
|           tv_stop            |                 Zatrzymuje transmisję GOTV                  |
|        tv_stoprecord         |            Zatrzymuje nagrywanie dema GOTV              |
|           tv_title           |           Definiuje nazwę transmisji GOTV           |

<InlineVoucher />