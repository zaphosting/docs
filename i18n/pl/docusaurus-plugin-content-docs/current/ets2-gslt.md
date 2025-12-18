---
id: ets2-gslt
title: "Euro Truck Simulator 2: Jak stworzyć GSLT (Steam Game Server Login Token)"
description: "Dowiedz się, jak uwierzytelnić swój dedykowany serwer gier za pomocą Steam Game Server Login Token, aby poprawnie wyświetlał się na liście i miał ochronę VAC → Sprawdź teraz"
sidebar_label: Stwórz GSLT
services:
  - gameserver-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

**GSLT (Game Server Login Token)** to token logowania wymagany przez Steam/Valve do uruchamiania dedykowanych serwerów gier dla wybranych tytułów. Jest powiązany z kontem Steam i zapewnia prawidłowe uwierzytelnienie serwera.

Bez ważnego GSLT serwery mogą nie pojawiać się na publicznej liście serwerów lub nie mieć dostępu do ochrony VAC.

<InlineVoucher />



## Wymagania

Aby korzystać z Game Server Login Token (GSLT), Twoje konto Steam nie może być ograniczone, zbanowane ani wykluczone z społeczności. Musi być powiązane z zweryfikowanym smartfonem, a Ty musisz posiadać grę, którą chcesz hostować. Możesz stworzyć do 1000 tokenów na jedno konto.

Pamiętaj, że jesteś w pełni odpowiedzialny za swoje tokeny. Jeśli token zostanie nadużyty lub zbanowany, możesz stracić dostęp do powiązanej gry na stałe. Nigdy nie udostępniaj swoich tokenów, a jeśli to zrobiłeś, usuń je natychmiast. Po zresetowaniu hasła Steam wszystkie tokeny są automatycznie regenerowane. Tokeny, które pozostają nieużywane przez dłuższy czas, wygasają, ale można je w każdej chwili odtworzyć.



## Jak stworzyć GSLT
Aby stworzyć Game Server Login Token, zaloguj się na swoje konto Steam i przejdź do [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Po zalogowaniu możesz utworzyć nowy token za pomocą formularza na stronie. W polu **App ID** wpisz ID aplikacji `227300`, które należy do **Euro Truck Simulator 2**. Upewnij się, że wpisałeś poprawne ID, ponieważ token nie zadziała z błędną wartością.

W polu **Memo** możesz dodać dowolny opis, który pomoże Ci później zidentyfikować cel tokena, np. nazwę lub rolę serwera. Po wpisaniu obu wartości kliknij **Create**, aby wygenerować token. Token zostanie wyświetlony i możesz go użyć w konfiguracji uruchomienia swojego serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/Es5q7j3KT3wyiad/download)

## Konfiguracja serwera

Token logowania należy teraz dodać do konfiguracji serwera. W tym celu otwórz panel administracyjny swojego serwera gier i przejdź do sekcji **Ustawienia**. Wpisz token w polu oznaczonym jako **GSL Token** i zapisz zmiany.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Obsługa wielu serwerów Euro Truck Simulator 2
Jeśli prowadzisz kilka serwerów **Euro Truck Simulator 2**, potrzebujesz osobnego GSLT dla każdego z nich. <u>**Nie**</u> da się obsługiwać wielu serwerów gier za pomocą jednego tokena GSLT.
:::



## Podsumowanie

GSLT został utworzony i zastosowany w konfiguracji Twojego serwera. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />