---
id: vserver-linux-screen
title: "vServer: Installation von Screen"
description: Informationen zur Installation von screen auf deinem Linux vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Screen installieren
services:
  - vserver
---

## Einführung

Screen ist ein Terminal-Multiplexer für Unix-ähnliche Betriebssysteme, wie Linux. Er ermöglicht Benutzern die Verwaltung mehrerer Terminalsitzungen innerhalb eines einzigen Fensters oder einer Remoteverbindung. In dieser Anleitung gehen wir auf die Installationsschritte ein und geben Hinweise zur Verwendung, damit du dich besser mit der Nutzung von Screen vertraut machen kannst.

## Voraussetzungen

Bevor du irgendetwas auf einem Server installierst, ist es empfehlenswert, den Update-Befehl für dein Betriebssystem auszuführen, damit dein Server sicher bleibt.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
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

Die Installation des Screen Dienstprogramms ist so einfach wie das Ausführen des folgenden Befehls, abhängig von deiner Linux-Distribution:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
sudo dnf install screen
```

</TabItem>
</Tabs>

## Grundlegende Screen Nutzung

Wie bereits erwähnt, können Benutzer mit screen mehrere Sitzungen erstellen. Um eine solche Sitzung zu starten, musst du einfach den folgenden Befehl ausführen, wobei du `[name]` durch etwas beliebiges ersetzen kannst.
```
screen -S [name]
```

:::info
Beachte die Groß- und Kleinschreibung der Befehle in dieser Anleitung, insbesondere in Bezug auf alle Parameterflags.
:::

Es öffnet sich daraufhin ein neuer Screen, in dem du ein beliebiges Skript oder Programm starten kannst, welches du auch nach dem Schließen der Remoteverbindung weiterlaufen lassen möchtest.

Du kannst einen Screen verlassen, indem du `STRG + A`, gefolgt von `D` benutzt oder einfach `exit` als Befehl in die Konsole eingibst.

:::tip
Du kannst alle aktiven Sitzungen/ Screens mit dem Befehl `screen -ls` oder `screen -list` durchsuchen.
:::

Um zu einem zuvor erstellten Screen zurückzukehren, kannst du den Befehl `screen -r [Name]` ausführen, der dich sofort zu dem entsprechenden Screen zurückbringt.

## Screen Parameter-Flags

Screen hat viele „-“-Parameterflags, die du zur Konfiguration der Befehle verwenden kannst. Einige der wichtigsten sind unten in der Tabelle aufgeführt.

| Flag           | Alias | Information                                                  |
| -------------- | ----- | ------------------------------------------------------------ |
| -v             |       | Zeigt die aktuelle Version des Bildschirms                   |
| -S `[name]`    |       | Startet einen neuen Screen namens `[name]`                   |
| -ls            | -list | Listet alle laufenden Screens auf                            |
| -wipe `[name]` |       | Löschung von Screens mit optionalem Parameter `[name]`       |
| -r `[name]`    |       | Erneutes Verbinden mit dem Screen `[name]`                   |
| -d -r `[name]` |       | Trenne dich von deinem aktuellen Screen und schließe ihn wieder an `[name]` an. |

:::tip
Du kannst alle verfügbaren Parameter durchsuchen, indem du `screen -h` ausführst, womit du eine umfassende Liste erhältst.
:::

## Erweiterte Screen Nutzung

### Verwendung der Fenster

Now that you've familiarized yourself with the basic commands of screens it's time to learn some shortcuts to help you navigate through your sessions more effectively. Inside any screen you can create multiple separate windows for different tasks.

:::note 
Alle Shortcuts in diesem Teil der Anleitung müssen nach dem Betätigen von `STRG + A` ausgeführt werden.
:::

Wenn du `C` drückst, wird ein neues leeres Fenster in deinem aktuellen Verzeichnis erstellt. Um zwischen den Fenstern zu navigieren, kannst du `N` (nächste) oder `P` (vorherige) oder `"` drücken und das gewünschte Fenster mit den Pfeiltasten aus der Liste auswählen.

Standardmäßig haben alle Fenster den gleichen Namen (normalerweise der Name der Shell, die du gerade verwendest). Um dies zu ändern, führe den Befehl `A` aus und wähle einen neuen Namen. 

Um ein Fenster zu löschen, kannst du `K` drücken.

#### Geteilte Fenster

Um zwei Fenster in einer geteilten Konfiguration laufen zu lassen, kannst du `S` (horizontal) oder `|` (vertikal) ausführen und mit `Tab` zwischen ihnen navigieren. 

::: tip
Nachdem du ein neues geteiltes Fenster erstellt hast, benutze `Tab` und führe `"` aus, um ein vorheriges Fenster in der zweiten Ansicht des geteilten Fensters zu öffnen.
:::

Du kannst diese Fenster so oft teilen, wie du willst, aber der RAM-Verbrauch des Servers könnte exponentiell ansteigen, wie du es bei Multitasking erwarten würdest.

## Abschluss

Wir hoffen, dass diese Anleitung für dich hilfreich war, um dir zu zeigen, wie das Screen Dienstprogramm in Linux funktioniert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂