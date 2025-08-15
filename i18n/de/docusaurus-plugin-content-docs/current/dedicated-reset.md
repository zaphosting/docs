---
id: dedicated-reset
title: "Dedicated Server: Server zurücksetzen"
description: Informationen, wie du deinen Dedicated Server von ZAP-Hosting zurücksetzen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server zurücksetzen
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Dein Server funktioniert nicht mehr so, wie er sollte oder du würdest gerne noch einmal von vorne anfangen, weißt aber nicht wie? Keine Sorge, du kannst deinen Server zurücksetzen, indem du ihn neu installierst. In dieser Anleitung wird erklärt, wie das funktioniert und was du dabei beachten musst.

<InlineVoucher />

## Vorbereitungen

Bevor du die Daten von deinem Server zurücksetzt, solltest du dir bewusst sein, dass die vorhandenen Daten verloren gehen. Wenn du wichtige Daten besitzt, wäre dies der richtige Zeitpunkt, um deine Daten zu sichern, bevor du mit der Neuinstallation beginnst. Danach musst du entscheiden, wie du dein System genau zurücksetzen möchtest.



## Zurücksetzen der Daten

Es gibt zwei verschiedene Möglichkeiten, die Daten zurückzusetzen, je nach Bedarf und Situation. Im Folgenden erläutern wir beide Möglichkeiten im Detail:

- Zurücksetzen der Daten mithilfe der RAID-Konfiguration (Schnelle Methode)
- Zurücksetzen der Daten mithilfe von Wipe ISO (Umfangreiche Methode)

Beim Zurücksetzen der Daten mit der RAID-Konfiguration werden die vorhandenen Daten logisch gelöscht und durch neue Daten ersetzt, was eine schnelle und effiziente Lösung für eine Neuinstallation des Systems ist.

Im Vergleich dazu umfasst das Zurücksetzen mit Wipe ISO mehrere Löschzyklen, die sicherstellen, dass alle Daten dauerhaft und unwiderruflich entfernt werden. Diese Methode eignet sich am besten für eine vollständige Systemlöschung, wenn eine gründliche Datenlöschung erforderlich ist.



### Schnelle Methode

Wie bei der Konfiguration des RAID muss die Raid-Konfiguration während des Bootvorgangs mit der Taste `F8` geöffnet werden. Öffne in der Raid-Konfiguration den Menüpunkt **Delete Logical Drive**. Dadurch sollte die aktuelle RAID-Konfiguration und die Festplatten dargestellt werden. Drücke die Taste F8, um das bestehende RAID zu löschen. Dies muss durch Drücken der `F3` Taste bestätigt werden.

Navigieren dann wieder zur Raid-Konfiguration und öffne den Menüpunkt **Create Logical Drive**. Wähle nun die Festplatten und die gewünschte RAID-Konfiguration (Raid 0/1) aus und erstelle das RAID, indem du es mit der Enter Taste bestätigst.

Falls du noch nicht damit vertraut bist, wie du das RAID auf deinem System konfigurierst, empfehlen wir dir auch einen Blick in unsere allgemeine Anleitung [RAID konfigurieren](dedicated-raid.md) zu werfen.



### Umfangreiche Methode

Zunächst einmal muss die notwendige Wipe ISO eingelegt und ausgeführt werden, damit der eigentliche Prozess zum Zurücksetzen der Daten durchgeführt werden kann. ISO Dateien können entweder über die ILO oder über die Remote Konsole eingebunden werden. Solltest du bis jetzt noch nicht genau wissen, wie das funktioniert, dann schaue dir dazu am besten die [Eigene ISO](dedicated-iso.md) Anleitung an. 

Binde nun die folgende ISO bei deinem Server ein und starte diesen im Anschluss neu:

```
http://185.223.30.65/wipe.iso
```

Nach dem Neustart des Servers sollte die Wipe ISO automatisch erkannt und geladen werden. Verbinde dich nun mit einer Remote Konsole (HTML5, .NET, Java Web Start) deiner Wahl auf deinen Dedicated Server.

Dort kannst du nun erkennen, wie der Server automatisch den Prozess durchführt und wie weit der Fortschritt der Formatierung dabei ist. Dein Server überschreibt einmalig alle vorhandenen Datenträger, somit sind keine Daten mehr vorhanden. Je nach Größe der SSD kann dieser Prozess circa 45 Minuten - 2 Stunden dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/oymERF7xB8wGDes/preview)



:::danger 
Wichtig: Dieser Vorgang kann nicht rückgängig gemacht werden und ist dementsprechend endgültig. Es bestehen keine zusätzlichen Backups, welche zur Not eingespielt werden können. Solltest du dir daher nicht zwingend sicher sein, ob du deine Daten löschen möchtest, dann raten wir dir von diesem Prozess ab. 
:::





## Abschluss

Glückwunsch, du hast die Daten deines Dedicated Server erfolgreich zurückgesetzt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
