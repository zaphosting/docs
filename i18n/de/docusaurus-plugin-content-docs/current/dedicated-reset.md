---
id: dedicated-reset
title: "Dedicated Server: Server Reset (Werkseinstellung)"
description: "Entdecke, wie du deinen Server effektiv zurücksetzt, um die Performance wiederherzustellen oder frisch zu starten – inklusive sicherer Datenlöschung → Jetzt mehr erfahren"
sidebar_label: Server Reset
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server läuft nicht mehr rund oder du möchtest komplett neu starten, weißt aber nicht wie? Kein Stress, du kannst deinen Server ganz einfach durch eine Neuinstallation zurücksetzen. In dieser Anleitung zeigen wir dir, wie das geht und was du dabei beachten solltest.





## Vorbereitung

Bevor du die Daten auf deinem Server zurücksetzt, solltest du wissen, dass alle bestehenden Daten verloren gehen. Falls du wichtige Daten hast, ist jetzt der perfekte Zeitpunkt, um ein Backup zu machen, bevor du mit der Neuinstallation startest. Danach musst du entscheiden, wie genau du dein System zurücksetzen möchtest.



## Daten zurücksetzen

Je nach Bedarf und Situation gibt es zwei verschiedene Wege, die Daten zurückzusetzen. Im Folgenden erklären wir dir beide Optionen im Detail:

- Daten zurücksetzen über RAID-Konfiguration (Schnellmethode)
- Daten zurücksetzen über Wipe ISO (Umfassende Methode)

Beim Zurücksetzen der Daten über die RAID-Konfiguration werden die bestehenden Daten logisch gelöscht und durch neue ersetzt – das ist eine schnelle und effiziente Lösung für die Systemneuinstallation.

Im Vergleich dazu sorgt das Zurücksetzen mit der Wipe ISO durch mehrere Löschzyklen dafür, dass alle Daten dauerhaft und unwiderruflich entfernt werden. Diese Methode eignet sich am besten für ein komplettes System-Wipe, wenn eine gründliche Datenlöschung notwendig ist.



### Schnellmethode

Wie bei der RAID-Konfiguration musst du während des Bootvorgangs die `F8`-Taste drücken, um die RAID-Konfiguration zu öffnen. Öffne dort den Menüpunkt **Delete Logical Drive**. Dort solltest du die aktuelle RAID-Konfiguration und die Festplatten sehen. Drücke die `F8`-Taste, um das bestehende RAID zu löschen. Das musst du mit der `F3`-Taste bestätigen.

Anschließend gehst du zurück zur RAID-Konfiguration und öffnest den Menüpunkt **Create Logical Drive**. Wähle jetzt die Festplatten und die gewünschte RAID-Konfiguration (Raid 0/1) aus und erstelle das RAID, indem du mit der `Enter`-Taste bestätigst.

Falls du noch nicht genau weißt, wie du das RAID auf deinem System konfigurierst, empfehlen wir dir einen Blick in unsere allgemeine [RAID konfigurieren](dedicated-raid.md) Anleitung.



### Umfassende Methode

Für den eigentlichen Reset-Prozess muss die benötigte Wipe ISO gemountet und ausgeführt werden. ISO-Dateien kannst du entweder über das iLO oder die Remote-Konsole mounten. Falls du noch nicht genau weißt, wie das geht, schau dir bitte unsere [Eigene ISO](http://localhost:3000/guides/docs/dedicated-iso) Anleitung an.

Mount die folgende Wipe ISO-Datei auf deinem Server und starte ihn neu:


```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

Nach dem Neustart sollte die Wipe ISO automatisch erkannt und geladen werden. Verbinde dich mit deinem Dedicated Server über eine Remote-Konsole (HTML5, .NET, Java Web Start) deiner Wahl.

Dort siehst du, wie der Server den Prozess automatisch ausführt und wie weit der Formatierungsfortschritt ist. Dein Server überschreibt alle bestehenden Volumes und löscht damit effektiv alle Daten. Je nach Größe des SSD-Speichers kann das zwischen 45 Minuten und 2 Stunden dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)



:::danger
Dieser Vorgang ist unwiderruflich und endgültig. Es können keine zusätzlichen Backups im Nachhinein eingespielt werden.
Wir raten dringend davon ab, diesen Prozess durchzuführen, wenn du dir nicht absolut sicher bist, dass du alle deine Daten löschen möchtest.
:::



## Fazit

Glückwunsch, du hast die Daten auf deinem Dedicated Server erfolgreich gelöscht. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂


