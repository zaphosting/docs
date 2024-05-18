---
id: dedicated-linux-python
title: "Dedicated Server: Installation von Python"
description: Informationen zur Installation und Ausführung von Python auf Ihrem Linux Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Python installieren
---

## Einleitung

Diese Anleitung bietet Schritte zur Installation der Python-Laufzeitumgebung und venv. Diese Befehle müssen über SSH ausgeführt werden, wenn du nicht weißt, wie man sich per SSH mit deinem Server verbindet, nutze bitte unsere [Erstzugriff (SSH)](https://zap-hosting.com/guides/docs/vserver-linux-ssh) Anleitung, um mehr zu erfahren.

## Vorbereitung

Bevor du irgendetwas auf einem Server installierst, wird empfohlen, den Aktualisierungsbefehl, der zu deinem Betriebssystem passt, auszuführen, um deinen Server sicher zu halten.


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

## Python installieren

Die meisten Linux-Distributionen sind bereits mit Python vorinstalliert, jedoch ist die Version möglicherweise nicht auf dem neuesten Stand oder das System wurde ohne einige Pakete installiert. Du kannst überprüfen, ob die Python-Installation existiert (`python3 --version`) und die folgenden Befehle ausführen, um die Laufzeitumgebung entweder zu aktualisieren oder zu installieren.


<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Version überprüfen
  python3 --version

  // Aktualisierung der Laufzeitumgebung
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Version überprüfen
  python3 --version

  // Aktualisierung der Laufzeitumgebung
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Version überprüfen
  python3 --version

  // Aktualisierung der Laufzeitumgebung
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Version überprüfen
  python3 --version

  // Aktualisierung der Laufzeitumgebung
  sudo dnf install python3
```


</TabItem>
</Tabs>

## Code ausführen

Jetzt, da Python auf deinem Server installiert ist, kannst du damit beginnen, deine Python-Programme auszuführen.

### Interpreter-Modus

Durch das Ausführen des Befehls `python3` wird der Python-Interpreter gestartet. Du kannst nach dem `>>>`-Präfix jeden gültigen Python-Code schreiben, und er wird nach dem Drücken von `Enter` ausgeführt. Du kannst den Interpreter beenden, indem du `exit()` in die Konsole eingibst.

### .py-Dateien ausführen

Um `.py` Python-Dateien auszuführen, kannst du einfach den Befehl `python3 [Dateiname].py` verwenden, wobei `[Dateiname]` durch den Pfad zum gewünschten Dateinamen ersetzt wird, den du ausführen möchtest.

:::tip
Die meisten Programme, die du online findest, können mit dem Befehl `python3 main.py` ausgeführt werden, da `main.py` der übliche Startpunkt der meisten Python-Programme ist.
:::

## Virtuelle Umgebungen

Wenn du ein Python-Programm schreibst, musst du möglicherweise externe Pakete von pip installieren. Diese können global installiert werden und somit für alle `.py`-Skripte zugänglich sein, oder du kannst eine virtuelle Umgebung (venv) erstellen.

### Die venv erstellen

Zuerst navigiere zu dem Ordner, in dem du deine venv einrichten möchtest, verwende `cd` und sobald du bereit bist, führe `python3 -m venv .` aus, was die erforderlichen Dateien am aktuellen Standort installiert.

### Aktivieren & Deaktivieren

Um Befehle wie `pip install` in deiner venv auszuführen, musst du sie aktivieren, indem du `source /bin/activate` ausführst. Jetzt wird deine Konsole nur noch innerhalb der venv ausgeführt, und Skripte haben nur Zugriff auf lokal installierte Pakete.

Wenn du mit der Arbeit in der venv fertig bist, kannst du zurückkehren, indem du den Befehl `deactivate` ausführst.
