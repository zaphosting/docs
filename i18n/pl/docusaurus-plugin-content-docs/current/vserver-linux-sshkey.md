---
id: vserver-linux-sshkey
title: "VPS: Generowanie i używanie kluczy SSH na serwerach Linux"
description: "Dowiedz się, jak bezpiecznie wygenerować i zarządzać kluczami SSH na swoim serwerze Linux, aby zwiększyć bezpieczeństwo połączenia i kontrolę → Sprawdź teraz"
sidebar_label: Klucz SSH
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Generowanie klucza SSH

Dla znacznie bezpieczniejszego połączenia niż tradycyjne logowanie SSH hasłem, zalecamy korzystanie z kluczy SSH. Aby to zrobić, otwórz zakładkę "**Dostęp i bezpieczeństwo**" w panelu głównym serwera Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

W "**Dostęp i bezpieczeństwo**" możesz teraz wygenerować klucz, klikając przycisk "**Generuj klucz SSH**".  
Po kliknięciu otworzy się okienko, a losowo wygenerowany klucz zostanie automatycznie pobrany na Twój komputer.  
Aby dodać klucz do serwera, musisz kliknąć przycisk "**Dodaj klucz**".

:::info
W przypadku VPS Linux klucz jest dodawany od razu. W przypadku serwerów dedykowanych Linux konieczny jest restart serwera, aby zmiany zaczęły działać.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Jeśli potrzebujesz więcej kluczy, możesz ponownie kliknąć "**Generuj klucz**" w tym samym oknie.  
W polu "**Nazwa klucza**" możesz nadać nazwę kluczowi, która będzie widoczna w panelu ZAP-Hosting. To bardzo pomaga w utrzymaniu porządku.

Po wygenerowaniu i dodaniu wszystkich potrzebnych kluczy, będą one widoczne pod "**Dostęp i bezpieczeństwo**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Jeśli masz własny klucz publiczny, wygenerowany poza naszym panelem, możesz go dodać klikając ikonę "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Otworzy się puste pole, w które możesz wkleić swój klucz publiczny. Po kliknięciu "**Dodaj klucz**" zostanie on dodany do serwera i wyświetlony w naszym panelu.

## Konwersja klucza OpenSSH na PuTTY Private Key za pomocą PuTTYGen

Klucze SSH wygenerowane przez nasz panel są w formacie OpenSSH. Aby użyć ich z PuTTY, musisz najpierw przekonwertować je na format prywatnego klucza PuTTY. Do tego służy program "**PuTTYGen**", który jest automatycznie instalowany razem z PuTTY.

PuTTYGen znajdziesz w katalogu głównym PuTTY. Domyślnie folder PuTTY znajduje się, jak na przykładzie, pod ścieżką "**C:>Program Files>PuTTY**".

Uruchom PuTTYGen, a następnie kliknij "**File**" -> "**Load private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Teraz musisz otworzyć plik wygenerowany przez ZAP-Hosting. Przejdź do domyślnego folderu, w którym zapisują się Twoje pobrane pliki.

:::info
**Ważne:** Ustaw filtr na "**Wszystkie pliki**", jak na obrazku, ponieważ plik .pri wygenerowany przez system nie będzie widoczny inaczej.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Po załadowaniu pliku możesz uzupełnić pola komentarza i ustawić hasło do klucza. Aby ustawić hasło, wpisz je w polach "**Key passphrase**" i "**Confirm passphrase**".  
*Uwaga:* Możesz też zostawić te pola puste i utworzyć klucz bez hasła, ale będzie to mniej bezpieczne i niezalecane.  
Gdy wszystko jest gotowe, zapisz klucz kompatybilny z PuTTY, klikając "**Save private key**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Nadaj plikowi .ppk nazwę i zapisz go, aby łatwo go potem znaleźć.

## Połączenie z kluczem SSH

Aby użyć klucza do połączenia, musisz go najpierw podpiąć w PuTTY. Kliknij "**SSH**" -> "**Auth**" -> "**Browse...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Znajdź klucz, który właśnie stworzyłeś w PuTTYGen i kliknij "**Open**".

Żeby nie powtarzać tego za każdym razem, warto zapisać to w sesji. Kliknij "**Session**" -> "**Default Settings**" -> "**Save**", jak na zrzucie ekranu.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Teraz możesz zalogować się na serwer przez PuTTY. W panelu zobaczysz wtedy wpisany w PuTTYGen "**Komentarz klucza**".

## Dezaktywacja logowania hasłem

Klucze SSH zostały stworzone, by zwiększyć bezpieczeństwo. Jeśli logowanie przez hasło SSH jest nadal możliwe, to bezpieczeństwo serwera się nie zmieniło. Dlatego teraz musisz wyłączyć logowanie hasłem. W przypadku VPS Linux i serwerów dedykowanych Linux sposób dezaktywacji jest inny. Po poprawnym wyłączeniu logowania hasłem, połączenie będzie możliwe tylko dla użytkowników z Twoim kluczem SSH.

### Linux VPS

Możesz łatwo wyłączyć logowanie hasłem w zakładce Dostęp i bezpieczeństwo.  
Kliknij przycisk **Dezaktywuj logowanie hasłem** obok przycisku Generuj klucz SSH.  
Po dezaktywacji nie będzie już można logować się na serwer za pomocą hasła.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

Status "**Logowanie SSH przez hasło**" zmieni się wtedy na "**Nieaktywne**".

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś swój klucz SSH! Jeśli masz jeszcze jakieś pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />