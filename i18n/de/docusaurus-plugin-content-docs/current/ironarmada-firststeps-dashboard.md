---
id: ironarmada-firststeps-dashboard
title: "Iron Armada: Dashboard-Übersicht"
description: "Entdecke, wie du deinen Iron Armada Server effizient verwaltest und seine Features optimal auf deine Bedürfnisse anpasst → Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
  - gameserver-ironarmada
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **Iron Armada Gameserver** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller notwendigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Aber keine Sorge, wir geben dir unten eine detaillierte Einführung in die Verwaltung deines Services, damit du den bestmöglichen Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Server ganz easy effizient verwalten und findest alle nötigen Optionen und Features schnell und unkompliziert. Hier bekommst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **Iron Armada Gameserver** optimal auf deine Bedürfnisse angepasst ist und du das Maximum aus den verfügbaren Optionen rausholst.

<InlineVoucher />

## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle notwendigen Seiten zur Verwaltung deines Servers. Die Optionen zur Steuerung deines Servers sind unten detailliert aufgelistet. 



### Dashboard

Das **Dashboard** deines Servers ist das Herzstück der Administration. Hier werden alle grundlegenden und wichtigen Infos zu deinem Service übersichtlich dargestellt. Dazu gehören zum Beispiel Angaben zum Serverstandort, Status, IP: Port, genutztem Speicher, laufendem Spiel, Servername, Map und die Anzahl der verfügbaren Slots. Außerdem wird die Auslastung von CPU, Speicher und RAM angezeigt.

![img](https://screensaver01.zap-hosting.com/index.php/s/HLLSQgRkgpEPg3o/preview)

Im Dashboard kannst du deinen Service auch starten, stoppen oder neu starten, um die volle Kontrolle über den Betrieb zu haben. Außerdem hast du Zugriff auf die Live-Konsole, um Echtzeit-Infos zum Serverstatus zu erhalten und bei Bedarf direkt einzugreifen.






### DDoS-Manager


Sieh dir vergangene DDoS-Angriffe an, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Angriffe auf deinen Server, um schnell reagieren zu können, wenn ein Vorfall auftritt.

Je nach Serverstandort und dort verfügbarem DDoS-Schutz kannst du aktive Angriffe auch in Echtzeit überwachen. Das beinhaltet detaillierte Traffic-Einblicke, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Schutzsystemen blockiert wird. Dieses Maß an Transparenz hilft dir zu verstehen, wie der Schutz funktioniert, und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS-Manager-Zugang fehlt?
Die Nutzung des DDoS-Managers erfordert entweder eine eigene IP-Adresse oder die Zusatzoption „DDoS Manager Übersicht“. Wenn dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
Die Nutzung des DDoS-Managers ist nur möglich, wenn entweder eine eigene IP-Adresse oder die Option „DDoS Manager Übersicht“ als Zusatzoption gebucht wurde. Fehlen diese Komponenten in deinem aktuellen Paket, kannst du sie jederzeit durch ein Upgrade hinzufügen.
:::



### Logdateien

Tritt ein technisches Problem auf und du bist dir unsicher, woran es liegt? Eine erste mögliche Lösungsstrategie ist der Blick in die **Logdateien**. Diese Dateien enthalten viele Infos zum Server, wie aktuelle Ereignisse, Hinweise oder Fehlermeldungen.

Gerade Fehlermeldungen können helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oft lassen sich Schwierigkeiten durch einen gezielten Blick in die Logdateien aufdecken und beheben.

:::warning
Die dort gefundenen Infos helfen dir nicht oder du verstehst sie nicht? Kein Stress! In dem Fall sind wir auch täglich im Support für dich da. Erstelle einfach ein **[Ticket](https://zap-hosting.com/en/customer/support/)** und schildere uns dein Problem. Wir schauen uns das so schnell wie möglich an und helfen dir, das Problem zu lösen! :)
:::


### Ereignisprotokoll

Das **Ereignisprotokoll** gibt dir einen umfassenden Überblick über alle Aktivitäten rund um die Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist, sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![img](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Serviceunterbrechungen

Dein Server war zeitweise offline und du kannst dir nicht erklären warum? Ein Blick ins Ereignisprotokoll und die Logdateien hat auch keine Infos geliefert? Es könnte sein, dass die Ursache nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server läuft.

Wenn unser Monitoring-System eine allgemeine Unterbrechung erkennt, werden unsere Techniker automatisch benachrichtigt und kümmern sich so schnell wie möglich um das Problem.

In diesem Bereich findest du eine Übersicht über die Unterbrechungshistorie des Hostsystems, auf dem dein Gameserver-Service läuft. Mehr Infos und die aktuelle Version unseres Service-Status findest du auf unserer neuen [Statusseite](https://status.zap-hosting.com/).












## Einstellungen

Im Bereich **Einstellungen** findest du alle notwendigen Seiten zur Konfiguration deines Servers. Die verfügbaren Optionen zur Serverkonfiguration sind unten detailliert aufgelistet.



### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängigsten Einstellungsmöglichkeiten für deinen Server. Diese beinhalten auch eine kurze Erklärung. Die Nutzung der Einstellungsseite ist besonders für Einsteiger in die Serververwaltung zu empfehlen.

Wenn du dich sicherer fühlst und genauere Änderungen vornehmen möchtest, empfehlen wir dir stattdessen den Config Editor zu nutzen. Mehr Infos dazu findest du in der Kategorie **Configs**.



### Configs

Der Config-Datei-Editor ermöglicht dir, die Konfigurationsdateien direkt auf der Webseite klassisch zu bearbeiten, ohne die vereinfachte Ansicht. Mit dieser Option kannst du die Einstellungen deines Servers individuell anpassen und nach deinen persönlichen Vorlieben konfigurieren.

Durch die Nutzung des Editors hast du direkten Zugriff auf alle verfügbaren Optionen und kannst diese präzise anpassen. Das ist besonders praktisch für fortgeschrittene User, die volle Kontrolle über ihre Servereinstellungen wollen und genau wissen, welche Änderungen sie vornehmen möchten.

:::warning
Hast du bemerkt, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionswerte von der Einstellungsseite übernommen werden. Wenn du diese Änderungen direkt in der Config vornehmen möchtest, musst du die entsprechenden Optionen auf der Einstellungsseite zuerst deaktivieren.
:::


### Spiele

Unter **Games** hast du jederzeit die Möglichkeit, die Spielvariante deines bestehenden Spiels zu ändern oder generell ein anderes Spiel zu installieren. Spiele mit dem gleichen Slot-Preis können direkt unter **Verfügbare Spiele** ausgewählt werden. Für alle anderen Spiele ist vorher eine Anpassung des Slot-Preises erforderlich. Mehr Infos dazu findest du in der [Game Change](gameserver-gameswitch.md) Anleitung.

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versionen

Unter **Versionen** kannst du die aktuelle Version deines Gameservers einsehen und verwalten. Hier kannst du jederzeit auf die neueste Version updaten oder automatische Updates aktivieren, damit dein Server immer auf dem neuesten Stand ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Außerdem kannst du die E-Mail-Benachrichtigung für automatische Updates aktivieren, um über Updates informiert zu bleiben und immer up-to-date zu sein.



### Geplante Aufgaben

Erstelle geplante Aufgaben, die automatisch zu definierten Zeiten ausgeführt werden, um verschiedene Prozesse auf deinem Server zu automatisieren. Du kannst einstellen, ob eine Aufgabe einmalig oder wiederholt ausgeführt werden soll. Unterstützte Aufgabenarten sind z.B. das Starten, Stoppen oder Neustarten von Services, Neustart des Servers, wenn er online ist, Backups erstellen oder benutzerdefinierte Befehle ausführen. 

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Neustart-Planer

Willst du Serverneustarts zu bestimmten Zeiten planen? Der Neustart-Planer ermöglicht dir, automatische Neustarts deines Gameservers zeitgesteuert einzurichten. Mit dieser Funktion kannst du Neustarts zu festen Zeiten oder in regelmäßigen Abständen festlegen.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)



## Tools

Im Bereich **Tools** deines Navigationspanels findest du verschiedene Unterpunkte, die dir bei der Verwaltung deines Servers helfen. Dazu gehören **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden erhältst du eine detaillierte Einführung in diese Bereiche.



### FTP-Browser

Mit dem **FTP-Browser** bekommst du alle nötigen Infos, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir direkten Zugriff auf die Dateien deines Gameservers. Für die optimale Nutzung empfehlen wir ein externes FTP-Programm wie **Filezilla** oder **WinSCP**. Wenn du noch nicht vertraut mit FTP bist, empfehlen wir dir einen Blick in unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung, die dir weiterhelfen kann.

![img](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:**  FileZilla ist wohl der einfachste und bekannteste FTP-Client. Einfach installieren, starten und in der oberen Leiste deine Zugangsdaten eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem schnellen Klick auf „Verbinden“ bist du direkt am Server angemeldet und kannst die Dateien verwalten.

**WinSCP:**  WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Varianten des Dateiübertragungsprotokolls FTP) gedacht, kann aber genauso gut mit normalem FTP umgehen. Das Programm ist etwas umfangreicher als FileZilla und eignet sich eher für fortgeschrittene User.



### Datenbanken

Neben unseren Gameserver-Produkten bieten wir auch 10 inklusive Datenbanken an. Diese Datenbanken werden z.B. benötigt, wenn Daten in einer Datenbank gespeichert werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Außerdem hast du die Möglichkeit, die Backup-Option zu aktivieren und bestehende Datenbank-Backups zu importieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Backups

Unter **Backups** kannst du sowohl manuelle als auch automatische Backups für deinen Server und die zugehörige Datenbank erstellen. So kannst du deine Daten im Falle von Problemen oder Datenverlust leichter wiederherstellen.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob dies täglich oder wöchentlich geschehen soll. Zusätzlich kannst du entscheiden, ob die ältesten Backups bei Bedarf gelöscht werden sollen, z.B. wenn der verfügbare Speicherplatz knapp wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Für unsere Gameserver-Produkte stellen wir standardmäßig 10 GB Speicherplatz auf dem Speicher-Server für Backups bereit. Wenn du mehr Speicherplatz brauchst, kann dieser kostenpflichtig erweitert werden. So stellst du sicher, dass du immer genug Platz für deine Backups hast und bei Bedarf auch auf ältere Backups zugreifen kannst.

## Weitere Links
Im Bereich **Weitere Links** findest du zusätzliche Links, die für dein Produkt relevant sind. 

### Häufig gestellte Fragen
Der Bereich **Häufig gestellte Fragen** bietet dir eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Infos zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation
Wir bieten umfangreiche Dokumentationen zu unseren Produkten, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News
Die **News** geben dir einen umfassenden Überblick über alle Ankündigungen und Neuigkeiten rund um deinen Service. Hier findest du wichtige Infos zu verschiedenen Aspekten wie:

- Änderungen am Service z.B. durch Updates oder neue Features
- Ankündigungen zu möglichen Wartungen oder technischen Problemen
- Sonderangebote und Aktionen, die dir exklusive Vorteile oder Rabatte bieten
- Weitere relevante Infos, die für die Nutzung deines Services wichtig sein können

Wenn du die **News** regelmäßig checkst, bleibst du immer auf dem Laufenden und kannst deinen Service entsprechend anpassen, um das Beste aus deinem Server rauszuholen.

<InlineVoucher />