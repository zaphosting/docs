---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Zostań adminem na swoim serwerze"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i skutecznie zarządzać rolami na swoim serwerze gier → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Poniżej znajdziesz wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

:::info
Od ostatnich aktualizacji SCP logowanie za pomocą hasła nie działa. Skorzystaj z poniższego poradnika, aby dodać swoje role bezpośrednio przez SteamID. 
:::


## Konfiguracja Remote Admin Config

### Przygotowanie

Na początek musisz znaleźć swój Steam64ID.  
Możesz skorzystać z tego narzędzia: [SteamID Lookup](https://steamid.io/lookup).  
ID wpiszesz później w pliku konfiguracyjnym.

Oto przykład, jak możesz uzyskać swój steamid, wpisując tam link do swojego profilu:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Dodawanie adminów

Teraz musisz otworzyć i edytować plik konfiguracyjny.  
Znajdziesz go w zakładce "**Configs**" pod "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Tam otwórz plik "**config_remoteadmin.txt**", w którym należy zmodyfikować odpowiednie linie.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Role są tam tworzone i przypisywane.  
W miejscu "**SomeSteamId64**" przed "**@steam: owner**" musisz wpisać swój SteamID64, który wcześniej znalazłeś w "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Możesz to zrobić dla każdego dodatkowego użytkownika, który ma otrzymać uprawnienia.  
W naszym przykładzie przyznaliśmy prawa trzem użytkownikom: jeden ma rolę "**owner**", a dwaj pozostali "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Dodanie większej liczby ról do nadpisania hasła

Jeśli chcesz, aby więcej ról mogło nadpisać hasło do remote admina, wystarczy, że zmodyfikujesz następującą linię w pliku:  
"**config_remoteadmin.txt**"

Znajdź dokładnie ten fragment:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Aby dodać więcej ról, po prostu wpisz je oddzielone przecinkiem.  
Na przykład, aby dodać admina i moderatora do nadpisania hasła:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Aby otworzyć konsolę remote admina w grze, po zalogowaniu się na serwer, naciśnij klawisz "**M**". Jeśli serwer działa, musisz go zrestartować, aby zmiany zaczęły działać. Jeśli serwer jest wyłączony, po prostu go włącz i sprawdź konsolę Remote Admin w grze.
:::


## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />