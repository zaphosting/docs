---
id: dedicated-linux-ftp
title: "Serwer dedykowany: Usługa FTP nie działa - Rozwiązywanie problemów"
description: "Dowiedz się, jak rozwiązać problemy z dostępem FTP na swoim VPS, aby przywrócić łączność z serwerem i skutecznie zarządzać swoim serwerem gier lub Teamspeak → Dowiedz się więcej"
sidebar_label: Usługa FTP nie działa
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co zrobić, gdy serwer gier lub serwer Teamspeak nie jest dostępny przez FTP?

:::info
Uwaga: Poniższe kroki działają tylko na Twoim własnym VPS, jeśli zainstalowano interfejs webowy ZAP!
:::

Jeśli utworzony serwer nie jest dostępny przez FTP, w większości przypadków usługa FTP (ProFTPD) nie jest aktywna. W rzadkich przypadkach może to być spowodowane błędną konfiguracją lub zajętym portem, czyli port FTP 21 jest używany/zajęty przez inny program.

<InlineVoucher />

## Sprawdź problem z FTP dokładniej:

### Sprawdź dostępność
Możesz to łatwo zrobić za pomocą przeglądarki FTP w panelu głównym. Kliknij na „Przeglądarka FTP” w menu pod Narzędzia danego serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Następnie kliknij raz przycisk „Połączenie bezpośrednie”.

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Prawdopodobnie zobaczysz teraz taki obrazek:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Skoro połączenie przez WebFTP lub narzędzie FTP nie jest możliwe, musisz przyjrzeć się bliżej usłudze FTP na VPS.

### Sprawdź status ProFTPD

W tym celu łączysz się z serwerem przez SSH / Konsolę i wpisujesz komendę „service proftpd status”. Status zostanie odczytany i wyświetlony:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

Widać, że status pokazuje „dead”, czyli usługa jest offline i niedostępna.

### Uruchom ponownie usługę FTP
Usługę FTP można ponownie uruchomić poleceniem:

```
service proftpd start
```

Jeśli po wykonaniu komendy nie ma żadnej odpowiedzi, usługa zazwyczaj jest ponownie online/dostępna.

Całość możesz zweryfikować ponownie komendą „service proftpd status”. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Skoro status jest teraz ponownie „active”, a nie „dead”, możesz spróbować ponownie połączenia przez narzędzie FTP i WebFTP.

### Sprawdź połączenie ponownie
Teraz powinieneś móc nawiązać połączenie i przeglądać swoje dane.

### Problem rozwiązany
✅ Usługa FTP (ProFTPD) jest teraz uruchomiona/aktywna i nic nie stoi na przeszkodzie wymianie danych!

<InlineVoucher />