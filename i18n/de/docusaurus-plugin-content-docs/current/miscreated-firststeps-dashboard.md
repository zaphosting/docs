---
id: miscreated-firststeps-dashboard
title: "Miscreated: Dashboard Übersicht"
description: Informationen zum Dashboard eines Miscreated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Dashboard
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du bist an einem **Miscreated Server** interessiert oder besitzt bereits einen, doch dir fehlt noch ein umfassender Überblick über die Verwaltung und die Auffindbarkeit aller notwendigen Optionen? Gerade zu Beginn kann dies eine Herausforderung darstellen. Aber keine Sorge, im Folgenden bieten wir dir eine ausführliche Einführung zur Verwaltung deines Dienstes, damit du den optimalen Durchblick hast.

Nachdem du diese Anleitung durchgegangen bist, wirst du problemlos in der Lage sein, deinen Server effizient zu verwalten und alle erforderlichen Optionen sowie Features zügig und unkompliziert zu finden. Hier erhältst du einen strukturierten Überblick, der dir Schritt für Schritt hilft, dich mit der Serververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So kannst du sicherstellen, dass dein **Miscreated Server** optimal auf deine Bedürfnisse abgestimmt ist und du das Beste aus den vorhandenen Möglichkeiten herausholst.

<YouTube videoId="KnH6vIX9Zr4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/wcMxWLndA5N46MK/preview" title="Setup Miscreated server in just a MINUTE!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Produktverwaltung

In dem Abschnitt **Produkt Administration** wirst du alle notwendigen Seiten finden, die für die Verwaltung deines Servers notwendig sind. Die Möglichkeiten, wie du deinen Server verwalten kannst, werden dir im folgenden detailliert aufgelistet. 




### Dashboard

Das **Dashboard** deines Servers stellt das Herzstück für die Verwaltung dar. Hier werden alle grundlegenden und essenziellen Informationen zu deinem Dienst übersichtlich präsentiert. Dazu zählen beispielsweise Angaben zum Standort, Status, IP:Port, genutzter Speicherplatz, aktuell laufendes Spiel, Servername, Karte und die Anzahl der verfügbaren Slots. Zudem werden auch die Auslastungen der CPU, des Arbeitsspeichers und des RAM dargestellt.

![img](https://screensaver01.zap-hosting.com/index.php/s/QoMyo5ZEZzPtwAr/preview)

Im Dashboard hast du außerdem die Möglichkeit, deinen Dienst zu starten, zu stoppen oder neu zu starten, um so die volle Kontrolle über dessen Betrieb zu haben. Weiterhin kannst du die Live-Konsole aufrufen, um Echtzeitinformationen über den Serverzustand zu erhalten und gegebenenfalls direkte Eingriffe vorzunehmen.











### DDoS Manager

Der **DDoS-Manager** ermöglicht es dir, vergangene Attacken einzusehen und dadurch einen besseren Überblick für potenzielle Bedrohungen zu erhalten. Zusätzlich hast du die Option, Benachrichtigungen für laufende DDoS-Angriffe auf deinem Server zu aktivieren, um schnell auf solche Vorfälle reagieren zu können.

![img](https://screensaver01.zap-hosting.com/index.php/s/m5DJq2WFa97r7Sf/preview)

Darüber hinaus kannst du den Schutz anpassen, sofern du eine eigene IP-Adresse gebucht hast. Dabei stehen dir zwei verschiedene Optionen zur Verfügung:

- **Sensor Mode:** In diesem Modus ist der Schutz scharf geschaltet, jedoch inaktiv. Sobald ein Angriff erkannt wird, wird der Schutz aktiviert und filtert den Angriff, um die Stabilität deines Servers zu gewährleisten.
- **Permanent:** Bei dieser Einstellung ist der Schutz dauerhaft aktiv und scharf geschaltet. Alle eingehenden Angriffe werden kontinuierlich gefiltert, um dein System vor möglichen DDoS-Angriffen zu schützen. (Nur empfehlenswert bei regelmäßigen Angriffen)

Mit diesen Anpassungsmöglichkeiten kannst du den DDoS-Schutz individuell auf deine Bedürfnisse abstimmen und somit die Sicherheit deines Servers erhöhen.

:::warning
Die Verwendung des DDoS-Managers ist ausschließlich möglich, wenn entweder eine eigene IP-Adresse oder die Option "DDoS-Manager-Übersicht" zusätzlich gebucht wurde. Falls diese Komponenten in deinem aktuellen Paket fehlen, kannst du sie jederzeit nachträglich durch ein Upgrade hinzufügen.
:::



### Log-Dateien

Tritt ein technisches Problem auf und du bist unsicher über dessen Ursache? Eine erste mögliche Lösungsstrategie besteht darin, die **Log-Dateien** zu überprüfen. In diesen Dateien sind zahlreiche Informationen über den Server enthalten, wie beispielsweise aktuelle Geschehnisse, Hinweise oder Fehlermeldungen.

Insbesondere Fehlermeldungen können dabei helfen, die Ursache eines Problems zu identifizieren und besser zu verstehen. Oftmals lassen sich Schwierigkeiten durch einen gezielten Blick in die Log-Dateien aufdecken und beheben. 

:::warning
Die dort zu findenden Informationen helfen nicht weiter oder du verstehst diese nicht? Keine Sorge! In dem Fall stehen wir dir auch im Support täglich zur Verfügung. Erstelle dazu einfach ein **[Ticket](https://zap-hosting.com/de/customer/support/)** und erläutere uns dein Problem. Wir werden uns dies dann so schnell wie möglich anschauen und dir bei der Lösung des Problems entsprechend weiterhelfen! :)
:::


### Ereignislog

Die **Ereignislog** bietet dir einen umfassenden Überblick über sämtliche Aktivitäten im Zusammenhang mit der Serververwaltung. Hier kannst du jederzeit nachvollziehen, wann ein Server gestartet, gestoppt oder abgestürzt ist, sowie wann Updates, Backups oder Neuinstallationen durchgeführt wurden.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sya5d9aJMw25xwZ/preview)





### Störungen

Dein Server war zeitweise offline und du kannst dir nicht erklären, warum? Ein Blick in die Ereignislog und Log-Dateien hat ebenfalls keine Aufschlüsse gegeben? Es könnte sein, dass die Ursache des Problems nicht direkt bei deinem Server liegt, sondern beim Hostsystem, auf dem dein Server betrieben wird.

Wenn unser Monitoring System eine allgemeine Störung erkennt, werden unsere Techniker automatisch benachrichtigt und kümmern sich schnellstmöglich um die Behebung des Problems.

In diesem Bereich findest du eine Übersicht über die Störungshistorie des Hostsystems, auf dem dein Gameserver-Dienst betrieben wird. Weitere Informationen und die aktuellere Version unseres Dienststatus findest du über unsere neue [Status Seite](https://status.zap-hosting.com/). 












## Einstellungen

In dem Abschnitt **Einstellungen** wirst du alle notwendigen Seiten finden, die für die Konfiguration deines Servers notwendig sind. Die verfügbaren Möglichkeiten, wie du deinen Server konfigurieren kannst, werden dir im folgenden detailliert aufgelistet. 


### Einstellungen

Unter den Einstellungen findest du eine Übersicht der gängingsten Einstellungsoptionen zu deinem Server. Diese beinhalten ebenfalls jeweils eine kurze Erläutern. Die Nutzung der Einstellungsseite ist gerade für Neulinge in der Serververwaltung empfehlenswert. 

Solltest du dir doch mehr zutrauen und präzisere Änderungen vornehmen wollen, so empfehlen wir stattdessen den Config-Editor zu verwenden. Mehr dazu findest du unter der Kategorie **Configs**.



### Configs

Der Editor für die Config-Dateien ermöglicht dir, die Konfigurationsdateien direkt über die Webseite auf klassische Weise, also ohne vereinfachte Ansicht, zu bearbeiten. Mit dieser Option kannst du die Einstellungen deines Servers individuell anpassen und nach deinen persönlichen Wünschen konfigurieren.

Durch die Verwendung des Editors erhältst du direkten Zugriff auf alle verfügbaren Optionen und kannst diese präzise anpassen. Dies ist besonders nützlich für fortgeschrittene Benutzer, die eine umfassende Kontrolle über ihre Servereinstellungen wünschen und genau wissen, welche Änderungen sie vornehmen möchten.

:::warning
Hast du festgestellt, dass einige deiner Änderungen teilweise überschrieben werden? Bitte beachte, dass bestimmte Optionenwerte von der Einstellungsseite herangezogen werden. Wenn du diese Änderungen direkt in der Config vornehmen möchtest, solltest du zuerst die betreffenden Optionen auf der Einstellungsseite deaktivieren.
:::


### Spiele

Unter **Spiele** hast du jederzeit die Möglichkeit die Spielvariante deines bestehenden Spiels zu verändern oder generell ein anderes Spiel zu installieren.  Spiele die den gleichen Slotpreis beinhalten kannst du direkt unter **Verfügbare Spiele** auswählen. Für alle weiteren Spiele wird zunächst eine Anpassung des Slotpreises benötigt. Mehr dazu findest du in der [Spielwechsel](gameserver-gameswitch.md) Anleitung. 

![img](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Versionen

Unter **Versionen** hast du die Möglichkeit, die aktuelle Version deines Spielservers einzusehen und zu verwalten. Hier kannst du jederzeit auf die neueste Version aktualisieren oder automatische Updates aktivieren, um sicherzustellen, dass dein Server immer auf dem neuesten Stand ist.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZJpECn6qFDE96E5/preview)

Darüber hinaus kannst du auch die E-Mail-Benachrichtigungsfunktion für automatische Updates aktivieren, um dich über Aktualisierungen zu informieren und sicherzustellen, dass du immer auf dem neuesten Stand bist. 



### Restart Planer

Du möchtest deinen Server zu bestimmten Uhrzeiten neu starten? Der Restart-Planer ermöglicht dir, geplante automatische Neustarts deines Gameservers einzurichten. Mit dieser Funktion kannst du Neustarts zu bestimmten Zeiten oder in regelmäßigen Intervallen einstellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/k4k9TJTcP9WYx6n/preview)



## Werkzeuge

Im Abschnitt **Werkzeuge** deines Navigationspanels findest du eine Reihe von Unterpunkten, die dir bei der Verwaltung deines Servers helfen. Dazu zählen **FTP-Browser**, **Datenbanken** und **Backups**. Im Folgenden erhältst du eine detaillierte Einführung zu diesen verschiedenen Bereichen.



### FTP-Browser

Über den **FTP-Browser** erhältst du alle erforderlichen Informationen, um eine Verbindung zum FTP-Zugang herzustellen. Der FTP-Zugang ermöglicht dir einen direkten Zugriff auf die Dateien deines Gameservers. Wir empfehlen die Verwendung eines externen FTP-Programms wie **Filezilla** oder **WinSCP** für eine optimale Nutzung. Wenn du nicht weißt, wie man FTP verwendet, dann kann dir ein Blick in die folgende [Anleitung](gameserver-ftpaccess.md) weiterhelfen.

![img](https://screensaver01.zap-hosting.com/index.php/s/aXjfGiX48Yqzy75/preview)

**FileZilla:**  FileZilla ist der wohl einfachste und bekannteste FTP-Client. Einfach installieren, starten und in der oberen Leiste deine Zugangsdaten eingeben, die du auf dieser Seite etwas weiter oben findest. Nach einem schnellen Klick auf "Verbinden" bist du direkt am Server angemeldet und kannst die Dateien verwalten.

**WinSCP:**  WinSCP ist eigentlich für SCP und SFTP (die verschlüsselten Abkömmlinge des Dateiübertragungsprotokolls FTP) gedacht, kann aber genau so gut mit dem normalen FTP umgehen. Das Programm ist etwas umfangreicher als FileZilla und eignet sich eher für fortgeschrittene User.



### Datenbanken

Zu unseren Gameserver Produkten bieten wir auch 10 Datenbanken inklusive an. Diese sind beispielsweise dann notwendig, wenn Daten in einer Datenbank hinterlegt werden müssen. Unter **Datenbanken** kannst du eine Datenbank anlegen und die Zugangsdaten einsehen. Ebenfalls hast du dort auch die Möglichkeit die Backup Option zu aktivieren und bestehende Datenbank Backups zu importieren. 

![img](https://screensaver01.zap-hosting.com/index.php/s/HmHnWKoMKx2XSsc/preview)



### Backups

Unter **Backups** hast du die Möglichkeit, sowohl manuelle als auch automatische Sicherungen für deinen Server und die zugehörige Datenbank zu erstellen. Dies erleichtert die Wiederherstellung deiner Daten im Falle eines Problems oder Datenverlustes.

In den Einstellungen kannst du festlegen, ob Backups automatisch erstellt werden sollen und ob dies täglich oder wöchentlich geschehen soll. Zudem kannst du entscheiden, ob die ältesten Backups bei Bedarf gelöscht werden sollen, etwa wenn der verfügbare Speicherplatz knapp wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/MpqkKaQrLowFxqQ/preview)

Wir stellen für unsere Gameserver Produkte standardmäßig 10 GB Speicherplatz auf dem Storage Server für Backups zur Verfügung. Solltest du mehr Speicherplatz benötigen, so kann dieser kostenpflichtig per Upgrade erweitert werden. So stellst du sicher, dass du stets genügend Platz für deine Backups hast und bei Bedarf auf ältere Backups zugreifen kannst.

## Weiterführende Links
In dem Abschnitt **Weiterführende Links** findest du weitere Links, die für dein Produkt relevant sind. 

### Fragen und Antworten
Der Bereich **Fragen und Antworten** bietet einen Überblick über die am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Informationen zu verschiedenen Themen, um dir schnell und effizient zu helfen.

### ZAP-Hosting Dokumentation

Wir bieten eine umfangreiche Dokumentation zu unseren Produkten an, die als Wissensdatenbank für die am häufigsten gestellten Fragen und Anliegen dient. Dort findest du zahlreiche Anleitungen und Hilfestellungen zu verschiedenen Themen, die dir bei der Nutzung und Verwaltung deines Produktes unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/a9ccomokEwYfPbo/preview)

### News

Die **News** bieten dir eine umfassende Übersicht über sämtliche Ankündigungen und Neuigkeiten in Bezug auf deinen Dienst. Hier findest du wichtige Informationen zu verschiedenen Aspekten, wie etwa:

- Veränderungen des Dienstes beispielsweise durch Updates oder neuen Funktionen
- Ankündigungen zu möglichen Wartungsarbeiten oder technischen Problemen
- Spezielle Angebote und Aktionen, die dir exklusive Vorteile oder Rabatte bieten
- Sonstige relevante Informationen, die für die Nutzung deines Dienstes von Bedeutung sein könnten

Durch regelmäßiges Überprüfen der **News** bleibst du stets informiert und kannst dein Dienst entsprechend anpassen, um das Beste aus deinem Server herauszuholen.