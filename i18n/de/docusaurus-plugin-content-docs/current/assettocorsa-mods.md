---
id: assettocorsa-mods
title: "Assetto Corsa: Mods auf einem Server installieren"
description: "Entdecke, wie du deinen Assetto Corsa Server für das beste Spielerlebnis einrichtest und anpasst → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mit FTP verbinden

Bevor wir den Server konfigurieren können, muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet sein:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Nachdem das eingerichtet ist, kannst du dich verbinden und den Server-Ordner öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Vorbereitung

Als Erstes öffnen wir den Assetto Corsa Ordner. Das geht, indem du Steam öffnest und in der Spieleliste mit Rechtsklick auf "Assetto Corsa" klickst.

Jetzt öffnen wir "Lokale Dateien" und öffnen die lokalen Spieldateien:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Dann öffnen wir den Ordner "server", dort findest du die Datei "acServerManager", die öffnen wir.



## Autos einstellen

Jetzt wechseln wir zum Tab "Cars / Entry List", hier können wir neue Autos hinzufügen:


Um Autos zu aktivieren, muss links der Haken gesetzt sein.

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

In der Mitte siehst du die Autos, die auf dem Grid platziert werden können. Hier kannst du die Autos in den Farben auswählen, die im Grid erscheinen sollen:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Um mehrere Autos auszuwählen, kannst du mehrere Haken setzen, um verschiedene Autos in der Mitte hinzuzufügen.

Achte darauf, dass alle Auto-Slots gefüllt sind und nicht mehr Autos als verfügbare Slots eingestellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Config hochladen

Jetzt können wir die Config mit dem Button "Save" speichern und mit "Export" exportieren:

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Hier wählen wir einen freien Ordner aus, in dem die Config-Daten gespeichert werden.

Jetzt kann der AC Server Manager geschlossen werden. Öffne den Ordner, in den die Configs exportiert wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Diese Configs kannst du jetzt per Drag&Drop in den "cfg"-Ordner deines Gameservers kopieren.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Server-Content hochladen

Jetzt müssen wir den Content für den Server generieren, damit Car- & Map-Mods auf dem Server geladen werden. Dazu klicken wir unten auf "Update Server Content".

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Dieser Vorgang kann ein paar Minuten dauern. Alle Maps & Autos werden jetzt in Server-Dateien umgewandelt.

:::info
Nach Abschluss kann die Meldung "Could not update" erscheinen, das ist kein Problem.
:::

Jetzt öffnen wir den "Server"-Ordner, in dem sich der AcServerManager befindet. Dort gibt es einen "Content"-Ordner, den laden wir per Drag&Drop auf unseren Assetto Corsa Server hoch und überschreiben den alten "Content"-Ordner:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Nachdem der Content hochgeladen ist, sind die Carmods installiert und nach einem Server-Neustart aktiv.

<InlineVoucher />