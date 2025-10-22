---
id: vserver-windows-rdp-freeze
title: "VPS: Zrywanie połączenia pulpitu zdalnego"
description: "Dowiedz się, jak naprawić problemy z zawieszaniem się RDP, poprawiając stabilność połączenia i zwiększając wydajność pulpitu zdalnego → Sprawdź teraz"
sidebar_label: Zrywanie połączenia RDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Problem zawieszania się RDP to częste zjawisko, gdzie w zależności od używanego systemu operacyjnego i jego wersji, sesje pulpitu zdalnego niespodziewanie się zawieszają. To może być mega frustrujące i znacznie obniżać produktywność. W tym poradniku dowiesz się, co powoduje ten problem i jak go rozwiązać.

<InlineVoucher />

## Główna przyczyna

Różne źródła coraz częściej wskazują, że problem wynika z mniejszej odporności protokołu RDP na utratę pakietów lub uszkodzone pakiety. Dodatkowo, błąd w niektórych wersjach Windows może powodować, że system operacyjny nie przełącza się płynnie między protokołami TCP i UDP, co jeszcze bardziej pogarsza sytuację.

## Jak to naprawić

Aby rozwiązać problem, możesz wyłączyć protokół UDP dla połączenia RDP i zamiast tego użyć stabilniejszego protokołu TCP. W tym celu otwórz Wiersz polecenia (cmd.exe) jako administrator na swoim komputerze i wykonaj następujące polecenie:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Po wykonaniu tego polecenia Twój komputer będzie korzystał z protokołu TCP zamiast UDP podczas sesji RDP. To może poprawić stabilność połączenia, zwłaszcza w sieciach o niestabilnym łączu lub dużej utracie pakietów.

:::info 
**Potwierdź wpisanie** klawiszem Enter i **zrestartuj komputer**, aby zmiana została zastosowana i zaczęła działać.
:::

<InlineVoucher />