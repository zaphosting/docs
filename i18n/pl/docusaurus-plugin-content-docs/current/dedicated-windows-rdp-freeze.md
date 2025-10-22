---
id: dedicated-windows-rdp-freeze
title: "Serwer dedykowany: Rozłączanie połączenia pulpitu zdalnego"
description: "Dowiedz się, jak naprawić zawieszanie się RDP, poprawiając stabilność połączenia i zapobiegając przerwom w sesji → Sprawdź teraz"
sidebar_label: Rozłączanie połączenia RDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Problem zawieszania się RDP to częste zjawisko, gdzie w zależności od używanego systemu operacyjnego i jego wersji, sesje pulpitu zdalnego niespodziewanie się zawieszają. To może być mega frustrujące i mocno obniżać efektywność pracy. W tym poradniku dowiesz się, co powoduje ten problem i jak go rozwiązać.

<InlineVoucher />

## Główna przyczyna

Różne źródła coraz częściej wskazują, że problem wynika z mniejszej odporności protokołu RDP na utratę pakietów lub uszkodzone pakiety. Dodatkowo, błąd w niektórych wersjach Windows powoduje, że system operacyjny nie potrafi płynnie przełączać się między protokołami TCP i UDP, co jeszcze bardziej pogarsza sytuację.

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