---
id: arma3-missionfile
title: "Arma 3: Wgraj własny plik misji"
description: "Dowiedz się, jak wgrać i załadować własne pliki misji na swoim serwerze Arma 3, aby uzyskać spersonalizowaną rozgrywkę → Sprawdź teraz"
sidebar_label: Wgraj własny plik misji
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wgrywanie pliku misji

Aby wgrać własny plik misji, musisz najpierw połączyć się z serwerem przez FTP: [Dostęp przez FTP](gameserver-ftpaccess.md).  
Następnie wgraj plik misji do katalogu **mpmissions**, który znajdziesz pod ścieżką **/gxxxxxx/arma3/**.  
W tym przykładzie wgrywamy plik misji **King_of_the_hill.Altis** na nasz serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Ładowanie pliku misji na serwerze

Aby załadować plik misji na serwerze, przejdź do panelu swojego serwera Arma 3 i kliknij zakładkę **Configs** w menu po lewej stronie:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Tam edytuj plik **server.cfg** i wpisz nazwę swojego pliku misji tak, jak pokazano na obrazku:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Po tym kliknij **Save** i możesz uruchomić serwer. Nowy plik misji zostanie załadowany.

<InlineVoucher />