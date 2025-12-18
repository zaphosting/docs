---
id: satisfactory-connect
title: "Satisfactory: Mit dem Server verbinden"
description: "Entdecke, wie du dich effektiv mit deinem Satisfactory Gameserver verbindest und ihn verwaltest für ein reibungsloses Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Mit dem Server verbinden
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Wie du bei ZAP einen Satisfactory Server erstellst und dein eigenes Savegame hochlädst" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder Infos am liebsten auf die spannendste Art aufsaugst!"/>

:::info
Wenn du bereits ein QWERTY-Tastaturlayout nutzt, musst du diese Schritte nicht machen, drücke einfach CTRL + SHIFT + L und öffne die Konsole mit ~
:::

Um dich mit deinem Satisfactory Gameserver zu verbinden, musst du die Konsole im Spiel öffnen. Es gibt zwei Wege, wie du das machen kannst.

<InlineVoucher />

## Konsole öffnen

### Tastaturlayout wechseln
Du kannst dein Tastaturlayout ganz easy in ein paar Schritten wechseln.
Starte dein Satisfactory bis du im Hauptmenü bist.
Drücke jetzt `CTRL + Shift` – dein Tastaturlayout sollte jetzt auf `EN` gewechselt haben.
Du kannst das ganz einfach checken, indem du auf deinen Desktop wechselst und in der Taskleiste unten rechts schaust, ob dort `EN` steht.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Wenn der Wechsel geklappt hat, kannst du zurück ins Spiel gehen, jetzt `CTRL + SHIFT + L` drücken.
Drücke jetzt `^` auf deiner Tastatur, damit sollte sich die Konsole öffnen.

### Taste zum Öffnen der Konsole ändern
Drücke `Windows-Taste + R` oder suche im Startmenü nach `Ausführen`
Füge diesen Pfad ein:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

und bestätige mit Enter.

Öffne jetzt die Datei Input.ini mit einem Editor deiner Wahl (z.B. Notepad)

:::info
Falls die Datei noch nicht existiert, erstelle sie einfach neu.
:::

Füge diesen Text in die Datei ein:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Speichere die Datei und starte das Spiel neu – jetzt kannst du die Konsole mit `F6` öffnen.

## Mit deinem Satisfactory Gameserver verbinden
Kopiere die IP-Adresse von deinem Server Dashboard:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Öffne die Konsole im Spiel, wie oben beschrieben.

Gib jetzt `open IP-Adresse-deines-Servers` ein.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

Drücke Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Du bist jetzt mit deinem Satisfactory Server verbunden!

## Der HUB
Der HUB ist schon in der Welt platziert, du kannst ihn zerstören, wenn du willst, indem du `F` drückst, und ihn an einem anderen Ort neu platzieren.
Den HUB findest du ganz easy, indem du der Markierung folgst.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
Der Server speichert deinen Fortschritt alle 5 Minuten, du kannst die Saves im Savegame-Manager in deinem Server Dashboard sehen.
Es werden immer die letzten 6 Saves (also 30 Minuten) deines Fortschritts behalten.

<InlineVoucher />