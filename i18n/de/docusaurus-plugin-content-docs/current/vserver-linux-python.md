---
id: vserver-linux-python
title: "VPS: Installation von Python"
description: "Lerne, wie du die Python-Laufzeit auf verschiedenen Linux-Distributionen installierst und aktualisierst, um eine sichere und aktuelle Umgebung zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: Python installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du die Python-Laufzeit und venv installierst. Die Befehle müssen per SSH ausgeführt werden. Wenn du nicht weißt, wie du dich per SSH mit deinem Server verbindest, nutze bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung, um mehr zu erfahren.

<InlineVoucher />

## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, solltest du den Update-Befehl passend zu deinem Betriebssystem ausführen, um deinen Server sicher zu halten.

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

Die meisten Linux-Distributionen haben Python vorinstalliert, aber die Version ist eventuell nicht aktuell oder das System wurde ohne einige Pakete installiert. Du kannst prüfen, ob Python installiert ist (`python3 --version`) und die folgenden Befehle nutzen, um die Laufzeit zu aktualisieren oder zu installieren.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Version prüfen
  python3 --version

  // Laufzeit aktualisieren / installieren
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

Der Befehl `python3` startet den Python-Interpreter. Du kannst nach dem `>>>`-Prompt jeden gültigen Python-Code eingeben, der nach Drücken von `Enter` ausgeführt wird. Den Interpreter kannst du mit `exit()` wieder schließen.

### Ausführen von .py-Dateien

Um `.py` Python-Dateien auszuführen, nutzt du einfach den Befehl `python3 [Dateiname].py`, wobei du `[Dateiname]` durch den Pfad zur gewünschten Datei ersetzt.

:::tip
Die meisten Programme, die du online findest, kannst du mit `python3 main.py` starten, da `main.py` der übliche Einstiegspunkt der meisten Python-Programme ist.
:::

## Virtuelle Umgebungen

Beim Programmieren mit Python brauchst du oft externe Pakete, die du mit pip installierst. Diese können global installiert werden und sind dann für alle `.py`-Skripte verfügbar, oder du erstellst eine virtuelle Umgebung (venv).

### venv erstellen

Wechsle zuerst in den Ordner, in dem du dein venv einrichten möchtest, mit `cd`. Dann führst du `python3 -m venv .` aus, um die nötigen Dateien im aktuellen Verzeichnis zu installieren.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` innerhalb deines venv auszuführen, musst du es mit `source /bin/activate` aktivieren. Ab jetzt läuft deine Konsole nur noch innerhalb des venv und Skripte haben nur Zugriff auf lokal installierte Pakete.

Wenn du fertig bist, kannst du das venv mit dem Befehl `deactivate` wieder verlassen.

## Fazit

Glückwunsch, du hast Python erfolgreich installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />