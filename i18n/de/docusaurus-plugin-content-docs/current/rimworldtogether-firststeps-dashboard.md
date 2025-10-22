---
id: rimworldtogether-firststeps-dashboard
title: "RimWorld Together: Dashboard Übersicht"
description: "Entdecke, wie du deinen RimWorld Together Gameserver effizient verwaltest und optimierst für beste Performance und Nutzererlebnis → Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **RimWorld Together Gameserver** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller notwendigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Aber keine Sorge, wir geben dir unten eine ausführliche Einführung in die Verwaltung deines Services, damit du den bestmöglichen Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Server ganz easy effizient verwalten und findest alle wichtigen Optionen und Features schnell und unkompliziert. Hier bekommst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **RimWorld Together Gameserver** optimal auf deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen rausholst.

<YouTube videoId="HUYaWT64SRU" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/XyjPFXnmC6Ski6p/preview" title="RimWorld Together Server in nur EINER MINUTE einrichten!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Tauche ein in unser Video, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle notwendigen Seiten zur Verwaltung deines Servers. Die Optionen zur Serververwaltung sind unten detailliert aufgelistet.

### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Administration. Hier werden alle grundlegenden und wichtigen Infos zu deinem Service übersichtlich dargestellt. Dazu gehören zum Beispiel Angaben zum Serverstandort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Map und die Anzahl der verfügbaren Slots. Außerdem wird die Auslastung von CPU, Speicher und RAM angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/pYy8nmAG9Z7L7H9/preview)

Im Dashboard kannst du deinen Service auch starten, stoppen oder neu starten, um die volle Kontrolle über den Betrieb zu haben. Außerdem hast du Zugriff auf die Live-Konsole, um Echtzeit-Infos zum Serverstatus zu erhalten und bei Bedarf direkt einzugreifen.

### DDoS Manager

Behalte vergangene DDoS-Angriffe im Blick, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Attacken auf deinen Server, um schnell reagieren zu können, wenn ein Vorfall auftritt.

Je nach Serverstandort und dort verfügbarem DDoS-Schutz kannst du aktive Angriffe auch in Echtzeit überwachen. Das beinhaltet detaillierte Traffic-Insights, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Schutzsystemen blockiert wird. Dieses Maß an Transparenz hilft dir zu verstehen, wie der Schutz funktioniert und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS Manager Zugriff fehlt?
Die Nutzung des DDoS Managers erfordert entweder eine dedizierte IP-Adresse oder die Zusatzoption „DDoS Manager Übersicht“. Falls dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher, woran es liegt? Eine erste mögliche Lösungsstrategie ist der Blick in die **Logdateien**. Diese Dateien enthalten viele Infos zum Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Gerade Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft lassen sich Schwierigkeiten durch einen gezielten Blick in die Logdateien aufdecken und beheben.

:::info
Die gefundenen Infos helfen dir nicht oder du verstehst sie nicht? Kein Stress! In dem Fall sind wir auch täglich im Support für dich da. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** und schildere uns dein Problem. Wir schauen uns das so schnell wie möglich an und helfen dir bei der Lösung! :)
:::

### Ereignisprotokoll

Das **Ereignisprotokoll** gibt dir eine umfassende Übersicht über alle Aktivitäten rund um die Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist, sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live-Konsole

Die **Live-Konsole** bietet dir eine Echtzeit-Ansicht aller aktuellen Ereignisse auf deinem Server. Hier siehst du Infos zu den Aktivitäten der Spieler sowie mögliche Fehlermeldungen und Systemnachrichten. Diese Übersicht ermöglicht dir, einen umfassenden Blick darauf zu bekommen, was auf deinem Server passiert, und mögliche Probleme frühzeitig zu erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/dktDADkq3bzG3F6/preview)

Neben der Überwachung der Ereignisse kannst du in der **Live-Konsole** auch direkt Befehle an den Server senden. Das ist praktisch, um Einstellungen anzupassen, bestimmte Aktionen auszuführen oder schnell auf auftretende Probleme zu reagieren.

### Serviceunterbrechungen

Dein Server war vorübergehend offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Infos geliefert? Es könnte sein, dass die Ursache nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server läuft.

Wenn unser Monitoring-System eine allgemeine Unterbrechung erkennt, werden unsere Techniker automatisch benachrichtigt und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Unterbrechungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Mehr Infos und die aktuellste Version unseres Service-Status findest du auf unserer neuen [Statusseite](https://status.zap-hosting.com/).

## Einstellungen

Im Bereich **Einstellungen** findest du alle notwendigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Serverkonfiguration sind unten detailliert aufgelistet.

### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängigsten Konfigurationsoptionen für deinen Server. Diese beinhalten auch eine kurze Erklärung. Die Nutzung der Einstellungsseite ist besonders für Einsteiger in die Serververwaltung zu empfehlen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y3e6G2io6KaPBZe/preview)

Hier kannst du zum Beispiel folgende Anpassungen vornehmen:

- Grundeinstellungen: Spielname, Servername, Serverbeschreibung, Admin-Passwort

Wenn du dich sicherer fühlst und präzisere Änderungen vornehmen möchtest, empfehlen wir dir stattdessen den Config Editor. Mehr Infos dazu findest du in der Kategorie **Configs**.

### Configs

Der Config-Datei-Editor erlaubt dir, die Konfigurationsdateien direkt auf der Webseite klassisch zu bearbeiten, ohne die vereinfachte Ansicht. Mit dieser Option kannst du die Einstellungen deines Servers individuell anpassen und nach deinen persönlichen Vorlieben konfigurieren.

Durch die Nutzung des Editors hast du direkten Zugriff auf alle verfügbaren Optionen und kannst diese präzise anpassen. Das ist besonders für fortgeschrittene Nutzer sinnvoll, die volle Kontrolle über ihre Servereinstellungen wollen und genau wissen, welche Änderungen sie vornehmen möchten.

:::info
Hast du bemerkt, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen möchtest, musst du die entsprechenden Optionen auf der Einstellungsseite zuerst deaktivieren.
:::

### Spiele

Unter **Spiele** hast du jederzeit die Möglichkeit, die Spielvariante deines bestehenden Spiels zu ändern oder generell ein anderes Spiel zu installieren. Spiele mit dem gleichen Slot-Preis können direkt unter **Verfügbare Spiele** ausgewählt werden. Für alle anderen Spiele ist vorher eine Anpassung des Slot-Preises erforderlich. Mehr Infos dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Versionen

Unter **Versionen** kannst du die aktuelle Version deines Gameservers einsehen und verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, damit dein Server immer auf dem neuesten Stand ist.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigung für automatische Updates aktivieren, um über Updates informiert zu bleiben und immer up-to-date zu sein.

### Steam Workshop

Wenn du nach neuem Content suchst, um dein Spielerlebnis zu erweitern, bietet der Steam Workshop eine große Auswahl an Mods und Maps für viele Spiele. Um eine Sammlung von Mods oder Maps in deinem Spiel zu nutzen, musst du einfach die Steam Workshop Collection ID eingeben. Danach musst du deinen Server neu starten, damit der neue Content geladen wird. Sobald das erledigt ist, kannst du den neuen Content auf deinem Server verwenden und mehr Abwechslung und Spaß ins Spiel bringen.

![](https://screensaver01.zap-hosting.com/index.php/s/AaL9sQeye5gKzWQ/preview)

### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabentypen sind das Starten, Stoppen oder Neustarten von Services, Neustart des Servers wenn er online ist, Erstellen von Backups oder Ausführen von benutzerdefinierten Befehlen.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustart-Planer

Willst du Serverneustarts zu bestimmten Zeiten planen? Der Neustart-Planer ermöglicht dir, automatische Neustarts deines Gameservers zeitgesteuert einzurichten. Mit dieser Funktion kannst du Neustarts zu festen Zeiten oder in regelmäßigen Abständen festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-Einstellungen

Mit den ZAP DNS-Einstellungen kannst du dir leicht merkbare Adressen für deinen Service erstellen. Du kannst entweder eine Subdomain einer unserer Domains nutzen oder einen DNS-Eintrag auf deinen eigenen Domains anlegen und so eine Adresse haben, die besser mit dir als Person in Verbindung gebracht werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

Im Bereich **Tools** deines Navigationspanels findest du verschiedene Unterpunkte, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden erhältst du eine detaillierte Einführung in diese Bereiche.

### FTP-Browser

Mit dem **FTP-Browser** bekommst du alle notwendigen Infos, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir den direkten Zugriff auf die Dateien deines Gameservers. Für die optimale Nutzung empfehlen wir ein externes FTP-Programm wie **Filezilla** oder **WinSCP**. Wenn du noch nicht vertraut mit FTP bist, kann dir ein Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung weiterhelfen.

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla ist der einfachste und bekannteste FTP-Client. Einfach installieren, starten und deine Zugangsdaten in der oberen Leiste eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem Klick auf „Verbinden“ bist du direkt auf dem Server eingeloggt und kannst die Dateien verwalten.

**WinSCP:** WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Nachfolger des FTP-Protokolls) gedacht, kann aber auch FTP. Das Programm ist umfangreicher als FileZilla und eignet sich für fortgeschrittene Nutzer.

### Datenbanken

Neben unseren Gameserver-Produkten bieten wir auch 10 inklusive Datenbanken an. Diese Datenbanken werden zum Beispiel benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Unter **Backups** kannst du sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank erstellen. So kannst du deine Daten im Falle von Problemen oder Datenverlust leichter wiederherstellen.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob das täglich oder wöchentlich passieren soll. Zusätzlich kannst du entscheiden, ob die ältesten Backups bei Bedarf gelöscht werden sollen, zum Beispiel wenn der verfügbare Speicherplatz knapp wird.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Für unsere Gameserver-Produkte stellen wir standardmäßig 10 GB Speicherplatz auf dem Speicher-Server für Backups bereit. Wenn du mehr Speicherplatz brauchst, kannst du diesen kostenpflichtig upgraden. So stellst du sicher, dass du immer genug Platz für deine Backups hast und bei Bedarf auch auf ältere Backups zugreifen kannst.

## Weitere Links

Im Bereich **Weitere Links** findest du zusätzliche Links, die für dein Produkt relevant sind.

### Häufig gestellte Fragen

Der Bereich **Häufig gestellte Fragen** bietet eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Infos zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation

Wir bieten umfangreiche Dokumentationen zu unseren Produkten, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Die **News** geben dir eine umfassende Übersicht über alle Ankündigungen und Neuigkeiten rund um deinen Service. Hier findest du wichtige Infos zu verschiedenen Aspekten wie:

- Änderungen am Service, z.B. durch Updates oder neue Features  
- Ankündigungen zu möglichen Wartungen oder technischen Problemen  
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bieten  
- Weitere relevante Infos, die für die Nutzung deines Services wichtig sein können

Wenn du die **News** regelmäßig checkst, bleibst du immer auf dem Laufenden und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server rauszuholen.

<InlineVoucher />