---
id: fivem-esx-disableinventory
title: "FiveM: Wyłącz inventory (F2)"
description: "Dowiedz się, jak wyłączyć domyślne inventory w ESX, aby spersonalizować doświadczenie na swoim serwerze → Sprawdź teraz"
sidebar_label: Dezaktywuj Inventory (F2)
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, jeśli nie są już aktualne, są niepoprawne lub nieaktualne. Został zarchiwizowany z następujących powodów:

**Powód**: Metoda realizacji dotyczy przestarzałej wersji ESX. To podejście nie działa w obecnej wersji ESX, ponieważ struktura uległa zmianie. 
::::

<InlineVoucher />

## Połącz się przez FTP

Zanim wyłączysz inventory, musisz skonfigurować [dostęp przez FTP](gameserver-ftpaccess.md).

Po skonfigurowaniu możesz połączyć się i otworzyć folder serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/GWPAB639GoYcybT/preview)


## Wprowadź zmiany

Teraz otwórz ścieżkę `server-data/resources/[esx]`, gdzie znajdziesz folder es_extended:

![](https://screensaver01.zap-hosting.com/index.php/s/6HLxaYmZgsQ5Qc5/preview)

W tym folderze otwórz plik `config.lua`.

Po otwarciu pliku w edytorze tekstu, znajdź następujący kod:

```Lua
Config.EnableDefaultInventory   = true -- Wyświetl domyślne Inventory ( F2 )
```

Zamień go na:

```Lua
Config.EnableDefaultInventory   = false
```


Zapisz plik i zrestartuj serwer. Po dołączeniu do serwera inventory nie będzie już dostępne.

<InlineVoucher />