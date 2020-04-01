---
id: source_metamod_installation
title: Installation
sidebar_label: Installation
---

## ❓ Was ist SM und MM überhaupt?

Source- und Metamod sind zwei Half Life 2 Erweiterungen, welches es ermöglichen einen Source-Engine Gameserver (z.B. CS:S CS:GO, DoD:S, TF2, etc.) noch mehr als üblich zu individualisieren. Dazu gehört zum Beispiel die Nutzung von Plugins und eine erweitere Administration deines Servers.

## 🔧 SM / MM Installation

### ⏬ Download der Dateien

Zunächst einmal werden die eigentlichen Erweiterungen benötigt. Hierbei ist es wichtig immer die neusten Versionen (**stable**) zu benutzen, damit diese auch noch voll funktionsfähig bzw. kompatibel sind. Die neusten Versionen können unter den folgenden Webseiten heruntergeladen werden: 

- [Metamod](https://www.sourcemm.net/downloads.php?branch=stable)
- [Sourcemod](https://www.sourcemod.net/downloads.php?branch=stable)

![](https://screensaver01.zap-hosting.com/index.php/s/8XEpA3Gi4kqrdn2/preview)

> Source-Engine Gameserver laufen bei ZAP-Hosting in der Regel unter einem Linux Betriebssystem. Dementsprechend wird die Linux Version der Erweiterungen benötigt.

### 📦 Entpacken der Dateien

Beim Herunterladen der beiden Erweiterungen erhält man zunächst zwei gepackte Dateien (sourcemod-X.X.X-gitXXXX-linux.tar / mmsource-X.X.X-gitXXX-linux.tar), welche vor dem Hochladen noch entpackt werden müssen. Dafür kann man entweder Winrar, 7zip oder ähnliche Programme benutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/oGwmMqFmgJiWp2X/preview)

Aus den entpackten Dateien erhält man im Anschluss addons und cfg den Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/QqyoF2GPSX9KEBY/preview)

### ⬆ Hochladen der Dateien

Wenn die oben genannten Schritte abgeschlossen sind, dann geht es an die eigentliche Installation. Hierfür müssen wir uns per FTP mit dem Server verbinden, damit wir die Ordner der Erweiterungen hochladen können.

Die Dateien müssen in dem Hauptverzeichnis hochgeladen werden. Das Hauptverzeichnis befindet sich unter der folgenden Ordner Struktur:

| Spiel | Verzeichnis  |
| :-----: |:-------------:| 
| CS: Clobal Offensive | csgo |
| CS: Source | cstrike |
| Team Fortress 2 | tf2 |
| L4D2 | left4dead2 |

![](https://screensaver01.zap-hosting.com/index.php/s/jr9adQxWicgnEYQ/preview)

Im Anschluss sollte die Ordner Struktur dann wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/o2T6Rmdydgfg3Hr/preview)

## ✅ SM / MM Installation überprüfen

Zum Überprüfen, ob die Erweiterungen fehlerfrei installiert wurden, gibt es zwei Möglichkeiten:

1. Spiel Konsole
2. Remote Console (HLSW - RCON)

### 🕹️ Versionsabfrage via Spiel

Über die folgenden Schritte können wir die Version für den eigenen Server prüfen

1. Im Spiel mit dem Server verbinden
2. Die Konsole öffnen und folgenden Befehl eingeben:

```
sm version
meta version
```

Als Resultat erhalten wir dann folgende Ausgabe: 

![](https://screensaver01.zap-hosting.com/index.php/s/5gRWF5xmbeqyDMH/preview)

### 📖 Versionsabfrage via RCON

![](https://screensaver01.zap-hosting.com/index.php/s/f5zALXZtH3ApPAX/preview)

Über die folgenden Schritte können wir die Version für den eigenen Server prüfen

1. IP-Adresse oben unter IP/Port eingeben
2. Unten auf Rcon Konfiguration gehen
3. Unter Rcon Passwort dein Rcon Passwort angeben
4. Die Konsole aufrufen und folgenden Befehl eingeben:

```
sm version
meta version
```

Als Resultat erhalten wir dann folgende Ausgabe: 

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
