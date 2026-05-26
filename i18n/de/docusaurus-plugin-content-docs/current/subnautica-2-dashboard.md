---
id: subnautica-2-dashboard
title: "Subnautica 2: Dashboard"
description: "Entdecke, wie du deinen Subnautica 2 Server mit dem ZAP-Hosting Dashboard verwaltest, die Hosting-Leistung überwachst und wichtige zap Web-Admin-Funktionen nutzt -> Jetzt mehr erfahren"
sidebar_label: "Subnautica 2: Dashboard"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Du interessierst dich für einen **Subnautica 2** Gameserver oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Verwaltung und die Auffindbarkeit aller nötigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Keine Sorge, diese Anleitung gibt dir eine detaillierte Einführung in die Verwaltung deines Services, damit du den bestmöglichen Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Server einfach und effizient verwalten und findest alle nötigen Optionen und Funktionen schnell und unkompliziert. Hier erhältst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **Subnautica 2** Gameserver optimal auf deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen im **ZAP-Hosting** Panel herausholst.

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle notwendigen Seiten zur Verwaltung deines Servers. Die Optionen zur Steuerung deines Servers sind im Folgenden detailliert aufgelistet.

### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Verwaltung. Hier werden alle grundlegenden und wichtigen Informationen zu deinem Service übersichtlich dargestellt. Dazu gehören zum Beispiel Angaben zum Serverstandort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Map und der Anzahl verfügbarer Slots. Außerdem wird die Auslastung von CPU, Speicher und RAM angezeigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

Im Dashboard hast du außerdem die Möglichkeit, deinen Service zu starten, zu stoppen oder neu zu starten, um die volle Kontrolle über den Betrieb zu haben. Zudem kannst du auf die Live-Konsole zugreifen, um Echtzeitinformationen zum Serverzustand zu erhalten und bei Bedarf direkt einzugreifen.

### Statistiken

Unter **Statistiken** erhältst du eine umfassende Übersicht über die Auslastungswerte deines Servers. Dort findest du Informationen zu verschiedenen Aspekten wie der Auslastung der verfügbaren Slots, der CPU und des Speichers. Du kannst diese Daten für unterschiedliche Zeiträume einsehen, zum Beispiel für die letzten **60 Minuten, 24 Stunden, 3 Tage, 7 Tage** oder **30 Tage**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dank dieser Informationen bekommst du einen guten Einblick in die Nutzung deines Servers. Zusätzlich helfen diese Statistiken oft dabei, mögliche Performance-Probleme zu erkennen und deren Ursachen einzugrenzen. So kannst du zum Beispiel nachvollziehen, wann die Auslastung angestiegen ist und ob dies mit bestimmten Ereignissen oder Änderungen zusammenhängt. Das ist besonders wichtig, wenn plötzlich Probleme auftreten, da du so gezielt Maßnahmen zur Fehlerbehebung ergreifen und mögliche Ursachen systematisch analysieren kannst.

### DDoS Manager

Sieh dir vergangene DDoS-Angriffe an, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Angriffe auf deinen Server, damit du bei einem Vorfall schnell reagieren kannst.

Je nach Serverstandort und dort verfügbarem DDoS-Schutz kannst du aktive Angriffe auch in Echtzeit überwachen. Dazu gehören detaillierte Traffic-Einblicke, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Abwehrsystemen blockiert wird. Dieses Maß an Transparenz hilft dir zu verstehen, wie der Schutz funktioniert, und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS Manager Zugriff fehlt
Die Nutzung des DDoS Managers erfordert entweder eine eigene IP-Adresse oder die Zusatzoption `DDoS Manager Übersicht`. Wenn dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution DDoS Manager Voraussetzung
Die Nutzung des DDoS Managers ist nur möglich, wenn entweder eine eigene IP-Adresse oder die Option `DDoS Manager Übersicht` als Zusatzoption gebucht wurde. Fehlen diese Komponenten in deinem aktuellen Paket, kannst du sie jederzeit durch ein Upgrade hinzufügen.
:::

### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher über die Ursache? Eine erste mögliche Lösungsstrategie ist das Prüfen der **Logdateien**. Diese Dateien enthalten viele Informationen zum Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Gerade Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft lassen sich Schwierigkeiten durch einen gezielten Blick in die Logdateien aufdecken und beheben.

:::caution Hilfe bei Logdateien benötigt
Die dort gefundenen Informationen helfen dir nicht weiter oder du verstehst sie nicht? In diesem Fall kannst du ein **[Ticket](https://zap-hosting.com/en/customer/support/)** erstellen und dein Problem schildern. Der Support ist täglich erreichbar und kann dir bei der weiteren Analyse helfen.
:::

### Ereignisprotokoll

Das **Ereignisprotokoll** bietet dir eine umfassende Übersicht über alle Aktivitäten rund um die Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live-Konsole

Die **Live-Konsole** bietet dir eine Echtzeitansicht aller aktuellen Ereignisse auf deinem Server. Hier siehst du Informationen zu den Aktivitäten der Spieler sowie mögliche Fehlermeldungen und Systemnachrichten. Diese Übersicht ermöglicht dir, einen umfassenden Blick darauf zu bekommen, was auf deinem Server passiert, und mögliche Probleme frühzeitig zu erkennen.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Neben der Überwachung der Ereignisse kannst du in der **Live-Konsole** auch direkt Befehle an den Server senden. Das ist nützlich, um Einstellungen anzupassen, bestimmte Aktionen auszuführen oder schnell auf auftretende Probleme zu reagieren.

### Serviceunterbrechungen

Dein Server war zeitweise offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Hinweise geliefert? Es könnte sein, dass die Ursache nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server läuft.

Wenn das Monitoring-System eine allgemeine Unterbrechung erkennt, werden Techniker automatisch benachrichtigt und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Unterbrechungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Weitere Informationen und die aktuelle Version des Service-Status findest du auf der [Statusseite](https://status.zap-hosting.com/).

## Einstellungen

Im Bereich **Einstellungen** findest du alle notwendigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Serverkonfiguration sind im Folgenden detailliert aufgelistet.

### Einstellungen

Unter **Einstellungen** findest du eine Übersicht der gängigsten Einstellungsoptionen für deinen Server. Diese beinhalten auch eine kurze Erklärung. Die Nutzung der Einstellungsseite wird besonders Einsteigern in die Serververwaltung empfohlen.

Wenn du sicherer bist und präzisere Änderungen vornehmen möchtest, empfiehlt sich stattdessen die Nutzung des Config Editors. Mehr Informationen dazu findest du in der Kategorie **Configs**.

### Configs

Der Config-Datei-Editor ermöglicht dir, die Konfigurationsdateien direkt über die Webseite auf klassische Weise ohne vereinfachte Ansicht zu bearbeiten. Diese Option erlaubt es dir, die Einstellungen deines Servers individuell anzupassen und nach deinen persönlichen Vorlieben zu konfigurieren.

Durch die Nutzung des Editors erhältst du direkten Zugriff auf alle verfügbaren Optionen und kannst diese präzise anpassen. Das ist besonders für fortgeschrittene Nutzer sinnvoll, die volle Kontrolle über ihre Servereinstellungen haben und genau wissen, welche Änderungen sie vornehmen wollen.

:::caution Config-Werte können überschrieben werden
Hast du bemerkt, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen möchtest, musst du die entsprechenden Optionen auf der Einstellungsseite zuerst deaktivieren.
:::

### Spiele

Unter **Spiele** hast du jederzeit die Möglichkeit, die Spielvariante deines bestehenden Spiels zu ändern oder generell ein anderes Spiel zu installieren. Spiele mit dem gleichen Slot-Preis können direkt unter **Verfügbare Spiele** ausgewählt werden. Für alle anderen Spiele ist vorher eine Anpassung des Slot-Preises erforderlich. Mehr Informationen dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versionen

Unter **Versionen** kannst du die aktuelle Version deines Gameservers einsehen und verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, damit dein Server immer auf dem neuesten Stand bleibt.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigungsfunktion für automatische Updates aktivieren, um über Updates informiert zu bleiben und sicherzustellen, dass du immer auf dem Laufenden bist.

### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabentypen sind unter anderem das Starten, Stoppen oder Neustarten von Diensten, Neustart des Servers bei Online-Status, Erstellen von Backups oder Ausführen von benutzerdefinierten Befehlen.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustartplaner

Möchtest du Serverneustarts zu bestimmten Zeiten planen? Der Neustartplaner ermöglicht dir, automatische Neustarts deines Gameservers zeitgesteuert einzurichten. Mit dieser Funktion kannst du Neustarts zu bestimmten Uhrzeiten oder in regelmäßigen Abständen festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS-Einstellungen

Mit den ZAP DNS-Einstellungen kannst du dir leicht merkbare Adressen für deinen Service erstellen. Du kannst entweder eine Subdomain einer der verfügbaren Domains nutzen oder einen DNS-Eintrag auf deiner eigenen Domain anlegen und so eine Adresse haben, die besser mit deinem Projekt assoziiert werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

Im Bereich **Tools** deines Navigationspanels findest du verschiedene Unterpunkte, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden erhältst du eine detaillierte Einführung in diese Bereiche.

### FTP-Browser

Mit dem **FTP-Browser** erhältst du alle nötigen Informationen, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir direkten Zugriff auf die Dateien deines Gameservers. Für die optimale Nutzung empfiehlt sich ein externes FTP-Programm wie [FileZilla](https://filezilla-project.org/) oder [WinSCP](https://winscp.net/eng/index.php). Wenn du noch nicht mit FTP vertraut bist, kann dir ein Blick in die [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung weiterhelfen.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla ist einer der einfachsten und bekanntesten FTP-Clients. Nach der Installation kannst du es starten und deine Zugangsdaten in der oberen Leiste mit den im Panel angezeigten Credentials eingeben. Nach einem schnellen Klick auf Verbinden bist du direkt auf dem Server eingeloggt und kannst die Dateien verwalten.

**WinSCP:** WinSCP ist primär für SCP und SFTP gedacht, kann aber auch Standard-FTP-Verbindungen handhaben. Das Programm ist etwas umfangreicher als FileZilla und daher oft besser für fortgeschrittene Nutzer geeignet.

### Datenbanken

Neben Gameserver-Produkten stehen auch 10 inklusive Datenbanken zur Verfügung. Diese Datenbanken werden zum Beispiel benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

Unter **Backups** kannst du sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank erstellen. So kannst du deine Daten im Falle von Problemen oder Datenverlust leichter wiederherstellen.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob dies täglich oder wöchentlich geschehen soll. Zusätzlich kannst du entscheiden, ob bei Bedarf die ältesten Backups gelöscht werden sollen, zum Beispiel wenn der verfügbare Speicherplatz knapp wird.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Standardmäßig stehen für Gameserver-Produkte 10 GB Speicherplatz auf dem Speicher-Server für Backups zur Verfügung. Wenn du mehr Speicherplatz benötigst, kann dieser kostenpflichtig erweitert werden. So stellst du sicher, dass du immer genug Platz für deine Backups hast und bei Bedarf auch auf ältere Backups zugreifen kannst.

## Weitere Links

Im Bereich **Weitere Links** findest du zusätzliche Verweise, die für dein Produkt relevant sind.

### Häufig gestellte Fragen

Der Bereich **Häufig gestellte Fragen** bietet eine Übersicht der am häufigsten gestellten Fragen von Kunden. Hier findest du hilfreiche Antworten und detaillierte Informationen zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation

Für die Produkte steht eine umfangreiche Dokumentation zur Verfügung, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dient. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Die **News** bieten dir eine umfassende Übersicht aller Ankündigungen und Neuigkeiten rund um deinen Service. Hier findest du wichtige Informationen zu verschiedenen Aspekten wie:

- Änderungen am Service, zum Beispiel durch Updates oder neue Features
- Ankündigungen zu möglichen Wartungen oder technischen Problemen
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bieten
- Weitere relevante Informationen, die für die Nutzung deines Services wichtig sein können

Wenn du die **News** regelmäßig prüfst, bleibst du informiert und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server herauszuholen.

<InlineVoucher />

## Conclusion

Du hast jetzt einen vollständigen Überblick über die wichtigsten Bereiche des **Subnautica 2** Dashboards und weißt, wo du die zentrale Verwaltung, Konfiguration, Tools und Informationsseiten im **ZAP-Hosting** Panel findest.

Congratulations, you have successfully learned how to use the Subnautica 2 dashboard. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂