---
id: fivem-change-servericon
title: "FiveM: Zmień ikonę na liście serwerów"
description: "Dowiedz się, jak spersonalizować swój serwer FiveM unikalną ikoną PNG 96x96, aby wyróżnić swoją tożsamość serwera → Sprawdź teraz"
sidebar_label: Zmień ikonę serwera
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Chcesz spersonalizować swój serwer i ustawić własną, niestandardową ikonę? To proste! W tym poradniku nauczysz się, jak przygotować obraz i ustawić go jako nową ikonę serwera.

<InlineVoucher />

## Przygotowanie
Aby ustawić niestandardową ikonę serwera dla swojego serwera FiveM, musisz najpierw przygotować plik graficzny o rozmiarze 96x96 pikseli w formacie PNG (z rozszerzeniem `.png`). Polecamy użyć programu do edycji grafiki, takiego jak GIMP, lub skorzystać z narzędzia online do zmiany rozmiaru i konwersji istniejącego obrazu. Gdy obraz spełnia te wymagania, możesz go przesłać i ustawić w konfiguracji serwera.

## Instalacja

### Wgrywanie plików

Kolejnym krokiem jest przesłanie przygotowanego obrazu na swój serwer gier FiveM za pomocą FTP. Jeśli nie znasz FTP, polecamy zapoznać się z naszym [poradnikiem dostępu FTP](gameserver-ftpaccess.md).

Po zalogowaniu się przez FTP przejdź do `gXXXXXX/fivem/TWOJE_FRAMEWORK/` i wgraj tam plik z ikoną serwera. W tym przykładzie używamy domyślnego szablonu CFX. Wgraj plik do folderu swojego frameworka. Pamiętaj, jak nazywa się plik.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Aktywacja

Aby ikona była ładowana przy starcie serwera, musisz teraz ustawić ją w pliku `server.cfg` swojego serwera, pod parametrem `load_server_icon`. Na przykład, jeśli nazwałeś ikonę `zaphosting96x96`, wpis będzie wyglądał tak:

```
# Ładowanie ikony serwera (plik PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Upewnij się, że nazwa pliku obrazu w poleceniu dokładnie odpowiada nazwie przesłanego pliku, łącznie z wielkością liter.
:::

## Podsumowanie

Jeśli wykonałeś wszystkie kroki, nowa ikona serwera powinna pojawić się po następnym restarcie serwera. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />