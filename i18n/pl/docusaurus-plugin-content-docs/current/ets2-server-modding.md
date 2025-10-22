---
id: ets2-server-modding
title: "ETS2: Instalacja Modów/DLC na Twoim serwerze ETS2"
description: "Odkryj, jak wzbogacić swoją rozgrywkę w Euro Truck Simulator 2, dodając mody i DLC dla jeszcze lepszych wrażeń → Sprawdź teraz"
sidebar_label: Instalacja Modów/DLC
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Euro Truck Simulator 2 ma natywne wsparcie dla modów przez Steam Workshop wbudowany w grę, co pozwala Ci dodawać różnorodne mody do gry i Twojego serwera, obok zakupionych DLC. W tym poradniku pokażemy, jak zainstalować mody na kliencie, a następnie na Twoim serwerze ETS2.

<InlineVoucher />

## Dodawanie Modów & DLC

Na początek musisz znaleźć i wybrać mody oraz DLC, które chcesz używać. Możesz to zrobić w grze, korzystając z opcji **Mod Manager** i **DLC Browser** w menu głównym.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mody

Do modów dostaniesz się przez opcję **Mod Manager** w menu głównym, która pozwala łatwo przeglądać mody przez Steam Workshop.

Po zainstalowaniu modów, upewnij się, że przeniosłeś je na listę **Active Mods** za pomocą strzałek obok każdego modu.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Na koniec potwierdź zmiany i wejdź do gry w trybie single player.

### DLC

Dostęp do zakupionych DLC masz przez opcję **DLC Browser** w menu głównym.

Na tej stronie możesz przeglądać wszystkie DLC, które aktualnie posiadasz i masz zainstalowane na kliencie.

## Eksportowanie Pakietów Serwera

Gdy już aktywowałeś mody i jesteś gotowy w grze, musisz wyeksportować swoje mody jako pakiety serwera. Aby to zrobić, musisz otworzyć konsolę w grze, która domyślnie jest wyłączona.

Aby ją włączyć, przejdź do następującego katalogu i otwórz plik `config.cfg`:
```
C:/Users/[twoj_uzytkownik]/Documents/Euro Truck Simulator 2
```

W tym pliku znajdź linię `uset g_developer "0"` i zamień ją na `uset g_developer "1"` aby włączyć. Podobnie znajdź linię `uset g_console "0"` i zamień ją na `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Uruchom grę ponownie, a teraz będziesz mógł otworzyć konsolę za pomocą jednego z następujących klawiszy, w zależności od układu klawiatury:
```
` LUB ~ LUB \
```

Gdy jesteś gotowy, wpisz w konsoli następującą komendę, aby wyeksportować pakiety serwera:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Dwa pliki zostaną wyeksportowane do folderu `Documents/Euro Truck Simulator 2`: `server_packages.dat` oraz `server_packages.sii`, które zawierają informacje o DLC/modach i będą potrzebne w kolejnym kroku.

## Wgrywanie Pakietów Serwera

Mając już wyeksportowane pakiety serwera dla modów, musisz je wgrać na swój serwer ETS2 przez FTP. Skorzystaj z naszego [poradnika Dostęp FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy z połączeniem się z serwerem.

Gdy będziesz gotowy, przejdź do głównego katalogu **Euro Truck Simulator 2**. Wgraj oba pliki pakietów serwera do tego folderu. Jeśli pliki już istnieją, po prostu je zamień.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Podczas modowania mody muszą być zsynchronizowane między klientem a serwerem. Oznacza to, że jeśli łączysz się z serwerem z modami, których nie masz, zostaniesz poproszony o pobranie brakujących modów.
:::

Na koniec zrestartuj serwer, aby automatycznie aktywować i zainstalować mody. Udało Ci się zainstalować mody na swoim serwerze ETS2.

<InlineVoucher />