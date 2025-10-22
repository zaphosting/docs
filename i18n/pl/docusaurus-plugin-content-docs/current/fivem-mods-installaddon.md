---
id: fivem-mods-installaddon
title: "FiveM: Instalacja Dodatkowych Carmods na Serwerze"
description: "Dowiedz się, jak łatwo pobrać i przekonwertować mody samochodowe do FiveM, aby wzbogacić swoją rozgrywkę dzięki krok po kroku → Sprawdź teraz"
sidebar_label: Instalacja Dodatkowych Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Połącz się przez FTP

Najpierw połącz się ze swoim serwerem przez FTP, możesz skorzystać z naszego [Dostępu przez FTP](gameserver-ftpaccess.md).

## Przygotowanie

Do tego poradnika użyjemy narzędzia [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), które znacznie upraszcza cały proces. Pobierz z sekcji "Releases" foldery "NConvert.zip" oraz "rpf2fivem.zip":

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Najpierw rozpakuj rpf2fivem do pustego folderu:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Następnie otwórz plik NConvert.zip i skopiuj folder "NConvert" do tego samego folderu:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Teraz możesz uruchomić `rpf2fivem.exe`!

## Pobieranie Modów

Aby zainstalować mody przez rpf2fivem, musimy dodać do niego bezpośrednie linki, np. z gta5-mods.com. Wybierz po prostu carmod, który chcesz mieć i kliknij "Download".

Następnie kliknij prawym przyciskiem myszy na przycisk pobierania i wybierz "Kopiuj adres linku", który wklejamy w lewym górnym rogu rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Tutaj możesz wpisać własną nazwę zasobu i kliknąć "Add to queue".

Jeśli chcesz pobrać więcej modów, dodaj je w ten sam sposób – możesz instalować kilka carmods jednocześnie.

## Konwersja Modów

Mając listę modów, po prostu kliknij przycisk "Start".

:::info
Uwaga: zawsze zaznacz opcję 'compress/downsize textures', aby uniknąć błędów tekstur Carmods w FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Teraz carmody zostaną pobrane i przygotowane pod FiveM.

## Wgrywanie zasobów

Po zakończeniu działania rpf2fivem, carmody znajdziesz w folderze "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Możesz je teraz po prostu wgrać przez [Instalację zasobów](fivem-installresources.md). W folderze rpf2fivem powstaje też plik `servercfg.txt`, który zawiera wpisy do bezpośredniego dodania carmods do server.cfg – wystarczy je skopiować do swojego server.cfg.

Gotowe! Carmody są teraz zainstalowane na Twoim serwerze i po restarcie serwera możesz z nich korzystać.

<InlineVoucher />