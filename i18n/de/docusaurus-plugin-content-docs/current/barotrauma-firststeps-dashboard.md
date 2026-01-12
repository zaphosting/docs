---
id: barotrauma-firststeps-dashboard
title: "Barotrauma: Dashboard Überblick"
description: "Entdecke, wie du deinen Barotrauma Gameserver effizient verwaltest und optimierst – mit einem klaren, Schritt-für-Schritt Überblick über die wichtigsten Admin-Features → Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
  - gameserver-barotrauma
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **Barotrauma Gameserver** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller nötigen Optionen? Gerade am Anfang kann das echt herausfordernd sein. Aber keine Sorge, wir geben dir hier eine ausführliche Einführung in die Verwaltung deines Services, damit du den besten Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Server easy und effizient managen und findest alle wichtigen Optionen und Features schnell und unkompliziert. Hier bekommst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **Barotrauma Gameserver** optimal auf deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen rausholst.

<YouTube videoId="gak3-WLOvKs" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/dF37oSEaM85nMms/preview" title="Barotrauma Server in nur EINER MINUTE einrichten!" description="Lernst du besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles Schritt für Schritt. Egal ob du es eilig hast oder einfach am liebsten auf die spannendste Art lernst!"/>

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle wichtigen Seiten zur Verwaltung deines Servers. Die Optionen zur Steuerung deines Servers sind hier detailliert aufgelistet.

### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Administration. Hier werden alle grundlegenden und wichtigen Infos zu deinem Service übersichtlich dargestellt. Dazu gehören zum Beispiel Angaben zum Serverstandort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Map und die Anzahl der verfügbaren Slots. Außerdem wird die Auslastung von CPU, Speicher und RAM angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/wywzwsnYypoXgwp/preview)

Im Dashboard kannst du deinen Service auch starten, stoppen oder neu starten – so hast du die volle Kontrolle über den Betrieb. Außerdem hast du Zugriff auf die Live-Konsole, um Echtzeit-Infos zum Serverstatus zu bekommen und bei Bedarf direkt einzugreifen.

### DDoS Manager

Behalte vergangene DDoS-Angriffe im Blick, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Attacken auf deinen Server, um schnell reagieren zu können, wenn ein Vorfall auftritt.

Je nach Serverstandort und vorhandenem DDoS-Schutz kannst du aktive Angriffe auch in Echtzeit überwachen. Das beinhaltet detaillierte Traffic-Insights, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Schutzsystemen blockiert wird. Diese Transparenz hilft dir zu verstehen, wie der Schutz funktioniert und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS Manager Zugriff fehlt?
Die Nutzung des DDoS Managers setzt entweder eine eigene IP-Adresse oder die Zusatzoption "DDoS Manager Übersicht" voraus. Falls dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::warning
Die Nutzung des DDoS Managers ist nur möglich, wenn entweder eine eigene IP-Adresse oder die Option "DDoS Manager Übersicht" als Zusatzoption gebucht wurde. Fehlen diese Komponenten in deinem aktuellen Paket, kannst du sie jederzeit durch ein Upgrade hinzufügen.
:::

### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher, woran es liegt? Ein erster Lösungsansatz ist das Prüfen der **Logdateien**. Diese Dateien enthalten viele Infos zum Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Gerade Fehlermeldungen helfen oft dabei, die Ursache eines Problems zu identifizieren und besser zu verstehen. Häufig lassen sich Schwierigkeiten durch einen gezielten Blick in die Logdateien aufdecken und beheben.

:::warning
Die gefundenen Infos helfen dir nicht weiter oder du verstehst sie nicht? Kein Stress! Wir sind täglich im Support für dich da. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** und schildere uns dein Problem. Wir schauen uns das so schnell wie möglich an und helfen dir bei der Lösung! :)
:::

### Ereignisprotokoll

Das **Ereignisprotokoll** gibt dir einen umfassenden Überblick über alle Aktivitäten rund um die Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist, sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live-Konsole

Die **Live-Konsole** bietet dir eine Echtzeit-Ansicht aller aktuellen Ereignisse auf deinem Server. Hier siehst du Infos zu den Aktionen der Spieler sowie mögliche Fehlermeldungen und Systemnachrichten. Diese Übersicht ermöglicht dir, einen umfassenden Eindruck davon zu bekommen, was auf deinem Server passiert, und potenzielle Probleme frühzeitig zu erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Neben der Überwachung kannst du in der **Live-Konsole** auch direkt Befehle an den Server senden. Das ist praktisch, um Einstellungen anzupassen, bestimmte Aktionen auszuführen oder schnell auf auftretende Probleme zu reagieren.

### Serviceunterbrechungen

Dein Server war kurz offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Hinweise geliefert? Es könnte sein, dass die Ursache nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server läuft.

Wenn unser Monitoring-System eine allgemeine Störung erkennt, werden unsere Techniker automatisch informiert und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Störungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Mehr Infos und den aktuellen Stand findest du auf unserer neuen [Statusseite](https://status.zap-hosting.com/).

## Einstellungen

Im Bereich **Einstellungen** findest du alle wichtigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Servereinstellung sind hier detailliert aufgelistet.

### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängigsten Konfigurationsoptionen für deinen Server – inklusive kurzer Erklärungen. Die Nutzung der Einstellungsseite empfehlen wir besonders Einsteigern in die Serververwaltung.

Wenn du dich sicherer fühlst und präzisere Änderungen vornehmen möchtest, empfehlen wir dir den Config Editor. Mehr Infos dazu findest du in der Kategorie **Configs**.

### Configs

Der Config-Datei-Editor ermöglicht dir, die Konfigurationsdateien direkt auf der Webseite klassisch und ohne vereinfachte Ansicht zu bearbeiten. So kannst du die Einstellungen deines Servers individuell anpassen und nach deinen persönlichen Vorlieben konfigurieren.

Mit dem Editor hast du direkten Zugriff auf alle verfügbaren Optionen und kannst sie genau einstellen. Das ist besonders praktisch für fortgeschrittene User, die volle Kontrolle über ihre Servereinstellungen wollen und genau wissen, welche Änderungen sie vornehmen möchten.

:::warning
Hast du bemerkt, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen willst, musst du die entsprechenden Optionen auf der Einstellungsseite zuerst deaktivieren.
:::

### Spiele

Unter **Spiele** kannst du jederzeit die Spielvariante deines bestehenden Spiels ändern oder generell ein anderes Spiel installieren. Spiele mit dem gleichen Slot-Preis kannst du direkt unter **Verfügbare Spiele** auswählen. Für alle anderen Spiele ist vorher eine Anpassung des Slot-Preises nötig. Mehr Infos dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versionen

Unter **Versionen** kannst du die aktuelle Version deines Gameservers einsehen und verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, damit dein Server immer auf dem neuesten Stand bleibt.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigung für automatische Updates aktivieren, um immer informiert zu bleiben und sicherzugehen, dass du up-to-date bist.

### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabenarten sind z.B. Starten, Stoppen oder Neustarten von Services, Neustart des Servers wenn er online ist, Backups erstellen oder eigene Befehle ausführen.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustart-Planer

Willst du Serverneustarts zu bestimmten Zeiten planen? Der Neustart-Planer ermöglicht dir, automatische Neustarts deines Gameservers zeitgesteuert einzurichten. So kannst du Neustarts zu festen Zeiten oder in regelmäßigen Abständen planen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-Einstellungen

Mit den ZAP DNS-Einstellungen kannst du dir leicht merkbare Adressen für deinen Service erstellen. Du kannst entweder eine Subdomain einer unserer Domains nutzen oder einen DNS-Eintrag auf deiner eigenen Domain anlegen und so eine Adresse haben, die besser mit dir als Person verbunden werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

Im Bereich **Tools** deines Navigationsmenüs findest du verschiedene Unterpunkte, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden bekommst du eine ausführliche Einführung in diese Bereiche.

### FTP-Browser

Mit dem **FTP-Browser** erhältst du alle nötigen Infos, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir direkten Zugriff auf die Dateien deines Gameservers. Für die optimale Nutzung empfehlen wir ein externes FTP-Programm wie **FileZilla** oder **WinSCP**. Wenn du noch nicht weißt, wie FTP funktioniert, hilft dir vielleicht ein Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla ist wohl der einfachste und bekannteste FTP-Client. Einfach installieren, starten und in der oberen Leiste deine Zugangsdaten eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem schnellen Klick auf "Verbinden" bist du direkt am Server angemeldet und kannst die Dateien verwalten.

**WinSCP:** WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Varianten des Dateiübertragungsprotokolls FTP) gedacht, kann aber genauso gut mit normalem FTP umgehen. Das Programm ist etwas umfangreicher als FileZilla und eignet sich eher für fortgeschrittene User.

### Datenbanken

Neben unseren Gameserver-Produkten bieten wir auch 10 inklusive Datenbanken an. Diese Datenbanken werden z.B. benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Unter **Backups** kannst du sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank erstellen. So kannst du deine Daten im Falle von Problemen oder Datenverlust leichter wiederherstellen.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob das täglich oder wöchentlich passieren soll. Zusätzlich kannst du entscheiden, ob bei Bedarf die ältesten Backups gelöscht werden sollen, z.B. wenn der verfügbare Speicherplatz knapp wird.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Für unsere Gameserver-Produkte stellen wir standardmäßig 10 GB Speicherplatz auf dem Speicher-Server für Backups bereit. Wenn du mehr Speicherplatz brauchst, kannst du diesen kostenpflichtig upgraden. So stellst du sicher, dass du immer genug Platz für deine Backups hast und bei Bedarf auch auf ältere Backups zugreifen kannst.

## Weitere Links

Im Bereich **Weitere Links** findest du zusätzliche Links, die für dein Produkt relevant sind.

### Häufig gestellte Fragen

Der Bereich **Häufig gestellte Fragen** bietet dir eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Infos zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation

Wir bieten umfangreiche Dokumentationen zu unseren Produkten, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Die **News** geben dir einen umfassenden Überblick über alle Ankündigungen und Neuigkeiten rund um deinen Service. Hier findest du wichtige Infos zu verschiedenen Aspekten wie:

- Änderungen am Service, z.B. durch Updates oder neue Features
- Ankündigungen zu möglichen Wartungen oder technischen Problemen
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bringen
- Weitere relevante Infos, die für die Nutzung deines Services wichtig sein können

Wenn du die **News** regelmäßig checkst, bleibst du immer up-to-date und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server rauszuholen.

<InlineVoucher />