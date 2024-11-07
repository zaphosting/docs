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

Du hast derzeit Probleme mit deinem Server oder möchtest die Daten des Servers komplett platt machen? Das ist kein Problem und lässt sich einfach umsetzen. Die bestehenden Daten deines Servers können beispielsweise mittels einer Wipe ISO vollständig gelöscht werden. 

<InlineVoucher />

## Vorbereitungen

Zunächst einmal muss die notwendige Wipe ISO eingelegt und ausgeführt werden, damit der eigentliche Prozess zum Zurücksetzen der Daten durchgeführt werden kann. ISO Dateien können entweder über die ILO oder über die Remote Konsole eingebunden werden. Solltest du bis jetzt noch nicht genau wissen, wie das funktioniert, dann schaue dir dazu am besten die [Eigene ISO](dedicated-iso.md) Anleitung an. 

Binde nun die folgende ISO bei deinem Server ein und starte diesen im Anschluss neu:

```
http://185.223.30.65/wipe.iso
```



## Zurücksetzen der Daten

Nach dem Neustart des Servers sollte die Wipe ISO automatisch erkannt und geladen werden. Verbinde dich nun mit einer Remote Konsole deiner Wahl auf deinen Dedicated Server.

![](https://screensaver01.zap-hosting.com/index.php/s/4gmiB5N4knB5eZT/preview)



Dort kannst du nun erkennen, wie der Server automatisch den Prozess durchführt und wie weit der Fortschritt der Formatierung dabei ist. Dein Server überschreibt einmalig alle vorhandenen Datenträger, somit sind keine Daten mehr vorhanden. Je nach Größe der SSD kann dieser Prozess circa 45 Minuten - 2 Stunden dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/oymERF7xB8wGDes/preview)



:::danger 
Wichtig: Dieser Vorgang kann nicht rückgängig gemacht werden und ist dementsprechend endgültig. Es bestehen keine zusätzlichen Backups, welche zur Not eingespielt werden können. Solltest du dir daher nicht zwingend sicher sein, ob du deine Daten löschen möchtest, dann raten wir dir von diesem Prozess ab. 
:::





## Abschluss

Glückwunsch, du hast die Daten deines Dedicated Server erfolgreich zurückgesetzt. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
