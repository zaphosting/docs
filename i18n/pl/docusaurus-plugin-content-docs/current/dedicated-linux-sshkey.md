---
id: dedicated-linux-sshkey
title: "Serwer dedykowany: Generowanie i używanie kluczy SSH dla serwerów Linux"
description: "Dowiedz się, jak bezpiecznie generować i zarządzać kluczami SSH dla swojego serwera Linux, aby zwiększyć bezpieczeństwo połączenia → Sprawdź teraz"
sidebar_label: Klucz SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Generowanie klucza SSH

Dla znacznie bezpieczniejszego połączenia niż tradycyjne logowanie SSH za pomocą hasła, zalecamy korzystanie z kluczy SSH. Aby to zrobić, otwórz zakładkę "**Dostęp i bezpieczeństwo**" w panelu głównym serwera Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

W zakładce "**Dostęp i bezpieczeństwo**" możesz teraz wygenerować klucz, klikając przycisk "**Generuj klucz SSH**".  
Po kliknięciu otworzy się okienko, a losowo wygenerowany klucz zostanie od razu pobrany na Twój komputer.  
Aby klucz został dodany do serwera, musisz kliknąć przycisk "**Dodaj klucz**".

:::info
W przypadku VPS Linux klucz jest dodawany od razu. W przypadku serwerów dedykowanych Linux konieczny jest restart serwera, aby zmiany zaczęły działać.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Jeśli potrzebujesz więcej kluczy, możesz ponownie kliknąć przycisk "**Generuj klucz**" w tym samym oknie.  
W polu "**Nazwa klucza**" możesz nadać kluczowi nazwę, która będzie wyświetlana w panelu ZAP-Hosting. To bardzo pomaga w utrzymaniu porządku.

Gdy wszystkie potrzebne klucze zostaną wygenerowane i dodane, pojawią się one pod zakładką "**Dostęp i bezpieczeństwo**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Jeśli masz własny klucz publiczny, wygenerowany poza naszym panelem, możesz go dodać klikając ikonę "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Otworzy się puste pole, w które możesz wkleić swój klucz publiczny. Po kliknięciu "**Dodaj klucz**" zostanie on dodany do serwera i wyświetlony w naszym panelu.

## Konwersja klucza OpenSSH na PuTTY Private Key za pomocą PuTTYGen

Klucze SSH generowane przez nasz panel są w formacie OpenSSH. Aby użyć ich z PuTTY, musisz najpierw przekonwertować je na format prywatnego klucza PuTTY. Do tego służy program "**PuTTYGen**", który jest automatycznie instalowany razem z PuTTY.

Aplikacja PuTTYGen znajduje się w katalogu głównym PuTTY. Domyślnie folder PuTTY znajdziesz w lokalizacji pokazanej na przykładzie na obrazku: "**C:>Program Files>PuTTY**".

Uruchom PuTTYGen, a następnie kliknij "**Plik**" -> "**Wczytaj klucz prywatny**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Teraz musisz otworzyć plik wygenerowany przez ZAP-Hosting. Przejdź do domyślnego folderu, w którym zapisują się Twoje pobrane pliki.

:::info
**Ważne:** Ustaw filtr na "**Wszystkie pliki**", jak na obrazku, ponieważ plik .pri wygenerowany przez system nie będzie widoczny inaczej.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Po załadowaniu pliku możesz ustawić komentarz oraz hasło do klucza. Aby ustawić hasło, wpisz je w polach "**Hasło klucza**" i "**Potwierdź hasło**".  
*Uwaga:* Możesz też zostawić te pola puste i utworzyć klucz bez hasła, ale będzie to mniej bezpieczne i niezalecane.  
Gdy wszystko jest gotowe, zapisz klucz kompatybilny z PuTTY, klikając "**Zapisz klucz prywatny**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Nadaj plikowi .ppk nazwę i zapisz go, aby łatwo go potem znaleźć.

## Połączenie za pomocą klucza SSH

Aby użyć klucza do połączenia, musisz go najpierw podpiąć w PuTTY. Kliknij "**SSH**" -> "**Auth**" -> "**Przeglądaj...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Znajdź klucz, który właśnie utworzyłeś w PuTTYGen i kliknij "**Otwórz**".

Żeby nie powtarzać tego za każdym razem, warto zapisać to w sesji. Kliknij "**Sesja**" -> "**Ustawienia domyślne**" -> "**Zapisz**", jak na zrzucie ekranu.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Teraz możesz zalogować się na serwer przez PuTTY. W panelu zobaczysz komentarz do klucza, który ustawiłeś w PuTTYGen.

## Wyłącz logowanie hasłem

Klucze SSH zostały stworzone, aby zwiększyć bezpieczeństwo. Jeśli logowanie przez hasło SSH jest nadal możliwe, bezpieczeństwo serwera się nie zmieniło. Dlatego teraz musisz wyłączyć logowanie przez hasło.  
W tym miejscu jest różnica między VPS Linux a serwerami dedykowanymi Linux. Po poprawnym wyłączeniu logowania hasłem, połączenie będzie możliwe tylko dla użytkowników z Twoim kluczem SSH.

### Linux VPS

Możesz łatwo wyłączyć logowanie hasłem w zakładce Dostęp i bezpieczeństwo.  
Kliknij przycisk **Dezaktywuj logowanie hasłem** obok przycisku Generuj klucz SSH.  
Po dezaktywacji nie będzie już możliwe logowanie na serwer za pomocą hasła.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

Status "**Logowanie SSH przez hasło**" zmieni się na "**Nieaktywne**".