---
id: rust-connectrcon
title: "Rust: Łączenie się z serwerem przez RCON"
description: "Dowiedz się, jak zdalnie zarządzać swoim serwerem za pomocą RCON, aby efektywnie wykonywać komendy i kontrolować serwer → Sprawdź teraz"
sidebar_label: Połącz przez RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co to jest RCON?

RCON to protokół umożliwiający wykonywanie komend na serwerze bez bezpośredniego dostępu do konsoli.

<InlineVoucher />

### Włącz WebRCON

Zanim się połączysz, musisz upewnić się, że Web RCON jest włączony.  
Aby to zrobić, przejdź do zakładki **Ustawienia**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Następnie włącz go bezpośrednio na tej stronie.  
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
Wymagany będzie restart serwera, aby zmiany zaczęły działać. 
:::

### Zainstaluj program RCON

Do połączenia potrzebujesz programu RCON. Jest ich kilka dostępnych, które możesz wykorzystać.  
Na potrzeby tego poradnika i jako rekomendację, możesz pobrać [RustAdmin](https://www.rustadmin.com/).

Możesz go zainstalować za pomocą przycisku bezpośrednio na ich stronie.  
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Połącz się przez RCON

Po otwarciu WebAdmin, kliknij na **Server** u góry, a następnie wybierz **Connect**.

:::info
Twój serwer musi być w pełni ONLINE, aby RCON mógł się z nim połączyć. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Zostaniesz przekierowany do strony konfiguracji.  
Tutaj wpisz dane swojego serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
TIP: Port RCON i hasło RCON znajdziesz w zakładce **Ustawienia**, gdzie włączałeś WebRCON. 
:::

Po wpisaniu danych, zapisz konfigurację.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Następnie kliknij Server -> Connect.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Jeśli połączenie powiedzie się, na dole pojawi się napis **Connected** na zielono.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

Teraz możesz zarządzać swoim serwerem przez RCON! :) 


<InlineVoucher />