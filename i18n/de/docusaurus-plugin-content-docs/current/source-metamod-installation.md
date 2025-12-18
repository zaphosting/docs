---
id: source-metamod-installation
title: Source Mod und Meta Mod auf dem Server installieren
description: "Entdecke, wie du deinen Source Engine Gameserver mit Source- und Metamod für erweiterte Anpassungen und Administration auf das nächste Level bringst → Jetzt mehr erfahren"
sidebar_label: Installation
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Was sind SM und MM eigentlich?

Source- und Metamod sind zwei Erweiterungen für Half Life 2, die es ermöglichen, einen Source Engine Gameserver (z.B. CS: S, CS: GO, DoD: S, TF2, etc.) noch individueller als sonst zu gestalten. Dazu gehört zum Beispiel die Nutzung von Plugins und eine erweiterte Administration deines Servers.

<InlineVoucher />

## SM / MM Installation

### Dateien herunterladen

Zuerst brauchst du die eigentlichen Erweiterungen. Wichtig ist, immer die neuesten Versionen (**stable**) zu verwenden, damit sie voll funktionsfähig und kompatibel bleiben. Die aktuellsten Versionen kannst du hier herunterladen:

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)
- 
![](https://screensaver01.zap-hosting.com/index.php/s/zb6LsPbnAYJSHap/preview)

:::info
Source Engine Gameserver bei ZAP-Hosting laufen in der Regel unter Linux. Deshalb benötigst du die Linux-Version der Erweiterungen.
:::

### Dateien entpacken

Nach dem Download der beiden Erweiterungen erhältst du zwei gepackte Dateien (sourcemod-XXX-gitXXXX-linux.tar / mmsource-XXX-gitXXX-linux.tar), die vor dem Hochladen entpackt werden müssen. Dafür kannst du Winrar, 7zip oder ähnliche Programme nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/fw8r376kqKr5rgL/preview)

Aus den entpackten Dateien bekommst du die Ordner addons und cfg:

![](https://screensaver01.zap-hosting.com/index.php/s/oJazFjaDWCjt9oP/preview)

### Dateien hochladen

Wenn die obigen Schritte erledigt sind, startet die eigentliche Installation. Dafür verbinden wir uns per FTP mit dem Server, um die Ordner der Erweiterungen hochzuladen.

Die Dateien müssen in das Hauptverzeichnis hochgeladen werden. Das Hauptverzeichnis findest du je nach Spiel unter folgender Ordnerstruktur:

| Spiel | Ordner  |
| :-----: |:-------------:| 
| CS: Global Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/g384YWYRN8TaPRx/preview)

Die Ordnerstruktur sollte danach so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/JTwTwzeXQdZrYY7/preview)

## SM / MM Installation überprüfen

Es gibt zwei Möglichkeiten, um zu checken, ob die Erweiterungen korrekt installiert wurden:

1. Spielkonsole
2. Remote Console (HLSW - RCON)

### Version abfragen per Befehl

So kannst du die Version auf deinem Server prüfen:

1. Verbinde dich im Spiel mit dem Server
2. Öffne die Konsole und gib folgenden Befehl ein:

```
sm version
meta version
```

Das Ergebnis sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/qdNywS6PLdJkrnP/preview)

### 📖 Version abfragen per RCON

![](https://screensaver01.zap-hosting.com/index.php/s/jZZ6FFxksJgcCSf/preview)

So kannst du die Version über RCON prüfen:

1. Gib oben unter IP / Port die IP-Adresse ein
2. Scrolle runter zu Rcon Configuration
3. Trage dein Rcon-Passwort unter Rcon password ein
4. Öffne die Konsole und gib folgenden Befehl ein:

```
sm version
meta version
```

Das Ergebnis sieht dann so aus:

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

HLSW herunterladen: http://www.hlsw.net/hlsw/download/

<InlineVoucher />