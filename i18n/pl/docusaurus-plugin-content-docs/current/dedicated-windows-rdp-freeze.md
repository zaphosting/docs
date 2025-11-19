---
id: dedicated-windows-rdp-freeze
title: "Serwer dedykowany: Zrywanie połączenia pulpitu zdalnego"
description: "Dowiedz się, jak naprawić zawieszanie się RDP, poprawiając stabilność połączenia i zapobiegając przerwom w sesji → Sprawdź teraz"
sidebar_label: Zrywanie połączenia RDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Problem zawieszania się RDP to częste zjawisko, gdzie w zależności od używanego systemu operacyjnego i jego wersji, sesje pulpitu zdalnego niespodziewanie się zawieszają. Ta usterka może być frustrująca i znacznie obniżać efektywność pracy. W tym dokumencie dowiesz się więcej o przyczynach problemu oraz jak go naprawić.

## Główna przyczyna

Różne źródła coraz częściej wskazują, że problem wynika ze zmniejszonej odporności protokołu RDP na utratę pakietów lub uszkodzone pakiety. Dodatkowo, błąd w niektórych wersjach Windows może powodować, że system operacyjny nie przełącza się płynnie między protokołami TCP i UDP, co jeszcze bardziej pogarsza sytuację.

## Sposób rozwiązania

Aby rozwiązać problem, możesz wyłączyć protokół UDP dla połączenia RDP i zamiast tego użyć stabilniejszego protokołu TCP. W tym celu otwórz Wiersz polecenia (cmd.exe) jako administrator na swoim komputerze i wykonaj następujące polecenie:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Po wykonaniu tego polecenia Twój komputer będzie korzystał z protokołu TCP zamiast UDP podczas sesji RDP. Może to poprawić stabilność połączenia, szczególnie w sieciach o niestabilnym łączu lub dużej utracie pakietów.

:::info 
**Potwierdź wpisanie** klawiszem Enter i **zrestartuj komputer**, aby zmiana została zastosowana i zaczęła działać.
:::
