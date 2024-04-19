---
id: dedicated-reset
title: "Dedicated Server: Server zurücksetzen"
description: Informationen, wie du deinen Dedicated Server von ZAP-Hosting zurücksetzen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server zurücksetzen
---



Du hast derzeit Probleme mit deinem Server oder möchtest die Daten des Servers komplett platt machen? Das ist kein Problem und lässt sich einfach umsetzen. Die bestehenden Daten deines Servers können beispielsweise mittels einer Wipe ISO vollständig gelöscht werden. 



## Vorbereitungen

Zunächst einmal muss die notwendige Wipe ISO eingelegt und ausgeführt werden, damit der eigentliche Prozess zum Zurücksetzen der Daten durchgeführt werden kann. ISO Dateien können entweder über die ILO oder über die Remote Konsole eingebunden werden. Solltest du bis jetzt noch nicht genau wissen, wie das funktioniert, dann schaue dir dazu am besten die [Eigene ISO](dedicated-iso.md) Anleitung an. 

Binde nun die folgende ISO bei deinem Server ein und starte diesen im Anschluss neu:

```
http://185.223.30.65/wipe.iso
```



## Zurücksetzen der Daten

Nach dem Neustart des Servers sollte die Wipe ISO automatisch erkannt und geladen werden. Verbinde dich nun mit einer Remote Konsole deiner Wahl auf deinen Dedicated Server.

![image](https://user-images.githubusercontent.com/26007280/217033937-d9b15ebc-eb3f-401f-95e2-5cc871f3b018.png)



Dort kannst du nun erkennen, wie der Server automatisch den Prozess durchführt und wie weit der Fortschritt der Formatierung dabei ist. Dein Server überschreibt einmalig alle vorhandenen Datenträger, somit sind keine Daten mehr vorhanden. Je nach Größe der SSD kann dieser Prozess circa 45 Minuten - 2 Stunden dauern.

![image](https://user-images.githubusercontent.com/13604413/159174333-ef109e7e-2e79-4201-81cf-b33301c4d0b7.png)



:::danger 
Wichtig: Dieser Vorgang kann nicht rückgängig gemacht werden und ist dementsprechend endgültig. Es bestehen keine zusätzlichen Backups, welche zur Not eingespielt werden können. Solltest du dir daher nicht zwingend sicher sein, ob du deine Daten löschen möchtest, dann raten wir dir von diesem Prozess ab. 
:::
