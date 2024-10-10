---
id: deadlock-firststeps-connect
title: "Deadlock: Zum Server verbinden"
description: Informationen darüber, wie man sich mit einem Deadlock Server von ZAP-Hosting verbindet - ZAP-Hosting.com Dokumentation
sidebar_label: Zum Server verbinden
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du möchtest dich mit deinem GameXY-Server verbinden, bist dir aber unsicher, wie das genau geht und was es zu beachten gibt? Kein Grund zur Sorge! Wir zeigen dir hier, wie du ganz entspannt den Weg auf deinen Server findest und was du dabei im Hinterkopf behalten solltest.

<InlineVoucher />



## Server Informationen

Um die Verbindung zu deinem Server herzustellen, benötigst du die IP-Adresse und den Port. Diese Informationen kannst du im Dashboard deiner Gameserver Verwaltung einsehen und kopieren.

![img](https://screensaver01.zap-hosting.com/index.php/s/LEieX839x8TJ8Cd/download)



## Verbindung herstellen

Deadlock unterstützt derzeit noch keine Form von Serverlisten, weshalb eine Verbindung zu deinem Server nur über die Entwicklerkonsole möglich ist. Die Tastenbelegung hierfür ist standardmäßig die Taste **F7**. Öffnen diese und führe den folgenden Befehl mit deinen eigenen Serverinformationen aus: 

```
connect <ip-addresse:port>
```

Nach Ausführung des Befehls wird die Verbindung zum Server hergestellt und die Konsole kann wieder geschlossen werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/Mdm4w6eGQg7ng8c/download)



## Mögliche Probleme und Lösungsansätze

Der Verbindungsaufbau klappt nicht so wie erwartet? Es kann in gewissen Situationen vorkommen, dass der Verbindungsaufbau durch ein technisches Problem fehlschlägt. Wir haben dir im Folgenden die bekanntesten Probleme und dazu gehörigen Lösungsansätze aufgelistet: 

### Nicht sichtbar

Eine fehlende Sichtbarkeit des Servers kann dann vorliegen, wenn die Initialisierung aus einem bestimmten Grund nicht erfolgreich abgeschlossen wurde. Das kann beispielsweise durch eine fehlerhafte Konfiguration oder beschädigten Dateien liegen. Weitere Informationen lassen sich in der Regel in der Server-Konsole oder den Log-Dateien nachvollziehen.



Die genannten Lösungsansätze haben dein Problem noch nicht gelöst oder treffen in deinem Fall nicht zu? In dem Fall stehen wir dir auch im Support täglich zur Verfügung. Erstelle dazu einfach ein **[Ticket](https://zap-hosting.com/de/customer/support/)** und erläutere uns dein Problem. Wir werden uns dies dann so schnell wie möglich anschauen und dir bei der Lösung des Problems entsprechend weiterhelfen! 🙂