---
id: vserver-linux-ftp
title: "VPS: Usługa FTP nie działa - Rozwiązywanie problemów"
description: "Dowiedz się, jak rozwiązać problemy i przywrócić dostęp FTP na swoim VPS, gdy serwery gier lub Teamspeak są niedostępne → Sprawdź teraz"
sidebar_label: Usługa FTP nie działa
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Co zrobić, gdy serwer gier lub serwer Teamspeak nie jest dostępny przez FTP?

:::info
Uwaga: Poniższe kroki działają tylko na Twoim własnym VPS, jeśli został zainstalowany interfejs webowy ZAP!
:::

Jeśli utworzony serwer nie jest dostępny przez FTP, w większości przypadków usługa FTP (ProFTPD) nie jest aktywna. W rzadkich przypadkach może to być spowodowane błędną konfiguracją lub zajętym portem, czyli port FTP 21 jest używany/zajęty przez inny program.

## Sprawdź problem z FTP dokładniej:

### Sprawdź dostępność
Możesz to łatwo zrobić za pomocą przeglądarki FTP w panelu głównym. Kliknij na „Przeglądarka FTP” w menu pod Narzędzia danego serwera

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Następnie kliknij raz przycisk „Połączenie bezpośrednie”.

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Prawdopodobnie zobaczysz teraz taki obraz:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Skoro połączenie przez WebFTP lub narzędzie FTP nie jest możliwe, musisz przyjrzeć się bliżej usłudze FTP na VPS.

### Sprawdź status ProFTPD

W tym celu łączysz się z serwerem przez SSH / Konsolę i wpisujesz polecenie „service proftpd status”. Status zostanie odczytany i wyświetlony:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Widać, że status pokazuje „dead”, czyli usługa jest offline i niedostępna.

### Uruchom ponownie usługę FTP
Usługę FTP można uruchomić ponownie poleceniem:

```
service proftpd start
```

Jeśli po wykonaniu polecenia nie pojawi się żadna odpowiedź, usługa zwykle jest już online/dostępna.

Całość możesz zweryfikować ponownie poleceniem „service proftpd status”. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Skoro status jest teraz ponownie „active”, a nie „dead”, możesz spróbować połączenia FTP ponownie za pomocą narzędzia FTP i WebFTP.

### Sprawdź połączenie jeszcze raz
Teraz powinieneś móc nawiązać połączenie i przeglądać swoje dane.

### Problem rozwiązany
✅ Usługa FTP (ProFTPD) jest teraz uruchomiona/aktywna i nic nie stoi na przeszkodzie, by wymieniać dane!

<InlineVoucher />