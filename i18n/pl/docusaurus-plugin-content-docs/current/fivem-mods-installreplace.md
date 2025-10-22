---
id: fivem-mods-installreplace
title: "FiveM: Instalacja zamiennych Carmods na serwerze"
description: "Dowiedz się, jak skonfigurować i wgrać mody na swój serwer FiveM, aby uzyskać niestandardowe doświadczenia w grze → Sprawdź teraz"
sidebar_label: Instalacja Zamiennych Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Połącz się przez FTP
Najpierw połącz się ze swoim serwerem przez FTP, możesz skorzystać z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md).

## Przygotowanie

Teraz stwórz folder na swoje mody w katalogu "resources".

:::info
Folder możesz nazwać dowolnie, byle nie zawierał znaków specjalnych. W naszym przykładzie to "assets".
:::

Teraz w nowo utworzonym folderze "assets" stwórz plik fxmanifest.lua

W tym pliku wpisz następujący tekst:

```
fx_version 'cerulean'
games { 'gta5' }

```

Następnie zapisz i zamknij plik fxmanifest.lua, nie będzie już potrzebny.

W folderze assets stwórz teraz folder "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Wgrywanie modów

Otwórz folder stream, tutaj możesz teraz wgrać wszystkie pliki ytd i yft metodą drag & drop:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Po wgraniu wszystkich modów, wystarczy, że wpiszesz swój resource w pliku server.cfg, który znajdziesz w folderze "server-data" swojego serwera FiveM.

Możesz otworzyć go dowolnym edytorem tekstu, pod wpisami "start" dodaj swoją resource tak:

```
start assets
```

Gotowe! Po restarcie serwera Carmod powinien być już dostępny na serwerze!

<InlineVoucher />