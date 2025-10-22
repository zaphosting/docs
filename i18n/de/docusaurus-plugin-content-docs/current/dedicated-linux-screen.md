---
id: dedicated-linux-screen
title: "Dedicated Server: Installation von Screen"
description: "Entdecke, wie du mit Screen auf Linux mehrere Terminal-Sessions managen kannst – für mehr Produktivität und persistente Sessions → Jetzt mehr erfahren"
sidebar_label: Screen installieren
services:
  - dedicated
---

## Einführung

Screen ist ein Terminal-Multiplexer für Unix-ähnliche Betriebssysteme wie Linux. Damit kannst du mehrere Terminal-Sessions in einem einzigen Fenster oder einer Remote-Verbindung verwalten. In dieser Anleitung zeigen wir dir die Installationsschritte und geben dir Tipps zur Nutzung, damit du Screen besser kennenlernst.

## Vorbereitung

Bevor du irgendwas auf deinem Server installierst, solltest du unbedingt den Update-Befehl für dein Betriebssystem ausführen, um deinen Server sicher und aktuell zu halten.

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

Die Installation von Screen ist super easy – einfach den passenden Befehl für deine Linux-Distribution ausführen:

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

## Grundlegende Screen-Nutzung

Wie schon erwähnt, kannst du mit Screen mehrere Sessions erstellen. Um eine neue zu starten, gib einfach folgenden Befehl ein und ersetze `[name]` durch einen beliebigen Namen.

```
screen -S [name]
```

:::info
Beachte, dass die Befehle in dieser Anleitung case-sensitive sind, besonders bei Parameter-Flags.
:::

Damit öffnet sich eine neue Screen-Session, in der du Skripte oder Programme starten kannst, die auch nach dem Schließen der Remote-Verbindung weiterlaufen.

Um eine Screen-Session zu verlassen, drücke `CTRL + A`, gefolgt von `D` oder gib einfach `exit` im Terminal ein.

:::tip
Alle aktiven Sessions kannst du mit `screen -ls` oder `screen -list` anzeigen lassen.
:::

Um zu einer bestehenden Session zurückzukehren, nutze den Befehl `screen -r [name]`, der dich direkt zur gewünschten Session bringt.

## Screen Parameter-Flags

Screen bietet viele `-` Parameter-Flags, mit denen du die Befehle anpassen kannst. Die wichtigsten findest du hier in der Tabelle:

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Zeigt die aktuelle Screen-Version an |
| -S `[name]` | | Startet eine neue Screen-Session mit dem Namen `[name]` |
| -ls | -list | Listet alle laufenden Screens auf |
| -wipe `[name]` | | Löscht Screens, optional mit dem Parameter `[name]` |
| -r `[name]` | | Hängt dich an die Session `[name]` an |
| -d -r `[name]` | | Trennt dich von der aktuellen Session und hängt dich an `[name]` an |

:::tip
Alle verfügbaren Parameter findest du mit `screen -h` – das gibt dir eine ausführliche Liste.
:::

## Fortgeschrittene Screen-Nutzung

### Fensterverwaltung

Jetzt, wo du die Basics kennst, zeigen wir dir ein paar Shortcuts, mit denen du deine Sessions noch besser managen kannst. Innerhalb einer Screen-Session kannst du mehrere Fenster für verschiedene Aufgaben anlegen.

:::note 
Alle Shortcuts hier funktionieren erst, nachdem du `CTRL + A` gedrückt hast.
:::

`C` erstellt ein neues, leeres Fenster im aktuellen Verzeichnis. Zwischen Fenstern wechselst du mit `N` (nächstes), `P` (vorheriges) oder `"` – dann wählst du mit den Pfeiltasten das gewünschte Fenster aus.

Standardmäßig haben alle Fenster denselben Namen (meist der Name der Shell). Mit `A` kannst du den Fenstern einen neuen Namen geben.

Und um ein Fenster zu löschen, drückst du `K`.

#### Fenster teilen

Um zwei Fenster im Split-Screen-Modus zu nutzen, drücke `S` für horizontal oder `|` für vertikal und navigiere mit `Tab` zwischen ihnen.

:::tip
Nach dem Erstellen eines Splits wechsel mit `Tab` in das neue Fenster und drücke `"` um ein vorheriges Fenster im zweiten Bereich zu öffnen.
:::

Du kannst die Fenster so oft splitten, wie du willst – aber denk dran, dass der RAM-Verbrauch auf deinem Server dadurch schnell steigen kann, wenn du viele Tasks parallel laufen lässt.

## Fazit

Wir hoffen, diese Anleitung hat dir geholfen, Screen auf Linux besser zu verstehen. Falls du noch Fragen hast oder Unterstützung brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂