---
id: fivem-esx-spawnpoints
title: "FiveM: Zarządzaj i dostosuj spawnpointy z ESX"
description: "Dowiedz się, jak dostosować i rozszerzyć punkty spawn w frameworku ESX, aby poprawić rozgrywkę → Sprawdź teraz"
sidebar_label: Spawnpointy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz zmienić domyślne spawnpointy lub dodać nowe? Obsługa spawnpointów w **frameworku ESX** jest zdefiniowana w `es_extended`. Poniżej wyjaśnimy, jak możesz je dostosować.

<InlineVoucher />

## Konfiguracja

Punkty spawn są ustawiane w pliku konfiguracyjnym `main.lua` z `es_extended` (../es_extended/shared/config/). Ten plik możesz edytować przez FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, polecamy zajrzeć do naszego [poradnika FTP access](gameserver-ftpaccess.md).

Domyślna konfiguracja punktów spawn wygląda tak:

```
Config.DefaultSpawns = { -- Jeśli chcesz mieć więcej pozycji spawn i wybierać je losowo, odkomentuj zakomentowany kod lub dodaj więcej lokalizacji
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Załóżmy, że chcesz dodać więcej punktów spawn, wtedy musisz dodać kolejny wpis do pliku konfiguracyjnego:

```
Config.DefaultSpawns = { -- Jeśli chcesz mieć więcej pozycji spawn i wybierać je losowo, odkomentuj zakomentowany kod lub dodaj więcej lokalizacji
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NOWY SPAWN
}
```

:::info Jak ustalić współrzędne
Do pobrania aktualnych współrzędnych potrzebujesz odpowiedniego resource'u. W sieci znajdziesz kilka opcji i możesz wybrać tę, która najbardziej Ci odpowiada. :)
:::

## Podsumowanie

Dzięki temu sposobowi udało Ci się zmienić istniejące spawnpointy lub dodać nowe. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />