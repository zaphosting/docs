---
id: satisfactory-savegame
title: "Satisfactory: Savegame Manager"
description: Information, zu den Verwaltungsmöglichkeiten von Savegames über den Savegames Manager bei deinem Satisfactory Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegame Manager
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du kannst deine Spielstände ganz einfach über unsere Website bearbeiten. Mit nur wenigen Klicks kannst du deine Savegames verwalten, hochladen und wiederherstellen. Navigieren dazu im Dashboard deines Servers zu `Savegame Manager`.

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/j9XYs8KrtAoActY/preview" title="How to create a Satisfactory Server at ZAP and upload your own save-game" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

:::info
Dein Server speichert automatisch in Abständen von 5 Minuten und behält immer die letzten 6 automatischen Speicherungen.
:::

<InlineVoucher />

## Savegame herunterladen

Das Herunterladen deines Spielstands ist sehr einfach. Gehe dazu zum Abschnitt `Savegame Manager` im Webinterface:

![Screenshot 2023-02-04 002245](https://screensaver01.zap-hosting.com/index.php/s/s64inQcSd9XXStP/preview)

Scrolle nach unten und am unteren Ende der Seite siehst du deine aktiven Spielstände und alle Sicherungen, die du derzeit von deinen Spielständen hast. Zum Herunterladen klickst du einfach auf die Schaltfläche "Herunterladen" auf der rechten Seite der Datei, die du herunterladen möchtest.

![Screenshot 2023-02-04 003915](https://screensaver01.zap-hosting.com/index.php/s/dSQ29FX7myyk9pM/preview)



## Eigenes Savegame verwenden

Die Verwendung eines eigenen Spielstandes ist sehr einfach, indem du den Savegame Uploader Bereich des Savegame Managers benutzt.
Allerdings musst du zunächst das Savegame auf deinem eigenen Computer finden.

:::info
Es kann vorkommen, dass dein Inventar nicht richtig gespeichert wird. Stelle also sicher, dass du die Gegenstände in die Kisten legst und speicherst, bevor du weitermachst.
:::

Drücke `Windows-Key + R` und kopiere diesen Pfad dort hinein: `%LOCALAPPDATA%\FactoryGame\Saved\SaveGames\`
Nun befindest du dich im Ordner "SaveGames" deines Satisfactory-Spiels. Drücke jetzt auf den Ordner mit den vielen Zahlen (grün auf dem Screenshot).

![Screenshot 2023-02-04 004351](https://screensaver01.zap-hosting.com/index.php/s/Rofi38CyfkC3ZTe/preview)

Du bist jetzt in deinem Savegame-Verzeichnis deines Spiels. In diesem Ordner kannst du alle Savegames sehen, die du hast.
Du solltest in der Lage sein, die Savegames anhand des Dateinamens, des Datums, des Zeitstempels oder der Größe zu identifizieren. Wenn du Autosaves verwendest, ist `x_autosave_0` immer das Letzte, das gespeichert wurde.

![Screenshot 2023-02-04 004903](https://screensaver01.zap-hosting.com/index.php/s/9Xs25BmWZpnZBsm/preview)

:::info
Optional: Wir empfehlen, alles außer dem Namen des Spielstands selbst zu entfernen, um ihn in Zukunft leichter identifizieren zu können. In diesem Beispiel würde das Savegame "Factory" heißen.
:::

Lade nun deine Datei über den Savegame Manager per Drag & Drop auf deinen Server hoch:

![Screenshot 2023-02-04 005404(1)](https://screensaver01.zap-hosting.com/index.php/s/jfFyga3GGJDrcbT/preview)

Stelle zum Schluss sicher, dass du das `Active savegame` oben auf der Seite in den Namen des hochgeladenen Spiels änderst und drücke auf Speichern! In diesem Beispiel heißt die hochgeladene Datei "Factory", also wird sie in diesen Namen geändert.

![Screenshot 2023-02-04 005836](https://screensaver01.zap-hosting.com/index.php/s/Tm4WSYeygwAqJzR/preview)

Wenn du nun das nächste Mal den Server startest, wird das Savegame geladen.



## Savegames bearbeiten
Wenn du dein Savegame verändern möchtest, um beispielsweise zu cheaten, ist das Editieren deines Savegames die einzige Möglichkeit dazu.
Dafür kannst du [das Satisfactory Save Editor Tool] (https://github.com/Goz3rr/SatisfactorySaveEditor) verwenden.

:::info
Wir können die volle Funktionalität des Tools nicht garantieren, da es sich um ein Open-Source-Projekt handelt. 
:::

Downloade das Savegame von deinem Savegame-Manager und öffne es im Savegame-Editor ("Datei > Zuletzt öffnen")

Wenn du zum Beispiel das Inventar ändern möchtest, suche nach:
`FactoryGame.FGInventoryComponent` in dieser Suche nach `Persistent_Level:PersistentLevel.Char_Player_C *************.Inventory`

Wenn du mehr Spieler hast, gibt es mehr Einträge, du könntest den Spieler anhand der Gegenstände im Inventar identifizieren. Wenn du zum Beispiel die Anzahl der Machtsplitter in deinem Inventar ändern möchtest, suche nach diesem Gegenstand und ändere den Wert in "NumItems".

Wenn du mit deinen Änderungen fertig bist, öffne "Datei" und drücke Speichern. Jetzt kannst du das bearbeitete Savegame wieder hochladen und den Server starten.

Der Savegame-Editor bietet dir noch einige weitere Cheats, öffne dazu einfach den "Cheats"-Tab
