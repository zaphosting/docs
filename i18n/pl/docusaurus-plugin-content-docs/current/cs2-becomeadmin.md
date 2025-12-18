---
id: cs2-becomeadmin
title: "CS2: Zostań administratorem"
description: "Dowiedz się, jak przydzielać i zarządzać uprawnieniami administratora, aby mieć pełną kontrolę nad serwerem w CS2 → Sprawdź teraz"
sidebar_label: Zostań administratorem
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w rozgrywce. Poniżej znajdziesz wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

## Przygotowanie
Aby korzystać z uprawnień administratora, najpierw trzeba stworzyć odpowiednie podstawy. Domyślnie CS2 nie oferuje kompleksowego zarządzania administracją. Jednak istnieją frameworki stworzone właśnie do tego celu, takie jak CounterStrikeSharp. Framework musi zostać zainstalowany, aby można było go skonfigurować. Jeśli jeszcze go nie zainstalowałeś, koniecznie sprawdź nasz [poradnik Instalacja pluginów](cs2-plugins).

## Definiowanie administratorów

Dodawanie admina odbywa się przez plik konfiguracyjny `admins.json`, który znajdziesz pod ścieżką `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`. Aby zadeklarować nowego administratora, musisz stworzyć nowy wpis. Powinien on zawierać nazwę, identyfikator (identity) oraz flagi (uprawnienia). Nazwę możesz nadać dowolnie, służy ona jedynie jako etykieta/identyfikator. Jako identyfikator "identity" musisz podać SteamID konta Steam. Dodatkowo należy zdefiniować odpowiednie flagi zgodnie z potrzebami.

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

## Definiowanie grup administratorów
Możesz także definiować grupy administratorów. Dzięki temu uprawnienia admina mogą być przypisane przez jego grupę. W ten sposób nie musisz konfigurować uprawnień indywidualnie dla każdego administratora. Grupy definiuje się w pliku konfiguracyjnym `admin_groups.json`, który znajdziesz pod ścieżką `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`.

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

## Definiowanie immunitetu administratora
Możesz przypisać administratorom wartość immunitetu. Jeśli admin lub gracz z niższą wartością immunitetu zaatakuje innego admina lub gracza z wyższą wartością immunitetu, komenda nie zostanie wykonana. Wartość immunitetu definiujesz, dodając klucz `immunity` do każdego admina w pliku `configs/admins.json`.

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Sprawdzenie immunitetu nie jest automatycznie realizowane przez CounterStrikeSharp. To zadanie poszczególnych pluginów, aby obsłużyć i zarządzać tym mechanizmem.
:::

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />