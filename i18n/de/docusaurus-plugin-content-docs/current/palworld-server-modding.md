---
id: palworld-server-modding
title: "Palworld: Mods für Palworld installieren"
description: "Entdecke, wie du dein Palworld-Erlebnis mit Mods für Server und Client sicher und effektiv verbesserst → Jetzt mehr erfahren"
sidebar_label: Mods installieren
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Seit dem Release von Palworld tauchen immer mehr coole Mods online auf, die das Spielerlebnis verbessern und das Game noch spaßiger machen. In dieser Anleitung zeigen wir dir, wie du Spielmodifikationen (Mods) auf deinem Palworld-Gameserver und/oder im Spielclient installierst.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Wie du Mods auf deinem Palworld Server installierst!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder lieber auf die unterhaltsamste Art lernst!"/>

<InlineVoucher />

### Wichtige Infos

Aktuell kannst du verfügbare Mods über externe Modding-Seiten ansehen und herunterladen. Wir empfehlen Seiten wie [Nexus Mods](https://www.nexusmods.com/palworld/) oder [Curseforge](https://www.curseforge.com/palworld/), die in der Modding-Community einen guten Ruf haben. Mods über den Steam Workshop kannst du derzeit nicht herunterladen.

:::note
ZAP-Hosting übernimmt keine Haftung für mögliche Änderungen oder Schäden an deinen Serverdateien oder Welten durch das Installieren von Mods. Wir empfehlen dir dringend, vorher Backups zu erstellen. Mehr dazu findest du in unserer speziellen [Savegames verwalten](palworld-server-savegames.md) Anleitung.
:::

:::info
Wir unterstützen aktuell nur PAK-Mods (.PAK Dateien). Mods, die eine ausführbare Datei benötigen, können aus Sicherheitsgründen nicht verwendet werden.
:::



### Server- & Client-seitige Mods

Bevor du Mods auswählst, musst du herausfinden, ob sie server- oder clientseitig sind. Am einfachsten findest du das heraus, indem du die Beschreibung auf der Mod-Webseite liest oder den Mod-Autor direkt kontaktierst.

Serverseitige Skripte kannst du direkt auf dem Server installieren, Spieler müssen nichts weiter tun. Clientseitige Mods müssen hingegen von jedem Spieler, der auf den Server will, selbst lokal in den Spieldateien installiert werden.

:::info
Stelle sicher, dass die Mod mit der aktuellen Spielversion von Palworld kompatibel ist.
:::



## Schritt 1: PAK-Datei vorbereiten

Auf den Modding-Seiten, wie oben empfohlen, kannst du eine große Auswahl an Mods durchstöbern und herunterladen.

:::info
Erinnerung: Aus Sicherheitsgründen unterstützen wir aktuell nur PAK-Mods (.PAK Dateien).
:::

Lade die gewünschte Mod lokal auf dein Gerät herunter. Falls nötig, entpacke die Dateien mit einem Tool wie [7zip](https://www.7-zip.org/), um an die **.pak** Datei zu kommen.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Schritt 2: Upload via FTP

Hast du die PAK-Dateien bereit, öffne im Webinterface deines Gameservers den Bereich **Tools->FTP-Browser**.

Du brauchst einen FTP-Client, um dich mit deinem Server zu verbinden. Falls du noch keinen hast oder Hilfe brauchst, schau in unsere Anleitung [Zugriff via FTP](gameserver-ftpaccess.md).

Im Webinterface kannst du den Button **Direktverbindung** nutzen. Damit öffnet sich dein FTP-Programm und loggt dich automatisch ein.

Alternativ kannst du die auf der FTP-Browser-Seite angezeigten Zugangsdaten manuell in deinen FTP-Client eingeben und dich verbinden.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Jetzt musst du die vorbereiteten PAK-Dateien in folgendes Verzeichnis hochladen:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Für Windows-Version
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Für Linux-Version
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Damit ist die Server-Seite erledigt! Jetzt kümmern wir uns um die Client-Seite.



## Schritt 3: Mods Client-seitig installieren

Nachdem alle Mods auf dem Server sind, müssen auch alle Spieler, die auf den Server wollen, die Mods lokal installieren. Es gibt aktuell keine Möglichkeit, Mods automatisch beim Verbinden herunterzuladen.

Öffne Steam, klicke mit Rechtsklick auf Palworld, wähle „Verwalten“ und dann „Lokale Dateien durchsuchen“.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Es öffnet sich ein Ordner mit deiner Palworld-Installation auf deinem Gerät.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Navigiere nun zu folgendem Verzeichnis:
```
../Palworld/Pal/Content/Paks/
```

Verschiebe die **.pak** Dateien der Mods in diesen Ordner. Wiederhole das für alle weiteren Mods, die du hinzugefügt hast.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Schritt 4: Palworld starten & mit Server verbinden

Jetzt kannst du dich mit deinem Palworld-Gameserver verbinden und das Spiel mit den neuen Mods genießen. Falls du Hilfe beim Verbinden brauchst, schau in unsere Anleitung [Mit Server verbinden](palworld-connect.md).

Nach dem Laden solltest du die Änderungen durch die Mods sehen können.

Zum Beispiel nutzen wir auf unserem Testserver den Minecraft Blocks Mod:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Du hast erfolgreich Mods auf deinem Palworld-Gameserver installiert. Falls du Probleme hast, check den Debug-Bereich unten.



## Debugging

Hier findest du einige häufige Ursachen für Probleme und Tipps zur Fehlersuche. Modding ist noch in den Kinderschuhen und nicht offiziell, daher können Bugs auftreten.

#### Kompatible Mod-Version sicherstellen

Stelle sicher, dass die installierten Mods mit der aktuellen Palworld-Spielversion kompatibel sind. Sonst können Fehler auftreten und Funktionen der Mods nicht funktionieren. Kontaktiere den Mod-Autor für Updates, falls die Mod veraltet ist.

#### Server neu starten

Starte den Server nach Änderungen neu oder wenn du keine Mods siehst. Bei Fehlern oder Bugs solltest du dich auch beim Mod-Autor erkundigen.

#### Logs auf Fehler prüfen

Ein guter erster Schritt ist, im Webinterface unter **Information->Log Dateien** nachzusehen. Dort findest du Logs mit Infos zum Server, Events, Hinweisen oder Fehlermeldungen.

Fehlermeldungen helfen oft, die Ursache eines Problems zu finden und zu verstehen. Mit gezieltem Blick in die Logs lassen sich viele Schwierigkeiten lösen.

:::info
Brauchst du weitere Hilfe? Kein Ding, join einfach unserer [Discord Community](https://discord.com/invite/zaphosting) oder poste im [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/), wo wir und die Community dir helfen.

Willst du offiziellen Support? Erstelle bitte ein [Ticket](https://zap-hosting.com/en/customer/support/) auf unserer Website mit so vielen Details wie möglich, wir melden uns schnellstmöglich bei dir! :)
:::


<InlineVoucher />