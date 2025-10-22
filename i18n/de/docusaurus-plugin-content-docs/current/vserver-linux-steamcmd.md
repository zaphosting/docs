---
id: vserver-linux-steamcmd
title: "VPS: SteamCMD Linux Setup"
description: "Entdecke, wie du SteamCMD auf Linux einrichtest, um Dedicated Gameserver effizient zu installieren und dein Servermanagement zu optimieren → Jetzt mehr erfahren"
sidebar_label: SteamCMD Setup
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
SteamCMD ist ein unverzichtbares Tool, das du brauchst, um Dedicated Gameserver für eine Vielzahl von Spielen wie Palworld, Enshrouded und mehr zu installieren. In dieser Anleitung zeigen wir dir den Erst-Setup-Prozess, um SteamCMD auf deinem Linux-Server zu installieren. Wir nutzen Ubuntu als Beispiel, aber der Ablauf ist bei anderen Distributionen sehr ähnlich.

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Initial Access](vserver-linux-ssh.md) Anleitung an.

## SteamCMD installieren

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Gameserver-Dateien runterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du ganz easy verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst.

Wie bei Linux üblich, solltest du zuerst das System updaten, indem du je nach Distribution folgenden Befehl ausführst:
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

- Das Paket **software-properties-common** erleichtert die Verwaltung deiner Distro und unabhängiger Softwarequellen.
- SteamCMD ist ein 32-Bit-Tool, deshalb muss die **i386** Architektur hinzugefügt werden, damit die passende Software für dein System installiert wird.
- Da SteamCMD proprietär ist, brauchst du je nach Linux-Distro entweder das **multiverse** oder **non-free** Paket, da diese meist nicht im Standard-Repository enthalten sind.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & andere Nicht-Debian-Distros
sudo apt-add-repository non-free
```

Führe jetzt den Update-Befehl aus, damit deine Paketänderungen eingelesen und installiert werden:
```
sudo apt update
```

Zum Schluss kannst du SteamCMD installieren mit:
```
sudo apt install steamcmd
```
Es kann sein, dass eine Lizenzvereinbarung erscheint, die du einfach akzeptieren kannst, um fortzufahren.

:::tip
Du kannst prüfen, ob SteamCMD erfolgreich installiert wurde, indem du einfach `steamcmd` eingibst. Sobald geladen, sollte die Eingabeaufforderung `Steam>` anzeigen. Mit `quit` kannst du das Tool wieder verlassen.
:::

Wenn jetzt alles vorbereitet und installiert ist, kannst du mit dem nächsten Schritt weitermachen: dem Installieren des Dedicated Servers über SteamCMD.

## Benutzer anlegen

Wir empfehlen dringend, einen separaten Benutzer für SteamCMD zu erstellen. SteamCMD als root auszuführen ist, wie bei den meisten Sachen, aus verschiedenen Gründen nicht ratsam.

Erstelle mit folgendem Befehl einen User namens `steam` und optional ein Passwort deiner Wahl:

```
sudo useradd -m steam
sudo passwd steam # Optionales Passwort
```

Nachdem der User erstellt wurde, musst du die `.bashrc` Datei anpassen, damit der Pfad `/usr/games`, wo SteamCMD liegt, zugänglich ist. Das machst du, indem du eine zusätzliche Pfad-Umgebungsvariable hinzufügst.

Öffne die Datei mit dem nano Editor:
```
sudo nano /home/steam/.bashrc
```

Scrolle ans Ende der Datei und füge folgende Zeile hinzu:
```
export PATH="/usr/games/:$PATH"
```

Speichere die Datei und verlasse nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

## Fazit

Du hast jetzt erfolgreich die Basisfunktionalität von SteamCMD auf deinem Linux-Server eingerichtet. Du kannst nun als `steam` User mit der Installation von Steam-Inhalten starten.

Wir empfehlen dir, die anderen Anleitungen in diesem Bereich zu checken, die zeigen, wie du spezifische Spiele mit SteamCMD installierst – jetzt, wo du es eingerichtet hast.

<InlineVoucher />