---
id: palworld-firststeps-dashboard
title: "Palworld: Dashboard Übersicht"
description: "Entdecke, wie du deinen Palworld Server effizient verwaltest und optimierst für beste Performance und Nutzererlebnis → Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **Palworld Gameserver** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller notwendigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Aber keine Sorge, wir geben dir unten eine detaillierte Einführung in die Verwaltung deines Services, damit du den bestmöglichen Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Server ganz easy effizient verwalten und findest alle nötigen Optionen und Features schnell und unkompliziert. Hier bekommst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **Palworld Gameserver** optimal auf deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen rausholst.

:::tip
Wir haben jetzt auch eine separate **Palworld (Xbox)** Spielversion auf unseren Gameservern, mit der du auf Xbox/Microsoft Store Spielversionen zocken kannst. Schau dir unseren [Game Change](gameserver-gameswitch.md) an, um zu erfahren, wie du dein Spiel ganz easy wechseln kannst. Denk wie immer daran, deine Saves zu sichern.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5nkkN7JxgoigmSd/preview" title="Palworld Server in nur EINER MINUTE einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art Infos aufsaugst!"/>

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle wichtigen Seiten zur Verwaltung deines Servers. Die Optionen zur Steuerung deines Servers sind hier detailliert aufgelistet.



### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Administration. Hier werden alle grundlegenden und wichtigen Infos zu deinem Service übersichtlich dargestellt. Dazu gehören zum Beispiel Angaben zum Serverstandort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Map und der Anzahl verfügbarer Slots. Außerdem wird die Auslastung von CPU, Speicher und RAM angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/qo7zwFkwwt3ot3b/preview)

Im Dashboard kannst du deinen Service auch starten, stoppen oder neu starten und hast so die volle Kontrolle über den Betrieb. Außerdem hast du Zugriff auf die Live-Konsole, um Echtzeit-Infos zum Serverstatus zu bekommen und bei Bedarf direkt einzugreifen.



### DDoS Manager

Hier kannst du vergangene DDoS-Angriffe einsehen, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Angriffe auf deinen Server, um schnell reagieren zu können, wenn ein Vorfall auftritt.

Je nach Serverstandort und dort verfügbarem DDoS-Schutz kannst du aktive Angriffe auch in Echtzeit überwachen. Das beinhaltet detaillierte Traffic-Insights, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Schutzsystemen blockiert wird. Diese Transparenz hilft dir zu verstehen, wie der Schutz funktioniert und ermöglicht es dir, Risiken frühzeitig zu erkennen.

:::info DDoS Manager Zugriff fehlt?
Die Nutzung des DDoS Managers erfordert entweder eine dedizierte IP-Adresse oder die Zusatzoption „DDoS Manager Übersicht“. Falls dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher, woran es liegt? Eine erste mögliche Lösung ist der Blick in die **Logdateien**. Diese Dateien enthalten viele Infos zum Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Gerade Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft lassen sich Schwierigkeiten durch gezieltes Prüfen der Logdateien aufdecken und beheben.

:::info
Die Infos dort helfen dir nicht weiter oder du verstehst sie nicht? Kein Stress! In dem Fall sind wir auch täglich im Support für dich da. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** und schildere uns dein Problem. Wir schauen so schnell wie möglich drauf und helfen dir, das Problem zu lösen! :)
:::



### Ereignisprotokoll

Das **Ereignisprotokoll** gibt dir eine umfassende Übersicht über alle Aktivitäten rund um die Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist, sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Live-Konsole

Die **Live-Konsole** bietet dir eine Echtzeit-Ansicht aller aktuellen Ereignisse auf deinem Server. Hier siehst du Infos zu den Aktivitäten der Spieler sowie mögliche Fehlermeldungen und Systemnachrichten. Diese Übersicht ermöglicht dir, einen umfassenden Blick auf das Geschehen auf deinem Server zu bekommen und mögliche Probleme frühzeitig zu erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Neben der Überwachung der Ereignisse kannst du in der **Live-Konsole** auch direkt Befehle an den Server senden. Das ist praktisch, um Einstellungen anzupassen, bestimmte Aktionen auszuführen oder schnell auf auftretende Probleme zu reagieren.



### Serviceunterbrechungen

Dein Server war kurzfristig offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Infos geliefert? Es könnte sein, dass die Ursache nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server läuft.

Wenn unser Monitoring-System eine allgemeine Unterbrechung erkennt, werden unsere Techniker automatisch benachrichtigt und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Unterbrechungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Mehr Infos und den aktuellen Stand unseres Service-Status findest du auf unserer neuen [Statusseite](https://status.zap-hosting.com/).












## Einstellungen

Im Bereich **Einstellungen** findest du alle wichtigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Serverkonfiguration sind hier detailliert aufgelistet.



### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängigsten Einstellungsmöglichkeiten für deinen Server. Dazu gibt’s auch eine kurze Erklärung. Die Nutzung der Einstellungsseite empfehlen wir besonders Einsteigern in die Serververwaltung.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3e6G2io6KaPBZe/preview)

Hier kannst du zum Beispiel folgende Anpassungen vornehmen: 

- Grundeinstellungen: Spielname, Servername, Serverbeschreibung, Admin-Passwort

Wenn du dich sicherer fühlst und präzisere Änderungen vornehmen möchtest, empfehlen wir dir stattdessen den Config Editor. Mehr Infos dazu findest du in der Kategorie **Configs**.



### Configs

Der Config-Datei-Editor erlaubt dir, die Konfigurationsdateien direkt auf der Webseite klassisch zu bearbeiten, ohne die vereinfachte Ansicht. Mit dieser Option kannst du die Einstellungen deines Servers individuell anpassen und nach deinen persönlichen Vorlieben konfigurieren.

Durch die Nutzung des Editors hast du direkten Zugriff auf alle verfügbaren Optionen und kannst sie genau einstellen. Das ist besonders praktisch für fortgeschrittene Nutzer, die volle Kontrolle über ihre Servereinstellungen wollen und genau wissen, welche Änderungen sie vornehmen möchten.

:::info
Ist dir aufgefallen, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen willst, musst du die entsprechenden Optionen zuerst auf der Einstellungsseite deaktivieren.
:::



### Spiele

Unter **Spiele** hast du jederzeit die Möglichkeit, die Spielvariante deines bestehenden Spiels zu wechseln oder generell ein anderes Spiel zu installieren. Spiele mit dem gleichen Slot-Preis kannst du direkt unter **Verfügbare Spiele** auswählen. Für alle anderen Spiele ist vorher eine Anpassung des Slot-Preises nötig. Mehr Infos dazu findest du in der [Game Change](gameserver-gameswitch.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)



### Versionen

Unter **Versionen** kannst du die aktuelle Version deines Gameservers einsehen und verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, damit dein Server immer auf dem neuesten Stand ist.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigung für automatische Updates aktivieren, um immer informiert zu bleiben und up-to-date zu sein.



### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabenarten sind z.B. Starten, Stoppen oder Neustarten von Services, Neustart des Servers wenn er online ist, Backups erstellen oder benutzerdefinierte Befehle ausführen.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustartplaner

Willst du Serverneustarts zu bestimmten Zeiten planen? Der Neustartplaner ermöglicht dir, automatische Neustarts deines Gameservers zeitgesteuert einzurichten. Damit kannst du Neustarts zu festen Zeiten oder in regelmäßigen Abständen festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-Einstellungen
Mit den ZAP DNS-Einstellungen kannst du dir leicht merkbare Adressen für deinen Service erstellen. Du kannst entweder eine Subdomain einer unserer Domains nutzen oder einen DNS-Eintrag auf deiner eigenen Domain anlegen und so eine Adresse haben, die besser mit dir als Person verbunden werden kann.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

Im Bereich **Tools** deines Navigationspanels findest du verschiedene Unterpunkte, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden bekommst du eine detaillierte Einführung in diese Bereiche.



### FTP-Browser

Mit dem **FTP-Browser** erhältst du alle nötigen Infos, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang erlaubt dir direkten Zugriff auf die Dateien deines Gameservers. Für die optimale Nutzung empfehlen wir ein externes FTP-Programm wie **Filezilla** oder **WinSCP**. Wenn du noch nicht weißt, wie FTP funktioniert, hilft dir vielleicht ein Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:**  FileZilla ist der einfachste und bekannteste FTP-Client. Einfach installieren, starten und deine Zugangsdaten in der oberen Leiste eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem Klick auf „Verbinden“ bist du direkt auf dem Server und kannst die Dateien verwalten.

**WinSCP:**  WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Nachfolger des FTP-Protokolls) gedacht, kann aber auch FTP. Das Programm ist umfangreicher als FileZilla und eignet sich für fortgeschrittene Nutzer.



### Datenbanken

Neben unseren Gameserver-Produkten bieten wir auch 10 inklusive Datenbanken an. Diese Datenbanken werden z.B. benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backups

Unter **Backups** kannst du sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank erstellen. So kannst du deine Daten im Falle von Problemen oder Datenverlust leichter wiederherstellen.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob das täglich oder wöchentlich passieren soll. Zusätzlich kannst du entscheiden, ob die ältesten Backups bei Bedarf gelöscht werden sollen, z.B. wenn der verfügbare Speicherplatz knapp wird.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Für unsere Gameserver-Produkte stellen wir standardmäßig 10 GB Speicherplatz auf dem Speicher-Server für Backups bereit. Wenn du mehr Speicherplatz brauchst, kannst du diesen kostenpflichtig upgraden. So stellst du sicher, dass du immer genug Platz für deine Backups hast und bei Bedarf auch ältere Backups noch zugänglich sind.

## Weitere Links
Im Bereich **Weitere Links** findest du zusätzliche Links, die für dein Produkt relevant sind. 

### Häufig gestellte Fragen
Der Bereich **Häufig gestellte Fragen** bietet dir eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Infos zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation
Wir bieten umfangreiche Dokumentationen zu unseren Produkten, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
Die **News** geben dir eine umfassende Übersicht über alle Ankündigungen und Neuigkeiten rund um deinen Service. Hier findest du wichtige Infos zu verschiedenen Aspekten wie:

- Änderungen am Service z.B. durch Updates oder neue Features
- Ankündigungen zu möglichen Wartungen oder technischen Problemen
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bringen
- Weitere relevante Infos, die für die Nutzung deines Services wichtig sein können

Wenn du die **News** regelmäßig checkst, bleibst du immer auf dem Laufenden und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server rauszuholen.

<InlineVoucher />