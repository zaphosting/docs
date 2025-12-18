---
id: fivem-qbcore-spawnpoints
title: "FiveM: Zarządzaj i dostosuj punkty spawn z QbCore"
description: "Dowiedz się, jak dostosować i dodać punkty spawn w frameworku QBCore, aby ulepszyć rozgrywkę → Sprawdź teraz"
sidebar_label: Punkty spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz zmienić domyślne punkty spawn lub dodać nowe? Obsługa punktów spawn w **frameworku QBCore** jest realizowana przez zasób `qb-spawn`. Poniżej wyjaśnimy, jak możesz je dostosować.

<InlineVoucher />

## Konfiguracja

Punkty spawn są ustawiane w pliku konfiguracyjnym `config.lua` zasobu `qb-spawn`. Ten plik możesz edytować przez FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, polecamy zajrzeć do [poradnika o dostępie FTP](gameserver-ftpaccess.md).

Domyślna konfiguracja punktów spawn wygląda tak:

```
QB.Spawns = {
    ["legion"] = { -- Indeks w tabeli
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Miejsce, gdzie gracz się pojawia
        location = "legion", -- tak javascript rozpoznaje wybrany punkt
        label = "Legion Square", -- Co gracz widzi w menu
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Załóżmy, że chcesz dodać więcej punktów spawn, wtedy musisz dodać kolejny wpis do pliku konfiguracyjnego:

```
["new_spawn_name"] = { -- Musi być unikalne
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordynaty, gdzie pojawi się gracz
    location = "new_spawn_name", -- Musi być unikalne
    label = "New spawn name", -- Etykieta, która pojawi się w menu wyboru
},
```

:::info Jak ustalić koordynaty
Do pobrania aktualnych koordynat potrzebujesz odpowiedniego zasobu. W sieci znajdziesz ich sporo i możesz wybrać ten, który najbardziej Ci odpowiada. :)
:::

Efekt końcowy będzie wyglądał tak:

```
    QB.Spawns = {
    
        ["legion"] = { -- Indeks w tabeli
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Miejsce, gdzie gracz się pojawia
            location = "legion", -- tak javascript rozpoznaje wybrany punkt
            label = "Legion Square", -- Co gracz widzi w menu
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Musi być unikalne
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Koordynaty, gdzie pojawi się gracz
        location = "new_spawn_name", -- Musi być unikalne
        label = "New spawn name", -- Etykieta, która pojawi się w menu wyboru
         },
    }
```




## Podsumowanie

Dzięki temu poradnikowi udało Ci się zmienić istniejące punkty spawn lub dodać nowe. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />