---
id: windrose-dashboard
title: "Windrose: Dashboard"
description: "Entdecke das ZAP-Hosting Windrose Dashboard und lerne, wie du dein Gameserver-Hosting verwaltest, die Performance überwachst und wichtige Steuerfunktionen effizient nutzt -> Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **Windrose** Dashboard ist der zentrale Bereich zur Verwaltung deines Gameservers in der ZAP-Hosting Weboberfläche. In dieser Anleitung erhältst du einen strukturierten Überblick über die verfügbaren Dashboard-Bereiche und lernst, wie du die wichtigsten Verwaltungs-, Überwachungs- und Hosting-Tools effizient nutzt.

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du die wichtigsten Seiten zur Steuerung und Überwachung deines **Windrose** Servers. Diese Seiten helfen dir, den aktuellen Serverzustand zu verwalten, technische Ereignisse zu prüfen und schnell auf essentielle Serviceinformationen zuzugreifen.

### Dashboard

Das **Dashboard** ist die Hauptübersichtsseite deines **Windrose** Servers. Hier findest du in der Regel die wichtigsten Service-Details auf einen Blick, wie den aktuellen Serverstatus, Serverstandort, Verbindungsadresse und Ressourcennutzung.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

Je nach aktueller Serverkonfiguration und Spielintegration zeigt das Dashboard auch zusätzliche Informationen wie die aktive Map, Servername, genutzten Speicher oder Spieler-Slot-Auslastung. Hier kannst du deinen Service auch direkt starten, stoppen oder neu starten.

Das Dashboard ist besonders praktisch, weil es Serversteuerung und Überwachung an einem Ort vereint. So kannst du schnell prüfen, ob dein Service online ist, und bei Bedarf sofort reagieren.

### Statistiken

Unter **Statistiken** kannst du die historischen Nutzungsdaten deines Servers einsehen. Das hilft dir, die Performance deines **Windrose** Hostings über die Zeit besser zu verstehen.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Die verfügbaren Diagramme zeigen meist Werte wie CPU-Auslastung, Speichernutzung und Slot-Auslastung. Du kannst oft zwischen verschiedenen Zeiträumen wechseln, um kurzfristige Spitzen oder langfristige Trends zu analysieren.

| Metrik | Zweck |
| --- | --- |
| CPU-Auslastung | Hilft dir, die Prozessorauslastung und mögliche Performance-Engpässe zu erkennen |
| Speichernutzung | Zeigt, wie viel RAM dein Server verwendet |
| Slot-Auslastung | Gibt an, wie viele verfügbare Spieler-Slots aktiv genutzt werden |

:::tip Performance-Analyse
Wenn du Lag, Abstürze oder langsame Reaktionszeiten bemerkst, ist die Statistikseite einer der besten Startpunkte für die Fehlersuche. Sie hilft dir zu erkennen, ob das Problem mit der Ressourcennutzung zusammenhängt oder nur zu bestimmten Zeiten auftritt.
:::

### DDoS-Manager

Der **DDoS-Manager** ermöglicht dir, Informationen zu erkannten und abgewehrten DDoS-Angriffen auf deinen Service einzusehen. Das ist hilfreich, wenn du ungewöhnliche Traffic-Muster verstehen oder Serviceunterbrechungen durch bösartigen Traffic untersuchen möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

Je nach gebuchten Optionen und dem verfügbaren Schutz an deinem Serverstandort kannst du auch aktive Angriffsinfos und Traffic-Daten in Echtzeit sehen.

:::info Verfügbarkeit des DDoS-Managers
Der DDoS-Manager ist nur verfügbar, wenn dein Service entweder eine dedizierte IP-Adresse oder die Zusatzoption **DDoS Manager Übersicht** beinhaltet. Falls das in deinem aktuellen Paket nicht enthalten ist, musst du deinen Service zuerst upgraden.
:::

### Logdateien

Wenn dein **Windrose** Server Fehler anzeigt oder sich unerwartet verhält, ist der Bereich **Logdateien** einer der wichtigsten Orte zum Nachschauen. Logdateien enthalten technische Ausgaben des Servers und können Warnungen, Startmeldungen und Fehlerdetails umfassen.

Diese Dateien sind besonders nützlich, wenn du die Ursache von Abstürzen, fehlgeschlagenen Starts oder Konfigurationsproblemen finden musst.

:::caution Einschränkungen bei der Log-Analyse
Wenn die Logausgabe unklar ist oder dir nicht hilft, das Problem zu identifizieren, solltest du den Support über die offizielle [Support-Seite](https://zap-hosting.com/en/customer/support/) kontaktieren. Füge eine klare Problembeschreibung und relevante Logmeldungen bei, um die Fehlersuche zu beschleunigen.
:::

### Ereignisprotokoll

Das **Ereignisprotokoll** gibt dir einen Überblick über Aktionen und Ereignisse rund um deinen Service. Dazu gehören Serverstarts, -stopps, Abstürze, Installationen, Updates und Backup-Aktivitäten.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Dieser Bereich ist besonders hilfreich, wenn du überprüfen möchtest, wann eine Änderung stattgefunden hat oder ob eine automatisierte Aufgabe erfolgreich ausgeführt wurde.

### Live-Konsole

Die **Live-Konsole** zeigt die Echtzeit-Ausgabe des Servers, während dein **Windrose** Server läuft. So kannst du überwachen, was gerade auf dem Server passiert, und Probleme sofort erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Wenn die Serversoftware es unterstützt, kannst du auch direkt über die Live-Konsole Befehle senden. Das ist praktisch für administrative Aktionen, die ohne Neustart ausgeführt werden sollen.

| Funktion | Beschreibung |
| --- | --- |
| Echtzeit-Ausgabe | Zeigt aktuelle Serverereignisse und Meldungen an |
| Fehlererkennung | Hilft dir, Probleme sofort zu erkennen |
| Befehlseingabe | Ermöglicht das direkte Senden unterstützter Serverbefehle |

### Serviceunterbrechungen

Wenn dein Server vorübergehend nicht erreichbar war und im Ereignisprotokoll oder den Logdateien kein offensichtlicher Grund zu finden ist, kann das Problem am zugrundeliegenden Hostsystem liegen und nicht an deinem einzelnen Service.

Im Bereich **Serviceunterbrechungen** kannst du die Unterbrechungshistorie des Hostsystems deines Gameservers einsehen. Für umfassendere Plattformstatus-Infos kannst du auch die offizielle [Status-Seite](https://status.zap-hosting.com/) prüfen.

## Einstellungen

Der Bereich **Einstellungen** enthält die Hauptkonfigurationsseiten für deinen **Windrose** Server. Hier kannst du das Serviceverhalten anpassen, installierte Spiele wechseln (wenn unterstützt), Updates verwalten und Automatisierungsfunktionen konfigurieren.

### Einstellungen

Die Seite **Einstellungen** bietet eine vereinfachte Übersicht gängiger Serveroptionen. Das ist besonders praktisch, wenn du neu im Gameserver-Hosting bist und Änderungen vornehmen möchtest, ohne direkt Konfigurationsdateien zu bearbeiten.

Falls für **Windrose** verfügbar, können diese Optionen gameplaybezogene Einstellungen oder andere häufig genutzte Serviceparameter umfassen. Die genauen Optionen variieren je nach Spielintegration.

### Konfigurationen

Im Bereich **Konfigurationen** kannst du Konfigurationsdateien direkt über die Weboberfläche bearbeiten. Das gibt dir präziseren Zugriff als die vereinfachte Einstellungsseite und ist meist besser für fortgeschrittene Nutzer geeignet.

:::caution Überschriebene Werte
Einige Werte können von der vereinfachten **Einstellungen**-Seite verwaltet werden. Wenn du bemerkst, dass manuelle Änderungen im Konfigurationseditor überschrieben werden, prüfe, ob dieselbe Option dort noch gesteuert wird.
:::

### Spiele

Unter **Spiele** kannst du, falls dein Service es unterstützt, auf ein anderes verfügbares Spiel oder eine Spielvariante wechseln. Spiele mit identischer Slot-Preisstruktur können meist direkt ausgewählt werden, während andere Spiele eventuell ein Paket-Upgrade erfordern.

Wenn du mehr darüber erfahren möchtest, wie du das installierte Spiel auf deinem Service wechselst, schau dir die [Spielwechsel](gameserver-gameswitch.md) Anleitung an.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versionen

Die Seite **Versionen** erlaubt dir, die installierte Serverversion deines **Windrose** Services zu verwalten, sofern Versionsverwaltung unterstützt wird. Du kannst in der Regel auf die neueste verfügbare Version updaten und automatische Updates aktivieren.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Automatische Updates helfen, deine Hosting-Umgebung aktuell zu halten, du solltest aber nach größeren Versionswechseln die Kompatibilität prüfen.

### Geplante Aufgaben

Mit **Geplante Aufgaben** kannst du wiederkehrende Aktionen für deinen Server automatisieren. Das ist praktisch, wenn du manuelle Verwaltungsarbeit reduzieren und deinen Service konsistent am Laufen halten möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Typische automatisierte Aktionen sind:

| Aufgabentyp | Beispielanwendung |
| --- | --- |
| Service starten | Server zu einer bestimmten Zeit automatisch starten |
| Service stoppen | Server während Wartungsfenstern herunterfahren |
| Service neu starten | Regelmäßige Neustarts für Stabilität durchführen |
| Backup erstellen | Regelmäßige Backups ohne manuelles Eingreifen anlegen |
| Eigene Befehle | Unterstützte Befehle automatisch ausführen |

### Neustart-Planer

Der **Neustart-Planer** ist speziell für die Planung automatischer Serverneustarts gedacht. Das ist nützlich, wenn du deinen **Windrose** Server regelmäßig, z. B. in Zeiten mit wenig Aktivität, neu starten möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-Einstellungen

Mit den **DNS-Einstellungen** kannst du deinem Service eine benutzerfreundlichere Adresse zuweisen. Das macht deinen Server leichter merkbar und einfacher mit anderen Spielern teilbar.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

Je nach Setup und gebuchten Optionen kannst du entweder eine von ZAP bereitgestellte Subdomain oder deine eigene Domain verwenden.

## Tools

Der Bereich **Tools** enthält zusätzliche Serviceverwaltungsfunktionen, die Datei-Zugriff, Datenbankverwaltung und Backup-Handling unterstützen.

### FTP-Browser

Im **FTP-Browser** findest du die Verbindungsdaten, die du für den Zugriff auf deine Serverdateien benötigst. FTP-Zugang ist praktisch, wenn du Dateien direkt hoch- oder herunterladen oder bearbeiten möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Für einfacheres Dateimanagement empfiehlt sich die Nutzung eines externen FTP-Clients wie [FileZilla](https://filezilla-project.org/) oder [WinSCP](https://winscp.net/). Wenn du Hilfe beim Verbinden brauchst, schau dir die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung an.

### Datenbanken

Unter **Datenbanken** kannst du die mit deinem Gameserver-Produkt enthaltenen Datenbanken erstellen und verwalten, falls dein Setup das erfordert. Das ist nützlich für Services, Mods oder Tools, die strukturierte Datenspeicherung benötigen.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Hier kannst du in der Regel Zugangsdaten einsehen, neue Datenbanken anlegen und bestehende Backups importieren.

### Backups

Der Bereich **Backups** ermöglicht es dir, Backups für deinen Server und, sofern unterstützt, die zugehörigen Datenbankdaten zu erstellen und zu verwalten.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Regelmäßige Backups sind sehr zu empfehlen, da sie dir erlauben, deinen Service nach Konfigurationsfehlern, Dateibeschädigungen oder unerwarteten Problemen wiederherzustellen.

:::tip Backup Best Practice
Erstelle vor größeren Änderungen wie dem Bearbeiten von Konfigurationsdateien, Versionswechseln oder Spielwechseln ein manuelles Backup. So hast du einen sicheren Wiederherstellungspunkt, falls etwas schiefgeht.
:::

## Weitere Links

Der Bereich **Weitere Links** bietet zusätzliche Ressourcen rund um deinen Service und die allgemeine Nutzung der ZAP-Hosting Plattform.

### Häufig gestellte Fragen

Der Bereich **Häufig gestellte Fragen** enthält Antworten zu typischen Themen rund um deinen Service. Das hilft dir, häufige Probleme schneller zu lösen, ohne den Support kontaktieren zu müssen.

### ZAP-Hosting Dokumentation

Die **ZAP-Hosting Dokumentation** gibt dir Zugriff auf eine umfangreiche Wissensdatenbank zu Serververwaltung, Hosting-Setup, Fehlerbehebung und verwandten Themen. Wenn du nach weiterführenden Anleitungen über diese **Windrose** Dashboard-Übersicht hinaus suchst, ist das der beste Ort zum Weitermachen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Der Bereich **News** enthält Ankündigungen, die deinen Service betreffen. Dazu gehören technische Hinweise, Wartungsinformationen, Feature-Änderungen und andere wichtige Updates.

Wenn du diesen Bereich regelmäßig prüfst, bleibst du über Änderungen informiert, die dein **Windrose** Server-Hosting betreffen können.

<InlineVoucher />

## Fazit

Du hast jetzt einen vollständigen Überblick über die wichtigsten Bereiche des **Windrose** Dashboards im ZAP-Hosting Panel, von Serverüberwachung und Logs bis zu Einstellungen, Tools und Automatisierungsfunktionen. Dieses Wissen hilft dir, deinen Hosting-Service effizienter zu bedienen und deinen Server sicherer zu verwalten.

Herzlichen Glückwunsch, du hast erfolgreich gelernt, wie du das Windrose Dashboard nutzt. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung! 🙂