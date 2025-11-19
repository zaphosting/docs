---
id: dedicated-windows-port
title: "Serwer dedykowany: Zarządzanie regułami zapory Windows Defender"
description: "Dowiedz się, jak skutecznie zarządzać regułami zapory Windows Defender i optymalizować przekierowanie portów dla bezpiecznej komunikacji serwera → Sprawdź teraz"
sidebar_label: Przekierowanie portów (zapora)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System Windows posiada własną zaporę Windows Defender, która zarządza ruchem przychodzącym i wychodzącym między serwerem a internetem. W tym poradniku przejdziemy przez proces zarządzania regułami zapory oraz podzielimy się ogólnymi wskazówkami dotyczącymi przekierowania portów.

## Dostęp do zapory Windows Defender

Windows zawiera aplikację **Windows Defender Firewall z zaawansowanym zabezpieczeniem** jako podstawowy element systemu, która pozwala łatwo zarządzać regułami zapory w jednym miejscu.

Możesz do niej przejść, wyszukując ją w pasku wyszukiwania Windows lub naciskając klawisz Windows/ikonę i korzystając z wyszukiwarki w menu start.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Zarządzanie regułami

Większość aplikacji i procesów, zwłaszcza tych, które muszą być dostępne przez internet, jak serwery gier czy serwery www, wymaga przekierowania portów, aby klienci mogli się komunikować z Twoim serwerem (hostem).

:::info
Domyślnie Windows otwiera zaporę tylko dla aplikacji, które tego potrzebują, pozostawiając wszystkie inne porty zamknięte. Ma to na celu zapobieganie niepotrzebnemu wystawianiu portów i zmniejszenie ryzyka. Dlatego też możesz zobaczyć monity UAC przy pierwszym uruchomieniu gry, aby potwierdzić nową regułę zapory.
:::

W Windows zarządzanie regułami odbywa się na dwa sposoby: tworząc reguły dla programów lub tworząc reguły obejmujące porty jako całość (a więc dla wszystkich programów lub procesów korzystających z danego portu).

Są dwa typy reguł:
- Reguła przychodząca (Inbound Rule): kontroluje komunikację przychodzącą (z internetu do Twojego serwera).
- Reguła wychodząca (Outbound Rule): kontroluje komunikację wychodzącą (z Twojego serwera do internetu).

Zazwyczaj przy przekierowaniu portów trzeba utworzyć oba typy reguł, aby umożliwić komunikację z klientami. Jednak zależy to od konkretnego zastosowania i konfiguracji.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Reguły programów

Tworzenie reguły dla programu to zazwyczaj najlepszy wybór, bo ogranicza komunikację do konkretnego programu lub procesu, a nie całego portu, co oznaczałoby, że każdy program/usługa może korzystać z tego portu.

Teraz stworzysz dwie reguły programowe: wychodzącą i przychodzącą, które obie zezwalają na połączenia.

W poniższym przykładzie skonfigurujesz tylko regułę **przychodzącą**. Kroki są identyczne, więc powinieneś powtórzyć je, aby samodzielnie utworzyć regułę wychodzącą.

Zacznij od kliknięcia prawym przyciskiem myszy na **Inbound Rules** w bocznym menu i wybierz opcję **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

W pierwszym kroku wybierz typ reguły **Program**.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Teraz musisz wybrać program, dla którego chcesz utworzyć regułę przekierowania, korzystając z przycisku przeglądania. W tym przykładzie wybrano przeglądarkę Mozilla Firefox jako przykładową aplikację.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

W sekcji akcji wybierz opcję **Allow the Connection** (Zezwól na połączenie).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

W sekcji profilu pozostaw zaznaczone wszystkie opcje i przejdź do ostatniego kroku. Tutaj nadaj regule nazwę, którą łatwo zapamiętasz, i opcjonalnie dodaj opis.

Gdy wszystko gotowe, kliknij **Finish**, aby utworzyć regułę.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Udało Ci się stworzyć własną regułę programową dla serwera Windows. Teraz powtórz ten proces, aby utworzyć regułę **wychodzącą**, wykonując te same kroki, ale w sekcji Outbound Rules.

### Reguły portów

Tworzenie ogólnej reguły portu może być również przydatne w wielu przypadkach i przebiega podobnie jak wcześniej.

Teraz stworzysz dwie reguły portowe: wychodzącą i przychodzącą, które obie zezwalają na połączenia.

W poniższym przykładzie skonfigurujesz tylko regułę **przychodzącą**. Kroki są identyczne, więc powinieneś powtórzyć je, aby samodzielnie utworzyć regułę wychodzącą.

Zacznij od kliknięcia prawym przyciskiem myszy na **Inbound Rules** w bocznym menu i wybierz opcję **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

W pierwszym kroku wybierz typ reguły **Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Teraz musisz określić typ portu (TCP lub UDP) oraz port(y), które chcesz przekierować. Jeśli potrzebujesz przekierować zarówno TCP, jak i UDP, musisz utworzyć dwie osobne reguły, po jednej dla każdego typu portu.

W tym przykładzie użyto portu 25565 (TCP), który jest domyślnym portem dla Minecrafta.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

W sekcji akcji wybierz opcję **Allow the Connection** (Zezwól na połączenie).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

W sekcji profilu pozostaw zaznaczone wszystkie opcje i przejdź do ostatniego kroku. Tutaj nadaj regule nazwę, którą łatwo zapamiętasz, i opcjonalnie dodaj opis.

Gdy wszystko gotowe, kliknij **Finish**, aby utworzyć regułę.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Udało Ci się stworzyć własną regułę portową dla serwera Windows. Teraz powtórz ten proces, aby utworzyć regułę **wychodzącą**, wykonując te same kroki, ale w sekcji Outbound Rules.