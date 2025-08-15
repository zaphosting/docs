---
id: dedicated-raid
title: "Dedicated Server: RAID konfigurieren"
description: Informationen, über die RAID Konfigurationsmöglichkeiten für deinen Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation 
sidebar_label: RAID konfigurieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RAID (Redundant Array of Independent Disks) ist eine Technologie, die mehrere Festplatten zu einem einzigen logischen Laufwerk zusammenfasst, um Datenredundanz und/oder Leistungssteigerung zu erreichen. Es gibt verschiedene RAID-Levels, die unterschiedliche Kombinationen aus Datenverteilung und Fehlertoleranz bieten.

<InlineVoucher />

## Verfügbare RAID Arten
Grundsätzlich gibt es verschiedenste Arten von RAID-Möglichkeiten. Dadurch dass unsere Dedicated Server für SSDs 2 Bays bereitstellen,
ist eine Konfiguration von RAID0 oder RAID1 möglich. Andere Arten von RAID würden mehr Datenträger erfordern.

:::info
RAID0 hat geringfügig schnellere Lese- und Schreibraten
:::

### RAID0
Bei dieser RAID-Konfiguration werden alle vorhandenen Datenträger in ein großes Volume zusammengefasst, beispielsweise aus 2 jeweils 1 TB SSDs,
würde eine 2 TB Partition entstehen, welche dann komplett genutzt werden könnte.
Es besteht keine Datenredundanz, im Falle eines technischen Defektes ist also ein Datenverlust häufig unausweichlich, da deine Daten in verschiedenen Sektoren geschrieben werden.
Solltest du also sensible Daten auf deinem System lagern ist grundsätzlich von RAID0 abzuraten oder es sollten zumindest regelmäßige Systembackups durchgeführt werden.

:::info
Wenn dein Dedicated Server lediglich 1 SSD hat, ist dies automatisch ein RAID0
:::

### RAID1
Diese Konfiguration unterscheidet sich deutlich von RAID0, hier besteht eine Redundanz deiner Daten, das heißt, dass alles, was du auf deinem Server abspeicherst, dupliziert wird.
Es wird also auf beiden SSDs gespiegelt und würde bei einer Ausfallquote von 50%, also einer 1 SSD weiterhin problemlos zur Verfügung stehen. 
Bei einem technischen Defekt müsste lediglich die betroffene SSD ausgetauscht werden und dein Server würde das RAID wieder erneut aufbauen, das heißt die Daten spiegeln.
Gerade für sensiblere Daten ist diese Konfiguration sehr empfehlenswert, dennoch ist sie keine Alternative, um keine Backups mehr anfertigen zu müssen.

:::info
Regelmäßige Backups aller wichtigen Daten sind unerlässlich!
:::

## Der Konfigurationsassistent

Zuerst muss der Konfigurator für RAIDs aufgerufen werden, dies wird mit `F8` während dem Bootprozess erledigt.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Drücke `F8` an dieser Stelle des Bootvorgangs

***

![](https://screensaver01.zap-hosting.com/index.php/s/W4WSnmkeRJXTa9y/preview)

Nach einigen Sekunden wird die Konfigurationsoberfläche geladen

***

Hier finden sich nun einige verschiedene Menüpunkte:

* Create Logical Drive
Das Erstellen eines neuen Volumes

* View Logical Drive
Hier kann die aktuelle RAID-Konfiguration eingesehen werden. 

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/H9yRPPnAwkHGmyr/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive
Damit kann die aktuelle RAID-Konfiguration gelöscht werden, um beispielsweise eine neue zu erstellen.

* Select Boot Volume
Hier könnte von einem anderen Speichermedium gebootet werden, was in unserem Falle hier nicht notwendig ist.

* Manage License Keys
Hier muss nichts angepasst oder verändert werden, die Lizenzierung ist bereits vorkonfiguriert.

* Cache Settings
Die Cache-Option kann angepasst werden, um die Lese/Schreibraten der SSD nochmals etwas zu erhöhen.
Grundsätzlich wird bei jedem Schreibvorgang zur Sicherheit z.B. bei Spannungsverlust die letzten Datenblöcke zwischengespeichert.
Was einen minimalen Leistungsnachteil verursacht.

### Erstellen eines RAIDs

Zuerst stellen wir sicher das kein Volume erstellt wurde, hierzu öffnen wir `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/s4JM84K38negZiS/preview)

Wir drücken `F8`, um das bestehende RAID zu löschen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/NH94PZ3EkzXfwbS/preview)

Mit `F3` bestätigen wir das Löschen erneut

***

Nachdem das RAID erfolgreich gelöscht wurde, öffnen wir `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/Jb8ciXoDRWzLxmJ/preview)

Hier kannst du alle deine SSDs sehen und hast eine Auswahl der RAID-Konfigurationen.
Natürlich sind nicht alle dieser RAIDs in der aktuellen Konstellation umsetzbar.

Wir wählen in unserem Beispiel also das RAID0 oder RAID1.

:::info
Du kannst zwischen den Menüs mit TAB wechseln
:::

Wenn du das gewünschte RAID ausgewählt hast, kannst du deine Wahl mit `Enter` bestätigen.

:::info
Du kannst nun mit `ESC` den Konfigurationsassistenten verlassen.
:::

### Boot Volume erstellen

Sofern dein RAID in irgendeiner Form modifiziert wurde, muss zwingend zum Abschluss immer ein das Boot Volume definiert werden.
Dies kann unter **Select Boot Volume** erledigt werden, wähle hierbei dein Speichermedium, andernfalls wird der Server in einer Bootschleife hängen.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Press `F8` to save as bootvolume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Danach hast du die Möglichkeit, mit `F8` direkt dein System neuzustarten oder mit `Enter` weitere Einstellungen im RAID-Manager vorzunehmen.
Bedenke, dass das Boot Volume **immer** nach Veränderungen deines RAIDs angepasst werden muss.





## Abschluss

Glückwunsch, du hast das RAID erfolgreich konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
