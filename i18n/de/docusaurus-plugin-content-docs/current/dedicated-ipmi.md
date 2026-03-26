---
id: dedicated-ipmi
title: "Dedicated Server: Serververwaltung via IPMI"
description: "Entdecke, wie du deinen Enterprise Dedicated Server mit IPMI komplett verwaltest für nahtlose Kontrolle und Überwachung → Jetzt mehr erfahren"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Unsere AMD Ryzen Dedicated Server werden über **Supermicro IPMI** verwaltet, eine leistungsstarke und bewährte Out-of-Band-Management-Lösung, die speziell für professionelle Serverumgebungen entwickelt wurde. Im Gegensatz zu unseren Intel-basierten Konfigurationen, die auf HPE iLO setzen, nutzt die AMD Ryzen Plattform Supermicro-Hardware und bietet daher IPMI als native Verwaltungsoberfläche.

Supermicro IPMI ermöglicht dir die vollständige Fernsteuerung deines Servers, unabhängig vom Zustand des Betriebssystems. Du kannst das System ein- oder ausschalten, neu starten, die Hardware-Gesundheit überwachen, Sensoren auslesen und über die Remote-Konsole direkt am Server arbeiten, als wärst du vor Ort. Das sorgt für maximale Kontrolle, schnelle Reaktionszeiten und zuverlässige Administration – selbst in kritischen Situationen.


## IPMI-Zugang
Öffne das Server-Dashboard deines ZAP Dedicated Servers mit einem Browser deiner Wahl. Dort findest du bereits die wichtigsten Infos zu deinem IPMI.
Um das IPMI zu aktivieren, klicke einfach auf **IPMI aktivieren**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Bitte beachte, dass es ein paar Sekunden dauern kann, bis dein IPMI vollständig verfügbar ist. 
Sobald das System die Management-Oberfläche gestartet hat und sie erreichbar ist, siehst du die Login-Daten.
Um das IPMI zu öffnen, klicke auf die angezeigte IP-Adresse und melde dich mit den Zugangsdaten an.



## Überblick

Neugierig, wie die IPMI-Verwaltungsoberfläche aufgebaut ist und wofür die einzelnen Bereiche da sind? Dieser Überblick stellt die verschiedenen Seiten der Oberfläche vor und zeigt, wie Monitoring, Hardware-Insights und Remote-Management organisiert sind.

Er bietet dir einen geführten Einstieg, um die IPMI-Umgebung zu erkunden und zu verstehen, wie die einzelnen Ansichten zusammenwirken, um dir volle Kontrolle und Transparenz über deinen Server zu geben.

### Dashboard

Bietet eine konsolidierte Übersicht über den aktuellen Serverzustand und wichtige Verwaltungsfunktionen. Systeminformationen wie Hardwaremodell, BIOS-Version, BMC-Firmware und Betriebsstatus werden zur schnellen Orientierung angezeigt.

Der Power-Bereich zeigt den aktuellen Stromzustand und den Stromverbrauch an, sodass du direkt das Ein- und Ausschalten sowie Neustarts steuern kannst und gleichzeitig Einblick in den Energieverbrauch bekommst.

Der direkte Zugriff auf die Remote-Konsole ist von hier aus möglich, was dir volle Fernsteuerung von Tastatur, Video und Maus ermöglicht – ideal für Betriebssysteminstallationen, Troubleshooting und Wartung, unabhängig vom Serverzustand.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### System

#### Komponenteninfo

Zeigt eine detaillierte Übersicht der verbauten Hardware-Komponenten und deren aktuellen Status. Informationen werden für CPU, RAM-Module, Netzteile, Stromversorgung, Netzwerk-AOC, Sensoren und Kühlsysteme bereitgestellt.

Jeder Bereich präsentiert hardware-spezifische Details wie Modellinformationen, Konfiguration und Betriebszustand. Statusanzeigen helfen dir, gesunde Komponenten schnell zu erkennen sowie Warnungen oder Fehler zu identifizieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Health Event Log

Listet systembezogene Ereignisse auf, die vom Management-Controller protokolliert wurden, und bietet eine chronologische Historie von Hardware- und Gesundheitsaktivitäten. Einträge umfassen Stromereignisse, Bootprozesse, Sensor-Grenzwertverletzungen, Temperaturwarnungen, Spannungsunregelmäßigkeiten und Hardwarefehler.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Storage Monitoring

Gibt einen Überblick über die angeschlossenen Speichergeräte und deren aktuellen Betriebsstatus. Informationen umfassen erkannte Laufwerke, Schnittstellentyp, Kapazität und Gesundheitsindikatoren, wie sie vom Controller und den verfügbaren Sensoren gemeldet werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Konfiguration

#### Account Services

Zeigt eine Liste der bestehenden Benutzerkonten mit ihren zugewiesenen Rollen und Berechtigungsstufen. Die Seite dient zur Information, damit du sehen kannst, welche Accounts Zugriff auf die Verwaltungsoberfläche haben.

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Benachrichtigungen

Zeigt die aktuelle Konfiguration für Systembenachrichtigungen und Alarmbehandlung. Hier siehst du, welche Ereignistypen Benachrichtigungen auslösen können, z.B. Hardwarefehler, Temperaturgrenzwerte, Stromprobleme oder Sensorwarnungen.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Netzwerk

Zeigt die Netzwerkkonfiguration der Verwaltungsoberfläche. Dazu gehören die zugewiesene IP-Adresse, Subnetzmaske, Gateway, MAC-Adresse und der aktuelle Verbindungsstatus des IPMI-Netzwerkports.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Virtuelle Medien

Ermöglicht die Nutzung von Remote-Medienabbildern über die Verwaltungsoberfläche. Hier siehst du den Status der eingebundenen virtuellen Medien wie ISO-Images oder entfernte Speichergeräte, die mit dem Server verbunden sind.

Virtuelle Medien können genutzt werden, um das System zu booten, ein Betriebssystem zu installieren oder Wiederherstellungs- und Wartungsaufgaben durchzuführen – ganz ohne physischen Zugriff auf die Hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### BMC-Einstellungen

Zeigt Konfigurationsdetails des Baseboard Management Controllers. Dieser Bereich liefert Infos zur Firmware-Version, Systemidentifikationsdaten und zum allgemeinen Verhalten des Controllers.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Fernsteuerung

Bietet Zugriff auf Funktionen für die direkte Ferninteraktion mit dem Server. Hier findest du Power-Control-Optionen wie Einschalten, Ausschalten, Neustart und kontrolliertes Herunterfahren.

Es dient auch als Einstiegspunkt für Remote-Management-Features, die eine Interaktion mit dem System unabhängig vom Zustand des Betriebssystems ermöglichen.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Wartung

#### Firmware-Verwaltung

Gibt Einblick in den Firmware-Stand der Management-Umgebung, inklusive der aktiven BMC-Firmware und zugehöriger Komponenten. Firmware-Versionen und deren aktueller Status können überprüft werden, um die Konsistenz des Management-Stacks sicherzustellen. Updates oder Änderungen sind für Kunden absichtlich nicht verfügbar.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Wartungsprotokoll

Erfasst wartungsbezogene Aktivitäten und Systemaktionen, die über die Verwaltungsoberfläche durchgeführt wurden. Protokollierte Einträge umfassen Konfigurationsänderungen, firmwarebezogene Operationen, Resets und administrative Aktionen.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Häufige Probleme, Tipps & Tricks

- **Der Server bootet nicht oder bleibt beim POST hängen:**
   Wenn der Server den Bootvorgang nicht abschließt oder beim POST hängen bleibt, öffne die Remote-Konsole, um die genaue Phase zu identifizieren, in der der Prozess stoppt. Dort könnten Hardware-Initialisierungsmeldungen oder Fehlermeldungen sichtbar sein.
   Führe einen Power-Cycle über die Power-Control-Optionen durch, indem du das System für ein paar Sekunden zwangsweise ausschaltest und dann wieder startest. Wenn der Server weiterhin nicht bootet, kontaktiere den Support.

- **Remote-Konsole öffnet sich nicht oder bleibt schwarz:**
   Stelle sicher, dass die Remote-Konsole nicht bereits von einer anderen Verbindung genutzt wird. Schließe bestehende Sessions und versuche es erneut.
   Manchmal hilft es, den Browser zu aktualisieren oder die Konsole neu zu öffnen, um Ladeprobleme zu beheben. Wenn das Problem bleibt, überprüfe, ob der Server eingeschaltet und erreichbar ist.

- **Virtuelles Medium ISO wird nicht erkannt:**
   Prüfe, ob die ISO-Quelle erreichbar ist und die Datei direkt zugänglich ist, z.B. durch Öffnen des Links im Browser.
   Vergewissere dich, dass das virtuelle Medium korrekt eingebunden ist und starte den Server nach dem Einbinden der ISO neu. Kontrolliere außerdem die Bootreihenfolge, damit virtuelle CD/DVD-Medien priorisiert werden.

- **Der Server braucht lange zum Starten:**
   Lange Bootzeiten sind bei Enterprise-Hardware normal. Hardware-Initialisierung, Controller-Checks und Memory-Training können mehrere Minuten dauern, besonders nach einem kompletten Power-Cycle.

- **IPMI-Oberfläche ist vorübergehend nicht erreichbar:**
   Nach Konfigurationsänderungen oder längerer Inaktivität kann die Verwaltungsoberfläche vorübergehend nicht erreichbar sein. Warte ein paar Minuten und versuche es erneut.
   Wenn der Zugriff nicht zurückkehrt, kontaktiere den Support, um den Status der Management-Oberfläche zu prüfen.



## Abschluss

Damit sollte dir die Administration deutlich leichter fallen, sobald du alles in Ruhe durchgelesen hast. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂