---
id: dedicated-raid
title: "Dedicated Server: RAID-Konfiguration"
description: "Entdecke, wie RAID-Konfigurationen die Datenperformance und Redundanz bei Dedicated Servern mit SSDs verbessern → Jetzt mehr erfahren"
sidebar_label: RAID konfigurieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RAID (Redundant Array of Independent Disks) ist eine Technologie, die mehrere Festplatten zu einem einzigen logischen Laufwerk kombiniert, um Datenredundanz und/oder höhere Performance zu erreichen. Es gibt verschiedene RAID-Level, die unterschiedliche Kombinationen aus Datenverteilung und Fehlertoleranz bieten.



## Verfügbare RAID-Typen
Unsere Dedicated Server bieten aktuell 2 SSD-Bays, was zwei mögliche RAID-Konfigurationen erlaubt. Die erste ist RAID0, das Volumes zu einem großen Volume zusammenfasst, und RAID1, das Volumes spiegelt und Daten redundant hält. Beide Varianten erklären wir dir im Folgenden genauer.

:::info
RAID0 bietet etwas schnellere Lese- und Schreibgeschwindigkeiten, da zwei Laufwerke parallel genutzt werden.
:::

### RAID0
Bei dieser RAID-Konfiguration werden alle vorhandenen Volumes zu einem großen Volume zusammengefasst, z.B. aus 2 SSDs mit je 1 TB. Es entsteht eine 2TB-Partition, die komplett genutzt werden kann.

Es gibt keine Datenredundanz, bei einem technischen Defekt droht also oft Datenverlust, da die Daten auf verschiedene Sektoren verteilt geschrieben werden.

Wenn du sensible Daten auf deinem System speicherst, solltest du RAID0 nicht verwenden oder zumindest regelmäßige System-Backups machen.

:::info
Hat dein Dedicated Server nur 1 SSD, ist das automatisch ein RAID0.
:::

### RAID1
Diese Konfiguration unterscheidet sich stark von RAID0, denn hier gibt es eine Datenredundanz. Alles, was du auf deinem Server speicherst, wird dupliziert.

Die Daten werden also auf beiden SSDs gespiegelt und sind bei einem Ausfall von 50 % der Laufwerke weiterhin verfügbar – deine Daten sind also mit 1 SSD sicher.

Im Falle eines technischen Defekts muss nur die betroffene SSD ersetzt werden, danach baut dein Server das RAID wieder auf, also spiegelt die Daten erneut.
Gerade bei sensiblen Daten ist diese Konfiguration sehr zu empfehlen, ersetzt aber kein Backup.

:::info
Regelmäßige Backups aller wichtigen Daten sind ein Muss!
:::

## Der Konfigurationsassistent

Beim Booten deines Servers muss das RAID-Konfigurationstool gestartet werden. Das geht, indem du im richtigen Boot-Schritt `F8` drückst.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Drücke hier `F8`, um das RAID-Konfigurationstool zu öffnen

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Nach ein paar Sekunden erscheint diese Konfigurationsübersicht.

***

Es gibt jetzt mehrere Menüoptionen:

* Create Logical Drive  
Erstellt ein neues Volume.

* View Logical Drive  
Zeigt die aktuelle RAID-Konfiguration an.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Delete Logical Drive  
Hier kannst du die aktuelle RAID-Konfiguration löschen, um z.B. eine neue zu erstellen.

* Select Boot Volume  
Hier kannst du ein anderes Speichermedium zum Booten auswählen, was bei uns aber nicht nötig ist.

* Manage License Keys  
Hier muss nichts angepasst werden, die Lizenzierung ist schon vorkonfiguriert.

* Cache Settings  
Die Cache-Option kann angepasst werden, um die Lese-/Schreibgeschwindigkeit der SSD etwas zu erhöhen.  
Grundsätzlich werden die letzten Datenblöcke bei jedem Schreibvorgang zwischengespeichert, z.B. aus Sicherheitsgründen bei Stromausfall.  
Das kann minimal die Performance beeinträchtigen.

### Neues RAID erstellen

Zuerst prüfen wir, ob kein Volume mehr existiert, dazu öffnen wir `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Wir drücken `F8`, um das bestehende RAID zu löschen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Mit `F3` bestätigen wir die Löschung.

***

Nachdem das RAID erfolgreich gelöscht wurde, öffnen wir `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)


Hier siehst du alle deine SSDs und kannst eine RAID-Konfiguration auswählen.  
Natürlich sind nicht alle RAID-Level in der aktuellen Hardware-Konstellation umsetzbar.

In unserem Beispiel wählen wir RAID0 oder RAID1.

:::info
Zwischen den Menüs kannst du mit `TAB` wechseln.
:::

Wenn du deine RAID-Konfiguration ausgewählt hast, bestätigst du mit `Enter`.

:::info
Den Konfigurationsassistenten kannst du mit `ESC` schließen.
:::

### Boot-Volume auswählen

Wenn du dein RAID verändert hast, musst du unbedingt das Boot-Volume auswählen.  
Das geht ganz einfach unter **Select Boot Volume** – wähle dort das logische Laufwerk, das du erstellt hast, sonst hängt dein Server in einer Bootschleife fest.

**Select Boot Volume**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Direct Attached Storage**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Logical Drive 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Drücke `F8`, um als Bootvolume zu speichern**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

Am Ende kannst du durch Drücken von `F8` dein System direkt neu starten oder mit `Enter` ins Hauptmenü zurückkehren.  
Wichtig: Das Boot-Volume muss **immer** gesetzt werden, wenn du deine RAID-Konfiguration geändert hast.



## Fazit

Glückwunsch, du hast dein RAID auf deinem Dedicated Server erfolgreich konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂