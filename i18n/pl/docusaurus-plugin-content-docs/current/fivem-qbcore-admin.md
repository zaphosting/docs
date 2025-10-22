---
id: fivem-qbcore-admin
title: "FiveM: Zostań adminem z QBCore"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i lepsze zarządzanie w grze → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w niej. Wszystkie kroki, które musisz wykonać, aby nadać uprawnienia administratora na swoim serwerze, opisane są poniżej.

<InlineVoucher />

## Konfiguracja

Konfiguracja uprawnień administratora odbywa się poprzez plik konfiguracyjny ``server.cfg``. W tym celu zaloguj się do panelu txAdmin i otwórz Edytor CFG. Następnie przewiń do końca pliku konfiguracyjnego, aż znajdziesz sekcję `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore obsługuje kilka identyfikatorów graczy, w tym FiveM ID (`identifier.fivem:`), licencje Rockstar (`identifier.license:`) oraz Discord ID (`identifier.discord:`). Te identyfikatory możesz pobrać bezpośrednio z panelu txAdmin. W ten sposób możesz zdecydować, czy chcesz nadać im status GOD, Admin lub Mod.

Gdy już zdobędziesz identyfikatory i zdecydujesz, jaki status chcesz ustawić, możesz przypisać indywidualne uprawnienia graczom, dodając je do pliku `server.cfg`. W tym celu dodaj jedną z trzech dostępnych opcji jako nowy wpis w sekcji uprawnień:

```
add_principal identifier.license:xxxxxx qbcore.god   # Nazwa Gracza
add_principal identifier.license:xxxxxx qbcore.admin # Nazwa Gracza
add_principal identifier.license:xxxxxx qbcore.mod   # Nazwa Gracza
```

Przykładowy efekt końcowy może wyglądać tak:

```
## Permissions ##
add_ace group.admin command allow # zezwól na wszystkie komendy
# Deployer Note: ten główny admin nie ma identyfikatorów do automatycznego dodania.
# add_principal identifier.discord:111111111111111111 group.admin #przykład

add_principal identifier.fivem:16219250 qbcore.admin # Nazwa Gracza
```

## Podsumowanie

Jeśli poprawnie wykonałeś wszystkie kroki, jesteś teraz adminem na swoim własnym serwerze. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />