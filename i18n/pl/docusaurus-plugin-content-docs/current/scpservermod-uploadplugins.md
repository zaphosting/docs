---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Instalacja pluginów na serwerze"
description: "Dowiedz się, jak zainstalować i skonfigurować pluginy SMOD na swoim serwerze SCP, aby wzbogacić rozgrywkę i funkcje serwera → Sprawdź teraz"
sidebar_label: Instalacja Pluginów
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archiwalny poradnik
Ten dokument został zarchiwizowany. Dokumenty są archiwizowane, gdy nie są już aktualne, poprawne lub istotne. Został zarchiwizowany z następujących powodów:

Powód: Rozszerzenie Servermod dla SCP zostało porzucone i nie będzie już utrzymywane. Zalecamy przejście na **[SCP:EXILED](exiled-plugins.md)**. 
::::

<InlineVoucher />

## Połącz się przez FTP

Zanim zainstalujesz pluginy, musisz skonfigurować [dostęp przez FTP](gameserver-ftpaccess.md).

Po skonfigurowaniu możesz połączyć się i otworzyć następujący folder na serwerze:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Instalacja pluginów

### Znajdowanie pluginów

Na początek musisz znaleźć dostępne pluginy kompatybilne z SMOD.

Najlepszym miejscem, aby je zdobyć, jest ich oficjalny [Discord](https://discord.gg/T9aurNf).

:::info
To tylko jedno z miejsc, gdzie możesz je znaleźć. Pluginy mogą być dostępne także gdzie indziej. Ważne, aby upewnić się, że są kompatybilne z Twoją wersją SMOD. 
:::

W tym przykładzie pobierzemy następujący plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Wgrywanie pluginów

Gdy masz już wybrane pluginy, wgraj je na FTP swojego serwera. Możesz to zrobić przez **przeciągnij & upuść** do folderu **sm_plugins**.

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Uwaga: Po każdej instalacji pluginu musisz **zrestartować serwer**, aby zmiany zaczęły działać.
:::

### Konfiguracja pluginów

W zależności od pluginu, może być konieczne dodanie różnych ustawień do pliku config_gameplay.txt.

W naszym przykładzie plugin definiuje następujące konfiguracje.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Aby je dodać, edytujemy plik config_gameplay.txt.

Znajdziesz go w zakładce **Konfiguracje** po lewej stronie.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Następnie wybieramy **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Konfiguracje można umieścić praktycznie gdziekolwiek. Dla najlepszej organizacji zalecamy dodać je pod sekcją '#Misc gameplay settings' w pliku config_gameplay.txt.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
UWAGA: Konfiguracje różnią się w zależności od pluginu. Zawsze dokładnie czytaj instrukcje dołączone do pluginu, aby poprawnie dodać ustawienia.
:::

Po zdefiniowaniu konfiguracji zrestartuj (lub uruchom) serwer i sprawdź działanie bezpośrednio w grze!

<InlineVoucher />