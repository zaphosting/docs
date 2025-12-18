---
id: fivem-esx-changemoneyicon
title: "FiveM: Zmień ikonę pieniędzy"
description: "Dowiedz się, jak spersonalizować ikonę pieniędzy na swoim serwerze, aby uzyskać unikalne doświadczenie w grze → Sprawdź teraz"
sidebar_label: Zmień ikonę pieniędzy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, poprawne lub istotne. Został zarchiwizowany z następujących powodów:

**Powód**: Metoda realizacji dotyczy przestarzałej wersji ESX. To podejście nie działa w obecnej wersji ESX, ponieważ struktura uległa zmianie.
::::



<InlineVoucher />

## Połącz się przez FTP

Najpierw musisz skonfigurować [dostęp przez FTP](gameserver-ftpaccess.md).


Po skonfigurowaniu możesz połączyć się i otworzyć folder serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Tutaj otwieramy plik `server.cfg` w folderze `server-data`.

## Edytuj konfigurację

Teraz dodajemy poniższą linię nad `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Możemy teraz zamienić znak $ na własną ikonę.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Po zapisaniu pliku i restarcie serwera ikona pieniędzy zostanie zmieniona w grze.

<InlineVoucher />