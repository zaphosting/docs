---
id: fivem-installeup
title: "FiveM: Instalacja EUP (Emergency Uniform Pack)"
description: "Dowiedz się, jak skonfigurować Emergency Uniform Pack dla postaci w trybie free mode z wymaganą subskrypcją Element Club → Sprawdź teraz"
sidebar_label: Instalacja EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

**EUP**, czyli Emergency Uniform Pack, pozwala na posiadanie mundurów służb ratunkowych na postaci w trybie free mode. Poniżej znajdziesz szczegółowe wyjaśnienie, jak dokładnie możesz to zainstalować.

:::warning Wymagana subskrypcja Element Club
Aby zainstalować i korzystać z EUP, potrzebna jest subskrypcja Element Club. Zdobądź swoją subskrypcję na [portalu Cfx.re](https://portal.cfx.re/subscriptions/element-club)! 
:::

<InlineVoucher />



## Przygotowanie

Aby rozpocząć instalację **EUP**, najpierw musisz wykonać kilka przygotowań. Pobierz i rozpakuj na swoim komputerze [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) oraz [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Po pobraniu plików powinieneś mieć następujące archiwa ZIP:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Teraz rozpakuj te pliki lokalnie na swoim komputerze. Powinny one zawierać plik `__resource.lua` lub `fxmanifest.lua` oraz pliki/skrypty.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
W przypadku NativeUI musisz najpierw otworzyć folder "NativeUI-master", tam znajdziesz właściwe skrypty. Jeśli ich tam nie ma, mogą znajdować się w podfolderze o tej samej nazwie.
:::

## Instalacja
Teraz możesz rozpocząć instalację. Połącz się ze swoim serwerem przez [FTP](gameserver-ftpaccess.md) i wgraj pliki. Pliki/foldery muszą zostać przesłane do katalogu `resources`. Znajdziesz go w strukturze katalogów:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Konfiguracja

Aby zainstalowane zasoby zostały załadowane, musisz dodać je do pliku konfiguracyjnego serwera. Zaloguj się do panelu txAdmin i przejdź do edytora CFG.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Podsumowanie

Pomyślnie zainstalowałeś EUP na swoim serwerze FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />