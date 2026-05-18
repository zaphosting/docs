---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Zaawansowane uprawnienia z LuckPerms"
description: "Dowiedz się, jak zainstalować i skonfigurować LuckPerms do zarządzania zaawansowanymi uprawnieniami i rangami na serwerze Hytale → Sprawdź teraz"
sidebar_label: Zaawansowane uprawnienia
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Zarządzanie uprawnieniami na serwerze Hytale staje się coraz ważniejsze, gdy zaczynasz pracować z rolami personelu, niestandardowymi rangami lub specjalnymi przywilejami dla graczy. Domyślny system uprawnień w grze sprawdza się przy podstawowej administracji, ale szybko pokazuje swoje ograniczenia, gdy potrzebujesz precyzyjnej kontroli nad komendami i funkcjami.

**LuckPerms** to solidny i wysoce konfigurowalny system uprawnień dla serwerów Hytale. Pozwala dokładnie określić, do jakich uprawnień i komend mają dostęp różni gracze lub grupy.

<InlineVoucher />



## Instalacja LuckPerms

Aby zainstalować moda LuckPerms, najpierw pobierz najnowszy plik `.jar` LuckPerms.  
Po pobraniu otwórz swój panel administracyjny serwera i zatrzymaj serwer, aby bezpiecznie przesłać moda.

Przejdź do sekcji **Pliki** na swoim serwerze i otwórz folder `mods`. Prześlij tam plik `.jar` LuckPerms. Jeśli chcesz dokładniej poznać proces instalacji modów, polecamy zajrzeć do [poradnika Instalacja modów](hytale-mods).

Po zakończeniu przesyłania pliku, uruchom serwer ponownie. Po starcie otwórz konsolę serwera i sprawdź, czy LuckPerms działa poprawnie. Jeśli instalacja się powiodła, LuckPerms wyświetli w konsoli komunikaty startowe.



## Nadawanie początkowych uprawnień

Po instalacji LuckPerms wymaga konfiguracji, zanim będzie można go efektywnie używać. Aby zacząć zarządzać uprawnieniami, musisz nadać sobie prawo do korzystania z komend LuckPerms. W konsoli lub czacie w grze wpisz następującą komendę:

```
lp user <playername> permission set luckperms.* true
```

Ta komenda daje wybranemu graczowi pełny dostęp do komend LuckPerms.



## Korzystanie z edytora webowego LuckPerms

LuckPerms ma wbudowany edytor webowy, który oferuje wygodny interfejs do tworzenia grup i zarządzania uprawnieniami. Aby wygenerować sesję edytora, wpisz:

```
lp editor
```

LuckPerms wyświetli w konsoli link do edytora. Otwórz go w przeglądarce, aby uzyskać dostęp do edytora webowego.

```
[LP] Przygotowywanie nowej sesji edytora, proszę czekać...
[LP] Kliknij poniższy link, aby otworzyć edytor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

W edytorze skopiuj wyświetlony **link z komendą**. Wróć do konsoli serwera i wklej tę komendę, aby nawiązać zaufanie i połączyć sesję edytora z serwerem.

```
/lp trusteditor XXXX-XXXX
```

Gdy edytor jest połączony, możesz konfigurować użytkowników, grupy i uprawnienia bezpośrednio w interfejsie webowym. Po wprowadzeniu zmian kliknij **Apply**, aby zapisać konfigurację. Jeśli LuckPerms wygeneruje komendę do zatwierdzenia, skopiuj ją i wklej w konsoli serwera, aby sfinalizować zmiany.



## Tworzenie grupy adminów

Otwórz link do edytora w przeglądarce i przejdź do sekcji **Groups**. Stwórz nową grupę klikając ikonę plusa i nazwij ją `admin`. Możesz też opcjonalnie ustawić dodatkowe szczegóły, takie jak nazwa wyświetlana, waga, grupa nadrzędna oraz prefix/sufix.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Po utworzeniu grupy wybierz grupę `admin` w edytorze i dodaj uprawnienia. Aby nadać pełne uprawnienia Hytale dla grupy, wpisz:

```
hytale.*
```

To uprawnienie daje pełny dostęp do wszystkich uprawnień Hytale. Po dodaniu uprawnień przypisz gracza do grupy.  
W edytorze przejdź do sekcji **Users**, wybierz odpowiedniego użytkownika i dodaj grupę `admin` w polu **Parent groups**.

Na koniec kliknij **Apply**, aby zapisać zmiany. Jeśli pojawi się prośba, wklej komendę zatwierdzającą w konsoli serwera.



## Najczęściej używane komendy LuckPerms

LuckPerms możesz zarządzać przez edytor webowy lub bezpośrednio przez komendy. Oto najczęściej używane komendy do zarządzania uprawnieniami:

| Komenda                                                      | Opis                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Dodaje gracza do grupy z uprawnieniami.                      |
| `/lp user <playername> parent remove <group>`                | Usuwa gracza z grupy z uprawnieniami.                        |
| `/lp user <playername> permission set <permission>`          | Nadaje graczowi uprawnienie.                                 |
| `lp user <playername> permission settemp <permission> true <duration>` | Nadaje tymczasowe uprawnienie graczowi na określony czas, np. `1h` (1 godzina) lub `1m` (1 minuta). |
| `/lp user <playername> permission unset <permission>`        | Usuwa uprawnienie od gracza.                                 |
| `/lp group <group> permission set <permission>`              | Nadaje uprawnienie grupie.                                   |
| `/lp group <group> permission unset <permission>`            | Usuwa uprawnienie od grupy.                                  |



## Podsumowanie

LuckPerms to potężne narzędzie do zaawansowanego zarządzania uprawnieniami na serwerach Hytale. Dzięki grupom, uprawnieniom i edytorowi webowemu możesz stworzyć przejrzysty system ról, który rośnie razem z Twoją społecznością.

Po konfiguracji LuckPerms ułatwia utrzymanie rang personelu, przywilejów graczy i kontroli dostępu, jednocześnie dbając o porządek, spójność i wydajność administracji serwerem.

Masz pytania lub potrzebujesz pomocy? Nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />