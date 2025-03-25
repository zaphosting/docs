---
id: vserver-linux-steamcmd
title: "vServer: SteamCMD Linux Einrichtung"
description: Informationen zur Einrichtung von SteamCMD auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: SteamCMD einrichten
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

SteamCMD ist ein unverzichtbares Tool, das für die Installation von dedizierten Servern für eine Vielzahl von Spielen wie Palworld, Enshrouded und mehr benötigt wird. In diesem Anleitung zeigen wir dir, wie du SteamCMD zum ersten Mal auf deinem Linux-Server installierst. In den Beispielen verwenden wir Ubuntu, aber der Prozess sollte für andere Distributionen sehr ähnlich sein.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Verwende unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

## SteamCMD installieren

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den Dedicated Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Dateien für den Steam-Workshop und den dedizierten Server herunterladen kannst.

Wie bei Linux üblich, ist es am besten, zuerst das System zu aktualisieren, indem du je nach verwendeter Distro Folgendes ausführst:
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

Jetzt musst du noch ein paar Pakete installieren. Diese sind wie folgt unterteilt:

- Das Paket **software-properties-common** macht die Verwaltung deiner Distro und unabhängiger Softwarequellen einfach.
- SteamCMD ist ein 32-Bit-Tool, daher muss die **i386**-Architektur hinzugefügt werden, damit die entsprechende Software auf deinem System installiert wird, die dies unterstützt.
- Da SteamCMD proprietär ist, bedeutet das auch, dass du je nach Linux-Distro entweder das **multiverse**- oder das **non-free**-Paket benötigst, da diese normalerweise nicht im Standard-Repository enthalten sind.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & Andere Nicht-Debian-Distros
sudo apt-add-repository non-free
```

Führe nun den Update-Befehl aus, um sicherzustellen, dass deine Paketänderungen gelesen und somit auf deinem System installiert werden:
```
sudo apt update
```

Zum Schluss kannst du SteamCMD installieren, indem du den folgenden Befehl ausführst. Es kann sein, dass eine Aufforderung zur Lizenzvereinbarung erscheint, die du einfach akzeptieren kannst, um fortzufahren.
```
sudo apt install steamcmd
```

:::tip
Du kannst überprüfen, ob die Installation von SteamCMD erfolgreich war, indem du einfach `steamcmd` ausführst. Sobald er geladen ist, sollte die Eingabeaufforderung `Steam>` anzeigen. Du kannst `quit` ausführen, um das Programm anschließend zu beenden.
:::

Da nun alles vorbereitet und installiert ist, kannst du mit dem nächsten Schritt fortfahren, nämlich der Installation des dedizierten Servers mit Hilfe von SteamCMD.

## Benutzer anlegen

Wir empfehlen dringend, einen eigenen Benutzer für SteamCMD anzulegen. Wie bei den meisten Dingen ist es aus verschiedenen Gründen nicht empfehlenswert, mit dem Root-Benutzer zu arbeiten.

Verwende den folgenden Befehl, um einen Benutzer namens `steam` mit einem optionalen Passwort deiner Wahl zu erstellen.

```
sudo useradd -m steam
sudo passwd steam # Optionales Passwort
```

Sobald der Benutzer erstellt ist, musst du die Datei `.bashrc` anpassen, um den Zugriff auf den Pfad `/usr/games` zu ermöglichen, in dem sich SteamCMD befindet. Dazu fügst du eine zusätzliche Umgebungsvariable path hinzu.

Öffne die Datei mit dem nano-Editor, indem du Folgendes ausführst
```
sudo nano /home/steam/.bashrc
```

Scrolle nun mit den Pfeiltasten bis zum Ende der Datei und füge die folgende Pfad-Umgebungsvariable hinzu:
```
export PATH="/usr/games/:$PATH“
```

Speichere die Datei und beende nano mit `CTRL + X`, gefolgt von `Y` zur Bestätigung und schließlich `ENTER`.

## Abschluss

Du hast nun erfolgreich die wichtigsten SteamCMD-Funktionen für deinen Linux-Server eingerichtet. Du kannst nun mit der Installation von Steam-Inhalten über den Benutzer `steam` fortfahren.

Wir empfehlen dir, die anderen Anleitungen in diesem Abschnitt zu lesen, in denen es um die Installation bestimmter Spiele mit Hilfe von SteamCMD geht.