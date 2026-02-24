---
id: vserver-linux-python
title: "Python auf einem Linux-Server einrichten – Entwicklung & Automatisierung starten"
description: "Lerne, wie du die Python-Laufzeit auf verschiedenen Linux-Distributionen installierst und aktualisierst, um eine sichere und aktuelle Umgebung zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: Python installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du die Python-Laufzeit und venv installierst. Die Befehle müssen per SSH ausgeführt werden. Falls du nicht weißt, wie du dich per SSH mit deinem Server verbindest, schau dir unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

<InlineVoucher />

## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, solltest du den Update-Befehl passend zu deinem Betriebssystem ausführen, um deinen Server sicher und aktuell zu halten.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Die meisten Linux-Distributionen bringen Python bereits vorinstalliert mit, allerdings ist die Version oft nicht aktuell oder es fehlen manche Pakete. Du kannst prüfen, ob Python installiert ist (`python3 --version`) und dann die folgenden Befehle nutzen, um die Laufzeit zu installieren oder zu aktualisieren.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Version prüfen
  python3 --version

  // Laufzeit installieren / aktualisieren
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Version prüfen
  python3 --version

  // Laufzeit aktualisieren
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Version prüfen
  python3 --version

  // Laufzeit aktualisieren
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Version prüfen
  python3 --version

  // Laufzeit aktualisieren
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Code ausführen

Jetzt, wo Python auf deinem Server installiert ist, kannst du deine Python-Programme starten.

### Interpreter-Modus

Mit dem Befehl `python3` startest du den Python-Interpreter. Du kannst nach dem `>>>`-Prompt beliebigen gültigen Python-Code eingeben, der nach Drücken von `Enter` ausgeführt wird. Den Interpreter beendest du mit `exit()`.

### .py Dateien ausführen

Um `.py` Python-Dateien auszuführen, nutzt du einfach den Befehl `python3 [Dateiname].py`, wobei du `[Dateiname]` durch den Pfad zur gewünschten Datei ersetzt.

:::tip
Die meisten Programme, die du online findest, kannst du mit `python3 main.py` starten, da `main.py` oft der Einstiegspunkt der Python-Programme ist.
:::

## Virtuelle Umgebungen

Beim Programmieren mit Python brauchst du oft externe Pakete, die du über pip installierst. Diese kannst du global installieren (für alle `.py`-Skripte verfügbar) oder in einer virtuellen Umgebung (venv) isolieren.

### venv erstellen

Wechsle zuerst in den Ordner, in dem du deine venv einrichten möchtest, mit `cd`. Dann führst du `python3 -m venv .` aus, um die nötigen Dateien im aktuellen Verzeichnis zu installieren.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` innerhalb der venv auszuführen, musst du sie aktivieren mit `source /bin/activate`. Danach läuft deine Konsole nur noch innerhalb der venv und Skripte greifen nur auf lokal installierte Pakete zu.

Wenn du fertig bist, verlässt du die venv mit dem Befehl `deactivate`.

## Fazit

Glückwunsch, du hast Python erfolgreich installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />