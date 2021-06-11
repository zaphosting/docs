---
id: dedicated_ilo
title: iLO
sidebar_label: iLO
---

## ❓ Was ist das und was kann es?
Auf unseren Enterprise Dedicated Servern wird die Verwaltungsoberfläche iLO eingesetzt, sie ermöglicht eine uneingeschränkte volle Verwaltbarkeit deines Servers.
Zu ihren Funktionsumfängen zählen z.B. Server Start/Stop/Reboot, Management-Consolen über Java oder HTML5 und das einbinden von Bootmedien (ISOs).
Du solltest mit einer grundsätzlichen Vorsicht dort Einstellungen verändern, bei falschen Änderungen könnte dies Probleme hervorrufen.

## ❓ Wie komme ich in die iLO?
Öffne mit einem Browser deiner Wahl das Server Dashboard deines ZAP Dedicated Servers. Dort findest du bereits die wichtigsten Informationen zu deiner iLO.
Um die iLO zu aktivieren klicke ganz einfach auf "iLO aktivieren"
![](https://screensaver01.zap-hosting.com/index.php/s/DDrZPSrLrPXtfnE/preview)

Bitte beachte dass es einige Augenblicke dauern kann bis deine iLO vollständig zur Verfügung steht. 
Wenn das System die Verwaltungsoberfläche gestartet hat und sie für dich zugänglich ist, werden dir die Logininformationen angezeigt.
Um die iLO zu öffnen klicke auf die angezeigte IP-Adresse und verwende die Logindaten um dich anzumelden.

![](https://screensaver01.zap-hosting.com/index.php/s/g4jyqgfM6p7akb3/preview)

*** 

Nach einem kurzen Augenblick bist du nun in der Verwaltungsoberfläche deines Dedicated Servers eingeloggt. 
Hierbei findest du viele wichtige Informationen auf den ersten Blick:

![](https://screensaver01.zap-hosting.com/index.php/s/ST65wBDs4bJgjJJ/preview)

### Overview
* **System Health**
Sollte im Regelfall grün sein, hierbei wird bei jedem Serverstart die Hardware deines Servers überprüft, sofern irgendwelche Unstimmigkeiten vorliegen meldet das System diese sofort automatisiert an einen Techniker.
Mögliche Varianten wären: Grün (OK), Gelb (Degraded) und Rot (Critical) es kann durchaus vorkommen dass der Server deine SSD als Degraded anzeigt, dies ist in der Regel jedoch kein Grund zur Sorge.
Natürlich kannst du den Support darauf hinweisen, dann werden wir gerne für dich prüfen ob handlungsbedarf besteht. Sollte der System-Status auf Rot also "Critical" stehen, ist der Support umgehend zusätzlich in Kenntnis zu setzen.
Als erster Problemlösungsschritt sollte immer ein kompletter Neustart des Systems durchgeführt werden.

* **iLO Health**
Zeigt weitere Informationen zu den iLO-Parametern, hierbei sollte es keine nennenswerten Veränderungen geben.
Ein eingreifen in diesem Tab ist in der Regel nicht erforderlich.

* **Server Power**
Zeigt dir den Status deines Servers, z.B. "ON" bedeutet das dein Server läuft.

* **Integrated Remote Console**
Diese Funktion bietet dir die Möglichkeit visuell auf deinen Server zu schauen und dort auch Befehle auszuführen.
Die Remote Consoles unterscheiden sich in zwei Aspekten. 
HTML5 wird direkt in deinem Browser gestartet und benötigt keine weitere Drittanbieter Software.
Java Web Start nutzt wie der Name schon sagt Java um die Verwaltungskonsole zu öffnen.
Alle auftretenden Sicherheitswarnungen kannst du bedenkenlos ignorieren.
Wie die Schritt für Schritt Verbindung zu deinem Server mit einer Remote Console erfolgt, kannst du in den nächsten Schritten nachlesen.

* **Active Sessions**
Du kannst hier alle Nutzer sehen welche derzeit mit deiner iLO verbunden sind. 

### iLO Event Log
Speichert alle Veränderungen welche über die iLO getätigt werden, z.B. Logins oder Serverstarts/Stops sowie Veränderungen der Settings.

### Integrated Management Log
Der Integrated Management Log speichert alle Hardware relevanten Informationen ab, beispielweise die Ergebnisse des POST (Power on Self Test) welcher bei jedem Serverstart ausgeführt wird.
Sollte es Probleme mit der Technik deines Dedicated Servers geben werden diese hier abgespeichert und in die bekannten Dringlichkeitsstufen kategorisiert.

### Virtual Media
Das einbinden von eigenen Bootmedien (ISOs) erfolgt durch das Untermenü "Connect CD/DVD-ROM"
Die Bootreihenfolge des Servers ist so konfiguriert das sie standardmäßig immer eine eingetragene ISO zuerst booten würde.
Die Reihenfolge kann auch im Menüpunkt "Boot Order" verändert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/B9ApD7HeSXT9NFf/preview)

Bei "Scripted Media URL" ist der volle Link der einzubindenden ISO einzutragen, z.B. http://meinedomain.de/bootimage.iso
Deine Angabe muss direkt auf die ISO zeigen, also auch mit .iso enden.
Klicke danach auf "Insert Media" und starte deinen Server in "Power Management" neu. (alternativ ist ein Klick auf System Reset auch möglich)
Der Server wird nach dem Neustart deines eingelegte ISO laden.

### Power Management
In diesem Menüpunkt kann alles gemacht werden was das Starten & Stoppen deines ZAP Dedicated Servers betrifft. 

![](https://screensaver01.zap-hosting.com/index.php/s/gzp2Cxg3nQC2Q8G/preview)

* **Gracefull Power Off**
Stoppt deinen Server schonend, das selbe Ergebnis wie wenn die Power Taste deines Notebooks/Computers einmal kurz gedrückt wird.
Alle Anwendungen werden korrekt beendet und der Server fährt dann geplant herunter.
Dies kann natürlich je nach Anwendungen einige Zeit in Anspruch nehmen.

* **Force Power Off**
Wenn dein Server sofort ohne Wartezeit ausgeschaltet werden muss, ist dies die richtige Option. Sie kommt dem ziehen des Stromkabels gleich.
Das System geht ohne Verzögerung sofort aus.

* **Force System Reset**
Verursacht einen sofortigen Neustart deines Systems.

### Power Meter
Zeigt dir den durchschnittlichen Stromverbrauch deines Systems an, grundsätzlich gilt je höher die Stromabnahme, desto höher die Last auf deinem System.

### Power Settings
Dort findest du die Auswahl von verschiedenen Energieeinstellungen

* **Dynamic Power Savings Mode**
Ist ein sehr gut ausbalancierter Modus, dein Dedicated Server taktet entsprechend der aktuellen Leistungsaufnahme und arbeitet sehr Effizienz. Dein Server kann in Augenblicken bei hohen Performanceansprüchen, dir die nötige Power zur Verfügung stellen, sollte im Augenblick ein geringer Verbrauch sein wird entsprechend die Leistungsaufnahme reduziert. Dies spart Kosten und schont natürlich die Umwelt.

* **Static Low Power Mode**
In diesem Modus wird dein Dedicated Server auf dem minimalen Leistungsniveau gehalten. Dies gleicht der Einstellung Energiesparmodus auf deinem Computer.

* **Static High Performance Mode**
Stellt durchgehend die maximale Leistung zur Verfügung, hierbei werden keine nennenswerten Energieeinsparungen erzielt.
Grundsätzlich raten wir sofern nicht begründet, davon ab.

* **OS Control Mode**
Deaktiviert die Energieeinstellungen über die iLO selbst, das heißt das diese nicht mehr aktiv in die Regulation eingreifen wird.
Alles weitere muss dann in deinem Betriebssystem bspw. mit Energiesparrichtlinien konfiguriert werden.

### Network
Zeigt dir die Netzwerkkonfiguration deiner iLO, bitte beachte das diese Einstellungen **nichts** mit der IP deines Servers zu tun haben.

## 💻 Remote Consoles (Bildschirm)

> Um deinen Server einzurichten oder falls der Zugriff über das Netzwerk nicht funktioniert. Hast du jederzeit die Möglichkeit direkt auf deinen Server zu schauen als würdest du einen Bildschirm anschließen.

Die iLO bietet dir standardmäßig zwei verschiedene Arten einer Remote Console:

![](https://screensaver01.zap-hosting.com/index.php/s/mwbB8kTZLRFEgPw/preview)

### Die HTML5 Console
Mit einem einfachen Klick bist du schon auf deinem Server, du benötigst keine weitere Drittanbieter Software und es wird direkt in deinem Browser gestartet.
Die Console steht den Funktionen in nichts nach, sie bietet dir viele weitere nützliche Tools:

![](https://screensaver01.zap-hosting.com/index.php/s/qzNfYob7J4F9Zzf/preview)

* 1 - Einstellungen der Power-Verwaltung (Starten, Stoppen, Rebooten) des Servers
* 2 - Das Senden von Tastenkombinationen (z.B. STRG + ALT + DEL)
* 3 - Einbinden von ISOs > CD/DVD > Scripted Media URL
* 4 - System Health
* 5 - Server Power Status (ON / OFF)

Sofern dein Server über eine grafische Oberfläche verfügt, kannst du deinen Mauszeiger ganz normal verwenden, Eingaben deiner Tastatur werden ebenfalls übertragen.

### Die Java Console
Um die diese Console zu verwenden ist es erforderlich das Java installiert ist. (Kann auf java.com heruntergeladen werden)
> Alle auftretenden Meldungen zu Sicherheitsbedenken können ignoriert werden.

Nach dem öffnen der Datei wird uns folgende Meldung angezeigt, diese wird mit "Weiter" bestätigt.
![](https://screensaver01.zap-hosting.com/index.php/s/WWN28xzEfgkqrmx/preview)

Wir bestätigen das Risiko und bestätigen mit "Ausführen"

![](https://screensaver01.zap-hosting.com/index.php/s/YCSG9tjiQnGCfs9/preview)

Es öffnet sich nun die Java-Console.
> Die Anwendung stellt häufig das Tastaturlayout auf "EN" um.

![](https://screensaver01.zap-hosting.com/index.php/s/SxFkiqHPe4Yfrgr/preview)

* 1 - Einstellungen der Power-Verwaltung (Starten, Stoppen, Rebooten) des Servers
* 2 - Einbinden von ISOs > URL CD/DVD-ROM
* 3 - Das Senden von Tastenkombinationen (z.B. STRG + ALT + DEL)
* 4 - System Health
* 5 - Server Power Status (ON / OFF)

Sofern dein Server über eine grafische Oberfläche verfügt, kannst du deinen Mauszeiger ganz normal verwenden, Eingaben deiner Tastatur werden ebenfalls übertragen.

## 📌 Häufige Probleme, Tipps & Tricks

* Der Server hängt im POST (Power on Self Test) und bootet nicht mehr.
Verbinde dich mittels einer Remote Console und prüfe wo genau dein Server hängt. Zeigt er dort Fehler?
Schalte den Server unter Power Management für einige Sekunden aus (Force Power Off) und starte ihn dann wieder.
Sofern dein Server weiterhin nicht bootet, kontaktiere bitte den Support.

* ISO wird nicht geladen.
Prüfe ob der Link zu deiner ISO wirklich korrekt ist, der einfachste Test ist, füge den Link in deinem Browser ein, wenn ein Download startet ist alles korrekt.
Stelle sicher das der Link korrekt in Virtual Media eingetragen ist und der Server auch neugestartet wurde. Werfe außerdem einen Blick in die Boot Order ob CD/DVD Drive ganz oben steht.

* Mein Server braucht sehr lange zum booten.
Bei der eingesetzten Enterprise Hardware ist eine lange Bootzeit völlig normal, jede Systemkonfiguration hat ihre individuelle Bootzeit. Das Booten von circa 10-15 Minuten ist völlig normal.

* Ich kann die iLO nicht mehr öffnen
Stelle sicher das die iLO in deinem Server Dashboard aktiviert ist, aus Sicherheitsgründen schaltet sich die Verwaltungsoberfläche nach einiger Zeit automatisiert ab.
Du kannst selbstverständlich auch die iLO nochmals deaktivieren und wieder aktivieren. (Warte mindestens 5 Minuten nach dem aktivieren)

> Bei weiteren Fragen und Problemen steht dir unser Support jederzeit gerne mit Rat & Tat zur Verfügung!
