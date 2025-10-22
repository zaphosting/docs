---
id: valheim-savegame
title: "Valheim: Zarządzanie savegame'ami na serwerach"
description: "Dowiedz się, jak efektywnie zarządzać, pobierać i przywracać swoje savegame'y w Valheim za pomocą Savegame-Managera → Sprawdź teraz"
sidebar_label: Zarządzanie Savegame'ami
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Pobieranie Savegame'ów

:::info
Uwaga: Przed pobraniem savegame'a musisz zatrzymać serwer, aby zapisać aktywny savegame. Po zatrzymaniu serwera savegame pojawi się po odświeżeniu strony.
:::

Aby pobrać swój savegame, możesz skorzystać z `Savegame-Managera` w panelu administracyjnym:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Tutaj możesz łatwo pobrać swój savegame, klikając zielony przycisk "Download":

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Pamiętaj, że musisz pobrać zarówno pliki `.db`, **jak i** `.fwl`.
:::

Gotowe! Teraz możesz użyć kopii zapasowej do innych celów lub wgrać ją ponownie później.

## Wgrywanie i Aktywacja Savegame'a

Aby wgrać własne savegame'y, najpierw otwieramy nasz savegame manager.

Teraz możemy wgrać savegame metodą drag&drop, co powinno wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Upewnij się, że Twój savegame ma taką samą nazwę, jaką nadała mu gra.
:::

W naszym przypadku pliki kopii zapasowej nazywają się `380622.fwl` i `380622.db`.

Następnie wpisujemy nazwę kopii zapasowej powyżej w polu `Savegame (worlds)`:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

W sekcji `ZAP Backups` szukamy naszego savegame'a:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Teraz wystarczy kliknąć żółty przycisk "Restore" przy obu plikach i potwierdzić operację, wtedy nasz savegame zostanie załadowany.

Po załadowaniu pojawi się komunikat w prawym dolnym rogu:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Teraz serwer można uruchomić, a wgrany savegame będzie aktywny na serwerze.

## Autosave'y

Niestety Valheim obecnie nie wspiera autosave'ów. Aby zapisać postęp gry, serwer musi zostać zatrzymany. Możesz użyć Restart Planera w panelu administracyjnym, aby automatycznie restartować serwer o określonych godzinach:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Tutaj możesz dodać czas restartu dziennego lub tygodniowego:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Po zapisaniu restartu możesz dodać więcej niż jeden restart dzienny lub tygodniowy.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Gotowe! Twój serwer będzie teraz restartował się o wyznaczonych godzinach, a savegame będzie zapisywany podczas tych restartów.

<InlineVoucher />