---
id: dedicated_raid
title: RAID konfigurieren
sidebar_label: RAID konfigurieren
---

> Wir bieten Dedicated Server mit bis zu 2 SSDs an, dies ermöglicht ein RAID0 oder RAID1

## ❓ Welche RAID-Typen gibt es?
Grundsätzlich gibt es verschiedenste Arten von RAID-Möglichkeiten. Dadurch das unsere Dedicated Server für SSDs 2 Bays bereitstellen,
ist eine Konfiguration von RAID0 oder RAID1 möglich. Andere Arten von RAID würden mehr Datenträger erfordern.

> RAID0 hat geringfügig schnellere Lese- und Schreibraten

### 📌 RAID0
Bei dieser RAID-Konfiguration werden alle vorhandenen Datenträger in ein großes Volume zusammengefasst, beispielsweise aus 2 jeweils 1 TB SSDs,
würde eine 2TB Partition entstehen welche dann komplett genutzt werden könnte.
Es besteht keine Datenredundanz, im Falle eines technischen Defektes ist also ein Datenverlust häufig unausweichlich da deine Daten in verschiedenen Sektoren geschrieben werden.
Solltest du also sensible Daten auf deinem System lagern ist grundsätzlich von RAID0 abzuraten oder es sollten zumindest regelmäßige Systembackups durchgeführt werden.

> Wenn dein Dedicated Server lediglich 1 SSD hat ist dies automatisch ein RAID0

### 📌 RAID1
Diese Konfiguration unterscheidet sich deutlich von RAID0, hier besteht eine Redundanz deiner Daten, das heißt das alles was du auf deinem Server abspeicherst dupliziert wird.
Es wird also auf beiden SSDs gespiegelt und würde bei einer Ausfallquote von 50%, also einer 1 SSD weiterhin problemlos zur Verfügung stehen. 
Bei einem technischen Defekt müsste lediglich die betroffene SSD ausgetauscht werden und dein Server würde das RAID wieder erneut aufbauen, das heißt die Daten spiegeln.
Gerade für sensiblere Daten ist diese Konfiguration sehr empfehlenswert, dennoch ist sie keine Alternative um keine Backups mehr anfertigen zu müssen.

> Regelmäßige Backups aller wichtigen Daten sind unerlässlich!

## 🖥️ Das Konfigurationsmenü

Zuerst muss der Konfigurator für RAIDs aufgerufen werden, dies wird mit `F8` während dem Bootprozess erledigt.

![](https://screensaver01.zap-hosting.com/index.php/s/9srD7FgQkkbp9MA/preview)

Drücke `F8` an dieser Stelle des Bootvorgangs

***

![](https://screensaver01.zap-hosting.com/index.php/s/dm9PNkQNYTjb3nA/preview)

Nach einigen Sekunden wird die Konfigurationsoberfläche geladen

***

Hier finden sich nun einige verschiedene Menüpunkte:

* Create Logical Drive
Das erstellen eines neuen Volumes

* View Logical Drive
Hier kann die aktuelle RAID-Konfiguration eingesehen werden. 

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/NirypdWZffbTAAq/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/kxjN5jrxB9SKNjd/preview)
***

* Delete Logical Drive
Damit kann die aktuelle RAID-Konfiguration gelöscht werden, um beispielsweise eine neue zu erstellen.

* Select Boot Volume
Hier könnte von einem anderen Speichermedium gebootet werden, was in unserem Falle hier nicht notwendig ist.

* Manage License Keys
Hier muss nichts angepasst oder verändert werden, die Lizenzierung ist bereits vorkonfiguriert.

* Cache Settings
Die Cache Option kann angepasst werden um die Lese/Schreibraten der SSD nochmals etwas zu erhöhen.
Grundsätzlich wird bei jedem Schreibvorgang zur Sicherheit z.B. bei Spannungsverlust die letzten Datenblöcke zwischengespeichert.
Was einen minimalen Leistungsnachteil verursacht.

### 💾 Erstellen eines RAIDs

Zuerst stellen wir sicher das kein Volume erstellt wurde, hierzu öffnen wir `Delete Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/J35NgxcjYGNCfE9/preview)

Wir drücken `F8` um das bestehende RAID zu löschen.

***

![](https://screensaver01.zap-hosting.com/index.php/s/zroezRTe7My3Tye/preview)

Mit `F3` bestätigen wir das löschen erneut

***

Nachdem das RAID erfolgreich gelöscht wurde öffnen wir `Create Logical Drive`

![](https://screensaver01.zap-hosting.com/index.php/s/6LeniycPw4HWzrS/preview)

Hier kannst du alle deine SSDs sehen und hast eine Auswahl der RAID-Konfigurationen.
Natürlich sind nicht alle dieser RAIDs in der aktuellen Konstellation umsetzbar.

Wir wählen in unserem Beispiel also das RAID0 oder RAID1.

> Du kannst zwischen den Menüs mit TAB wechseln

Wenn du das gewünschte RAID ausgewählt hast, kannst du deine Wahl mit `Enter` bestätigen.

> Du kannst nun mit `ESC` den Konfigurationsassistenten verlassen.
