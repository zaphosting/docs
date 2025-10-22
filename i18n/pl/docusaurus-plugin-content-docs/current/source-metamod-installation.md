---
id: source-metamod-installation
title: Instalacja Source Mod i Meta Mod na serwerze
description: "Dowiedz się, jak wzbogacić swój serwer gier na silniku Source o Source- i Metamod dla zaawansowanej personalizacji i administracji → Sprawdź teraz"
sidebar_label: Instalacja
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Co to w ogóle jest SM i MM?

Source- i Metamod to dwie rozszerzenia do Half Life 2, które pozwalają jeszcze bardziej spersonalizować serwer gier na silniku Source (np. CS: S, CS: GO, DoD: S, TF2 itd.). Dzięki nim możesz korzystać z pluginów i mieć rozszerzoną administrację swojego serwera.

<InlineVoucher />

## Instalacja SM / MM

### Pobierz pliki

Na początek potrzebne są same rozszerzenia. Ważne, aby zawsze korzystać z najnowszych wersji (**stable**), żeby działały poprawnie i były kompatybilne. Najnowsze wersje pobierzesz z tych stron:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Serwery gier na silniku Source w ZAP-Hosting zazwyczaj działają na systemie Linux. Dlatego potrzebujesz wersji rozszerzeń na Linuxa.
:::

### Rozpakuj pliki

Po pobraniu obu rozszerzeń otrzymasz dwa spakowane pliki (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar), które musisz rozpakować przed wysłaniem na serwer. Możesz użyć Winrar, 7zip lub podobnych programów.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Po rozpakowaniu otrzymasz foldery addons i cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Wyślij pliki

Gdy masz już rozpakowane pliki, zaczyna się właściwa instalacja. Musisz połączyć się z serwerem przez FTP, aby przesłać foldery rozszerzeń.

Pliki muszą trafić do katalogu głównego. Katalog główny znajduje się w strukturze folderów:

| Gra | Folder  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

Struktura folderów powinna wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## Sprawdź instalację SM / MM

Są dwa sposoby, żeby sprawdzić, czy rozszerzenia zostały poprawnie zainstalowane:

1. Konsola w grze
2. Konsola zdalna (HLSW - RCON)

### Sprawdzenie wersji przez komendy

Wykonaj te kroki, żeby sprawdzić wersję na swoim serwerze:

1. Połącz się z serwerem w grze
2. Otwórz konsolę i wpisz komendy:

```
sm version
meta version
```

Wynik powinien wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Sprawdzenie wersji przez RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

Wykonaj te kroki, żeby sprawdzić wersję na swoim serwerze:

1. Wpisz adres IP u góry w polu IP / Port
2. Przejdź do Rcon Configuration poniżej
3. Wpisz swoje hasło Rcon w polu Rcon password
4. Otwórz konsolę i wpisz komendy:

```
sm version
meta version
```

Wynik będzie wyglądał mniej więcej tak:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Pobierz HLSW: http://www.hlsw.net/hlsw/download/

<InlineVoucher />