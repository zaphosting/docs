---
id: hl2-gslt
title: "Half-Life 2: Jak stworzyć GSLT (Steam Game Server Login Token)"
description: "Dowiedz się, jak uwierzytelnić swój serwer gier za pomocą Steam Game Server Login Token, aby poprawnie wyświetlał się na liście i miał ochronę VAC → Sprawdź teraz"
sidebar_label: Stwórz GSLT
services:
  - gameserver-holdfast-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

**GSLT (Game Server Login Token)** to token logowania wymagany przez Steam/Valve do uruchamiania serwerów dedykowanych dla niektórych gier. Jest powiązany z kontem Steam i zapewnia prawidłową autoryzację serwera.

Bez ważnego GSLT serwery mogą nie pojawiać się na publicznej liście serwerów lub nie mieć dostępu do ochrony VAC.

<InlineVoucher />



## Wymagania

Aby korzystać z Game Server Login Token (GSLT), Twoje konto Steam nie może być ograniczone, zbanowane ani wykluczone z społeczności. Musi być powiązane z zweryfikowanym smartfonem, a Ty musisz posiadać grę, którą chcesz hostować. Możesz stworzyć do 1000 tokenów na konto.

Pamiętaj, że jesteś w pełni odpowiedzialny za swoje tokeny. Jeśli token zostanie nadużyty lub zbanowany, możesz stracić dostęp do powiązanej gry na stałe. Nigdy nie udostępniaj swoich tokenów, a jeśli to zrobiłeś, usuń je natychmiast. Po zresetowaniu hasła Steam wszystkie tokeny są automatycznie regenerowane. Tokeny, które długo pozostają nieużywane, wygasają, ale można je w każdej chwili odtworzyć.



## Stwórz GSLT
Aby stworzyć Game Server Login Token, zaloguj się na swoje konto Steam i przejdź do [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers).


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

Po zalogowaniu możesz stworzyć nowy token, korzystając z formularza na stronie. W polu **App ID** wpisz ID aplikacji `320`, które należy do **Half-Life 2**. Upewnij się, że wpisujesz poprawne ID, bo token nie zadziała z błędną wartością.

W polu **Memo** możesz dodać dowolny opis, który pomoże Ci później zidentyfikować cel tokena, np. nazwę lub rolę serwera. Po wpisaniu obu wartości kliknij **Create**, aby wygenerować token. Token zostanie wyświetlony i możesz go użyć w konfiguracji uruchamiania serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/zBBPASS24oqRAfr/download)

## Konfiguracja serwera

Token logowania należy teraz dodać do konfiguracji serwera. W tym celu otwórz panel administracyjny swojego serwera gier i przejdź do sekcji **Ustawienia**. Wpisz token w polu oznaczonym jako **GSL Token** i zapisz zmiany.

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info Obsługa wielu serwerów Half-Life 2
Jeśli prowadzisz kilka serwerów **Half-Life 2**, potrzebujesz osobnego GSLT dla każdego z nich. <u>**Nie**</u> da się obsługiwać wielu serwerów gier za pomocą jednego tokena GSLT.
:::



## Podsumowanie

GSLT został stworzony i zastosowany w konfiguracji Twojego serwera. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />