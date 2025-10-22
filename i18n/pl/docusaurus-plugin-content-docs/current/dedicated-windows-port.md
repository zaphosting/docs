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

<InlineVoucher />

## Dostęp do zapory Windows Defender

Windows zawiera aplikację **Windows Defender Firewall z Zaawansowanym Bezpieczeństwem**, która jest integralną częścią systemu i pozwala łatwo zarządzać regułami zapory w jednym miejscu.

Możesz do niej wejść, wyszukując ją w pasku wyszukiwania Windows lub naciskając klawisz Windows/ikonę i korzystając z wyszukiwarki w menu start.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Zarządzanie regułami

Większość aplikacji i procesów, zwłaszcza tych, które muszą być dostępne przez internet, jak serwery gier czy serwery www, wymaga przekierowania portów, aby klienci mogli się komunikować z Twoim serwerem (hostem).

:::info
Domyślnie Windows otwiera zaporę tylko dla aplikacji, które tego potrzebują, pozostawiając wszystkie inne porty zamknięte. Ma to na celu ograniczenie niepotrzebnej ekspozycji portów i zmniejszenie ryzyka. Dlatego możesz zobaczyć monity UAC przy pierwszym uruchomieniu gry, na przykład, aby potwierdzić nową regułę zapory.
:::

W Windows zarządzanie regułami odbywa się na dwa sposoby: tworząc reguły dla programów lub tworząc reguły obejmujące porty jako całość (a więc dowolne programy lub procesy korzystające z tych portów).

Są dwa typy reguł:
- Reguła przychodząca (Inbound Rule): kontroluje komunikację przychodzącą (z internetu do Twojego serwera).
- Reguła wychodząca (Outbound Rule): kontroluje komunikację wychodzącą (z Twojego serwera do internetu).

Zazwyczaj przy przekierowaniu portów trzeba utworzyć oba typy reguł, aby umożliwić komunikację z klientami. Jednak zależy to od konkretnego zastosowania i konfiguracji.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Reguły programów

Tworzenie reguły dla programu to zazwyczaj najlepszy wybór, bo ogranicza komunikację do konkretnego programu lub procesu, a nie całego portu, co oznaczałoby, że każdy program/usługa może korzystać z tego portu.

Teraz stworzysz dwie reguły programów: wychodzącą i przychodzącą, które obie zezwalają na połączenia.

W poniższym przykładzie skonfigurujesz tylko regułę **przychodzącą**. Kroki są dokładnie takie same, więc powinieneś powtórzyć je, aby samodzielnie utworzyć regułę wychodzącą.

Zacznij od kliknięcia prawym przyciskiem myszy na **Inbound Rules** w bocznym menu i wybierz opcję **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

W pierwszym kroku wybierz opcję **Program** jako typ reguły.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Teraz musisz wybrać program, dla którego chcesz utworzyć regułę przekierowania, korzystając z przycisku przeglądania. W tym przykładzie wybrano przeglądarkę Mozilla Firefox jako przykładową aplikację.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

W sekcji akcji wybierz opcję **Allow the Connection** (Zezwól na połączenie).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

W sekcji profilu pozostaw zaznaczone wszystkie opcje i przejdź do ostatniego kroku. Tutaj nadaj regule nazwę, którą łatwo zapamiętasz, możesz też dodać opcjonalny opis.

Gdy wszystko gotowe, kliknij **Finish**, aby utworzyć regułę.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Udało Ci się stworzyć własną regułę programu dla Twojego serwera Windows. Teraz powtórz te kroki, aby utworzyć **regułę wychodzącą** w sekcji Outbound Rules.

### Reguły portów

Tworzenie ogólnej reguły portu może być również przydatne w wielu przypadkach i przebiega podobnie jak wcześniej.

Stworzysz teraz dwie reguły portów: wychodzącą i przychodzącą, które obie zezwalają na połączenia.

W poniższym przykładzie skonfigurujesz tylko regułę **przychodzącą**. Kroki są dokładnie takie same, więc powinieneś powtórzyć je, aby samodzielnie utworzyć regułę wychodzącą.

Zacznij od kliknięcia prawym przyciskiem myszy na **Inbound Rules** w bocznym menu i wybierz opcję **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

W pierwszym kroku wybierz opcję **Port** jako typ reguły.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Teraz musisz określić typ portu (TCP lub UDP) oraz numer(y) portu, które chcesz przekierować. Jeśli potrzebujesz przekierować zarówno TCP, jak i UDP, musisz utworzyć dwie osobne reguły, po jednej dla każdego typu portu.

W tym przykładzie użyto portu 25565 (TCP), który jest domyślnym portem dla Minecrafta.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

W sekcji akcji wybierz opcję **Allow the Connection** (Zezwól na połączenie).

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

W sekcji profilu pozostaw zaznaczone wszystkie opcje i przejdź do ostatniego kroku. Tutaj nadaj regule nazwę, którą łatwo zapamiętasz, możesz też dodać opcjonalny opis.

Gdy wszystko gotowe, kliknij **Finish**, aby utworzyć regułę.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Udało Ci się stworzyć własną regułę portu dla Twojego serwera Windows. Teraz powtórz te kroki, aby utworzyć **regułę wychodzącą** w sekcji Outbound Rules.

<InlineVoucher />