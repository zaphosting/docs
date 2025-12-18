---
id: dods-gslt
title: "Day of Defeat: Source: Jak stworzyć GSLT (Steam Game Server Login Token)"
description: "Dowiedz się, jak uwierzytelnić i zabezpieczyć swoje dedykowane serwery gier za pomocą Steam Game Server Login Token, aby zwiększyć widoczność i ochronę → Sprawdź teraz"
sidebar_label: Stwórz GSLT
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

**GSLT (Game Server Login Token)** to token logowania wymagany przez Steam/Valve do uruchamiania serwerów dedykowanych dla niektórych gier. Jest powiązany z kontem Steam i zapewnia prawidłową autoryzację serwera.

Bez ważnego GSLT serwery mogą nie pojawiać się na publicznej liście serwerów lub nie mieć dostępu do ochrony VAC.

<InlineVoucher />



## Wymagania

Aby korzystać z Game Server Login Token (GSLT), Twoje konto Steam nie może być ograniczone, zbanowane ani wykluczone z społeczności. Musi być powiązane z zweryfikowanym smartfonem, a Ty musisz posiadać grę, którą chcesz hostować. Możesz stworzyć do 1000 tokenów na konto.

Pamiętaj, że jesteś w pełni odpowiedzialny za swoje tokeny. Jeśli token zostanie nadużyty lub zbanowany, możesz stracić dostęp do powiązanej gry na stałe. Nigdy nie udostępniaj swoich tokenów, a jeśli to zrobiłeś, usuń je natychmiast. Po zresetowaniu hasła Steam wszystkie tokeny są automatycznie regenerowane. Tokeny, które pozostają nieużywane przez długi czas, wygasają, ale można je w każdej chwili odtworzyć.



## Tworzenie GSLT
Aby stworzyć Game Server Login Token, zaloguj się na swoje konto Steam i przejdź do [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Po zalogowaniu możesz stworzyć nowy token za pomocą formularza na stronie. W polu **App ID** wpisz ID aplikacji `300`, które należy do **Day of Defeat: Source**. Upewnij się, że wpisujesz poprawne ID, ponieważ token nie zadziała z błędną wartością.

W polu **Memo** możesz dodać dowolny opis, który pomoże Ci później zidentyfikować cel tokena, np. nazwę lub rolę serwera. Po wpisaniu obu wartości kliknij **Create**, aby wygenerować token. Token zostanie wyświetlony i możesz go użyć w konfiguracji uruchamiania serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/n7pZjBfz5cy59TM/download)

## Konfiguracja serwera

Token logowania należy teraz dodać do konfiguracji serwera. Aby to zrobić, otwórz panel administracyjny swojego serwera gier i przejdź do sekcji **Ustawienia**. Wpisz token w polu oznaczonym jako **GSL Token** i zapisz zmiany.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Obsługa wielu serwerów Day of Defeat: Source
Jeśli prowadzisz wiele serwerów **Day of Defeat: Source**, potrzebujesz osobnego GSLT dla każdego serwera. <u>**Nie**</u> jest możliwe uruchamianie wielu serwerów gier za pomocą jednego tokena GSLT.
:::



## Podsumowanie

GSLT został utworzony i zastosowany w konfiguracji Twojego serwera. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />