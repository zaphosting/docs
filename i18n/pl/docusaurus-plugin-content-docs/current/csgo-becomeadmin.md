---
id: csgo-becomeadmin
title: "CS:GO: Zostań adminem"
description: "Dowiedz się, jak przydzielić i zarządzać uprawnieniami administratora, aby mieć pełną kontrolę nad serwerem CS:GO z Sourcemod → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przydzielenie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako admin masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez Sourcemod bezpośrednio w grze. Poniżej opisane są wszystkie kroki, które musisz wykonać, aby przydzielić uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

## Przygotowanie

Aby korzystać z uprawnień administratora, najpierw trzeba stworzyć odpowiednie podstawy. Domyślnie CS:GO nie oferuje rozbudowanego zarządzania administracją. Na szczęście istnieją frameworki do tego celu, takie jak Sourcemod. Framework musi być zainstalowany, aby można było go skonfigurować. Jeśli jeszcze go nie masz, koniecznie sprawdź nasz poradnik instalacji pluginów dla CS:GO.

## Definiowanie adminów

Dodawanie adminów odbywa się przez plik konfiguracyjny `admins_simple.ini` lub `admins.cfg`, które znajdziesz pod ścieżką `../csgo/cstrike/addons/sourcemod/configs/`. Do prostych konfiguracji zwykle wystarcza `admins_simple.ini`. Tam możesz zdefiniować adminów po SteamID i przypisać im flagi uprawnień bezpośrednio.

```ini title="admins_simple.ini (Przykład)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

W tym przykładzie pierwszy admin otrzymuje pełne uprawnienia dzięki fladze `z`, natomiast drugi admin ma tylko wybrane uprawnienia.

Jeśli chcesz korzystać z bardziej zaawansowanych konfiguracji, takich jak grupy, immunitet czy hasła, powinieneś użyć pliku `admins.cfg`.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Definiowanie grup adminów

Możesz też zdefiniować grupy adminów. Dzięki temu uprawnienia admina są zarządzane przez przypisaną do niego grupę. Nie musisz wtedy konfigurować uprawnień indywidualnie dla każdego admina. Grupy definiuje się w pliku `admin_groups.cfg`, który znajdziesz pod ścieżką `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Następnie możesz przypisać grupę do admina w pliku `admins.cfg`:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Definiowanie immunitetu admina

Adminom lub grupom można przypisać wartość immunitetu. Jeśli admin z niższym immunitetem spróbuje wykonać komendę na adminie z wyższym immunitetem, komenda nie zadziała. Wartość immunitetu definiujesz, dodając klucz `immunity` do każdego admina w `admins.cfg` lub bezpośrednio w `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Wyższa wartość immunitetu oznacza większą ochronę przed działaniami administracyjnymi innych adminów z niższym immunitetem.

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora na swoim serwerze CS:GO z Sourcemod! Jeśli masz dodatkowe pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />