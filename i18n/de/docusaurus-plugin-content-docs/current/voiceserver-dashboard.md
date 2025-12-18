---
id: voiceserver-dashboard
title: "Voiceserver: Dashboard Übersicht"
description: "Entdecke, wie du deinen Voiceserver effizient verwaltest und optimierst – mit einer klaren Übersicht zu Features und Administration → Jetzt mehr erfahren"
sidebar_label: Dashboard
services:
  - voiceserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du interessierst dich für einen **Voiceserver** oder besitzt bereits einen, hast aber noch keinen umfassenden Überblick über die Administration und die Auffindbarkeit aller nötigen Optionen? Gerade am Anfang kann das eine Herausforderung sein. Keine Sorge, wir geben dir weiter unten eine ausführliche Einführung in die Verwaltung deines Services, damit du den bestmöglichen Überblick bekommst.

Nach dem Durcharbeiten dieser Anleitung kannst du deinen Voiceserver ganz easy effizient verwalten und findest alle wichtigen Optionen und Features schnell und unkompliziert. Hier bekommst du eine strukturierte Übersicht, die dir Schritt für Schritt hilft, dich mit der Voiceserver-Administration vertraut zu machen und dein Wissen gezielt zu erweitern. So stellst du sicher, dass dein **Voiceserver** optimal auf deine Bedürfnisse eingestellt ist und du das Maximum aus den verfügbaren Optionen rausholst.



## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle nötigen Seiten zur Verwaltung deines Voiceservers. Die Optionen zur Steuerung deines Voiceservers sind unten detailliert aufgelistet.



### Dashboard

Das Dashboard bietet dir eine zentrale Übersicht aller wichtigen Infos rund um den Voiceserver. Es zeigt den aktuellen Status, die Serveradresse, den Servernamen, die Anzahl der verbundenen Nutzer und das konfigurierte Serverpasswort an. Weitere Details unterstützen dich bei der effektiven Verwaltung und Überwachung des Servers.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZryFnMckWetXbTx/preview)

### Statistiken

Die Statistik-Seite gibt dir Einblicke in die Nutzung des Servers. Zum Beispiel siehst du, wie viele Nutzer sich in den letzten Minuten oder Tagen mit dem Server verbunden haben. Damit aussagekräftige Daten angezeigt werden, muss der Server eine gewisse Zeit gelaufen sein. Statistiken stehen erst zur Verfügung, wenn genügend Informationen gesammelt wurden.

![img](https://screensaver01.zap-hosting.com/index.php/s/zYcyRdeHfaHqXt9/preview)



### DDoS-Manager

Hier kannst du vergangene DDoS-Angriffe einsehen, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen für laufende DDoS-Attacken auf deinen Server, um bei einem Vorfall schnell reagieren zu können.

Je nach Serverstandort und dort verfügbarem DDoS-Schutz kannst du auch aktive Angriffe in Echtzeit überwachen. Das beinhaltet detaillierte Traffic-Einblicke, die sowohl legitimen Traffic als auch die Menge an Traffic zeigen, die von den Schutzsystemen geblockt wird. Diese Transparenz hilft dir zu verstehen, wie der Schutz funktioniert und ermöglicht dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS-Manager Zugriff fehlt?
Die Nutzung des DDoS-Managers erfordert die Zusatzoption „DDoS Manager Übersicht“. Falls dein aktuelles Paket diese Komponenten nicht enthält, kannst du sie jederzeit durch ein Upgrade deines Services hinzufügen.
:::



![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Ereignisprotokoll

Das Ereignisprotokoll bietet eine umfassende Übersicht aller Aktivitäten rund um die Serververwaltung. Du kannst jederzeit nachvollziehen, wann der Server gestartet oder gestoppt wurde, ob ein Crash aufgetreten ist oder wann Updates, Backups oder Neuinstallationen durchgeführt wurden. Diese Protokollfunktion sorgt für eine lückenlose Dokumentation von Änderungen und Ereignissen und unterstützt dich dabei, potenzielle Probleme schneller zu identifizieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/DRFJR6pnL5XRLa5/preview)



## Produktverwaltung

Im Bereich **Produktverwaltung** findest du alle nötigen Seiten zur Verwaltung deines Voiceservers. Die Optionen zur Steuerung deines Voiceservers sind unten detailliert aufgelistet.

### Einstellungen

Der Servername und die Willkommensnachricht können geändert werden, ohne direkt mit dem Server verbunden zu sein. Einstellungen für automatische Banns lassen sich ebenfalls anpassen, zum Beispiel als Reaktion auf fehlgeschlagene Login-Versuche oder wiederholtes Fehlverhalten. Alle Änderungen werden sofort nach dem Klick auf Speichern wirksam.

![img](https://screensaver01.zap-hosting.com/index.php/s/B6W4ftB6TPGms8K/preview)



### Privilege Keys

Um bestimmte Berechtigungen auf dem TeamSpeak-Server zu erhalten, wird ein Privilege Key benötigt. Dieser Schlüssel, auch Token genannt, wird direkt auf dem Server eingegeben und gewährt Zugriff auf vordefinierte Berechtigungsstufen. Diese Keys können bei Bedarf erstellt, verwaltet und entfernt werden.

![img](https://screenserver01.zap-hosting.com/index.php/s/6MjdtBmP7BbQ9cZ/preview)



### Nutzer

Alle TeamSpeak 3 Nutzer, die aktuell mit dem Server verbunden sind oder es zuvor waren, werden übersichtlich aufgelistet. Es ist möglich, Nutzer vom Server zu entfernen oder dauerhaft zu bannen.

![img](https://screensaver01.zap-hosting.com/index.php/s/N8J8ApX5HWEgnYR/preview)



### TSDNS

Das ZAP TSDNS-Modul ermöglicht die Erstellung eigener Verbindungsadressen für den TeamSpeak-Server. TS DNS-Aliase können als Subdomains auf einer von ZAP bereitgestellten Domain oder auf deiner eigenen, über das Webinterface gehosteten Domain eingerichtet werden. Beim Verbinden über so einen Alias muss der Port nicht mehr manuell eingegeben werden, da die Adresse automatisch zum richtigen Server führt.

![img](https://screensaver01.zap-hosting.com/index.php/s/c26gTpzprpky54H/preview)



## Tools

Der Tools-Bereich bietet verschiedene Funktionen zur Serververwaltung. Eine davon ist die Möglichkeit, Backups in Form von Snapshots zu erstellen.

### Snapshots

Backups des TeamSpeak 3 Servers erlauben eine komplette Momentaufnahme des aktuellen Serverzustands. Alle bestehenden Channels, registrierten Nutzer und Berechtigungseinstellungen werden zuverlässig gesichert. Diese Snapshots bieten eine effektive Möglichkeit, den Server bei Bedarf auf einen früheren Zustand zurückzusetzen – zum Beispiel nach strukturellen Änderungen oder versehentlichen Konfigurationsfehlern.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyT2q647ENeEZNA/preview)





## Weitere Links
Der Bereich mit weiteren Links bietet zusätzliche Verweise, die für die Nutzung und Verwaltung des Produkts relevant sind. Dazu gehören Dokumentationen, Tools oder externe Ressourcen zum jeweiligen Service.

### Häufig gestellte Fragen
Der Bereich **Häufig gestellte Fragen** bietet eine Übersicht der am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Infos zu verschiedenen Themen, die dir schnell und effizient weiterhelfen.

### ZAP-Hosting Dokumentation
Wir bieten umfangreiche Dokumentationen zu unseren Produkten, die als Wissensdatenbank für die häufigsten Fragen und Anliegen dienen. Dort findest du verschiedene Anleitungen und Hilfen zu unterschiedlichen Themen, die dich bei der Nutzung und Verwaltung deines Produkts unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)


<InlineVoucher />