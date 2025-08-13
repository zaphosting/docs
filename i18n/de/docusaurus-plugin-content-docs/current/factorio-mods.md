---
id: factorio-mods
title: "Factorio: Installiere Mods/DLCs auf deinem Factorio-Server"
description: Informationen darüber, wie du Mods und DLCs auf deinem Factorio Server oder Spielclient von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods/DLCs installieren
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## Einführung

Factorio bietet native Modding-Unterstützung, sodass du deinem Spiel und Server neben gekauften Spiel-DLCs auch eine Vielzahl von Mods hinzufügen kannst. In dieser Anleitung werden wir den Prozess der Aktivierung von DLCs und der Installation von Mods auf deinem Client und Factorio-Server behandeln.

<InlineVoucher />

## Vorbereitung

Du kannst die [offizielle Factorio-Mods-Website](https://mods.factorio.com/) besuchen, um nach Mods zu suchen. Auf dieser Website findest du eine riesige Bibliothek mit kostenlosen Mods, die von der Community in einer Vielzahl von Kategorien erstellt wurden.

:::tip
Stelle sicher, dass die Mods, die du dir ansiehst und herunterlädst, die Version deines Factorio-Servers unterstützen.
:::

## Aktivierung von DLCs

Mit dem Factorio 2.0-Update wurde der erste DLC namens Space Age eingeführt. Um dies zu ermöglichen, wurde eine neue Konfigurationsoption in das Web-Interface-Panel eingeführt, mit der du umschalten kannst, ob der DLC aktiviert ist.

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="Activate Factorio Space Age DLC" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

Gehe zum Web-Interface-Panel deines Produkts und rufe den Abschnitt **Einstellungen** auf. Scrolle nach unten und suche die Option **Space Age DLC**, die standardmäßig aktiviert sein sollte.

![](https://screensaver01.zap-hosting.com/index.php/s/RiZ6emz7H7B9d8q/preview)

Schalte die Funktion um und benutze den grünen **Speichern**-Knopf unten auf der Seite. Du hast nun erfolgreich einen Factorio-DLC aktiviert.


## Mods hinzufügen und hochladen

Nachdem du die Mods deiner Wahl heruntergeladen hast, musst du sie per FTP auf deinen Factorio-Server hochladen. Wenn du nicht weißt, wie man FTP verwendet, dann kann dir ein Blick in die folgende [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung weiterhelfen.

:::note
Der Server muss gestoppt werden, bevor Mods hinzugefügt oder bearbeitet werden, da sonst alle Änderungen rückgängig gemacht werden können.
:::

Sobald du fertig bist, navigiere zum folgenden Verzeichnis und lade deine heruntergeladenen Mods hoch, die im `.zip`-Format vorliegen sollten.
```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Wenn du Mods anpasst, müssen diese zwischen dem Client und dem Server synchronisiert werden. Factorio macht dies sehr einfach. Wenn du dem Server zum ersten Mal nach dem Anpassen von Mods beitrittst, wird dein Spiel dich auffordern, deine Mods automatisch zu synchronisieren.
:::

Zum Schluss musst du deinen Server neu starten, um die Mods automatisch auf deinem Factorio-Server zu aktivieren und zu installieren. Wenn Fehler auftreten, wie z. B. das automatische Herunterfahren des Servers, überprüfe bitte den Abschnitt „Information->Event Log“ auf deiner Weboberfläche, um etwaige Fehler anzuzeigen. Es ist wahrscheinlich, dass ein Versionskonflikt solche Probleme verursachen könnte.

## Beliebte Mods

Noch auf der Suche nach den perfekten Mods für deinen Server? Durchstöbere unsere sorgfältig zusammengestellte Liste mit den beliebtesten und am häufigsten empfohlenen Mods, um dein Spielerlebnis zu erweitern und deinem Server den letzten Feinschliff zu geben. Lass dich inspirieren und finde genau die Erweiterungen, die zu deinem Projekt passen.

<SearchableItemList items={items} />


## Abschluss

Glückwunsch, du hast erfolgreich Mods auf deinem Factorio-Server installiert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂