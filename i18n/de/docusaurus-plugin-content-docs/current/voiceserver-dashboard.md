---
id: voiceserver-dashboard
title: "Voiceserver: Dashboard Übersicht"
description: Informationen über das Dashboard eines Voiceserver-Produkts von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Dashboard
services:
  - Voiceserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Du bist an einer **Voiceserver** interessiert oder besitzt bereits eine, doch dir fehlt noch ein umfassender Überblick über die Verwaltung und die Auffindbarkeit aller notwendigen Optionen? Gerade zu Beginn kann dies eine Herausforderung darstellen. Aber keine Sorge, im Folgenden bieten wir dir eine ausführliche Einführung zur Verwaltung deiner Voiceserver, damit du den optimalen Durchblick hast.

Nachdem du diese Anleitung durchgegangen bist, wirst du problemlos in der Lage sein, deine Voiceserver effizient zu verwalten und alle erforderlichen Optionen sowie Features zügig und unkompliziert zu finden. Hier erhältst du einen strukturierten Überblick, der dir Schritt für Schritt hilft, dich mit der Voiceserververwaltung vertraut zu machen und dein Wissen gezielt zu erweitern. So kannst du sicherstellen, dass deine **Voiceserver** optimal auf deine Bedürfnisse abgestimmt ist und du das Beste aus den vorhandenen Möglichkeiten herausholst.



## Produktverwaltung

In dem Abschnitt **Produkt Administration** wirst du alle notwendigen Seiten finden, die für die Verwaltung deines Voiceservers notwendig sind. Die Möglichkeiten, wie du deinen Voiceserver verwalten kannst, werden dir im folgenden detailliert aufgelistet.




### Dashboard

Das Dashboard liefert eine zentrale Übersicht über alle wichtigen Informationen zum Voiceserver. Angezeigt werden unter anderem der aktuelle Status, die Serveradresse, der Servername, die Anzahl der verbundenen Nutzer sowie das gesetzte Serverpasswort. Zusätzlich stehen weitere Details zur Verfügung, die bei der Verwaltung und Überwachung des Servers unterstützen.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZryFnMckWetXbTx/preview)

### Statistiken

Die Statistikseite zeigt Auswertungen zur Nutzung des Servers. Es lässt sich beispielsweise erkennen, wie viele Nutzer sich in den letzten Minuten oder Tagen mit dem Server verbunden haben. Damit aussagekräftige Daten angezeigt werden können, muss der Server für eine gewisse Zeit aktiv gewesen sein. Erst nach ausreichend gesammelten Informationen stehen die Statistiken vollständig zur Verfügung.

![img](https://screensaver01.zap-hosting.com/index.php/s/zYcyRdeHfaHqXt9/preview)



### DDoS Manager

Zeige dir vergangene DDoS-Angriffe an, um potenzielle Bedrohungen und Muster besser einschätzen zu können. Aktiviere Benachrichtigungen über laufende DDoS-Angriffe auf deinen Server, um schnell zu reagieren, wenn ein Vorfall eintritt.

Je nach Serverstandort und dem dort zur Verfügung stehenden DDoS-Schutz kannst du auch aktive Angriffe in Echtzeit überwachen. Dazu gehören detaillierte Einblicke in den Datenverkehr, die sowohl den legitimen Datenverkehr als auch die Menge des von den Schutzsystemen blockierten Datenverkehrs anzeigen. Dieses Maß an Transparenz hilft dir zu verstehen, wie der Schutz funktioniert und ermöglicht es dir, potenzielle Risiken frühzeitig zu erkennen.

:::info DDoS Manager Zugang fehlt?
Die Nutzung des DDoS Managers erfordert die Zusatzoption "DDoS Manager Overview". Wenn dein aktuelles Paket diese Komponenten nicht enthält, dann kannst du es jederzeit durch ein Upgrade deines Dienstes hinzufügen.
:::



![img](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Ereignislog

Die Ereignislog bietet eine umfassende Übersicht über alle Aktivitäten im Zusammenhang mit der Serververwaltung. Es lässt sich jederzeit nachvollziehen, wann der Server gestartet oder gestoppt wurde, ob ein Absturz aufgetreten ist oder wann ein Update, ein Backup oder eine Neuinstallation durchgeführt wurde. Diese Protokollfunktion unterstützt dabei, Änderungen und Ereignisse lückenlos zu dokumentieren und mögliche Fehlerquellen schneller zu erkennen.

![img](https://screensaver01.zap-hosting.com/index.php/s/DRFJR6pnL5XRLa5/preview)



## Produktverwaltung

In dem Abschnitt **Produkt Administration** wirst du alle notwendigen Seiten finden, die für die Verwaltung deines Voiceservers notwendig sind. Die Möglichkeiten, wie du deine Voiceserver verwalten kannst, werden dir im folgenden detailliert aufgelistet.

### Einstellungen

Der Servername und die Willkommensnachricht lassen sich unabhängig von einer aktiven Verbindung zum Server bearbeiten. Zusätzlich können Einstellungen für automatische Bans angepasst werden, etwa bei Fehlversuchen beim Login oder wiederholtem Fehlverhalten. Alle vorgenommenen Änderungen werden sofort nach dem Speichern wirksam.

![img](https://screensaver01.zap-hosting.com/index.php/s/B6W4ftB6TPGms8K/preview)



### Berechtigungsschlüssel

Für bestimmte Berechtigungen auf dem TeamSpeak-Server wird ein sogenannter Privilege Key erforderlich. Dieser Schlüssel, auch als Token bezeichnet, wird direkt auf dem Server eingegeben und gewährt Zugriff auf festgelegte Rechteebenen. Solche Schlüssel lassen sich erstellen, verwalten und bei Bedarf wieder entfernen.

![img](https://screensaver01.zap-hosting.com/index.php/s/6MjdtBmP7BbQ9cZ/preview)



### Benutzer

Alle TeamSpeak 3 Nutzer, die aktuell mit dem Server verbunden sind oder in der Vergangenheit verbunden waren, werden übersichtlich aufgelistet. Es besteht die Möglichkeit, Nutzer vom Server zu entfernen oder dauerhaft zu sperren.

![img](https://screensaver01.zap-hosting.com/index.php/s/N8J8ApX5HWEgnYR/preview)



### TSDNS Einträge

Das ZAP TSDNS-Modul ermöglicht die Erstellung eigener Verbindungsadressen für den TeamSpeak-Server. Solche TS-DNS-Aliase lassen sich entweder als SubVoiceserver auf einer von ZAP bereitgestellten Voiceserver oder auf einer eigenen Voiceserver einrichten, die über das Webinterface verwaltet wird. Bei der Nutzung eines solchen Alias ist es nicht mehr erforderlich, den Port beim Verbinden anzugeben, da die Adresse direkt zum Server führt.

![img](https://screensaver01.zap-hosting.com/index.php/s/c26gTpzprpky54H/preview)



## Tools

Der Bereich mit Tools bietet verschiedene Funktionen zur Verwaltung des Servers. Dazu gehört unter anderem die Möglichkeit, Backups in Form von Snapshots zu erstellen.

### Snapshots

Backups des TeamSpeak 3 Servers ermöglichen eine vollständige Sicherung des aktuellen Serverzustands. Dabei werden alle bestehenden Channels, registrierten Benutzer sowie sämtliche Berechtigungen zuverlässig gespeichert. Diese Snapshots bieten eine effektive Möglichkeit, den Server bei Bedarf auf einen vorherigen Stand zurückzusetzen. Zum Beispiel nach Änderungen an der Struktur oder ungewollten Konfigurationsfehlern.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyT2q647ENeEZNA/preview)



## Weiterführende Links
Der Bereich mit weiterführenden Links enthält zusätzliche Verknüpfungen, die für die Nutzung und Verwaltung des Produkts von Bedeutung sind. Diese können unter anderem auf Dokumentationen, Tools oder externe Ressourcen verweisen, die im Zusammenhang mit dem jeweiligen Dienst stehen.

### Fragen und Antworten
Der Bereich **Fragen und Antworten** bietet einen Überblick über die am häufigsten gestellten Fragen unserer Kunden. Hier findest du hilfreiche Antworten und detaillierte Informationen zu verschiedenen Themen, um dir schnell und effizient zu helfen.

### ZAP-Hosting Dokumentation

Wir bieten eine umfangreiche Dokumentation zu unseren Produkten an, die als Wissensdatenbank für die am häufigsten gestellten Fragen und Anliegen dient. Dort findest du zahlreiche Anleitungen und Hilfestellungen zu verschiedenen Themen, die dir bei der Nutzung und Verwaltung deines Produktes unterstützen.

![](https://screensaver01.zap-hosting.com/index.php/s/a9ccomokEwYfPbo/preview)