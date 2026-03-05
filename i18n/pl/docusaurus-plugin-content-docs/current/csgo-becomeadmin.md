---
id: csgo-becomeadmin
title: "CS:GO: Zostań adminem"
description: "Dowiedz się, jak przydzielić i zarządzać uprawnieniami administratora, aby mieć pełną kontrolę nad serwerem w CS:GO → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako admin masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w trakcie rozgrywki. Wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze, opisane są poniżej.  
<InlineVoucher />

## Przygotowanie
Aby korzystać z uprawnień administratora, najpierw trzeba stworzyć odpowiednie podstawy. Domyślnie CS:GO nie oferuje kompleksowego zarządzania administracją. Na szczęście istnieją frameworki do tego celu, takie jak CounterStrikeSharp. Framework musi zostać zainstalowany, aby można było go skonfigurować. Jeśli jeszcze go nie masz, koniecznie sprawdź nasz [poradnik Instalacja pluginów](csgo-plugins).

## Definiowanie adminów

Dodawanie admina odbywa się przez plik konfiguracyjny `admins.json`, który znajdziesz pod ścieżką `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`. Aby zadeklarować nowego admina, musisz stworzyć nowy wpis. Powinien on zawierać nazwę, identyfikator (identity) oraz flagi (uprawnienia). Nazwę możesz nadać dowolnie, służy ona tylko jako placeholder/identyfikator. Jako identyfikator "identity" musisz podać SteamID konta Steam. Dodatkowo należy zdefiniować odpowiednie flagi.

```js title="admins.json (Przykład)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Definiowanie grup adminów
Możesz też zdefiniować grupy adminów. Dzięki temu uprawnienia admina są przypisywane przez jego grupę, co eliminuje konieczność indywidualnej konfiguracji uprawnień dla każdego admina. Grupy definiuje się w pliku konfiguracyjnym admin_groups.json, który znajdziesz pod ścieżką `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`.

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Definiowanie immunitetu admina
Adminom można przypisać wartość immunitetu. Jeśli admin lub gracz z niższą wartością immunitetu zaatakuje innego admina lub gracza z wyższą wartością immunitetu, komenda nie zostanie wykonana. Wartość immunitetu definiujesz, dodając klucz immunity do każdego admina w pliku configs/admins.json.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Sprawdzenie immunitetu nie jest automatycznie wykonywane przez CounterStrikeSharp. To zadanie poszczególnych pluginów, które muszą obsłużyć i zarządzać tym mechanizmem.
:::

## Podsumowanie

Gratulacje, właśnie skonfigurowałeś uprawnienia administratora! Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />