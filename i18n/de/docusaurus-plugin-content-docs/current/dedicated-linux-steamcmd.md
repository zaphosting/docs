---
id: dedicated-linux-steamcmd
title: "Dedicated Server: SteamCMD Linux Setup"
description: "Entdecke, wie du SteamCMD auf Linux-Servern einrichtest, um Dedicated Gameserver effizient zu installieren → Jetzt mehr erfahren"
sidebar_label: SteamCMD Setup
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

SteamCMD ist ein unverzichtbares Tool, das du brauchst, um Dedicated Gameserver für eine Vielzahl von Games wie Palworld, Enshrouded und mehr zu installieren. In dieser Anleitung zeigen wir dir, wie du SteamCMD zum ersten Mal auf deinem Linux-Server einrichtest. Wir nutzen Ubuntu als Beispiel, aber der Ablauf ist bei anderen Distributionen ziemlich ähnlich.

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung an.

## SteamCMD installieren

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien runterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du ganz easy Steam Workshop- und Dedicated Server-Dateien herunterladen kannst.

Wie bei Linux üblich, solltest du zuerst dein System updaten. Je nach Distribution läuft das so:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Jetzt musst du ein paar Pakete installieren. Die sind wie folgt aufgeteilt:

- Das Paket **software-properties-common** erleichtert dir die Verwaltung deiner Distro und unabhängiger Softwarequellen.
- SteamCMD ist ein 32-Bit-Tool, deshalb muss die **i386** Architektur hinzugefügt werden, damit die passenden Pakete installiert werden.
- Da SteamCMD proprietär ist, brauchst du je nach Linux-Distro entweder das **multiverse** oder **non-free** Paket, da diese normalerweise nicht im Standard-Repository enthalten sind.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & andere Nicht-Debian-Distros
sudo apt-add-repository non-free
```

Führe jetzt nochmal das Update aus, damit deine Paketquellen aktualisiert werden und die Änderungen greifen:

```
sudo apt update
```

Zum Schluss kannst du SteamCMD installieren. Es kann sein, dass du eine Lizenzvereinbarung bestätigen musst – einfach akzeptieren und weitermachen.

```
sudo apt install steamcmd
```

:::tip
Du kannst prüfen, ob SteamCMD erfolgreich installiert wurde, indem du einfach `steamcmd` eingibst. Wenn es geladen ist, solltest du die Eingabeaufforderung `Steam>` sehen. Mit `quit` kannst du das Programm wieder verlassen.
:::

Jetzt, wo alles vorbereitet und installiert ist, kannst du mit dem nächsten Schritt weitermachen: dem Installieren des Dedicated Servers über SteamCMD.

## Benutzer anlegen

Wir empfehlen dir dringend, einen separaten Benutzer für SteamCMD zu erstellen. SteamCMD als Root auszuführen ist, wie bei den meisten Sachen, aus verschiedenen Gründen keine gute Idee.

Erstelle mit folgendem Befehl einen User namens `steam` – ein Passwort kannst du optional vergeben.

```
sudo useradd -m steam
sudo passwd steam # Optionales Passwort
```

Nachdem der User erstellt wurde, musst du die `.bashrc` anpassen, damit der Pfad zu `/usr/games`, wo SteamCMD liegt, verfügbar ist. Das machst du, indem du eine zusätzliche PATH-Variable hinzufügst.

Öffne die Datei mit dem Nano-Editor:

```
sudo nano /home/steam/.bashrc
```

Scroll ans Ende der Datei und füge diese Zeile hinzu:

```
export PATH="/usr/games/:$PATH"
```

Speichere die Datei und verlasse Nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

## Fazit

Du hast jetzt die grundlegende SteamCMD-Funktionalität auf deinem Linux-Server erfolgreich eingerichtet. Du kannst jetzt als `steam` User Steam-Inhalte installieren.

Wir empfehlen dir, auch die anderen Anleitungen in diesem Bereich zu checken, die zeigen, wie du mit SteamCMD spezifische Games installierst, die du jetzt eingerichtet hast.